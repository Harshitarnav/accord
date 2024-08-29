import bg1 from '../ISO/iso2.jpg';  // Reusing bg1 as the ebook image as well

const fedramp = {
    bg: bg1,
    heading: "FedRAMP Compliance",
    headline: "Ensuring Secure Cloud Solutions for Federal Agencies",
    features: [
      {
        name: "Cost-Effective Assurance",
        images: [bg1]
      },
      {
        name: "Accelerated Adoption",
        images: [bg1]
      },
      {
        name: "Efficient Compliance",
        images: [bg1]
      },
      {
        name: "Trusted Government Validation",
        images: [bg1]
      }
    ],
    menuItems: [
        {
            title: 'Strategy & Risk Advisory',
            content: [
                "Crafting policies, strategies, technical architectures, and governance solutions, including FISMA, ISSO Support, CSF, and Security A&A artifact creation."
            ]
        },
        {
            title: 'Assessment',
            content: [
                "Our approach involves evaluating impacts, performing gap analyses, and conducting assessments to establish a baseline and proactively manage risk postures for cloud solutions."
            ]
        },
        {
            title: 'Comprehensive FedRAMP Assessment',
            content: [
                "Our team conducts thorough assessments aligned with FedRAMP controls, encompassing comprehensive documentation (SAP, SAR, POAM), and rigorous penetration testing to ensure robust security measures."
            ]
        },
        {
            title: 'Ongoing Risk Evaluation with Accorp',
            content: [
                "Accorp offers essential continuous monitoring services, enabling solution providers to sustain their FedRAMP Authority to Operate (ATO) through consistent risk assessment activities."
            ]
        }
    ],
    ebook: {
        title: "FedRAMP E-BOOK",
        description: "FedRAMP is a government program ensuring secure cloud solutions for federal agencies. It standardizes assessment, authorization, and monitoring of cloud products, providing organizations with a consistent and comprehensive approach to cloud security. This eBook provides an in-depth understanding of the FedRAMP process, risk levels, and the necessary steps to achieve compliance, ensuring your organization meets the stringent security requirements for federal cloud solutions.",
        image: bg1,
        downloadLink: "/path/to/fedramp-ebook"  // Replace with the actual download link
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
            title: "JAB Path",
            description: "The JAB is composed of representatives from the Department of Defense (DoD), the General Services Administration (GSA), and the Department of Homeland Security (DHS). The JAB path is suitable for cloud service providers looking to offer their services to multiple federal agencies. The JAB conducts a comprehensive review and authorization process on behalf of federal agencies.",
            images: [bg1]
        },
        {
            title: "Agency Path",
            description: "The agency authorization path is intended for cloud service providers who work primarily with a specific federal agency. In this path, the agency takes responsibility for evaluating and granting the FedRAMP ATO.",
            images: [bg1]
        },
        {
            title: "Low Impact",
            description: "Cloud service offerings in this category have limited adverse effects on agency operations, assets, or individuals in case of a breach. Fewer security controls are needed due to the lower potential impact. Accorp Partners assists in implementing streamlined security controls for achieving and maintaining FedRAMP compliance for low-impact CSOs.",
            images: [bg1]
        },
        {
            title: "Moderate Impact",
            description: "Moderate impact CSOs can lead to serious adverse effects on agency operations, assets, or individuals if confidentiality, integrity, and availability are compromised. Accorp Partners specializes in helping you navigate the complexities of compliance to meet the stringent security standards for moderate-impact CSOs.",
            images: [bg1]
        },
        {
            title: "High Impact",
            description: "Breaches to high-impact data systems can have severe or catastrophic consequences. High-impact data often includes sensitive areas such as law enforcement, emergency services, financial systems, and health systems. Accorp Partners provides comprehensive solutions to ensure your cloud services meet the rigorous security controls required for high-impact CSOs.",
            images: [bg1]
        }
    ],
    images: [bg1]  // Add more images if necessary
};

export default fedramp;
