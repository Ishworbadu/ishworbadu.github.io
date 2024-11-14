const notesList = document.getElementById("notes");

// Function to load notes from localStorage and display them
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notesList.innerHTML = '';
    notes.forEach(noteData => {
        const li = document.createElement("li");
        const dateDiv = document.createElement("div");
        dateDiv.className = "note-date";
        dateDiv.textContent = noteData.date;
        
        const noteDiv = document.createElement("div");
        noteDiv.className = "note-text";
        noteDiv.textContent = noteData.text;

        li.appendChild(dateDiv);
        li.appendChild(noteDiv);
        notesList.appendChild(li);
    });
}

// Function to add a new note
function addNote() {
    const noteText = document.getElementById("newNote").value.trim();
    if (noteText) {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        const currentDate = new Date().toLocaleDateString(); // Get the current date
        notes.push({ text: noteText, date: currentDate });
        localStorage.setItem("notes", JSON.stringify(notes));
        document.getElementById("newNote").value = '';
        loadNotes();
    }
}

// Function to reset notes
function resetNotes() {
    localStorage.removeItem("notes");
    loadNotes();
}

// Load notes when the page loads
window.onload = loadNotes;
