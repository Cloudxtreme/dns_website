class NavbarHandler {
  constructor(navbar){
    this.navbar_id = navbar;
  }
  imageScale(image){
    // on scroll,
    var navbar_id = this.navbar_id;
    $(window).on('scroll',function(){
      var mainbottom = $(image).offset().top + $(image).height() + 10;
        // we round here to reduce a little workload
        var stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $(navbar_id).addClass('tiny-noimage-nav');
            $(navbar_id).find(".navbar-collapse").addClass("allow-color")
        } else {
            $(navbar_id).removeClass('tiny-noimage-nav');
        }

    });
  }
  stickNavbar(pre, padding){
    var mainbottom = $(pre).offset().top + $(pre).height();
    // on scroll,
    var navbar_id = this.navbar_id;
    $(window).on('scroll',function(){
        // we round here to reduce a little workload
        var stop = Math.round($(window).scrollTop());

        if (stop > mainbottom) {
            $(navbar_id).addClass('fixed-top');
            $(padding).css({"margin-top": $(navbar_id).height()});
        } else {
            $(navbar_id).removeClass('fixed-top');
            $(padding).css({"margin-top": 0});
        }

    });
  }
}
var navHandle = new NavbarHandler('#page-navbar');
navHandle.imageScale('#navbar-background');
navHandle.stickNavbar('#pre-navbar', '#navbar-background')
