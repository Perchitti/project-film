// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require_tree .


$(document).ready(function() {
  $('[data-js-hide-link]').click(function(event){
    $(this).parents('li').hide();
    event.preventDefault();
  });
});

// hide equipment section when clicking "next"
$(document).ready(function(){
    $(".js-next").on("click", function(){
        $(".myDIV").hide();
    });
});



//"next" button on project/show page

  $(document).ready(function () {
    $(".js-next").on("click", function(event) {
      event.preventDefault();
      var nextId = parseInt($(".js-next").attr("data-id")) + 1;
      $.get("/projects/" + nextId + ".json", function(data) {
        $(".projectTitle").text(data["title"]);
        $(".projectDescription").text(data["description"]);
        $(".projectStudio").text(data["studio"]);
        $(".locationName").text(data["location"]["name"]);
        $(".locationAddress").text(data["location"]["address"]);
        // re-set the id to current on the link
        $(".js-next").attr("data-id", data["id"]);
      });
    });
  });


// attempts to organize UL on project/show page


  var $divs = $("#box");

  $('#itemOrder').on('click', function () {
      var orderedDivs = $divs.sort(function (a, b) {
          return $(a).find("li").text.toLowerCase() > $(b).find("li").text.toLowerCase();;
      });
      $(".final").html(orderedDivs);
  });







// hide more button once clicked on project/index page

$(document).ready(function(){
    $(".js-more").on("click", function(){
        $(".hideMore").hide();
