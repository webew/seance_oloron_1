
// fonction sans return : la fonction effectue elle-même l'affichage
function helloMessage(nom){
    console.log("Hello " + nom);
}

// fonction avec return : 
// c'est le programme principal (celui qui a appelé la fonction)
// qui affichera ce que retourne la fonction : Hello Toto par exemple
function helloMessageReturn(nom){
    return "Hello " + nom;
}
// appel de la fonction sans return
helloMessage("Toto");
helloMessage("Tata");
// appel de la fonction avec return
console.log(helloMessageReturn("Titi"));
