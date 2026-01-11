import React from 'react';
import { ServiceCategory } from '../types';
import { GOOGLE_COLORS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

interface SlideServiceProps {
  data: ServiceCategory;
}

export const SlideService: React.FC<SlideServiceProps> = ({ data }) => {
  const Icon = data.icon;
  const themeColor = GOOGLE_COLORS[data.colorTheme];

  return (
    <div className="h-full flex flex-col bg-white overflow-hidden relative">
      {/* Header Section */}
      <div className="bg-gray-50 px-6 pt-12 pb-8 rounded-b-[3rem] shadow-sm relative z-10">
        <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg text-white"
            style={{ backgroundColor: themeColor }}
        >
            <Icon size={32} />
        </div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-1">
            {data.subtitle}
        </h3>
        <h2 className="text-3xl font-extrabold text-gray-800 leading-none">
            {data.title}
        </h2>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            {data.description}
        </p>
      </div>

      {/* Pricing List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
        {data.items.map((item, index) => (
          <div 
            key={index} 
            className={`
                relative p-4 rounded-xl border transition-all duration-300
                ${item.highlight 
                    ? 'border-transparent shadow-lg transform scale-[1.02]' 
                    : 'border-gray-100 shadow-sm bg-white'
                }
            `}
            style={{ 
                background: item.highlight ? `linear-gradient(to right bottom, white, ${themeColor}10)` : 'white',
                borderColor: item.highlight ? themeColor : undefined
            }}
          >
            {item.highlight && (
                <div 
                    className="absolute -top-3 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wide"
                    style={{ backgroundColor: themeColor }}
                >
                    Recomendado
                </div>
            )}
            
            <div className="flex justify-between items-start">
                <div className="flex-1 pr-2">
                    <h4 className={`font-bold text-gray-800 ${item.highlight ? 'text-lg' : 'text-base'}`}>
                        {item.name}
                    </h4>
                    {item.detail && (
                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                             <CheckCircle2 size={10} color={themeColor} />
                             {item.detail}
                        </p>
                    )}
                </div>
                <div className="text-right">
                    <span 
                        className="block font-extrabold text-gray-900" 
                        style={{ color: item.highlight ? themeColor : undefined }}
                    >
                        {item.price}
                    </span>
                </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative Gradient Line at bottom */}
      <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500" />
    </div>
  );
};