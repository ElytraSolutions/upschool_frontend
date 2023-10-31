import resolveImgURL from '../../utlis/resolveImgURL';
import Description from '../../parts/PartsWebinar/Description';
import Share from '../../parts/PartsWebinar/Share';
const event = {
    id: 1,
    banner: 'images/webinar/webinar-banner.png',
    img: 'images/webinar/webinar-example.png',
    title: 'A Masterclass in Adopting Child Centered Learning in Your Classroom',
    date: '10/10/2021',
    time: '10:00 AM',
    duration: '1 hour',
    mentor: 'Gavin McCormack, Dr Sunita Gandhi',
    description: `Join us for an extraordinary event as thousands of schools from all corners of the globe come together for Upschool’s annual World Children’s Day Conference. Prepare to be inspired as we celebrate the remarkable achievements of schools that have completed the transformative ‘Be the Change’ course offered by Upschool and Canva platforms as we change the world through the power of the SDGs provided to us by the United Nations.\n
This special day will serve as a platform to showcase the incredible work accomplished by the future leaders of tomorrow. Prepare to be captivated by the stories of these change-makers hailing from various parts of the world.\n

We invite you to be a part of this global gathering either as a spectator or an active participant. By enrolling in the free courses available, you have the opportunity to showcase your school’s work alongside other distinguished schools from around the world.\n

The event will be hosted by the Upschool team, who will also invite guest speakers to share their insights and perspectives in between the awe-inspiring presentations by our schools.\n

This is a unique chance to put your school in the global spotlight while empowering your students to share their stories with the world. If you’re interested in joining the course and becoming involved, you can sign up here: https://upschool.co/courses/be-the-change/\n

Alternatively, you can simply bring your school along to witness the remarkable endeavors taking place.\n
Our goal is to gather 1000 schools in attendance, making this an unprecedented celebration of education and positive change.\n  
All attendees will receive a certificate of attendance – Thank you for considering this invitation, and we hope to see you there!`,
};

const Webinar = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            {/* banner part */}
            <div className="w-[100%] h-auto md:h-[50vh]">
                <img
                    src={resolveImgURL(event.banner)}
                    alt=""
                    className="object-contain md:object-cover w-full h-full"
                />
            </div>

            {/* content part */}
            <div className="flex w-[95%] lg:w-[80%] justify-between items-center lg:items-start gap-0 md:gap-8 flex-col lg:flex-row py-4">
                <Description event={event} />
                <Share />
            </div>
        </div>
    );
};

export default Webinar;
