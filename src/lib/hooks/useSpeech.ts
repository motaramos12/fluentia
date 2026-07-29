import { useCallback, useState } from "react";

export function useSpeech() {
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = useCallback((text: string, lang: string = "en-US") => {
    // Cancela qualquer fala anterior
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9; // Ligeiramente mais lento para clareza
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  }, []);

  return { speak, stop, isPlaying };
}
