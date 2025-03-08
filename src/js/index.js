let potisionts = [ 'Aesop', 'Aqua Vitalis', 'Artemisia', 'Bane Poison', 'Bowman\'s Brew', 'Buck\'s Blood', 'Chamomile Brew', 'Cockerel' , 'Digestive Potion', 'Dollmaker Poison', 'Embrocation', 'Fever Tonicum', 'Fox', 'Hair o\' the Dog', 
    'Lethean Water', 'Lion', 'Lullaby Poison', 'Marigold Decoction', 'Mintha', 'Moonshine', 'Nighthawk', 'Painkiller Brew', 'Quickfinger Potion', 'Saviour Schnapps', 'Soap'];

let ingredients = [
    "Belladona", "Chamomile", "Comfrey", "Dandelion", "Elderberry Leaves", "Eyebright",  "Feverfew", "Ginger",  "Henbane", "Herb Paris", "Marigold", "Mint",  "Nettle",  "Poppy", "Sage", "St. John's Wort",  "Thistle",  "Valerian", "Wormwood", 
    "Boar's Tusk",  "Amanita Muscaria",  "Charcoal", "Cobweb"
];
let recipes = {
    "Aesop": {
        recipe: {
            "Comfrey": 2,
            "Belladona": 1,
            "Boar's Tusk": 1
        }
    },
    "Aqua Vitalis": {
        recipe: {
            "Dandelion": 2,
            "Marigold": 1
        }
    },
    "Artemisia": {
        recipe: {
            "Sage": 1,
            "Wormwood": 2
        }
    },
    "Bane Poison": {
        recipe: {
            "Belladona": 2,
            "Wormwood": 1,
            "Amanita Muscaria": 1
        }
    },
    "Bowman's Brew": {
        recipe: {
            "Eyebright": 2,
            "St. John's Wort": 1
        }
    },
    "Buck's Blood": {
        recipe: {
            "St. John's Wort": 1,
            "Comfrey": 1,
            "Dandelion": 1
        }
    },
    "Chamomile Brew": {
        recipe: {
            "Chamomile": 2,
            "Sage": 1
        }
    },
    "Cockerel": {
        recipe: {
            "Mint": 2,
            "Valerian": 1
        }
    },
    "Digestive Potion": {
        recipe: {
            "Thistle": 2,
            "Mint": 1,
            "Charcoal": 1
        }
    },
    "Dollmaker Poison": {
        recipe: {
            "Herb Paris": 2,
            "Valerian": 1
        }
    },
    "Embrocation": {
        recipe: {
            "Poppy": 1,
            "Valerian": 1,
            "Eyebright": 1,
            "Boar's Tusk": 1
        }
    },
    "Fever Tonicum": {
        recipe: {
            "Feverfew": 3,
            "Ginger": 2,
            "Elderberry Leaves": 1
        }
    },
    "Fox": {
        recipe: {
            "St. John's Wort": 1,
            "Nettle": 1,
            "Charcoal": 1,
            "Belladona": 1
        }
    },
    "Hair o' the Dog": {
        recipe: {
            "Sage": 1,
            "St. John's Wort": 1,
            "Mint": 1
        }
    },
    "Lethean Water": {
        recipe: {
            "Wormwood": 2,
            "Belladona": 1,
            "Henbane": 1
        }
    },
    "Lion": {
        recipe: {
            "Sage": 2,
            "Mint": 2
        }
    },
    "Lullaby Poison": {
        recipe: {
            "Poppy": 1,
            "Thistle": 1,
            "Herb Paris": 1
        }
    },
    "Marigold Decoction": {
        recipe: {
            "Nettle": 1,
            "Marigold": 2
        }
    },
    "Mintha": {
        recipe: {
            "Dandelion": 3,
            "Mint": 1,
            "Marigold": 1
        }
    },
    "Moonshine": {
        recipe: {
            "Wormwood": 2,
            "Mint": 2
        }
    },
    "Nighthawk": {
        recipe: {
            "Eyebright": 2,
            "Belladona": 1,
            "Chamomile": 1
        }
    },
    "Painkiller Brew": {
        recipe: {
            "Poppy": 3,
            "Marigold": 1,
            "Comfrey": 1
        }
    },
    "Quickfinger Potion": {
        recipe: {
            "Cobweb": 1,
            "Eyebright": 2,
            "Valerian": 2
        }
    },
    "Saviour Schnapps": {
        recipe: {
            "Nettle": 1,
            "Belladona": 2
        }
    },
    "Soap": {
        recipe: {
            "Thistle": 2,
            "Dandelion": 1,
            "Charcoal": 1
        }
    }
};


// Вивід у консоль
console.log(recipes);

let potisionAmount = 10;

document.getElementById("potisionAmount").addEventListener("input", function(event) {
    potisionAmount = event.target.value;

    // ❗ Потрібно оновлювати `nettleAmount` щоразу при зміні `potisionAmount`
    let nettleAmount = recipes["Healing Draught"].recipe["Nettle"] * potisionAmount;

    console.log("Значення змінилось:", potisionAmount);
    console.log("Необхідно кропиви:", nettleAmount);
});

// Створюємо основний контейнер картки
let card = document.createElement("div");
card.className = "card";
card.style.width = "18rem";

// Додаємо зображення
let img = document.createElement("img");
img.className = "card-img-top";
img.src = "https://via.placeholder.com/286x180"; // Тимчасове зображення
img.alt = "Card image cap";

// Створюємо тіло картки
let cardBody = document.createElement("div");
cardBody.className = "card-body";

// Заголовок
let title = document.createElement("h5");
title.className = "card-title";
title.textContent = "Card title";

// Текст картки
let text = document.createElement("p");
text.className = "card-text";
text.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";

// Кнопка
let button = document.createElement("a");
button.href = "#";
button.className = "btn btn-primary";
button.textContent = "Go somewhere";

// Додаємо всі елементи у картку
cardBody.appendChild(title);
cardBody.appendChild(text);
cardBody.appendChild(button);
card.appendChild(img);
card.appendChild(cardBody);

// Додаємо картку в документ (наприклад, у `body`)
document.body.appendChild(card);