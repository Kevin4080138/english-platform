// ====================================================================
// DARSLAR MA'LUMOTI (kontent) — kod emas, faqat ma'lumot.
// Yangi dars/mavzu qo'shmoqchi bo'lsangiz, shu yerga yangi yozuv qo'shasiz.
// index.html bu ma'lumotni o'qib, darslarni o'zi chizadi.
// ====================================================================
const LESSONS = {
  "1": {
    "badge": "A1 · Lesson 1",
    "title": "👋 Greetings & Farewells — Salomlashish va Xayrlashish",
    "overview": {
      "en": "In English, greetings differ depending on the time of day and whether the situation is formal or informal. You use \"Good morning\" before noon, \"Good afternoon\" from noon to evening, and \"Good evening\" at night. When meeting someone for the first time, say \"Nice to meet you.\" When saying goodbye, you can use \"Goodbye\", \"See you later\", or the casual \"Bye!\"",
      "uz": "Ingliz tilida salomlashish kun vaqtiga va rasmiy/norasmiy vaziyatga qarab farqlanadi. Tushgacha \"Good morning\", tushdan kechgacha \"Good afternoon\", kechqurun \"Good evening\" ishlatiladi. Birinchi marta tanishganda \"Nice to meet you\" deyiladi."
    },
    "vocab": [
      {
        "title": "🕐 Time-based Greetings",
        "words": [
          {
            "en": "Good morning",
            "uz": "Xayrli tong (06:00–12:00)",
            "pron": "/ɡʊd ˈmɔːrnɪŋ/"
          },
          {
            "en": "Good afternoon",
            "uz": "Xayrli kun (12:00–18:00)",
            "pron": "/ɡʊd ˌæftərˈnuːn/"
          },
          {
            "en": "Good evening",
            "uz": "Xayrli kech (18:00–)",
            "pron": "/ɡʊd ˈiːvnɪŋ/"
          },
          {
            "en": "Good night",
            "uz": "Xayrli tun (uxlashdan oldin)",
            "pron": "/ɡʊd naɪt/"
          }
        ]
      },
      {
        "title": "😊 Informal Greetings",
        "words": [
          {
            "en": "Hello / Hi",
            "uz": "Salom",
            "pron": "/hɛˈloʊ/ /haɪ/"
          },
          {
            "en": "Hey!",
            "uz": "Hey! (juda norasmiy)",
            "pron": "/heɪ/"
          },
          {
            "en": "What's up?",
            "uz": "Nima gap?",
            "pron": "/wʌts ʌp/"
          },
          {
            "en": "How's it going?",
            "uz": "Ishlar qanday?",
            "pron": "/haʊz ɪt ˈɡoʊɪŋ/"
          },
          {
            "en": "Long time no see!",
            "uz": "Ko'rishmaganimizga ko'p bo'ldi!",
            "pron": "/lɔŋ taɪm noʊ siː/"
          }
        ]
      },
      {
        "title": "🏢 Formal Greetings",
        "words": [
          {
            "en": "How do you do?",
            "uz": "Qalay? (rasmiy, birinchi uchrashuv)",
            "pron": "/haʊ də juː duː/"
          },
          {
            "en": "How are you?",
            "uz": "Qalay siz?",
            "pron": "/haʊ ɑːr juː/"
          },
          {
            "en": "Nice to meet you",
            "uz": "Tanishganimdan xursandman",
            "pron": "/naɪs tə miːt juː/"
          },
          {
            "en": "Welcome!",
            "uz": "Xush kelibsiz!",
            "pron": "/ˈwɛlkəm/"
          }
        ]
      },
      {
        "title": "💬 Responses",
        "words": [
          {
            "en": "I'm fine, thanks",
            "uz": "Yaxshi, rahmat",
            "pron": "/aɪm faɪn θæŋks/"
          },
          {
            "en": "Not bad",
            "uz": "Yomon emas",
            "pron": "/nɒt bæd/"
          },
          {
            "en": "Pretty good",
            "uz": "Juda yaxshi (norasmiy)",
            "pron": "/ˈprɪti ɡʊd/"
          },
          {
            "en": "Can't complain",
            "uz": "Shikoyat yo'q",
            "pron": "/kɑːnt kəmˈpleɪn/"
          }
        ]
      },
      {
        "title": "👋 Farewells",
        "words": [
          {
            "en": "Goodbye / Bye",
            "uz": "Xayr",
            "pron": "/ɡʊdˈbaɪ/ /baɪ/"
          },
          {
            "en": "See you later",
            "uz": "Keyin ko'rishamiz",
            "pron": "/siː juː ˈleɪtər/"
          },
          {
            "en": "See you tomorrow",
            "uz": "Ertaga ko'rishamiz",
            "pron": "/siː juː təˈmɒroʊ/"
          },
          {
            "en": "Take care",
            "uz": "O'zingizga e'tibor bering",
            "pron": "/teɪk kɛr/"
          },
          {
            "en": "Have a good day",
            "uz": "Yaxshi kun tilayman",
            "pron": "/hæv ə ɡʊd deɪ/"
          },
          {
            "en": "See you soon",
            "uz": "Tez orada ko'rishamiz",
            "pron": "/siː juː suːn/"
          }
        ]
      }
    ],
    "story": "Har kuni ertalab uyg'onganimda <strong>good morning</strong> deb turamiz. Qo'shnim bilan ko'rishganda u \"<strong>hey, what's up?</strong>\" deydi, men esa \"<strong>pretty good, thanks!</strong>\" deb javob beraman. Maktabga borishda o'qituvchim bilan uchrashdim — u \"<strong>good morning, how are you?</strong>\" deb salomlashdim. U esa \"<strong>I'm fine, thank you. Welcome</strong> to today's class!\" dedi. Yangi o'quvchi keldi — men u bilan \"<strong>nice to meet you</strong>\" deb tanishdim. U \"<strong>nice to meet you too!</strong>\" dedi va eski do'stiga \"<strong>long time no see!</strong>\" deb qichqirdi. Dars tugagach, \"<strong>goodbye, have a good day!</strong>\" deb chiqib ketdik. Kechqurun \"<strong>good evening!</strong>\" deb ko'rishdik va uxlashdan oldin \"<strong>good night, take care!</strong>\" dedik.",
    "storyNote": "✅ Nechta so'z topdingiz? So'zlar bo'limiga qaytib tekshiring!",
    "test": [
      {
        "q_en": "Which greeting is used between 12:00–18:00?",
        "q_uz": "Soat 12:00–18:00 orasida qaysi salomlashish?",
        "options": [
          {
            "text": "Good morning",
            "correct": false
          },
          {
            "text": "Good afternoon",
            "correct": true
          },
          {
            "text": "Good evening",
            "correct": false
          }
        ]
      },
      {
        "q_en": "What does \"Nice to meet you\" mean?",
        "q_uz": "\"Nice to meet you\" nima degani?",
        "options": [
          {
            "text": "Xayr!",
            "correct": false
          },
          {
            "text": "Tanishganimdan xursandman",
            "correct": true
          },
          {
            "text": "Yaxshi kun!",
            "correct": false
          }
        ]
      },
      {
        "q_en": "Which is the most formal greeting?",
        "q_uz": "Qaysi eng rasmiy salomlashish?",
        "options": [
          {
            "text": "What's up?",
            "correct": false
          },
          {
            "text": "Hey!",
            "correct": false
          },
          {
            "text": "How do you do?",
            "correct": true
          }
        ]
      },
      {
        "q_en": "\"Xayrli kech\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "Good night",
            "correct": false
          },
          {
            "text": "Good evening",
            "correct": true
          },
          {
            "text": "Good morning",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Long time no see!\" is used when...",
        "q_uz": "\"Long time no see!\" qachon ishlatiladi?",
        "options": [
          {
            "text": "Har kuni ko'rishsangiz",
            "correct": false
          },
          {
            "text": "Ko'rishmaganimizga ko'p bo'lganda",
            "correct": true
          },
          {
            "text": "Birinchi marta tanishganda",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Not bad\" means?",
        "q_uz": "",
        "options": [
          {
            "text": "Yomon emas",
            "correct": true
          },
          {
            "text": "Yomon",
            "correct": false
          },
          {
            "text": "Juda yaxshi",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Keyin ko'rishamiz\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "See you tomorrow",
            "correct": false
          },
          {
            "text": "See you later",
            "correct": true
          },
          {
            "text": "See you soon",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Good night\" is used...",
        "q_uz": "\"Good night\" qachon?",
        "options": [
          {
            "text": "Kechqurun salomlashganda",
            "correct": false
          },
          {
            "text": "Uxlashdan oldin xayrlashganda",
            "correct": true
          },
          {
            "text": "Ertalab ko'rishganda",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Xush kelibsiz!\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "Thank you!",
            "correct": false
          },
          {
            "text": "Welcome!",
            "correct": true
          },
          {
            "text": "Excuse me!",
            "correct": false
          }
        ]
      },
      {
        "q_en": "Formal response to \"How are you?\"",
        "q_uz": "Rasmiy javob?",
        "options": [
          {
            "text": "I'm fine, thank you",
            "correct": true
          },
          {
            "text": "What's up!",
            "correct": false
          },
          {
            "text": "Good night!",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"O'zingizga e'tibor bering\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "Have a good day",
            "correct": false
          },
          {
            "text": "Take care",
            "correct": true
          },
          {
            "text": "See you soon",
            "correct": false
          }
        ]
      },
      {
        "q_en": "Which is most casual?",
        "q_uz": "Qaysi eng norasmiy?",
        "options": [
          {
            "text": "Good morning",
            "correct": false
          },
          {
            "text": "How are you?",
            "correct": false
          },
          {
            "text": "What's up?",
            "correct": true
          }
        ]
      },
      {
        "q_en": "\"Pretty good\" means?",
        "q_uz": "",
        "options": [
          {
            "text": "Ancha yaxshi",
            "correct": true
          },
          {
            "text": "Yomon emas",
            "correct": false
          },
          {
            "text": "Yaxshi emas",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Can't complain\" means?",
        "q_uz": "",
        "options": [
          {
            "text": "Shikoyatim bor",
            "correct": false
          },
          {
            "text": "Shikoyat yo'q / Yaxshi",
            "correct": true
          },
          {
            "text": "Juda yomon",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Have a good day\" is said when?",
        "q_uz": "",
        "options": [
          {
            "text": "Salomlashganda",
            "correct": false
          },
          {
            "text": "Xayrlashganda",
            "correct": true
          },
          {
            "text": "Birinchi tanishganda",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Ertaga ko'rishamiz\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "See you later",
            "correct": false
          },
          {
            "text": "See you tomorrow",
            "correct": true
          },
          {
            "text": "See you soon",
            "correct": false
          }
        ]
      },
      {
        "q_en": "Greeting for the first meeting?",
        "q_uz": "Birinchi uchrashuv uchun?",
        "options": [
          {
            "text": "How's it going?",
            "correct": false
          },
          {
            "text": "Nice to meet you",
            "correct": true
          },
          {
            "text": "Long time no see!",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"How's it going?\" means?",
        "q_uz": "",
        "options": [
          {
            "text": "Qayerga ketayapsiz?",
            "correct": false
          },
          {
            "text": "Ishlar qanday?",
            "correct": true
          },
          {
            "text": "Qachon kelasiz?",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Bye!\" is short for?",
        "q_uz": "",
        "options": [
          {
            "text": "Goodbye",
            "correct": true
          },
          {
            "text": "Good night",
            "correct": false
          },
          {
            "text": "Be careful",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"See you soon\" means?",
        "q_uz": "",
        "options": [
          {
            "text": "Ertaga ko'rishamiz",
            "correct": false
          },
          {
            "text": "Tez orada ko'rishamiz",
            "correct": true
          },
          {
            "text": "Keyin ko'rishamiz",
            "correct": false
          }
        ]
      }
    ],
    "fill": [
      {
        "q": "\"Good ______!\" — ertalab (06:00–12:00)",
        "answers": [
          "morning"
        ]
      },
      {
        "q": "\"Nice to ______ you!\" — birinchi tanishganda",
        "answers": [
          "meet"
        ]
      },
      {
        "q": "\"See you ______!\" — Ertaga ko'rishamiz",
        "answers": [
          "tomorrow"
        ]
      },
      {
        "q": "\"How ______ you?\" — Qalay siz?",
        "answers": [
          "are"
        ]
      },
      {
        "q": "\"I'm ______, thanks!\" — Yaxshi, rahmat",
        "answers": [
          "fine"
        ]
      },
      {
        "q": "\"Long ______ no see!\" — Ko'rishmaganimizga ko'p bo'ldi",
        "answers": [
          "time"
        ]
      },
      {
        "q": "\"Take ______!\" — O'zingizga e'tibor bering",
        "answers": [
          "care"
        ]
      },
      {
        "q": "\"Good ______!\" — Xayrli kech (18:00+)",
        "answers": [
          "evening"
        ]
      },
      {
        "q": "\"What's ______?\" — Nima gap?",
        "answers": [
          "up"
        ]
      },
      {
        "q": "\"Have a good ______!\" — Yaxshi kun tilayman",
        "answers": [
          "day"
        ]
      },
      {
        "q": "\"Good ______!\" — Xayrli tun (uxlashdan oldin)",
        "answers": [
          "night"
        ]
      },
      {
        "q": "\"Good ______!\" — Xayrli kun (12:00–18:00)",
        "answers": [
          "afternoon"
        ]
      },
      {
        "q": "\"See you ______!\" — Tez orada ko'rishamiz",
        "answers": [
          "soon"
        ]
      },
      {
        "q": "\"How ______ it going?\" — Ishlar qanday?",
        "answers": [
          "is"
        ]
      },
      {
        "q": "\"Not ______\" — Yomon emas",
        "answers": [
          "bad"
        ]
      },
      {
        "q": "\"Can't ______\" — Shikoyat yo'q",
        "answers": [
          "complain"
        ]
      },
      {
        "q": "\"Pretty ______\" — Ancha yaxshi",
        "answers": [
          "good"
        ]
      },
      {
        "q": "\"______!\" — Xush kelibsiz",
        "answers": [
          "welcome"
        ]
      },
      {
        "q": "\"I'm ______, thank you\" — Yaxshi, rahmat (rasmiy)",
        "answers": [
          "fine"
        ]
      },
      {
        "q": "\"See you ______!\" — Keyin ko'rishamiz",
        "answers": [
          "later"
        ]
      }
    ],
    "translate": [
      {
        "q": "\"Xayrli tong!\" — inglizchaga o'giring",
        "answers": [
          "good morning",
          "good morning!"
        ]
      },
      {
        "q": "\"Tanishganimdan xursandman\" — inglizchaga",
        "answers": [
          "nice to meet you",
          "nice to meet you!"
        ]
      },
      {
        "q": "\"O'zingizga e'tibor bering\" — inglizchaga",
        "answers": [
          "take care",
          "take care!"
        ]
      },
      {
        "q": "\"Xush kelibsiz!\" — inglizchaga",
        "answers": [
          "welcome",
          "welcome!"
        ]
      },
      {
        "q": "\"Ko'rishmaganimizga ko'p bo'ldi!\" — inglizchaga",
        "answers": [
          "long time no see",
          "long time no see!"
        ]
      },
      {
        "q": "\"Ishlar qanday?\" — inglizchaga",
        "answers": [
          "how's it going",
          "how's it going?",
          "how is it going"
        ]
      },
      {
        "q": "\"Yaxshi kun tilayman\" — inglizchaga",
        "answers": [
          "have a good day",
          "have a good day!"
        ]
      },
      {
        "q": "\"Tez orada ko'rishamiz\" — inglizchaga",
        "answers": [
          "see you soon",
          "see you soon!"
        ]
      },
      {
        "q": "\"Xayrli kech\" — inglizchaga",
        "answers": [
          "good evening",
          "good evening!"
        ]
      },
      {
        "q": "\"Xayrli tun\" — inglizchaga",
        "answers": [
          "good night",
          "good night!"
        ]
      },
      {
        "q": "\"Salom\" — inglizchaga (ixtiyoriy)",
        "answers": [
          "hello",
          "hi",
          "hello!",
          "hi!"
        ]
      },
      {
        "q": "\"Keyin ko'rishamiz\" — inglizchaga",
        "answers": [
          "see you later",
          "see you later!"
        ]
      },
      {
        "q": "\"Ertaga ko'rishamiz\" — inglizchaga",
        "answers": [
          "see you tomorrow",
          "see you tomorrow!"
        ]
      },
      {
        "q": "\"Qalay siz?\" — inglizchaga (rasmiy)",
        "answers": [
          "how are you",
          "how are you?"
        ]
      },
      {
        "q": "\"Yaxshi, rahmat\" — inglizchaga",
        "answers": [
          "i'm fine thanks",
          "i'm fine, thanks",
          "i am fine thanks"
        ]
      },
      {
        "q": "\"Xayr\" (rasmiy) — inglizchaga",
        "answers": [
          "goodbye",
          "goodbye!"
        ]
      },
      {
        "q": "\"Nima gap?\" — inglizchaga",
        "answers": [
          "what's up",
          "what's up?"
        ]
      },
      {
        "q": "\"Xayrli kun (12:00–18:00)\" — inglizchaga",
        "answers": [
          "good afternoon",
          "good afternoon!"
        ]
      },
      {
        "q": "\"Yomon emas\" — inglizchaga",
        "answers": [
          "not bad"
        ]
      },
      {
        "q": "\"Ancha yaxshi\" — inglizchaga",
        "answers": [
          "pretty good"
        ]
      }
    ],
    "wr": [
      {
        "label": "Salomlashish",
        "options": [
          {
            "text": "Helo",
            "correct": false
          },
          {
            "text": "Hello",
            "correct": true
          },
          {
            "text": "Hellow",
            "correct": false
          }
        ]
      },
      {
        "label": "Xayrli tong",
        "options": [
          {
            "text": "Goood morning",
            "correct": false
          },
          {
            "text": "Good morning",
            "correct": true
          },
          {
            "text": "Good mornin",
            "correct": false
          }
        ]
      },
      {
        "label": "Xayr (rasmiy)",
        "options": [
          {
            "text": "Goodby",
            "correct": false
          },
          {
            "text": "Goodbay",
            "correct": false
          },
          {
            "text": "Goodbye",
            "correct": true
          }
        ]
      },
      {
        "label": "Xush kelibsiz",
        "options": [
          {
            "text": "Welcom",
            "correct": false
          },
          {
            "text": "Welcome",
            "correct": true
          },
          {
            "text": "Wellcome",
            "correct": false
          }
        ]
      },
      {
        "label": "Qalay siz?",
        "options": [
          {
            "text": "How r you",
            "correct": false
          },
          {
            "text": "How are you",
            "correct": true
          },
          {
            "text": "How r u?",
            "correct": false
          }
        ]
      },
      {
        "label": "Tanishganimdan xursandman",
        "options": [
          {
            "text": "Nise to meet you",
            "correct": false
          },
          {
            "text": "Nice to meet you",
            "correct": true
          },
          {
            "text": "Nice to met you",
            "correct": false
          }
        ]
      },
      {
        "label": "Keyin ko'rishamiz",
        "options": [
          {
            "text": "See you later",
            "correct": true
          },
          {
            "text": "See you leter",
            "correct": false
          },
          {
            "text": "Se you later",
            "correct": false
          }
        ]
      },
      {
        "label": "E'tibor bering",
        "options": [
          {
            "text": "Teke care",
            "correct": false
          },
          {
            "text": "Tack care",
            "correct": false
          },
          {
            "text": "Take care",
            "correct": true
          }
        ]
      },
      {
        "label": "Xayrli kech",
        "options": [
          {
            "text": "Good evning",
            "correct": false
          },
          {
            "text": "Good evening",
            "correct": true
          },
          {
            "text": "Good evenning",
            "correct": false
          }
        ]
      },
      {
        "label": "Xayrli tun",
        "options": [
          {
            "text": "Good nigt",
            "correct": false
          },
          {
            "text": "Good nite",
            "correct": false
          },
          {
            "text": "Good night",
            "correct": true
          }
        ]
      },
      {
        "label": "Ertaga ko'rishamiz",
        "options": [
          {
            "text": "See you tomoro",
            "correct": false
          },
          {
            "text": "See you tomorrow",
            "correct": true
          },
          {
            "text": "See you tomorow",
            "correct": false
          }
        ]
      },
      {
        "label": "Yaxshi kun tilayman",
        "options": [
          {
            "text": "Have a goog day",
            "correct": false
          },
          {
            "text": "Have a good day",
            "correct": true
          },
          {
            "text": "Hav a good day",
            "correct": false
          }
        ]
      },
      {
        "label": "Tez orada ko'rishamiz",
        "options": [
          {
            "text": "See you sune",
            "correct": false
          },
          {
            "text": "See you soon",
            "correct": true
          },
          {
            "text": "See you son",
            "correct": false
          }
        ]
      },
      {
        "label": "Ishlar qanday?",
        "options": [
          {
            "text": "How's it goeing",
            "correct": false
          },
          {
            "text": "How's it going",
            "correct": true
          },
          {
            "text": "Hows it going",
            "correct": false
          }
        ]
      },
      {
        "label": "Xayrli kun (12–18)",
        "options": [
          {
            "text": "Good afternune",
            "correct": false
          },
          {
            "text": "Good afternoon",
            "correct": true
          },
          {
            "text": "Good afternonn",
            "correct": false
          }
        ]
      },
      {
        "label": "Yaxshi, rahmat",
        "options": [
          {
            "text": "I'm fyne, thanks",
            "correct": false
          },
          {
            "text": "I'm fine, thanks",
            "correct": true
          },
          {
            "text": "Im fine thanks",
            "correct": false
          }
        ]
      },
      {
        "label": "Ko'rishmaganimizga ko'p bo'ldi",
        "options": [
          {
            "text": "Long time no sea",
            "correct": false
          },
          {
            "text": "Long time no see",
            "correct": true
          },
          {
            "text": "Long tyme no see",
            "correct": false
          }
        ]
      },
      {
        "label": "Ancha yaxshi",
        "options": [
          {
            "text": "Prety good",
            "correct": false
          },
          {
            "text": "Pretty good",
            "correct": true
          },
          {
            "text": "Pritty good",
            "correct": false
          }
        ]
      },
      {
        "label": "Shikoyat yo'q",
        "options": [
          {
            "text": "Can't complian",
            "correct": false
          },
          {
            "text": "Can't complain",
            "correct": true
          },
          {
            "text": "Cant complain",
            "correct": false
          }
        ]
      },
      {
        "label": "Yomon emas",
        "options": [
          {
            "text": "Not bead",
            "correct": false
          },
          {
            "text": "Not bad",
            "correct": true
          },
          {
            "text": "Not bade",
            "correct": false
          }
        ]
      }
    ]
  },
  "2": {
    "badge": "A1 · Lesson 2",
    "title": "📚 Classroom Language — Sinf va O'quv Tili",
    "overview": {
      "en": "In every English classroom, teachers and students use specific phrases to communicate. Teachers give instructions like \"Open your book\", \"Listen carefully\", or \"Raise your hand.\" Students ask questions like \"Can you repeat that?\" or \"What does this mean?\" Knowing these phrases helps you participate actively in class and understand instructions better.",
      "uz": "Har bir ingliz tili darsida o'qituvchilar va o'quvchilar maxsus iboralar ishlatadi. O'qituvchilar ko'rsatmalar beradi, o'quvchilar esa savollar beradi. Bu iboralarni bilish darsda faol qatnashishga yordam beradi."
    },
    "vocab": [
      {
        "title": "📣 Teacher Instructions",
        "words": [
          {
            "en": "Open your book",
            "uz": "Kitobingizni oching",
            "pron": "/ˈoʊpən jɔːr bʊk/"
          },
          {
            "en": "Close your book",
            "uz": "Kitobingizni yoping",
            "pron": "/kloʊz jɔːr bʊk/"
          },
          {
            "en": "Listen carefully",
            "uz": "Diqqat bilan tinglang",
            "pron": "/ˈlɪsən ˈkɛrfəli/"
          },
          {
            "en": "Repeat after me",
            "uz": "Mendan keyin takrorlang",
            "pron": "/rɪˈpiːt ˈæftər miː/"
          },
          {
            "en": "Sit down / Stand up",
            "uz": "O'tiring / Turing",
            "pron": "/sɪt daʊn/ /stænd ʌp/"
          },
          {
            "en": "Raise your hand",
            "uz": "Qo'lingizni ko'taring",
            "pron": "/reɪz jɔːr hænd/"
          },
          {
            "en": "Pay attention",
            "uz": "E'tibor bering",
            "pron": "/peɪ əˈtɛnʃən/"
          },
          {
            "en": "Write it down",
            "uz": "Yozib oling",
            "pron": "/raɪt ɪt daʊn/"
          },
          {
            "en": "Be quiet, please",
            "uz": "Iltimos, jimroq bo'ling",
            "pron": "/biː ˈkwaɪət pliːz/"
          },
          {
            "en": "Do your homework",
            "uz": "Uyga vazifangizni bajaring",
            "pron": "/duː jɔːr ˈhoʊmwɜːrk/"
          }
        ]
      },
      {
        "title": "🙋 Student Phrases",
        "words": [
          {
            "en": "Can you repeat that?",
            "uz": "Takrorlaysizmi?",
            "pron": "/kæn juː rɪˈpiːt ðæt/"
          },
          {
            "en": "What does this mean?",
            "uz": "Bu nima degani?",
            "pron": "/wʌt dʌz ðɪs miːn/"
          },
          {
            "en": "I don't understand",
            "uz": "Tushunmadim",
            "pron": "/aɪ doʊnt ˌʌndərˈstænd/"
          },
          {
            "en": "May I go out?",
            "uz": "Chiqib ketsam bo'ladimi?",
            "pron": "/meɪ aɪ ɡoʊ aʊt/"
          },
          {
            "en": "Can I ask a question?",
            "uz": "Savol bersam bo'ladimi?",
            "pron": "/kæn aɪ ɑːsk ə ˈkwɛstʃən/"
          },
          {
            "en": "How do you spell it?",
            "uz": "Qanday yoziladi?",
            "pron": "/haʊ duː juː spɛl ɪt/"
          }
        ]
      },
      {
        "title": "🏫 Classroom Objects",
        "words": [
          {
            "en": "Textbook",
            "uz": "Darslik",
            "pron": "/ˈtɛkstbʊk/"
          },
          {
            "en": "Notebook",
            "uz": "Daftar",
            "pron": "/ˈnoʊtbʊk/"
          },
          {
            "en": "Whiteboard",
            "uz": "Oq taxtacha",
            "pron": "/ˈwaɪtbɔːrd/"
          },
          {
            "en": "Homework",
            "uz": "Uyga vazifa",
            "pron": "/ˈhoʊmwɜːrk/"
          },
          {
            "en": "Pencil / Pen",
            "uz": "Qalam / Ruchka",
            "pron": "/ˈpɛnsəl/ /pɛn/"
          },
          {
            "en": "Eraser / Ruler",
            "uz": "O'chirg'ich / Chizg'ich",
            "pron": "/ɪˈreɪzər/ /ˈruːlər/"
          }
        ]
      },
      {
        "title": "⭐ Teacher Feedback",
        "words": [
          {
            "en": "Well done!",
            "uz": "Barakalla!",
            "pron": "/wɛl dʌn/"
          },
          {
            "en": "Good job!",
            "uz": "Yaxshi!",
            "pron": "/ɡʊd dʒɒb/"
          },
          {
            "en": "Try again",
            "uz": "Yana urinib ko'ring",
            "pron": "/traɪ əˈɡɛn/"
          },
          {
            "en": "Almost right",
            "uz": "Deyarli to'g'ri",
            "pron": "/ˈɔːlmoʊst raɪt/"
          }
        ]
      }
    ],
    "story": "Dars boshlanishi bilan o'qituvchi \"<strong>Good morning, everyone! Sit down</strong>, please\" dedi. Hammamiz o'tirdik. \"<strong>Open your textbook</strong> to page 24 and <strong>pay attention</strong>,\" dedi u. Men <strong>notebook</strong>imni ham oldim. O'qituvchi \"<strong>Listen carefully</strong> and <strong>repeat after me</strong>\" dedi. Bir o'quvchi tushunmadi va \"<strong>Can you repeat that?</strong>\" deb so'radi. O'qituvchi \"<strong>Of course! How do you spell it?</strong>\" dedi va <strong>whiteboard</strong>ga yozdi. Keyin men \"<strong>What does this mean?</strong>\" deb so'radim. O'qituvchi \"<strong>Well done!</strong>\" dedi. Dars oxirida \"<strong>Do your homework</strong> and <strong>write it down</strong>\" dedi. Birdan \"<strong>May I go out?</strong>\" deb so'radi biri. \"<strong>Yes, but be quiet, please</strong>\" dedi o'qituvchi. \"<strong>Good job today!</strong>\" deb yakunladi.",
    "storyNote": "✅ Nechta so'z topdingiz? Yuqoridagi so'zlar bilan solishtiring!",
    "test": [
      {
        "q_en": "\"Kitobingizni oching\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "Open your book",
            "correct": true
          },
          {
            "text": "Close your book",
            "correct": false
          },
          {
            "text": "Read your book",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Well done!\" means?",
        "q_uz": "",
        "options": [
          {
            "text": "Barakalla!",
            "correct": true
          },
          {
            "text": "Yaxshi tun",
            "correct": false
          },
          {
            "text": "Yana urinib ko'ring",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Tushunmadim\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "I don't know",
            "correct": false
          },
          {
            "text": "I don't understand",
            "correct": true
          },
          {
            "text": "I can't hear",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Raise your hand\" means?",
        "q_uz": "",
        "options": [
          {
            "text": "Qo'lingizni silkiting",
            "correct": false
          },
          {
            "text": "Qo'lingizni ko'taring",
            "correct": true
          },
          {
            "text": "Qo'lingizni yuvingiz",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Daftar\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "Textbook",
            "correct": false
          },
          {
            "text": "Notebook",
            "correct": true
          },
          {
            "text": "Whiteboard",
            "correct": false
          }
        ]
      },
      {
        "q_en": "Student wants to leave — what to say?",
        "q_uz": "Darsdan chiqmoqchi — nima deydi?",
        "options": [
          {
            "text": "I don't understand",
            "correct": false
          },
          {
            "text": "May I go out?",
            "correct": true
          },
          {
            "text": "Be quiet!",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"How do you spell it?\" means?",
        "q_uz": "",
        "options": [
          {
            "text": "Qanday aytiladi?",
            "correct": false
          },
          {
            "text": "Qanday yoziladi?",
            "correct": true
          },
          {
            "text": "Nima degani?",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Oq taxtacha\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "Notebook",
            "correct": false
          },
          {
            "text": "Whiteboard",
            "correct": true
          },
          {
            "text": "Blackboard",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Write it down\" means?",
        "q_uz": "",
        "options": [
          {
            "text": "Yozib oling",
            "correct": true
          },
          {
            "text": "O'qib oling",
            "correct": false
          },
          {
            "text": "Qaytarib bering",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"E'tibor bering\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "Listen carefully",
            "correct": false
          },
          {
            "text": "Pay attention",
            "correct": true
          },
          {
            "text": "Repeat after me",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Almost right\" means?",
        "q_uz": "",
        "options": [
          {
            "text": "Mutlaqo to'g'ri",
            "correct": false
          },
          {
            "text": "Deyarli to'g'ri",
            "correct": true
          },
          {
            "text": "Noto'g'ri",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Savol bersam bo'ladimi?\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "Can I ask a question?",
            "correct": true
          },
          {
            "text": "What does this mean?",
            "correct": false
          },
          {
            "text": "May I go out?",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"O'chirg'ich\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "Ruler",
            "correct": false
          },
          {
            "text": "Eraser",
            "correct": true
          },
          {
            "text": "Pencil",
            "correct": false
          }
        ]
      },
      {
        "q_en": "Teacher says \"Try again\" when?",
        "q_uz": "Qachon aytiladi?",
        "options": [
          {
            "text": "O'quvchi to'g'ri javob berganda",
            "correct": false
          },
          {
            "text": "O'quvchi noto'g'ri javob berganda",
            "correct": true
          },
          {
            "text": "Dars boshlanishida",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Yana urinib ko'ring\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "Well done",
            "correct": false
          },
          {
            "text": "Try again",
            "correct": true
          },
          {
            "text": "Good job",
            "correct": false
          }
        ]
      }
    ],
    "fill": [
      {
        "q": "\"______ your hand\" — Qo'lingizni ko'taring",
        "answers": [
          "raise"
        ]
      },
      {
        "q": "\"I don't ______\" — Tushunmadim",
        "answers": [
          "understand"
        ]
      },
      {
        "q": "\"______ after me\" — Mendan keyin takrorlang",
        "answers": [
          "repeat"
        ]
      },
      {
        "q": "\"Pay ______\" — E'tibor bering",
        "answers": [
          "attention"
        ]
      },
      {
        "q": "\"Write it ______\" — Yozib oling",
        "answers": [
          "down"
        ]
      },
      {
        "q": "\"Be ______, please\" — Jimroq bo'ling",
        "answers": [
          "quiet"
        ]
      },
      {
        "q": "\"______ carefully\" — Diqqat bilan tinglang",
        "answers": [
          "listen"
        ]
      },
      {
        "q": "\"Well ______!\" — Barakalla!",
        "answers": [
          "done"
        ]
      },
      {
        "q": "\"______ your book\" — Kitobingizni oching",
        "answers": [
          "open"
        ]
      },
      {
        "q": "\"______ your book\" — Kitobingizni yoping",
        "answers": [
          "close"
        ]
      },
      {
        "q": "\"Do your ______\" — Uyga vazifangizni bajaring",
        "answers": [
          "homework"
        ]
      },
      {
        "q": "\"Good ______!\" — Yaxshi ish! Barakalla!",
        "answers": [
          "job"
        ]
      },
      {
        "q": "\"Try ______\" — Yana urinib ko'ring",
        "answers": [
          "again"
        ]
      },
      {
        "q": "\"______ down / Stand up\" — O'tiring / Turing",
        "answers": [
          "sit"
        ]
      },
      {
        "q": "\"What does this ______?\" — Bu nima degani?",
        "answers": [
          "mean"
        ]
      },
      {
        "q": "\"May I go ______?\" — Chiqib ketsam bo'ladimi?",
        "answers": [
          "out"
        ]
      },
      {
        "q": "\"How do you ______ it?\" — Qanday yoziladi?",
        "answers": [
          "spell"
        ]
      },
      {
        "q": "\"Almost ______\" — Deyarli to'g'ri",
        "answers": [
          "right"
        ]
      },
      {
        "q": "\"Can you ______ that?\" — Takrorlaysizmi?",
        "answers": [
          "repeat"
        ]
      },
      {
        "q": "\"Can I ask a ______?\" — Savol bersam bo'ladimi?",
        "answers": [
          "question"
        ]
      }
    ],
    "translate": [
      {
        "q": "\"Kitobingizni oching\" — inglizchaga",
        "answers": [
          "open your book",
          "open your textbook"
        ]
      },
      {
        "q": "\"Tushunmadim\" — inglizchaga",
        "answers": [
          "i don't understand",
          "i do not understand"
        ]
      },
      {
        "q": "\"Barakalla!\" — inglizchaga",
        "answers": [
          "well done",
          "well done!",
          "good job",
          "good job!"
        ]
      },
      {
        "q": "\"Qo'lingizni ko'taring\" — inglizchaga",
        "answers": [
          "raise your hand",
          "raise your hand!"
        ]
      },
      {
        "q": "\"Chiqib ketsam bo'ladimi?\" — inglizchaga",
        "answers": [
          "may i go out",
          "may i go out?"
        ]
      },
      {
        "q": "\"Uyga vazifangizni bajaring\" — inglizchaga",
        "answers": [
          "do your homework",
          "do your homework!"
        ]
      },
      {
        "q": "\"Diqqat bilan tinglang\" — inglizchaga",
        "answers": [
          "listen carefully"
        ]
      },
      {
        "q": "\"E'tibor bering\" — inglizchaga",
        "answers": [
          "pay attention"
        ]
      },
      {
        "q": "\"Yozib oling\" — inglizchaga",
        "answers": [
          "write it down"
        ]
      },
      {
        "q": "\"Iltimos, jimroq bo'ling\" — inglizchaga",
        "answers": [
          "be quiet please",
          "be quiet, please"
        ]
      },
      {
        "q": "\"Mendan keyin takrorlang\" — inglizchaga",
        "answers": [
          "repeat after me"
        ]
      },
      {
        "q": "\"Savol bersam bo'ladimi?\" — inglizchaga",
        "answers": [
          "can i ask a question",
          "can i ask a question?"
        ]
      },
      {
        "q": "\"Bu nima degani?\" — inglizchaga",
        "answers": [
          "what does this mean",
          "what does this mean?"
        ]
      },
      {
        "q": "\"Takrorlaysizmi?\" — inglizchaga",
        "answers": [
          "can you repeat that",
          "can you repeat that?"
        ]
      },
      {
        "q": "\"Darslik\" — inglizchaga",
        "answers": [
          "textbook"
        ]
      },
      {
        "q": "\"Daftar\" — inglizchaga",
        "answers": [
          "notebook"
        ]
      },
      {
        "q": "\"Oq taxtacha\" — inglizchaga",
        "answers": [
          "whiteboard"
        ]
      },
      {
        "q": "\"Deyarli to'g'ri\" — inglizchaga",
        "answers": [
          "almost right"
        ]
      },
      {
        "q": "\"Yana urinib ko'ring\" — inglizchaga",
        "answers": [
          "try again"
        ]
      },
      {
        "q": "\"Kitobingizni yoping\" — inglizchaga",
        "answers": [
          "close your book"
        ]
      }
    ],
    "wr": [
      {
        "label": "Diqqat bilan tinglang",
        "options": [
          {
            "text": "Lissen carefully",
            "correct": false
          },
          {
            "text": "Listen carefully",
            "correct": true
          },
          {
            "text": "Listen carefuly",
            "correct": false
          }
        ]
      },
      {
        "label": "Darslik",
        "options": [
          {
            "text": "Texbook",
            "correct": false
          },
          {
            "text": "Textbook",
            "correct": true
          },
          {
            "text": "Textbok",
            "correct": false
          }
        ]
      },
      {
        "label": "Uyga vazifa",
        "options": [
          {
            "text": "Homwork",
            "correct": false
          },
          {
            "text": "Homewerk",
            "correct": false
          },
          {
            "text": "Homework",
            "correct": true
          }
        ]
      },
      {
        "label": "E'tibor bering",
        "options": [
          {
            "text": "Pay attention",
            "correct": true
          },
          {
            "text": "Pay atention",
            "correct": false
          },
          {
            "text": "Pay attenshion",
            "correct": false
          }
        ]
      },
      {
        "label": "Mendan keyin takrorlang",
        "options": [
          {
            "text": "Repeet after me",
            "correct": false
          },
          {
            "text": "Repeat after me",
            "correct": true
          },
          {
            "text": "Repete after me",
            "correct": false
          }
        ]
      },
      {
        "label": "Oq taxtacha",
        "options": [
          {
            "text": "Whitbord",
            "correct": false
          },
          {
            "text": "Wightboard",
            "correct": false
          },
          {
            "text": "Whiteboard",
            "correct": true
          }
        ]
      },
      {
        "label": "Daftar",
        "options": [
          {
            "text": "Notebook",
            "correct": true
          },
          {
            "text": "Notbook",
            "correct": false
          },
          {
            "text": "Notebok",
            "correct": false
          }
        ]
      },
      {
        "label": "Qo'lingizni ko'taring",
        "options": [
          {
            "text": "Raze your hand",
            "correct": false
          },
          {
            "text": "Raiz your hand",
            "correct": false
          },
          {
            "text": "Raise your hand",
            "correct": true
          }
        ]
      },
      {
        "label": "Barakalla!",
        "options": [
          {
            "text": "Wel done",
            "correct": false
          },
          {
            "text": "Well done",
            "correct": true
          },
          {
            "text": "Well donn",
            "correct": false
          }
        ]
      },
      {
        "label": "Jimroq bo'ling",
        "options": [
          {
            "text": "Be queit",
            "correct": false
          },
          {
            "text": "Be quiet",
            "correct": true
          },
          {
            "text": "Be quyet",
            "correct": false
          }
        ]
      },
      {
        "label": "Savol bersam bo'ladimi?",
        "options": [
          {
            "text": "Can I ask a questoin",
            "correct": false
          },
          {
            "text": "Can I ask a question",
            "correct": true
          },
          {
            "text": "Can I aske a question",
            "correct": false
          }
        ]
      },
      {
        "label": "O'tiring",
        "options": [
          {
            "text": "Sit dawn",
            "correct": false
          },
          {
            "text": "Sit down",
            "correct": true
          },
          {
            "text": "Sit doun",
            "correct": false
          }
        ]
      },
      {
        "label": "Yozib oling",
        "options": [
          {
            "text": "Write it doun",
            "correct": false
          },
          {
            "text": "Write it down",
            "correct": true
          },
          {
            "text": "Writ it down",
            "correct": false
          }
        ]
      },
      {
        "label": "Bu nima degani?",
        "options": [
          {
            "text": "What does this meen",
            "correct": false
          },
          {
            "text": "What does this mean",
            "correct": true
          },
          {
            "text": "What dose this mean",
            "correct": false
          }
        ]
      },
      {
        "label": "O'chirg'ich",
        "options": [
          {
            "text": "Erazer",
            "correct": false
          },
          {
            "text": "Eraser",
            "correct": true
          },
          {
            "text": "Eraesr",
            "correct": false
          }
        ]
      },
      {
        "label": "Chizg'ich",
        "options": [
          {
            "text": "Rulur",
            "correct": false
          },
          {
            "text": "Ruler",
            "correct": true
          },
          {
            "text": "Ruller",
            "correct": false
          }
        ]
      },
      {
        "label": "Qalam",
        "options": [
          {
            "text": "Pencill",
            "correct": false
          },
          {
            "text": "Pencil",
            "correct": true
          },
          {
            "text": "Pensil",
            "correct": false
          }
        ]
      },
      {
        "label": "Yana urinib ko'ring",
        "options": [
          {
            "text": "Try agen",
            "correct": false
          },
          {
            "text": "Try again",
            "correct": true
          },
          {
            "text": "Tri again",
            "correct": false
          }
        ]
      },
      {
        "label": "Deyarli to'g'ri",
        "options": [
          {
            "text": "Allmost right",
            "correct": false
          },
          {
            "text": "Almost right",
            "correct": true
          },
          {
            "text": "Almoast right",
            "correct": false
          }
        ]
      },
      {
        "label": "Qanday yoziladi?",
        "options": [
          {
            "text": "How do you spel it",
            "correct": false
          },
          {
            "text": "How do you spell it",
            "correct": true
          },
          {
            "text": "How do you spill it",
            "correct": false
          }
        ]
      }
    ]
  },
  "3": {
    "badge": "A1 · Lesson 3",
    "title": "🔢 Numbers, Dates & Time — Sonlar, Sanalar va Vaqt",
    "overview": {
      "en": "Numbers, dates and time are essential in everyday English. Cardinal numbers (one, two, three...) are used for counting. Ordinal numbers (first, second, third...) are used for dates and order. To tell the time, say \"It's [hour] o'clock\" for exact hours, \"half past [hour]\" for 30 minutes, and \"quarter to [hour]\" for 15 minutes before. Days and months are always capitalized in English.",
      "uz": "Sonlar, sanalar va vaqt kundalik ingliz tilida juda muhim. Kardinal sonlar (one, two...) sanash uchun, tartib sonlar (first, second...) sanalar uchun ishlatiladi. Vaqtni aytishda \"o'clock\", \"half past\", \"quarter to\" iboralari ishlatiladi. Kun va oy nomlari doimo katta harf bilan boshlanadi."
    },
    "vocab": [
      {
        "title": "🔢 Cardinal Numbers 1–20",
        "words": [
          {
            "en": "1 — One",
            "uz": "Bir",
            "pron": "/wʌn/"
          },
          {
            "en": "2 — Two",
            "uz": "Ikki",
            "pron": "/tuː/"
          },
          {
            "en": "3 — Three",
            "uz": "Uch",
            "pron": "/θriː/"
          },
          {
            "en": "4 — Four",
            "uz": "To'rt",
            "pron": "/fɔːr/"
          },
          {
            "en": "5 — Five",
            "uz": "Besh",
            "pron": "/faɪv/"
          },
          {
            "en": "6 — Six",
            "uz": "Olti",
            "pron": "/sɪks/"
          },
          {
            "en": "7 — Seven",
            "uz": "Yetti",
            "pron": "/ˈsɛvən/"
          },
          {
            "en": "8 — Eight",
            "uz": "Sakkiz",
            "pron": "/eɪt/"
          },
          {
            "en": "9 — Nine",
            "uz": "To'qqiz",
            "pron": "/naɪn/"
          },
          {
            "en": "10 — Ten",
            "uz": "O'n",
            "pron": "/tɛn/"
          },
          {
            "en": "11 — Eleven",
            "uz": "O'n bir",
            "pron": "/ɪˈlɛvən/"
          },
          {
            "en": "12 — Twelve",
            "uz": "O'n ikki",
            "pron": "/twɛlv/"
          },
          {
            "en": "13 — Thirteen",
            "uz": "O'n uch",
            "pron": "/θɜːrˈtiːn/"
          },
          {
            "en": "14 — Fourteen",
            "uz": "O'n to'rt",
            "pron": "/fɔːrˈtiːn/"
          },
          {
            "en": "15 — Fifteen",
            "uz": "O'n besh",
            "pron": "/fɪfˈtiːn/"
          },
          {
            "en": "16 — Sixteen",
            "uz": "O'n olti",
            "pron": "/sɪksˈtiːn/"
          },
          {
            "en": "17 — Seventeen",
            "uz": "O'n yetti",
            "pron": "/ˌsɛvənˈtiːn/"
          },
          {
            "en": "18 — Eighteen",
            "uz": "O'n sakkiz",
            "pron": "/eɪˈtiːn/"
          },
          {
            "en": "19 — Nineteen",
            "uz": "O'n to'qqiz",
            "pron": "/ˌnaɪnˈtiːn/"
          },
          {
            "en": "20 — Twenty",
            "uz": "Yigirma",
            "pron": "/ˈtwɛnti/"
          }
        ]
      },
      {
        "title": "🔢 Big Numbers — Katta sonlar",
        "words": [
          {
            "en": "30 — Thirty",
            "uz": "O'ttiz",
            "pron": "/ˈθɜːrti/"
          },
          {
            "en": "40 — Forty",
            "uz": "Qirq",
            "pron": "/ˈfɔːrti/"
          },
          {
            "en": "50 — Fifty",
            "uz": "Ellik",
            "pron": "/ˈfɪfti/"
          },
          {
            "en": "60 — Sixty",
            "uz": "Oltmish",
            "pron": "/ˈsɪksti/"
          },
          {
            "en": "70 — Seventy",
            "uz": "Yetmish",
            "pron": "/ˈsɛvənti/"
          },
          {
            "en": "80 — Eighty",
            "uz": "Sakson",
            "pron": "/ˈeɪti/"
          },
          {
            "en": "90 — Ninety",
            "uz": "To'qson",
            "pron": "/ˈnaɪnti/"
          },
          {
            "en": "100 — Hundred",
            "uz": "Yuz",
            "pron": "/ˈhʌndrəd/"
          },
          {
            "en": "1,000 — Thousand",
            "uz": "Ming",
            "pron": "/ˈθaʊzənd/"
          }
        ]
      },
      {
        "title": "🥇 Ordinal Numbers — Tartib sonlar",
        "words": [
          {
            "en": "1st — First",
            "uz": "Birinchi",
            "pron": "/fɜːrst/"
          },
          {
            "en": "2nd — Second",
            "uz": "Ikkinchi",
            "pron": "/ˈsɛkənd/"
          },
          {
            "en": "3rd — Third",
            "uz": "Uchinchi",
            "pron": "/θɜːrd/"
          },
          {
            "en": "4th — Fourth",
            "uz": "To'rtinchi",
            "pron": "/fɔːrθ/"
          },
          {
            "en": "5th — Fifth",
            "uz": "Beshinchi",
            "pron": "/fɪfθ/"
          },
          {
            "en": "10th — Tenth",
            "uz": "O'ninchi",
            "pron": "/tɛnθ/"
          },
          {
            "en": "20th — Twentieth",
            "uz": "Yigirmanchi",
            "pron": "/ˈtwɛntiɪθ/"
          },
          {
            "en": "21st — Twenty-first",
            "uz": "Yigirma birinchi",
            "pron": "/ˌtwɛnti ˈfɜːrst/"
          },
          {
            "en": "Last / Next",
            "uz": "Oxirgi / Keyingi",
            "pron": "/lɑːst/ /nɛkst/"
          }
        ]
      },
      {
        "title": "🕐 Telling the Time — Vaqtni aytish",
        "words": [
          {
            "en": "What time is it?",
            "uz": "Soat necha?",
            "pron": "/wʌt taɪm ɪz ɪt/"
          },
          {
            "en": "It's 3 o'clock",
            "uz": "Soat uch (3:00)",
            "pron": "/ɪts θriː əˈklɒk/"
          },
          {
            "en": "Half past two",
            "uz": "Soat ikki yarim (2:30)",
            "pron": "/hɑːf pɑːst tuː/"
          },
          {
            "en": "Quarter past five",
            "uz": "Beshdan chorak o'tdi (5:15)",
            "pron": "/ˈkwɔːrtər pɑːst faɪv/"
          },
          {
            "en": "Quarter to seven",
            "uz": "Yettiga chorak qoldi (6:45)",
            "pron": "/ˈkwɔːrtər tuː ˈsɛvən/"
          },
          {
            "en": "In the morning (AM)",
            "uz": "Ertalab",
            "pron": "/ɪn ðə ˈmɔːrnɪŋ/"
          },
          {
            "en": "In the afternoon (PM)",
            "uz": "Tushdan keyin",
            "pron": "/ɪn ðə ˌæftərˈnuːn/"
          },
          {
            "en": "In the evening",
            "uz": "Kechqurun",
            "pron": "/ɪn ðə ˈiːvnɪŋ/"
          },
          {
            "en": "At midnight / At noon",
            "uz": "Yarim kechada / Tushda",
            "pron": "/æt ˈmɪdnaɪt/ /æt nuːn/"
          }
        ]
      },
      {
        "title": "📅 Days of the Week — Hafta kunlari",
        "words": [
          {
            "en": "Monday",
            "uz": "Dushanba",
            "pron": "/ˈmʌndeɪ/"
          },
          {
            "en": "Tuesday",
            "uz": "Seshanba",
            "pron": "/ˈtjuːzdeɪ/"
          },
          {
            "en": "Wednesday",
            "uz": "Chorshanba",
            "pron": "/ˈwɛnzdeɪ/"
          },
          {
            "en": "Thursday",
            "uz": "Payshanba",
            "pron": "/ˈθɜːrzdeɪ/"
          },
          {
            "en": "Friday",
            "uz": "Juma",
            "pron": "/ˈfraɪdeɪ/"
          },
          {
            "en": "Saturday",
            "uz": "Shanba",
            "pron": "/ˈsætərdeɪ/"
          },
          {
            "en": "Sunday",
            "uz": "Yakshanba",
            "pron": "/ˈsʌndeɪ/"
          },
          {
            "en": "Weekday / Weekend",
            "uz": "Ish kuni / Dam olish kuni",
            "pron": "/ˈwiːkdeɪ/ /ˈwiːkɛnd/"
          }
        ]
      },
      {
        "title": "📆 Months of the Year — Yil oylari",
        "words": [
          {
            "en": "January",
            "uz": "Yanvar",
            "pron": "/ˈdʒænjuɛri/"
          },
          {
            "en": "February",
            "uz": "Fevral",
            "pron": "/ˈfɛbruɛri/"
          },
          {
            "en": "March",
            "uz": "Mart",
            "pron": "/mɑːrtʃ/"
          },
          {
            "en": "April",
            "uz": "Aprel",
            "pron": "/ˈeɪprəl/"
          },
          {
            "en": "May",
            "uz": "May",
            "pron": "/meɪ/"
          },
          {
            "en": "June",
            "uz": "Iyun",
            "pron": "/dʒuːn/"
          },
          {
            "en": "July",
            "uz": "Iyul",
            "pron": "/dʒʊˈlaɪ/"
          },
          {
            "en": "August",
            "uz": "Avgust",
            "pron": "/ˈɔːɡəst/"
          },
          {
            "en": "September",
            "uz": "Sentabr",
            "pron": "/sɛpˈtɛmbər/"
          },
          {
            "en": "October",
            "uz": "Oktabr",
            "pron": "/ɒkˈtoʊbər/"
          },
          {
            "en": "November",
            "uz": "Noyabr",
            "pron": "/noʊˈvɛmbər/"
          },
          {
            "en": "December",
            "uz": "Dekabr",
            "pron": "/dɪˈsɛmbər/"
          }
        ]
      },
      {
        "title": "📅 Useful Date Expressions",
        "words": [
          {
            "en": "Today",
            "uz": "Bugun",
            "pron": "/təˈdeɪ/"
          },
          {
            "en": "Yesterday",
            "uz": "Kecha",
            "pron": "/ˈjɛstərdeɪ/"
          },
          {
            "en": "Tomorrow",
            "uz": "Ertaga",
            "pron": "/təˈmɒroʊ/"
          },
          {
            "en": "The day after tomorrow",
            "uz": "Indinga",
            "pron": "/ðə deɪ ˈɑːftər/"
          },
          {
            "en": "This week / Last week",
            "uz": "Bu hafta / O'tgan hafta",
            "pron": "/ðɪs wiːk/"
          },
          {
            "en": "This month / Next month",
            "uz": "Bu oy / Keyingi oy",
            "pron": "/ðɪs mʌnθ/"
          },
          {
            "en": "What day is today?",
            "uz": "Bugun qaysi kun?",
            "pron": "/wʌt deɪ ɪz/"
          },
          {
            "en": "What's today's date?",
            "uz": "Bugun nechanchi?",
            "pron": "/wʌts təˈdeɪz deɪt/"
          },
          {
            "en": "Week / Month / Year",
            "uz": "Hafta / Oy / Yil",
            "pron": "/wiːk/ /mʌnθ/ /jɪər/"
          }
        ]
      }
    ],
    "story": "Bugun <strong>Monday</strong>, <strong>the twenty-first</strong> of <strong>March</strong>. Ertalab soat <strong>eight o'clock</strong>da uyg'ondim. Soatimga qarasam <strong>quarter past eight</strong> ekan. <strong>In the morning</strong> maktabga ketdim. O'qituvchi \"<strong>what's today's date?</strong>\" deb so'radi. \"<strong>It's the twenty-first of March</strong>\" dedim. \"<strong>And what day is today?</strong>\" — \"<strong>It's Monday</strong>!\" dedim. Darsimiz <strong>Wednesday</strong> va <strong>Friday</strong> kuni ham bor. Keyingi hafta <strong>Tuesday, the twenty-eighth</strong>da imtihon. <strong>April</strong>da ta'til — atigi <strong>ten</strong> kun qoldi! Bu yil <strong>thirty</strong> ta yangi so'z o'rgandim — <strong>February</strong>dan beri. <strong>Last month</strong> esa <strong>fifty</strong> ta so'z o'rgangan edim. Kechqurun soat <strong>half past six</strong>da uyga qaytdim. Uxlashdan oldin soat <strong>quarter to eleven</strong> bo'ldi. <strong>Tomorrow</strong> yana <strong>Tuesday</strong> — <strong>six o'clock</strong>da turish kerak!",
    "storyNote": "✅ Nechta so'z topdingiz? Hamma bo'limlarni ko'rib chiqing!",
    "test": [
      {
        "q_en": "\"Bugun qaysi kun?\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "What time is it?",
            "correct": false
          },
          {
            "text": "What day is today?",
            "correct": true
          },
          {
            "text": "What's today's date?",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Half past three\" = ?",
        "q_uz": "",
        "options": [
          {
            "text": "2:45",
            "correct": false
          },
          {
            "text": "3:30",
            "correct": true
          },
          {
            "text": "3:00",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Chorshanba\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "Thursday",
            "correct": false
          },
          {
            "text": "Wednesday",
            "correct": true
          },
          {
            "text": "Tuesday",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Quarter to seven\" = ?",
        "q_uz": "",
        "options": [
          {
            "text": "7:15",
            "correct": false
          },
          {
            "text": "7:30",
            "correct": false
          },
          {
            "text": "6:45",
            "correct": true
          }
        ]
      },
      {
        "q_en": "\"Yuz\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "Thousand",
            "correct": false
          },
          {
            "text": "Hundred",
            "correct": true
          },
          {
            "text": "Ninety",
            "correct": false
          }
        ]
      },
      {
        "q_en": "Ordinal number for 3?",
        "q_uz": "",
        "options": [
          {
            "text": "Three",
            "correct": false
          },
          {
            "text": "Second",
            "correct": false
          },
          {
            "text": "Third",
            "correct": true
          }
        ]
      },
      {
        "q_en": "\"Yanvar\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "June",
            "correct": false
          },
          {
            "text": "January",
            "correct": true
          },
          {
            "text": "July",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Kecha\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "Tomorrow",
            "correct": false
          },
          {
            "text": "Yesterday",
            "correct": true
          },
          {
            "text": "Today",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Quarter past five\" = ?",
        "q_uz": "",
        "options": [
          {
            "text": "5:15",
            "correct": true
          },
          {
            "text": "4:45",
            "correct": false
          },
          {
            "text": "5:30",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Forty\" nechani anglatadi?",
        "q_uz": "",
        "options": [
          {
            "text": "O'ttiz",
            "correct": false
          },
          {
            "text": "Qirq",
            "correct": true
          },
          {
            "text": "Ellik",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Yakshanba\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "Saturday",
            "correct": false
          },
          {
            "text": "Sunday",
            "correct": true
          },
          {
            "text": "Monday",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"The day after tomorrow\" means?",
        "q_uz": "",
        "options": [
          {
            "text": "Kecha",
            "correct": false
          },
          {
            "text": "Ertaga",
            "correct": false
          },
          {
            "text": "Indinga",
            "correct": true
          }
        ]
      },
      {
        "q_en": "\"Sentabr\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "October",
            "correct": false
          },
          {
            "text": "September",
            "correct": true
          },
          {
            "text": "August",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Weekday\" means?",
        "q_uz": "",
        "options": [
          {
            "text": "Dam olish kuni",
            "correct": false
          },
          {
            "text": "Ish kuni",
            "correct": true
          },
          {
            "text": "Ta'til kuni",
            "correct": false
          }
        ]
      },
      {
        "q_en": "Ordinal number for 21?",
        "q_uz": "",
        "options": [
          {
            "text": "Twenty-one",
            "correct": false
          },
          {
            "text": "Twenty-first",
            "correct": true
          },
          {
            "text": "Twenty-second",
            "correct": false
          }
        ]
      }
    ],
    "fill": [
      {
        "q": "\"What ______ is it?\" — Soat necha?",
        "answers": [
          "time"
        ]
      },
      {
        "q": "\"It's three ______\" — Soat uch (3:00)",
        "answers": [
          "o'clock",
          "oclock"
        ]
      },
      {
        "q": "\"Half ______ six\" — Soat olti yarim (6:30)",
        "answers": [
          "past"
        ]
      },
      {
        "q": "\"______ to nine\" — To'qqizga chorak qoldi (8:45)",
        "answers": [
          "quarter"
        ]
      },
      {
        "q": "\"In the ______\" — Ertalab",
        "answers": [
          "morning"
        ]
      },
      {
        "q": "\"The ______ of March\" — Martning birinchisi",
        "answers": [
          "first"
        ]
      },
      {
        "q": "\"This ______\" — Bu hafta",
        "answers": [
          "week"
        ]
      },
      {
        "q": "\"______ month\" — Keyingi oy",
        "answers": [
          "next"
        ]
      },
      {
        "q": "\"Quarter ______ five\" — Beshdan chorak o'tdi (5:15)",
        "answers": [
          "past"
        ]
      },
      {
        "q": "\"In the ______\" — Tushdan keyin",
        "answers": [
          "afternoon"
        ]
      },
      {
        "q": "\"In the ______\" — Kechqurun",
        "answers": [
          "evening"
        ]
      },
      {
        "q": "\"______\" — Bugun",
        "answers": [
          "today"
        ]
      },
      {
        "q": "\"______\" — Ertaga",
        "answers": [
          "tomorrow"
        ]
      },
      {
        "q": "\"Last ______\" — O'tgan hafta",
        "answers": [
          "week"
        ]
      },
      {
        "q": "\"What day is ______?\" — Bugun qaysi kun?",
        "answers": [
          "today"
        ]
      },
      {
        "q": "\"At ______\" — Yarim kechada",
        "answers": [
          "midnight"
        ]
      },
      {
        "q": "\"The ______ after tomorrow\" — Indinga",
        "answers": [
          "day"
        ]
      },
      {
        "q": "\"3rd\" — tartib soni so'z bilan",
        "answers": [
          "third"
        ]
      },
      {
        "q": "\"2nd\" — tartib soni so'z bilan",
        "answers": [
          "second"
        ]
      },
      {
        "q": "\"What's today's ______?\" — Bugun nechanchi?",
        "answers": [
          "date"
        ]
      }
    ],
    "translate": [
      {
        "q": "\"Bugun qaysi kun?\" — inglizchaga",
        "answers": [
          "what day is today",
          "what day is today?"
        ]
      },
      {
        "q": "\"Soat necha?\" — inglizchaga",
        "answers": [
          "what time is it",
          "what time is it?"
        ]
      },
      {
        "q": "\"Kecha\" — inglizchaga",
        "answers": [
          "yesterday"
        ]
      },
      {
        "q": "\"Dushanba\" — inglizchaga",
        "answers": [
          "monday"
        ]
      },
      {
        "q": "\"Fevral\" — inglizchaga",
        "answers": [
          "february"
        ]
      },
      {
        "q": "\"Soat uch yarim (3:30)\" — inglizchaga",
        "answers": [
          "half past three"
        ]
      },
      {
        "q": "\"Indinga\" — inglizchaga",
        "answers": [
          "the day after tomorrow"
        ]
      },
      {
        "q": "\"Shanba\" — inglizchaga",
        "answers": [
          "saturday"
        ]
      },
      {
        "q": "\"Yakshanba\" — inglizchaga",
        "answers": [
          "sunday"
        ]
      },
      {
        "q": "\"Juma\" — inglizchaga",
        "answers": [
          "friday"
        ]
      },
      {
        "q": "\"Yanvar\" — inglizchaga",
        "answers": [
          "january"
        ]
      },
      {
        "q": "\"Dekabr\" — inglizchaga",
        "answers": [
          "december"
        ]
      },
      {
        "q": "\"Bugun\" — inglizchaga",
        "answers": [
          "today"
        ]
      },
      {
        "q": "\"Birinchi (tartib)\" — inglizchaga",
        "answers": [
          "first"
        ]
      },
      {
        "q": "\"Yetti (raqam)\" — inglizchaga",
        "answers": [
          "seven"
        ]
      },
      {
        "q": "\"Qirq (40)\" — inglizchaga",
        "answers": [
          "forty"
        ]
      },
      {
        "q": "\"Yuz (100)\" — inglizchaga",
        "answers": [
          "hundred",
          "a hundred",
          "one hundred"
        ]
      },
      {
        "q": "\"Seshanba\" — inglizchaga",
        "answers": [
          "tuesday"
        ]
      },
      {
        "q": "\"Soat to'rt yarim (4:30)\" — inglizchaga",
        "answers": [
          "half past four"
        ]
      },
      {
        "q": "\"Ish kuni\" — inglizchaga",
        "answers": [
          "weekday"
        ]
      }
    ],
    "wr": [
      {
        "label": "Dushanba",
        "options": [
          {
            "text": "Mondey",
            "correct": false
          },
          {
            "text": "Monday",
            "correct": true
          },
          {
            "text": "Munday",
            "correct": false
          }
        ]
      },
      {
        "label": "Chorshanba",
        "options": [
          {
            "text": "Wenesday",
            "correct": false
          },
          {
            "text": "Wednesday",
            "correct": true
          },
          {
            "text": "Wednisday",
            "correct": false
          }
        ]
      },
      {
        "label": "Payshanba",
        "options": [
          {
            "text": "Thuesday",
            "correct": false
          },
          {
            "text": "Thursday",
            "correct": true
          },
          {
            "text": "Thursdey",
            "correct": false
          }
        ]
      },
      {
        "label": "Yanvar",
        "options": [
          {
            "text": "Januery",
            "correct": false
          },
          {
            "text": "January",
            "correct": true
          },
          {
            "text": "Janury",
            "correct": false
          }
        ]
      },
      {
        "label": "Fevral",
        "options": [
          {
            "text": "Febuary",
            "correct": false
          },
          {
            "text": "February",
            "correct": true
          },
          {
            "text": "Februery",
            "correct": false
          }
        ]
      },
      {
        "label": "Sentabr",
        "options": [
          {
            "text": "Septembar",
            "correct": false
          },
          {
            "text": "September",
            "correct": true
          },
          {
            "text": "Septamber",
            "correct": false
          }
        ]
      },
      {
        "label": "Dekabr",
        "options": [
          {
            "text": "Decembar",
            "correct": false
          },
          {
            "text": "December",
            "correct": true
          },
          {
            "text": "Decembir",
            "correct": false
          }
        ]
      },
      {
        "label": "Soat (o'clock)",
        "options": [
          {
            "text": "O'clok",
            "correct": false
          },
          {
            "text": "O'clock",
            "correct": true
          },
          {
            "text": "O'clokk",
            "correct": false
          }
        ]
      },
      {
        "label": "Ertaga",
        "options": [
          {
            "text": "Tommorow",
            "correct": false
          },
          {
            "text": "Tomorrow",
            "correct": true
          },
          {
            "text": "Tomorow",
            "correct": false
          }
        ]
      },
      {
        "label": "Birinchi (tartib)",
        "options": [
          {
            "text": "Frist",
            "correct": false
          },
          {
            "text": "First",
            "correct": true
          },
          {
            "text": "Firts",
            "correct": false
          }
        ]
      },
      {
        "label": "Yigirma",
        "options": [
          {
            "text": "Tweny",
            "correct": false
          },
          {
            "text": "Twenty",
            "correct": true
          },
          {
            "text": "Tewnty",
            "correct": false
          }
        ]
      },
      {
        "label": "Kecha",
        "options": [
          {
            "text": "Yasterday",
            "correct": false
          },
          {
            "text": "Yesterday",
            "correct": true
          },
          {
            "text": "Yesterdey",
            "correct": false
          }
        ]
      },
      {
        "label": "O'ttiz",
        "options": [
          {
            "text": "Thirthy",
            "correct": false
          },
          {
            "text": "Thirty",
            "correct": true
          },
          {
            "text": "Thirety",
            "correct": false
          }
        ]
      },
      {
        "label": "Ellik",
        "options": [
          {
            "text": "Fiffty",
            "correct": false
          },
          {
            "text": "Fifty",
            "correct": true
          },
          {
            "text": "Fifity",
            "correct": false
          }
        ]
      },
      {
        "label": "Noyabr",
        "options": [
          {
            "text": "Novamber",
            "correct": false
          },
          {
            "text": "November",
            "correct": true
          },
          {
            "text": "Novembir",
            "correct": false
          }
        ]
      },
      {
        "label": "Avgust",
        "options": [
          {
            "text": "Agust",
            "correct": false
          },
          {
            "text": "August",
            "correct": true
          },
          {
            "text": "Augost",
            "correct": false
          }
        ]
      },
      {
        "label": "Shanba",
        "options": [
          {
            "text": "Saterday",
            "correct": false
          },
          {
            "text": "Saturday",
            "correct": true
          },
          {
            "text": "Satarday",
            "correct": false
          }
        ]
      },
      {
        "label": "Ikkinchi (tartib)",
        "options": [
          {
            "text": "Secund",
            "correct": false
          },
          {
            "text": "Second",
            "correct": true
          },
          {
            "text": "Secoind",
            "correct": false
          }
        ]
      },
      {
        "label": "O'n ikki (12)",
        "options": [
          {
            "text": "Tweleve",
            "correct": false
          },
          {
            "text": "Twelve",
            "correct": true
          },
          {
            "text": "Twelf",
            "correct": false
          }
        ]
      },
      {
        "label": "Ming (1000)",
        "options": [
          {
            "text": "Thosand",
            "correct": false
          },
          {
            "text": "Thousand",
            "correct": true
          },
          {
            "text": "Thousend",
            "correct": false
          }
        ]
      }
    ]
  },
  "4": {
    "badge": "A1 · Lesson 4",
    "title": "🔵 To Be Verb — \"To be\" Fe'li (am / is / are)",
    "overview": {
      "en": "The verb \"to be\" is the most important verb in English. It has three present tense forms: am (I am), is (he/she/it is), and are (you/we/they are). It is used to describe people, feelings, jobs, nationalities and locations. Negative: add \"not\" after the verb — \"I am not\", \"She isn't\", \"They aren't\". Questions: put the verb before the subject — \"Are you a student?\" / \"Is she happy?\"",
      "uz": "\"To be\" fe'li ingliz tilidagi eng muhim fe'ldir. Hozirgi zamonda uchta shakli bor: am (I), is (he/she/it), are (you/we/they). Odamlar, his-tuyg'ular, kasb, millat va joylashuvni tasvirlaydi. Inkor: fe'ldan keyin \"not\" — \"I'm not\", \"She isn't\", \"They aren't\". Savol: fe'l egadan oldin — \"Are you a student?\" / \"Is she happy?\""
    },
    "vocab": [
      {
        "title": "🔵 Tasdiq shakli — Affirmative",
        "words": [
          {
            "en": "I am (I'm)",
            "uz": "Men — man",
            "pron": "/aɪ æm/ /aɪm/"
          },
          {
            "en": "You are (You're)",
            "uz": "Siz — siz",
            "pron": "/juː ɑːr/ /jʊər/"
          },
          {
            "en": "He is (He's)",
            "uz": "U erkak — u",
            "pron": "/hiː ɪz/ /hiːz/"
          },
          {
            "en": "She is (She's)",
            "uz": "U ayol — u",
            "pron": "/ʃiː ɪz/ /ʃiːz/"
          },
          {
            "en": "It is (It's)",
            "uz": "U narsa/hayvon — u",
            "pron": "/ɪt ɪz/ /ɪts/"
          },
          {
            "en": "We are (We're)",
            "uz": "Biz — biz",
            "pron": "/wiː ɑːr/ /wɪər/"
          },
          {
            "en": "They are (They're)",
            "uz": "Ular — ular",
            "pron": "/ðeɪ ɑːr/ /ðɛər/"
          }
        ]
      },
      {
        "title": "🔴 Inkor shakli — Negative",
        "words": [
          {
            "en": "I am not (I'm not)",
            "uz": "Men emasman",
            "pron": "/aɪm nɒt/"
          },
          {
            "en": "You are not (aren't)",
            "uz": "Siz emassiz",
            "pron": "/ɑːrnt/"
          },
          {
            "en": "He is not (isn't)",
            "uz": "U erkak emas",
            "pron": "/ˈɪznt/"
          },
          {
            "en": "She is not (isn't)",
            "uz": "U ayol emas",
            "pron": "/ˈɪznt/"
          },
          {
            "en": "It is not (isn't)",
            "uz": "U narsa emas",
            "pron": "/ˈɪznt/"
          },
          {
            "en": "We are not (aren't)",
            "uz": "Biz emasmiz",
            "pron": "/ɑːrnt/"
          },
          {
            "en": "They are not (aren't)",
            "uz": "Ular emas",
            "pron": "/ɑːrnt/"
          }
        ]
      },
      {
        "title": "❓ Savol shakli — Questions",
        "words": [
          {
            "en": "Am I ...?",
            "uz": "Men ...manmi?",
            "pron": "/æm aɪ/"
          },
          {
            "en": "Are you ...?",
            "uz": "Siz ...sizma?",
            "pron": "/ɑːr juː/"
          },
          {
            "en": "Is he ...?",
            "uz": "U erkak ...mi?",
            "pron": "/ɪz hiː/"
          },
          {
            "en": "Is she ...?",
            "uz": "U ayol ...mi?",
            "pron": "/ɪz ʃiː/"
          },
          {
            "en": "Is it ...?",
            "uz": "U narsa ...mi?",
            "pron": "/ɪz ɪt/"
          },
          {
            "en": "Are we ...?",
            "uz": "Biz ...mizmiz?",
            "pron": "/ɑːr wiː/"
          },
          {
            "en": "Are they ...?",
            "uz": "Ular ...mi?",
            "pron": "/ɑːr ðeɪ/"
          }
        ]
      },
      {
        "title": "👤 Odamlarni tasvirlash — Describing People",
        "words": [
          {
            "en": "I'm a student",
            "uz": "Men o'quvchiman",
            "pron": "/aɪm ə ˈstjuːdənt/"
          },
          {
            "en": "She is a teacher",
            "uz": "U o'qituvchi",
            "pron": "/ʃiː ɪz ə ˈtiːtʃər/"
          },
          {
            "en": "He is a doctor",
            "uz": "U shifokor",
            "pron": "/hiː ɪz ə ˈdɒktər/"
          },
          {
            "en": "They are friends",
            "uz": "Ular do'stlar",
            "pron": "/ðeɪ ɑːr frɛndz/"
          },
          {
            "en": "We are from Uzbekistan",
            "uz": "Biz o'zbekistonlikbiz",
            "pron": "/wiː ɑːr frɒm/"
          },
          {
            "en": "It is a book",
            "uz": "Bu kitob",
            "pron": "/ɪt ɪz ə bʊk/"
          }
        ]
      },
      {
        "title": "😊 His-tuyg'ular va holatlar — Feelings & States",
        "words": [
          {
            "en": "I'm happy",
            "uz": "Men xursandman",
            "pron": "/aɪm ˈhæpi/"
          },
          {
            "en": "She is sad",
            "uz": "U xafadir",
            "pron": "/ʃiː ɪz sæd/"
          },
          {
            "en": "He is tired",
            "uz": "U charchagan",
            "pron": "/hiː ɪz ˈtaɪərd/"
          },
          {
            "en": "We are hungry",
            "uz": "Biz ochbiz",
            "pron": "/wiː ɑːr ˈhʌŋɡri/"
          },
          {
            "en": "They are busy",
            "uz": "Ular bandlar",
            "pron": "/ðeɪ ɑːr ˈbɪzi/"
          },
          {
            "en": "It is cold / hot",
            "uz": "U sovuq / issiq",
            "pron": "/ɪt ɪz koʊld/ /hɒt/"
          },
          {
            "en": "I'm not ready",
            "uz": "Men tayyor emasman",
            "pron": "/aɪm nɒt ˈrɛdi/"
          },
          {
            "en": "Are you okay?",
            "uz": "Siz yaxshimisiz?",
            "pron": "/ɑːr juː oʊˈkeɪ/"
          }
        ]
      },
      {
        "title": "📍 Joylashuv — Locations",
        "words": [
          {
            "en": "I'm at home",
            "uz": "Men uydaman",
            "pron": "/aɪm æt hoʊm/"
          },
          {
            "en": "She is at school",
            "uz": "U maktabda",
            "pron": "/ʃiː ɪz æt skuːl/"
          },
          {
            "en": "He is in the office",
            "uz": "U ofisda",
            "pron": "/hiː ɪz ɪn ðə ˈɒfɪs/"
          },
          {
            "en": "We are in Tashkent",
            "uz": "Biz Toshkentdamiz",
            "pron": "/wiː ɑːr ɪn/"
          },
          {
            "en": "They are at the park",
            "uz": "Ular parkda",
            "pron": "/ðeɪ ɑːr æt ðə pɑːrk/"
          },
          {
            "en": "Is it near here?",
            "uz": "U shu yaqindami?",
            "pron": "/ɪz ɪt nɪər hɪər/"
          }
        ]
      },
      {
        "title": "✅ Qisqa javoblar — Short Answers",
        "words": [
          {
            "en": "Yes, I am.",
            "uz": "Ha, menman.",
            "pron": "/jɛs aɪ æm/"
          },
          {
            "en": "No, I'm not.",
            "uz": "Yo'q, emasman.",
            "pron": "/noʊ aɪm nɒt/"
          },
          {
            "en": "Yes, he is.",
            "uz": "Ha, u (erkak).",
            "pron": "/jɛs hiː ɪz/"
          },
          {
            "en": "No, she isn't.",
            "uz": "Yo'q, u (ayol) emas.",
            "pron": "/noʊ ʃiː ˈɪznt/"
          },
          {
            "en": "Yes, they are.",
            "uz": "Ha, ular.",
            "pron": "/jɛs ðeɪ ɑːr/"
          },
          {
            "en": "No, we aren't.",
            "uz": "Yo'q, biz emasmiz.",
            "pron": "/noʊ wiː ɑːrnt/"
          }
        ]
      }
    ],
    "story": "Mening ismim Sardor. <strong>I am</strong> o'n olti yoshdaman va <strong>I'm a student</strong>. Sinfdoshim Malika — <strong>she is</strong> juda aqlli. <strong>She isn't</strong> dangasa, aksincha <strong>she is</strong> juda mehnatsevar. Bizning o'qituvchimiz janob Karimov — <strong>he is</strong> matematik o'qituvchi. <strong>He isn't</strong> qattiqko'l, <strong>he is</strong> juda mehribon. Bugun dars qiyin — <strong>we are</strong> charchagan. \"Bu test qiyin, <strong>it is</strong> murakkab\" deydi do'stim. \"<strong>Are you</strong> tayyor?\" deb so'raydi o'qituvchi. \"<strong>Yes, we are</strong>!\" deymiz. Kechqurun uyga qaytgach, \"<strong>I'm</strong> uyda endi\" deyman. \"<strong>Are you</strong> charchagan?\" deydi onam. \"<strong>Yes, I am</strong>, lekin <strong>I'm</strong> xursandman!\" \"<strong>They are</strong> yaxshi o'quvchilar\" deydi onam. \"<strong>We are</strong> sizdan faxrlanamiz!\" \"<strong>No, I'm not</strong> charchagan — men baxtliman!\"",
    "storyNote": "✅ Nechta so'z topdingiz? So'zlar bo'limlari bilan solishtiring!",
    "test": [
      {
        "q_en": "\"I ______ a student.\" — To'g'ri shakl?",
        "q_uz": "",
        "options": [
          {
            "text": "am",
            "correct": true
          },
          {
            "text": "is",
            "correct": false
          },
          {
            "text": "are",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"She ______ happy.\" — To'g'ri shakl?",
        "q_uz": "",
        "options": [
          {
            "text": "am",
            "correct": false
          },
          {
            "text": "is",
            "correct": true
          },
          {
            "text": "are",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"They ______ friends.\" — To'g'ri shakl?",
        "q_uz": "",
        "options": [
          {
            "text": "am",
            "correct": false
          },
          {
            "text": "is",
            "correct": false
          },
          {
            "text": "are",
            "correct": true
          }
        ]
      },
      {
        "q_en": "\"Men o'quvchiman\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "He is a student",
            "correct": false
          },
          {
            "text": "I am a student",
            "correct": true
          },
          {
            "text": "We are students",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Is she a teacher?\" — Ha deb qisqa javob?",
        "q_uz": "",
        "options": [
          {
            "text": "Yes, she is not.",
            "correct": false
          },
          {
            "text": "Yes, she is.",
            "correct": true
          },
          {
            "text": "Yes, she am.",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"isn't\" — bu qaysi ikki so'zning qisqasi?",
        "q_uz": "",
        "options": [
          {
            "text": "I am not",
            "correct": false
          },
          {
            "text": "is not",
            "correct": true
          },
          {
            "text": "are not",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"We ______ in Tashkent.\" — To'g'ri shakl?",
        "q_uz": "",
        "options": [
          {
            "text": "am",
            "correct": false
          },
          {
            "text": "is",
            "correct": false
          },
          {
            "text": "are",
            "correct": true
          }
        ]
      },
      {
        "q_en": "\"Biz charchaganmiz\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "I am tired",
            "correct": false
          },
          {
            "text": "We are tired",
            "correct": true
          },
          {
            "text": "They is tired",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Are you okay?\" — Yo'q deb qisqa javob?",
        "q_uz": "",
        "options": [
          {
            "text": "No, I aren't.",
            "correct": false
          },
          {
            "text": "No, I'm not.",
            "correct": true
          },
          {
            "text": "No, I isn't.",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"It ______ cold today.\" — To'g'ri shakl?",
        "q_uz": "",
        "options": [
          {
            "text": "am",
            "correct": false
          },
          {
            "text": "is",
            "correct": true
          },
          {
            "text": "are",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"I'm\" — qaysi ikki so'zning qisqasi?",
        "q_uz": "",
        "options": [
          {
            "text": "I are",
            "correct": false
          },
          {
            "text": "I am",
            "correct": true
          },
          {
            "text": "I is",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"U ayol maktabda\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "He is at school",
            "correct": false
          },
          {
            "text": "She is at school",
            "correct": true
          },
          {
            "text": "They are at school",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"aren't\" — qaysi ikki so'zning qisqasi?",
        "q_uz": "",
        "options": [
          {
            "text": "am not",
            "correct": false
          },
          {
            "text": "is not",
            "correct": false
          },
          {
            "text": "are not",
            "correct": true
          }
        ]
      },
      {
        "q_en": "\"______ you a doctor?\" — Savol shakli",
        "q_uz": "",
        "options": [
          {
            "text": "Am",
            "correct": false
          },
          {
            "text": "Are",
            "correct": true
          },
          {
            "text": "Is",
            "correct": false
          }
        ]
      },
      {
        "q_en": "\"Ular parkda\" in English?",
        "q_uz": "",
        "options": [
          {
            "text": "We are at the park",
            "correct": false
          },
          {
            "text": "She is at the park",
            "correct": false
          },
          {
            "text": "They are at the park",
            "correct": true
          }
        ]
      }
    ],
    "fill": [
      {
        "q": "\"I ______ a student.\" (1 so'z)",
        "answers": [
          "am"
        ]
      },
      {
        "q": "\"She ______ a teacher.\" (1 so'z)",
        "answers": [
          "is"
        ]
      },
      {
        "q": "\"They ______ friends.\" (1 so'z)",
        "answers": [
          "are"
        ]
      },
      {
        "q": "\"He ______ not a doctor.\" (1 so'z)",
        "answers": [
          "is"
        ]
      },
      {
        "q": "\"We ______ in Tashkent.\" (1 so'z)",
        "answers": [
          "are"
        ]
      },
      {
        "q": "\"______ you okay?\" — Savol (1 so'z)",
        "answers": [
          "are"
        ]
      },
      {
        "q": "\"I ______ not ready.\" (1 so'z)",
        "answers": [
          "am"
        ]
      },
      {
        "q": "\"It ______ cold today.\" (1 so'z)",
        "answers": [
          "is"
        ]
      },
      {
        "q": "\"______ she at school?\" — Savol (1 so'z)",
        "answers": [
          "is"
        ]
      },
      {
        "q": "\"______ they at the park?\" — Savol (1 so'z)",
        "answers": [
          "are"
        ]
      },
      {
        "q": "\"You ______ not ready.\" (1 so'z)",
        "answers": [
          "are"
        ]
      },
      {
        "q": "\"He ______ at home.\" (1 so'z)",
        "answers": [
          "is"
        ]
      },
      {
        "q": "\"______ I late?\" — Savol (1 so'z)",
        "answers": [
          "am"
        ]
      },
      {
        "q": "\"We ______ from Uzbekistan.\" (1 so'z)",
        "answers": [
          "are"
        ]
      },
      {
        "q": "\"It ______ a nice day.\" (1 so'z)",
        "answers": [
          "is"
        ]
      },
      {
        "q": "\"They ______ not students.\" (1 so'z)",
        "answers": [
          "are"
        ]
      },
      {
        "q": "\"She ______ not happy today.\" (1 so'z)",
        "answers": [
          "is"
        ]
      },
      {
        "q": "\"______ we in the right place?\" — Savol (1 so'z)",
        "answers": [
          "are"
        ]
      },
      {
        "q": "\"He ______ my friend.\" (1 so'z)",
        "answers": [
          "is"
        ]
      },
      {
        "q": "\"I ______ hungry.\" (1 so'z)",
        "answers": [
          "am"
        ]
      }
    ],
    "translate": [
      {
        "q": "\"Men o'quvchiman\" — inglizchaga",
        "answers": [
          "i am a student",
          "i'm a student"
        ]
      },
      {
        "q": "\"U ayol o'qituvchi\" — inglizchaga",
        "answers": [
          "she is a teacher",
          "she's a teacher"
        ]
      },
      {
        "q": "\"Biz Toshkentdamiz\" — inglizchaga",
        "answers": [
          "we are in tashkent",
          "we're in tashkent"
        ]
      },
      {
        "q": "\"U erkak shifokor emas\" — inglizchaga",
        "answers": [
          "he is not a doctor",
          "he isn't a doctor",
          "he's not a doctor"
        ]
      },
      {
        "q": "\"Siz yaxshimisiz?\" — inglizchaga",
        "answers": [
          "are you okay?",
          "are you okay",
          "are you all right?",
          "are you all right"
        ]
      },
      {
        "q": "\"Ular bandlar\" — inglizchaga",
        "answers": [
          "they are busy",
          "they're busy"
        ]
      },
      {
        "q": "\"Men tayyor emasman\" — inglizchaga",
        "answers": [
          "i am not ready",
          "i'm not ready"
        ]
      },
      {
        "q": "\"Bu kitob\" — inglizchaga",
        "answers": [
          "it is a book",
          "it's a book"
        ]
      },
      {
        "q": "\"U erkak uydami?\" — inglizchaga (savol)",
        "answers": [
          "is he at home?",
          "is he at home"
        ]
      },
      {
        "q": "\"Ha, u (erkak)\" — qisqa javob",
        "answers": [
          "yes, he is",
          "yes he is",
          "yes, he is."
        ]
      },
      {
        "q": "\"Yo'q, ular emas\" — qisqa javob",
        "answers": [
          "no, they aren't",
          "no they aren't",
          "no, they are not",
          "no they are not"
        ]
      },
      {
        "q": "\"Biz o'zbekistonlikbiz\" — inglizchaga",
        "answers": [
          "we are from uzbekistan",
          "we're from uzbekistan"
        ]
      },
      {
        "q": "\"U ayol xafadir\" — inglizchaga",
        "answers": [
          "she is sad",
          "she's sad"
        ]
      },
      {
        "q": "\"Men uydaman\" — inglizchaga",
        "answers": [
          "i am at home",
          "i'm at home"
        ]
      },
      {
        "q": "\"Ular do'stlar\" — inglizchaga",
        "answers": [
          "they are friends",
          "they're friends"
        ]
      },
      {
        "q": "\"U narsa sovuq\" — inglizchaga",
        "answers": [
          "it is cold",
          "it's cold"
        ]
      },
      {
        "q": "\"Siz o'quvchimisiz?\" — inglizchaga (savol)",
        "answers": [
          "are you a student?",
          "are you a student"
        ]
      },
      {
        "q": "\"Ha, menman\" — qisqa javob",
        "answers": [
          "yes, i am",
          "yes i am",
          "yes, i am."
        ]
      },
      {
        "q": "\"U erkak charchagan\" — inglizchaga",
        "answers": [
          "he is tired",
          "he's tired"
        ]
      },
      {
        "q": "\"Biz ochbiz\" — inglizchaga",
        "answers": [
          "we are hungry",
          "we're hungry"
        ]
      }
    ],
    "wr": [
      {
        "label": "Men (tasdiq)",
        "options": [
          {
            "text": "I is",
            "correct": false
          },
          {
            "text": "I am",
            "correct": true
          },
          {
            "text": "I are",
            "correct": false
          }
        ]
      },
      {
        "label": "U erkak (tasdiq)",
        "options": [
          {
            "text": "He am",
            "correct": false
          },
          {
            "text": "He is",
            "correct": true
          },
          {
            "text": "He are",
            "correct": false
          }
        ]
      },
      {
        "label": "Biz (tasdiq)",
        "options": [
          {
            "text": "We is",
            "correct": false
          },
          {
            "text": "We am",
            "correct": false
          },
          {
            "text": "We are",
            "correct": true
          }
        ]
      },
      {
        "label": "U ayol (inkor)",
        "options": [
          {
            "text": "She amn't",
            "correct": false
          },
          {
            "text": "She isn't",
            "correct": true
          },
          {
            "text": "She aren't",
            "correct": false
          }
        ]
      },
      {
        "label": "Ular (inkor)",
        "options": [
          {
            "text": "They isn't",
            "correct": false
          },
          {
            "text": "They aren't",
            "correct": true
          },
          {
            "text": "They amn't",
            "correct": false
          }
        ]
      },
      {
        "label": "Men (qisqa)",
        "options": [
          {
            "text": "I's",
            "correct": false
          },
          {
            "text": "I'm",
            "correct": true
          },
          {
            "text": "I're",
            "correct": false
          }
        ]
      },
      {
        "label": "Savol — u narsa",
        "options": [
          {
            "text": "Am it cold?",
            "correct": false
          },
          {
            "text": "Is it cold?",
            "correct": true
          },
          {
            "text": "Are it cold?",
            "correct": false
          }
        ]
      },
      {
        "label": "Savol — siz",
        "options": [
          {
            "text": "Is you ready?",
            "correct": false
          },
          {
            "text": "Am you ready?",
            "correct": false
          },
          {
            "text": "Are you ready?",
            "correct": true
          }
        ]
      },
      {
        "label": "Men (inkor qisqa)",
        "options": [
          {
            "text": "I isn't",
            "correct": false
          },
          {
            "text": "I aren't",
            "correct": false
          },
          {
            "text": "I'm not",
            "correct": true
          }
        ]
      },
      {
        "label": "U erkak (qisqa)",
        "options": [
          {
            "text": "He'm",
            "correct": false
          },
          {
            "text": "He's",
            "correct": true
          },
          {
            "text": "He're",
            "correct": false
          }
        ]
      },
      {
        "label": "Siz (qisqa)",
        "options": [
          {
            "text": "You's",
            "correct": false
          },
          {
            "text": "You're",
            "correct": true
          },
          {
            "text": "You'm",
            "correct": false
          }
        ]
      },
      {
        "label": "Ular (qisqa)",
        "options": [
          {
            "text": "They's",
            "correct": false
          },
          {
            "text": "They're",
            "correct": true
          },
          {
            "text": "They'm",
            "correct": false
          }
        ]
      },
      {
        "label": "U ayol (qisqa)",
        "options": [
          {
            "text": "She'm",
            "correct": false
          },
          {
            "text": "She's",
            "correct": true
          },
          {
            "text": "She're",
            "correct": false
          }
        ]
      },
      {
        "label": "Biz (qisqa)",
        "options": [
          {
            "text": "We's",
            "correct": false
          },
          {
            "text": "We're",
            "correct": true
          },
          {
            "text": "We'm",
            "correct": false
          }
        ]
      },
      {
        "label": "It (qisqa)",
        "options": [
          {
            "text": "It'm",
            "correct": false
          },
          {
            "text": "It's",
            "correct": true
          },
          {
            "text": "It're",
            "correct": false
          }
        ]
      },
      {
        "label": "Savol — u erkak",
        "options": [
          {
            "text": "Am he a doctor?",
            "correct": false
          },
          {
            "text": "Is he a doctor?",
            "correct": true
          },
          {
            "text": "Are he a doctor?",
            "correct": false
          }
        ]
      },
      {
        "label": "Savol — biz",
        "options": [
          {
            "text": "Is we late?",
            "correct": false
          },
          {
            "text": "Am we late?",
            "correct": false
          },
          {
            "text": "Are we late?",
            "correct": true
          }
        ]
      },
      {
        "label": "Biz (inkor)",
        "options": [
          {
            "text": "We isn't",
            "correct": false
          },
          {
            "text": "We aren't",
            "correct": true
          },
          {
            "text": "We amn't",
            "correct": false
          }
        ]
      },
      {
        "label": "U narsa (inkor)",
        "options": [
          {
            "text": "It amn't",
            "correct": false
          },
          {
            "text": "It aren't",
            "correct": false
          },
          {
            "text": "It isn't",
            "correct": true
          }
        ]
      },
      {
        "label": "Siz (inkor)",
        "options": [
          {
            "text": "You isn't",
            "correct": false
          },
          {
            "text": "You aren't",
            "correct": true
          },
          {
            "text": "You amn't",
            "correct": false
          }
        ]
      }
    ]
  }
};
