import React from 'react';
import { Product } from '../types';
import { MessageCircle, Trash2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: Product;
  isAdmin?: boolean;
  onDelete?: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isAdmin, onDelete }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleOrder = () => {
    // Updated message to initiate payment discussion
    const message = `Halo Kak, saya mau pesan ${product.name} seharga ${formatPrice(product.price)}. Bagaimana metode pembayarannya?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 flex flex-col h-full">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-batik-primary uppercase tracking-wide">
          {product.category}
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-serif font-semibold text-stone-900 line-clamp-2 mb-1">
          {product.name}
        </h3>
        <p className="text-stone-500 text-sm line-clamp-2 mb-3 flex-1">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-xl font-bold text-batik-secondary">
              {formatPrice(product.price)}
            </span>
          </div>

          {isAdmin ? (
            <button
              onClick={() => onDelete && onDelete(product.id)}
              className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2.5 px-4 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm"
            >
              <Trash2 className="w-4 h-4" />
              Hapus Produk
            </button>
          ) : (
            <div className="space-y-2">
              <button
                onClick={handleOrder}
                className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2.5 px-4 rounded-lg hover:bg-green-700 active:bg-green-800 transition-all shadow-md hover:shadow-green-200 font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                Pesan via WhatsApp
              </button>
              <p className="text-[10px] text-center text-stone-400 italic">
                 *Mode pembayaran bebas & fleksibel di WA
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;