

const selectElement = document.getElementById('region-select');


function updateOptionText() {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    if (windowWidth <= 360) {
        selectElement.options[0].text = 'Please select a region...';
    } else {
        selectElement.options[0].text = 'Please select a region, state or province';
    }
}


updateOptionText();


window.addEventListener('resize', updateOptionText);
