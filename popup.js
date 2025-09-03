document.querySelectorAll('.involvement-card').forEach(function(card) {
  card.addEventListener('click', function() {
    var img = card.querySelector('img');
    var imgHtml = img ? img.outerHTML : '';
    var title = card.querySelector('.activity-title')?.textContent || '';
    var desc = card.querySelector('p')?.textContent || '';
    document.getElementById('modal-image').innerHTML = imgHtml;
    document.getElementById('modal-details').innerHTML = `
      <h2 style="margin-top:0;">${title}</h2>
      <p style="margin-top:0.5rem;">${desc}</p>
    `;
    document.getElementById('popup-modal').style.display = 'flex';
  });
});

document.querySelector('.close-btn').onclick = function() {
  document.getElementById('popup-modal').style.display = 'none';
};

window.onclick = function(event) {
  var modal = document.getElementById('popup-modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

document.querySelectorAll('nav a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.querySelectorAll('nav a').forEach(function(l) {
      l.classList.remove('active');
    });
    this.classList.add('active');
  });
});