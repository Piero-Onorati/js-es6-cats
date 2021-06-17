/* Milestone 1 
Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
Milestone 2 
Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
Milestone 3 
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto. */



/* Milestone 1*/
// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
const cats = [
    {
        name:'Tom',
        age : 2,
        color: '#708090',
        gender : 'M'
    },
    {
        name:'Virgola',
        age : 1,
        color: '#000000',
        gender : 'F'
    },
    {
        name:'Garfield',
        age : 3,
        color: '#ffa500',
        gender : 'M'
    },
    {
        name:'Pallina',
        age : 4,
        color: '#8a6642',
        gender : 'F'
    }
];

// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
cats.forEach((element) => 
    document.getElementById('cats').innerHTML+=
    `${element.name}: <i class="fas fa-cat" style="color:${element.color};"></i> <br>`
);


/* Milestone 2*/
// Creiamo un nuovo array con tutti gli elementi di quello di partenza + il fiocco

const pink = '#ff1493';
const blue = '#0000ff';

const newCats = cats.map((element) => {

    // const nome = element.nome;
    // const eta = element.eta;
    // const colore = element.colore;
    // const sesso = element.sesso;

    const{name, age, color, gender} = element;

    let colorBow = (gender == "F")? pink : blue;
    let opacity = element.age/4;

    return{
        name,
        age,
        color,
        gender,
        bow: {
            color: colorBow,
            opacity: opacity
        }
    }
});


// Dividiamo i maschi dalle femmine

const maleCats = newCats.filter((element) => {
    return element.gender == 'M';
});

const femaleCats = newCats.filter((element) => {
    return element.gender == 'F';
});

// Creare una funzione per la stampa dei 2 contenitori
const print = (array) => {

    document.getElementById('container').innerHTML +='<b>Contenitore:</b> <br>';

    array.forEach((element) => {
        document.getElementById('container').innerHTML +=
        `${element.name}: <i class="fas fa-cat" style="color:${element.color};"></i> <i class="fas fa-award" style="color:${element.bow.color}; opacity:${element.bow.opacity}"></i><br>
        `
    });

    document.getElementById('container').innerHTML += '<br>';
}

print(maleCats);

print(femaleCats);

/* Milestone 3 */
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio
const femaleMaleCats = [...femaleCats,...maleCats];

const femaleMaleCatsZip = femaleMaleCats.map((element)=>{
    const { name, color, bow} = element;
    return { name, color, bow}
});

femaleMaleCatsZip.forEach((element) => 
    document.getElementById('arrayU').innerHTML+=
    `${element.name}: <i class="fas fa-cat" style="color:${element.color};"></i> <i class="fas fa-award" style="color:${element.bow.color}; opacity:${element.bow.opacity}"></i><br>
    `
);