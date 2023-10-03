import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { ICourse } from '../../types/ICourse';
import { useLocation, useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import axiosInstance from '../../config/Axios';

interface Props {
    data: ICourse;
}

function EnrollCard({ data }: Props) {
    const { user } = useUser();
    const location = useLocation();
    const navigate = useNavigate();

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
                    image={data.image}
                    alt={data.name}
                />
                {user && user.id && (
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
                            onClick={async () => {
                                const resp = await axiosInstance.post(
                                    `/data/courses/${data.slug}/enroll`,
                                );
                                if (resp.data.success) {
                                    navigate(`${location.pathname}/chapter/0`);
                                }
                            }}
                            // href={`${location.pathname}/chapter/${data.slug}`}
                        >
                            ENROLL NOW
                        </Button>
                    </CardActions>
                )}
            </Card>
        </>
    );
}

export default EnrollCard;
