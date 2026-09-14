import { OfferPlan } from '../types';

export const offerPlans: OfferPlan[] = [
  {
    id: 'offer-1',
    tier: 1,
    priceLak: 100000,
    priceEur: 4,
    stripePaymentLinkDefault: 'https://buy.stripe.com/7sY00j3YH1fdfKIb8G1B601',
    lo: {
      name: 'ແພັກເກດທີ 1: ປັບແຕ່ງໂປຣໄຟລ໌',
      shortDescription: 'ເຂົ້າເຖິງໂມດູນທີ 1 ທັງໝົດ ເພື່ອສ້າງໂປຣໄຟລ໌ທີ່ມີສະເໜ່ ແລະ ປອດໄພ',
      targetAudience: 'ເໝາະສຳລັບຜູ້ທີ່ຕ້ອງການເລີ່ມຕົ້ນຂຽນໂປຣໄຟລ໌ໃຫ້ຖືກຕ້ອງ, ຈະແຈ້ງ ແລະ ມີສະເໜ່',
      features: [
        'ເຂົ້າເຖິງໂມດູນທີ 1 (13 ບົດຮຽນແບບລະອຽດ)',
        'ເຕັກນິກການຂຽນຄຳບັນຍາຍຕົວຕົນໃຫ້ນ່າປະທັບໃຈ',
        'ຕົວຢ່າງໂປຣໄຟລ໌ຈິງ (ທັງແບບທີ່ດີ ແລະ ແບບທີ່ຄວນຫຼີກລ່ຽງ)',
        'ແບບເຝິກຫັດສ້າງໂປຣໄຟລ໌ເທື່ອລະຂັ້ນຕອນ (Profile Builder)',
        'ເຊັກລິສກວດຄວາມພ້ອມກ່อนເຜີຍແຜ່ໂປຣໄຟລ໌',
        'ເຂົ້າໃຊ້ງານໄດ້ຕະຫຼອດຊີບ ບໍ່ມີວັນໝົດອາຍຸ'
      ],
      ctaText: 'ສະໝັກຮຽນແພັກເກດໂປຣໄຟລ໌ (100,000 ກີບ)',
      badge: 'ເລີ່ມຕົ້ນທັນທີ'
    },
    fr: {
      name: 'Offre 1 : Améliorer son profil',
      shortDescription: 'Accès complet au Module 1 pour un profil attractif et sécurisé.',
      targetAudience: 'Pour celles qui souhaitent une présentation écrite captivante et rassurante.',
      features: [
        'Accès complet au Module 1 (13 chapitres détaillés)',
        'Techniques de rédaction d\'accroche et de présentation de soi',
        'Exemples réels analysés (bons et mauvais modèles)',
        'Atelier pratique interactif de rédaction pas à pas',
        'Checklist finale de validation du profil',
        'Accès illimité sans abonnement récurrent'
      ],
      ctaText: 'Choisir cette offre (4 € / 100 000 LAK)',
      badge: 'Indispensable'
    }
  },
  {
    id: 'offer-2',
    tier: 2,
    priceLak: 220000,
    priceEur: 9,
    stripePaymentLinkDefault: 'https://buy.stripe.com/cNi8wPdzhga78ig90y1B602',
    lo: {
      name: 'ແພັກເກດທີ 2: ໂປຣໄຟລ໌ + ວິດີໂອແນະນຳຕົວ',
      shortDescription: 'ເຂົ້າເຖິງໂມດູນທີ 1 + ໂມດູນທີ 2 ເຕັກນິກຖ່າຍວິດີໂອດ້ວຍມືຖືໃຫ້ຊົງພະລັງ',
      targetAudience: 'ເໝาະສຳລັບຜູ້ທີ່ຕ້ອງການສ້າງຄວາມໜ້າເຊື່ອຖື ແລະ ຄວາມປະທັບใจສູງສຸດດ້ວຍຄລິບສັ້ນ',
      features: [
        'ລວມທຸກຢ່າງໃນແພັກເກດທີ 1 (ໂມດູນທີ 1)',
        'ເຂົ້າເຖິງໂມดູນທີ 2 ທັງໝົດ (20 ເຕັກນິກຖ່າຍວິດີໂອດ້ວຍສະມາດໂຟນ)',
        'ການຈັດແສງ, ສຽງ, ເສື້ອຜ້າ ແລະ ມຸມກ້ອງໃຫ້ສວຍງາມເປັນທຳມະຊາດ',
        'ແມ່ແບບບົດເວົ້າວິດີໂอ 50 ວິນາທີ ພ້ອມປັບໃຊ້ໄດ້ທັນທີ',
        'ແບບເຝິກຫັດສ້າງສະຄຣິບ + ຈັບເວລາຊ້ອມເວົ້າໜ້າກ້ອງ',
        'ເຊັກລິສຄວາມພ້ອມກ່ອນໂພສວິດີໂອ'
      ],
      ctaText: 'ສະໝັກຮຽນແพັກເກດໂປຣໄຟລ໌ + ວິດີໂອ (220,000 ກີບ)',
      badge: 'ຍົດນິຍົມສູງສຸດ'
    },
    fr: {
      name: 'Offre 2 : Profil + Vidéo smartphone',
      shortDescription: 'Accès aux Modules 1 et 2 pour maximiser la confiance et l\'attractivité.',
      targetAudience: 'Pour celles qui souhaitent ajouter une courte vidéo percutante et naturelle.',
      features: [
        'Tout le contenu du Module 1 inclus',
        'Accès complet au Module 2 (20 chapitres vidéo smartphone)',
        'Maîtrise de la lumière, du son, de la posture et du cadrage',
        'Scénario de 50 secondes clé en main facile à adapter',
        'Générateur de script interactif + chronomètre d\'entraînement',
        'Checklist complète de contrôle vidéo avant publication'
      ],
      ctaText: 'Choisir cette offre (9 € / 220 000 LAK)',
      badge: 'Le plus populaire'
    }
  },
  {
    id: 'offer-3',
    tier: 3,
    priceLak: 330000,
    priceEur: 14,
    stripePaymentLinkDefault: 'https://buy.stripe.com/bJebJ13YH5vt9mk4Ki1B603',
    lo: {
      name: 'ແພັກເກດທີ 3: ຄົບຊຸດ ໂປຣໄຟລ໌ + ວິດີໂອ + ເຂົ້າໃຈໜຸ່ມຝຣັ່ງ',
      shortDescription: 'ເຂົ້າເຖິງຄົບທັງ 3 ໂມດູນ ເພື່ອສ້າງຄວາມສຳພັນທີ່ມີຄຸນນະພາບ, ຍືນຍົງ ແລະ ປອດໄພ',
      targetAudience: 'ຫຼັກສູດທີ່ຄົບຖ້ວນທີ່ສຸດ ເຂົ້າໃຈຄວາມແຕກຕ່າງທາງວັດທະນະທຳ ແລະ ຈັບສັນຍານຄົນຈິງໃຈ',
      features: [
        'ເຂົ້າເຖິງຄົບທັງໝົດ 3 ໂມດູນ (ໂມດູນ 1 + ໂມດູນ 2 + ໂມດູນ 3)',
        'ທຳຄວາມເຂົ້າໃຈວັດທະນະທຳ, ຄວາມຄິດ ແລະ ອາລົມຂັນຂອງໜຸ່ມຝຣັ່ງ',
        'ວິທີເປີດບົດສົນທະນາໃຫ້ນ່າຄຸຍ ແລະ ວິທີຕອບຂໍ້ຄວາມທຳອິດຢ່າງມີສະເໜ່',
        'ສັນຍານບອກວ່າລາວຈິງໃຈ vs ສັນຍານເຕືອນໄພອັນຕະລາຍ (Red Flags)',
        'ແນວທາງຄວາມປອດໄພສູງສຸດ ກົດເຫຼັກປ້ອງກັນມິດສາຊີບ 100%',
        'ເຕັກນິກການນັດເດດຈິງໃນສະຖານທີ່ສາທາລະນະຢ່າງໝັ້ນໃຈ',
        'ແບບປະເມີນຄວາມເຂົ້າກັນໄດ້ ແລະ ເຊັກລິສຄວາມພ້ອມເລີ່ມຕົ້ນຄວາມຮັກ'
      ],
      ctaText: 'ສະໝັກແພັກເກດສົມບູນຄົບ 3 ໂມດູນ (330,000 ກີບ)',
      badge: 'ຄຸ້ມຄ່າ ແລະ ສົມບູນທີ່ສຸດ'
    },
    fr: {
      name: 'Offre 3 : Profil + Vidéo + Comprendre un homme français',
      shortDescription: 'Accès intégral aux 3 Modules : la formation complète d\'excellence.',
      targetAudience: 'Pour celles qui recherchent une relation sincère, sereine et sans pièges culturels.',
      features: [
        'Accès intégral aux Modules 1, 2 et 3',
        'Décryptage des codes culturels, de l\'humour et de l\'expression française',
        'Comment initier la conversation et répondre avec charme et esprit',
        'Indicateurs d\'un homme sérieux vs Red flags d\'alerte immédiats',
        'Sécurité absolue : protection des données et anti-arnaques',
        'Organiser un appel vidéo et une première rencontre en toute sécurité',
        'Atelier de compatibilité personnelle et checklist relationnelle'
      ],
      ctaText: 'Choisir l\'offre intégrale (14 € / 330 000 LAK)',
      badge: 'Valeur maximale'
    }
  }
];
