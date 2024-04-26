document.addEventListener('DOMContentLoaded', function() {
    const postButton = document.getElementById('postButton');
    const postContent = document.getElementById('postContent');
    const postsContainer = document.getElementById('posts');

    postButton.addEventListener('click', function() {
        const content = postContent.value.trim();
        if (content !== '') {
            const post = createPost(content);
            postsContainer.appendChild(post);
            postContent.value = '';
        }
    });

    function createPost(content) {
        const post = document.createElement('div');
        post.classList.add('post');

        const postContent = document.createElement('div');
        postContent.classList.add('post-content');
        postContent.textContent = content;

        const postActions = document.createElement('div');
        postActions.classList.add('post-actions');

        const postAuthor = document.createElement('span');
        postAuthor.classList.add('post-author');
        postAuthor.textContent = 'Posted by: Anonymous';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            post.remove();
        });

        postActions.appendChild(postAuthor);
        postActions.appendChild(deleteButton);

        post.appendChild(postContent);
        post.appendChild(postActions);

        return post;
    }
});
