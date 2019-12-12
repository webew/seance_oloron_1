function chapitre(chap){
    let maDiv = document.createElement("article");
    let monTitre = document.createElement("h1");
    let monParagraphe = document.createElement("p");
    monTitre.innerHTML = chap.titre;
    monParagraphe.innerText = chap.texte;
    maDiv.appendChild(monTitre);
    maDiv.appendChild(monParagraphe);
    document.body.appendChild(maDiv);
}
let datas = [
    {
        "id":"1",
        "titre":"Chapitre 1",
        "texte":"lorem..."
    }, 
    {
        "id":"2",
        "titre":"Chapitre 2",
        "texte":"Encore du lorem..."
    }
];
class Chapitre{
    constructor(id, titre, texte){
        this.id = id;
        this.titre = titre;
        this.texte = texte;
    }
    afficher(){
        console.log(this.id,this.titre,this.texte);
    }
}

for(let chap of datas){
    let ch = new Chapitre(chap.id,chap.titre,chap.texte);
    ch.afficher();
}

// let chapitre1 = {
//     titre: "Bienvenue !",
//     texte: "Bienvenue sur mon site ! Plein de lorem ipsum...\nSuite"
// };
// let chapitre2 = {
//     titre: "Bienvenue !",
//     texte: "Bienvenue sur mon site ! Plein de lorem ipsum...\nSuite"
// };
// chapitre("Bienvenue !", "Bienvenue sur mon site ! Plein de lorem ipsum...\nSuite");
// chapitre(chapitre1);

// chapitre("Chapitre 1 : un chapitre pour débuter", "Paragraphe chapitre 1");
// chapitre("Chapitre 2 : un autre chapitre","Paragraphe chapitre 2");
// chapitre("Chapitre 3 : encore un chapitre","Paragraphe chapitre 3");
