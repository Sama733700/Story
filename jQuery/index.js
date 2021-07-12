//Example of changing/setting CSS with jQuery
$("h1").css("color","red");
//Example of getting CSS
$("h1").css("color");

//EXample of seeting/changing html with jQuery
$("h1").html("<em>Goodbye</em>");
$("h1").before("<input type='checkbox'>");//this adds an element before
$("h1").after("<input type='checkbox'>");//this adds an element after
$("h1").prepend("<input class='check' type='checkbox'>");//this adds an element before the h1's text but inside the h1 tage
$("h1").append("<input type='checkbox'>");//this adds an element after the h1's text but inside the h1 tage
// Removing an element with jQuery
$(".check").remove();

//Example of changing text with jQuery
$("h1").text("Goodbye");


//Example of getting an element with jQuery by name
$("h1");
$("button"); // Note that this is equivalent to document.querySelectorAll and it can also change the value of all if you assign it something
// Ex
$("button").css("background-color","blue");

//Getting elements with jQuery has exactly the same naming rules as the DOM

//Class Examples with jquery:

//Adding and removing a class or multiple classes (with the spacing)
$("button").addClass("title margin");
$("button").removeClass("margin");



//Checking if something has a class
$("button").hasClass("title");



//Getting an element's attribute with jQuery
$("button.google").attr("name")
//Setting
$("button.google").attr("name","btn")


// Applying functionality with jQuery/ The same thing that addEventListener does.
$("button.google").click(function(){
  $("button.google").css("color","red");
})
// another way of adding an addEventListener
$("h1").on("mouseover"/*here any event (google DOM events on mdn) like mouseover,click,keydown*/,function(){
  $("h1").css("color","purple");
})

//keydown with jquery
$("input").keydown(function(event){
  console.log(event.key);
})
//this selects the entire document
$("body").keydown(function(event){
  $("h1").text(event.key);
})


//jQuery animations:
//This one hides
$(".google").on("click",function(){
  $("h1").hide();
})
//This one shows
$(".show").on("click",function(){
  $("h1").show();
})
//This one toggles
$(".toggle").on("click",function(){
  $("h1").toggle();
})
//This one makes it fade
$(".fadeOut").on("click",function(){
  $("h1").fadeOut();
})
//This one make it fade in
$(".FadeIn").on("click",function(){
  $("h1").fadeIn();
})
//Toggles between the two
$(".fadeToggle").on("click",function(){
  $("h1").fadeToggle();
})
//Makes it collapes
$(".slideUp").on("click",function(){
  $("h1").slideUp();
})
//Makes it uncollapse
$(".slideDown").on("click",function(){
  $("h1").slideDown();
})
//Toggles between them
$(".slideToggle").on("click",function(){
  $("h1").slideToggle();
})
//This one allows you to animate stuff
$(".animate").on("click",function(){
  $("h1").animate({/*In here you can only put in CSS rules that have a numeric value like this:*/ opacity:0.5});
})
$(".margins").on("click",function(){
  $("h1").animate({/*or like this::*/ margin:20});
})

//You can also put multiple methods at the same time but remember that it'll do it in order.
$(".multiple").on("click",function(){
  $("h1").slideUp().slideDown().animate({padding:50});
})
