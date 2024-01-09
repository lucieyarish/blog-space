const postsContainer = document.getElementById('posts-container');
const navBar = document.getElementById('nav-bar');
const postForm = document.getElementById('post-form');

postForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(postForm);
  const postTitle = formData.get('postTitle');
  const postBody = formData.get('postBody');

  const postData = {
    title: postTitle,
    body: postBody,
  };

  console.log(postData.title);
  console.log(postData.body);
});

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
