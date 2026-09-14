import { ModuleData } from '../types';

export const module1Data: ModuleData = {
  id: 'module-1',
  tierRequired: 1,
  lo: {
    title: 'ໂມດູນທີ 1: ປັບແຕ່ງໂປຣໄຟລ໌ໃຫ້ໂດດເດັ່ນ ແລະ ຈິງໃຈ',
    tagline: 'ວິທີຂຽນຄຳບັນຍາຍຕົວຕົນ ແລະ ເລືອກຮູບພາບເພື່ອດຶງດູດຜູ້ຊາຍທີ່ຈິງໃຈ ແລະ ໃຫ້ກຽດ',
    description: 'ຮຽນຮູ້ສິລະປະການສື່ສານຕົວຕົນຜ່ານຕົວອັກສອນ ແລະ ຮູບພາບ ເພື່ອຄັດເລືອກສະເພາະຄົນທີ່ພ້ອມຈະພັດທະນາຄວາມສຳພັນຈິງຈັງ',
    duration: 'ໃຊ້ເວລາປະມານ 20-30 ນາທີ',
    badge: 'ພື້ນຖານສຳຄັນ',
  },
  fr: {
    title: 'Module 1 : Optimiser son profil avec authenticité',
    tagline: 'Comment rédiger sa description et choisir ses photos pour attirer des hommes sérieux',
    description: 'Maîtrisez l\'art de l\'expression écrite et le choix de vos visuels pour attirer l\'attention de profils sincères et respectueux.',
    duration: 'Durée estimée : 20-30 minutes',
    badge: 'Fondation essentielle',
  },
  exerciseType: 'profile_builder',
  checklistTitle: {
    lo: 'ເຊັກລິສ: ໂປຣໄຟລ໌ຂອງທ່ານໂດດເດັ່ນ ແລະ ປອດໄພແລ້ວຫຼືຍັງ?',
    fr: 'Checklist finale : Mon profil est-il attractif et sécurisé ?',
  },
  checklist: [
    {
      id: 'm1-c1',
      lo: 'ກຳນົດຄຳບັນຍາຍໂປຣໄຟລ໌ທີ່ມີຄວາມຍາວຢ່າງໜ້ອຍ 3-4 ປະໂຫຍກທີ່ມີຄວາມໝາຍ',
      fr: 'Rédiger une description de profil d\'au moins 3 à 4 phrases significatives.',
      category: 'profile_text'
    },
    {
      id: 'm1-c2',
      lo: 'ຫຼີກລ່ຽງການໃສ່ຂໍ້ມູນສ່ວນຕົວທີ່ລະອຽດອ່ອນ ເຊັ່ນ ທີ່ຢູ່ ຫຼື ຂໍ້ມູນຕິດຕໍ່ໂດຍກົງ',
      fr: 'Éviter de mentionner des informations personnelles sensibles (adresse, contact direct).',
      category: 'safety'
    },
    {
      id: 'm1-c3',
      lo: 'ເລືອກຮູບພາບທີ່ເຫັນໃບໜ້າຈະແຈ້ງ ແລະ ມີຮອຍຍິ້ມທີ່ຈິງໃຈ ຫຼີກລ່ຽງການໃຊ້ຟິວເຕີຫຼາຍເກີນໄປ',
      fr: 'Choisir des photos claires, souriantes et sans filtres excessifs.',
      category: 'photos'
    },
    {
      id: 'm1-c4',
      lo: 'ເພີ່ມລາຍລະອຽດກ່ຽວກັບວຽກອະດິເລກຢ່າງໜ້ອຍ 2 ຢ່າງທີ່ທ່ານມັກເຮັດແທ້ໆ',
      fr: 'Ajouter au moins 2 loisirs ou passions réelles dans votre description.',
      category: 'lifestyle'
    },
    {
      id: 'm1-c5',
      lo: 'ກວດສອບຄຳແປພາສາຝຣັ່ງໃຫ້ມີຄວາມຄຸ້ມຄອງ ແລະ ສຸພາບ',
      fr: 'Vérifier que la traduction française est polie et fluide.',
      category: 'translation'
    },
    {
      id: 'm1-c6',
      lo: 'ສະແດງທັດສະນະຄະຕິທີ່ດີ ແລະ ຫຼີກລ່ຽງການເວົ້າເຖິງເລື່ອງທາງລົບ ຫຼື ຄວາມຫຼອກລວງໃນອະດີດ',
      fr: 'Adopter un ton positif et bienveillant, sans amertume sur le passé.',
      category: 'attitude'
    },
    {
      id: 'm1-c7',
      lo: 'ເປີດໂອກາດໃຫ້ຜູ້ຊາຍມີຫົວຂໍ້ເລີ່ມຕົ້ນທັກທາຍໄດ້ງ່າຍ ເຊັ່ນ ຄຳຖາມໜ້າຮັກໆ ທ້າຍປະໂຫຍກ',
      fr: 'Terminer par une invitation ouverte ou une question facile pour lancer la discussion.',
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
        explanation: 'ຮູບພາບອາດຊ່ວຍໃຫ້ຄົນຢຸດເບິ່ງ ແຕ່ "ຄຳບັນຍາຍຕົວຕົນ" ຄືສິ່ງທີ່ຈະເຮັດໃຫ້ຜູ້ຊາຍທີ່ຈິງໃຈຕັດສິນໃຈສົ່ງຂໍ້ຄວາມທັກທາຍທ່ານ. ຜູ້ຊາຍຝຣັ່ງສ່ວນໃຫຍ່ມັກໃຫ້ຄຸນຄ່າກັບການສົນທະນາ, ຄວາມຄິດ, ແລະ ບຸກຄະລິກກະພາບ. ການມີຂໍ້ຄວາມທີ່ສື່ເຖິງຕົວຕົນແທ້ໆ ຈະຊ່ວຍຄັດກອງຄົນທີ່ຊອກຫາຄວາມສຳພັນຈິງຈັງອອກຈາກຄົນທີ່ເຂົ້າມາພຽງແຕ່ຜິວເຜີນ.\n\nໃນວັດທະນະທຳຝຣັ່ງ, ຄຳບັນຍາຍທີ່ສະແດງອອກເຖິງຄວາມຄິດສ້າງສັນ ແລະ ທັດສະນະຄະຕິທີ່ດີ ຈະເປັນຈຸດເລີ່ມຕົ້ນທີ່ດີທີ່ສຸດໃນການສ້າງຄູ່ຊີວິດ. ມັນຊ່ວຍສ້າງຄວາມປະທັບໃຈໃນໄລຍະຍາວ ແລະ ບົ່ງບອກວ່າທ່ານພ້ອມທີ່ຈະຮຽນຮູ້ສິ່ງໃໝ່ໆ.',
        bulletPoints: [
          'ເປັນຂົວເຊື່ອມບົດສົນທະນາທຳອິດ: ເຮັດໃຫ້ລາວມີເລື່ອງຊວນຄຸຍຢ່າງມີຄວາມໝາຍ ແລະ ບໍ່ໜ້າເບື່ອ',
          'ສະທ້ອນຄວາມເປັນຕົວທ່ານ: ຜູ້ຊາຍຝຣັ່ງມັກຊື່ນຊົມຜູ້ຍິງທີ່ມີຄວາມຄິດ, ມີເປົ້າໝາຍ ແລະ ເອກະລັກຂອງຕົນເອງ',
          'Saves Time & Filter: ຄຳບັນຍາຍທີ່ດີຈະຊ່ວຍດຶງດູດສະເພาະຜູ້ຊາຍທີ່ມີລະດັບຄວາມຄິດ ແລະ ເຄົາລົບໃນຕົວທ່ານ',
          'ສ້າງຄວາມອຸ່ນໃຈ ແລະ ຄວາມໜ້າເຊື່ອຖື: ສະແດງໃຫ້ເຫັນວ່າໂປຣໄຟລ໌ນີ້ແມ່ນບຸກຄົນຈິງທີ່ມີເຈດຕະນາຈິງໃຈ ແລະ ມີທັດສະນະຄະຕິທີ່ດີ'
        ],
        practicalTip: 'ຢ່າມອງວ່າໂປຣໄຟລ໌ຄືການຕື່ມໃບສະໝັກງານ ແຕ່ໃຫ້ມອງວ່າເປັນການ "ເປີດປະຕູເຮືອນຕ້ອນຮັບໝູ່ໃໝ່ທີ່ໃຫ້ກຽດກັນ"',
        quickExercise: {
          prompt: 'ລອງຂຽນຄຳບັນຍາຍ 3 ຄຳທີ່ບົ່ງບອກຄວາມເປັນຕົວຕົນຂອງທ່ານໄດ້ດີທີ່ສຸດ (ເຊັ່ນ: ຮອຍຍິ້ມ, ທຳມະຊາດ, ຄວາມອົບອຸ່ນ)',
          placeholder: 'ຂຽນ 3 ຄຳທີ່ເປັນຕົວທ່ານຢູ່ບ່ອນນີ້...',
          guidance: 'ການເລືອກຄຳທີ່ເປັນບວກ ແລະ ສື່ເຖິງບຸກຄະລິກຂອງທ່ານ ຈະຊ່ວຍໃຫ້ຜູ້ອ່ານສາມາດຮັບຮູ້ສະເໜ່ຂອງທ່ານໄດ້ທັນທີ.'
        }
      },
      fr: {
        id: 'm1-ch1',
        title: '1. Pourquoi la description du profil est essentielle',
        explanation: 'Si les photos attirent le premier regard, c\'est la description écrite qui incite un homme sérieux à vous envoyer un premier message. La culture française accorde une grande importance à la conversation, à l\'esprit et à la personnalité : un texte réfléchi permet d\'attirer des hommes sincères et d\'écarter ceux qui ne cherchent que la superficialité.\n\nC\'est l\'occasion rêvée de vous distinguer et de montrer votre univers unique dès les premiers instants. Elle démontre que vous êtes une femme mature, confiante, et ouverte d\'esprit, prête à construire une relation authentique.',
        bulletPoints: [
          'Elle offre un pont de conversation immédiat pour briser la glace de façon naturelle.',
          'Elle reflète votre singularité, votre sensibilité et votre niveau de réflexion.',
          'Elle inspire confiance en montrant une démarche réfléchie, honnête et sincère.',
          'Elle opère un filtre naturel pour n\'attirer que des hommes attentionnés et respectueux.'
        ],
        practicalTip: 'Voyez votre description non comme un CV rigide, mais comme une invitation chaleureuse à échanger.',
        quickExercise: {
          prompt: 'Essayez de lister 3 mots clés qui vous définissent le mieux avec douceur (ex: sourire, nature, bienveillance).',
          placeholder: 'Écrivez vos 3 mots clés ici...',
          guidance: 'Choisir des mots positifs et évocateurs permet d\'installer une atmosphère chaleureuse dès l\'introduction.'
        }
      }
    },
    {
      id: 'm1-ch2',
      order: 2,
      lo: {
        id: 'm1-ch2',
        title: '2. ຂໍ້ຜິດພາດທີ່ພົບເລື້ອຍໃນຄຳບັນຍາຍໂປຣໄຟລ໌',
        explanation: 'ຫຼາຍຄັ້ງທີ່ພວກເຮົາອາດເຜີຂຽນຂໍ້ຄວາມຕາມຄວາມຊິນເຄີຍ ແຕ່ໃນມຸມມອງຂອງຜູ້ຊາຍຕ່າງຊາດ ຂໍ້ຄວາມບາງປະເພດອາດເຮັດໃຫ້ເກີດຄວາມເຂົ້າໃຈຜິດ ຫຼື ເຮັດໃຫ້ລາວຮູ້ສຶກບໍ່ກ້າທັກທາຍ.\n\nການສື່ສານຂ້າມວັດທະນະທຳຕ້ອງການຄວາມລະອຽດອ່ອນ. การສະແດງຄວາມກັງວົນ ຫຼື ຄວາມຜິດຫວັງໃນອະດີດຫຼາຍເກີນໄປຈະເຮັດໃຫ້ໂປຣໄຟລ໌ຂອງທ່ານເບິ່ງມີພະລັງງານທາງລົບ ເຊິ່ງບໍ່ເອື້ອອໍານວຍຕໍ່ການເລີ່ມຕົ້ນຄວາມສຳພັນໃໝ່.',
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
        practicalTip: 'ເນັ້ນຄວາມສົດໃສ ແລະ ພະລັງບວກ ຄົນເຮົາຈະຢາກຄຸຍກັບຄົນທີ່ເຮັດໃຫ້ຮູ້ສຶກສະບາຍໃຈເມື່ອໄດ້ອ່ານ',
        quickExercise: {
          prompt: 'ກວດເບິ່ງຄຳບັນຍາຍປະຈຸບັນຂອງທ່ານວ່າມີຄຳສັບທາງລົບ (ເຊັ່ນ: ບໍ່, ຢ່າ, ຕົວະ, ຫຼອກ) ຫຼື ບໍ່ ແລະ ປ່ຽນໃຫ້ເປັນປະໂຫຍກທາງບວກ.',
          placeholder: 'ขຽນປະໂຫຍກໃໝ່ທີ່ປັບປຸງແລ້ວຢູ່ບ່ອນນີ້...',
          guidance: 'ການປ່ຽນຈາກ "ຂ້ອຍບໍ່ມັກຄົນຕົວະ" ມາເປັນ "ຂ້ອຍໃຫ້ຄຸນຄ່າກັບຄວາມຊື່ສັດ ແລະ ຄວາມຈິງໃຈ" ຈະສ້າງຄວາມຮູ້ສຶກທີ່ດີກວ່າຫຼາຍ.'
        }
      },
      fr: {
        id: 'm1-ch2',
        title: '2. Les erreurs fréquentes dans une description',
        explanation: 'Certaines habitudes d\'écriture peuvent involontairement freiner les hommes sérieux ou envoyer un signal négatif sans que l\'on s\'en rende compte.\n\nLa communication interculturelle exige de la délicatesse. Trop exprimer d\'exigences ou de rancœur liée au passé alourdit l\'atmosphère de votre profil et donne une impression de négativité qui nuit à la séduction.',
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
        practicalTip: 'Privilégiez la clarté et la sérénité : les hommes bienveillants cherchent avant tout une rencontre apaisante.',
        quickExercise: {
          prompt: 'Relisez votre profil actuel : supprimez les mots négatifs (pas, ne... jamais, mensonge) et formulez vos souhaits de manière positive.',
          placeholder: 'Écrivez votre phrase positive ici...',
          guidance: 'Remplacer « Je ne veux pas de menteurs » par « J\'apprécie la sincérité et le respect » transforme radicalement l\'accueil.'
        }
      }
    },
    {
      id: 'm1-ch3',
      order: 3,
      lo: {
        id: 'm1-ch3',
        title: '3. ວິທີເລີ່ມຕົ້ນປະໂຫຍກທຳອິດ (Accroche) ໃຫ້ນ່າອ່ານ',
        explanation: 'ປະໂຫຍກທຳອິດມີຜົນຫຼາຍທີ່ສຸດໃນການດຶງດູດສາຍຕາ ແທນທີ່ຈະເລີ່ມດ້ວຍຄຳວ່າ "ສະບາຍດີ ຂ້ອຍຊື່..." ແບບທຳມະດາ ລອງເລີ່ມຕົ້ນດ້ວຍບັນຍາກາດອົບອຸ່ນ ສິ່ງທີ່ທ່ານກຳລັງມັກເຮັດ ຫຼື ຄຳທັກທາຍທີ່ເປັນມິດ.\n\nການສ້າງຄວາມປະທັບໃຈທຳອິດທີ່ດີຄືການສ້າງຮູບພາບທີ່ສວຍງາມ ແລະ ມີຊີວິດຊີວາໃນຄວາມຄິດຂອງຜູ້ອ່ານ. ມັນຊ່ວຍໃຫ້ຜູ້ຊາຍສາມາດຈິນຕະນາການເຖິງຮອຍຍິ້ມ ແລະ ສຽງເວົ້າຂອງທ່ານໄດ້.',
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
        practicalTip: 'ຈິນຕະນາການວ່າທ່ານກຳລັງຍິ້ມ ແລະ ເວົ້າຄຳນີ້ກັບຄົນທີ່ຢູ່ຕໍ່ໜ້າ',
        quickExercise: {
          prompt: 'ລອງແຕ່ງປະໂຫຍກທຳອິດຂອງທ່ານເອງ ໂດຍໃສ່ຄຳທັກທາຍ "Sabaidee!" ຕິດຕາມດ້ວຍສິ່ງທີ່ທ່ານກຳລັງເຮັດ ຫຼື ບັນຍາກາດທີ່ທ່ານຢູ່.',
          placeholder: 'ແຕ່ງປະໂຫຍກທຳອິດຂອງທ່ານຢູ່ບ່ອນນີ້...',
          guidance: 'ປະໂຫຍກທີ່ດີຄວນມີຄວາມຍິ້ມແຍ້ມ ແລະ ສະແດງອອກເຖິງຄວາມສຸກໃນຕອນນັ້ນ.'
        }
      },
      fr: {
        id: 'm1-ch3',
        title: '3. Comment bien débuter sa première phrase (Accroche)',
        explanation: 'La première phrase est cruciale pour capter l\'attention. Au lieu d\'un banal « Hello, I am... », commencez par évoquer une atmosphère chaleureuse, un hobby ou un accueil souriant.\n\nCréer une première bonne impression consiste à susciter une image positive et vivante chez le lecteur. Cela lui permet de deviner immédiatement votre dynamisme et votre bonne humeur.',
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
        practicalTip: 'Imaginez que vous accueillez un invité de marque avec votre plus beau sourire.',
        quickExercise: {
          prompt: 'Rédigez votre première phrase d\'accroche personnalisée en y intégrant un élément de votre cadre de vie actuel.',
          placeholder: 'Rédigez votre phrase d\'accroche ici...',
          guidance: 'Associez un salut traditionnel chaleureux (« Sabaidee ») à un détail visuel ou sensoriel captivant.'
        }
      }
    },
    {
      id: 'm1-ch4',
      order: 4,
      lo: {
        id: 'm1-ch4',
        title: '4. การຮັກສາຄວາມປອດໄພ ແລະ ຄວາມເປັນສ່ວນຕົວ',
        explanation: 'ຄວາມປອດໄພຂອງທ່ານຄືສິ່ງສຳຄັນທີ່ສຸດ. ໃນຂະນະທີ່ກຳລັງຂຽນໂປຣໄຟລ໌ໃຫ້ໜ້າສົນໃຈ, ທ່ານຕ້ອງຫຼີກລ່ຽງການເປີດເຜີຍຂໍ້ມູນທີ່ລະອຽດອ່ອນ ເຊິ່ງອາດນຳໄປສູ່ອັນຕະລາຍໄດ້.\n\nການມີສະຕິ ແລະ ລະມັດລະວັງບໍ່ໄດ້ເຮັດໃຫ້ສະເໜ່ຂອງທ່ານຫຼຸດລົງ ແຕ່ມັນຄືການສະແດງອອກເຖິງຄວາມເປັນຜູ້ໃຫຍ່ ແລະ ການຮັກຕົວເອງຢ່າງມີກຽດ.',
        bulletPoints: [
          'ຢ່າບອກທີ່ຢູ່ລະອຽດ: ບອກພຽງແຕ່ຊື່ເມືອງ ຫຼື ແຂວງ ເຊັ່ນ "ວຽງຈັນ" ຫຼື "ຫຼວງພະບາງ" ກໍພໍແລ້ວ',
          'ຢ່າໃສ່ຊ່ອງທາງຕິດຕໍ່ໂດຍກົງ: ຫຼີກລ່ຽງການໃສ່ເບີໂທລະສັບ, ໄອດີໂຊຊຽວ ຫຼື ແອັບແຊັດຕ່າງໆ ໄວ້ໃນໜ້າໂປຣໄຟລ໌ສາທາລະນະ',
          'ລະວັງເລື່ອງການເງິນ: ບໍ່ຄວນເວົ້າເຖິງຄວາມຕ້ອງການດ້ານການເງິນ ຫຼື ຄວາມຍາກລຳບາກໃນຄອບຄົວ ເພາະອາດດຶງດູດກຸ່ມຄົນທີ່ບໍ່ຫວັງດີ',
          'ຮັກສາຄວາມລັບຂອງບ່ອນເຮັດວຽກ: ບໍ່ຄວນບອກຊື່ບໍລິສັດ ຫຼື ຕຳແໜ່ງທີ່ລະອຽດອ່ອນຈົນເກີນໄປ'
        ],
        practicalTip: 'ຄວາມປອດໄພມາກ່ອນສະເໝີ. ຜູ້ຊາຍທີ່ດີຈະເຂົ້າໃຈ ແລະ ເຄົາລົບໃນຄວາມເປັນສ່ວນຕົວຂອງທ່ານ.',
        quickExercise: {
          prompt: 'ກວດເບິ່ງໜ້າໂປຣໄຟລ໌ຂອງທ່ານ: ໃຫ້ແນ່ໃຈວ່າບໍ່ມີເບີໂທລະສັບ, ໄອດີ Line, WhatsApp, Facebook Link ປາກົດຢູ່.',
          placeholder: 'ຢືນຢັນການກວດສອບ (ເຊັ່ນ: "ຂ້ອຍກວດສອບແລ້ວ ປອດໄພຮ້ອຍສ່ວນຮ້ອຍ")',
          guidance: 'ຂໍ້ມູນເຫຼົ່ານີ້ຄວນແລກປ່ຽນກັນໃນພາຍຫຼັງ ຫຼັງຈາກທີ່ໄດ້ຄຸຍກັນຈົນໝັ້ນໃຈໃນລະດັບໜຶ່ງແລ້ວ.'
        }
      },
      fr: {
        id: 'm1-ch4',
        title: '4. Sécurité et protection de la vie privée',
        explanation: 'Votre sécurité est absolue. Tout en rendant votre profil attrayant, veillez à ne pas divulguer d\'informations sensibles qui pourraient vous mettre en danger.\n\nFaire preuve de discernement et de retenue n\'altère en rien votre charme, bien au contraire : cela démontre que vous êtes une femme mature qui sait se respecter et se protéger.',
        bulletPoints: [
          'Pas d\'adresse précise : indiquez seulement la ville ou la province (ex : Vientiane ou Luang Prabang).',
          'Pas de coordonnées directes : évitez d\'afficher votre numéro de téléphone ou vos réseaux sociaux en public.',
          'Discrétion financière : ne parlez jamais de vos difficultés financières pour éviter d\'attirer des profils malveillants.',
          'Confidentialité professionnelle : ne donnez pas le nom précis de votre employeur actuel.'
        ],
        practicalTip: 'La sécurité passe avant tout. Un homme bienveillant comprendra et respectera votre prudence.',
        quickExercise: {
          prompt: 'Passez en revue les détails de votre profil public et assurez-vous qu\'aucune information de contact direct n\'apparaît.',
          placeholder: 'Confirmez votre vérification ici...',
          guidance: 'Les coordonnées personnelles doivent être partagées de façon privée uniquement, après avoir établi un lien de confiance.'
        }
      }
    },
    {
      id: 'm1-ch5',
      order: 5,
      lo: {
        id: 'm1-ch5',
        title: '5. ວິທີສ້າງເນື້ອຫາສ່ວນບຸກຄະລິກກະພາບ ແລະ ວຽກອະດິເລກຢ່າງມີສະເໜ່',
        explanation: 'ການເລົ່າເລື່ອງວຽກອະດິເລກ ຫຼື ສິ່ງທີ່ມັກເຮັດບໍ່ແມ່ນພຽງແຕ່ການຂຽນລາຍການສິ່ງທີ່ເຮັດ ແຕ່ຄືການສ້າງຮູບພາບໃນຄວາມຄິດຂອງຜູ້ອ່ານ. ແທນທີ່ຈະເວົ້າວ່າ "ຂ້ອຍມັກແຕ່ງກິນ", ໃຫ້ອະທິບາຍຄວາມຮູ້ສຶກ ຫຼື ບັນຍາກາດທີ່ເກີດຂຶ້ນ ເຊິ່ງຈະຊ່ວຍໃຫ້ຜູ້ຊາຍຮູ້ສຶກເຖິງວິຖີຊີວິດ ແລະ ຄວາມອົບອຸ່ນຂອງທ່ານ.\n\nການແບ່ງປັນວຽກອະດິເລກຍັງຊ່ວຍສະແດງອອກເຖິງຄວາມສົມດຸນໃນຊີວິດ ເຮັດໃຫ້ຜູ້ອ່ານຮູ້ສຶກວ່າທ່ານເປັນຄົນທີ່ໜ້າຮັກ ແລະ ມີຄວາມສຸກກັບສິ່ງອ້ອມຕົວ.',
        bulletPoints: [
          'ເລືອກສິ່ງທີ່ສະທ້ອນຄວາມສຸກທີ່ແທ້ຈິງ: ບໍ່ວ່າຈະເປັນການຍ່າງຫຼິ້ນໃນທຳມະຊາດ, การອ່ານປຶ້ມ ຫຼື ການເຮັດອາຫານລາວ',
          'ໃຊ້ເຕັກນິກການເລົ່າເລື່ອງ (Show, Don\'t Tell): ບອກເລົ່າຄວາມສຸກນ້ອຍໆ ເຊັ່ນ "ມັກກິ່ນຫອມຂອງກາເຟສົດໃນຕອນເຊົ້າ"',
          'ເປີດໂອກາດໃຫ້ມີສ່ວນຮ່ວມ: ສ້າງຄຳຖາມຊວນຄຸຍ ເຊັ່ນ "ແລ້ວເຈົ້າເດ ມັກກາເຟ ຫຼື ຊາ?"',
          'ສະແດງຄວາມມັກທີ່ຫຼາກຫຼາຍ: ເຊັ່ນ ການຮັກສຸຂະພາບ, ການຮຽນຮູ້ພາສາ ຫຼື ການຟັງເພງເບົາໆ'
        ],
        practicalTip: 'ເລືອກວຽກອະດິເລກ 2-3 ຢ່າງທີ່ສະແດງອອກເຖິງຄວາມສົມດຸນໃນຊີວິດ ເຊັ່ນ ກິດຈະກຳກາງແຈ້ງ ແລະ ກິດຈະກຳທີ່ຜ່ອນຄາຍໃນເຮືອນ.',
        quickExercise: {
          prompt: 'ລອງອະທິບາຍວຽກອະດິເລກທີ່ທ່ານມັກທີ່ສຸດ 1 ຢ່າງ ໂດຍໃຊ້ຄຳສັບທີ່ສື່ເຖິງຄວາມຮູ້ສຶກ ແລະ ບັນຍາກາດອົບອຸ່ນ.',
          placeholder: 'ຂຽນຄຳອະທິບາຍວຽກອະດິເລກຂອງທ່ານຢູ່ບ່ອນນີ້...',
          guidance: 'ແທນທີ່ຈະຂຽນວ່າ "ມັກອ່ານປຶ້ມ", ໃຫ້ລອງຂຽນວ່າ "ມັກອ່ານປຶ້ມດີໆ ພ້ອມກັບຈິບຊາຮ້ອນໆໃນຕອນບ່າຍທີ່ງຽບສະຫງົບ".'
        }
      },
      fr: {
        id: 'm1-ch5',
        title: '5. Comment décrire sa personnalité et ses loisirs avec charme',
        explanation: 'Parler de ses loisirs ne consiste pas à énumérer des activités, mais à créer des images dans l\'esprit du lecteur. Au lieu de simplement dire « j\'aime cuisiner », décrivez l\'atmosphère pour permettre à l\'homme de ressentir votre douceur de vivre.\n\nPartager des loisirs sains et équilibrés montre que vous êtes épanouie et positive, ce qui donne envie d\'entrer dans votre quotidien.',
        bulletPoints: [
          'Sélectionner des passions sincères : balades en nature, lecture, recettes traditionnelles.',
          'Utiliser l\'évocation sensorielle : décrivez des petits bonheurs (ex: « l\'odeur du café frais le matin »).',
          'Créer une passerelle : invitez-le à partager ses goûts (ex: « Et vous, plutôt thé ou café ? »).',
          'Varier les plaisirs : montrez un intérêt pour le bien-être, l\'apprentissage ou les arts simples.'
        ],
        practicalTip: 'Mettez en avant 2 ou 3 activités qui montrent un bel équilibre de vie (une activité active, une plus calme).',
        quickExercise: {
          prompt: 'Décrivez votre loisir favori en y associant une sensation agréable de calme et de partage.',
          placeholder: 'Décrivez votre passion ici...',
          guidance: 'Au lieu de « J\'aime lire », préférez « J\'aime me plonger dans un bon livre avec une tasse de thé chaud l\'après-midi ».'
        }
      }
    },
    {
      id: 'm1-ch6',
      order: 6,
      lo: {
        id: 'm1-ch6',
        title: '6. ການເລືອກຮູບພາບໂປຣໄຟລ໌ທີ່ສະທ້ອນຄວາມຈິງໃຈ ແລະ ຄວາມເປັນທຳມະຊາດ',
        explanation: 'ຮູບພາບຄືຄວາມປະທັບໃຈທຳອິດທີ່ຜູ້ຊາຍຈະໄດ້ເຫັນ. ການເລືອກຮູບພາບທີ່ສະທ້ອນຄວາມເປັນທຳມະຊາດ, ມີຮອຍຍິ້ມທີ່ຈິງໃຈ ແລະ ແສງສະຫວ່າງທີ່ດີ ຈະຊ່ວຍດຶງດູດຜູ້ຊາຍທີ່ມີເຈດຕະນາສ້າງຄວາມສຳພັນທີ່ດີຢ່າງແທ້ຈິງ.\n\nຮູບພາບທີ່ຖືກຕົບແຕ່ງ ຫຼື ຜ່ານແອັບປ່ຽນແປງໃບໜ້າຫຼາຍເກີນໄປອາດເຮັດໃຫ້ຜູ້ຊາຍຮູ້ສຶກວ່າຂາດຄວາມຈິງໃຈ. ຈົ່ງໝັ້ນໃຈໃນຄວາມງາມ ແລະ ຄວາມເປັນທຳມະຊາດທີ່ເປັນເອກະລັກຂອງທ່ານ.',
        bulletPoints: [
          'ເນັ້ນຮອຍຍິ້ມທີ່ເປັນທຳມະຊາດ: ຫຼີກລ່ຽງຮູບພາບທີ່ໜ້າເຄັ່ງຕຶງ ຫຼື ບໍ່ສະແດງອາລົມ',
          'ເລືອກແສງສະຫວ່າງທີ່ດີ: ຫຼີກລ່ຽງການໃຊ້ຟິວເຕີທີ່ປ່ຽນແປງໃບໜ້າຫຼາຍເກີນໄປ ເພາະມັນອາດຫຼຸດຜ່ອນຄວາມໄວ້ວາງໃຈ',
          'ຮູບພາບທີ່ຫຼາກຫຼາຍ: ຄວນມີທັງຮູບໃກ້ຊິດ (Portrait) ແລະ ຮູບທີ່ສະແດງກິດຈະກຳຕ່າງໆ ເພື່ອບອກເລົ່າເລື່ອງລາວ',
          'ການແຕ່ງກາຍທີ່ສຸພາບ: ການແຕ່ງກາຍທີ່ຮຽບຮ້ອຍ ແລະ ເໝາະສົມກັບສະຖານທີ່ຈະສະທ້ອນເຖິງການໃຫ້ກຽດຕົນເອງ'
        ],
        practicalTip: 'ຮູບພາບທີ່ດີທີ່ສຸດແມ່ນຮູບທີ່ຖ່າຍໂດຍຄົນອື່ນໃນຂະນະທີ່ທ່ານກຳລັງຍິ້ມຢ່າງມີຄວາມສຸກ ໂດຍບໍ່ໄດ້ຕັ້ງໃຈໂພສທ່າຫຼາຍເກີນໄປ.',
        quickExercise: {
          prompt: 'ລອງເລືອກຮູບພາບຂອງທ່ານ 3 ຮູບທີ່ມີຮອຍຍິ້ມທຳມະຊາດທີ່ສຸດ ແລະ ແສງສະຫວ່າງດີ ໂດຍບໍ່ໃຊ້ຟິວເຕີ.',
          placeholder: 'ອະທິບາຍລັກສະນະຂອງ 3 ຮູບທີ່ທ່ານເລືອກ (ເຊັ່ນ: ຮູບຍິ້ມຢູ່ຮ້ານກາເຟ, ຮູບຍ່າງຫຼິ້ນໃນສວນ)...',
          guidance: 'ຮູບພາບທີ່ສະແດງເຖິງຄວາມສຸກໃນຊີວິດປະຈຳວັນຈະຊ່ວຍໃຫ້ຜູ້ຊາຍຮູ້ສຶກເຂົ້າເຖິງງ່າຍ ແລະ ເປັນມິດ.'
        }
      },
      fr: {
        id: 'm1-ch6',
        title: '6. Sélectionner des photos de profil sincères et naturelles',
        explanation: 'Vos photos constituent votre première impression. Choisir des photos naturelles, souriantes et bien éclairées attire des hommes mûrs et attentionnés qui recherchent l\'authenticité.\n\nDes photos trop retouchées avec des filtres déforment la réalité et peuvent créer une baisse de confiance. Soyez fière de votre beauté naturelle et de vos expressions spontanées.',
        bulletPoints: [
          'Mettre en avant un sourire authentique : évitez les expressions fermées ou trop posées.',
          'Éviter les filtres excessifs : les retouches excessives diminuent le sentiment de confiance.',
          'Varier les clichés : un portrait clair, une photo en extérieur et une photo illustrant un de vos loisirs.',
          'Style vestimentaire soigné : des vêtements simples mais élégants reflètent le respect de soi.'
        ],
        practicalTip: 'La meilleure photo est souvent prise par un proche lorsque vous riez spontanément.',
        quickExercise: {
          prompt: 'Sélectionnez 3 de vos photos récentes les plus lumineuses et naturelles, puis décrivez brièvement le contexte de chacune.',
          placeholder: 'Décrivez vos 3 photos ici...',
          guidance: 'Des photos prises sur le vif dans votre quotidien transmettent beaucoup plus de sincérité qu\'un shooting posé en studio.'
        }
      }
    }
  ]
};
