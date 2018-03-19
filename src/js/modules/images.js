var $ = require('../vendor/jquery.js');

var scrollTop, position, windowHeight, height, activeSection, activePerson, endOfSection;

module.exports =  {
    init: function() {
        this.setValues(true);
        this.bindings();
        this.checkPositionOfImages();
    },

    bindings: function() {
        $(window).scroll(function() {
            this.setValues();
            this.checkPositionOfImages();
            this.revealImages();
        }.bind(this));

        $(window).resize(function() {
            this.setValues(true);
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

        activeSection = 0;

        $('.ripple-body__inner').each(function(i, el) {
            if (scrollTop > $(el).offset().top - (windowHeight / 2)) {
                activeSection = $(el).data('section');
            }
        }.bind(this));

        activePerson = 0;

        $('.ripple-body__person').each(function(i, el) {
            if (scrollTop > $(el).offset().top - (windowHeight / 2)) {
                activePerson = $(el).data('person');
            }
        }.bind(this));

        endOfSection = false;

        if (activeSection > 0 && scrollTop > $('.ripple-body--' + activeSection + ' .ripple-body__person--last').offset().top - (windowHeight / 4)) {
            endOfSection = true;
        }
    },

    checkPositionOfImages: function() {
        if (scrollTop > (position + height) - windowHeight) {
            $('.ripple-images').addClass('is-fixed');
        } else {
            $('.ripple-images').removeClass('is-fixed');
        }
    },

    revealImages: function() {
        $('.is-shown').removeClass('is-shown');

        if (!endOfSection) {
            for (var person = 0; activePerson >= person; person++) {
                $('.ripple-images__image--' + activeSection + '-' + person).addClass('is-shown');
            }
        }
    }
};