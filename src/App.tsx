import { BrowserRouter } from "react-router-dom";
import Routes from "./router/routes";
import GlobalCSS from "./styles/GlobalCSS";

function App() {
  return (
    <>
      <GlobalCSS />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
