// Ajoutez cette fonction à main.js
import { nav } from "/components/nav.js";
import { footer } from "/components/footer.js";
import "/style.css";

function createAndSubmitForm() {
  const formHtml = `
  ${nav}
    <form id="contactForm">
    <h1 class="title-form">Contact us:</h1>
      <input type="text" name="name" placeholder="Votre nom"  />
   

      <input type="text" name="email" placeholder="Votre email"  />
     

      <textarea name="message" placeholder="Votre message" ></textarea>
     
      <button class="btn" type="submit">Envoyer</button>
    </form>
     ${footer}
  `;
  document.querySelector("#app").innerHTML += formHtml;

  document.querySelector("#contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    deleteErreurs();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // console.log(import.meta.env.VITE_API_URL);

    let url = new URL(import.meta.env.VITE_API_URL);
    // console.log(url);
    const response = await fetch(`${url}/homework/api/submitContact.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    const erreurs = await response.json();
    if (response.status === 422) {
      console.log(erreurs);

      for (const val in erreurs) {
        let input = document.querySelector(`input[name=${val}]`);
        let textarea = document.querySelector(`textarea[name=${val}]`);
        let textErreur = document.createElement("div");
        textErreur.innerHTML = `${erreurs[val]}`;


        if (input !== null) {
          input.after(textErreur);
          textErreur.className = 'erreur';
        }
        if (textarea !== null) {
          textarea.after(textErreur);
          textErreur.className = 'erreur';
        }
      }
    } else {

      alert("Message envoyé !");
      e.target.reset();
    }
  });
}

createAndSubmitForm();

function deleteErreurs() {
  const errorDiv = Array.from(document.querySelectorAll('.erreur'));
  errorDiv.forEach((el) => {
    el.remove();
  })

}