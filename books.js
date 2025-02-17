let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    image:
      "https://m.media-amazon.com/images/I/61zo9L2qSvL._AC_UF1000,1000_QL80_.jpg",
    prize: "₹450",
  },
  {
    title: "The Bourne Identity",
    author: "Robert Ludlum",
    image:
      "https://m.media-amazon.com/images/I/61auuEo3h5L._AC_UF1000,1000_QL80_.jpg",
    prize: "₹350",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    image:
      "https://www.worthing.in/cdn/shop/products/45_u126656_0_DANBROWN_TheDaVinciCode.jpg?v=1674308106",
    prize: "₹530",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    image: "https://bookzoo.in/cdn/shop/products/80481.jpg?v=1647373954",
    prize: "₹380",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Jurassic_Park_%28book_cover%29.jpg/220px-Jurassic_Park_%28book_cover%29.jpg",
    prize: "₹660",
  },
  {
    title: "The Hunt for Red October",
    author: "Tom Clancy",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c2/HuntForRedOctober.JPG",
    prize: "₹200",
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    image:
      "https://m.media-amazon.com/images/I/61I9UsHVOtL._UF1000,1000_QL80_.jpg",
    prize: "₹720",
  },
  {
    title: "Ender's Game",
    author: "Orson Scott Card",
    image:
      "https://m.media-amazon.com/images/I/91T-14y8aTL._AC_UF1000,1000_QL80_.jpg",
    prize: "₹500",
  },
  {
    title: "The Maze Runner",
    author: "James Dashner",
    image: "https://m.media-amazon.com/images/I/91Jra1QAMPL._SL1500_.jpg",
    prize: "₹450",
  },
  {
    title: "Red Rising",
    author: "Pierce Brown",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_rhMfwsL20QuUyjKKFYe8AwCRV7Ornqnsr8E5yA00GBCDCPKRbmGbPCLRW2bWtrRXDQ8mMmi6qYk4-y9IvfgZkHWQ4m4aCDveapD7E0TclsnaW3aDgdIAj1WNtfuc2UInZL3q0kfIch8/s1600/Red+Rising.jpg",
    prize: "₹380",
  },
  {
    title: "The Lightning Thief",
    author: "Rick Riordan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiUyIW650Wh4GkBRmN5FX-05bT6QC5KS0Yg&s",
    prize: "₹600",
  },
  {
    title: "The Dark Tower: The Gunslinger",
    author: "Stephen King",
    image:
      "https://m.media-amazon.com/images/I/71OYItP4S-L._AC_UF1000,1000_QL80_.jpg",
    prize: "₹620",
  },
];

let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src = "${value.image}"/>
      <div class="title">${value.title}</div>
      <div class="author">${value.author}</div>
      <div class="price">${value.prize.toLocaleString()}</div>
      <button onclick="addToCard(${key})">Add To Cart</button>
      `;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    if (value != null) {
      totalPrice += value.prize * value.quantity;
      count += value.quantity;
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.title}</div>
                <div>${(value.prize * value.quantity).toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
  }
  reloadCard();
}
