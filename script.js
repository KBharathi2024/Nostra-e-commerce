// // Example: Simple alert on page load
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Home page loaded!');
//     // Add more interactive features here
// });

// // Example: Toggle a navigation menu
// const navToggle = document.querySelector('.nav-toggle');
// const navMenu = document.querySelector('.nav-menu');

// if (navToggle && navMenu) {
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.toggle('active');
//     });
// }

const products = [
    { id: 1, name: "kurti", category: "tops", price: 1200, image:images/kurti1.jpg, },
    { id: 2, name: "T-Shirt", category: "clothing", price: 25 },
    { id: 3, name: "The Great Gatsby", category: "books", price: 15 },
    { id: 4, name: "Smartphone", category: "electronics", price: 800 },
    { id: 5, name: "Jeans", category: "clothing", price: 50 },
    { id: 6, name: "1984", category: "books", price: 12 }
];

const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const productList = document.getElementById('productList');

function displayProducts(filteredProducts) {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productDiv);
    });
}

function filterAndSearchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    displayProducts(filtered);
}

// Event Listeners
searchInput.addEventListener('keyup', filterAndSearchProducts);
categoryFilter.addEventListener('change', filterAndSearchProducts);

// Initial display of all products
displayProducts(products);

