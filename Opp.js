const opps = []  // opportunities

opps.push(createOpp("Hugh Baird: South Sefton Campus", "A sixth form college dedicated to A'level based qualifications."))
opps.push(createOpp("Hugh Baird: Main Campus", "Aimed at practical BTEC qualifications, Hugh Baird is a large college with several other campuses."))
opps.push(createOpp("Litherland Sports Park", "This family sized gym is great for the local community who wish to get fit. It has olympic grade facilties, tested by real olympians."))
// opps.push(createOpp("", ""))

function createOpp(name, desc) {  // factory of opp
  return {
    name, desc
  }
}
