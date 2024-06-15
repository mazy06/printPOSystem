const list_tacos = {
    1: { name: "Tacos 1 viande", price: 7.5 },
    2: { name: "Tacos 2 viandes", img: "images/tacos/tacos2.png", price: 8.50 },
    3: { name: "Tacos 3 viandes", img: "images/tacos/tacos3.png", price: 9.50 }
};

const list_sandwichs = {
    1: { name: "Kebab", price: 6 },
    2: { name: "Big Blue", price: 6.50 },
    3: { name: "Americain", price: 6.50 },
    4: { name: "Chic'n Plus", price: 6.50 },
    5: { name: "Tikka", price: 6.50 },
    6: { name: "Pakito",  price: 6.50 },
    7: { name: "Perse", price: 7.50 },
    8: { name: "Boursin",  price: 7.50 },
    9: { name: "Marin", price: 7.50 },
    10: { name: "Toasty",  price: 9 }
};

const list_burgers = {
    1: { name: "Cheese burger", price: 4.50 },
    2: { name: "Double Cheese burger", price: 5.50 },
    3: { name: "Chicken burger",  price: 5.50 },
    4: { name: "Fish burger", price: 5.50 },
    5: { name: "Chic'n Beef burger", price: 7 },
    6: { name: "Crousty burger",  price: 8 },
    7: { name: "Classique burger", price: 8.50 },
    8: { name: "Classique poulet burger", price: 9.50 },
    9: { name: "Savoyard burger", price: 10 },
    10: { name: "Chèvre burger", price: 10.50 },
    11: { name: "Black bacon burger", price: 11 },
    12: { name: "Toasty",  price: 8 }
};

const list_assiettes = {
    1: { name: "Assiette poulet", price: 9.50 },
    2: { name: "Assiette kebab", price: 9.50 },
    3: { name: "Assiette Mixte", price: 12 },
    4: { name: "Assiette kefta", price: 12 }
};

const list_salades = {
    1: { name: "Salade classique", price: 7.50 },
    2: { name: "Salade chicken", price: 8.50 },
    3: { name: "Salade pêcheur", price: 8.50 }
};

const list_texmex = {
    1: { name: "Nuggets x5", price: 5.50},
    2: { name: "Tenders x4", price: 5.50 },
    3: { name: "Oignon Ring x4", price: 5.50 },
    4: { name: "Wings x4", price: 5.50 },
    5: { name: "Camembert pané x4", price: 5.50 },
    6: { name: "Jalapenos x4", price: 5.50 },
    7: { name: "Barquette kebab", price: 6 },
    8: { name: "Barquette + Frites", price: 2.50 },
};

const list_menu_enfant = {
    1: { name: "Menu Cheese",  price: 6 },
    2: { name: "Menu Nugget", price: 6 },
};

const list_dessert = {
    1: { name: "Tiramisu speculos",price: 3 },
    2: { name: "Tarte au daim", price: 3 },
    3: { name: "Cheesecake oreo",  price: 3 },
    4: { name: "Tiramisu daim", price: 3}
};

const list_pizza = {
    1: { name: "Marguerita", price: 8 },
    2: { name: "Reine", price: 8 },
    3: { name: "Kebab", price: 8 },
    4: { name: "Neptune", price: 8},
    5: { name: "Poulet", price: 8},
    6: { name: "Crèmeuse", price: 8},
    7: { name: "3 fromages", price: 10},
    8: { name: "Aubergine", price: 10 },
    9: { name: "Chèvre Miel", price: 10},
    10: { name: "Norvegiènne", price: 10},
    11: { name: "Végétarienne", price: 10},
    12: { name: "3 Cannibale", price: 10}
};

const list_boissons = {
    1: { name: "Soda", img: "images/soda.png", price: 2},
    2: { name: "Capri sun", img: "images/caprisun.png", price: 1.5 },
    3: { name: "Eau", img: "images/eau.png", price: 1.5 },
    4: { name: "Grand coca", img: "images/grandecoca.png", price: 3.50 },
    5: { name: "Grand Eau", img: "images/grandeau.png", price: 2.50 }
};

const list_options = {
    1: { name: "MENU", price: 2 },
    2: { name: "AUCUN", price: 0 },
    3: { name: "Algerienne", price: 0 },
    4: { name: "Samourai", price: 0 },
    5: { name: "Biggy", price: 0 },
    6: { name: "Ketchup", price: 0 },
    7: { name: "Mayonnaise", price: 0 },
    8: { name: "Andalouse", price: 0 },
    9: { name: "Moutarde Miel", price: 0 },
    10: { name: "Curry", price: 0 },
    11: { name: "Harissa", price: 0 },
    12: { name: "Fromagère", price: 0 },
    13: { name: "Brazil", price: 0 },
    14: { name: "Pain", price: 0 },
    15: { name: "Galette", price: 0 },
    16: { name: "Suppl. Viande", price: 1 },
    17: { name: "Suppl. Fromage", price: 1 },
    18: { name: "Frites", price: 2.50 },
    19: { name: "Gratiné Cheddar", price: 1 },
    20: { name: "Gratiné Mozza", price: 1 },
    21: { name: "Gratiné Raclette", price: 1 }
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
    list_boissons,
    list_pizza
};

let cart = [];
let selectedProduct = null;
let selectedOptions = [];

// Autres fonctions existantes...
// Par exemple, les fonctions showProducts, selectProduct, selectOption, etc.

function showProducts(category) {
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
    parentDiv.style.backgroundColor = 'black';
    const children = parentDiv.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        child.style.color = 'white';
    }
}

function selectOption(optionId) {
    const optionIndex = selectedOptions.findIndex(option => option.id === optionId);
    if (optionIndex !== -1) {
        selectedOptions.splice(optionIndex, 1);
        const selectedOptionContainer = document.getElementById(`option_container_${optionId}`);
        const parentDiv = selectedOptionContainer.parentNode;
        parentDiv.style.backgroundColor = '#4CAF50';
        const children = parentDiv.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.style.color = '#4CAF50';
        }
    } else {
        const selectedOption = { id: optionId };
        selectedOptions.push(selectedOption);
        const selectedOptionContainer = document.getElementById(`option_container_${optionId}`);
        const parentDiv = selectedOptionContainer.parentNode;
        parentDiv.style.backgroundColor = 'black';
        const children = parentDiv.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.style.color = 'white';
        }
    }
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
    const productName = `${product.name} \n+ ${selectedOptions.map(option => list_options[option.id].name).join('\n + ')}`;
    const productPrice = selectedOptions.reduce((total, option) => total + list_options[option.id].price, product.price);

    cart.push({ name: productName, price: productPrice });

    updateCart();
    resetSelections();

    // Supprimer la classe 'hidden' pour afficher à nouveau les options
    document.getElementById('optionsContainer').style.display = 'none';
}



function resetSelections() {
    if (selectedProduct) {
        const productId = selectedProduct.id;
        const selectedProductContainer = document.getElementById(`product_container_${productId}`);
        const parentDiv = selectedProductContainer.parentNode;
        parentDiv.style.backgroundColor = '#9b59b6';
        const children = parentDiv.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.style.color = 'white';
        }
        selectedProduct = null;
    }
    selectedOptions.forEach(option => {
        const optionId = option.id;
        const selectedOptionContainer = document.getElementById(`option_container_${optionId}`);
        const parentDiv = selectedOptionContainer.parentNode;
        parentDiv.style.backgroundColor = '#42a07f';
        const children = parentDiv.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.style.color = 'white';
        }
    });
    selectedOptions = [];
}

function addToCart() {
    if (!selectedProduct || selectedOptions.length === 0) {
        alert('Veuillez sélectionner un produit et au moins une option avant d\'ajouter au panier.');
        return;
    }

    const product = categories[selectedProduct.category][selectedProduct.id];
    const productName = product.name;
    const productPrice = selectedOptions.reduce((total, option) => total + list_options[option.id].price, product.price);
    const options = selectedOptions.map(option => list_options[option.id]);

    cart.push({ name: productName, price: productPrice, options: options });

    updateCart();
    resetSelections();

    document.getElementById('optionsContainer').style.display = 'none';
}

function updateCart() {
    const cartContainer = document.querySelector('.product-bar');
    if (cartContainer) {
        cartContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const cartItemElement = document.createElement('li');
            cartItemElement.classList.add('product-bar');
            cartItemElement.innerHTML = `
                <span>${item.name}</span>
                <span>${item.price.toFixed(2)} €</span>
            `;
            cartContainer.appendChild(cartItemElement);
            total += item.price;
        });

        document.getElementById('total').textContent = `${total.toFixed(2)} €`;
    }
}


showProducts('list_tacos');
showOptions();

function printTicket() {
    const cartContent = cart.map(item => {
        const optionsText = item.options.map(option => option.name).join('\n + ');
        return `${item.name}\n + ${optionsText}\n - ${item.price.toFixed(2)} euros`;
    }).join('\n\n');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const ticketContent = `\n\nArticle:\n\n${cartContent}\n\nTotal: ${total.toFixed(2)} euros`;

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

    cart = [];
    updateCart();
}


/*function printTicket() {
    const cartItems = cart.map(item => `${item.name} - ${item.price.toFixed(2)} €`).join('\n');
    //alert(`Ticket:\n\n${cartItems}\n\nTotal: ${document.getElementById('total').textContent}`);
    cart = [];
    updateCart();
}*/

// Assurez-vous que les utilisateurs sont redirigés vers la page de connexion s'ils ne sont pas authentifiés
document.addEventListener('DOMContentLoaded', function () {
    checkUserLoggedIn();
});

function checkUserLoggedIn() {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if (!accessToken || !refreshToken) {
        window.location.href = 'login'; // Redirige vers la page de connexion
    }
}




