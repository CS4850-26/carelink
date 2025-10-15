import aashna from "./aashna.png";
import franck from "./franck.png";
import angel from "./angel.png";
import ayush from "./ayush.png";


interface GroupMember {
  img: string;
  name: string;
}

// Stores each member's photo and name
const members: GroupMember[] = [
  { img: aashna, name: "Aashna Suthar" },
  { img: franck, name: "Franck Dipanda" },
  { img: angel, name: "Angel Gutierrez" },
  { img: ayush, name: "Ayush Kachhadiya" },
];

function MemberInformation() {
  return (
    <>
      {/* Renders each member's photo and name */}
      {members.map((member, index) => (
        <div key={index} className="member-card">
          <img src={member.img} alt={member.name} className="member-image" />
          <h2 className="member-name">{member.name}</h2>
        </div>
      ))}
    </>
  );
}

export default MemberInformation;
