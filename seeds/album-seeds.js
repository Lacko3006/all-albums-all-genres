const sequelize = require("../config/connection.js");
const Album = require("../models/Album");

const albumData = [
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
    artist_name: "The Beatles",
    genre: "Psychedelic Rock, Blues",
    album: "Abbey Road (Remastered)",
    album_year: "1969",
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
    artist_name: "Billy Fury",
    genre: "Metal, Pop",
    album: "A Thousand Stars: The Best Of",
    album_year: "2014",
  },
  {
    artist_name: "Blondie",
    genre: "Rock",
    album: "Against The Odds: 1974 - 1982",
    album_year: "2022",
  },
  {
    artist_name: "Boyz II Men",
    genre: "R&B/ Soul",
    album: "Legacy - The Greatest Hits Collection",
    album_year: "2001",
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
    artist_name: "The Chemical Brothers",
    genre: "Dance/ Electronic",
    album: "No Geography",
    album_year: "2019",
  },
  {
    artist_name: "The Clash",
    genre: "Punk, Dance-Punk, New-Wave, Rock & Roll",
    album: "Hits Back",
    album_year: "2013",
  },
  {
    artist_name: "Corinne Bailey Rae",
    genre: "Pop",
    album: "The Heart Speaks In Whispers",
    album_year: "2016",
  },
  {
    artist_name: "Counting Crows",
    genre: "Rock",
    album: "Underwater Sunshine (Or What we Did on Our Summer Vacation)",
    album_year: "2012",
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
    artist_name: "The Cure",
    genre: "Alternative/ Indie",
    album: "Greatest Hits",
    album_year: "2001",
  },
  {
    artist_name: "David Bowie",
    genre: "Rock",
    album: "Legacy (The Very Best of David Bowie) [Deluxe]",
    album_year: "2016",
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
    artist_name: "Drake",
    genre: "Alternative/ Indie, Hip-Hop/ Rap",
    artist_id: 1,
    producer_name: "40 Boi-1da",
    album: "Nothing Was The Same",
    album_year: "2013",
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
    artist_name: "Evanescence",
    genre: "Rock, Folk, Electronic Rock",
    album: "Fallen",
    album_year: "2003",
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
    artist_name: "Genesis",
    genre: "Dance/ Electronic, Rock",
    album: "The Last Domino",
    album_year: "2021",
  },
  {
    artist_name: "George Michael",
    genre: "Pop",
    album: "Patience",
    album_year: "2004",
  },
  {
    artist_name: "The Go-Go's",
    genre: "Pop, Rock",
    album: "The Go-Go's - NHK FM Radio Broadcast Naka ...",
    album_year: "2021",
    song_1: "Skidmarks On My Heart",
    song_2: "How Much More",
    song_3: "Tonite",
    song_4: "Fading Fast",
    song_5: "The Way You Dance",
    song_6: "Cool Jerk",
    song_7: "Vacation",
    song_8: "You Can't Walk In Your Sleep",
    song_9: "Our Lips Are Sealed",
    song_10: "Let's Have A Party",
    song_11: "Get Up A Go",
    song_12: "We Got The Beat",
  },
  {
    artist_name: "Guns N' Roses",
    genre: "Rock",
    album: "Use Your Illusion I [explicit]",
    album_year: "2022",
    song_1: "Right Next Door To Hell",
    song_2: "Dust N'Bones [explicit]",
    song_3: "Live And Let Die",
    song_4: "Don't Cry",
    song_5: "Perfect Crime [explicit]",
    song_6: "You Ain't The First",
    song_7: "Bad Obsession",
    song_8: "Back Off Bitch [explicit]",
    song_9: "Double Talkin' Jive",
    song_10: "November Rain",
    song_11: "The Garden",
    song_12: "Garden Of Eden",
    song_13: "Don't Damn Me [explicit]",
    song_14: "Bad Apples",
    song_15: "Dead Horse",
    song_16: "Coma",
  },
  {
    artist_name: "Gwen Stefani",
    genre: "Pop",
    album: "This Is What The Truth Feels Like (delux)",
    album_year: "2016",
  },
  {
    artist_name: "Halsey",
    genre: "Pop",
    album: "Manic",
    album_year: "2020",
  },
  {
    artist_name: "Hoobastank",
    genre: "Rock",
    album: "Every Man For Himself ((Red Package))",
    album_year: "206",
  },
  {
    artist_name: "Ice Cube",
    genre: "Hip-Hop/ Rap",
    album: "Ice Cube - WTMX FM Broadcast Lollapalooz...",
    album_year: "2020",
  },
  {
    artist_name: "Imagine Dragons",
    genre: "Alternative/ Indie",
    album: "Night Visions",
    album_year: "2012",
  },
  {
    artist_name: "Iron Maiden",
    genre: "Heavy Metal",
    album: "Senjutsu",
    album_year: "2021",
    song_1: "Senjutsu",
    song_2: "Stratego",
    song_3: "The Writing On The Wall",
    song_4: "Lost In A Lost World",
    song_5: "Days Of Future Past",
    song_6: "The Time Machine",
    song_7: "Darkest Hour",
    song_8: "Death of The Celts",
    song_9: "The Parchment",
    song_10: "Hell On Earth",
  },
  {
    artist_name: "Jackson 5",
    genre: "R&B, Soul, Alternative/ Indie, Pop",
    album: "I Want You Back! Unreleased Masters",
    album_year: "2009",
  },
  {
    artist_name: "The Jam",
    genre: "Alternative/ Indie",
    album: "The Very Best Of The Jam",
    album_year: "1997",
  },
  {
    artist_name: "James",
    genre: "Alternative/ Indie",
    album: "Fresh As A Daisy",
    album_year: "2007",
  },
  {
    artist_name: "James Bay",
    genre: "Pop",
    album: "Chaos And The Calm",
    album_year: "2014",
    song_1: "Craving",
    song_2: "Hold Back The River",
    song_3: "Let It Go",
    song_4: "If You Ever Want To Be In Love",
    song_5: "Best Fake Smile",
    song_6: "When We Were On Fire",
    song_7: "Move Together",
    song_8: "Scars",
    song_9: "Collide",
    song_10: "Get Out While You Can",
    song_11: "Need The Sun To Break",
    song_12: "Incomplete",
  },
  {
    artist_name: "James Blake",
    genre: "Alternative/ Indie, Hip-Hop/ Rap",
    album: "Wind Down [James Blake & Endel]",
    album_year: "2022",
    song_1: "1st Soundscape",
    song_2: "2nd Soundscape",
    song_3: "3rd Soundscape",
    song_4: "4th Soundscape",
    song_5: "5th Soundscape",
    song_6: "6th Soundscape",
    song_7: "7th Soundscape",
    song_8: "8th Soundscape",
    song_9: "9th Soundscape",
    song_10: "10th Soundscape",
    song_11: "11th Soundscape",
    song_12: "12th Soundscape",
    song_13: "13th Soundscape",
    song_14: "14th Soundscape",
    song_15: "15th Soundscape",
  },
  {
    artist_name: "James Brown",
    genre: "Dance/ Electronic",
    album: "I Feel Good: The very Best Of",
    album_year: "2013",
  },
  {
    artist_name: "James Morrison",
    genre: "Pop",
    album: "You're Stronger Than You Know",
    album_year: "2019",
  },
  {
    artist_name: "Jane's Addiction",
    genre: "Alternative/ Indie",
    album: "Jane's Addiction - WTUL FM Broadcast Tipitina' ...",
    album_year: "2020",
  },
  {
    artist_name: "Janet Jackson",
    genre: "Pop",
    album: "Unbreakable",
    album_year: "2015",
  },
  {
    artist_name: "Jay-Z",
    genre: "Hip-Hop/ Rap",
    album: "4:44",
    album_year: "2017",
  },
  {
    artist_name: "Jeru The Damaja",
    genre: "Hip-Hop/ Rap",
    album: "Divine Design",
    album_year: "2003",
  },
  {
    artist_name: "Jessie J",
    genre: "Pop, Hip-Hop/ rap",
    album: "Sweet Talker",
    album_year: "2014",
  },
  {
    artist_name: "Jimi Hendrix",
    genre: "Pop, Rock",
    album: "Ten Songs For You",
    album_year: "2021",
    song_1: "All Along The Watchtower",
    song_2: "Hey Joe",
    song_3: "Voodoo Child",
    song_4: "Foxy Lady",
    song_5: "The Wind Cries Mary",
    song_6: "Somewhere",
    song_7: "Little Wing",
    song_8: "Castles Made of Sand",
    song_9: "Purple Haze",
    song_10: "Red House",
  },
  {
    artist_name: "Jimmy Eat World",
    genre: "Alternative/ Indie",
    album: "Surviving",
    album_year: "2019",
  },
  {
    artist_name: "Joan Armatrading",
    genre: "Rock",
    album: "Joan Armatrading - Live At Asylum Chapel",
    album_year: "2022",
  },
  {
    artist_name: "Joe Cocker",
    genre: "Rock",
    album: "Have A Little Faith In Me (edit) [single]",
    album_year: "2021",
  },
  {
    artist_name: "John Lee Hooker",
    genre: "Blues",
    album: "At Chess",
    album_year: "2023",
    song_1: "No One Told Me",
    song_2: "Big Soul",
    song_3: "I Love Her",
    song_4: "Old Time Shimmy",
    song_5: "San Francisco",
    song_6: "Take A Look At Yourself",
    song_7: "She Shot Me Down",
    song_8: "You Know I Love You",
    song_9: "Good Rockin' Mama",
    song_10: "Send Me Your Pillow",
    song_11: "Onions",
  },
  {
    artist_name: "Johnny Cash",
    genre: "Country",
    album: "Johnny Cash and The Philharmonic Orchestra",
    album_year: "2020",
  },
  {
    artist_name: "Johnny Gill",
    genre: "R&B/ Soul",
    album: "Game Changer",
    album_year: "2014",
  },
  {
    artist_name: "Joni Mitchell",
    genre: "Pop, Folk",
    album: "Folk Mix: Joni Mitchell & James Taylor",
    album_year: "2023",
  },
  {
    artist_name: "Joss Stone",
    genre: "R&B/ Soul, Pop, Reggae",
    album: "Never Forget My Love [explicit]",
    album_year: "2022",
    song_1: "Breaking Each Other's Hearts",
    song_2: "Never Forget My Love",
    song_3: "No Regrets",
    song_4: "Oh To Be Loved By You",
    song_5: "Love You Till The Very End",
    song_6: "You're My Girl",
    song_7: "The Greatest Secret [explicit]",
    song_8: "Does It Have To Be Today",
    song_9: "You Couldn't Kill Me [explicit]",
    song_10: "When You're In Love",
  },
  {
    artist_name: "Justin Bieber",
    genre: "Pop",
    album: "Justice (The Complete Edition) [explicit]",
    album_year: "2021",
  },
  {
    artist_name: "Kacey Musgraves",
    genre: "Country",
    album: "Star-Crossed",
    album_year: "2021",
    song_1: "Star-Crossed",
    song_2: "Good Wife",
    song_3: "Cherry Blossom",
    song_4: "Simple Times",
    song_5: "If This Was A Movie",
    song_6: "Justified",
    song_7: "Angel",
    song_8: "Breadwinner",
    song_9: "Camera Roll",
    song_10: "Easier Said",
    song_11: "Hookup Scene",
    song_12: "Keep Lookin' Up",
    song_13: "What Doesn't Kill Me",
    song_14: "There Is A Light",
    song_15: "Gracias a La Vida",
  },
  {
    artist_name: "Kaiser Chiefs",
    genre: "Alternative/ Indie, Pop",
    album: "Education, Education, Education & War",
    album_year: "2014",
  },
  {
    artist_name: "Kate Bush",
    genre: "Pop, Art Rock, Alternative/ Indie",
    album: "Selection From 'The Other Sides' (2018 Remastered)",
    album_year: "2018",
  },
  {
    artist_name: "katy Perry",
    genre: "Pop",
    album: "Smile [explicit]",
    album_year: "2020",
  },
  {
    artist_name: "Keith Urban",
    genre: "Country",
    album: "Ripcord",
    album_year: "2016",
  },
  {
    artist_name: "Kendrick Lamar",
    genre: "Hip-Hop/ Rap",
    album: "Black Panther The Album Music From And ...",
    album_year: "2018",
  },
  {
    artist_name: "The Killers",
    genre: "Alternative/ Indie",
    album: "Pressure Machine",
    album_year: "2022",
  },
  {
    artist_name: "Killing Joke",
    genre: "Rock",
    album: "PHosanna From The Basements of Hell (Deluxe)",
    album_year: "2022",
  },
  {
    artist_name: "The Kinks",
    genre: "Rock",
    album: "From Muswell Hill",
    album_year: "2019",
  },
  {
    artist_name: "Kiss",
    genre: "Hard Rock, Heavy Metal",
    album: "Creatures Of The Night (40th Anniversery/ Su ...",
    album_year: "2022",
  },
  {
    artist_name: "Lady GaGa",
    genre: "Electropop, Pop, Dance Pop",
    album: "Chromatica",
    album_year: "2020",
  },
  {
    artist_name: "Lana Del Ray",
    genre: "Indie Rock",
    album: "Norman Fucking Rockwell! [explicit]",
    album_year: "2019",
  },
  {
    artist_name: "Laura Marling",
    genre: "Alternative/ Indie",
    album: "Songs For Our Daughter",
    album_year: "2020",
  },
  {
    artist_name: "Led Zeppelin",
    genre: "Rock",
    album: "An Introduction To Led Zeppelin",
    album_year: "2018",
  },
  {
    artist_name: "The Libertines",
    genre: "Alternative/ Indie",
    album: "Up The Bracket: Early Demos",
    album_year: "2022",
  },
];

const seedAlbums = async () => {
  console.log(albumData);
  const albums = await Album.bulkCreate(albumData);
};

module.exports = seedAlbums;
