//=======variables=================
let listNote = []

//=================filter with search box and show in the DIV tag============
let filters = {
    searchText: ""
}

//===========check for existing data in local storage to load=====================
const LoadDataFromLocalStorage = function () {

    const JSONlistNote = localStorage.getItem('listNote')

    if (JSONlistNote !== null) {
        return JSON.parse(JSONlistNote)
    } else {
        return []
    }
}

//=================filter with search box and show in the DIV tag============
const ShowTheListOfNotes = function (notes, filterText) {
    // let filters = {
    //     searchText: ""
    // }

    let filteredNotes = notes.filter(function (item) {
        return item.name.toLowerCase().includes(filterText.searchText.toLowerCase())
    })

    //to clear inside the DIV tag
    document.querySelector('#div-note-list').innerHTML = null

    filteredNotes.forEach(function (item, index) {
        //creting one div, that we will put all the elements of one note inside it
        let newDiv = document.createElement('div')

        //creating one check box for each note in list
        let newCheckbox = document.createElement(`input`)
        newCheckbox.setAttribute(`type`, `checkbox`)

        //to create an anchor title name of every note, they will be linked to edit page
        let newElement = document.createElement('a')
        newElement.textContent = item.name
        newElement.setAttribute('href', `\edit.html#${item.id}`)

        //one button for every note to delete
        let newButton = document.createElement(`button`)
        newButton.textContent = `Delete`

        //adding a event listener for each button
        newButton.addEventListener('click', function (event) {
            removeNote(item.id)
            ShowTheListOfNotes(notes, filterText)
        })

        //adding all the items to the DIV
        newDiv.appendChild(newCheckbox)
        newDiv.appendChild(newElement)
        newDiv.appendChild(newButton)

        document.querySelector('#div-note-list').appendChild(newDiv)



        // debugger
    })
}

//===============remove a note from list=============
let removeNote = function (itemID) {
    //finding the index of specific note with uuid
    const noteIndexToDelete = listNote.findIndex(function (tempNote) { //this function will be called for each item in list
        return tempNote.id === itemID
    })

    //now delete the note from list
    if (noteIndexToDelete > -1) {
        listNote.splice(noteIndexToDelete, 1) //splice will remove item from list(start from index to delete ,second number indicate how many item should be deleted)
    }

    //refresh the list after adding new note
    ShowTheListOfNotes(listNote, filters)

    //to save the Array in the local storage
    localStorage.setItem('listNote', JSON.stringify(listNote))

}

//===============add a new note in list=============
let AddNewNote = function (noteToAdd) {

    //add new note to the list
    listNote.push(noteToAdd)

    //refresh the list after adding new note
    // ShowTheListOfNotes(listNote, filters)

    //to save the Array in the local storage
    //localStorage.setItem('listNote', JSON.stringify(listNote))
    saveToLocalStorage()

}

//to save the Array in the local storage
let saveToLocalStorage = function () {
    localStorage.setItem('listNote', JSON.stringify(listNote))
}
