import React, { useState, useRef } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import { Plus, Upload, X } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { products, addProduct, deleteProduct } = useProducts();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Form State
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Unisex');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !description || !imagePreview) return;

    addProduct({
      name,
      price: parseFloat(price),
      description,
      imageUrl: imagePreview,
      category,
    });

    // Reset form
    setName('');
    setPrice('');
    setDescription('');
    setCategory('Unisex');
    setImagePreview(null);
    setIsFormOpen(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-batik-primary">Dashboard Admin</h1>
          <p className="text-stone-500">Kelola produk batikmu disini.</p>
        </div>
        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="bg-batik-secondary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-amber-800 transition-colors flex items-center gap-2 shadow-sm w-fit"
        >
          {isFormOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          {isFormOpen ? 'Tutup Form' : 'Tambah Produk'}
        </button>
      </div>

      {/* Add Product Form */}
      {isFormOpen && (
        <div className="bg-white rounded-xl shadow-lg border border-stone-200 p-6 mb-10 animate-fade-in-down">
          <h2 className="text-lg font-bold text-stone-800 mb-6 pb-2 border-b border-stone-100">
            Form Tambah Produk Baru
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Nama Produk</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-batik-primary outline-none"
                  placeholder="Contoh: Kemeja Batik Solo"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Harga (IDR)</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-batik-primary outline-none"
                    placeholder="150000"
                    required
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Kategori</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-batik-primary outline-none bg-white"
                  >
                    <option value="Pria">Pria</option>
                    <option value="Wanita">Wanita</option>
                    <option value="Unisex">Unisex</option>
                    <option value="Anak">Anak</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Deskripsi</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-batik-primary outline-none h-32 resize-none"
                  placeholder="Jelaskan detail bahan, motif, dan ukuran..."
                  required
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Foto Produk</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-batik-secondary transition-colors cursor-pointer bg-gray-50 relative group">
                  <div className="space-y-1 text-center">
                    {imagePreview ? (
                      <div className="relative">
                        <img 
                          src={imagePreview} 
                          alt="Preview" 
                          className="mx-auto h-64 object-cover rounded-md shadow-sm"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-md">
                           <span className="text-white font-medium">Ganti Foto</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600 justify-center">
                          <span className="relative cursor-pointer bg-white rounded-md font-medium text-batik-primary hover:text-indigo-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload file</span>
                          </span>
                          <p className="pl-1">atau drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                      </>
                    )}
                    <input 
                      ref={fileInputRef}
                      type="file" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept="image/*"
                      onChange={handleImageChange}
                      required={!imagePreview}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-batik-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-900 transition-all shadow-md"
                >
                  Simpan Produk
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Product List */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-stone-800 border-l-4 border-batik-secondary pl-3">
          Daftar Produk ({products.length})
        </h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isAdmin={true}
                onDelete={deleteProduct}
              />
            ))}
          </div>
        ) : (
          <div className="bg-stone-50 rounded-xl p-10 text-center border-2 border-dashed border-stone-200">
             <p className="text-stone-500">Belum ada produk. Silakan tambahkan produk baru.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;