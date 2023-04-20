$('#myBtn').on('click', function(){
    $('.modal-content').show();
})
$('.close').on('click', function(){
    $('.modal-content').hide();
})

$(document).on('click', function(e){
    if(!e.target.closest('.modal-content') && !e.target.closest('#myBtn')){
        $('.modal-content').hide();
    }
})

