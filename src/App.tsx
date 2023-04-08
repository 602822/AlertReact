import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  //Handle the states for the Button
  const [showAlert, setShowAlert] = useState(false);

  //ClickEvent handler for the button component
  const handleClickButton = () => {
    setShowAlert(true);
    setState("alert alert-warning alert-dismissible show");
  };

  //Handle the states for the Alert
  const [state, setState] = useState(
    "alert alert-warning alert-dismissible fade"
  );

  //ClickEvent handler for the Alert
  const handleClickAlert = () => {
    setState("alert alert-warning alert-dismissible fade");
  };

  return (
    <>
      {showAlert && <Alert state={state} onClick={handleClickAlert} />};
      <Button color="secondary" onClick={handleClickButton}>
        Click Me!
      </Button>
    </>
  );
}

export default App;
