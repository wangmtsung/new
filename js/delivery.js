// 彈出式卡片
function toggleCard(cardId) {
    var card = document.getElementById(cardId);
    var computedStyle = window.getComputedStyle(card);
    if (computedStyle.display === "none") {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
}

//購物車按鈕設定
const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card) => {
      const minusButton = card.querySelector('.minus');
      const plusButton = card.querySelector('.plus');
      const inputNum = card.querySelector('.input-num');
      const addToCartButton = card.querySelector('.btn');
    
      
      minusButton.addEventListener('click', () => {
        
        let num = parseInt(inputNum.value);
        if (num > 1) {
          num--;
          inputNum.value = num;
        }
      });
    
     
      plusButton.addEventListener('click', () => {
        
        let num = parseInt(inputNum.value);
        if (num < 10) {
          num++;
          inputNum.value = num;
        }
      });
    
    addToCartButton.addEventListener('click', () => {
     
      const productName = card.querySelector('a').textContent;
      const quantity = parseInt(inputNum.value);
    
      alert(`已經將 ${productName} 加入購物車`);
    
      inputNum.value = 1;
    });
      
    });