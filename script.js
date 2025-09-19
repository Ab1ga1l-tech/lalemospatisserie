    let cartCount = 0;
    let cartTotal = 0;

    function addToCart(price) {
      cartCount++;
      cartTotal += price;
      document.getElementById("cart-count").innerText = cartCount;

      alert("Produto adicionado! Total: R$ " + cartTotal.toFixed(2));
    }
