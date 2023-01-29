
$(function() {
  var sectionScroll = document.getElementById("scrollSection")
  sectionScroll.mousewheel(function(evt, chg) {
     this.scrollLeft -= (chg * 50); //need a value to speed up the change
     evt.preventDefault();
  });
});
