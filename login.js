
function login() {
  username = document.getElementById("username").value
  password = document.getElementById("password").value
  for (let user of users) {
    if (user[0] === username && user[1] === password) {
      console.log(user, " succesfully logged in.")
    }
  }
  console.log(username, password)
  
}
