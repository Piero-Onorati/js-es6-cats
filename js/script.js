/* Milestone 1 
Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
Milestone 2 
Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
Milestone 3 
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto. */



/* Milestone 1*/
// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
const gatti = [
    {
        nome:'Tom',
        eta : 2,
        colore: '#708090',
        sesso : 'M'
    },
    {
        nome:'Virgola',
        eta : 1,
        colore: '#000000',
        sesso : 'F'
    },
    {
        nome:'Garfild',
        eta : 3,
        colore: '#ffa500',
        sesso : 'M'
    },
    {
        nome:'Pallina',
        eta : 4,
        colore: '#8a6642',
        sesso : 'F'
    }
];

// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
gatti.forEach((element) => 
    document.getElementById('gatti').innerHTML+=
    `${element.nome}: <i class="fas fa-cat" style="color:${element.colore};"></i> <br>`
);


/* Milestone 2*/
// Creiamo un nuovo array con tutti gli elementi di quello di partenza + il fiocco

const rosa = '#ff1493';
const blu = '#0000ff';

const nuoviGatti = gatti.map((element) => {

    // const nome = element.nome;
    // const eta = element.eta;
    // const colore = element.colore;
    // const sesso = element.sesso;

    const{nome, eta, colore, sesso} = element;

    let coloreFiocco = (sesso == "F")? rosa : blu;
    let opacita = element.eta/4;

    return{
        nome,
        eta,
        colore,
        sesso,
        fiocco: {
            colore: coloreFiocco,
            opacita: opacita
        }
    }
});


// Dividiamo i maschi dalle femmine

const gattiMaschi = nuoviGatti.filter((element) => {
    return element.sesso == 'M';
});


gattiMaschi.forEach((element) => 
    document.getElementById('gattiMaschi').innerHTML+=
    `${element.nome}: <i class="fas fa-cat" style="color:${element.colore};"></i> <i class="fas fa-award" style="color:${element.fiocco.colore}; opacity:${element.fiocco.opacita}"></i><br>
    `
);


const gattiFemmine = nuoviGatti.filter((element) => {
    return element.sesso == 'F';
});

gattiFemmine.forEach((element) => 
    document.getElementById('gattiFemmine').innerHTML+=
    `${element.nome}: <i class="fas fa-cat" style="color:${element.colore};"></i> <i class="fas fa-award" style="color:${element.fiocco.colore}; opacity:${element.fiocco.opacita}"></i><br>
    `
);

/* Milestone 3 */
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio
const gattiFemmineMaschi = [...gattiFemmine,...gattiMaschi];

const gattiFemmineMaschiZip = gattiFemmineMaschi.map((element)=>{
    const { nome, colore, fiocco} = element;
    return { nome, colore, fiocco}
});

gattiFemmineMaschiZip.forEach((element) => 
    document.getElementById('arrayUnico').innerHTML+=
    `${element.nome}: <i class="fas fa-cat" style="color:${element.colore};"></i> <i class="fas fa-award" style="color:${element.fiocco.colore}; opacity:${element.fiocco.opacita}"></i><br>
    `
);