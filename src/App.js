import "./App.css";
import QRCode from "react-qr-code";

function App() {
  return (
    <div className="Container">
      <QRCode
        size={256}
        style={{ height: "300px", maxWidth: "100%", width: "100%" }}
        value={"contact-deliver-2g9kdga8o-rooney-dev.vercel.app"}
        viewBox={`0 0 256 256`}
      />
      <a href="tel:010-1234-5678?name=홍길동">전화하기</a>
    </div>
  );
}

export default App;
