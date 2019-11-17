var ctx = document.getElementById("skillsChart").getContext("2d");
var skillsChartShow = new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: [
      "HTML5 Semantics",
      "CSS3 - CSS Grids, Flexbox, Media Queries, Sass, Bootstrap",
      "JavaScript ES6",
      "jQuery",
      "Photoshop",
      "React",
      "Node.js - Express.js",
      "MongoDB",
      "PHP",
      "Git"
    ],

    datasets: [
      {
        backgroundColor: [
          "rgb(232, 75, 41)",
          "rgb(38, 77, 228)",
          "rgb(253, 216, 61)",
          "rgb(29, 120, 171)",
          "rgb(19, 16, 43)",
          "rgb(1, 216, 255)",
          "rgb(132, 205, 40)",
          "rgb(69, 47, 37)",
          "rgb(79, 91, 147)",
          "rgb(244, 202, 177)"
        ],
        borderColor: [
          "rgb(232, 75, 41)",
          "rgb(38, 77, 228)",
          "rgb(253, 216, 61)",
          "rgb(29, 120, 171)",
          "rgb(19, 16, 43)",
          "rgb(1, 216, 255)",
          "rgb(132, 205, 40)",
          "rgb(69, 47, 37)",
          "rgb(79, 91, 147)",
          "rgb(244, 202, 177)"
        ],
        data: [93, 90, 85, 70, 70, 82, 70, 60, 40, 90, 0]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Current Skill Set",
      fontSize: 26,
      fontFamily: "Arial"
    },
    legend: {
      position: "bottom",
      labels: {
        fontColor: "rgb(6, 7, 7)"
      }
    },

    animation: {
      animateRotate: true,
      duration: 2500,
      easing: "easeInBounce"
    }
  }
});

const pastExperience = document.getElementById("pastExperience");
const missionStatement = document.getElementById("missionStatement");
const education = document.getElementById("education");

function showPastExperience() {
  const originalClass = document.getElementById("pastExperience");
  const showPastExperienceParagraph = document.getElementById(
    "pastExperienceParagraph"
  );
  if (originalClass.classList.contains("pastExperience")) {
    originalClass.classList.remove("pastExperience");
    originalClass.classList.add("onHoverNav");
    showPastExperienceParagraph.classList.remove(
      "pastExperienceParagraphHidden"
    );
    showPastExperienceParagraph.classList.add("pastExperienceParagraph");
    showPastExperienceParagraph.classList.add("animated", "fadeInUp");
  } else {
    originalClass.classList.remove("onHoverNav");
    originalClass.classList.add("pastExperience");
    showPastExperienceParagraph.classList.add("pastExperienceParagraphHidden");
    showPastExperienceParagraph.classList.remove("pastExperienceParagraph");
  }
}

function showMissionStatement() {
  const originalClass = document.getElementById("missionStatement");
  const showMissionStatementParagraph = document.getElementById(
    "missionStatementParagraph"
  );
  if (originalClass.classList.contains("missionStatement")) {
    originalClass.classList.remove("missionStatement");
    originalClass.classList.add("onHoverNav");
    showMissionStatementParagraph.classList.remove(
      "missionStatementParagraphHidden"
    );
    showMissionStatementParagraph.classList.add("missionStatementParagraph");
    showMissionStatementParagraph.classList.add("animated", "fadeInLeft");
  } else {
    originalClass.classList.remove("onHoverNav");
    originalClass.classList.add("missionStatement");
    showMissionStatementParagraph.classList.add(
      "missionStatementParagraphHidden"
    );
    showMissionStatementParagraph.classList.remove("missionStatementParagraph");
  }
}

function showEducation() {
  const originalClass = document.getElementById("education");
  const showEducationParagraph = document.getElementById("educationParagraph");
  if (originalClass.classList.contains("education")) {
    originalClass.classList.remove("education");
    originalClass.classList.add("onHoverNav");
    showEducationParagraph.classList.remove("educationParagraphHidden");
    showEducationParagraph.classList.add("educationParagraph");
    showEducationParagraph.classList.add("animated", "fadeInRight");
  } else {
    originalClass.classList.remove("onHoverNav");
    originalClass.classList.add("education");
    showEducationParagraph.classList.add("educationParagraphHidden");
    showEducationParagraph.classList.remove("educationParagraph");
  }
}
