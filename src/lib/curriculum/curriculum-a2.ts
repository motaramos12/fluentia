// Complete A2 Curriculum - Elementary Level
export const curriculumA2 = {
  level: "A2",
  title: "Elementar - Expandindo Conhecimento",
  description: "Aprende passado, futuro e conversas mais complexas. Prepara-te para o próximo nível.",
  modules: [
    {
      id: "a2-m1",
      order: 1,
      title: "Passado Simples - Regular Verbs",
      description: "Past Simple com verbos regulares (worked, played, studied)",
      lessonCount: 1,
      xpReward: 120,
      unlocked: false,
      lessons: [
        {
          id: "a2-m1-l1",
          title: "Past Simple - O que aconteceu ontem",
          duration: 10,
          content: {
            intro: "Aprende a contar histórias sobre o passado com o Past Simple.",
            explanation: `
## Past Simple - Verbos Regulares

### Formação: Verbo + -ed
- **worked** (trabalhei)
- **played** (joguei)
- **studied** (estudei)
- **watched** (vi)

### Conjugação (mesmo para todas as pessoas)
- I worked
- You worked
- He/She/It worked
- We worked
- They worked

### Pronúncia do -ed
- /t/ (looked, worked, walked)
- /d/ (played, lived, called)
- /ɪd/ (wanted, studied)

### Uso
- Ações completas no passado: "I worked yesterday" (Trabalhei ontem)
- Hábitos antigos: "She played tennis every week" (Ela jogava ténis todas as semanas)
- Sequência de eventos: "I woke up, ate breakfast, and went to work"

### Marcadores de tempo
- yesterday (ontem)
- last week/month/year (semana/mês/ano passado)
- ago (há)
- in 2020 (em 2020)
            `,
            examples: [
              {
                english: "I worked in a restaurant last summer.",
                portuguese: "Trabalhei num restaurante no verão passado.",
                audio: "i_worked_restaurant",
              },
              {
                english: "She studied English for 5 hours yesterday.",
                portuguese: "Ela estudou inglês durante 5 horas ontem.",
                audio: "she_studied_english",
              },
              {
                english: "They played football in the park.",
                portuguese: "Eles jogaram futebol no parque.",
                audio: "they_played_football",
              },
              {
                english: "I watched a movie last night.",
                portuguese: "Vi um filme na noite passada.",
                audio: "i_watched_movie",
              },
              {
                english: "We walked for two hours.",
                portuguese: "Caminhámos durante duas horas.",
                audio: "we_walked",
              },
            ],
            keyVocabulary: [
              { word: "Worked", meaning: "Trabalhei", partOfSpeech: "verb" },
              { word: "Played", meaning: "Joguei", partOfSpeech: "verb" },
              { word: "Studied", meaning: "Estudei", partOfSpeech: "verb" },
              { word: "Watched", meaning: "Vi", partOfSpeech: "verb" },
              { word: "Yesterday", meaning: "Ontem", partOfSpeech: "adverb" },
              { word: "Last week", meaning: "Semana passada", partOfSpeech: "expression" },
            ],
          },
          exercises: [
            {
              id: "a2-m1-l1-ex1",
              type: "fill-the-blank",
              question: "Complete: 'I ___ (work) in a hospital last year.'",
              answer: "worked",
              options: ["worked", "works", "working"],
              explanation: "Past Simple regular: work → worked",
            },
            {
              id: "a2-m1-l1-ex2",
              type: "translation",
              question: "Traduz: 'Ela estudou química ontem'",
              answer: "she studied chemistry yesterday",
              hint: "She + studied + chemistry + yesterday",
              explanation: "Past Simple: study → studied (y muda para -ied)",
            },
            {
              id: "a2-m1-l1-ex3",
              type: "multiple-choice",
              question: "Qual é a pronúncia correta de 'watched'?",
              options: [
                { text: "/wɑtʃt/", correct: true },
                { text: "/wɑtʃd/", correct: false },
                { text: "/wɑtʃɪd/", correct: false },
              ],
              explanation: "watch → watched pronuncia-se /wɑtʃt/ (som /t/)",
            },
            {
              id: "a2-m1-l1-ex4",
              type: "listening",
              question: "Ouve e escolhe o verbo que ouviste:",
              audio: "i_worked_restaurant",
              options: [
                { text: "worked", correct: true },
                { text: "work", correct: false },
                { text: "working", correct: false },
              ],
              explanation: "'worked' é o Past Simple regular",
            },
          ],
        },
      ],
    },
    {
      id: "a2-m2",
      order: 2,
      title: "Passado Simples - Irregular Verbs",
      description: "Past Simple com verbos irregulares (went, did, saw)",
      lessonCount: 1,
      xpReward: 120,
      unlocked: false,
      lessons: [
        {
          id: "a2-m2-l1",
          title: "Verbos Irregulares no Passado",
          duration: 12,
          content: {
            intro: "Alguns verbos não seguem a regra -ed. Aprende os mais comuns.",
            explanation: `
## Verbos Irregulares - Past Simple

### Verbos Comuns
- go → **went** (fui)
- see → **saw** (vi)
- do → **did** (fiz)
- eat → **ate** (comi)
- drink → **drank** (bebi)
- have → **had** (tive)
- make → **made** (fiz)
- come → **came** (vim)
- take → **took** (peguei)
- give → **gave** (dei)
- find → **found** (encontrei)
- know → **knew** (soube)
- think → **thought** (pensei)
- buy → **bought** (comprei)
- sell → **sold** (vendi)

### Padrão: Nenhum! É memorização
- I went to the beach
- She saw a movie
- He did his homework
- They ate pizza

### Conjugação (igual para todas as pessoas)
- I went
- You went
- He/She went
- We went
- They went

### Uso
- Mesmos contextos que regulares
- Ações completadas no passado
- Narrativas e histórias
            `,
            examples: [
              {
                english: "I went to Portugal last month.",
                portuguese: "Fui a Portugal o mês passado.",
                audio: "i_went_portugal",
              },
              {
                english: "She saw her friend at the cinema.",
                portuguese: "Ela viu a amiga no cinema.",
                audio: "she_saw_friend",
              },
              {
                english: "He did his homework yesterday.",
                portuguese: "Ele fez o dever ontem.",
                audio: "he_did_homework",
              },
              {
                english: "They ate delicious food.",
                portuguese: "Eles comeram comida deliciosa.",
                audio: "they_ate_food",
              },
              {
                english: "I had a great time!",
                portuguese: "Tive um ótimo tempo!",
                audio: "i_had_great_time",
              },
            ],
            keyVocabulary: [
              { word: "Went", meaning: "Fui", partOfSpeech: "verb" },
              { word: "Saw", meaning: "Vi", partOfSpeech: "verb" },
              { word: "Did", meaning: "Fiz", partOfSpeech: "verb" },
              { word: "Ate", meaning: "Comi", partOfSpeech: "verb" },
              { word: "Had", meaning: "Tive", partOfSpeech: "verb" },
              { word: "Came", meaning: "Vim", partOfSpeech: "verb" },
            ],
          },
          exercises: [
            {
              id: "a2-m2-l1-ex1",
              type: "fill-the-blank",
              question: "Complete: 'I ___ (go) to London last year.'",
              answer: "went",
              options: ["went", "goes", "going"],
              explanation: "go → went (irregular)",
            },
            {
              id: "a2-m2-l1-ex2",
              type: "translation",
              question: "Traduz: 'Ela comeu pizza ontem'",
              answer: "she ate pizza yesterday",
              hint: "She + ate + pizza + yesterday",
              explanation: "eat → ate (irregular)",
            },
            {
              id: "a2-m2-l1-ex3",
              type: "multiple-choice",
              question: "Qual é o Past Simple de 'see'?",
              options: [
                { text: "saw", correct: true },
                { text: "sawed", correct: false },
                { text: "seen", correct: false },
              ],
              explanation: "see → saw (irregular)",
            },
            {
              id: "a2-m2-l1-ex4",
              type: "listening",
              question: "Ouve e escolhe o verbo irregular:",
              audio: "she_saw_friend",
              options: [
                { text: "saw", correct: true },
                { text: "see", correct: false },
                { text: "seen", correct: false },
              ],
              explanation: "'saw' é o Past Simple de 'see'",
            },
          ],
        },
      ],
    },
    {
      id: "a2-m3",
      order: 3,
      title: "Futuro Simples - Will",
      description: "'Will' para promessas, planos e previsões",
      lessonCount: 1,
      xpReward: 100,
      unlocked: false,
      lessons: [
        {
          id: "a2-m3-l1",
          title: "Future with Will",
          duration: 10,
          content: {
            intro: "Aprende a falar sobre o futuro com 'will'.",
            explanation: `
## Future Simple - Will

### Formação
**Will + verbo infinitivo (sem to)**

- I **will** work
- You **will** play
- He/She **will** study
- We **will** go
- They **will** eat

### Contracções
- I'll (I will)
- You'll (You will)
- He'll/She'll (He/She will)
- We'll (We will)
- They'll (They will)

### Negativo
- I **won't** work (will not)
- You **won't** play
- He **won't** study

### Perguntas
- **Will you** come? = Viras?
- **Will she** work? = Ela vai trabalhar?
- **Will they** eat? = Eles vão comer?

### Respostas Curtas
- Will you come? → Yes, I will. / No, I won't.

### Uso
- Decisões no momento: "I'll help you" (Vou ajudar-te)
- Promessas: "I'll call you later" (Vou ligar-te depois)
- Previsões: "It will rain tomorrow" (Vai chover amanhã)
- Ofertas: "I'll carry your bag" (Vou levar a tua mala)
            `,
            examples: [
              {
                english: "I will help you with your homework.",
                portuguese: "Vou ajudar-te com o dever.",
                audio: "i_will_help",
              },
              {
                english: "She will arrive at 3 o'clock.",
                portuguese: "Ela vai chegar às 3 horas.",
                audio: "she_will_arrive",
              },
              {
                english: "They will visit us next week.",
                portuguese: "Eles vão visitar-nos a semana que vem.",
                audio: "they_will_visit",
              },
              {
                english: "It will be sunny tomorrow.",
                portuguese: "Será sol amanhã.",
                audio: "it_will_be_sunny",
              },
              {
                english: "I won't forget your birthday.",
                portuguese: "Não vou esquecer o teu aniversário.",
                audio: "i_wont_forget",
              },
            ],
            keyVocabulary: [
              { word: "Will", meaning: "Irá/vai", partOfSpeech: "modal" },
              { word: "Won't", meaning: "Não vai", partOfSpeech: "modal" },
              { word: "Tomorrow", meaning: "Amanhã", partOfSpeech: "adverb" },
              { word: "Next week", meaning: "Próxima semana", partOfSpeech: "expression" },
              { word: "Later", meaning: "Depois", partOfSpeech: "adverb" },
              { word: "Help", meaning: "Ajudar", partOfSpeech: "verb" },
            ],
          },
          exercises: [
            {
              id: "a2-m3-l1-ex1",
              type: "fill-the-blank",
              question: "Complete: 'I ___ (help) you tomorrow.'",
              answer: "will help",
              options: ["will help", "help", "am helping"],
              explanation: "Future: will + verbo infinitivo",
            },
            {
              id: "a2-m3-l1-ex2",
              type: "translation",
              question: "Traduz: 'Ela vai viajar amanhã'",
              answer: "she will travel tomorrow",
              hint: "She will + verbo",
              explanation: "Future Simple com 'will'",
            },
            {
              id: "a2-m3-l1-ex3",
              type: "multiple-choice",
              question: "Como é a contração de 'I will'?",
              options: [
                { text: "I'll", correct: true },
                { text: "Ill", correct: false },
                { text: "I'l", correct: false },
              ],
              explanation: "I will → I'll",
            },
            {
              id: "a2-m3-l1-ex4",
              type: "fill-the-blank",
              question: "Complete a negativa: 'I ___ (not go) to the party.'",
              answer: "won't go",
              options: ["won't go", "will not go", "don't go"],
              explanation: "Negativa: will + not = won't",
            },
          ],
        },
      ],
    },
    {
      id: "a2-m4",
      order: 4,
      title: "Present Perfect - Experiências",
      description: "Have/Has + Past Participle - Experiências de vida",
      lessonCount: 1,
      xpReward: 120,
      unlocked: false,
      lessons: [
        {
          id: "a2-m4-l1",
          title: "Present Perfect - O que fizeste na vida",
          duration: 12,
          content: {
            intro: "Usa Present Perfect para falar de experiências e mudanças recentes.",
            explanation: `
## Present Perfect

### Formação
**Have/Has + Past Participle**

Regular:
- worked, played, studied, walked

Irregular:
- been, gone, seen, done, eaten, drunk

### Conjugação
- I **have** worked
- You **have** played
- He/She **has** studied
- We **have** gone
- They **have** eaten

### Contracções
- I've (I have)
- You've (You have)
- He's/She's (He/She has)
- We've (We have)
- They've (They have)

### Negativo
- I **haven't** worked
- She **hasn't** been

### Perguntas
- **Have you** ever been to Paris?
- **Has he** finished his work?

### Uso
- Experiências de vida: "I have been to Portugal" (Já estive em Portugal)
- "Have you ever..." (Já alguma vez...)
- Ações recentes: "I have lost my keys" (Perdi as chaves)
- Mudanças: "The weather has changed" (O tempo mudou)

### Marcadores
- ever (alguma vez)
- never (nunca)
- just (agora, há pouco)
- already (já)
- yet (ainda)
- for (durante)
- since (desde)
            `,
            examples: [
              {
                english: "I have visited three countries.",
                portuguese: "Visitei três países.",
                audio: "i_have_visited",
              },
              {
                english: "She has never eaten sushi.",
                portuguese: "Ela nunca comeu sushi.",
                audio: "she_has_never_eaten",
              },
              {
                english: "Have you ever been to Spain?",
                portuguese: "Já estiveste em Espanha?",
                audio: "have_you_been_spain",
              },
              {
                english: "I have just finished my homework.",
                portuguese: "Acabei de fazer o meu dever.",
                audio: "i_have_finished",
              },
              {
                english: "They have lived here for 5 years.",
                portuguese: "Eles vivem aqui há 5 anos.",
                audio: "they_have_lived",
              },
            ],
            keyVocabulary: [
              { word: "Have", meaning: "Tenho", partOfSpeech: "verb" },
              { word: "Has", meaning: "Tem", partOfSpeech: "verb" },
              { word: "Been", meaning: "Sido/Sido", partOfSpeech: "verb" },
              { word: "Ever", meaning: "Alguma vez", partOfSpeech: "adverb" },
              { word: "Never", meaning: "Nunca", partOfSpeech: "adverb" },
              { word: "Just", meaning: "Agora/Há pouco", partOfSpeech: "adverb" },
            ],
          },
          exercises: [
            {
              id: "a2-m4-l1-ex1",
              type: "fill-the-blank",
              question: "Complete: 'I ___ (visit) Paris twice.'",
              answer: "have visited",
              options: ["have visited", "visited", "visit"],
              explanation: "Present Perfect: have + Past Participle",
            },
            {
              id: "a2-m4-l1-ex2",
              type: "translation",
              question: "Traduz: 'Ela nunca viu um leão'",
              answer: "she has never seen a lion",
              hint: "She has never + Past Participle",
              explanation: "Present Perfect negativo",
            },
            {
              id: "a2-m4-l1-ex3",
              type: "multiple-choice",
              question: "Qual é o Past Participle de 'see'?",
              options: [
                { text: "seen", correct: true },
                { text: "saw", correct: false },
                { text: "sees", correct: false },
              ],
              explanation: "see → seen (Past Participle)",
            },
            {
              id: "a2-m4-l1-ex4",
              type: "fill-the-blank",
              question: "Complete: 'Have you ___ (eat) breakfast?'",
              answer: "eaten",
              options: ["eaten", "ate", "eat"],
              explanation: "Present Perfect: Have + eaten",
            },
          ],
        },
      ],
    },
    {
      id: "a2-m5",
      order: 5,
      title: "Vocabulário: Comida e Restaurante",
      description: "Alimentos, pratos, e conversa no restaurante",
      lessonCount: 1,
      xpReward: 100,
      unlocked: false,
      lessons: [
        {
          id: "a2-m5-l1",
          title: "Comida, Bebidas e Restaurante",
          duration: 10,
          content: {
            intro: "Aprende vocabulário sobre comida e como encomendar num restaurante.",
            explanation: `
## Comida

### Refeições
- Breakfast (pequeno-almoço)
- Lunch (almoço)
- Dinner (jantar)
- Snack (lanche)

### Proteínas
- Chicken (frango)
- Fish (peixe)
- Beef (carne de vaca)
- Pork (carne de porco)
- Lamb (carneiro)
- Shrimp (camarão)
- Egg (ovo)
- Cheese (queijo)
- Tofu (tofu)

### Vegetais
- Carrot (cenoura)
- Broccoli (brócolis)
- Lettuce (alface)
- Tomato (tomate)
- Onion (cebola)
- Potato (batata)
- Spinach (espinafre)
- Cucumber (pepino)

### Frutas
- Apple (maçã)
- Banana (banana)
- Orange (laranja)
- Strawberry (morango)
- Lemon (limão)
- Grape (uva)

### Bebidas
- Water (água)
- Coffee (café)
- Tea (chá)
- Juice (sumo)
- Wine (vinho)
- Beer (cerveja)
- Milk (leite)

### No Restaurante
- "I'd like..." (Eu gostaria de...)
- "Could I have...?" (Podia ter...?)
- "The bill, please" (A conta, por favor)
- "Is this spicy?" (Isto é picante?)
- "No salt, please" (Sem sal, por favor)
            `,
            examples: [
              {
                english: "I would like a chicken salad, please.",
                portuguese: "Gostaria de uma salada de frango, por favor.",
                audio: "i_like_chicken_salad",
              },
              {
                english: "Could I have a glass of water?",
                portuguese: "Podia ter um copo de água?",
                audio: "could_i_have_water",
              },
              {
                english: "The fish is delicious!",
                portuguese: "O peixe é delicioso!",
                audio: "fish_delicious",
              },
              {
                english: "I'm allergic to peanuts.",
                portuguese: "Sou alérgico a amendoins.",
                audio: "allergic_peanuts",
              },
              {
                english: "Can I have the dessert menu?",
                portuguese: "Posso ter o menu de sobremesas?",
                audio: "dessert_menu",
              },
            ],
            keyVocabulary: [
              { word: "Chicken", meaning: "Frango", partOfSpeech: "noun" },
              { word: "Fish", meaning: "Peixe", partOfSpeech: "noun" },
              { word: "Vegetable", meaning: "Legume", partOfSpeech: "noun" },
              { word: "Fruit", meaning: "Fruta", partOfSpeech: "noun" },
              { word: "Delicious", meaning: "Delicioso", partOfSpeech: "adjective" },
              { word: "Spicy", meaning: "Picante", partOfSpeech: "adjective" },
            ],
          },
          exercises: [
            {
              id: "a2-m5-l1-ex1",
              type: "translation",
              question: "Como dizes 'Frango' em inglês?",
              answer: "chicken",
              hint: "Começa com 'ch'",
              explanation: "Chicken = frango",
            },
            {
              id: "a2-m5-l1-ex2",
              type: "multiple-choice",
              question: "Qual é a palavra para 'peixe'?",
              options: [
                { text: "Fish", correct: true },
                { text: "Chicken", correct: false },
                { text: "Meat", correct: false },
              ],
              explanation: "Fish = peixe",
            },
            {
              id: "a2-m5-l1-ex3",
              type: "fill-the-blank",
              question: "Complete: 'Could I have a glass of ___?'",
              answer: "water",
              options: ["water", "wine", "coffee"],
              explanation: "'A glass of water' é uma frase comum",
            },
            {
              id: "a2-m5-l1-ex4",
              type: "listening",
              question: "Ouve e escole a comida que ouviste:",
              audio: "fish_delicious",
              options: [
                { text: "Fish", correct: true },
                { text: "Chicken", correct: false },
                { text: "Beef", correct: false },
              ],
              explanation: "'Fish' é peixe",
            },
          ],
        },
      ],
    },
    {
      id: "a2-m6",
      order: 6,
      title: "Adjetivos Comparativos",
      description: "Mais/Menos: bigger, smaller, better, worse",
      lessonCount: 1,
      xpReward: 100,
      unlocked: false,
      lessons: [
        {
          id: "a2-m6-l1",
          title: "Comparativos e Superlativos",
          duration: 10,
          content: {
            intro: "Aprende a comparar pessoas, coisas e qualidades.",
            explanation: `
## Comparativos

### Um Sílaba: adiciona -er
- big → bigger (maior)
- small → smaller (mais pequeno)
- fast → faster (mais rápido)
- slow → slower (mais lento)

### Duas ou mais sílabas: usa "more"
- beautiful → more beautiful (mais bonito)
- interesting → more interesting (mais interessante)
- difficult → more difficult (mais difícil)

### Irregulares
- good → better (melhor)
- bad → worse (pior)
- far → further (mais longe)
- little → less (menos)
- much/many → more (mais)

### Padrão de Uso
- A + is + comparativo + than + B
- "A cat is smaller than a dog" (Um gato é mais pequeno que um cão)
- "This book is more interesting than that one"

## Superlativos

### Um Sílaba: adiciona -est
- big → the biggest
- small → the smallest

### Duas ou mais sílabas: usa "most"
- beautiful → the most beautiful
- interesting → the most interesting

### Irregulares
- good → the best (o melhor)
- bad → the worst (o pior)
- far → the farthest (o mais longe)

### Padrão
- The + superlativo + noun
- "She is the tallest girl in the class"
            `,
            examples: [
              {
                english: "This car is faster than that one.",
                portuguese: "Este carro é mais rápido que aquele.",
                audio: "car_faster",
              },
              {
                english: "She is taller than her brother.",
                portuguese: "Ela é mais alta que o seu irmão.",
                audio: "she_taller",
              },
              {
                english: "This is the most beautiful city.",
                portuguese: "Esta é a cidade mais bonita.",
                audio: "most_beautiful_city",
              },
              {
                english: "That restaurant is worse than this one.",
                portuguese: "Aquele restaurante é pior que este.",
                audio: "restaurant_worse",
              },
              {
                english: "He is the smartest student in class.",
                portuguese: "Ele é o aluno mais inteligente da turma.",
                audio: "smartest_student",
              },
            ],
            keyVocabulary: [
              { word: "Bigger", meaning: "Mais grande", partOfSpeech: "adjective" },
              { word: "Smaller", meaning: "Mais pequeno", partOfSpeech: "adjective" },
              { word: "Better", meaning: "Melhor", partOfSpeech: "adjective" },
              { word: "Worse", meaning: "Pior", partOfSpeech: "adjective" },
              { word: "Taller", meaning: "Mais alto", partOfSpeech: "adjective" },
              { word: "Shorter", meaning: "Mais baixo", partOfSpeech: "adjective" },
            ],
          },
          exercises: [
            {
              id: "a2-m6-l1-ex1",
              type: "fill-the-blank",
              question: "Complete: 'This dog is ___ than that cat.'",
              answer: "bigger",
              options: ["bigger", "big", "the biggest"],
              explanation: "Comparativo: bigger",
            },
            {
              id: "a2-m6-l1-ex2",
              type: "translation",
              question: "Traduz: 'Ela é mais inteligente que ele'",
              answer: "she is more intelligent than him",
              hint: "She is + more intelligent + than him",
              explanation: "Comparativo com 'more' para adjetivo de 2+ sílabas",
            },
            {
              id: "a2-m6-l1-ex3",
              type: "multiple-choice",
              question: "Qual é o superlativo de 'good'?",
              options: [
                { text: "the best", correct: true },
                { text: "better", correct: false },
                { text: "the goodest", correct: false },
              ],
              explanation: "good → better → the best",
            },
            {
              id: "a2-m6-l1-ex4",
              type: "fill-the-blank",
              question: "Complete: 'She is ___ girl in the class.'",
              answer: "the tallest",
              options: ["the tallest", "taller", "tall"],
              explanation: "Superlativo: the tallest",
            },
          ],
        },
      ],
    },
    {
      id: "a2-m7",
      order: 7,
      title: "Modais: Can, Could, Should",
      description: "Possibilidade, permissão, conselhos",
      lessonCount: 1,
      xpReward: 120,
      unlocked: false,
      lessons: [
        {
          id: "a2-m7-l1",
          title: "Modal Verbs - Ability, Permission, Advice",
          duration: 12,
          content: {
            intro: "Usa modal verbs para expressar capacidade, permissão e conselhos.",
            explanation: `
## Modal Verbs

### CAN (presente)
- I **can** speak English (Posso/consigo falar inglês)
- Can you swim? (Consegues nadar?)
- Negativo: I can't swim (Não consigo nadar)

### COULD (passado / mais formal)
- I **could** swim when I was young (Conseguia nadar quando era jovem)
- Could you help me? (Podias ajudar-me?) - mais educado
- I couldn't understand (Não conseguia compreender)

### SHOULD (conselho)
- You **should** eat healthy food (Devias comer comida saudável)
- She should study more (Ela devia estudar mais)
- Negativo: You shouldn't smoke (Não devias fumar)

### COULD + I / YOU (pedidos polidos)
- Could I have some water? (Podia ter água?)
- Could you help me? (Podias ajudar-me?)

### Uso
- **CAN**: capacidade presente
- **COULD**: capacidade passada, pedidos educados
- **SHOULD**: conselhos, obrigações morais

### Particularidade: Todos os modais
- Não adicionam -s na 3ª pessoa
- Vêm antes do verbo infinitivo (sem to)
- She can swim (não "She cans swim")
            `,
            examples: [
              {
                english: "I can speak three languages.",
                portuguese: "Consigo falar três idiomas.",
                audio: "i_can_speak",
              },
              {
                english: "Could you pass me the salt?",
                portuguese: "Podias passar-me o sal?",
                audio: "could_you_pass",
              },
              {
                english: "You should exercise more.",
                portuguese: "Devias fazer mais exercício.",
                audio: "you_should_exercise",
              },
              {
                english: "She couldn't answer the question.",
                portuguese: "Ela não conseguia responder a pergunta.",
                audio: "she_couldnt_answer",
              },
              {
                english: "I can't swim, but I could learn.",
                portuguese: "Não consigo nadar, mas podia aprender.",
                audio: "i_cant_swim",
              },
            ],
            keyVocabulary: [
              { word: "Can", meaning: "Posso/consigo", partOfSpeech: "modal" },
              { word: "Could", meaning: "Podia/conseguia", partOfSpeech: "modal" },
              { word: "Should", meaning: "Devia", partOfSpeech: "modal" },
              { word: "Ability", meaning: "Capacidade", partOfSpeech: "noun" },
              { word: "Permission", meaning: "Permissão", partOfSpeech: "noun" },
              { word: "Advice", meaning: "Conselho", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "a2-m7-l1-ex1",
              type: "fill-the-blank",
              question: "Complete: 'I ___ (can) speak French.'",
              answer: "can",
              options: ["can", "cans", "can speak"],
              explanation: "Modal verb: can + verbo infinitivo",
            },
            {
              id: "a2-m7-l1-ex2",
              type: "translation",
              question: "Traduz: 'Ela devia estudar mais'",
              answer: "she should study more",
              hint: "She should + verbo",
              explanation: "Should para conselhos",
            },
            {
              id: "a2-m7-l1-ex3",
              type: "multiple-choice",
              question: "Qual é a forma educada de pedir: 'Posso ter...'?",
              options: [
                { text: "Could I have...?", correct: true },
                { text: "Can I have...?", correct: false },
                { text: "I can have...?", correct: false },
              ],
              explanation: "'Could' é mais formal e educado que 'can'",
            },
            {
              id: "a2-m7-l1-ex4",
              type: "fill-the-blank",
              question: "Complete: 'He ___ swim when he was young.'",
              answer: "could",
              options: ["could", "can", "should"],
              explanation: "Could para ações no passado",
            },
          ],
        },
      ],
    },
    {
      id: "a2-m8",
      order: 8,
      title: "Conversação Avançada",
      description: "Diálogos sobre rotina, planos e experiências",
      lessonCount: 1,
      xpReward: 120,
      unlocked: false,
      lessons: [
        {
          id: "a2-m8-l1",
          title: "Conversas sobre Vida e Planos",
          duration: 12,
          content: {
            intro: "Pratica conversas completas sobre a tua rotina e planos futuros.",
            explanation: `
## Conversação 1: Sobre o Fim de Semana

**Person A:** What did you do last weekend?
**Person B:** I went to the beach and swam in the sea.
**Person A:** That sounds nice! How was the weather?
**Person B:** It was sunny and warm. I had a great time!

## Conversação 2: Planos Futuros

**Person A:** What will you do next summer?
**Person B:** I think I'll travel to Spain. I want to visit Barcelona.
**Person A:** That's exciting! Have you been to Spain before?
**Person B:** No, I haven't. It will be my first time!

## Conversação 3: Sobre Comida

**Person A:** Do you like Italian food?
**Person B:** Yes, I love it! I cook pasta at home.
**Person A:** Really? Can you teach me how to make it?
**Person B:** Of course! You should try it. It's not difficult.

## Expressões Úteis
- "That sounds..." (Isso soa...)
- "How was...?" (Como foi...?)
- "I had a great time" (Tive ótimo tempo)
- "I think..." (Acho que...)
- "Of course!" (Claro!)
- "Really?" (Mesmo?)
- "That's exciting!" (Que emocionante!)

## Estrutura de Conversação
1. Pergunta aberta: "What did you...?"
2. Resposta com detalhe: "I went to... and..."
3. Acompanhamento: "How was...?" / "That sounds..."
4. Continuação: "Have you ever...?"
            `,
            examples: [
              {
                english: "What did you do yesterday? I went to the cinema and watched a film.",
                portuguese: "O que fizeste ontem? Fui ao cinema e assisti a um filme.",
                audio: "what_did_you_do",
              },
              {
                english: "That sounds fun! How was the movie? It was really good!",
                portuguese: "Isso soa divertido! Como foi o filme? Foi muito bom!",
                audio: "that_sounds_fun",
              },
              {
                english: "Have you ever been to Paris? No, but I'd like to go.",
                portuguese: "Já estiveste em Paris? Não, mas gostaria de ir.",
                audio: "have_you_been",
              },
              {
                english: "I will travel next month. Where will you go? To Portugal.",
                portuguese: "Vou viajar o próximo mês. Aonde vais? A Portugal.",
                audio: "i_will_travel",
              },
              {
                english: "Do you cook? Yes, I cook every day. Can you make pasta?",
                portuguese: "Cozinhas? Sim, cozinho todos os dias. Consegues fazer massa?",
                audio: "do_you_cook",
              },
            ],
            keyVocabulary: [
              { word: "Weekend", meaning: "Fim de semana", partOfSpeech: "noun" },
              { word: "Travel", meaning: "Viajar", partOfSpeech: "verb" },
              { word: "Cook", meaning: "Cozinhar", partOfSpeech: "verb" },
              { word: "Exciting", meaning: "Emocionante", partOfSpeech: "adjective" },
              { word: "Great time", meaning: "Ótimo tempo", partOfSpeech: "expression" },
              { word: "First time", meaning: "Primeira vez", partOfSpeech: "expression" },
            ],
          },
          exercises: [
            {
              id: "a2-m8-l1-ex1",
              type: "translation",
              question: "Traduz: 'O que fizeste o fim de semana passado?'",
              answer: "what did you do last weekend",
              hint: "What did you do + time expression",
              explanation: "Past Simple com 'did'",
            },
            {
              id: "a2-m8-l1-ex2",
              type: "fill-the-blank",
              question: "Complete: 'That ___ exciting!'",
              answer: "sounds",
              options: ["sounds", "is", "feels"],
              explanation: "'That sounds...' é uma expressão comum",
            },
            {
              id: "a2-m8-l1-ex3",
              type: "multiple-choice",
              question: "Como responde a 'Have you ever been to Spain?'",
              options: [
                { text: "No, I haven't. But I'd like to go.", correct: true },
                { text: "No, I don't.", correct: false },
                { text: "No, I wasn't.", correct: false },
              ],
              explanation: "Resposta com Present Perfect",
            },
            {
              id: "a2-m8-l1-ex4",
              type: "listening",
              question: "Ouve e escolhe o verbo usado:",
              audio: "what_did_you_do",
              options: [
                { text: "Did (Past Simple)", correct: true },
                { text: "Do (Present Simple)", correct: false },
                { text: "Will (Future)", correct: false },
              ],
              explanation: "'What did you do' usa Past Simple",
            },
          ],
        },
      ],
    },
  ],
};

export default curriculumA2;
