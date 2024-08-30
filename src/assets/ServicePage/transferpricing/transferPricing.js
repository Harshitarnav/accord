import bg1 from '../transferpricing/transferpricing.png';  // Reusing bg1 as the ebook image as well
import soc_1 from '../../soc_1.png';
import soc_2 from '../../soc_2.png';
import soc_3 from '../../soc_3.png';
import csae from '../../csae.png';
import soc_cyber from '../../soc_cyber.png';

// Import all images from the 'clients' folder
const imagesList = require.context('./clients', false, /\.(png|jpe?g|svg)$/);
const images = imagesList.keys().map((image) => imagesList(image));

const transferPricing = {
    bg: bg1,
    heading: "Transfer Pricing",
    headline: "Maximizing Value and Compliance in Intercompany Transactions",
    features: [
      {
        name: "Global Documentation",
        images: [bg1]
      },
      {
        name: "TP Planning and Compliance",
        images: [bg1]
      },
      {
        name: "Dispute Resolution Management",
        images: [bg1]
      },
      {
        name: "Value Chain Management",
        images: [bg1]
      },
      {
        name: "BEPS Compliance",
        images: [bg1]
      },
      {
        name: "Domestic TP Compliance",
        images: [bg1]
      }
    ],
    menuItems: [
        {
            title: 'Global Documentation',
            content: [
                "This entails providing assistance in complying with local and global transfer pricing documentation requirements."
            ]
        },
        {
            title: 'TP Planning, Documentation, and Assistance with Compliance',
            content: [
                "This entails developing TP strategies and providing assistance in meeting documentation and compliance requirements on Advance Pricing Arrangements (APA) schemes, Safe Harbour Rules, and to meet new documentation and reporting requirements viz. Country by Country Reporting ‘CbCR’ and the Master File."
            ]
        },
        {
            title: 'TP Controversies and Dispute Resolution Management',
            content: [
                "Assistance in TP audit support services and in preparing and briefing for proceedings before the Commissioner of Income Tax."
            ]
        },
        {
            title: 'Value Chain Management',
            content: [
                "This entails helping companies integrate tax planning into business operations to help maximize growth opportunities and minimize expenses."
            ]
        },
        {
            title: 'Base Erosion Profit Shifting (“BEPS”)',
            content: [
                "We can assist in compliance with BEPS guidelines, a global tax avoidance strategy used by multinational companies to shift profits to low-tax jurisdictions, reducing their overall tax liabilities."
            ]
        },
        {
            title: 'Domestic TP',
            content: [
                "Assistance in compliance with Domestic TP provisions, similar to international transfer pricing regulations as introduced by the Finance Act, 2012."
            ]
        }
    ],
    ebook: {
        title: "Transfer Pricing E-BOOK",
        description: "Transfer pricing is the practice of setting prices for transactions between related entities within a multinational company. This eBook offers in-depth insights into transfer pricing strategies, compliance requirements, and the steps necessary to navigate this complex landscape successfully. It covers global documentation, planning, dispute resolution, and more, ensuring that your organization aligns with regulatory requirements while optimizing tax strategies.",
        image: bg1,
        downloadLink: "/path/to/transfer-pricing-ebook"  // Replace with the actual download link
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
            title: "Assessment",
            description: [
                "We start by assessing your company's global operations, intercompany transactions, and industry-specific factors to understand your transfer pricing needs."
            ],
            images: [soc_1]  // Assigning soc_1 image
        },
        {
            title: "Planning",
            description: [
                "Our experts develop a tailored transfer pricing strategy that aligns with your business goals, complies with local and international regulations, and minimizes tax risks."
            ],
            images: [soc_2]  // Assigning soc_2 image
        },
        {
            title: "Documentation",
            description: [
                "We assist in creating comprehensive documentation, including master files, local files, and specific country documentation, to support your transfer pricing positions."
            ],
            images: [soc_3]  // Assigning soc_3 image
        },
        {
            title: "Benchmarking Analysis",
            description: [
                "Our team conducts thorough benchmarking studies to compare your transfer pricing results with external, arm's length transactions, ensuring compliance and justifiable pricing."
            ],
            images: [csae]  // Assigning csae image
        },
        {
            title: "Compliance",
            description: [
                "We help you navigate the complex compliance requirements of different jurisdictions, ensuring that your transfer pricing practices adhere to local regulations and international standards."
            ],
            images: [soc_cyber]  // Assigning soc_cyber image
        },
        {
            title: "Advanced Pricing Agreements (APAs)",
            description: [
                "If beneficial, we can negotiate and secure Advance Pricing Agreements with tax authorities to provide certainty and reduce the risk of disputes."
            ],
            images: [soc_1]  // Reusing soc_1 image
        },
        {
            title: "Safe Harbour Compliance",
            description: [
                "We guide you in utilizing Safe Harbour provisions when applicable, streamlining compliance and reducing uncertainty."
            ],
            images: [soc_2]  // Reusing soc_2 image
        },
        {
            title: "Dispute Resolution",
            description: [
                "In the event of a dispute, we offer expert support in negotiations and resolution with tax authorities to protect your interests."
            ],
            images: [soc_3]  // Reusing soc_3 image
        },
        {
            title: "Continuous Monitoring",
            description: [
                "We provide ongoing monitoring and updates to ensure that your transfer pricing strategies remain aligned with evolving regulations and market conditions."
            ],
            images: [csae]  // Reusing csae image
        },
        {
            title: "Value Optimization",
            description: [
                "Our ultimate goal is not only compliance but also optimizing your global value chain to enhance profitability while managing tax exposure."
            ],
            images: [soc_cyber]  // Reusing soc_cyber image
        }
    ],
    images: images  // Add more images if necessary
};

export default transferPricing;
