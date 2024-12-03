import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

const DadJokeGenerator = () => {
  const [currentJoke, setCurrentJoke] = useState(null);
  const [showPunchline, setShowPunchline] = useState(false);
  const [loading, setLoading] = useState(false);

  const jokes = [
    {
      setup: "Why don't eggs tell jokes?",
      punchline: "They'd crack up!"
    },
    {
      setup: "What do you call a bear with no teeth?",
      punchline: "A gummy bear!"
    },
    {
      setup: "What did the grape say when it got stepped on?",
      punchline: "Nothing, it just let out a little wine!"
    },
    {
      setup: "Why don't oysters donate to charity?",
      punchline: "Because they're shellfish!"
    },
    {
      setup: "What do you call a pig that does karate?",
      punchline: "A pork chop!"
    },
    {
      setup: "What does a cloud wear under its raincoat?",
      punchline: "Thunderwear!"
    },
    {
      setup: "What do you call fake spaghetti?",
      punchline: "An impasta!"
    },
    {
      setup: "Why did the cookie go to the doctor?",
      punchline: "Because it was feeling crumbly!"
    },
    {
      setup: "What do you call a dinosaur that crashes his car?",
      punchline: "Tyrannosaurus wrecks!"
    },
    {
      setup: "Why can't a nose be 12 inches long?",
      punchline: "Because then it would be a foot!"
    },
    {
      setup: "What do you call a dog magician?",
      punchline: "A labracadabrador!"
    },
    {
      setup: "Why did the gym close down?",
      punchline: "It just didn't work out!"
    },
    {
      setup: "What do you call two monkeys that share an Amazon account?",
      punchline: "Prime mates!"
    },
    {
      setup: "Why did the math book look so sad?",
      punchline: "Because it had too many problems!"
    },
    {
      setup: "What do you call a can opener that doesn't work?",
      punchline: "A can't opener!"
    },
    {
      setup: "Why don't skeletons fight each other?",
      punchline: "They don't have the guts!"
    },
    {
      setup: "What did one wall say to the other wall?",
      punchline: "I'll meet you at the corner!"
    },
    {
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!"
    },
    {
      setup: "What do you call a pile of cats?",
      punchline: "A meow-ntain!"
    },
    {
      setup: "What did the traffic light say to the car?",
      punchline: "Don't look now, I'm changing!"
    }
  ];

  const getRandomJoke = () => {
    setLoading(true);
    setShowPunchline(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      setCurrentJoke(jokes[randomIndex]);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Dad Joke Generator</h1>
        
        {currentJoke ? (
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-6 min-h-24 flex items-center justify-center">
              <p className="text-xl text-center text-gray-700">{currentJoke.setup}</p>
            </div>
            
            {!showPunchline ? (
              <button
                onClick={() => setShowPunchline(true)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg 
                         transition-colors duration-200"
              >
                Show Answer
              </button>
            ) : (
              <div className="bg-blue-50 rounded-lg p-6 min-h-24 flex items-center justify-center">
                <p className="text-xl text-center text-blue-700">{currentJoke.punchline}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-6 min-h-24 flex items-center justify-center">
            <p className="text-xl text-center text-gray-500">Click for a joke!</p>
          </div>
        )}
        
        <button
          onClick={getRandomJoke}
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg 
                   transition-colors duration-200 flex items-center justify-center gap-2 mt-6"
        >
          <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
          New Joke
        </button>
      </div>
    </div>
  );
};

export default DadJokeGenerator;
