

const time = document.getElementById("time");
const am_pm = document.getElementById("am-pm");
const fullDate = document.getElementById("full-date");
const days = document.getElementsByClassName("day");

function startClock() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const day = date.getDay();
  const currDate = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth();
  
  const monthNames = [
    "January","February","March","April",
    "May","June","July","August","September",
    "October","November","December",
  ];

  time.innerHTML = `${updateTime(hour)}:${updateTime(min)}:${updateTime(sec)}`;
  am_pm.innerHTML = hour >= 12 ? "PM" : "AM";
  fullDate.innerHTML = `${monthNames[month]} ${currDate} ${year}`;
  days[day].style.color = "red";
}

function updateTime(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}
setInterval(startClock, 1000);


let sum = (...args)=>
{
    for(let data in args)
    {
        console.log(args[data])
    }
}
sum(12,45,85,84,74,57,54,47,64,74,57,53,
    86,46,87,45,76,67,25,37,54,33,43,79,85)


    var name  = "hussain";
var email = "hussain@gamil.com";

localStorage.setItem("username",name)
localStorage.setItem("email",email)


document.getElementById("name").innerHTML=localStorage.getItem("username")
document.getElementById("email").innerHTML=localStorage.getItem("email")