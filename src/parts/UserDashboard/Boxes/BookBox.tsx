import { NavLink } from 'react-router-dom';
import resolveImgURL from '../../../utlis/resolveImgURL';

// TODO change type as requrired variables

export default function BookBox({ detail }) {
    const text_color =
        detail.status === 'In review'
            ? 'text-theme-color'
            : detail.status === 'Published'
            ? 'text-green-700'
            : 'text-red-upschool';
    return (
        <>
            <div>
                <div className="p-4 bg-white h-full w-full max-w-[26rem]">
                    <div className="flex flex-col h-full w-full gap-4 justify-between">
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex justify-center">
                                <img
                                    className="w-full h-full object-cover"
                                    src={
                                        detail.thumbnail
                                            ? resolveImgURL(detail.thumbnail)
                                            : 'https://source.unsplash.com/random'
                                    }
                                    alt={detail.title}
                                    width="350"
                                    height="250"
                                />
                            </div>

                            <h1 className=" text-base  sm:text-lg md:text-xl font-bold font-lexend text-font-color">
                                {detail.title}
                            </h1>
                        </div>
                        <div className="flex flex-col w-full gap-4">
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
                </div>
            </div>
        </>
    );
}
