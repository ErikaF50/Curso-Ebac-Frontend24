$(document).ready(function(){

    $('input').change(function(){
        var input = $(this).val();
        $('ul').append('<li >' + input + '</li>');
        $(this).val('');
    });

    $('ul').on('click','.checked', function(){
        $(this).parent('li').toggleClass('checked');
    });
    
});