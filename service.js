document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[type="radio"]');
    const totalPrice = document.getElementById('totalPrice');
    
    radios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            let total = 0;
            radios.forEach(function(radio) {
                if (radio.checked) {
                    total += parseFloat(radio.getAttribute('data-price'));
                }
            });
            totalPrice.textContent = 'Total: ' + total + ' DH/H';
        });
    });
});
