const userId = new URL(location.href).searchParams.get("id");
console.log(userId);

async function getUsers() {
    await fetch("https://jsonplaceholder.typicode.com/users/" + userId)
        .then(res => res.json())
        .then(user => {
            let div = document.createElement("div");

            let h4 = document.createElement("h4");
            h4.innerText = `ID: ${user.id}`;
            div.appendChild(h4);

            let pName = document.createElement("p");
            pName.innerText = `Name: ${user.name}`;
            div.appendChild(pName);

            let pUsername = document.createElement("p");
            pUsername.innerText = `Username: ${user.username}`;
            div.appendChild(pUsername);

            let pEmail = document.createElement("p");
            pEmail.innerText = `Email: ${user.email}`;
            div.appendChild(pEmail);

            let divAddress = document.createElement("h3");
            divAddress.innerText = `Address:`;
            div.appendChild(divAddress);
            let infoAboutUserAdd = document.createElement("h5");
            infoAboutUserAdd.innerHTML = `<li>Street: ${user.address.street},</li> <li>Suite: ${user.address.suite},</li> <li>City: ${user.address.city}</li> <li>Zipcode: ${user.address.zipcode},</li> <h3>Geo:</h3> <li>Lat: ${user.address.geo.lat},</li> <li>Lng: ${user.address.geo.lng}.</li>`;
            div.appendChild(infoAboutUserAdd);
            let userPhone = document.createElement("p");
            userPhone.innerText = `Phone: ${user.phone}`;
            div.appendChild(userPhone);
            let userWebsite = document.createElement("p");
            userWebsite.innerText = `Website: ${user.website}`;
            div.appendChild(userWebsite);
            let userCompanyTitle = document.createElement("h4");
            userCompanyTitle.innerText = `Company:`;
            div.appendChild(userCompanyTitle);
            let userCompany = document.createElement("p");
            userCompany.innerHTML = `<li>Name: ${user.company.name},</li> <li>CatchPhrase: ${user.company.catchPhrase},</li> <li>bs: ${user.company.bs}.</li>`;
            div.appendChild(userCompany);
            let infoPost = document.createElement("button");
            infoPost.innerText = "post of current user";
            infoPost.style.width = "90%";
            div.appendChild(infoPost);
            document.body.appendChild(div);
            infoPost.addEventListener("click", async function () {
                const posts = await fetchUserPosts(userId);
                const postDiv = document.createElement("div");
                postDiv.innerHTML = `<h3>Title:</h3>`;
                posts.forEach(post => {
                    const postP = document.createElement("p");
                    postP.innerText = post.title;
                    postDiv.appendChild(postP);
                    let btn = document.createElement("button");
                    btn.innerText = "See Full Post";
                    btn.addEventListener("click", function() {
                        window.location.href = "post-Details.html?id=" + post.userId;
                    });
                    postDiv.appendChild(btn);
                });
                document.body.appendChild(postDiv);
            });

            document.body.appendChild(postDiv);
            });

}

async function fetchUserPosts(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const userPosts = await response.json();
    return userPosts;
}

getUsers();
