import bg1 from '../gdpr/gdpr.jpg';  // Replace with the appropriate background image
import ebook from './gdpr-ebook.png'; 
import soc_1 from '../../soc_1.png';
import soc_2 from '../../soc_2.png';
import soc_3 from '../../soc_3.png';
import csae from '../../csae.png';
import soc_cyber from '../../soc_cyber.png';
import peer_review from '../../peer_review.png';
import cpa from '../../cpa.jpeg';
import competitive_costing from '../../competitive_costing.jpeg';
import hrt from '../../hrt.png';

// Import all images from the 'clients' folder
const imagesList = require.context('./clients', false, /\.(png|jpe?g|svg)$/);
const images = imagesList.keys().map((image) => imagesList(image));

const gdpr = {
    bg: bg1,
    heading: "GDPR Compliance",
    headline: "Empowering Your Data Protection Journey with Accorp Partners' Comprehensive Expertise.",
    features: [
      {
        name: "Customized for US Business Landscape",
        images: [bg1]
      },
      {
        name: "Cross-Border Data Management",
        images: [bg1]
      },
      {
        name: "Global Operations Support",
        images: [bg1]
      },
      {
        name: "Legal and Regulatory Alignment",
        images: [bg1]
      },
      {
        name: "Data Security Enhancement",
        images: [bg1]
      },
      {
        name: "Expert Advisory",
        images: [bg1]
      }
    ],
    menuItems: [
        {
            title: 'GDPR Compliance Toolkit',
            content: [
                "Accorp's comprehensive collection of GDPR controls, pre-made policies, and customizable control options simplify and streamline the compliance process."
            ]
        },
        {
            title: 'Data Security Policies',
            content: [
                "Accorp's information security policies are aligned with GDPR requirements, enabling you to efficiently address the creation of new policies on your checklist."
            ]
        },
        {
            title: 'Cross-Reference Frameworks',
            content: [
                "Maximize efficiency by utilizing controls from overlapping frameworks to reduce redundant efforts in your GDPR compliance journey."
            ]
        },
        {
            title: 'Vendor Oversight',
            content: [
                "Efficiently handle vendors through a centralized hub for storing, sending, and evaluating security questionnaires within the Accorp platform."
            ]
        },
        {
            title: 'Visibility into Security Position',
            content: [
                "Access all frameworks within Accorp's Dashboard to monitor your progress and status conveniently, at any given moment."
            ]
        },
        {
            title: 'Instant Compliance Guidance',
            content: [
                "Accorp's platform provides real-time assistance to address any queries about the platform or GRC processes, offering prompt support."
            ]
        }
    ],
    ebook: {
        title: "GDPR E-BOOK",
        description: "This document sets out the main provisions of the data protection regime in the United Kingdom and how it applies to businesses and organizations. It covers the UK General Data Protection Regulation (UK GDPR), tailored by the Data Protection Act 2018. The principles, rights, and obligations under data protection law are explained herein. Additionally, key points and frequently asked questions are summarized, and there are practical checklists to help comply with the law.",
        image: ebook,
        downloadLink: "/path/to/gdpr-ebook"  // Replace with the actual download link
    },
    stats: [
        {
            name: "700+ Trusted Clients",
            images: [bg1]
        },
        {
            name: "7+ Awards",
            images: [bg1]
        },
        {
            name: "34+ Years of Experience",
            images: [bg1]
        },
        {
            name: "115+ Experts",
            images: [bg1]
        }
    ],
    options: [
        {
            title: "EU GDPR (General Data Protection Regulation)",
            description: "The European Union's GDPR is a comprehensive data protection regulation that governs how personal data is collected, processed, and stored within the EU member states. It ensures that individuals have control over their personal data and requires organizations to implement strong data protection measures and transparency.",
            images: [soc_1]
        },
        {
            title: "UK GDPR",
            description: "The United Kingdom's GDPR is a version of the EU GDPR that has been incorporated into UK law post-Brexit. It mirrors the EU GDPR's principles and requirements, with some specific adjustments to suit the UK's legal framework. Organizations operating within the UK must comply with the UK GDPR for processing personal data of individuals within the UK.",
            images: [soc_2]
        }
    ],
    images: images  // Add more images if necessary
};

export default gdpr;
