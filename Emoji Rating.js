const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

for (let i = 0; i < starsEl.length; i++) {
    starsEl[i].addEventListener("click", function(){
        updateRating(i);
    });  
}

function updateRating(index) {
    starsEl.forEach(function(starEl, idx){
        if (idx < index + 1) {
            starEl.classList.add("active");
        } else {
            starEl.classList.remove("active"); 
        }
    })
    
    emojisEl.forEach(function(emojiEl) {
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colorsArray[index];
    })
}