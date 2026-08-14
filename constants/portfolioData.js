export const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'College of Applied Science(IHRD), Kozhikode',
                degree: 'BCA',
                detail: '',
                year: '2018 - 2021'
            },
            {
                id: 1,
                title: 'Technical Higher Secondary(IHRD), Kozhikode',
                degree: '+2',
                detail: '',
                year: '2016 - 2018'
            },
        ],
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Cybrosys Technologies',
                role: 'Odoo Techno Functional Consultant',
                url: '',
                desc: 'Develop and customize Odoo ERP modules, implement business workflows, integrate third-party APIs, migrate modules across Odoo versions, optimize system performance, troubleshoot technical issues, and provide client support. Collaborate with cross-functional teams to deliver scalable ERP solutions using Python, PostgreSQL, XML, QWeb, JavaScript, and REST APIs.',
                year: 'January 2024 - Present',
                location: 'Kinfra Kakkanchery, Malappuram'
            },
            {
                id: 2,
                title: 'Futuro IT Solutions Limited',
                role: 'Python Full Stack Developer',
                url: '',
                desc: 'Worked as a trainee in python full stack development\n' +
                    'Completed various projects using python, django and django rest framework',
                year: 'March 2023 - September 2023',
                location: 'Kochi, Kerala'
            },
            {
                id: 3,
                title: 'Malabar Group',
                role: 'Associate Merchandiser',
                url: '',
                desc: 'Acted as a functional consultant for Order Management System (OMS) and Planogram-related queries, supporting All India Retail Operations. Managed and resolved OMS tickets raised by MGD stores, SCM, factories, and vendors while ensuring SLA compliance. Coordinated with stakeholders for timely ticket resolution, participated in OMS software testing, streamlined order management processes, and supported merchandising process audits.',
                year: 'December 2021 - September 2023',
                location: 'Kozhikode, Kerala'
            },
        ],
    },
];

export const expertise = [
    {
        id: 0,
        title: 'Odoo Development',
        desc: 'Custom module development across Odoo 14–17, including new addons, inherited views, workflow automation, and tailored business logic for sales, inventory, accounting, and HR modules.'
    },
    {
        id: 1,
        title: 'ERP Integration',
        desc: 'Integrating Odoo with third-party systems like payment gateways, shipping carriers, CRMs, and e-commerce platforms via REST/XML-RPC APIs, plus automating recurring business processes such as invoicing, stock sync, and reporting.'
    },
    {
        id: 2,
        title: 'Backend Development',
        desc: 'Python-based backend logic and ORM customization in Odoo, PostgreSQL query optimization, and building/consuming RESTful APIs for internal tools and external integrations.'
    },
    {
        id: 3,
        title: 'Frontend Customization',
        desc: 'Custom XML views, QWeb templates for PDF reports and dynamic web pages, and JavaScript widgets to extend Odoo\s frontend for a more tailored user experience.'
    },
    {
        id: 4,
        title: 'Odoo Implementation',
        desc: 'End-to-end Odoo ERP implementation, including business requirement analysis, module configuration, data migration, workflow setup, user role management, end-user training, go-live support, and post-implementation optimization to ensure successful ERP adoption.'
    }
];

export const portfolio = [
    {
        id: 1,
        projectName: 'Odoo SAP Integration',
        projectDetail: '\'Implemented a scheduled Odoo-to-SAP integration using REST APIs and cron jobs to automate sales order export, improving data consistency and operational efficiency.',
        technologiesUsed: [{tech: 'Odoo17'}, {tech: 'Python'}, {tech: 'REST API'}, {tech: 'SAP'}],
    },
    {
        id: 2,
        projectName: 'Telematics & Survey Checklist Workflow',
        projectDetail: 'Developed a custom telematics and survey checklist module with configurable inspection workflows, API integration for device data, automated validations, and dynamic PDF report generation to streamline field operations.',
        technologiesUsed: [{tech: 'Odoo18'}, {tech: 'Python'}, {tech: 'XML/QWeb'}, {tech: 'PostgreSQL'}],
    },
    {
        id: 3,
        projectName: 'Pagos Payment Integration',
        projectDetail: 'Integrated the Pagos payment gateway with Odoo to enable secure online payment processing, automate payment confirmation, and synchronize transaction statuses with accounting records.',
        technologiesUsed: [{tech: 'Odoo'}, {tech: 'Python'}, {tech: 'XML/QWeb'}, {tech: 'PostgreSQL'}],
    },
    {
        id: 4,
        projectName: 'Client outsourcing',
        projectDetail: 'Developed and customized Odoo modules to meet the client\'s specific business requirements. Implemented and tailored models within Odoo, aligning them with the client\'s customized workflow.',
        technologiesUsed: [{tech: 'Odoo 17,18,19'}, {tech: 'Python'}, {tech: 'XML/QWeb'}, {tech: 'PostgreSQL'}, {tech: 'OWL'}],
    },
    {
        id: 5,
        projectName: 'Third Party Integration',
        projectDetail: 'Integrated MyAADE to enhance the clients operational processes and ensure seamless data flow across platforms.',
        technologiesUsed: [{tech: 'Odoo 17'}, {tech: 'Python'}, {tech: 'XML/QWeb'}, {tech: 'PostgreSQL'}],
    },
    {
        id: 6,
        projectName: 'Transportation Management',
        projectDetail: 'Developed and customized Odoo modules to meet client requirements, designed custom models for inspection workflows, and integrated a third-party digital signature solution to streamline operations and ensure seamless data flow.',
        technologiesUsed: [{tech: 'Odoo 16'}, {tech: 'Python'}, {tech: 'XML/QWeb'}, {tech: 'PostgreSQL'}, {tech: 'Owl'}],
    },
    {
        id: 7,
        projectName: 'Workshop Management',
        projectDetail: 'Developed and customized Odoo modules to meet the client\'s specific business requirements. Efficiently manage and optimize all workshop operations and processes.',
        technologiesUsed: [{tech: 'Odoo 18'}, {tech: 'Python'}, {tech: 'XML/QWeb'}, {tech: 'PostgreSQL'}, {tech: 'Owl'}],
    },
    {
        id: 8,
        projectName: 'Odoo Implementation and Training',
        projectDetail: 'Implemented and customized Odoo ERP solutions tailored to client business processes, including Sales, Purchase, Inventory, CRM, Accounting, Point of Sale and Manufacturing. Configured workflows, automated business operations, developed custom modules, and provided end-user training to ensure successful adoption and improved operational efficiency.',
        technologiesUsed: [{tech: 'Odoo 19'}, {tech: 'Python'}, {tech: 'XML/QWeb'}, {tech: 'PostgreSQL'}],
    },
    {
        id: 9,
        projectName: 'Migration of Custom Modules',
        projectDetail: 'Successfully migrated multiple custom Odoo modules across versions (15 to 19), ensuring compatibility with updated frameworks and APIs. Refactored Python code, updated XML/QWeb views, migrated database structures, resolved deprecated features, and performed extensive testing to guarantee a seamless upgrade with minimal downtime.',
        technologiesUsed: [{tech: 'Odoo 15,16,17,18,19'}, {tech: 'Python'}, {tech: 'XML/QWeb'}, {tech: 'PostgreSQL'}, {tech: 'Owl'}],
    },
    {
        id: 10,
        projectName: 'FedEx Odoo Connector',
        projectDetail: 'Developed a custom Odoo module to integrate FedEx shipping services, providing real-time shipping rates and shipment tracking references for efficient delivery tracking.',
        technologiesUsed: [{tech: 'Odoo 18,19'}, {tech: 'Python'}, {tech: 'XML/QWeb'}, {tech: 'PostgreSQL'}, {tech: 'Owl'}],
    },
];

export const recommendations = [];

export const reviews = [];
