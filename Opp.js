
function createOpp(name, img_src) {  // factory of opp. container: element that opportunity is slaved to
  return {
    name,
    img_src,
    display(container=document.getElementById("opportunities")) {
      // create elements
      const div = document.createElement("div")  // container div
      const nameP = document.createElement("p")  // <p>: opp name
      const img = document.createElement("img")

      // populate elements
      nameP.innerHTML = this.name
      img.src = this.img_src

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
  }
}
