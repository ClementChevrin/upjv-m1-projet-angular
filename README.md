# Enoncé du projet

## Organisation
Le projet est à faire en binôme. En fin de semestre (la date exacte sera précisée ultérieurement), chaque binome rendra sur Moodle les éléments suivants :
- le code de l’application (uniquement votre code et vos données, pas tout le framework)
- un rapport (≤10 pages) sur votre travail (ce qui a été réalisé, les choix techniques, etc)
- une documentation de déploiement de votre application (librairies à installer, etc)
NB : un seul dépôt par binome est suffisant, et n’oubliez pas de préciser les noms des deux étudiants dans le rapport.Des soutenances de projet auront lieu à une date précisée ultérieurement.

## Sujet du projet
L’objectif est de développer un site Web permettant aux étudiants de s'auto-évaluer par compétence sur des projets. Exemple : dans le projet d'ArchiWeb, les compétences sont gérer une base NoSQL, coder en JS et TS, mettre en place une architecture MEAN, ... Il y a deux types d'utilisateur : les enseignants qui créent les projets et éditent les compétences et les étudiants. Le site doit au minimum offrir les fonctionnalités suivantes :
- l’administrateur peut ajouter/supprimer un compte, enseignant ou étudiant.
- l’administrateur et les utilisateurs peut modifier leur compte (mot de passe, etc).
- un enseignant peut (1) créer un projet, (2) éditer les compétences liées à un projet qu'il a créé, (3) voir les résultats des étudiants de ses projets.
- un étudiant peut (1) s'inscrire à un projet, (2) indiquer pour chaque compétence d'un projet où il est inscrit si elle est non acquise, en cours d'acquisition ou acquise, (3) voir ses résultats sur les projets où il est inscrit.

## Partie optionnelle
- les projets peuvent avoir des compétences prérequises et on ne peut s'y inscrire que si ces compétences sont acquises.
- on peut avoir des dépendances entre compétences, par exemple une compétence doit être acquise avant qu'une autre le soit.
- on peut avoir des compétences de niveaux différents qui s'englobent les unes les autres (par exemple développer un site Web MEAN est une compétence d'un niveau plus général que gcelle citées au début, et qui les contient).
- on peut avoir des degrés d'acquisition de compétence (en pourcentage par exemple).

# Command

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
