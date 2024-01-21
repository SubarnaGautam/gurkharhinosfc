document.addEventListener('DOMContentLoaded', function () {
    const playerContainer = document.getElementById('players');
    const players = playerContainer.querySelectorAll('.player');
    const nextButton = document.getElementById('nextButton');
    const previousButton = document.getElementById('previousButton');

    const itemsPerPage = 3;
    let currentIndex = 0;

    function showPlayers(startIndex) {
        players.forEach(player => player.classList.remove('show'));
        for (let i = startIndex; i < startIndex + itemsPerPage; i++) {
            if (players[i]) {
                players[i].classList.add('show');
            }
        }

        nextButton.style.display = startIndex + itemsPerPage < players.length ? 'block' : 'none';
        previousButton.style.display = startIndex > 0 ? 'block' : 'none';
    }

    function showNextPlayers() {
        currentIndex += itemsPerPage;
        showPlayers(currentIndex);
    }

    function showPreviousPlayers() {
        currentIndex -= itemsPerPage;
        showPlayers(currentIndex);
    }

    nextButton.addEventListener('click', showNextPlayers);
    previousButton.addEventListener('click', showPreviousPlayers);
    showPlayers(currentIndex);
});



