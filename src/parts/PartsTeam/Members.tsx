import resolveImgURL from '../../utlis/resolveImgURL';
const membersData = [
    {
        name: 'Gavin McCormack',
        title: 'Co-Founder',
        img: '/images/Team/gavin.webp',
        quote: 'Having written a series of books for both children and adults on education, researching and representing Sir Kenny Dalglish’s Life story as a rhyming picture book, running his own publishing firm, charity, and being a school principal, Gavin was nominated for Australian Principal of the Year 2020, is a TEDx speaker, was nominated for Australian Author of the Year in 2017, is an Australian of the Year Nominee and was named as the 10th Most Influential Educator in the World by LinkedIn.',
        description: `On a quest for educational equality, Gavin has worked tirelessly to raise money to personally build many schools, libraries, and teacher training centres in the Himalayan region of Nepal across the last 5 years, all whilst successfully running one of Australia’s best Montessori primary schools.`,
        location: 'Sydney, Australia',
        linkedin: 'https://www.linkedin.com/in/gavinmccormack/',
    },
    {
        name: 'Richard Mills',
        title: 'Co-Founder',
        img: '/images/Team/richard.webp',
        quote: `“My life ambition is to be aligned with truth, honesty and love. Through my work and personal relationships I want to inspire others to do the same, so that together we can change our world for the better.”`,
        description: `Richard would describe Upschool as a culmination of his life’s work. He taught in schools for 9 years, has built and grown 5 companies in a range of fields, and worked tirelessly toward building a life where he can make a positive difference in the world.\n
        His curiosity now sits with how many people he can inspire to live a life of deep purpose. Upschool is Richard’s vehicle to explore this. `,
        location: 'Melbourne, Australia',
        linkedin: 'https://www.linkedin.com/in/richard-anthony-mills/',
    },
    {
        name: 'Jake Davies',
        title: 'Co-Founder',
        img: '/images/Team/jake.jpg',
        quote: `“As humankind faces its greatest challenges, there has never been a more important time to be alive. It’s no coincidence that our souls have chosen to animate at this critical time in human history. The question is: what have you been called to do?”`,
        description: `Jake aspires to ‘be the change he wants to see in the world’ by living his life with intention, purpose, and a deep commitment to creating a better life for all. His current role at Upschool.co aligns this passion with the critical task of educating the future leaders of our planet – our children – to empower them to make a lasting and impactful difference in the world.\n
        From the classroom to the boardroom, Jake’s broad professional experience is underpinned by an unyielding desire to make a meaningful contribution to elevating the consciousness of others and preserving the planet. Jake is passionate about education, the environment, social justice, human rights, and equality. He believes that we all have a responsibility to ensure that the world we leave behind for our children is better than the one we inherited.\n
        Jake holds an MBA: Master of Business Administration (Deakin), Bachelor of Arts (ACU), Bachelor of Teaching (ACU) and a Master of Leadership (Deakin). `,
        location: 'Byron Bay, Australia',
        linkedin: 'https://www.linkedin.com/in/daviesjake/',
    },
    {
        name: 'Ashesh',
        title: 'Chief Technology Officer',
        img: '/images/Team/ashesh.jpg',
        quote: `Ashesh Poudel is a confident professional with an infectious enthusiasm for all things tech.`,
        description: `He did his Postgraduate in IT in Australia, and has over 11 years of hands-on experience in the field of Information Technology.\n

Ashesh has also co-founded a community media channel and a business directory targeted to the Nepalese community in Australia. The programs of the media highlight the success stories of Nepalese in Australia and around the world, in hopes that their viewers will become motivated and gain valuable information on what it takes to become successful.\n

Apart from web development, Ashesh has also worked as a video producer. He originates from Kathmandu, Nepal and now resides in Sydney.\n

He has joined our team at Upschool.co as Chief Technology Officer, overseeing and managing our team of 4 web developers.`,
        location: 'Sydney, Australia',
    },
    {
        name: 'Anusha',
        title: 'Customer Success Manager',
        img: '/images/Team/anusha.jpg',
        quote: `“You can do anything if you set your mind to it.”`,
        description: `Anusha’s passion is to make use of her creative skills to make a difference in the field of education. Having a progressive mindset and starting her professional journey back in 2011, she has trained herself in the corporate management sector, growing hand in hand with evolving digital marketing and web development technology.

Upon moving to Australia, she brought together her Nepalese community with her influential talk show called “The Influence Academy with Anusha.” She connected all Nepalese Businesses on a single platform. Anusha has also co-founded a network of global education influencers. She managed the overall organisation of the platform and its features, inclusively bringing influencers together for global collaboration. She has successfully organised various global events by communicating with influencers worldwide, receiving their priceless positive feedback.

Anusha has been making a difference by bringing people together to make a positive impact. She goes live every day on Facebook at 7:05 PM Australian Eastern Standard Time with her Storytimes. She started doing the live storytelling sessions on October 22nd, 2021, and since then, she has been running it consecutively every day! Children from all over the world tune in for her session filled with kindness, compassion and empathy.

Anusha leads Upschool’s customer success deployment as head of Customer Service, alongside contributing to the overall organisation’s digital presence.`,
        location: 'Sydney, Australia',
    },
    {
        name: 'Mathew',
        title: 'Operations Manager: Subcontinent',
        img: '/images/Team/mathew.jpg',
        quote: `"I feel kindness and love is free."`,
        description: `Mathew holds a bachelor’s degree in commerce and has  17 years of experience working with international not-for-profit organizations (such as World Vision and GIZ/KGTTI in India), and working in youth and community development. He has experience in project management, finance, and logistics, and is very excited to use these skills to support the Upschool mission.\n

“I like to keep things simple in life, by working with integrity and transparency.” \n

One of Mathew’s biggest passions is to provide opportunity and support to young people who have lost confidence in themselves. He loves to encourage them to have an equal footing in their communities.\n

Outside of work, Mathew loves spending time with his family and friends. He also enjoys watching birds, spending time in nature, and talking with elderly people.`,
        location: 'Bangalore, India',
    },
    {
        name: 'Sri',
        title: 'Post Production Manager / Senior Editor',
        img: '/images/Team/sri.jpg',
        quote: '“I really enjoy the process of bringing footage to life and telling a story.”',
        description: `Sri started editing when he was young. It became a strength from a young age and he always knew that he wanted to pursue it as a career. He is very excited now to be using these skills with the Upschool team to help make our world a better place.\n

Sri takes every opportunity to showcase and develop his skills, and he always hopes that the work he produces can bring a smile to people’s faces. With his work, Sri also hopes to inspire.\n

Outside of work, he enjoys getting in the car to go for drives. “Road trips give me time to think and come up with new ideas and inspiration.”\n

Qualifications: Professional 2D Graphics & Advanced Visual Effects (ADVFX), Graphic and Web Design`,
        location: 'Bangalore, India',
    },
    {
        name: 'Isaac',
        title: 'Creative Media Director',
        img: '/images/Team/isaac.jpg',
        quote: 'With a passion for Visual and Aural communication and a Masters degree in Cultural Anthropology, Isaac would like to bridge the gaps between cultural diversity and unite people through media.',
        description:
            'With seven years of experience in filmmaking, photography, and post-production, Isaac thrives to inspire people to become “Change Makers.” By playing our roles as humans a little better than yesterday, he believes that our tomorrow can shine a little brighter than today.',
        location: 'Bangalore, India',
    },
    {
        name: 'Ashleigh',
        title: 'Teacher and Student Support',
        img: '/images/Team/ashleigh.jpg',
        quote: '“One kind word can change someone’s entire day!”',
        description: `Ashleigh was born and raised in Melbourne, Victoria. She completed her Bachelor of Education in 2011 and quickly realised she had a fire in her belly to embark on a unique and challenging journey to help change the lives of the next generation. She landed herself a teaching position in the remote indigenous community, Palm Island – where she spent several years.\n

Ashleigh now lives on the Sunshine Coast, Queensland with her own family. She works part-time in a school with Education Queensland and is heavily involved in the social-emotional outcomes of her students, as well as the development and implementation of a school-wide SEL program. Ashleigh is involved in many school-based leadership roles.\n

Ashleigh thrives on being a part of creative and innovative practices. Student wellbeing is at the forefront of her teaching philosophy. Upschool is the perfect platform to continue her passion for teaching and learning with a vision of being an integral part of our future ‘change makers.’`,
        location: 'Sunshine Coast, Australia',
    },
];

const Members = () => {
    return (
        <>
            {membersData.map((member, index) => (
                <div
                    className={`${
                        index % 2 == 1 ? 'bg-[#f4f4f4]' : ''
                    } flex flex-col justify-center items-center gap-4 my-10`}
                >
                    <h1 className=" text-3xl md:text-4xl font-bold text-[#242254] mt-4">
                        Meet {member.name}
                    </h1>
                    <h3 className="text-[#242254] font-normal text-2xl italic">
                        {member.title}
                    </h3>
                    <img
                        className="w-[80%] md:w-[50%] mb-5"
                        src={resolveImgURL(member.img)}
                        alt={member.name}
                    />
                    <h3 className=" font-normal text-[#242254] leading-8 tracking-wide w-[90%] md:w-[75%] space-y-4 ">
                        {member.quote}
                    </h3>
                    <h3 className=" font-thin text-[#242254] leading-8 tracking-wide w-[90%] md:w-[75%] space-y-4">
                        {member.description.split('\n').map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </h3>
                    <h3 className=" font-normal text-[#242254] leading-8 tracking-wide w-[90%] md:w-[75%] space-y-4 mb-4">
                        Location: {member.location}
                    </h3>
                </div>
            ))}
        </>
    );
};

export default Members;
