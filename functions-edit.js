//===========check for existing data in local storage to load=====================
listNote = LoadDataFromLocalStorage()

document.querySelector('#go-back').addEventListener('click', function (event) {
    location.assign('\index.html')
})

//to check if is going to load a wxisting note or going to create a new note
if (location.hash !== '') {
    //to get the uuid of the sended note from address bar
    const note_uuid = location.hash.substring(1)


    let noteToEdit = listNote.find(function (item, index) {
        return item.id === note_uuid
    })

    console.log(noteToEdit)

    if (noteToEdit === undefined) {
        location.assign('\index.html')
    }

    document.querySelector('#newNoteName').value = noteToEdit.name
    document.querySelector('#newNoteDescription').value = noteToEdit.description
}




