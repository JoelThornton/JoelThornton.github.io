const stor = window.sessionStorage
const opps = []  // opportunities

function displayOpp(name, img_src, container=document.getElementById("opportunities")) {
  // create elements
  const div = document.createElement("div")  // container div
  const nameP = document.createElement("p")  // <p>: opp name
  const img = document.createElement("img")

  // populate elements
  nameP.innerHTML = name
  img.src = img_src

  // set class
  div.className = "opp"
  nameP.style.display = "block"
  img.style.display = "block"

  // set events
  div.onmouseenter = () => {div.className += " highlight"}
  div.onmouseleave = () => {div.className = div.className.replace(" highlight", "")}
  div.onclick = function() {  // go to page with more detail on opportunity
    url = "file:///C:/Users/camer/OneDrive/YAP/opp.html"
    url += "?name=" + encodeURIComponent(name)
    document.location.href = url
    // setTimeout(()=>document.location.href = url, 1000)
  }

  // append to parents
  div.appendChild(nameP)
  div.appendChild(img)
  container.appendChild(div)
}

for (let i=0; i<stor.length; i++) {
  displayOpp(stor.key(i), stor.getItem(stor.key(i)))
}
