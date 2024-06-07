const togglePoint = document.getElementById("point");
const box1Number = document.getElementById("box1Number");
const box2Number = document.getElementById("box2Number");
const box3Number = document.getElementById("box3Number");
let togglePostion = true;
const setToggle = () => {
  togglePoint.style.translate = togglePostion ? "0" : "23px";
  console.log(togglePostion);
  box1Number.innerText = togglePostion ? "199.99" : "19.99";
  box2Number.innerText = togglePostion ? "249.99" : "24.99";
  box3Number.innerText = togglePostion ? "399.99" : "39.99";
};
// ========
const toggleClick = () => {
  togglePostion = !togglePostion;
  setToggle();
};
