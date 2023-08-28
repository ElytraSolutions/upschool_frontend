import React from 'react';

const TestimonialsPage = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4">
                    <div className="bg-gray-100 p-4">
                        <i className="fas fa-comment-dots text-5xl text-blue-500"></i>
                    </div>
                    <h1 className="text-3xl font-bold mt-4">Testimonials</h1>
                    <p className="mt-4">
                        The kind words we are getting about our program make it
                        all worth while!
                    </p>
                    <div className="mt-4">
                        <iframe
                            title="Testimonial Video"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/rE70YlvHBzA"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full"
                        ></iframe>
                    </div>
                </div>
                <div className="p-4">
                    <h4 className="text-xl">Education that Inspires Change</h4>
                </div>
                <div className="p-4">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://upschool.co/wp-content/uploads/2022/04/1557523365061-180x180.jpeg"
                            alt="Matthew Panayotopoulos"
                            className="w-16 h-16 rounded-full"
                        />
                        <div>
                            <h2 className="text-2xl font-bold">
                                Matthew Panayotopoulos
                            </h2>
                            <p className="text-gray-600">
                                Director of Learning – St Euphemia College,
                                Bankstown
                            </p>
                        </div>
                    </div>
                    <p className="mt-4">
                        <i>
                            <b>
                                "Witnessing the students at St Euphemia College
                                thrive with passion and grit through the
                                Changemakers project has been a career
                                highlight."
                            </b>
                        </i>{' '}
                        Upschool empowers students to have a huge impact on a
                        local and global scale. Our students have demonstrated a
                        great depth of empathy to research, discover and
                        understand the inequalities that exist in education in
                        third world countries. They have used their voice and
                        hand to reach out to businesses, peers and politicians
                        to promote awareness and support for the library
                        project. More importantly, they’ve learnt how to make a
                        difference for problems they see and hear in the world
                        around them. I have seen our future event planners and
                        entrepreneurs in both the lemonade stands and the bake
                        sales. I have seen our future storytellers, authors, and
                        politicians in the persuasive letters, emails, and phone
                        calls. I have seen our future graphic designers,
                        marketing experts and artists in their creative and
                        persuasive designs. I have seen our future accountants
                        as they have solved our budgeting issues. I have seen
                        our future educators in the leadership they’ve shown to
                        spread awareness to their peers and inspire change.{' '}
                        <b>
                            <i>
                                "Thank you Richard and Gavin for showing us the
                                global standard for education"
                            </i>
                        </b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsPage;
