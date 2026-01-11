import React from 'react';
import { Logo } from './Logo';
import { Rotate3d, Star, MapPin } from 'lucide-react';

export const SlideCover: React.FC = () => {
  return (
    <div className="h-full flex flex-col relative overflow-hidden bg-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -15px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, 15px); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 9s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>

      {/* Background decoration with Float Animation */}
      <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 z-0 animate-float" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-yellow-50 rounded-full blur-3xl opacity-50 z-0 animate-float-reverse" />

      {/* TOP: Smartphone Mockup - Entrance Animation */}
      <div className="flex-1 flex justify-center items-end pb-4 z-10 relative animate-fade-in-up delay-100">
        <div className="relative w-48 h-80 bg-gray-900 rounded-[2.5rem] border-4 border-gray-200 shadow-2xl overflow-hidden transform translate-y-6 hover:-translate-y-2 transition-transform duration-500 ease-out">
          {/* Screen Content */}
          <div className="w-full h-full bg-white flex flex-col">
            {/* Header GMB */}
            <div className="h-24 bg-blue-600 relative p-3">
               <div className="absolute -bottom-6 left-4 w-16 h-16 bg-white rounded-full border-2 border-white shadow-md flex items-center justify-center overflow-hidden">
                  <Logo className="scale-50" />
               </div>
            </div>
            {/* Body GMB */}
            <div className="mt-8 px-4">
              <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
              <div className="flex gap-1 mb-3">
                 {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />)}
                 <span className="text-[8px] text-gray-500 ml-1">(128)</span>
              </div>
              <div className="flex gap-2 mb-4">
                <div className="flex-1 h-8 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100">
                    <span className="text-[8px] text-blue-600 font-bold">Ligar</span>
                </div>
                <div className="flex-1 h-8 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100">
                    <span className="text-[8px] text-blue-600 font-bold">Rotas</span>
                </div>
              </div>
              <div className="space-y-2">
                 <div className="h-2 w-full bg-gray-100 rounded"></div>
                 <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                 <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
              </div>
            </div>
            {/* Map Preview */}
             <div className="mt-auto h-20 bg-gray-100 w-full relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                   <MapPin size={24} className="text-red-500 fill-red-500" />
                </div>
             </div>
          </div>
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl"></div>
        </div>
      </div>

      {/* MIDDLE: Main Text - Entrance Animation */}
      <div className="flex-shrink-0 py-8 px-6 z-10 text-center relative animate-fade-in-up delay-300">
         <div className="absolute left-6 top-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
         <h2 className="text-3xl font-extrabold tracking-tight text-gray-800 leading-tight">
           Transforme sua <br />
           <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500">
             Presença Digital
           </span>
         </h2>
         <p className="text-gray-500 text-sm mt-3 font-medium">
            Soluções completas para destacar sua empresa no Google e Redes Sociais.
         </p>
         <div className="mt-6 flex justify-center">
            <Logo className="scale-75 origin-top" />
         </div>
      </div>

      {/* BOTTOM: Mockups & 360 Icon - Entrance Animation */}
      <div className="flex-1 bg-white relative p-4 z-10 animate-fade-in-up delay-500">
         <div className="grid grid-cols-2 gap-3 h-full max-h-48">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
               <img src="https://picsum.photos/300/400?random=1" alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
               <img src="https://picsum.photos/300/400?random=2" alt="Exterior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
         </div>
         
         {/* 360 Icon Overlay */}
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-4 rounded-full shadow-xl border border-blue-100 hover:scale-105 transition-transform cursor-pointer">
            <Rotate3d size={32} className="text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                Tour 360°
            </div>
         </div>
      </div>
    </div>
  );
};