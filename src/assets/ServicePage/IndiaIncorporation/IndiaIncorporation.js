import bg1 from '../ISO/iso2.jpg';  // Reusing bg1 as the ebook image as well
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

const indiaIncorporation = {
    bg: bg1,
    heading: "India Incorporation",
    headline: "Establishing Your Business Presence in India with Expert Guidance and Comprehensive Support.",
    features: [
        {
            name: "Entity Incorporation, GST No, PAN No, TAN No, IEC Code, FEMA, Virtual Office, Virtual Directors",
            images: [bg1]
        },
        {
            name: "7 to 10 days registration process",
            images: [bg1]
        },
        {
            name: "24/7 online order tracking",
            images: [bg1]
        },
        {
            name: "All-inclusive pricing",
            images: [bg1]
        },
        {
            name: "Expert document handling",
            images: [bg1]
        }
    ],
    menuItems: [
        {
            title: "Consultation",
            content: [
                "We thoroughly understand your business needs to identify the most suitable company registration type."
            ],
            images: [bg1]
        },
        {
            title: "Document Preparation",
            content: [
                "Our experts assist in preparing all necessary documents, including identification proofs, MOA, AOA, and more."
            ],
            images: [bg1]
        },
        {
            title: "Application Submission",
            content: [
                "We handle the submission of your registration application, ensuring accuracy and completeness."
            ],
            images: [bg1]
        },
        {
            title: "Follow-up and Compliance",
            content: [
                "Our team diligently follows up with authorities and provides guidance on post-registration compliance."
            ],
            images: [bg1]
        },
        {
            title: "Company Incorporation",
            content: [
                "Upon successful registration, we provide you with the Certificate of Incorporation."
            ],
            images: [bg1]
        },
        {
            title: "Ongoing Support",
            content: [
                "We offer continuous support and solutions to meet your evolving business needs."
            ],
            images: [bg1]
        }
    ],
    ebook: {
        title: "India Incorporation E-BOOK",
        description: "This eBook provides a step-by-step guide to incorporating a business in India, covering essential aspects from entity selection to compliance requirements. Learn how to navigate the Indian market effectively and set your business up for success.",
        image: bg1,
        downloadLink: "/path/to/india-incorporation-ebook"  // Replace with the actual download link
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
            title: "Private Limited Company",
            description: "Ideal for startups and SMEs, provides limited liability, and requires a minimum of two directors and shareholders.",
            images: [soc_1]
        },
        {
            title: "Limited Liability Partnership (LLP)",
            description: "Suitable for professional service firms and small businesses, offers limited liability, and requires a minimum of two partners.",
            images: [soc_2]
        },
        {
            title: "One Person Company (OPC)",
            description: "Designed for single entrepreneurs, provides limited liability, and requires one director and one nominee.",
            images: [soc_3]
        },
        {
            title: "Public Limited Company",
            description: "Suited for larger businesses aiming to raise public capital, has more compliance requirements, and mandates three directors and seven shareholders.",
            images: [csae]
        },
        {
            title: "Partnership Firm",
            description: "An association of individuals with shared goals and profit-sharing, lacks a separate legal identity, and entails unlimited liability.",
            images: [soc_cyber]
        },
        {
            title: "Sole Proprietorship",
            description: "The simplest form, owned and operated by a single individual, with unlimited liability and no separate legal identity.",
            images: [peer_review]
        }
    ],
    images: images  // Add more images if necessary
};

export default indiaIncorporation;
