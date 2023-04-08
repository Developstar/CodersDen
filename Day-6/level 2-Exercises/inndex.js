// Develop a small script which generate any number of characters random id:
// fe3jo1gl124g,    xkqci4utda1lmbelpkm03rba

let n = Math.floor(Math.random()*(25-5+1)) + 5
let characters = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',1,2,3,4,5,6,7,8,9]
let idInArray = []
for(let i = 1; i<= n; i++){
    let randomIndex = Math.floor(Math.random()*26)
    let each = characters[randomIndex]
    idInArray.push(each)  
}

console.log(idInArray)
let randomId = idInArray.join('')
console.log(randomId)


// Write a script which generates a random hexadecimal number.

let m = Math.floor(Math.random()*(7-5+1)) + 7
let char = ['a','c', 'b', 'd','e','g','h','i','j','k','l','f','m','n','o','p','q',1,2,3,4,5,6,7,8,9]
let idArrayy = []
for(let i = 1; i<= m; i++){
    let randomI = Math.floor(Math.random()*26)
    let each = char[randomI]
    idArrayy.push(each)  
}

idArrayy[0] = "#"
console.log(idArrayy)

let ranId = idArrayy.join('')
console.log(ranId)


// Write a script which generates a random rgb color number. rgb(240,180,80)

//get the three random numbers 

let loopResult = []
for(let p=1; p<=3; p++){
    let randomNumm = Math.floor(Math.random()*256)
    console.log(randomNumm)
    loopResult.push(randomNumm)
    
}
console.log(loopResult)
let result = `rgb(${loopResult})`
console.log(result)



const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  
//Using the above countries array, create the following new array
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

//get the index of countries in Array
// console.log(countries.length)

const newArry = []

for(let t=0; t< countries.length; t++){
  newArry.push(countries[t].toUpperCase())
}
console.log(newArry)


// Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

let length = []
for(let q = 0; q<countries.length; q++){
length.push(countries[q].length)
}

console.log(length)


//Use the countries array to create the following array of arrays:

// [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]


console.log(countries)

let arrayOfArray = []
for(let w=0; w<countries.length; w++){
 arrayOfArray.push([countries[w],((countries[w]).slice(0,3)).toUpperCase(), countries[w].length])
}
console.log(arrayOfArray)