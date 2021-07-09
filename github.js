import getDateString from './date.js';
import '../styles/styles.scss';
import image from '../images/image.jpeg';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
$(document).ready( () => {
    // Print the current time
    $('.js-content').html(`It's ${ getDateString() }`);
    // Display the image
    $('<img />')
        .attr('src', image)
        .attr('alt', 'Always provide a descriptive alt text.')
        .appendTo('body');
    // Display the Bootstrap modal window
    $('.js-modal').modal({
        show: true,
        keyboard: true
    });
});
