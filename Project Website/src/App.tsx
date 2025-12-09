import "./App.css";
import MemberInformation from "./member-information";
import ProjectPlan from "./26-AutomationOfDigitalIntake-ProjectPlan.pdf";
import SRS from "./P26-T1-DigitalIntake-Requirements.pdf";
import SDD from "./P26-T1-DigitalIntake-Design.pdf";
import DEV from "./P26-T1-DigitalIntake-Development.pdf";
import STPSTR from "./P26-T1-AutomationofDigitalIntake-STP-STR.pdf";
import FinalReport from "./P26-T1-DigitalIntake-FinalReport.pdf";

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
        <a href={ProjectPlan} target="_blank">
          <button>Project Plan</button>
        </a>

        <a href={SRS} target="_blank">
          <button>SRS</button>
        </a>

        <a href={SDD} target="_blank">
          <button>SDD</button>
        </a>

        <a href={DEV} target="_blank">
          <button>DEV</button>
        </a>

        <a href={STPSTR} target="_blank">
          <button>STP/STR</button>
        </a>
        <a href={FinalReport} target="_blank">
          <button>Final Report</button>
        </a>
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
        <a href={"https://youtu.be/kEUE8cSplf4"} target="_blank">
          <button>Final Presentation Video</button>
        </a>
      </div>
    </>
  );
}

export default App;

console.warn("Hello KSU!");
