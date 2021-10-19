if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}



function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var purchaseWindow = window.open("","Purchase","top=900,left=900,width=900,height=500");

    purchaseWindow.document.writeln("<html> <body>");
    purchaseWindow.document.writeln("<title> Purchase </title>");
    purchaseWindow.document.writeln('<link rel="stylesheet" href="styles.css" />');
    purchaseWindow.document.writeln('<script src="store.js" async></script>');    
    purchaseWindow.document.writeln('<h2 class="section-header"> CART</h2> <div class="cart-row"> <span class="cart-item cart-header cart-column">ITEM</span> <span class="cart-price cart-header cart-column">PRICE</span> <span class="cart-quantity cart-header cart-column">QUANTITY</span> </div> ');
     
    var cartItems = document.getElementsByClassName("cart-items")[0].innerHTML;
    var cartTotal = document.getElementsByClassName("cart-total")[0].innerHTML;
    
    purchaseWindow.document.writeln(cartItems+cartTotal);
    
    purchaseWindow.document.writeln('<button class="btn btn-primary btn-close" onclick="window.close()" type="button">CLOSE</button>');
    purchaseWindow.document.writeln("</body> </html>"); 
    var cartItems = document.getElementsByClassName("cart-items")[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal() 
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`

    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0

    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
var btn = document.getElementById('btn');
  function toggle() {
    if(btn.classList.contains ("far")){
     btn.classList.remove("far");
     btn.classList.add("fas");
     } else{
        btn.classList.remove("fas");
        btn.classList.add("far");
    }
    }
    var btn1 = document.getElementById('btn1');
  function toggle1() {
    if(btn1.classList.contains ("far")){
     btn1.classList.remove("far");
     btn1.classList.add("fas");
     } else{
        btn1.classList.remove("fas");
        btn1.classList.add("far");
    }
    }
    var btn2 = document.getElementById('btn2');
    function toggle2() {
      if(btn2.classList.contains ("far")){
       btn2.classList.remove("far");
       btn2.classList.add("fas");
       } else{
          btn2.classList.remove("fas");
          btn2.classList.add("far");
      }
      }
      var btn3 = document.getElementById('btn3');
      function toggle3() {
        if(btn3.classList.contains ("far")){
         btn3.classList.remove("far");
         btn3.classList.add("fas");
         } else{
            btn3.classList.remove("fas");
            btn3.classList.add("far");
        }
        }
        var btn4 = document.getElementById('btn4');
      function toggle4() {
        if(btn4.classList.contains ("far")){
         btn4.classList.remove("far");
         btn4.classList.add("fas");
         } else{
            btn4.classList.remove("fas");
            btn4.classList.add("far");
        }
        }
        var btn5 = document.getElementById('btn5');
      function toggle5() {
        if(btn5.classList.contains ("far")){
         btn5.classList.remove("far");
         btn5.classList.add("fas");
         } else{
            btn5.classList.remove("fas");
            btn5.classList.add("far");
        }
        }