var quotes = [
   "Keep the change ya filthy animal",
   "We're gunna need a bigger boat",
   "I'm gonna make him an offer he can't refuse.",
   "Frankly, my dear, I don't give a damn.",
   "Toto, I've a feeling we're not in Kansas anymore.",
   "Here's looking at you, kid.",
   "Go ahead, make my day.",
   "May the Force be with you.",
   "You talkin to me!?"
   ];

function generate(){
    return Math.floor(Math.random() * quotes.length);
}

$("button").on("click", function() {
    $("#result h1").html(quotes[generate()]);
})
