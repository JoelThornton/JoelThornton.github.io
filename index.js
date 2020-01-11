
const opps = []  // opportunities


for (let i=0; i<window.sessionStorage.length; i++) {
  displayOpp(window.sessionStorage.key(i))
}

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

  // append to parents
  div.appendChild(nameP)
  div.appendChild(img)
  container.appendChild(div)
}
