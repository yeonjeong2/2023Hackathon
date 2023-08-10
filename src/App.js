import './App.css';

import Basic_Components_top from './Basic_Component_top';
import Basic_Components_bottom from './Basic_Component_bottom';

import DepartureLocation from "./components/DepartureLocation";
import ArrivalLocation from './components/ArrivalLocation';
import CheckPath from './components/CheckPath';
import SetArrivalLocation from './components/SetArrivalLocation';
import LoginPage from './components/LoginPage';
import Button from './components/EmptyPageWithButton';

function App() {
  return (
    <div className="App" style={{height:'900px', width:'500px'}}>
      <div className="phone">
        <div className="screen">
          <div className="basic_Components_top">
            <Basic_Components_top />
            <hr />
          </div>
          <Button />
          <div className="basic_Components_bottom">
            <hr />
            <Basic_Components_bottom />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default App;