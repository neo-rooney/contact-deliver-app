import "./App.css";
import QRCode from "react-qr-code";

function App() {
  return (
    <div className="Container">
      <QRCode
        size={256}
        style={{ height: "300px", maxWidth: "100%", width: "100%" }}
        value={"https://contact-deliver-oesut7pnd-rooney-dev.vercel.app/"}
        viewBox={`0 0 256 256`}
      />
      <a href="content://contacts/people/">연락처 앱 열기</a>
    </div>
  );
}

export default App;
