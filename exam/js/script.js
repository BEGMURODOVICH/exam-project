document.getElementById("talkBtn").addEventListener("click", function() {
    this.classList.toggle("active");
});

const startButton = document.getElementById('talkBtn');
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close');
const homeButton = document.getElementById('homeButton');

startButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
homeButton.addEventListener('click', closeModal);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}