# Application Containers & Presentational components

## Description

Cette application est une démonstration de l'architecture Containers & Presentationals components.

## Lancer l'application

1. Installer les packages : `yarn` OU `npm install`
2. Lancer le serveur : `ng serve`
3. Se rendre sur : `http://localhost:4200`

Pour lire la documentation : `yarn compodoc` OU `npm run compodoc`

## Présentation

Avantages : 

- Maitrise du flux de données
- Architecture "inheritance friendly"
- Plus enclin à la détection de changement .OnPush (qui permet des améliorations en terme de performance)

### Container component

1. Contient la logique de l'application
2. Connait l'état actuel de l'application (s'en occupe)
3. Peut communiquer avec les dépendances externes comme les services
5. Appel les components enfants (presentationals components)

### Presentational component

1. Ne concerne que l'aspect, l'affichage des données
2. Peut contenir des presentational component
3. Peut-être réutilisé
4. Reçoit les données du container component (@Input)
5. Emet les changements d'état (@Output)

### ChangeDetection.OnPush

Par défaut, à chaque changement d'état Angular va effectuer une passe sur chaque component en partant du root component pour rafraichir l'ensemble de l'application.
En changeant la stratégie de détection des components à .OnPush, on modifie le comportement d'Angular, tout simplement en lui précisant que si les propriétés @Input du component pointent sur les mêmes références objet qu'avant le changement d'état de l'application, il n'a aucune raison de passer par le component .OnPush et ses enfants.

## Liens
(https://toddmotto.com/stateful-stateless-components)[Stateful and stateless components, the missing manual]
(https://medium.com/aviabird/complete-angular-2-guide-components-in-depth-96fca743966b)[Complete Angular 2 Guide: Components in Depth]
(https://angular-2-training-book.rangle.io/handout/change-detection/change_detection_strategy_onpush.html)[Change Detection Strategy: OnPush]
(https://vsavkin.com/change-detection-in-angular-2-4f216b855d4c)[Change Detection in Angular]
