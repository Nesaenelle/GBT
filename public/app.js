(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

    $('.slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        responsive: [{
            breakpoint: 1600,
            settings: {
                // centerMode: true,
                slidesToShow: 5
            }
        }, {
            breakpoint: 1280,
            settings: {
                // centerMode: true,
                slidesToShow: 4
            }
        }, {
            breakpoint: 1024,
            settings: {
                // centerMode: true,
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                // centerMode: true,
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                // arrows: false,
                // dots: false,
                // centerMode: true,
                // centerPadding: '20px',
                slidesToShow: 1
            }
        }]
    });

    $('#adolescence-form').on('submit', function (e) {
        e.preventDefault();
        console.log($(e.currentTarget).serialize());
    });

    $('.modal-language__item').on('click', function (e) {
        $('.modal-language__item').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    function closeModal() {
        var overlay = $('.modal-overlay');
        $('.modal').removeClass('opened');
        overlay.removeClass('opened');
    }

    function openModal(e) {
        var $target = $(e.currentTarget);
        var id = $target.data('modal');
        var modal = $('[data-modal-id="' + id + '"]');
        var overlay = $('.modal-overlay');

        modal.addClass('opened');
        overlay.addClass('opened');
    }

    $('[data-close-btn]').on('click', function () {
        closeModal();
    });

    $('.modal-close').on('click', function () {
        closeModal();
    });

    $('.modal-overlay').on('click', function () {
        closeModal();
    });

    $('[data-modal]').on('click', function (e) {
        openModal(e);
    });
});

},{}]},{},[1]);
