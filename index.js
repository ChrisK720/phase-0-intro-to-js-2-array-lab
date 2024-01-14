// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}
destructivelyAppendCat('Ralph')

function destructivelyPrependCat(name){
    cats.unshift(name)
}
destructivelyPrependCat("Bob")
function destructivelyRemoveLastCat() {
    cats.pop()
}
destructivelyRemoveLastCat()
function destructivelyRemoveFirstCat(){
    cats.shift()
}
destructivelyRemoveFirstCat()
 function appendCat(name) {
    const newArr = [...cats]
    newArr.push(name)
    return newArr

 }
 appendCat("Broom")

function prependCat(name){
   const newArr = [...cats]
   newArr.unshift(name)
   return newArr
}
prependCat("Arnold")

function removeLastCat(){
    const newArr = [...cats]
    newArr.pop()
    return newArr
}
removeLastCat()

function removeFirstCat(){
    const newArr = [...cats]
    newArr.shift()
    return newArr
}
removeFirstCat()