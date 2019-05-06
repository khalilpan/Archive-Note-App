//===========check for existing data in local storage to load=====================
listNote = LoadDataFromLocalStorage()
// const JSONlistNote = localStorage.getItem('listNote')

//to show the list of notes for first time
ShowTheListOfNotes(listNote, filters)

//a listener for search Box (will run with every character entered)
document.querySelector('#input-search').addEventListener('input', function (event) {
    filters.searchText = event.target.value
    ShowTheListOfNotes(listNote, filters)
})

//=========open page : edit.html =======================================
document.querySelector('#button-NewNote').addEventListener('click', function (event) {
    location.assign('\edit.html')
})

