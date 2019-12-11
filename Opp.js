
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
  nameP.className = "vis"
  descP.className = "hid"
  img.className = "hid"

  // events
  const show = () => {
    descP.className = descP.className.replace("hid", "vis")
    img.className = img.className.replace("hid", "vis")
    div.onclick = hide
  }
  const hide = () => {
    descP.className = descP.className.replace("vis", "hid")
    img.className = img.className.replace("vis", "hid")
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
