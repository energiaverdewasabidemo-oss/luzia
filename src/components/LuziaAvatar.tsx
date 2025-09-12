import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import { Zap, Eye, Cpu, Wifi, Brain, Activity } from 'lucide-react';

interface LuziaAvatarProps {
  onChatOpen: () => void;
}

interface SpeechBubbleProps {
  message: string;
  isVisible: boolean;
  onClick: () => void;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = memo(({ message, isVisible, onClick }) => {
  if (!isVisible) return null;

  return (
    <div 
      className="absolute -top-20 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      onClick={onClick}
    >
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white px-6 py-4 rounded-2xl shadow-2xl border-2 border-white/30 relative max-w-xs">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-2xl animate-pulse"></div>
        <div className="relative flex items-center space-x-3">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <p className="font-bold text-sm">{message}</p>
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        {/* Speech bubble tail */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-purple-600"></div>
      </div>
    </div>
  );
});

SpeechBubble.displayName = 'SpeechBubble';

const LuziaAvatar: React.FC<LuziaAvatarProps> = memo(({ onChatOpen }) => {
  const [isActive, setIsActive] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [greetingMessage, setGreetingMessage] = useState('');
  const [eyeMovement, setEyeMovement] = useState({ x: 0, y: 0 });
  const [blinkState, setBlinkState] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  const greetingMessages = [
    "¡Hola! Soy LUZIA 👋 ¿Hablamos?",
    "¿Quieres ahorrar en tu factura? 💡",
    "¡Tengo ofertas increíbles para ti! ⚡",
    "¿Te ayudo a encontrar la mejor tarifa? 🚀"
  ];

  // Auto greeting on component mount
  useEffect(() => {
    if (!isActive) return;
    
    const greetingTimer = setTimeout(() => {
      const randomMessage = greetingMessages[Math.floor(Math.random() * greetingMessages.length)];
      setGreetingMessage(randomMessage);
      setShowGreeting(true);
      
      // Hide after 5 seconds and show another
      const hideTimer = setTimeout(() => {
        setShowGreeting(false);
        
        const secondTimer = setTimeout(() => {
          const newMessage = greetingMessages[Math.floor(Math.random() * greetingMessages.length)];
          setGreetingMessage(newMessage);
          setShowGreeting(true);
          
          const finalTimer = setTimeout(() => {
            setShowGreeting(false);
          }, 4000);
          
          return () => clearTimeout(finalTimer);
        }, 2000);
        
        return () => clearTimeout(secondTimer);
      }, 5000);
      
      return () => clearTimeout(hideTimer);
    }, 1000);

    return () => {
      clearTimeout(greetingTimer);
    };
  }, [isActive]);

  const handleClick = useCallback(() => {
    setShowGreeting(false);
    setIsActive(true);
    onChatOpen();
  }, [onChatOpen]);

  const handleBubbleClick = useCallback(() => {
    handleClick();
  }, [handleClick]);

  // Eye movement animation
  useEffect(() => {
    const eyeInterval = setInterval(() => {
      setEyeMovement({
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 2
      });
    }, 2000);

    return () => clearInterval(eyeInterval);
  }, []);

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkState(true);
      setTimeout(() => setBlinkState(false), 150);
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Activity pulse
  useEffect(() => {
    const activityInterval = setInterval(() => {
      setIsActive(prev => !prev);
    }, 4000);

    return () => clearInterval(activityInterval);
  }, []);

  return (
    <div 
      ref={avatarRef}
      className="relative w-60 h-60 md:w-80 md:h-80 mx-auto cursor-pointer group"
      onClick={handleClick}
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
      {/* Holographic Base */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 via-cyan-400/20 to-pink-400/20 blur-2xl animate-pulse"></div>
      
      {/* Speech Bubble */}
      <SpeechBubble 
        message={greetingMessage}
        isVisible={showGreeting}
        onClick={handleBubbleClick}
      />
      
      {/* Robot Head Structure */}
      <div className={`absolute inset-4 md:inset-6 rounded-2xl md:rounded-3xl transition-all duration-1000 ${
        isActive 
          ? 'bg-gradient-to-br from-slate-100 via-white to-slate-200 shadow-2xl shadow-purple-500/30' 
          : 'bg-gradient-to-br from-slate-200 via-slate-100 to-white shadow-xl'
      } border-2 md:border-4 border-slate-300`}>
        
        <div className="absolute inset-2 md:inset-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 md:border-2">
          
          {/* Eyes */}
          <div className="absolute top-8 md:top-12 left-1/2 transform -translate-x-1/2 flex space-x-4 md:space-x-8">
            {/* Left Eye */}
            <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600 md:border-2 overflow-hidden">
              <div 
                className={`absolute w-6 h-6 md:w-8 md:h-8 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-gradient-to-br from-cyan-400 to-blue-500' : 'bg-gradient-to-br from-blue-600 to-blue-800'
                } top-1 left-1 md:top-2 md:left-2`}
                style={{
                  transform: `translate(${eyeMovement.x}px, ${eyeMovement.y}px) ${blinkState ? 'scaleY(0.1)' : 'scaleY(1)'}`
                }}
              >
                <div className="absolute top-0.5 left-0.5 md:top-1 md:left-1 w-1 h-1 md:w-2 md:h-2 bg-white rounded-full opacity-80"></div>
                <div className="absolute bottom-0.5 right-0.5 md:bottom-1 md:right-1 w-0.5 h-0.5 md:w-1 md:h-1 bg-white rounded-full opacity-60"></div>
              </div>
              {/* Eye glow */}
              <div className={`absolute inset-0 rounded-full ${isActive ? 'bg-cyan-400/30' : 'bg-blue-600/20'} blur-sm`}></div>
            </div>
            
            {/* Right Eye */}
            <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600 md:border-2 overflow-hidden">
              <div 
                className={`absolute w-6 h-6 md:w-8 md:h-8 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-gradient-to-br from-cyan-400 to-blue-500' : 'bg-gradient-to-br from-blue-600 to-blue-800'
                } top-1 left-1 md:top-2 md:left-2`}
                style={{
                  transform: `translate(${eyeMovement.x}px, ${eyeMovement.y}px) ${blinkState ? 'scaleY(0.1)' : 'scaleY(1)'}`
                }}
              >
                <div className="absolute top-0.5 left-0.5 md:top-1 md:left-1 w-1 h-1 md:w-2 md:h-2 bg-white rounded-full opacity-80"></div>
                <div className="absolute bottom-0.5 right-0.5 md:bottom-1 md:right-1 w-0.5 h-0.5 md:w-1 md:h-1 bg-white rounded-full opacity-60"></div>
              </div>
              {/* Eye glow */}
              <div className={`absolute inset-0 rounded-full ${isActive ? 'bg-cyan-400/30' : 'bg-blue-600/20'} blur-sm`}></div>
            </div>
          </div>

          {/* Nose/Sensor */}
          <div className="absolute top-14 md:top-20 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-4 md:w-3 md:h-6 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full border border-slate-500">
              <div className={`w-0.5 h-0.5 md:w-1 md:h-1 rounded-full mx-auto mt-1 md:mt-2 ${isActive ? 'bg-green-400 animate-pulse' : 'bg-slate-300'}`}></div>
            </div>
          </div>

          {/* Mouth/Speaker */}
          <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-4 md:w-16 md:h-6 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full border border-slate-600 md:border-2 flex items-center justify-center">
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i}
                    className={`w-0.5 md:w-1 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-cyan-400 animate-pulse h-2 md:h-3' : 'bg-slate-400 h-1 md:h-2'
                    }`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Central Processing Unit */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center transition-all duration-500 ${
              isActive ? 'rotate-180 scale-110' : ''
            }`}>
              <Cpu className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Side Panels */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 md:-translate-x-2">
          <div className="w-3 h-12 md:w-4 md:h-16 bg-gradient-to-b from-slate-300 to-slate-500 rounded-l-lg border border-slate-400 md:border-2">
            <div className={`w-1 h-1 md:w-2 md:h-2 rounded-full mx-auto mt-1 md:mt-2 ${isActive ? 'bg-green-400 animate-pulse' : 'bg-slate-400'}`}></div>
            <div className={`w-1 h-1 md:w-2 md:h-2 rounded-full mx-auto mt-1 md:mt-2 ${isActive ? 'bg-blue-400 animate-pulse' : 'bg-slate-400'}`} style={{ animationDelay: '0.5s' }}></div>
            <div className={`w-1 h-1 md:w-2 md:h-2 rounded-full mx-auto mt-1 md:mt-2 ${isActive ? 'bg-purple-400 animate-pulse' : 'bg-slate-400'}`} style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 md:translate-x-2">
          <div className="w-3 h-12 md:w-4 md:h-16 bg-gradient-to-b from-slate-300 to-slate-500 rounded-r-lg border border-slate-400 md:border-2">
            <div className={`w-1 h-1 md:w-2 md:h-2 rounded-full mx-auto mt-1 md:mt-2 ${isActive ? 'bg-green-400 animate-pulse' : 'bg-slate-400'}`}></div>
            <div className={`w-1 h-1 md:w-2 md:h-2 rounded-full mx-auto mt-1 md:mt-2 ${isActive ? 'bg-blue-400 animate-pulse' : 'bg-slate-400'}`} style={{ animationDelay: '0.5s' }}></div>
            <div className={`w-1 h-1 md:w-2 md:h-2 rounded-full mx-auto mt-1 md:mt-2 ${isActive ? 'bg-purple-400 animate-pulse' : 'bg-slate-400'}`} style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Quantum Antennas */}
      <div className="absolute top-1 md:top-2 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-4">
        <div className={`w-2 h-12 bg-gradient-to-t from-slate-400 to-cyan-400 rounded-full transition-all duration-500 ${isActive ? 'h-16 shadow-lg shadow-cyan-400/50' : ''}`}>
          <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full bg-cyan-400 absolute -top-0.5 md:-top-1 -left-0 md:-left-0.5 transition-all duration-300 ${isActive ? 'animate-ping' : ''}`} />
        </div>
        <div className={`w-2 h-8 md:h-10 bg-gradient-to-t from-slate-400 to-purple-400 rounded-full transition-all duration-500 ${isActive ? 'h-12 md:h-14 shadow-lg shadow-purple-400/50' : ''}`}>
          <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-400 absolute -top-0.5 md:-top-1 -left-0 md:-left-0.5 transition-all duration-300 ${isActive ? 'animate-ping' : ''}`} />
        </div>
      </div>

      {/* Floating Energy Particles */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-1000 ${
            isActive ? 'animate-pulse' : ''
          }`}
          style={{
            top: `${20 + Math.sin(i * 60) * 25}%`,
            left: `${20 + Math.cos(i * 60) * 25}%`,
            animationDelay: `${i * 300}ms`,
            willChange: 'transform'
          }}
        />
      ))}

      {/* Scanning Lines */}
      {isActive && (
        <>
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-ping" />
          <div className="absolute inset-4 md:inset-8 rounded-2xl md:rounded-3xl border border-purple-400/50 animate-pulse" />
        </>
      )}

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/0 via-cyan-400/0 to-pink-400/0 group-hover:from-purple-400/20 group-hover:via-cyan-400/20 group-hover:to-pink-400/20 transition-all duration-500 blur-xl" />
      
      {/* Status Indicator */}
      <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2">
        <div className={`flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-1 md:py-2 rounded-full text-xs font-bold transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-r from-green-400 to-cyan-400 text-white shadow-lg shadow-green-400/30' 
            : 'bg-gradient-to-r from-slate-400 to-slate-500 text-white shadow-lg shadow-slate-400/30'
        }`}>
          <Activity className="w-2 h-2 md:w-3 md:h-3" />
          <span className="text-xs">{isActive ? 'ACTIVA' : 'ESPERA'}</span>
          <Brain className="w-2 h-2 md:w-3 md:h-3" />
        </div>
      </div>
    </div>
  );
});

LuziaAvatar.displayName = 'LuziaAvatar';

export default LuziaAvatar;