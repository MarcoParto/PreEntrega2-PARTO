const products = [
  {
    id: "1",
    name: "Slam Dunk 01",
    price: 8000,
    category: "mangas",
    img: "/assets/slam-dunk-01.jpg",
    stock: 10,
    description: "Descripcion de Slam Dunk 01"
  },
  {
    id: "2",
    name: "Tokyo Ghoul 01",
    price: 6500,
    category: "mangas",
    img: "/assets/tokyo-ghoul-01.jpg",
    stock: 10,
    description: "Descripcion de Tokyo Ghoul 01"
  },
  {
    id: "3",
    name: "The Amazing Spider Man 01",
    price: 12000,
    category: "comics",
    img: "/assets/amazing-spider-man-01.jpg",
    stock: 10,
    description: "Descripcion de Spider Man 01"
  },
  {
    id: "4",
    name: "Batman: Los pecados del padre",
    price: 20000,
    category: "comics",
    img: "/assets/batman-pecados-padre.jpg",
    stock: 10,
    description: "Descripcion de Batman"
  },
  {
    id: "5",
    name: "Saint Seiya 01",
    price: 15000,
    category: "mangas",
    img: "/assets/saint-seiya-01.jpg",
    stock: 10,
    description: "Descripcion de Saint Seiya 01"
  },
  {
    id: "6",
    name: "Monster 01",
    price: 15000,
    category: "mangas",
    img: "/assets/monster-01.jpg",
    stock: 10,
    description: "Descripcion de Monster 01"
  },
  {
    id: "7",
    name: "Rurouni Kenshin 01",
    price: 15000,
    category: "mangas",
    img: "/assets/rurouni-kenshin-01.jpg",
    stock: 10,
    description: "Descripcion de Rurouni Kenshin 01"
  },
  {
    id: "8",
    name: "Superman: Muerte - 30 aniversario",
    price: 30000,
    category: "comics",
    img: "/assets/superman-muerte-aniversario.jpg",
    stock: 10,
    description: "Descripcion de Superman"
  },
  {
    id: "9",
    name: "X-MEN 01",
    price: 12000,
    category: "comics",
    img: "/assets/x-men-01.jpg",
    stock: 10,
    description: "Descripcion de X-MEN"
  },
  {
    id: "10",
    name: "Captain Tsubasa 01",
    price: 15000,
    category: "mangas",
    img: "/assets/captain-tsubasa-01.jpg",
    stock: 10,
    description: "Descripcion de Captain Tsubasa 01"
  },
  {
    id: "11",
    name: "Blame! 01",
    price: 18000,
    category: "mangas",
    img: "/assets/blame-01.jpg",
    stock: 10,
    description: "Descripcion de Blame! 01"
  },
  {
    id: "12",
    name: "Watchmen",
    price: 30000,
    category: "comics",
    img: "/assets/watchmen.jpg",
    stock: 10,
    description: "Descripcion de Watchmen"
  },
  {
    id: "13",
    name: "Avengers 01",
    price: 55000,
    category: "comics",
    img: "/assets/avengers-01.jpg",
    stock: 10,
    description: "Descripcion de Avengers"
  },
  {
    id: "14",
    name: "Fantastic Four 01",
    price: 25000,
    category: "comics",
    img: "/assets/fantastic-four-01.jpg",
    stock: 10,
    description: "Descripcion de Fantastic Four"
  },
  {
    id: "15",
    name: "DareDevil 01",
    price: 20000,
    category: "comics",
    img: "/assets/daredevil-01.jpg",
    stock: 10,
    description: "Descripcion de DareDevil"
  },
  {
    id: "16",
    name: "One Piece 01",
    price: 8000,
    category: "mangas",
    img: "/assets/one-piece-01.jpg",
    stock: 10,
    description: "Descripcion de One Piece"
  },
  {
    id: "17",
    name: "Naruto 01",
    price: 8000,
    category: "mangas",
    img: "/assets/naruto-01.jpg",
    stock: 10,
    description: "Descripcion de Naruto"
  },
  {
    id: "18",
    name: "Dragon Ball Super 01",
    price: 8000,
    category: "mangas",
    img: "/assets/dragon-ball-super-01.jpg",
    stock: 10,
    description: "Descripcion de Dragon Ball Super"
  },
  {
    id: "19",
    name: "Vinland Saga 01",
    price: 12000,
    category: "mangas",
    img: "/assets/vinland-saga-01.jpg",
    stock: 10,
    description: "Descripcion de Vindland Saga"
  },
  {
    id: "20",
    name: "Drifting Dragons 01",
    price: 15000,
    category: "mangas",
    img: "/assets/drifting-dragons-01.jpg",
    stock: 10,
    description: "Descripcion de Drifting Dragons"
  },
  {
    id: "21",
    name: "Figura - Superman",
    price: 72000,
    category: "figuras",
    img: "/assets/superman-figura.jpg",
    stock: 10,
    description: "Descripcion de figura Superman"
  },
  {
    id: "22",
    name: "Figura - Batman",
    price: 72000,
    category: "figuras",
    img: "/assets/batman-figura.jpg",
    stock: 10,
    description: "Descripcion de figura Batman"
  },
  {
    id: "23",
    name: "El Señor de los Anillos - El Juego de Rol",
    price: 80000,
    category: "libros",
    img: "/assets/lord-of-the-rings-book.jpg",
    stock: 10,
    description: "Descripcion de El Señor de los Anillo Juego de Rol"
  },
  {
    id: "24",
    name: "Dungeon & Dragons - Caja de Inicio",
    price: 120000,
    category: "juegos-de-rol",
    img: "/assets/d&d-caja-inicio.png",
    stock: 10,
    description: "Descripcion de El Señor de los Anillo Juego de Rol"
  },
  {
    id: "25",
    name: "El Señor de los Anillos - Viajes por la Tierra Media",
    price: 150000,
    category: "juegos-de-rol",
    img: "/assets/el-senor-de-los-anillos-viajes-por-la-tierra-media.jpg",
    stock: 10,
    description: "Descripcion de El Señor de los Anillo Juego de Rol"
  },
];
  
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
  
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};
  
export const getProductById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productoId));
    }, 1000);
  });
};
  