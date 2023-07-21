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

getInput(skill1Input, skill1);
getInput(skill2Input, skill2);
getInput(skill3Input, skill3);
getInput(skill4Input, skill4);
getInput(skill5Input, skill5);
getInput(skill6Input, skill6);
