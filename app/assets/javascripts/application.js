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
//= require popper
//= require bootstrap-sprockets
//= require_tree .


// show each location related to the project when clicking "more"

$(document).ready(function () {
  $(".js-more").on("click", function(event) {
    event.preventDefault();
    var nextId = this.dataset.id;
    $.get("/projects/" + nextId + ".json", function(data) {
      $(".locationAddress" + nextId).text(data["location"]["address"]);

    });
  });
});



$(document).ready(function () {
  $("#locationBtn").on("click", function(event) {
    event.preventDefault();
    $.get("/locations.json", function(data) {
      $("#locationIndex").forEach(data.name)
    })
  })
})


// hide item on click (used as a checklist)
$(function() {
$(".itemContent").click(function() {
  $( this ).slideUp();
});
})

// More button on welcome page, hide more once clicked

$(document).ready(function() {
          $('#readmore').click(function() {
              $(this).prev('.answer').slideToggle(500);
          });
      });

      $(document).ready(function(){
         $("#readmore").on("click", function(){
             $("#readmore").hide();
           })
          })


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

      $(".js-next").attr("data-id", data["id"]);
    });
  });
});

// Hide items when clicking Next.. on project/show page

$(document).ready(function(){
    $(".js-next").on("click", function(){
      $("div.myDIV").hide();
    });
});


  // Add item to form. Json renders shows item and email of user.
      function Item(data) {
        this.id = data.id;
        this.content = data.content;
        this.user = data.user;
      }



      Item.prototype.showDisplay = function() {
        var html = "" ;
        html += "<div class=\'well well-white\' id=\'item-\' + item.id + '\'>" +  "<strong>" + this.user.email + "</strong>" + " | " + this.content + "</div>";
        $("#submitted-items").append(html);
      }

      $(function() {
        $("form#new_item").on("submit", function(event) {
          event.preventDefault();
          var $form = $(this);
          var action = $form.attr("action");
          // item(form input), converted from an object => string.
          var params = $form.serialize();
          $.ajax({
            url: action,
            data: params,
            dataType: "json",
            method: "POST"
          })
          .success(function(json) {
          $(".itemBox").val("");
            var item = new Item(json);
            item.showDisplay();

          })
        })
      })

// remove any empty items (validation now put in to prevent this)
$(document).ready(function() {
$('ul li:empty').remove();
})

// addLocation and Remove
    function addItem(){
    	var ul = document.getElementById("locationList");
      var candidate = document.getElementById("candidate");
      var li = document.createElement("li");
      li.setAttribute('id',candidate.value);
      li.appendChild(document.createTextNode(candidate.value));
      ul.appendChild(li);
    }

    function removeItem(){
    	var ul = document.getElementById("locationList");
      var candidate = document.getElementById("candidate");
      var item = document.getElementById(candidate.value);
      ul.removeChild(item);
    }


    //More button Projects index Page
    $(document).ready(function () {
    $("div.projectsExpand").on('click', 'a.js-more', function(e) {
        e.preventDefault();
        var id = this.dataset.id
        $.get("/projects/" + id + ".json", function(data) {
          $("#projectDescription-" + id).text(data["description"])
        });
      });
    })


    // A-Z items when clicking "Equipment"(not using)

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


//var myArray = ['adam', 'bianca', 'cat', 'dennis'];
//var myFunc = function (letter) {
  //  for (var i = 0; i < letter.length; i += 1) {
        // Use the index i here
    //    console.log(letter[i].charAt(0));
//    }
//}

// Call your function, passing in the array you defined:
//myFunc(myArray);
// a
// b
// c
// d
