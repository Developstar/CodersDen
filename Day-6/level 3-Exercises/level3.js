// Copy countries array(Avoid mutation)
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

let copiedCountries = []
for(let q=0; q<countries.length; q++){
    copiedCountries.push(countries[q])
}

copiedCountries[0] = 'Togo'
console.log(copiedCountries)
console.log(countries)


//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

const allCountries = [
    'Albania',
    'Kenya',
    'Bolivia',
    'Canada',
    'Hungary',
    'Denmark',
    'Finland',
    'Germany',
    'Ireland',
    'Japan',
    'Ethiopia'
  ]

  let copiedArray = [];
  for(let i = 0; i<allCountries.length; i++){
    copiedArray.push(allCountries[i])
  }
  console.log(copiedArray)
let sortedCountries = copiedArray.sort()
console.log(sortedCountries)



//Sort the webTechs array and mernStack array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

  let sortedWebTechs = webTechs.sort();
  console.log(sortedWebTechs)

  let sortedMernStack = mernStack.sort();
  console.log(sortedMernStack)



  //Extract all the countries containing the word 'land' from the countries array and print it as array
console.log(countries)


let countriesWithLand = []
for(let i=0; i<countries.length; i++){
    if(countries[i].includes('land')=== true){
        countriesWithLand.push(countries[i])
    }
}
console.log(countriesWithLand)
