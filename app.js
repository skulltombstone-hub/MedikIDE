const sendBtn =
    document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);

async function sendMessage(){

    const input =
        document.getElementById("userInput");

    const text =
        input.value.trim();

    if(!text) return;

    addMessage(text, "user");

    input.value = "";

    addMessage(
        "Consultando modelos médicos...",
        "bot"
    );

    const response =
        await analyzeSymptoms(text);

    addMessage(response, "bot");
}
