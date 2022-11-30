setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = "AM"

  if (h >= 12 && h !== 0) {
    h = h - 12;
    ampm = "PM"
  }
  // if hour value is zero then set to 12
  h = h == 0 ? h = 12 : h;
  // Adding zero before hr, min and seconds
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById('txt').innerHTML = `${h}:${m}:${s} ${ampm} `
  if (alarmTime == `${h}:${m}:${s} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);


const selectMenu = document.querySelectorAll("select")
setAlarmBtn = document.querySelector("button")
content = document.querySelector(".content")
let alarmTime, isAlarmSet = false,
  // Setting Alarm tone
  ringtone = new Audio("lenovo.mp3")
// Hour
for (let i = 0; i < 13; i++) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
//  Minute
for (let i = 0; i < 61; i++) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
//  Second
for (let i = 0; i < 61; i++) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
//  AM/PM
for (let i = 0; i < 2; i++) {
  ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`
  selectMenu[3].firstElementChild.insertAdjacentHTML("afterend", option);
}

setAlarm = () => {
  if (isAlarmSet) {
    alarmTime = ""; //reset the alarm time
    ringtone.pause(); //to pause the ringtone
    content.classList.remove("disable"); //to disable the alarm
    setAlarmBtn.innerText = "Set Alarm"; //set the innner text of button
    return isAlarmSet = false;
  }

  let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value} ${selectMenu[3].value}`
  if (time.includes("Hour") || time.includes("Minute") || time.includes("Second") || time.includes("AM/Pm"))
    alert("Please, select a valid time to set Alarm!")
  isAlarmSet = true;
  alarmTime = time;
  content.classList.add("disable");
  setAlarmBtn.innerText = "Clear Alarm";
}

setAlarmBtn.addEventListener("click", setAlarm);