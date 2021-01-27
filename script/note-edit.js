document.querySelector('#cancel-changes').addEventListener('click', () => {
  location.assign('./index.html');
});

document.querySelector('#delete-note').addEventListener('click', () => {
  console.log('delete');
});

document.querySelector('#save-changes').addEventListener('click', () => {
  console.log('save');
});
