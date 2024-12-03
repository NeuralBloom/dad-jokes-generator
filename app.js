const { useState } = React;
const { RefreshCw } = lucideReact;

const DadJokeGenerator = () => {
 const [currentJoke, setCurrentJoke] = useState(null);
 const [showPunchline, setShowPunchline] = useState(false);
 const [loading, setLoading] = useState(false);

 const jokes = [
   {setup: "Why don't eggs tell jokes?", punchline: "They'd crack up!"},
   {setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!"},
   {setup: "What do you call a pig that does karate?", punchline: "A pork chop!"},
   {setup: "Why did the cookie go to the doctor?", punchline: "Because it was feeling crumbly!"},
   {setup: "What did the grape say when it got stepped on?", punchline: "Nothing, it just let out a little wine!"},
   {setup: "Why don't oysters donate to charity?", punchline: "Because they're shellfish!"},
   {setup: "What does a cloud wear under its raincoat?", punchline: "Thunderwear!"},
   {setup: "What do you call fake spaghetti?", punchline: "An impasta!"},
   {setup: "What do you call a dinosaur that crashes his car?", punchline: "Tyrannosaurus wrecks!"},
   {setup: "Why can't a nose be 12 inches long?", punchline: "Because then it would be a foot!"},
   {setup: "What do you call a dog magician?", punchline: "A labracadabrador!"},
   {setup: "Why did the gym close down?", punchline: "It just didn't work out!"},
   {setup: "What do you call two monkeys that share an Amazon account?", punchline: "Prime mates!"},
   {setup: "Why did the math book look so sad?", punchline: "Because it had too many problems!"},
   {setup: "What do you call a can opener that doesn't work?", punchline: "A can't opener!"},
   {setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts!"},
   {setup: "What did one wall say to the other wall?", punchline: "I'll meet you at the corner!"},
   {setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!"},
   {setup: "What do you call a pile of cats?", punchline: "A meow-ntain!"},
   {setup: "What did the traffic light say to the car?", punchline: "Don't look now, I'm changing!"},
   {setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese!"},
   {setup: "Why did the golfer bring two pairs of pants?", punchline: "In case he got a hole in one!"},
   {setup: "What do you call a fake stone?", punchline: "A sham rock!"},
   {setup: "What do you call a sleeping bull?", punchline: "A bulldozer!"},
   {setup: "Why did the scarecrow win an award?", punchline: "He was outstanding in his field!"},
   {setup: "What kind of tree fits in your hand?", punchline: "A palm tree!"},
   {setup: "What did the ocean say to the shore?", punchline: "Nothing, it just waved!"},
   {setup: "Why don't eggs tell each other secrets?", punchline: "Because they might crack up!"},
   {setup: "What do you call a bear with no ears?", punchline: "B!"},
   {setup: "What did the fish say when he swam into a wall?", punchline: "Dam!"},
   {setup: "Why did the cookie go to the doctor?", punchline: "Because it was feeling crumbly!"},
   {setup: "What do you call a sleeping pizza?", punchline: "A pizzzzza!"},
   {setup: "Why did the belt go to jail?", punchline: "For holding up pants!"},
   {setup: "What do you call a laughing motorcycle?", punchline: "A Yamahahaha!"},
   {setup: "Why did the baby strawberry cry?", punchline: "Because his parents were in a jam!"},
   {setup: "What do you call a duck that gets all A's?", punchline: "A wise quacker!"},
   {setup: "Why was six afraid of seven?", punchline: "Because seven eight nine!"},
   {setup: "What do dentists call their x-rays?", punchline: "Tooth pics!"},
   {setup: "Why did the gym close down?", punchline: "It just didn't work out!"},
   {setup: "What did the grape do when it got stepped on?", punchline: "It let out a little wine!"},
   {setup: "What do you call a pig that does karate?", punchline: "A pork chop!"},
   {setup: "Why can't a leopard hide?", punchline: "Because he's always spotted!"},
   {setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!"},
   {setup: "What do you get when you cross a snowman and a vampire?", punchline: "Frostbite!"},
   {setup: "What do you call a can opener that doesn't work?", punchline: "A can't opener!"},
   {setup: "Why did the cookie go to the hospital?", punchline: "Because he felt crumbly!"},
   {setup: "What do you call fake spaghetti?", punchline: "An impasta!"},
   {setup: "Why did the scarecrow become a successful motivational speaker?", punchline: "He was outstanding in his field!"},
   {setup: "What do you call a boastful criminal going downstairs?", punchline: "A condescending con descending!"},
   {setup: "What did the lawyer say to the cheese?", punchline: "I know you're innocent, you've been framed!"},
   {setup: "What do you call it when a dinosaur crashes his car?", punchline: "Tyrannosaurus wrecks!"},
   {setup: "Why did the invisible man turn down the job offer?", punchline: "He couldn't see himself doing it!"},
   {setup: "What do you call a belt made of watches?", punchline: "A waist of time!"},
   {setup: "Why don't vampires like racing cars?", punchline: "They're afraid of stake turns!"},
   {setup: "What did one plate say to the other?", punchline: "Dinner's on me!"},
   {setup: "Why did the math book look sad?", punchline: "Because it had too many problems!"},
   {setup: "What do you call a sleeping dinosaur?", punchline: "A dino-snore!"},
   {setup: "Why did the cookie go to therapy?", punchline: "Because it was feeling crumbly!"},
   {setup: "What do you call a duck that loves making jokes?", punchline: "A wise quacker!"},
   {setup: "Why don't scientists trust stairs?", punchline: "Because they're always up to something!"},
   {setup: "What did one eye say to the other?", punchline: "Between you and me, something smells!"},
   {setup: "Why did the bicycle fall over?", punchline: "It was two-tired!"},
   {setup: "What do you call a ship that sinks and has a hospital on it?", punchline: "A dock!"},
   {setup: "Why don't crabs give to charity?", punchline: "Because they're shellfish!"},
   {setup: "What did the buffalo say to his son when he left for college?", punchline: "Bison!"},
   {setup: "What did the digital clock say to the grandfather clock?", punchline: "Look grandpa, no hands!"},
   {setup: "Why did the jellybean go to school?", punchline: "To become a smartie!"},
   {setup: "What did one hat say to the other?", punchline: "You stay here, I'll go on ahead!"},
   {setup: "Why don't eggs tell jokes?", punchline: "They'd crack up!"},
   {setup: "What do you call a bear with bad teeth?", punchline: "A gummy bear!"},
   {setup: "Why did the cookie go to the nurse?", punchline: "Because it was feeling crumbly!"},
   {setup: "What did one plate whisper to the other plate?", punchline: "Dinner is on me!"},
   {setup: "Why did the golfer wear two pairs of pants?", punchline: "In case he got a hole in one!"},
   {setup: "What do you call a sad coffee?", punchline: "Depresso!"},
   {setup: "Why don't ants get sick?", punchline: "Because they have tiny ant-ibodies!"},
   {setup: "What kind of shoes do ninjas wear?", punchline: "Sneakers!"},
   {setup: "Why did the cookie go to the doctor?", punchline: "Because it was feeling crumbly!"},
   {setup: "What did one wall say to the other wall?", punchline: "I'll meet you at the corner!"},
   {setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts!"},
   {setup: "What do you call a bear with no ears?", punchline: "B!"},
   {setup: "What did zero say to eight?", punchline: "Nice belt!"},
   {setup: "Why did the math book look so sad?", punchline: "Because it had too many problems!"},
   {setup: "What do you call a can opener that doesn't work?", punchline: "A can't opener!"},
   {setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!"},
   {setup: "What do you call a pile of cats?", punchline: "A meow-ntain!"},
   {setup: "What did the traffic light say to the car?", punchline: "Don't look now, I'm changing!"},
   {setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!"},
   {setup: "What do you call a fake noodle?", punchline: "An impasta!"},
   {setup: "Why did the cookie go to the hospital?", punchline: "Because it was feeling crumbly!"},
   {setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!"},
   {setup: "Why did the gym close down?", punchline: "It just didn't work out!"},
   {setup: "What do you call two monkeys that share an Amazon account?", punchline: "Prime mates!"},
   {setup: "Why did the math book look sad?", punchline: "Because it had too many problems!"},
   {setup: "What do you call a can opener that doesn't work?", punchline: "A can't opener!"},
   {setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts!"},
   {setup: "What did one wall say to the other wall?", punchline: "I'll meet you at the corner!"},
   {setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!"},
   {setup: "What do you call a pile of cats?", punchline: "A meow-ntain!"},
   {setup: "What did the grape do when it got stepped on?", punchline: "It let out a little wine!"},
   {setup: "Why don't oysters donate to charity?", punchline: "Because they're shellfish!"},
   {setup: "What do you call a dog magician?", punchline: "A labracadabrador!"},
   {setup: "Why did the cookie go to therapy?", punchline: "Because it was feeling crumbly!"},
   {setup: "What do you call a bear with no ears?", punchline: "B!"},
   {setup: "Why did the scarecrow become a famous speaker?", punchline: "He was outstanding in his field!"},
   {setup: "What do you call a fake stone?", punchline: "A sham rock!"}
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
export default DadJokeGenerator;
};
