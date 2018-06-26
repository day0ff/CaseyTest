 Array.from(document.getElementsByClassName("pie")).forEach(function(pie) {
    var p = parseFloat(pie.textContent);
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    var circle = document.createElementNS(NS, "circle");
    var title = document.createElementNS(NS, "title");

    circle.setAttribute("r", 16);
    circle.setAttribute("cx", 16);
    circle.setAttribute("cy", 16);
    circle.setAttribute("stroke-dasharray", p + " 100");
    circle.setAttribute("stroke", "red");
    circle.setAttribute("fill", "pink");

    svg.setAttribute("viewBox", "0 0 32 32");
    title.textContent = pie.textContent;
    // pie.textContent = '';
    svg.appendChild(title);
    svg.appendChild(circle);
    pie.appendChild(svg);
});
let test = [
  {name:"Экстроверт", points:0, questions: [1,2,3,4,5,6,7,8,9,10], choice: ['a','a','a','a','a','a','a','a','a','a']},
  {name:"Интроверт", points:0, questions: [1,2,3,4,5,6,7,8,9,10], choice: ['b','b','b','b','b','b','b','b','b','b']},
  {name:"Сэнситив", points:0, questions: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                                choice: ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a']},
  {name:"Интуит", points:0, questions: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                               choice: ['b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b']},
  {name:"Лог", points:0, questions: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
                            choice: ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a']},
  {name:"Эт", points:0, questions: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
                           choice: ['b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b']},
  {name:"Рациональный", points:0, questions: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
                                     choice: ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a']},
  {name:"Иррациональный", points:0, questions: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
                                       choice: ['b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b']}
];
document.getElementById("verify").addEventListener("click", function(e) {
  e.preventDefault();
  verify();
});
function verify() {
  let form = document.getElementById("questionnaire");
  let uls =  Array.from(form.getElementsByTagName("ul"));
  let checked = uls.filter((ul) =>{
                  ul.classList.remove("highlight");
                  let inputs = Array.from(ul.getElementsByTagName("input")).filter((input)=>input.checked).length;
                  if(inputs) return true;
                  ul.classList.add("highlight");
                  return false;
              }).length;
  console.log(uls.length + " / " + checked);
  if(uls.length == checked) {
    calc();
    result();
  }
}
function calc(){
  test.forEach((element)=>{
    element.points = element.questions.filter((question) => questionFilter(question, element.choice)).length;
    console.log(element.name + " " + element.points);
  });
}
function questionFilter(question, ch){
    let questions = Array.from(document.getElementsByTagName("input"))
        .filter((element)=>{
          if(element.name=="question" + question) return true;
          return false;
        });
    if(questions[choice(ch)].checked) return true;
    return false;
}
function choice(value){
    return parseInt(value, 36) - 10;
}
function result(){
  let container = document.getElementById("container");

}
