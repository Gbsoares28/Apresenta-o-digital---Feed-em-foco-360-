import React from 'react';
import { Search } from 'lucide-react';

export const SlideStats: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center bg-white p-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -ml-20 -mb-20"></div>

        <div className="mb-10 text-center z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 text-blue-600">
                <Search size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 uppercase leading-snug">
                Segundo pesquisas do <span className="text-blue-600">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-600">g</span><span className="text-green-600">l</span><span className="text-red-500">e</span>
            </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 z-10">
            <div className="text-center p-4 bg-white border border-green-100 shadow-lg rounded-2xl">
                <span className="block text-4xl font-extrabold text-green-600 mb-2">96%</span>
                <p className="text-xs text-gray-600 font-medium leading-tight">
                    Dos brasileiros procuram empresas no Google antes de ligar ou visitar.
                </p>
            </div>
            
            <div className="text-center p-4 bg-white border border-green-100 shadow-lg rounded-2xl">
                <span className="block text-4xl font-extrabold text-green-600 mb-2">88%</span>
                <p className="text-xs text-gray-600 font-medium leading-tight">
                    Das pessoas confiam nas avaliações online dos clientes feitos no Google.
                </p>
            </div>

             <div className="text-center p-4 bg-white border border-green-100 shadow-lg rounded-2xl">
                <span className="block text-4xl font-extrabold text-green-600 mb-2">62%</span>
                <p className="text-xs text-gray-600 font-medium leading-tight">
                    Preferem fichas que mostram fotos dos produtos e interior do local.
                </p>
            </div>

            <div className="text-center p-4 bg-white border border-green-100 shadow-lg rounded-2xl">
                <span className="block text-4xl font-extrabold text-green-600 mb-2">78%</span>
                <p className="text-xs text-gray-600 font-medium leading-tight">
                   Das fichas completas transmitem mais credibilidade e têm mais chances de serem vistas.
                </p>
            </div>
        </div>
        
        <div className="mt-12 text-center z-10">
            <p className="text-lg font-bold text-gray-800">
                Onde sua empresa está?
            </p>
        </div>
    </div>
  );
};