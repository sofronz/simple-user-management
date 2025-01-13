async function fetchUsers() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error when catching API:', error);
    }
}

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

fetchUsers();