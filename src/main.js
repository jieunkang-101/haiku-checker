import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $("form#haikuInput").submit(function(event) {
    event.preventDefault();
    let lineOne = $("#lineOne").val();
    let lineTwo = $("#lineTwo").val();
    let lineThree = $("#lineThree").val();
    let haikuPoem = (lineOne, lineTwo, lineThree);

    
    $("#result").text(haikuPoem);

  });
});