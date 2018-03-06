$(function () {
    var s1=$('#sec1').position().top;
    var s2=$('#sec2').position().top;
    var s3=$('#sec3').position().top;
    $(document).on("scroll", function () {
        if ($(this).scrollTop() >= s2 ){
            document.getElementById("navbar").style.boxShadow=" 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)";
            document.getElementById("navbar").style.backgroundColor="#141414";
            document.getElementById("logoName").style.display="block";
        }if ($(this).scrollTop() < s2 ){
            document.getElementById("navbar").style.boxShadow="none";
            document.getElementById("navbar").style.backgroundColor="rgba(0,0,0,0)";
        }
    });
    $(document).keydown(function(e) {
        if($(document).scrollTop()<s2){
            if(e.which==40){
                $('html, body').animate({
                    scrollTop: $('#sec2').offset().top+1
                }, 600);
            }
        }
        if($(document).scrollTop()>=s2 && $(document).scrollTop()<s3-10){
            if(e.which==38){
                $('html, body').animate({
                    scrollTop: $('#sec1').offset().top-10
                }, 600);
            }
            if(e.which==40){
                $('html, body').animate({
                    scrollTop: $('#sec3').offset().top
                }, 600);
            }
        }
        if($(document).scrollTop()>=s3-10){
            if(e.which==38){
                //alert($('#sec2').offset().top);
                $('html, body').animate({
                    scrollTop: $('#sec2').offset().top+1
                }, 600);
            }
        }
    });
});
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}