// components/Header.js
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../public/anmc-logo.png";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const navlinks = [
  { label: "home", link: "/" },
  { label: "events", link: "/events" },
  { label: "about", link: "/about" },
  { label: "tickets", link: "/tickets" },
];

function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky-header flex bg-white py-2  px-8 lg:px-24 items-center justify-between">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex">
          <Image src={Logo} alt="Anmc logo" width={50} height={50} />
        </div>
        {/* Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex space-x-16">
          {navlinks.map((item) => (
            <Link key={item.label} href={item.link}>
              <div
                className={`capitalize text-sm cursor-pointer font-light hover:text-blue-600 hover:underline underline-offset-4 decoration-[1px] ${
                  pathname === item?.link && "text-blue-600 underline"
                }`}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </nav>
        {/* register button (Hidden on Mobile) */}
        <div className="hidden md:flex uppercase text-white bg-black text-sm font-light py-2 px-4 rounded-lg hover:bg-blue-600">
          <Link href="/register">register</Link>
        </div>
        {/* Mobile section*/}
        {/* Mobile menu toggle */}
        <div className="md:hidden items-end">
          <IoMenuOutline
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div
          className={`md:hidden fixed top-0 right-0 h-full bg-white z-50 transition-all border-l-2 duration-500 ${
            isMenuOpen ? "w-2/3" : "w-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <IoCloseOutline
            className="text-3xl my-4 mx-4 cursor-pointer"
            onClick={toggleMenu}
          />
          <div className="flex flex-col tex my-8 mx-8 cursor-pointer gap-8">
            {navlinks.map((item) => (
              <Link key={item.label} href={item.link}>
                <div
                  className={`capitalize text-xl font-medium cursor-pointer hover:text-blue-600 hover:underline underline-offset-4 decoration-[1px] ${
                    pathname === item?.link && "text-blue-600 underline"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
            <div className="flex justify-center uppercase text-white bg-black text-lg font-light mt-8 py-2 px-2 rounded-lg hover:bg-blue-600">
              <Link href="/register">register</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
