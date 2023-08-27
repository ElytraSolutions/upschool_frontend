import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ICourse } from '../../types/ICourse';

interface Props {
    data: ICourse;
}

function CourseCard({ data }: Props) {
    return (
        <>
            <Card sx={{ maxWidth: 345, fontFamily: 'lexend', margin: 'auto' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={data.image}
                    alt={data.name}
                />
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
            </Card>
        </>
    );
}

export default CourseCard;
