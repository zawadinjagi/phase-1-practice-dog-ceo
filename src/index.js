console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    // Challenge 1
    
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.getElementById('dog-image-container');
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                dogImageContainer.appendChild(img);
            });
        });

    // Challenge 2

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const dogBreedsList = document.getElementById('dog-breeds');
            for (const breed in data.message) {
                const li = document.createElement('li');
                li.textContent = breed;
                dogBreedsList.appendChild(li);
            }
        });

    // Challenge 3

    const dogBreedsList = document.getElementById('dog-breeds');
    dogBreedsList.addEventListener('click', event => {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue'; // Change color to blue when clicked
        }
    });

    // Challenge 4

    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', event => {
        const selectedLetter = event.target.value;
        const breedItems = dogBreedsList.querySelectorAll('li');
        breedItems.forEach(item => {
            if (item.textContent.charAt(0).toLowerCase() === selectedLetter) {
                item.style.display = 'list-item'; // Show if breed starts with selected letter
            } else {
                item.style.display = 'none'; // Hide if breed does not start with selected letter
            }
        });
    });
});