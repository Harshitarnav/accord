import bg1 from '../usaincorporation/usa.avif';  // Reusing bg1 as the ebook image as well
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

const usaIncorporation = {
    bg: bg1,
    heading: "USA Incorporation",
    headline: "Simplifying Business Formation for Non-Residents and Residents Alike",
    features: [
      {
        name: "Effortless Paperwork Management",
        images: [bg1]
      },
      {
        name: "Seasoned Advisory Support",
        images: [bg1]
      },
      {
        name: "Customized Incorporation Paths",
        images: [bg1]
      },
      {
        name: "Expedited Process",
        images: [bg1]
      },
      {
        name: "Comprehensive Compliance",
        images: [bg1]
      }
    ],
    menuItems: [
        {
            title: 'Choose a Business Structure',
            content: [
                "Decide on the type of business structure you want to form. The most common structures include Sole Proprietorship, Partnership, Limited Liability Company (LLC), Corporation, and S Corporation. Each structure has different legal and tax implications."
            ]
        },
        {
            title: 'Select a State',
            content: [
                "Choose the state where you want to incorporate your company. Many businesses choose Delaware because of its favorable corporate laws, but you can also incorporate in the state where your business operates."
            ]
        },
        {
            title: 'Choose a Name',
            content: [
                "Select a unique and available business name that complies with the state's naming rules. The name often needs to include a corporate designator like 'Inc.' or 'LLC.'"
            ]
        },
        {
            title: 'Appoint Directors/Managers',
            content: [
                "If you're forming a corporation, you'll need to appoint directors; if it's an LLC, you'll need to appoint managers or members."
            ]
        },
        {
            title: 'File Articles of Incorporation/Organization',
            content: [
                "Prepare and file the necessary documents with the state's Secretary of State office. For a corporation, this typically involves filing Articles of Incorporation, and for an LLC, it involves Articles of Organization. These documents include information about the business structure, address, registered agent, and more."
            ]
        },
        {
            title: 'Designate a Registered Agent',
            content: [
                "Appoint a registered agent who will receive legal documents and official notices on behalf of the company. This can be an individual or a registered agent service."
            ]
        },
        {
            title: 'Create Corporate Bylaws/Operating Agreement',
            content: [
                "Corporations should draft corporate bylaws, while LLCs should create an operating agreement. These documents outline the internal rules and procedures for the business."
            ]
        },
        {
            title: 'Obtain an Employer Identification Number (EIN)',
            content: [
                "An EIN, also known as a Federal Tax Identification Number, is needed for tax purposes and to open a business bank account. You can apply for an EIN through the IRS."
            ]
        },
        {
            title: 'Comply with State and Local Requirements',
            content: [
                "Depending on your business activities and location, you might need to obtain licenses, permits, and zoning approvals from state and local authorities."
            ]
        },
        {
            title: 'Issue Stock (for Corporations)',
            content: [
                "If you're incorporating as a corporation, you'll need to issue stock to shareholders in exchange for their investment in the company."
            ]
        },
        {
            title: 'File Initial Reports',
            content: [
                "Some states require newly formed companies to file initial reports or statements shortly after incorporation. Pay State Fees: There are usually fees associated with incorporating your business, which can include filing fees and ongoing annual fees."
            ]
        },
        {
            title: 'Open a Business Bank Account',
            content: [
                "Use your EIN to open a separate business bank account for your company's financial transactions."
            ]
        }
    ],
    ebook: {
        title: "USA Incorporation E-BOOK",
        description: "Starting a business as a non-resident involves the same steps as for residents, with added considerations. This eBook guides you through the essential steps of USA incorporation, from choosing a business structure to compliance requirements, ensuring a smooth and successful business formation.",
        image: bg1,
        downloadLink: "/path/to/usa-incorporation-ebook"  // Replace with the actual download link
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
            title: "Limited Liability Company (LLC)",
            description: "An LLC is a versatile business structure that offers limited liability protection to its members, shielding their personal assets from business liabilities. With a flexible management structure and pass-through taxation, it combines the benefits of liability protection and simplified administrative requirements.",
        },
        {
            title: "C Corporation",
            description: "A C Corporation is a separate legal entity owned by shareholders and managed by a board of directors. It provides strong liability protection for shareholders and allows for capital raising through stock issuance. However, it's subject to double taxation, where both the corporation's profits and distributed dividends are taxed.",
        },
        {
            title: "S Corporation",
            description: "An S Corporation combines liability protection with pass-through taxation. It's limited to a certain number of shareholders and specific stock classes. S Corporations offer flexibility in management and operational structure, while also avoiding the double taxation associated with C Corporations.",
        }
    ],
    images: images  // Add more images if necessary
};

export default usaIncorporation;
