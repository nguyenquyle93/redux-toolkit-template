import Sidebar from './Sidebar'
import RouterApp from './Router'
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{
        display:'flex'
      }}>
        <Sidebar />
        <RouterApp />
      </div>
    </Router>
  );
}

export default App;
