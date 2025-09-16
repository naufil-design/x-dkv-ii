const gallery = document.querySelector(".gallery");

posts.forEach(post => {
  const span = document.createElement("span");
  span.className = "post";
  span.innerHTML = `
      <img src="${post.img}" alt="${post.title}">
      <h3>${post.title}</h3>
      <p>${post.desc}</p>`;
  gallery.appendChild(span);
});



function filterItems() {
  const input = document.getElementById('search').value.toLowerCase();
  const items = document.querySelectorAll('#list li');

  items.forEach(item => {
  const text = item.textContent.toLowerCase();
  item.style.display = text.includes(input) ? '' : 'none';
  });
}


const maxChars = 70;
const paragraphs = document.querySelectorAll("span.post > p");

paragraphs.forEach(p => {
  const fullText = p.textContent.trim();

  if (fullText.length > maxChars) {
const shortText = fullText.substring(0, maxChars) + "...";
p.textContent = shortText;

const btn = document.createElement("span");
btn.className = "toggle-btn";
btn.textContent = "Baca selengkapnya";

p.after(btn);

let expanded = false;
btn.addEventListener("click", () => {
  expanded = !expanded;
  p.textContent = expanded ? fullText : shortText;
  btn.textContent = expanded ? "Tutup" : "Baca selengkapnya";
});
  }
});