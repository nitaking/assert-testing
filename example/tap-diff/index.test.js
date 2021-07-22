const actual = {
  "id": "0001",
  "type": "donut",
  "name": "Cake",
  "ppu": 0.55,
  "batters":
    {
      "batter":
        [
          { "id": "1001", "type": "Regular" },
          { "id": "1002", "type": "Chocolate" },
          { "id": "1003", "type": "Blueberry" },
          { "id": "1004", "type": "Devil's Food" }
        ]
    },
  "topping":
    [
      { "id": "5001", "type": "None" },
      { "id": "5002", "type": "Glazed" },
      { "id": "5005", "type": "Sugar" },
      { "id": "5007", "type": "Powdered Sugar" },
      { "id": "5006", "type": "Chocolate with Sprinkles" },
      { "id": "5003", "type": "Chocolate" },
      { "id": "5004", "type": "Maple" }
    ]
}

class Menu {
  id;
  type
  name
  ppu
  batters
  topping
  constructor(props) {
    this.id=props.id
    this.type=props.type
  }
}
class Menu2 {
  id;
  type
  name
  ppu
  batters
  topping
  constructor(props) {
    this.id=props.id
    this.type=props.type
  }
}

const menuList = [
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
  new Menu(actual),
]


const expected = {
  "id": "0001",
  "type": "donut",
  "name": "Cake",
  "ppu": 0.55,
  "batters":
    {
      "batter":
        [
          { "id": "1001", "type": "Regular" },
          { "id": "1002", "type": "Chocolate" },
          { "id": "1003", "type": "Blueberry" },
          { "id": "1004", "type": "Devil's Food" }
        ]
    },
  "topping":
    [
      { "id": "5001", "type": "None" },
      { "id": "5002", "type": "Glazed" },
      { "id": "5005", "type": "Sugar" },
      { "id": "5008", "type": "Powdered Sugar" },
      { "id": "5006", "type": "Chocolate with Sprinkles" },
      { "id": "5003", "type": "Chocolate" },
      { "id": "5004", "type": "Maple" }
    ]
}

const menuList2 = [
  new Menu2(actual),
  new Menu2(actual),
  new Menu2(actual),
  new Menu2(actual),
  new Menu2(actual),
  new Menu2(actual),
  new Menu2(actual),
  new Menu2(actual),
  new Menu2(actual),
  new Menu2(actual),
  new Menu2(expected),
  new Menu2(expected),
  new Menu2(actual),
  new Menu2(actual),
  new Menu2(actual),
  new Menu2(actual),
  new Menu2(actual),
  new Menu2(actual),
]

var test = require('tape');

test('timing test', function (t) {
  t.equal(menuList, menuList2)
});

test('test using promises', async function (t) {
  console.log('___________________')
  const result = await someAsyncThing();
  t.ok(result)
});


