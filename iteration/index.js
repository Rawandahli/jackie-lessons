var arr = [1,2,3];

var copyOfArr = arr.reduce(function(acc, num){
  console.log(acc);
  acc.push(num * 2);
  return acc;
}, [])

var copyUsingFor = [];
for(var i = 0; i<arr.length; i++){
  console.log(copyUsingFor);
  copyUsingFor.push(arr[i] * 2);
}

console.log(copyOfArr);

var products = {
  bag: "a bag",
  scarf: "a scarf",
  shoes: 'some shoes',
  hat: 'a hat'
}

var keys = Object.keys(products);
// 'bag, scarf, '
var productsList = keys.reduce(function(acc, key){
  // acc = 'bag, '
  // key = 'scarf'
  console.log(acc)

  // 'bag, scarf, '
  return acc + key + ', '
}, '')

console.log(productsList);

animalArray = [
  {
    animal: 'cat',
    sound: 'meow'
  },
  {
    animal: 'dog',
    sound: 'woof'
  },
  {
    animal: 'honeybadger',
    sound: 'angrygrowlsound'
  }
]

var reduceResult = animalArray.reduce(function(animalObject, individualAnimal){
  // acc = {}
  // obj = {
  //   animal: 'cat',
  //   sound: 'meow'
  // }

  animalObject[individualAnimal.animal] = individualAnimal.sound

  console.log(animalObject);
  // { 
  //    cat: meow,
  //    dog: woof
  // }
  return animalObject
}, {})

console.log(reduceResult)

var result = {
  cat: 'meow',
  dog: 'woof',
  honeybadger: 'angrygrowlsound'
}