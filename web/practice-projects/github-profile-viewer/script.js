const mainLingk = "https://api.github.com/users/SAURABH-sys-png";
let myObj = new Object();
const UI = {
  avatar: document.getElementById("user-avatar"),
  name: document.getElementById("user-name"),
  username: document.getElementById("user-username"),
  bio: document.getElementById("user-bio"),
  location: document.getElementById("user-location"),
  blog: document.getElementById("user-blog"),
  repos: document.getElementById("repo-count"),
  followers: document.getElementById("followers-count"),
  following: document.getElementById("following-count"),
  searchInput: document.getElementById("username-input"),
  searchBtn: document.getElementById("search-btn"),
};

function updateUI(data) {
  if (!data || data.message === "Not Found") {
    alert("User not found!");
    return;
  }
  UI.avatar.src =
    data.avatar_url || "https://avatars.githubusercontent.com/u/225438093?v=4";
  UI.name.textContent = data.name || "No Name Provided";
  UI.username.textContent = `@${data.login}`;
  UI.bio.textContent = data.bio || "This profile has no bio.";
  UI.location.textContent = data.location
    ? `📍 ${data.location}`
    : "📍 Not Available";

  if (data.blog) {
    UI.blog.href = data.blog.startsWith("http")
      ? data.blog
      : `https://${data.blog}`;
    UI.blog.textContent = "🔗 Website/Portfolio";
    UI.blog.style.display = "inline";
  } else {
    UI.blog.style.display = "none"; // Agar website nahi hai toh link chhupa do
  }

  UI.repos.textContent = data.public_repos;
  UI.followers.textContent = data.followers;
  UI.following.textContent = data.following;
}
function getObject(param) {
  const pac = new XMLHttpRequest();

  pac.open("GET", param);

  pac.onreadystatechange = function () {
    if (pac.readyState === 4) {
      myObj = JSON.parse(this.responseText);
      console.log("Packet Recieved");
      updateUI(myObj);
    }
  };
  pac.send();
}

let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function () {
  let userName = document.getElementById("username-input").value;
  const mainLink = "https://api.github.com/users/" + userName;
  console.log(mainLink);

  getObject(mainLink);

  console.log("Updated the ui");
});
