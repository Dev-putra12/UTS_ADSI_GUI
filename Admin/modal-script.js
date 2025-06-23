
// modal-script.js
function openModal() {
  document.getElementById('modalView').style.display = 'block';
}

function closeModal() {
  document.getElementById('modalView').style.display = 'none';
}

window.addEventListener('click', function(e) {
  const modal = document.getElementById('modalView');
  if (e.target == modal) modal.style.display = 'none';
});
