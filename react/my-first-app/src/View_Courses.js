import React, { useState } from "react";
import Card from "./Card";

export default function View_Courses() {
  const [courses, setCourses] = useState([]);

  let courseList = courses.map((course, i) => (
    <Card
      key={i}
      title={course.title}
      id={course.id}
      summary={course.summary}
    ></Card>
  ));

  const fetchCourses = () => {
    fetch("http://localhost:8000/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourses(data);
      });
  };

  return (
    <>
      <button className="btn btn-primary" onClick={fetchCourses}>
        Get Courses
      </button>
      <div className="row">{courseList}</div>
    </>
  );
}
