let notes = [];

let editingNoteId = null;

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


    if(editingNoteId) {
        const noteIndex = notes.findIndex(note => note.id === editingNoteId);
        notes[noteIndex] = {
            ...notes[noteIndex],
            title: title,
            content: content
        };
    }
    else{
        notes.push({
        id: generateId(),
        title: title,
        content: content
    })
    }  

    saveNotes()
    renderNotes()
}

function generateId() {
    return Date.now().toString();
}


function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    saveNotes();
    renderNotes();
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
        <div class="note-card"><button class="edit-btn" onclick="openNoteDialog('${note.id}')">✏️</button><button class="close-btn" onclick="deleteNote('${note.id}')">🗑️</button><h3 class="note-title">${note.title}</h3><p class="note-content">${note.content}</p></div>`).join('');
}

function openNoteDialog(noteId) {
    const dialog = document.getElementById('noteDialog');
    const titleInput = document.getElementById('noteTitle');
    const contentInput = document.getElementById('noteContent');
    
    if (noteId) {
        // Edit existing note
        const noteToEdit = notes.find(note => note.id === noteId);
        editingNoteId = noteId;
        document.getElementById("dialogTitle").textContent = "Edit Note";
        titleInput.value = noteToEdit.title;
        contentInput.value = noteToEdit.content;


    } else {
        // New note
        editingNoteId = null;
        document.getElementById("dialogTitle").textContent = "Add Note";
        titleInput.value = '';
        contentInput.value = '';


    }

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

