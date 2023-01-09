import "./App.css";
import Image from "./assets/13.png";

function App() {
  return (
    <div className="App-header">
      <center>
        <img
          src={Image}
          alt="fire fox from fableverse"
          style={{ height: "200px", padding: 0, margin: 0, marginTop: "20px" }}
        />
        <h1
          style={{ margin: 0, padding: 0, fontSize: "84px", fontWeight: "800" }}
        >
          FABLEVERSE
        </h1>
        <h2
          style={{
            margin: 0,
            padding: 0,
            fontWeight: "100",
            fontSize: "24px",
            maxWidth: "800px",
            marginBottom: "20px",
          }}
        >
          An epic creature-collecting and battling, incremental game! Explore,
          capture, breed, and battle your way to the top. Train your skills and
          improve your operations. Join us on Discord for updates and
          behind-the-scenes content or wishlist it today!
        </h2>
        <img
          src="https://outbrkgame.files.wordpress.com/2021/06/button-wishlist-768x195-1.png"
          alt="steam wishlist now"
          style={{ width: "300px" }}
        />
      </center>
    </div>
  );
}

export default App;
