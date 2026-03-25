function getData() {
    let username = document.getElementById("username").value;

    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML = `
            <p>Name: ${data.name}</p>
            <p>Public Repos: ${data.public_repos}</p>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
        `;
    })
    .catch(error => {
        console.log("Error:", error);
    });
}
