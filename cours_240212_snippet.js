// concaténer (assembler / coller) une chaine de caractère (une String) en plusieurs morceaux
const nom = "éric";
// ancienne façon
const phrase = "bonjour " + nom;
// ou d'une façon plus contemporaine
// avec des backquote (apostrophe inversé) - même touche (sur Mac) que le caractère Livre Sterling
// le contenu de la variable est ajouté en l'entourant de ${variable}
const phrase = `bonjour ${nom}`;

/*--------------*/
/* une fonction */
/*--------------*/
function truc() {}
// ou
const truc = () => {};

/*---------------------*/
/* une fonction simple */
/*---------------------*/
function ditBonjour(aQui) {
  console.log(`bonjour ${aQui}`);
}

/*-----------------------------*/
/* la même en fonction fléchée */
/*-----------------------------*/
const ditBonjour = (aQui) => {
  console.log(`bonjour ${aQui}`);
}
/* on l'invoque comme ceci  a fonction est déclarée avant qu'on l'utilise */
ditBonjour("éric");
// renvoie dans la console : "bonjour éric"

/* une fonction peut renvoyer des données
   on utilise le mot return , suivi la donnée à renvoyer */
const ditBonjour = (aQui) => {
  return `bonjour ${aQui}`;
}
console.log(ditBonjour("éric"));

/* ---------------------------------------------------------
    renvoie une couleur en hsl en css
/* ---------------------------------------------------------*/
function faitCouleur() {
  const hue = Math.round(Math.random()*360);
  const sat = 100;
  const lum = Math.round((Math.random()*40)+30);
  return "hsl("+hue+", "+sat+"%, "+lum+"%)";
  // return `hsl(${hue}, ${sat}%, ${lum+}%)`;
  // hsl(180,100%,50%);
}
/* usage : document.body.style.backgroundColor = faitCouleur(); */

/* ---------------------------------------------------------
/* créer une table (une liste) avec chaque mot, à partir d'une phrase
/* --------------------------------------------------------- */
const table = "Vos beaux yeux belle marquise d'amour me font mourrir".split(" ");


/* boucler sur le contenu d'une table case / case (liste)
*/
const phrase = "toto est plus petit que marcel, mais plus grand que Jacques";
// créee une table avec le contenu de la phrase en séparant la phrase par les espaces
const liste = phrase.split(" ");
//
liste.forEach((contenu, index) => {
  // affiche chaque mot
  console.log(contenu);
});

/* ---------------------------------------
    créer un élément (un tag) dans le DOM
    version courte
  -----------------------------------------*/
liste.forEach((contenu, index) => {
  // ajoute chaque mot entouré d'un span
  document.body.innerHTML += `<span>${contenu}</span> `
});

/*
    créer un élément (un tag) dans le DOM
    version un peu longue
*/
liste.forEach((contenu, index) => {
  // ajoute chaque mot entouré d'un span
  const span = document.createElement("span");
  span.innerHTML = `${contenu} `;
  document.body.appenChild(span);
});

/* ---------------------------------------
    créer un élément (un tag) dans le DOM
    version longue mais comme il faut
------------------------------------------*/
liste.forEach((contenu, index) => {
  // ajoute chaque mot entouré d'un span
  const span = document.createElement("span");
  const txt = document.createTextNode(contenu+" ");
  // const txt = document.createTextNode(`${contenu} `);
  span.appendChild(txt);
  document.body.appenChild(span);
});


/*----------------------------------------
    en ajoutant tout ce qui a été vu avant
  ---------------------------------------*/
function faitCouleur() {
    const hue = Math.round(Math.random()*360);
    const sat = 100;
    const lum = Math.round((Math.random()*40)+30);
    return "hsl("+hue+", "+sat+"%, "+lum+"%)";
    // hsl(180,100%,50%);
  }
  const table = "Vos beaux yeux belle marquise d'amour me font mourrir".split(" ");
  const liste = [];
  table.forEach((contenu, index) => {
    // ajoute chaque mot entouré d'un span
    const span = document.createElement("span");
    span.id = `lapin_${index}`;
    // const txt = document.createTextNode(contenu+" ");
    const txt = document.createTextNode(`${contenu} `);
    span.style.backgroundColor = faitCouleur();
    span.appendChild(txt);
    // ajouter à la liste
    liste.push(span);
    document.body.appendChild(span);
  });

/*  ---------------------------------------------------
  répéter une opération toutes les x 1000e de seconde
  à la brute
  usage : const repete = setInterval(fonction, temps);
  ----------------------------------------------------*/
  const repete = setInterval(() => {
    liste.forEach((contenu, index) => {
      contenu.style.backgroundColor = faitCouleur();
    });
  }, 1000);

  /*  ---------------------------------------------------
  répéter une opération toutes les x 1000e de seconde
  en fonction des possibilités du navigateur
  usage : repete();
  ----------------------------------------------------*/
  function repete() {
      setTimeout(function() {
          requestAnimationFrame(repete);
          // mettre le code ici
          liste.forEach((contenu, index) => {
            contenu.style.backgroundColor = faitCouleur();
          });
      }, 1000);
  }
  repete();
/* ------------------------------------------------------------
  chargement d'un fichier externe (ici un fichier txt ou html)
/* ------------------------------------------------------------*/
fetch('fichier.txt')
.then((data) => data.text())
.then((texte) => {
  // placer ici le code quand le fichier est chargé
  // la variable `texte` est le contenu du fichier chargé
})
.catch((err) => {
  console.log("erreur de chargement:", err);
});
