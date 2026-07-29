// Complete A1 Curriculum
export const curriculumA1 = {
  level: "A1",
  title: "Iniciante - Fundações do Inglês",
  description: "Aprende o básico do inglês: saudações, verbo 'to be', presente simples e vocabulário essencial.",
  modules: [
    {
      id: "a1-m1",
      order: 1,
      title: "Saudações e Apresentações",
      description: "Hello, Hi, Goodbye e como apresentar-te",
      lessonCount: 1,
      xpReward: 100,
      unlocked: true,
      lessons: [
        {
          id: "a1-m1-l1",
          title: "Hello! Como dizer Olá",
          duration: 8,
          content: {
            intro: "Nesta aula, aprendes as saudações básicas em inglês e como fazer uma apresentação simples.",
            explanation: `
## Saudações Básicas

### Formal vs Informal
- **Hello** (formal, profissional)
- **Hi** (informal, amigos)
- **Hey** (muito informal, amigos próximos)

### Respostas
- "Hello!" → "Hello!" / "Hi!"
- "How are you?" → "I'm fine, thanks!"

### Apresentação Simples
- "My name is John" = "I'm John"
- "What's your name?" = "Como te chamas?"
            `,
            examples: [
              {
                english: "Hello, my name is Sarah.",
                portuguese: "Olá, meu nome é Sarah.",
                audio: "hello_my_name_is_sarah",
              },
              {
                english: "Hi! I'm John. What's your name?",
                portuguese: "Oi! Sou João. Como te chamas?",
                audio: "hi_im_john_whats_your_name",
              },
              {
                english: "Nice to meet you!",
                portuguese: "Prazer em conhecer-te!",
                audio: "nice_to_meet_you",
              },
              {
                english: "How are you? I'm fine, thanks!",
                portuguese: "Como estás? Estou bem, obrigado!",
                audio: "how_are_you_im_fine",
              },
              {
                english: "Goodbye! See you later!",
                portuguese: "Adeus! Até mais tarde!",
                audio: "goodbye_see_you_later",
              },
            ],
            keyVocabulary: [
              { word: "Hello", meaning: "Olá", partOfSpeech: "interjection" },
              { word: "Hi", meaning: "Oi", partOfSpeech: "interjection" },
              { word: "Goodbye", meaning: "Adeus", partOfSpeech: "interjection" },
              { word: "Name", meaning: "Nome", partOfSpeech: "noun" },
              { word: "Meet", meaning: "Conhecer", partOfSpeech: "verb" },
              { word: "Thanks", meaning: "Obrigado", partOfSpeech: "interjection" },
            ],
          },
          exercises: [
            {
              id: "a1-m1-l1-ex1",
              type: "multiple-choice",
              question: "Como dizes 'Como te chamas?' em inglês?",
              options: [
                { text: "What's your name?", correct: true },
                { text: "What's your age?", correct: false },
                { text: "Where are you?", correct: false },
              ],
              explanation: "Usamos 'What's your name?' para perguntar o nome de alguém.",
            },
            {
              id: "a1-m1-l1-ex2",
              type: "translation",
              question: "Traduz para inglês: 'Olá, meu nome é Maria'",
              answer: "hello my name is maria",
              hint: "Começa com 'Hello' ou 'Hi'",
              explanation: "Forma: Hello/Hi + , + my name is + [nome]",
            },
            {
              id: "a1-m1-l1-ex3",
              type: "fill-the-blank",
              question: "Complete: 'I'm fine, _____'",
              answer: "thanks",
              options: ["thanks", "sorry", "please"],
              explanation: "Quando alguém pergunta 'How are you?', respondemos com 'I'm fine, thanks!'",
            },
            {
              id: "a1-m1-l1-ex4",
              type: "listening",
              question: "Ouve e escolhe o que ouviste:",
              audio: "nice_to_meet_you",
              options: [
                { text: "Nice to meet you", correct: true },
                { text: "Nice to see you", correct: false },
                { text: "Nice day", correct: false },
              ],
              explanation: "'Nice to meet you' é a forma correta de dizer 'Prazer em conhecer-te'",
            },
          ],
        },
      ],
    },
    {
      id: "a1-m2",
      order: 2,
      title: "Verbo 'To Be' - Presente",
      description: "I am, You are, He/She is - Presente do verbo ser/estar",
      lessonCount: 2,
      xpReward: 150,
      unlocked: false,
      lessons: [
        {
          id: "a1-m2-l1",
          title: "To Be: Affirmative (Positivo)",
          duration: 10,
          content: {
            intro: "O verbo 'to be' é o verbo mais importante em inglês. Significa 'ser' ou 'estar'.",
            explanation: `
## Verbo 'To Be' - Presente Positivo

### Conjugação
- **I am** = Eu sou/estou
- **You are** = Tu és/estás
- **He is** = Ele é/está
- **She is** = Ela é/está
- **It is** = Isto é/está
- **We are** = Nós somos/estamos
- **They are** = Eles/Elas são/estão

### Contracções (muito comuns)
- I'm (I am)
- You're (You are)
- He's (He is)
- She's (She is)
- It's (It is)
- We're (We are)
- They're (They are)

### Uso
- Identidade: "I am a teacher" (Sou professor)
- Estado: "She is happy" (Ela está feliz)
- Localização: "He is here" (Ele está aqui)
- Nacionalidade: "They are Portuguese" (Eles são portugueses)
            `,
            examples: [
              {
                english: "I am Sarah.",
                portuguese: "Eu sou a Sarah.",
                audio: "i_am_sarah",
              },
              {
                english: "You are a student.",
                portuguese: "Tu és um estudante.",
                audio: "you_are_a_student",
              },
              {
                english: "He is a doctor.",
                portuguese: "Ele é médico.",
                audio: "he_is_a_doctor",
              },
              {
                english: "She is happy.",
                portuguese: "Ela está feliz.",
                audio: "she_is_happy",
              },
              {
                english: "We are here.",
                portuguese: "Nós estamos aqui.",
                audio: "we_are_here",
              },
            ],
            keyVocabulary: [
              { word: "Am", meaning: "Sou/Estou (I)", partOfSpeech: "verb" },
              { word: "Are", meaning: "Sou/Estou (You/We/They)", partOfSpeech: "verb" },
              { word: "Is", meaning: "É/Está (He/She/It)", partOfSpeech: "verb" },
              { word: "Teacher", meaning: "Professor", partOfSpeech: "noun" },
              { word: "Student", meaning: "Estudante", partOfSpeech: "noun" },
              { word: "Happy", meaning: "Feliz", partOfSpeech: "adjective" },
            ],
          },
          exercises: [
            {
              id: "a1-m2-l1-ex1",
              type: "fill-the-blank",
              question: "Complete: 'I ___ a student.'",
              answer: "am",
              options: ["am", "are", "is"],
              explanation: "Usamos 'am' com 'I'",
            },
            {
              id: "a1-m2-l1-ex2",
              type: "fill-the-blank",
              question: "Complete: 'He ___ a teacher.'",
              answer: "is",
              options: ["am", "are", "is"],
              explanation: "Usamos 'is' com 'He'",
            },
            {
              id: "a1-m2-l1-ex3",
              type: "translation",
              question: "Traduz: 'Eles são felizes'",
              answer: "they are happy",
              hint: "They are + adjectivo",
              explanation: "Conjugação: They (eles) + are + happy (felizes)",
            },
            {
              id: "a1-m2-l1-ex4",
              type: "multiple-choice",
              question: "Qual é a contração correta de 'I am'?",
              options: [
                { text: "I'm", correct: true },
                { text: "Im", correct: false },
                { text: "I'am", correct: false },
              ],
              explanation: "'I'm' é a forma contrata de 'I am'",
            },
          ],
        },
        {
          id: "a1-m2-l2",
          title: "To Be: Negative & Questions",
          duration: 10,
          content: {
            intro: "Aprende a fazer negações e perguntas com o verbo 'to be'.",
            explanation: `
## Negações com 'To Be'

### Padrão
- I **am not** = Eu não sou
- You **are not** = Tu não és
- He **is not** = Ele não é
- Contrações: I'm not, You're not (ou You aren't), He's not (ou He isn't)

## Perguntas com 'To Be'

### Padrão (Inversão)
**Am/Are/Is + Pronome + ...?**

- **Am I** a student? = Sou eu um estudante?
- **Are you** happy? = Estás feliz?
- **Is he** a teacher? = É ele professor?
- **Are they** here? = Estão eles aqui?

### Respostas Curtas
- Am I a student? → Yes, you are. / No, you're not.
- Is she happy? → Yes, she is. / No, she's not.
            `,
            examples: [
              {
                english: "I am not a doctor.",
                portuguese: "Não sou médico.",
                audio: "i_am_not_a_doctor",
              },
              {
                english: "They are not here.",
                portuguese: "Eles não estão aqui.",
                audio: "they_are_not_here",
              },
              {
                english: "Are you a student?",
                portuguese: "Estás a estudar?",
                audio: "are_you_a_student",
              },
              {
                english: "Is she happy? Yes, she is!",
                portuguese: "Ela está feliz? Sim, está!",
                audio: "is_she_happy_yes",
              },
              {
                english: "Am I late? No, you're not.",
                portuguese: "Estou atrasado? Não, não estás.",
                audio: "am_i_late",
              },
            ],
            keyVocabulary: [
              { word: "Not", meaning: "Não", partOfSpeech: "adverb" },
              { word: "Late", meaning: "Atrasado", partOfSpeech: "adjective" },
              { word: "Here", meaning: "Aqui", partOfSpeech: "adverb" },
              { word: "Doctor", meaning: "Médico", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "a1-m2-l2-ex1",
              type: "fill-the-blank",
              question: "Complete: 'I ___ not a teacher.'",
              answer: "am",
              options: ["am", "are", "is"],
              explanation: "Negação com 'I': I am not",
            },
            {
              id: "a1-m2-l2-ex2",
              type: "translation",
              question: "Traduz a pergunta: 'Estás feliz?'",
              answer: "are you happy",
              hint: "Começa com 'Are'",
              explanation: "Pergunta com 'You': Are you + adjectivo?",
            },
            {
              id: "a1-m2-l2-ex3",
              type: "multiple-choice",
              question: "Responda com resposta curta: 'Is he a student?' - 'Não'",
              options: [
                { text: "No, he's not.", correct: true },
                { text: "No, he is not.", correct: false },
                { text: "No, he aren't.", correct: false },
              ],
              explanation: "Resposta curta: No, he's not. (ou No, he isn't.)",
            },
            {
              id: "a1-m2-l2-ex4",
              type: "listening",
              question: "Ouve e escolhe se é afirmativo ou negativo:",
              audio: "they_are_not_here",
              options: [
                { text: "Negativo (Not)", correct: true },
                { text: "Afirmativo", correct: false },
              ],
              explanation: "A frase contém 'are not' (negativo)",
            },
          ],
        },
      ],
    },
    {
      id: "a1-m3",
      order: 3,
      title: "Artigos e Plurais",
      description: "'A', 'An', 'The' e formação do plural",
      lessonCount: 1,
      xpReward: 100,
      unlocked: false,
      lessons: [
        {
          id: "a1-m3-l1",
          title: "Artigos e Plurais Básicos",
          duration: 10,
          content: {
            intro: "Aprende a usar artigos (a, an, the) e como fazer plurais em inglês.",
            explanation: `
## Artigos Indefinidos: A e An

### Quando usar
- **A** = antes de sons consonânticos
  - a teacher, a book, a cat
- **An** = antes de sons vocálicos (a, e, i, o, u)
  - an apple, an egg, an hour, an umbrella

### Uso
- Primeira menção: "I have a cat" (tenho um gato)
- Profissões: "She is a doctor" (Ela é médica)

## Artigo Definido: The

### Uso
- Quando já foi mencionado: "I have a cat. The cat is black." (O gato é preto)
- Coisas específicas/únicas: "The sun", "The president", "The moon"
- Nacionalidades: "The British", "The Portuguese"

## Plurais

### Regra Geral: Adiciona -s
- cat → cats
- book → books
- dog → dogs

### Exceções
- -s, -ss, -sh, -ch, -x, -z: adiciona -es
  - box → boxes, class → classes
- Consoante + y: muda y em -ies
  - baby → babies, city → cities
- Vogal + y: apenas adiciona -s
  - boy → boys, day → days
- -f ou -fe: muda para -ves
  - knife → knives, wife → wives
- Irregulares: man → men, child → children, person → people
            `,
            examples: [
              {
                english: "I have a book.",
                portuguese: "Tenho um livro.",
                audio: "i_have_a_book",
              },
              {
                english: "She is an engineer.",
                portuguese: "Ela é engenheira.",
                audio: "she_is_an_engineer",
              },
              {
                english: "The cat is black.",
                portuguese: "O gato é preto.",
                audio: "the_cat_is_black",
              },
              {
                english: "I have three cats.",
                portuguese: "Tenho três gatos.",
                audio: "i_have_three_cats",
              },
              {
                english: "The children are happy.",
                portuguese: "As crianças estão felizes.",
                audio: "the_children_are_happy",
              },
            ],
            keyVocabulary: [
              { word: "Article", meaning: "Artigo", partOfSpeech: "noun" },
              { word: "Singular", meaning: "Singular", partOfSpeech: "adjective" },
              { word: "Plural", meaning: "Plural", partOfSpeech: "adjective" },
              { word: "Book", meaning: "Livro", partOfSpeech: "noun" },
              { word: "Cat", meaning: "Gato", partOfSpeech: "noun" },
              { word: "Engineer", meaning: "Engenheiro/a", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "a1-m3-l1-ex1",
              type: "multiple-choice",
              question: "Qual é o artigo correto? '___ apple'",
              options: [
                { text: "An apple", correct: true },
                { text: "A apple", correct: false },
              ],
              explanation: "'Apple' começa com som vocálico, usa-se 'an'",
            },
            {
              id: "a1-m3-l1-ex2",
              type: "fill-the-blank",
              question: "Complete: 'I have ___ cats.' (plural de cat)",
              answer: "cats",
              hint: "Adiciona -s",
              explanation: "Plural regular: cat → cats",
            },
            {
              id: "a1-m3-l1-ex3",
              type: "translation",
              question: "Traduz: 'Os livros estão aqui'",
              answer: "the books are here",
              hint: "Usa 'The' + plural",
              explanation: "The (definido) + books (plural) + are here",
            },
            {
              id: "a1-m3-l1-ex4",
              type: "multiple-choice",
              question: "Qual é o plural correto de 'child'?",
              options: [
                { text: "children", correct: true },
                { text: "childs", correct: false },
                { text: "childes", correct: false },
              ],
              explanation: "'Child' é irregular: child → children",
            },
          ],
        },
      ],
    },
    {
      id: "a1-m4",
      order: 4,
      title: "Presente Simples - Ações do Dia a Dia",
      description: "Present Simple: I work, You play, She reads",
      lessonCount: 2,
      xpReward: 150,
      unlocked: false,
      lessons: [
        {
          id: "a1-m4-l1",
          title: "Present Simple - Afirmativo",
          duration: 10,
          content: {
            intro: "O Present Simple é usado para ações rotineiras e hábitos.",
            explanation: `
## Present Simple - Afirmativo

### Conjugação (Verbo: "to work" = trabalhar)
- **I work** = Eu trabalho
- **You work** = Tu trabalhas
- **He/She/It works** = Ele/Ela trabalha (adiciona -s ou -es)
- **We work** = Nós trabalhamos
- **They work** = Eles trabalham

### Regra do -s para 3ª pessoa singular
- work → works
- play → plays
- go → goes (adiciona -es)
- watch → watches (adiciona -es se termina em -ch)
- study → studies (y muda para -ies)

### Uso
- Hábitos: "I drink coffee every morning" (Bebo café cada manhã)
- Rotina: "She works in a hospital" (Ela trabalha num hospital)
- Fatos: "They live in Portugal" (Eles moram em Portugal)
- Verdades gerais: "The sun rises in the east" (O sol nasce no oriente)
            `,
            examples: [
              {
                english: "I work in an office.",
                portuguese: "Trabalho num escritório.",
                audio: "i_work_in_an_office",
              },
              {
                english: "She plays the guitar.",
                portuguese: "Ela toca guitarra.",
                audio: "she_plays_the_guitar",
              },
              {
                english: "They go to school every day.",
                portuguese: "Eles vão para a escola todos os dias.",
                audio: "they_go_to_school",
              },
              {
                english: "He watches TV in the evening.",
                portuguese: "Ele vê TV à noite.",
                audio: "he_watches_tv",
              },
              {
                english: "We like pizza.",
                portuguese: "Nós gostamos de pizza.",
                audio: "we_like_pizza",
              },
            ],
            keyVocabulary: [
              { word: "Work", meaning: "Trabalhar", partOfSpeech: "verb" },
              { word: "Play", meaning: "Jogar/Tocar", partOfSpeech: "verb" },
              { word: "Go", meaning: "Ir", partOfSpeech: "verb" },
              { word: "Watch", meaning: "Ver/Assistir", partOfSpeech: "verb" },
              { word: "Like", meaning: "Gostar", partOfSpeech: "verb" },
              { word: "Office", meaning: "Escritório", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "a1-m4-l1-ex1",
              type: "fill-the-blank",
              question: "Complete: 'She ___ (work) in a bank.'",
              answer: "works",
              options: ["work", "works", "working"],
              explanation: "3ª pessoa singular: she works",
            },
            {
              id: "a1-m4-l1-ex2",
              type: "fill-the-blank",
              question: "Complete: 'They ___ (study) English every day.'",
              answer: "study",
              options: ["studies", "study", "studys"],
              explanation: "They + verbo base: they study",
            },
            {
              id: "a1-m4-l1-ex3",
              type: "translation",
              question: "Traduz: 'Ele joga futebol no fim de semana'",
              answer: "he plays football on the weekend",
              hint: "He plays + atividade",
              explanation: "Present Simple 3ª pessoa: play → plays",
            },
            {
              id: "a1-m4-l1-ex4",
              type: "multiple-choice",
              question: "Qual é a forma correta de 'watch' na 3ª pessoa singular?",
              options: [
                { text: "watches", correct: true },
                { text: "watchs", correct: false },
                { text: "watchies", correct: false },
              ],
              explanation: "watch → watches (adiciona -es)",
            },
          ],
        },
        {
          id: "a1-m4-l2",
          title: "Present Simple - Negativo e Perguntas",
          duration: 10,
          content: {
            intro: "Como fazer negações e perguntas no Present Simple.",
            explanation: `
## Present Simple - Negativo

### Com DO/DOES
- **I don't work** = Não trabalho
- **You don't work** = Não trabalhas
- **He/She/It doesn't work** = Ela/Ele não trabalha
- **We don't work** = Não trabalhamos
- **They don't work** = Não trabalham

### Contracções
- don't (do not)
- doesn't (does not)

## Present Simple - Perguntas

### Padrão: DO/DOES + Pronome + Verbo + ...?
- **Do I** work? = Trabalho eu?
- **Do you** like pizza? = Gostas de pizza?
- **Does he** work here? = Ele trabalha aqui?
- **Do they** play football? = Eles jogam futebol?

### Respostas Curtas
- Do you work? → Yes, I do. / No, I don't.
- Does she play? → Yes, she does. / No, she doesn't.

### IMPORTANTE
- A 3ª pessoa singular (he/she/it) usa DOES
- Depois de DOES, o verbo fica no infinitivo (sem -s)
  - Correto: Does he work?
  - Errado: Does he works?
            `,
            examples: [
              {
                english: "I don't like coffee.",
                portuguese: "Não gosto de café.",
                audio: "i_dont_like_coffee",
              },
              {
                english: "She doesn't work on Sundays.",
                portuguese: "Ela não trabalha aos domingos.",
                audio: "she_doesnt_work_sundays",
              },
              {
                english: "Do you speak English?",
                portuguese: "Falas inglês?",
                audio: "do_you_speak_english",
              },
              {
                english: "Does he play the piano? Yes, he does!",
                portuguese: "Ele toca piano? Sim, toca!",
                audio: "does_he_play_piano",
              },
              {
                english: "Do they like swimming? No, they don't.",
                portuguese: "Eles gostam de nadar? Não.",
                audio: "do_they_like_swimming",
              },
            ],
            keyVocabulary: [
              { word: "Don't", meaning: "Não (não faço)", partOfSpeech: "contraction" },
              { word: "Doesn't", meaning: "Não (ele/ela não faz)", partOfSpeech: "contraction" },
              { word: "Speak", meaning: "Falar", partOfSpeech: "verb" },
              { word: "Piano", meaning: "Piano", partOfSpeech: "noun" },
              { word: "Swimming", meaning: "Natação", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "a1-m4-l2-ex1",
              type: "fill-the-blank",
              question: "Complete: 'I ___ like pizza.'",
              answer: "don't",
              options: ["don't", "doesn't", "not"],
              explanation: "I + don't (não doesnt)",
            },
            {
              id: "a1-m4-l2-ex2",
              type: "fill-the-blank",
              question: "Complete: 'She ___ speak French.'",
              answer: "doesn't",
              options: ["don't", "doesn't", "don"],
              explanation: "She + doesn't (3ª pessoa singular)",
            },
            {
              id: "a1-m4-l2-ex3",
              type: "translation",
              question: "Traduz a pergunta: 'Ele trabalha aqui?'",
              answer: "does he work here",
              hint: "Começa com Does",
              explanation: "Pergunta 3ª pessoa: Does + he + verbo base + ...?",
            },
            {
              id: "a1-m4-l2-ex4",
              type: "multiple-choice",
              question: "Responde com resposta curta: 'Do you speak English?' - 'Sim'",
              options: [
                { text: "Yes, I do.", correct: true },
                { text: "Yes, I am.", correct: false },
                { text: "Yes, I speak.", correct: false },
              ],
              explanation: "Resposta curta: Yes, I do.",
            },
          ],
        },
      ],
    },
    {
      id: "a1-m5",
      order: 5,
      title: "Vocabulário Essencial - Família",
      description: "Palavras sobre família, relacionamentos",
      lessonCount: 1,
      xpReward: 80,
      unlocked: false,
      lessons: [
        {
          id: "a1-m5-l1",
          title: "Família e Relacionamentos",
          duration: 8,
          content: {
            intro: "Aprende as palavras essenciais para descrever a família.",
            explanation: `
## Família

### Relações Diretas
- **Mother** = Mãe
- **Father** = Pai
- **Sister** = Irmã
- **Brother** = Irmão
- **Son** = Filho
- **Daughter** = Filha
- **Wife** = Esposa
- **Husband** = Marido

### Família Alargada
- **Grandmother** = Avó
- **Grandfather** = Avô
- **Aunt** = Tia
- **Uncle** = Tio
- **Cousin** = Primo/Prima
- **Nephew** = Sobrinho
- **Niece** = Sobrinha

### Outras Relações
- **Grandchild** = Neto/Neta
- **In-law** = Enteado/Cunhado (família política)
- **Relative** = Parente
- **Friend** = Amigo/Amiga
- **Boyfriend/Girlfriend** = Namorado/Namorada
            `,
            examples: [
              {
                english: "This is my mother.",
                portuguese: "Esta é a minha mãe.",
                audio: "this_is_my_mother",
              },
              {
                english: "I have two sisters.",
                portuguese: "Tenho duas irmãs.",
                audio: "i_have_two_sisters",
              },
              {
                english: "My father is a doctor.",
                portuguese: "O meu pai é médico.",
                audio: "my_father_is_a_doctor",
              },
              {
                english: "She is my cousin.",
                portuguese: "Ela é a minha prima.",
                audio: "she_is_my_cousin",
              },
              {
                english: "My grandparents live in Portugal.",
                portuguese: "Os meus avós vivem em Portugal.",
                audio: "my_grandparents_live",
              },
            ],
            keyVocabulary: [
              { word: "Mother", meaning: "Mãe", partOfSpeech: "noun" },
              { word: "Father", meaning: "Pai", partOfSpeech: "noun" },
              { word: "Sister", meaning: "Irmã", partOfSpeech: "noun" },
              { word: "Brother", meaning: "Irmão", partOfSpeech: "noun" },
              { word: "Grandmother", meaning: "Avó", partOfSpeech: "noun" },
              { word: "Grandfather", meaning: "Avô", partOfSpeech: "noun" },
              { word: "Cousin", meaning: "Primo/Prima", partOfSpeech: "noun" },
              { word: "Aunt", meaning: "Tia", partOfSpeech: "noun" },
              { word: "Uncle", meaning: "Tio", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "a1-m5-l1-ex1",
              type: "translation",
              question: "Traduz: 'Mãe' em inglês",
              answer: "mother",
              hint: "Começa com 'm'",
              explanation: "Mother é o membro da família feminino mais velho",
            },
            {
              id: "a1-m5-l1-ex2",
              type: "multiple-choice",
              question: "Qual é a palavra para 'avô'?",
              options: [
                { text: "Grandfather", correct: true },
                { text: "Grandson", correct: false },
                { text: "Grandpa", correct: false },
              ],
              explanation: "Grandfather = avô (pai do pai/mãe)",
            },
            {
              id: "a1-m5-l1-ex3",
              type: "fill-the-blank",
              question: "Complete: 'My ___ is a teacher.' (irmã)",
              answer: "sister",
              hint: "Feminino de brother",
              explanation: "Sister = irmã",
            },
            {
              id: "a1-m5-l1-ex4",
              type: "listening",
              question: "Ouve e escolhe a palavra que ouviste:",
              audio: "cousin",
              options: [
                { text: "Cousin", correct: true },
                { text: "Sister", correct: false },
                { text: "Mother", correct: false },
              ],
              explanation: "Cousin = primo ou prima",
            },
          ],
        },
      ],
    },
    {
      id: "a1-m6",
      order: 6,
      title: "Presente Contínuo - Ações Agora",
      description: "I am reading, You are playing, She is studying",
      lessonCount: 1,
      xpReward: 100,
      unlocked: false,
      lessons: [
        {
          id: "a1-m6-l1",
          title: "Present Continuous - O que está a acontecer agora",
          duration: 10,
          content: {
            intro: "Usado para descrever ações que estão a acontecer NESTE MOMENTO.",
            explanation: `
## Present Continuous (Estar + -ing)

### Estrutura: TO BE + Verbo + -ING
- **I am reading** = Estou a ler
- **You are playing** = Estás a jogar
- **He/She/It is studying** = Está a estudar
- **We are working** = Estamos a trabalhar
- **They are talking** = Estão a falar

### Contracções (muito comuns)
- I'm reading
- You're playing
- He's/She's/It's studying
- We're working
- They're talking

### Formação do -ING

**Regra Geral: adiciona -ing**
- read → reading
- play → playing
- work → working

**Exceções:**
- Verbo termina em -e mudo: remove o e
  - write → writing
  - come → coming
  - use → using
- Verbo monossilábico com consoante+vogal+consoante: duplica consoante
  - stop → stopping
  - run → running
  - sit → sitting
- Verbo termina em -ie: muda para -ying
  - die → dying
  - lie → lying

### Uso
- Ação atual: "I'm reading a book" (Estou a ler um livro)
- Situação temporária: "She's living in Lisbon" (Ela está a viver em Lisboa)
- Mudança no presente: "The weather is getting cold" (O tempo está a ficar frio)

### Diferença: Simple vs Continuous
- **I work in an office** (rotina/fato)
- **I am working right now** (neste momento)
            `,
            examples: [
              {
                english: "I am reading a book right now.",
                portuguese: "Estou a ler um livro agora.",
                audio: "i_am_reading_book",
              },
              {
                english: "She is playing the guitar.",
                portuguese: "Ela está a tocar guitarra.",
                audio: "she_is_playing_guitar",
              },
              {
                english: "They are talking about the weather.",
                portuguese: "Eles estão a falar sobre o tempo.",
                audio: "they_are_talking_weather",
              },
              {
                english: "What are you doing?",
                portuguese: "O que estás a fazer?",
                audio: "what_are_you_doing",
              },
              {
                english: "He's not working today.",
                portuguese: "Ele não está a trabalhar hoje.",
                audio: "he_is_not_working",
              },
            ],
            keyVocabulary: [
              { word: "Reading", meaning: "Ler (a ler)", partOfSpeech: "gerund" },
              { word: "Playing", meaning: "Jogar (a jogar)", partOfSpeech: "gerund" },
              { word: "Writing", meaning: "Escrever (a escrever)", partOfSpeech: "gerund" },
              { word: "Talking", meaning: "Falar (a falar)", partOfSpeech: "gerund" },
              { word: "Working", meaning: "Trabalhar (a trabalhar)", partOfSpeech: "gerund" },
              { word: "Studying", meaning: "Estudar (a estudar)", partOfSpeech: "gerund" },
            ],
          },
          exercises: [
            {
              id: "a1-m6-l1-ex1",
              type: "fill-the-blank",
              question: "Complete: 'I ___ (read) a book.' (Estou a ler)",
              answer: "am reading",
              options: ["am reading", "read", "reads"],
              explanation: "Present Continuous: am + reading",
            },
            {
              id: "a1-m6-l1-ex2",
              type: "fill-the-blank",
              question: "Complete: 'He ___ (play) football right now.'",
              answer: "is playing",
              options: ["is playing", "plays", "play"],
              explanation: "3ª pessoa singular: is + playing",
            },
            {
              id: "a1-m6-l1-ex3",
              type: "translation",
              question: "Traduz: 'Ela está a estudar inglês'",
              answer: "she is studying english",
              hint: "She is + gerund",
              explanation: "Present Continuous: is + studying",
            },
            {
              id: "a1-m6-l1-ex4",
              type: "multiple-choice",
              question: "Qual é o -ing correto de 'write'?",
              options: [
                { text: "writing", correct: true },
                { text: "writeing", correct: false },
                { text: "writting", correct: false },
              ],
              explanation: "write → writing (remove -e antes de -ing)",
            },
          ],
        },
      ],
    },
    {
      id: "a1-m7",
      order: 7,
      title: "Números, Horas e Datas",
      description: "1-100, horas, dias da semana, meses",
      lessonCount: 1,
      xpReward: 80,
      unlocked: false,
      lessons: [
        {
          id: "a1-m7-l1",
          title: "Números, Horas, Dias e Meses",
          duration: 10,
          content: {
            intro: "Aprende a contar, dizer as horas e os dias da semana.",
            explanation: `
## Números (0-100)

### 0-10
0=Zero, 1=One, 2=Two, 3=Three, 4=Four, 5=Five, 6=Six, 7=Seven, 8=Eight, 9=Nine, 10=Ten

### 11-20
11=Eleven, 12=Twelve, 13=Thirteen, 14=Fourteen, 15=Fifteen, 16=Sixteen, 17=Seventeen, 18=Eighteen, 19=Nineteen, 20=Twenty

### Tens
20=Twenty, 30=Thirty, 40=Forty, 50=Fifty, 60=Sixty, 70=Seventy, 80=Eighty, 90=Ninety, 100=One Hundred

### Números Compostos
21 = Twenty-one, 35 = Thirty-five, 99 = Ninety-nine

## Dias da Semana
Monday (segunda), Tuesday (terça), Wednesday (quarta), Thursday (quinta), Friday (sexta), Saturday (sábado), Sunday (domingo)

## Meses
January (janeiro), February (fevereiro), March (março), April (abril), May (maio), June (junho), July (julho), August (agosto), September (setembro), October (outubro), November (novembro), December (dezembro)

## Horas

### Formato 12h (informal)
- 3:00 = Three o'clock
- 3:15 = Three fifteen / Quarter past three
- 3:30 = Three thirty / Half past three
- 3:45 = Three forty-five / Quarter to four

### Formato 24h (formal)
- 15:00 = Fifteen o'clock
- 15:30 = Fifteen thirty

### Perguntas
- "What time is it?" = Que horas são?
- "What's the time?" = Que horas são?
            `,
            examples: [
              {
                english: "I'm twenty-five years old.",
                portuguese: "Tenho vinte e cinco anos.",
                audio: "im_twenty_five",
              },
              {
                english: "Monday is the first day of the week.",
                portuguese: "Segunda é o primeiro dia da semana.",
                audio: "monday_first_day",
              },
              {
                english: "My birthday is in July.",
                portuguese: "O meu aniversário é em julho.",
                audio: "birthday_july",
              },
              {
                english: "What time is it? It's three o'clock.",
                portuguese: "Que horas são? São 3 horas.",
                audio: "what_time_three",
              },
              {
                english: "I wake up at seven in the morning.",
                portuguese: "Acordo às sete da manhã.",
                audio: "wake_up_seven",
              },
            ],
            keyVocabulary: [
              { word: "Number", meaning: "Número", partOfSpeech: "noun" },
              { word: "Time", meaning: "Hora/Tempo", partOfSpeech: "noun" },
              { word: "Day", meaning: "Dia", partOfSpeech: "noun" },
              { word: "Month", meaning: "Mês", partOfSpeech: "noun" },
              { word: "Year", meaning: "Ano", partOfSpeech: "noun" },
              { word: "Week", meaning: "Semana", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "a1-m7-l1-ex1",
              type: "translation",
              question: "Traduz o número: 25",
              answer: "twenty five",
              hint: "Twenty + five",
              explanation: "25 = twenty-five (com hífen)",
            },
            {
              id: "a1-m7-l1-ex2",
              type: "multiple-choice",
              question: "Qual é o segundo dia da semana?",
              options: [
                { text: "Tuesday", correct: true },
                { text: "Monday", correct: false },
                { text: "Wednesday", correct: false },
              ],
              explanation: "Ordem: Monday, Tuesday, Wednesday...",
            },
            {
              id: "a1-m7-l1-ex3",
              type: "fill-the-blank",
              question: "Complete: 'My birthday is in ___ (dezembro)'",
              answer: "december",
              options: ["december", "december", "decembre"],
              explanation: "December é o 12º mês",
            },
            {
              id: "a1-m7-l1-ex4",
              type: "listening",
              question: "Ouve e diz que hora é:",
              audio: "what_time_three",
              options: [
                { text: "3 o'clock", correct: true },
                { text: "2 o'clock", correct: false },
                { text: "4 o'clock", correct: false },
              ],
              explanation: "Three o'clock = 3 horas",
            },
          ],
        },
      ],
    },
    {
      id: "a1-m8",
      order: 8,
      title: "Conversação Básica - Reunião de Pessoas",
      description: "Dialogues de cumprimentos, perguntas simples",
      lessonCount: 1,
      xpReward: 100,
      unlocked: false,
      lessons: [
        {
          id: "a1-m8-l1",
          title: "Conversas do Dia a Dia",
          duration: 10,
          content: {
            intro: "Aprende frases completas para conversas básicas no dia a dia.",
            explanation: `
## Conversação 1: Saudação Matinal

**Person A:** Good morning! How are you?
**Person B:** I'm fine, thanks! How are you?
**Person A:** I'm very well, thank you.

## Conversação 2: Apresentação

**Person A:** Hi, I'm Sarah. What's your name?
**Person B:** I'm John. Nice to meet you!
**Person A:** Nice to meet you too!

## Conversação 3: Perguntas Simples

**Person A:** Do you work?
**Person B:** Yes, I do. I work in a hospital. What about you?
**Person A:** I work in an office.

## Conversação 4: Sobre a Família

**Person A:** Do you have brothers and sisters?
**Person B:** Yes, I have one sister. Her name is Anna.
**Person A:** That's nice! How old is she?
**Person B:** She's twenty-three.

## Expressões Úteis
- "How are you?" = Como estás?
- "I'm fine, thanks!" = Estou bem, obrigado!
- "What's your name?" = Como te chamas?
- "Nice to meet you" = Prazer em conhecer-te
- "What do you do?" = O que fazes?
- "Where are you from?" = De onde és?
- "Do you speak English?" = Falas inglês?
            `,
            examples: [
              {
                english: "Good morning! How are you today?",
                portuguese: "Bom dia! Como estás hoje?",
                audio: "good_morning_how_are_you",
              },
              {
                english: "I work as a teacher. What do you do?",
                portuguese: "Trabalho como professor. O que fazes?",
                audio: "i_work_as_teacher",
              },
              {
                english: "Nice to meet you! Where are you from?",
                portuguese: "Prazer! De onde és?",
                audio: "nice_to_meet_where_from",
              },
              {
                english: "I have three sisters. Do you have any siblings?",
                portuguese: "Tenho três irmãs. Tens irmãos?",
                audio: "i_have_three_sisters",
              },
              {
                english: "I'm from Portugal. I'm Portuguese.",
                portuguese: "Sou de Portugal. Sou português.",
                audio: "im_from_portugal",
              },
            ],
            keyVocabulary: [
              { word: "Good morning", meaning: "Bom dia", partOfSpeech: "interjection" },
              { word: "Thank you", meaning: "Obrigado", partOfSpeech: "interjection" },
              { word: "Thanks", meaning: "Obrigado", partOfSpeech: "interjection" },
              { word: "Brother", meaning: "Irmão", partOfSpeech: "noun" },
              { word: "Sister", meaning: "Irmã", partOfSpeech: "noun" },
              { word: "Teacher", meaning: "Professor", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "a1-m8-l1-ex1",
              type: "multiple-choice",
              question: "Como responde a 'How are you?'",
              options: [
                { text: "I'm fine, thanks!", correct: true },
                { text: "I'm working", correct: false },
                { text: "I'm blue", correct: false },
              ],
              explanation: "Resposta comum: I'm fine, thanks! / I'm very well, thank you.",
            },
            {
              id: "a1-m8-l1-ex2",
              type: "translation",
              question: "Traduz: 'Prazer em conhecer-te'",
              answer: "nice to meet you",
              hint: "Começa com 'Nice'",
              explanation: "'Nice to meet you' é a frase padrão",
            },
            {
              id: "a1-m8-l1-ex3",
              type: "fill-the-blank",
              question: "Complete: 'I ___ as a nurse.' (trabalho como enfermeira)",
              answer: "work",
              options: ["work", "works", "am working"],
              explanation: "Present Simple: I work as...",
            },
            {
              id: "a1-m8-l1-ex4",
              type: "listening",
              question: "Ouve a pergunta e escolhe a resposta mais apropriada:",
              audio: "what_do_you_do",
              options: [
                { text: "I'm a teacher", correct: true },
                { text: "I'm Monday", correct: false },
                { text: "I'm reading", correct: false },
              ],
              explanation: "Para 'What do you do?' responde com a profissão",
            },
          ],
        },
      ],
    },
  ],
};

export default curriculumA1;
