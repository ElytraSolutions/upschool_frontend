import React from "react";
import CourseCard from "../../components/Cards/courseCard";

interface CourseData {
  title: string;
  short_description: string;
  thumbnail: string;
}

function allCourses() {
  const datas: CourseData[] = [
    {
      title: "10-Week Course",
      short_description:
        "Upschool’s 10-week courses are designed to empower students to find their voice, refine and develop their message and teach them how to collaborate with each other so that they can create the change they want to see in the world.",
      thumbnail: "https://upschool.co/wp-content/uploads/elementor/thumbs/Power-of-One-Featured-Image-q6zniokhan64z3kxkjob19rd1y1e0uxzv1ti5urxr4.png",
    },
    {
      title: "Short Course",
      short_description:
        "Upschool’s short courses are designed to empower students to find their voice, refine and develop their message and teach them how to collaborate with each other so that they can create the change they want to see in the world.",
      thumbnail: "https://upschool.co/wp-content/uploads/elementor/thumbs/Power-of-One-Featured-Image-q6zniokhan64z3kxkjob19rd1y1e0uxzv1ti5urxr4.png",
    },
    {
      title: "10-Week Course",
      short_description:
        "Upschool’s 10-week courses are designed to empower students to find their voice, refine and develop their message and teach them how to collaborate with each other so that they can create the change they want to see in the world.",
      thumbnail: "https://upschool.co/wp-content/uploads/elementor/thumbs/Power-of-One-Featured-Image-q6zniokhan64z3kxkjob19rd1y1e0uxzv1ti5urxr4.png",
    },
    {
      title: "Short Course",
      short_description:
        "Upschool’s short courses are designed to empower students to find their voice, refine and develop their message and teach them how to collaborate with each other so that they can create the change they want to see in the world.",
      thumbnail: "https://upschool.co/wp-content/uploads/elementor/thumbs/Power-of-One-Featured-Image-q6zniokhan64z3kxkjob19rd1y1e0uxzv1ti5urxr4.png",
    },
  ];

  return (
    <>
      <div>
        <div className="bg-gradient-to-b text-[#fff] from-[#242254] to-[#b81242] flex flex-col justfy-center items-center p-24">
          <h1 className="text-4xl text-center font-bold">
            Explore Upschool's Courses
          </h1>
          <div className="flex flex-wrap mt-4 justify-center">
            <div className="py-2">
              <a href="#10-weeks" className="px-4  border-r-2">
                10-Week Course
              </a>
            </div>
            <div className="py-2">
              <a href="#short-course" className="px-4  border-r-2">
                Short Course
              </a>
            </div>
            <div className="py-2">
              <a href="#social-scenarios" className="px-4  border-r-2">
                Social Scenarios
              </a>
            </div>
            <div className="py-2">
              <a href="#comprehension-corner" className="px-4  border-r-2">
                Comprehension Corner
              </a>
            </div>
            <div className="py-2">
              <a href="#teacher-training" className="px-4  ">
                Teacher Training
              </a>
            </div>
          </div>
        </div>
        <div id="10-weeks" className="my-10 max-w-6xl mx-auto">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-[#242254]">
              10-week Courses
            </h1>
            {datas.map((data) => (
              <div>
                <CourseCard key={data.title} data={data} />
              </div>
            ))}
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold text-[#242254]">Short Courses</h1>
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold text-[#242254]">
              Social Scenarios
            </h1>
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold text-[#242254]">
              Comprehension Corners
            </h1>
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold text-[#242254]">
              Teacher Trainings
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default allCourses;
