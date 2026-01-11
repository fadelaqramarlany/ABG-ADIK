import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-batik-primary text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-serif font-bold mb-4">ABG@ADIK</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Pusat belanja batik modern untuk anak muda. Tampil kece dengan warisan budaya Indonesia.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-md font-bold mb-4 uppercase tracking-wider text-sm">Kontak Kami</h4>
            <div className="space-y-2 text-sm">
              <p>WhatsApp: +62 812-6426-1349</p>
              <p>Email: halo@batikku.com</p>
              <p>Yogyakarta, Indonesia</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-md font-bold mb-4 uppercase tracking-wider text-sm">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-batik-secondary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-batik-secondary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-batik-secondary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-indigo-900 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} ABG@ADIK Batik Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;