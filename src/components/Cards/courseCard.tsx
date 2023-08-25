import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface CourseData {
  title: string;
  short_description: string;
  thumbnail: string;
}
interface Props {
  data: CourseData;
}

function courseCard({ data }: Props) {
  return (
    <>
      <Card sx={{ maxWidth: 345,fontFamily:"lexend",margin:"auto"  }}>
        <CardMedia
          component="img"
          height="140"
          image={data.thumbnail}
          alt={data.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="#242254"
            fontWeight="bold"
            sx={{ fontFamily: "lexend" }}
          >
            {data.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              letterSpacing: "1px",
              lineHeight: "24px",
              fontSize: "14px",
              color: "#242254",
              fontWeight: 300,
              fontFamily: "lexend"
            }}
          >
            {data.short_description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{
              backgroundColor: "#242254",
              color: "white",
              fontSize: "20px",
              width: "100%",
              fontFamily: "lexend",
              "&:hover": {
                backgroundColor: "#343264",
                color: "white4",
              },
            }}
          >
            See More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default courseCard;
