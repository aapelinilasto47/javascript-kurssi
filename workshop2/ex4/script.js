var confirmDialog;

confirmDialog = confirm("This page is for students only. Are you a student?");

if (confirmDialog) {
    document.write("<p>Welcome, student!</p>");
} else {
    document.write("<p>Access denied. This page is for students only.</p>");
}
