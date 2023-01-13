const sequelize = require("../config/connection.js");
const Artist = require("../models/Artist.js");

const artistData = [
  {
    artist_name: "50 Cent",
  },
  {
    artist_name: "2 Pac",
  },
  {
    artist_name: "30 Seconds To Mars",
  },
  {
    artist_name: "A Thousand Horses",
  },
  {
    artist_name: "ABBA",
  },
  {
    artist_name: "ABC",
  },
  {
    artist_name: "Aerosmith",
  },
  {
    artist_name: "Annetha Faltskog",
  },
  {
    artist_name: "Alan Jackson",
  },
  {
    artist_name: "Albert King",
  },
  {
    artist_name: "Alice Cooper",
  },
  {
    artist_name: "Alison Krauss",
  },
  {
    artist_name: "The All American Rejects",
  },
  {
    artist_name: "The Allman Bothers Band",
  },
  {
    artist_name: "Amy Winehouse",
  },
  {
    artist_name: "Andre Rieu",
  },
  {
    artist_name: "Andre Bocelli",
  },
  {
    artist_name: "Andrew W.K.",
  },
  {
    artist_name: "Anthrax",
  },
  {
    artist_name: "Antonio Carlos Jobim",
  },
  {
    artist_name: "Apache Indian",
  },
  {
    artist_name: "Arcade Fire",
  },
  {
    artist_name: "Ariana Grande",
  },
  {
    artist_name: "Arrested Development",
  },
  {
    artist_name: "Ashley Campbell",
  },
  {
    artist_name: "Astrud Gilberto",
  },
  {
    artist_name: "Aswad",
  },
  {
    artist_name: "Atlanta Rythmn Section",
  },
  {
    artist_name: "Audioslave",
  },
  {
    artist_name: "B.B. King",
  },
  {
    artist_name: "Badfinger",
  },
  {
    artist_name: "The Band",
  },
  {
    artist_name: "Barclay James Harvest",
  },
  {
    artist_name: "Barry White",
  },
  {
    artist_name: "The beach Boys",
  },
  {
    artist_name: "Beastie Boys",
  },
  {
    artist_name: "The Beatles",
  },
  {
    artist_name: "Beck",
  },
  {
    artist_name: "Bee Gees",
  },
  {
    artist_name: "Belinda Carlisle",
  },
  {
    artist_name: "Ben Harper",
  },
  {
    artist_name: "Ben Howard",
  },
  {
    artist_name: "Benny Andersson",
  },
  {
    artist_name: " Big Country",
  },
  {
    artistData: "Big Star",
  },
  {
    artist_name: "Bill Evans",
  },
  {
    artist_name: "Billie Eilish",
  },
  {
    artist_name: "Billie Holiday",
  },
  {
    artist_name: "Billy Currington",
  },
  {
    artist_name: "Billy Fury",
  },
  {
    artist_name: "Billy Preston",
  },
  {
    artist_name: "Bjork",
  },
  {
    artist_name: "Black Eyed Peas",
  },
  {
    artist_name: "Black Sabbath",
  },
  {
    artist_name: "Black Uhuru",
  },
  {
    artist_name: "Blind Faith",
  },
  {
    artist_name: "Blink-182",
  },
  {
    artist_name: "Blondie",
  },
  {
    artist_name: "Blue Cheer",
  },
  {
    artist_name: "Bo Diddley",
  },
  {
    artist_name: "Bob Dylan",
  },
  {
    artist_name: "Bob Marley",
  },
  {
    artist_name: "Bob Segar",
  },
  {
    artist_name: "Bon Jovi",
  },
  {
    artist_name: "Bonnie Raitt",
  },
  {
    artist_name: "Booker T",
  },
  {
    artist_name: "Boyz II Men",
  },
  {
    artist_name: "Brantley Gilbert",
  },
  {
    artist_name: "Brenda Holloway",
  },
  {
    artist_name: "Brian Eno",
  },
  {
    artist_name: "The Brothers Johnson",
  },
  {
    artist_name: "Bruce Sprigsteen",
  },
  {
    artist_name: "Bryan Adams",
  },
  {
    artist_name: "Bryan Ferry",
  },
  {
    artist_name: "Buddy Guy",
  },
  {
    artist_name: "Buddy Holly",
  },
  {
    artistData: "Burning Spear",
  },
  {
    artist_name: "Burt Bacharach",
  },
  {
    artist_name: "The Cadillac Three",
  },
  {
    artist_name: "Camel",
  },
  {
    artist_name: "Canned Heat",
  },
  {
    artist_name: "Captain Beefheart",
  },
  {
    artist_name: "Caravan",
  },
  {
    artist_name: "Carpenters",
  },
  {
    artist_name: "Carrie Underwood",
  },
  {
    artist_name: "Cat Stevens",
  },
  {
    artist_name: "Charlie Parker",
  },
  {
    artist_name: "Cheap Trick",
  },
  {
    artist_name: "The Chemical Brothers",
  },
  {
    artist_name: "Cher",
  },
  {
    artist_name: "Chris Cornell",
  },
  {
    artist_name: "Chris Stapleton",
  },
  {
    artist_name: "Chuck Berry",
  },
  {
    artist_name: "Cinderella",
  },
  {
    artist_name: "The Clash",
  },
  {
    artist_name: "Climax Blues Band",
  },
  {
    artist_name: "Coleman Hawkins",
  },
  {
    artist_name: "Commodores",
  },
  {
    artist_name: "Common",
  },
  {
    artist_name: "The Common Linnets",
  },
  {
    artist_name: "Corinne Bailey Rae",
  },
  {
    artist_name: "Count Basie",
  },
  {
    artist_name: "Counting Crows",
  },
  {
    artist_name: "Craig Armstrong",
  },
  {
    artist_name: "The Cranberries",
  },
  {
    artist_name: "Cream",
  },
  {
    artist_name: "Creedence Clearwater Revival",
  },
  {
    artist_name: "Croded House",
  },
  {
    artist_name: "Culture Club",
  },
  {
    artist_name: "The Cure",
  },
  {
    artist_name: "Cutting Crew",
  },
  {
    artist_name: "D'Angelo",
  },
  {
    artist_name: "DMX",
  },
  {
    artist_name: "The Damned",
  },
  {
    artist_name: "Daniel Hope",
  },
  {
    artist_name: "Danny Wilson & Gary",
  },
  {
    artist_name: "David Bowie",
  },
  {
    artist_name: "Dean Martin",
  },
  {
    artist_name: "Debarge",
  },
  {
    artist_name: "Deep Purple",
  },
  {
    artist_name: "Def Leppard",
  },
  {
    artist_name: "Demi Lavato",
  },
  {
    artist_name: "Demis Roussos",
  },
  {
    artist_name: "Derek and the Dominos",
  },
  {
    artist_name: "Desmond Dekker",
  },
  {
    artist_name: "Diana Krall",
  },
  {
    artist_name: "Diana Ross",
  },
  {
    artist_name: "Diana Ross & The Supremes",
  },
  {
    artist_name: "Dierks Bentley",
  },
  {
    artist_name: "Dinah Washington",
  },
  {
    artist_name: "Dio",
  },
  {
    artist_name: "Dire Straits",
  },
  {
    artist_name: "Disclosure",
  },
  {
    artist_name: "Don Henley",
  },
  {
    artist_name: "Donna Summer",
  },
  {
    artist_name: "The Doors",
  },
  {
    artist_name: "Dr Dre",
  },
  {
    artist_name: "Drake",
  },
  {
    artist_name: "Duke Ellington",
  },
  {
    artist_name: "Dusty Springfield",
  },
  {
    artist_name: "EELS",
  },
  {
    artist_name: "EPMD",
  },
  {
    artist_name: "Eagles",
  },
  {
    artist_name: "Eagles of Death Metal",
  },
  {
    artist_name: "Eazy_E",
  },
  {
    artist_name: "Eddie Cochran",
  },
  {
    artist_name: "Elbow",
  },
  {
    artist_name: "Ella Fitzgerald",
  },
  {
    artist_name: "Elliott Smith",
  },
  {
    artist_name: "Elton John",
  },
  {
    artist_name: "Elvis Costello",
  },
  {
    artist_name: "Elvis Presley",
  },
  {
    artist_name: "Emeli Sande",
  },
  {
    artist_name: "Eminem",
  },
  {
    artist_name: "Eric B. & Rakim",
  },
  {
    artist_name: "Eric Church",
  },
  {
    artist_name: "Eric Clapton",
  },
  {
    artist_name: "Etta James",
  },
  {
    artist_name: "Evanescence",
  },
  {
    artist_name: "Eve",
  },
  {
    artist_name: "Extreme",
  },
  {
    artist_name: "Fairport Convention",
  },
  {
    artist_name: "Fats Domino",
  },
  {
    artist_name: "Faust",
  },
  {
    artist_name: "Fergie",
  },
  {
    artist_name: "Fleetwood Mac",
  },
  {
    artist_name: "Florence + The Machine",
  },
  {
    artist_name: "The Flying Burrito Brothers",
  },
  {
    artist_name: "Foo Fighters",
  },
  {
    artist_name: "Four Tops",
  },
  {
    artist_name: "Foxy Brown",
  },
  {
    artist_name: "Frank Sinatra",
  },
  {
    artist_name: "Frank Zappa",
  },
  {
    artist_name: "Frankie Goes To Hollywood",
  },
  {
    artist_name: "Freddie Mercury",
  },
  {
    artist_name: "Free",
  },
  {
    artist_name: "Frida Lyngstad",
  },
  {
    artist_name: "The Game",
  },
  {
    artist_name: "Gang Starr",
  },
  {
    artist_name: "Gary Moore",
  },
  {
    artist_name: "Gene Krupa",
  },
  {
    artist_name: "Gene Vincent",
  },
  {
    artist_name: "Genesis",
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
  },
  {
    artist_name: "George Strait",
  },
  {
    artist_name: "George Thorogood",
  },
  {
    artist_name: "Georgie Fame",
  },
  {
    artist_name: "Ghostface Killah",
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
