import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-student-newproj',
  templateUrl: './home-student-newproj.component.html',
  styleUrls: ['./home-student-newproj.component.css']
})
export class HomeStudentNewprojComponent {

  projets: any[] = [];
  myEmail: any = sessionStorage.getItem('email');

  constructor(private http: HttpClient,private router: Router) {
    this.projetToAdd();
  }

  projetToAdd() {

    let param = { "email": this.myEmail };
    const myUrl = "http://localhost:4000/user/projetsRestants";

    this.http.get(myUrl, { params: param })
      .subscribe((result: any) => {
        console.log(result);

        this.projets = result;
      })
  }

  addProjet(event: { target: any; srcElement: any; currentTarget: any; }) {

    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

    let data = {
      "codeP": value,
      "email": this.myEmail
    }

    this.http.post("http://localhost:4000/user/projet/add", data).subscribe((result : any) => {

      if(result.status){
        this.router.navigateByUrl('/home-student')
      }else{
        alert("Erreur lors d'ajout du projet");
      }
    })
  }


  ngOnInit(): void {
    // Récupérer l'élément de recherche
    const search: HTMLInputElement = document.getElementById('search') as HTMLInputElement;

    if (search) {
      // Récupérer la liste des projets
      const listOfProject: HTMLCollectionOf<Element> = document.getElementsByClassName('card-projet');
      if (listOfProject) {
        document.addEventListener('DOMContentLoaded', () => {
          const ArrayOfProjet: Node[] = [];
          for (let i = 0; i < listOfProject.length; i++) {
            ArrayOfProjet.push(listOfProject[i].cloneNode(true));
          }
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
              if (tr.childNodes.item(j).nodeName == "TR") {
                keywords.push(tr.childNodes.item(j).childNodes.item(0).textContent);
                keywords.push(tr.childNodes.item(j).childNodes.item(1).textContent);
              }
            }

            // Créer un objet pour stocker les mots-clés et l'élément HTML du projet
            const item: { keywords: any[], HTMLElement: any } = {
              "keywords": keywords,
              "HTMLElement": listOfProject[i].cloneNode(true)
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
                for (let i = 0; i < ArrayOfProjet.length; i++) {
                  listCard.appendChild(ArrayOfProjet[i].cloneNode(true));
                }
              } else {
                // Filtrer les projets en fonction de la recherche
                listOfProjectDictionnary.forEach(element => {
                  for (let k = 0; k < element["keywords"].length; k++) {
                    if (listCard != null && element["keywords"][k].toLowerCase().includes(search.value.toLowerCase())) {
                      listCard.appendChild(element["HTMLElement"].cloneNode(true));
                      k = element["keywords"].length; // Sortir de la boucle interne
                    }
                  }
                });
              }
            }
          });
        });
      }
    }
  }
}
