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

const esop = {
    bg: bg1,
    heading: "ESOP",
    headline: "Comprehensive ESOP Services for Seamless Plan Design, Implementation, and Administration",
    features: [
        {
            name: "California CPA Firm",
            images: [bg1]
        },
        {
            name: "Streamlines Plan Design and Implementation",
            images: [bg1]
        },
        {
            name: "Provides Ongoing Administration and Support",
            images: [bg1]
        }
    ],
    options: [
        {
            title: "Design and Implementation",
            description: [
                "We help companies design and implement an ESOP that meets their specific needs and goals. This includes determining the appropriate ownership structure, selecting the right trustee and valuation firm, and creating the plan documents and policies."
            ],
            images: [soc_1]
        },
        {
            title: "Administration",
            description: [
                "Once the ESOP is established, we assist with ongoing administration tasks, such as tracking employee share ownership plan contributions and vesting, managing stock allocations and distributions, and ensuring compliance with IRS and Department of Labor regulations."
            ],
            images: [soc_2]
        },
        {
            title: "Valuation",
            description: [
                "We perform valuations of company stock to determine the fair market value of shares, which is crucial for determining the share price for the ESOP financing and complying with IRS regulations."
            ],
            images: [soc_3]
        },
        {
            title: "Financing",
            description: [
                "We assist companies in obtaining financing to fund the purchase of company stock by the ESOP. This includes structuring the transaction, negotiating terms with lenders, and managing the closing process."
            ],
            images: [csae]
        },
        {
            title: "Taxation for ESOP",
            description: [
                "We help businesses leverage the potential tax advantages offered by ESOPs, optimizing your tax strategy and minimizing tax liabilities. Our comprehensive tax planning services ensure compliance with relevant tax laws and regulations while maximizing the tax benefits available to your organization."
            ],
            images: [soc_cyber]
        },
        {
            title: "Accounting for ESOP",
            description: [
                "We offer comprehensive accounting services specifically tailored for ESOPs. Our expertise in ESOP accounting helps businesses effectively manage and optimize the financial aspects of their ESOPs, ensuring compliance with regulations."
            ],
            images: [soc_1]
        }
    ],
    ebook: {
        title: "ESOP E-BOOK",
        description: "Explore our ESOP E-Book for an in-depth guide on designing, implementing, and managing Employee Stock Ownership Plans. This resource covers everything from the basics to advanced strategies, helping your business maximize the benefits of an ESOP.",
        image: bg1,
        downloadLink: "/path/to/esop-ebook"  // Replace with the actual download link
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
    menuItems: [
        {
            title: "Plan Design",
            content: ["The company creates an employee share ownership plan that outlines the eligibility criteria, share allocation, vesting schedule, and other relevant details."],
            images: [bg1]
        },
        {
            title: "Granting of Options",
            content: ["The company grants options to eligible employees, giving them the right to purchase shares at a future date."],
            images: [bg1]
        },
        {
            title: "Vesting",
            content: ["The options granted to employees typically vest over a period of time, meaning they become exercisable after a certain period of employment."],
            images: [bg1]
        },
        {
            title: "Exercise of Options",
            content: ["Once the options have vested, the employee can exercise them by purchasing company shares at the predetermined price."],
            images: [bg1]
        },
        {
            title: "Sale of Shares",
            content: ["The employee can hold onto the shares or sell them in the open market at the current market price."],
            images: [bg1]
        }
    ],
    images: images  // Add more images if necessary
};

export default esop;
