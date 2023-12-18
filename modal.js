document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const btnOpenModal = document.getElementById('btnOpenModal');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const spanClose = document.getElementsByClassName('close')[0];

    btnOpenModal.onclick = function () {
        modal.style.display = 'block';
        showConfetti();
    };

    spanClose.onclick = function () {
        modal.style.display = 'none';
    };

    btnCloseModal.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    function showConfetti() {
        // Utiliza la librería canvas-confetti para mostrar el confeti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.7 }
        });
    }
});

