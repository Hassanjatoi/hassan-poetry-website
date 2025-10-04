// 🌈 Gradient backgrounds for hero and cards
const heroGradients = [
  "linear-gradient(to right, #ffecd2, #fcb69f)",
  "linear-gradient(to right, #c2e9fb, #a1c4fd)",
  "linear-gradient(to right, #d4fc79, #96e6a1)",
  "linear-gradient(to right, #fbc2eb, #a6c1ee)",
  "linear-gradient(to right, #fdfbfb, #ebedee)"
];

const cardGradients = [
  "linear-gradient(to right, #fef3c7, #fde68a)",
  "linear-gradient(to right, #fcd34d, #fbbf24)",
  "linear-gradient(to right, #f59e0b, #f97316)",
  "linear-gradient(to right, #fdba74, #fb923c)",
  "linear-gradient(to right, #fca5a5, #f87171)"
];

let heroIndex = 0;
let cardIndex = 0;

function changeHeroBackground() {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.background = heroGradients[heroIndex];
    heroIndex = (heroIndex + 1) % heroGradients.length;
  }
}

function changeCardBackgrounds() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.style.background = cardGradients[cardIndex];
  });
  cardIndex = (cardIndex + 1) % cardGradients.length;
}

setInterval(() => {
  changeHeroBackground();
  changeCardBackgrounds();
}, 2000);

// ❤️ Like button toggle and Firebase save
function toggleLike(button) {
  button.classList.toggle("bg-yellow-700");
  button.innerText = button.classList.contains("bg-yellow-700") ? "💖 Liked" : "❤️ Like";
  const title = button.closest(".card").querySelector("h3").textContent;
  if (typeof saveLike === "function") {
    saveLike(title);
  }
}

// 🔽 Read More toggle
function toggleReadMore(id) {
  const element = document.getElementById(id);
  const btn = document.getElementById(id + "-btn");
  if (element.classList.contains("line-clamp-2")) {
    element.classList.remove("line-clamp-2");
    btn.innerText = "🔼 Read Less";
  } else {
    element.classList.add("line-clamp-2");
    btn.innerText = "🔽 Read More";
  }
}

// 📋 Copy link to clipboard
function copyLink() {
  const url = "https://hassanjatoi.github.io/hassanali/";
  navigator.clipboard.writeText(url).then(() => {
    alert("✅ Link copied to clipboard!");
  });
}

// 📝 Submit poetry to Firebase
function submitPoem() {
  const title = document.getElementById("poemTitle").value.trim();
  const content = document.getElementById("poemContent").value.trim();
  const status = document.getElementById("status");

  if (!title || !content) {
    status.textContent = "Please fill in both fields.";
    status.className = "text-red-600";
    return;
  }

  if (typeof savePoem === "function") {
    savePoem(title, content)
      .then(() => {
        status.textContent = "✅ Poem published successfully!";
        status.className = "text-green-600";
        document.getElementById("poemTitle").value = "";
        document.getElementById("poemContent").value = "";
      })
      .catch((e) => {
        status.textContent = "❌ Error saving poem.";
        status.className = "text-red-600";
        console.error("Error:", e);
      });
  } else {
    status.textContent = "❌ Firebase not connected.";
    status.className = "text-red-600";
  }
}
