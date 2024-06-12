const list_tacos = {
    1: { name: "Tacos 1 viande", img: "images/tacos/tacos.png", price: 2 },
    2: { name: "Tacos 2 viandes", img: "images/tacos/tacos2.png", price: 15 },
    3: { name: "Tacos 3 viandes", img: "images/tacos/tacos3.png", price: 9 }
};

const list_sandwichs = {
    1: { name: "Kebab", img: "images/sandwichs/seul/kebab.png", price: 2 },
    2: { name: "Big Blue", img: "images/sandwichs/seul/bigblue.png", price: 15 },
    3: { name: "Americain", img: "images/sandwichs/seul/americain.png", price: 9 },
    4: { name: "Chic'n Plus", img: "images/sandwichs/seul/chicnplus.png", price: 9 },
    5: { name: "Tikka", img: "images/sandwichs/seul/tikka.png", price: 9 },
    6: { name: "Pakito", img: "images/sandwichs/seul/pakito.png", price: 9 },
    7: { name: "Perse", img: "images/sandwichs/seul/perse.png", price: 9 },
    8: { name: "Boursin", img: "images/sandwichs/seul/boursin.png", price: 9 },
    9: { name: "Marin", img: "images/sandwichs/seul/marin.png", price: 9 },
    10: { name: "Toasty", img: "images/sandwichs/seul/toasty.png", price: 9 }
};

const list_burgers = {
    1: { name: "Cheese burger", img: "images/cheeseburger.png", price: 2 },
    2: { name: "Double Cheese burger", img: "images/doublecheeseburger.png", price: 15 },
    3: { name: "Chicken burger", img: "images/chickenburger.png", price: 9 },
    4: { name: "Fish burger", img: "images/fishburger.png", price: 9 },
    5: { name: "Chic'n Beef burger", img: "images/chicnbeefburger.png", price: 9 },
    6: { name: "Crousty burger", img: "images/croustyburger.png", price: 9 },
    7: { name: "Classique burger", img: "images/classiqueburger.png", price: 9 },
    8: { name: "Classique poulet burger", img: "images/classiquepouletburger.png", price: 9 },
    9: { name: "Savoyard burger", img: "images/savoyardburger.png", price: 9 },
    10: { name: "Chèvre burger", img: "images/chevreburger.png", price: 9 },
    11: { name: "Black bacon burger", img: "images/blackbaconburger.png", price: 9 }
};

const list_assiettes = {
    1: { name: "Assiette poulet", img: "images/assiettepoulet.png", price: 2 },
    2: { name: "Assiette kebab", img: "images/assiettekebab.png", price: 15 },
    3: { name: "Assiette Mixte", img: "images/assiettemixte.png", price: 9 },
    4: { name: "Assiette kefta", img: "images/assiettekefta.png", price: 9 }
};

const list_salades = {
    1: { name: "Salade classique", img: "images/saladeclassique.png", price: 2 },
    2: { name: "Salade chicken", img: "images/saladechicken.png", price: 15 },
    3: { name: "Salade pêcheur", img: "images/saladepecheur.png", price: 9 }
};

const list_texmex = {
    1: { name: "Nuggets", img: "images/nuggets.png", price: 2, option: [1,2,3] },
    2: { name: "Tenders", img: "images/tenders.png", price: 15 },
    3: { name: "Oignon Ring", img: "images/oignonring.png", price: 9 },
    4: { name: "Wings", img: "images/wings.png", price: 9 },
    5: { name: "Camembert pané", img: "images/camembertpane.png", price: 9 },
    6: { name: "Jalapenos", img: "images/jalapenos.png", price: 9 },
    7: { name: "Frites", img: "images/frite.png", price: 9 },
    8: { name: "Barquette kebab", img: "images/barquettekebab.png", price: 9 }
};

const list_menu_enfant = {
    1: { name: "Menu enfant", img: "images/menuenfant.png", price: 2 },
    2: { name: "Menu enfant", img: "images/menuenfant.png", price: 2 },
    3: { name: "Menu enfant", img: "images/menuenfant.png", price: 2 }
};

const list_dessert = {
    1: { name: "Tiramisu speculos", img: "images/tiramisuspeculos.png", price: 2 },
    2: { name: "Tarte au daim", img: "images/tarteaudaim.png", price: 15 },
    3: { name: "Cheesecake oreo", img: "images/cheesecakeoreo.png", price: 9 }
};

const list_boissons = {
    1: { name: "Soda", img: "images/soda.png", price: 2},
    2: { name: "Capri sun", img: "images/caprisun.png", price: 15 },
    3: { name: "Eau", img: "images/eau.png", price: 9 },
    4: { name: "Grand coca", img: "images/grandecoca.png", price: 9 },
    5: { name: "Grand Eau", img: "images/grandeau.png", price: 9 }
};

const list_options = {
    1: { name: "Algerienne", img: "images/saucealgerienne.png", price: 2 },
    2: { name: "Samourai", img: "images/saucesamourai.png", price: 15 },
    3: { name: "Biggy", img: "images/saucebiggy.png", price: 9 },
    4: { name: "Blanche", img: "images/sauceblanche.png", price: 9 },
    5: { name: "Pain", img: "images/pain.png", price: 9 },
    6: { name: "Galette", img: "images/galette.png", price: 9 },
    7: { name: "Suppl. Viande", img: "images/supplviande.png", price: 9 },
    8: { name: "Suppl. Fromage", img: "images/supplfromage.png", price: 9 },
    9: { name: "Aucun", img: "", price: 0 }
};

const categories = {
    list_tacos,
    list_sandwichs,
    list_burgers,
    list_assiettes,
    list_salades,
    list_texmex,
    list_menu_enfant,
    list_dessert,
    list_boissons
};

let cart = [];
let selectedProduct = null;
let selectedOptions = [];

async function getPublicIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'adresse IP publique:', error);
        return null;
    }
}


function showProducts(category) {
    getPublicIP().then(ip => {
        if (ip) {
            console.log('Votre adresse IP publique est :', ip);
        } else {
            console.log('Impossible de récupérer l\'adresse IP publique.');
        }
    });
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    const products = categories[category];
    for (const id in products) {
        const product = products[id];
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <div id="product_container_${id}" class="product_container" onclick="selectProduct(${id}, '${category}')">
                <p>${product.name}</p>
                <p>${product.price} euros</p>
            </div>`;
        productsContainer.appendChild(productElement);
    }
}

function selectProduct(productId, category) {
    if (selectedProduct && selectedProduct.id === productId && selectedProduct.category === category) {
        resetSelections();
        return;
    }
    if (selectedProduct) {
        resetSelections();
    }
    selectedProduct = { id: productId, category: category };
    const selectedProductContainer = document.getElementById(`product_container_${productId}`);
    const parentDiv = selectedProductContainer.parentNode;
    parentDiv.style.backgroundColor = 'green';
    const children = parentDiv.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        child.style.color = 'white';
    }
    showOptions();
    document.getElementById('optionsContainer').style.display = 'none';
}

function selectOption(optionId) {
    const optionIndex = selectedOptions.findIndex(option => option.id === optionId);
    if (optionIndex !== -1) {
        selectedOptions.splice(optionIndex, 1);
        const selectedOptionContainer = document.getElementById(`option_container_${optionId}`);
        const parentDiv = selectedOptionContainer.parentNode;
        parentDiv.style.backgroundColor = 'initial';
        const children = parentDiv.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.style.color = 'black';
        }
    } else {
        const selectedOption = { id: optionId };
        selectedOptions.push(selectedOption);
        const selectedOptionContainer = document.getElementById(`option_container_${optionId}`);
        const parentDiv = selectedOptionContainer.parentNode;
        parentDiv.style.backgroundColor = 'green';
        const children = parentDiv.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.style.color = 'white';
        }
    }
    document.getElementById('addToCartButton').style.display = selectedOptions.length > 0 ? 'block' : 'none';
}

function toggleOptions() {
    const optionsContainer = document.getElementById('optionsContainer');
    if (optionsContainer.style.display === 'block') {
        optionsContainer.style.display = 'none';
    } else {
        optionsContainer.style.display = 'block';
    }
}


function showOptions() {
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    for (const id in list_options) {
        const option = list_options[id];
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.id = `option_${id}`;
        optionElement.innerHTML = `
            <div id="option_container_${id}" class="option_container" onclick="selectOption(${id})">
                <p>${option.name}</p>
                <p>${option.price} euros</p>
            </div>`;
        optionsContainer.appendChild(optionElement);
    }
}

function addToCart() {
    if (!selectedProduct || selectedOptions.length === 0) {
        alert('Veuillez sélectionner un produit et au moins une option avant d\'ajouter au panier.');
        return;
    }

    const product = categories[selectedProduct.category][selectedProduct.id];
    const productName = `${product.name} avec ${selectedOptions.map(option => list_options[option.id].name).join(', ')}`;
    const productPrice = selectedOptions.reduce((total, option) => total + list_options[option.id].price, product.price);

    cart.push({ name: productName, price: productPrice });

    updateCart();
    resetSelections();
    document.getElementById('addToCartButton').style.display = 'none';

    // Supprimer la classe 'hidden' pour afficher à nouveau les options
    document.getElementById('optionsContainer').style.display = 'none';
}



function resetSelections() {
    if (selectedProduct) {
        const productId = selectedProduct.id;
        const selectedProductContainer = document.getElementById(`product_container_${productId}`);
        const parentDiv = selectedProductContainer.parentNode;
        parentDiv.style.backgroundColor = 'initial';
        const children = parentDiv.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.style.color = 'black';
        }
        selectedProduct = null;
    }
    selectedOptions.forEach(option => {
        const optionId = option.id;
        const selectedOptionContainer = document.getElementById(`option_container_${optionId}`);
        const parentDiv = selectedOptionContainer.parentNode;
        parentDiv.style.backgroundColor = 'initial';
        const children = parentDiv.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.style.color = 'black';
        }
    });
    selectedOptions = [];
}

function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.innerHTML = `
            <p>${item.name}</p>
            <p>${item.price} euros</p>
        `;
        cartContainer.appendChild(cartItemElement);
        total += item.price;
    });
    document.getElementById('total').innerHTML = `Total: ${total} euros`;
}

showProducts('list_tacos');

function printTicket() {
    const cartContent = cart.map(item => `${item.name}`).join('\n\n');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const ticketContent = `\n\nArticle:\n${cartContent}\n\nTotal: ${total.toFixed(2)} euros`;

    fetch('/print', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: ticketContent })
    })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            alert('Ticket envoyé à l\'imprimante');
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Erreur lors de l\'envoi du ticket à l\'imprimante');
        });
}

