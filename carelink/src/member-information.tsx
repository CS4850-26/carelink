interface GroupMember {
  img: string;
  name: string;
}

// Stores each member's photo and name
const members: GroupMember[] = [
  { img: "/aashna.png", name: "Aashna Suthar" },
  { img: "/franck.png", name: "Franck Dipanda" },
  { img: "/angel.png", name: "Angel Gutierrez" },
  { img: "/ayush.png", name: "Ayush Kachhadiya" },
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
