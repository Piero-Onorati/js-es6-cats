/* Milestone 1 
Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
Milestone 2 
Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
Milestone 3 
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto. */


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
        colore: '#4e3b31',
        sesso : 'F'
    }
];


gatti.forEach(element => 
    document.getElementById('gatti').innerHTML+=
    `${element.nome}: <i class="fas fa-cat" style="color:${element.colore};"></i> <br>`
);