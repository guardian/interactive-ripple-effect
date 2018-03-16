var scrollTop, height;

module.exports =  {
    init: function() {
        this.bindings();
        this.setValues();
        this.setFirst();
        this.checkChats();
    },

    bindings: function() {
        $(window).scroll(function() {
            this.setValues();
            this.checkChats();
        }.bind(this));

        $(window).resize(function() {
            this.setValues();
        }.bind(this));
    },

    setValues: function() {
        scrollTop = $(window).scrollTop();
        height = $(window).height();
    },

    setFirst: function() {
        $('.texts-chat:eq(0)').addClass('is-next');
    },

    checkChats: function() {
        $('.texts-chat').each(function(index, value) {
            if (scrollTop > $(value).offset().top - ((height / 2))) {
                if (!$(value).hasClass('has-shown')) {
                    $(value).addClass('has-shown');
                    $('.is-next').removeClass('is-next');
                    $('.texts-chat:eq(' + (index + 1) + ')').addClass('is-next');
                }
            }
        }.bind(this));
    }
};