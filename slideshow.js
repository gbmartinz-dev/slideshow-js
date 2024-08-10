'use strict';

const images = [
    {'id': '1', 'url': './img/chrono.jpg'},
    {'id': '2', 'url': './img/inuyasha.jpg'},
    {'id': '3', 'url': './img/tenchi.jpg'},
    {'id': '4', 'url': './img/tenjhotenge.jpg'},
    {'id': '5', 'url': './img/yuyuhakusho.jpg'},
    {'id': '6', 'url': './img/ippo.png'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach (images => {
        container.innerHTML += `<div><img src='${image.url}'></div>`
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}