import { ClassNames } from '@emotion/react';

const RGData = [
    {
        question: 'How do I register for Upschool?',
        answer: (
            <>
                Click{' '}
                <a href="/register" className="underline">
                    this link
                </a>{' '}
                and fill in the registration information.
            </>
        ),
    },
    {
        question: 'How do I enrol in a course?',
        answer: (
            <div className="flex flex-col gap-3">
                <div>
                    Please register for Upschool{' '}
                    <a href="/register" className="underline">
                        here
                    </a>
                    .{' '}
                </div>
                <div>
                    Then, please visit our courses page{' '}
                    <a href="/courses" className="underline">
                        here
                    </a>
                    .
                </div>
                <div>
                    Select the course you wish to enrol in, navigate to the
                    right hand side of the page and click ‘Enrol Now’.
                </div>
                <div>
                    To check which courses you are enrolled in, please visit
                    your course dashboard.
                </div>
            </div>
        ),
    },
    {
        question: 'I am a teacher, parent, or student. What do I get?',
        answer: (
            <div className="flex flex-col gap-3">
                <div>
                    We provide resources for teachers, parents and students in
                    all Upschool courses.
                </div>
                <div>
                    Recorded video lessons, live lessons, lesson plans, task
                    cards, and a range of other resources are supplied. Please{' '}
                    <a href="/register" className="underline">
                        register
                    </a>{' '}
                    with Upschool and{' '}
                    <a href="/courses" className="underline">
                        enroll
                    </a>{' '}
                    in a course – everything you need can be accessed from here.{' '}
                </div>
                <div>
                    You are also eligible for a FREE premium Canva for Education
                    account{' '}
                    <a href="/canva" className="underline">
                        here
                    </a>
                    .
                </div>
            </div>
        ),
    },
    {
        question: 'When do I need to start and finish a course?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Upschool courses are all pre-recorded and can be undertaken
                    at any time, and at any pace. You may wish to complete a 10
                    week course over 20 weeks – that’s fine. Or, you might want
                    to do it over 5 weeks. Take as long or as short an amount of
                    time as you need.{' '}
                </div>
                <div>
                    Please also note that new featured courses (courses that
                    have just been launched by Upschool) have lessons uploaded
                    onto the Upschool website weekly. So, if you want to get
                    ahead quickly, it might be best to start those courses
                    later, or choose a course that’s already been fully
                    published.
                </div>
                <div>
                    You may also wish to do a course that was released at an
                    earlier time – that’s also absolutely fine! However, please
                    note that Live Lessons often reference a particular week’s
                    content, so it’s advisable to try and work through the
                    course at the time it is published to obtain the maximum
                    benefit.
                </div>
            </div>
        ),
    },
    {
        question: 'Do I get a certificate when I complete a course?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Certificates are provided at the end of each of these three
                    courses only:
                </div>
                <div>
                    <b>1. Be the Change</b> – Once you send your slide-deck /
                    presentation through to the Upschool Team in Learning
                    Sequence 10, you will be issued with a certificate to
                    indicate that you have completed this course.
                </div>
                <div>
                    <b>2. Write a Book</b> – Once your book is uploaded and
                    approved in the Upschool library, you will be issued with a
                    certificate to indicate that you have completed this course.
                </div>
                <div>
                    <b>3. It Starts With You</b> – During Learning Sequence 10,
                    we request that you send through a ‘cloze’ passage on
                    Climate Change. Once we receive and review this document,
                    you will be issued your certificate to indicate that you
                    have completed this course.
                </div>
                <div>
                    <b>
                        In all submissions, please make sure you follow all
                        guidelines carefully.
                    </b>
                </div>
            </div>
        ),
    },
    {
        question: "Are all of Upschool's courses free?",
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    All of Upschool’s standard courses and associated resources
                    are 100% free. You will never be asked to pay to access this
                    content at anytime in the future.
                </div>
                <div>
                    Upschool may release additional premium courses from
                    time-to-time such as teacher training, parent training or
                    something with a “services-based” component to it and some
                    of these may have a fee associated with them – but our
                    standard courses <b>for children</b> will always remain
                    free.
                </div>
                <div>
                    Upschool will never charge you for anything that you haven’t
                    willingly agreed to pay for – and if there is a cost
                    associated, there will be full transparency before you start
                    the course so you can make an informed decision based on
                    your situation.
                </div>
            </div>
        ),
    },
];

const AboutData = [
    {
        question: 'Will I ever have to pay for Upschool?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    No. You will never have to pay for any of Upschool’s
                    standard courses.
                </div>
                <div>
                    Upschool may release premium courses, resources or services
                    from time to time. You may elect to purchase these, but they
                    will be offered separately to the free content available on
                    Upschool.
                </div>
                <div>
                    If there is a cost associated in any way, there will be full
                    transparency <b>before you start the course</b> so you can
                    make an informed decision based on your situation.
                </div>
                <div>
                    Rest assured, the absolute best of what we have to offer
                    will always be FREE and accessible regardless of where you
                    live on planet earth!
                </div>
            </div>
        ),
    },
    {
        question: 'How is Upschool funded?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Currently we are self-funded and pay all of our expenses to
                    run the company through the existing assets of one of our
                    company directors.
                </div>
                <div>
                    Having said that, we are actively working to find sponsors
                    to support our mission, so we can transition away from this
                    model. Bringing in revenue will help us reach more children
                    and create greater impact on the world.{' '}
                </div>
                <div>
                    In addition to sponsorship revenue (which we are hoping to
                    secure soon), we make a small percentage on the sale of some
                    physical products – such as books in our online library. Our
                    charity fundraising portal (coming soon) will also have a
                    provision for individuals to make a small donation to us so
                    we can continue to grow and expand on our mission.
                </div>
                <div>
                    There will never be an obligation to purchase anything from
                    us or to donate to us in order to participate in our courses
                    – but if you would like to support us and have the financial
                    means to do so, buying something from our store or making a
                    donation (big or small) is a great way to help us and is
                    sincerely appreciated.
                </div>
                <div>
                    <b>If you are a school</b> – and have enjoyed our FREE
                    courses throughout the year – you may want to consider
                    making an annual donation on behalf of your school as a way
                    of supporting us. Again, there is no obligation to do this –
                    but if you can – we would be very thankful.
                </div>
                <div></div>
            </div>
        ),
    },
    {
        question: 'Who can participate in Upschool?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Upschool is for everyone – schools, home-schoolers,
                    community groups, individuals – anyone, anywhere! Age is no
                    barrier – adults and children are welcome to participate.
                </div>
                <div>
                    If you have a computer and an internet connection, you can
                    take our courses. If you or the communities you support do
                    not have a stable internet connection, ask us how we can
                    provide access to Upschool’s learning materials in other
                    ways.
                </div>
            </div>
        ),
    },
    {
        question: "How do Upschool's Live Lessons and Webinars work?",
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Upschool holds Live Lessons weekly, and Webinars from
                    time-to-time.
                </div>
                <div>
                    Live Lessons are conducted online and involve a teacher
                    delivering a lesson to anyone attending the virtual lesson.
                </div>
                <div>
                    To attend a Live Lesson, you must first register for
                    Upschool, and then register to attend the lesson. Please
                    visit{' '}
                    <a href="/live" className="underline">
                        this
                    </a>{' '}
                    link to view and register for our upcoming Live Lessons.
                </div>
                <div>
                    Webinars are conducted online and involve a presenter (most
                    often Guest Speakers) to any attending the virtual webinar.
                    Webinars are mostly for adults, including teachers and
                    parents.
                </div>
                <div>
                    To register for a Webinar, please visit link to view and
                    register for our upcoming webinars.
                </div>
            </div>
        ),
    },
    {
        question: "Are Upschool's courses pre-recorded?",
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    All of Upschool’s courses are pre-recorded, meaning you can
                    watch the videos and access the resources whenever you like.
                    Meanwhile, we do hold Live Lessons weekly. Although done in
                    an online setting to a live virtual audience, all Live
                    Lessons are recorded and made available to everyone after
                    the recording – including those who did not attend.
                </div>
                <div>
                    To access these recordings, please click{' '}
                    <a href="/livereply" className="underline">
                        here
                    </a>
                    .
                </div>
            </div>
        ),
    },
    {
        question: 'Can I book Upschool to speak at my school?',
        answer: (
            <div>
                Yes, you can! Most of our speaking engagements are conducted
                online. Please contact us at{' '}
                <a className="underline" href="mailto:hello@upschool.co">
                    hello@upschool.co
                </a>{' '}
                and ask us how we can best assist you.
            </div>
        ),
    },
];

const PatnershipDontaionData = [
    {
        question: 'How can I support Upschool?',
        answer: (
            <div className="flex flex-col gap-4">
                You can support Upschool by telling everyone about it! You can
                also help by sponsoring or donating to Upschool, or by
                purchasing products on the Upschool website. The more support we
                receive, the greater impact we can have in the world. Thank you
                for considering supporting us!
            </div>
        ),
    },
    {
        question: 'Does Upschool accept donations?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    If your students have enjoyed our FREE courses throughout
                    the year and your school is in a sound financial position,
                    you may wish to consider making an annual donation to
                    Upschool on behalf of your school as a way of saying thank
                    you to us and supporting our mission.
                </div>
                <div>
                    {' '}
                    <b>How much should we donate?</b>
                </div>
                <div>
                    That is entirely up to you. You may consider making a
                    donation per student that participated or a set donation for
                    the year. Whether it’s big or small, we appreciate it.
                </div>
                <div className="font-bold">
                    If you can’t donate, participating and empowering your
                    students to change the world through our courses is the
                    biggest and most valuable gift you can give us anyway – and
                    that is most definitely FREE!
                </div>
                <div>
                    The other thing you can do to thank us (which is also FREE)
                    is to share what we do on social media and with your
                    colleagues and friends who don’t know about us yet.
                </div>
                <div>
                    If you would like to say thank you with an annual donation,
                    please email{' '}
                    <a className="underline" href="mailto:hello@upschool.co">
                        hello@upschool.co
                    </a>{' '}
                    and we will raise an invoice for you.
                </div>
            </div>
        ),
    },
    {
        question: 'Why is Upschool collaborating with charities?',
        answer: (
            <div className="flex flex-col gap-4">
                If we want to change the world, we have to collaborate with
                organisations that have the knowledge, ability, and drive to
                take the necessary actions. We have collaborated with charities
                to raise awareness of the issues they are trying to resolve, and
                to provide a pathway for people to support these organisations.
                Upschool supports these charities but receives no benefit
                (financial or otherwise) for doing so.
            </div>
        ),
    },
    {
        question: 'How can I register my charity with Upschool?',
        answer: (
            <div className="flex flex-col gap-4">
                We are limiting the amount of charities we are collaborating
                with but are always looking for new charities to partner with.
                We want to ensure our charity partnerships represent sufficient
                diversity and international reach. Please contact us at{' '}
                <a className="underline" href="mailto:hello@upschool.co">
                    hello@upschool.co
                </a>{' '}
                and tell us about your charity, including links and other
                relevant information, and we will contact you to discuss!
            </div>
        ),
    },
    {
        question:
            'I am an individual, business, or school. How can I partner with Upschool?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    There are several ways individuals, businesses, community
                    groups, and schools can partner with Upschool to create
                    tangible change in the world!
                </div>
                <div>
                    We offer a range of partnership opportunities, products, and
                    services – all of which help to support Upschool’s mission
                    whilst directly benefiting these individuals and groups.
                    Click a link below to explore some of these options:
                </div>
                <div>
                    <a href="/impactfilms" className="underline">
                        Impact Films
                    </a>
                    <br />
                    <a href="/impactproject" className="underline">
                        Impact Projects
                    </a>
                    <br />
                    <a href="Partnerships" className="underline">
                        Partnerships
                    </a>
                </div>
                <div>
                    Should you wish to discuss any of these opportunities,
                    please reach out to us at and we will arrange a time to meet
                    with you.
                </div>
            </div>
        ),
    },
];

const UpdatesCommunicationData = [
    {
        question: 'Do you have a WhatsApp group I can join to stay updated?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Yes, you can join the Upschool WhatsApp group here to
                    receive updates.
                </div>
                <div>
                    You should also keep an eye on your email account (including
                    Junk Folder) for Upschool’s weekly emails, typically
                    released on Wednesdays.
                </div>
                <div>
                    Be sure to whitelist our emails to ensure you never miss an
                    update. In Gmail, add “hello@upschool.co” as a contact and
                    in other mail platforms, add us as a “safe sender”.
                </div>
            </div>
        ),
    },
    {
        question: 'How do I provide feedback to Upschool?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Write us an email at
                    <a href="mailto:hello@upschool.co" className="underline">
                        hello@upschool.co
                    </a>
                    and tell us your thoughts! We welcome your comments and
                    feedback.
                </div>
            </div>
        ),
    },
    {
        question: 'How do I tell others about Upschool?',
        answer: (
            <div className="flex flex-col gap-4">
                We would love you to tell everyone about Upschool! Please share
                our webpage, posts or any of our public videos (such as those on
                YouTube) on your social media accounts, email your family and
                friends, and tell your school or community about the courses we
                run. We welcome everyone to register with Upschool!
            </div>
        ),
    },
    {
        question: 'How do I arrange a tour of Upschool?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Simply contact us at{' '}
                    <a href="mailto:hello@upschool.co" className="underline">
                        hello@upschool.co
                    </a>{' '}
                    requesting a virtual tour of Upschool and we will contact
                    you with a calendar link to book a time that’s convenient
                    for you.
                </div>
            </div>
        ),
    },
    {
        question: 'Where can I find Upschool on social media?',
        answer: (
            <div className="flex flex-col gap-4">
                Upschool has several social media accounts. Please follow us!
                <a
                    href="https://www.linkedin.com/company/upschool.co/"
                    className="underline"
                >
                    LinkedIn
                </a>
                <a
                    href="https://www.facebook.com/Upschool.co"
                    className="underline"
                >
                    Facebook
                </a>
                <a
                    href="https://www.instagram.com/upschoolofficial/"
                    className="underline"
                >
                    Instagram (Upschool Official)
                </a>
                <a
                    href="https://instagram.com/upschoolstories?igshid=YmMyMTA2M2Y="
                    className="underline"
                >
                    Instagram (Upschool Stories)
                </a>
                <a
                    href="https://www.youtube.com/channel/UC5kweQ5J5eOl30WrjXfO1IA/videos"
                    className="underline"
                >
                    Youtube
                </a>
            </div>
        ),
    },
];

const HelpData = [
    {
        question: 'I need to make changes on my profile. How do I do this?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>Please contact us at and we will assist you.</div>
            </div>
        ),
    },
    {
        question: 'How do I reset a forgotten password?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Please click the following link to reset your password:{' '}
                    <a href="/resetpassword" className="underline">
                        Reset Password
                    </a>
                </div>
            </div>
        ),
    },
    {
        question: 'How do I report an issue?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Contact us at describing what the issue is, and include your
                    contact information. We will investigate and respond to your
                    enquiry as soon as possible.
                </div>
            </div>
        ),
    },
    {
        question: "What do I do if I haven't received my order?",
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Please contact us at with your order number and any other
                    information to assist us (e.g. order date, product ordered,
                    order quantity, etc.) so we can investigate promptly. Please
                    also provide your contact details for us. We will respond as
                    soon as possible!
                </div>
            </div>
        ),
    },
    {
        question:
            'I have a question not listed here. Who can I contact for further help?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Please contact us at{' '}
                    <a href="mailto:hello@upschool.co" className="underline">
                        hello@upschool.co
                    </a>{' '}
                    and we will do our best to assist you. You may also use the
                    Chat function on any page of Upschool’s website, however,
                    please note that the Chat is sometimes unmonitored. If you
                    don’t receive a response in the Chat, please email us with
                    your enquiry instead.
                </div>
            </div>
        ),
    },
];

const CanvaData = [
    {
        question: 'What is Canva? Why should I register via Upschool?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Canva is an incredible graphic design tool which is very
                    useful to use when creating work through Upschool.
                </div>
                <div>
                    By signing up for Canva via Upschool, you are eligible for a
                    FREE Canva for Education account.
                </div>
                <div>
                    To learn more and register, click{' '}
                    <a href="/canva" className="underline">
                        here
                    </a>{' '}
                </div>
            </div>
        ),
    },
    {
        question: 'How do I get a free Canva for Education account?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Visit the following page and follow the instructions to
                    register for an account:{' '}
                    <a href="/canva" className="underline">
                        Free Canva
                    </a>
                </div>
            </div>
        ),
    },
    {
        question: 'How do I upload a book to the Upschool LIbrary?',
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Please click{' '}
                    <a href="/uploadbook" className="underline">
                        here
                    </a>{' '}
                    to upload your book written as part of our course called
                    Write a Book to Change the World.
                </div>
            </div>
        ),
    },
    {
        question:
            'When I buy a book from the Upschool Library, what can I expect?',
        answer: (
            <div className="flex flex-col gap-4">
                <p>
                    When you purchase a paperback copy of a book from the
                    Upschool Library, you will receive a physical book with the
                    following specifications:
                </p>
                <p>
                    Size: A4 <br />
                    Cover: 300 GSM <br /> Pages: 160 GSM
                </p>
                <div>
                    When you purchase a digital copy of a book from the Upschool
                    Library, it will be supplied to you in a PDF format.
                </div>
                <div>
                    When an order is placed, we review the book file to ensure
                    it meets our printing criteria. Should the text be in the
                    wrong position (for example, too close to a margin) or there
                    is some other issue present, we will either:
                </div>
                <ol>
                    <li>
                        1. Contact the author requesting them to make changes to
                        their book file and have them re-upload it, so we can
                        arrange printing, or;
                    </li>
                    <li>
                        2. We will edit the book on behalf of the author so that
                        it complies with our printing requirements.
                    </li>
                </ol>
                <div>
                    {' '}
                    Should edits to a book be necessary, this will result in a
                    delay to production and shipping. We ask for your patience
                    should this occur.
                </div>

                <div>
                    If the book does not require editing, we will arrange
                    printing and shipping as soon as possible.
                </div>

                <div>
                    We will provide you with a tracking number once the order is
                    shipped from Upschool’s warehouse.
                </div>

                <div>
                    Contact us at{' '}
                    <a href="/uploadbook" className="underline">
                        here
                    </a>{' '}
                    to receive further support if necessary.
                </div>
            </div>
        ),
    },
    {
        question:
            "What do I do if I haven't received my order from the Upschool library?",
        answer: (
            <div className="flex flex-col gap-4">
                <div>
                    Please contact us at{' '}
                    <a href="/uploadbook" className="underline">
                        here
                    </a>{' '}
                    with your order number and any other information to assist
                    us (e.g. order date, product ordered, order quantity, etc.)
                    so we can investigate promptly. Please also provide your
                    contact details for us. We will respond as soon as possible!
                </div>
            </div>
        ),
    },
];

export {
    RGData,
    AboutData,
    PatnershipDontaionData,
    UpdatesCommunicationData,
    HelpData,
    CanvaData,
};
