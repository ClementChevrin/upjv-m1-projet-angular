import { Component } from '@angular/core';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
export class HomeStudentComponent {
  constructor() {

  }

  ngOnInit(): void {
    // Récupérer l'élément de recherche
    const search: HTMLInputElement = document.getElementById('search') as HTMLInputElement;

    if (search) {
      // Récupérer la liste des projets
      const listOfProject = document.getElementsByClassName('card-projet');

      // Tableau pour stocker les projets et leurs mots-clés
      var listOfProjectDictionnary: { keywords: any[], HTMLElement: any }[] = [];

      // Parcourir la liste des projets
      for (let i = 0; i < listOfProject.length; i++) {
        // Récupérer les mots-clés du projet
        var keywords = [
          listOfProject[i].childNodes.item(1).childNodes.item(0).textContent,
          listOfProject[i].childNodes.item(1).childNodes.item(2).childNodes.item(1).textContent
        ];

        // Récupérer les mots-clés supplémentaires du projet
        const tr = listOfProject[i].childNodes.item(1).childNodes.item(2).childNodes.item(3).childNodes.item(1);
        for (let j = 0; j < tr.childNodes.length; j++) {
          keywords.push(tr.childNodes.item(j).childNodes.item(0).textContent);
          keywords.push(tr.childNodes.item(j).childNodes.item(1).textContent);
        }

        // Créer un objet pour stocker les mots-clés et l'élément HTML du projet
        const item: { keywords: any[], HTMLElement: any } = {
          "keywords": keywords,
          "HTMLElement": listOfProject[i]
        };

        // Ajouter l'objet à la liste des projets
        listOfProjectDictionnary.push(item);
      }

      // Récupérer l'élément de la liste des projets
      var listCard = document.getElementById("list-proj");

      // Ajouter un écouteur d'événement pour la recherche
      search.addEventListener("keyup", (event: Event) => {
        if (listCard != null) {
          listCard.innerHTML = "";
          if (search.value == "") {
            // Afficher tous les projets lorsque la recherche est vide
            listOfProjectDictionnary.forEach(element => {
              if (listCard != null) {
                listCard.appendChild(element["HTMLElement"]);
              }
            });
          } else {
            // Filtrer les projets en fonction de la recherche
            listOfProjectDictionnary.forEach(element => {
              for (let k = 0; k < element["keywords"].length; k++) {
                if (listCard != null && element["keywords"][k].toLowerCase().includes(search.value.toLowerCase())) {
                  listCard.appendChild(element["HTMLElement"]);
                  k = element["keywords"].length; // Sortir de la boucle interne
                }
              }
            });
          }
        }
      });
    }
  }
}
