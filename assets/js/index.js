let userList = [];

// Fetch data from API
async function fetchUsers() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        userList = await response.json();
        displayUsers(userList);
    } catch (error) {
        console.error('Error when catching data:', error);
    }
}

// Display User Data in HTML
function displayUsers(users) {
    const userList = document.getElementById('su-table-body');
    userList.innerHTML = ''; 
    users.forEach(user => {
        const userElement = document.createElement('tr');

        userElement.innerHTML = `
            <td>
               ${user.id}
            </td>
            <td>
                <a href="./detail.html?id=${user.id}" class="su-link">
                    <span>
                        ${user.name}
                    </span>
                    <br>
                    <span class="badge text-bg-secondary mt-1">
                        ${user.username}
                    </span>
                </a>
            </td>
            <td>
                ${user.email}
            </td>
            <td>
                ${user.phone}
            </td>
            <td>
                ${user.company.name}
            </td>
            <td>
                ${user.website}
            </td>
        `;
        userList.appendChild(userElement);
    });
}

// Search data
document.getElementById('su-search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredUsers = userList.filter(user => 
        user.name.toLowerCase().includes(searchTerm) || 
        user.email.toLowerCase().includes(searchTerm)
    );

    displayUsers(filteredUsers);
});

fetchUsers();