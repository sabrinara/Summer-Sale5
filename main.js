function setNumToElement(whereToSet, num) {
    const element = document.getElementById(whereToSet);
    element.innerText = num;
  }
  function getNumFromElement(id) {
    const element = document.getElementById(id);
    const str = element.innerText;
    const num = +parseFloat(str);
    const fixedNum = +num.toFixed(2);
    return fixedNum;
  }
  function clickHandlerProducer(obj) {
    return function () {
      const cartList = document.getElementById("cartList");
      const sell200Btn = document.getElementById("sell200-btn");
      const purchaseBtn = document.getElementById("purchase-btn");
  
  
      const li = document.createElement("li");
      li.innerText = obj.name;
      cartList.appendChild(li);
  
  
      const price = getNumFromElement("priceId");
      const netPrice = obj.price + price;
      const unit = +netPrice.toFixed(2) + " " + "TK";
      setNumToElement("priceId", unit);
  
  
      if (netPrice > 0) {
        purchaseBtn.style.opacity = 1;
        purchaseBtn.style.pointerEvents = "auto";
      }
  
  
      if (netPrice > 200) {
        sell200Btn.style.opacity = 1;
        sell200Btn.style.pointerEvents = "auto";
      }
    };
  }
  
  
  const item1 = clickHandlerProducer({
    name: "K. Accessories",
    price: 39.0,
  });
  const item2 = clickHandlerProducer({
    name: "K. Accessories",
    price: 25.0,
  });
  const item3 = clickHandlerProducer({
    name: "Home Cooker",
    price: 49.0,
  });
  const item4 = clickHandlerProducer({
    name: "Sports Back Cap",
    price: 49.0,
  });
  const item5 = clickHandlerProducer({
    name: "Full Jersey Set",
    price: 69.0,
  });
  const item6 = clickHandlerProducer({
    name: "Sports cates",
    price: 169.0,
  });
  const item7 = clickHandlerProducer({
    name: "Single Relax Chair",
    price: 185.0,
  });
  const item8 = clickHandlerProducer({
    name: "Children play",
    price: 299.0,
  });
  const item9 = clickHandlerProducer({
    name: "Flexible Sofa",
    price: 339.0,
  });
  
  
  document.getElementById("sell200-btn").addEventListener("click", function (e) {
    const couponId = document.getElementById("couponId");
    if (couponId.value === "SELL200") {
      const price = getNumFromElement("priceId");
      const discount = (price * 20) / 100;
      setNumToElement("discountId", +discount.toFixed(2));
      const total = price - discount;
      setNumToElement("totalPriceId", +total.toFixed(2));
    }
  });
  
  
  document.getElementById("purchase-btn").addEventListener("click", function (e) {
    let blackOverlay = document.getElementById("overlayId");
    blackOverlay.style.display = "block";
  
  
    const num1 = +getNumFromElement("totalPriceId").toFixed(2);
    const num2 = +getNumFromElement("priceId").toFixed(2);
  
  
    let overLayPriceMsg;
    const couponId = document.getElementById("couponId");
    if (couponId.value === "SELL200") {
      overLayPriceMsg = num1;
    } else {
      overLayPriceMsg = num2;
    }
  
  
    setNumToElement("ovarlayPayMsg", overLayPriceMsg);
  });
  
  
  document
    .getElementById("ovarlayDisableBtn")
    .addEventListener("click", function (e) {
      let blackOverlay = document.getElementById("overlayId");
      blackOverlay.style.display = "none";
    });
  