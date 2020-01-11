const opps = []  // opportunities

opps.push(createOpp("Hugh Baird: South Sefton Campus", "Resources\\img\\HB_SSC.jpg"))  // , "A sixth form college dedicated to A'level based qualifications."
opps.push(createOpp("Hugh Baird: Main Campus", "Resources\\img\\HB_MC.jpg"))  // , "Aimed at practical BTEC qualifications, Hugh Baird is a large college with several other campuses."
opps.push(createOpp("Litherland Sports Park", "Resources\\img\\LSP.jpg"))  // , "This family sized gym is great for the local community who wish to get fit. It has olympic grade facilties, tested by real olympians."
opps.push(createOpp("Litherland Sports Park", "Resources\\img\\LSP.jpg"))  // , "This family sized gym is great for the local community who wish to get fit. It has olympic grade facilties, tested by real olympians."
opps.push(createOpp("Litherland Sports Park", "Resources\\img\\LSP.jpg"))  // , "This family sized gym is great for the local community who wish to get fit. It has olympic grade facilties, tested by real olympians."
opps.push(createOpp("Litherland Sports Park", "Resources\\img\\LSP.jpg"))  // , "This family sized gym is great for the local community who wish to get fit. It has olympic grade facilties, tested by real olympians."
opps.push(createOpp("Litherland Sports Park", "Resources\\img\\LSP.jpg"))  // , "This family sized gym is great for the local community who wish to get fit. It has olympic grade facilties, tested by real olympians."
// opps.push(createOpp("", ""))

for (let opp of opps) {
  opp.display()
}
