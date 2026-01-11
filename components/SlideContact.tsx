import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, Instagram, ArrowRight, MessageCircle } from 'lucide-react';

export const SlideContact: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-white relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(22, 163, 74, 0); }
          100% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
        .animate-float-subtle {
          animation: float-subtle 3s ease-in-out infinite;
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.24, 0, 0.38, 1) infinite;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>

      {/* Background decorations */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50 z-0 animate-float-subtle" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-green-50 rounded-full blur-3xl opacity-50 z-0 animate-float-subtle" style={{ animationDelay: '1.5s' }} />

      <div className="flex-1 flex flex-col items-center justify-center z-10 p-8 text-center space-y-8">
        
        {/* Header */}
        <div className="transform scale-125 mb-4 animate-fade-in-up delay-100">
           <Logo />
        </div>

        <div className="animate-fade-in-up delay-200">
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                Vamos colocar sua empresa no <span className="text-blue-600">topo?</span>
            </h2>
            <p className="text-gray-500 font-medium">
                Agende uma consultoria gratuita e descubra o potencial do seu negócio.
            </p>
        </div>

        {/* CTA Button */}
        <div className="w-full animate-fade-in-up delay-300">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform transition hover:scale-105 flex items-center justify-center gap-2 group cursor-pointer animate-pulse-ring">
                <MessageCircle className="fill-white" />
                <span>Falar no WhatsApp</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        {/* Contact Links */}
        <div className="w-full space-y-4 pt-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer animate-fade-in-up delay-400">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-pink-600 group-hover:scale-110 transition-transform">
                    <Instagram size={20} />
                </div>
                <div className="text-left">
                    <p className="text-xs text-gray-400 font-bold uppercase">Siga-nos</p>
                    <p className="text-gray-800 font-semibold">@feedemfoco360</p>
                </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer animate-fade-in-up delay-500">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-red-500 group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                </div>
                <div className="text-left">
                    <p className="text-xs text-gray-400 font-bold uppercase">Email</p>
                    <p className="text-gray-800 font-semibold">contato@feedemfoco360.com.br</p>
                </div>
            </div>
        </div>

      </div>
      
      {/* Footer Decoration */}
      <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500" />
    </div>
  );
};