import "/style.css";
import { nav } from "/components/nav";
import { footer } from "/components/footer.js";
// async function fetchPosts() {

//   const response = await fetch(`http://localhost:8888/fetch2/api/people.php`);
//   const utilisateur = await response.json();

//   document.querySelector("#app").innerHTML = `
//   ${nav}
//   <article>
//   <img src="api/image/${utilisateur.photo}">
//   <h1>${utilisateur.title}</h1>
//   <p>${utilisateur.content}</p>
//   </article>
//   `;
// }

// fetchPosts();

async function fetchPeople() {
  try {
    const response = await fetch(`http://localhost:8888/homework/api/prof.php`);
    const peopleData = await response.json();

    const appContainer = document.querySelector("#app");
    appContainer.innerHTML = nav;

    const profilesList = document.createElement("ul");
    profilesList.id = "profiles-list";

    peopleData.forEach(person => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <img src="${person.photo}" alt="${person.title}">
        <h1>${person.title}</h1>
        <p>${person.content}</p>
      `;
      profilesList.appendChild(listItem);
    });

    appContainer.appendChild(profilesList);
    const div = document.createElement("div");
    div.innerHTML = footer;
    appContainer.appendChild(div);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
}

fetchPeople();