import './App.css';
import qrcode from "./qrcode.png";

function App() {
  return (
    <div className="card-qrcode">
        <img src={qrcode} className="card-image" alt="img" />
        <h1>Improve your front-end <br /> skills by building projects</h1>
        <p>Scan the QR code to visit Frontend <br /> Mentor and take your coding skills to <br /> the next level</p>
    </div>
  );
}

export default App;
