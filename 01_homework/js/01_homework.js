//Base
const priceAmericano = 15.678;
const priceFrappe = 123.965;
const priceLatte = 90.2345;


const maxPrice = Math.max(priceAmericano, priceFrappe, priceLatte);
console.log(`Максимальна ціна: ${maxPrice}`);


const minPrice = Math.min(priceAmericano, priceFrappe, priceLatte);
console.log(`Мінімальна ціна: ${minPrice}`);


const getSumPrices = priceLatte + priceAmericano + priceFrappe;
console.log(`Вартість усіх товарів: ${getSumPrices}`);


const sumRoundingDownPrices = Math.floor(priceAmericano) + Math.floor(priceFrappe) + Math.floor(priceLatte);
console.log(`Сума округлень в меншу сторону: ${sumRoundingDownPrices}`);


const sumRoundingUpPrices = Math.round(getSumPrices / 100) * 100;
console.log(`Cума товарів округлена до сотень ${sumRoundingUpPrices}`);


const pair = sumRoundingDownPrices % 2 == 0;
console.log(`Чи є округлена сума всіх товарів парним числом?  ${pair}`);

let cash = 500;
const rest = +(cash - getSumPrices).toFixed(2);
console.log(`Якщо клієнт платить 500 грн, решта - ${rest}`);


const averageValue = +(getSumPrices / 3).toFixed(2);
console.log(`Cереднє значення цін, округлене до другого знаку після коми: ${averageValue}`);


const discount = Math.floor(Math.random() * 101);

const pay = +((Math.random() * getSumPrices) + minPrice).toFixed(2);


const amountPaid = +(pay - (pay * (discount / 100))).toFixed(2);
console.log(`Замовлення на суму: ${pay} Cума до сплати враховуючи знижку ${discount}% cклала - ${amountPaid} `);


const profit = pay / 2;
const netProfit = +(profit - pay * (discount / 100)).toFixed(2);
console.log(`Чистий прибуток склав: ${netProfit}`);

//Advanced
document.writeln(`
<b>Advanced</b> <br>
Максимальна ціна за товар: ${maxPrice} <br>
Мінімальна ціна за товар: ${minPrice} <br>
Вартість усіх товарів склала: ${getSumPrices} <br>
Сума округлень цін на товар в меншу сторону склала: ${sumRoundingDownPrices} <br>
Cума цін товарів, яка округлена до сотень ${sumRoundingUpPrices} <br>
Чи є округлена сума всіх товарів парним числом? Відповідь:  ${pair} <br>
Якщо клієнт платить 500 грн - решта складе: ${rest} <br>
Cереднє значення цін, округлене до другого знаку після коми: ${averageValue} <br>
<b>Якщо замовлення на суму: ${pay}, то  сума до сплати, враховуючи знижку ${discount}%, <br>
cклала - ${amountPaid} . Чистий прибуток буде становити: ${netProfit} </b> <br>

`);
