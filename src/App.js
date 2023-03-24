import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TextBox from "./TextBox";
import IntroText from "./Nav";
import { useState } from "react";
import Toast from "./Toast";

function App() {
  const [toast, setToast] = useState(null);

  const toastHandler = (msg, type, mode) => {
    setToast({
      message: msg,
      toastType: type,
      view: mode,
    });
    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  return (
    <div className="App">
      <IntroText />
      <TextBox toastHandler={toastHandler} />
      <Toast toast={toast} />
    </div>
  );
}

export default App;
