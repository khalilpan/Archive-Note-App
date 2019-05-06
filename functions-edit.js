//===========check for existing data in local storage to load=====================
listNote = LoadDataFromLocalStorage()

//loaded note to edit
let noteToEdit

//====================adding a new item to list by getting data from form=================================================
let checkedElement = document.getElementById('form-newNote')

if (checkedElement) {
    checkedElement.addEventListener('submit', function (event) {

        event.preventDefault()  //to cancel default behaviour of submit button (refreshing the page and adding some infos in the address bar)
        if (location.hash === '') {//to check if is going to save a new note or editting an existing note
            let tempNewNote = {
                id: uuidv4(),
                name: event.target.elements.nameNewNote.value,
                description: event.target.elements.descriptionNewNote.value
            }

            AddNewNote(tempNewNote)
        } else {
            noteToEdit.name = document.querySelector('#newNoteName').value
            noteToEdit.description = document.querySelector('#newNoteDescription').value

            //to save the Array in the local storage
            //localStorage.setItem('listNote', JSON.stringify(listNote))
            saveToLocalStorage()

        }
        //to clear the form
        event.target.elements.nameNewNote.value = ''
        event.target.elements.descriptionNewNote.value = ''

        location.assign(`\index.html`)
    })
}


//=========creating a go back button======================================
document.querySelector('#go-back').addEventListener('click', function (event) {
    location.assign('\index.html')
})

//to check if is going to load a wxisting note or going to create a new note
if (location.hash !== '') {
    //to get the uuid of the sended note from address bar
    const note_uuid = location.hash.substring(1)


    noteToEdit = listNote.find(function (item, index) {
        return item.id === note_uuid
    })

    if (noteToEdit === undefined) {
        location.assign('\index.html')
    }

    let deleteButtonElement = document.createElement('button')
    deleteButtonElement.textContent = 'Delete Note'
    deleteButtonElement.addEventListener('click', function () {
        if (getConfirmation('Are You Sure To Delete The Note ?')) {
            removeNote(note_uuid)
        }
    })
    document.querySelector('#form-newNote').appendChild(deleteButtonElement)

    document.querySelector('#newNoteName').value = noteToEdit.name
    document.querySelector('#newNoteDescription').value = noteToEdit.description
}




