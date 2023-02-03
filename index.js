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

//function findAllUnorderedList() {
  //return document.querySelectorAll("a.social-media-links");
//}

//Both of the above functions use the querySelectorAll() method to select all elements that match the specified CSS selector(s). The first function specifies that it wants to select all <a> elements with the class "social-media-links" that are within an <li> element that is within a <ul> element that is within a <div> element with an id of "social". The second function selects all <a> elements with the class "social-media-links" regardless of their location.
//Both functions will return a NodeList (similar to an array) containing all of the matched elements.
//Please note that this function will only work on client-side (in browser) and not on the server-side.

function addWavyUnderline(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.textDecoration = "underline wavy";
  }
}

//This function takes in a NodeList object as an argument (which is passed to the function as 'elements'). It then uses a for loop to iterate through each element in the NodeList.
//For each element, it sets the textDecoration property of the element's style object to "underline wavy" which will add a wavy underline to the text of the element.
//You can invoke this function by passing the result of the previous function findAllUnorderedList to this function.
//Please note that this function will only work on client-side (in browser) and not on the server-side.


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


//This function takes three arguments, firstProject, secondProject, and thirdProject, which are used to create an array of projects.
//The function then uses a for loop to iterate through the array of projects. For each project, the function checks the number of characters in the project's name.
//If the number of characters is greater than 20, it creates a string with the project's name enclosed in the <p> tag. If the number of characters is not greater than 20, it creates a string with the project's name enclosed in the <span> tag.
//After each project, it adds a <br> tag, and then it returns a long string with projects enclosed in the <p> or <span> tags.

function displayProjects(firstProject, secondProject, thirdProject) {
  let projects = document.getElementById("projects");
  projects.innerHTML = prepareProjects(firstProject, secondProject, thirdProject);
}

//This function takes 3 arguments, firstProject, secondProject, and thirdProject, which are passed to the prepareProjects function.
//The function then uses the getElementById() method to find a <div> element with an id of "projects".
//It then sets the innerHTML of the div to the output of the prepareProjects function.
//The output of the prepareProjects function (a string of projects enclosed in the <p> or <span> tags, separated by <br> tags) is injected into the div, effectively displaying the projects on the webpage.
//Please note that this function will only work on client-side (in browser) and not on the server-side.

document.addEventListener("DOMContentLoaded", function() {
  displayProjects("Project 1", "Project 2", "Project 3");
});

//This code uses the addEventListener method to listen for the DOMContentLoaded event on the document object. Once the event is fired, it calls the displayProjects function passing in the arguments "Project 1", "Project 2", "Project 3" respectively.
//By using the DOMContentLoaded event, the JavaScript code is guaranteed to execute only after the webpage's DOM is fully loaded and ready, so it's safe to manipulate the DOM.
//Please note that this code will only work on client-side (in browser) and not on the server-side.








