/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tbody = document.getElementsByTagName('tbody')[0];
  tbody.innerHTML = ' ';
  
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  var tbody = document.getElementsByTagName('tbody')[0];

  // DONE: Iterate over the items in the cart
    var cartItems = JSON.parse(localStorage.getItem('storedItems'));
    var rows; 
    var data;
    for (var i = 0; i < cartItems.length; i++ ){
    rows = document.createElement('tr');
    data = document.createElement('td');
    data.textContent = (cartItems[i].product + ' ' + cartItems[i].quantity);
    rows.appendChild(data);
    table.appendChild(rows); 
    }

  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
