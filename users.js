fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement("div");
            div.innerText = `
                ID: ${user.id}  
                Name: ${user.name}
            `;

            let btn = document.createElement("button");
            btn.innerText = "Details";
            btn.addEventListener("click", function() {
                window.location.href = "user-details.html?id=" + user.id;
            });

            div.appendChild(btn);
            document.body.appendChild(div);
        }
    });


