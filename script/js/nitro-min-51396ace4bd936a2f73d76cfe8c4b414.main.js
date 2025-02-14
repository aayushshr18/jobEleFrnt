(function(e){"use strict";var a=e(".menu-sticky");var n=e(window);var i=e(".header-inner").innerHeight();n.on("scroll",function(){var e=n.scrollTop();if(e<i){a.removeClass("sticky")}else{a.addClass("sticky")}});e(".header-inner").waypoint("sticky",{offset:0});e(".widget_nav_menu li a").filter(function(){return e.trim(e(this).html())==""}).hide();e(function(){var a=e(".navbar-collapse");a.on("click","a:not([data-toggle])",null,function(){a.collapse("hide")})});if(e(".pointer-wrap").length){const e=cursorDot({diameter:parseInt(pointer_data.diameter),borderWidth:parseInt(pointer_data.border_width),borderColor:String(pointer_data.pointer_border),easing:parseInt(pointer_data.speed),background:String(pointer_data.pointer_bg)});e.over("a",{scale:parseFloat(pointer_data.scale)})}e(".menu-area .navbar ul > li.menu-item-has-children").hover(function(){e(this).addClass("hover-minimize")},function(){e(this).removeClass("hover-minimize")});e(".showcase-item").hover(function(){e(this).toggleClass("hover")});e(".sticky_search").on("click",function(a){e(".sticky_form").slideToggle("show");e(".sticky_form input").focus()});e(".sticky_search").on("click",function(){e("body").removeClass("search-active").removeClass("search-close");if(e(this).hasClass("close-full")){e("body").addClass("search-close")}else{e("body").addClass("search-active")}return false});e(".nav-link-container").on("click",function(a){e("body.on-offcanvas").removeClass("on-offcanvas");setTimeout(function(){e("body").addClass("on-offcanvas")},500)});e(".sticky_form_search").on("click",function(){e("body, html").removeClass("rs-search-active").removeClass("rs-search-close");if(e(this).hasClass("close-search")){e("body, html").addClass("rs-search-close")}else{e("body, html").addClass("rs-search-active")}return false});e("#rs-header ul > li.classic").hover(function(){e("body").addClass("mega-classic")},function(){e("body.mega-classic").removeClass("mega-classic")});e(document).ready(function(){function a(){e(".menu-ofcn").css({"height":window.innerHeight});var a=Math.sqrt(Math.pow(window.innerHeight,2)+Math.pow(window.innerWidth,2));var n=a*2;e(".off-nav-layer").width(n);e(".off-nav-layer").height(n);e(".off-nav-layer").css({"margin-top":-a,"margin-left":-a})}e(".menu-button, .close-button, .offwrap").on("click",function(){e(".nav-toggle, .menu-ofcn, .close-button, body").toggleClass("off-open")});e(window).resize(a);a()});if(e(".page-template-page-single-php .nav, .page-template-page-single2-php .nav").length){e("#single-menu li:first-child, .sidenav li:first-child").addClass("active");e("#single-menu a, .sidenav a").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=e(this.hash);a=a.length?a:e("[name="+this.hash.slice(1)+"]");e("#single-menu li, .sidenav li").removeClass("active");e(this).parent("li").addClass("active");if(a.length){e("html, body").animate({scrollTop:a.offset().top-70},1e3,"easeInOutExpo");return false}}});var t=e("#single-menu li.menu-item").children("a");var s=[];for(var o=0;o<t.length;o++){var l=t[o];var r=e(l).attr("href");s.push(r)}}e(".menu li a").on("click",function(){e(".nav-container").removeClass("nav-active-menu-container")});e(".popup-quote").magnificPopup({type:"inline",preloader:false,focus:"#qname",removalDelay:500,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr("data-effect");if(e(window).width()<700){this.st.focus=false}else{this.st.focus="#qname"}}}});if(e(".portfolio-carousel").length){e(".portfolio-carousel").owlCarousel({loop:true,nav:true,autoHeight:true,items:1})}e(".nav-link-container > a").off("click").on("click",function(a){a.preventDefault();e(".nav-link-container").toggleClass("nav-inactive-menu-link-container");e(".mobile-menus").toggleClass("nav-active-menu-container")});e(".nav-close-menu-li > a").on("click",function(a){e(".mobile-menus").toggleClass("nav-active-menu-container");e(".content").toggleClass("inactive-body")});e("body.page-template-page-single .mobile-menu-link > a, body.page-template-page-single .sidenav li.nav-link-container a").off("click").on("click",function(a){a.preventDefault();e(".mobile-menu-container").toggleClass("nav-inactive-menu-link-container");e(".mobile-menu-container").toggleClass("nav-active-menu-container")});e("body.page-template-page-single2 .mobile-menu-link > a, body.page-template-page-single2 .sidenav li.nav-link-container a").off("click").on("click",function(a){a.preventDefault();e(".mobile-menu-container").toggleClass("nav-inactive-menu-link-container");e(".mobile-menu-container").toggleClass("nav-active-menu-container")});e(".rs-heading h3").each(function(){var a,n='<span class="first-word">',i="</span>";a=e(this).text().split(" ");a.unshift(n);a.splice(2,0,i);a=a.join(" ");e(this).html(a)});e(".blog-carousel").each(function(){var a=e(this).data("carousel-options");e(this).owlCarousel(a)});e(function(){e("ul.children").addClass("sub-menu")});e(".rs-products-grid .product-btn .button").addClass("glyph-icon flaticon-shopping-bag");e(".popup-videos, .popup-border").magnificPopup({disableOn:10,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:false,fixedContentPos:false});e(function(){var a=e(".navbar-collapse");a.on("click","a:not([data-toggle])",null,function(){a.collapse("hide")})});e(".menu-area .navbar ul > li.mega > ul.sub-menu").wrapInner("<div class='container flex-mega'></div>");e(".menu-area .navbar ul > li.mega > ul.sub-menu li").first().addClass("first-li-item");if(e("div").hasClass("openingfoot")){e("body").addClass("openingfootwrap")}if(e("body").hasClass("page-template-page-single2")){e("body").addClass("page-template-page-single page-template-page-single-php")}e(".contents-sticky, .sticky-sidebar").theiaStickySidebar({additionalMarginTop:160,additionalMarginBottom:20});e(window).on("load",function(){e("#braintech-load").delay(1e3).fadeOut(500);e(".braintech-loader").delay(1e3).fadeOut(500);if(e(window).width()<992){e(".rs-menu").css("height","0");e(".rs-menu").css("opacity","0");e(".rs-menu").css("z-index","-1");e(".rs-menu-toggle").on("click",function(){e(".rs-menu").css("opacity","1");e(".rs-menu").css("z-index","1")})}});e(".grid").imagesLoaded(function(){e(".portfolio-filter").on("click","button",function(){var n=e(this).attr("data-filter");a.isotope({filter:n})});var a=e(".grid").isotope({animationOptions:{duration:750,easing:"linear",queue:false},itemSelector:".grid-item",percentPosition:true,masonry:{columnWidth:".grid-item"}})});e(".portfolio-filter button").on("click",function(a){e(this).siblings(".active").removeClass("active");e(this).addClass("active");a.preventDefault()});e(".image-popup").magnificPopup({type:"image",callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure animated zoomInDown")}},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return'<div class="gallery-title-wrap"><h3>'+e.el.attr("title")+"</h3>"+"<p>"+e.el.attr("caption")+"</p></div>"}},gallery:{enabled:true}});if(e(".project-single-carousel").length){e(".project-single-carousel").owlCarousel({loop:true,margin:20,arrows:true,autoplay:true,nav:true,dots:false,navText:["<i class='glyph-icon flaticon-left-arrow'></i>","<i class='glyph-icon flaticon-right-arrow'></i>"],responsive:{0:{items:1},767:{items:2},991:{items:2},1199:{items:4}}})}e(".rs-counter").counterUp({delay:20,time:1500});var n=e(window);var c=e("#scrollUp");n.on("scroll",function(){if(n.scrollTop()>150){c.fadeIn()}else{c.fadeOut()}});c.on("click",function(){e("html,body").animate({scrollTop:0},500)});e(function(){e("ul.children").addClass("sub-menu")});e(".comment-body, .comment-respond").wrap("<div class='comment-full'></div>");e(".rs-heading .description p:empty").remove();e(".menu-wrap-off a").each(function(){var a=e(this).attr("href");if(a=="#"){e(this).addClass("hash")}else{e(this).removeClass("hash")}});e.fn.menumaker=function(a){var n=e(this),i=e.extend({format:"dropdown",sticky:false},a);return this.each(function(){n.find("li ul").parent().addClass("has-sub");var a=function(){n.find(".has-sub").prepend('<span class="submenu-button"></span>');n.find(".hash").parent().addClass("hash-has-sub");n.find(".submenu-button").on("click",function(){e(this).toggleClass("submenu-opened");if(e(this).siblings("ul").hasClass("open-sub")){e(this).siblings("ul").removeClass("open-sub").hide("fadeIn");e(this).siblings("ul").hide("fadeIn")}else{e(this).siblings("ul").addClass("open-sub").hide("fadeIn");e(this).siblings("ul").slideToggle().show("fadeIn")}})};if(i.format==="multitoggle")a();else n.addClass("dropdown");if(i.sticky===true)n.css("position","fixed");var t=function(){if(e(window).width()>991){n.find("ul").show("fadeIn");n.find("ul.sub-menu").hide("fadeIn")}};t();return e(window).on("resize",t)})};e(document).ready(function(){e("#mobile_menu").menumaker({format:"multitoggle"})});if(!String.prototype.getDecimals){String.prototype.getDecimals=function(){var e=this,a=(""+e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);if(!a){return 0}return Math.max(0,(a[1]?a[1].length:0)-(a[2]?+a[2]:0))}}e(document.body).on("click",".plus, .minus",function(){var a=e(this).closest(".quantity").find(".qty"),n=parseFloat(a.val()),i=parseFloat(a.attr("max")),t=parseFloat(a.attr("min")),s=a.attr("step");if(!n||n===""||n==="NaN")n=0;if(i===""||i==="NaN")i="";if(t===""||t==="NaN")t=0;if(s==="any"||s===""||s===undefined||parseFloat(s)==="NaN")s=1;if(e(this).is(".plus")){if(i&&n>=i){a.val(i)}else{a.val((n+parseFloat(s)).toFixed(s.getDecimals()))}}else{if(t&&n<=t){a.val(t)}else if(n>0){a.val((n-parseFloat(s)).toFixed(s.getDecimals()))}}a.trigger("change")})})(jQuery);