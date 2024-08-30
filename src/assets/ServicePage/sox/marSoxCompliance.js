import bg1 from '../sox/sox.webp';  // Reusing bg1 as the ebook image as well
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

const marSoxCompliance = {
    bg: bg1,
    heading: "MAR & SOX Compliance",
    headline: "Ensuring Regulatory Adherence and Internal Control Excellence",
    features: [
      {
        name: "MAR/SOX Compliance Assurance",
        images: [bg1]
      },
      {
        name: "Proactive Compliance Assurance",
        images: [bg1]
      },
      {
        name: "Value-Driven Security",
        images: [bg1]
      },
      {
        name: "Transparent Reporting",
        images: [bg1]
      }
    ],
    menuItems: [
        {
            title: 'Annual Independent Audits',
            content: [
                "SOX mandates yearly audits by independent firms, separate from internal audits, to maintain compliance."
            ]
        },
        {
            title: 'Internal Controls Report',
            content: [
                "Annual financial reports must include an Internal Controls Report, affirming data accuracy and security measures."
            ]
        },
        {
            title: 'Control, Policy, and Procedure Review',
            content: [
                "Audits assess adherence to controls, policies, procedures, network security, and data monitoring."
            ]
        },
        {
            title: 'Comprehensive Compliance',
            content: [
                "SOX audits ensure compliance with control, access control, and data security practices, bolstering trust in financial reporting."
            ]
        }
    ],
    ebook: {
        title: "MAR & SOX Compliance E-BOOK",
        description: "Stay confident in your organization's financial and operational integrity with our expert guidance on MAR & SOX compliance. This eBook covers everything you need to know about ensuring regulatory adherence, maintaining internal control excellence, and navigating the complex landscape of financial reporting requirements. It offers detailed insights into the process, best practices, and strategies for successful SOX compliance.",
        image: bg1,
        downloadLink: "/path/to/mar-sox-ebook"  // Replace with the actual download link
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
            title: "Annual Risk Assessment and Business Process Documentation",
            description: [
                "Planning for Risk Assessment: Conducting comprehensive risk assessments on an annual basis to identify potential vulnerabilities.",
                "Documentation Updates: Continuously updating business process documentation to reflect changes in operations and potential risks.",
                "New Process Risk Identification: Identifying risks and controls for new processes or activities introduced within the organization."
            ],
            images: [soc_1]  // Replacing with soc_1 image
        },
        {
            title: "Walkthroughs, Documentation, and Control Evaluation",
            description: [
                "Supporting Auditor Walkthroughs: Assisting auditors during walkthroughs of internal control processes, ensuring a thorough understanding.",
                "Documentation Review: Providing support for updates to control documentation, ensuring accuracy and completeness.",
                "Segregation of Duties (SOD): Evaluating segregation of duties and identifying any potential conflicts."
            ],
            images: [soc_2]  // Replacing with soc_2 image
        },
        {
            title: "Control Design and Effectiveness Testing",
            description: [
                "Testing Control Design: Assessing the design of controls to ensure they are well-structured and capable of addressing identified risks.",
                "Testing Control Effectiveness: Evaluating the operating effectiveness of controls to ensure they function as intended.",
                "Internal Controls Assessment: Conducting control design and effectiveness testing for management’s internal controls assessment.",
                "External Auditor Reliance: Providing support for controls relied upon by external auditors."
            ],
            images: [soc_3]  // Replacing with soc_3 image
        },
        {
            title: "Remediation and Issue Resolution",
            description: [
                "Issue Identification: Identifying outstanding issues or control deficiencies through testing and evaluation.",
                "Remediation Planning: Assisting in the development of remediation plans to address identified issues.",
                "Implementing Remediation: Collaborating to implement remediation measures, ensuring control deficiencies are resolved effectively."
            ],
            images: [csae]  // Replacing with csae image
        },
        {
            title: "Re-evaluation and Reporting",
            description: [
                "Risk Re-evaluation: Revisiting risk assessments to assess changes and compare them to previous phases.",
                "Results Presentation: Reviewing and presenting results and findings to management and audit committees for informed decision-making."
            ],
            images: [soc_cyber]  // Replacing with soc_cyber image
        }
    ],
    images: images  // Add more images if necessary
};

export default marSoxCompliance;
