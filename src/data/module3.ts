import { ModuleData } from '../types';

export const module3Data: ModuleData = {
  id: 'module-3',
  tierRequired: 3,
  lo: {
    title: 'ໂມດູນທີ 3: ທຳຄວາມເຂົ້າໃຈ ແລະ ສື່ສານກັບໜຸ່ມຝຣັ່ງຢ່າງເລິກເຊິ່ງ',
    tagline: 'ຄູ່ມືຄວາມເຂົ້າໃຈທາງວັດທະນະທຳ, ການສົນທະນາຢ່າງມີສະເໜ່ ແລະ ຄວາມປອດໄພໃນຄວາມສຳພັນ',
    description: 'ເນື້ອຫາພຣີມຽມທີ່ເຈາະເລິກຄວາມແຕກຕ່າງທາງວັດທະນະທຳ ວິທີສ້າງບົດສົນທະນາທີ່ມີຄຸນນະພາບ ວິທີສັງເກດສັນຍານຄົນຈິງໃຈ ແລະ ຄວາມປອດໄພສູງສຸດ',
    duration: 'ໃຊ້ເວລາປະມານ 45-60 ນาທີ',
    badge: 'ເນື້ອຫາພຣີມຽມເຈາະເລິກ',
  },
  fr: {
    title: 'Module 3 : Comprendre et aborder un homme français',
    tagline: 'Nuances culturelles, art de la conversation et sécurité relationnelle',
    description: 'Le contenu à plus forte valeur ajoutée : décryptez les codes culturels avec nuance, initiez de vraies discussions complices et apprenez à repérer un homme réellement sérieux.',
    duration: 'Durée estimée : 45-60 minutes',
    badge: 'Valeur ajoutée maximale',
  },
  exerciseType: 'compatibility_assessment',
  checklistTitle: {
    lo: 'ເຊັກລິສ: ທ່ານພ້ອມທີ່ຈະເລີ່ມຄວາມສຳພັນກັບໜຸ່ມຝຣັ່ງຫຼືຍັງ?',
    fr: 'Checklist finale : Suis-je prête à commencer une relation avec un homme français ?',
  },
  checklist: [
    {
      id: 'm3-c1',
      lo: 'ເຂົ້າໃຈວ່າໜຸ່ມຝຣັ່ງແຕ່ລະຄົນມີຄວາມຄິດ, ບຸກຄະລິກ ແລະ ວິຖີຊີວິດທີ່ແຕກຕ່າງກັນ ບໍ່ເໝົາລວມວ່າເປັນຄືກັນທຸກຄົນ',
      fr: 'Je comprends que chaque homme français est unique et qu\'il n\'existe aucun stéréotype absolu.',
      category: 'cultural_mindset'
    },
    {
      id: 'm3-c2',
      lo: 'ພ້ອມທີ່ຈະສື່ສານຢ່າງກົງໄປກົງມາ ແລະ ກ້າບອກຄວາມຕ້ອງການ ຫຼື ຄວາມຮູ້ສຶກຂອງຕົນເອງດ້ວຍຄວາມສຸພາບ',
      fr: 'Je suis prête à exprimer mes ressentis avec clarté et bienveillance sans détour excessif.',
      category: 'communication'
    },
    {
      id: 'm3-c3',
      lo: 'ຮູ້ຫຼັກການສ້າງບົດສົນທະນາທີ່ມີການແລກປ່ຽນຄວາມຄິດເຫັນ ບໍ່ຖາມຕອບແບບຝ່າຍດຽວ',
      fr: 'Je sais alterner questions ouvertes et anecdotes pour une vraie conversation vivante.',
      category: 'conversation'
    },
    {
      id: 'm3-c4',
      lo: 'ຈື່ສັນຍານເຕືອນໄພ (Red Flags) ໄດ້ແມ່ນຍຳ ແລະ ຕັ້ງໃຈແນ່ວແນ່ວ່າຈະບໍ່ມີວັນສົ່ງເງິນໃຫ້ຄົນທີ່ຮູ້ຈັກທາງອອນລາຍເດັດຂາດ',
      fr: 'Je connais les signaux d\'alerte et je ne verserai JAMAIS d\'argent à un inconnu en ligne.',
      category: 'safety'
    },
    {
      id: 'm3-c5',
      lo: 'ຕື່นຕົວວ່າການນັດເຈີຕົວຈິງຕ້ອງເຮັດໃນສະຖານທີ່ສາທາລະນະ ແລະ ບອກຄົນໃກ້ຊິດທີ່ໄວ້ໃຈໄດ້ສະໝີ',
      fr: 'Je sais que la première rencontre doit impérativement avoir lieu dans un lieu public sécurisé.',
      category: 'real_meeting'
    },
    {
      id: 'm3-c6',
      lo: 'ໃຫ້ຄວາມສຳຄັນກັບ "ຄວາມເຂົ້າກັນໄດ້ຈິງ (Compatibilité)" ແລະ ຄວາມສຸກໄລຍະຍາວ ຫຼາຍກວ່າແຕ່ສັນຊາດຂອງລາວ',
      fr: 'Mon objectif est de trouver un homme compatible avec mes valeurs de vie profondes.',
      category: 'compatibility'
    }
  ],
  chapters: [
    {
      id: 'm3-ch1',
      order: 1,
      lo: {
        id: 'm3-ch1',
        title: '1. ການສື່ສານທາງກົງ ແລະ ຄວາມເກງໃຈ',
        explanation: 'ສິ່ງສຳຄັນທີ່ສຸດທີ່ຕ້ອງເຂົ້າໃຈແມ່ນ "ຜູ້ຊາຍຝຣັ່ງບໍ່ໄດ້ຄິດຄືກັນທຸກຄົນ" ແຕ່ລະຄົນມີຄອບຄົວ, ການສຶກສາ ແລະ ປະສົບການທີ່ແຕກຕ່າງກັນ. ແນວໃດກໍຕາມ ໃນວັດທະນະທຳຕາເວັນຕົກ ຜູ້ຊາຍຝຣັ່ງຈຳນວນຫຼາຍຄຸ້ນເຄີຍກັບການສື່ສານທີ່ກົງໄປກົງມາ.',
        bulletPoints: [
          'ຄວາມກົງໄປກົງມາບໍ່ແມ່ນຄວາມຫຍາບຄາຍ: ໃນຂະນະທີ່ຄົນລາວເນັ້ນ "ຄວາມເກງໃຈ" ແລະ ບໍ່ກ້າປະຕິເສດກົງໆ, ແຕ່ຜູ້ຊາຍຝຣັ່ງມັກມອງວ່າການເວົ້າຄວາມຈິງຢ່າງສຸພາບຄືການໃຫ້ກຽດກັນ',
          'ຖ້າລາວຖາມຄວາມຄິດເຫັນຂອງທ່ານ: ລາວຢາກຟັງຄວາມຄິດຂອງທ່ານແທ້ໆ ຢ່າຕອບແຕ່ "ແລ້ວແຕ່ຫຍັງກໍໄດ້" (Up to you) ຕະຫຼອດເວລາ',
          'ການສະແດງຄວາມຮູ້ສຶກ: ຫາກທ່ານບໍ່ສະບາຍໃຈກັບສິ່ງໃດ, ການອະທິບາຍດ້ວຍເຫດຜົນສັ້ນໆ ຢ່າງໃຈເຢັນ ຈະໄດ້ຮັບຄວາມເຂົ້າໃຈຫຼາຍກວ່າການງຽບ ຫຼື ຖ້າໃຫ້ລາວເດົາໃຈ'
        ],
        practicalTip: 'ຫາກທ່ານຕ້ອງການເວລາຄິດ, ສາມາດບອກຢ່າງກົງໄປກົງມາໄດ້ວ່າ "ຂ້ອຍຂໍເວລາຄິດເລື່ອງນີ້ຈັກໜ້ອຍເດີ້" ລາວຈະເຄົາລົບການຕັດສິນໃຈຂອງທ່ານ.'
      },
      fr: {
        id: 'm3-ch1',
        title: 'Partie 1.1 : Communication directe et indirecte',
        explanation: 'Rappel essentiel : chaque homme français est unique. Cependant, sur le plan culturel général, il est fréquent que les hommes français valorisent une communication plus directe que celle de la politesse traditionnelle d\'Asie du Sud-Est.',
        bulletPoints: [
          'La franchise n\'est pas de l\'agressivité : exprimer poliment son point de vue est perçu comme une marque d\'honnêteté et de considération.',
          'Éviter le « Up to you » permanent : donnez votre avis, vos goûts, vos préférences, c\'est ce qui fait votre charme.',
          'En cas de doute ou de désaccord : formuler calmement son ressenti plutôt que de s\'enfermer dans le silence.'
        ],
        practicalTip: 'Osez dire gentiment ce que vous aimez ou n\'aimez pas : l\'affirmation sereine de soi est très appréciée.'
      }
    },
    {
      id: 'm3-ch2',
      order: 2,
      lo: {
        id: 'm3-ch2',
        title: '2. ວັດທະນະທຳການສົນທະນາ ແລະ ອາລົມຂັນ',
        explanation: 'ສຳລັບຊາວຝຣັ່ງຈຳນວນຫຼາຍ, ການນັ່ງເວົ້າຄຸຍແລກປ່ຽນຄວາມຄິດເຫັນເທິງໂຕະອາຫານເປັນສິລະປະຢ່າງໜຶ່ງໃນຊີວິດປະຈຳວັນ.',
        bulletPoints: [
          'ການສົນທະນາຄືຫົວໃຈຂອງຄວາມໃກ້ຊິດ: ລາວບໍ່ໄດ້ຊອກຫາແຕ່ແຟນ ແຕ່ຊອກຫາຄູ່ສົນທະນາທີ່ສາມາດແລກປ່ຽນເລື່ອງລາວ, ວັດທະນະທຳ ແລະ ມຸມມອງຕໍ່ຊີວິດໄດ້',
          'ອາລົມຂັນ ແລະ ການຢອກໄຍ (Second degré): ຜູ້ຊາຍຝຣັ່ງມັກຫຼິ້ນມຸກຕະຫຼົກຢອກໄຍເບົາໆ ບາງຄັ້ງອາດເປັນການແຊວຫຼິ້ນເພື່ອສ້າງຄວາມເປັນກັນເອງ ບໍ່ໄດ້ມີເຈດຕະນາລໍ້ລຽນ ຫຼື ເຮັດໃຫ້ເສຍໜ້າ',
          'ການຖາມຄຳຖາມປາຍເປີດ: ແທນທີ່ຈະຖາມແຕ່ຄຳຖາມສັ້ນໆ ເຊັ່ນ "ກິນເຂົ້າແລ້ວບໍ່" ລອງຖາມເລື່ອງຄວາມຄິດ, ຄວາມຝັນ ຫຼື ປະສົບການທີ່ໜ້າສົນໃຈ'
        ],
        practicalTip: 'ຢ່າຢ້ານທີ່ຈະສົນທະນາເລື່ອງທົ່ວໄປ ເຊັ່ນ ຮູບເງົາ, ປຶ້ມ, ອາຫານ ຫຼື ການທ່ອງທ່ຽວ ສິ່ງເຫຼົ່ານີ້ຈະເຮັດໃຫ້ບົດສົນທະນາມີຊີວິດຊີວາ.'
      },
      fr: {
        id: 'm3-ch2',
        title: 'Partie 1.2 : Art de la conversation et Humour',
        explanation: 'Pour de nombreux Français, passer du temps à table pour discuter et échanger des idées est un véritable art de vivre au quotidien.',
        bulletPoints: [
          'La conversation comme complicité : plus qu\'une simple relation, l\'homme recherche une partenaire de vie spirituelle avec qui échanger sur tous les sujets.',
          'L\'humour au second degré : l\'ironie légère ou les taquineries bienveillantes sont fréquentes et cherchent à installer une proximité, jamais à blesser.',
          'Questions ouvertes : privilégiez des questions sur ses passions ou sa vision de la vie, plutôt que des questions fermées de routine.'
        ],
        practicalTip: 'N\'ayez pas peur d\'aborder des sujets généraux comme le cinéma, l\'actualité, l\'art ou l\'histoire : cela nourrit le respect mutuel.'
      }
    },
    {
      id: 'm3-ch3',
      order: 3,
      lo: {
        id: 'm3-ch3',
        title: '3. ສັນຍານເຕືອນໄພ (Red Flags) ແລະ ກົດເຫຼັກຄວາມປອດໄພ',
        explanation: 'ຄວາມປອດໄພຂອງທ່ານຕ້ອງມາກ່ອນສະເໝີ. ທ່ານຕ້ອງຈື່ຈຳສັນຍານເຕືອນໄພ ແລະ ກົດເຫຼັກຕໍ່ໄປນີ້ຢ່າງເຄັ່ງຄັດ ເພື່ອປ້ອງກັນຕົນເອງຈາກມິດສາຊີບອອນລາຍ.',
        bulletPoints: [
          'ກົດເຫຼັກຂໍ້ທີ 1: ບໍ່ມີວັນໂອນເງິນ ຫຼື ຊື້ບັດຂອງຂວັນໃຫ້ຄົນທີ່ຮູ້ຈັກທາງອອນລາຍເດັດຂາດ ບໍ່ວ່າລາວຈະອ້າງເຫດຜົນໃດກໍຕາມ (ເຊັ່ນ ແມ່ປ່ວຍ, ບັນຊີຖືກບລັອກ, ຄ່າທຳນຽມພາສີ)',
          'ຂໍວິດີໂອຄໍທັນທີ: ຫາກຄົນທີ່ຄຸຍນຳຫຼີກລ່ຽງການວິດີໂອຄໍ ຫຼື ປິດກ້ອງຕະຫຼອດເວລາ ໃຫ້ສົງໄສວ່າລາວອາດຈະໃຊ້ຮູບປອມ',
          'ເລັ່ງລັດຄວາມສຳພັນ: ຫາກລາວບອກຮັກທ່ານໄວເກີນໄປ (ພາຍໃນ 1-2 ວັນ) ຫຼື ສັນຍາວ່າຈະຊື້ເຮືອນ, ຊື້ລົດໃຫ້ທັນທີ ໃຫ້ລະວັງວ່າລາວກຳລັງໃຊ້ວິທີ "Love Bombing" ເພື່ອໃຫ້ທ່ານຫຼົງເຊື່ອ'
        ],
        practicalTip: 'ຜູ້ຊາຍທີ່ຈິງໃຈ ແລະ ໃຫ້ກຽດທ່ານ ຈະບໍ່ມີວັນຂໍເງິນ, ຂໍຂໍ້ມູນທະນາຄານ ຫຼື ບັງຄັບໃຫ້ທ່ານເຮັດສິ່ງທີ່ບໍ່ສະບາຍໃຈ.'
      },
      fr: {
        id: 'm3-ch3',
        title: 'Partie 2.1 : Signaux d\'alerte (Red Flags) et Sécurité absolue',
        explanation: 'Votre sécurité financière et émotionnelle est primordiale. Vous devez identifier instantanément les comportements suspects pour écarter les escrocs.',
        bulletPoints: [
          'Règle d\'or numéro 1 : Ne versez JAMAIS d\'argent ni d\'achats de cartes-cadeaux à un homme rencontré sur internet, peu importe l\'urgence invoquée.',
          'Appel vidéo rapide obligatoire : si votre interlocuteur refuse constamment de se montrer en vidéo, méfiance absolue sur son identité.',
          'Sentiments trop rapides (Love Bombing) : s\'il promet le mariage et des cadeaux luxueux au bout de 48 heures, c\'est un signal de manipulation majeur.'
        ],
        practicalTip: 'Un homme digne et respectueux ne vous demandera jamais d\'aide financière ni de photos intimes.'
      }
    },
    {
      id: 'm3-ch4',
      order: 4,
      lo: {
        id: 'm3-ch4',
        title: '4. ການນັດພົບຕົວຈິງຄັ້ງທຳອິດຢ່າງປອດໄພ',
        explanation: 'ເມື່ອຄວາມສຳພັນອອນລາຍພັດທະນາຈົນຮອດຂັ້ນຕອນການນັດເຈີຕົວຈິງ, ທ່ານຕ້ອງວາງແຜນເພື່ອຄວາມປອດໄພຂອງຕົນເອງຢ່າງຮອບຄອບ.',
        bulletPoints: [
          'ເລືອກສະຖານທີ່ສາທາລະນະ: ນັດເຈີກັນໃນຮ້ານກາເຟ, ຮ້ານອາຫານ ຫຼື ສະຖານທີ່ທີ່ມີຄົນສັນຈອນໄປມາຫຼາຍ ໃນເວລາກາງເວັນສະເໝີ',
          'ບອກຄົນທີ່ໄວ້ໃຈໄດ້: ແຈ້ງໃຫ້ໝູ່ສະໜິດ ຫຼື ຄອບຄົວຮູ້ວ່າທ່ານກຳລັງຈະໄປໃສ, ເຈີກັບໃຜ ແລະ ຈະກັບມາເວລາໃດ',
          'ການເດີນທາງດ້ວຍຕົນເອງ: ວາງແຜນເດີນທາງໄປ ແລະ ກັບດ້ວຍຕົນເອງ ບໍ່ຄວນໃຫ້ລາວມາຮັບຢູ່ເຮືອນຕັ້ງແຕ່ຄັ້ງທຳອິດ ແລະ ຫຼີກລ່ຽງການໄປບ່ອນສ່ວນຕົວ ເຊັ່ນ ໂຮງແຮມ ຫຼື ເຮືອນພັກຂອງລາວ'
        ],
        practicalTip: 'ການມີຄວາມລະມັດລະວັງບໍ່ໄດ້ໝາຍຄວາມວ່າທ່ານບໍ່ໄວ້ໃຈລາວ ແຕ່ເປັນການສະແດງອອກເຖິງການຮັກ ແລະ ປົກປ້ອງຕົນເองຢ່າງມີສະຕິ.'
      },
      fr: {
        id: 'm3-ch4',
        title: 'Partie 2.2 : Réussir la première rencontre en toute sécurité',
        explanation: 'Le passage du virtuel au réel est une étape enthousiasmante qui doit être encadrée par des règles simples pour votre sérénité.',
        bulletPoints: [
          'Lieu public obligatoire : donnez rendez-vous dans un lieu animé, passant et en plein jour pour un premier repas ou café.',
          'Informer vos proches : prévenez toujours au moins une amie ou un membre de votre famille de l\'heure et du lieu du rendez-vous.',
          'Indépendance de transport : rendez-vous sur place par vos propres moyens. Ne montez pas dans son véhicule privé d\'emblée.'
        ],
        practicalTip: 'La prudence n\'empêche pas la magie d\'une rencontre : elle pose les bases saines d\'une relation de confiance réciproque.'
      }
    }
  ]
};
