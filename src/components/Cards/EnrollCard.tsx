import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { ICourse } from '../../types/ICourse';

interface Props {
    data: ICourse;
}

function EnrollCard({ data }: Props) {
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
                        href={`/chapter/${data.id}`}
                    >
                        ENROLL NOW
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}

export default EnrollCard;
