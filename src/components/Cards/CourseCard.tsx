// TODO Remove below comments after confirming the code is working fine
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { ICourse } from '../../types/ICourse';
import { NavLink } from 'react-router-dom';

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
            <div className="w-fit h-full border rounded-md overflow-hidden">
                <div className="flex flex-col gap-2 h-full bg-white  shadow-sm shadow-gray-400 w-fit max-w-[270px] m-auto">
                    <div className="bg-stone-200">
                        <img
                            src={data.image}
                            height="140px"
                            alt="data.name"
                            className=" h-44 w-full"
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
                                View Book
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseCard;
