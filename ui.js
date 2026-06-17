function addMessage(text, type){

    const chatBox =
        document.getElementById("chatBox");

    const div =
        document.createElement("div");

    div.classList.add("message");
    div.classList.add(type);

    div.innerText = text;

    chatBox.appendChild(div);

    chatBox.scrollTop =
        chatBox.scrollHeight;
}
