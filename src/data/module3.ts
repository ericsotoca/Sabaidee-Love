import { ModuleData } from '../types';

export const module3Data: ModuleData = {
  id: 'module-3',
  tierRequired: 3,
  lo: {
    title: 'ໂມດູນທີ 3: ທຳຄວາມເຂົ້າໃຈ ແລະ ສື່ສານກັບໜຸ່ມຝຣັ່ງຢ່າງເລິກເຊິ່ງ',
    tagline: 'ຄູ່ມືຄວາມເຂົ້າໃຈທາງວັດທະນະທຳ, ການສົນທະນາຢ່າງມີສະເໜ່ ແລະ ຄວາມປອດໄພໃນຄວາມສຳພັນ',
    description: 'ເນື້ອຫາພຣີມຽມທີ່ເຈາະເລິກຄວາມແຕກຕ່າງທາງວັດທະນະທຳ ວິທີສ້າງບົດສົນທະນາທີ່ມີຄຸນນະພາບ ວິທີສັງເກດສັນຍານຄົນຈິງໃຈ ແລະ ຄວາມປອດໄພສູງສຸດ',
    duration: 'ໃຊ້ເວລາປະມານ 45-60 ນາທີ',
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
      lo: 'ຕື່ນຕົວວ່າການນັດເຈີຕົວຈິງຕ້ອງເຮັດໃນສະຖານທີ່ສາທາລະນະ ແລະ ບອກຄົນໃກ້ຊິດທີ່ໄວ້ໃຈໄດ້ສະໝີ',
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
        explanation: 'ສິ່ງສຳຄັນທີ່ສຸດທີ່ຕ້ອງເຂົ້າໃຈແມ່ນ "ผู้ຊາຍຝຣັ່ງບໍ່ໄດ້ຄິດຄືກັນທຸກຄົນ" ແຕ່ລະຄົນມີຄອບຄົວ, ການສຶກສາ ແລະ ປະສົບການທີ່ແຕກຕ່າງກັນ. ແນວໃດກໍຕາມ ໃນວັດທະນະທຳຕາເວັນຕົກ ຜູ້ຊາຍຝຣັ່ງຈຳນວນຫຼາຍຄຸ້ນເຄີຍກັບການສື່ສານທີ່ກົງໄປກົງມາ.\n\nການປັບຕົວເຂົ້າຫາວິທີຄິດແບບນີ້ຊ່ວຍຫຼຸດຜ່ອນຄວາມເຂົ້າໃຈຜິດ ແລະ ເຮັດໃຫ້ຄວາມສຳພັນມີຄວາມໂປ່ງໃສ ແລະ ໝັ້ນຄົງຫຼາຍຂຶ້ນ.',
        bulletPoints: [
          'ຄວາມກົງໄປກົງມາບໍ່ແມ່ນຄວາມຫຍາບຄາຍ: ໃນຂະນະທີ່ຄົນລາວເນັ້ນ "ຄວາມເກງໃຈ" ແລະ ບໍ່ກ້າປະຕິເສດກົງໆ, ແຕ່ຜູ້ຊາຍຝຣັ່ງມັກມອງວ່າການເວົ້າຄວາມຈິງຢ່າງສຸພາບຄືການໃຫ້ກຽດກັນ',
          'ຖ້າລາວຖາມຄວາມຄິດເຫັນຂອງທ່ານ: ລາວຢາກຟັງຄວາມຄິດຂອງທ່ານແທ້ໆ ຢ່າຕອບແຕ່ "ແລ້ວແຕ່ຫຍັງກໍໄດ້" (Up to you) ຕະຫຼອດເວລາ',
          'ການສະແດງຄວາມຮູ້ສຶກ: ຫາກທ່ານບໍ່ສະບາຍໃຈກັບສິ່ງໃດ, ການອະທິບາຍດ້ວຍເຫດຜົນສັ້ນໆ ຢ່າງໃຈເຢັນ ຈະໄດ້ຮັບຄວາມເຂົ້າໃຈຫຼາຍກວ່າການງຽບ ຫຼື ຖ້າໃຫ້ລາວເດົາໃຈ',
          'ການເຄົາລົບຄວາມແຕກຕ່າງ: ການທີ່ລາວສະແດງທັດສະນະຄະຕິທີ່ແຕກຕ່າງ ບໍ່ໄດ້ໝາຍຄວາມວ່າລາວຕ້ອງການຜິດຖຽງ ແຕ່ຄືການແລກປ່ຽນ'
        ],
        practicalTip: 'ຫາກທ່ານຕ້ອງການເວລາຄິດ, ສາມາດບອກຢ່າງກົງໄປກົງມາໄດ້ວ່າ "ຂ້ອຍຂໍເວລາຄິດເລື່ອງນີ້ຈັກໜ້ອຍເດີ້" ລາວຈະເຄົາລົບການຕັດສິນໃຈຂອງທ່ານ.',
        quickExercise: {
          prompt: 'ລອງຄິດເຖິງສະຖານະການທີ່ທ່ານບໍ່ສະບາຍໃຈ (ເຊັ່ນ ລາວຊວນຄຸຍເລື່ອງທີ່ລະອຽດອ່ອນເກີນໄປ) ແລະ ແຕ່ງປະໂຫຍກປະຕິເສດຢ່າງສຸພາບ.',
          placeholder: 'ຂຽນປະໂຫຍກປະຕິເສດຢ່າງສຸພາບຂອງທ່ານຢູ່ບ່ອນນີ້...',
          guidance: 'ໃຊ້ຄຳເວົ້າເຊັ່ນ: "ຂ້ອຍຮູ້ສຶກດີໃຈທີ່ໄດ້ຄຸຍກັບເຈົ້າ ແຕ່ເລື່ອງນີ້ຂ້ອຍຂໍເກັບໄວ້ຄຸຍກັນພາຍຫຼັງເດີ້" ຈະຊ່ວຍຮັກສາຄວາມສຳພັນໄດ້ດີ.'
        }
      },
      fr: {
        id: 'm3-ch1',
        title: 'Partie 1.1 : Communication directe et indirecte',
        explanation: 'Rappel essentiel : chaque homme français est unique. Cependant, sur le plan culturel général, il est fréquent que les hommes français valorisent une communication plus directe que celle de la politesse traditionnelle d\'Asie du Sud-Est.\n\nS\'adapté à cette clarté de discours permet d\'éviter bien des malentendus et instaure une relation saine, transparente et confiante dès les premiers mois d\'échanges.',
        bulletPoints: [
          'La franchise n\'est pas de l\'agressivité : exprimer poliment son point de vue est perçu comme une marque d\'honnêteté et de considération.',
          'Éviter le « Up to you » permanent : donnez votre avis, vos goûts, vos préférences, c\'est ce qui fait votre charme.',
          'En cas de doute ou de désaccord : formuler calmement son ressenti plutôt que de s\'enfermer dans le silence.',
          'Respect des idées : échanger nos points de vue n\'est pas disputer, c\'est s\'enrichir mutuellement.'
        ],
        practicalTip: 'Osez dire gentiment ce que vous aimez ou n\'aimez pas : l\'affirmation sereine de soi est très appréciée.',
        quickExercise: {
          prompt: 'Imaginez une situation où un sujet vous rend mal à l\'aise et formulez un refus bienveillant mais clair.',
          placeholder: 'Rédigez votre réponse ici...',
          guidance: 'Utilisez une tournure telle que : « Je suis heureuse d\'échanger avec toi, mais je préfère aborder ce sujet plus tard ».'
        }
      }
    },
    {
      id: 'm3-ch2',
      order: 2,
      lo: {
        id: 'm3-ch2',
        title: '2. ວັດທະນະທຳການສົນທະນາ ແລະ ອາລົມຂັນ',
        explanation: 'ສຳລັບຊາວຝຣັ່ງຈຳນວນຫຼາຍ, ການນັ່ງເວົ້າຄຸຍແແລກປ່ຽນຄວາມຄິດເຫັນເທິງໂຕະອາຫານເປັນສິລະປະຢ່າງໜຶ່ງໃນຊີວິດປະຈຳວັນ.\n\nການມີບົດສົນທະນາທີ່ເລິກເຊິ່ງ ແລະ ມີອາລົມຂັນຈະຊ່ວຍເພີ່ມສະເໜ່ ແລະ ຄວາມຜູກພັນ ມັນສະແດງອອກເຖິງສະຕິປັນຍາ ແລະ ຄວາມອ່ອນໂຍນຂອງທ່ານ.',
        bulletPoints: [
          'ການສົນທະນາຄືຫົວໃຈຂອງຄວາມໃກ້ຊິດ: ລາວບໍ່ໄດ້ຊອກຫາແຕ່ແຟນ ແຕ່ຊອກຫາຄູ່ສົນທະນາທີ່ສາມາດແລກປ່ຽນເລື່ອງລາວ, ວັດທະນະທຳ ແລະ ມຸມມອງຕໍ່ຊີວິດໄດ້',
          'ອາລົມຂັນ ແລະ ການຢອກໄຍ (Second degré): ຜູ້ຊາຍຝຣັ່ງມັກຫຼິ້ນມຸກຕະຫຼົກຢອກໄຍເບົາໆ ບາງຄັ້ງອາດເປັນການແຊວຫຼິ້ນເພື່ອສ້າງຄວາມເປັນກັນເອງ ບໍ່ໄດ້ມີເຈດຕະນາລໍ້ລຽນ ຫຼື ເຮັດໃຫ້ເສຍໜ້າ',
          'ການຖາມຄຳຖາມປາຍເປີດ: ແທນທີ່ຈະຖາມແຕ່ຄຳຖາມສັ້ນໆ ເຊັ່ນ "ກິນເຂົ້າແລ້ວບໍ່" ລອງຖາມເລື່ອງຄວາມຄິດ, ຄວາມຝັນ ຫຼື ປະສົບການທີ່ໜ້າສົນໃຈ',
          'ການມີສ່ວນຮ່ວມ: ຟັງຢ່າງຕັ້ງໃຈ ແລະ ແບ່ງປັນເລື່ອງລາວໃນຝ່າຍຂອງທ່ານສະເໝີ'
        ],
        practicalTip: 'ຢ່າຢ້ານທີ່ຈະສົນທະນາເລື່ອງທົ່ວໄປ ເຊັ່ນ ຮູບເງົາ, ປຶ້ມ, ອາຫານ ຫຼື ການທ່ອງທ່ຽວ ສິ່ງເຫຼົ່ານີ້ຈະເຮັດໃຫ້ບົດສົນທະນາມີຊີວິດຊີວາ.',
        quickExercise: {
          prompt: 'ແຕ່ງຄຳຖາມປາຍເປີດ 1 ຄຳຖາມເພື່ອຖາມລາວກ່ຽວກັບສິ່ງທີ່ລາວມັກ (ແທນທີ່ຈະຖາມຄຳຖາມປາຍປິດ ເຊັ່ນ "ເຈົ້າມັກກາເຟບໍ່?").',
          placeholder: 'ຂຽນຄຳຖາມປາຍເປີດຂອງທ່ານຢູ່ບ່ອນນີ້...',
          guidance: 'ລອງຖາມວ່າ: "ສິ່ງທີ່ເຮັດໃຫ້ເຈົ້າມີຄວາມສຸກທີ່ສຸດໃນວັນຢຸດສຸດສັບປະດາແມ່ນຫຍັງ?" ຈະຊ່ວຍໃຫ້ລາວເລົ່າເລື່ອງໄດ້ຫຼາຍຂຶ້ນ.'
        }
      },
      fr: {
        id: 'm3-ch2',
        title: 'Partie 1.2 : Art de la conversation et Humour',
        explanation: 'Pour de nombreux Français, passer du temps à table pour discuter et échanger des idées est un véritable art de vivre au quotidien.\n\nUne conversation riche et teintée de complicité est le meilleur atout de séduction. Elle témoigne de votre ouverture d\'esprit et de votre curiosité naturelle.',
        bulletPoints: [
          'La conversation comme complicité : plus qu\'une simple relation, l\'homme recherche une partenaire de vie spirituelle avec qui échanger sur tous les sujets.',
          'L\'humour au second degré : l\'ironie légère ou les taquineries bienveillantes sont fréquentes et cherchent à installer une proximité, jamais à blesser.',
          'Questions ouvertes : privilégiez des questions sur ses passions ou sa vision de la vie, plutôt que des questions fermées de routine.',
          'Écoute active : montrez de l\'intérêt pour ce qu\'il raconte et rebondissez sur ses propos.'
        ],
        practicalTip: 'N\'ayez pas peur d\'aborder des sujets généraux comme le cinéma, l\'actualité, l\'art ou l\'histoire : cela nourrit le respect mutuel.',
        quickExercise: {
          prompt: 'Rédigez une question ouverte originale à poser pour mieux comprendre son quotidien et ses aspirations.',
          placeholder: 'Écrivez votre question ici...',
          guidance: 'Privilégiez une formulation comme : « Quel est le souvenir de voyage qui t\'a le plus marqué dans ta vie ? ».'
        }
      }
    },
    {
      id: 'm3-ch3',
      order: 3,
      lo: {
        id: 'm3-ch3',
        title: '3. ສັນຍານເຕືອນໄພ (Red Flags) ແລະ ກົດເຫຼັກຄວາມປອດໄພ',
        explanation: 'ຄວາມປອດໄພຂອງທ່ານຕ້ອງມາກ່ອນສະເໝີ. ທ່ານຕ້ອງຈື່ຈຳສັນຍານເຕືອນໄພ ແລະ ກົດເຫຼັກຕໍ່ໄປນີ້ຢ່າງເຄັ່ງຄັດ ເພື່ອປ້ອງກັນຕົນເອງຈາກມິດສາຊີບອອນລາຍ.\n\nການປ້ອງກັນຕົນເອງເປັນສິ່ງທຳອິດທີ່ຕ້ອງເຮັດ ຄວາມຮັກທີ່ດີຕ້ອງເລີ່ມຕົ້ນບົນພື້ນຖານຂອງຄວາມປອດໄພ ແລະ ຄວາມຈິງໃຈ.',
        bulletPoints: [
          'ກົດເຫຼັກຂໍ້ທີ 1: ບໍ່ມີວັນໂອນເງິນ ຫຼື ຊື້ບັດຂອງຂວັນໃຫ້ຄົນທີ່ຮູ້ຈັກທາງອອນລາຍເດັດຂາດ ບໍ່ວ່າລາວຈະອ້າງເຫດຜົນໃດກໍຕາມ (ເຊັ່ນ ແມ່ປ່ວຍ, ບັນຊີຖືກບລັອກ, ຄ່າທຳນຽມພາສີ)',
          'ຂໍວິດີໂອຄໍທັນທີ: ຫາກຄົນທີ່ຄຸຍນຳຫຼີກລ່ຽງການວິດີໂອຄໍ ຫຼື ປິດກ້ອງຕະຫຼອດເວລາ ໃຫ້ສົງໄສວ່າລາວອາດຈະໃຊ້ຮູບປອມ',
          'ເລັ່ງລັດຄວາມສຳພັນ: ຫາກລາວບອກຮັກທ່ານໄວເກີນໄປ (ພາຍໃນ 1-2 ວັນ) ຫຼື ສັນຍາວ່າຈະຊື້ເຮືອນ, ຊື້ລົດໃຫ້ທັນທີ ໃຫ້ລະວັງວ່າລາວກຳລັງໃຊ້ວິທີ "Love Bombing" ເພື່ອໃຫ້ທ່ານຫຼົງເຊື່ອ',
          'ການປິດບັງຂໍ້ມູນ: ຫາກລາວບໍ່ຍອມແບ່ງປັນຂໍ້ມູນກ່ຽວກັບຊີວິດຈິງ ຫຼື ສະຖານທີ່ເຮັດວຽກຂອງລາວ'
        ],
        practicalTip: 'ຜູ້ຊາຍທີ່ຈິງໃຈ ແລະ ໃຫ້ກຽດທ່ານ ຈະບໍ່ມີວັນຂໍເງິນ, ຂໍຂໍ້ມູນທະນາຄານ ຫຼື ບັງຄັບໃຫ້ທ່ານເຮັດສິ່ງທີ່ບໍ່ສະບາຍໃຈ.',
        quickExercise: {
          prompt: 'ທ່ອງຈຳກົດເຫຼັກ: "ບໍ່ໂອນເງິນເດັດຂາດ" ແລະ ຂຽນຄຳຢືນຢັນວ່າທ່ານຈະປະຕິບັດຕາມຢ່າງເຄັ່ງຄັດ.',
          placeholder: 'ຂຽນຄຳຢືນຢັນຄວາມປອດໄພຂອງທ່ານຢູ່ບ່ອນນີ້...',
          guidance: 'ຄວາມປອດໄພທາງການເງິນຄືຂອບເຂດທີ່ບໍ່ມີວັນຍອມຜ່ອນຜັນເດັດຂາດ ໃນທຸກສະຖານະການ.'
        }
      },
      fr: {
        id: 'm3-ch3',
        title: 'Partie 2.1 : Signaux d\'alerte (Red Flags) et Sécurité absolue',
        explanation: 'Votre sécurité financière et émotionnelle est primordiale. Vous devez identifier instantanément les comportements suspects pour écarter les escrocs.\n\nUne relation épanouissante doit impérativement reposer sur un sentiment de sécurité et une confiance absolue.',
        bulletPoints: [
          'Règle d\'or numéro 1 : Ne versez JAMAIS d\'argent ni d\'achats de cartes-cadeaux à un homme rencontré sur internet, peu importe l\'urgence invoquée.',
          'Appel vidéo rapide obligatoire : si votre interlocuteur refuse constamment de se montrer en vidéo, méfiance absolue sur son identité.',
          'Sentiments trop rapides (Love Bombing) : s\'il promet le mariage et des cadeaux luxueux au bout de 48 heures, c\'est un signal de manipulation majeur.',
          'Dissimulation d\'informations : refus de partager des aspects de sa vie quotidienne réelle ou de son travail.'
        ],
        practicalTip: 'Un homme digne et respectueux ne vous demandera jamais d\'aide financière ni de photos intimes.',
        quickExercise: {
          prompt: 'Rédigez un engagement personnel fort de ne jamais céder à une demande financière ou matérielle formulée en ligne.',
          placeholder: 'Rédigez votre engagement de sécurité ici...',
          guidance: 'Le respect de vos limites financières est une ligne rouge non négociable sous aucun prétexte.'
        }
      }
    },
    {
      id: 'm3-ch4',
      order: 4,
      lo: {
        id: 'm3-ch4',
        title: '4. ການນັດພົບຕົວຈິງຄັ້ງທຳອິດຢ່າງປອດໄພ',
        explanation: 'ເມື່ອຄວາມສຳພັນອອນລາຍພັດທະນາຈົນຮອດຂັ້ນຕອນການນັດເຈີຕົວຈິງ, ທ່ານຕ້ອງວາງແຜນເພື່ອຄວາມປອດໄພຂອງຕົນເອງຢ່າງຮອບຄອບ.\n\nການກຽມຕົວທີ່ດີຈະຊ່ວຍໃຫ້ທ່ານຮູ້ສຶກໝັ້ນໃຈ ແລະ ສາມາດເພີດເພີນກັບບັນຍາກາດການພົບກັນຄັ້ງທຳອິດໄດ້ຢ່າງເຕັມທີ່.',
        bulletPoints: [
          'ເລືອກສະຖານທີ່ສາທາລະນະ: ນັດເຈີກັນໃນຮ້ານກາເຟ, ຮ້ານອາຫານ ຫຼື ສະຖານທີ່ທີ່ມີຄົນສັນຈອນໄປມາຫຼາຍ ໃນເວລາກາງເວັນສະເໝີ',
          'ບອກຄົນທີ່ໄວ້ໃຈໄດ້: ແຈ້ງໃຫ້ໝູ່ສະໜິດ ຫຼື ຄອບຄົວຮູ້ວ່າທ່ານກຳລັງຈະໄປໃສ, ເຈີກັບໃຜ ແລະ ຈະກັບມາເວລາໃດ',
          'ການເດີນທາງດ້ວຍຕົນເອງ: ວາງແຜນເດີນທາງໄປ ແລະ ກັບດ້ວຍຕົນເອງ ບໍ່ຄວນໃຫ້ລາວມາຮັບຢູ່ເຮືອນຕັ້ງແຕ່ຄັ້ງທຳອິດ ແລະ ຫຼີກລ່ຽງການໄປບ່ອນສ່ວນຕົວ ເຊັ່ນ ໂຮງແຮມ ຫຼື ເຮືອນພັກຂອງລາວ',
          'ຮັກສາການຕິດຕໍ່: ໃຫ້ແນ່ໃຈວ່າແບັດເຕີຣີໂທລະສັບເຕັມ ແລະ ພ້ອມຕິດຕໍ່ຕະຫຼອດເວລາ'
        ],
        practicalTip: 'ການມີຄວາມລະມັດລະວັງບໍ່ໄດ້ໝາຍຄວາມວ່າທ່ານບໍ່ໄວ້ໃຈລາວ ແຕ່ເປັນການສະແດງອອກເຖິງການຮັກ ແລະ ປົກປ້ອງຕົນເອງຢ່າງມີສະຕິ.',
        quickExercise: {
          prompt: 'ຊອກຫາຮ້ານກາເຟ ຫຼື ຮ້ານອາຫານທີ່ມີຊື່ສຽງ ແລະ ຄົນຫຼາຍໃນວຽງຈັນ ຫຼື ຫຼວງພະບາງ ທີ່ເໝາະສົມສຳລັບການນັດເຈີຄັ້ງທຳອິດ.',
          placeholder: 'ຂຽນຊື່ສະຖານທີ່ ແລະ ເຫດຜົນທີ່ເລືອກ...',
          guidance: 'ສະຖານທີ່ທີ່ດີຄວນເປັນສະຖານທີ່ເປີດເຜີຍ ໄປມາສະດວກ ແລະ ມີບັນຍາກາດທີ່ຜ່ອນຄາຍ.'
        }
      },
      fr: {
        id: 'm3-ch4',
        title: 'Partie 2.2 : Réussir la première rencontre en toute sécurité',
        explanation: 'Le passage du virtuel au réel est une étape enthousiasmante qui doit être encadrée par des règles simples pour votre sérénité.\n\nUne bonne préparation vous apporte l\'assurance nécessaire pour aborder ce premier rendez-vous avec légèreté et joie.',
        bulletPoints: [
          'Lieu public obligatoire : donnez rendez-vous dans un lieu animé, passant et en plein jour pour un premier repas ou café.',
          'Informer vos proches : prévenez toujours au moins une amie ou un membre de votre famille de l\'heure et du lieu du rendez-vous.',
          'Indépendance de transport : rendez-vous sur place par vos propres moyens. Ne montez pas dans son véhicule privé d\'emblée.',
          'Batterie chargée : assurez-vous de rester joignable tout au long de la rencontre.'
        ],
        practicalTip: 'La prudence n\'empêche pas la magie d\'une rencontre : elle pose les bases saines d\'une relation de confiance réciproque.',
        quickExercise: {
          prompt: 'Sélectionnez un grand café ou restaurant réputé et animé de Vientiane ou de Luang Prabang pour un premier rendez-vous idéal.',
          placeholder: 'Indiquez le lieu et pourquoi vous l\'avez choisi...',
          guidance: 'Un endroit passant, ouvert et facile d\'accès garantit votre confort et votre tranquillité d\'esprit.'
        }
      }
    },
    {
      id: 'm3-ch5',
      order: 5,
      lo: {
        id: 'm3-ch5',
        title: '5. ຄວາມແຕກຕ່າງໃນວິຖີຊີວິດປະຈຳວັນ ແລະ ການແບ່ງປັນໜ້າທີ່',
        explanation: 'ການສ້າງຄວາມສຳພັນກັບຄົນຕ່າງຊາດ ຮຽກຮ້ອງໃຫ້ມີການປັບຕົວເຂົ້າຫາວິຖີຊີວິດທີ່ແຕກຕ່າງ. ຄວາມເຂົ້າໃຈໃນເລື່ອງການເຮັດວຽກ, ເວລາສ່ວນຕົວ ແລະ ການແບ່ງປັນໜ້າທີ່ໃນຄອບຄົວ ຈະຊ່ວຍໃຫ້ຄວາມສຳພັນຍືນຍາວ.\n\nການຮຽນຮູ້ທີ່ຈະເຄົາລົບວິຖີຊີວິດຂອງກັນແລະກັນຄືກະແຈສຳຄັນໃນການສ້າງຄວາມສຳພັນທີ່ອົບອຸ່ນ ແລະ ເຂົ້າໃຈກັນ.',
        bulletPoints: [
          'ເວລາສ່ວນຕົວ (Espace personnel): ຜູ້ຊາຍຝຣັ່ງໃຫ້ຄວາມສຳຄັນກັບເວລາສ່ວນຕົວ ແລະ ວຽກອະດິເລກຂອງຕົນເອງ, ບໍ່ໄດ້ໝາຍຄວາມວ່າລາວບໍ່ຮັກທ່ານ',
          '单ດ້ານການແບ່ງປັນໜ້າທີ່: ໃນຄອບຄົວຝຣັ່ງ, ວຽກເຮືອນ ແລະ ການລ້ຽງລູກມັກຈະຖືກແບ່ງປັນຢ່າງເທົ່າທຽມກັນ ລະຫວ່າງສາມີ ແລະ ພັນລະຍາ',
          'ຄວາມເທົ່າທຽມກັນ: ການເຄົາລົບການຕັດສິນໃຈ ແລະ ສິດທິສ່ວນບຸກຄົນຂອງກັນແລະກັນ ຄືພື້ນຖານຂອງຄອບຄົວທີ່ອົບອຸ່ນ',
          'ການສື່ສານແກ້ໄຂບັນຫາ: ສົນທະນາຮ່ວມກັນຢ່າງມີເຫດຜົນ ຫຼີກລ່ຽງການໃຊ້ອາລົມ'
        ],
        practicalTip: 'ສົນທະນາແລກປ່ຽນກ່ຽວກັບວິຖີຊີວິດ ແລະ ຄວາມຄາດຫວັງໃນຊີວິດປະຈຳວັນຕັ້ງແຕ່ເລີ່ມຕົ້ນ ເພື່ອປ້ອງກັນຄວາມເຂົ້າໃຈຜິດ.',
        quickExercise: {
          prompt: 'ລອງຂຽນແນວຄິດຂອງທ່ານກ່ຽວກັບການແບ່ງປັນວຽກເຮືອນ ແລະ ການເຮັດວຽກນອກເຮືອນໃນຄອບຄົວທີ່ທ່ານຢາກມີ.',
          placeholder: 'ຂຽນແນວຄິດການແບ່ງປັນໜ້າທີ່ຂອງທ່ານຢູ່ບ່ອນນີ້...',
          guidance: 'ຄອບຄົວຕາເວັນຕົກມັກໃຫ້ຄຸນຄ່າກັບການຮ່ວມມື ແລະ ຊ່ວຍເຫຼືອກັນຢ່າງສະເໝີພາບ.'
        }
      },
      fr: {
        id: 'm3-ch5',
        title: 'Partie 3.1 : Différences de style de vie quotidien et partage des rôles',
        explanation: 'Bâtir une relation internationale demande de comprendre des rythmes de vie distincts. Appréhender la conciliation travail-famille et le concept d\'égalité des tâches aide à pérenniser le couple.\n\nApprendre à respecter le rythme et les rituels de chacun est la clé de voûte d\'une vie commune harmonieuse et équilibrée.',
        bulletPoints: [
          'L\'espace personnel : les hommes français valorisent leur temps d\'indépendance et leurs loisirs personnels sans que cela ne remette en cause leur amour.',
          'Partage des tâches ménagères : en France, l\'entretien du foyer et l\'éducation des enfants se partagent de plus en plus équitablement.',
          'Relation de partenariat : le couple est perçu comme une équipe d\'égaux qui se soutiennent mutuellement.',
          'Résolution constructive : privilégier l\'explication rationnelle et le dialogue en cas de désaccord.'
        ],
        practicalTip: 'Parlez ouvertement de votre vision de la vie quotidienne et du travail pour vous assurer que vos projets concordent.',
        quickExercise: {
          prompt: 'Décrivez brièvement votre conception idéale de la répartition des tâches ménagères et du travail professionnel au sein d\'un foyer moderne.',
          placeholder: 'Décrivez votre vision ici...',
          guidance: 'En Europe, la collaboration active et le respect de l\'autonomie financière sont très appréciés au sein du couple.'
        }
      }
    },
    {
      id: 'm3-ch6',
      order: 6,
      lo: {
        id: 'm3-ch6',
        title: '6. ການວາງແຜນອະນາຄົດຮ່ວມກັນ ແລະ ການຮຽນຮູ້ພາສາ',
        explanation: 'ການສື່ສານທີ່ດີຕ້ອງການຂົວເຊື່ອມຕໍ່. ການຮຽນຮູ້ພາສາ ແລະ ການວາງແຜນໄລຍະຍາວຮ່ວມກັນ (ເຊັ່ນ ການເດີນທາງມາພົບກັນ, ການພັດທະນາຕົນເອງ) ຈະຊ່ວຍເພີ່ມຄວາມຜູກພັນ ແລະ ຄວາມໝັ້ນຄົງໃນຄວາມສຳພັນ.\n\nການຮຽນພາສາບໍ່ແມ່ນເລື່ອງຍາກ ຫາກມີກຳລັງໃຈ ແລະ ເປົ້າໝາຍທີ່ຊັດເຈນຮ່ວມກັນ ມັນສະແດງເຖິງຄວາມຮັກ ແລະ ການເຄົາລົບໃນວັດທະນະທຳຂອງກັນແລະກັນ.',
        bulletPoints: [
          'ການພັດທະນາພາສາ: ພະຍາຍາມຝຶກຝົນພາສາອັງກິດ ຫຼື ພາສາຝຣັ່ງເທື່ອລະເລັກລະນ້ອຍ ມັນສະແດງເຖິງຄວາມຕັ້ງໃຈຈິງຂອງທ່ານ',
          'ວາງແຜນການພົບກັນ: ການມີເປົ້າໝາຍຮ່ວມກັນວ່າຈະໄດ້ພົບກັນຕົວຈິງເມື່ອໃດ ຈະຊ່ວຍໃຫ້ຄວາມສຳພັນມີທິດທາງທີ່ຊັດເຈນ',
          'ການແລກປ່ຽນວັດທະນະທຳ: ແບ່ງປັນເລື່ອງລາວວັດທະນະທຳລາວ ແລະ ຮຽນຮູ່ວັດທະນະທຳຝຣັ່ງ ຈະຊ່ວຍໃຫ້ທ່ານ ແລະ ລາວໃກ້ຊິດກັນຫຼາຍຂຶ້ນ',
          'ເປົ້າໝາຍໄລຍະຍາວ: ສົນທະນາເຖິງສະຖານທີ່ທີ່ຕ້ອງການສ້າງຄອບຄົວ ແລະ ການໃຊ້ຊີວິດໃນອະນາຄົດ'
        ],
        practicalTip: 'ການຮຽນພາສາບໍ່ຈຳເປັນຕ້ອງເກັ່ງທັນທີ. ຄວາມພະຍາຍາມ ແລະ ການສື່ສານດ້ວຍຄວາມຈິງໃຈມີຄຸນຄ່າຫຼາຍທີ່ສຸດສຳລັບຜູ້ຊາຍທີ່ຮັກທ່ານ.',
        quickExercise: {
          prompt: 'ຕັ້ງເປົ້າໝາຍການຮຽນຮູ້ພາສາ (ຝຣັ່ງ ຫຼື ອັງກິດ) ງ່າຍໆ ປະຈຳວັນ (ເຊັ່ນ ຮຽນຮູ້ຄຳສັບໃໝ່ 3 ຄຳຕໍ່ມື້).',
          placeholder: 'ຂຽນແຜນການຮຽນພາສາຂອງທ່ານ...',
          guidance: 'ຄວາມສະໝໍ່າສະເໝີຄືກຸນແຈສຳຄັນ ການຮຽນຮູ້ວັນລະເລັກລະນ້ອຍຈະສ້າງການປ່ຽນແປງທີ່ຍິ່ງໃຫຍ່.'
        }
      },
      fr: {
        id: 'm3-ch6',
        title: 'Partie 3.2 : Projet d\'avenir commun et apprentissage linguistique',
        explanation: 'La communication a besoin d\'un pont solide. Faire des efforts d\'apprentissage linguistique et planifier l\'avenir à deux (visites mutuelles, démarches administratives) conseille considérablement votre union.\n\nApprendre une nouvelle langue est un magnifique voyage interculturel qui renforce le respect mutuel et l\'admiration que votre partenaire a pour vous.',
        bulletPoints: [
          'Progression linguistique : apprendre quelques mots de français ou perfectionner son anglais montre votre engagement sincère.',
          'Planifier la rencontre réelle : fixer des objectifs de voyage clairs donne un cap rassurant à la relation à distance.',
          'Échange interculturel : partager l\'histoire et les beautés du Laos tout en s\'intéressant à la vie en France nourrit la complicité.',
          'Objectifs d\'avenir : parler à moyen terme du lieu de résidence souhaité et de vos aspirations familiales.'
        ],
        practicalTip: 'Pas besoin d\'être bilingue immédiatement : l\'intérêt sincère et la volonté d\'apprendre touchent profondément un homme épris.',
        quickExercise: {
          prompt: 'Définissez un petit rituel d\'apprentissage quotidien (ex: apprendre 3 mots français par jour ou regarder une vidéo de 5 min).',
          placeholder: 'Rédigez votre plan d\'étude ici...',
          guidance: 'La régularité est la clé : de petits efforts quotidiens construisent rapidement de formidables ponts de communication.'
        }
      }
    }
  ]
};
