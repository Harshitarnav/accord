import bg1 from '../vapt/vapt.jpg';  // Reusing bg1 as the ebook image as well
import ebook from './vapt-ebook.png';  // Reusing bg1 as the ebook image as well
import soc_1 from '../../soc_1.png';
import soc_2 from '../../soc_2.png';
import soc_3 from '../../soc_3.png';
import csae from '../../csae.png';
import soc_cyber from '../../soc_cyber.png';

// Import all images from the 'clients' folder
const imagesList = require.context('./clients', false, /\.(png|jpe?g|svg)$/);
const images = imagesList.keys().map((image) => imagesList(image));

const vapt = {
    bg: bg1,
    heading: "VAPT (Vulnerability Assessment and Penetration Testing)",
    headline: "Accorp Partners - Mastering Security through VAPT Excellence",
    features: [
      {
        name: "Uncover Weaknesses",
        images: [bg1]
      },
      {
        name: "Fortify Defenses",
        images: [bg1]
      },
      {
        name: "Your Shield Against Cyber Threats",
        images: [bg1]
      }
    ],
    menuItems: [
        {
            title: 'INFORMATION GATHERING',
            content: [
                "Collecting relevant data about target systems, networks, or applications, including infrastructure, technology stack, and vulnerabilities."
            ]
        },
        {
            title: 'PLANNING & ANALYSIS',
            content: [
                "Creating a comprehensive plan for vulnerability assessment and penetration testing, defining goals, methodologies, timelines, and resources."
            ]
        },
        {
            title: 'VULNERABILITY ASSESSMENT',
            content: [
                "Systematic evaluation of target systems to identify vulnerabilities, misconfigurations, or weaknesses using automated scanning tools and manual techniques."
            ]
        },
        {
            title: 'PENETRATION TESTING',
            content: [
                "Simulating real-world attacks to exploit identified vulnerabilities, testing security controls, and assessing the organization's response to potential attacks."
            ]
        },
        {
            title: 'REPORTING',
            content: [
                "Documenting assessment and testing findings in a detailed report, highlighting vulnerabilities, severity, potential impact, and recommended mitigation measures to improve security posture."
            ]
        }
    ],
    ebook: {
        title: "VAPT E-BOOK!",
        description: "Vulnerability Assessment and Penetration Testing (VAPT) is a process used to identify, assess, and mitigate vulnerabilities in computer systems. The goal of VAPT is to reduce the amount of potential security risks by identifying and addressing them. VAPT is often performed by security specialists who use an array of tools and methods to evaluate the system for possible vulnerabilities. After potential vulnerabilities are found, the testers will attempt to exploit them to determine if they can gain access to the system. If the exploitation is successful, the tester will work with the development team to fix the found vulnerability.",
        image: ebook,
        downloadLink: "/path/to/vapt-ebook"  // Replace with the actual download link
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
            title: "Network VAPT",
            description: "Comprehensive assessment of network infrastructure to identify vulnerabilities and strengthen defenses against potential cyber threats.",
            images: [soc_1]
        },
        {
            title: "Web Application VAPT",
            description: "In-depth evaluation of web applications to uncover vulnerabilities that could be exploited by attackers, ensuring robust security for online platforms.",
            images: [soc_2]
        },
        {
            title: "Mobile App VAPT",
            description: "Rigorous testing of mobile applications across platforms to identify weaknesses, enhance data protection, and ensure a secure user experience.",
            images: [soc_3]
        },
        {
            title: "Cloud Infrastructure VAPT",
            description: "Thorough analysis of cloud environments and services to detect vulnerabilities and ensure the security of data and applications hosted in the cloud.",
            images: [csae]
        },
        {
            title: "Wireless Network VAPT",
            description: "Assessment of wireless networks to pinpoint vulnerabilities in wireless communication protocols and prevent unauthorized access.",
            images: [soc_cyber]
        },
        {
            title: "Physical Security VAPT",
            description: "Evaluation of physical security measures, including access controls, surveillance systems, and more, to ensure protection against physical threats.",
            images: [soc_1]
        },
        {
            title: "PCI DSS Compliance",
            description: "Assessment and guidance to help businesses achieve Payment Card Industry Data Security Standard (PCI DSS) compliance, ensuring secure handling of payment card information.",
            images: [soc_2]
        }
    ],
    images: images  // Add more images if necessary
};

export default vapt;
