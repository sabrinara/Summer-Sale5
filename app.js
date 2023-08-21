/****
 *   Here, 9 cards conveys same kind of handler function and data. since, the data
 *   between those cards shares the same aspects, we make that common format of 
 *   data as the following object. as well as the common functionallity inspired
 *   me to build a common decorator "clickHandlerProducer" function.
 *   
 *   obj = {
 *      name: 
 *      price:
 *   }
 */
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
      //first step: dynamically adding li's
      const li = document.createElement("li");
      li.innerText = obj.name;
      cartList.appendChild(li);

      //second step: dynamically adding totalPrice 
      const price = getNumFromElement("priceId");
      const netPrice = obj.price + price;
      const unit = +netPrice.toFixed(2) + " " + "TK";
      setNumToElement("priceId", unit);

      //third step: converts the "Make Purchase" button blur to visible 
      //when Total price > 0
      if (netPrice > 0) {
          purchaseBtn.style.opacity = 1;
          purchaseBtn.style.pointerEvents = "auto";
      }
      //fourth step: converts the coupon button blur to visible 
      //when totla price > 0
      if (netPrice > 200) {
          sell200Btn.style.opacity = 1;
          sell200Btn.style.pointerEvents = "auto";
      }
      //Dynamically updating discount and total price.
      //on first invocation this snippet below shouldn't run.
      //instead, line 108 should run.
      // if (++count === 1) {
      //     const couponId = document.getElementById("couponId");
      //     if (couponId.value === "SELL200") {
      //         const price = getNumFromElement("priceId");
      //         const discount = (price * 20) / 100;
      //         setNumToElement("discountId", +discount.toFixed(2));
      //         const total = price - discount;
      //         setNumToElement("totalPriceId", +total.toFixed(2));
      //     }
      // }
  }
}

/***
* Separation between handlerProducer and handler's.
*/
const item1 = clickHandlerProducer({
  name: "K. Accessories",
  price: 39.00
})
const item2 = clickHandlerProducer({
  name: "K. Accessories",
  price: 25.00
})
const item3 = clickHandlerProducer({
  name: "Home Cooker",
  price: 49.00
})
const item4 = clickHandlerProducer({
  name: "Sports Back Cap",
  price: 49.00
})
const item5 = clickHandlerProducer({
  name: "Full Jersey Set",
  price: 69.00
})
const item6 = clickHandlerProducer({
  name: "Sports cates",
  price: 169.00
})
const item7 = clickHandlerProducer({
  name: "Single Relax Chair",
  price: 185.00
})
const item8 = clickHandlerProducer({
  name: "Children play",
  price: 299.00
})
const item9 = clickHandlerProducer({
  name: "Flexible Sofa",
  price: 339.00
})

document.getElementById("sell200-btn").addEventListener("click", function (e) {
  const couponId = document.getElementById("couponId");
  if (couponId.value === "SELL200") {
      const price = getNumFromElement("priceId");
      const discount = (price * 20) / 100;
      setNumToElement("discountId", +discount.toFixed(2));
      const total = price - discount;
      setNumToElement("totalPriceId", +total.toFixed(2));
  }
})
/**
* A reminder for me: Next time i recheck this project.
* I tried to add the overlay feature with onclick = "overlay()"
* for countless times. but it didn't worked at all.
* Even ChatGPT responded my code is working well.
* But, it didn't worded.
* Then, i tried the following approach,
* it took me 5 minutes to implement it .
* it worked immidietley. 
*/


// Handler for making the overlay visible.
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
// Handler for making the overlay invisible
document.getElementById("ovarlayDisableBtn").addEventListener("click", function (e) {
  let blackOverlay = document.getElementById("overlayId");
  blackOverlay.style.display = "none";
});

