import bg1 from '../fema/fema.avif';  // Reusing bg1 as the ebook image as well
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

const fema = {
    bg: bg1,
    heading: "FEMA (Foreign Exchange Management Act)",
    headline: "Comprehensive Management of Foreign Exchange in India",
    features: [
      {
        name: "Timely RBI Compliance",
        images: [bg1]
      },
      {
        name: "RBI Liaison",
        images: [bg1]
      }
    ],
    options: [
        {
            title: "Foreign Direct Investments (FDI)",
            description: [
                "Our expert services guide businesses on FDI regulations under FEMA, assisting in compliance and optimizing FDI strategies for growth and expansion in India. We address issues related to the transfer or issue of capital instruments in India under both the automatic and approval routes."
            ],
            images: [soc_1]
        },
        {
            title: "Current Account Transactions",
            description: [
                "FEMA governs current account transactions, which cover regular business activities such as trade in goods and services. These transactions are generally liberalized, allowing individuals and businesses to engage in them with ease."
            ],
            images: [soc_2]
        },
        {
            title: "Capital Account Transactions",
            description: [
                "FEMA regulates capital account transactions, including the acquisition and transfer of capital assets such as shares, property, and investments. Specific rules and limits apply to these transactions."
            ],
            images: [soc_3]
        },
        {
            title: "External Commercial Borrowings (ECB)",
            description: [
                "FEMA regulates the borrowing of funds from foreign sources by Indian entities. It sets guidelines for eligible borrowers, permissible end-uses, and reporting requirements. We assist in drafting loan agreements, obtaining Loan Registration Numbers (LRN), and complying with monthly ECB reporting."
            ],
            images: [csae]
        },
        {
            title: "Penalty and Compounding of Offenses",
            description: [
                "Non-compliance under FEMA can invite penalties. We assist in applying for the compounding of offenses with the concerned regional office of RBI and payment of compounding fees on a case-by-case basis."
            ],
            images: [soc_cyber]
        },
        {
            title: "Overseas Direct Investment (ODI)",
            description: [
                "ODI refers to the investment made by Indian entities in foreign businesses and assets. We assist with regulatory compliance and reporting under FEMA guidelines."
            ],
            images: [soc_1]
        },
        {
            title: "Liberalized Remittance Scheme (LRS)",
            description: [
                "Under FEMA, Resident Individuals can remit up to USD 250,000 per year for certain permissible capital account transactions. We guide you in navigating the conditions and benefits of LRS."
            ],
            images: [soc_2]
        },
        {
            title: "NRO and NRE Accounts",
            description: [
                "NRO accounts manage income earned in India and are subject to FEMA regulations. NRE accounts manage foreign income remitted into India, with both principal and interest freely repatriable."
            ],
            images: [soc_3]
        }
    ],
    menuItems: [
        {
            title: "Initial Advisory",
            content: [
                "We begin by understanding your specific business needs and objectives related to foreign exchange transactions and FEMA compliance."
            ]
        },
        {
            title: "Compliance Assessment",
            content: [
                "Our experts conduct a comprehensive assessment of your current FEMA compliance status and identify areas that require attention."
            ]
        },
        {
            title: "Strategy Development",
            content: [
                "Based on our assessment, we develop a tailored strategy that aligns with your business goals while ensuring adherence to FEMA regulations."
            ]
        },
        {
            title: "Implementation",
            content: [
                "We assist you in implementing the recommended strategies, including obtaining approvals, structuring transactions, and preparing documentation."
            ]
        },
        {
            title: "Ongoing Monitoring",
            content: [
                "Our team continuously monitors your FEMA-related transactions and regulatory changes to ensure ongoing compliance."
            ]
        },
        {
            title: "Reporting and Documentation",
            content: [
                "We help you prepare accurate reports and maintain proper documentation to meet FEMA reporting requirements."
            ]
        },
        {
            title: "Advisory and Support",
            content: [
                "Throughout the process, we provide proactive advisory and support to address any issues or changes in FEMA regulations that may affect your business."
            ]
        }
    ],
    images: images  // Add more images if necessary
};

export default fema;
