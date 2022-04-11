import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";
import Badge from "./Badge";
import Card from "./card";
import View_Courses from "./View_Courses";

function App() {
  return (
    <div className="container">
      <View_Courses />
      {/* <Card title="Angular" />
      <Card title="React" /> */}
      {/* <Message></Message>
      <Badge caption="Inbox"></Badge>
      <Badge caption="Sent"></Badge> */}
    </div>
  );
}

export default App;
