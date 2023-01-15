const sequelize = require("../config/connection.js");
const Artist = require("../models/Artist.js");

const artistData = [
  {
    artist_name: "50 Cent",
    genre: "Hip-Hop/ Rap",
    album: "Get Rich or Die Tyrin",
    album_year: "2003",
    song_1: "Intro",
    song_2: "What Up Gangsta [explicit]",
    song_3: "Patiently Waiting [feat.Eminem]",
    song_4: "Many Men (Wish Death) [explicit]",
    song_5: "In Da Club",
    song_6: "High All The Time [explicit]",
    song_7: "Heat [explicit]",
    song_8: "If I Can't [explicit]",
    song_9: "Blood Hound [feat. Young Buck]",
    song_10: "Back Down [explicit]",
    song_11: "P.I.M.P [explicit]",
    song_12: "Like My Style [feat. Tony Yayo",
    song_13: "Poor Lil Rich [explicit]",
    song_14: "21 Questions [feat. Nate Dogg]",
    song_15: "Don't Push Me [feat. Lloyd Bank]",
    song_16: "Gotta Make It To Heaven [explicit]",
    song_17: "Wanksta (from 8 Mile soundtrack)",
    song_18: "U Not Like Me [explicit]",
    song_19: "Lifes On The Line [explicit]",
    song_20: "In Da Club (A Cappella)",
  },
  {
    artist_name: "2 Pac",
    genre: "Hip-Hop/ Rap",
    album: "2Pac Greatest Hits (explicit version",
    album_year: "1998",
  },
  {
    artist_name: "30 Seconds To Mars",
    genre: "Alternative/ Indie",
    album: "A Beautiful Lie",
    album_year: "2005",
    song_1: "Attack",
    song_2: "A Beautiful Lie",
    song_3: "The Kill (Bury Me)",
    song_4: "Was It A Dream? [explicit]",
    song_5: "The Fantasy",
    song_6: "Savior",
    song_7: "From Yesterday [explicit]",
    song_8: "The Story",
    song_9: "R-Evolve",
    song_10: "A Modern Myth",
    song_11: "Battle of One",
    song_12: "Hunter",
    song_13: "ATTACK",
  },
  {
    artist_name: "A Thousand Horses",
    genre: "Country",
    album: "Broken Heartland",
    album_year: "2022",
  },
  {
    artist_name: "ABBA",
    genre: "Pop",
    album: "ABBA Gold Greatest Hits",
    album_year: "1992",
  },
  {
    artist_name: "ABC",
    genre: "Pop",
    album: "The Lexicon of Love",
    album_year: "1982",
  },
  {
    artist_name: "Aerosmith",
    genre: "The Very Best of Aerosmith: Devil's Got A New Disguise",
    album_year: "2006",
  },
  {
    artist_name: "Annetha Faltskog",
    genre: "Pop",
    album: "A",
    album_year: "2013",
  },
  {
    artist_name: "Alan Jackson",
    genre: "R&B/ Soul, Jazz, Country",
    album: "Greatest Hits Volume II",
    album_year: "2003",
  },
  {
    artist_name: "Albert King",
    genre: "Blues",
    album: "The Very Best of Albert King",
    album_year: "2007",
  },
  {
    artist_name: "Alice Cooper",
    genre: "Hard Rock, Glam Rock, Heavy Metal, New Wave",
    album: "The Essential Alice Cooper - The Epic Years",
    album_year: "2018",
  },
  {
    artist_name: "Alison Krauss",
    genre: "Country",
    album: "A Hundred Miles or More: A Collection",
    album_year: "2007",
  },
  {
    artist_name: "The All American Rejects",
    genre: "Alternative/ Indies",
    album: "When The World Comes Down",
    album_year: "2008",
  },
  {
    artist_name: "The Allman Bothers Band",
    genre: "Rock/ Blues",
  },
  {
    artist_name: "Amy Winehouse",
    genre: "R&B/ Soul",
    album: "Back To Black (Deluxe Edition)[explicit]",
    album_year: "2006",
    song_1: "Rehab",
    song_2: "You Know I'm No Good",
    song_3: "Me & Mr Jones [explicit]",
    song_4: "Just Friends [explicit]",
    song_5: "Back to Black [explicit]",
    song_6: "Love Is A Losing Game",
    song_7: "Tears Dry On Their Own [explicit]",
    song_8: "Wake Up Alone",
    song_9: "Some Unholy War",
    song_10: "He Can Only Hold Her",
    song_11: "Addicted [explicit]",
    song_12: "Valerie (Live At BBC Radio 1 Live Lounge London",
    song_13: "Cupid",
    song_14: "Monkey Man",
    song_15: "Some Unholy war",
    song_16: "Hey Little Rich Girl [feat. Ade Omotayo & Zalon Thompson)",
    song_17: "You're Wondering Now",
    song_18: "To Know Him Is To Love Him (Live)",
    song_19: "Love Is a Losing Game (Original Demo)",
  },
  {
    artist_name: "Andre Rieu",
    genre: "Classical",
  },
  {
    artist_name: "Andre Bocelli",
    genre: "Classical",
  },
  {
    artist_name: "Andrew W.K.",
    genre: "Jazz/ Rock",
  },
  {
    artist_name: "Anthrax",
    genre: "Metal, Groove Metal, Alternative/ Indie",
  },
  {
    artist_name: "Antonio Carlos Jobim",
    genre: "MPB",
  },
  {
    artist_name: "Apache Indian",
    genre: "Indian Film Pop, Reggae",
  },
  {
    artist_name: "Arcade Fire",
    genre: "Alternative/ Indie",
  },
  {
    artist_name: "Ariana Grande",
    genre: "Pop",
    album: "Positions [explicit]",
    album_year: "2020",
    song_1: "Shut Up",
    song_2: "34 + 35",
    song_3: "Motive [explicit]",
    song_4: "Just Like Magic [explicit]",
    song_5: "Off The Table",
    song_6: "Six Thirty [explicit]",
    song_7: "Safety Net [feat. Ty Dolla $ign]",
    song_8: "My Hair",
    song_9: "Nasty [explicit]",
    song_10: "West Side",
    song_11: "Love Language [explicit]",
    song_12: "Positions [explicit]",
    song_13: "Obvious  [explicit]",
    song_14: "POV",
  },
  {
    artist_name: "Arrested Development",
    genre: "Hip-Hop/ Rap",
  },
  {
    artist_name: "Ashley Campbell",
    genre: "Country",
  },
  {
    artist_name: "Astrud Gilberto",
    genre: "Jazz",
  },
  {
    artist_name: "Aswad",
    genre: "Alternative/ Indie, Reggae, Hip-Hop/ Rap",
  },
  {
    artist_name: "Atlanta Rythmn Section",
    genre: "Rock",
  },
  {
    artist_name: "Audioslave",
    genre: "Rock",
  },
  {
    artist_name: "B.B. King",
    genre: "Dance/ Electronic, Hip-Hop/ Rap, Blues",
  },
  {
    artist_name: "Badfinger",
    genre: "Rock",
  },
  {
    artist_name: "The Band",
    genre: "Rock, Folk",
  },
  {
    artist_name: "Barclay James Harvest",
    genre: "Rock",
  },
  {
    artist_name: "Barry White",
    genre: "R&B/ Soul",
  },
  {
    artist_name: "The beach Boys",
    genre: "Pop/ Rock",
  },
  {
    artist_name: "Beastie Boys",
    genre: "Hip-Hop",
  },
  {
    artist_name: "The Beatles",
    genre: "Psychedelic Rock, Blues",
    album: "Abbey Road (Remastered)",
    album_year: "1969",
  },
  {
    artist_name: "Beck",
    genre: "Alternative/ Indie, Pop",
  },
  {
    artist_name: "Bee Gees",
    genre: "Pop",
    album: "Timeless - The All-Time Greatest Hits",
    album_year: "2017",
  },
  {
    artist_name: "Belinda Carlisle",
    genre: "Pop",
    album: "Heaven On Earth",
    album_year: "1987",
  },
  {
    artist_name: "Ben Harper",
    genre: "Blues",
  },
  {
    artist_name: "Ben Howard",
    genre: "Alternative/ Indie",
  },
  {
    artist_name: "Benny Andersson",
    genre: "Folk",
  },
  {
    artist_name: " Big Country",
    genre: "Hip-Hop/ Rap, Rock",
  },
  {
    artistData: "Big Star",
    genre: "Afroswing",
  },
  {
    artist_name: "Bill Evans",
    genre: "Jazz",
  },
  {
    artist_name: "Billie Eilish",
    genre: "Pop",
    album: "Happier Than Ever [explicit]",
    album_year: "2021",
    song_1: "Getting Older",
    song_2: "I Didn't Change My Number [explicit]",
    song_3: "Billie Bossa Nova",
    song_4: "My Future",
    song_5: "Oxytocin",
    song_6: "GOLDWING",
    song_7: "Lost Cause",
    song_8: "Halley's Comet",
    song_9: "Not My Responsibility",
    song_10: "OverHeated",
    song_11: "Everybody Dies",
    song_12: "Your Power",
    song_13: "NDA [explicit]",
    song_14: "Therefore I Am",
    song_15: "Happoer Than Ever [explicit]",
    song_16: "Male Fantasy",
  },
  {
    artist_name: "Billie Holiday",
    genre: "Blues",
    album: "100 Hits Legends - Billie Holiday [clean]",
    album_year: "2010",
  },
  {
    artist_name: "Billy Currington",
    genre: "Country",
  },
  {
    artist_name: "Billy Fury",
    genre: "Metal, Pop",
    album: "A Thousand Stars: The Best Of",
    album_year: "2014",
  },
  {
    artist_name: "Billy Preston",
    genre: "R&B/ Soul, Gospel",
  },
  {
    artist_name: "Bjork",
    genre: "Alternative/ Indie, Dane/ Electronic",
  },
  {
    artist_name: "Black Eyed Peas",
    genre: "Pop",
  },
  {
    artist_name: "Black Sabbath",
    genre: "Heavy Metal",
  },
  {
    artist_name: "Black Uhuru",
    genre: "Reggae",
  },
  {
    artist_name: "Blind Faith",
    genre: "Metal, Rock",
  },
  {
    artist_name: "Blink-182",
    genre: "Pop/ Punk",
  },
  {
    artist_name: "Blondie",
    genre: "Rock",
    album: "Against The Odds: 1974 - 1982",
    album_year: "2022",
  },
  {
    artist_name: "Blue Cheer",
    genre: "Rock",
  },
  {
    artist_name: "Bo Diddley",
    genre: "R&B/ Soul, Blues",
  },
  {
    artist_name: "Bob Dylan",
    genre: "Folk",
  },
  {
    artist_name: "Bob Marley",
    genre: "Reggae",
  },
  {
    artist_name: "Bob Segar",
    genre: "Rock",
  },
  {
    artist_name: "Bon Jovi",
    genre: "Rock",
  },
  {
    artist_name: "Bonnie Raitt",
    genre: "Folk",
  },
  {
    artist_name: "Booker T",
    genre: "R&B/ Soul",
  },
  {
    artist_name: "Boyz II Men",
    genre: "R&B/ Soul",
    album: "Legacy - The Greatest Hits Collection",
    album_year: "2001",
  },
  {
    artist_name: "Brantley Gilbert",
    genre: "Country",
  },
  {
    artist_name: "Brenda Holloway",
    genre: "R&B/ Soul",
  },
  {
    artist_name: "Brian Eno",
    genre: "Alternative/ Indie",
  },
  {
    artist_name: "The Brothers Johnson",
    genre: "R&B/ Soul",
  },
  {
    artist_name: "Bruce Sprigsteen",
    genre: "Rock",
  },
  {
    artist_name: "Bryan Adams",
    genre: "Rock",
  },
  {
    artist_name: "Bryan Ferry",
    genre: "Rock",
  },
  {
    artist_name: "Buddy Guy",
    genre: "Blues",
  },
  {
    artist_name: "Buddy Holly",
    genre: "Pop, Rock",
  },
  {
    artistData: "Burning Spear",
    genre: "Reggae",
  },
  {
    artist_name: "Burt Bacharach",
    genre: "Pop, Folk",
  },
  {
    artist_name: "The Cadillac Three",
    genre: "Country",
  },
  {
    artist_name: "Camel",
    genre: "Rock",
  },
  {
    artist_name: "Canned Heat",
    genre: "Blues",
  },
  {
    artist_name: "Captain Beefheart",
    genre: "Rock",
  },
  {
    artist_name: "Caravan",
    genre: "Jazz",
  },
  {
    artist_name: "Carpenters",
    genre: "Pop",
    album: "Carpenters With The Royal Philharmonic Orchestra",
    album_year: "2018",
    song_1: "Overture",
    song_2: "Yesterday Once More",
    song_3: "Hurting Each Other",
    song_4: "I Need To Be In Love",
    song_5: "For All We Know",
    song_6: "Touch Me When We're Dancing",
    song_7: "I Believe You",
    song_8: "I Just Fall In Love Again",
    song_9: "Merry Christmas, Darling,",
    song_10: "Baby It's You",
    song_11: "(They Long To Be) Close To You",
    song_12: "Superstar",
    song_13: "Ticket To Ride",
    song_14: "This Masquerade",
    song_15: "Ticket To Ride",
    song_16: "Goodbye To Love",
    song_17: "Top Of The World",
    song_18: "We've Only Just Begun",
  },
  {
    artist_name: "Carrie Underwood",
    genre: "Country",
  },
  {
    artist_name: "Cat Stevens",
    genre: "Rock",
  },
  {
    artist_name: "Charlie Parker",
    genre: "Modern Jazz",
  },
  {
    artist_name: "Charlie Walker",
    genre: "Country",
  },
  {
    artist_name: "Cheap Trick",
    genre: "Rock",
  },
  {
    artist_name: "The Chemical Brothers",
    genre: "Dance/ Electronic",
    album: "No Geography",
    album_year: "2019",
  },
  {
    artist_name: "Cher",
    genre: "Pop, Rock",
  },
  {
    artist_name: "Chris Cornell",
    genre: "Rock",
  },
  {
    artist_name: "Chris Stapleton",
    genre: "Country",
  },
  {
    artist_name: "Chuck Berry",
    genre: "Dance/ Electronic, Rock, Blues",
  },
  {
    artist_name: "Cinderella",
    genre: "Dance/ Electronic, Rock",
  },
  {
    artist_name: "The Clash",
    genre: "Punk, Dance-Punk, New-Wave, Rock & Roll",
    album: "Hits Back",
    album_year: "2013",
  },
  {
    artist_name: "Climax Blues Band",
    genre: "Jazz",
  },
  {
    artist_name: "Coleman Hawkins",
    genre: "Jazz",
  },
  {
    artist_name: "Commodores",
    genre: "R&B/ Soul, MPB",
  },
  {
    artist_name: "Common",
    genre: "Hip-Hop, Rap",
  },
  {
    artist_name: "The Common Linnets",
    genre: "Country, Bluegrass, Pop",
  },
  {
    artist_name: "Corinne Bailey Rae",
    genre: "Pop",
    album: "The Heart Speaks In Whispers",
    album_year: "2016",
  },
  {
    artist_name: "Count Basie",
    genre: "Jazz",
  },
  {
    artist_name: "Counting Crows",
    genre: "Rock",
    album: "Underwater Sunshine (Or What we Did on Our Summer Vacation)",
    album_year: "2012",
  },
  {
    artist_name: "Craig Armstrong",
    genre: "Classical",
  },
  {
    artist_name: "The Cramps",
    genre: "Rock",
    album: "Bad Music For Bad People",
    album_year: "1984",
    song_1: "Garbage Man",
    song_2: "New Kind of Kick [explicit]",
    song_3: "Love Me",
    song_4: "I Can't Hardly Stand It",
    song_5: "She Said",
    song_6: "Goo Goo Muck",
    song_7: "Save It",
    song_8: "Human Fly",
    song_9: "Drug Train",
    song_10: "TV Set",
    song_11: "Uranium Rock",
  },
  {
    artist_name: "The Cranberries",
    genre: "Alternative/ Indie, Rock",
    album: "Something Else",
    album_year: "2017",
    song_1: "Linger (Acoustic Version)",
    song_2: "The Glory",
    song_3: "Dreams (Acoustic Version)",
    song_4: "When You're Gone (Acoustic Version)",
    song_5: "Zombie",
    song_6: "Ridiculous Thoughts (Acoustic Version)",
    song_7: "Rupture",
    song_8: "Ode to My Family (Acoustic Version)",
    song_9: "Free to Decide (Acoustic Version)",
    song_10: "Just My Imagination (Acoustic Version)",
    song_11: "Animal Instinct (Acoustic Version)",
    song_12: "Why",
  },
  {
    artist_name: "Cream",
    genre: "Rock",
  },
  {
    artist_name: "Creedence Clearwater Revival",
    genre: "Rock",
  },
  {
    artist_name: "Crowded House",
    genre: "Pop",
  },
  {
    artist_name: "Culture Club",
    genre: "Dance/ Electronic, Pop",
  },
  {
    artist_name: "The Cure",
    genre: "Alternative/ Indie",
    album: "Greatest Hits",
    album_year: "2001",
  },
  {
    artist_name: "Cutting Crew",
    genre: "Rock",
  },
  {
    artist_name: "D'Angelo",
  },
  {
    artist_name: "DMX",
    genre: "Indian Film Pop, Raggae, Hip-Hop/ Rap",
  },
  {
    artist_name: "The Damned",
    genre: "Rock",
  },
  {
    artist_name: "Daniel Hope",
    genre: "Classical",
  },
  {
    artist_name: "Danny Wilson & Gary",
    genre: "Pop, Country",
  },
  {
    artist_name: "David Bowie",
    genre: "Rock",
    album: "Legacy (The Very Best of David Bowie) [Deluxe]",
    album_year: "2016",
  },
  {
    artist_name: "Dean Martin",
    genre: "Pop",
  },
  {
    artist_name: "Debarge",
    genre: "R&B/ Soul, Jazz",
  },
  {
    artist_name: "Deep Purple",
    genre: "Rock",
  },
  {
    artist_name: "Def Leppard",
    genre: "Rock",
    album: "The Story So Far: The Best of Def Leppard",
    album_year: "2018",
  },
  {
    artist_name: "Demi Lavato",
    genre: "Pop, Pop-Rock, R&B",
    album: "Holy FVCK [explicit]",
    album_year: "2022",
    song_1: "FREAK [feat. YUNGBLUD",
    song_2: "SKIN OF MY TEETH [explicit]",
    song_3: "SUBSTANCE [explicit]",
    song_4: "EAT ME [feat. Royal & The Serpent]",
    song_5: "Holy FVCK [explicit]",
    song_6: "29 [explicit]",
    song_7: "HAPPY ENDING",
    song_8: "HEAVEN",
    song_9: "CITY OF ANGELS",
    song_10: "BONES [explicit]",
    song_11: "WASTED",
    song_12: "COME TOGETHER",
    song_13: "DEAD FRIENDS",
    song_14: "HELP ME",
    song_15: "FEED",
    song_16: "4 EVER 4 ME",
  },
  {
    artist_name: "Demis Roussos",
    genre: "Rock",
  },
  {
    artist_name: "Derek and the Dominos",
    genre: "Rock",
  },
  {
    artist_name: "Desmond Dekker",
    genre: "Reggae",
  },
  {
    artist_name: "Diana Krall",
    genre: "Jazz",
  },
  {
    artist_name: "Diana Ross",
    genre: "R&B, Soul",
    album: "Thank You",
    album_year: "2021",
  },
  {
    artist_name: "Diana Ross & The Supremes",
    genre: "R&B, Soul",
    album: "The Ultimate Collection: Diana Ross & The Supremes",
    album_year: "1997",
  },
  {
    artist_name: "Dierks Bentley",
    genre: "Country",
  },
  {
    artist_name: "Dinah Washington",
    genre: "Jazz, Blues, R&B, Gospel",
  },
  {
    artist_name: "Dio",
    genre: "Rock",
  },
  {
    artist_name: "Dire Straits",
    genre: "Rock",
  },
  {
    artist_name: "Disclosure",
    genre: "Deep House, Dance/ Electronic",
  },
  {
    artist_name: "Don Henley",
    genre: "Rock",
  },
  {
    artist_name: "Donna Summer",
    genre: "Pop, R&B/ Soul",
  },
  {
    artist_name: "The Doors",
    genre: "Rock",
  },
  {
    artist_name: "Dr Dre",
    genre: "Hip-Hop/ Rap",
  },
  {
    artist_name: "Drake",
    genre: "Alternative/ Indie, Hip-Hop/ Rap",
  },
  {
    artist_name: "Duke Ellington",
    genre: "Pop, Jazz",
  },
  {
    artist_name: "Dusty Springfield",
    genre: "Alternative/Indie, Pop",
  },
  {
    artist_name: "EELS",
    genre: "Alternative/ Indie",
  },
  {
    artist_name: "EPMD",
    genre: "Hip-Hop/ Rap",
  },
  {
    artist_name: "Eagles",
    genre: "Pop, Rock",
  },
  {
    artist_name: "Eagles of Death Metal",
    genre: "Rock",
  },
  {
    artist_name: "Eazy_E",
    genre: "Hip-Hop/ Rap",
  },
  {
    artist_name: "Eddie Cochran",
    genre: "Rock",
  },
  {
    artist_name: "Elbow",
    genre: "Alternative/ Indie, Dance/ Electronic",
  },
  {
    artist_name: "Ella Fitzgerald",
    genre: "R&B/ Soul, Jazz",
  },
  {
    artist_name: "Elliott Smith",
    genre: "Alternative/ Indie",
  },
  {
    artist_name: "Elton John",
    genre: "Pop",
  },
  {
    artist_name: "Elvis Costello",
    genre: "Alternative/ Indie, Rocl, Alternative Rock",
  },
  {
    artist_name: "Elvis Presley",
    genre: "Rock",
  },
  {
    artist_name: "Emeli Sande",
    genre: "Pop",
    album: "Let's Say For Instance",
    album_year: "2022",
  },
  {
    artist_name: "Eminem",
    genre: "Hip-Hop/ Rap, Pop",
    album: "Curtain Call 2 [explicit]",
    album_year: "2022",
  },
  {
    artist_name: "Eric B. & Rakim",
    genre: "Hip-Hop/ Rap",
    album: "Gold",
    album_year: "2005",
  },
  {
    artist_name: "Eric Church",
    genre: "Country",
  },
  {
    artist_name: "Eric Clapton",
    genre: "Rock",
  },
  {
    artist_name: "Etta James",
    genre: "R&B/ Soul, MPB, Jazz, Blues",
  },
  {
    artist_name: "Evanescence",
    genre: "Rock, Folk, Electronic Rock",
    album: "Fallen",
    album_year: "2003",
  },
  {
    artist_name: "Eve",
    genre: "Japanese Rock, Indie, Pop",
  },
  {
    artist_name: "Extreme",
    genre: "Heavy Metal",
  },
  {
    artist_name: "Fairport Convention",
    genre: "Folk",
  },
  {
    artist_name: "Fats Domino",
    genre: "Pop, Blues",
  },
  {
    artist_name: "Faust",
    genre: "Alternative/ Indie, Metal, Dance/ Electronic, Pop",
  },
  {
    artist_name: "Fergie",
    genre: "Pop",
  },
  {
    artist_name: "Fleetwood Mac",
    genre: "Rock",
    album: "The Shape I'm In (Live 1972)",
    album_year: "2023",
    song_1: "Tell Me All The Things You Do",
    song_2: "Future Games",
    song_3: "Get Like You Used To Be",
    song_4: "Little Child Of Mine",
    song_5: "Spare Me A Little",
    song_6: "Homeward Bound",
    song_7: "Black Magic Woman",
    song_8: "Oh Well",
  },
  {
    artist_name: "Florence + The Machine",
    genre: "Alternative/ Indie",
    album: "Dance Fever",
    album_year: "2022",
    song_1: "King",
    song_2: "Free",
    song_3: "Choreomania",
    song_4: "Back In Town",
    song_5: "Girls Against God",
    song_6: "Dream Girl Evil",
    song_7: "Prayer Factory",
    song_8: "Cassandra",
    song_9: "Heaven is Here",
    song_10: "Daffodil",
    song_11: "My Love",
    song_12: "Restarint",
    song_13: "The Bomb",
    song_14: "Morning Elvis",
  },
  {
    artist_name: "The Flying Burrito Brothers",
    genre: "Rock",
  },
  {
    artist_name: "Foo Fighters",
    genre: "Rock",
    album: "Medicine At Midnight",
    album_year: "2021",
    song_1: "Making A Fire",
    song_2: "Shame Shame",
    song_3: "Cloudspotter",
    song_4: "Waiting On A War",
    song_5: "Meicine At Midnight",
    song_6: "No Son Of Mine",
    song_7: "Holding Posion",
    song_8: "Love Dies Young",
  },
  {
    artist_name: "Four Tops",
    genre: "New Age, Rock",
  },
  {
    artist_name: "Foxy Brown",
    genre: "Raggae, Hip-Hop/ Rap",
  },
  {
    artist_name: "Frank Sinatra",
    genre: "Swing, Traditional Pop",
  },
  {
    artist_name: "Frank Zappa",
    genre: "Rock",
  },
  {
    artist_name: "Frankie Goes To Hollywood",
    genre: "Dance/ Electronic, Pop",
  },
  {
    artist_name: "Freddie Mercury",
    genre: "Rock",
  },
  {
    artist_name: "Free",
    genre: "Rock",
  },
  {
    artist_name: "Frida Lyngstad",
    genre: "Dance/ Electronic",
  },
  {
    artist_name: "The Game",
    genre: "Hip-Hop/ Rap, Soul",
  },
  {
    artist_name: "Gang Starr",
    genre: "Hip-Hop/ Rap",
  },
  {
    artist_name: "Gary Moore",
    genre: "Rock, Blues",
  },
  {
    artist_name: "Gene Krupa",
    genre: "Jazz",
  },
  {
    artist_name: "Gene Vincent",
    genre: "Rock",
  },
  {
    artist_name: "Genesis",
    genre: "Dance/ Electronic, Rock",
    album: "The Last Domino",
    album_year: "2021",
  },
  {
    artist_name: "Gentle Giant",
  },
  {
    artist_name: "George Benson",
  },
  {
    artist_name: "George Harrison",
  },
  {
    artist_name: "George Michael",
    genre: "Pop",
    album: "Patience",
    album_year: "2004",
  },
  {
    artist_name: "George Strait",
    genre: "Country",
  },
  {
    artist_name: "George Thorogood",
  },
  {
    artist_name: "Georgie Fame",
  },
  {
    artist_name: "Ghostface Killah",
    genre: "Hip-Hop/ Rap",
  },
  {
    artist_name: "Ginger Baker",
  },
  {
    artist_name: "Glass Animals",
  },
  {
    artist_name: "Glen Campbell",
  },
  {
    artist_name: "The Go-Go's",
  },
  {
    artist_name: "Gong",
  },
  {
    artist_name: "Grace Jones",
  },
  {
    artist_name: "Graham Parker",
  },
  {
    artist_name: "Grand Funk Railroad",
  },
  {
    artist_name: "Gregory Isaacs",
  },
  {
    artist_name: "Gregory Porter",
  },
  {
    artist_name: "Guns N' Roses",
  },
  {
    artist_name: "Gwen Stefani",
  },
  {
    artist_name: "Halsey",
  },
  {
    artist_name: "Hank Willians",
  },
  {
    artist_name: "Heart",
  },
  {
    artist_name: "Heaven 17",
  },
  {
    artist_name: "Helmet",
  },
  {
    artist_name: "Herbie Hancock",
  },
  {
    artist_name: "Hoobastank",
  },
  {
    artist_name: "Howlin Wolf",
  },
  {
    artist_name: "Hoyt Axton",
  },
  {
    artist_name: "Huey Lewis & The News",
  },
  {
    artist_name: "The Human League",
  },
  {
    artist_name: "Humble Pie",
  },
  {
    artist_name: "INXS",
  },
  {
    artist_name: "Ice Cube",
  },
  {
    artist_name: "Iggy Pop",
  },
  {
    artist_name: "Imagine Dragons",
  },
  {
    artist_name: "Iron Maiden",
  },
  {
    artist_name: "Isaac Hayes",
  },
  {
    artist_name: "The Isley Brothers",
  },
  {
    artist_name: "It Bites",
  },
  {
    artist_name: "J.J. Cale",
  },
  {
    artist_name: "Jack Bruce",
  },
  {
    artist_name: "Jack Johnson",
  },
  {
    artist_name: "Jackson 5",
  },
  {
    artist_name: "Jacques Brel",
  },
  {
    artist_name: "Jadakiss",
  },
  {
    artist_name: "The Jam",
  },
  {
    artist_name: "James",
  },
  {
    artist_name: "James Bay",
  },
  {
    artist_name: "James Blake",
  },
  {
    artist_name: "James Brown",
  },
  {
    artist_name: "James Morrison",
  },
  {
    artist_name: "James Taylor",
  },
  {
    artist_name: "Jane's Addiction",
  },
  {
    artist_name: "Janet Jackson",
  },
  {
    artist_name: "Japan & David Sylvian",
  },
  {
    artist_name: "Jay-Z",
  },
  {
    artist_name: "Jeezy",
  },
  {
    artist_name: "Jeru The Damaja",
  },
  {
    artist_name: "Jessie J",
  },
  {
    artist_name: "Jimi Hendrix",
  },
  {
    artist_name: "Jimmy Buffett",
  },
  {
    artist_name: "Jimmy Cliff",
  },
  {
    artist_name: "Jimmy Eat World",
  },
  {
    artist_name: "Jimmy Ruffin",
  },
  {
    artist_name: "Jimmy Smith",
  },
  {
    artist_name: "Joan Armatrading",
  },
  {
    artist_name: "Joan Baez",
  },
  {
    artist_name: "Joe Cocker",
  },
  {
    artist_name: "Joe Jackson",
  },
  {
    artist_name: "Joe Sample",
  },
  {
    artist_name: "Joe Walsh/ The James Gang",
  },
  {
    artist_name: "John Coltrane",
  },
  {
    artist_name: "John Fogerty",
  },
  {
    artist_name: "John Lee Hooker",
  },
  {
    artist_name: "John Lennon",
  },
  {
    artist_name: "John Martyn",
  },
  {
    artist_name: "John Mayall",
  },
  {
    artist_name: "John Mellencamp",
  },
  {
    artist_name: "John Williams",
  },
  {
    artist_name: "Johnny Cash",
  },
  {
    artist_name: "Johnny Gill",
  },
  {
    artist_name: "Joni Mitchell",
  },
  {
    artist_name: "Jonny Lang",
  },
  {
    artist_name: "Joss Stone",
  },
  {
    artist_name: "Jr. Walker & The All Stars",
  },
  {
    artist_name: "Julie London",
  },
  {
    artist_name: "Jurassic 5",
  },
  {
    artist_name: "Justin Bieber",
  },
  {
    artist_name: "Kacey Musgraves",
  },
  {
    artist_name: "Kaiser Chiefs",
  },
  {
    artist_name: "Kate Bush",
  },
  {
    artist_name: "katy Perry",
  },
  {
    artist_name: "Keane",
  },
  {
    artist_name: "Keith Jarrett",
  },
  {
    artist_name: "Keith Richards",
  },
  {
    artist_name: "Keith Urban",
  },
  {
    artist_name: "Kendrick Lamar",
  },
  {
    artist_name: "Kenny Burrell",
  },
  {
    artist_name: "Kevin Coyne",
  },
  {
    artist_name: "The Killers",
  },
  {
    artist_name: "Killing Joke",
  },
  {
    artist_name: "Kim Carnes",
  },
  {
    artist_name: "The Kinks",
  },
  {
    artist_name: "Kip Moore",
  },
  {
    artist_name: "Kiss",
  },
  {
    artist_name: "The Kooks",
  },
  {
    artist_name: "Kool And The Gang",
  },
  {
    artist_name: "LL Cooll J",
  },
  {
    artist_name: "Lady A",
  },
  {
    artist_name: "Lady GaGa",
  },
  {
    artist_name: "Land Del Ray",
  },
  {
    artist_name: "Laura Marling",
  },
  {
    artist_name: "Led Zeppelin",
  },
  {
    artist_name: "Lee 'Scratch' Perry",
  },
  {
    artist_name: "Lenny Kravitz",
  },
  {
    artist_name: "Leon Russell",
  },
  {
    artist_name: "Lester Young",
  },
  {
    artist_name: "Level 42",
  },
  {
    artist_name: "The Libertines",
  },
  {
    artist_name: "Lightnin' Hopkins",
  },
  {
    artist_name: "Lil Wayne",
  },
  {
    artist_name: "Linton Kwesi Johnson",
  },
  {
    artist_name: "Lionel Richie",
  },
  {
    artist_name: "Little Big Town",
  },
  {
    artist_name: "Little Richard",
  },
  {
    artist_name: "Little Steven",
  },
  {
    artist_name: "Lloyd Cole",
  },
  {
    artist_name: "Lorde",
  },
  {
    artist_name: "Louis Armstrong",
  },
  {
    artist_name: "Lucinda Willians",
  },
  {
    artist_name: "Ludacris",
  },
  {
    artist_name: "Ludovico Einaudi",
  },
  {
    artist_name: "Luke Bryan",
  },
  {
    artist_name: "Lulu",
  },
  {
    artist_name: "The Lumineers",
  },
  {
    artist_name: "Lynryd Skynyrd",
  },
  {
    artist_name: "Maddie & Tae",
  },
  {
    artist_name: "Madonna",
  },
  {
    artist_name: "Magazine",
  },
  {
    artist_name: "The Mamas & Papas",
  },
  {
    artist_name: "Marc Almond",
  },
  {
    artist_name: "Marilyn Manson",
  },
  {
    artist_name: "Mark Knopfler",
  },
  {
    artist_name: "Maroon 5",
  },
  {
    artist_name: "Martha Reeves & The Vandellas",
  },
  {
    artist_name: "The Marvelettes",
  },
  {
    artist_name: "Marvin Gaye",
  },
  {
    artist_name: "Mary Hopkin",
  },
  {
    artist_name: "Mary J. Blige",
  },
  {
    artist_name: "Mary Wells",
  },
  {
    artist_name: "Massive Attack",
  },
  {
    artist_name: "Master P",
  },
  {
    artist_name: "The Mavericks",
  },
  {
    artist_name: "Maxi Priest",
  },
  {
    artist_name: "McCoy Tyner",
  },
  {
    artist_name: "Meat Loaf",
  },
  {
    artist_name: "Megadeth",
  },
  {
    artist_name: "Melody Gardot",
  },
  {
    artist_name: "Metallica",
  },
  {
    artist_name: "Method Man",
  },
  {
    artist_name: "Michael Jackson",
  },
  {
    artist_name: "Michael Kiwanuka",
  },
  {
    artist_name: "Michael Nyman",
  },
  {
    artist_name: "Mike & The Mechanics",
  },
  {
    artist_name: "Mike Oldfield",
  },
  {
    artist_name: "Miles Davis",
  },
  {
    artist_name: "Minnie Riperton",
  },
  {
    artist_name: "The Moddy Blues",
  },
  {
    artist_name: "Morrissey",
  },
  {
    artist_name: "Motorhead",
  },
  {
    artist_name: "Muddy Waters",
  },
  {
    artist_name: "Mumford & Sons",
  },
  {
    artist_name: "Motley Crue",
  },
  {
    artist_name: "N.W.A",
  },
  {
    artist_name: "Nanci Griffith",
  },
  {
    artist_name: "Nas",
  },
  {
    artist_name: "Nat King Cole",
  },
  {
    artist_name: "Nazareth",
  },
  {
    artist_name: "Ne-Yo",
  },
  {
    artist_name: "Neil Diamond",
  },
  {
    artist_name: "Neil Young",
  },
  {
    artist_name: "Nelly",
  },
  {
    artist_name: "Neneh Cherry",
  },
  {
    artist_name: "New Edition",
  },
  {
    artist_name: "New York Dolls",
  },
  {
    artist_name: "Nick Drake",
  },
  {
    artist_name: "Nicki Minaj",
  },
  {
    artist_name: "Nik Kershaw",
  },
  {
    artist_name: "Nina Simone",
  },
  {
    artist_name: "Nine Inch Nails",
  },
  {
    artist_name: "Nirvana",
  },
  {
    artist_name: "The Nitty Gritty Dirt Band",
  },
  {
    artist_name: "No Doubt",
  },
  {
    artist_name: "Norah Jones",
  },
  {
    artist_name: "OMD",
  },
  {
    artist_name: "Ocean Colour Scene",
  },
  {
    artist_name: "OneRepublic",
  },
  {
    artist_name: "Onyx",
  },
  {
    artist_name: "Oscar Peterson",
  },
  {
    artist_name: "Otis Redding",
  },
  {
    artist_name: "The Ozark Mountain Daredevils",
  },
  {
    artist_name: "PJ Harvey",
  },
  {
    artist_name: "Papa Roach",
  },
  {
    artist_name: "Pat Benatar",
  },
  {
    artist_name: "Pato Banton",
  },
  {
    artist_name: "Patsy Cline",
  },
  {
    artist_name: "Patty Griffin",
  },
  {
    artist_name: "Paul McCartney and Wings",
  },
  {
    artist_name: "Paul Simon",
  },
  {
    artist_name: "paul Weller",
  },
  {
    artist_name: "Peaches & Herb",
  },
  {
    artist_name: "Pearl Jam",
  },
  {
    artist_name: "Peggy Lee",
  },
  {
    artist_name: "Pete Townshend",
  },
  {
    artist_name: "Peter Frampton",
  },
  {
    artist_name: "Phil Collins",
  },
  {
    artist_name: "Phil Manzanera",
  },
  {
    artist_name: "PiL (Public Image Ltd.)",
  },
  {
    artist_name: "Pink Floyd",
  },
  {
    artist_name: "Placebo",
  },
  {
    artist_name: "Poco",
  },
  {
    artist_name: "Poison",
  },
  {
    artist_name: "The Police",
  },
  {
    artist_name: "Portishead",
  },
  {
    artist_name: "Prince",
  },
  {
    artist_name: "Public Enemy",
  },
  {
    artist_name: "Pulp",
  },
  {
    artist_name: "Queen",
  },
  {
    artist_name: "Queens of the Stone Age",
  },
  {
    artist_name: "Quicksilver Messenger Service",
  },
  {
    artist_name: "Quincy Jones",
  },
  {
    artist_name: "R.E.M",
  },
  {
    artist_name: "Rainbow",
  },
  {
    artist_name: "Rammstein",
  },
  {
    artist_name: "Ray Charles",
  },
  {
    artist_name: "Reba McEntire",
  },
  {
    artist_name: "Red Hot Chilli Peppers",
  },
  {
    artist_name: "Redman",
  },
  {
    artist_name: "Richie Havens",
  },
  {
    artist_name: "Rick James",
  },
  {
    artist_name: "Rick Nelson",
  },
  {
    artist_name: "Rick Ross",
  },
  {
    artist_name: "Rick Wakeman",
  },
  {
    artist_name: "The Righteous Brothers",
  },
  {
    artist_name: "Rihanna",
  },
  {
    artist_name: "Ringo Starr",
  },
  {
    artist_name: "Rise Against",
  },
  {
    artist_name: "Rob Zombie",
  },
  {
    artist_name: "Robbie Williams",
  },
  {
    artist_name: "Robert Cray",
  },
  {
    artist_name: "Robert Glasper",
  },
  {
    artist_name: "Robert Palmer",
  },
  {
    artist_name: "Robert Plant",
  },
  {
    artist_name: "Rod Stewart",
  },
  {
    artist_name: "Roger Daltrey",
  },
  {
    artist_name: "The Rolling Stones",
  },
  {
    artist_name: "Ronnie Lane",
  },
  {
    artist_name: "Ronnie Wood",
  },
  {
    artist_name: "Rory Gallagher",
  },
  {
    artist_name: "The Roots",
  },
  {
    artist_name: "Rosanne Cash",
  },
  {
    artist_name: "Roxy Music",
  },
  {
    artist_name: "Roy Orbison",
  },
  {
    artist_name: "Ruff Ryders",
  },
  {
    artist_name: "Rufus Wainwright",
  },
  {
    artist_name: "Rush",
  },
  {
    artist_name: "The Ruts",
  },
  {
    artist_name: "Saint Etienne",
  },
  {
    artist_name: "Salt-N-Pepa",
  },
  {
    artist_name: "Sam Cooke",
  },
  {
    artist_name: "Sam Hunt",
  },
  {
    artist_name: "Sam Smith",
  },
  {
    artist_name: "Sammy Hagar",
  },
  {
    artist_name: "Sandy Denny",
  },
  {
    artist_name: "Schiller",
  },
  {
    artist_name: "Scorpions",
  },
  {
    artist_name: "Scott Walker",
  },
  {
    artist_name: "Secret Garden",
  },
  {
    artist_name: "Selena Gomez",
  },
  {
    artist_name: "Sensational Alex Harvey Band",
  },
  {
    artist_name: "Serge Gainsbourg",
  },
  {
    artist_name: "Sergio Mendes",
  },
  {
    artist_name: "Sex Pistols",
  },
  {
    artist_name: "Shaggy",
  },
  {
    artist_name: "Shan 69",
  },
  {
    artist_name: "Shania Twain",
  },
  {
    artist_name: "Sheryl Crow",
  },
  {
    artist_name: "Simple Minds",
  },
  {
    artist_name: "Siouxsie & The Banshees",
  },
  {
    artist_name: "Slayer",
  },
  {
    artist_name: "Slick Rick",
  },
  {
    artist_name: "Sly & Robbie",
  },
  {
    artist_name: "Small Faces",
  },
  {
    artist_name: "The Smashing Pumpkins",
  },
  {
    artist_name: "Smokey Robinson",
  },
  {
    artist_name: "Smokey Robinson & The Miracles",
  },
  {
    artist_name: "Snoop Dogg",
  },
  {
    artist_name: "Snow Patrol",
  },
  {
    artist_name: "Soft Cell",
  },
  {
    artist_name: "Sonic Youth",
  },
  {
    artist_name: "Sonny Boy Williamson",
  },
  {
    artist_name: "Soul II Soul",
  },
  {
    artist_name: "Soundgarden",
  },
  {
    artist_name: "Spandau Ballet",
  },
  {
    artist_name: "Sparks",
  },
  {
    artist_name: "Spice Girls",
  },
  {
    artist_name: "Stan Getz",
  },
  {
    artist_name: "The Statler Brothers",
  },
  {
    artist_name: "Status Quo",
  },
  {
    artist_name: "Steel Pulse",
  },
  {
    artist_name: "Steely Dan",
  },
  {
    artist_name: "Steppenwolf",
  },
  {
    artist_name: "Stereo MCs",
  },
  {
    artist_name: "Stereophonics",
  },
  {
    artist_name: "Steve Earle",
  },
  {
    artist_name: "Steve Hackett",
  },
  {
    artist_name: "Steve Hillage",
  },
  {
    artist_name: "Steve Miller Band",
  },
  {
    artist_name: "Steve Winwood",
  },
  {
    artist_name: "Steven Tyler",
  },
  {
    artist_name: "Stevie Wonder",
  },
  {
    artist_name: "Sting",
  },
  {
    artist_name: "The Style Council",
  },
  {
    artist_name: "Styx",
  },
  {
    artist_name: "Sublime",
  },
  {
    artist_name: "Sum 41",
  },
  {
    artist_name: "Supertramp",
  },
  {
    artist_name: "Suzanne Vega",
  },
  {
    artist_name: "T-Bone Walker",
  },
  {
    artist_name: "T.Rex",
  },
  {
    artist_name: "Take That",
  },
  {
    artist_name: "Tammi Terrell",
  },
  {
    artist_name: "Tangerine Dream",
  },
  {
    artist_name: "Taylor Swift",
  },
  {
    artist_name: "Tears For Fears",
  },
  {
    artist_name: "Teena Marie",
  },
  {
    artist_name: "Temple of the Dog",
  },
  {
    artist_name: "The Temptations",
  },
  {
    artist_name: "Tesla",
  },
  {
    artist_name: "Texas",
  },
  {
    artist_name: "Thelma Houston",
  },
  {
    artist_name: "Thelonious Monk",
  },
  {
    artist_name: "Thin Lizzy",
  },
  {
    artist_name: "Thomas Rhett",
  },
  {
    artist_name: "Three Dog Night",
  },
  {
    artist_name: "Tim McGraw",
  },
  {
    artist_name: "Toby Keith",
  },
  {
    artist_name: "Tom Jones",
  },
  {
    artist_name: "Tom Petty",
  },
  {
    artist_name: "Tom Waits",
  },
  {
    artist_name: "Toots & The Maytals",
  },
  {
    artist_name: "Tori Amos",
  },
  {
    artist_name: "Traffic",
  },
  {
    artist_name: "The Tragically Hip",
  },
  {
    artist_name: "Traveling Wilburys",
  },
  {
    artist_name: "The Tubes",
  },
  {
    artist_name: "U2",
  },
  {
    artist_name: "UB40",
  },
  {
    artist_name: "Ultravox",
  },
  {
    artist_name: "Underworld",
  },
  {
    artist_name: "Van der Graaf Generator",
  },
  {
    artist_name: "Vangelis",
  },
  {
    artist_name: "The Velvet Underground",
  },
  {
    artist_name: "The Verve",
  },
  {
    artist_name: "Vince Gill",
  },
  {
    artist_name: "The Walker Brothers",
  },
  {
    artist_name: "The Weeknd",
  },
  {
    artist_name: "Weezer",
  },
  {
    artist_name: "Wes Montgomery",
  },
  {
    artist_name: "Wet Wet Wet",
  },
  {
    artist_name: "will.i.am",
  },
  {
    artist_name: "Whitesnake",
  },
  {
    artist_name: "The Who",
  },
  {
    artist_name: "William Orbit",
  },
  {
    artist_name: "Willie Nelson",
  },
  {
    artist_name: "Wilson Pickett",
  },
  {
    artist_name: "Wishbone Ash",
  },
  {
    artist_name: "Wolfmother",
  },
  {
    artist_name: "Yeah Yeah Yeahs",
  },
  {
    artist_name: "Yello",
  },
  {
    artist_name: "Yes",
  },
  {
    artist_name: "Zucchero",
  },
];

const seedArtists = async () => {
  await sequelize.sync({ force: true });
  const artists = await Artist.bulkCreate(artistData);
};

seedArtists();

module.exports = seedArtists;
