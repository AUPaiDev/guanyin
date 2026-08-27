import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { setSoundMuted, getSoundMuted, playSingingBowl } from '../utils/audio';

export const AudioToggle: React.FC = () => {
  const [muted, setMuted] = useState(getSoundMuted());

  const toggle = () => {
    const next = !muted;
    setSoundMuted(next);
    setMuted(next);
    if (!next) {
      playSingingBowl(528);
    }
  };

  return (
    <button
      onClick={toggle}
      title={muted ? "开启禅音音效" : "静音禅音音效"}
      className="px-3 py-2 rounded-sm border border-stone-400 bg-white/50 text-stone-700 hover:bg-stone-200 tracking-wider transition-all backdrop-blur-sm cursor-pointer shadow-xs flex items-center gap-1.5 text-xs font-medium font-serif"
    >
      {muted ? (
        <>
          <VolumeX className="w-3.5 h-3.5 text-stone-400" />
          <span className="hidden sm:inline">已静音</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#D92D20]" />
          <span className="hidden sm:inline">禅音开启</span>
        </>
      )}
    </button>
  );
};
