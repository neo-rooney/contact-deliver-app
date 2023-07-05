import "./App.css";
import QRCode from "react-qr-code";

function App() {
  return (
    <div className="Container">
      <QRCode
        size={256}
        style={{ height: "300px", maxWidth: "100%", width: "100%" }}
        value={"contact-deliver-fmxkdbbfh-rooney-dev.vercel.app"}
        viewBox={`0 0 256 256`}
      />
      <a href="tel:">연락처 앱 열기</a>
    </div>
  );
}

export default App;
