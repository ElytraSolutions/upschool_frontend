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
            { title: 'Learning Hubs', path: 'https://upschool.co/hubs' },
            { title: 'Challenges', path: 'https://upschool.co/challenges' },
            {
                title: 'Live Lessons & Events',
                path: 'https://upschool.co/live',
            },
            { title: 'Free Premium Canva', path: 'https://upschool.co/canva' },
            { title: 'The Global Goals', path: 'https://upschool.co/sdgs' },
            { title: 'Impact Films', path: 'https://upschool.co/impact-films' },
            {
                title: 'Make a Dear World Submission',
                path: 'https://upschool.co/impact-films',
            },
        ],
    },
    {
        id: 3,
        title: 'Give',
        children: [
            {
                title: 'Charities',
                path: '/https://upschool.co/charities',
                children: [
                    {
                        title: 'All Charities',
                        path: 'https://upschool.co/charities/',
                    },
                    {
                        title: 'Blue Dragon',
                        path: 'https://upschool.co/charity/blue-dragon/',
                    },
                    {
                        title: 'Edgar’s Mission',
                        path: 'https://upschool.co/charity/edgars-mission/',
                    },
                    {
                        title: 'Farmer’s Footprint',
                        path: 'https://upschool.co/charity/farmers-footprint-australia/',
                    },
                    {
                        title: 'Free To Shine',
                        path: 'https://upschool.co/charity/free-to-shine/',
                    },
                    {
                        title: 'John Fawcett Foundation',
                        path: 'https://upschool.co/charity/john-fawcett-foundation/',
                    },
                    {
                        title: 'MicroLoan Foundation',
                        path: 'https://upschool.co/charity/microloan-foundation/',
                    },
                    {
                        title: 'Ocean Youth',
                        path: 'https://upschool.co/charity/ocean-youth/',
                    },
                    {
                        title: 'Opportunity International Australia',
                        path: 'https://upschool.co/charity/opportunity-international-australia/',
                    },
                    {
                        title: 'Rainforest Rescue',
                        path: 'https://upschool.co/charity/rainforest-rescue/',
                    },
                    {
                        title: 'Seabin Foundation',
                        path: 'https://upschool.co/charity/seabin-foundation/',
                    },
                    {
                        title: 'So They Can',
                        path: 'https://upschool.co/charity/so-they-can/',
                    },
                    {
                        title: 'SolarBuddy',
                        path: 'https://upschool.co/charity/solarbuddy-org/',
                    },
                    {
                        title: 'The Jane Goodall Institute Australia',
                        path: 'https://upschool.co/charity/jane-goodall-institute-australia/',
                    },
                    {
                        title: 'Women’s Empowerment in Indian Villages',
                        path: 'https://upschool.co/charity/womens-empowerment-in-indian-villages/',
                    },
                ],
            },
            {
                title: 'Projects',
                path: 'https://upschool.co/projects',
            },
            {
                title: 'Libraries',
                path: 'https://upschool.co/libraries',
            },
            {
                title: 'Apply',
                path: '/',
                children: [
                    {
                        title: 'Register Your Charity',
                        path: 'https://upschool.co/register-your-charity',
                    },
                    {
                        title: 'Register For Library',
                        path: 'https://upschool.co/apply-library',
                    },
                    {
                        title: 'Sponser a library',
                        path: 'https://upschool.co/impact-projects',
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        title: 'Support',
        path: '/',
        children: [
            {
                title: 'Become a Partner',
                path: 'https://upschool.co/partnerships/',
            },
            {
                title: 'Buy a Product',
                path: 'https://upschool.co/#',
            },
        ],
    },
    {
        id: 5,
        title: 'Online Library',
        path: '/',
        children: [
            {
                title: 'Browse Books',
                path: 'https://upschool.co/library/',
            },
            {
                title: 'Upload Your Book',
                path: 'https://upschool.co/library/upload/',
            },
        ],
    },
    {
        id: 6,
        title: 'Resources',
        path: 'https://upschool.co/blog',
        children: [
            {
                title: 'All Resources',
                path: 'https://upschool.co/blog/',
            },
            {
                title: 'Teacher Resources',
                path: 'https://upschool.co/blog/category/teacher-resources/',
            },
            {
                title: 'Parent Resources',
                path: 'https://upschool.co/blog/category/parent-resources/',
            },
            {
                title: 'Student Resources',
                path: 'https://upschool.co/blog/category/student-resources/',
            },
            {
                title: 'Live Lesson Recordings',
                path: 'https://upschool.co/blog/category/live-lesson-replays/',
            },
            {
                title: 'Live Event Recordings',
                path: 'https://upschool.co/blog/category/live-event-replays/',
            },
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
