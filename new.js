let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let am = document.querySelector("#am");
let watch = document.querySelector(".watch");
let btn = document.querySelector("#submit");
let one = 00;
let two = 00;
let three = 00;
const four = document.querySelector(".four");
let ss = document.querySelector(".threesecond");
let mm = document.querySelector(".twominut");
let hh = document.querySelector(".onehour");
let interval;

function myStart() {
  one++;
  if (one <= 9) {
    ss.innerHTML = "0" + one;
  }
  if (one > 9) {
    ss.innerHTML = one;
  }
  if (one > 59) {
    two++;
    mm.innerHTML = "0" + two;
    one = 0;
    ss.innerHTML = "0" + 0;
  }
  if (two > 9) {
    mm.innerHTML = two;
  }
  if (two > 59) {
    three++;
    hh.innerHTML = "0" + three;
    two = 0;
    mm.innerHTML = "0" + two;
    ss.innerHTML = "0" + 0;
  }
  if (three <= 9) {
    hh.innerHTML = "0" + three;
  }
  if (three > 9) {
    hh.innerHTML = three;
  }
  if (three > 12) {
    hh.innerHTML = three - 12;
  }

  if (three > 12 || two > 60 || one > 60) {
    watch.innerHTML = "Error";
  }
  
  if (hh.innerHTML == "12" && ss.innerHTML == "00" && mm.innerHTML == "00") {
    if (four.innerHTML == "AM") {
      four.innerHTML = "PM";
    } else {
      four.innerHTML = "AM";
    }
  }
}

btn.addEventListener("click", () => {
  one = second.value;
  two = minute.value;
  three = hour.value;
  four.innerText = am.value;
  setInterval(myStart, 1000);
});
