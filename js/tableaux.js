// déclaration d'un tableau d'entiers
let tab = [45,99,87,100,0,2];
//affichage du tableau
console.log(tab); // [45,99,87,100,0,2]
//longueur (taille) du tableau
console.log(tab.length); // 6
//accès à un élément du tableau avec son indice
console.log(tab[0]); // 45

// for
console.group("Parcours du tableau avec for...i");
for(let i = 0; i < tab.length; i = i + 1){
    console.log(tab[i]);
}
console.groupEnd();

// for...of
console.group("Parcours du tableau avec for...of");
for(let el of tab){
    console.log(el);
}
console.groupEnd();

// for...in
console.group("Parcours du tableau avec for...in");
for(let index in tab){
    console.log(index, tab[index]);
}
console.groupEnd();

// foreach
console.group("Parcours du tableau avec foreach");
tab.forEach( function(el){
    console.log(el);
});
tab.forEach( (el) => {
    console.log(el);
});
tab.forEach( el => console.log(el) );
console.groupEnd();
// console.log(el); // provoque une erreur el is not defined





console.log("Tout va bien");
