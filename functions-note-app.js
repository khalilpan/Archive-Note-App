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

    let filteredNotes = notes.filter(function (item) {
        return item.name.toLowerCase().includes(filterText.searchText.toLowerCase())
    })

    //to clear inside the DIV tag
    document.querySelector('#div-note-list').innerHTML = null

    filteredNotes.forEach(function (item, index) {
        //creting one div, that we will put all the elements of one note inside it
        let newDiv = document.createElement('div')
        newDiv.className = 'item-note'
        newDiv.style.border = '1px solid black';
        newDiv.style.margin = '10px';




        //creating one check box for each note in list
        let newCheckbox = document.createElement(`input`)
        newCheckbox.setAttribute(`type`, `checkbox`)

        //to create an anchor title name of every note, they will be linked to edit page
        let newElement = document.createElement('a')
        newElement.textContent = item.name
        newElement.setAttribute('href', `\edit.html#${item.id}`)

        //one button for every note to delete
        let buttondelete = document.createElement(`button`)
        buttondelete.textContent = `Delete`
        buttondelete.className = 'deleteButtons'
        buttondelete.id = 'item-delete-button'


        // buttondelete.style.display = 'flex'
        // buttondelete.style.alignItems = 'right'
        // buttondelete.style.justifyContent = 'right'
        // buttondelete.style.display = 'block-'
        // buttondelete.style.margin = '0'


        //adding a event listener for each button
        buttondelete.addEventListener('click', function (event) {
            if (getConfirmation('Are You Sure To Delete The Note ?')) {
                removeNote(item.id)
                ShowTheListOfNotes(notes, filterText)
            }
        })


        //i am using span to put the delete button inside and do float='right' to show the button in right part of DIV
        let spanelemnt = document.createElement('span')
        spanelemnt.appendChild(buttondelete)
        spanelemnt.style.cssFloat = 'right'


        //adding all the items to the DIV
        newDiv.appendChild(newCheckbox)
        newDiv.appendChild(newElement)
        newDiv.appendChild(spanelemnt)

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
        showWarningMessage(`Note Deleted.`)
    }

    //refresh the list after adding new note
    ShowTheListOfNotes(listNote, filters)

    //to save the Array in the local storage
    //localStorage.setItem('listNote', JSON.stringify(listNote))
    saveToLocalStorage()

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


//===========confirmation message=============
let getConfirmation = function (ConfirmMessage) {
    var retVal = confirm(ConfirmMessage);
    if (retVal == true) {
        // document.write("CONFIRMED");
        return true;
    }
    else {
        // document.write("CONFIRM CANCELED");
        return false;
    }
}

//===========show warning message===========
function showWarningMessage(warningMessage) {
    alert(warningMessage)
}
