$(function () {
    $('.defclick').click(function () {
        var data = $(this).data('target');
        $(".modal").dialog({
            title: 'Definition',
            open: function (event, ui) {
                $('#art').load(data, function () {
                });
            }
        });
    })
    $('.postclick').click(function(event){
        event.preventDefault();
        var target = $(this).data('target');
        $('.catbloc').hide();
        $(target).show();
    })
});