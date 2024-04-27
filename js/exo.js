

//on crée l'objet qui va contenir les informations sur Hercule

const hercule = {
    name: "Hercule",
    job: "Demi-dieu",
    age: 35,
    department: 75,
    arm: 60.5,
    inRelationship: true,
};

// on crée le tableau pour les amis
const friends = ["Jupiter", "Junon", "Alcène", "Déjanire"]

// on crée le nouvel Element pour le H1 

const titleElement = document.createElement("h1");
console.log(titleElement);
// j'ecrie mon texte du H1
titleElement.textContent = "Vous consultez le profil de Hercule";


// j'associe la classe déjà existante dans CSS au h1

titleElement.className = "banner__title";

// Je récupère mon ID déjà existant en HTML

const bannerElement = document.getElementById("header-banner");

// je l'affiche sur ma page web 

bannerElement.appendChild(titleElement);



// on crée une fonction pour le profil 

function fillProfil(profil) {
    const listElem = document.getElementById('profil');
    listElem.classList.remove('hidden');
    if (!profil || typeof profil !== 'object') {
        listElem.innerHTML = '<li class="red">Tu as bien appelé <code>fillProfil</code> mais tu ne sembles pas avoir passé d\'objet en argument</li>';
    }
    else {
        if (
            profil.name === undefined
            || profil.inRelationship === undefined
            || profil.job === undefined
            || profil.department === undefined
            || profil.arm === undefined
            || profil.age === undefined
        ) {
            listElem.innerHTML = '<li class="yellow">Pour un meilleur affichage essaye de respecter les noms de propriétés donnés dans l\'énoncé et n\'oublie aucune propriété</li>';
        }
        else if (
            typeof profil.name !== 'string'
            || typeof profil.inRelationship !== 'boolean'
            || typeof profil.job !== 'string'
            || typeof profil.age !== 'number'
            || (typeof profil.department !== 'number' && typeof profil.department !== 'string')
            || typeof profil.arm !== 'number') {
            listElem.innerHTML = '<li class="yellow">Ça fonctionne mais certains types de valeurs ne sont pas idéalement choisis</li>';
        }
        for (const key in profil) {
            const newElem = document.createElement('li');
            newElem.className = 'tags__item';
            let text;
            switch (key) {
                case 'inRelationship':
                    text = profil[key] ? 'En couple' : 'Célibataire';
                    break;
                case 'age':
                    text = profil[key] + ' ans';
                    break;
                case 'department':
                    text = 'Vit actuellement dans le ' + profil[key];
                    break;
                case 'arm':
                    text = profil[key] + 'cm de tour de bras';
                    break;
                default:
                    text = profil[key];
            }
            newElem.innerHTML = text;
            listElem.appendChild(newElem);
        }
    }
};

// on crée une fonction pour les amis

function printFriends(friends) {
    const listElem = document.getElementById('friends');
    listElem.classList.remove('hidden');
    if (!friends || !Array.isArray(friends)) {
        listElem.innerHTML = '<li class="red">Tu as bien appelé <code>printFriends</code> mais tu ne sembles pas avoir passé de tableau en argument</li>';
    }
    else {
        friends.forEach((friend) => {
            const newElem = document.createElement('li');
            newElem.className = 'tags__item';
            newElem.innerHTML = friend;
            listElem.appendChild(newElem);
        });
    }
};

// on crée une fonction pour le meilleur ami
function setBestFriend(name) {
    document.querySelector('#best-friend').textContent = name;
}

// on une fonction pour récupérer tous les travaux d'hercule
function displayWork(number) {
    const works = document.querySelectorAll('.panel--work');

    // on crée une boucle pour masquer tous les éléments de works en ajoutant hidden
    works.forEach(work => work.classList.add('hidden'));

    // j'enlèvement le hidden, uniquement à l'élement correspondant à l'index 'number'
    works[number].classList.remove('hidden');
}

// creer une fonction pour savoir si Hercule est disponible ou non 

function getHourStatus() {
    // Récupérer l'heure actuelle
    const currentHour = new Date().getHours();

    // Vérifier la disponibilité d'Hercule
    if (currentHour >= 8 && currentHour < 20) {
        return "Disponible";
    } else {
        return "Non disponible";
    }
}

// Récupérer l'élément avec l'id "availability"
const availabilityElement = document.querySelector("#availability");

// Récupérer le statut de disponibilité
const hourStatus = getHourStatus();

// Afficher le statut dans l'élément
availabilityElement.textContent = hourStatus;


// Ajouter ou supprimer la classe "off" en fonction du statut
if (hourStatus === "Non disponible") {
    availabilityElement.classList.add("off");
} else {
    availabilityElement.classList.remove("off");
}


// fonction pour générer un pseudo 

function nickname(name, department) {

    return name + " du " + department;

}

const pseudo = nickname("Hercule", 75);
console.log(pseudo);

// écrire le pseudo dans l'ID profil-name
document.getElementById("profil-name").textContent = pseudo;

// Rajouter un Event sur un ID déjà existant 

const menu = document.querySelector('#menu-toggler');


// au clic  la classe banner--open s'ouvre ou non selon les conditions suivantes :

const bannerHeader = document.getElementById('header-banner');

menu.addEventListener('click', function () {

    // si au clic le menu a la classe banner--open, on lenleve
    if (bannerHeader.classList.contains('banner--open')) {
        bannerHeader.classList.remove('banner--open');
        // sinon on l'a met
    } else {
        bannerHeader.classList.add('banner--open');
    }


})



// l'appel des fonctions 


fillProfil(hercule);
printFriends(friends);
setBestFriend(friends[0]);
displayWork(5);