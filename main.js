import "/style.css";
import { nav } from "/components/nav";
import { footer } from "/components/footer.js";

document.querySelector("#app").innerHTML = `
  ${nav}
  <div>
  <h1 class="title">CreaSUP - École des Professions Insolites</h1>
  <p class="text">
    À propos de nous:
    Bienvenue à l'École des Professions Insolites, où la créativité et l'imagination ne connaissent pas de limites! Nous
    sommes une institution éducative dédiée à l'enseignement des métiers les plus inhabituels et des cours les plus
    fantastiques. Notre mission est d'inspirer nos étudiants à explorer de nouveaux horizons et à embrasser leur
    originalité
    à travers des programmes éducatifs uniques.</p>
     </div>
  ${footer}
  `;

