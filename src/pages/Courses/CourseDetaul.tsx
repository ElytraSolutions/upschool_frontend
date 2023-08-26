import React from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
  id?: string;
}

function CourseDetail() {
  const { id } = useParams<RouteParams>();
  return (
    <>
      <h1>courseDetail</h1>
      <div>
        <h2>Course Details</h2>
        {id ? <p>Course ID: {id}</p> : <p>No Course ID found in the URL</p>}
      </div>
    </>
  );
}

export default CourseDetail;
