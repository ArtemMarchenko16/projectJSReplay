const userId = new URL(location.href).searchParams.get("id");
console.log(userId);

    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
        .then(res => res.json())
        .then(value => {

            for (const post of value) {

                let div = document.createElement("div");
                div.innerHTML = `<p>PostId: ${post.postId},</p> <p>ID: ${post.id},</p>  <p>Name: ${post.name},</p>  <p>email: ${post.email}.</p> <p>Body: ${post.body}.</p> <hr>`;

                document.body.appendChild(div);
            }
        });
