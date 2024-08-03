// ======================= TASK 01 =======================

// Initializing albom structure
const albums = [
  { title: "Abbey Road", artist: "The Beatles", year: 1969 },
  { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973 },
  { title: "Rumours", artist: "Fleetwood Mac", year: 1977 },
  { title: "Thriller", artist: "Michael Jackson", year: 1982 },
  { title: "Back in Black", artist: "AC/DC", year: 1980 },
];

// creating an object of music cillection
const musicCollection = {
  albums: albums,
  [Symbol.iterator]: function () {
    let index = 0;
    let albums = this.albums;
    return {
      next: function () {
        if (index < albums.length) {
          return { value: albums[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// using for...of loop to browse through albums in music collection and listen to them on console
// for (let album of musicCollection) {
//   console.log(`${album.title} - ${album.artist} (${album.year})`);
// }

// ======================= TASK 02 =======================

// Create a map for chefs and their specializations
const chefs = new Map([
  ["Victor", "Pizza"],
  ["Olga", "Sushi"],
  ["Dmitry", "Desserts"],
]);

// Create a map for dishes and their chefs
const dishChefs = new Map([
  ["Pizza 'Margherita'", "Victor"],
  ["Pizza 'Pepperoni'", "Victor"],
  ["Sushi 'Philadelphia'", "Olga"],
  ["Sushi 'California'", "Olga"],
  ["Tiramisu", "Dmitry"],
  ["Cheesecake", "Dmitry"],
]);

// Create client objects
const alexei = { name: "Alexei" };
const maria = { name: "Maria" };
const irina = { name: "Irina" };

// Create a map for storing client orders
const orders = new Map([
  [alexei, ["Pizza 'Pepperoni'", "Tiramisu"]],
  [maria, ["Sushi 'California'", "Pizza 'Margherita'"]],
  [irina, ["Cheesecake"]],
]);

// Function to display client orders and the chefs who prepare the ordered dishes
function displayOrders(orders) {
  for (const [client, clientDishes] of orders) {
    console.log(`Client ${client.name} ordered:`);
    clientDishes.forEach((dish) => {
      const chef = dishChefs.get(dish);
      console.log(`- ${dish}, chef: ${chef}`);
    });
  }
}

// Display client orders
displayOrders(orders);
