import "./App.css";
import Image from "./assets/1.png";

function App() {
  return (
    <div className="App-header">
      <center>
        <img
          src={Image}
          alt="fire fox from fableverse"
          style={{ height: "120px", padding: 0, margin: 0, marginTop: "20px" }}
        />
        <h1
          style={{ margin: 0, padding: 0, fontSize: "84px", fontWeight: "600" }}
        >
          FABLEVERSE
        </h1>
        <h2
          style={{
            margin: 0,
            padding: 0,
            fontWeight: "100",
            fontSize: "16px",
            maxWidth: "600px",
            marginBottom: "20px",
          }}
        >
          Epic creature-collecting and battling game! Explore, capture, breed,
          and battle your way to the top. Join us on Discord for updates and
          behind-the-scenes content!
        </h2>
        <iframe
          title="discord join"
          src="https://discord.com/widget?id=1046655361878339634&theme=dark"
          width="350"
          height="500"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </center>
    </div>
  );
}

export default App;
