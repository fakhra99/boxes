let chat_slider_customContainer;
let allBoxes;
let previousScrollHeight = 0; // Track previous scroll position
let flipIndex = 0; // Index of the next box to flip

function initBoxes() {
    let newBoxes = document.querySelectorAll('.chat-slider-custom--box:not(.removed)');
    newBoxes.forEach(function (box, index) {
        applyBoxStyles(box, index);
        box.removeEventListener('click', boxClickListener);
        box.addEventListener('click', boxClickListener);
    });
    chat_slider_customContainer.classList.add('loaded');
}

window.addEventListener('scroll', function () {
    onScrollChatSlider();
});

function applyBoxStyles(box, index) {
    box.style.zIndex = allBoxes.length - index;
    box.style.transform = 'scale(' + (20 - index) / 20 + ')'; // Adjust scaling
    box.style.opacity = 1; // Full opacity for all boxes
}

function onScrollChatSlider() {
    let currentScrollHeight = window.scrollY;
    let diffHeight = currentScrollHeight - previousScrollHeight;

    if (Math.abs(diffHeight) < 150) return; // Lowered threshold

    if (currentScrollHeight < previousScrollHeight) {
        restoreBoxes(); // Stack back on scroll up
    } else {
        flipBoxesOnScroll(); // Flip boxes on scroll down
    }

    previousScrollHeight = currentScrollHeight;
}

function flipBoxesOnScroll() {
    let boxes = document.querySelectorAll('.chat-slider-custom--box:not(.removed)');

    // Only flip the first two boxes
    if (flipIndex < 2 && flipIndex < boxes.length) { 
        let moveOutWidth = document.body.clientWidth * -1.5;
        let box = boxes[flipIndex];

        box.style.transition = 'transform 0.5s ease-in-out';
        box.style.transform = `translate(${moveOutWidth}px, -100px) rotate(30deg)`;
        box.classList.add('removed');
        flipIndex++;
    }
}

function boxClickListener(event) {
    let box = event.currentTarget;
    let moveOutWidth = document.body.clientWidth * -1.5;

    // Flip the clicked box only if it's the first or second box
    let index = Array.from(allBoxes).indexOf(box);
    if (index < 2 && !box.classList.contains('removed')) { 
        box.style.transition = 'transform 0.5s ease-in-out';
        box.style.transform = `translate(${moveOutWidth}px, -100px) rotate(30deg)`;
        box.classList.add('removed');
        flipIndex++;
    }

    // Lock the index to prevent further flips on click
    if (flipIndex > 2) {
        flipIndex = 2;
    }
}

function restoreBoxes() {
    let boxes = document.querySelectorAll('.chat-slider-custom--box.removed');
    if (boxes.length > 0) {
        boxes.forEach((box) => {
            box.classList.remove('removed');
            box.style.transition = 'transform 0.5s ease-in-out';
            box.style.transform = 'translate(0, 0) rotate(0deg)';
        });
        flipIndex = 0; // Reset flip index
        initBoxes();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    chat_slider_customContainer = document.querySelector('.chat-slider-custom');
    allBoxes = document.querySelectorAll('.chat-slider-custom--box');
    initBoxes();
});
