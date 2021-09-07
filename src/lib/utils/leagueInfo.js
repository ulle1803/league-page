/*   STEP 1   */
export const leagueID = "662332565339865088"; // your league ID
export const leagueName = "No Punt Intended Dynasty League"; // your league name
export const dues = 15; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper

/*   STEP 2   */
export const homepageText = `
  <p>Die No Punt Intended Dynasty League wurde im Jahr 2021 gegründet, um die besten Fantasyspieler Deutschlands - wenn nicht sogar der Welt - zusammenzuführen und gegeneinander antreten zu lassen.</p>
  <p>Spieler aus ganz Deutschland (aber komischerweise irgendwie vorwiegend aus Hamburg und Münster) kämpfen um den umworbenen Titel des allerbesten Dynastyfootballspielers.</p>
  <p>Die Teilnehmer müssen all ihr Wissen und Können unter Beweis stellen, wenn sie auch nur eine Chance auf die Trophäe haben wollen, denn wie jeder weiß: mit Glück hat das Ganze überhaupt nicht zu tun.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#2-add-managers
*/

// To omit an optional field, set it's value to null

export const managers = [
   {
     "roster": 1,  // ID of the roster that the manager manages
     "name": "ulle", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Hamburg",
     "bio": "Lorem ipsum...",
     "photo": "/managers/ulle2.jpg", // done
     "fantasyStart": 2019, // when did the manager start playing fantasy football
     "favoriteTeam": "ari", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Kai", // Can be anything (usually your rival's name)
       link: 9, // manager array number within this array, or null to link back to all managers page
       image: "/managers/kai.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 7544, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "TE", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 7, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
    {
     "roster": 2,  // ID of the roster that the manager manages
     "name": "KingKrumme", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Köln",
     "bio": "Lorem ipsum...",
     "photo": "/managers/julius.jpg", // done
     "fantasyStart": 2019, // when did the manager start playing fantasy football
     "favoriteTeam": "sea", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Jan", // Can be anything (usually your rival's name)
       link: 14, // manager array number within this array, or null to link back to all managers page
       image: "/managers/jan.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 1233, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 4, // 1 - 10
     "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 3,  // ID of the roster that the manager manages
     "name": "HolgerN", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Hamburg",
     "bio": "Lorem ipsum...",
     "photo": "/managers/holger.jpg", // done
     "fantasyStart": 2018, // when did the manager start playing fantasy football
     "favoriteTeam": "cle", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Dynasty", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Nils", // Can be anything (usually your rival's name)
       link: 4, // manager array number within this array, or null to link back to all managers page
       image: "/managers/nils.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 3973, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "QB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 7, // 1 - 10
     "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
    {
     "roster": 4,  // ID of the roster that the manager manages
     "name": "BroncosMC", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Groß Mimmelage",
     "bio": "Lorem ipsum...",
     "photo": "/managers/marek.jpg", // done
     "fantasyStart": 2017, // when did the manager start playing fantasy football
     "favoriteTeam": "den", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "JaziemlichNice", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/jannis.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 3262, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 4, // 1 - 10
     "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
    {
     "roster": 5,  // ID of the roster that the manager manages
     "name": "NilleN", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Hamburg",
     "bio": "Lorem ipsum...",
     "photo": "/managers/nils.jpg", // done
     "fantasyStart": 2019, // when did the manager start playing fantasy football
     "favoriteTeam": "buf", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Dynasty", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "HolgerN", // Can be anything (usually your rival's name)
       link: 2, // manager array number within this array, or null to link back to all managers page
       image: "/managers/holger.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 4984, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "QB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 4, // 1 - 10
     "preferredContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
    {
     "roster": 6,  // ID of the roster that the manager manages
     "name": "Clemo", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Hamburg",
     "bio": "Lorem ipsum...",
     "photo": "/managers/clemo.jpg", // done
     "fantasyStart": 2020, // when did the manager start playing fantasy football
     "favoriteTeam": "lar", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Dynasty", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Felix95", // Can be anything (usually your rival's name)
       link: 7, // manager array number within this array, or null to link back to all managers page
       image: "/managers/felix.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 2315, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 3, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
    {
     "roster": 7,  // ID of the roster that the manager manages
     "name": "JaziemlichNice", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Hamburg",
     "bio": "Lorem ipsum...",
     "photo": "/managers/jannis.jpg", // done
     "fantasyStart": 2016, // when did the manager start playing fantasy football
     "favoriteTeam": "sf", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Dynasty", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "BroncosMC", // Can be anything (usually your rival's name)
       link: 3, // manager array number within this array, or null to link back to all managers page
       image: "/managers/marek.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 4004, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "LB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 2, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
    {
     "roster": 8,  // ID of the roster that the manager manages
     "name": "Felix95", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Flensburg",
     "bio": "Lorem ipsum...",
     "photo": "/managers/felix.jpg", // done
     "fantasyStart": 2019, // when did the manager start playing fantasy football
     "favoriteTeam": "no", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Clemo", // Can be anything (usually your rival's name)
       link: 5, // manager array number within this array, or null to link back to all managers page
       image: "/managers/clemo.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 4035, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Dynasty aufbauen",
     "tradingScale": 9, // 1 - 10
     "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
    {
     "roster": 9,  // ID of the roster that the manager manages
     "name": "Maxstah", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Köln",
     "bio": "Lorem ipsum...",
     "photo": "/managers/max.jpg", // done
     "fantasyStart": 2015, // when did the manager start playing fantasy football
     "favoriteTeam": "no", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Dynasty", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Simon", // Can be anything (usually your rival's name)
       link: 13, // manager array number within this array, or null to link back to all managers page
       image: "/managers/simon.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 289, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Long-Term Success",
     "tradingScale": 9, // 1 - 10
     "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
    {
     "roster": 10,  // ID of the roster that the manager manages
     "name": "PickSixxer", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Münster",
     "bio": "Lorem ipsum...",
     "photo": "/managers/kai.jpg", // done
     "fantasyStart": 2017, // when did the manager start playing fantasy football
     "favoriteTeam": "sf", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Ulf", // Can be anything (usually your rival's name)
       link: 0, // manager array number within this array, or null to link back to all managers page
       image: "/managers/ulle2.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 3164, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "TE", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 3, // 1 - 10
     "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
    {
     "roster": 11,  // ID of the roster that the manager manages
     "name": "rigoros", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Münster",
     "bio": "Lorem ipsum...",
     "photo": "/managers/rigo.jpg", // done
     "fantasyStart": 2019, // when did the manager start playing fantasy football
     "favoriteTeam": "phi", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "PickSixxer", // Can be anything (usually your rival's name)
       link: 9, // manager array number within this array, or null to link back to all managers page
       image: "/managers/kai.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 5937, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 7, // 1 - 10
     "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
    {
     "roster": 12,  // ID of the roster that the manager manages
     "name": "Sepperl0t", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Hamburg",
     "bio": "Lorem ipsum...",
     "photo": "/managers/basti.jpg", // done
     "fantasyStart": 2019, // when did the manager start playing fantasy football
     "favoriteTeam": "nyj", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "PP1990", // Can be anything (usually your rival's name)
       link: 12, // manager array number within this array, or null to link back to all managers page
       image: "/managers/patrick.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 5937, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 7, // 1 - 10
     "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
    {
     "roster": 13,  // ID of the roster that the manager manages
     "name": "PP1990", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Hamburg",
     "bio": "Lorem ipsum...",
     "photo": "/managers/patrick.jpg", // done
     "fantasyStart": 2019, // when did the manager start playing fantasy football
     "favoriteTeam": "ne", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Sepperl0t", // Can be anything (usually your rival's name)
       link: 11, // manager array number within this array, or null to link back to all managers page
       image: "/managers/basti.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 5937, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 7, // 1 - 10
     "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
    {
     "roster": 14,  // ID of the roster that the manager manages
     "name": "DAWGPOUND", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Hamburg",
     "bio": "Lorem ipsum...",
     "photo": "/managers/simon.jpg", // done
     "fantasyStart": 2019, // when did the manager start playing fantasy football
     "favoriteTeam": "cle", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Max", // Can be anything (usually your rival's name)
       link: 8, // manager array number within this array, or null to link back to all managers page
       image: "/managers/max.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 3682, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 7, // 1 - 10
     "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
    {
     "roster": 15,  // ID of the roster that the manager manages
     "name": "Schroedi", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Münster",
     "bio": "Lorem ipsum...",
     "photo": "/managers/jan.jpg", // done
     "fantasyStart": 2018, // when did the manager start playing fantasy football
     "favoriteTeam": "gb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Rebuild", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Julius", // Can be anything (usually your rival's name)
       link:  1, // manager array number within this array, or null to link back to all managers page
       image: "managers/julius.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 96, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "DE", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 3, // 1 - 10
     "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
    {
     "roster": 16,  // ID of the roster that the manager manages
     "name": "MSSeahawks", // (optional) used if a manager took over a team, null or omit otherwise
     "location": "Münster",
     "bio": "Lorem Ipsum..",
     "photo": "/managers/valle.jpg", // done
     "fantasyStart": 2016, // when did the manager start playing fantasy football
     "favoriteTeam": "sea", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Dynasty", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Max", // Can be anything (usually your rival's name)
       link: 8, // manager array number within this array, or null to link back to all managers page
       image: "/managers/max.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 223, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "FS", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 7, // 1 - 10
     "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   }  
 ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
