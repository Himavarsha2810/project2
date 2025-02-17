const slider = document.querySelector(".book-slider");

      function addToCart(bookTitle) {
        showPopup(`${bookTitle} added to cart`);
      }

      function addToWishlist(bookTitle) {
        showPopup(`${bookTitle} added to wishlist`);
      }

      function showPopup(message) {
        const popup = document.getElementById("popup");
        const popupMessage = document.getElementById("popupMessage");
        popupMessage.textContent = message;
        popup.style.display = "block";
      }

      function closePopup() {
        const popup = document.getElementById("popup");
        popup.style.display = "none";
      }

      // Function to handle keydown event
      function handleKeyDown(e) {
        switch (e.key) {
          case "ArrowRight":
            slider.scrollLeft += 50; 
            break;
          case "ArrowLeft":
            slider.scrollLeft -= 50; 
            break;
          default:
            break;
        }
      }
      document.addEventListener("keydown", handleKeyDown); 

      function scrollLeft() {
        document.getElementById('slider').scrollBy({ left: -200, behavior: 'smooth' });
    }
    function scrollRight() {
        document.getElementById('slider').scrollBy({ left: 200, behavior: 'smooth' });
    }
    let currentIndex = 0;
        const groups = document.querySelectorAll('.s-group');
        const totalGroups = groups.length;

        function showSlide(index) {
            const slider = document.getElementById('s1');
            if (index >= totalGroups) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = totalGroups - 1;
            } else {
                currentIndex = index;
            }
            slider.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        setInterval(nextSlide, 3000);



// fetch('https://67a9a5d06e9548e44fc447d6.mockapi.io/best-sellers')
//       .then(response => response.json())
//       .then(data => {
//         const container = document.getElementById('cards-container');
//         data.forEach(book => {
//           const card = document.createElement('div');
//           card.classList.add('card');
//           card.style.borderRadius="10px";
//           card.style.boxShadow="2px 1px 3px";
//           card.style.height="550px";

//           const img = document.createElement('img');
//           img.src = book.image;
//           img.alt = book.title;
//           img.style.width="70%";
//           img.style.height="200px";
//           img.style.padding="20px";

//           const title = document.createElement('h3');
//           title.textContent = book.title;
//           title.style.color="purple";
//           title.style.fontSize="20px";

//           const author = document.createElement('p');
//           author.textContent = `Author: ${book.author}`;
//           author.style.color="darkblue";
//           author.style.backgroundColor="lightpink";

//           const genre = document.createElement('p');
//           genre.textContent = `Genre: ${book.genre}`;
//           genre.style.color="red";
//           genre.style.backgroundColor="lightblue";

//           const releaseDate = document.createElement('p');
//           releaseDate.textContent = `Release Date: ${book.release_date}`;
//           releaseDate.style.color="golden";
//           releaseDate.style.backgroundColor="violet";

//           const addToCartButton = document.createElement('button');
//           addToCartButton.textContent = "Add to Cart";
//           addToCartButton.onclick = () => addToCart(book.title);
//           addToCartButton.style.width = "120px";
//           addToCartButton.style.marginLeft = "35px";

//           const addToWishlistButton = document.createElement('button');
//           addToWishlistButton.innerHTML = "&#9829; Add to Wishlist";  // Heart symbol
//           addToWishlistButton.onclick = () => addToWishlist(book.title);
//           addToWishlistButton.style.width = "150px";
//           addToWishlistButton.style.marginLeft = "25px";
//           addToWishlistButton.style.backgroundColor = "white";
//           addToWishlistButton.style.color = "black";
    
          

//           card.appendChild(img);
//           card.appendChild(title);
//           card.appendChild(author);
//           card.appendChild(genre);
//           card.appendChild(releaseDate);
//           card.appendChild(addToCartButton);
//           card.appendChild(addToWishlistButton);

//           container.appendChild(card);
//         });
//       })
//       .catch(error => console.error('Error fetching data:', error));

// function addToCart(bookTitle) {
//   alert(`${bookTitle} added to cart!`);
// }

// function addToWishlist(bookTitle) {
//   alert(`${bookTitle} added to wishlist!`);
// }
