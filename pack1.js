function afficher() {
    var ram = document.getElementById('ram').value;   
    var cpu = document.getElementById('cpu').value;



    alert(ram);
    alert(cpu);
}


document.getElementById('ram').addEventListener("change",afficher);
document.getElementById('cpu').addEventListener("change",afficher);

alert('slm')