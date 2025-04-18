const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. – William Butler Yeats",
    "Whether you think you can or you think you can’t, you’re right. – Henry Ford",
    "I have not failed. I’ve just found 10,000 ways that won’t work. – Thomas Edison",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The best way to predict the future is to invent it. – Alan Kay",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Keep your eyes on the stars, and your feet on the ground. – Theodore Roosevelt",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. – William James",
    "Quality means doing it right when no one is looking. – Henry Ford",
    "Perseverance is not a long race; it is many short races one after the other. – Walter Elliot",
    "If you’re going through hell, keep going. – Winston Churchill",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people. – Eleanor Roosevelt",
    "The future depends on what you do today. – Mahatma Gandhi",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "Dream big and dare to fail. – Norman Vaughan",
    "A person who never made a mistake never tried anything new. – Albert Einstein",
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
    "Discipline is the bridge between goals and accomplishment. – Jim Rohn",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "Opportunities don't happen. You create them. – Chris Grosser",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "What you do today can improve all your tomorrows. – Ralph Marston",
    "Failure will never overtake me if my determination to succeed is strong enough. – Og Mandino",
    "We become what we think about. – Earl Nightingale",
    "Only those who dare to fail greatly can ever achieve greatly. – Robert F. Kennedy",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "I am not a product of my circumstances. I am a product of my decisions. – Stephen Covey",
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    "Don’t count the days, make the days count. – Muhammad Ali",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Do what you can with all you have, wherever you are. – Theodore Roosevelt",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Push yourself, because no one else is going to do it for you. – Unknown",
    "Little by little, a little becomes a lot. – Tanzanian Proverb",
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "Don’t limit your challenges. Challenge your limits. – Unknown",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
    "Dream it. Wish it. Do it. – Unknown",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "If you can dream it, you can do it. – Walt Disney",
    "Motivation is what gets you started. Habit is what keeps you going. – Jim Ryun"
  ];

  
 const button = document.getElementById("button");
 
 button.addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random()* quotes.length);
    let newQuote = quotes[randomIndex];
    console.log(newQuote);

    const display = document.getElementById("quoteDisplay");
    if (display) {
        display.textContent = newQuote;
    }
 });
