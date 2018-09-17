$(document).ready(function(){
   var sidebarItem = $(".sidebar-item");
   var listItem = $(".list-item");

   sidebarItem.click(function() {
   	sidebarItem.removeClass("active");
   	$(this).addClass("active");
   });

   listItem.click(function() {
   	listItem.removeClass("active");
   	$(this).addClass("active");
   });

});