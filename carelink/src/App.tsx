import "./App.css";
import MemberInformation from "./member-information";


function App() {
  return (
    <>
      <h1>P26-T1 Digital Intake</h1>
      <div id="members">
        <MemberInformation />
      </div>
      <h2>CS 4850 - Senior Project Fall 2025</h2>
      <div id="documents">
        <h3>Documents (PDF): </h3>
        <button>Project Plan</button>
        <button>SRS</button>
        <button>SDD</button>
        <button>DEV</button>
        <button>STP</button>
        <button>STR</button>
      </div>
      <br></br>
      <div id="links">
        <h3>Links: </h3>
        <button
          onClick={() =>
            window.open("https://github.com/CS4850-26/carelink", "_blank")
          }
        >
          GitHub
        </button>
        <button>Final Presentation Video</button>
      </div>
    </>
  );
}

export default App;



console.warn("Hello KSU!");
