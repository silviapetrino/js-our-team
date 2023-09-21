// # js-our-team
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.




// 1 - salvo i dati forniti in un array di oggetti;
   // 4. trasformo l'indirizzo foto in immagine

const membersTeam = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: `<img src="img-team/img/wayne-barnett-founder-ceo.jpg">`
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    photo:  `<img src="img-team/img/angela-caroll-chief-editor.jpg">`
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    photo: `<img src="img-team/img/walter-gordon-office-manager.jpg">`
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photo: `<img src="img-team/img/angela-lopez-social-media-manager.jpg">`
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    photo:  `<img src="img-team/img/scott-estrada-developer.jpg">`
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photo:  `<img src="img-team/img/barbara-ramos-graphic-designer.jpg">`
  }
]


//2. Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

//3. con un ciclo stampo le informazioni dentro il DOM con l'ultilizzo del Template literals (Template strings);

// 5. organizzare le info membro in una card 


const page = document.getElementById("main");


for(let key in membersTeam) {
  const containerCards = document.createElement("div");
  page.append(containerCards);
  containerCards.classList.add("container-cards")

  const member = membersTeam[key];

  const div = document.createElement("div");
  div.classList.add("card-sp");


  div.innerHTML = `${member.photo} ${member.name}<br> ${member.role}`;

  containerCards.append(div);

}
