import "/style.css";
import { nav } from "/components/nav";
import { footer } from "/components/footer.js";

async function fetchPeople() {
  try {
    const response = await fetch(`http://localhost:8888/homework/api/cour.php`);
    const peopleData = await response.json();

    const appContainer = document.querySelector("#app");
    appContainer.innerHTML = nav;

    const coursList = document.createElement("ul");
    coursList.id = "cours-list";

    peopleData.forEach(cour => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <img src="${cour.photo}" alt="${cour.title}">
        <h1>${cour.nom}</h1>
        <p>${cour.description}</p>
      `;
      coursList.appendChild(listItem);
    });

    appContainer.appendChild(coursList);
    const div = document.createElement("div");
    div.innerHTML = footer;
    appContainer.appendChild(div);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }

}

fetchPeople();