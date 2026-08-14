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

export default function handler(req, res) {
    res.status(200).json(expertise);
}
