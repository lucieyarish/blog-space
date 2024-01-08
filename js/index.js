const postsContainer = document.getElementById('posts-container');

const renderPosts = (posts) => {
  const html = posts
    .map((post) => {
      return `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
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
