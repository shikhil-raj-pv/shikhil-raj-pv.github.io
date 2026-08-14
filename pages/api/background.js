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

export default function handler(req, res) {
    res.status(200).json(background);
}
