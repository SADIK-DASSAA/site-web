document.addEventListener('DOMContentLoaded',function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalprice = document.getElementById('totalPrice');

    checkboxes.forEach(function(checkbox){
        checkbox.addEventListener('change',function(){
            let total = 0;
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    total += parseInt(checkbox.getAttribute('data-price'));
                }
            });
            totalprice.textContent = 'Total: $' + total;
        });
    });
});