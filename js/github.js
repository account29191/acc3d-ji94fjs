const gitHubButton = document.getElementById("gitHubButton");
const myRepos = document.getElementById("myRepos");
gitHubButton.addEventListener("click", getRepos);
async function getRepos() {
  const url =
    "https://api.github.com/search/repositories?q=donreactsample123321";
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  result.items.forEach(i => {
    const anchor = document.createElement("a");
    const description = document.createElement("p");
    anchor.href = i.html_url;
    anchor.textContent = i.full_name;
    anchor.style.textDecoration = "none";
    anchor.style.fontSize = "18px";
    anchor.style.fontWeight = "bold";
    anchor.style.color = "whitesmoke";
    myRepos.appendChild(anchor);
    description.textContent = i.description;
    description.style.fontSize = "25px";
    description.style.color = "whitesmoke";
    description.style.fontWeight = "bolder";
    myRepos.appendChild(description);
  });
}