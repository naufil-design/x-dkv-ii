const gallery = document.querySelector(".container");

posts.forEach(post => {
  const span = document.createElement("span");
  span.className = "post";
  span.innerHTML = `
    <a href="${post.link}">
      <img src="${post.img}" alt="${post.title}">
      <h3>${post.title}</h3>
      <p>${post.desc}</p>
    </a>
  `;
  gallery.appendChild(span);
});