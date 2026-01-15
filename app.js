// PRELOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 1200);
});

// CHAT TOGGLE
const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
chatToggle.onclick = () => chatBox.classList.toggle("hidden");

// CHAT LOGIC (mock)
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendChat = document.getElementById("sendChat");

sendChat.onclick = () => {
  const msg = chatInput.value.trim();
  if (!msg) return;

  appendMessage("You", msg);
  chatInput.value = "";

  setTimeout(() => {
    appendMessage("HER", "I’m here to guide you 💖");
  }, 800);
};

function appendMessage(author, text) {
  const div = document.createElement("div");
  div.className = "mb-2";
  div.innerHTML = `<strong>${author}:</strong> ${text}`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15
  }
);

reveals.forEach(el => observer.observe(el));
