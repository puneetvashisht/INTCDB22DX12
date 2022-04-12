import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";
import Badge from "./Badge";
import Card from "./Card";
import View_Coures from "./View_Courses";
import AddCourses from "./AddCourses";

function App() {
  return (
    <div className="container">
      {/* <Message></Message>
      <Badge caption="Inbox"></Badge>
      <Badge caption="Sent"></Badge> */}
      {/* <Card title="Angular"></Card>
      <Card title="React"></Card> */}
      <AddCourses />
      <View_Coures></View_Coures>
    </div>
  );
}

export default App;
