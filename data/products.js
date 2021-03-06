export const products = [
      {
            id: 1,
            image: '/images/products/watches/img1.jpg',
            title: 'Product 1',
            description: 'This is a Product of Citizen Watches',
            price: 8000,
            category: 'Watches',

      },
      {
            id: 2,
            image: '/images/products/watches/img2.jpg',
            title: 'Product 2',
            description: 'This is a Product of Citizen Watches',
            price: 10000,
            category: 'Watches'
      },
      {
            id: 3,
            image: '/images/products/watches/img3.jpg',
            title: 'Product 3',
            description: 'This is a Product of Citizen Watches',
            price: 12000,
            category: 'Watches'
      },
      {
            id: 4,
            image: '/images/products/belts/belt1.jpg',
            title: 'Product 4',
            description: 'A well refined leather with comfortable material',
            price: 15000,
            category: 'Belts'
      },
      {
            id: 5,
            image: '/images/products/belts/belt2.jpg',
            title: 'Product 5',
            description: 'A well refined leather with comfortable material',
            price: 17000,
            category: 'Belts'
      },
      {
            id: 6,
            image: '/images/products/belts/belt3.jpg',
            title: 'Product 6',
            description: 'A well refined leather with comfortable material',
            price: 20000,
            category: 'Belts'
      },
      {
            id: 7,
            image: '/images/products/gloves/gloves1.jpg',
            title: 'Product 7',
            description: 'Black guinine leather gloves ',
            price: 22000,
            category: 'Gloves'
      },
      {
            id: 8,
            image: '/images/products/gloves/gloves2.jpg',
            title: 'Product 8',
            description: 'Orange guinine leather gloves ',
            price: 25000,
            category: 'Gloves'
      },
      {
            id: 9,
            image: '/images/products/gloves/gloves3.jpg',
            title: 'Product 9',
            description: 'Brown guinine leather gloves ',
            price: 25000,
            category: 'Gloves'
      }
];

JSON.stringify(products)

export const getProductById = (id) => {
      
      return products.find(product => product.id === Number(id));
    }