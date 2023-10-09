// Sample complaints data (replace with data from your database)
const complaintsData = [
    { id: 1, severity: 'low', location: 'Locality A', complaint: 'Trash not collected on time.' },
    { id: 2, severity: 'medium', location: 'Locality B', complaint: 'Overflowing bins.' },
    { id: 3, severity: 'high', location: 'Locality C', complaint: 'Trash not collected for a week.' }
];

// Function to display complaints
function displayComplaints() {
    const complaintsList = document.getElementById('complaints-list');
    complaintsList.innerHTML = '';

    complaintsData.forEach(complaint => {
        const complaintItem = document.createElement('div');
        complaintItem.classList.add('complaint-item');
        complaintItem.innerHTML = `
            <h3>Complaint #${complaint.id}</h3>
            <p><strong>Severity:</strong> ${complaint.severity}</p>
            <p><strong>Location:</strong> ${complaint.location}</p>
            <p><strong>Complaint:</strong> ${complaint.complaint}</p>
        `;
        complaintsList.appendChild(complaintItem);
    });
}

// Event listener for complaint submission
document.getElementById('complaint-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Collect form data
    const severity = document.getElementById('severity').value;
    const location = document.getElementById('location').value;
    const complaintText = document.getElementById('complaint').value;

    // Add the new complaint to the complaintsData array (in a real system, this would be saved to a database)
    const newComplaint = {
        id: complaintsData.length + 1,
        severity: severity,
        location: location,
        complaint: complaintText
    };
    complaintsData.push(newComplaint);

    // Display the updated list of complaints
    displayComplaints();

    // Reset the form fields
    document.getElementById('severity').value = 'low';
    document.getElementById('location').value = '';
    document.getElementById('complaint').value = '';
});

// Display initial list of complaints
displayComplaints();
