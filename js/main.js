// Navbar Burger
let menuBurger = document.querySelector('.menu-burger');
let menuNavbarMobile = document.querySelector('.header-nav-mobile');

menuBurger.addEventListener('click', function(){
    menuBurger.classList.toggle('active');
    menuNavbarMobile.classList.toggle('active');
});


// Slider Feedback
let nextBtn = document.querySelector('.arrow-right');
let prevBtn = document.querySelector('.arrow-left');
let personaImage = document.querySelector('.persona-image');
let personaFeedback = document.querySelector('.persona-feedback');
let personaName = document.querySelector('.person-name');

const clients = [
    {
        name: 'Naufal Hidayat',
        role: 'Student at Telkom University',
        feedback:'"Healthycarely is an website and mobile app for you to feel better or get medical help.We offer you a 24/7 doctor service with no appointment needed"',
        image: './img/feedback-section/person-1.png'
    },
    {
        name: 'Tyler C. Hernandez',
        role: 'Science technician',
        feedback: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."',
        image: './img/feedback-section/person-2.png'
    },
    {
        name: 'Joy G. Wade',
        role: 'Educational counselor',
        feedback: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."',
        image: './img/feedback-section/person-3.png'
    }
];

let slide = 0;

const navigation = () => {
    if (slide > clients.length - 1){
        slide = 0;
    } else if (slide < 0) {
        slide = clients.length - 1;
    }

    personaImage.innerHTML = `<img src="${clients[slide].image}" alt="Person"/>`;
    personaFeedback.innerHTML = `<p>${clients[slide].feedback}</p>`;
    personaName.innerHTML =`
        <h2>${clients[slide].name}</h2>
        <p>${clients[slide].role}</p>
    `; 
}

navigation();
// Previous Button
prevBtn.addEventListener('click', () => {
    slide--;
    navigation();
})
// Next Button
nextBtn.addEventListener('click', () => {
    slide++;
    navigation();
});
// Set Interval
setInterval(function() {
  slide++;
  navigation();
}, 9000);