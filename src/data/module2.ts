import { ModuleData } from '../types';

export const module2Data: ModuleData = {
  id: 'module-2',
  tierRequired: 2,
  lo: {
    title: 'ໂມດູນທີ 2: ຖ່າຍວິດີໂອແນະນຳຕົວດ້ວຍສະມາດໂຟນໃຫ້ນ່າດຶງດູດ',
    tagline: 'ເຕັກນິກການກຽມຕົວ, ຖ່າຍທຳ ແລະ ເວົ້າໜ້າກ້ອງຢ່າງໝັ້ນໃຈ ແລະ ເປັນທຳມະຊາດ',
    description: 'ວິດີໂອສັ້ນ 45-60 ວິນາທີ ມີພະລັງຫຼາຍກວ່າຮູບຖ່າຍຫຼາຍເທົ່າ ຮຽນຮູ້ວິທີຈັດແສງ, ສຽງ, ທ່າທາງ, ບົດເວົ້າ ແລະ ແບບເຝິກຫັດຊ້ອມເວົ້າໜ້າກ້ອງ',
    duration: 'ໃຊ້ເວລາປະມານ 30-40 ນາທີ',
    badge: 'ເພີ່ມສະເໜ່ x3',
  },
  fr: {
    title: 'Module 2 : Réaliser une vidéo attractive avec son smartphone',
    tagline: 'Techniques de tournage, posture et scénario pour rayonner à l\'écran',
    description: 'Une courte vidéo de 45 à 60 secondes inspire 10 fois plus confiance qu\'une simple photo. Maîtrisez la lumière, le son, la gestuelle et le script idéal.',
    duration: 'Durée estimée : 30-40 minutes',
    badge: 'Impact maximal x3',
  },
  exerciseType: 'video_script',
  checklistTitle: {
    lo: 'ເຊັກລິສ: ວິດີໂອຂອງທ່ານພ້ອມເຜີຍແຜ່ແລ້ວຫຼືຍັງ?',
    fr: 'Checklist finale : Ma vidéo est-elle prête à être publiée ?',
  },
  checklist: [
    {
      id: 'm2-c1',
      lo: 'ແສງສະຫວ່າງພຽງພໍ, ສ່ອງກົງເຂົ້າໃບໜ້າ (ບໍ່ຍ້ອນແສງ ຫຼື ໜ້າຕາຄ້ຳມຶດ)',
      fr: 'La lumière est claire et douce sur votre visage (aucun contre-jour).',
      category: 'lighting'
    },
    {
      id: 'm2-c2',
      lo: 'ສຽງເວົ້າຈະແຈ້ງ, ບໍ່ມີສຽງລົບກວນ ເຊັ່ນ ສຽງພັດລົມ, ທີວີ ຫຼື ສຽງລົດແລ່ນດັງ',
      fr: 'Le son de votre voix est net, sans bruit parasite (ventilateur, TV, circulation).',
      category: 'audio'
    },
    {
      id: 'm2-c3',
      lo: 'ໂທລະສັບຕັ້ງນິ່ງໃນລະດັບສາຍຕາ (ບໍ່ຖືແກວ່ງໄປມາ ແລະ ບໍ່ແມ່ນມຸມເງີຍ)',
      fr: 'Le téléphone est stable, fixé à la hauteur de vos yeux (ni en plongée ni en contre-plongée).',
      category: 'framing'
    },
    {
      id: 'm2-c4',
      lo: 'ເບິ່ງກົງໄປທີ່ເລນກ້ອງ (ບໍ່ແມ່ນຈ້ອງເບິ່ງແຕ່ໜ້າຕົນເອງໃນຈໍ)',
      fr: 'Vous regardez bien l\'objectif de la caméra (et non votre propre reflet à l\'écran).',
      category: 'eye_contact'
    },
    {
      id: 'm2-c5',
      lo: 'ການແຕ່ງກາຍສຸພາບ, ຮຽບຮ້ອຍ ແລະ ສົ່ງເສີມບຸກຄະລິກກະພາບຢ່າງເໝາະສົມ',
      fr: 'La tenue vestimentaire est soignée, élégante et naturelle.',
      category: 'outfit'
    },
    {
      id: 'm2-c6',
      lo: 'ຄວາມຍາວວິດີໂອກຳລັງພໍດີ (ລະຫວ່າງ 45 ຫາ 60 ວິນາທີ ບໍ່ຍືດຍາວເກີນໄປ)',
      fr: 'La durée est idéale (entre 45 et 60 secondes, dynamique et rythmée).',
      category: 'timing'
    },
    {
      id: 'm2-c7',
      lo: 'ເວົ້າດ້ວຍນ້ຳສຽງ ແລະ ຮອຍຍິ້ມທີ່ເປັນທຳມະຊາດ ບໍ່ແມ່ນທ່ອງຈຳຄືອ່ານບົດສອບ',
      fr: 'Le ton est spontané, souriant et fluide, sans récitation mécanique.',
      category: 'delivery'
    }
  ],
  chapters: [
    {
      id: 'm2-ch1',
      order: 1,
      lo: {
        id: 'm2-ch1',
        title: '1. ເປັນຫຍັງວິດີໂອຈຶ່ງມີຄວາມສຳຄັນເປັນພິເສດ?',
        explanation: 'ໃນຄວາມສຳພັນທາງໄກ, ວິດີໂອຄືເຄື່ອງມືສ້າງ "ຄວາມໄວ້ເນື້ອເຊື່ອໃຈ" ທີ່ຊົງພະລັງທີ່ສຸດ. ຮູບພາບອາດຖືກຕົບແຕ່ງ ຫຼື ໃຊ້ຟິວເຕີໄດ້ ແຕ່ວິດີໂອຈະເຜີຍໃຫ້ເຫັນຮອຍຍິ້ມ, ນ້ຳສຽງ, ແວວຕາ ແລະ ບຸກຄະລິກທີ່ແທ້ຈິງຂອງທ່ານ ເຊິ່ງເຮັດໃຫ້ຜູ້ຊາຍຮູ້ສຶກວ່າທ່ານມີຕົວຕົນແທ້ຈິງ ແລະ ໜ້າຄົ້ນຫາຢ່າງຫຼວງຫຼາຍ.',
        bulletPoints: [
          'ຢືນຢັນຄວາມຈິງໃຈ: ພິສູດທັນທີວ່າທ່ານບໍ່ແມ່ນໂປຣໄຟລ໌ປອມ ຫຼື ແຊັດບັອດ',
          'ສົ່ງຜ່ານພະລັງບວກ: ຮອຍຍິ້ມ ແລະ ສຽງຫົວໃນວິດີໂອມີສະເໜ່ຫຼາຍກວ່າຕົວໜັງສື',
          'ດຶງດູດຜູ້ຊາຍທີ່ຈິງໃຈ: ຜູ້ຊາຍທີ່ພ້ອມຈະພັດທະນາຄວາມສຳພັນຈິງຈັງຈະໃຫ້ຄວາມສຳຄັນກັບວິດີໂອແນະນຳຕົວເປັນອັນດັບທຳອິດ'
        ],
        practicalTip: 'ເປົ້າໝາຍຂອງວິດີໂອບໍ່ແມ່ນການສະແດງເປັນດາລາ ແຕ່ຄືການສະແດງໃຫ້ເຫັນວ່າທ່ານເປັນຜູ້ຍິງທີ່ອົບອຸ່ນ ແລະ ເຂົ້າເຖິງງ່າຍ.'
      },
      fr: {
        id: 'm2-ch1',
        title: '1. Pourquoi la vidéo est capitale sur ce type de plateforme',
        explanation: 'À distance, la vidéo est le gage de sincérité le plus fort. Si une photo peut être retouchée, la vidéo révèle votre voix, votre regard et votre énergie vivante. Elle rassure instantanément un homme sérieux en lui montrant une femme authentique et accessible.',
        bulletPoints: [
          'Garantie d\'authenticité : élimine tout doute de faux profil.',
          'Transmission d\'émotions : le sourire et le regard captivent bien plus que le texte brut.',
          'Sélection naturelle : attire les hommes véritablement motivés pour faire connaissance.'
        ],
        practicalTip: 'Votre objectif n\'est pas d\'être une actrice de cinéma, mais une femme douce, vraie et accueillante.'
      }
    },
    {
      id: 'm2-ch2',
      order: 2,
      lo: {
        id: 'm2-ch2',
        title: '2. ການຈັດສະພາບແວດລ້ອມ: ແສງ ແລະ ສຽງ',
        explanation: 'ຄຸນນະພາບຂອງວິດີໂອບໍ່ໄດ້ຂຶ້ນຢູ່ກັບຄວາມແພງຂອງໂທລະສັບ ແຕ່ຂຶ້ນຢູ່ກັບ "ແສງ" ແລະ "ສຽງ" ທີ່ທ່ານຄວບຄຸມໄດ້.',
        bulletPoints: [
          'ໃຊ້ແສງທຳມະຊາດ: ຖ່າຍຢູ່ໃກ້ປ່ອງຢ້ຽມໃນເວລາກາງເວັນ, ໃຫ້ແສງສ່ອງເຂົ້າໃບໜ້າຢ່າງອ່ອນໂຍນ, ຫຼີກລ່ຽງການຖ່າຍຍ້ອນແສງ',
          'ສຽງທີ່ງຽບສະຫງົບ: ເລືອກຫ້ອງທີ່ງຽບ, ປິດພັດລົມ ແລະ ໂທລະພາບ, ຫຼີກລ່ຽງສຽງລົດແລ່ນ ຫຼື ສຽງຄົນເວົ້າແຊກ',
          'ຄວາມສະອາດຂອງພື້ນຫຼັງ: ພື້ນຫຼັງຄວນເປັນກຳແພງສີລຽບ ຫຼື ມຸມຫ້ອງທີ່ຈັດເປັນລະບຽບຮຽບຮ້ອຍ'
        ],
        practicalTip: 'ລອງຖ່າຍຄລິບສັ້ນ 5 ວິນາທີແລ້ວເປີດຟັງຄືນ ເພື່ອກວດເບິ່ງຄວາມຊັດເຈນຂອງແສງ ແລະ ສຽງ ກ່ອນຈະເລີ່ມຖ່າຍແທ້.'
      },
      fr: {
        id: 'm2-ch2',
        title: '2. Préparation technique : Lumière et Son',
        explanation: 'Pas besoin de matériel professionnel : une bonne gestion de la lumière du jour et du silence suffit à rendre votre vidéo agréable à regarder.',
        bulletPoints: [
          'Lumière naturelle : placez-vous face à une fenêtre en journée. Évitez les contre-jours.',
          'Silence absolu : fermez portes et fenêtres, éteignez les ventilateurs ou la télévision.',
          'Arrière-plan neutre : choisissez un décor sobre, rangé et propre (mur uni, plantes vertes).'
        ],
        practicalTip: 'Faites toujours un test d\'enregistrement de 5 secondes pour vérifier la clarté du son et de l\'image.'
      }
    },
    {
      id: 'm2-ch3',
      order: 3,
      lo: {
        id: 'm2-ch3',
        title: '3. ບຸກຄະລິກກະພາບ, ການແຕ່ງກາຍ ແລະ ມຸມກ້ອງ',
        explanation: 'ການສະແດງອອກທາງຮ່າງກາຍຈະຊ່ວຍສື່ສານຄວາມໝັ້ນໃຈ ແລະ ຄວາມອ່ອນໂຍນຂອງທ່ານອອກມາ.',
        bulletPoints: [
          'ການແຕ່ງກາຍ: ເລືອກເສື້ອຜ້າທີ່ມີສີສັນສົດໃສ, ສຸພາບຮຽບຮ້ອຍ, ຫຼີກລ່ຽງເສື້ອຜ້າທີ່ເປີດເຜີຍຫຼາຍເກີນໄປ',
          'ລະດັບສາຍຕາ: ຕັ້ງກ້ອງໂທລະສັບໃຫ້ຢູ່ລະດັບດຽວກັບສາຍຕາ ໂດຍການໃຊ້ຂາຕັ້ງກ້ອງ ຫຼື ວາງພີງໄວ້, ຫຼີກລ່ຽງການໃຊ້ແຂນຖືຖ່າຍ',
          'ການສົບຕາ: ເບິ່ງໄປທີ່ຮູເລນກ້ອງໂດຍກົງ, ບໍ່ແມ່ນເບິ່ງແຕ່ໜ້າຈໍຂອງຕົນເອງ, ມັນຈະເຮັດໃຫ້ຜູ້ຊົມຮູ້ສຶກວ່າທ່ານກຳລັງສົບຕາກັບລາວແທ້ໆ'
        ],
        practicalTip: 'ຍິ້ມແຍ້ມແຈ່ມໃສຕັ້ງແຕ່ວິນາທີທຳອິດກ່ອນຈະເລີ່ມເວົ້າ ແລະ ຫາຍໃຈເຂົ້າເລິກໆ ເພື່ອຫຼຸດຜ່ອນຄວາມຕື່ນເຕັ້ນ.'
      },
      fr: {
        id: 'm2-ch3',
        title: '3. Attitude, Tenue et Cadrage',
        explanation: 'Votre langage corporel transmet votre sérénité et votre sincérité à l\'écran.',
        bulletPoints: [
          'Tenue soignée : privilégiez des vêtements de couleurs douces ou lumineuses, élégants et respectueux.',
          'Hauteur d\'yeux : stabilisez votre téléphone à hauteur de votre regard. Évitez de le tenir à bout de bras.',
          'Regard objectif : fixez la lentille de la caméra, pas votre écran, pour créer une vraie connexion visuelle.'
        ],
        practicalTip: 'Souriez dès la première seconde avant de parler et respirez profondément pour chasser le trac.'
      }
    },
    {
      id: 'm2-ch4',
      order: 4,
      lo: {
        id: 'm2-ch4',
        title: '4. ໂຄງສ້າງບົດເວົ້າ 50 ວິນາທີ ທີ່ເໝາະສົມ',
        explanation: 'ບົດເວົ້າທີ່ດີຄວນມີຄວາມກະຊັບ ແລະ ແບ່ງອອກເປັນ 4 ສ່ວນຫຼັກຢ່າງຈະແຈ້ງ.',
        bulletPoints: [
          'ສ່ວນທີ 1 (0-10 ວິນາທີ): ກ່າວທັກທາຍ "Bonjour! ສະບາຍດີ", ແນະນຳຊື່ ແລະ ບອກວ່າຢູ່ເມືອງໃດ',
          'ສ່ວນທີ 2 (10-30 ວິນາທີ): ບອກເລົ່າສາຍງານ ຫຼື ກິດຈະກຳທີ່ມັກເຮັດໃນເວລາຫວ່າງຢ່າງມີຄວາມສຸກ',
          'ສ່ວນທີ 3 (30-45 ວິນາທີ): ບອກເປົ້າໝາຍທີ່ຈິງໃຈໃນການຊອກຫາຄວາມສຳພັນທີ່ໃຫ້ກຽດເຊິ່ງກັນ ແລະ ກັນ',
          'ສ່ວນທີ 4 (45-50 ວິນາທີ): ກ່າວຂອບໃຈທີ່ຮັບຊົມ ແລະ ເວົ້າຄຳວ່າ "à bientôt!" (ພົບກັນໃໝ່)'
        ],
        practicalTip: 'ຝຶກຊ້ອມເວົ້າຫຼາຍໆຄັ້ງກັບຕົວຈັບເວລາ ເພື່ອໃຫ້ເວົ້າໄດ້ເປັນທຳມະຊາດ ແລະ ບໍ່ເກີນ 1 ວິນາທີຕໍ່ປະໂຫຍກ.'
      },
      fr: {
        id: 'm2-ch4',
        title: '4. Structure idéale d\'un script de 50 secondes',
        explanation: 'Un bon script est fluide et s\'articule autour de quatre moments clés.',
        bulletPoints: [
          'Introduction (0-10s) : Salutations chaleureuses (« Bonjour ! Sabaidee »), votre prénom et votre ville.',
          'Passions (10-30s) : Évoquez brièvement votre métier ou vos loisirs simples avec entrain.',
          'Aspirations (30-45s) : Exprimez sincèrement votre recherche d\'une complicité saine et durable.',
          'Conclusion (45-50s) : Remerciez l\'interlocuteur pour son attention et terminez par un amical « à bientôt ! ».'
        ],
        practicalTip: 'Répétez plusieurs fois face au chronomètre pour trouver un rythme de parole naturel et posé.'
      }
    }
  ]
};
