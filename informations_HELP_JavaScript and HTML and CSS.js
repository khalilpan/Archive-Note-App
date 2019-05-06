// let listNote = []

// let listNote = [{
//     name: 'gmail',
//     description: 'khalil.pan2@gmail.com - 1......9'
// }, {
//     name: 'instagram',
//     description: 'khalil.pan'
// }, {
//     name: 'minha vida',
//     description: 'marcia xuxu'
// }]

//=============================
//find and remove one item(if there was more tha one result it will just remove the first elemnt)
// let result = document.querySelector('h1')
// result.remove()

//=============================
//find and access all the elemnts
// let results = document.querySelectorAll('h5')

// results.forEach(function (item, index) {
//     console.log(item.textContent)
// })

//=============================
//adding a new elemnt to the last line of Body Tag
// let newElement = document.createElement('h3')
// newElement.textContent = "this is new Elemnts text."
// document.querySelector('body').appendChild(newElement)

//=============================
//create a new elemnt for each objects of Array and appending them on the page
// listNote.forE ach(function (item, index) {
// let newElement_h3 = document.createElement('h3')
// let newElement_h5 = document.createElement('h5')

// newElement_h3.textContent = item.name
// newElement_h5.textContent = item.description

// document.querySelector('body').appendChild(newElement_h3)
// document.querySelector('body').appendChild(newElement_h5)

// })

//=============================
//to listen for an Event, like button press
//we use # to Access the ID of the elements in HTML
// document.querySelector(`#button-create`).addEventListener(`click`, function (event) {
//     console.log("Button Clicked.")
//     //we can use event argument to access the all property of the event that just happened.
//     event.target.textContent = 'Button Clicked.11111111111'
// })

//=============================
//we can access for all the elements with the same class Name
//we use .(dot) to access the elements with the same class name
// document.querySelector('#button-remove-paragraphs').addEventListener('click', function (event) {
//     document.querySelectorAll('.para').forEach(function (item, index) {
//         item.textContent = 'test'
//     })
// })

//=============================
//to run exactly after any carachter entered in the textBox
// document.querySelector(`#input-search`).addEventListener(`input`, function (event) {
//     console.log(event)
//     console.log(event.target.value) //to access the entered value
// })


//=================filter with search box and show in the DIV tag============
// let filters = {
//     searchText: ""
// }

// const renderNotes = function (notes, filterText) {
//     let filteredNotes = notes.filter(function (item) {
//         return item.name.toLowerCase().includes(filterText.searchText.toLowerCase())
//     })

//     //to clear inside the DIV tag
//     document.querySelector('#div-note-list').innerHTML = ''

//     filteredNotes.forEach(function (item, index) {
//         let newElement = document.createElement('p')
//         newElement.textContent = item.name
//         document.querySelector('#div-note-list').appendChild(newElement)
//     })

// }


//========access the check Box=======================================
//document.querySelector('#checkBox-to-learn').addEventListener('change', function (event) {
//    console.log(event.target.checked)
//})

//===============================================
//to access the datas of DropDown elemnt
//document.querySelector('#checkBox-importance').addEventListener('change', function (event) {
//    console.log(event.target.value)
//})

//==============crud====================local data storage================================================

//how to add item to the locad storage
//localStorage.setItem('name1', 'khalil')

//how to read or access the datas that are saved in local storage data
//console.log(localStorage.getItem('name1'))

//how to delete data from local storage
//localStorage.removeItem('name1')

//to delete all the datas in local storage
//localStorage.clear()



//how to save objects as String in local storage
// const testNote = {
//     name: "test Note",
//     description: "TEST Description"
// }
// const noteJSON = JSON.stringify(testNote)
// localStorage.setItem('testNote', noteJSON)
// console.log(noteJSON)

//how to save Arrays as String in local storage
//const JSONlistNote = JSON.stringify(listNote)
// console.log(JSONlistNote)
//localStorage.setItem('JSONlistNote', JSONlistNote)
// console.log(localStorage.getItem('JSONlistNote'))



//how to convert JSON (object) to object
// const noteJSON = localStorage.getItem('testNote')
// console.log(noteJSON)
// const tempNote = JSON.parse(noteJSON)
// console.log(`note name is : ${tempNote.name} , Descrption is : ${tempNote.description}`)

//how to convert JSON (Arrays) to Array
// let JSONlistNote = localStorage.getItem('JSONlistNote')
// console.log(JSONlistNote)
// let convertedListNote = JSON.parse(JSONlistNote)
// console.log(convertedListNote)


