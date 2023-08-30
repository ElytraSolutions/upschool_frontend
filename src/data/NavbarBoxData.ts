const data = [
    {
        id: 1,
        title: 'Courses',
        children: [
            {
                title: 'Register for Upschool',
                path: '/regiter',
            },
            { title: 'Bulk Registration', path: 'test' },
            { title: 'Request a Tour', path: 'test' },
        ],
    },
    {
        id: 2,
        title: 'Learn',
        children: [
            { title: 'All Courses', path: '/courses' },
            { title: 'Learning Hubs', path: 'test' },
            { title: 'Challenges', path: 'test' },
        ],
    },
    {
        id: 3,
        title: 'Give',
        children: [
            {
                title: 'Charities',
                path: '/test',
                children: [
                    // TODO charaties should be fetched from backend
                    {
                        title: 'All Charaties',
                        path: '/',
                    },
                    { title: 'Blue Dragon', path: 'test' },
                    { title: "Edgar's Mission", path: 'test' },
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
                        title: 'All Charaties',
                        path: '/',
                    },
                    { title: 'Blue Dragon', path: 'test' },
                    { title: "Edgar's Mission check apple", path: 'test' },
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
                title: 'Register for Upschool',
                path: '/',
            },
            { title: 'Bulk Registration', path: 'test' },
            { title: 'Request a Tour', path: 'test' },
        ],
    },
    {
        id: 5,
        title: 'Resource Center',
        path: '/',
        children: [
            {
                title: 'Register for Upschool',
                path: '/',
            },
            { title: 'Bulk Registration', path: 'test' },
            { title: 'Request a Tour', path: 'test' },
        ],
    },
    {
        id: 6,
        title: 'Products',
        path: '/',
        children: [
            {
                title: 'Register for Upschool',
                path: '/',
            },
            { title: 'Bulk Registration', path: 'test' },
            { title: 'Request a Tour', path: 'test' },
        ],
    },
    {
        id: 7,
        title: 'About',
        path: '/about',
        children: [
            {
                title: 'Register for Upschool',
                path: '/',
            },
            { title: 'Bulk Registration', path: 'test' },
            { title: 'Request a Tour', path: 'test' },
        ],
    },
];

const userData = {
    id: 1,
    title: 'Upschool',
    children: [
        { title: 'Register for Upschool', path: '/register' },
        { title: 'Bulk Registration', path: 'test' },
        { title: 'Request a Tour', path: 'test' },
    ],
};

const navData = {
    id: 8,
    title: 'Take a Tour',
    path: '/',
};

export { data, userData, navData };
