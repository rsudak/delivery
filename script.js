document.getElementById('calculate-button').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('parcel-weight').value);
    const dimensions = document.getElementById('parcel-dimensions').value.split('x').map(Number);

    if (weight && dimensions.length === 3) {
        const volume = dimensions[0] * dimensions[1] * dimensions[2];
        const amount = calculateAmount(weight, volume);
        document.getElementById('amount').innerText = `Amount: $${amount.toFixed(2)}`;
    } else {
        alert('Please enter valid weight and dimensions.');
    }
});

document.getElementById('delivery-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});

function calculateAmount(weight, volume) {
    const weightCost = weight * 2; // $2 per kg
    const volumeCost = volume * 0.05; // $0.05 per cubic cm
    return weightCost + volumeCost;
}
