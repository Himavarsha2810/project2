// script.js
const books = [
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: "₹99.00", discount: "-67%", image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg" },
    { title: "IKIGAI", author: "Héctor García", price: "₹99.00", discount: "-48%", image: "https://cdn.penguin.co.in/wp-content/uploads/2024/01/9780804855334.jpg" },
    { title: "The Power of Your Subconscious Mind", author: "Joseph Murphy", price: "₹109.00", discount: "-42%", image: "https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UY327_FMwebp_QL65_.jpg" },
    { title: "The Alchemist", author: "Paulo Coelho", price: "₹99.00", discount: "-55%", image: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg" },
    { title: "Atomic Habits", author: "James Clear", price: "₹149.00", discount: "-40%", image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg" },
    { title: "Think and Grow Rich", author: "Napoleon Hill", price: "₹129.00", discount: "-50%", image: "https://m.media-amazon.com/images/I/71UypkUjStL._AC_UY327_FMwebp_QL65_.jpg" },
    { title: "The 5 AM Club", author: "Robin Sharma", price: "₹139.00", discount: "-45%", image: "https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UY327_FMwebp_QL65_.jpg" }
];

let cartCount = 0;
let wishlistCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}

function addToWishlist() {
    wishlistCount++;
    document.getElementById('wishlist-count').innerText = wishlistCount;
}

function renderBooks() {
    const bookList = document.getElementById('book-list');
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${book.price}</p>
            <p>${book.discount}</p>
            <button onclick="addToCart()">Add to Cart</button>
            <button onclick="addToWishlist()">Add to Wishlist</button>
        `;
        bookList.appendChild(bookCard);
    });
}

document.addEventListener('DOMContentLoaded', renderBooks);
