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
      lo: 'การແຕ່ງກາຍສຸພາບ, ຮຽບຮ້ອຍ ແລະ ສົ່ງເສີມບຸກຄະລິກກະພາບຢ່າງເໝາະສົມ',
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
        explanation: 'ໃນຄວາມສຳພັນທາງໄກ, ວິດີໂອຄືເຄື່ອງມືສ້າງ "ຄວາມໄວ້ເນື້ອເຊື່ອໃຈ" ທີ່ຊົງພະລັງທີ່ສຸດ. ຮູບພາບອາດຖືກຕົບແຕ່ງ ຫຼື ໃຊ້ຟິວເຕີໄດ້ ແຕ່ວິດີໂອຈະເຜີຍໃຫ້ເຫັນຮອຍຍິ້ມ, ນ້ຳສຽງ, ແວວຕາ ແລະ ບຸກຄະລິກທີ່ແທ້ຈິງຂອງທ່ານ ເຊິ່ງເຮັດໃຫ້ຜູ້ຊາຍຮູ້ສຶກວ່າທ່ານມີຕົວຕົນແທ້ຈິງ ແລະ ໜ້າຄົ້ນຫາຢ່າງຫຼວງຫຼາຍ.\n\nການໄດ້ເຫັນການເຄື່ອນໄຫວ ແລະ ໄດ້ຍິນສຽງຂອງທ່ານ ຈະຊ່ວຍຫຼຸດຜ່ອນໄລຍະທາງ ແລະ ສ້າງຄວາມຜူກພັນທາງອາລົມຢ່າງໄວວາ ມັນສະແດງອອກເຖິງຄວາມຈິງໃຈ ແລະ ການໃຫ້ກຽດໃນການແນະນຳຕົວ.',
        bulletPoints: [
          'ຢືນຢັນຄວາມຈິງໃຈ: ພິສູດທັນທີວ່າທ່ານບໍ່ແມ່ນໂປຣໄຟລ໌ປອມ ຫຼື ແຊັດບັອດ',
          'ສົ່ງຜ່ານພະລັງບວກ: ຮອຍຍິ້ມ ແລະ ສຽງເວົ້າໃນວິດີໂອມີສະເໜ່ຫຼາຍກວ່າຕົວໜັງສື',
          'ດຶງດູດຜູ້ຊາຍທີ່ຈິງໃຈ: ຜູ້ຊາຍທີ່ພ້ອມຈະພັດທະນາຄວາມສຳພັນຈິງຈັງຈະໃຫ້ຄວາມສຳຄັນກັບວິດີໂອແນະນຳຕົວເປັນອັນດັບທຳອິດ',
          'ສ້າງຄວາມປະທັບໃຈໃນຄັ້ງທຳອິດ: ວິດີໂອສັ້ນພຽງ 1 ນາທີສາມາດທົດແທນການແຊັດໄດ້ເປັນອາທິດ'
        ],
        practicalTip: 'ເປົ້າໝາຍຂອງວິດີໂອບໍ່ແມ່ນການສະແດງເປັນດາລາ ແຕ່ຄືການສະແດງໃຫ້ເຫັນວ່າທ່ານເປັນຜູ້ຍິງທີ່ອົບອຸ່ນ ແລະ ເົ້າເຖິງງ່າຍ.',
        quickExercise: {
          prompt: 'ລອງເປີດກ້ອງໂທລະສັບ ແລ້ວຍິ້ມໃຫ້ກ້ອງ 5 ວິນາທີ ໂດຍບໍ່ຕ້ອງເວົ້າຫຍັງ ເພື່ອສ້າງຄວາມຄຸ້ນເຄີຍ.',
          placeholder: 'ບັນທຶກຄວາມຮູ້ສຶກ (ເຊັ່ນ: ຕື່ນເຕັ້ນແຕ່ຮູ້ສຶກດີ)...',
          guidance: 'ຮອຍຍິ້ມທີ່ປາກົດໃນຕອນເລີ່ມຕົ້ນຂອງວິດີໂອຄືສິ່ງທີ່ດຶງດູດຄວາມສົນໃຈໄດ້ດີທີ່ສຸດ.'
        }
      },
      fr: {
        id: 'm2-ch1',
        title: '1. Pourquoi la vidéo est capitale sur ce type de plateforme',
        explanation: 'À distance, la vidéo est le gage de sincérité le plus fort. Si une photo peut être retouchée, la vidéo révèle votre voix, votre regard et votre énergie vivante. Elle rassure instantanément un homme sérieux en lui montrant une femme authentique et accessible.\n\nEntendre votre voix et observer vos expressions permet de réduire la distance physique et de créer un lien émotionnel fort. Cela prouve votre investissement sincère dans la démarche de rencontre.',
        bulletPoints: [
          'Garantie d\'authenticité : élimine tout doute de faux profil ou d\'usurpation d\'identité.',
          'Transmission d\'émotions : le sourire, le rire et le regard captivent bien plus que le texte brut.',
          'Sélection naturelle : attire les hommes véritablement motivés pour faire connaissance avec respect.',
          'Gain de temps : une minute de vidéo équivaut à plusieurs jours d\'échanges de messages.'
        ],
        practicalTip: 'Votre objectif n\'est pas d\'être une actrice de cinéma, mais une femme douce, vraie et accueillante.',
        quickExercise: {
          prompt: 'Ouvrez l\'appareil photo de votre téléphone, regardez l\'objectif et souriez pendant 5 secondes sans parler.',
          placeholder: 'Partagez votre ressenti ici...',
          guidance: 'Ce premier sourire face caméra est l\'élément le plus puissant pour capturer l\'attention d\'un homme bienveillant.'
        }
      }
    },
    {
      id: 'm2-ch2',
      order: 2,
      lo: {
        id: 'm2-ch2',
        title: '2. ການຈັດສະພາບແວດລ້ອມ: ແສງ ແລະ ສຽງ',
        explanation: 'ຄຸນນະພາບຂອງວິດີໂອບໍ່ໄດ້ຂຶ້ນຢູ່ກັບຄວາມແພງຂອງໂທລະສັບ ແຕ່ຂຶ້ນຢູ່ກັບ "ແສງ" ແລະ "ສຽງ" ທີ່ທ່ານຄວບຄຸມໄດ້.\n\nການຈັດສະພາບແວດລ້ອມທີ່ດີສະທ້ອນເຖິງຄວາມຕັ້ງໃຈ ແລະ ຄວາມເປັນລະບຽບຮຽບຮ້ອຍໃນຊີວິດຂອງທ່ານ. ມັນຊ່ວຍໃຫ້ຜູ້ອ່ານສາມາດຕັ້ງໃຈຟັງ และ ຮັບຊົມສິ່ງທີ່ທ່ານຕ້ອງການສື່ສານໄດ້ຢ່າງເຕັມສ່ວນ.',
        bulletPoints: [
          'ໃຊ້ແສງທຳມະຊາດ: ຖ່າຍຢູ່ໃກ້ປ່ອງຢ້ຽມໃນເວລາກາງເວັນ, ໃຫ້ແສງສ່ອງເຂົ້າໃບໜ້າຢ່າງອ່ອນໂຍນ, ຫຼີກລ່ຽງການຖ່າຍຍ້ອນແສງ',
          'ສຽງທີ່ງຽບສະຫງົບ: ເລືອກຫ້ອງທີ່ງຽບ, ປິດພັດລົມ ແລະ ໂທລະພາບ, ຫຼີກລ່ຽງສຽງລົດແລ່ນ ຫຼື ສຽງຄົນເວົ້າແຊກ',
          'ความສະອາດຂອງພື້ນຫຼັງ: ພື້ນຫຼັງຄວນເປັນກຳແພງສີລຽບ ຫຼື ມຸມຫ້ອງທີ່ຈັດເປັນລະບຽບຮຽບຮ້ອຍ',
          'ໄລຍະຫ່າງທີ່ເໝາະສົມ: ວາງໂທລະສັບຫ່າງຈາກຕົວທ່ານປະມານ 1 ແມັດ ເພື່ອໃຫ້ເຫັນເຄິ່ງຕົວບົນ'
        ],
        practicalTip: 'ລອງຖ່າຍຄລິບສັ້ນ 5 ວິນາທີແລ້ວເປີດຟັງຄືນ ເພື່ອກວດເບິ່ງຄວາມຊັດເຈນຂອງແສງ ແລະ ສຽງ ກ່ອນຈະເລີ່ມຖ່າຍແທ້.',
        quickExercise: {
          prompt: 'ຊອກຫາມຸມທີ່ດີທີ່ສຸດໃນເຮືອນຂອງທ່ານທີ່ມີແສງສະຫວ່າງດີ ແລະ ພື້ນຫຼັງສະອາດ.',
          placeholder: 'ອະທິບາຍມຸມທີ່ທ່ານເລືອກ (ເຊັ່ນ: ແຈຫ້ອງຮັບແຂກໃກ້ປ່ອງຢ້ຽມ ພື້ນຫຼັງເປັນກຳແພງສີຂາວ)...',
          guidance: 'ພື້ນຫຼັງທີ່ລຽບງ່າຍ ແລະ ສະອາດ ຈະຊ່ວຍໃຫ້ໃບໜ້າ ແລະ ບຸກຄະລິກຂອງທ່ານໂດດເດັ່ນຂຶ້ນ.'
        }
      },
      fr: {
        id: 'm2-ch2',
        title: '2. Préparation technique : Lumière et Son',
        explanation: 'Pas besoin de matériel professionnel : une bonne gestion de la lumière du jour et du silence suffit à rendre votre vidéo agréable à regarder.\n\nUn environnement bien soigné montre votre sens du détail et de l\'organisation. Cela permet à l\'interlocuteur de rester pleinement concentré sur votre discours sans être distrait par des éléments parasites.',
        bulletPoints: [
          'Lumière naturelle : placez-vous face à une fenêtre en journée. Évitez absolument les contre-jours.',
          'Silence absolu : fermez portes et fenêtres, éteignez les ventilateurs ou la télévision de la pièce.',
          'Arrière-plan neutre : choisissez un décor sobre, rangé et propre (mur uni de couleur claire, coin fleuri).',
          'Distance idéale : placez le téléphone à environ 1 mètre de vous pour un cadrage buste harmonieux.'
        ],
        practicalTip: 'Faites toujours un test d\'enregistrement de 5 secondes pour vérifier la clarté du son et de l\'image.',
        quickExercise: {
          prompt: 'Identifiez l\'endroit le plus lumineux et le plus calme de votre intérieur pour y installer votre plan de tournage.',
          placeholder: 'Décrivez ce lieu ici...',
          guidance: 'La simplicité du décor et la qualité de la lumière mettent en valeur vos expressions naturelles.'
        }
      }
    },
    {
      id: 'm2-ch3',
      order: 3,
      lo: {
        id: 'm2-ch3',
        title: '3. ບຸກຄະລິກກະພາບ, ການແຕ່ງກາຍ ແລະ ມຸມກ້ອງ',
        explanation: 'ການສະແດງອອກທາງຮ່າງກາຍຈະຊ່ວຍສື່ສານຄວາມໝັ້ນໃຈ ແລະ ຄວາມອ່ອນໂຍນຂອງທ່ານອອກມາ.\n\nການເລືອກມຸມກ້ອງທີ່ເໝາະສົມຄືການໃຫ້ກຽດຜູ້ຊົມ. ມັນຊ່ວຍສ້າງຄວາມຮູ້ສຶກຄືກັບວ່າທ່ານກຳລັງນັ່ງສົນທະນາກັບລາວແບບເຊິ່ງໜ້າຢ່າງເປັນກັນເອງ.',
        bulletPoints: [
          'ການແຕ່ງກາຍ: ເລືອກເສື້ອຜ້າທີ່ມີສີສັນສົດໃສ, ສຸພາບຮຽບຮ້ອຍ, ຫຼີກລ່ຽງເສື້ອຜ້າທີ່ເປີດເຜີຍຫຼາຍເກີນໄປ',
          'ລະດັບສາຍຕາ: ຕັ້ງກ້ອງໂທລະສັບໃຫ້ຢູ່ລະດັບດຽວກັບສາຍຕາ ໂດຍການໃຊ້ຂາຕັ້ງກ້ອງ ຫຼື ວາງພີງໄວ້, ຫຼີກລ່ຽງການໃຊ້ແຂນຖືຖ່າຍ',
          'ການສົບຕາ: ເບິ່ງໄປທີ່ຮູເລນກ້ອງໂດຍກົງ, ບໍ່ແມ່ນເບິ່ງແຕ່ໜ້າຈໍຂອງຕົນເອງ, ມັນຈະເຮັດໃຫ້ຜູ້ຊົມຮູ້ສຶກວ່າທ່ານກຳລັງສົບຕາກັບລາວແທ້ໆ',
          'ທ່າທາງທີ່ສະບາຍ: ນັ່ງຫຼັງຊື່, ຜ່ອນຄາຍບ່າໄຫລ່, ແລະ ຍິ້ມແຍ້ມແຈ່ມໃສ'
        ],
        practicalTip: 'ຍິ້ມແຍ້ມແຈ່ມໃສຕັ້ງແຕ່ວິນາທີທຳອິດກ່ອນຈະເລີ່ມເວົ້າ ແລະ ຫາຍໃຈເຂົ້າເລິກໆ ເພື່ອຫຼຸດຜ່ອນຄວາມຕື່ນເຕັ້ນ.',
        quickExercise: {
          prompt: 'ລອງວາງໂທລະສັບໃຫ້ຢູ່ລະດັບສາຍຕາ ແລະ ສັງເກດເບິ່ງໃນຈໍວ່າເຫັນຕັ້ງແຕ່ຫົວເຖິງເອິກຢ່າງສົມດຸນ ຫຼື ບໍ່.',
          placeholder: 'ຢືນຢັນການຈັດມຸມກ້ອງ (ເຊັ່ນ: "ຂ້ອຍຈັດມຸມກ້ອງລະດັບສາຍຕາຮຽບຮ້ອຍແລ້ວ")...',
          guidance: 'ມຸມກ້ອງລະດັບສາຍຕາຈະຊ່ວຍໃຫ້ຜູ້ຊົມຮູ້ສຶກເຖິງຄວາມເທົ່າທຽມ ແລະ ການໃຫ້ກຽດເຊິ່ງກັນ ແລະ ກັນ.'
        }
      },
      fr: {
        id: 'm2-ch3',
        title: '3. Attitude, Tenue et Cadrage',
        explanation: 'Votre langage corporel transmet votre sérénité et votre sincérité à l\'écran.\n\nLe choix d\'un bon cadrage est essentiel pour susciter la confiance. Cela donne l\'illusion d\'une véritable discussion en face-à-face, où chacun se sent écouté et valorisé.',
        bulletPoints: [
          'Tenue soignée : privilégiez des vêtements de couleurs douces ou lumineuses, élégants et respectueux.',
          'Hauteur d\'yeux : stabilisez votre téléphone à hauteur de votre regard. Évitez absolument de le tenir à bout de bras.',
          'Regard de l\'objectif : fixez la lentille de la caméra, pas votre écran, pour créer une vraie connexion visuelle.',
          'Posture détendue : tenez-vous droite, baissez les épaules et respirez naturellement.'
        ],
        practicalTip: 'Souriez dès la première seconde avant de parler et respirez profondément pour chasser le trac.',
        quickExercise: {
          prompt: 'Installez votre téléphone sur un support stable à hauteur de vos yeux et vérifiez la symétrie du cadrage.',
          placeholder: 'Validez votre installation ici...',
          guidance: 'Le cadrage à hauteur des yeux favorise une relation d\'égal à égal rassurante.'
        }
      }
    },
    {
      id: 'm2-ch4',
      order: 4,
      lo: {
        id: 'm2-ch4',
        title: '4. ໂຄງສ້າງບົດເວົ້າ 50 ວິນາທີ ທີ່ເໝາະສົມ',
        explanation: 'ບົດເວົ້າທີ່ດີຄວນມີຄວາມກະຊັບ ແລະ ແບ່ງອອກເປັນ 4 ສ່ວນຫຼັກຢ່າງຈະແຈ້ງ.\n\nການວາງໂຄງສ້າງທີ່ດີຊ່ວຍໃຫ້ທ່ານບໍ່ລືມຈຸດສຳຄັນ ແລະ ຮັກສາເວລາໃຫ້ຢູ່ພາຍໃນ 1 ນາທີ ເຊິ່ງເປັນເວລາທີ່ເໝາະສົມທີ່ສຸດໃນການດຶງດູດຄວາມສົນໃຈ.',
        bulletPoints: [
          'ສ່ວນທີ 1 (0-10 ວິນາທີ): ກ່າວທັກທາຍ "Bonjour! ສະບາຍດີ", ແນະນຳຊື່ ແລະ ບອກວ່າຢູ່ເມືອງໃດ',
          'ສ່ວນທີ 2 (10-30 ວິນາທີ): ບອກເລົ່າສາຍງານ ຫຼື ກິດຈະກຳທີ່ມັກເຮັດໃນເວລາຫວ່າງຢ່າງມີຄວາມສຸກ',
          'ສ່ວນທີ 3 (30-45 ວິນາທີ): ບອກເປົ້າໝາຍທີ່ຈິງໃຈໃນການຊອກຫາຄວາມສຳພັນທີ່ໃຫ້ກຽດເຊິ່ງກັນ ແລະ ກັນ',
          'ສ່ວນທີ 4 (45-50 ວິນາທີ): ກ່າວຂອບໃຈທີ່ຮັບຊົມ ແລະ ເວົ້າຄຳວ່າ "à bientôt!" (ພົບກັນໃໝ່)'
        ],
        practicalTip: 'ຝຶກຊ້ອມເວົ້າຫຼາຍໆຄັ້ງກັບຕົວຈັບເວລາ ເພື່ອໃຫ້ເວົ້າໄດ້ເປັນທຳມະຊາດ ແລະ ບໍ່ເກີນ 1 ວິນາທີຕໍ່ປະໂຫຍກ.',
        quickExercise: {
          prompt: 'ລອງຂຽນບົດເວົ້າແນະນຳຕົວສັ້ນໆ ຕາມໂຄງສ້າງ 4 ສ່ວນນີ້.',
          placeholder: 'ຂຽນບົດເວົ້າຂອງທ່ານຢູ່ບ່ອນນີ້ (ເປັນພາສາອັງກິດ ຫຼື ຝຣັ່ງ ຕາມທີ່ທ່ານສະດວກ)...',
          guidance: 'ບົດເວົ້າທີ່ດີຄວນເນັ້ນຄວາມງ່າຍດາຍ ແລະ ເປັນຕົວຂອງຕົວເອງ ບໍ່ຈຳເປັນຕ້ອງໃຊ້ຄຳສັບທີ່ຍາກເກີນໄປ.'
        }
      },
      fr: {
        id: 'm2-ch4',
        title: '4. Structure idéale d\'un script de 50 secondes',
        explanation: 'Un bon script est fluide et s\'articule autour de quatre moments clés.\n\nStructurer votre prise de parole vous évite de bafouiller ou de dépasser la durée idéale d\'une minute, assurant ainsi un message dynamique et captivant.',
        bulletPoints: [
          'Introduction (0-10s) : Salutations chaleureuses (« Bonjour ! Sabaidee »), votre prénom et votre ville.',
          'Passions (10-30s) : Évoquez brièvement votre métier ou vos loisirs simples avec entrain.',
          'Aspirations (30-45s) : Exprimez sincèrement votre recherche d\'une complicité saine et durable.',
          'Conclusion (45-50s) : Remerciez l\'interlocuteur pour son attention et terminez par un amical « à bientôt ! ».'
        ],
        practicalTip: 'Répétez plusieurs fois face au chronomètre pour trouver un rythme de parole naturel et posé.',
        quickExercise: {
          prompt: 'Rédigez votre premier projet de script écrit en suivant les 4 sections recommandées.',
          placeholder: 'Rédigez votre texte ici...',
          guidance: 'Privilégiez la simplicité : utilisez des phrases courtes et un vocabulaire chaleureux que vous maîtrisez bien.'
        }
      }
    },
    {
      id: 'm2-ch5',
      order: 5,
      lo: {
        id: 'm2-ch5',
        title: '5. ວິທີຫຼຸດຜ່ອນຄວາມຕື່ນເຕັ້ນ ແລະ ເວົ້າຢ່າງເປັນທຳມະຊາດຕໍ່ໜ້າກ້ອງ',
        explanation: 'ເປັນເລື່ອງປົກກະຕິທີ່ທ່ານຈະຮູ້ສຶກຕື່ນເຕັ້ນໃນເວລາຖ່າຍວິດີໂອ. ການກຽມຕົວ ແລະ ເຕັກນິກການຫາຍໃຈງ່າຍໆ ຈະຊ່ວຍໃຫ້ທ່ານສາມາດສົ່ງຜ່ານຄວາມອົບອຸ່ນ ແລະ ຄວາມໝັ້ນໃຈອອກມາຜ່ານໜ້າກ້ອງໄດ້ຢ່າງດີ.\n\nຢ່າກັງວົນກັບຄວາມສົມບູນແບບ. ຄວາມເປັນທຳມະຊາດ ແລະ ຄວາມຈິງໃຈມີຄຸນຄ່າຫຼາຍກວ່າການສະແດງທີ່ບໍ່ມີຂໍ້ບົກພ່ອງ.',
        bulletPoints: [
          'ຝຶກຊ້ອມໂດຍບໍ່ໄດ້ບັນທຶກວິດີໂອ: ເວົ້າກັບກ້ອງຫຼາຍໆຄັ້ງເພື່ອໃຫ້ຄຸ້ນເຄີຍກັບບົດເວົ້າ',
          'ຫາຍໃຈເຂົ້າເລິກໆ: ຫາຍໃຈເຂົ້າ-ອອກຍາວໆ 3 ຄັ້ງກ່ອນກົດປຸ່ມເລີ່ມຖ່າຍ',
          'ຈິນຕະນາการໃບໜ້າຂອງໝູ່ສະໜິດ: ເວົ້າກັບກ້ອງແລ້ວຄິດວ່າທ່ານກຳລັງເວົ້າກັບຄົນທີ່ສະໜິດ ແລະ ສະບາຍໃຈນຳ',
          'ຍອມຮັບຂໍ້ຜິດພາດ: ຫາກເວົ້າຜິດ ໃຫ້ຍິ້ມແລ້ວເລີ່ມຕົ້ນປະໂຫຍກນັ້ນໃໝ່'
        ],
        practicalTip: 'ຫາກທ່ານເວົ້າຜິດ, ຢ່າເພິ່ງກົດຢຸດທັນທີ. ໃຫ້ຜ່ອນຄາຍ, ຍິ້ມ ແລະ ເລີ່ມຕົ້ນປະໂຫຍກນັ້ນໃໝ່ ຄວາມເປັນທຳມະຊາດມີສະເໜ່ສະເໝີ.',
        quickExercise: {
          prompt: 'ລອງຝຶກອ່ານບົດເວົ້າຂອງທ່ານ 3 ຮອບ ໂດຍແຕ່ລະຮອບໃຫ້ເນັ້ນການຍິ້ມ ແລະ ເວົ້າໃຫ້ຊ້າລົງກວ່າເດີມ.',
          placeholder: 'ບັນທຶກການຝຶກຊ້ອມ (ເຊັ່ນ: "ຝຶກຊ້ອມແລ້ວ ເວົ້າຊ້າລົງເຮັດໃຫ້ໝັ້ນໃຈຂຶ້ນ")...',
          guidance: 'Capsule tempo : la lenteur relative de votre diction transmet de la sérénité et une vraie maturité affective.'
        }
      },
      fr: {
        id: 'm2-ch5',
        title: '5. Gérer le trac et parler naturellement devant l\'objectif',
        explanation: 'Il est tout à fait normal de ressentir de la nervosité lors du tournage. Des exercices simples de respiration et de préparation mentale vous aideront à transmettre votre douceur naturelle.\n\nNe cherchez pas la perfection technique. L\'authenticité et l\'expression sincère de votre personnalité ont beaucoup plus de valeur qu\'une récitation théâtrale rigide.',
        bulletPoints: [
          'S\'entraîner sans enregistrer : parlez à la caméra plusieurs fois pour vous habituer au texte.',
          'La respiration ventrale : prenez trois inspirations profondes avant d\'appuyer sur démarrer.',
          'Visualiser un visage amical : regardez l\'objectif en vous imaginant parler à une amie bienveillante.',
          'Accepter l\'imperfection : si vous butez sur un mot, souriez simplement et reprenez la phrase.'
        ],
        practicalTip: 'Si vous butez sur un mot, ne coupez pas. Respirez, souriez et reprenez la phrase : cette spontanéité est désarmante.',
        quickExercise: {
          prompt: 'Récitez votre texte à haute voix à 3 reprises, en vous efforçant de ralentir le rythme et de sourire entre chaque phrase.',
          placeholder: 'Partagez votre retour d\'expérience de répétition...',
          guidance: 'Ralentir le débit de parole permet de poser sa voix et d\'installer une présence rassurante.'
        }
      }
    },
    {
      id: 'm2-ch6',
      order: 6,
      lo: {
        id: 'm2-ch6',
        title: '6. ຂັ້ນຕອນການອັບໂຫຼດ ແລະ ການນຳສະເໜີວິດີໂອເທິງແພລດຟອມ',
        explanation: 'ເມື່ອທ່ານໄດ້ວິດີໂອທີ່ເພິ່ງພໍໃຈແລ້ວ, ຂັ້ນຕອນສຸດທ້າຍແມ່ນການກວດສອບຄຸນນະພາບ ແລະ ນຳສະເໜີເທິງແພລດຟອມຢ່າງເໝາະສົມ ເພື່ອໃຫ້ຜູ້ຊາຍທີ່ຈິງໃຈສາມາດເຂົ້າເຖິງ ແລະ ຮັບຊົມໄດ້ງ່າຍ.\n\nການຈັດການໄຟລ໌ວິດີໂອຢ່າງເປັນລະບົບຈະຊ່ວຍໃຫ້ທ່ານສາມາດຮັກສາຄຸນນະພາບຕົ້ນສະບັບ ແລະ ພ້ອມໃຊ້ງານໄດ້ທຸກເວລາ.',
        bulletPoints: [
          'ກວດສອບຄວາມຖືກຕ້ອງ: ຮັບຊົມວິດີໂອທັງໝົດເພື່ອໃຫ້ແນ່ໃຈວ່າບໍ່ມີສຽງລົບກວນ ຫຼື ພາບມົວ',
          'ເລືອກຮູບໜ້າປົກ (Thumbnail) ທີ່ຍິ້ມແຍ້ມ: ຫາກແພລດຟອມອະນຸຍາດ, ໃຫ້ເລືອກເຟຣມທີ່ທ່ານຍິ້ມງາມທີ່ສຸດເປັນໜ້າປົກ',
          'ຮັກສາຄວາມປອດໄພຂອງໄຟລ໌: ເກັບຮັກສາໄຟລ໌ຕົ້ນສະບັບໄວ້ໃນໂທລະສັບຂອງທ່ານເພື່ອໃຊ້ໃນອະນາຄົດ',
          'ການອັບໂຫຼດຄຸນນະພາບສູງ: ໃຫ້ແນ່ໃຈວ່າອິນເຕີເນັດຂອງທ່ານມີຄວາມສະຖຽນໃນເວລາອັບໂຫຼດ'
        ],
        practicalTip: 'ວິດີໂອທີ່ດີບໍ່ຈຳເປັນຕ້ອງສົມບູນແບບຄືມືອາຊີມ ແຕ່ຕ້ອງສະແດງອອກເຖິງຕົວຕົນທີ່ແທ້ຈິງ ແລະ ເປັນມິດຂອງທ່ານ.',
        quickExercise: {
          prompt: 'ລອງກວດເບິ່ງຂະໜາດ ແລະ ຄວາມຍາວຂອງໄຟລ໌ວິດີໂອຫຼ້າສຸດຂອງທ່ານ ໃຫ້ຢູ່ພາຍໃນຂອບເຂດທີ່ແນະນຳ.',
          placeholder: 'ບັນທຶກຜົນການກວດສອບ (ເຊັ່ນ: "ໄຟລ໌ຍາວ 52 ວິນາທີ ຄຸນນະພາບຈະແຈ້ງດີ")...',
          guidance: 'ວິດີໂອທີ່ມີຄວາມຍາວ 45-60 ວິນາທີ ຈະໄດ້ຮັບການອັບໂຫຼດ ແລະ ຮັບຊົມໄດ້ໄວທີ່ສຸດ.'
        }
      },
      fr: {
        id: 'm2-ch6',
        title: '6. Étapes d\'envoi et valorisation de votre vidéo sur la plateforme',
        explanation: 'Une fois votre vidéo enregistrée, l\'étape finale consiste à valider sa qualité et à la présenter de manière optimale sur la plateforme pour maximiser l\'intérêt des profils qualitatifs.\n\nUne gestion méthodique de vos fichiers vidéo vous évite les pertes de qualité et vous permet d\'avoir vos contenus toujours prêts à être partagés.',
        bulletPoints: [
          'Vérification finale : écoutez le rendu global pour vous assurer de l\'absence de bruits parasites ou de flous.',
          'Choix d\'une vignette souriante : si possible, choisissez une image de couverture où votre regard est pétillant.',
          'Sauvegarde de sécurité : conservez toujours l\'original sur votre téléphone pour vos futurs échanges.',
          'Qualité d\'envoi : utilisez une connexion internet stable au moment d\'importer votre vidéo.'
        ],
        practicalTip: 'Les hommes sérieux recherchent une personne authentique, pas un montage publicitaire de studio.',
        quickExercise: {
          prompt: 'Contrôlez les paramètres de votre dernière vidéo et vérifiez qu\'elle s\'inscrit bien dans la durée ciblée.',
          placeholder: 'Renseignez le statut de votre fichier ici...',
          guidance: 'Les vidéos d\'une durée comprise entre 45 et 60 secondes offrent le meilleur taux d\'engagement.'
        }
      }
    }
  ]
};
