// Get DOM elements for profile form
const profileForm = document.getElementById("profile-form");
const studentName = document.getElementById("student-name");
const studentBio = document.getElementById("student-bio");
const profilePic = document.getElementById("profile-pic");
const updateButton = document.getElementById("update-button");
const formSection = document.getElementById("form-section");

// Hide the form section initially
formSection.style.display = "none";

// Add event listener to the update button to show/hide the form
updateButton.addEventListener("click", function () {
  if (formSection.style.display === "none") {
    formSection.style.display = "block";
    updateButton.textContent = "Cancel update";
  } else {
    formSection.style.display = "none";
    updateButton.textContent = "Update profile details";
  }
});

// Add event listener to the profile form
profileForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting traditionally

  // Get form values
  const name = document.getElementById("name").value;
  const bio = document.getElementById("bio").value;
  const pictureUrl = document.getElementById("profile-picture").value;

  // Update profile information
  if (name) {
    studentName.textContent = name;
  }

  if (bio) {
    studentBio.textContent = bio;
  }

  if (pictureUrl) {
    profilePic.src = pictureUrl;
  }

  // Update profile picture if URL is provided

  //   if (pictureUrl.files && pictureUrl.files[0]) {
  //     const reader = new FileReader();
  //     reader.onload = function (e) {
  //       e.preventDefault();
  //       profilePic.src = e.target.result;
  //     };
  //     reader.readAsDataURL(pictureUrl.files[0]);
  //   }

  // Show success message
  alert("Profile updated successfully!");

  // Reset form
  profileForm.reset();

  // Hide the form and reset button text
  formSection.style.display = "none";
  updateButton.textContent = "Update profile details";
});
