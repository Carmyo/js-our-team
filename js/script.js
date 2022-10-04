console.log('ok js');
// di seguito oggetti, uno per membro. Oggetto= variabile con attributi
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



/*sotto per richiamare un attributo di un oggetto: scrivere nome ogetto seguito da punto e attributo (dot notation), 
possibile concatenare più attributi usando la virgola
(gli apici con gli spazi servono ad inserire un distanziamento per rendere piu leggibile in console)*/
console.log(angelaLopez.role, '     ', angelaLopez.propic);

// array (lista) contentente gli ogetti
const staffInfo = [wayneBarnett, angelaCaroll, walterGordon, angelaLopez, scottEstrada, barbaraRamos, gordonFreeman];
console.log(staffInfo);
// per aggiungere un attributo a un ogetto
gordonFreeman.custom = "TRUE";
