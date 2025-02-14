(function(i){"use strict";i.fn.theiaStickySidebar=function(t){var e={"containerSelector":"","additionalMarginTop":0,"additionalMarginBottom":0,"updateSidebarHeight":true,"minWidth":0,"disableOnResponsiveLayouts":true,"sidebarBehavior":"modern","defaultPosition":"relative","namespace":"TSS"};t=i.extend(e,t);t.additionalMarginTop=parseInt(t.additionalMarginTop)||0;t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0;o(t,this);function o(t,e){var o=a(t,e);if(!o){console.log("TSS: Body width smaller than options.minWidth. Init is delayed.");i(document).on("scroll."+t.namespace,function(t,e){return function(o){var n=a(t,e);if(n){i(this).unbind(o)}}}(t,e));i(window).on("resize."+t.namespace,function(t,e){return function(o){var n=a(t,e);if(n){i(this).unbind(o)}}}(t,e))}}function a(t,e){if(t.initialized===true){return true}if(i("body").width()<t.minWidth){return false}n(t,e);return true}function n(t,e){t.initialized=true;var o=i("#theia-sticky-sidebar-stylesheet-"+t.namespace);if(o.length===0){i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'))}e.each(function(){var e={};e.sidebar=i(this);e.options=t||{};e.container=i(e.options.containerSelector);if(e.container.length==0){e.container=e.sidebar.parent()}e.sidebar.parents().css("-webkit-transform","none");e.sidebar.css({"position":e.options.defaultPosition,"overflow":"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"});e.stickySidebar=e.sidebar.find(".theiaStickySidebar");if(e.stickySidebar.length==0){var o=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;e.sidebar.find("script").filter(function(i,t){return t.type.length===0||t.type.match(o)}).remove();e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children());e.sidebar.append(e.stickySidebar)}e.marginBottom=parseInt(e.sidebar.css("margin-bottom"));e.paddingTop=parseInt(e.sidebar.css("padding-top"));e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var a=e.stickySidebar.offset().top;var n=e.stickySidebar.outerHeight();e.stickySidebar.css("padding-top",1);e.stickySidebar.css("padding-bottom",1);a-=e.stickySidebar.offset().top;n=e.stickySidebar.outerHeight()-n-a;if(a==0){e.stickySidebar.css("padding-top",0);e.stickySidebarPaddingTop=0}else{e.stickySidebarPaddingTop=1}if(n==0){e.stickySidebar.css("padding-bottom",0);e.stickySidebarPaddingBottom=0}else{e.stickySidebarPaddingBottom=1}e.previousScrollTop=null;e.fixedScrollTop=0;s();e.onScroll=function(e){if(!e.stickySidebar.is(":visible")){return}if(i("body").width()<e.options.minWidth){s();return}if(e.options.disableOnResponsiveLayouts){var o=e.sidebar.outerWidth(e.sidebar.css("float")=="none");if(o+50>e.container.width()){s();return}}var a=i(document).scrollTop();var n="static";if(a>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)){var c=e.paddingTop+t.additionalMarginTop;var p=e.paddingBottom+e.marginBottom+t.additionalMarginBottom;var f=e.sidebar.offset().top;var b=e.sidebar.offset().top+d(e.container);var l=0+t.additionalMarginTop;var u;var h=e.stickySidebar.outerHeight()+c+p<i(window).height();if(h){u=l+e.stickySidebar.outerHeight()}else{u=i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom}var g=f-a+e.paddingTop;var S=b-a-e.paddingBottom-e.marginBottom;var y=e.stickySidebar.offset().top-a;var m=e.previousScrollTop-a;if(e.stickySidebar.css("position")=="fixed"){if(e.options.sidebarBehavior=="modern"){y+=m}}if(e.options.sidebarBehavior=="stick-to-top"){y=t.additionalMarginTop}if(e.options.sidebarBehavior=="stick-to-bottom"){y=u-e.stickySidebar.outerHeight()}if(m>0){y=Math.min(y,l)}else{y=Math.max(y,u-e.stickySidebar.outerHeight())}y=Math.max(y,g);y=Math.min(y,S-e.stickySidebar.outerHeight());var k=e.container.height()==e.stickySidebar.outerHeight();if(!k&&y==l){n="fixed"}else if(!k&&y==u-e.stickySidebar.outerHeight()){n="fixed"}else if(a+y-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop){n="static"}else{n="absolute"}}if(n=="fixed"){var v=i(document).scrollLeft();e.stickySidebar.css({"position":"fixed","width":r(e.stickySidebar)+"px","transform":"translateY("+y+"px)","left":e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-v+"px","top":"0px"})}else if(n=="absolute"){var x={};if(e.stickySidebar.css("position")!="absolute"){x.position="absolute";x.transform="translateY("+(a+y-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)";x.top="0px"}x.width=r(e.stickySidebar)+"px";x.left="";e.stickySidebar.css(x)}else if(n=="static"){s()}if(n!="static"){if(e.options.updateSidebarHeight==true){e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom})}}e.previousScrollTop=a};e.onScroll(e);i(document).on("scroll."+e.options.namespace,function(i){return function(){i.onScroll(i)}}(e));i(window).on("resize."+e.options.namespace,function(i){return function(){i.stickySidebar.css({"position":"static"});i.onScroll(i)}}(e));if(typeof ResizeSensor!=="undefined"){new ResizeSensor(e.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(e))}function s(){e.fixedScrollTop=0;e.sidebar.css({"min-height":"1px"});e.stickySidebar.css({"position":"static","width":"","transform":"none"})}function d(t){var e=t.height();t.children().each(function(){e=Math.max(e,i(this).height())});return e}})}function r(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}if(typeof t==="undefined"){t=i.width()}return t}return this}})(jQuery);