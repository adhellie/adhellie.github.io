---
layout: post
title: Chouchenn
title_2: Documentation d'une librairie de mixins Stylus - *Juillet 2015*
texts:
  -
    title: "Le design"
    text: >
      J’ai réalisé le design de la documentation en *m’appuyant* sur la charte graphique du site web de l’agence.

        - Le logo 'chouchenn' est détourné du logo de l’agence.
          ![alt text](/images/logo-transformation.png "transformation du logo")
        - On retrouve les trois couleurs dominante du site de l’agence.
          ![alt text](/images/chouhenncolors.png "Les couleurs du site")

  -
    title: "L'experience utilisateur"
    text: >
      Après avoir étudié plusieurs documentations de librairies, j’ai opté pour un site one-page avec une side-navigation qui permet à l’utilisateur une meilleure visibilité sur le contenu du site. Les liens de la navigation correspondent à une ancre dans la page.


      Le site est responsive. La side-navigation est cachée au premier chargement pour de petits devices. L’accès au contenu est ainsi directement accessible à l’utilisateur, il peut à tout moment déplier la navigation s’il le souhaite car le bouton de menu reste disponible.

  -
    title: "La structure HTML"
    text: >
      La documentation suit un motif régulier :

        - Titre de section
        - Sous-titre de niveau 1 (facultatif)
        - Sous-titre de niveau 2 (facultatif)
        - Texte d’explication

      Plus précisément, pour chacun des mixins présentés on a également un motif récurent :

        - Sous-titre de niveau 2 (facultatif)
        - Texte explicatif
        - What you write section
        - What you get section
        - Exemple visuel (facultatif)


      Pour structurer mon code HTML, j’ai utilisé le préprocesseur Jade et un fichier au format YAML répertoriant mes différents titres et textes. Jade me permettait de boucler sur mes objets YAML est d’appeler, pour chaque itération, les contenus que je voulais faire apparaître.


      Si vous voulez en savoir plus sur la structure je vous invite à consulter le github du projet ou vous trouverez dans [pages/index.jade](https://github.com/Switch-Company/chouchenn/blob/documentation/pages/index.jade), les différentes boucles sur le fichier [locales/en_US/home.yaml](https://github.com/Switch-Company/chouchenn/blob/documentation/locales/en_US/home.yaml).
      La liaison entre les deux fichiers se fait grace à [une tâche grunt](https://github.com/Switch-Company/chouchenn/blob/documentation/Gruntfile.js).

---


[Voir le projet](http://chouchenn.switch.paris/)
Une des missions de mon stage de licence professionnelle a été de réaliser le site de la documentation d’une librairie de mixins Stylus.
Cette librairie a été créée par les membres de l'agence dans laquelle j'ai fait mon stage : [Switch](http://switch-company.com/)

{% include text-block.html texts=page.texts %}


