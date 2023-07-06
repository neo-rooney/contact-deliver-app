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
  function downloadToFile(content, filename, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });

    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);
  }

  const makeVCardVersion = () => `VERSION:3.0`;
  const makeVCardInfo = (info) => `N:${info}`;
  const makeVCardName = (name) => `FN:${name}`;
  const makeVCardOrg = (org) => `ORG:${org}`;
  const makeVCardTitle = (title) => `TITLE:${title}`;
  const makeVCardPhoto = (img) => `PHOTO;TYPE=JPEG;ENCODING=b:[${img}]`;
  const makeVCardTel = (phone) => `TEL;TYPE=WORK,VOICE:${phone}`;
  const makeVCardAdr = (address) => `ADR;TYPE=WORK,PREF:;;${address}`;
  const makeVCardEmail = (email) => `EMAIL:${email}`;
  const makeVCardTimeStamp = () => `REV:${new Date().toISOString()}`;

  function makeVCard() {
    let vcard = `BEGIN:VCARD
    ${makeVCardVersion()}
    ${makeVCardInfo("123")}
    ${makeVCardName("123")}
    ${makeVCardOrg("123")}
    ${makeVCardTitle("123")}
    ${makeVCardPhoto("123")}
    ${makeVCardTel("123")}
    ${makeVCardAdr("123")}
    ${makeVCardEmail("123")}
    ${makeVCardTimeStamp()}
    END:VCARD`;
    downloadToFile(vcard, "vcard.vcf", "text/vcard");
  }

  return (
    <div className="Container">
      <fieldset>
        <div>
          <label for="cardInfoEl">cardInfo</label>
          <input type="text" id="cardInfoEl" />
        </div>
        <div>
          <label for="emailEl">email</label>
          <input type="text" id="emailEl" />
        </div>
        <div>
          <label for="nameEl">name</label>
          <input type="text" id="nameEl" />
        </div>
        <div>
          <label for="orgEl">org</label>
          <input type="text" id="orgEl" />
        </div>
        <div>
          <label for="titleEl">title</label>
          <input type="text" id="titleEl" />
        </div>
        <div>
          <label for="telEl">tel</label>
          <input type="text" id="telEl" />
        </div>
        <div>
          <label for="addressEl">address</label>
          <input type="text" id="addressEl" />
        </div>
        <div>
          <label for="fileEl">Clique aqui para carregar imagem</label>
          <input type="file" id="fileEl" hidden />
          <br />
          <img width="100" alt="Prévia da imagem..." id="previewEl" />
        </div>
        <button id="downloadEl" onClick={makeVCard}>
          Save
        </button>
      </fieldset>
    </div>
  );
}

export default App;
