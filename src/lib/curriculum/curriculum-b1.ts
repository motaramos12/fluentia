const curriculumB1 = {
  level: "B1",
  title: "Intermediate (B1)",
  modules: [
    {
      id: "b1-m1",
      title: "Conditional Sentences (If... Then)",
      description: "Estruturas condicionais - If I were..., If I had...",
      lessons: [
        {
          id: "b1-m1-l1",
          title: "First & Second Conditionals",
          duration: 20,
          content: {
            intro:
              "Aprende a usar estruturas condicionais para falar sobre situações hipotéticas.",
            explanation: `Conditional sentences permitem descrever situações imaginárias:

FIRST CONDITIONAL (Real/Likely future):
- If + present simple, will + infinitive
- Example: "If I save money, I will travel to Spain"

SECOND CONDITIONAL (Unlikely/Hypothetical):
- If + past simple, would + infinitive
- Example: "If I won the lottery, I would buy a house"

THIRD CONDITIONAL (Past impossibilities):
- If + past perfect, would have + past participle
- Example: "If I had studied harder, I would have passed the exam"`,
            examples: [
              {
                english: "If you study hard, you will pass the exam.",
                portuguese: "Se estudares com afinco, passarás no exame.",
              },
              {
                english: "If I had enough money, I would travel the world.",
                portuguese: "Se tivesse dinheiro suficiente, viajaria pelo mundo.",
              },
              {
                english: "If she had told me earlier, I could have helped.",
                portuguese:
                  "Se ela me tivesse dito mais cedo, eu poderia ter ajudado.",
              },
            ],
            keyVocabulary: [
              { word: "conditional", meaning: "condicional", partOfSpeech: "adjective" },
              { word: "hypothetical", meaning: "hipotético", partOfSpeech: "adjective" },
              { word: "likely", meaning: "provável", partOfSpeech: "adjective" },
              { word: "unlikely", meaning: "improvável", partOfSpeech: "adjective" },
            ],
          },
          exercises: [
            {
              id: "b1-m1-l1-ex1",
              type: "multiple-choice",
              question: "Complete: 'If I see him, I ___ him about the meeting.'",
              options: [
                { text: "will tell", correct: true },
                { text: "would tell", correct: false },
                { text: "tell", correct: false },
              ],
              answer: "will tell",
              explanation: "Use first conditional para situações futuras reais.",
            },
          ],
        },
      ],
    },
    {
      id: "b1-m2",
      title: "Reported Speech",
      description: "Discurso indireto - He said that..., She told me...",
      lessons: [
        {
          id: "b1-m2-l1",
          title: "Transforming Direct to Indirect Speech",
          duration: 20,
          content: {
            intro: "Aprende a comunicar o que outras pessoas disseram sem repetir as palavras exatas.",
            explanation: `REPORTED SPEECH é quando comunicamos o que alguém disse sem usar aspas:

TRANSFORMAÇÕES PRINCIPAIS:
1. Muda os tempos verbais (shift back one tense)
   - Present → Past
   - "I am happy" → "He said he was happy"

2. Pronomes mudam de perspetiva
   - I → he/she
   - My → his/her

3. Expressões de tempo mudam
   - "today" → "that day"
   - "tomorrow" → "the next day"
   - "here" → "there"

EXEMPLOS DE TRANSFORMAÇÃO:
- Direct: "I am tired," she said.
- Reported: She said she was tired.`,
            examples: [
              {
                english: '"I love this place," he said.',
                portuguese: "Ele disse: 'Eu amo este lugar.'",
              },
              {
                english: "He said he loved that place.",
                portuguese: "Ele disse que amava aquele lugar.",
              },
              {
                english: '"Will you come tomorrow?" she asked me.',
                portuguese: "Ela me perguntou: 'Você virá amanhã?'",
              },
            ],
            keyVocabulary: [
              { word: "reported speech", meaning: "discurso indireto", partOfSpeech: "noun" },
              { word: "tense shift", meaning: "mudança de tempo verbal", partOfSpeech: "noun" },
              { word: "perspective", meaning: "perspetiva", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "b1-m2-l1-ex1",
              type: "translation",
              question:
                'Transforma em reported speech: "I am going to the party," Tom said.',
              answer: "Tom said he was going to the party.",
              hint: "Muda 'I' para 'he' e 'am going' para 'was going'.",
              explanation:
                "Em reported speech, o sujeito muda de perspetiva e o tempo verbal recua uma posição.",
            },
          ],
        },
      ],
    },
    {
      id: "b1-m3",
      title: "Phrasal Verbs",
      description: "Verbos frasais - Break down, Get up, Look after",
      lessons: [
        {
          id: "b1-m3-l1",
          title: "Common Phrasal Verbs in Context",
          duration: 20,
          content: {
            intro:
              "Aprende phrasal verbs - combinações de verbo + preposição com significado especial.",
            explanation: `PHRASAL VERBS são combinações de um verbo simples com uma ou mais preposições:

EXEMPLOS COMUNS:
- GET UP: acordar e levantar-se
- BREAK DOWN: avaria (máquina) / análise (informação)
- LOOK AFTER: cuidar de
- TURN ON: ligar (aparelho)
- GIVE UP: desistir
- WORK OUT: exercitar-se / resolver

ESTRUTURA:
- Separáveis: "I turned off the light" = "I turned the light off"
- Inseparáveis: "I looked after my sister" (não: "looked my sister after")`,
            examples: [
              {
                english: "I need to break down this problem into smaller parts.",
                portuguese: "Preciso dividir este problema em partes menores.",
              },
              {
                english: "Can you turn on the TV, please?",
                portuguese: "Podes ligar a TV, por favor?",
              },
              {
                english: "Don't give up on your dreams.",
                portuguese: "Não desistas dos teus sonhos.",
              },
            ],
            keyVocabulary: [
              { word: "phrasal verb", meaning: "verbo frasal", partOfSpeech: "noun" },
              { word: "separable", meaning: "separável", partOfSpeech: "adjective" },
              { word: "inseparable", meaning: "inseparável", partOfSpeech: "adjective" },
            ],
          },
          exercises: [
            {
              id: "b1-m3-l1-ex1",
              type: "multiple-choice",
              question: "Which phrasal verb means 'cuidar de'?",
              options: [
                { text: "look after", correct: true },
                { text: "look for", correct: false },
                { text: "look at", correct: false },
              ],
              answer: "look after",
              explanation: "'Look after' significa cuidar de alguém ou algo.",
            },
          ],
        },
      ],
    },
    {
      id: "b1-m4",
      title: "Present Perfect Continuous",
      description: "Tempos contínuos - Have been doing...",
      lessons: [
        {
          id: "b1-m4-l1",
          title: "Actions Starting in the Past, Continuing Now",
          duration: 20,
          content: {
            intro:
              "Aprende a descrever ações que começaram no passado e continuam no presente.",
            explanation: `PRESENT PERFECT CONTINUOUS é usado para ações:
- Que começaram no passado
- Que continuam até agora (ou acabaram de acabar)
- Cuja duração é importante

ESTRUTURA:
Have/has + been + verb-ing

EXEMPLOS:
- "I have been studying for 3 hours"
- "She has been working here since 2020"
- "They have been waiting for me"

DIFERENÇA COM PRESENT PERFECT:
- Present Perfect: "I have studied" (ação concluída, resultado importante)
- Present Perfect Continuous: "I have been studying" (ação em progresso, duração importante)`,
            examples: [
              {
                english: "How long have you been learning English?",
                portuguese: "Há quanto tempo estás a aprender inglês?",
              },
              {
                english: "I have been working here for five years.",
                portuguese: "Tenho trabalhado aqui durante cinco anos.",
              },
              {
                english: "She has been practicing the piano all morning.",
                portuguese: "Ela tem estado a praticar piano toda a manhã.",
              },
            ],
            keyVocabulary: [
              { word: "duration", meaning: "duração", partOfSpeech: "noun" },
              { word: "continuous", meaning: "contínuo", partOfSpeech: "adjective" },
              { word: "ongoing", meaning: "em curso", partOfSpeech: "adjective" },
            ],
          },
          exercises: [
            {
              id: "b1-m4-l1-ex1",
              type: "fill-the-blank",
              question: "Complete: 'They ___ ___ waiting for 20 minutes.'",
              answer: "have been",
              hint: "Use present perfect continuous com o verbo 'wait'.",
              explanation:
                "Para uma ação que começou no passado e continua agora, usa 'have been + gerúndio'.",
            },
          ],
        },
      ],
    },
    {
      id: "b1-m5",
      title: "Expressing Opinions & Arguments",
      description: "Argumentos - In my opinion..., I strongly believe...",
      lessons: [
        {
          id: "b1-m5-l1",
          title: "Formal vs Informal Opinion Language",
          duration: 20,
          content: {
            intro:
              "Aprende diferentes formas de expressar opiniões de forma clara e persuasiva.",
            explanation: `EXPRESSING OPINIONS EM INGLÊS:

INFORMAL:
- I think...
- In my opinion...
- I believe...
- I guess...

FORMAL/STRONG:
- I strongly believe...
- It seems to me that...
- From my perspective...
- I would argue that...

DISCORDÂNCIA:
- I don't agree with...
- I have to disagree...
- That's not necessarily true...
- On the other hand...

CONCORDÂNCIA:
- I completely agree.
- That's absolutely true.
- I couldn't have said it better.
- Point taken.`,
            examples: [
              {
                english: "In my opinion, remote work is more productive.",
                portuguese: "Na minha opinião, trabalhar remotamente é mais produtivo.",
              },
              {
                english: "I would argue that education is fundamental.",
                portuguese: "Eu argumentaria que a educação é fundamental.",
              },
              {
                english: "I have to disagree with that statement.",
                portuguese: "Tenho que discordar dessa afirmação.",
              },
            ],
            keyVocabulary: [
              { word: "argument", meaning: "argumento", partOfSpeech: "noun" },
              { word: "perspective", meaning: "perspetiva", partOfSpeech: "noun" },
              { word: "persuasive", meaning: "persuasivo", partOfSpeech: "adjective" },
            ],
          },
          exercises: [
            {
              id: "b1-m5-l1-ex1",
              type: "multiple-choice",
              question: "Which is the most formal way to express an opinion?",
              options: [
                { text: "I would argue that...", correct: true },
                { text: "I think...", correct: false },
                { text: "I guess...", correct: false },
              ],
              answer: "I would argue that...",
              explanation:
                "'I would argue that' é mais formal e apropriado para contextos acadêmicos ou profissionais.",
            },
          ],
        },
      ],
    },
    {
      id: "b1-m6",
      title: "Technology & Modern Issues",
      description: "Tecnologia - Social media, AI, Privacy",
      lessons: [
        {
          id: "b1-m6-l1",
          title: "Discussing Technology in Context",
          duration: 20,
          content: {
            intro:
              "Aprende vocabulário e expressões para discutir tópicos modernos de tecnologia.",
            explanation: `VOCABULARY SOBRE TECNOLOGIA:

INTERNET & SOCIAL MEDIA:
- Social media: redes sociais
- Tweet/Post: publicar
- Followers: seguidores
- Influencer: influenciador
- Algorithm: algoritmo
- Data privacy: privacidade de dados

ARTIFICIAL INTELLIGENCE:
- AI (Artificial Intelligence): IA
- Machine learning: aprendizagem automática
- Chatbot: assistente automático
- Automation: automatização

SECURITY:
- Cybersecurity: cibersegurança
- Hacking: hackeamento
- Password: palavra-passe
- Encryption: encriptação`,
            examples: [
              {
                english: "Social media has changed how we communicate.",
                portuguese: "As redes sociais mudaram a forma como nos comunicamos.",
              },
              {
                english: "Many people are concerned about data privacy online.",
                portuguese: "Muitas pessoas estão preocupadas com a privacidade de dados online.",
              },
              {
                english: "Artificial intelligence is becoming increasingly important.",
                portuguese: "A inteligência artificial está ficando cada vez mais importante.",
              },
            ],
            keyVocabulary: [
              { word: "algorithm", meaning: "algoritmo", partOfSpeech: "noun" },
              { word: "automation", meaning: "automatização", partOfSpeech: "noun" },
              { word: "cybersecurity", meaning: "cibersegurança", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "b1-m6-l1-ex1",
              type: "multiple-choice",
              question: "What does 'cybersecurity' mean?",
              options: [
                { text: "Protecting computer systems from attacks", correct: true },
                { text: "Using the internet safely", correct: false },
                { text: "Building computers", correct: false },
              ],
              answer: "Protecting computer systems from attacks",
              explanation:
                "Cybersecurity é a proteção de sistemas de computador contra ataques e ameaças.",
            },
          ],
        },
      ],
    },
    {
      id: "b1-m7",
      title: "Narrative & Storytelling",
      description: "Histórias - Past tenses, Connectors, Building suspense",
      lessons: [
        {
          id: "b1-m7-l1",
          title: "Using Past Tenses to Tell Stories",
          duration: 20,
          content: {
            intro:
              "Aprende técnicas para contar histórias de forma envolvente e estruturada.",
            explanation: `CONTAR HISTÓRIAS EM INGLÊS:

ESTRUTURA:
1. Background (Simple Past)
   - "I was working at a café when..."

2. Main action (Past Perfect + Simple Past)
   - "I had never seen something like it. Suddenly..."

3. Building tension (Past Continuous)
   - "I was thinking about what to do..."

4. Resolution (Simple Past)
   - "Finally, I decided to..."

CONNECTORS IMPORTANTES:
- Suddenly: de repente
- Meanwhile: enquanto isso
- At first: no início
- Eventually: eventualmente
- Meanwhile: enquanto isso
- Moreover: além disso
- Afterwards: depois`,
            examples: [
              {
                english:
                  "I was walking home when I saw something strange. I had never experienced anything like it before.",
                portuguese:
                  "Eu estava a caminho de casa quando vi algo estranho. Nunca tinha experimentado algo assim.",
              },
              {
                english:
                  "Suddenly, the lights went out. Everyone was confused and didn't know what to do.",
                portuguese:
                  "De repente, as luzes apagaram. Todos ficaram confusos e não sabiam o que fazer.",
              },
            ],
            keyVocabulary: [
              { word: "tension", meaning: "tensão", partOfSpeech: "noun" },
              { word: "suspense", meaning: "suspense", partOfSpeech: "noun" },
              { word: "climax", meaning: "clímax", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "b1-m7-l1-ex1",
              type: "fill-the-blank",
              question:
                'Complete: "I ___ ___ home when I realized I had forgotten my keys."',
              answer: "was walking",
              hint: "Use past continuous para uma ação que estava em progresso.",
              explanation:
                "Para descrever uma ação em progresso no passado, usa 'was/were + gerúndio'.",
            },
          ],
        },
      ],
    },
    {
      id: "b1-m8",
      title: "Idioms & Expressions",
      description: "Idiomas - Break a leg, Piece of cake, Under the weather",
      lessons: [
        {
          id: "b1-m8-l1",
          title: "Common Idioms and Their Usage",
          duration: 20,
          content: {
            intro:
              "Aprende expressões idiomáticas comuns que os falantes nativos usam regularmente.",
            explanation: `IDIOMS SÃO EXPRESSÕES COM SIGNIFICADO ESPECIAL que não é literal:

EXEMPLOS COMUNS:
- Break a leg: boa sorte (especialmente antes de uma performance)
- Piece of cake: muito fácil
- Under the weather: sentir-se mal
- Rain on my parade: estragar meu dia
- Call it a day: parar de trabalhar/atividade
- Hit the books: estudar intensamente
- Spill the beans: contar um segredo
- Catch your drift: entender o que quer dizer

CONTEXTO:
Os idioms são muito usados em conversa casual e informal. É importante reconhecê-los
e saber o significado para não ficar confuso!`,
            examples: [
              {
                english:
                  '"Break a leg!" we said before her presentation. (Meaning: Good luck!)',
                portuguese:
                  '"Boa sorte!" dissemos antes da sua apresentação. (Significado: Boa sorte!)',
              },
              {
                english:
                  '"This exam was a piece of cake." (Meaning: It was very easy.)',
                portuguese:
                  '"Este exame foi muito fácil." (Significado: Foi muito fácil.)',
              },
              {
                english: '"I am feeling under the weather today." (Meaning: I feel sick.)',
                portuguese:
                  '"Estou sentindo-me mal hoje." (Significado: Estou doente.)',
              },
            ],
            keyVocabulary: [
              { word: "idiom", meaning: "idioma/expressão idiomática", partOfSpeech: "noun" },
              { word: "literal", meaning: "literal", partOfSpeech: "adjective" },
              { word: "colloquial", meaning: "coloquial/informal", partOfSpeech: "adjective" },
            ],
          },
          exercises: [
            {
              id: "b1-m8-l1-ex1",
              type: "multiple-choice",
              question: 'What does "spill the beans" mean?',
              options: [
                { text: "Tell a secret", correct: true },
                { text: "Make a mess", correct: false },
                { text: "Cook dinner", correct: false },
              ],
              answer: "Tell a secret",
              explanation:
                '"Spill the beans" significa revelar um segredo ou contar algo que não deveria ser contado.',
            },
          ],
        },
      ],
    },
  ],
};

export default curriculumB1;
