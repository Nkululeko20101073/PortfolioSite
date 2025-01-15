const responses = [
    "Hello! How can I assist you today?",
    "Is there anything specific you'd like to know?",
    "Feel free to ask me about my portfolio, skills, or anything else!"
];

function toggleChat() {
    const body = document.getElementById("chatbot-body");
    const messagesDiv = document.getElementById("messages");

    // Toggle visibility of chatbot body
    if (body.style.display === "none" || body.style.display === "") {
        messagesDiv.innerHTML = ""; // Clear previous messages (optional)
        body.style.display = "block"; // Show chatbot body
    } else {
        body.style.display = "none"; // Hide chatbot body
    }
}

function sendMessage(event) {
    if (event) event.preventDefault(); // Prevent form submission behavior

    const input = document.getElementById("user-input");
    const messagesDiv = document.getElementById("messages");
    const userMessage = input.value.trim();

    if (userMessage) {
        // Display the user's message
        messagesDiv.innerHTML += `<div class="message-user">You: ${userMessage}</div>`;

        // Generate a response based on keywords
        let botResponse = "";

        if (userMessage.toLowerCase().includes("about")) {
            botResponse = `I'm Nkululeko, an aspiring Cybersecurity Analyst with a Diploma in Software Development. Learn more <a href="about.html">here</a>.`;
        } else if (userMessage.toLowerCase().includes("skills")) {
            botResponse = `Check out my skills and portfolio <a href="skills.html">here</a>.`;
        } else if (userMessage.toLowerCase().includes("contact")) {
            botResponse = `You can get in touch with me via the <a href="contact.html">Contact page</a>.`;
        } else {
            botResponse = responses[Math.floor(Math.random() * responses.length)];
        }

        // Display the chatbot's response
        messagesDiv.innerHTML += `<div class="message-chatbot">Chatbot: ${botResponse}</div>`;

        // Scroll to the latest message
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        // Clear the input field
        input.value = "";
    }
}


