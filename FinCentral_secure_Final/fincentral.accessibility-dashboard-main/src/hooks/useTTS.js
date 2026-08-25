// useTTS.js - React Hook for Native Web Speech API Text-to-Speech
import { useState, useEffect, useCallback, useRef } from 'react';

export function useTTS(currentLang = 'en') {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingText, setSpeakingText] = useState('');
  const [isSupported, setIsSupported] = useState(true);
  const utteranceRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
    }
  }, []);

  const getBCP47Tag = (lang) => {
    switch (lang) {
      case 'hi':
        return 'hi-IN';
      case 'kn':
        return 'kn-IN';
      case 'en':
      default:
        return 'en-IN';
    }
  };

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setSpeakingText('');
    }
  }, []);

  const speak = useCallback((text, langOverride) => {
    if (!text || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const targetLang = langOverride || currentLang;
    const bcp47 = getBCP47Tag(targetLang);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = bcp47;
    utterance.rate = targetLang === 'en' ? 0.95 : 0.9; // slightly slower for maximum clarity
    utterance.pitch = 1.0;

    // Pick best matching voice if available
    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find(v => v.lang === bcp47 || v.lang.startsWith(targetLang));
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setSpeakingText(text);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setSpeakingText('');
    };

    utterance.onerror = (e) => {
      console.warn('TTS Error or Cancelled:', e);
      setIsSpeaking(false);
      setSpeakingText('');
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [currentLang]);

  // Clean up on unmount or language change
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentLang]);

  return {
    speak,
    stop,
    isSpeaking,
    speakingText,
    isSupported
  };
}
