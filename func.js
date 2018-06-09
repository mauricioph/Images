$( "#info" ).click(function() {
	$( "#info-popup" ).css( "display" , "block" );
	$( "#info-popup" ).addClass( "fadeInRight" );
	setTimeout(function(){
        $( "#info-popup" ).css( "opacity" , "1" );
		$( "#info-popup" ).removeClass( "fadeInRight" );
      },600);
});

$( "#most-visited" ).click(function() {
    $( "#most-visited-popup" ).css( "display" , "block" );
    $( "#most-visited-popup" ).addClass( "fadeInDown" );
    setTimeout(function(){
        $( "#most-visited-popup" ).css( "opacity" , "1" );
        $( "#most-visited-popup" ).removeClass( "fadeInDown" );
      },600);
});

$(document).mouseup(function (e)
{
    var info = $( "#info" );
    var mostVisited = $( "#most-visited" );

    if (!info.is(e.target)
        && info.has(e.target).length === 0)
    {
    	$( "#info-popup" ).addClass( "fadeOutLeft" );
    	setTimeout(function(){
        	$( "#info-popup" ).css( "display" , "none" );
			$( "#info-popup" ).removeClass( "fadeOutLeft" );
      	},600);
    }

    if (!mostVisited.is(e.target)
        && mostVisited.has(e.target).length === 0)
    {
        $( "#most-visited-popup" ).addClass( "fadeOutUp" );
        setTimeout(function(){
            $( "#most-visited-popup" ).css( "display" , "none" );
            $( "#most-visited-popup" ).removeClass( "fadeOutUp" );
        },600);
    }
});