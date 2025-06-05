// Get DOM elements for profile form
const profileForm = document.getElementById("profile-form");
const studentName = document.getElementById("student-name");
const studentBio = document.getElementById("student-bio");
const profilePic = document.getElementById("profile-pic");

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
});

// Contact form functionality
function sendMessage(event) {
  event.preventDefault(); // prevent page refresh

  const name = document.getElementById("contact-name").value;
  const response = document.getElementById("response");

  response.innerText = `Thanks for your message, ${name}! I'll get back to you soon.`;

  // Clear form
  document.getElementById("contact-name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
