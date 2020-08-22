$(document).ready(function()  {

  $(document).on("click",function(e){
    var screenwidth = window.innerWidth;
    if (screenwidth < 768) {
      $("#navbarNavDropdown").collapse("hide");
    }
  });
});