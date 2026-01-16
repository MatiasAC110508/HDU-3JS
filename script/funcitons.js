const input = document.getElementById("input");
const addButton = document.getElementById("addButton");
const list = document.getElementById("NotesList");
const message = document.getElementById("error-message");

// Load notes from local storage on page load
window.addEventListener("load", () => {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(note => {
        const li = document.createElement("li");
        li.textContent = note;
        list.appendChild(li);

        // Add delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        li.appendChild(deleteButton);

        // Delete functionality
        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            console.log(`Deleted note: "${note}"`);

            // Update local storage
            let notes = JSON.parse(localStorage.getItem("notes")) || [];
            notes = notes.filter(n => n !== note); // elimina la nota
            localStorage.setItem("notes", JSON.stringify(notes));

            console.log(`Deleted note: "${note}"`);
        });
    });
});

// Log current notes after addition
console.log("Current notes in localStorage after addition:", JSON.parse(localStorage.getItem("notes")));

// Add note functionality
addButton.addEventListener("click", () => {
    const text = input.value.trim();

    // Input validation
    if (text === "" || text.length > 25) {
        // Console error
        console.error("Error: Cannot add empty note or note too long.");

        // User-facing error message
        message.textContent = "Error: Cannot add empty note or note too long.";
        return;
    }
    
    // Clear input and message
    input.value = "";
    message.textContent = "";

    // Create and append new list item
    const li = document.createElement("li");
    
    li.textContent = text;
    list.appendChild(li);

    console.log(`Nota agregada: "${text}"`)

    // Add delete button
    const deleteButton = document.createElement("button");
    
    deleteButton.textContent = "Delete";
    li.appendChild(deleteButton);
    
    // Delete functionality
    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        console.log(`Deleted note: "${text}"`);

        // Update localStorage
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes = notes.filter(n => n !== note); // elimina la nota
        localStorage.setItem("notes", JSON.stringify(notes));

        console.log(`Deleted note: "${note}"`);
    });
    
    // Local storage persistence
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push (text);
    localStorage.setItem("notes", JSON.stringify(notes));

    // Log current notes
    console.log("Current notes in localStorage:", notes);

});
