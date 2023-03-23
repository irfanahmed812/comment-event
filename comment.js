document.getElementById('click-post').addEventListener('click', function () {
    const textInput = document.getElementById('new-comment');
    const text = textInput.value;

    const p = document.createElement('p');
    p.innerText = text;

    const commentBox = document.getElementById('comment-box');
    commentBox.appendChild(p);
    textInput.value = '';
})