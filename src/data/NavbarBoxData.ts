const data = [
    {
        id: 1,
        title: 'Courses',
        path: '/courses',
        children: [
            { title: '10-week Courses', path: '/courses#10-week-courses' },
            { title: 'Short Courses', path: '/courses#short-courses' },
            { title: 'Social scenarios', path: '/courses#social-scenarios' },
            {
                title: 'Comprehension Corner',
                path: '/courses#comprehension-corner',
            },
            { title: 'Teacher Training', path: '/courses#short-courses' },
        ],
    },
    {
        id: 2,
        title: 'Learn',
        children: [
            { title: 'All Courses', path: '/courses' },
            { title: 'Learning Hubs', path: 'demo' },
            { title: 'Challenges', path: 'demo' },
        ],
    },
    {
        id: 3,
        title: 'Give',
        children: [
            {
                title: 'Charities',
                path: '/demo',
                children: [
                    // TODO charaties should be fetched from backend
                    {
                        title: 'All Charaties',
                        path: '/',
                    },
                    { title: 'Blue Dragon', path: 'demo' },
                    { title: "Edgar's Mission", path: 'demo' },
                ],
            },
            {
                title: 'Projects',
                path: '/',
            },
            {
                title: 'Libraries',
                path: '/',
            },
            {
                title: 'Apply',
                path: '/',
                children: [
                    {
                        title: 'Register For Charity',
                        path: '/',
                    },
                    { title: 'Register For Library', path: 'demo' },
                    { title: 'Sponser a library', path: 'demo' },
                ],
            },
        ],
    },
    {
        id: 4,
        title: 'Library',
        path: '/',
        children: [
            {
                title: 'Browse A Book',
                path: '/',
            },
            { title: 'Upload Your Book', path: 'demo' },
        ],
    },
    {
        id: 5,
        title: 'Resource Center',
        path: '/',
        children: [
            {
                title: 'ALL Resource',
                path: '/',
            },
            { title: 'Teacher Resource', path: 'demo' },
            { title: 'Parent Resource', path: 'demo' },
            { title: 'Student Resource', path: 'demo' },
            { title: 'Live Session Recording', path: 'demo' },
            { title: 'Live Event Recording', path: 'demo' },
        ],
    },
    {
        id: 6,
        title: 'Products',
        path: '/',
        children: [
            {
                title: 'P1',
                path: '/',
            },
            { title: 'P2', path: 'demo' },
            { title: 'P3', path: 'demo' },
        ],
    },
    {
        id: 7,
        title: 'About',
        path: '/about',
        children: [
            {
                title: 'Our Framework',
                path: '/our-framework',
            },
            { title: 'Mission', path: '/about' },
            { title: 'FAQ', path: '/faq' },
            { title: 'Testimonials', path: '/testimonials' },
            { title: 'Contact', path: '/contact' },
            { title: 'Acknowledgement of Country', path: '/acknowledgement' },
        ],
    },
];

const userData = {
    id: 1,
    title: 'Upschool',
    children: [
        { title: 'Register for Upschool', path: '/register' },
        { title: 'Bulk Registration', path: 'demo' },
        { title: 'Request a Tour', path: 'demo' },
    ],
};

const navData = {
    id: 8,
    title: 'Take a Tour',
    path: '/',
};

export { data, userData, navData };
