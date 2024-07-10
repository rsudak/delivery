document.getElementById('calculate-button').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('parcel-weight').value);
    const dimensions = document.getElementById('parcel-dimensions').value.split('x').map(Number);

    if (weight && dimensions.length === 3) {
        const volume = dimensions[0] * dimensions[1] * dimensions[2];
        const amount = calculateAmount(weight, volume);
        document.getElementById('amount').innerText = `Стоимость: ${amount.toFixed(2)} руб.`;
    } else {
        alert('Пожалуйста, введите корректные вес и размеры.');
    }
});

document.getElementById('delivery-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Форма успешно отправлена!');
});

function calculateAmount(weight, volume) {
    const weightCost = weight * 2; // 2 рубля за кг
    const volumeCost = volume * 0.05; // 0.05 рубля за кубический см
    return weightCost + volumeCost;
}

