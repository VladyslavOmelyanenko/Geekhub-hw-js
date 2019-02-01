// Dropdown list of languages
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var languages = document.getElementsByClassName('language');
console.log(languages);


var currentLang = document.getElementById('current-lang');
console.log(currentLang);

for(var i = 0; i < languages.length; i++) {
    languages[i].addEventListener("onclick", function() {     
        if(languages[i].href.slice(0) == "ukr") {
            currentLang.innerHTML = "укр";
        };
        if(languages[i].href.slice(0) == "eng") {
            currentLang.innerHTML = "eng";
        };
        if(languages[i].href.slice(0) == "rus") {
            currentLang.innerHTML = "рус";
        };
    })
};

var btnContainer = document.getElementsByClassName("main-menu")[0];

var btns = document.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("btn-active");
        current[0].className = current[0].className.replace(" btn-active", "");
        this.className += " btn-active";
    });
}

// Slider
document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.slider__item');
    let itemsArray = Array.from(items);
    let backgroundImageArr = [ "url('img/natalka-poltavka.jpg')",
                               "url('img/main-img.jpg')",
                               "url('img/romeo-and-juliet.jpg')",
                               "url('img/carmen.jpg')" ];

    for (let i = 0; i < itemsArray.length; i++) {
        let item = items[i];

        item.addEventListener("click", function() {
            for (let j = 0; j < itemsArray.length; j++) {
                let item = items[j];

                if (item.classList.contains('item-active')) {
                    item.classList.remove('item-active');
                    item.nextElementSibling.classList.add('hidden');
                }
            }

            let sliderBackground = document.querySelectorAll('.slider');
            let sliderBackgroundArr = Array.from(sliderBackground);
            sliderBackgroundArr[0].style.backgroundImage = backgroundImageArr[i];
            this.classList.add("item-active");
            this.nextElementSibling.classList.remove('hidden');
        });
    }

    let prevButton = document.querySelector('#prev');
    let nextButton = document.querySelector('#next');

    prevButton.addEventListener("click", function() {
        for (let i = 1; i <= itemsArray.length; i++) {
            if ( itemsArray[i].classList.contains('item-active') ) {
                itemsArray[i].classList.remove("item-active");
                itemsArray[i].nextElementSibling.classList.add("hidden");
                itemsArray[i - 1].classList.add("item-active");
                itemsArray[i - 1].nextElementSibling.classList.remove("hidden");
            }
        }
    });

    nextButton.addEventListener("click", function() {
        for (let i = itemsArray.length - 1; i >= 0; i--) {
            if ( itemsArray[i].classList.contains('item-active') ) {
                itemsArray[i].classList.remove("item-active");
                itemsArray[i].nextElementSibling.classList.add("hidden");
                itemsArray[i + 1].classList.add("item-active");
                itemsArray[i + 1].nextElementSibling.classList.remove("hidden");
            }
        }
    });
});