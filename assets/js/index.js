'use strict';

//1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь (например n=4 , 1+2+3+4)


function sumOfnumber(num) {
  if(typeof num !== 'number' || isNaN(num)) {
    throw new TypeError('Incorrect data, input a number');
  }
  if(num < 0) {
    throw new RangeError('Incorrect data, number cannot be less of 0');
  }
  let sum = 0;
  for(let i = 1; i <=num; i++) {
    sum+=i;
  }
  return sum;
  };

  function summation(num) {
    if(typeof num !== 'number' || isNaN(num)) {
      throw new TypeError('Incorrect data, input a number');
    }
    if(num < 0) {
      throw new RangeError('Incorrect data, number cannot be less of 0');
    }
   return (1 + num) * num / 2;
  };

/*2.1 Создать объект client который содержит следующие свойства: имя, фамилию, пол, контактные данные, id., номер кредитной карты, уровень карты.
2.2 Создать объект банка у которого есть название и адрес.
2.3 Добавить банку свойство cardLevels, значением которого будет Мапа, связывающая возможные уровни карточки в этом банке с обьектами, в которорых хранятся свойства скидка, кешбек, кредитный лимит 
2.4 Реализовать функцию вывода на экран всей информации о клиенте, вкрлючая данные о скидке кредитном лимите и тд.*/


const creditCard = {
'gold card': {
  bankName: 'JP Morgan Chase Bank',
  name: 'golden card',
  cashback: "2%",
  discount: '10%',
  creditlimit: 10,
},
'platinum card': {
  bankName: 'JP Morgan Chase Bank',
  name: 'platinum card',
  cashback: "5%", 
  discount: '15%', 
  creditlimit: 20,
  },
  'classic card': {
    bankName: 'JP Morgan Chase Bank',
    name: 'classic card',
    cashback: "0.5%", 
    discount: '15%', 
    creditlimit: 10,
    },

};

const cardMap = new Map();
Object.keys(creditCard).forEach((key)=> {
cardMap.set(key, creditCard[key]);
});

const Bank = function(bankName, contacts) {
  this.bankName = bankName;
  this.contacts = contacts;
  this.cardLevels = cardMap;
}

  const Client = function(firstName, lastName, isMale, contacts, id, numberOfcreditCard,levelCard) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.isMale = isMale;
    this.contacts = contacts;
    this.id = id;
    this.numberOfcreditCard =numberOfcreditCard;
    this.levelCard = levelCard;

  };

  const client1 = new Client('Kite', 'Doe', false, [380992568831, 'kitedoe1@com'],1 , 4456555511114578, 'golden card');

  const client2 = new Client('Daniel', 'Rokf', true, [380985568831, 'danielrokf1@com'],2 , 5588555511114578, 'platinum card');
  
  const bank1 = new Bank('JP Morgan Chase Bank', [18008300549, '240 Greenwich Street New York, NY 10286 United States']);

function showClientCard (obj){
if(obj.levelCard === 'golden card') {
  let newValue = cardMap.get('gold card');
  obj.levelCard = newValue;
}
else if(obj.levelCard === 'platinum card'){
  let newValue = cardMap.get('platinum card');
  obj.levelCard = newValue;
}
else if(obj.levelCard === 'classic card'){
  let newValue = cardMap.get('classic card');
  obj.levelCard = newValue;
}
return obj;
};
/*
3.1 Создать числовой массив и проинициализировать его из 20+ элементов.
3.2 Вывести элементы с четными индексами
3.3 Вывести только нечетные элементы (четные числа делятся на 2 без остатка)
3.4 Вывести индексы элементов, равных нулю ( если таковых нет то добавить 1-2 для проверки)
3.5 Подсчитать количество отрицательных чисел в массиве*/

const array = new Array(1, 2, -5, 55 ,4 ,7 ,-88 ,26 ,59 ,-41 ,4 ,3 ,6 ,7 ,99 ,54 ,55 ,33 ,25 ,45, 21, 19, 27, 0);
console.log(array);

function evenIndexArray(arr) {
  const evenOnes = [];
  for(let i = 0; i < arr.length; i++)
    if(i % 2 === 0) {
      evenOnes.push(arr[i]);
    }
  return evenOnes;
}
function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
};

function oddNums(arr) {
 return arr.filter(elem => elem%2 !== 0);
}

function indexZeroElement(arr) {
  return arr.indexOf(0);
}

function sumOfNegativeNums(arr) {
  return arr.filter(elem => elem < 0).reduce((a,b) => a+b);
}
/*4 Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)*/

class Book {
  constructor(author, title, yearOfPublication, edition) {
    this.author = author;
    this.title = title;
    this.yearOfPublication = yearOfPublication;
    this.edition = edition;
  }

  static isBook(obj) {
    return obj instanceof Book;
  }
};
const book1 = new Book('Amy Webb', 'When Charley Met Emma', 2019,'Beaming Books');

class Ebook extends Book {
  constructor(author, title, yearOfPublication, edition, format, eNumber){
    super(author, title, yearOfPublication, edition);
    this.format = format;
    this.eNumber = eNumber;
  }
}

const eBook1 = new Ebook('Amy Webb', 'When Charley Met Emma', 2019,'Beaming Books','pdf', 125478);

/*Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;*/

function number(num) {
  if(typeof num !== 'number' || isNaN(num)) {
    throw new TypeError('Incorrect data, input a number');
  }
  if(num % 1 !== 0) {
   throw new TypeError('Incorrect data, input must be an integer number');
   }
  if(num < 0) {
    throw new RangeError('Incorrect data, number cannot be less of 0');
  }
  
  for(let i = 1; i <=num; i++) {
    if((i % 3 === 0) && (i % 5 === 0)){
      console.log('fizzbuzz');
    }else if(i % 3 === 0) {
      console.log('fizz');
    }else if(i % 5 === 0){
      console.log('buzz');
    }else
    console.log(i);
  }
}
/*С сервера передается обьект, имеющий следующую структуру:
const serverResponse = {
    data: {
        data: [
            {
                id: 0,
                name: 'John',
                lastName: 'Doe'
            },
            {
                id: 1,
                name: 'Jane',
                lastName: 'Doe'
            },
            {
                id: 2,
                name: 'Admin',
                lastName: 'Tiranovich'
            },
            {
                id: 3,
                name: 'User',
                lastName: 'Undefinovich'
            },
        ]
    }
}

С помощью деструктуризации:
- создать переменную users на основании массива в обьекте serverResponse
- создать отдельные переменные для 3 и 4 пользователя*/
const serverResponse = {
  data: {
      data: [
          {
              id: 0,
              name: 'John',
              lastName: 'Doe'
          },
          {
              id: 1,
              name: 'Jane',
              lastName: 'Doe'
          },
          {
              id: 2,
              name: 'Admin',
              lastName: 'Tiranovich'
          },
          {
              id: 3,
              name: 'User',
              lastName: 'Undefinovich'
          },
      ]
  }
}
const {data: {data: users}} = serverResponse;
const {data: {data: [,, user3,user4]}} = serverResponse;
// const {data: {data: [user1,user2, user3,user4]}} = serverResponse;




