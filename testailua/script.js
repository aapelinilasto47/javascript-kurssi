let notes = [];

function clearNotes() {
    if (confirm("Are you sure you want to clear all notes?")) {
        notes = [];
        saveNotes();
        renderNotes();
    }
}

function loadNotes() {
    const savedNotes = localStorage.getItem('quickNotes');
    return savedNotes ? JSON.parse(savedNotes) : [];
}


function saveNote(event) {
    event.preventDefault();

    const title = document.getElementById('noteTitle').value.trim();
    const content = document.getElementById('noteContent').value.trim();

    notes.unshift({
        id: generateId(),
        title: title,
        content: content
    })

    saveNotes()
}

function generateId() {
    return Date.now().toString();
}



function saveNotes() {
    localStorage.setItem('quickNotes', JSON.stringify(notes))

}

function renderNotes() {
    const notesContainer = document.getElementById('notesContainer');

    if(notes.length === 0) {
        notesContainer.innerHTML = '<p style="text-align: center;">No notes available. Click "Add Note" to create one.</p><br>';
        return;
    }

    

    notesContainer.innerHTML = notes.map(note => `
        <div class="note-card"><h3 class="note-title">${note.title}</h3><p class="note-content">${note.content}</p></div>`).join('');
}

function openNoteDialog() {
    const dialog = document.getElementById('noteDialog');
    const titleInput = document.getElementById('noteTitle');
    const contentInput = document.getElementById('noteContent');
    
    dialog.showModal()
    titleInput.focus()

}

function closeNoteDialog() {
    const dialog = document.getElementById('noteDialog');
    dialog.close();
    
}

document.addEventListener('DOMContentLoaded', function() {

    notes = loadNotes()

    renderNotes()

    document.getElementById('noteForm').addEventListener('submit', function(event) {
        saveNote(event);
        closeNoteDialog();
        renderNotes();
        this.reset();
    });


    document.getElementById('noteDialog').addEventListener('click', function(event) {
        if (event.target === this) {
            closeNoteDialog();
        }
    });
    });
