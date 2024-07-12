document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const cardContainer = document.getElementById('cardContainer');
    const cards = cardContainer.getElementsByClassName('card');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        Array.from(cards).forEach(function(card) {
            const cardText = card.innerText.toLowerCase();
            if (cardText.includes(filter)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});
