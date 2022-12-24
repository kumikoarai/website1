$(function() {
    var dt = $("dt");
    var dd = $("dd");
    var q_text = $(".q_text");

    dt.click(function() {
        var this_dt = $(this);
        var next_dd = this_dt.next(dd);
        next_dd.slideToggle(300);
        var q_text_in_this_dt = this_dt.find(q_text);
        q_text_in_this_dt.toggleClass("open");
    });
});