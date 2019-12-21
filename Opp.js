
function createOpp(name, desc, img_src, container=document.getElementById("opportunities")) {  // factory of opp. container: element that opportunity is slaved to
  // create elements
  const div = document.createElement("div")  // container div
  const nameP = document.createElement("p")  // <p>: opp name
  const descP = document.createElement("p")  // <p>: description
  const img = document.createElement("img")

  // populate elements
  nameP.innerHTML = name + ":"
  descP.innerHTML = desc
  img.src = img_src

  // set class
  div.className = "opp"
  nameP.style.display = "block"
  descP.style.display = "block"
  img.style.display = "block"

  // events
  const show = () => {  // display extra info
    div.style.animationName = "enlarge"
    div.style.animationDuration = "0.2s"
    div.style.animationFillMode = "forwards"
    div.onclick = hide
  }
  const hide = () => {  // hide extra info
    div.style.animationName = "shrink"
    div.style.animationDuration = "0.2s"
    div.style.animationFillMode = "forwards"
    div.onclick = show
  }
  div.onclick = show
  div.onmouseenter = () => {div.className += " highlight"}
  div.onmouseleave = () => {div.className = div.className.replace(" highlight", "")}

  // append to parents
  div.appendChild(nameP)
  div.appendChild(descP)
  div.appendChild(img)
  container.appendChild(div)

  // create and return opp object
  return {
    nameP,
    descP
  }
}
