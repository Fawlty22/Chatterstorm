async function newFormHandler(event) {
  event.preventDefault();

  const post_title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('input[name="post-text"]').value;

  if (post_text == '' || post_title == ''){
    alert('Make sure you leave nothing blank!')
    return
  }
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      post_title,
      post_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
