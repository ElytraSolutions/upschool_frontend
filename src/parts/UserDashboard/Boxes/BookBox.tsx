import { NavLink } from 'react-router-dom';

// TODO change type as requrired variables
type BookBoxProps = {
    detail: {
        id: number;
        name: string;
        completedLessons?: number;
        totalLessons?: number;
        image: string;
        url: string;
        status: string;
    };
};
export default function BookBox({ detail }: BookBoxProps) {
    const text_color =
        detail.status === 'In review'
            ? 'text-theme-color'
            : detail.status === 'Published'
            ? 'text-green-700'
            : 'text-red-upschool';
    return (
        <>
            <div className="p-4 bg-white w-fit">
                <div className="flex flex-col w-full gap-4">
                    <div className="flex justify-center">
                        <img
                            src={detail.image}
                            alt={detail.name}
                            width="350px"
                            height="250px"
                        />
                    </div>

                    <h1 className="  text -lg md:text-xl font-bold">
                        {detail.name}
                    </h1>
                    <h1 className={`text-base ${text_color}`}>
                        {detail.status}
                    </h1>

                    <NavLink
                        to={detail.url}
                        className={`text-white bg-theme-color px-4 py-2 w-fit ${
                            detail.status === 'In review'
                                ? 'bg-theme-color/50  cursor-not-allowed'
                                : ''
                        } `}
                    >
                        View Book
                    </NavLink>
                </div>
            </div>
        </>
    );
}
