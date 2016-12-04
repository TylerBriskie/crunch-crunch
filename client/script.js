$(document).ready(function(){
  console.log("ready for input");
  let $button = $('#submitButton');

  $button.on('click', function(event){
    event.preventDefault();
    let newEntry = {
      name: $('#first_name').val(),
      age: $('#age').val(),
      crunches: $('#crunchesDone').val()
    };
    console.log(newEntry);
    $.post('http://localhost:1337/entries', newEntry);
    $.get('http://localhost:1337/entries', getResults);
    $('#userInput').trigger('reset');
  });

  function getResults(data){
    for (var i = 0; i < data.length; i++) {
      $('.results').append(`
        <div class ="displayResults">
        <h5>Name:</h5>
        <p>${data[i].name}</p>
        <h5>Age:</h5>
        <p>${data[i].age}</p>
        <h5>Crunches Done:</h5>
        <p>${data[i].crunches}</p>
        <br>
        </div>
        `);
      $('.displayResults').fadeIn(1600);
    }
  };
});
