import { reactive, ref } from 'vue'

export const uiControls = reactive({
  count: 0,
  productId: null,
  quantityProductId: 0,
  arrProductId: [],
  indexVersionColor: 0,
  numberProduct: 0
})

export function formattedPrice(priceProduct) {
  return priceProduct.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}

export const products = ref([
  {
    id: 1,
    name: 'Dark Floral Onepiece',
    price: 95,
    releaseDate: '2024-10-12',
    hot: true,
    brand: 'Just Me',
    describe: 'Soft material, suitable for all subjects',
    image: 'product-item-1.jpg',
    colorVersions: [
      {
        color: 'Black',
        quantity: 5,
      },
      {
        color: 'Red',
        quantity: 3,
      },
      {
        color: 'Blue',
        quantity: 0,
      },
    ],
  },
  {
    id: 2,
    name: 'Classic T-shirt',
    price: 45,
    releaseDate: '2024-10-11',
    hot: false,
    brand: 'Urban Vibes',
    describe: 'Comfortable and casual, great for everyday wear',
    image: 'product-item-2.jpg',
    colorVersions: [
      {
        color: 'White',
        quantity: 10,
      },
      {
        color: 'Grey',
        quantity: 8,
      },
      {
        color: 'Navy',
        quantity: 0,
      },
    ],
  },
  {
    id: 3,
    name: 'Elegant Evening Gown',
    price: 150,
    releaseDate: '2024-10-10',
    hot: true,
    brand: 'Glamour Fashion',
    describe: 'Perfect choice for formal events and parties',
    image: 'product-item-3.jpg',
    colorVersions: [
      {
        color: 'Emerald',
        quantity: 2,
      },
      {
        color: 'Burgundy',
        quantity: 4,
      },
      {
        color: 'Black',
        quantity: 1,
      },
    ],
  },
  {
    id: 4,
    name: 'Sporty Joggers',
    price: 65,
    releaseDate: '2024-10-09',
    hot: false,
    brand: 'ActiveFit',
    describe: 'Durable and stylish, ideal for workouts',
    image: 'product-item-4.jpg',
    colorVersions: [
      {
        color: 'Black',
        quantity: 7,
      },
      {
        color: 'Olive',
        quantity: 6,
      },
      {
        color: 'Grey',
        quantity: 0,
      },
    ],
  },
  {
    id: 5,
    name: 'Vintage Denim Jacket',
    price: 120,
    releaseDate: '2024-10-08',
    hot: true,
    brand: 'Retro Chic',
    describe: 'Timeless denim jacket for all occasions',
    image: 'product-item-5.jpg',
    colorVersions: [
      {
        color: 'Denim Blue',
        quantity: 5,
      },
      {
        color: 'Black',
        quantity: 2,
      },
      {
        color: 'Light Blue',
        quantity: 0,
      },
    ],
  },
  {
    id: 6,
    name: 'Summer Maxi Dress',
    price: 110,
    releaseDate: '2024-10-07',
    hot: false,
    brand: 'Sunshine Style',
    describe: 'Light and breezy, perfect for summer days',
    image: 'product-item-6.jpg',
    colorVersions: [
      {
        color: 'Yellow',
        quantity: 8,
      },
      {
        color: 'Green',
        quantity: 5,
      },
      {
        color: 'Coral',
        quantity: 0,
      },
    ],
  },
  {
    id: 7,
    name: 'Winter Parka',
    price: 200,
    releaseDate: '2024-10-06',
    hot: true,
    brand: 'Warm & Cozy',
    describe: 'Keeps you warm in the coldest conditions',
    image: 'product-item-7.jpg',
    colorVersions: [
      {
        color: 'Navy',
        quantity: 3,
      },
      {
        color: 'Grey',
        quantity: 4,
      },
      {
        color: 'Olive',
        quantity: 2,
      },
    ],
  },
  {
    id: 8,
    name: 'Formal Suit',
    price: 250,
    releaseDate: '2024-10-05',
    hot: false,
    brand: 'Executive Line',
    describe: 'Sharp and sophisticated, ideal for business events',
    image: 'product-item-8.jpg',
    colorVersions: [
      {
        color: 'Black',
        quantity: 1,
      },
      {
        color: 'Grey',
        quantity: 3,
      },
      {
        color: 'Charcoal',
        quantity: 2,
      },
    ],
  },
  {
    id: 9,
    name: 'Casual Hoodie',
    price: 60,
    releaseDate: '2024-10-04',
    hot: true,
    brand: 'Comfy Wear',
    describe: 'Warm and comfortable, a wardrobe staple',
    image: 'product-item-9.jpg',
    colorVersions: [
      {
        color: 'Red',
        quantity: 5,
      },
      {
        color: 'Black',
        quantity: 2,
      },
      {
        color: 'Beige',
        quantity: 0,
      },
    ],
  },
  {
    id: 10,
    name: 'Silk Scarf',
    price: 35,
    releaseDate: '2024-10-03',
    hot: false,
    brand: 'Elegance',
    describe: 'Adds a touch of class to any outfit',
    image: 'product-item-10.jpg',
    colorVersions: [
      {
        color: 'Black',
        quantity: 6,
      },
      {
        color: 'White',
        quantity: 4,
      },
      {
        color: 'Gold',
        quantity: 0,
      },
    ],
  },
])

