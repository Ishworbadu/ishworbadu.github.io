const notesList = document.getElementById("notes");

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notesList.innerHTML = '';
    notes.forEach(note => {
        const li = document.createElement("li");
        li.textContent = note;
        notesList.appendChild(li);
    });
}

function addNote() {
    const note = document.getElementById("newNote").value.trim();
    if (note) {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(note);
        localStorage.setItem("notes", JSON.stringify(notes));
        document.getElementById("newNote").value = '';
        loadNotes();
    }
}

// Load notes when the page loads
window.onload = loadNotes;
