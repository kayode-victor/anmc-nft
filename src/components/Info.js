import React, { useState } from "react";
import { motion } from "framer-motion";

const infos = [
  {
    title: "SECTION A: Short introduction",
    message: `We are excited to invite dynamic professionals and industry leaders to share their expertise at our upcoming event. As we delve into topics spanning healthcare, logistics and travel, gaming, agriculture, real estate, fintech, event ticketing, airline and hospitality, entrepreneurship, small-medium scale businesses, web3 gaming, and the education sector, we are seeking engaging speakers to enrich our discussions and inspire our audience.`,
  },
  {
    title: "SECTION B: Speaker Qualification",
    message: `We are looking for speakers who possess deep knowledge, extensive experience, and innovative insights in their respective fields. Ideal candidates will have:
Expertise: Demonstrated expertise and thought leadership in the specific industry or subtopic.
Experience: Proven track record of success and accomplishments in relevant areas.
Innovation: Pioneering initiatives, technologies, or methodologies that have made a significant impact.
Communication Skills: Strong ability to articulate ideas clearly, engage the audience, and facilitate meaningful discussions.
Diversity: Commitment to diversity, equity, and inclusion, bringing unique perspectives and voices to the conversation.`,
  },
  {
    title: "SECTION C: Benefits of Being a Speaker",
    message: `Visibility: As a speaker, you have the unparalleled opportunity to showcase your expertise and elevate your professional profile in front of a diverse audience. Your presentation will position you as a subject matter expert, allowing you to establish credibility and gain recognition within your industry.

Access to VVIP Event Pass: As a speaker at our event, you'll receive exclusive access to the VVIP section, allowing you to network with other industry leaders, engage in high-level discussions, and enjoy premium amenities throughout the event.

Earn NFT Certificate as a Global Web3 Speaker: By participating as a speaker, you'll be recognized as a global thought leader in the web3 space and receive a unique NFT certificate commemorating your contribution to the event. This certificate serves as a digital badge of honor, showcasing your expertise and dedication to advancing the industry.

Networking: Connect with fellow industry experts, thought leaders, and potential collaborators or partners. Engage in meaningful conversations, exchange ideas, and build relationships that can lead to future collaborations, business opportunities, or career advancements.

Access to 10% If Your Brand Is Exhibiting: As a speaker, you'll enjoy a special discount of 10% if your brand chooses to exhibit at the event. This presents a valuable opportunity to showcase your products or services to a targeted audience, increase brand visibility, and generate new business opportunities.

Learning Opportunity: Participating as a speaker provides you with a valuable learning opportunity. Engage in stimulating discussions, gain new perspectives, and stay updated on industry trends and developments. Interacting with other speakers and attendees can broaden your knowledge base and enrich your understanding of the latest innovations and best practices.

Access to Accommodation Cover for Three Days: We understand the importance of convenience and comfort during your participation in our event. That's why we provide accommodation coverage for three days, ensuring you have a hassle-free experience and can focus on delivering impactful presentations and networking with fellow attendees.

Access to Investors After Party: As a speaker, you'll have the exclusive opportunity to attend our investors after party, where you can mingle with potential investors, industry insiders, and key decision-makers in a relaxed and informal setting. This presents a prime opportunity to pitch your ideas, forge valuable connections, and explore potential investment opportunities for your projects or ventures.

Access to Present ANM Award to Participant: As a distinguished speaker, you'll have the honor of presenting the prestigious ANM Award to outstanding participants at the event. This not only highlights your leadership and influence within the industry but also allows you to recognize and celebrate the achievements of your peers, fostering a sense of community and collaboration within the ecosystem.`,
  },
  {
    title: "SECTION D: Topic Selection",
    message: `1. "Healthcare Transformation: Blockchain Solutions for Secure Patient Data Management"
2. "Logistics and Travel Optimization: Implementing Blockchain for Efficient Supply Chain Operations"
3. "Enhanced Gaming Experiences: Integrating VR/AR-XR Technologies for Immersive Gameplay"
4. "Agricultural Innovation: AI and Blockchain for Sustainable Farming Practices"
5. "Real Estate Revolution: NFTs Redefining Property Ownership and Investment Opportunities"
6. "Fintech Advancements: Harnessing Blockchain for Seamless Financial Transactions"
7. "Event Ticketing Revolution: Web3 Platforms for Scalable and Secure Access"
8. "Airline and Hospitality Industry Evolution: Embracing Metaverse for Enhanced Guest Services"
9. "Entrepreneurship Empowerment: Blockchain Opportunities for Startups and Innovators"
10. "Supporting SMEs: Fintech Solutions for Growth and Accessibility"
11. "Web3 Gaming Communities: NFT Integration for Inclusive and Engaging Platforms"
12. "Education Sector Innovation: VR/AR-XR Technologies Enhancing Learning Experiences"
13. "Blockchain Solutions for Healthcare Data Privacy and Security"
14. "Streamlining Travel Logistics: Blockchain-Enabled Supply Chain Management"
15. "Next-Level Gaming: Exploring VR/AR-XR Integration for Immersive Gameplay"
16. "Sustainable Agriculture Practices: AI and Blockchain for Efficient Resource Management"
17. "NFTs in Real Estate Transactions: Revolutionizing Property Ownership"
18. "Financial Inclusion through Fintech: Democratizing Access to Financial Services"
19. "Web3 Ticketing Platforms: Improving Event Access and Security"
20. "Metaverse Hospitality: Transforming Guest Experiences in Airlines and Hotels"
21. "Empowering Entrepreneurs: Blockchain Applications for Business Growth"
22. "Fintech Solutions for Small and Medium-Sized Enterprises (SMEs)"
23. "Innovative Gaming Communities: NFT Integration for Collaborative Experiences"
24. "VR/AR-XR in Education: Enhancing Student Engagement and Learning Outcomes"
25. "Blockchain for Healthcare Records: Improving Data Accessibility and Integrity"
26. "Efficient Travel Management: Implementing Blockchain in Logistics"
27. "Immersive Gaming Technologies: VR/AR-XR Enhancing Interactive Experiences"
28. "Blockchain-enabled Agriculture: Optimizing Crop Production and Distribution"
29. "Digital Transformation in Real Estate: NFTs Facilitating Property Transactions"
30. "Fintech Innovations for Event Ticketing: Web3 Platforms for Seamless Access"
31. "Hospitality Industry in the Metaverse: Enhancing Guest Services with Virtual Reality"
32. "Supporting Startup Ecosystems: Entrepreneurship Opportunities in Blockchain"
33. "Fintech Solutions for Small Business Financing and Payments"
34. "Community Building in Web3 Gaming: NFTs Fostering Inclusive Platforms"
35. "Augmented Learning Environments: VR/AR-XR Integration in Education"
36. "Blockchain-based Healthcare Systems: Enhancing Patient Care and Record Keeping"
37. "Supply Chain Transparency: Blockchain Tracking in Logistics and Travel"
38. "Immersive Gaming Experiences: VR/AR-XR Technologies Pushing Boundaries"
39. "Smart Farming with AI and Blockchain: Improving Agricultural Productivity"
40. "Tokenized Real Estate Assets: NFTs Redefining Property Investment"
41. "Digital Banking Solutions: Fintech for Seamless Financial Transactions"
42. "Secure Ticketing Solutions: Blockchain for Fraud Prevention in Events"
43. "Metaverse Experiences in Airline and Hospitality: Redefining Travel"
44. "Blockchain Opportunities for Startup Growth and Development"
45. "Fintech Support for Small and Medium Enterprises: Access to Capital and Services"
46. "NFT Integration for Engaging Web3 Gaming Communities"
47. "Virtual Reality in Education: Transforming Learning Environments"
48. "Blockchain-driven Healthcare Innovations: Improving Patient Outcomes"
49. "Logistics and Travel Efficiency: Blockchain Integration for Seamless Operations"
50. "Immersive Gaming Futures: Exploring VR/AR-XR Potential for Entertainment"`,
  },
  {
    title: "SECTION E: Process of selection",
    message: `First Phase: Registration
We ask for basic information to process your application.

Phase Two: Evaluation
In this phase, speakers will undergo a thorough evaluation process to ensure the selection of the most qualified individuals. The evaluation criteria are as follows:
 
1. Topic Relevance: Speakers must select a topic from the options provided in section D of the conference agenda. The chosen topic should align with their expertise and the overall theme of the event.
 
2. Content Quality: Speakers are required to prepare a comprehensive PowerPoint presentation consisting of 7 pages. The presentation should be well-organized, informative, and engaging, providing valuable insights and information to the audience.
 
3. Video Introduction: Each speaker must submit a 5-minute video introducing themselves and their field/brand. The video serves as an opportunity for speakers to showcase their communication skills, passion for their subject matter, and credibility within their industry.
 
4. Digital Identity (NFT): Speakers are requested to attach a digital identity in the form of a non-fungible token (NFT) to their submission. The NFT serves as a unique digital asset representing the speaker's identity and contribution to the event.
 
5. Digital Username: Speakers are required to choose a digital username that will be used to represent them throughout the event. This username should not be associated with their given name and should instead reflect their brand or field of expertise.
 
The evaluation committee will assess each submission based on these criteria to ensure the selection of speakers who can deliver high-quality presentations and contribute valuable insights to the conference. Selected speakers will be notified of their acceptance and provided with further instructions for participation in the event.
 
Phase Three: Interview and confirmation
 The evaluation will schedule an introduction to confirm speaker ability.
 
Phase Four: Public announcement.
`,
  },
];

const Info = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Initially no item is expanded

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };
  return (
    <main className="lg:my-16 my-10">
      <div className="flex flex-col gap-5 mx-4 md:mx-10">
        {infos.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.1, duration: 0.5 },
            }}
            viewport={{ once: true }}
            key={index}
            className=""
          >
            <div
              className="flex w-[360px] bg-[#5E54EF] text-white hover:animate-pulse hover:text-[#5E54EF] hover:bg-white font-bold px-5 py-2 text-md border border-[#5E54EF] rounded-md"
              onClick={() => handleClick(index)}
            >
              {item.title}
            </div>
            <div
              className={`bg-[#EFEEFD] text-[#5E54EF] font-semibold text-lg  duration-700 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-full  my-5 p-2" : "max-h-0"
              }`}
            >
              {item.message.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Info;
