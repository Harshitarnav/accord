// servicePageData.js
import soc_1 from '../../soc_1.png';
import soc_2 from '../../soc_2.png';
import soc_3 from '../../soc_3.png';
import csae from '../../csae.png';
import soc_cyber from '../../soc_cyber.png';
import bg1 from '../ISO/iso2.jpg';
import peer_review from '../../peer_review.png';
import cpa from '../../cpa.jpeg';
import competitive_costing from '../../competitive_costing.jpeg';
import hrt from '../../hrt.png';
import image1 from '../ISO/aviva.png';
import image2 from '../ISO/xhipment.png';
import image3 from '../ISO/hono.webp';
import image4 from '../ISO/gentronics.png';
import image5 from '../ISO/salesken.png';

const iso27001 = {
    bg: bg1,
    heading: "ISO 27001 Audit",
    headline: "The Definitive Global Benchmark for Ensuring Information Security and Building Trust.",
    features: [
      {
        name: "ISO Certified Body with IAF Accreditation",
        images: [bg1]
      },
      {
        name: "300 Clients Across 19 Countries",
        images: [peer_review]
      },
      {
        name: "California Registered CB",
        images: [cpa]
      },
      {
        name: "Cost Competitiveness",
        images: [competitive_costing]
      },
      {
        name: "Audit and Certification Support",
        images: [hrt]
      }
    ],
    menuItems: [
        {
            title: ' Preliminary Assessment',
            content: [
                'Initial help: Understand your firm\'s objectives and existing information security measures.',
                'Certified Framework Alignment: Align your with ISO standards audit.',
                'Scope Definition: Define the scope of your Information Security Management System (ISMS).'
            ]
        },
        {
            title: 'ISMS Implementation',
            content: [
                'Compliance Integration: Tailor ISO 27001 controls to meet your business\'s specific requirements.',
                'Risk Assessment: Evaluate information security risks according to iso 27001 auditor certification.',
                'Controls Integration: Identify and implement controls that align with ISO 27001.',
                'Documentation: Prepare documentation in line with ISO standards audit.'
            ]
        },
        {
            title: 'Internal Audits',
            content: [
                'Regular Audits: Conduct internal audits covering ISO 27001 requirements.',
                'Nonconformity Resolution: Address identified nonconformities and enhance security measures.',
                'Corrective Actions: Implement corrective actions to strengthen security and compliance.'
            ]
        },
        {
            title: 'Management Review',
            content: [
                'Leadership Involvement: Conduct management reviews focusing on ISMS performance.',
                'Continuous Improvement: Incorporate recommendations and identify areas for enhancement.'
            ]
        },
        {
            title: 'Certification Audit',
            content: [
                'Stage 1 Audit: Certification body reviews documentation and according to ISO 27001 services.',
                'Stage 2 Audit: On-site audit assesses ISMS implementation, focusing on ISO 27001 standards.',
                'Holistic Assessment: Findings are evaluated in the context of ISO 27001, leading to a comprehensive certification decision.'
            ]
        },
        {
            title: 'Post-Certification and Surveillance Audits',
            content: [
                'Ongoing Monitoring: Implement surveillance audits to ensure continued ISO 27001 compliance.',
                'Recertification: Periodic renewal ensures your firm\'s alignment with ISO 27001 remains robust.'
            ]
        }
    ],
    ebook: {
            title: "ISO E-BOOK!",
            description: "ISO 27001 auditor certification is an international standard for information security management that establishes a risk-based, six-step methodology for effectively managing an organization's information security risks. Without proper implementation of ISO 27001, an organization's security controls may be unproductive and disorganized. Your Understanding will help the development and implementation of ISO standards audit so that organizations can protect their information more effectively.",
            image: bg1
        },
    options: [
        {
            image: soc_1,
            title: "SOC 1",
            description: "Strengthening Control Frameworks to Meet Regulatory Requirements with our SOC services."
        },
        {
            image: soc_2,
            title: "SOC 2",
            description: "Encompassing Controls for Addressing Information Systems across Five Trust Service Criteria – Security, Availability, Confidentiality, Privacy, and Processing Integrity in SOC 1 audit."
        },
        {
            image: soc_3,
            title: "ISAE 3000/ ISAE 3402",
            description: "This is the international assurance standard that SOC audit services adhere to."
        },
        {
            image: csae,
            title: "SOC 3",
            description: "Comprehensive Security Validation Demonstrated in a Public Report for Enhanced Stakeholder and Client Trust in SOC 1 audit."
        },
        {
            image: soc_cyber,
            title: "CSAE 3000/CSAE 3416",
            description: "These are globally recognized standards that assess and assure the effectiveness of service organizations' controls and processes, enhancing trust and transparency in their operations with our SOC 1 Audit and SOC services."
        },
        {
            image: soc_1,
            title: "SOC for Cybersecurity",
            description: "Protect your digital assets with Accorp's SOC for Cybersecurity services. Strengthen defenses, detect threats, and secure your information against evolving risks."
        }
    ],
    images: [image1, image2, image3, image4, image5]
  }

export default iso27001;
