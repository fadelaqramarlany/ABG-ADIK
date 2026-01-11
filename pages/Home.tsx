import React from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import { Sparkles, ArrowDown } from 'lucide-react';

const Home: React.FC = () => {
  const { products } = useProducts();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-batik-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div> {/* Abstract pattern placeholder */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-batik-secondary/20 border border-batik-secondary/30 text-batik-secondary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Koleksi Terbaru 2024</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Batik Modern <br/> Untuk <span className="text-batik-secondary">Anak Muda</span>
          </h1>
          <p className="max-w-2xl text-lg text-stone-300 mb-10">
            Tampil elegan dan kekinian dengan koleksi batik pilihan kami. 
            Desain simple, bahan nyaman, dan harga bersahabat untuk pelajar & mahasiswa.
          </p>
          <a href="#katalog" className="bg-white text-batik-primary px-8 py-3.5 rounded-full font-bold hover:bg-stone-100 transition-colors shadow-lg flex items-center gap-2">
            Lihat Koleksi
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="katalog" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-serif font-bold text-batik-primary">Katalog Pilihan</h2>
            <p className="text-stone-500 mt-2">Temukan gaya batik yang pas buat OOTD kamu.</p>
          </div>
          <div className="text-sm text-stone-500">
            Menampilkan <strong>{products.length}</strong> produk
          </div>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-dashed border-stone-300">
            <p className="text-stone-500 text-lg">Belum ada produk yang ditampilkan.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;