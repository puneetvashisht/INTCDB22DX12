import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";
import Badge from "./Badge";
import Card from "./Card";
import View_Coures from "./View_Courses";
import AddCourses from "./AddCourses";
import { Link, Route, Routes } from "react-router-dom";
import View_Courses from "./View_Courses";
import Navbar from "./Navbar";
import UpdateCourse from "./UpdateCourse";

function App() {
  return (
    <>
      {/* <section>
        <nav>
          <Link to="/">View Courses</Link>
          <Link to="add">Add Course</Link>
          <Link to="about">About Us</Link>
        </nav>
      </section> */}
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<View_Courses />}></Route>
          <Route path="add" element={<AddCourses />}></Route>
          <Route path="update/:id/:title" element={<UpdateCourse />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>

        {/* <Message></Message>
      <Badge caption="Inbox"></Badge>
      <Badge caption="Sent"></Badge> */}
        {/* <Card title="Angular"></Card>
      <Card title="React"></Card> */}
        {/* <AddCourses />
      <View_Coures></View_Coures> */}
      </div>
    </>
  );
}

export default App;

function About() {
  return <h2>About Us Page</h2>;
}
