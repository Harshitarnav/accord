import bg1 from '../ustaxation/ustax.jpg';  // Reusing bg1 as the ebook image as well
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

const usTaxation = {
    bg: bg1,
    heading: "US Taxation",
    headline: "Comprehensive US Taxation Services Tailored to Your Needs",
    features: [
        {
            name: "California Registered CPA",
            images: [bg1]
        },
        {
            name: "Tailored Tax Solutions",
            images: [bg1]
        },
        {
            name: "Comprehensive Tax Expertise",
            images: [bg1]
        },
        {
            name: "Global Reach",
            images: [bg1]
        },
        {
            name: "Strategic Tax Planning",
            images: [bg1]
        },
        {
            name: "Compliance and Risk Mitigation",
            images: [bg1]
        }
    ],
    menuItems: [
        {
            title: "Corporate Tax Returns",
            content: [
                "We help US corporates with their entire range of corporate tax return filing services. We specifically assist in the preparation of the following returns:",
                "- Federal Tax Returns",
                "- State Income Tax Returns",
                "- State Sales & Use Tax Returns",
                "- State Franchise Tax Returns",
                "- State Property Tax Returns"
            ],
            images: [bg1]
        },
        {
            title: "Fund Tax Services",
            content: [
                "Funds with US investors need to comply with various US reporting obligations. We assist funds in the following compliances:",
                "- US partnership tax returns",
                "- Federal & State Schedule K-1s",
                "- Entity Classification Elections",
                "- CFC/PFIC Evaluations & Disclosures"
            ],
            images: [bg1]
        },
        {
            title: "Individual Tax Returns",
            content: [
                "We assist US Citizens, US tax residents, and Non-residents in filing their US Individual Tax Returns. We assist in the preparation of the following returns:",
                "- US Resident Individual Federal Tax Return (1040)",
                "- US Non-Resident Individual Federal Tax Return (1040NR)",
                "- State Individual Tax Returns",
                "- FBAR Filings"
            ],
            images: [bg1]
        },
        {
            title: "State and Local Tax (SALT) Services",
            content: [
                "Navigating the diverse landscape of state taxation is a significant challenge, but Accorp is equipped to assist clients with:",
                "- Value added taxes (VAT)",
                "- Income and Franchise Tax",
                "- Sales and use taxes",
                "- Goods and Services taxes (GST)",
                "- Federal excise taxes",
                "- Telecommunications taxes"
            ],
            images: [bg1]
        },
        {
            title: "Payroll Tax Support",
            content: [
                "A US company must register for payroll tax in its state of formation. As part of our payroll offerings, you'll get instant access to our payroll tax service. We provide the following tax benefits:",
                "- Payroll tax calculation",
                "- Payroll tax payment",
                "- Filing of your payroll taxes with your appropriate agencies",
                "- Time savings and reduced risk of penalties for late or inaccurate payments"
            ],
            images: [bg1]
        },
        {
            title: "US Inbound Services",
            content: [
                "If you are looking to set up a business in the US, we can guide you in the selection of the right type of business (C-Corp, LLC, etc.) as well as help you in incorporating the company and obtaining all the necessary tax and regulatory registrations. As a part of our US Inbound services, we offer the following assistance:",
                "- Incorporation Services",
                "- EIN/SSN/ITIN assistance",
                "- State Tax Registrations",
                "- Sales and Use Tax Registrations",
                "- Secretary of State Registrations for doing business"
            ],
            images: [bg1]
        },
        {
            title: "FATCA/CRS Services",
            content: [
                "We also assist in FATCA/CRS return filings. The purpose of the Act is to ensure that the Internal Revenue Service (IRS) can identify and collect the appropriate tax from US persons holding financial assets outside the US."
            ],
            images: [bg1]
        }
    ],
    ebook: {
        title: "US Taxation E-BOOK",
        description: "This eBook provides a detailed guide to navigating the complexities of US Taxation, covering everything from corporate tax returns to individual filings and inbound services. Learn how to manage your tax obligations effectively and strategically with expert guidance.",
        image: bg1,
        downloadLink: "/path/to/us-taxation-ebook"  // Replace with the actual download link
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
            title: "Corporate Tax Returns",
            description: "Comprehensive services for filing corporate tax returns at the federal and state levels.",
            images: [soc_1]
        },
        {
            title: "Fund Tax Services",
            description: "Specialized tax services for funds with US investors, including compliance with complex reporting obligations.",
            images: [soc_2]
        },
        {
            title: "Individual Tax Returns",
            description: "Assistance for US residents and non-residents in filing federal and state individual tax returns.",
            images: [soc_3]
        },
        {
            title: "State and Local Tax (SALT) Services",
            description: "Support for navigating the complexities of state and local tax regulations, including VAT, income tax, and sales tax.",
            images: [csae]
        },
        {
            title: "Payroll Tax Support",
            description: "Comprehensive payroll tax services, including calculation, payment, and filing.",
            images: [soc_cyber]
        },
        {
            title: "US Inbound Services",
            description: "Guidance for setting up a business in the US, including incorporation, tax registrations, and compliance.",
            images: [soc_1]
        },
        {
            title: "FATCA/CRS Services",
            description: "Assistance with FATCA/CRS return filings to ensure compliance with IRS regulations for US persons holding financial assets abroad.",
            images: [soc_2]
        }
    ],
    images: images  // Add more images if necessary
};

export default usTaxation;
