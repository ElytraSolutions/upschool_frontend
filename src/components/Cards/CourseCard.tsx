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

interface Props {
    data: ICourse;
}

function CourseCard({ data }: Props) {
    return (
        <>
            {/* TODO Remove below comments after confirming the code is working fine */}
            {/* <div>
                <Card
                    sx={{
                        maxWidth: 345,
                        fontFamily: 'lexend',
                        margin: 'auto',
                    }}
                >
                    <CardMedia
                        component="img"
                        height="140"
                        image={data.image}
                        alt={data.name}
                    />
                    <div className="flex flex-col gap-2 justify-between h-full">
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                color="#242254"
                                fontWeight="bold"
                                sx={{ fontFamily: 'lexend' }}
                            >
                                {data.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    letterSpacing: '1px',
                                    lineHeight: '24px',
                                    fontSize: '14px',
                                    color: '#242254',
                                    fontWeight: 300,
                                    fontFamily: 'lexend',
                                }}
                            >
                                {data.intro}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                sx={{
                                    backgroundColor: '#242254',
                                    color: 'white',
                                    fontSize: '20px',
                                    width: '100%',
                                    fontFamily: 'lexend',
                                    '&:hover': {
                                        backgroundColor: '#343264',
                                        color: 'white4',
                                    },
                                }}
                                href={`/course/${data.slug}`}
                            >
                                See More
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </div> */}
            <div className="h-full border rounded-md overflow-hidden ">
                <div className="flex flex-col gap-2 h-full bg-white  shadow-sm shadow-gray-400 lg:w-[320px] md:w-[350px] w-[400px] m-auto border">
                    <div className="bg-stone-200">
                        <img
                            src={
                                data.image
                                    ? resolveImgURL(data.image)
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
        </>
    );
}

export default CourseCard;
