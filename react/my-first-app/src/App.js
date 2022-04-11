import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";
import Badge from "./Badge";
import Card from "./Card";
import ViewCoures from "./ViewCoures";

function App() {
  return (
    <div className="container">
      {/* <Message></Message>
      <Badge caption="Inbox"></Badge>
      <Badge caption="Sent"></Badge> */}
      {/* <Card title="Angular"></Card>
      <Card title="React"></Card> */}
      <ViewCoures></ViewCoures>
    </div>
  );
}

export default App;
