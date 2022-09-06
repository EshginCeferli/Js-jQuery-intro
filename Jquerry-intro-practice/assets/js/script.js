$(document).ready(function () {

    // $("p").click(function () {
    //     $(this).hide();
    // })

    // $("h6").click(function () {
    //     $(this).hide();
    // })


    //mouse events
    // $('input').mouseover(function () {
    //     console.log("mouse over");
    // });

    // $('input').focus(function () {
    //     console.log("mouse focused");
    // });

    // $('input').hover(function () {
    //     console.log("mouse over");
    // })

    // $('input').change(function () {
    //     console.log("changed");
    // })

    // $('input').on
    //     ({
    //         "click": function () { console.log("clicked") },
    //         "change": function () { console.log("changed"); }
    //     })


    $("p").click(function () {
        $(this).slideUp(500)
    })

    // $("h6").click(function () {
    //     $(this).fadeOut(500)
    // });

    $("h6").click(function () {
        $(this).toggle(500)
    })














});