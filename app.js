$( document ).ready( function () {

  var currentColor = "white";

  $( '.box' ).on( 'dblclick', function () {
      $( this ).removeClass( "red green blue yellow white" );
  });

  $( '.box' ).click( function () {
      $( this ).addClass( currentColor );
  });

  $( '#reset' ).click( function () {
      $( '.box' ).removeClass( "red green blue yellow white" );
  });

  $( '.color-item' ).click( function () {
      currentColor = $( this ).text().toLowerCase();
  });




});
