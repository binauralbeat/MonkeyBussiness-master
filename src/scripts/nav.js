// A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment()

// Create div and nav child
const navi = document.createElement ("nav")
navi.className = "navbar"


const execSum = document.createElement ("a")
execSum.className = "navLinks"
execSum.href = "/index.html"
execSum.textContent = "HOME"
navi.appendChild(execSum)

// const rapSht = document.createElement ("a")
// rapSht.className = "navLinks"
// rapSht.href = "/store/store.html"
// rapSht.textContent = "TUNES"
// navi.appendChild(rapSht)

const interact = document.createElement ("a")
interact.className = "navLinks"
interact.href = "/interact/interact.html"
interact.textContent = "INTERACT"
navi.appendChild(interact)

// const photo = document.createElement ("a")
// photo.className = "navLinks"
// photo.href = "/photography/photo.html"
// photo.textContent = "PHOTO"
// navi.appendChild(photo)

const contact = document.createElement ("a")
contact.className = "navLinks"
contact.href = "/contact/contact.html"
contact.textContent = "CONTACT"
navi.appendChild(contact)

const login = document.createElement ("a")
login.className = "login"
login.href = "/login/login.html"
login.textContent = "Login"
navi.appendChild(login)


/*const aboutTeam = document.createElement ("a")
aboutTeam.href = "https://soundcloud.com/enkiisgod"
aboutTeam.textContent = " About the Team"
navi.appendChild(aboutTeam)*/


fragment.appendChild(navi)


/*
    append to div with id of nav
*/
document.querySelector("#nav").appendChild(fragment)

//sticky nav

window.onload = function() {myFunction()};

var sticky = navi.offsetTop

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navi.classList.add("sticky")
    } else {
      navi.classList.remove("sticky");
    }
  }