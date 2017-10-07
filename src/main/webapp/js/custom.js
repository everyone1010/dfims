angular.module('dfimsApp',['ui.router', 'ui.bootstrap']);
$(document).ready(function () {
	myMap(22.5735, 88.4331, 12);
	 setTimeout(function() {
                toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    timeOut: 4000
                };
                toastr.success('Disaster Management admin', 'Welcome to Bengalathon');

            }, 1300);
	
    // Add body-small class if window less than 768px
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
	//Area change 
	$(document).on("change", "#secArea", function() {
		var selectedArea= $(this).val();
		if(selectedArea == "5"){
			myMap(22.5765, 88.4331, 15);
		}
	});
	
	
    // MetisMenu
    $('#side-menu').metisMenu();

    // Collapse ibox function
	 $(document).on("click", ".collapse-link", function() {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.children('.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // Close ibox function
	 $(document).on("click", ".close-link", function() {
        var content = $(this).closest('div.ibox');
        content.remove();
    });

    // Minimalize menu
	 $(document).on("click", ".navbar-minimalize", function() {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();

    });


    // Open close right sidebar
	 $(document).on("click", ".right-sidebar-toggle", function() {
        $('#right-sidebar').toggleClass('sidebar-open');
    });

  
    // Open close small chat
	 $(document).on("click", ".open-small-chat", function() {
        $(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
        $('.small-chat-box').toggleClass('active');
    });

   
    // Full height of sidebar
    function fix_height() {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebar-panel").css("min-height", heightWithoutNavbar + "px");

        var navbarheight = $('nav.navbar-default').height();
        var wrapperHeight = $('#page-wrapper').height();

        if (navbarheight > wrapperHeight) {
            $('#page-wrapper').css("min-height", navbarheight + "px");
        }

        if (navbarheight < wrapperHeight) {
            $('#page-wrapper').css("min-height", $(window).height() + "px");
        }

        if ($('body').hasClass('fixed-nav')) {
            if (navbarheight > wrapperHeight) {
                $('#page-wrapper').css("min-height", navbarheight + "px");
            } else {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }

    }

    fix_height();

    // Fixed Sidebar
    $(window).bind("load", function () {
        if ($("body").hasClass('fixed-sidebar')) {
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }
    });

    // Move right sidebar top after scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
            $('#right-sidebar').addClass('sidebar-top');
        } else {
            $('#right-sidebar').removeClass('sidebar-top');
        }
    });

    $(window).bind("load resize scroll", function () {
        if (!$("body").hasClass('body-small')) {
            fix_height();
        }
    });

   
    // Add slimscroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    })
});


// Minimalize menu when screen is less than 768px
$(window).bind("resize", function () {
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
});

function SmoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 100);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
    }
}

 function myMap(latitude,longitude, zoomval) {
	 var myCenter = new google.maps.LatLng(22.5765, 88.4331);
            var mapProp = {
                center: new google.maps.LatLng(latitude,longitude),
                zoom: zoomval,
				mapTypeControlOptions: {
                                mapTypeIds: [google.maps.MapTypeId.ROADMAP]
                            },
                            mapTypeId: google.maps.MapTypeId.ROADMAP
            };			
            var map = new google.maps.Map(document.getElementById("map"), mapProp);
			 var marker = new google.maps.Marker({position:myCenter});
			marker.setMap(map);
}

/** Setting Map pointers starts */
    function setMapPointers(position) {
          var pyrmont = {lat: 22.5765, lng: 88.4331};
          map = new google.maps.Map(document.getElementById('map'), {
                center: pyrmont,
                zoom: 15
          });

          infowindow = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
                location: pyrmont,
                radius: 500,
                type: [position]
            }, callback);
    }

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
            }
        }
    }

    function createMarker(place) {
        var marker = [];
        var placeLoc = place.geometry.location;
        marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: place.photos? place.photos[0].getUrl({'maxWidth': 30, 'maxHeight': 30}): ''
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        }); 
}
/** Setting Map pointers ends */

