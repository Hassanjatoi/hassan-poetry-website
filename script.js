// Gradient backgrounds for hero and cards
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

// Like button toggle
function toggleLike(btn) {
  btn.classList.toggle("liked");
  btn.innerText = btn.classList.contains("liked") ? "💖 Liked" : "❤️ Like";
}

// Read More toggle
function toggleReadMore(id) {
  const content = document.getElementById(id);
  const btn = document.getElementById(id + "-btn");
  content.classList.toggle("expanded");
  btn.innerText = content.classList.contains("expanded") ? "🔼 Read Less" : "🔽 Read More";
}

// Copy link to clipboard
function copyLink() {
  navigator.clipboard.writeText("https://hassanjatoi.github.io/hassanali/");
  alert("✅ Link copied to clipboard!");
}