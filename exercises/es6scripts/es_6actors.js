let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];
// Who is the Academy Member whose ID is 187?

let member = academyMembers.find((member) => member.memID == 187); // == is comparison, t or f.
console.log(member.name);

// Who has been in at least 3 films?

function findMembersWithAtLeast3Films(academyMembers) {
  return academyMembers.filter(function (member) {
    return member.films.length >= 3;
  });
}

// Who has a name that starts with "Bob"?
let membersWithNamedBob = academyMembers.filter(member => member.name.startsWith("Bob"));
membersWithNamedBob.forEach(member => console.log(member));

// HARDER: Which Academy Members have been in a film
// that starts with "A"

let members = academyMembers.filter((m) =>
  m.films.find((f) => f.toLowerCase().startsWith("a"))
);
//console.log(members);
