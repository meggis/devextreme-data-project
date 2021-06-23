const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/items', (req, res, next) => {
  const items = [
    {
      id: 1,
      heroName: 'Batman',
      publisher: 'DC Comics',
      realName: 'Bruce Wayne',
      powerStats: {
        "intelligence": "100",
        "strength": "26",
        "speed": "27",
        "durability": "50",
        "power": "47",
        "combat": "100"
      },
      placeOfBirth: 'Crest Hill, Bristol Township; Gotham County',
      appearance: {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eye-color": "blue",
        "hair-color": "black"
      },
      image: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
    },
    {
      id: 2,
      heroName: 'Deadpool',
      publisher: 'Marvel Comics',
      realName: 'Wade Wilson',
      powerStats: {
        "intelligence": "69",
        "strength": "32",
        "speed": "50",
        "durability": "100",
        "power": "100",
        "combat": "100"
      },
      placeOfBirth: 'Canada',
      appearance: {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eye-color": "Brown",
        "hair-color": "No hair"
      },
      image: "https://www.superherodb.com/pictures2/portraits/10/100/835.jpg"
    },
    {
      id: 3,
      heroName: 'Superman',
      publisher: 'Marvel Comics',
      realName: 'Clark Kent',
      powerStats: {
        "intelligence": "94",
        "strength": "100",
        "speed": "100",
        "durability": "100",
        "power": "100",
        "combat": "85"
      },
      placeOfBirth: 'Krypton',
      appearance: {
        "gender": "Male",
        "race": "Kryptonian",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "225 lb",
          "101 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Black"
      },
      image: "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
    },
    {
      id: 4,
      heroName: 'Flash',
      publisher: 'DC Comics',
      realName: 'Jay Garrick',
      powerStats: {
        "intelligence": "63",
        "strength": "10",
        "speed": "100",
        "durability": "50",
        "power": "68",
        "combat": "32"
      },
      placeOfBirth: 'Hibbardsville, Kansas',
      appearance: {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'12",
          "182 cm"
        ],
        "weight": [
          "179 lb",
          "81 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Brown / Whit"
      },
      image: "https://www.superherodb.com/pictures2/portraits/10/100/891.jpg"
    },
    {
      id: 5,
      heroName: 'Black Widow',
      publisher: 'Marvel Comics',
      realName: 'Natasha Romanoff',
      powerStats: {
        "intelligence": "75",
        "strength": "66",
        "speed": "33",
        "durability": "39",
        "power": "36",
        "combat": "100"
      },
      placeOfBirth: 'Earth',
      appearance: {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "131 lb",
          "59 kg"
        ],
        "eye-color": "Green",
        "hair-color": "Auburn"
      },
      image: "https://www.superherodb.com/pictures2/portraits/10/100/248.jpg"
    },
    {
      id: 6,
      heroName: 'Black Panther',
      publisher: "Marvel Comics",
      realName: `T'Challa`,
      powerStats: {
        "intelligence": "88",
        "strength": "16",
        "speed": "30",
        "durability": "60",
        "power": "41",
        "combat": "100"
      },
      placeOfBirth: 'Wakanda, Africa',
      appearance: {
        "gender": "Female",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eye-color": "Brown",
        "hair-color": "Black"
      },
      image: "https://www.superherodb.com/pictures2/portraits/10/100/247.jpg"
    },
    {
      id: 7,
      heroName: 'Thanos',
      publisher: "Marvel Comics",
      realName: 'Thanos',
      powerStats: {
        "intelligence": "100",
        "strength": "100",
        "speed": "33",
        "durability": "100",
        "power": "100",
        "combat": "90"
      },
      placeOfBirth: 'Titan',
      appearance: {
        "gender": "Female",
        "race": "Alien",
        "height": [
          "6'7",
          "201 cm"
        ],
        "weight": [
          "985 lb",
          "443 kg"
        ],
        "eye-color": "Red",
        "hair-color": "No hair"
      },
      image: "https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg"
    },
    {
      id: 8,
      heroName: 'Captain Atom',
      publisher: 'DC Comics',
      realName: 'Nathaniel Adam',
      powerStats: {
        "intelligence": "81",
        "strength": "93",
        "speed": "83",
        "durability": "64",
        "power": "100",
        "combat": "80"
      },
      placeOfBirth: '-',
      appearance: {
        "gender": "Female",
        "race": "Human/Radiation",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Silver"
      },
      image: "https://www.superherodb.com/pictures2/portraits/10/100/1007.jpg"
    },
    {
      id: 9,
      heroName: 'Aurora',
      publisher: 'Marvel Comics',
      realName: 'Jeanne-Marie Beaubier',
      powerStats: {
        "intelligence": "63",
        "strength": "10",
        "speed": "96",
        "durability": "60",
        "power": "74",
        "combat": "56"
      },
      placeOfBirth: 'Montreal, Quebec, Canada',
      appearance: {
        "gender": "Feale",
        "race": "Mutant",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "140 lb",
          "63 kg"
        ],
        "eye-color": "blue",
        "hair-color": "black"
      },
      image: "https://www.superherodb.com/pictures2/portraits/10/100/1289.jpg"
    },
    {
      id: 10,
      heroName: 'Wonder Woman',
      publisher: 'DC Comics',
      realName: 'Diana Prince',
      powerStats: {
        "intelligence": "86",
        "strength": "100",
        "speed": "79",
        "durability": "100",
        "power": "100",
        "combat": "100"
      },
      placeOfBirth: 'Themyscira',
      appearance: {
        "gender": "Feale",
        "race": "Amazon",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "165 lb",
          "74 kg"
        ],
        "eye-color": "blue",
        "hair-color": "black"
      },
      image: 
        "https://www.superherodb.com/pictures2/portraits/10/100/807.jpg"
      
    }
  ]


  const id = parseInt(req.query.id) || null

  if (id) {
    const item = items.find(item => item.id === id)
    if (!item) {
      return res.json({ error: { message: 'There is no item with specific ID' } })
    }

    return res.json({ ...item })
  }

  return res.json({ items });
});

app.get('/api/users', (req, res, next) => {
  const users = [
    {
      DisplayName: 'Ali Gator (DABA)',
      Name: 'Ali',
      Surname: 'Gator',
      Department: 'DABA',
      Email: 'ali.gator@company.com',
      id: 12345,
      Manager: true,
      Roles: ['Manager', 'Account Manager', 'SPOC']
    },
    {
      DisplayName: 'Baba Yaga (DABA)',
      Name: 'Baba',
      Surname: 'Yaga',
      Department: 'DABA',
      Email: 'baba.yaga@company.com',
      id: 12350,
      Manager: false,
      Roles: ['Owner', 'Account Manager']
    }, {
      DisplayName: 'Red Riding Hood (LFAB)',
      Name: 'Red Riding',
      Surname: 'Hood',
      Department: 'LFAB',
      Email: 'red.hood@company.com',
      id: 12355,
      Manager: false,
      Roles: ['Compliance', 'SPOC']
    },
    {
      DisplayName: 'Luke Spooke (RUB)',
      Name: 'Luke',
      Surname: 'Spooke',
      Department: 'RUB',
      Email: 'luke.spooke@company.com',
      id: 12892,
      Manager: true,
      Roles: ['Owner']
    },
    {
      DisplayName: 'Jack O’Lantern (RUB)',
      Name: 'Jack',
      Surname: 'O’Lantern',
      Department: 'RUB',
      Email: 'jack.olantern@company.com',
      id: 12855,
      Manager: false,
      Roles: ['WUBWUBWUB', 'Drake']
    }
  ]

  // setTimeout added to simulate network lag
  setTimeout(() => {
    return res.json({ users });
  }, 2000)
});

// start server
const port = 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
