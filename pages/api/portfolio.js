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

export default function handler(req, res) {
    res.status(200).json(portfolio);
}
