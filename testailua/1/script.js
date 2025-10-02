let notes = [];

let editingNoteId = null;



function showSurprise() {
    document.body.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXR2cnE2dW1nZXh6Zncza3Z5b2g3dHRyMWpxMGhjbHpmbHBnbmsyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3orifhETYHxDcfpFHa/giphy.gif')";
    document.body.style.backgroundSize = "cover";
    alert("Yllätys! Taustalla on GIF-animaatio minusta, kun koodini ei toimi.");
    document.body.innerHTML = '<div style="text-align: center; margin-top: 20%; color: white;"><h1>Minä, kun koodini ei toimi.</h1></div>';
}


function clearNotes() {
    if (confirm("Haluatko varmasti tyhjentää kaikki muistiinpanot?")) {
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
            content: content,
            color: pickColor()
        };
    }
    else{
        notes.push({
        id: generateId(),
        title: title,
        content: content,
        color: pickColor()
    })
    }  

    saveNotes()
    renderNotes()
}

function generateId() {
    return Date.now().toString();
}

function pickColor() {
    const colorInput = document.getElementById('noteColor');
    const selectedColor = colorInput.value;
    return selectedColor;
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
        notesContainer.innerHTML = '<p style="text-align: center;">Ei muistiinpanoja saatavilla. Klikkaa "Lisää muistiinpano" luodaksesi uuden.</p><br>';
        return;
    }

    

    notesContainer.innerHTML = notes.map(note => `
        <div class="note-card" style="background-color: ${note.color};"><button class="edit-btn" onclick="openNoteDialog('${note.id}')">✏️</button><button class="close-btn" onclick="deleteNote('${note.id}')">X</button><h3 class="note-title">${note.title}</h3><p class="note-content">${note.content}</p></div>`).join('');
}

function openNoteDialog(noteId) {
    const dialog = document.getElementById('noteDialog');
    const titleInput = document.getElementById('noteTitle');
    const contentInput = document.getElementById('noteContent');
    
    if (noteId) {
        // Edit existing note
        const noteToEdit = notes.find(note => note.id === noteId);
        editingNoteId = noteId;
        document.getElementById("dialogTitle").textContent = "Muokkaa muistiinpanoa";
        titleInput.value = noteToEdit.title;
        contentInput.value = noteToEdit.content;
        document.getElementById('noteColor').value = noteToEdit.color || '#ffffff';


    } else {
        // New note
        editingNoteId = null;
        document.getElementById("dialogTitle").textContent = "Lisää muistiinpano";
        titleInput.value = '';
        contentInput.value = '';
        document.getElementById('noteColor').value = '#ffffff';

        

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

