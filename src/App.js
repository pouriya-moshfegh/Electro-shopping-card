import Mainpage from "./Mainpage";
import { useRoutes } from "react-router-dom";

function App() {
  let routes = useRoutes([{ path: "/", element: <Mainpage /> }]);
  return <>{routes}</>;
}

export default App;
