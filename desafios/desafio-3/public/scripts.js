
/*


const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;/*
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${videoId}`;*/
    /*})
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";
});*/

/*
document.querySelector('modal').addEventListener('click', function() {
    modalOverlay.classList.contains
});
*/      // Falta funcionalidade de maximizar o MODAL









const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        const cursoId = card.getAttribute("id");
        
    /*  window.location.href = `/description?id=${ cursoId }`; */
        window.location.href = `/description/${ cursoId }`;
    })
}
