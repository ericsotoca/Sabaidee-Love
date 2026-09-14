import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import { OfferPlan, Language, TierLevel } from '../types';
import { verifyAccessCode } from '../data/accessCodes';

interface StripeCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer: OfferPlan | null;
  stripeUrl: string;
  onPaymentSuccess: (tier: TierLevel, generatedCode: string) => void;
  language: Language;
}

export const StripeCheckoutModal: React.FC<StripeCheckoutModalProps> = ({
  isOpen,
  onClose,
  offer,
  stripeUrl,
  onPaymentSuccess,
  language,
}) => {
  const [hasRedirected, setHasRedirected] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen || !offer) return null;

  const handleRedirectToStripe = () => {
    if (stripeUrl && stripeUrl.startsWith('http')) {
      window.open(stripeUrl, '_blank', 'noopener,noreferrer');
      setHasRedirected(true);
    }
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    const res = verifyAccessCode(inputCode);
    if (res.valid && res.tier >= offer.tier) {
      setSuccessMsg(
        language === 'lo'
          ? `ປົດລັອກສຳເລັດແລ້ວ! ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ບົດຮຽນເດີ້`
          : `Félicitations ! Votre code est valide.`
      );
      setTimeout(() => {
        onPaymentSuccess(res.tier as TierLevel, inputCode.trim().toUpperCase());
        onClose();
        setSuccessMsg(null);
        setInputCode('');
        setHasRedirected(false);
      }, 1500);
    } else if (res.valid && res.tier < offer.tier) {
      setErrorMsg(
        language === 'lo'
          ? `ລະຫັດນີ້ໃຊ້ສຳລັບແພັກເກດທີ່ຕ່ຳກວ່າ. ກະລຸນາໃຊ້ລະຫັດຜ່ານສຳລັບແພັກເກດທີ ${offer.tier}`
          : `Ce code correspond à l'offre ${res.tier}. Saisissez un code pour l'offre ${offer.tier}.`
      );
    } else {
      setErrorMsg(
        language === 'lo'
          ? 'ລະຫັດເຂົ້າຮຽນບໍ່ຖືກຕ້ອງ, ກະລຸນາກວດສອບລະຫັດທີ່ໄດ້ຮັບຈາກໜ້າຍືນຢັນການຊຳລະເງິນຂອງ Stripe'
          : 'Code d\'accès invalide. Saisissez le code reçu après votre paiement.'
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-5 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-rose-100 text-rose-600">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-base">
                {language === 'lo' ? 'ຊຳລະເງິນຢ່າງປອດໄພ' : 'Paiement sécurisé'}
              </h3>
              <p className="text-xs text-stone-500 font-mono">
                Stripe Payments • SSL 256-bit
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              onClose();
              setHasRedirected(false);
              setErrorMsg(null);
              setSuccessMsg(null);
              setInputCode('');
            }}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!hasRedirected ? (
          <>
            {/* Offer Recap Card */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">
                    {offer.lo.badge || `Pack ${offer.tier}`}
                  </span>
                  <h4 className="font-bold text-stone-900 text-sm mt-1">
                    {language === 'lo' ? offer.lo.name : offer.fr.name}
                  </h4>
                </div>
                <div className="text-right">
                  <div className="text-lg font-extrabold text-stone-900">
                    {offer.priceLak.toLocaleString()} ₭
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium">
                    ~ {offer.priceEur} €
                  </div>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {language === 'lo' ? offer.lo.shortDescription : offer.fr.shortDescription}
              </p>
            </div>

            {/* Reassurance */}
            <div className="flex items-center space-x-2 text-xs text-stone-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {language === 'lo'
                  ? 'ຈ່າຍຄັ້ງດຽວ, ເຂົ້າໃຊ້ງານໄດ້ຕະຫຼອດຊີບ ບໍ່ມີຄ່າທຳນຽມແອບແຝງ'
                  : 'Paiement unique, accès à vie sans abonnement récurrent.'}
              </span>
            </div>

            {/* Action buttons */}
            <div className="pt-2">
              <a
                href={stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setHasRedirected(true)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 text-white font-bold text-sm shadow-md hover:from-rose-700 hover:to-amber-700 transition-all flex items-center justify-center space-x-2 active:scale-98 cursor-pointer no-underline"
              >
                <span>
                  {language === 'lo'
                    ? `ໄປຍັງໜ້າຊຳລະເງິນຂອງ Stripe (${offer.priceLak.toLocaleString()} ₭)`
                    : `S'inscrire et régler sur Stripe (${offer.priceEur} €)`}
                </span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </>
        ) : (
          /* Real Access Code Validation Form */
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed space-y-1.5">
              <p className="font-bold">
                {language === 'lo'
                  ? '🔗 ພວກເຮົາໄດ້ເປີດໜ້າຊຳລະເງິນ Stripe ໃນແທັບໃໝ່ແລ້ວ'
                  : '🔗 Stripe Checkout est ouvert dans un nouvel onglet.'}
              </p>
              <p>
                {language === 'lo'
                  ? 'ເມື່ອທ່ານຊຳລະເງິນຮຽບຮ້ອຍແລ້ວ, ທ່ານຈະໄດ້ຮັບລະຫັດເຂົ້າຮຽນທັນທີ. ກະລຸນາຄັດລອກລະຫັດນັ້ນມາໃສ່ໃນຊ່ອງດ້ານລຸ່ມນີ້ເດີ້:'
                  : 'Une fois votre règlement effectué, copiez le code d\'accès reçu sur Stripe et collez-le ci-dessous pour débloquer votre formation :'}
              </p>
            </div>

            <form onSubmit={handleVerifyCode} className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  {language === 'lo' ? 'ປ້ອນລະຫັດເຂົ້າຮຽນທີ່ໄດ້ຮັບ :' : 'Saisissez votre code d\'accès :'}
                </label>
                <input
                  type="text"
                  placeholder="SABAIDEE-XXXX"
                  value={inputCode}
                  onChange={(e) => {
                    setInputCode(e.target.value);
                    if (errorMsg) setErrorMsg(null);
                  }}
                  className="w-full uppercase font-mono tracking-wider text-center text-base font-bold bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-stone-900 focus:bg-white focus:outline-rose-500 focus:border-rose-500 transition-colors"
                  autoFocus
                />
              </div>

              {errorMsg && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {successMsg && (
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              <div className="flex gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => setHasRedirected(false)}
                  className="px-4 py-3 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs font-bold transition-all shrink-0"
                >
                  {language === 'lo' ? 'ຍ້ອນກັບ' : 'Retour'}
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{language === 'lo' ? 'ປົດລັອກ ແລະ ເລີ່ມຮຽນ' : 'Valider et débloquer'}</span>
                </button>
              </div>
            </form>

            <div className="text-center">
              <a
                href={stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-[11px] text-stone-500 hover:text-rose-600 underline"
              >
                <ExternalLink className="w-3 h-3" />
                <span>
                  {language === 'lo'
                    ? 'ຫາກໜ້າຊຳລະເງິນບໍ່ເປີດຂຶ້ນມາ, ກະລຸນາຄລິກບ່ອນນີ້'
                    : 'Le lien de paiement ne s\'est pas ouvert ? Cliquez ici'}
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
