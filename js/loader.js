$(window).on("load", function() {
    // weave your magic here.
    $(".loading").fadeTo(500, 0, function() {
      // $(this).remove()
      $(".pics").fadeTo(500, 1)
    })

});
