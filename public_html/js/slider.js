$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 600,
        values: [ 52, 400 ],
        slide: function( event, ui ) {
            $( "#min_price" ).text( "$" + ui.values[ 0 ]);
            $( "#max_price" ).text( "$" + ui.values[ 1 ]);
        }
    });

} );