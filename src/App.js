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
      <a href="content://com.android.contacts/contacts#Intent;action=android.intent.action.INSERT;S.phone=01077777777;end">
        전화번호 있는거
      </a>
      <a href="content://com.android.contacts/contacts">그냥 연락처</a>
    </div>
  );
}

export default App;
