import { ModuleData } from '../types';

export const module1Data: ModuleData = {
  id: 'module-1',
  tierRequired: 1,
  lo: {
    title: 'ໂມດູນທີ 1: ປັບແຕ່ງໂປຣໄຟລ໌ໃຫ້ໂດດເດັ່ນ ແລະ ຈິງໃຈ',
    tagline: 'ຄູ່ມືການຂຽນຄຳບັນຍາຍຕົວຕົນໃຫ້ນ່າປະທັບໃຈ, ດຶງດູດຄົນທີ່ແມ່ນ ແລະ ປອດໄພ',
    description: 'ຮຽນຮູ້ວິທີການຂຽນແນະນຳຕົວຢ່າງເປັນທຳມະຊາດ ບໍ່ສັ້ນເກີນໄປ ຫຼື ເປີดເຜີຍຂໍ້ມູນສ່ວນຕົວຫຼາຍເກີນໄປ ພ້ອมຕົວຢ່າງຈິງ ແລະ ແບບເຝິກຫັດຂຽນໂປຣໄຟລ໌',
    duration: 'ໃຊ້ເວລາປະມານ 25-35 ນາທີ',
    badge: 'ພື້ນຖານສຳຄັນ',
  },
  fr: {
    title: 'Module 1 : Améliorer son profil avec authenticité',
    tagline: 'Guide pour rédiger une présentation captivante, sincère et sécurisée',
    description: 'Apprenez à vous présenter avec naturel, sans être trop brève ni trop exposer votre vie privée, avec exemples concrets et atelier de rédaction.',
    duration: 'Durée estimée : 25-35 minutes',
    badge: 'Socle fondamental',
  },
  exerciseType: 'profile_builder',
  checklistTitle: {
    lo: 'ເຊັກລິສ: ໂປຣໄຟລ໌ຂອງທ່ານພ້ອມແລ້ວຫຼືຍັງ?',
    fr: 'Checklist finale : Mon profil est-il prêt ?',
  },
  checklist: [
    {
      id: 'm1-c1',
      lo: 'ຄຳຂຶ້ນຕົ້ນອ່ານງ່າຍ, ໜ້າສົນໃຈ ແລະ ສ້າງຮອຍຍິ້ມຕັ້ງແຕ່ປະໂຫຍກທຳອິດ',
      fr: 'La phrase d\'accroche est claire, chaleureuse et donne envie d\'en savoir plus.',
      category: 'hook'
    },
    {
      id: 'm1-c2',
      lo: 'ບອກເລົ່າບຸກຄະລິກກະພາບດ້ວຍຕົວຢ່າງກິດຈະກຳຈິງ ບໍ່ແມ່ນແຕ່ໃສ່ຄຳຄຸນນາມລອຍໆ',
      fr: 'Votre personnalité est illustrée par des exemples concrets, pas juste des adjectifs.',
      category: 'personality'
    },
    {
      id: 'm1-c3',
      lo: 'ความยาวพอเหมาะ (ประมาณ 8-15 บรรทัด) อ่านจบได้ใน 45 วินาที',
      fr: 'Longueur équilibrée (8 à 15 lignes environ), lisible en 45 secondes.',
      category: 'length'
    },
    {
      id: 'm1-c4',
      lo: 'ລະບຸສິ່ງທີ່ຊອກຫາໃນຄວາມສຳພັນຢ່າງອົບອຸ່ນ ແລະ ຈະແຈ້ງ (ບໍ່ຕັ້ງເງື່ອນໄຂແບບກົດດັນ)',
      fr: 'Vos attentes relationnelles sont exprimées avec bienveillance et clarté.',
      category: 'intentions'
    },
    {
      id: 'm1-c5',
      lo: 'ບໍ່ເປີດເຜີຍຂໍ້ມູນສ່ວນຕົວທີ່ສ່ຽງຕໍ່ຄວາມປອດໄພ (ເບີໂທ, ທີ່ຢູ່ຈະແຈ້ງ, ໄອດີໂຊຊຽວສ່ວນຕົວ)',
      fr: 'Aucune information sensible ou risquée n\'est mentionnée (adresse exacte, finances, etc.).',
      category: 'safety'
    },
    {
      id: 'm1-c6',
      lo: 'ບໍ່ມີຂໍ้ຄວາມທີ່ເນັ້ນເລື່ອງເງິນ, ຊັບສິນ ຫຼື ຄຳຕັດພໍ້ຈາກຄວາມຮັກໃນອະດີດ',
      fr: 'Aucune mention d\'argent, de statut financier ni de rancœur envers le passé.',
      category: 'attitude'
    },
    {
      id: 'm1-c7',
      lo: 'ເປີດໂອກາດໃຫ້ຜູ້ຊາຍມີຫົວຂໍ້ເລີ່ມຕົ້ນທັກທາຍໄດ້ງ່າຍ ເຊັ່ນ ຄຳຖາມໜ້າຮັກໆ ທ້າຍປະໂຫຍກ',
      fr: 'Vous terminez par une invitation ouverte ou une question facile pour lancer la discussion.',
      category: 'conversation_starter'
    }
  ],
  chapters: [
    {
      id: 'm1-ch1',
      order: 1,
      lo: {
        id: 'm1-ch1',
        title: '1. ເປັນຫຍັງຄຳບັນຍາຍໂປຣໄຟລ໌ຈຶ່ງມີຄວາມສຳຄັນຫຼາຍ?',
        explanation: 'ຮູບພາບອາດຊ່ວຍໃຫ້ຄົນຢຸດເບິ່ງ ແຕ່ "ຄຳບັນຍາຍຕົວຕົນ" ຄືສິ່ງທີ່ຈະເຮັດໃຫ້ຜູ້ຊາຍທີ່ຈິງໃຈຕັດສິນໃຈສົ່ງຂໍ້ຄວາມທັກທາຍທ່ານ. ຜູ້ຊາຍຝຣັ່ງສ່ວນໃຫຍ່ມັກໃຫ້ຄຸນຄ່າກັບການສົນທະນາ ແລະ ບຸກຄະລິກກະພາບ. ການມີຂໍ້ຄວາມທີ່ສື່ເຖິງຕົວຕົນແທ້ໆ ຈະຊ່ວยຄັດກອງຄົນທີ່ຊອກຫາຄວາມສຳພັນຈິງຈັງອອກຈາກຄົນที่ເຂົ້າມາພຽງແຕ່ຜິວເຜີນ.',
        bulletPoints: [
          'ເປັນຂົວເຊື່ອມບົດສົນທະນາທຳອິດ: ເຮັດໃຫ້ລາວມີເລື່ອງຊວນຄຸຍຢ່າງມີຄວາມໝາຍ',
          'ສະທ້ອນຄວາມເປັນຕົວທ່ານ: ຜູ້ຊາຍຝຣັ່ງມັກຊື່ນຊົມຜູ້ຍິງທີ່ມີຄວາມຄິດ ແລະ ເອກະລັກຂອງຕົນເອງ',
          'ສ້າງຄວາມອຸ່ນໃຈ: ສະແດງໃຫ້ເຫັນວ່າໂປຣໄຟລ໌ນີ້ແມ່ນບຸກຄົນຈິງທີ່ມີເຈດຕະນາຈິງໃຈ'
        ],
        practicalTip: 'ຢ່າມອງວ່າໂປຣໄຟລ໌ຄືການຕື່ມໃບສະໝັກງານ ແຕ່ໃຫ້ມອງວ່າເປັນການ "ເປີດປະຕູເຮືອນຕ້ອນຮັບໝູ່ໃໝ່ທີ່ໃຫ້ກຽດກັນ"'
      },
      fr: {
        id: 'm1-ch1',
        title: '1. Pourquoi la description du profil est essentielle',
        explanation: 'Si les photos attirent le premier regard, c\'est la description écrite qui incite un homme sérieux à vous envoyer un premier message. La culture française accorde une grande importance à la conversation et à la personnalité : un texte réfléchi permet d\'attirer des hommes sincères et d\'écarter ceux qui ne cherchent que la superficialité.',
        bulletPoints: [
          'Elle offre un pont de conversation immédiat pour briser la glace.',
          'Elle reflète votre singularité et votre sensibilité.',
          'Elle inspire confiance en montrant une démarche réfléchie et honnête.'
        ],
        practicalTip: 'Voyez votre description non comme un CV rigide, mais comme une invitation chaleureuse à échanger.'
      }
    },
    {
      id: 'm1-ch2',
      order: 2,
      lo: {
        id: 'm1-ch2',
        title: '2. ຂໍ້ຜິດພາດທີ່ພົບເລື້ອຍໃນຄຳບັນຍາຍໂປຣໄຟລ໌',
        explanation: 'ຫຼາຍຄັ້ງທີ່ພວກເຮົາອາດເຜີຂຽນຂໍ້ຄວາມຕາມຄວາມຊິນເຄີຍ ແຕ່ໃນມຸມມອງຂອງຜູ້ຊາຍຕ່າງຊາດ ຂໍ້ຄວາມບາງປະເພດອາດເຮັດໃຫ້ເກີດຄວາມເຂົ້າໃຈຜິດ ຫຼື ເຮັດໃຫ້ລາວຮູ້ສຶກບໍ່ກ້າທັກທາຍ',
        bulletPoints: [
          'ຂຽນສັ້ນເກີນໄປ ເຊັ່ນ "Hi, ask me" ຫຼື "ຊອກຫາຄົນຈິງໃຈ": ເບິ່ງຄືບໍ່ຄ່ອຍຕັ້ງໃຈ ແລະ ບໍ່ມີເລື່ອງໃຫ້ຄຸຍຕໍ່',
          'ຂຽນຕັດພໍ້ເຖິງອະດີດ ເຊັ່ນ "ກຽດຄົນຕົວະ ເຄີຍຖືກຫຼອກມາ": ເຮັດໃຫ້ບັນຍາກາດເບິ່ງເຄັ່ງຕຶງ ແລະ ມີພະລັງລົບ',
          'ເນັ້ນເລື່ອງຄວາມຊ່ວຍເຫຼືອທາງການເງິນ ຫຼື ຄວາມລຳບາກ: ສົ່ງສັນຍານທີ່ບໍ່ດີ ແລະ ດຶງດູດກຸ່ມຄົນທີ່ບໍ່ໜ້າໄວ້ວາງໃຈ',
          'ການໃຊ້ຄຳແປກູໂກແບບປະໂຫຍກຍາວຕິດກັນຈົນອ່ານບໍ່ຮູ້ເລື່ອງ: ຄວນສື່ສານດ້ວຍປະໂຫຍກງ່າຍໆ ກະຊັບ'
        ],
        errorsToAvoid: [
          'ຫຼີກລ່ຽງການຂຽນຂໍ້ຮຽກຮ້ອງເປັນລາຍການຍາວຢຽດ (ເຊັ່ນ ຕ້ອງສູງ, ຕ້ອງລວຍ, ຕ້ອງລ້ຽງດູ)',
          'ຫຼີກລ່ຽງການຄັດລອກຄຳຄົມພາສາອັງກິດ ຫຼື ປັດຊະຍາຍາວໆ ໂດຍບໍ່ມີເລື່ອງກ່ຽວກັບຕົວເອງເລີຍ'
        ],
        practicalTip: 'ເນັ້ນຄວາມສົดໃສ ແລະ ພະລັງບວກ ຄົນເຮົາຈະຢາກຄຸຍກັບຄົນທີ່ເຮັດໃຫ້ຮູ້ສຶກສະບາຍໃຈເມື່ອໄດ້ອ່ານ'
      },
      fr: {
        id: 'm1-ch2',
        title: '2. Les erreurs fréquentes dans une description',
        explanation: 'Certaines habitudes d\'écriture peuvent involontairement freiner les hommes sérieux ou envoyer un signal négatif sans que l\'on s\'en rende compte.',
        bulletPoints: [
          'Descriptions trop courtes (« Hi, ask me ») : donnent l\'impression d\'un manque d\'investissement.',
          'Amertume liée aux déceptions passées (« Marre des menteurs ») : instaure une tension négative d\'emblée.',
          'Mentions d\'aide financière ou de difficultés matérielles : risquent d\'attirer des profils mal intentionnés.',
          'Traduction automatique trop complexe et incompréhensible : privilégiez des phrases simples et limpides.'
        ],
        errorsToAvoid: [
          'Éviter les listes d\'exigences matérielles rigides dès la première ligne.',
          'Éviter d\'aligner uniquement des citations philosophiques impersonnelles.'
        ],
        practicalTip: 'Privilégiez la clarté et la sérénité : les hommes bienveillants cherchent avant tout une rencontre apaisante.'
      }
    },
    {
      id: 'm1-ch3',
      order: 3,
      lo: {
        id: 'm1-ch3',
        title: '3. ວິທີເລີ່ມຕົ້ນປະໂຫຍກທຳອິດ (Accroche) ໃຫ້ນ່າອ່ານ',
        explanation: 'ປະໂຫຍກທຳອິດມີຜົນຫຼາຍທີ່ສຸດໃນການດຶງດູດສາຍຕາ ແທນທີ່ຈະເລີ່ມດ້ວຍຄຳວ່າ "ສະບາຍດີ ຂ້ອຍຊື່..." ແບບທຳມະດາ ລອງເລີ່ມຕົ້ນດ້ວຍບັນຍາກາດອົບອຸ່ນ ສິ່ງທີ່ທ່ານກຳລັງມັກເຮັດ ຫຼື ຄຳທັກທາຍທີ່ເປັນມິດ',
        examples: [
          {
            bad: {
              text: 'Hello. I am a Lao woman looking for a good man. I am 32 years old.',
              explanation: 'ທຳມະດາເກີນໄປ ຄືໂປຣໄຟລ໌ອື່ນໆ ອີກນັບພັນຄົນ ບໍ່ບອກເລົ່າຫຍັງກ່ຽວກັບຕົວທ່ານ'
            },
            good: {
              text: 'Sabaidee! ☀️ A smile from Vientiane. If you love good coffee, discovering traditional cooking, and meaningful conversations, I’d love to welcome you.',
              explanation: 'ອົບອຸ່ນ ມີເອກະລັກ ສື່ເຖິງຮອຍຍິ້ມ ແລະ ຄວາມສົນໃຈ ຊວນໃຫ້ຢາກຄຸຍຕໍ່ທັນທີ'
            }
          }
        ],
        practicalTip: 'ຈິນຕະນາການວ່າທ່ານກຳລັງຍິ້ມ ແລະ ເວົ້າຄຳນີ້ກັບຄົນທີ່ຢູ່ຕໍ່ໜ້າ'
      },
      fr: {
        id: 'm1-ch3',
        title: '3. Comment bien débuter sa première phrase (Accroche)',
        explanation: 'La première phrase est cruciale pour capter l\'attention. Au lieu d\'un banal « Hello, I am... », commencez par évoquer une atmosphère chaleureuse, un hobby ou un accueil souriant.',
        examples: [
          {
            bad: {
              text: 'Hello. I am a Lao woman looking for a good man. I am 32 years old.',
              explanation: 'Trop banal, impersonnel et n\'apporte aucune information unique sur vous.'
            },
            good: {
              text: 'Sabaidee ! ☀️ Un sourire de Vientiane. Si vous aimez le bon café, la cuisine traditionnelle et les discussions sincères, bienvenue dans mon monde.',
              explanation: 'Chaleureux, personnalisé et donne tout de suite des idées de conversation.'
            }
          }
        ],
        practicalTip: 'Imaginez que vous accueillez un invité de marque avec votre plus beau sourire.'
      }
    },
    {
      id: 'm1-ch4',
      order: 4,
      lo: {
        id: 'm1-ch4',
        title: '4. ການຮັກສາຄວາມປອດໄພ ແລະ ຄວາມເປັນສ່ວນຕົວ',
        explanation: 'ຄວາມປອດໄພຂອງທ່ານຄືສິ່ງສຳຄັນທີ່ສຸດ. ໃນຂະນະທີ່ກຳລັງຂຽນໂປຣໄຟລ໌ໃຫ້ໜ້າສົນໃຈ, ທ່ານຕ້ອງຫຼີກລ່ຽງການເປີດເຜີຍຂໍ້ມູນທີ່ລະອຽດອ່ອນ ເຊິ່ງອາດນຳໄປສູ່ອັນຕະລາຍໄດ້.',
        bulletPoints: [
          'ຢ່າບອກທີ່ຢູ່ລະອຽດ: ບອກພຽງແຕ່ຊື່ເມືອງ ຫຼື ແຂວງ ເຊັ່ນ "ວຽງຈັນ" ຫຼື "ຫຼວງພະບາງ" ກໍພໍແລ້ວ',
          'ຢ່າໃສ່ຊ່ອງທາງຕິດຕໍ່ໂດຍກົງ: ຫຼີກລ່ຽງການໃສ່ເບີໂທລະສັບ, ໄອດີໂຊຊຽວ ຫຼື ແອັບແຊັດຕ່າງໆ ໄວ້ໃນໜ້າໂປຣໄຟລ໌ສາທາລະນະ',
          'ລະວັງເລື່ອງການເງິນ: ບໍ່ຄວນເວົ້າເຖິງຄວາມຕ້ອງການດ້ານການເງິນ ຫຼື ຄວາມຍາກລຳບາກໃນຄອບຄົວ ເພາະອາດດຶງດູດກຸ່ມຄົນທີ່ບໍ່ຫວັງດີ'
        ],
        practicalTip: 'ຄວາມປອດໄພມາກ່ອນສະເໝີ. ຜູ້ຊາຍທີ່ດີຈະເຂົ້າໃຈ ແລະ ເຄົາລົບໃນຄວາມເປັນສ່ວນຕົວຂອງທ່ານ.'
      },
      fr: {
        id: 'm1-ch4',
        title: '4. Sécurité et protection de la vie privée',
        explanation: 'Votre sécurité est absolue. Tout en rendant votre profil attrayant, veillez à ne pas divulguer d\'informations sensibles qui pourraient vous mettre en danger.',
        bulletPoints: [
          'Pas d\'adresse précise : indiquez seulement la ville ou la province (ex : Vientiane ou Luang Prabang).',
          'Pas de coordonnées directes : évitez d\'afficher votre numéro de téléphone ou vos réseaux sociaux en public.',
          'Discrétion financière : ne parlez jamais de vos difficultés financières pour éviter d\'attirer des profils malveillants.'
        ],
        practicalTip: 'La sécurité passe avant tout. Un homme bienveillant comprendra et respectera votre prudence.'
      }
    }
  ]
};
