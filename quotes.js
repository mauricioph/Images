(function() {
      var quotes = [
      	{
			text: "Believing is a matter of life dedicated to the person one believes. It means honoring your word to the commitment until death, assumed on the Altar.",
			author: "Bishop Edir Macedo",
			img: "images/BMporto_24_5_15.jpg",
		},
		{
			text: "He that speaks good things sow that which is good, and gather that which is good. He that speaks evil, sow that which is evil, and reap that which is evil.",
			author: "Bishop Edir Macedo",
			img: "images/BMporto_24_5_15.jpg",
		},
		{
			text: "Sacrifice is the door that leads to the fulfillment of your greatest dream.",
			author: "Bishop Edir Macedo",
			img: "images/BMporto_24_5_15.jpg",
		},
		{
			text: "We must get hold of the whole Armor of God to deliver the oppressed.",
			author: "Bishop Edir Macedo",
			img: "images/bispo-edir-macedo-tmpl.jpg",
		},
        {
          	text: "If you think you can do it, you are right. If you think you cannot do it, you are also right.",
          	author:  "Bishop Edir Macedo",
			img: "images/bispo-edir-macedo-tmpl.jpg",
        },
        {
          	text: "Grief is an emotional waste. When you feed hurt you are eating rubbish.",
          	author:  "Bishop Renato Cardoso",
			img: "images/Bispo-renato-cardoso.jpg",
        },
		{
			text: "When you find that there is nothing better than what you already know, you are officially old.",
			author: "Bishop Renato Cardoso",
			img: "images/Bispo-renato-cardoso.jpg",
		},
		{
			text: "Unsubstantiated doubt is like a sign on the way trying to deflect your thoughts. Go on your way and it will be left behind. And if it appears again, repeat the process.",
			author: "Bishop Renato Cardoso",
			img: "images/Bispo-renato-cardoso.jpg",
		},
		{
			text: "Sometimes God's greatest blessings come from prayers that He does not respond to.",
			author: "Bishop Renato Cardoso",
			img: "images/Bispo-renato-cardoso.jpg",
		},
		{
			text: "Parents must be balanced, allow certain mistakes of their children and not being on their case all the time for everything. But in the main things, they must be firm and just.",
			author: "Bishop Renato Cardoso",
			img: "images/Bispo-renato-cardoso.jpg",
		},
		{
			text: "Beware of the unacceptable you end up accepting. The unacceptable of yesterday that is accepted today becomes the normal of tomorrow.",
			author: "Bishop Renato Cardoso",
			img: "images/Bispo-renato-cardoso.jpg",
		},
		{
			text: "Maturity comes with battles",
			author: "Cristiane Cardoso",
			img: "images/cristiane-cardoso.jpg",
		},
		{
			text: "Even Jesus knowing that Judas was the traitor, Jesus did not exclude him from his pilgrimages, from his life here on earth and from the Lord's Supper, because JESUS ​​was Jesus regardless of who was around him!",
			author: "Cristiane Cardoso",
			img: "images/cristiane-cardoso.jpg",
		},
		{
			text: "There will always be people who will not be true friends, but what can I do about it? Nothing. But that does not mean that I will become that kind of person too!",
			author: "Cristiane Cardoso",
			img: "images/cristiane-cardoso.jpg",
		},
		{
			text: "The woman of God who practices the Word of God is a true and sincere friend, even though she knows that she is surrounded by pretenders and false people. She is authentic.",
			author: "Cristiane Cardoso",
			img: "images/cristiane-cardoso.jpg",
		},
		{
			text: "Authenticity is to be a woman of God and to have the attitudes of a woman of God regardless of the things or people around you.",
			author: "Cristiane Cardoso",
			img: "images/cristiane-cardoso.jpg",
		},
		{
			text: "The first step to victory is not to justify your failures.",
			author: "Bishop Julio Freitas",
			img: "images/bispo-julio-freitas.jpg",
		},
		{
			text: "Free will has been given to us so that in choosing our goals we never give up on them.",
			author: "Bishop Julio Freitas",
			img: "images/bispo-julio-freitas.jpg",
		},
		{ // 
			text: "If you do not believe in your success, who will believe?",
			author: "Bishop Julio Freitas",
			img: "images/bispo-julio-freitas.jpg",
		},
		{
			text: "Our life is the reflection of goals achieved or frustrated.",
			author: "Bishop Julio Freitas",
			img: "images/bispo-julio-freitas.jpg",
		},
		{
			text: "Live your goals and you can change the world around you.",
			author: "Bishop Julio Freitas",
			img: "images/bispo-julio-freitas.jpg",
		},
		{ 
			text: "THE VISION OF THE REVOLTED IS THE VISION OF GOD, that is why he can see what a man in his confort zone can not!",
			author: "Bishop Julio Freitas",
			img: "images/bispo-julio-freitas.jpg",
		},
		{ 
			text: "Discipline is you remind yourself every day, what is your goal today",
			author: "Bishop Julio Freitas",
			img: "images/bispo-julio-freitas.jpg",
		},
		{ 
			text: "The only way we enter in the kingdom of heaven is from faith to faith.",
			author: "Bishop Alvaro Lima",
			img: "images/Bishop-Alvaro-Lima.jpg",
		}
      ];
      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").innerHTML =
        '<p class="quote">' + quote.text + '</p>' +
        '<p class="author"> – ' + quote.author + '</p>';
      if(typeof quote.suggestor !== 'undefined') {
      	document.getElementById("quote").innerHTML =
        	'<p class="quote">' + quote.text + '</p>' +
        	'<p class="author"> – ' + quote.author + '</p>' +
        	'<p class="suggestor">Suggested by ' + quote.suggestor + '</p>';
      }
	  document.body.style.backgroundImage = 'url('+ quote.img +')';
    })();
