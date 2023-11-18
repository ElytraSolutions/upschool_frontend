import { useEffect } from 'react';

function CanvaPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="grid grid-cols-12 mb-[36px]">
                <div className="lg:col-start-3 lg:col-span-8 md:col-start-2 md:col-span-10 col-span-full text-theme-color lg:pl-2 lg:pr-2 md:pl-4 md:pr-4 pl-6 pr-6 mb-[24px]">
                    <div className="h-[300px] p-2 flex justify-center items-center text-center">
                        <h1 className="md:text-[33px] sm:text-[28px] xs:text-[26px] ms:text-[24px] font-extrabold mt-[15px] mb-[15px]">
                            Please create an Upschool account{' '}
                            <a href="/register" target="_blank">
                                <span className="underline underline-offset-4">
                                    here
                                </span>
                            </a>{' '}
                            to get your FREE premium Canva account
                        </h1>
                    </div>
                    <div className="flex w-full mt-[15px] mb-[15px] pl-6 text-left">
                        <div className="md:text-[28px] text-[26px] font-bold">
                            <h2>Our Collaboration</h2>
                        </div>
                    </div>
                    <div className="pl-6 mb-[16px]">
                        <p>
                            <b className="text-extrabold">
                                Canva could just about be the most beautiful
                                company in the world!
                            </b>
                        </p>
                        <p>(well, at Upschool, we think it is!)</p>
                    </div>
                    <div className="pl-6 mb-[16px]">
                        Not just because it’s the most simple to use graphic
                        design platform ever that allows users of all ages to
                        design almost anything, but because the company is built
                        on strong values of doing good in the world. Just like
                        Upschool.
                    </div>
                    <div className="pl-6 mb-[16px]">
                        The Canva software is a crucial part of Upschool’s
                        courses and we strongly recommend you sign up for an
                        account.
                    </div>
                    <div className="pl-6 mb-[16px]">
                        <p>
                            As you’re part of the Upschool family
                            <b>
                                , and with the generosity of the wonderful team
                                at Canva,&nbsp;
                            </b>
                            you are entitled to access Canva’s premium software
                            package,<b> </b>
                            <b>‘Canva for Education’ for FREE</b>! We have some
                            serious <b>#CANVALOVE</b> for their part in
                            supporting our journey and yours.&nbsp;
                        </p>
                    </div>
                    <div className="pl-6 mb-[16px]">
                        <p>
                            This <b>FREE</b> upgrade for our users has been made
                            possible through this collaboration between Canva
                            and Upschool who, together, want to enable you to
                            share your voice with the world in a really
                            professional way.
                        </p>
                    </div>
                    <div className="pl-6 mb-[16px]">
                        <p>
                            All Upschool teachers and students can activate
                            their free upgraded ‘Canva for Education’ account by
                            registering for Upschool and returning to this page
                            to access the activation button which magically
                            appears after you go in. However, if you are under
                            13 years-of-age, you must obtain permission from a
                            teacher, parent or guardian before registering to
                            use Canva.&nbsp;
                        </p>
                    </div>
                    <div className="pl-6 mb-[16px]">
                        <p>
                            Once you click the activation button and follow the
                            prompts, your account will be upgraded to Canva for
                            Education, and you will have access to all its
                            premium features.
                        </p>
                    </div>
                    <div className="pl-6 mb-[16px]">
                        <p>
                            Please ensure you take full advantage of your
                            upgraded Canva account but only use it for
                            educational purposes and whilst you are an active
                            user on the Upschool platform.{' '}
                            <b>
                                Upschool will be closely monitoring your
                                participation in its courses to ensure this
                                generous offer from Canva is not abused.
                            </b>{' '}
                            Should you disengage with the learning at Upschool,
                            misuse Canva’s software or licensing, or engage in
                            any action determined by Upschool or Canva to be
                            inappropriate, your account may be downgraded to
                            Canva basic, or suspended entirely.&nbsp;
                        </p>
                    </div>
                    <div className="pl-6 mb-[16px]">
                        <p>
                            <b>
                                Having free access to the premium Canva for
                                Education is a privilege
                            </b>{' '}
                            and there are rules governing its use. Please ensure
                            you are always using it appropriately.
                        </p>
                    </div>
                    <div className="pl-6 mb-[16px]">
                        <p>
                            <b>
                                Canva is one of those special companies on earth
                                that do good.
                            </b>{' '}
                            Create your Canva account today and start designing
                            your posters, your flyers, your books and all of
                            your presentations so you can start changing the
                            world with beautiful visual
                            communication!&nbsp;&nbsp;
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CanvaPage;
