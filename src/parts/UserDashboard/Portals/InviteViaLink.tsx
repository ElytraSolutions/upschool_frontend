import WhatsAppIcon from '../../../assets/WhatsappIcon.png';
import EmailBiggerIcon from '../../../assets/EmailBiggerIcon.png';

const InviteViaLink = () => {
    return (
        <>
            <div className="flex  flex-col gap-3 w-full">
                <p className="font-semibold text-base md:text-lg lg:text-xl text-left w-full">
                    Invite with a Share Link
                </p>
                <p className=" font-light text-sm md:text-base lg:text-lg text-left w-full">
                    Anyone with this link can join Upschool as your student.{' '}
                    <br />
                    This link will expire in 120 minutes.
                </p>
                <div className="flex flex-col md:flex-row gap-3 md:justify-between w-full">
                    <div className="border border-theme-color/50 w-full flex items-center">
                        {/* TODO implement logic to get invite link backend */}
                        <p className="font-light p-2 text-base md:text-lglg:text-xl text-left truncate w-full">
                            https://www.upschool.co/token=zxcw8w789rwy
                        </p>
                    </div>
                    {/* TODO implement logic to copy invite link obtained from backend*/}
                    <button className="border bg-theme-color text-white text-center py-2 px-4 w-fit text-sm md:text-base lg:text-lg">
                        Copy
                    </button>
                </div>
                <p className="font-semibold text-base md:text-lg lg:text-xl text-left w-full">
                    Share invite link:
                </p>
                <div className="flex flex-row gap-4">
                    {/* TODO implement necessary logic */}
                    {/* WhatsAppIcon */}
                    <img
                        src={WhatsAppIcon}
                        alt="Whatsapp"
                        width="40px"
                        height="40px"
                    />
                    {/* TODO implement necessary logic */}
                    {/* EmailIcon */}
                    <img
                        src={EmailBiggerIcon}
                        alt="Email"
                        width="40px"
                        height="40px"
                    />
                </div>
            </div>
        </>
    );
};

export default InviteViaLink;
