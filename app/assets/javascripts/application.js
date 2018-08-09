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
//= require_tree .

// More button on welcome page

$(document).ready(function() {
          $('#readmore').click(function() {

              $(this).prev('.answer').slideToggle(500);
              $(this).toggleClass('close');

          });
      });


// A-Z items when clicking "Equipment"

$(document).ready(function() {
    $('.link-sort-list').click(function(e) {
        var $sort = this;
        var $list = $('#sort-list');
        var $listLi = $('li',$list);
        $listLi.sort(function(a, b){
            var keyA = $(a).text().toLowerCase();
            var keyB = $(b).text().toLowerCase();
            if($($sort).hasClass('asc')){
                return (keyA > keyB) ? 1 : 0;
            } else {
                return (keyA < keyB) ? 1 : 0;
            }
        });
        $.each($listLi, function(index, row){
            $list.append(row);
        });
        e.preventDefault();
    });
});


// Next.. button on project-show page

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

// Hide comments when clicking Next.. on project/show page

$(document).ready(function(){
    $(".js-next").on("click", function(){
        $("div.myDIV").hide();
    });
});

// hide more button once clicked on project/index page

$(document).ready(function(){
    $(".js-more").on("click", function(){
        $(".hideMore").hide();
      })
    })


// remove any empty items (validation now put in to prevent this)
$(document).ready(function() {
$('ul li:empty').remove();
})

// addLocation and Remove
    function addItem(){
    	var ul = document.getElementById("dynamic-list");
      var candidate = document.getElementById("candidate");
      var li = document.createElement("li");
      li.setAttribute('id',candidate.value);
      li.appendChild(document.createTextNode(candidate.value));
      ul.appendChild(li);
    }

    function removeItem(){
    	var ul = document.getElementById("dynamic-list");
      var candidate = document.getElementById("candidate");
      var item = document.getElementById(candidate.value);
      ul.removeChild(item);
    }
