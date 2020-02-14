var currentQuote = '';
var quotes = [
	"I refuse to be beaten in any way, shape, or form, so I'm gonna beat this too.",
	"You can't tell young people what to do. You can't tell 'em because they'll look at you and say, 'Well, how can you tell me not to do that when you were there doing it yourself?' Or supposedly you were doing it yourself. I think you must let everyone live their life the way they have to.",
	"Sometimes [I write] melody [first] and sometimes lyrics. It depends on the tempo and the feel of the song. Slower pieces usually begin with melody and faster ones with lyrics. I write for the song and it leads me to my conclusion.",
	"It's just that heavy metal musicians write in minor keys, and when you do that, you frighten people.",
	"I'm lucky that I am a very hard person, and strong within my beliefs, so that this hasn't really been a problem to me, y'know, I just get cancer, I'll kick the hell outta you.",
	"For every moment of truth, there's confusion in life.",
	"Religion, much like fantasy, much like the tales of King Arthur is, again, something that is so difficult to put a hand on and say 'this actually happened.' It's such a matter of belief that you're really dealing in the same kind of properties.",
	"Music, Rock and Roll music especially, is such a generational thing. Each generation must have their own music, I had my own in my generation, you have yours, everyone I know has their own generation.",
	"My childhood was safe and sane. No abuse and no traumas. I was surrounded by a large and loving family who taught me the importance of hard work and a meaningful education.",
	"Lyrically I like to use themes that make the listener use his or her imagination, and to give a little of the lessons I've learned in my own life.",
	"The best subjects are always people, who never fail to amaze me by their unpredictability.",
	"The music industry's actions at the time of 9/11 and since have been actions driven by patriotism in most instances, and greed and stupidity to a lesser degree. Sounds like real life doesn't it?",
	"I've never taken vocal lessons. My early trumpet training and a fortunate talent for singing has always been enough for me. In the case of rock singing, I've always felt it was better to remain a bit untrained to maintain your individuality.",
	"I always wanted to be a basketball player.",
	"This is your here, this is your now, let it be magical!"
]

$(document).ready(function() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	currentQuote = quotes[randomNumber];

	$('#quoteDisplay').html(currentQuote);
	$('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' + currentQuote).attr('target', '_blank');
})

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	currentQuote = quotes[randomNumber];
	document.getElementById('quoteDisplay').innerHTML = currentQuote;
	$('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' + currentQuote).attr('target', '_blank');
}