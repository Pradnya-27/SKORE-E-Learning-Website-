// get = getall()

function getall(){
  var x = localStorage.getItem("username");
  console.log(x);
  var y =document.getElementById("username");
  y.innerText = x;
  console.log(y)

  var a = localStorage.getItem("email");
  console.log(a);
  var b =document.getElementById("mail");
  b.innerText = a;
  console.log(b)

  var c = localStorage.getItem("contact");
  console.log(c);
  var d =document.getElementById("phone");
  d.innerText = c;
  console.log(d)

  // var e = localStorage.getItem("ph");
  // console.log(c);
  // var f =document.getElementById("phone");
  // e.innerText = f;
  // console.log(e)
  var score = JSON.parse(localStorage.getItem("score")); 
  var scoreData = JSON.parse(localStorage.getItem("Score-Datatypes")); 
  console.log(score); 
  console.log(scoreData); 
 
  var getScore = document.getElementById("scoreGet"); 
  getScore.innerHTML=` 
<p>Python Basics- <b>${score}</b></p> 
  <p>Datatypes in Python- <b>${scoreData}</b></p> 
  <p>Condition statements in Python-</p> 
  <p>Python Inheritance-</p> 
  `;

}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// function updateDateTime() {
//   const now = new Date();
//   const datetime = document.getElementById('datetime');
//   datetime.innerHTML = now.toLocaleString();
// }

// // update the date/time every second
// setInterval(updateDateTime, 1000);

// var placeholderValue = localStorage.getItem("placeholder");

// var sc = JSON.parse(localStorage.getItem("score"));
// console.log(sc);
// var myscore = document.getElementsByClassName("getScore");
// myscore.innerHTML = `                  
// <p>Python Basics- ${sc}</p>
// <p>Datatypes in Python-</p>
// <p>Condition statements in Python-</p>
// <p>Python Inheritance-</p>
// `;
