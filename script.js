// document.addEventListener("DOMContentLoaded", function () {
//   const resumeForm = document.getElementById("resume-form");
//   const nameInput = document.getElementById("name");
//   const nameHeading = document.getElementById("myName");

//   resumeForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     nameHeading.textContent = nameInput.value;
//   });
// });

// declaring variables

// const inputElements = [
//   nameInput,
//   fileInput,
//   titleInput,
//   AboutMeInput,
//   workTo1Input,
//   workFrom1Input,
//   jobDescription1Input,
//   role1Input,
//   organisation1Input,
//   workTo2Input,
//   workFrom2Input,
//   jobDescription2Input,
//   role2Input,
//   organisation2Input,
//   workTo3Input,
//   workFrom3Input,
//   jobDescription3Input,
//   role3Input,
//   organisation3Input,
//   skill1Input,
//   skill2Input,
//   skill3Input,
//   skill4Input,
//   skill5Input,
//   skill6Input,
//   phoneInput,
//   addressInput,
//   emailInput,
//   hobby1Input,
//   hobby2Input,
//   hobby3Input,
//   hobby4Input,
//   schoolFrom1Input,
//   schoolTo1Input,
//   uni1Input,
//   course1Input,
//   degree1Input,
//   schoolFrom2Input,
//   schoolTo2Input,
//   uni2Input,
//   course2Input,
//   degree2Input,
// ];

// console.log(inputElements);

const resumeForm = document.getElementById("resume-form");
const nameInput = document.getElementById("name");
const nameHeading = document.getElementById("myName");
const fileInput = document.getElementById("picture");
const imagePreview = document.getElementById("uploaded-image");
const title = document.getElementById("ProTitle");
const titleInput = document.getElementById("professionaltitle");
const AboutMeText = document.getElementById("AboutMe");
const AboutMeInput = document.getElementById("AbtMe");
const workFrom1 = document.getElementById("workFrom1");
const workTo1 = document.getElementById("workTo1");
const workTo1Input = document.getElementById("workTo1Input");
const workFrom1Input = document.getElementById("workFrom1Input");

const jobDescription1Input = document.getElementById("jobDescription1Input");
const role1Input = document.getElementById("role1Input");
const organisation1Input = document.getElementById("organisation1Input");
const copanyText1 = document.getElementById("copanyText1");
const roleText1 = document.getElementById("roleText1");
const jobDescription1 = document.getElementById("jobDescription1");

const workFrom2 = document.getElementById("workFrom2");
const workTo2 = document.getElementById("workTo2");
const workTo2Input = document.getElementById("workTo2Input");
const workFrom2Input = document.getElementById("workFrom2Input");
const jobDescription2Input = document.getElementById("jobDescription2Input");
const role2Input = document.getElementById("role2Input");
const organisation2Input = document.getElementById("organisation2Input");
const copanyText2 = document.getElementById("copanyText2");
const roleText2 = document.getElementById("roleText2");
const jobDescription2 = document.getElementById("jobDescription2");

const workFrom3 = document.getElementById("workFrom3");
const workTo3 = document.getElementById("workTo3");
const workTo3Input = document.getElementById("workTo3Input");
const workFrom3Input = document.getElementById("workFrom3Input");
const jobDescription3Input = document.getElementById("jobDescription3Input");
const role3Input = document.getElementById("role3Input");
const organisation3Input = document.getElementById("organisation3Input");
const copanyText3 = document.getElementById("copanyText3");
const roleText3 = document.getElementById("roleText3");
const jobDescription3 = document.getElementById("jobDescription3");

const skill1Input = document.getElementById("skill1Input");
const skill2Input = document.getElementById("skill2Input");
const skill3Input = document.getElementById("skill3Input");
const skill4Input = document.getElementById("skill4Input");
const skill5Input = document.getElementById("skill5Input");
const skill6Input = document.getElementById("skill6Input");
const skill1 = document.getElementById("skill1");
const skill2 = document.getElementById("skill2");
const skill3 = document.getElementById("skill3");
const skill4 = document.getElementById("skill4");
const skill5 = document.getElementById("skill5");
const skill6 = document.getElementById("skill6");

const phone = document.getElementById("phone");
const phoneInput = document.getElementById("phoneInput");
const address = document.getElementById("address");
const addressInput = document.getElementById("addressInput");
const email = document.getElementById("email");
const emailInput = document.getElementById("emailInput");

const hobby1 = document.getElementById("hobby1");
const hobby2 = document.getElementById("hobby2");
const hobby3 = document.getElementById("hobby3");
const hobby4 = document.getElementById("hobby4");
const hobby1Input = document.getElementById("hobby1Input");
const hobby2Input = document.getElementById("hobby2Input");
const hobby3Input = document.getElementById("hobby3Input");
const hobby4Input = document.getElementById("hobby4Input");

const schoolFrom1Input = document.getElementById("schoolFrom1Input");
const schoolTo1Input = document.getElementById("schoolTo1Input");
const uni1Input = document.getElementById("uni1Input");
const course1Input = document.getElementById("course1Input");
const degree1Input = document.getElementById("degree1Input");
const schoolFrom2Input = document.getElementById("schoolFrom2Input");
const schoolTo2Input = document.getElementById("schoolTo2Input");
const uni2Input = document.getElementById("uni2Input");
const course2Input = document.getElementById("course2Input");
const degree2Input = document.getElementById("degree2Input");

const schoolFrom1 = document.getElementById("schoolFrom1");
const schoolTo1 = document.getElementById("schoolTo1");
const uni1 = document.getElementById("uni1");
const course1 = document.getElementById("course1");
const degree1 = document.getElementById("degree1");
const schoolFrom2 = document.getElementById("schoolFrom2");
const schoolTo2 = document.getElementById("schoolTo2");
const uni2 = document.getElementById("uni2");
const course2 = document.getElementById("course2");
const degree2 = document.getElementById("degree2");

// getting color inputs
const colorDiv = document.getElementById("designs");
const colorInput = document.getElementById("colorInput");
const colorInput2 = document.getElementById("colorInput2");
const colorInput3 = document.getElementById("colorInput3");
const colorInput4 = document.getElementById("colorInput4");
const colorInput5 = document.getElementById("colorInput5");
const lSide = document.getElementById("lSide");
const colorBg1 = document.getElementById("colorBg1");
const nameBg = document.getElementById("nameBg");
const nameBg2 = document.getElementById("nameBg2");
const nameBg3 = document.getElementById("nameBg3");
const nameBg4 = document.getElementById("nameBg4");
const nameBg5 = document.getElementById("nameBg5");
const nameBg6 = document.getElementById("nameBg6");
const myName = document.getElementById("myName");

myName.textContent.toUpperCase();

// function to upload image

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    imagePreview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});

// getting colors

function hexToRgb(hex) {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

const getTextColor = (from, to) => {
  from.addEventListener("input", function () {
    const selectedColor = from.value;
    to.style.color = hexToRgb(selectedColor);
  });
};

const getAColor = (from, to) => {
  from.addEventListener("input", function () {
    const selectedColor = from.value;
    to.style.borderColor = hexToRgb(selectedColor);
  });
};

const getColor = (from, to) => {
  from.addEventListener("input", function () {
    const selectedColor = from.value;
    to.style.backgroundColor = hexToRgb(selectedColor);
  });
};

getColor(colorInput, colorDiv);
getColor(colorInput2, colorBg1);
getColor(colorInput3, nameBg);
getTextColor(colorInput4, colorDiv);
getTextColor(colorInput5, lSide);

// function to get text values

const getInput = (from, to) => {
  from.addEventListener("input", function () {
    to.textContent = from.value;
  });
};

// calling functions
getInput(nameInput, nameHeading);
getInput(titleInput, title);
getInput(AboutMeInput, AboutMeText);
getInput(workFrom1Input, workFrom1);
getInput(workTo1Input, workTo1);
getInput(jobDescription1Input, jobDescription1);
getInput(role1Input, roleText1);
getInput(organisation1Input, copanyText1);

// experience
getInput(workTo2Input, workTo2);
getInput(workFrom2Input, workFrom2);
getInput(jobDescription2Input, jobDescription2);
getInput(role2Input, roleText2);
getInput(organisation2Input, copanyText2);
getInput(workTo3Input, workTo3);
getInput(workFrom3Input, workFrom3);
getInput(jobDescription3Input, jobDescription3);
getInput(role3Input, roleText3);
getInput(organisation3Input, copanyText3);

// skills
getInput(skill1Input, skill1);
getInput(skill2Input, skill2);
getInput(skill3Input, skill3);
getInput(skill4Input, skill4);
getInput(skill5Input, skill5);
getInput(skill6Input, skill6);

// contact
getInput(phoneInput, phone);
getInput(addressInput, address);
getInput(emailInput, email);

// hobbies
getInput(hobby1Input, hobby1);
getInput(hobby2Input, hobby2);
getInput(hobby3Input, hobby3);
getInput(hobby4Input, hobby4);

// education
getInput(schoolFrom1Input, schoolFrom1);
getInput(schoolTo1Input, schoolTo1);
getInput(uni1Input, uni1);
getInput(course1Input, course1);
getInput(degree1Input, degree1);
getInput(schoolFrom2Input, schoolFrom2);
getInput(schoolTo2Input, schoolTo2);
getInput(uni2Input, uni2);
getInput(course2Input, course2);
getInput(course1Input, course1);
getInput(degree2Input, degree2);

getAColor(colorInput3, nameBg2);
getAColor(colorInput3, nameBg3);
getColor(colorInput3, nameBg4);
getColor(colorInput3, nameBg5);
getColor(colorInput3, nameBg6);

function handleSavePdfButtonClick(event) {
  event.preventDefault();
  generatePDF();
}

function generatePDF() {
  const element = document.getElementById("designs");
  const opt = {
    margin: 5,
    filename: "designs.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().from(element).set(opt).save();
}

function captureAndDownload(event) {
  event.preventDefault();
  const element = document.getElementById("designs");
  const canvas = document.createElement("canvas");
  canvas.width = element.clientWidth;
  canvas.height = element.clientHeight;
  const context = canvas.getContext("2d");

  html2canvas(element, { canvas: canvas }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "designs.png";
    link.href = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    link.click();
  });
}
