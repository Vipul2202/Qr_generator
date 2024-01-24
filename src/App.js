import { useState } from "react";
import QRCode from "react-qr-code";
// import Webcam from "react-webcam";

function App() {
  const [value, setValue] = useState(0);
  const [back, setBack] = useState("#FFFFFF");
  const [fore, setFore] = useState("#000000");
  const [size, setSize] = useState(256);

  return (
    <div className="App">
      <center>
        <h1 className="qr"> SCAN THIS QR CODE TO MARK YOUR ATTENDANCE...</h1>
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value of Qr-code"
        />
        <br /> 
        <br />
        <input
          type="text"
          onChange={(e) => setBack(e.target.value)}
          placeholder="Background color"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setFore(e.target.value)}
          placeholder="Foreground color"
        />
        {/* <input type="text" onChange={() => setFore(e.target.value)}
        placeholder="forgeround color" /> */}
        <br />
        <br />
        <input
          type="number"
          onChange={(e) =>
            setSize(parseInt(e.target.value === "" ? 0 : e.target.value, 10))
          }
          placeholder="Size of Qr-code"
        />
        <input type="email" onChange={(e) => setSize(e.target.value)}/>
        <br />
        <br />
        <br />
        {value && (
          <QRCode
            title="QuadB Tech..."
            value={value}
            bgColor={back}
            fgColor={fore}
            size={size === "" ? 0 : size}
          />
        )}
      </center>
      <div>
        {/* <Webcam /> */}
      </div>
    </div>
  );
}

export default App;
