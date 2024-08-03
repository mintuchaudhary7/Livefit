var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let visi = 0;
function validateForm() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    alert("All fields are required!");
    document.getElementById("submit").removeEventListener("click", countBmi);
  } else {
    countBmi();
  }
}
document.getElementById("submit").addEventListener("click", validateForm);

function countBmi() {
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }
  form.reset();
  var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

  var result = "";
  if (bmi < 18.5) {
    result = "Underweight";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "Healthy";
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "Overweight";
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "Obese";
  } else if (35 <= bmi) {
    result = "Extremely obese";
  }
visi = bmi;
  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");

  var t = document.createTextNode(result);
  var b = document.createTextNode("BMI: ");
  var r = document.createTextNode(parseFloat(bmi).toFixed(2));

  h1.appendChild(t);
  h2.appendChild(b);
  h2.appendChild(r);
  let knowmore = document.getElementById("knowmore");
  let abc = document.getElementById("under-diet");
  let work = document.getElementById("under_work");
  let some = document.getElementById("somepara");
  let work_text = document.getElementById("work_text");
  let work_text1 = document.getElementById("work_text1");
  let work_text2 = document.getElementById("work_text2");
  let normaldiet = document.getElementById("normal-diet");
  let normalwork = document.getElementById("normal_work");
  let overdiet = document.getElementById("over-diet");
  let overwork = document.getElementById("over_work");
  if (visi < 18.9) {
    abc.style.visibility = "visible";
    knowmore.style.visibility = "visible";
    // knowmore.style.visibility = "visible";
    work.style.visibility = "visible";
    some.style.visibility = "visible";
    work_text.style.visibility = "visible";
  }
  else if (visi > 18.9 && visi<24.9) {
    normaldiet.style.visibility = "visible";
    knowmore.style.visibility = "visible";
    // knowmore.style.visibility = "visible";
    normalwork.style.visibility = "visible";
    some.style.visibility = "visible";
    work_text1.style.visibility = "visible";
  }
  else if(visi > 25) {
      overdiet.style.visibility = "visible";
      knowmore.style.visibility = "visible";
      // knowmore.style.visibility = "visible";
      overwork.style.visibility = "visible";
      some.style.visibility = "visible";
      work_text2.style.visibility = "visible";
    }

  let bmi1 = document.getElementById("bmi1");
  
bmi1.appendChild(h1);
bmi1.appendChild(h2);


  document.getElementById("submit").removeEventListener("click", countBmi);
  document.getElementById("submit").removeEventListener("click", validateForm);
  
}
document.getElementById("submit").addEventListener("click", countBmi);