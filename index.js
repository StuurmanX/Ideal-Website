document.addEventListener("DOMContentLoaded", function(){
  addWavyUnderline(findAllUnorderedListElements());
});

function addWavyUnderline(elements) {
}

function displayProjects() {
}

function findAllUnorderedListElements() {
}

function prepareProjects() {
}

exports.findAllUnorderedListElements = findAllUnorderedListElements;
exports.prepareProjects = prepareProjects;


function findAllUnorderedList() {
  return document.querySelectorAll("#social ul li a.social-media-links");
}
let elements = findAllUnorderedList();
console.log(elements);


function addWavyUnderline(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.textDecoration = "underline wavy";
  }
}

function prepareProjects(firstProject, secondProject, thirdProject) {
  let projects = [firstProject, secondProject, thirdProject];
  let result = "";
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].length > 20) {
      result += "<p>" + projects[i] + "</p>";
    } else {
      result += "<span>" + projects[i] + "</span>";
    }
    result += "<br>";
  }
  return result;
}

module.exports = {
  prepareProjects
};

function displayProjects(firstProject, secondProject, thirdProject) {
  let projects = document.getElementById("projects");
  projects.innerHTML = prepareProjects(firstProject, secondProject, thirdProject);
}


document.addEventListener("DOMContentLoaded", function() {
  displayProjects("Project 1", "Project 2", "Project 3");
});










