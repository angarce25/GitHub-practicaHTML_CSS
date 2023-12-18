document.addEventListener('DOMContentLoaded', function() {
    const products = [
      {
        id: 1,
        name: 'Product 1',
        image: 'https://via.placeholder.com/150',
        price: 10,
        description: 'Description of Product 1',
        stock: 5
      },
      // Add more products here...
    ];
  
    const cartItems = [];
    const cart = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
  
    const displayProducts = () => {
      const productsDiv = document.querySelector('.products');
  
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
          <h3>${product.name}</h3>
          <img src="${product.image}" alt="${product.name}">
          <p>Price: $${product.price}</p>
          <p>${product.description}</p>
          <p>Stock: ${product.stock} units</p>
          <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productsDiv.appendChild(productDiv);
      });
    };
  
    const updateCart = () => {
      cart.innerHTML = '';
      let total = 0;
  
      cartItems.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <span>${item.name}</span>
          <span>$${item.price}</span>
          <button class="remove-from-cart" data-id="${item.id}">Remove</button>
        `;
        cart.appendChild(cartItem);
        total += item.price;
      });
  
      cartTotal.textContent = `$${total.toFixed(2)}`;
    };
  
    const addToCart = productId => {
      const productToAdd = products.find(product => product.id === productId);
  
      if (productToAdd && productToAdd.stock > 0) {
        cartItems.push({
          id: productToAdd.id,
          name: productToAdd.name,
          price: productToAdd.price
        });
        productToAdd.stock--;
        updateCart();
      } else {
        alert('Product out of stock!');
      }
    };
  
    const removeFromCart = productId => {
      const index = cartItems.findIndex(item => item.id === productId);
  
      if (index !== -1) {
        const removedItem = cartItems.splice(index, 1)[0];
        const productIndex = products.findIndex(product => product.id === removedItem.id);
        products[productIndex].stock++;
        updateCart();
      }
    };
  
    document.querySelector('.products').addEventListener('click', event => {
      if (event.target.classList.contains('add-to-cart')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        addToCart(productId);
      }
    });
  
    document.querySelector('.cart-items').addEventListener('click', event => {
      if (event.target.classList.contains('remove-from-cart')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        removeFromCart(productId);
      }
    });
  
    displayProducts();
  });
  