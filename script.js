//progress-bar-1
let progressBar1= document.querySelector(".circular-progress-1");
let valueContainer1 = document.querySelectorAll(".value-container-1");

let progressValue1 = 0;
let progressEndValue1 = 95;
let speed1 = 20;

let progress1 = setInterval(() => {
  progressValue1++;
  valueContainer1.textContent = `${progressValue1}%`;
  progressBar1.style.background = `conic-gradient(
      #0AD66B ${progressValue1 * 3.6}deg,
      whitesmoke ${progressValue1 * 3.6}deg
  )`;
  if (progressValue1 == progressEndValue1) {
    clearInterval(progress1);
  }
}, speed1);

//progress-bar-2

let progressBar2= document.querySelector(".circular-progress-2");
let valueContainer2 = document.querySelectorAll(".value-container-2");

let progressValue2 = 0;
let progressEndValue2 = 70;
let speed2 = 20;

let progress2 = setInterval(() => {
  progressValue2++;
  valueContainer2.textContent = `${progressValue2}%`;
  progressBar2.style.background = `conic-gradient(
      #00A7FB ${progressValue2 * 3.6}deg,
      whitesmoke ${progressValue2 * 3.6}deg
  )`;
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);

//progress-bar-3

let progressBar3= document.querySelector(".circular-progress-3");
let valueContainer3 = document.querySelectorAll(".value-container-3");

let progressValue3 = 0;
let progressEndValue3 = 75;
let speed3 = 20;

let progress3 = setInterval(() => {
  progressValue3++;
  valueContainer3.textContent = `${progressValue3}%`;
  progressBar3.style.background = `conic-gradient(
      #DCFB6E ${progressValue3 * 3.6}deg,
      whitesmoke ${progressValue3 * 3.6}deg
  )`;
  if (progressValue3 == progressEndValue3) {
    clearInterval(progress3);
  }
}, speed3);


//progress-bar-4

let progressBar4= document.querySelector(".circular-progress-4");
let valueContainer4 = document.querySelectorAll(".value-container-4");

let progressValue4 = 0;
let progressEndValue4 = 50;
let speed4 = 20;

let progress4 = setInterval(() => {
  progressValue4++;
  valueContainer4.textContent = `${progressValue4}%`;
  progressBar4.style.background = `conic-gradient(
    #D91515 ${progressValue4 * 3.6}deg,
      whitesmoke ${progressValue4 * 3.6}deg
  )`;
  if (progressValue4 == progressEndValue4) {
    clearInterval(progress4);
  }
}, speed4);

