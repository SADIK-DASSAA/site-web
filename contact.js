function message() {
  const nom = document.getElementById('inpNom').value;
  const messg = document.getElementById('inpMes').value;
  if (messg > ' '  &&  nom > ' ') {
    alert('message envoyer avec succsès')
  }
}
