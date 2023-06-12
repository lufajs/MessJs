import "./App.css";
import { Route } from "react-router-dom";
import homePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" forceRefresh={true} component={homePage} exact />
      <Route path="/chat" forceRefresh={true} component={ChatPage} />
    </div>
  );
}

export default App;
