/* HOVER FUNCTIONS */
function hoverLounge() {
    document.getElementById('lounge-layer').classList.add('layer-lounge');
    document.getElementById('lounge').style.cursor = 'pointer';
}

function hoverKitchen() {
    document.getElementById('kitchen-layer').classList.add('layer-kitchen');
    document.getElementById('kitchen').style.cursor = 'pointer';
}

function hoverBedroom() {
    document.getElementById('bedroom-layer').classList.add('layer-bedroom');
    document.getElementById('bedroom').style.cursor = 'pointer';
}

function hoverBathroom() {
    document.getElementById('bathroom-layer').classList.add('layer-bathroom');
    document.getElementById('bathroom').style.cursor = 'pointer';
}

function hoverSale() {
    document.getElementById('sale-layer').classList.add('layer-sale');
    document.getElementById('on-sale').style.cursor = 'pointer';
}

/* MOUSE OUT FUNCTONS */

function outLounge() {
    document.getElementById('lounge-layer').classList.remove('layer-lounge');
}

function outKitchen() {
    document.getElementById('kitchen-layer').classList.remove('layer-kitchen');
}

function outBedroom() {
    document.getElementById('bedroom-layer').classList.remove('layer-bedroom');
}

function outBathroom() {
    document.getElementById('bathroom-layer').classList.remove('layer-bathroom');
}

function outSale() {
    document.getElementById('sale-layer').classList.remove('layer-sale');
}