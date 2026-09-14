import React, { useState } from 'react';
import { Compass, CheckCircle2, AlertCircle, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../../types';

interface QuizQuestion {
  id: number;
  loTitle: string;
  frTitle: string;
  options: {
    id: string;
    lo: string;
    fr: string;
    feedbackLo: string;
    feedbackFr: string;
    isIdeal: boolean;
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    loTitle: '1. ເມື່ອມີຄວາມເຫັນບໍ່ຕົງກັນໃນເລື່ອງເລັກໆ, ທ່ານຄິດວ່າວິທີຮັບມືທີ່ດີທີ່ສຸດແມ່ນຫຍັງ?',
    frTitle: '1. Face à un désaccord mineur, quelle réaction privilégiez-vous ?',
    options: [
      {
        id: '1a',
        lo: 'ງຽບໄວ້ ແລະ ເກັບຄວາມບໍ່ພໍໃຈໄວ້ໃນໃຈ, ລໍຖ້າໃຫ້ລາວຄິດໄດ້ເອງ',
        fr: 'Garder le silence et attendre qu\'il devine la cause de votre mécontentement.',
        feedbackLo: 'ໃນວັດທະນະທຳຝຣັ່ງ, ການງຽບອາດເຮັດໃຫ້ລາວຄິດວ່າບໍ່ມີບັນຫາຫຍັງເລີຍ ແລະ ອາດເກີດຄວາມອຶດອັດສະສົມໄດ້',
        feedbackFr: 'Le non-dit crée l\'incompréhension. Les Français ont besoin d\'échanges verbaux clairs.',
        isIdeal: false
      },
      {
        id: '1b',
        lo: 'ອະທິບາຍຄວາມຮູ້ສຶກ ແລະ ເຫດຜົນຂອງທ່ານຢ່າງໃຈເຢັນ ແລະ ສຸພາບ ເພື່ອແລກປ່ຽນມຸມມອງກັນ',
        fr: 'Exprimer calmement votre ressenti avec bienveillance pour échanger vos points de vue.',
        feedbackLo: 'ຍອດຢ້ຽມຫຼາຍ! ການສື່ສານຢ່າງກົງໄປກົງມາດດ້ວຍຄວາມສຸພາບແມ່ນສິ່ງທີ່ສ້າງຄວາມເຄົາລົບເຊິ່ງກັນ ແລະ ກັນຢ່າງແທ້ຈິງ',
        feedbackFr: 'Excellent ! C\'est la clé d\'une relation équilibrée et durable avec un homme sérieux.',
        isIdeal: true
      }
    ]
  },
  {
    id: 2,
    loTitle: '2. ຫາກຜູ້ຊາຍທີ່ຄຸຍນຳເລີ່ມຂໍຮ້ອງໃຫ້ທ່ານໂອນເງິນຊ່ວຍຄ່າໃຊ້ຈ່າຍ ຫຼື ຊວນລົງທຶນ, ທ່ານຈະເຮັດແນວໃດ?',
    frTitle: '2. Si un homme rencontré en ligne vous demande une aide financière ou un investissement :',
    options: [
      {
        id: '2a',
        lo: 'ເຫັນໃຈ และ ໂອນໃຫ້ ຍ້ອນຄິດວ່າລາວຄົງເດືອດຮ້ອນແທ້ໆ',
        fr: 'Lui transférer de l\'argent par compassion en pensant qu\'il est en difficulté.',
        feedbackLo: 'ອັນຕະລາຍຫຼາຍ! ນີ້ແມ່ນກົນໂກງຂອງມິດສາຊີບ 100% ຜູ້ຊາຍທີ່ຈິງຈັງ ແລະ ໃຫ້ກຽດຈະບໍ່ມີວັນຂໍເງິນຈາກທ່ານເດັດຂาด',
        feedbackFr: 'Alerte rouge absolue ! C\'est le mode opératoire des escrocs en ligne à 100 %.',
        isIdeal: false
      },
      {
        id: '2b',
        lo: 'ປະຕິເສດທັນທີ, ຍຸຕิການຕິດຕໍ່ ແລະ ບລັອກເພື່ອຄວາມປອດໄພຂອງຕົນເອງ',
        fr: 'Refuser catégoriquement, cesser tout échange et bloquer le contact sans hésiter.',
        feedbackLo: 'ຖືກຕ້ອງທີ່ສຸດ! ການປົກປ້ອງຕົນເອງ ແລະ ເງິນຄຳແມ່ນສິດເດັດຂາດຂອງທ່ານ',
        feedbackFr: 'Parfait réflexe de sécurité. Ne faites jamais aucune concession sur ce point.',
        isIdeal: true
      }
    ]
  },
  {
    id: 3,
    loTitle: '3. ທ່ານມອງເລື່ອງ "ພື້ນທີ່ສ່ວນຕົວ ແລະ ຄວາມເປັນອິດສະຫຼະ" ໃນຊີວິດຄູ່ແນວໃດ?',
    frTitle: '3. Quelle est votre vision de l\'indépendance personnelle au sein du couple ?',
    options: [
      {
        id: '3a',
        lo: 'ຕ້ອງຢູ່ດ້ວຍກັນຕະຫຼອດເວລາ ແລະ ລາຍງານທຸກການເຄື່ອນໄຫວ 24 ຊົ່ວໂມງ',
        fr: 'Être toujours ensemble et rendre compte de chaque déplacement 24h/24.',
        feedbackLo: 'ຜູ້ຊາຍຝຣັ່ງສ່ວນໃຫຍ່ມັກໃຫ້ຄຸນຄ່າກັບຄວາມເປັນອິດສະຫຼະ, ການຜູກມັດແໜ້ນເກີນໄປອາດເຮັດໃຫ້ລາວຮູ້ສຶກອຶດອັດ',
        feedbackFr: 'Un excès de contrôle étouffe la complicité dans la culture occidentale.',
        isIdeal: false
      },
      {
        id: '3b',
        lo: 'ມີຄວາມສຸກຮ່ວມກັນ ແລະ ຕ່າງຄົນຕ່າງມີພື້ນທີ່ເຮັດວຽກ, ວຽກອະດິເລກ ແລະ ໝູ່ເພື່ອນຂອງຕົນເອງ',
        fr: 'Partager de doux moments complices tout en respectant les activités et amis de chacun.',
        feedbackLo: 'ສົມບູນແບບ! ຄວາມສຳພັນທີ່ດີເກີດຈາກຄົນສອງຄົນທີ່ມີຄວາມໝັ້ນຄົງໃນຕົນເອງ ແລະ ພ້ອມມາຮ່ວມແບ່ງປັນຄວາມສຸກ',
        feedbackFr: 'C\'est l\'équilibre parfait qui favorise l\'admiration mutuelle et la fidélité durable.',
        isIdeal: true
      }
    ]
  },
  {
    id: 4,
    loTitle: '4. ສຳລັບການນັດພົບຕົວຈິງຄັ້ງທຳອິດ, ສະຖານທີ່ໃດທີ່ທ່ານຄິດວ່າປອດໄພ ແລະ ເໝາະສົມທີ່ສຸດ?',
    frTitle: '4. Pour un premier rendez-vous en vrai, quel cadre choisissez-vous ?',
    options: [
      {
        id: '4a',
        lo: 'ສະຖານທີ່ສາທາລະນະທີ່ມີຜູ້ຄົນໄປມາ ໃນຊ່ວງເວລາກາງເວັນ ພ້ອມບອກຄົນໃກ້ຊິດຕິດແທດໄວ້',
        fr: 'Un café ou restaurant animé en plein jour, en informant une amie de confiance.',
        feedbackLo: 'ຖືກຕ້ອງ ແລະ ປອດໄພ 100%! ຄວາມປອດໄພໃນຊີວິດຈິງຕ້ອງມາກ່ອນສະເໝີ',
        feedbackFr: 'Indispensable pour votre sérénité et sécurité absolue.',
        isIdeal: true
      },
      {
        id: '4b',
        lo: 'ໄປພົບຢູ່ຫ້ອງພັກສ່ວນຕົວ ຫຼື ສະຖານທີ່ປຼ່ຽວຕາມທີ່ລາວຮ້ອງຂໍ',
        fr: 'Se rendre dans une chambre privée ou un endroit isolé s\'il insiste.',
        feedbackLo: 'ອັນຕະລายເດັດຂາດ! ຫ້າມໄປໃນທີ່ລັບຕາຄົນໃນເດດທຳອິດ, ບໍ່ວ່າຈະລົມກັນຖືກຄໍປານໃດໃນແຊັດກໍຕາມ',
        feedbackFr: 'À proscrire impérativement pour votre protection personnelle.',
        isIdeal: false
      }
    ]
  }
];

export const CompatibilityQuizExercise: React.FC<{ language: Language }> = ({ language }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleSelect = (questionId: number, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-stone-200 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-stone-100 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <Compass className="w-5 h-5 text-rose-600" />
            <h3 className="font-bold text-stone-900 text-lg">
              {language === 'lo'
                ? 'ແບບປະເມີນຄວາມພ້ອມ: ຜູ້ຊາຍແບບໃດທີ່ເຂົ້າກັບທ່ານໄດ້ຢ່າງແທ້ຈິງ?'
                : 'Atelier de réflexion : Quel homme est réellement compatible avec vous ?'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            {language === 'lo'
              ? 'ສຳຫຼວດທັດສະນະຄະຕິ ແລະ ຄ່ານິຍົມຄວາມສຳພັນ ເພື່ອສ້າງຄວາມຮັກທີ່ປອດໄພ, ມີກຽດ ແລະ ມີຄວາມສຸກໄລຍະຍາວ'
              : 'Testez vos réflexes face aux situations concrètes d\'une rencontre interculturelle.'}
          </p>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        {quizQuestions.map((q) => {
          const selectedOption = q.options.find((opt) => opt.id === answers[q.id]);
          return (
            <div key={q.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                {language === 'lo' ? q.loTitle : q.frTitle}
              </h4>
              <div className="space-y-2">
                {q.options.map((opt) => {
                  const isSelected = answers[q.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(q.id, opt.id)}
                      className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                        isSelected
                          ? opt.isIdeal
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium'
                            : 'border-rose-400 bg-rose-50 text-rose-950 font-medium'
                          : 'border-stone-200 bg-white hover:border-stone-300 text-stone-700'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        <span className="mt-0.5">
                          {isSelected ? (
                            opt.isIdeal ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            )
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-stone-300 shrink-0" />
                          )}
                        </span>
                        <span>{language === 'lo' ? opt.lo : opt.fr}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Feedback box */}
              {selectedOption && (
                <div
                  className={`p-3 rounded-lg text-xs leading-relaxed ${
                    selectedOption.isIdeal
                      ? 'bg-emerald-100/70 text-emerald-900 border border-emerald-200'
                      : 'bg-rose-100/70 text-rose-900 border border-rose-200'
                  }`}
                >
                  <span className="font-bold block mb-0.5">
                    {language === 'lo' ? '💡 ຂໍ້ຄິດສຳຄັນ:' : '💡 Analyse bienveillante :'}
                  </span>
                  {language === 'lo' ? selectedOption.feedbackLo : selectedOption.feedbackFr}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary Box */}
      {answeredCount === quizQuestions.length && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-200 space-y-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-rose-600" />
            <h4 className="font-bold text-stone-900 text-base">
              {language === 'lo' ? 'ບົດສະຫຼຸບຄວາມຮັກທີ່ເຂົ້າກັນໄດ້ຈິງ' : 'Bilan de compatibilité'}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            {language === 'lo'
              ? 'ຄວາມສຳພັນທີ່ຍືນຍົງບໍ່ໄດ້ສ້າງຂຶ້ນຈາກການເສແສ້ງ ຫຼື ການພະຍາຍາມເອົາໃຈຄົນອື່ນຈົນສູນເສຍຄວາມເປັນຕົວຕົນ, ແຕ່ເກີດຈາກການຄົ້ນພົບຄົນທີ່ເຄົາລົບຕົວຕົນຂອງທ່ານ, ໃຫ້ກຽດເຊິ່ງກັນ ແລະ ກັນ ແລະ ພ້ອມຈະສື່ສານຢ່າງເປີດເຜີຍ. ຄວາມປອດໄພ, ຄວາມຊື່ສັດ ແລະ ຄວາມສະບາຍໃຈ ແມ່ນຫົວໃຈສຳຄັນທີ່ສຸດສະເໝີເດີ້'
              : 'Une relation harmonieuse repose sur la liberté d\'être soi-même, l\'honnêteté, le respect mutuel et une sécurité absolue. Ne faites aucun compromis sur vos valeurs fondamentales.'}
          </p>
        </div>
      )}
    </div>
  );
};
