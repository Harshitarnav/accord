import bg1 from '../audit/audit.jpg';  // Reusing bg1 as the ebook image as well
import ebook from './auditd-ebook.png';  // Reusing bg1 as the ebook image as well
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

const auditReviewCompilation = {
    bg: bg1,
    heading: "Audit/ Review/ Compilation",
    headline: "Comprehensive Financial Evaluation with Industry Expertise",
    features: [
        {
            name: "California Registered CPA",
            images: [bg1]
        },
        {
            name: "UK Registered ACCA",
            images: [bg1]
        },
        {
            name: "CISA",
            images: [bg1]
        },
        {
            name: "Industry Specialization",
            images: [bg1]
        }
    ],
    menuItems: [
        {
            title: "Planning",
            content: [
                "Strategizing the audit scope and objectives for a comprehensive evaluation."
            ],
            images: [bg1]
        },
        {
            title: "Risk Assessment",
            content: [
                "Identifying and assessing potential risks that could impact financial statements."
            ],
            images: [bg1]
        },
        {
            title: "Internal Control Evaluation",
            content: [
                "Scrutinizing internal controls for their efficiency and effectiveness."
            ],
            images: [bg1]
        },
        {
            title: "Substantive Testing",
            content: [
                "Rigorously testing financial data and transactions to ensure accuracy."
            ],
            images: [bg1]
        },
        {
            title: "Evidence Collection",
            content: [
                "Methodically gathering pertinent and credible evidence to corroborate assertions."
            ],
            images: [bg1]
        },
        {
            title: "Financial Statement Presentation",
            content: [
                "Ensuring compliance with accounting standards and reporting norms."
            ],
            images: [bg1]
        },
        {
            title: "Opinion Formation",
            content: [
                "Formulating an independent auditor's opinion on the fairness of financial statements."
            ],
            images: [bg1]
        }
    ],
    compilationProcess: [
        {
            title: "Data Organization",
            description: [
                "Structuring your financial data into standardized formats."
            ],
            images: [bg1]
        },
        {
            title: "Financial Statement Creation",
            description: [
                "Crafting financial statements based on the provided data."
            ],
            images: [bg1]
        },
        {
            title: "No Assurance",
            description: [
                "While we ensure accurate presentation, compilation does not encompass verification or assurance."
            ],
            images: [bg1]
        }
    ],
    reviewProcess: [
        {
            title: "Analytical Procedures",
            description: [
                "Unearthing trends and relationships within financial data to spot anomalies."
            ],
            images: [bg1]
        },
        {
            title: "Inquiries",
            description: [
                "Engaging in dialogues with management to glean insights into financial information."
            ],
            images: [bg1]
        },
        {
            title: "Limited Assurance",
            description: [
                "The review extends moderate assurance that financial statements are devoid of significant misstatements, though it is less exhaustive than an audit."
            ],
            images: [bg1]
        }
    ],
    ebook: {
        title: "Audit/ Review/ Compilation E-BOOK",
        description: "An audit is an 'independent examination of financial information of any entity, whether profit-oriented or not, irrespective of its size or legal form when such an examination is conducted with a view to express an opinion thereon.' This eBook provides an in-depth guide to the audit, review, and compilation processes, helping you understand the intricacies involved in financial evaluations.",
        image: ebook,
        downloadLink: "/path/to/audit-review-compilation-ebook"  // Replace with the actual download link
    },
    options: [
        {
            title: "Agreed Upon Procedures",
            description: "Customized procedures agreed upon with the client to address specific concerns, providing tailored insights.",
            images: [soc_1]
        },
        {
            title: "Compilation",
            description: "Organizing financial data into statements without extending assurance, suitable for basic presentations.",
            images: [soc_2]
        },
        {
            title: "Review",
            description: "Leverages analytical procedures and inquiries to offer a moderate level of assurance on financial statements.",
            images: [soc_3]
        },
        {
            title: "Audit",
            description: "In-depth examination of financial statements and controls for the highest level of assurance.",
            images: [soc_cyber]
        }
    ],
    images: images  // Add more images if necessary
};

export default auditReviewCompilation;
