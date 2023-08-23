const data = [
  {
    id: 1,
    title: "Courses",
    children: [
      {
        title: "Register for Upschool",
        path: "https://www.youtube.com/",
      },
      { title: "Bulk Registration", path: "test" },
      { title: "Request a Tour", path: "test" },
    ],
  },
  {
    id: 2,
    title: "Learn",
    children: [
      { title: "All Courses", path: "https://www.youtube.com/" },
      { title: "Learning Hubs", path: "test" },
      { title: "Challenges", path: "test" },
    ],
  },
  {
    id: 3,
    title: "Give",
    children: [
      {
        title: "Charities",
        path: "/test",
        children: [
          {
            title: "All Charaties",
            path: "https://www.youtube.com/",
          },
          { title: "Blue Dragon", path: "test" },
          { title: "Edgar's Mission", path: "test" },
        ],
      },
      {
        title: "Projects",
        path: "https://www.youtube.com/",
      },
      {
        title: "Libraries",
        path: "https://www.youtube.com/",
      },
      {
        title: "Apply",
        path: "https://www.youtube.com/",
        children: [
          { title: "All Charaties", path: "https://www.youtube.com/" },
          { title: "Blue Dragon", path: "test" },
          { title: "Edgar's Mission check apple", path: "test" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Library",
    path: "https://www.youtube.com/",
    children: [
      { title: "Register for Upschool", path: "https://www.youtube.com/" },
      { title: "Bulk Registration", path: "test" },
      { title: "Request a Tour", path: "test" },
    ],
  },
  {
    id: 5,
    title: "Resource Center",
    path: "https://www.youtube.com/",
    children: [
      { title: "Register for Upschool", path: "https://www.youtube.com/" },
      { title: "Bulk Registration", path: "test" },
      { title: "Request a Tour", path: "test" },
    ],
  },
  {
    id: 6,
    title: "Products",
    path: "https://www.youtube.com/",
    children: [
      { title: "Register for Upschool", path: "https://www.youtube.com/" },
      { title: "Bulk Registration", path: "test" },
      { title: "Request a Tour", path: "test" },
    ],
  },
  {
    id: 7,
    title: "About",
    path: "https://www.youtube.com/",
    children: [
      { title: "Register for Upschool", path: "https://www.youtube.com/" },
      { title: "Bulk Registration", path: "test" },
      { title: "Request a Tour", path: "test" },
    ],
  },
];

const userData = {
  id: 1,
  title: "Upschool",
  children: [
    { title: "Register for Upschool", path: "https://www.youtube.com/" },
    { title: "Bulk Registration", path: "test" },
    { title: "Request a Tour", path: "test" },
  ],
};

const navData = {
  id: 8,
  title: "Take a Tour",
  path: "https://www.youtube.com/",
};

export { data, userData, navData };
