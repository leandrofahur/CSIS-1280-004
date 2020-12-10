$(function () {

    $('h4').click(() => {
        alert("Click happened");
    })

    $('#show').click(() => {
        $('#image1').show();
    })

    $('#hide').click(() => {
        $('#image1').hide();
    })

    //use of show() and hide() with parameters
    $('#show1').click(() => {
        $('#image2').show(1000, () => {
            alert("the effect took a while");
        });
    })

    $('#hide1').click(() => {
        $('#image2').hide("fast")
    })


    //Showing the use of toggle
    $("#toggle").click(() => {
        $('#div1, #div2').toggle();

    })

})