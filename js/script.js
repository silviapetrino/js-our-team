
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




const page = document.getElementById("main");

membersTeam.forEach(member => {
  
  const containerCards = document.createElement("div");
  page.append(containerCards);
  containerCards.classList.add("container-cards")

  const div = document.createElement("div");
  div.classList.add("card-sp");

  div.innerHTML = `${member.photo} ${member.name}<br> ${member.role}`;

  containerCards.append(div);


});
