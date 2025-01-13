function getUserIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

async function fetchUserDetail(userId) {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const user = await response.json();
        displayUserDetail(user);
    } catch (error) {
        console.error('Error when catching data:', error);
    }
}


function displayUserDetail(user) {
    const userDetail = document.getElementById('su-card-detail');
    userDetail.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">
                ${user.name}
            </h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
                <span class="badge text-bg-secondary mt-1">
                    ${user.username}
                </span>
            </h6>

            <ul class="list-group mt-4">
                <li class="list-group-item">
                    <i class="bi bi-mailbox"></i>
                    <span>
                        ${user.email}
                    </span>
                </li>
                <li class="list-group-item">
                    <i class="bi bi-phone"></i>
                    <span>
                        ${user.phone}
                    </span>
                </li>
                <li class="list-group-item">
                    <i class="bi bi-house-door"></i>
                    <span>
                        ${user.address.street}
                        ${user.address.suit}
                        ${user.address.city}
                        ${user.address.zipcode}
                    </span>
                </li>
                <li class="list-group-item">
                    <i class="bi bi-building"></i>
                    <span>
                        ${user.company.name}
                    </span>
                </li>
            </ul>

            <div class="d-flex mt-4">
                <a href="${user.website}" class="su-btn btn btn-primary" target="_blank">
                    Website
                </a>
                <a href="./index.html" class="su-btn btn btn-danger ms-auto">
                    Back
                </a>
            </div>
        </div>
    `;
}


const userId = getUserIdFromUrl();

if (userId) {
    fetchUserDetail(userId);
} else {
    document.getElementById('user-detail').innerText = 'ID pengguna tidak ditemukan.';
}