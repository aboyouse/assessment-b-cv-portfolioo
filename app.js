// new: this loads the CV information from the data.json file
fetch("data.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    loadHomePage(data);
    loadCVPage(data);
  })
  .catch(function(error) {
    console.log("Error loading data:", error);
  });


// new: this function fills the homepage with data from data.json
function loadHomePage(data) {
  var homeName = document.getElementById("home-name");
  var homeRole = document.getElementById("home-role");
  var homeProfile = document.getElementById("home-profile");

  if (homeName != null) {
    homeName.innerHTML = data.name;
    homeRole.innerHTML = data.role;
    homeProfile.innerHTML = data.profile;
  }
}


// new: this function fills the CV page with data from data.json
function loadCVPage(data) {
  var profileName = document.getElementById("profile-name");

  if (profileName != null) {
    document.getElementById("profile-name").innerHTML = data.name;
    document.getElementById("profile-role").innerHTML = data.role;
    document.getElementById("profile-location").innerHTML = "📍 " + data.location;
    document.getElementById("profile-email").innerHTML = "📧 " + data.email;
    document.getElementById("profile-university").innerHTML = "🎓 " + data.university;
    document.getElementById("profile-year").innerHTML = "📅 " + data.year;
    document.getElementById("profile-text").innerHTML = data.profile;

    showEducation(data.education);
    showSkills(data.skills);
    showProjects(data.projects);
    showInterests(data.interests);
  }
}


// new: this function creates the education table rows
function showEducation(education) {
  var table = document.getElementById("education-table");

  for (var i = 0; i < education.length; i++) {
    var row = document.createElement("tr");

    row.innerHTML =
      "<td>" + education[i].year + "</td>" +
      "<td>" + education[i].institution + "</td>" +
      "<td>" + education[i].course + "</td>" +
      "<td>" + education[i].status + "</td>";

    table.appendChild(row);
  }
}


// new: this function creates the skills lists
function showSkills(skills) {
  var webList = document.getElementById("web-skills");
  var toolList = document.getElementById("tool-skills");

  for (var i = 0; i < skills.web.length; i++) {
    var item = document.createElement("li");
    item.innerHTML = skills.web[i];
    webList.appendChild(item);
  }

  for (var j = 0; j < skills.tools.length; j++) {
    var item2 = document.createElement("li");
    item2.innerHTML = skills.tools[j];
    toolList.appendChild(item2);
  }
}


// new: this function creates the project blocks
function showProjects(projects) {
  var projectsList = document.getElementById("projects-list");

  for (var i = 0; i < projects.length; i++) {
    var projectBox = document.createElement("div");
    projectBox.className = "project-block";

    projectBox.innerHTML =
      "<h3>" + projects[i].name + "</h3>" +
      "<p>" + projects[i].description + "</p>";

    projectsList.appendChild(projectBox);
  }
}


// new: this function creates the interests list
function showInterests(interests) {
  var interestsList = document.getElementById("interests-list");

  for (var i = 0; i < interests.length; i++) {
    var item = document.createElement("li");
    item.innerHTML = interests[i];
    interestsList.appendChild(item);
  }
}


// new: this button changes the website between light mode and dark mode
var themeButton = document.getElementById("themeToggle");

if (themeButton != null) {
  themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      themeButton.innerHTML = "Light Mode";
    } else {
      themeButton.innerHTML = "Dark Mode";
    }
  });
}


// new: these buttons hide and show each CV section
var buttons = document.querySelectorAll(".toggle-btn");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var section = this.parentElement.parentElement;
    var body = section.querySelector(".section-body");

    body.classList.toggle("hidden");
  });
}