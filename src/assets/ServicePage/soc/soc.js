// servicePageData.js
import soc_1 from '../../soc_1.png';
import soc_2 from '../../soc_2.png';
import soc_3 from '../../soc_3.png';
import csae from '../../csae.png';
import soc_cyber from '../../soc_cyber.png';
import bg1 from '../soc/soc6.jpg';
import ebook from './soc-ebook.webp';  // Reusing bg1 as the ebook image as well

// Import all images from the 'clients' folder
const imagesList = require.context('./clients', false, /\.(png|jpe?g|svg)$/);
const images = imagesList.keys().map((image) => imagesList(image));

const soc = {
    bg: bg1,
    heading: "SOC 2 / SOC 1",
    headline: "Elevate Trust with SOC 2 Compliance. Enhance your organization's credibility and security with Accorp Partners' expert guidance in SOC 2 reporting, as well as SOC 1 audit.",
    features: [
      {
        name: "California Registered CPA",
        images: [bg1]  // Replace with actual images
      },
      {
        name: "Peer review registered",
        images: [bg1]  // Replace with actual images
      },
      {
        name: "Cost Competitiveness",
        images: [bg1]  // Replace with actual images
      },
      {
        name: "Best in industry report quality",
        images: [bg1]  // Replace with actual images
      },
      {
        name: "PCAOB registered",
        images: [bg1]  // Replace with actual images
      },
      {
        name: "AICPA registered",
        images: [bg1]  // Replace with actual images
      },
      {
        name: "Overall Customer Experience",
        images: [bg1]  // Replace with actual images
      }
    ],
    menuItems: [
        {
            title: 'PHASE-1: Project Initiation and Planning',
            content: [
                'Kickstart the SOC services and SOC 1 audit project with an inception meeting and define clear objectives, milestones, and deliverables.'
            ]
        },
        {
            title: 'PHASE-2: Objective Analysis and Solution Tailoring',
            content: [
                'Thoroughly analyze objectives, leverage SOC 2 Type 1 expertise, and provide tailored solutions for addressing gaps in SOC 1 audit.'
            ]
        },
        {
            title: 'PHASE-3: Control Design and Documentation',
            content: [
                'Design controls aligned with objectives and meticulously document the soc auditor control framework.'
            ]
        },
        {
            title: 'PHASE-4: Rigorous Testing and Issue Log Generation',
            content: [
                'Execute stringent control testing as part of the SOC 1 audit and SOC services project and generate a comprehensive issue log to ensure thorough assessment and remediation of security controls.'
            ]
        },
        {
            title: 'PHASE-5: Report Generation and Finalization',
            content: [
                'Transition from draft to final SOC report, ensuring accuracy and comprehensive coverage.'
            ]
        },
        {
            title: 'PHASE-6: Ongoing Monitoring and Compliance Maintenance',
            content: [
                'Offer continuous vigilance and guidance, sustaining compliance excellence in SOC 1 audit.'
            ]
        }
    ],
    ebook: {
        title: "BUILD TRUST WITH SOC auditor!",
        description: "In today's tech-driven landscape, businesses often rely on vendors for specialized tasks, like customer support or software development. While outsourcing brings benefits, understanding risks is vital. That's why we offer SOC services, including SOC 2 Auditor Certification and SOC Audit Services, to help you secure your operations, protect sensitive data, and safeguard your success.",
        image: ebook,  // Replace with the actual image path
        downloadLink: "/path/to/ebook"  // Replace with the actual download link
    },
    options: [
        {
            images: [soc_1],
            title: "SOC 1",
            description: "Strengthening Control Frameworks to Meet Regulatory Requirements with our SOC services."
        },
        {
            images: [soc_2],
            title: "SOC 2",
            description: "Encompassing Controls for Addressing Information Systems across Five Trust Service Criteria – Security, Availability, Confidentiality, Privacy, and Processing Integrity in SOC 1 audit."
        },
        {
            images: [soc_3],
            title: "ISAE 3000/ ISAE 3402",
            description: "This is the international assurance standard that SOC audit services adhere to."
        },
        {
            images: [csae],
            title: "SOC 3",
            description: "Comprehensive Security Validation Demonstrated in a Public Report for Enhanced Stakeholder and Client Trust in SOC 1 audit."
        },
        {
            images: [soc_cyber],
            title: "CSAE 3000/CSAE 3416",
            description: "These are globally recognized standards that assess and assure the effectiveness of service organizations' controls and processes, enhancing trust and transparency in their operations with our SOC 1 Audit and SOC services."
        },
        {
            images: [soc_1],
            title: "SOC for Cybersecurity",
            description: "Protect your digital assets with Accorp's SOC for Cybersecurity services. Strengthen defenses, detect threats, and secure your information against evolving risks."
        }
    ],
    images: images  // Example images array
  };

export default soc;
