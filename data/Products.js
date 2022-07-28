class Product {
  constructor(
    id,
    name,
    description,
    img,
    price,
    pricecut,
    discount,
    quantity,
    stars
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.img = img;
    this.price = price;
    this.pricecut = pricecut;
    this.discount = discount;
    this.quantity = quantity;
    this.stars = stars;
  }
}

const Products = [
  new Product(
    "1",
    "Men's Dress Shirt",
    "Van Heusen Men's Dress Shirt Regular Fit Oxford Solid Buttondown Collar",
    "https://m.media-amazon.com/images/I/61S40EOxM2L._AC_UX425_.jpg",
    "21.99",
    "25.40",
    "13",
    "10",
    "4"
  ),
  new Product(
    "2",
    "Men's Slim-Fit",
    "Essentials Men's Slim-Fit Quick-Dry Golf Polo Shirt",
    "https://m.media-amazon.com/images/I/91uvr9DO3ML._AC_UX466_.jpg",
    "10.99",
    "11.99",
    "8",
    "10",
    "4"
  ),
  new Product(
    "3",
    "Men's Short Sleeve",
    "Nautica Men's Short Sleeve Solid Stretch Cotton Pique Polo Shirt",
    "https://m.media-amazon.com/images/I/81M6OTeCt-S._AC_UX466_.jpg",
    "20.97",
    "24.99",
    "16",
    "10",
    "4"
  ),
  new Product(
    "4",
    "Men's Long Sleeve",
    "Wrangler Authentics Men's Long Sleeve Classic Woven Shirt",
    "https://m.media-amazon.com/images/I/91aLoaWyC3L._AC_UX425_.jpg",
    "19.00",
    "13.00",
    "32",
    "10",
    "4"
  ),
  new Product(
    "5",
    "Silver Jeans",
    "Silver Jeans Co. Men's Zac Relaxed Fit Straight Leg Jeans",
    "https://m.media-amazon.com/images/I/91qB5sbhENS._AC_UL320_.jpg",
    "42.90",
    "98.00",
    "56",
    "10",
    "4"
  ),
  new Product(
    "6",
    "Fit Jean",
    "Wrangler Men's 13MWZ Cowboy Cut Original Fit Jean",
    "https://m.media-amazon.com/images/I/61lfRkA18kL._AC_UY500_.jpg",
    "29.98",
    "36.00",
    "17",
    "10",
    "4"
  ),
  new Product(
    "7",
    "Straight Leg Jean",
    "ARIAT Men's Rebar M5 Durastretch Straight Leg Jean",
    "https://m.media-amazon.com/images/I/618UOMpvJ+L._AC_UX522_.jpg",
    "49.95",
    "69.95",
    "29",
    "10",
    "4"
  ),
  new Product(
    "8",
    "Fit Boot Cut Jean",
    "Wrangler Men's Retro Relaxed Fit Boot Cut Jean",
    "https://m.media-amazon.com/images/I/61f6UoPavoL._AC_UY500_.jpg",
    "61.93",
    "68.00",
    "9",
    "10",
    "4"
  ),
  new Product(
    "9",
    "Casual Skate Shoe",
    "DC Men's Manual Low Top Vegan Friendly Casual Skate Shoe",
    "https://m.media-amazon.com/images/I/71oYQkp33kL._AC_UX500_.jpg",
    "49.99",
    "55.00",
    "9",
    "10",
    "4"
  ),
  new Product(
    "10",
    "Top Skate Shoe",
    "DC Men's Stag Low Top Skate Shoe",
    "https://m.media-amazon.com/images/I/71uDDyqf34L._AC_UX500_.jpg",
    "50.35",
    "75.00",
    "33",
    "10",
    "4"
  ),
  new Product(
    "11",
    "Sneakers",
    "Cole Haan Men's Grand Crosscourt II Sneakers",
    "https://m.media-amazon.com/images/I/71-Lf5YHy3L._AC_UX500_.jpg",
    "135.00",
    "150.00",
    "10",
    "10",
    "4"
  ),
  new Product(
    "12",
    "Lear Sneaker",
    "Lugz Men's Lear Sneaker",
    "https://m.media-amazon.com/images/I/61e+ldD2G7S._AC_UX500_.jpg",
    "34.99",
    "39.99",
    "13",
    "10",
    "4"
  ),
];

module.exports = Products;
