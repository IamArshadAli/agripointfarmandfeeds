// initialize all materialize component instances
document.addEventListener('DOMContentLoaded', function () {
    // sidenav
    var sidenav_right = document.querySelector('#sidenav-right');
    var right_instance = M.Sidenav.init(sidenav_right, { draggable: true, edge: 'right' });
    var sidenav_left = document.querySelector('#sidenav-left');
    var left_instance = M.Sidenav.init(sidenav_left, { draggable: true, edge: 'left' });

    // dropdown
    var dropdowns = document.querySelectorAll(".dropdown-trigger");
    var dropdown_instance = M.Dropdown.init(dropdowns);

    // modal
    var modals = document.querySelectorAll('.modal');
    var modal_instances = M.Modal.init(modals);

    // tabs
    var tabs = document.querySelectorAll('.tabs');
    var tab_instances = M.Tabs.init(tabs);

    // action button
    var action_button = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(action_button);

    // carousel
    var carousel = document.querySelectorAll('.carousel');
    var carousel_instance = M.Carousel.init(carousel, {fullWidth:true, indicators:true});

    // carousel slider
    var carousel_slider = document.querySelectorAll('.mobile-carousel-slider');
    carousel_instance = M.Carousel.init(carousel_slider,{indicators:true});

    // slider
    var slider = document.querySelectorAll('.slider');
    var slider_instance = M.Slider.init(slider, {indicators:false, interval:3000});

    // materialbox images
    var materialbox = document.querySelectorAll('.materialboxed');
    var materialbox_instance = M.Materialbox.init(materialbox);

    // collapsible - popout
    var collap_popouts = document.querySelectorAll('.collapsible');
    var collap_popouts_instance = M.Collapsible.init(collap_popouts);
});

//var sidenav_left_links = document.querySelectorAll('#sidenav-left li a');
//sidenav_left_links.forEach(link=>{link.style.color='green'});