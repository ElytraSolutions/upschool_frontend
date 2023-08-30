import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import courses from "../../data/Homepage";

function CourseTypes() {
  return (
    <div className="py-[40px]">
      <div className="flex flex-col items-center">
        <span className="text-[38px] md:text-[48px] text-[#242254] font-bold">
          Get Started With Upschool
        </span>
        <p className="mb-[1rem] text-[18px] leading-9 text-center max-w-4xl text-[#242254] ">
          Unlimited access to courses, resources and more →
        </p>
      </div>
      <div>
        <div className="flex flex-wrap max-w-6xl m-auto gap-10 justify-center">
         {courses.map((course, index) => (   
          <div key={index}>
            <Card sx={{ maxWidth: 345, fontFamily: 'lexend', margin: 'auto' }}>
                <CardMedia
                className="hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                    component="img"
                    height="140"
                    image={course.img}
                    alt="10-week"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="#b81242"
                        fontWeight="bold"
                        sx={{ fontFamily: 'lexend' }}
                    >
                        {course.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            letterSpacing: '1px',
                            lineHeight: '24px',
                            fontSize: '16px',
                            color: '#242254',
                            fontWeight: 300,
                            fontFamily: 'lexend',
                        }}
                    >
                        {course.desc}
                    </Typography>
                </CardContent>
                <CardActions>
                  <a className="w-full" href={course.link}>
                  <Button
                    
                    sx={{
                        backgroundColor: '#b81242',
                        color: 'white',
                        fontSize: '20px',
                        width: '100%',
                        fontFamily: 'lexend',
                        '&:hover': {
                            backgroundColor: '#343264',
                            color: 'white4',
                        },
                    }}
                    
                >
                    LET's GO
                </Button>
                  </a>
                    
                </CardActions>
            </Card>
          </div>
        ))}
            
        </div>
      </div>
    </div>
  );
}

export default CourseTypes;
