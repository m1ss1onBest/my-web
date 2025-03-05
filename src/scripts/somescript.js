fetch('comments.json')
    .then(response => response.json())
    .then(data => {
        const usernames = data.map(user => user.username);
        const messages = data.map(user => user.message)

        // console.log(usernames);
        // console.log(messages);
        const list = document.getElementById("comment-list");
        for (let i = 0; i < usernames.length; i++) {
            list.append(create_comment_element(usernames[i], messages[i]));
        }
    });

function create_comment_element(username, message) {
    const li = document.createElement("li");
    li.classList.add("list__item");

    const list_uname = document.createElement("p");
    list_uname.classList.add("item__username");
    list_uname.textContent = username;

    const list_message = document.createElement("p");
    list_message.classList.add("item__message");
    list_message.textContent = message;

    li.append(list_uname);
    li.append(list_message);

    return li;
}
