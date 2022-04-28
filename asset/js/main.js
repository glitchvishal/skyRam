const section2Prev = document.querySelector('#section2-prev');
const section2Next = document.querySelector('#section2-next');
const memberContainer = document.querySelector('#memberContainer');
const instruContainer = document.querySelector('#instruContainer');
const instruNext = document.querySelector('#instructor-next');
const instruPrev = document.querySelector('#instructor-prev')
const reviewContainer = document.querySelector('#reviewContainer');
const btn = document.querySelector('rBtn')

const section2items = [
    {
        img: 'Layer 561.png',
        title: 'children\'s self-defence',
        description: 'children learn the value of focus, believing in themselves and feeling accomplished in all of lifes activities. A "true self worth defending".',
    },
    {
        img: 'Layer 561.png',
        title: 'kickboxing',
        description: 'children learn the value of focus, believing in themselves and feeling accomplished in all of lifes activities. A "true self worth defending".',
    },
    {
        img: 'Layer 561.png',
        title: 'adults self-defence',
        description: 'children learn the value of focus, believing in themselves and feeling accomplished in all of lifes activities. A "true self worth defending".',
    },
    {
        img: 'Layer 562.png',
        title: 'attack expert',
        description: 'children learn the value of focus, believing in themselves and feeling accomplished in all of lifes activities. A "true self worth defending".',
    },
    {
        img: 'Layer 561.png',
        title: 'judo expert',
        description: 'children learn the value of focus, believing in themselves and feeling accomplished in all of lifes activities. A "true self worth defending".',
    },
    {
        img: 'Layer 562.png',
        title: 'karate',
        description: 'children learn the value of focus, believing in themselves and feeling accomplished in all of lifes activities. A "true self worth defending".',
    },
];





let section2selected = 0;

const loadSection2 = () => {
    let section2 = ''
    const start = section2selected
    const end = section2selected + 3
    for (let i = start; i < end; i++) {
        section2 += `<div class="memberBox fade">
        <img class="image" src="./asset/photo/${section2items[i].img}" alt="">
        <p class="mName">${section2items[i].title}</p>
        <p class="p">${section2items[i].description}</p>
        </div>`
    }
    memberContainer.innerHTML = section2
}

section2Prev.onclick = () => {
    if(section2selected > 0) {
        section2selected--
        loadSection2()
    }
}

section2Next.onclick = () => {
    if(section2selected < section2items.length - 3) {
        section2selected++
        loadSection2()
    }
}

loadSection2()


//instructors

const instructorItems = [
    {
        img: 'Layer 571.png',
        title: 'children\'s self-defence',
        description: 'instructor',
    },
    {
        img: 'Layer 570.png',
        title: 'kickboxing',
        description: 'instructor',
    },
    {
        img: 'Layer 561.png',
        title: 'adults self-defence',
        description: 'instructor',
    },
    {
        img: 'Layer 562.png',
        title: 'attack expert',
        description: 'instructor',
    },
    {
        img: 'Layer 571.png',
        title: 'judo expert',
        description: 'instructor',
    },
    {
        img: 'Layer 562.png',
        title: 'karate',
        description: 'instructor',
    },
    {
        img: 'Layer 571.png',
        title: 'judo expert',
        description: 'instructor',
    },
];

let instrucSelected = 0;

const loadinstruc = () => {
    let instructor = ''
    const start = instrucSelected
    const end = instrucSelected + 3
    for (let i = start; i < end; i++) {
        instructor += `<div class="memberBox fade">
        <img class="instrimage" src="./asset/photo/${instructorItems[i].img}" alt="">
        <div class="detail">
        <h4>${instructorItems[i].title}</h4>
        <h5>${instructorItems[i].description}</h5>
        </div>
        </div>`
    }
    memberContainer.innerHTML = instructor
}


instruPrev.onclick = () => {
    if(instrucSelected > 0) {
        instrucSelected--
        loadinstruc()
    }
}

instruNext.onclick = () => {
    if(instrucSelected < instructorItems.length - 3) {
        instrucSelected++
        loadinstruc()
    }
}

loadinstruc()




//review section


const reviewDsp = [
    {
        description: 'children learn the value of focus, believing in themselves and feeling accomplished in all of lifes activities. A "true self worth defending".',
        name: 'roy family',
    },
    {
        description: 'children learn the value of focus, believing in themselves and feeling accomplished in all of lifes activities. A "true self worth defending".',
        name: 'vecter family',
    },
    {
        description: 'Since my son started taking martial arts lessons at CEK, his attitude toward everything has improved significantly. The instructors made it clear that self-respect & self-discipline are necessary in all you do, and he has applied that lesson to all facets of his life.',
        name: '--Johnson family',
    },
    {
        description: 'Since my son started taking martial arts lessons at CEK, his attitude toward everything has improved significantly. The instructors made it clear that self-respect & self-discipline are necessary in all you do, and he has applied that lesson to all facets of his life.',
        name: '--Johnson family',
    },
    {
        description: 'Since my son started taking martial arts lessons at CEK, his attitude toward everything has improved significantly. The instructors made it clear that self-respect & self-discipline are necessary in all you do, and he has applied that lesson to all facets of his life.',
        name: '--Johnson family',
    },
];


let = review2selected = 0

function hoverFunction() {
    var element = document.getElementById("Gimage");
    element.classList.toggle("gimageHover");
 }




