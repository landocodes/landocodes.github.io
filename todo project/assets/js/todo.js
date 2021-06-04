$('ul').on('click', 'li', function () {
  $(this).toggleClass('linethrough')
})

//click on the x to delete the todo
$('ul').on('click', 'span', function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove()
    })
  event.stopPropagation()
})

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //get a new todo text from input
    var todoText = $(this).val()
    //create a new li and add to ul
    $(this).val('')
    $('ul').append(
      '<li><span><i class="far fa-trash-alt"></i> </span>' + todoText + '</li>'
    )
  }
})

$('.fa-clipboard-list').click(function () {
  $("input[type='text']").fadeToggle()
})
