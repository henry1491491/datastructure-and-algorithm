import {LinkedList} from './linkedList.js'

let createList = new LinkedList()

for(let i=0; i < 5; i++) {
  createList.append(i)
}

createList.append(5)
createList.insert(1,'a')
createList.removeAt(2)

let array = createList.toString().split('').join('-')
console.log(array);