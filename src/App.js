import "./App.css";
import QRCode from "react-qr-code";

const test = `
BEGIN:VCARD
VERSION:3.0
N:Smith;John;;Mr.;
FN:John Smith
ORG:ABC Corporation
TITLE:Sales Manager
EMAIL;TYPE=WORK:john.smith@abccorp.com
TEL;TYPE=WORK,VOICE:(123) 456-7890
TEL;TYPE=HOME,VOICE:(987) 654-3210
ADR;TYPE=WORK:;;123 Main Street;Anytown;CA;12345;United States
NOTE:This is a sample vCard.
END:VCARD
`;

function App() {
  return (
    <div className="Container">
      <QRCode
        size={256}
        style={{ height: "300px", maxWidth: "100%", width: "100%" }}
        value={"https://contact-deliver-ali0bbaa8-rooney-dev.vercel.app/"}
        viewBox={`0 0 256 256`}
      />
      <a href="content://com.android.contacts/contacts#Intent;action=android.intent.action.INSERT;S.phone=01077777777;end">
        전화번호 있는거
      </a>
      <a
        href="BEGIN:VCARD
              VERSION:3.0
              N:Smith;John;;Mr.;
              FN:John Smith
              ORG:ABC Corporation
              TITLE:Sales Manager
              EMAIL;TYPE=WORK:john.smith@abccorp.com
              TEL;TYPE=WORK,VOICE:(123) 456-7890
              TEL;TYPE=HOME,VOICE:(987) 654-3210
              ADR;TYPE=WORK:;;123 Main Street;Anytown;CA;12345;United States
              NOTE:This is a sample vCard.
              END:VCARD"
        download="name.vcf"
      >
        그냥 연락처
      </a>
    </div>
  );
}

export default App;
