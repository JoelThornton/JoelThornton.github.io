
function createOpp(name, img_src, container=document.getElementById("opportunities")) {  // factory of opp. container: element that opportunity is slaved to
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

  div.onmouseenter = () => {div.className += " highlight"}
  div.onmouseleave = () => {div.className = div.className.replace(" highlight", "")}

  // append to parents
  div.appendChild(nameP)
  div.appendChild(img)
  console.log(container);
  container.appendChild(div)

  // create and return opp object
  return {
    nameP,
  }
}
