const container=document.getElementById("opportunities")

function displayOpp(opp) {
  // create elements
  const div = document.createElement("div")  // container div
  const nameP = document.createElement("p")  // <p>: opp name
  const img = document.createElement("img")

  // populate elements
  nameP.innerHTML = opp.name
  img.src = opp.img_src

  // set class
  div.className = "opp"
  nameP.style.display = "block"
  img.style.display = "block"

  // set events
  div.onmouseenter = () => {div.className += " highlight"}
  div.onmouseleave = () => {div.className = div.className.replace(" highlight", "")}
  div.onclick = function() {  // go to page with more detail on opportunity
    url = document.location.href.replace("index.html", "opp.html")
    console.log(url);
    // url = "file:///C:/Users/camer/OneDrive/YAP/opp.html"
    url += "?index=" + encodeURIComponent(opps.indexOf(opp))
    document.location.href = url
    // setTimeout(()=>document.location.href = url, 1000)
  }

  // append to parents
  div.appendChild(nameP)
  div.appendChild(img)
  container.appendChild(div)
}

filter = {
  include: ["all"],
}

for (let opp of opps) {
  if (filter.include[0] === "all" || filter.include.filter(value => opp.tags.includes(value)).length>0) {
    displayOpp(opp)
  }
}

function filterOpps() {
  const tags = [...document.getElementsByClassName("filtration")].filter((checkbox) => {return checkbox.checked}).map((checkbox) => {return checkbox.value})
  // clear container
  container.innerHTML = ""

  // calculate rankings
  for (let key in opps) {
    const opp = opps[key]
    opp.ranking = opp.tags.filter(tag => tags.includes(tag)).length
  }

  // display selected opportunities in order of most relevent
  opps.sort((a, b) => b.ranking - a.ranking)
  for (let opp of opps) {
    if (opp.ranking > 0) {
      displayOpp(opp)
    }
  }
}
