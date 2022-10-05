console.log('ok js');
// di seguito oggetti, uno per membro. Oggetto= variabile con key definite nelle graffe
const wayneBarnett = {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    propic: 'wayne-barnett-founder-ceo.jpg',
};
const angelaCaroll = {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    propic: 'angela-caroll-chief-editor.jpg',
};

const walterGordon = {
    name: 'Walter Gordon',
    role: 'Office Manager',
    propic: 'walter-gordon-office-manager.jpg',
};

const angelaLopez = {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    propic: 'angela-lopez-social-media-manager.jpg',
};

const scottEstrada = {
    name: 'Scott Estrada',
    role: 'Developer',
    propic: 'scott-estrada-developer.jpg',
};

const barbaraRamos = {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    propic: 'barbara-ramos-graphic-designer.jpg',
};

const gordonFreeman = {
    name: 'Gordon Freeman',
    role: 'theoretical physicist',
    propic: 'barbara-ramos-graphic-designer.jpg',
};



/*sotto per richiamare una key di un oggetto: scrivere nome ogetto seguito da punto e key (dot notation), 
possibile concatenare più attributi usando la virgola
(gli apici con gli spazi servono ad inserire un distanziamento per rendere piu leggibile in console)*/
console.log(angelaLopez.role, '     ', angelaLopez.propic);

// array (lista) contentente gli ogetti definiti precedentemente
const staffInfo = [wayneBarnett, angelaCaroll, walterGordon, angelaLopez, scottEstrada, barbaraRamos, gordonFreeman];
console.log(staffInfo);
// per aggiungere un attributo a un ogetto
gordonFreeman.custom = "TRUE";




// ***********  SOLTANTO QUANTO SEGUE VERRÀ MOSTRATO IN PAGINA  *********** //


//array (lista) contentente gli ogetti che vengono definiti all'interno delle graffe
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        propic: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        propic: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        propic: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        propic: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        propic: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        propic: 'barbara-ramos-graphic-designer.jpg',
    },
    {
        name: 'Gordon Freeman',
        role: 'Theoretical physicist',
        propic: 'gordon-freeman-theoretical physicist.jpg',
    },
];
console.log(team);
// con la funzione sottostante debbo categoricamente cliccare 2 volte, vorrei ottenere lo stesso effetto al singolo click
function showCard() {
    let i = document.getElementById("container");
    if (i.style.display === "none") {
        i.style.display = "block";
    } else {
        i.style.display = "none";
    }
}

for (let staffIndex = 0; staffIndex < team.length; staffIndex++) {
    const staff = team[staffIndex];
    //console.log(staff.role);per visualizzare la singola key
    console.log(staff.name, staff.role, staff.propic);//per visualizzare tutte 

    // console.log(team.name);  non funziona perché team non è un ogetto ma un array di ogetti, è necessario dunque ciclare con for come sopra scritto

    const listTeam = document.getElementById('team');
    listTeam.innerHTML += `<div class="card my-5 ">
    <div class="infoContainer rounded">
         <div class="info text-center ">${staff.name}</div>
         <div class="info text-center">${staff.role}</div>
    </div>
<img class="text-center" src="img/${staff.propic}"/> 

</div>
`
}
// sopra in img non è necesssario sspecificare il percorso completo perchè si autocompleta ciclando sulla key e io che stavo impazzendo

