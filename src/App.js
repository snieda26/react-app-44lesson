import "./App.css";
import "./index.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <main className="main">
          <Header />
          <Nav />
          <div className="content">
            <Route
              path="/dialogs"
              render={() => (
                <DialogsContainer
                  state={props.state.messagesPage}
                  dispatch={props.dispatch}
                />
              )}
            />
            <Route
              path="/profile"
              render={() => (
                <Profile
                  state={props.state.profilePage}
                  dispatch={props.dispatch}
                />
              )}
            />
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
