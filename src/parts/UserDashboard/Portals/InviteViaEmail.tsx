import React, { useState } from 'react';

const InviteViaEmail = () => {
    const [emailAddresses, setEmailAddresses] = useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEmailAddresses(e.target.value);
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(emailAddresses);
    };

    return (
        <>
            <div className="flex  flex-col gap-3 w-full">
                <p className="font-semibold text-base md:text-lg lg:text-xl text-left w-full">
                    Invite via Email
                </p>
                <p className=" font-light text-md md:text-base lg:text-lg text-left w-full">
                    Students will be able to access Upschool Courses once they
                    create an account from the link on the email.
                </p>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="border border-theme-color focus:outline-none w-full p-2"
                        placeholder="Enter multiple email addresses, separated by comma.&#10;e.g.&#10;ryan@school.com.au, philip@sydney.com"
                        value={emailAddresses}
                        onChange={handleChange}
                        name="EmailAddress"
                        id="emailTextArea"
                        rows={7}
                    ></textarea>
                    {/* TODO implement necessary logic for collected emails for invitations */}
                    <button
                        type="submit"
                        className="border bg-theme-color text-white text-center py-2 px-4 w-fit text-sm md:text-base lg:text-lg"
                    >
                        Send Invitiations
                    </button>
                </form>
            </div>
        </>
    );
};

export default InviteViaEmail;
