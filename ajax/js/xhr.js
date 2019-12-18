// on déclare une variable xhr qui est une instance de la classe XMLHttpRequest

// on utilise la méthode open avec ene paramètres :
// - la méthode Http => get
// - le chemin relatif du fichier cible de la requête Ajax

// la requête est asynchrone : on attend (non bloquant) la réponse du serveur
// lorsque la réponse arrive, l'événement load se produit

class Chapitre{
	// constructor(id, titre, texte){
	constructor( titre, texte){
		// this.id = id;
		this.titre = titre;
		this.texte = texte;
	}
	getHtml(){
		let article = document.createElement("article");
		let h1 = document.createElement("h1");
		let p = document.createElement("p");
		h1.textContent = this.titre;
		p.textContent = this.texte;
		article.appendChild(h1);
		article.appendChild(p);
		return article;
	}
}

let chapitre = new Chapitre();

let bouton = document.getElementById("bouton");
bouton.addEventListener("click", () => {
	getDatas();
});

function getDatas() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "./datas.php");
	xhr.responseType = "json";
	xhr.addEventListener("load", function() {
		let section = document.querySelector('section');
		section.innerHTML = "";
		let chapitresJson = this.response;
		chapitresJson.forEach(elem => {
			let chapitre = new Chapitre(elem.titre, elem.texte);
			section.appendChild(chapitre.getHtml());
		});
	});
	xhr.send();
}

