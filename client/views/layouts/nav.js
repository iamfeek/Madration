Template.nav.rendered = function () {
    $('.button-collapse').sideNav({
            menuWidth: 240, // Default is 240
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
};
