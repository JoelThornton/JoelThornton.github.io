
window.onload = function() {
  const url = document.location.href
  const name = decodeURIComponent(url.split("?")[1].split("=")[1])
  const opp = opps[name]

  // populate page
  document.title = "YAP - " + name
  document.getElementById("name").innerHTML = name
  document.getElementById("img").src = opp.img_src
  document.getElementById("desc").innerHTML = opp.desc
}
