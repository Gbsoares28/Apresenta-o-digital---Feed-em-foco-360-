import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Abstract Representation of the Logo based on "Feed em Foco 360" description */}
      <div className="relative w-16 h-16 mb-2">
         {/* Circular arrows simulating 360 */}
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
           {/* Blue Arrow */}
           <path d="M50 10 A40 40 0 0 1 90 50" fill="none" stroke="#4285F4" strokeWidth="12" strokeLinecap="round" />
           <path d="M90 50 L80 40 L90 60 L100 40 Z" fill="#4285F4" />
           
           {/* Red Arrow */}
           <path d="M90 50 A40 40 0 0 1 50 90" fill="none" stroke="#EA4335" strokeWidth="12" strokeLinecap="round" />
           <path d="M50 90 L60 80 L40 90 L60 100 Z" fill="#EA4335" />

           {/* Green Arrow */}
           <path d="M50 90 A40 40 0 0 1 10 50" fill="none" stroke="#34A853" strokeWidth="12" strokeLinecap="round" />
           <path d="M10 50 L20 60 L10 40 L0 60 Z" fill="#34A853" />

           {/* Yellow Arrow */}
           <path d="M10 50 A40 40 0 0 1 50 10" fill="none" stroke="#FBBC05" strokeWidth="12" strokeLinecap="round" />
           <path d="M50 10 L40 20 L60 10 L40 0 Z" fill="#FBBC05" />
           
           {/* Play Icon in center */}
           <polygon points="40,35 70,50 40,65" fill="#4285F4" />
        </svg>
      </div>
      <div className="text-center leading-tight">
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
          Feed em Foco
        </h1>
        <span className="text-lg font-bold text-gray-600">360</span>
      </div>
    </div>
  );
};