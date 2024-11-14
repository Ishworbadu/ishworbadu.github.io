const notesList = document.getElementById("notes");

// Function to load notes from localStorage and display them
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notesList.innerHTML = '';
    notes.forEach(noteData => {
        const li = document.createElement("li");

        const dateDiv = document.createElement("div");
        dateDiv.className = "note-date";
        dateDiv.textContent = noteData.timestamp;  // Display the timestamp with date and time

        const noteDiv = document.createElement("div");
        noteDiv.className = "note-text";
        noteDiv.textContent = noteData.text;

        li.appendChild(dateDiv);
        li.appendChild(noteDiv);
        notesList.appendChild(li);
    });
}

// Function to add a new note with the current date and time
function addNote() {
    const noteText = document.getElementById("newNote").value.trim();
    if (noteText) {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        
        const currentDateTime = new Date().toLocaleString(); // Get current date and time with seconds
        notes.push({ text: noteText, timestamp: currentDateTime });  // Store timestamp

        localStorage.setItem("notes", JSON.stringify(notes));
        document.getElementById("newNote").value = '';  // Clear text area
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
