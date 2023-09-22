import React from 'react';
type BoardBoxProps = {
    icon: string;
    text: string[];
    number?: number;
};
const SettingBoardBox: React.FC<BoardBoxProps> = ({
    icon,
    text,
    number,
}): React.JSX.Element => {
    return (
        <>
            <div className="border rounded-md border-theme-color px-0 md:px-4 w-60 text-theme-color flex flex-row justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-2 py-4 px-1">
                    <img src={icon} alt="logo " width="60px" height="60px" />
                    {/* selects between number or text[0] props to display for generalization purpose */}
                    {number ? (
                        <h1 className="text-3xl text-center">{number}</h1>
                    ) : (
                        text[0] && (
                            <h1 className="text-2xl text-center ">{text[0]}</h1>
                        )
                    )}
                    {/* display if text[1] props has anything */}
                    {text[1] && (
                        <h1 className="text-center text-lg">{text[1]}</h1>
                    )}
                </div>
            </div>
        </>
    );
};
export default SettingBoardBox;
