const father = document.getElementById("father-grid");

const all_btn = document
  .querySelector(".all-btn")
  .addEventListener("click", (event) => {
    //console.log(event.target.id);
    selectPlace(event.target.id);
  });

function selectPlace(id) {
  switch (id) {
    case "start-start":
      father.style.justifyContent = "start";
      father.style.alignContent = "flex-start";
      break;
    case "start-center":
      father.style.justifyContent = "center";
      father.style.alignContent = "flex-start";
      break;
    case "start-end":
      father.style.justifyContent = "end";
      father.style.alignContent = "flex-start";
      break;
    case "center-start":
      father.style.justifyContent = "start";
      father.style.alignContent = "center";
      break;
    case "center-center":
      father.style.justifyContent = "center";
      father.style.alignContent = "center";
      break;
    case "center-end":
      father.style.justifyContent = "end";
      father.style.alignContent = "center";
      break;
    case "end-start":
      father.style.justifyContent = "start";
      father.style.alignContent = "flex-end";
      break;
    case "end-center":
      father.style.justifyContent = "center";
      father.style.alignContent = "flex-end";
      break;
    case "end-end":
      father.style.justifyContent = "end";
      father.style.alignContent = "flex-end";
      break;
  }
}
