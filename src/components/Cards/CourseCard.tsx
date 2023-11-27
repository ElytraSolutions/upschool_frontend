// TODO Remove below comments after confirming the code is working fine
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { ICourse } from '../../types/ICourse';
import { NavLink } from 'react-router-dom';
import resolveImgURL from '../../utlis/resolveImgURL';
import { useNavigate } from 'react-router-dom';

interface Props {
    data: ICourse;
}

function CourseCard({ data }: Props) {
    const navigate = useNavigate();

    return (
        <div
            className="h-full border-1 rounded-md overflow-hidden cursor-pointer"
            onClick={() => navigate(`/course/${data.slug}`)}
        >
            <div className="flex flex-col gap-2 h-full bg-white  shadow-sm shadow-gray-400 lg:w-[320px] md:w-[350px] min-w-[280px] max-w-[400px] w-[80vw] m-auto border">
                <div className="bg-stone-200">
                    <img
                        src={
                            data.thumbnail
                                ? resolveImgURL(data.thumbnail)
                                : 'https://images.unsplash.com/photo-1676113415510-3a631c9e1b5a?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        }
                        height="140"
                        alt="Course image"
                        className=" h-44 w-full object-cover"
                    />
                </div>

                <div className="flex flex-col gap-3 h-full justify-between px-3">
                    <div className="flex flex-col gap-5 text-font-color h-full justify-between">
                        <p className=" font-bold text-xl">{data.name}</p>
                        <p className="text-sm md:text-base line-clamp-3 ">
                            {data.intro}
                        </p>
                    </div>
                    <NavLink to={`/course/${data.slug}`} className="py-2">
                        <button
                            type="button"
                            className="p-3 my-1 bg-theme-color text-white text-center text-sm md:text-base hover:cursor-pointer w-full"
                        >
                            View Course
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
