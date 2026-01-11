import React, { useState, useEffect, useCallback } from 'react';
import { SlideCover } from './components/SlideCover';
import { SlideStats } from './components/SlideStats';
import { SlideService } from './components/SlideService';
import { SlideContact } from './components/SlideContact';
import { SERVICES_DATA } from './constants';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { SlideType, SlideData } from './types';

// Build the slides array
const SLIDES: SlideData[] = [
  { type: SlideType.COVER },
  { type: SlideType.STATS },
  ...SERVICES_DATA.map(service => ({
    type: SlideType.SERVICE,
    content: service
  })),
  { type: SlideType.CONTACT }
];

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    if (currentIndex < SLIDES.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
       // Loop back to start
       setCurrentIndex(0);
    }
  }, [currentIndex]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
        setIsPlaying(false); // Pause on manual interaction
      }
      if (e.key === 'ArrowLeft') {
        prevSlide();
        setIsPlaying(false); // Pause on manual interaction
      }
      if (e.key === ' ') { // Spacebar toggle
        setIsPlaying(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Auto-play Effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, AUTO_PLAY_INTERVAL);
    }

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]); // nextSlide changes when currentIndex changes, effectively resetting the timer

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-0 sm:p-4">
      
      {/* Phone/Story Container - Fixed 9:16 Aspect Ratio */}
      <div 
        className="w-full max-w-md bg-white sm:rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative flex flex-col"
        style={{ aspectRatio: '9/16', maxHeight: '100vh' }}
      >
        
        {/* Progress Bars (Story Indicator) */}
        <div className="absolute top-0 left-0 w-full z-50 p-2 flex gap-1 pointer-events-none">
          {SLIDES.map((_, idx) => (
            <div key={idx} className="h-1 flex-1 bg-gray-300/50 rounded-full overflow-hidden backdrop-blur-sm">
              <div 
                className={`h-full bg-gray-800 transition-all ease-linear ${
                  idx < currentIndex ? 'w-full duration-0' : 
                  idx === currentIndex && isPlaying ? 'w-full' : 
                  idx === currentIndex && !isPlaying ? 'w-0' : 'w-0'
                }`}
                style={{
                    transitionDuration: idx === currentIndex && isPlaying ? `${AUTO_PLAY_INTERVAL}ms` : '0ms'
                }}
              />
            </div>
          ))}
        </div>

        {/* Play/Pause Control */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-6 right-4 z-50 p-2 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors shadow-sm"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
        </button>

        {/* Content Area with Slide Transition */}
        <div className="flex-1 relative overflow-hidden bg-white">
            {/* Click zones for mobile navigation */}
            <div className="absolute inset-y-0 left-0 w-[20%] z-40 cursor-pointer" onClick={() => { prevSlide(); setIsPlaying(false); }}></div>
            <div className="absolute inset-y-0 right-0 w-[20%] z-40 cursor-pointer" onClick={() => { nextSlide(); setIsPlaying(false); }}></div>

            {/* Sliding Track */}
            <div 
                className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {SLIDES.map((slide, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        {slide.type === SlideType.COVER && <SlideCover />}
                        {slide.type === SlideType.STATS && <SlideStats />}
                        {slide.type === SlideType.SERVICE && slide.content && (
                            <SlideService data={slide.content} />
                        )}
                        {slide.type === SlideType.CONTACT && <SlideContact />}
                    </div>
                ))}
            </div>
        </div>

        {/* Desktop Controls (Visual only) */}
        <div className="hidden sm:flex absolute inset-y-0 left-[-60px] items-center text-white/50 hover:text-white cursor-pointer transition-colors" onClick={() => { prevSlide(); setIsPlaying(false); }}>
            <ChevronLeft size={48} />
        </div>
        <div className="hidden sm:flex absolute inset-y-0 right-[-60px] items-center text-white/50 hover:text-white cursor-pointer transition-colors" onClick={() => { nextSlide(); setIsPlaying(false); }}>
            <ChevronRight size={48} />
        </div>

         {/* Bottom Branding / Nav Hint */}
         <div className="absolute bottom-4 left-0 w-full text-center z-30 pointer-events-none">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold bg-white/80 px-3 py-1 rounded-full backdrop-blur shadow-sm">
                {currentIndex + 1} / {SLIDES.length}
            </span>
         </div>
      </div>
    </div>
  );
};

export default App;