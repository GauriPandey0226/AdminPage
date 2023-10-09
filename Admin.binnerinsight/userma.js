const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Sample database for user management
const users = [
    { id: 1, username: 'admin', role: 'admin', enabled: true },
    { id: 2, username: 'binman1', role: 'binman', enabled: true },
    { id: 3, username: 'customer1', role: 'customer', enabled: true },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware to check user roles
function checkUserRole(role) {
    return (req, res, next) => {
        const user = users.find((u) => u.username === req.body.username);
        if (!user || user.role !== role) {
            return res.status(403).json({ message: 'Access denied.' });
        }
        next();
    };
}

// Endpoint to add a new user (only accessible by admins)
app.post('/add-user', checkUserRole('admin'), (req, res) => {
    const { username, role } = req.body;
    const newUser = {
        id: users.length + 1,
        username,
        role,
        enabled: true,
    };
    users.push(newUser);
    res.json({ message: 'User added successfully.' });
});

// Endpoint to edit user details (only accessible by admins)
app.put('/edit-user/:id', checkUserRole('admin'), (req, res) => {
    const { id } = req.params;
    const { role, enabled } = req.body;
    const user = users.find((u) => u.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }
    user.role = role;
    user.enabled = enabled;
    res.json({ message: 'User updated successfully.' });
});

// Endpoint to disable a user (only accessible by admins)
app.put('/disable-user/:id', checkUserRole('admin'), (req, res) => {
    const { id } = req.params;
    const user = users.find((u) => u.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }
    user.enabled = false;
    res.json({ message: 'User disabled successfully.' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
