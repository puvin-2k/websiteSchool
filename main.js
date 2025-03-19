const textHeading = document.querySelector(".textHeading");
const btnHideShow = document.querySelector(".btnHideShow");

btnHideShow.onclick = function () {
  if (textHeading.style.display === "none") {
    textHeading.style.display = "block";
    btn.textContent = "Hide Header";
  } else {
    textHeading.style.display = "none";
    btnHideShow.textContent = "Show Header";
  }
};

const userData = [
  {
    name: "Seng Ravin",
    age: 25,
    gender: "student",
    image: "image/4x6/DSC09416.jpg",
  },
  {
    name: "Seng Saven",
    age: 28,
    gender: "teacher",
    image: "image/4x6/DSC09490.jpg",
  },
  {
    name: "Seng Chhorvy",
    age: 31,
    gender: "teacher",
    image: "image/4x6/DSC09512.jpg",
  },
  { name: "Seng Dy", age: 31, gender: "male", image: "image/4x6/DSC09486.jpg" },
];

const user = userData
  .map(function (user) {
    return `
      <article class="user">
        <h1 class="header">${user.name}</h1> 
        <img class="userImageSize" src="${user.image}" alt="${user.name}">
        <p>${user.age} years old</p>
        <p>Postion: ${user.gender}</p>
      </article>`;
  })
  .join("");
document.querySelector(".cartContainer").innerHTML = user;

// Get the modal and buttons
const modal = document.querySelector(".bg-overlay");
const openModalButton = document.querySelector(".show-btn");
const closeModalButton = document.querySelector(".close-btn");

// Show the modal when the "Open Modal" button is clicked
openModalButton.addEventListener("click", function () {
  modal.style.display = "flex"; // Show the modal
});

// Close the modal when the "Close" button is clicked
closeModalButton.addEventListener("click", function () {
  modal.style.display = "none"; // Hide the modal
});

// Close the modal if the overlay is clicked
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none"; // Hide the modal if the background is clicked
  }
});
