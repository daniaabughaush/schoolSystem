let table = document.getElementById("table");
let form = document.getElementById("form");

function render(text, myage, gender, grade, phone) {
  let trElement = document.createElement("tr");
  let trEl = document.createElement("tr");
  let trEl2 = document.createElement("tr");
  let trEl3 = document.createElement("tr");
  let trEl4 = document.createElement("tr");
  let trEl5 = document.createElement("tr");
  let thEl = document.createElement("th");
  let thEl1 = document.createElement("th");
  let tdEl = document.createElement("td");
  let tdEl2 = document.createElement("td");
  let tdEl3 = document.createElement("td");
  let tdEl4 = document.createElement("td");
  let tdEl5 = document.createElement("td");
  let tdEl6 = document.createElement("td");
  let tdEl7 = document.createElement("td");
  let tdEl8 = document.createElement("td");
  let tdEl9 = document.createElement("td");
  let tdEl10 = document.createElement("td");

  table.appendChild(trElement);
  trElement.appendChild(thEl);
  trElement.appendChild(thEl1);
  table.appendChild(trEl);
  trEl.appendChild(tdEl);
  trEl.appendChild(tdEl2);
  table.appendChild(trEl2);
  trEl2.appendChild(tdEl3);
  trEl2.appendChild(tdEl4);
  table.appendChild(trEl3);
  trEl3.appendChild(tdEl5);
  trEl3.appendChild(tdEl6);
  table.appendChild(trEl4);
  trEl4.appendChild(tdEl7);
  trEl4.appendChild(tdEl8);
  table.appendChild(trEl5);
  trEl5.appendChild(tdEl9);
  trEl5.appendChild(tdEl10);

  tdEl3.textContent = " Birth date:";
  thEl.textContent = "Student Information";
  thEl1.textContent = "Data";
  tdEl.textContent = "Student Name:";
  tdEl5.textContent = "Gender";
  tdEl7.textContent = "Grade";
  tdEl9.textContent = "Phone Number";

  tdEl2.textContent = text;
  tdEl4.textContent = myage;
  tdEl6.textContent = gender;
  tdEl8.textContent = grade;
  tdEl10.textContent = phone;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let text = e.target.fname.value;
  let myage = e.target.age.value;
  let gender = e.target.gender.value;
  let grade = e.target.grade.value;
  let phone = e.target.phone.value;

  render(text, myage, gender, grade, phone);
});
