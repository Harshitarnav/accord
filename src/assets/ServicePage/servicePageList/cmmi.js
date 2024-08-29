import bg1 from '../ISO/iso2.jpg';  // Reusing bg1 as the ebook image as well

const cmmi = {
    bg: bg1,
    heading: "CMMI (Capability Maturity Model Integration)",
    headline: "Shifting Your Organization from People-Driven to Process-Driven Excellence.",
    features: [
      {
        name: "CMMI Lead Appraiser",
        images: [bg1]
      },
      {
        name: "California CPA firm",
        images: [bg1]
      },
      {
        name: "Audit and certification support",
        images: [bg1]
      },
      {
        name: "Cost Competitiveness",
        images: [bg1]
      },
      {
        name: "Stay audit-ready with Accorp",
        images: [bg1]
      }
    ],
    menuItems: [
        {
            title: 'Advisory',
            content: [
                "Creating a Project Charter: A foundational step that defines the project's scope, objectives, and stakeholders."
            ]
        },
        {
            title: 'Conducting Overview Training',
            content: [
                "We offer specialized training to the Software Engineering Process Group (SEPG), a dedicated team responsible for process maintenance and appraisal interviews."
            ]
        },
        {
            title: 'QMS Preparation (Quality Management System)',
            content: [
                "The SEPG prepares the QMS—a comprehensive document encompassing Processes and Procedures, Guidelines, Checklists, and Templates. We collaborate to identify gaps and provide guidance for QMS development."
            ]
        },
        {
            title: 'Initial Project QMS Implementation',
            content: [
                "Addressing gaps in your initial project's QMS, we ensure over 95% compliance sequentially in QMS and Implementation. This achievement drives replication of compliance across all projects."
            ]
        },
        {
            title: 'Compliance through Randomly Generated Sample (RGS)',
            content: [
                "Remaining projects will be selected through CMMI portal through Randomly Generated Sampling. Gaps are addressed until 100% compliance is achieved."
            ]
        },
        {
            title: 'Objective Evidence',
            content: [
                "We provide your team training on preparing a database, supporting the evidence-based approach."
            ]
        },
        {
            title: 'Appraisal',
            content: [
                "Identifying Appraisal Team Members (ATM): Four individuals from your organization meet CMMI criteria for participation.",
                "ATM Roles: Functioning as internal auditors, they support our Lead Appraiser throughout the appraisal process.",
                "Training for ATM: Covers essential aspects such as the Foundation of Capability, and Building Development Excellence / Building Service Excellence.",
                "Additional Training: Appraisal Team Training focuses on Audit Methodologies, ensuring preparedness for the standardized appraisal process.",
                "Appraisal is fixed and standard activity: which takes its own time. It is strictly under CMMI guidelines, rules, and Observation. The CMMI audit is called an Appraisal, unlike other audits where the entire population from the project which is selected gets appraised."
            ]
        }
    ],
    ebook: {
        title: "CMMI E-BOOK",
        description: "Discover the ultimate guide to CMMI in this ebook, offering a profound exploration of Capability Maturity Model Integration for organizations. Immerse yourself in CMMI principles, effective implementation strategies, and expertly addressed FAQs, providing you with actionable insights to ensure a seamless and successful adoption journey. This resource equips you not only with theoretical knowledge but also with practical approaches, enabling your organization to harness the full potential of CMMI. Elevate your practices, foster continuous improvement, and embark on a transformative path towards excellence with confidence.",
        image: bg1,
        downloadLink: "/path/to/cmmi-ebook"  // Replace with the actual download link
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
            title: "Maturity Level 1",
            description: "Processes at this level are unpredictable, inadequately controlled, and reactive—attributes commonly found across all organizations.",
            images: [bg1]
        },
        {
            title: "Maturity Level 2",
            description: "This level signifies the initiation of project management excellence. Emphasis is placed on planning, execution, measurement, and vigilance. However, due to process variability based on projects, organizations often do not prioritize this level.",
            images: [bg1]
        },
        {
            title: "Maturity Level 3",
            description: "At this stage, processes become institutionalized. A Uniform process is established, applicable to all projects within the organization.",
            images: [bg1]
        },
        {
            title: "Maturity Level 4",
            description: "After institutionalization, we have to make processes predictable.",
            images: [bg1]
        },
        {
            title: "Maturity Level 5",
            description: "Where processes keep on innovating.",
            images: [bg1]
        }
    ],
    images: [bg1]  // Add more images if necessary
};

export default cmmi;
