import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import WidgetSm from './components/widgetSm/WidgetSm'
import Home from './pages/home/Home'
import './app.css'
function App() {
  return (
    <div className="app">
      <Topbar />
        <div className='container'>
          <Sidebar />
          <Home />
          <WidgetSm />
        </div>
      
    </div>
  );
}

export default App;
