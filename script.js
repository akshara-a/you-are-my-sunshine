/**
 * Shows the popup with the given ID and hides all others.
 * If the id is 'popup3', and agreed is false, sets the text of the
 * element with the id 'sunshineResponse' to 'My only sunshine (you must agree 😜)',
 * otherwise sets it to 'My only sunshine 💛'.
 * @param {string} id - The id of the popup to show.
 * @param {boolean} [agreed=true] - Whether or not the user agreed.
 */

function nextPopup(id, agreed = true) {
  document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));

  if (id === 'popup3' && !agreed) {
    document.getElementById('sunshineResponse').textContent =
      'My only sunshine (you must agree 😜)';
  } else if (id === 'popup3') {
    document.getElementById('sunshineResponse').textContent =
      'My only sunshine 💛';
  }

  document.getElementById(id).classList.add('active');
}

/**
 * Hides all popups and shows the final message.
 */
function showFinal() {
  document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
  document.getElementById('final').classList.add('active');
}
