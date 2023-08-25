import React from "react";

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
      <div className="flex flex-col border-solid ">
        <div>
            <img src={data.thumbnail} alt="" />
        </div>
        <div>
          <div>{data.title}</div>
        </div>
      </div>
    </>
  );
}

export default courseCard;
