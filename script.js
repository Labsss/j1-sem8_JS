// Feature 1 
// lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console
var myFooter = document.getElementsByTagName('footer')[0];
// ou bien celle là: var myFooter = document.querySelector('footer');

function onFoorterClick() { 
    console.log('clique');
}

myFooter.addEventListener("click", onFoorterClick);

// Feature 1-bis
// lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" 
//avec x qui commence à 1 et s'incrémente de +1 à chaque clic.
var myFooter = document.querySelector('footer');
var x=1;
function onFoorterClick() { 
    console.log('clic numéro '+ x);
    x++
}

myFooter.addEventListener("click", onFoorterClick);

// Feature 2 "Hamburger Menu"
// Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader 
//perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, 
// la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

var menuHamb = document.querySelector('button');
var navbarHeader = document.getElementById('navbarHeader');
menuHamb.addEventListener("click", toggleOn); 

function toggleOn() {
    navbarHeader.classList.toggle("collapse");
};
