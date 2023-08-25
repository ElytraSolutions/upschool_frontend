export default function RegisterStepIIIHeader() {
    const level3 = false
    return (
        // TODO logic required
        <div className={`${level3 ? "flex flex-col" : "hidden"}  text-font-color justify-center gap-y-3 `}>
            <h1 className="text-xl xl:text-3xl font-bold ">Your Canva Account</h1>
            <p className=" text-base xl:text-lg font-normal">As a part of your Upschool account, we are pleased to inform you that you can get a FREE Canva Pro Account for Education. This has been made possible through a collaboration between Canva and Upschool who, together, want to enable you to share your voice with the world.</p>
            <p className=" text-lg xl:text-xl font-bold">We use Canva in many of our courses - so we recommend you get your pro account today</p>
        </div>
    )
}