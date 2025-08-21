import $ from "jquery";

// Bootstrap (CSS + JS)
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";  // <-- Import all Bootstrap JS APIs

import AOS from "aos";
import "aos/dist/aos.css";

import "./style.css";

AOS.init({
    duration: 1000,
    once: true
});

$(function() {
    console.log("jQuery is ready!");

    $('img').on('click', function() {
        console.log('Image clicked:', $(this).attr('alt'));
    });

    $('.clickable-img').on('click', function() {
        var src = $(this).attr('src');          
        $('#modalImage').attr('src', src);      

        // Bootstrap 5 way of showing modal
        const modalEl = document.getElementById('dynamicImageModal');
        const modal = new bootstrap.Modal(modalEl); // Now bootstrap is defined
        modal.show();
        console.log('Modal opened with image:', $(this).attr('alt'));
    });
});
