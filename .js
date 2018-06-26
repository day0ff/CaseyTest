let test = [{
    name: "Экстроверт",
    code: "E",
    points: 0,
    questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    choice: ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
  },
  {
    name: "Интроверт",
    code: "I",
    points: 0,
    questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    choice: ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
  },
  {
    name: "Сэнситив",
    code: "S",
    points: 0,
    questions: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    choice: ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
  },
  {
    name: "Интуит",
    code: "N",
    points: 0,
    questions: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    choice: ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
  },
  {
    name: "Лог",
    code: "T",
    points: 0,
    questions: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    choice: ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
  },
  {
    name: "Эт",
    code: "F",
    points: 0,
    questions: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    choice: ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
  },
  {
    name: "Рациональный",
    code: "J",
    points: 0,
    questions: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    choice: ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
  },
  {
    name: "Иррациональный",
    code: "P",
    points: 0,
    questions: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    choice: ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
  }
];
let person = {
  fio: "",
  department: ""
}
const COLARS = [{
    inner: "#FF0000",
    outer: "#FF9090"
  },
  {
    inner: "#F8F400",
    outer: "#FBFA71"
  },
  {
    inner: "#24CF00",
    outer: "#7EE768"
  },
  {
    inner: "#005D9F",
    outer: "#5DA0CF"
  },
  {
    inner: "#6C0AAB",
    outer: "#AA67D5"
  },
  {
    inner: "#1200AC",
    outer: "#4635D6"
  },
  {
    inner: "#F83F00",
    outer: "#FB9471"
  },
  {
    inner: "#F87F00",
    outer: "#FBB871"
  },
  {
    inner: "#C50080",
    outer: "#E266B7"
  },
  {
    inner: "#A0E800",
    outer: "#CAF46E"
  }
]
const PSYCHOLOGICAL_TYPE = [{
    code: "INFP",
    name: "ИЭИ"
  },
  {
    code: "ISFP",
    name: "СЭИ"
  },
  {
    code: "INTP",
    name: "ИЛИ"
  },
  {
    code: "ISTP",
    name: "СЛИ"
  },
  {
    code: "INFJ",
    name: "ЭИИ"
  },
  {
    code: "ISFJ",
    name: "ЭСИ"
  },
  {
    code: "INTJ",
    name: "ЛИИ"
  },
  {
    code: "ISTJ",
    name: "ЛСИ"
  },
  {
    code: "ENFP",
    name: "ИЭЭ"
  },
  {
    code: "ESFP",
    name: "СЭЭ"
  },
  {
    code: "ENTP",
    name: "ИЛЭ"
  },
  {
    code: "ESTP",
    name: "СЛЭ"
  },
  {
    code: "ENFJ",
    name: "ЭИЭ"
  },
  {
    code: "ESFJ",
    name: "ЭСЭ"
  },
  {
    code: "ENTJ",
    name: "ЛИЭ"
  },
  {
    code: "ESTJ",
    name: "ЛСЭ"
  }
]
// let container = document.getElementById("container");
// container.innerHTML = "";
// for(let i=0;i<COLARS.length;i++){
//   container.appendChild(elementDiagramm(i, i));
// }
// drawDiagramm();
document.getElementById("verify").addEventListener("click", function(e) {
  e.preventDefault();
  let fio = document.getElementById("fio");
  let department = document.getElementById("department");
  person.fio = fio.value;
  person.department = department.value;
  fio.parentElement.classList.remove("highlight");
  department.parentElement.classList.remove("highlight");
  if (person.fio == "" || person.department == "") {
    fio.parentElement.classList.add("highlight");
    department.parentElement.classList.add("highlight");
    showMessage("Не заполнены обязательные поля: ФИО или Название отдела.");
  } else {
    verify();
  }
});
function showMessage(message){
  alert(message);
}
Array.from(document.getElementsByTagName("input")).forEach((input)=>{input.checked=true;})
function verify() {
  let form = document.getElementById("questionnaire");
  let uls = Array.from(form.getElementsByTagName("ul"));
  let checked = uls.filter((ul) => {
    ul.classList.remove("highlight");
    let inputs = Array.from(ul.getElementsByTagName("input")).filter((input) => input.checked).length;
    if (inputs) return true;
    ul.classList.add("highlight");
    return false;
  }).length;
  console.log(uls.length + " / " + checked);
  if (uls.length == checked) {
    calc();
    result();
  }else{
    showMessage("Не отмеченны все поля.");
  }
}

function calc() {
  test.forEach((element) => {
    element.points = element.questions.filter((question) => questionFilter(question, element.choice)).length;
    console.log(element.name + " " + element.points + " / " + element.code);
  });
}

function questionFilter(question, ch) {
  let questions = Array.from(document.getElementsByTagName("input"))
    .filter((element) => {
      if (element.name == "question" + question) return true;
      return false;
    });
  if (questions[choice(ch)].checked) return true;
  return false;
}

function choice(value) {
  return parseInt(value, 36) - 10;
}

function result() {
  let container = document.getElementById("container");
  container.innerHTML = "";
  let h2 = document.createElement('h2');
  h2.innerHTML = "Результаты теста: " + person.fio + " " + person.department;
  container.appendChild(h2);
  let h3 = document.createElement('h3');
  h3.innerHTML = "Ваш психологический тип: " + psyhologicalType();
  container.appendChild(h3);
  let div = document.createElement('div');
  test.forEach((element) => {
    let percent = 100 * element.points / element.questions.length;
    div.appendChild(elementDiagramm(percent, element.name));
  });
  container.appendChild(div);
  drawDiagramm();
}

function psyhologicalType() {
  let type = "";
  let elem = getElementByCode(test, "I");
  // console.log(elem.points + " || " + getElementByCode(test, "E").points);
  if (getElementByCode(test, "I").points >= getElementByCode(test, "E").points) {
    type += "I";
  } else {
    type += "E";
  }
  if (getElementByCode(test, "N").points >= getElementByCode(test, "S").points) {
    type += "N";
  } else {
    type += "S";
  }
  if (getElementByCode(test, "F").points >= getElementByCode(test, "T").points) {
    type += "F";
  } else {
    type += "T";
  }
  if (getElementByCode(test, "P").points >= getElementByCode(test, "J").points) {
    type += "P";
  } else {
    type += "J";
  }
  console.log(type + " / " + getElementByCode(PSYCHOLOGICAL_TYPE, type).name);
  return getElementByCode(PSYCHOLOGICAL_TYPE, type).name;
}

function getElementByCode(array, code) {
  // console.log(array.find((element) => element.code == code));
  return array.find((element) => element.code == code);
}

function elementDiagramm(percent, text) {
  let divDiagramm = document.createElement('div');
  divDiagramm.classList.add("diagramm");
  let divPie = document.createElement('div');
  divPie.classList.add("pie");
  let span = document.createElement('span');
  span.innerHTML = percent + "%";
  divPie.appendChild(span);
  divDiagramm.appendChild(divPie);
  span = document.createElement('span');
  span.innerHTML = text;
  divDiagramm.appendChild(span);
  return divDiagramm;
}

function drawDiagramm() {
  Array.from(document.getElementsByClassName("pie")).forEach((pie, index) => {
    var p = parseFloat(pie.textContent);
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    var circle = document.createElementNS(NS, "circle");
    var title = document.createElementNS(NS, "title");

    circle.setAttribute("r", 16);
    circle.setAttribute("cx", 16);
    circle.setAttribute("cy", 16);
    circle.setAttribute("stroke-dasharray", p + " 100");
    circle.setAttribute("stroke", COLARS[index].inner);
    circle.setAttribute("fill", COLARS[index].outer);

    svg.setAttribute("viewBox", "0 0 32 32");
    title.textContent = pie.textContent;
    svg.appendChild(title);
    svg.appendChild(circle);
    pie.appendChild(svg);
  });
}
