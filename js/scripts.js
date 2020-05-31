$(document).ready(function() {
    $('.item').matchHeight();

   $('.related-producdts-pager').rpmPagination({ 
        domElement: '.related-prodducts-paged',
        limit: 9
        //refresh: true

    });
    $('.listing-pvager').rpmPagination({ 
        domElement: '.listing-pvaged',
        limit: 12

    });

});
