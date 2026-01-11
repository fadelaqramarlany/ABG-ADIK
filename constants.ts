import { Product } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kemeja Batik Parang Modern',
    price: 150000,
    description: 'Kemeja batik motif parang dengan potongan slim fit, cocok untuk anak muda yang ingin tampil elegan namun santai.',
    imageUrl: 'https://picsum.photos/id/1/400/500',
    category: 'Pria'
  },
  {
    id: '2',
    name: 'Blouse Batik Floral Pastel',
    price: 125000,
    description: 'Blouse cantik dengan warna pastel lembut, motif floral kombinasi batik modern. Bahan katun primisima adem.',
    imageUrl: 'https://picsum.photos/id/2/400/500',
    category: 'Wanita'
  },
  {
    id: '3',
    name: 'Outer Batik Casual Navy',
    price: 185000,
    description: 'Outer serbaguna warna navy yang mudah dipadupadankan dengan kaos polos. Tampilan casual chic instan.',
    imageUrl: 'https://picsum.photos/id/3/400/500',
    category: 'Unisex'
  },
  {
    id: '4',
    name: 'Dress Batik Kawung Mininalis',
    price: 210000,
    description: 'Dress selutut dengan motif kawung yang disederhanakan. Tampilan minimalis untuk acara semi-formal.',
    imageUrl: 'https://picsum.photos/id/4/400/500',
    category: 'Wanita'
  },
  {
    id: '5',
    name: 'Kemeja Batik Sogan Klasik',
    price: 165000,
    description: 'Sentuhan klasik warna sogan (coklat) dengan twist potongan modern anak muda.',
    imageUrl: 'https://picsum.photos/id/5/400/500',
    category: 'Pria'
  },
  {
    id: '6',
    name: 'Kulot Batik Mega Mendung',
    price: 135000,
    description: 'Celana kulot nyaman dengan motif mega mendung cerah. Pas untuk hangout.',
    imageUrl: 'https://picsum.photos/id/6/400/500',
    category: 'Wanita'
  }
];

export const WHATSAPP_NUMBER = "6281264261349";
export const ADMIN_USERNAME = "Ratna rasnu";
export const ADMIN_PASSWORD = "batikku.com"; // In a real app, this would be handled securely on the backend