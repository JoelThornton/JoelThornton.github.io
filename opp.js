
window.onload = function() {
  const url = document.location.href
  const index = decodeURIComponent(url.split("?")[1].split("=")[1])
  const opp = opps[index]

  // populate page
  document.title = "YAP - " + opp.name
  document.getElementById("name").innerHTML = opp.name
  document.getElementById("img").src = opp.img_src
  document.getElementById("desc").innerHTML = opp.desc
}
