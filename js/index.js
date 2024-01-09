const postsContainer = document.getElementById('posts-container');
const navBar = document.getElementById('nav-bar');

const renderNavBar = () => {
  const html = `
        <h1 class="title">BlogSpace</h1>
    `;

  navBar.innerHTML = html;
};

renderNavBar();

const renderPosts = (posts) => {
  const html = posts
    .map((post) => {
      return `
        <div class="post-container">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-text">${post.body}</p>
        </div>
    `;
    })
    .join('');

  postsContainer.innerHTML += html;
};

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {
    const posts = data.slice(0, 5);
    renderPosts(posts);
  });
