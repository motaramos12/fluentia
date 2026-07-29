const curriculumB2 = {
  level: "B2",
  title: "Upper Intermediate (B2)",
  modules: [
    {
      id: "b2-m1",
      title: "Advanced Conditional Structures",
      description: "Estruturas condicionais avançadas - Mixed conditionals, Unless",
      lessons: [
        {
          id: "b2-m1-l1",
          title: "Mixed Conditionals & Advanced Structures",
          duration: 25,
          content: {
            intro:
              "Aprende estruturas condicionais complexas para expressar situações mais sofisticadas.",
            explanation: `MIXED CONDITIONALS permitem combinar tempos diferentes:

PAST→PRESENT MIX:
- If + past perfect, would + infinitive (now)
- "If I had taken the job, I would be living in London now."

PRESENT→PAST MIX:
- If + simple past, would have + past participle
- "If I were smarter, I would have done it better."

UNLESS (significado: IF NOT):
- "Unless you study, you won't pass" = "If you don't study, you won't pass"
- Unless é mais formal e comum em written English

ADVANCED STRUCTURES:
- Inversion: "Had I known, I wouldn't have gone" (mais formal que "If I had known...")
- "Should you need help..." (If you need help)`,
            examples: [
              {
                english:
                  "If I had studied harder in school, I would be a doctor today.",
                portuguese:
                  "Se tivesse estudado mais na escola, seria médico hoje.",
              },
              {
                english:
                  "Unless you change your attitude, you'll never succeed.",
                portuguese:
                  "A menos que mudes de atitude, nunca terás sucesso.",
              },
              {
                english: "Had I known the truth, I would have acted differently.",
                portuguese:
                  "Se tivesse sabido a verdade, teria agido diferentemente.",
              },
            ],
            keyVocabulary: [
              { word: "inversion", meaning: "inversão", partOfSpeech: "noun" },
              { word: "sophisticated", meaning: "sofisticado", partOfSpeech: "adjective" },
              { word: "hypothetical", meaning: "hipotético", partOfSpeech: "adjective" },
            ],
          },
          exercises: [
            {
              id: "b2-m1-l1-ex1",
              type: "fill-the-blank",
              question:
                'Complete: "Had I realized the danger, I ___ never ___ gone there."',
              answer: "would have",
              hint: "Use third conditional com inversão.",
              explanation:
                "A inversão 'Had I...' é mais formal que 'If I had...' e muito comum em inglês avançado.",
            },
          ],
        },
      ],
    },
    {
      id: "b2-m2",
      title: "Passive Voice & Complex Structures",
      description: "Voz ativa/passiva - Advanced passive constructions",
      lessons: [
        {
          id: "b2-m2-l1",
          title: "Passive Voice in Various Tenses & Advanced Usage",
          duration: 25,
          content: {
            intro:
              "Domina a voz passiva em todos os tempos e contextos para comunicação sofisticada.",
            explanation: `VOZ PASSIVA permite deslocar o foco do agente para o objeto:

FORMAÇÃO BÁSICA:
Object + to be (conjugado) + past participle

EXEMPLOS POR TEMPO:
- Simple Present: "The report is written by me"
- Present Continuous: "The house is being painted"
- Past Simple: "The letter was received yesterday"
- Present Perfect: "The work has been completed"
- Modal: "The task should be done carefully"

QUANDO USAR PASSIVA:
1. O agente é desconhecido: "The painting was stolen"
2. O agente é óbvio: "This phone was made in China"
3. Ênfase no objeto/resultado: "The disease was cured"
4. Contextos formais/acadêmicos

PASSIVE WITH COMPLEX STRUCTURES:
- "It is believed that..." (Acredita-se que...)
- "He is said to be..." (Diz-se que ele é...)`,
            examples: [
              {
                english:
                  "The project was successfully completed by the entire team.",
                portuguese:
                  "O projeto foi concluído com sucesso por toda a equipa.",
              },
              {
                english: "It is widely believed that climate change is real.",
                portuguese: "É amplamente acreditado que as mudanças climáticas são reais.",
              },
              {
                english: "The suspect was seen leaving the building.",
                portuguese: "O suspeito foi visto a sair do edifício.",
              },
            ],
            keyVocabulary: [
              { word: "passive voice", meaning: "voz passiva", partOfSpeech: "noun" },
              { word: "agent", meaning: "agente", partOfSpeech: "noun" },
              { word: "emphasis", meaning: "ênfase", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "b2-m2-l1-ex1",
              type: "translation",
              question:
                'Transforma para voz passiva: "They have completed the project."',
              answer: "The project has been completed.",
              hint: "Passive: object + has been + past participle",
              explanation:
                "Na voz passiva, o objeto torna-se sujeito e usamos 'has been + past participle' em present perfect.",
            },
          ],
        },
      ],
    },
    {
      id: "b2-m3",
      title: "Advanced Vocabulary Building",
      description: "Vocabulário avançado - Synonyms, Collocations, Academic terms",
      lessons: [
        {
          id: "b2-m3-l1",
          title: "Word Families, Collocations & Nuanced Meanings",
          duration: 25,
          content: {
            intro:
              "Aprende vocabulário sofisticado e como usar palavras em contextos específicos.",
            explanation: `WORD FAMILIES (Famílias de palavras):
- teach → teacher → teaching → taught
- happy → happiness → happily → unhappy

COLLOCATIONS (Combinações naturais):
- "Make a decision" (não: "do a decision")
- "Give a speech" (não: "make a speech")
- "Catch a cold" (não: "take a cold")
- "Break the ice" (não: "break the silence")

SYNONYMS COM DIFERENÇAS:
- Big vs Large: Large é mais formal
- Small vs Tiny: Tiny implica muito pequeno
- Happy vs Delighted: Delighted é muito mais forte

ACADEMIC VOCABULARY:
- Subsequently: depois disso
- Furthermore: além disso
- Conversely: em contraste
- Nevertheless: apesar disso
- Consequently: consequentemente`,
            examples: [
              {
                english: "She made a crucial decision that would change her life.",
                portuguese:
                  "Ela tomou uma decisão crucial que mudaria sua vida.",
              },
              {
                english: "Subsequently, the company expanded internationally.",
                portuguese: "Posteriormente, a empresa expandiu-se internacionalmente.",
              },
              {
                english:
                  "Nevertheless, he continued to pursue his dreams despite the obstacles.",
                portuguese:
                  "Apesar disso, ele continuou a perseguir seus sonhos apesar dos obstáculos.",
              },
            ],
            keyVocabulary: [
              { word: "collocation", meaning: "colocação", partOfSpeech: "noun" },
              { word: "nuance", meaning: "nuance/matiz", partOfSpeech: "noun" },
              { word: "academic", meaning: "académico", partOfSpeech: "adjective" },
            ],
          },
          exercises: [
            {
              id: "b2-m3-l1-ex1",
              type: "multiple-choice",
              question: "Which collocation is correct?",
              options: [
                { text: "Make a decision", correct: true },
                { text: "Do a decision", correct: false },
                { text: "Take a decision", correct: false },
              ],
              answer: "Make a decision",
              explanation:
                "Em inglês, a colocação correta é 'make a decision', não 'do' ou 'take'.",
            },
          ],
        },
      ],
    },
    {
      id: "b2-m4",
      title: "Persuasion & Debate Techniques",
      description: "Persuasão - Arguments, Counter-arguments, Rhetorical devices",
      lessons: [
        {
          id: "b2-m4-l1",
          title: "Building Strong Arguments & Responding to Opposition",
          duration: 25,
          content: {
            intro:
              "Aprende técnicas de persuasão e debate para argumentações sofisticadas.",
            explanation: `ESTRUTURA DE ARGUMENTAÇÃO:

INTRODUÇÃO:
- "I am firmly convinced that..."
- "The evidence clearly demonstrates that..."
- "It is undeniable that..."

DESENVOLVIMENTO:
- "In the first place..."
- "Furthermore, it is worth noting that..."
- "More importantly..."
- "To elaborate on this point..."

CONTRA-ARGUMENTAÇÃO:
- "While it may be true that..., nevertheless..."
- "One might argue that..., however..."
- "Some suggest that..., but this overlooks..."

CONCLUSÃO:
- "In conclusion, the evidence overwhelmingly supports..."
- "To summarize, the facts speak for themselves..."

DISPOSITIVOS RETÓRICOS:
- Repetição: enfatizar pontos
- Rhetorical questions: "Don't you agree?"
- Analogies: comparações para clarificar
- Statistics: dados para fortalecer argumento`,
            examples: [
              {
                english:
                  "I am firmly convinced that education is the foundation of society.",
                portuguese:
                  "Estou firmemente convencido de que a educação é a base da sociedade.",
              },
              {
                english:
                  "While some argue that technology isolates people, the evidence suggests the contrary.",
                portuguese:
                  "Embora alguns argumentem que a tecnologia isola as pessoas, as provas sugerem o contrário.",
              },
            ],
            keyVocabulary: [
              { word: "persuasion", meaning: "persuasão", partOfSpeech: "noun" },
              { word: "rhetoric", meaning: "retórica", partOfSpeech: "noun" },
              { word: "substantiate", meaning: "fundamentar", partOfSpeech: "verb" },
            ],
          },
          exercises: [
            {
              id: "b2-m4-l1-ex1",
              type: "fill-the-blank",
              question:
                'Complete: "While some people argue that ___, nevertheless, the evidence suggests..."',
              answer: "social media is harmful",
              hint: "Pensa em argumentos comuns sobre redes sociais.",
              explanation:
                "Em argumentação, primeiro mencionas o argumento do oponente, depois refutas com evidence.",
            },
          ],
        },
      ],
    },
    {
      id: "b2-m5",
      title: "Abstract Discussions & Philosophy",
      description: "Discussões abstratas - Ethics, Society, Human nature",
      lessons: [
        {
          id: "b2-m5-l1",
          title: "Discussing Complex Ideas & Philosophical Concepts",
          duration: 25,
          content: {
            intro:
              "Aprende a discutir conceitos abstratos e questões filosóficas em inglês sofisticado.",
            explanation: `VOCABULÁRIO FILOSÓFICO:

CONCEITOS:
- Ethics: ética
- Morality: moralidade
- Virtue: virtude
- Justice: justiça
- Freedom: liberdade
- Responsibility: responsabilidade
- Authenticity: autenticidade

ESTRUTURAS PARA ABSTRAÇÕES:
- "One might contend that..." (Poderia argumentar-se que...)
- "The notion of..." (A ideia de...)
- "Fundamentally speaking..." (Fundamentalmente...)
- "In an ideal world..." (Num mundo ideal...)

EXPRESSING UNCERTAINTY:
- "It's difficult to say with certainty..."
- "One could arguably say..."
- "This raises profound questions about..."
- "The implications of this are far-reaching..."`,
            examples: [
              {
                english:
                  "The question of human nature has fascinated philosophers for centuries.",
                portuguese:
                  "A questão da natureza humana fascinou filósofos durante séculos.",
              },
              {
                english:
                  "Fundamentally speaking, ethics and morality are intertwined concepts.",
                portuguese:
                  "Fundamentalmente, ética e moralidade são conceitos interligados.",
              },
            ],
            keyVocabulary: [
              { word: "ethics", meaning: "ética", partOfSpeech: "noun" },
              { word: "morality", meaning: "moralidade", partOfSpeech: "noun" },
              { word: "philosophy", meaning: "filosofia", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "b2-m5-l1-ex1",
              type: "multiple-choice",
              question:
                "Which phrase is used to discuss abstract concepts in academic English?",
              options: [
                { text: "One might contend that...", correct: true },
                { text: "I think maybe...", correct: false },
                { text: "In my view...", correct: false },
              ],
              answer: "One might contend that...",
              explanation:
                "'One might contend that' é mais formal e apropriado para discussões académicas.",
            },
          ],
        },
      ],
    },
    {
      id: "b2-m6",
      title: "Nuanced Expression & Style",
      description: "Expressão nuançada - Register, Tone, Literary devices",
      lessons: [
        {
          id: "b2-m6-l1",
          title: "Adjusting Your Tone & Style for Different Contexts",
          duration: 25,
          content: {
            intro:
              "Aprende a adaptar o teu estilo de escrita e fala para diferentes contextos e públicos.",
            explanation: `REGISTER (Nível de formalidade):

FORMAL (Academic, Professional):
- "It is hereby recommended..."
- "The aforementioned..."
- "Notwithstanding..."

SEMI-FORMAL (Business, Academic):
- "I would like to suggest..."
- "It has come to my attention..."

INFORMAL (Conversational):
- "I reckon..."
- "You know..."
- "Like, seriously..."

LITERARY DEVICES:
- Metaphor: "Life is a journey"
- Personification: "The wind whispered through the trees"
- Irony: Dizeres o oposto do que significas
- Understatement: Minimizar a importância
- Hyperbole: Exagerar para efeito

TONE:
- Optimistic, Pessimistic, Sarcastic, Sincere, Humorous
- O tom é transmitido através de escolha de palavras, estrutura, e contexto`,
            examples: [
              {
                english:
                  "Formal: It is hereby recommended that further investigation be conducted.",
                portuguese:
                  "Formal: Recomenda-se que investigação adicional seja conduzida.",
              },
              {
                english:
                  "Informal: I reckon we should look into this matter a bit more.",
                portuguese: "Informal: Acho que devemos investigar isto um pouco mais.",
              },
            ],
            keyVocabulary: [
              { word: "register", meaning: "registo/nível de formalidade", partOfSpeech: "noun" },
              { word: "tone", meaning: "tom", partOfSpeech: "noun" },
              { word: "irony", meaning: "ironia", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "b2-m6-l1-ex1",
              type: "multiple-choice",
              question: "Which phrase is most formal?",
              options: [
                { text: "It is hereby recommended that...", correct: true },
                { text: "I think that...", correct: false },
                { text: "In my view...", correct: false },
              ],
              answer: "It is hereby recommended that...",
              explanation:
                "'It is hereby recommended' é extremamente formal, apropriado para documentos oficiais.",
            },
          ],
        },
      ],
    },
    {
      id: "b2-m7",
      title: "Business & Professional Communication",
      description: "Comunicação profissional - Meetings, Emails, Negotiations",
      lessons: [
        {
          id: "b2-m7-l1",
          title: "Advanced Business English & Professional Interactions",
          duration: 25,
          content: {
            intro:
              "Domina a comunicação profissional em inglês para contextos de negócios.",
            explanation: `BUSINESS ENGLISH:

EMAILS FORMAIS:
- Opening: "I am writing to..."
- Body: Declaração clara, detalhes, ação
- Closing: "I look forward to your response."

MEETINGS:
- Chairing: "Let's get started...", "Let's move on to..."
- Contributing: "If I may add...", "I tend to disagree..."
- Clarifying: "To clarify your point..."

NEGOTIATIONS:
- Proposals: "I suggest we...", "What if we..."
- Compromises: "How about we split the difference?"
- Agreement: "That sounds reasonable."

TELEPHONE ETIQUETTE:
- "This is [name] speaking from [company]"
- "I'm calling regarding..."
- "Could I possibly...?"

KEY PHRASES:
- "Let me circle back on..."
- "Let's drill down into..."
- "Going forward..."
- "Touch base with..."`,
            examples: [
              {
                english:
                  "I am writing to inform you of the latest developments in our project.",
                portuguese:
                  "Estou a escrever para o informar dos últimos desenvolvimentos no nosso projeto.",
              },
              {
                english:
                  "If I may contribute to the discussion, I believe we should consider an alternative approach.",
                portuguese:
                  "Se posso contribuir para a discussão, acredito que devemos considerar uma abordagem alternativa.",
              },
            ],
            keyVocabulary: [
              { word: "negotiations", meaning: "negociações", partOfSpeech: "noun" },
              { word: "compromise", meaning: "compromisso", partOfSpeech: "noun" },
              { word: "proposal", meaning: "proposta", partOfSpeech: "noun" },
            ],
          },
          exercises: [
            {
              id: "b2-m7-l1-ex1",
              type: "fill-the-blank",
              question:
                'Complete the email opening: "I am writing to ___ you of the recent changes."',
              answer: "inform",
              hint: "Qual é o verbo apropriado para comunicar novidades?",
              explanation:
                "Em emails formais, 'inform' é o verbo correto para comunicar informações.",
            },
          ],
        },
      ],
    },
    {
      id: "b2-m8",
      title: "Literary Analysis & Sophisticated Reading",
      description: "Literatura - Critics, Themes, Symbolism, Analysis",
      lessons: [
        {
          id: "b2-m8-l1",
          title: "Analyzing Literature & Expressing Critical Opinions",
          duration: 25,
          content: {
            intro:
              "Aprende a analisar literatura e expressar opiniões críticas sofisticadas sobre obras.",
            explanation: `ANÁLISE LITERÁRIA:

ELEMENTOS:
- Theme: tema central da obra
- Symbolism: uso de símbolos
- Character development: evolução do personagem
- Plot structure: estrutura do enredo
- Narrative perspective: perspetiva do narrador
- Tone & mood: tom e atmosfera

CRÍTICA LITERÁRIA:
- "The author brilliantly portrays..."
- "This passage is particularly evocative of..."
- "The symbolism is profound because..."
- "One could argue that the protagonist represents..."

TECHNICAL TERMS:
- Metaphor, Simile, Personification, Imagery
- Foreshadowing: antecipação de eventos
- Climax: ponto de pico do drama
- Resolution: desfecho

EXPRESSING OPINION:
- "The work transcends..."
- "It is a masterpiece of..."
- "The narrative arc is compelling..."
- "This raises thought-provoking questions about..."`,
            examples: [
              {
                english:
                  "The author brilliantly uses symbolism to explore themes of identity and belonging.",
                portuguese:
                  "O autor usa brilhantemente o simbolismo para explorar temas de identidade e pertença.",
              },
              {
                english:
                  "One could argue that the protagonist's journey represents the universal human struggle.",
                portuguese:
                  "Poderia argumentar-se que a jornada do protagonista representa a luta humana universal.",
              },
            ],
            keyVocabulary: [
              { word: "symbolism", meaning: "simbolismo", partOfSpeech: "noun" },
              { word: "narrative", meaning: "narrativa", partOfSpeech: "noun" },
              { word: "evocative", meaning: "evocativo", partOfSpeech: "adjective" },
            ],
          },
          exercises: [
            {
              id: "b2-m8-l1-ex1",
              type: "multiple-choice",
              question: "What is the purpose of foreshadowing in literature?",
              options: [
                { text: "To hint at future events", correct: true },
                { text: "To describe past events", correct: false },
                { text: "To develop characters", correct: false },
              ],
              answer: "To hint at future events",
              explanation:
                "Foreshadowing é uma técnica narrativa que antecipa eventos futuros na história.",
            },
          ],
        },
      ],
    },
  ],
};

export default curriculumB2;
