// servicePageData.js
import bg1 from '../hipaa/hipaa.png';
import ebook from './hipaa-ebook.png';  // Reusing bg1 as the ebook image as well

// Import all images from the 'clients' folder
const imagesList = require.context('./clients', false, /\.(png|jpe?g|svg)$/);
const images = imagesList.keys().map((image) => imagesList(image));

const hipaa = {
    bg: bg1,
    heading: "HIPAA Compliance & Audit",
    headline: "For organizations handling electronic patient health records, HIPAA compliance & HIPAA audit is a non-negotiable requirement.",
    features: [
      {
        name: "Patient Privacy Assurance",
        images: [bg1]  // Replaced with bg1
      },
      {
        name: "Audit and Certification Support",
        images: [bg1]  // Replaced with bg1
      },
      {
        name: "Seamless Workflows",
        images: [bg1]  // Replaced with bg1
      },
      {
        name: "Hitrust External Assessor",
        images: [bg1]  // Replaced with bg1
      },
      {
        name: "Cost Competitiveness",
        images: [bg1]  // Replaced with bg1
      },
      {
        name: "California Registered CPA",
        images: [bg1]  // Replaced with bg1
      },
      {
        name: "Empower Your Healthcare Compliance",
        images: [bg1]  // Replaced with bg1
      }
    ],
    menuItems: [
        {
            title: 'HIPAA Scope Assessment and Finalization',
            content: [
                "We conduct a thorough analysis of your business's essential components and define the significant scope in alignment with your specific business requirements. This process involves evaluating your organization's needs and determining the scope of HIPAA compliance measures and HIPAA audit."
            ]
        },
        {
            title: 'Thorough Gap Assessment',
            content: [
                "Our certified HIPAA compliance auditors meticulously examine your organization's business processes and implemented controls during the gap assessment."
            ]
        },
        {
            title: 'HIPAA Compliance Audit',
            content: [
                "Our auditors conduct an internal assessment to evaluate the status of implemented HIPAA audit, HIPAA audit services, and HIPAA compliance audit services and ensure alignment with guidelines and organizational policies and procedures."
            ]
        },
        {
            title: 'Identifying Issues and Providing Guidance',
            content: [
                "We document instances of non-compliance and offer practical recommendations to enhance your practices, including our certified HIPAA Audit Service."
            ]
        },
        {
            title: 'Thorough On-Site Evaluation',
            content: [
                "Perform a comprehensive assessment of procedures, policies, and controls, including interviews, scrutiny of physical security measures, and review of documentation, to ensure HIPAA compliance & HIPAA audit."
            ]
        },
        {
            title: 'Remediation Planning',
            content: [
                "Develop a tailored plan to address identified gaps and deficiencies, ensuring a clear path towards HIPAA compliance, and data security enhancement, with the assistance of HIPAA compliance audit services."
            ]
        }
    ],
    ebook: {
        title: "HIPAA E-BOOK",
        description: "The Health Insurance Portability and Accountability Act (HIPAA), including our Certified HIPAA Audit Service, was enacted by the United States Congress in 1996 and signed into law by then-President Bill Clinton. It establishes critical privacy and security standards for the protection of sensitive patient data.",
        image: ebook,  // Replaced with bg1
        downloadLink: "/path/to/hipaa-ebook"  // Replace with the actual download link
    },
    images: images  // Example images array
  }

export default hipaa;
