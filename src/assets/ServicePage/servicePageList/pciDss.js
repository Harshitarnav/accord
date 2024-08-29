import bg1 from '../pcidss/pcidss.jpg';  // Reusing bg1 as the ebook image as well

const pciDss = {
    bg: bg1,
    heading: "PCI-DSS Compliance",
    headline: "Safeguarding Payment Data for Fraud Prevention and Security.",
    features: [
      {
        name: "PCI QSA",
        images: [bg1]
      },
      {
        name: "California CPA firm",
        images: [bg1]
      },
      {
        name: "Cost Competitiveness",
        images: [bg1]
      },
      {
        name: "Audit and certification support",
        images: [bg1]
      },
      {
        name: "Stay audit-ready with Accorp",
        images: [bg1]
      }
    ],
    menuItems: [
        {
            title: 'Initial Assessment',
            content: [
                "We begin by assessing your degree and compliance requirements to determine the commitment needed."
            ]
        },
        {
            title: 'Pre-Assessment Gathering',
            content: [
                "Our PCI DSS QSA initiates a pre-assessment, evaluating your security plan, coverage, and on-site."
            ]
        },
        {
            title: 'Expert QSA Audit',
            content: [
                "Our experts conduct a comprehensive review of your cardholder data environment against the 12 PCI DSS requirements. We verify that your controls are effectively in place."
            ]
        },
        {
            title: 'Completed AoC',
            content: [
                "Upon remediation completion, we thoroughly review the Report on Compliance (RoC) internally before generating the Attestation of Compliance (AoC) for formal submission. Your organization achieves formal compliance."
            ]
        },
        {
            title: 'Thorough On-Site Evaluation',
            content: [
                "Perform a comprehensive assessment of procedures, policies, and controls. This involves interviews, scrutiny of physical security measures, and review of documentation."
            ]
        },
        {
            title: 'Remediation Planning',
            content: [
                "Develop a tailored plan to address identified gaps and deficiencies, ensuring a clear path towards PCI-DSS compliance and data security enhancement."
            ]
        }
    ],
    ebook: {
        title: "PCI-DSS E-BOOK",
        description: "PCI DSS audit, or the Payment Card Industry Data Security Standard, is a set of requirements designed to protect credit and debit card information from being compromised by businesses. The PCI compliance Security Council issues these requirements to help organizations minimize their risk of data theft and financial fraud. All businesses that handle, transmit, or store payment card data must comply with the PCI DSS compliance services. Noncompliance can result in significant financial penalties.",
        image: bg1,
        downloadLink: "/path/to/pci-dss-ebook"  // Replace with the actual download link
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
            title: "SAQ A",
            description: "This self-assessment questionnaire is not applicable for face-to-face channels and is to be completed by merchants who deal with ‘card not present’ transactions i.e. e-Commerce, mail or telephone order. If your organization has outsourced all cardholder functions to PCI DSS compliant third-party service providers and does not electronically store, process or transmit cardholder data on your systems or premises, this SAQ is the right one for you.",
            images: [bg1]
        },
        {
            title: "SAQ A-EP",
            description: "The ‘A-EP’ self-assessment questionnaire is similar to SAQ A but refers to merchants who outsource all payment processing to PCI DSS validated third parties, and who have a website(s) that doesn’t directly receive cardholder data but that can impact the security of the payment transaction.",
            images: [bg1]
        },
        {
            title: "SAQ B",
            description: "This self-assessment questionnaire is applicable to merchants who use only imprint machines and/or standalone, dial-out terminals and have no electronic cardholder data transmission, processing and storage.",
            images: [bg1]
        },
        {
            title: "SAQ B-IP",
            description: "The B-IP self-assessment questionnaire is applicable to all merchants who only utilize standalone, PTS-approved payment terminals with an IP connection to the payment processor, with no electronic cardholder data storage.",
            images: [bg1]
        },
        {
            title: "SAQ C-VT",
            description: "This self-assessment questionnaire is designed for merchants who manually enter a single transaction at a time via a keyboard into an Internet-based virtual terminal solution that is provided and hosted by a PCI DSS validated third-party service provider. These merchants also do not store any cardholder data.",
            images: [bg1]
        },
        {
            title: "SAQ C",
            description: "For merchants with payment application systems connected to the Internet, and who don’t store any cardholder data electronically.",
            images: [bg1]
        },
        {
            title: "SAQ P2PE-HW",
            description: "This self-assessment questionnaire is dedicated for merchants who use approved point-to-point encryption (P2PE) devices, with no electronic card data storage.",
            images: [bg1]
        },
        {
            title: "SAQ D (For Merchants)",
            description: "This is a self-assessment questionnaire for merchants who are not described in the above types of SAQs.",
            images: [bg1]
        },
        {
            title: "SAQ D (For Service Providers)",
            description: "This is a self-assessment questionnaire for service providers who are not described in the above types of SAQs.",
            images: [bg1]
        },
        {
            title: "Compliance audit - Level 1",
            description: "Merchants with over 6 million transactions a year, across all channels.",
            images: [bg1]
        },
        {
            title: "Compliance audit - Level 2",
            description: "Merchants with between 1 million and 6 million transactions annually, across all channels.",
            images: [bg1]
        },
        {
            title: "Compliance audit - Level 3",
            description: "Merchants with between 20,000 and 1 million online transactions annually.",
            images: [bg1]
        },
        {
            title: "Compliance audit - Level 4",
            description: "Merchants with fewer than 20,000 online transactions annually or any merchant.",
            images: [bg1]
        }
    ],
    images: [bg1]  // Add more images if necessary
};

export default pciDss;
