var $ = require('../vendor/jquery.js');

var scrollTop, position, windowHeight, height;

module.exports =  {
    init: function() {
        this.setValues(true);
        this.bindings();
    },

    bindings: function() {
        $(window).scroll(function() {
            this.setValues();
            this.checkPositionOfImages();
        }.bind(this));
    },

    setValues: function(isReset) {
        scrollTop = $(window).scrollTop();

        if (isReset) {
            $('.ripple-images').removeClass('is-fixed');
            position = $('.ripple-images').offset().top;
            height = $('.ripple-images').height();
            windowHeight = $(window).height();
        }
    },

    checkPositionOfImages: function() {
        if (scrollTop > (position + height) - windowHeight) {
            $('.ripple-images').addClass('is-fixed');
        } else {
            $('.ripple-images').removeClass('is-fixed');
        }
    }
};