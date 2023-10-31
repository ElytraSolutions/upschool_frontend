import TeacherAndStudentImage from '/images/Testimonials/girl-with-teacher-in-classroom.jpg';
import MatthewImg from '/images/Testimonials/matthew.jpeg';
import DianneImg from '/images/Testimonials/dianne.jpeg';
import DanielImg from '/images/Testimonials/daniel.jpeg';
import MarisaImg from '/images/Testimonials/Marisa.jpeg';
import BriannaImg from '/images/Testimonials/brainna.jpeg';
import DavidImg from '/images/Testimonials/david.jpeg';
import MeghaImg from '/images/Testimonials/Meghaa.jpeg';
import KennethImg from '/images/Testimonials/kenneth.jpeg';
import GabrieleImg from '/images/Testimonials/gabriele.jpg';
import Student1 from '/images/Testimonials/student_1.jpg';
import Student2 from '/images/Testimonials/student_2.jpg';
import Student3 from '/images/Testimonials/student_3.jpg';
import Student4 from '/images/Testimonials/student_4.jpg';
import Student5 from '/images/Testimonials/student_5.jpg';
import Student6 from '/images/Testimonials/student_6.jpg';
import Student7 from '/images/Testimonials/student_7.jpg';
import Student8 from '/images/Testimonials/student_8.jpg';
import Student9 from '/images/Testimonials/student_9.jpg';
import SlidingText from './SlidingText';

const TestimonialsPage = () => {
    return (
        <>
            <div className="font-lexend text-theme-color">
                {/*-----------------------------------------*/}
                <div className="flex flex-wrap ">
                    <div className="w-full lg:w-1/2 h-[60vh] md:h-[55vh] lg:h-[100vh]">
                        <img
                            className="w-full h-full object-right object-cover md:object-center lg:object-cover lg:object-right"
                            src={TeacherAndStudentImage}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <div className="w-11/12 md:w-4/5 lg:w-3/4">
                            <div className="mt-10 mb-5 lg:mt-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="53px"
                                    height="53px"
                                    viewBox="0 0 512 512"
                                    fill="#FDCF60"
                                >
                                    <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                                </svg>
                            </div>
                            <div className="font-semibold text-[40px] lg:text-[60px] text-theme-color">
                                Testimonials
                            </div>
                            <div className="text-theme-color font-light mb-10">
                                <p>
                                    The kind words we are getting about our
                                    program make it all worth while!
                                </p>
                            </div>
                            <div className="w-full">
                                <iframe
                                    className="w-full"
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/rE70YlvHBzA?si=QxXdtWWqOUZMXMIv"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------------- */}

                {/* TODO sliding text */}
                <SlidingText text={'Education That Inspires Change'} />

                {/* ------------------------------------------- */}
                <div className="grid  md:grid-cols-3 bg-[#FDCF60]">
                    <div className="pb-20 md:col-span-2 order-2 md:order-1">
                        <div className="flex mt-10 w-5/6 mx-auto lg:mx-0 lg:w-2/3 flex-col items-center lg:items-start lg:flex-row">
                            <div className="w-full lg:w-1/3 flex items-start lg:justify-end ml-2 xl:ml-10 lg:mr-6">
                                <img className="object-fit" src={MatthewImg} />
                            </div>
                            <div className="w-full lg:w-2/3 text-theme-color">
                                <div className="mt-5 lg:mt-0 font-extrabold text-4xl">
                                    MATTHEW PANAYOTOPOULOS
                                </div>
                                <br />
                                <div className="font-semibold text-sm mb-7">
                                    Director of Learning – St Euphemia College,
                                    Bankstown
                                </div>
                                <div>
                                    <div className="text-sm leading-7">
                                        “
                                        <span className="font-bold italic">
                                            Witnessing the students at St
                                            Euphemia College thrive with passion
                                            and grit through the Changemakers
                                            project has been a career highlight.
                                        </span>{' '}
                                        <span>
                                            Upschool empowers students to have a
                                            huge impact on a local and global
                                            scale. Our students have
                                            demonstrated a great depth of
                                            empathy to research, discover and
                                            understand the inequalities that
                                            exist in education in third world
                                            countries. They have used their
                                            voice and hand to reach out to
                                            businesses, peers and politicians to
                                            promote awareness and support for
                                            the library project. More
                                            importantly, they’ve learnt how to
                                            make a difference for problems they
                                            see and hear in the world around
                                            them. I have seen our future event
                                            planners and entrepreneurs in both
                                            the lemonade stands and the bake
                                            sales. I have seen our future
                                            storytellers, authors, and
                                            politicians in the persuasive
                                            letters, emails, and phone calls. I
                                            have seen our future graphic
                                            designers, marketing experts and
                                            artists in their creative and
                                            persuasive designs. I have seen our
                                            future accountants as they have
                                            solved our budgeting issues. I have
                                            seen our future educators in the
                                            leadership they’ve shown to spread
                                            awareness to their peers and inspire
                                            change.{' '}
                                        </span>
                                        <span className="font-bold italic">
                                            Thank you Richard and Gavin for
                                            showing us the global standard for
                                            education”
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 h-full order-1 md:order-2 relative">
                        <img
                            className="w-full h-full object-cover object-right"
                            src={Student1}
                        />
                        <div className="px-3 absolute bottom-0 left-0 text-theme-color font-extrabold font-roboto text-[40px] lg:text-[50px] xl:text-[60px] bg-[#FDCF60]">
                            PURPOSE
                        </div>
                    </div>
                </div>
                {/* -------------------------------------------- */}
                <div className="mt-5 md:mt-0 grid md:grid-cols-2 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                        <img
                            className="w-full h-[40vh] md:h-[100vh] object-cover object-center"
                            src={Student2}
                        />
                    </div>
                    <div className="lg:col-span-2 w-full h-full flex items-center lg:justify-end">
                        <div className="flex flex-col w-5/6 md:w-4/5 mx-auto lg:w-2/3 lg:mx-0">
                            <div className="lg:w-3/4">
                                <div className="mt-[-60px] md:mt-10 xl:mt-0">
                                    <img
                                        className="object-fit"
                                        src={DianneImg}
                                    />
                                </div>
                                <div className="mt-5 font-extrabold text-4xl">
                                    DIANNE LOVAT
                                </div>
                                <br />
                                <div className="font-semibold text-sm mb-7">
                                    Teacher – Lower Plenty Primary School
                                </div>
                                <div className="text-sm leading-7">
                                    <p className="mt-4">
                                        <span>
                                            “In only three months of working in
                                            partnership with Upschool,{' '}
                                        </span>
                                        <span className="font-bold italic">
                                            I am feeling more inspired to teach
                                            than I ever have in 18 years of
                                            education.
                                        </span>
                                    </p>
                                    <p className="mt-4">
                                        I love that I can see the children
                                        engaged in their learning with
                                        excitement. Rather than feeling like I
                                        am teaching to the curriculum, I feel
                                        like I am guiding their learning and
                                        merely providing them with the tools to
                                        acquire knowledge based on their
                                        interests.
                                    </p>
                                    <p className="mt-4">
                                        Funnily enough, I am learning things I
                                        never knew along with the children.
                                    </p>
                                    <p className="mt-4">
                                        Most importantly, above all, I can feel
                                        a sense of respect building between the
                                        children and myself, and that alone is a
                                        very powerful and beautiful feeling”.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------------------------------------- */}

                {/* TODO sliding text */}
                <SlidingText text={'WORLD CLASS EDUCATIONAL EXPERIENCES'} />
                {/* ---------------------------------------------- */}
                <div className="grid  md:grid-cols-3 bg-[#FDCF60]">
                    <div className="pb-20 md:pb-0 md:col-span-2 order-2 md:order-1 flex flex-col justify-center">
                        <div className="flex mt-10 w-5/6 mx-auto lg:mx-0 lg:w-2/3 flex-col items-center lg:items-start lg:flex-row">
                            <div className="w-full lg:w-1/3 flex items-start lg:justify-end ml-2 xl:ml-10 lg:mr-6">
                                <img className="object-fit" src={DanielImg} />
                            </div>
                            <div className="lg:w-2/3 text-theme-color">
                                <div className="mt-5 lg:mt-0 font-extrabold text-4xl">
                                    DANIEL FREW
                                </div>
                                <br />
                                <div className="font-semibold text-sm mb-7">
                                    Principal – Lower Plenty Primary School
                                </div>
                                <div>
                                    <div className="text-sm leading-7">
                                        <span>
                                            “It has been a privilege for our
                                            children to be a part of the initial
                                            Upschool program focussing on
                                            creating a Change-Making Community.
                                            Our students have been engaged from
                                            the outset, and we have seen a
                                            measurable improvement in not only
                                            their literacy skills but also in
                                            their empathy towards others and
                                            their understanding of how to
                                            connect to communities both locally
                                            and abroad.
                                        </span>
                                        <span className="font-bold italic">
                                            The resources that are provided are
                                            outstanding and have kept our
                                            students motivated towards their
                                            goals.
                                        </span>
                                        <span>”</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 h-full order-1 md:order-2 relative">
                        <img
                            className="w-full h-full md:h-[100vh] object-cover object-center"
                            src={Student3}
                        />
                        <div className="px-3 absolute bottom-0 left-0 text-theme-color font-extrabold font-roboto text-[40px] md:text-[30px] lg:text-[40px] xl:text-[50px] bg-[#FDCF60]">
                            REAL-WORLD
                        </div>
                    </div>
                </div>
                {/* ----------------------------------------------- */}
                <div className="mt-5 md:mt-0 grid md:grid-cols-2 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                        <img
                            className="w-full h-[40vh] md:h-full xl:h-[100vh] object-cover object-center"
                            src={Student4}
                        />
                    </div>
                    <div className="lg:col-span-2 w-full h-full flex items-center lg:justify-end">
                        <div className="flex flex-col w-5/6 md:w-4/5 mx-auto lg:w-2/3 lg:mx-0">
                            <div className="md:mt-10 mb-5 xl:mt-0  lg:w-3/4">
                                <div className="mt-[-60px] md:mt-10 xl:mt-0">
                                    <img
                                        className="object-fit"
                                        src={MarisaImg}
                                    />
                                </div>
                                <div className="mt-5 font-extrabold text-4xl">
                                    MARISA MATTHYS
                                </div>
                                <br />
                                <div className="font-semibold text-sm mb-7">
                                    Principal – St Mary’s, Greensborough
                                </div>
                                <div className="text-sm leading-7">
                                    <p className="mt-4">
                                        “St Mary’s is extremely proud to support
                                        Upschool.
                                    </p>
                                    <p className="font-bold italic mt-4">
                                        Our students are so engaged and tell us
                                        how much they love the learning.
                                        Students have been wanting to work on
                                        their projects even during their break
                                        times because this learning is
                                        meaningful and empowers them to make a
                                        difference in the world and in the lives
                                        of others.
                                    </p>
                                    <p className="font-bold italic mt-4">
                                        Parents have told us how excited their
                                        children are about Upschool.
                                    </p>
                                    <p className="mt-4">
                                        The staff have commented on the
                                        engagement of the students and how it
                                        allows them to have ownership over their
                                        learning.
                                    </p>
                                    <p className="mt-4">
                                        This type of learning aligns so
                                        beautifully with our school priority of
                                        Student Engagement and our goal to embed
                                        practices that provide students with
                                        authentic empowerment over their
                                        learning and wellbeing through agency,
                                        voice and leadership. Thank you
                                        Upschool.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div className="grid  md:grid-cols-3 bg-[#FDCF60]">
                    <div className="pb-20 md:pb-0 md:col-span-2 order-2 md:order-1 flex flex-col justify-center">
                        <div className="flex mt-10 w-5/6 mx-auto lg:mx-0 lg:w-2/3 flex-col items-center lg:items-start lg:flex-row">
                            <div className="w-full lg:w-1/3 flex items-start lg:justify-end ml-2 xl:ml-10 lg:mr-6">
                                <img className="object-fit" src={BriannaImg} />
                            </div>
                            <div className="lg:w-2/3 text-theme-color">
                                <div className="mt-5 lg:mt-0 font-extrabold text-4xl">
                                    BRIANNA WITTE
                                </div>
                                <br />
                                <div className="font-semibold text-sm mb-7">
                                    Director of “THRIVE” – Haileybury College
                                </div>
                                <div>
                                    <div className="text-sm leading-7">
                                        “
                                        <span className="font-bold italic">
                                            At Haileybury, we are committed to
                                            working with providers who are at
                                            the forefront of their fields.
                                        </span>
                                        <span>
                                            The work that Gavin and Richard are
                                            providing is exactly that; tailor
                                            made curriculum that actively
                                            contributes to the betterment of our
                                            students. I fully believe that the
                                            Upschool program will enable our
                                            students to develop real-world,
                                            future-ready skills. I am excited
                                            for our continued partnership, and
                                            to have a chance to positively
                                            impact our global community.”
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 h-full order-1 md:order-2 relative">
                        <img
                            className="w-full h-full md:h-[100vh] object-cover object-center"
                            src={Student5}
                        />
                        <div className="px-3 absolute bottom-0 left-0 text-theme-color font-extrabold font-roboto text-[40px] md:text-[30px] lg:text-[35px] xl:text-[40px] bg-[#FDCF60]">
                            GLOBAL IMPACT
                        </div>
                    </div>
                </div>
                {/* ------------------------------------ */}
                <div className="mt-5 md:mt-0 grid md:grid-cols-2 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                        <img
                            className="w-full h-[40vh] md:h-full xl:h-[100vh] object-cover object-center"
                            src={Student6}
                        />
                    </div>
                    <div className="lg:col-span-2 w-full h-full flex items-center lg:justify-end">
                        <div className="flex flex-col w-5/6 md:w-4/5 mx-auto lg:w-2/3 lg:mx-0">
                            <div className="md:mt-10 mb-5 xl:mt-0  lg:w-3/4">
                                <div className="mt-[-60px] md:mt-10 xl:mt-0">
                                    <img
                                        className="object-fit"
                                        src={DavidImg}
                                    />
                                </div>
                                <div className="mt-5 font-extrabold text-4xl">
                                    DAVID PELOSI
                                </div>
                                <br />
                                <div className="font-semibold text-sm mb-7">
                                    Principal – Box Hill North Primary School
                                </div>
                                <div className="text-sm leading-7">
                                    <p>
                                        <span className="font-bold italic">
                                            “Upschool is the dream of every
                                            principal, teacher, parent and
                                            ultimately, student. The opportunity
                                            to be involved in the initial stages
                                            is not only exciting, it’s essential
                                            to the potential of reshaping
                                            education.
                                        </span>{' '}
                                        Our community is already buzzing with
                                        the promise of shifting from engagement
                                        to empowerment, using the voice and
                                        agency of young minds with the support
                                        of our community and beyond to make a
                                        positive difference.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------------------------------- */}
                <div className="grid  md:grid-cols-3 bg-[#FDCF60]">
                    <div className="pb-20 md:pb-0 md:col-span-2 order-2 md:order-1 flex flex-col justify-center">
                        <div className="flex mt-10 w-5/6 mx-auto lg:mx-0 lg:w-2/3 flex-col items-center lg:items-start lg:flex-row">
                            <div className="w-full lg:w-1/3 flex items-start lg:justify-end ml-2 xl:ml-10 lg:mr-6">
                                <img className="object-fit" src={MeghaImg} />
                            </div>
                            <div className="lg:w-2/3 text-theme-color">
                                <div className="mt-5 lg:mt-0 font-extrabold text-4xl">
                                    MEGHAA AHUJA
                                </div>
                                <br />
                                <div className="font-semibold text-sm mb-7">
                                    Principal, RISSE, The Xperiential School
                                    Nashik
                                </div>
                                <div>
                                    <div className="text-sm leading-7">
                                        <p>
                                            “Upschool is a blessing for the
                                            schools striving to implement
                                            pedagogy in line with New Education
                                            Policy 2020. It helped us implement
                                            Project Based Learning in the
                                            classroom through the ‘Be The Change
                                            Project.’ It has some fantastic
                                            resources for teachers and students
                                            that have helped us in
                                            differentiation and developing
                                            student agency. The integrated
                                            projects inspires students to take
                                            action in real life and provide
                                            meaningful learning experiences. We
                                            are able to integrate their projects
                                            seamlessly into our curriculum by
                                            assigning them as a part of the
                                            portfolio. The platform is highly
                                            engaging and students look forward
                                            to participating in different
                                            activities through the platform.”
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 h-full order-1 md:order-2 relative">
                        <img
                            className="w-full h-full md:h-[100vh] object-cover object-center"
                            src={Student7}
                        />
                        <div className="px-3 absolute bottom-0 left-0 text-theme-color font-extrabold font-roboto text-[40px] md:text-[35px] lg:text-[40px] xl:text-[45px] bg-[#FDCF60]">
                            PURPOSEFUL
                        </div>
                    </div>
                </div>
                {/* -------------------------------------- */}
                <div className="mt-5 md:mt-0 grid md:grid-cols-2 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                        <img
                            className="w-full h-[40vh] md:h-full xl:h-[100vh] object-cover object-center"
                            src={Student8}
                        />
                    </div>
                    <div className="lg:col-span-2 w-full h-full flex items-center lg:justify-end">
                        <div className="flex flex-col w-5/6 md:w-4/5 mx-auto lg:w-2/3 lg:mx-0">
                            <div className="md:mt-10 mb-5 xl:mt-0  lg:w-3/4">
                                <div className="mt-[-60px] md:mt-10 xl:mt-0">
                                    <img
                                        className="object-fit"
                                        src={KennethImg}
                                    />
                                </div>
                                <div className="mt-5 font-extrabold text-4xl">
                                    KENNETH LOWE, 39
                                </div>
                                <br />
                                <div className="font-semibold text-sm mb-7">
                                    Home-school Mom
                                </div>
                                <div className="text-sm leading-7">
                                    <p>
                                        “My daughter truly enjoyed the writing
                                        course. She loves writing stories but
                                        never got the chance to publish her work
                                        which would normally cost a lot of
                                        money.:) While here in Upschool, it’s
                                        completely free! And she’s very excited
                                        about her 1st book being published. It’s
                                        not just about writing a story but also
                                        helping charities which makes it really
                                        worth it.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------ */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                        <img
                            className="w-full h-[40vh] md:h-full xl:h-[100vh] object-cover object-center"
                            src={Student9}
                        />
                    </div>
                    <div className="lg:col-span-2 w-full h-full flex items-center lg:justify-end">
                        <div className="flex flex-col w-5/6 md:w-4/5 mx-auto lg:w-2/3 lg:mx-0">
                            <div className="md:mt-10 mb-5 xl:mt-0  lg:w-3/4">
                                <div className="mt-[-60px] md:mt-10 xl:mt-0">
                                    <img
                                        className="object-fit"
                                        src={GabrieleImg}
                                    />
                                </div>
                                <div className="mt-5 font-extrabold text-4xl">
                                    GABRIELE HOGG
                                </div>
                                <br />
                                <div className="font-semibold text-sm mb-7">
                                    Principal – Murrabit Group School
                                </div>
                                <div className="text-sm leading-7">
                                    <p>
                                        “I am so grateful for the time and
                                        professional resources that the Upschool
                                        team have created, enabling our students
                                        to be immersed in purposeful learning
                                        opportunities through literacy,
                                        technology, arts and wellbeing
                                        curriculum. After my time teaching IB in
                                        China and integrating Inquiry learning
                                        in our little, rural school in
                                        Australia, the first Upschool offering,
                                        Writing A Narrative With A Purpose, just
                                        jumped out at me. My Grade 5/6 students
                                        were engaged from the beginning with
                                        this multimodal approach that built and
                                        unfolded every week. Students were
                                        thrilled they produced such beautiful
                                        books to share with the world while also
                                        raising funds to help others. It warmed
                                        my heart and filled me with pride, when
                                        one of our students’ books was chosen by
                                        Gavin to share in his teaching to 3000
                                        Afghan girls, and also with the CEO of
                                        her chosen charity. A wonderful program
                                        I’d highly recommend to all other
                                        schools.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---------------------------------------- */}
                <div className="mt-16 w-5/6 md:w-11/12 mx-auto">
                    <div className="text-center mb-20">
                        <div className="mt-5 font-extrabold text-4xl">
                            More Kind Words...
                        </div>
                        <div className="mt-5 text-sm">
                            We are humbled by the support we get from all of the
                            people that participate in our programs
                        </div>
                    </div>
                    <div className="mt-10 mb-20 grid md:grid-cols-4 md:gap-4 text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start md:grid md:grid-cols-4">
                            <div className="md:col-span-1 mb-5 md:mb-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="aa114b93-1701-44bd-bf37-4c37a279c2a2"
                                    data-name="Layer 1"
                                    width="32.2266"
                                    height="30.5273"
                                    viewBox="0 0 32.2266 30.5273"
                                    fill="#FDCF60"
                                >
                                    <path
                                        d="M4.0273,5.4961Q.57,10.1836.57,18.8555V30.6328H13.0508V17.8594H6.6641q-.0587-.7032-.0879-.9082a3.5846,3.5846,0,0,1-.0293-.4981,16.0189,16.0189,0,0,1,.82-4.98q1.6406-5.0978,5.6836-5.8594V.1055A12.8307,12.8307,0,0,0,4.0273,5.4961Z"
                                        transform="translate(-0.5703 -0.1055)"
                                    ></path>
                                    <path
                                        d="M32.7969,5.6133V.1055a11.8283,11.8283,0,0,0-9.6094,6.2988,25.9887,25.9887,0,0,0-2.93,12.4512V30.6328H32.7969V17.8594H26.41a3.9921,3.9921,0,0,1-.1465-.7617q-.0294-.3516-.0293-.7032a14.8593,14.8593,0,0,1,1.67-7.1484A6.5694,6.5694,0,0,1,32.7969,5.6133Z"
                                        transform="translate(-0.5703 -0.1055)"
                                    ></path>
                                </svg>
                            </div>
                            <div className="md:col-span-3">
                                <div className="font-light">
                                    This is exactly the direction we want to
                                    take our school in. The concept is
                                    incredible. We are so excited to be one of
                                    the first schools to join you.
                                </div>
                                <div className="mt-3 mb-8 md:mt-10 md:mb-0 font-semibold">
                                    Principal, Melbourne
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start md:grid md:grid-cols-4">
                            <div className="md:col-span-1 mb-5 md:mb-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="aa114b93-1701-44bd-bf37-4c37a279c2a2"
                                    data-name="Layer 1"
                                    width="32.2266"
                                    height="30.5273"
                                    viewBox="0 0 32.2266 30.5273"
                                    fill="#FDCF60"
                                >
                                    <path
                                        d="M4.0273,5.4961Q.57,10.1836.57,18.8555V30.6328H13.0508V17.8594H6.6641q-.0587-.7032-.0879-.9082a3.5846,3.5846,0,0,1-.0293-.4981,16.0189,16.0189,0,0,1,.82-4.98q1.6406-5.0978,5.6836-5.8594V.1055A12.8307,12.8307,0,0,0,4.0273,5.4961Z"
                                        transform="translate(-0.5703 -0.1055)"
                                    ></path>
                                    <path
                                        d="M32.7969,5.6133V.1055a11.8283,11.8283,0,0,0-9.6094,6.2988,25.9887,25.9887,0,0,0-2.93,12.4512V30.6328H32.7969V17.8594H26.41a3.9921,3.9921,0,0,1-.1465-.7617q-.0294-.3516-.0293-.7032a14.8593,14.8593,0,0,1,1.67-7.1484A6.5694,6.5694,0,0,1,32.7969,5.6133Z"
                                        transform="translate(-0.5703 -0.1055)"
                                    ></path>
                                </svg>
                            </div>
                            <div className="md:col-span-3">
                                <div className="font-light">
                                    This ticks every box we are looking for.
                                    Real-world learning, student voice, student
                                    agency, creative and critical thinking,
                                    skill development, global citizenship.
                                    Children doing good in the world. And it's
                                    free!!
                                </div>
                                <div className="mt-3 mb-8 md:mt-10 md:mb-0 font-semibold">
                                    Principal, Melbourne
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start md:grid md:grid-cols-4">
                            <div className="md:col-span-1 mb-5 md:mb-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="aa114b93-1701-44bd-bf37-4c37a279c2a2"
                                    data-name="Layer 1"
                                    width="32.2266"
                                    height="30.5273"
                                    viewBox="0 0 32.2266 30.5273"
                                    fill="#FDCF60"
                                >
                                    <path
                                        d="M4.0273,5.4961Q.57,10.1836.57,18.8555V30.6328H13.0508V17.8594H6.6641q-.0587-.7032-.0879-.9082a3.5846,3.5846,0,0,1-.0293-.4981,16.0189,16.0189,0,0,1,.82-4.98q1.6406-5.0978,5.6836-5.8594V.1055A12.8307,12.8307,0,0,0,4.0273,5.4961Z"
                                        transform="translate(-0.5703 -0.1055)"
                                    ></path>
                                    <path
                                        d="M32.7969,5.6133V.1055a11.8283,11.8283,0,0,0-9.6094,6.2988,25.9887,25.9887,0,0,0-2.93,12.4512V30.6328H32.7969V17.8594H26.41a3.9921,3.9921,0,0,1-.1465-.7617q-.0294-.3516-.0293-.7032a14.8593,14.8593,0,0,1,1.67-7.1484A6.5694,6.5694,0,0,1,32.7969,5.6133Z"
                                        transform="translate(-0.5703 -0.1055)"
                                    ></path>
                                </svg>
                            </div>
                            <div className="md:col-span-3">
                                <div className="font-light">
                                    This is brilliant. I wish this was available
                                    when I went to school.
                                </div>
                                <div className="mt-3 mb-8 md:mt-10 md:mb-0 font-semibold">
                                    Entrepreneur, Melbourne
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start md:grid md:grid-cols-4">
                            <div className="md:col-span-1 mb-5 md:mb-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="aa114b93-1701-44bd-bf37-4c37a279c2a2"
                                    data-name="Layer 1"
                                    width="32.2266"
                                    height="30.5273"
                                    viewBox="0 0 32.2266 30.5273"
                                    fill="#FDCF60"
                                >
                                    <path
                                        d="M4.0273,5.4961Q.57,10.1836.57,18.8555V30.6328H13.0508V17.8594H6.6641q-.0587-.7032-.0879-.9082a3.5846,3.5846,0,0,1-.0293-.4981,16.0189,16.0189,0,0,1,.82-4.98q1.6406-5.0978,5.6836-5.8594V.1055A12.8307,12.8307,0,0,0,4.0273,5.4961Z"
                                        transform="translate(-0.5703 -0.1055)"
                                    ></path>
                                    <path
                                        d="M32.7969,5.6133V.1055a11.8283,11.8283,0,0,0-9.6094,6.2988,25.9887,25.9887,0,0,0-2.93,12.4512V30.6328H32.7969V17.8594H26.41a3.9921,3.9921,0,0,1-.1465-.7617q-.0294-.3516-.0293-.7032a14.8593,14.8593,0,0,1,1.67-7.1484A6.5694,6.5694,0,0,1,32.7969,5.6133Z"
                                        transform="translate(-0.5703 -0.1055)"
                                    ></path>
                                </svg>
                            </div>
                            <div className="md:col-span-3">
                                <div className="font-light">
                                    Wow. This sounds like the future of
                                    education. I am going to make it my business
                                    to get you in front of the ministers for
                                    education, sustainability and technology so
                                    they can hear about this project. I love it.
                                </div>
                                <div className="mt-3 md:mt-10 md:mb-0 font-semibold">
                                    Politician, Victoria
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------ */}
            </div>
        </>
    );
};

export default TestimonialsPage;
