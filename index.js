const opps = []  // opportunities

opps.push(createOpp("Hugh Baird: South Sefton Campus", "A sixth form college dedicated to A'level based qualifications."))
opps.push(createOpp("Hugh Baird: Main Campus", "Aimed at practical BTEC qualifications, Hugh Baird is a large college with several other campuses."))
opps.push(createOpp("Litherland Sports Park", "This family sized gym is great for the local community who wish to get fit. It has olympic grade facilties, tested by real olympians."))
// opps.push(createOpp("", ""))
const opportunities = document.getElementById("opportunities")
for (let opp of opps) {
  const div =  document.createElement("div")
  const name = document.createElement("p")
  const desc = document.createElement("p")
  // name.style.
  name.innerHTML = opp.name
  desc.innerHTML = ": " + opp.desc
  div.appendChild(name)
  div.appendChild(desc)
  opportunities.appendChild(div)

  console.log("pass");
}
