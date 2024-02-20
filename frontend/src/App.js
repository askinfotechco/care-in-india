//import "./App.css";
import RouterFile from "./routerFile";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <RouterFile />
    </div>
  );
}

export default App;
library.add(fab, fas, far);