import React, { useState, useEffect } from 'react';
import { Video, Play, Pause, RotateCcw, Copy, Check, Clock, Sparkles, Volume2, Eye } from 'lucide-react';
import { Language } from '../../types';

interface VideoScriptProps {
  language: Language;
}

export const VideoScriptExercise: React.FC<VideoScriptProps> = ({ language }) => {
  const [name, setName] = useState('Noy');
  const [city, setCity] = useState('Luang Prabang');
  const [profession, setProfession] = useState('tourism');
  const [hobby1, setHobby1] = useState('cooking traditional Lao recipes');
  const [hobby2, setHobby2] = useState('morning yoga in nature');
  const [lookingFor, setLookingFor] = useState('a kind, thoughtful man with a warm sense of humor');
  
  // Timer state
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const scriptParts = {
    intro: {
      en: `Bonjour! Sabaidee. My name is ${name} from ${city}.`,
      fr: `Bonjour ! Sabaidee. Je m'appelle ${name} depuis ${city}.`,
      cue: '0 - 10 ວິນາທີ: ທັກທາຍດ້ວຍຮອຍຍິ້ມ, ນົບແບບລາວງາມໆ ແລະ ສົບຕາເລນກ້ອງ'
    },
    passions: {
      en: `I work in ${profession}. When I have free time, I truly enjoy ${hobby1} and ${hobby2}. Simple joys always make me smile!`,
      fr: `Je travaille dans ${profession}. Pendant mes moments libres, j'aime particulièrement ${hobby1} et ${hobby2}. Les bonheurs simples me font toujours sourire !`,
      cue: '10 - 30 ວິນາທີ: ເລົ່າດ້ວຍສາຍຕາເປັນປະກາຍ, ທ່າທາງສະບາຍໆ'
    },
    intentions: {
      en: `I am hoping to meet ${lookingFor}, to share genuine laughter, learn from each other, and build a peaceful relationship.`,
      fr: `J'espère rencontrer ${lookingFor}, pour partager de vrais rires, apprendre l'un de l'autre et construire une relation sereine.`,
      cue: '30 - 45 ວິນາທີ: ນ້ຳສຽງນຸ້ມນວນ, ຈິງໃຈ, ສົບຕາຕົງເລນ'
    },
    closing: {
      en: `Thank you for taking the time to listen to my video. Have a beautiful day, and à bientôt!`,
      fr: `Merci d'avoir pris le temps d'écouter ma vidéo. Passez une très belle journée, et à bientôt !`,
      cue: '45 - 55 ວິນາທີ: ສົ່ງຍິ້ມຫວານ, ໂບກມືເບົາໆ, ລໍຖ້າ 2 ວິນາທີກ່ອນກົດຢຸດ'
    }
  };

  const fullScriptEn = `${scriptParts.intro.en}\n\n${scriptParts.passions.en}\n\n${scriptParts.intentions.en}\n\n${scriptParts.closing.en}`;
  const fullScriptFr = `${scriptParts.intro.fr}\n\n${scriptParts.passions.fr}\n\n${scriptParts.intentions.fr}\n\n${scriptParts.closing.fr}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullScriptEn);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Progress percentage out of 50s ideal
  const targetDuration = 50;
  const progressPercent = Math.min(100, Math.round((seconds / targetDuration) * 100));

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-stone-200 shadow-sm space-y-6">
      {/* Title */}
      <div className="flex items-start justify-between border-b border-stone-100 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <Video className="w-5 h-5 text-rose-600" />
            <h3 className="font-bold text-stone-900 text-lg">
              {language === 'lo' ? 'ແບບຝຶກຫັດປະຕິບັດ: ສ້າງສະຄຣິບ ແລະ ຊ້ອມຖ່າຍວິດີໂອ 50 ວິນາທີ' : 'Atelier pratique : Scénario & Entraînement vidéo 50 secondes'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            {language === 'lo'
              ? 'ປ້ອນຂໍ້ມູນຂອງທ່ານເພື່ອສ້າງບົດເວົ້າພາສາອັງກິດທີ່ກະຊັບ ແລະ ໃຊ້ຕົວຈັບເວລາເພື່ອຝຶກເວົ້າໃຫ້ຈົບໃນ 45-55 ວິນາທີ'
              : 'Renseignez vos éléments pour générer votre script et entraînez-vous avec le chronomètre interactif.'}
          </p>
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-stone-50 p-4 rounded-xl">
        <div>
          <label className="text-xs font-semibold text-stone-600 block mb-1">
            {language === 'lo' ? 'ຊື່ຫຼິ້ນ (Nickname):' : 'Prénom :'}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-stone-800"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-stone-600 block mb-1">
            {language === 'lo' ? 'ແຂວງ/ເມືອງ (City):' : 'Ville :'}
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-stone-800"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-stone-600 block mb-1">
            {language === 'lo' ? 'ວຽກອະດິເລກທີ 1 (Hobby 1):' : 'Passion 1 :'}
          </label>
          <input
            type="text"
            value={hobby1}
            onChange={(e) => setHobby1(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-stone-800"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-stone-600 block mb-1">
            {language === 'lo' ? 'ວຽກອະດິເລກທີ 2 (Hobby 2):' : 'Passion 2 :'}
          </label>
          <input
            type="text"
            value={hobby2}
            onChange={(e) => setHobby2(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-stone-800"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-stone-600 block mb-1">
            {language === 'lo' ? 'ລັກສະນະຜູ້ຊາຍທີ່ທ່ານຊອກຫາ:' : 'Ce que vous recherchez chez un homme :'}
          </label>
          <input
            type="text"
            value={lookingFor}
            onChange={(e) => setLookingFor(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-stone-800"
          />
        </div>
      </div>

      {/* Script Sections Display (Teleprompter style) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
            {language === 'lo' ? 'ບົດເວົ້າ 4 ຊ່ວງ (ພ້ອມຄຳແນະນຳຈັງຫວະ):' : 'Découpage du script en 4 étapes :'}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 text-xs font-semibold text-rose-600 hover:text-rose-800"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (language === 'lo' ? 'ຄັດລອກແລ້ວ' : 'Copié') : (language === 'lo' ? 'ຄັດລອກທັງໝົດ' : 'Tout copier')}</span>
          </button>
        </div>

        {/* 1. Intro */}
        <div className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-rose-200 transition-colors">
          <div className="flex items-center justify-between text-xs text-rose-600 font-bold mb-1">
            <span>{language === 'lo' ? 'ຊ່ວງທີ 1: ຄຳທັກທາຍ (0-10 ວິນາທີ)' : 'Étape 1 : Accroche (0-10s)'}</span>
            <span className="text-stone-400 font-normal">⏱ ~10s</span>
          </div>
          <p className="text-sm font-medium text-stone-800 mb-1">{scriptParts.intro.en}</p>
          <p className="text-xs text-stone-500 italic">{language === 'lo' ? scriptParts.intro.cue : scriptParts.intro.fr}</p>
        </div>

        {/* 2. Passions */}
        <div className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-rose-200 transition-colors">
          <div className="flex items-center justify-between text-xs text-rose-600 font-bold mb-1">
            <span>{language === 'lo' ? 'ຊ່ວງທີ 2: ວຽກ ແລະ ສິ່ງທີ່ມັກ (10-30 ວິນາທີ)' : 'Étape 2 : Passions & univers (10-30s)'}</span>
            <span className="text-stone-400 font-normal">⏱ ~20s</span>
          </div>
          <p className="text-sm font-medium text-stone-800 mb-1">{scriptParts.passions.en}</p>
          <p className="text-xs text-stone-500 italic">{language === 'lo' ? scriptParts.passions.cue : scriptParts.passions.fr}</p>
        </div>

        {/* 3. Intentions */}
        <div className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-rose-200 transition-colors">
          <div className="flex items-center justify-between text-xs text-rose-600 font-bold mb-1">
            <span>{language === 'lo' ? 'ຊ່ວງທີ 3: ຄວາມສຳພັນທີ່ຊອກຫາ (30-45 ວິນາທີ)' : 'Étape 3 : Attentes amoureuses (30-45s)'}</span>
            <span className="text-stone-400 font-normal">⏱ ~15s</span>
          </div>
          <p className="text-sm font-medium text-stone-800 mb-1">{scriptParts.intentions.en}</p>
          <p className="text-xs text-stone-500 italic">{language === 'lo' ? scriptParts.intentions.cue : scriptParts.intentions.fr}</p>
        </div>

        {/* 4. Closing */}
        <div className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-rose-200 transition-colors">
          <div className="flex items-center justify-between text-xs text-rose-600 font-bold mb-1">
            <span>{language === 'lo' ? 'ຊ່ວງທີ 4: ຄຳທັກທາຍປິດທ້າຍ (45-50 ວິນາທີ)' : 'Étape 4 : Conclusion souriante (45-50s)'}</span>
            <span className="text-stone-400 font-normal">⏱ ~5s</span>
          </div>
          <p className="text-sm font-medium text-stone-800 mb-1">{scriptParts.closing.en}</p>
          <p className="text-xs text-stone-500 italic">{language === 'lo' ? scriptParts.closing.cue : scriptParts.closing.fr}</p>
        </div>
      </div>

      {/* Interactive Rehearsal Countdown Timer */}
      <div className="bg-stone-900 text-white p-5 rounded-2xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-sm">
              {language === 'lo' ? 'ເຄື່ອງມືຈັບເວລາຊ້ອມເວົ້າຕໍ່ໜ້າກ້ອງ' : 'Chronomètre d\'entraînement'}
            </span>
          </div>
          <span className="text-xs text-stone-400">
            {language === 'lo' ? 'ເປົ້າໝາຍ: 45 - 55 ວິນາທີ' : 'Cible idéale : 45 - 55s'}
          </span>
        </div>

        <div className="flex items-center justify-center space-x-6 py-2">
          <div className="text-4xl font-mono font-bold tracking-wider text-amber-400">
            {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTimer}
              className={`p-3 rounded-xl font-bold flex items-center space-x-2 transition-all active:scale-95 ${
                isActive ? 'bg-amber-500 text-stone-950' : 'bg-rose-600 text-white hover:bg-rose-700'
              }`}
            >
              {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span className="text-xs">
                {isActive ? (language === 'lo' ? 'ຢຸດຊົ່ວຄາວ' : 'Pause') : (language === 'lo' ? 'ເລີ່ມຊ້ອມເວົ້າ' : 'Lancer')}
              </span>
            </button>
            <button
              onClick={resetTimer}
              className="p-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
              title="ຣີເຊັດ"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="w-full bg-stone-800 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                seconds >= 45 && seconds <= 60
                  ? 'bg-emerald-400'
                  : seconds > 60
                  ? 'bg-rose-400'
                  : 'bg-amber-400'
              }`}
              style={{ width: `${Math.min(100, (seconds / 60) * 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-stone-400 font-mono">
            <span>0s</span>
            <span className="text-emerald-400">{language === 'lo' ? '45 - 55 ວິນາທີ (ໂຊນທີ່ດີທີ່ສຸດ)' : '45s - 55s (Zone idéale)'}</span>
            <span>60s</span>
          </div>
        </div>
      </div>

      {/* Creator French text view */}
      <details className="text-xs text-stone-600">
        <summary className="cursor-pointer font-medium text-stone-700 hover:text-stone-900 flex items-center space-x-1 py-1">
          <Eye className="w-3.5 h-3.5 text-stone-500" />
          <span>{language === 'lo' ? 'ເບິ່ງຄວາມໝາຍພາສາຝຣັ່ງ (Traduction de contrôle FR)' : 'Voir la traduction française du script'}</span>
        </summary>
        <div className="mt-2 p-3 bg-stone-100 rounded-lg text-stone-700 whitespace-pre-line leading-relaxed italic border border-stone-200">
          {fullScriptFr}
        </div>
      </details>
    </div>
  );
};
