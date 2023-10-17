

 var activeMenuAndSmoothScroll = function () {
    // smoothscroll
    smoothScroll.init({
        offset: 60
    });

    var addClassOnScroll = function () {
        var windowTop = $(window).scrollTop();
        $('section[id]').each(function (index, elem) {
            var offsetTop = $(elem).offset().top;
            var outerHeight = $(this).outerHeight(true);

            if (windowTop > (offsetTop - 120) && windowTop < (offsetTop + outerHeight)) {
                var elemId = $(elem).attr('id');
                $(".only-pagination a").removeClass('active ');
                $(".only-pagination a[href='#" + elemId + "']").addClass('active');
            }
        });
    };
    // active class menu section
    $(function () {
        $(window).on('scroll', function () {
            addClassOnScroll();
        });
    });
    
};

activeMenuAndSmoothScroll();