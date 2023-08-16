import './App.css';
import axios from 'axios';

function App() {

  var xDep = "1111";
  var yDep = "2222";
  var xDir = "3333";
  var yDir = "4444";


  const handleClick = () => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/taxi/call',
      data: {
        currentX: xDep,
        currentY: yDep,
        destinationX: xDir,
        destinationY: yDir
      }
    }).catch(error => {
      console.error('오류가 발생했습니다:', error);
    });
  }

  return (
    <div>
      <p style={{fontSize:"30px"}}>
        Data List : <br />
        currentX: {xDep}<br />
        currentY: {yDep}<br />
        destinationX : {xDir}<br />
        destinationY : {yDir}
      </p>
      <button onClick={handleClick} style={{fontSize:"35px"}}>
        Send
      </button>
    </div>
  );
}

export default App;