import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { ICourse } from '../../types/ICourse';
import { useLocation, useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import axiosInstance from '../../config/Axios';
import { useEffect, useState } from 'react';
import resolveImgURL from '../../utlis/resolveImgURL';

interface Props {
    data: ICourse;
}

function EnrollCard({ data }: Props) {
    const { user } = useUser();
    const location = useLocation();
    const navigate = useNavigate();
    const [enrollmentStatus, setEnrollmentStatus] = useState<{
        enrolled: boolean;
        course: number | null;
        firstChapter: string | null;
        firstLesson: string | null;
    }>({
        enrolled: false,
        course: null,
        firstChapter: null,
        firstLesson: null,
    });
    useEffect(() => {
        if (enrollmentStatus.course === data.id) return;
        (async () => {
            const resp = await axiosInstance.get(
                `/data/courses/${data.slug}/checkEnrollment`,
            );

            setEnrollmentStatus({
                enrolled: resp.data.data.enrolled,
                course: data.id,
                firstChapter: resp.data.data.firstChapter?.slug,
                firstLesson: resp.data.data.firstLesson?.slug,
            });
        })();
    }, [data.id, data.slug, enrollmentStatus.course]);

    const handleEnroll = async () => {
        const resp = await axiosInstance.post(
            `/data/courses/${data.slug}/enroll`,
        );
        if (resp.data.success) {
            navigate(
                `${location.pathname}/${resp.data.data.firstChapter.slug}/${resp.data.data.firstLesson.slug}`,
            );
        }
    };
    //  TODO handle cases where courses have no chapters
    const handleGoToCourse = async () => {
        navigate(
            `${location.pathname}/${enrollmentStatus.firstChapter}/${enrollmentStatus.firstLesson}`,
        );
    };
    return (
        <>
            <Card
                sx={{
                    maxWidth: 345,
                    fontFamily: 'lexend',
                    margin: 'auto',
                    border: 1,
                }}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={
                        data.image
                            ? resolveImgURL(data.image)
                            : 'https://images.unsplash.com/photo-1676113415510-3a631c9e1b5a?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                    alt={data.name}
                />
                {user && user.id && enrollmentStatus.course && (
                    <CardActions sx={{ padding: '20px 0px' }}>
                        <Button
                            sx={{
                                backgroundColor: '#242254',
                                color: 'white',
                                fontSize: '20px',
                                width: '80%',
                                fontFamily: 'lexend',
                                margin: 'auto',
                                '&:hover': {
                                    backgroundColor: '#343264',
                                    color: 'white4',
                                },
                            }}
                            onClick={
                                enrollmentStatus.enrolled
                                    ? handleGoToCourse
                                    : handleEnroll
                            }
                            // href={`${location.pathname}/chapter/${data.slug}`}
                        >
                            {enrollmentStatus.enrolled
                                ? 'GO TO COURSE'
                                : 'ENROL NOW'}
                        </Button>
                    </CardActions>
                )}
            </Card>
        </>
    );
}

export default EnrollCard;
