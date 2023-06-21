let myBalance = 4500;


const leftFirst = document.getElementById('leftFirstLink');
const leftSecond = document.getElementById('leftSecondLink');
const leftThird = document.getElementById('leftThirdLink');
const paragraphsA = document.getElementById('aaa');
const paragraphsB = document.getElementById('bbb');
const paragraphsC = document.getElementById('ccc');
const showBalance1 = document.getElementById('showBalanceId');
const cancel = document.getElementById('cancel');
const cashInAmount = document.getElementById('textCashInAmount');
const cashOutAmount = document.getElementById('textCashOutAmount');


    leftFirst.addEventListener('click', (event) => {
        event.preventDefault();
        paragraphsA.style.display = 'none';
        paragraphsB.style.display = 'none';
        paragraphsC.style.display = 'none';
        showBalance1.style.display = 'block';
        leftFirst.style.display = 'none';
        leftSecond.style.display = 'none';
        leftThird.style.display = 'none';
      });
      leftSecond.addEventListener('click', (event) => {
        event.preventDefault();
        paragraphsA.style.display = 'none';
        paragraphsB.style.display = 'none';
        paragraphsC.style.display = 'none';
        showBalance1.style.display = 'none';
        cashInAmount.style.display = 'block';
        cashOutAmount.style.display = 'none';
        leftFirst.style.display = 'none';
        leftSecond.style.display = 'none';
        leftThird.style.display = 'none';
      });
      leftThird.addEventListener('click', (event) => {
        event.preventDefault();
        paragraphsA.style.display = 'none';
        paragraphsB.style.display = 'none';
        paragraphsC.style.display = 'none';
        showBalance1.style.display = 'none';
        cashOutAmount.style.display = 'block';
        leftFirst.style.display = 'none';
        leftSecond.style.display = 'none';
        leftThird.style.display = 'none';
      });
    cancel.addEventListener('click', (event) => {
        event.preventDefault();
        paragraphsA.style.display = 'block';
        paragraphsB.style.display = 'block';
        paragraphsC.style.display = 'block';
        showBalance1.style.display = 'none';
        cashInAmount.style.display = 'none';
        cashOutAmount.style.display = 'none';
        leftFirst.style.display = 'block';
        leftSecond.style.display = 'block';
        leftThird.style.display = 'block';
      });