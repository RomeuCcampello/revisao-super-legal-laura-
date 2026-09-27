const IMG='assets/machado/';

const chapters=[
{
 id:'home',num:'⌂',title:'Início',group:'Jornada',subtitle:'Mapa da revisão',
 hero:'Neuroanatomia P2 — revisão visual para tablet',
 desc:'Uma jornada de revisão construída a partir dos quatro PDFs enviados: Telencéfalo, Núcleos da Base, Tronco Encefálico e Cerebelo. O foco é reconhecer estruturas, organizar relações anatômicas e revisar os pontos cobrados nas aulas.',
 content:`
 <div class="sectionTitle"><span class="dot"></span><h2>Como usar</h2></div>
 <div class="grid3">
   <div class="mini"><b>1 · Estude por capítulo</b><span>Leia o resumo e abra as imagens em tela cheia. No tablet, toque na figura para ampliar.</span></div>
   <div class="mini"><b>2 · Marque como concluído</b><span>O progresso e o XP ficam salvos neste navegador pelo localStorage.</span></div>
   <div class="mini"><b>3 · Teste a memória</b><span>Use flashcards e o simulado. O banco mistura anatomia macroscópica, relações e clínica dos slides.</span></div>
 </div>
 <div class="callout"><b>Material-base.</b> 391 páginas de aula foram organizadas em 12 capítulos de revisão. O texto abaixo resume o material fornecido; nomenclaturas e classificações foram preservadas conforme os PDFs.</div>
 <div class="sectionTitle"><span class="dot"></span><h2>Mapa rápido</h2></div>
 <div class="grid2">
  <div class="card"><span class="tag">Telencéfalo</span><h3>Superfícies → sulcos → giros → lobos</h3><p>Hemisférios, corpo caloso, faces e polos; sulcos central e lateral; giros frontais, temporais e parietais; ínsula, faces medial e inferior.</p></div>
  <div class="card"><span class="tag">Núcleos da base</span><h3>Estruturas profundas → movimento → emoção</h3><p>Caudado, putâmen, globo pálido, lentiforme, accumbens, Meynert, substância negra, cápsula interna e síndromes.</p></div>
  <div class="card"><span class="tag">Tronco encefálico</span><h3>Bulbo → ponte → mesencéfalo</h3><p>Limites, estruturas, nervos cranianos, IV ventrículo, fossa romboide e correlações anatomoclínicas.</p></div>
  <div class="card"><span class="tag">Cerebelo</span><h3>Anatomia → divisões → função → síndrome</h3><p>Vérmis, hemisférios, fissuras, lóbulos, pedúnculos, divisões ontogenética/filogenética e disfunções cerebelares.</p></div>
 </div>
 <div class="sectionTitle"><span class="dot"></span><h2>Comece visualmente</h2></div>
 <div class="gallery3" data-gallery="home"></div>`
},
{
 id:'c1',num:'1',title:'Mapa do encéfalo',group:'Jornada',subtitle:'Organização geral',
 hero:'Do sistema nervoso ao encéfalo',desc:'A organização usada nas aulas posiciona telencéfalo, diencéfalo, cerebelo e tronco encefálico dentro do sistema nervoso central. O tronco é dividido em mesencéfalo, ponte e bulbo.',
 content:`
 <div class="grid2">
  <div class="card"><span class="tag">Visão geral</span><h3>Órgãos constituintes</h3><p>O mapa dos slides separa sistema nervoso em central e periférico. No central aparecem encéfalo e medula espinhal; no encéfalo, cérebro, cerebelo e tronco encefálico.</p></div>
  <div class="card"><span class="tag">Tronco</span><h3>Três segmentos</h3><div class="flow"><span>Mesencéfalo</span><em>→</em><span>Ponte</span><em>→</em><span>Bulbo</span></div><p>O tronco encefálico é apresentado como o primeiro segmento do encéfalo que se segue à medula espinhal.</p></div>
 </div>
 <div class="callout gold"><b>Estratégia de prova prática.</b> Antes de nomear uma estrutura, identifique o plano/vista e a grande região: telencéfalo, cerebelo ou tronco. Só depois desça para sulco, giro, núcleo ou nervo.</div>
 <div class="gallery3" data-gallery="c1"></div>`
},
{
 id:'c2',num:'2',title:'Telencéfalo — forma externa',group:'Jornada',subtitle:'Hemisférios, faces, polos e lobos',
 hero:'Telencéfalo: orientação externa',desc:'Os dois hemisférios cerebrais são separados pela fissura longitudinal. O corpo caloso é apresentado como a principal comissura inter-hemisférica. Cada hemisfério possui três faces e três polos.',
 content:`
 <div class="grid2">
  <div class="card"><h3>Hemisférios e corpo caloso</h3><ul class="tight"><li>Hemisférios direito e esquerdo.</li><li>Fissura longitudinal entre eles.</li><li>Corpo caloso: maior comissura inter-hemisférica nos slides.</li><li>Fibras mielínicas cruzam o plano sagital mediano e unem áreas corticais.</li></ul></div>
  <div class="card"><h3>Orientação externa</h3><div class="flow"><span>Face súpero-lateral</span><span>Face medial</span><span>Face inferior</span></div><div class="flow"><span>Polo frontal</span><span>Polo temporal</span><span>Polo occipital</span></div></div>
 </div>
 <div class="card"><h3>Lobos cerebrais</h3><p>O material apresenta cinco lobos: frontal, temporal, parietal, occipital e ínsula. A ínsula é descrita como profundamente situada no sulco lateral e sem relação direta com os ossos do crânio.</p></div>
 <div class="gallery3" data-gallery="c2"></div>`
},
{
 id:'c3',num:'3',title:'Telencéfalo — sulcos e giros',group:'Jornada',subtitle:'Face súpero-lateral',
 hero:'Sulcos, giros e áreas corticais',desc:'A leitura da face súpero-lateral começa pelos sulcos central e lateral. A partir deles, o material organiza os principais giros dos lobos frontal, temporal e parietal, além da ínsula.',
 content:`
 <div class="grid2">
  <div class="card"><h3>Sulco lateral</h3><p>Separa o lobo frontal do temporal e é dividido nos ramos anterior, ascendente e posterior.</p></div>
  <div class="card"><h3>Sulco central (Rolando)</h3><p>Separa frontal de parietal. É ladeado pelo giro pré-central, anterior, e pelo giro pós-central, posterior.</p></div>
 </div>
 <div class="card"><h3>Lobo frontal</h3><ul class="tight"><li>Sulco pré-central, frontal superior e frontal inferior.</li><li>Giro pré-central: área motora principal apresentada no material.</li><li>Giros frontal superior, médio e inferior.</li><li>O giro frontal inferior esquerdo é relacionado à palavra falada; os slides destacam a área de Broca entre as áreas 44 e parte da 45.</li></ul></div>
 <div class="card"><h3>Lobo temporal</h3><ul class="tight"><li>Sulcos temporal superior e inferior.</li><li>Giros temporal superior, médio e inferior.</li><li>Giro temporal transverso anterior: áreas 41 e 42, audição.</li><li>Giro temporal transverso posterior: relação com Wernicke/área 22 e compreensão da fala, conforme os slides.</li></ul></div>
 <div class="card"><h3>Lobo parietal e ínsula</h3><ul class="tight"><li>Giro pós-central: importante área sensitiva no material.</li><li>Lóbulos parietais superior e inferior.</li><li>Ínsula: sulcos central e circular; giros longos posteriormente e curtos anteriormente ao sulco central da ínsula.</li></ul></div>
 <div class="gallery3" data-gallery="c3"></div>`
},
{
 id:'c4',num:'4',title:'Telencéfalo — face medial e interior',group:'Jornada',subtitle:'Comissuras, fórnix, ventrículos e substância branca',
 hero:'Face medial, face inferior e organização interna',desc:'A sequência dos slides passa pelo corpo caloso, cíngulo, parieto-occipital, calcarino e fórnix, depois pela face inferior e pela organização interna dos hemisférios.',
 content:`
 <div class="grid2">
  <div class="card"><h3>Face medial</h3><ul class="tight"><li>Sulco do corpo caloso.</li><li>Sulco do cíngulo e ramo marginal.</li><li>Sulco paracentral e subparietal.</li><li>Pré-cúneo, sulco parieto-occipital, sulco calcarino e cúneo.</li><li>Fórnix e septo pelúcido aparecem nas relações mediais.</li></ul></div>
  <div class="card"><h3>Face inferior</h3><ul class="tight"><li>Estrias olfatórias medial, intermédia e lateral.</li><li>Bulbo e trato olfatório.</li><li>Substância perfurada anterior.</li><li>Áreas 28 e 34 são apresentadas como córtex olfatório primário.</li></ul></div>
 </div>
 <div class="card"><h3>Ventrículos e interior do hemisfério</h3><p>Os hemisférios possuem ventrículos laterais revestidos de epêndima e com líquido cérebro-espinhal. A organização interna é descrita por córtex superficial de substância cinzenta, centro de substância branca e núcleos profundos.</p></div>
 <div class="gallery3" data-gallery="c4"></div>`
},
{
 id:'c5',num:'5',title:'Núcleos da base',group:'Jornada',subtitle:'Caudado, putâmen, pálido e estruturas associadas',
 hero:'Estruturas profundas do prosencéfalo',desc:'Os slides definem os núcleos da base como núcleos neuronais de substância cinzenta com funções de controle motor e emocional, situados profundamente no prosencéfalo.',
 content:`
 <div class="card"><h3>Estruturas apresentadas</h3><div class="flow"><span>Núcleo caudado</span><span>Putâmen</span><span>Globo pálido</span><span>Claustrum</span><span>Corpo amigdalóide</span><span>Núcleo accumbens</span><span>Núcleo basal de Meynert</span><span>Substância negra</span><span>Subtálamo</span></div></div>
 <div class="grid2">
  <div class="card"><h3>Núcleo caudado</h3><p>Massa volumosa e alongada, dividida em cabeça, corpo e cauda. O material enfatiza a relação do caudado com os ventrículos laterais.</p></div>
  <div class="card"><h3>Núcleo lentiforme</h3><p>Apresentado como putâmen lateral e globo pálido medial. O globo pálido é dividido pela lâmina medular medial em porções externa e interna.</p></div>
 </div>
 <div class="grid2">
  <div class="card"><h3>Estriado ventral</h3><p>O núcleo accumbens é mostrado como massa de substância cinzenta na união entre putâmen e cabeça do caudado, formando o corpo estriado ventral.</p></div>
  <div class="card"><h3>Núcleo basal de Meynert</h3><p>Localizado na base do cérebro, entre substância perfurada anterior e globo pálido, dentro da substância inominada; os slides o relacionam à produção de acetilcolina, atenção e memória.</p></div>
 </div>
 <div class="gallery3" data-gallery="c5"></div>`
},
{
 id:'c6',num:'6',title:'Núcleos da base — circuitos e clínica',group:'Jornada',subtitle:'Substância negra, cápsula interna e síndromes',
 hero:'Movimento, vias e correlações clínicas',desc:'O material conecta substância negra e dopamina ao corpo estriado, diferencia sistemas piramidal e extrapiramidal e apresenta síndromes associadas.',
 content:`
 <div class="grid2">
  <div class="card"><h3>Substância negra</h3><p>Os slides destacam neurônios com melanina e dopamina e fibras nigro-estriatais. A degeneração dessas fibras é associada à diminuição da dopamina no corpo estriado.</p></div>
  <div class="card"><h3>Parkinson</h3><p>Na sequência clínica aparecem rigidez, hipertonia plástica, postura em flexão, bradicinesia, marcha em pequenos passos/freezing e tremor de repouso.</p></div>
 </div>
 <div class="grid2">
  <div class="card"><h3>Huntington</h3><p>O material relaciona a coreia de Huntington à atrofia do núcleo caudado e apresenta alterações psiquiátricas/comportamentais como possíveis manifestações iniciais.</p></div>
  <div class="card"><h3>Cápsula interna</h3><p>Nos slides aparecem ramo anterior, joelho e ramo posterior. A sequência liga a cápsula a vias eferentes somáticas e discute lesões com déficits motores e outras alterações.</p></div>
 </div>
 <div class="card"><h3>Piramidal × extrapiramidal</h3><div class="grid2"><div class="mini"><b>Sistema piramidal</b>Tractos córtico-espinhal e córtico-nuclear; relacionado aos movimentos voluntários no material.</div><div class="mini"><b>Sistema extrapiramidal</b>Demais estruturas e vias motoras somáticas; relacionado a movimentos automáticos, tônus e postura.</div></div></div>
 <div class="gallery3" data-gallery="c6"></div>`
},
{
 id:'c7',num:'7',title:'Tronco encefálico — bulbo',group:'Jornada',subtitle:'Bulbo, pirâmides, oliva e pares cranianos',
 hero:'Bulbo ou medula oblonga',desc:'O bulbo é apresentado como parte do tronco percorrida por numerosos tractos motores e sensitivos. Os slides destacam decussação das pirâmides, oliva bulbar e nervos cranianos associados.',
 content:`
 <div class="grid2">
  <div class="card"><h3>Estruturas-chave</h3><ul class="tight"><li>Decussação das pirâmides.</li><li>Oliva bulbar; conexões olivo-cerebelares relacionadas à aprendizagem motora.</li><li>Continuidade com medula e relação com a ponte.</li></ul></div>
  <div class="card"><h3>Pares cranianos mostrados no bloco</h3><ul class="tight"><li>IX — glossofaríngeo, formação mista.</li><li>X — vago, formação mista e territórios no pescoço, tórax e abdômen.</li><li>XI — acessório.</li><li>XII — hipoglosso, motor para motricidade da língua.</li></ul></div>
 </div>
 <div class="callout coral"><b>Use as relações.</b> Em peça de tronco, procure primeiro pirâmides e olivas. Em seguida, associe o nível às emergências de nervos mostradas nas aulas.</div>
 <div class="gallery3" data-gallery="c7"></div>`
},
{
 id:'c8',num:'8',title:'Tronco encefálico — ponte e IV ventrículo',group:'Jornada',subtitle:'Ponte, ângulo ponto-cerebelar e fossa romboide',
 hero:'Ponte e fossa romboide',desc:'A ponte é descrita como uma eminência quadrilátera entre bulbo e mesencéfalo. A sequência inclui nervos VI–VIII, artéria basilar, ângulo ponto-cerebelar e o assoalho do IV ventrículo.',
 content:`
 <div class="grid2">
  <div class="card"><h3>Ponte</h3><ul class="tight"><li>Eminência pontina e sulco da artéria basilar.</li><li>Braço da ponte/pedúnculo cerebelar médio aparece na anatomia de superfície.</li><li>VI — abducente: motor para o reto lateral, conforme o slide.</li><li>VII — facial: nervo misto no material.</li><li>VIII — vestíbulo-coclear: sensitivo para estímulos sonoros.</li></ul></div>
  <div class="card"><h3>IV ventrículo / fossa romboide</h3><ul class="tight"><li>Colículo facial.</li><li>Área vestibular.</li><li>Locus ceruleus.</li><li>Trígono do hipoglosso e do vago.</li><li>Funículo separans e área postrema.</li></ul></div>
 </div>
 <div class="card"><h3>Circulação do LCR nos slides</h3><p>A anotação de aula relaciona forame interventricular (Monro), aqueduto cerebral (Sylvius) no mesencéfalo e saídas do IV ventrículo por Luschka e Magendie para o espaço subaracnoide.</p></div>
 <div class="gallery3" data-gallery="c8"></div>`
},
{
 id:'c9',num:'9',title:'Tronco encefálico — mesencéfalo',group:'Jornada',subtitle:'Pedúnculos, núcleos e pares III–IV',
 hero:'Mesencéfalo e nervos cranianos',desc:'O mesencéfalo é apresentado entre ponte e diencéfalo. Os slides destacam pedúnculos cerebrais, fossa interpeduncular, substância perfurada posterior, núcleo rubro, substância negra e pares III e IV.',
 content:`
 <div class="grid2">
  <div class="card"><h3>Face ventral e relações</h3><ul class="tight"><li>Pedúnculos cerebrais.</li><li>Fossa interpeduncular.</li><li>Substância perfurada posterior.</li><li>Sulcos do pedúnculo.</li></ul></div>
  <div class="card"><h3>Núcleo rubro</h3><p>O material descreve recebimento de fibras do cerebelo/núcleo denteado e relações com núcleo olivar inferior e trato rubro-espinhal.</p></div>
 </div>
 <div class="grid2"><div class="card"><h3>III — oculomotor</h3><p>No slide, aparece no nível mesencefálico e é relacionado à musculatura extrínseca do olho.</p></div><div class="card"><h3>IV — troclear</h3><p>Apresentado como motor e relacionado ao músculo oblíquo superior.</p></div></div>
 <div class="gallery3" data-gallery="c9"></div>`
},
{
 id:'c10',num:'10',title:'Cerebelo — anatomia',group:'Jornada',subtitle:'Localização, vérmis, hemisférios, fissuras e pedúnculos',
 hero:'Anatomia macroscópica do cerebelo',desc:'O cerebelo é descrito como órgão suprassegmentar derivado da parte dorsal do metencéfalo, localizado dorsalmente a bulbo e ponte e na fossa posterior do crânio.',
 content:`
 <div class="grid2">
  <div class="card"><h3>Localização e função geral</h3><ul class="tight"><li>Fossa posterior, sob o lobo occipital, separado pela tenda do cerebelo.</li><li>Funções principais: equilíbrio e coordenação dos movimentos.</li><li>O material também relaciona controle de movimentos, aprendizagem motora e tônus muscular.</li></ul></div>
  <div class="card"><h3>Córtex cerebelar</h3><p>Da superfície para o interior: camada molecular, camada de células de Purkinje e camada granular.</p></div>
 </div>
 <div class="grid2"><div class="card"><h3>Divisão anatômica</h3><p>Vérmis mediano + hemisfério cerebelar direito + hemisfério cerebelar esquerdo.</p></div><div class="card"><h3>Conformação externa</h3><p>Sulcos transversais delimitam folhas. Fissuras delimitam lóbulos. A fixação ao mesencéfalo, ponte e bulbo ocorre pelos pedúnculos cerebelares.</p></div></div>
 <div class="gallery3" data-gallery="c10"></div>`
},
{
 id:'c11',num:'11',title:'Cerebelo — divisões e função',group:'Jornada',subtitle:'Ontogênese, filogênese e circuitos funcionais',
 hero:'Como o cerebelo é dividido nos slides',desc:'A aula usa divisão anatômica, ontogenética e filogenética. A revisão separa essas três lógicas para reduzir confusão entre lobo, fissura e sistema funcional.',
 content:`
 <div class="card"><h3>Divisão ontogenética</h3><ul class="tight"><li>Fissura póstero-lateral individualiza o lóbulo flóculo-nodular.</li><li>Fissura prima individualiza lobos anterior e posterior.</li><li>Fissura horizontal separa faces superior e inferior.</li></ul></div>
 <div class="grid3">
  <div class="mini"><b>Arquicerebelo</b>Flóculo-nodular; relacionado ao equilíbrio no material.</div>
  <div class="mini"><b>Paleocerebelo</b>Lobo anterior + pirâmide e úvula; ligado a tônus e postura.</div>
  <div class="mini"><b>Neocerebelo</b>Todo restante; ligado à coordenação de movimentos finos/complexos.</div>
 </div>
 <div class="card"><h3>Aspectos funcionais destacados</h3><ul class="tight"><li>Manutenção do equilíbrio e postura.</li><li>Controle do tônus.</li><li>Controle dos movimentos voluntários.</li><li>Aprendizagem motora — via olivo-cerebelar.</li></ul></div>
 <div class="gallery3" data-gallery="c11"></div>`
},
{
 id:'c12',num:'12',title:'Cerebelo — síndromes',group:'Jornada',subtitle:'Disfunções e sinais clínicos dos slides',
 hero:'Síndromes cerebelares',desc:'O bloco final destaca que disfunções cerebelares produzem sobretudo alterações motoras e organiza exemplos por arquicerebelo, paleocerebelo e neocerebelo.',
 content:`
 <div class="grid2">
  <div class="card"><h3>Arquicerebelo</h3><p>O material cita tumor no teto do IV ventrículo e instabilidade postural.</p></div>
  <div class="card"><h3>Paleocerebelo</h3><p>O material cita alcoolismo crônico e alargamento da marcha.</p></div>
 </div>
 <div class="card"><h3>Neocerebelo — sinais mostrados</h3><div class="flow"><span>Ataxia</span><span>Disdiadococinesia</span><span>Dismetria</span><span>Rechaço</span><span>Nistagmo</span><span>Disartria</span></div><p>Os slides descrevem disdiadococinesia como dificuldade em movimentos rápidos e coordenados e dismetria como dificuldade em apontar um alvo.</p></div>
 <div class="gallery3" data-gallery="c12"></div>`
},
{
 id:'atlas',num:'◉',title:'Atlas visual',group:'Revisão',subtitle:'Todas as imagens selecionadas',
 hero:'Atlas visual de alta frequência',desc:'Toque em qualquer figura para ampliar. As imagens são recortes das próprias páginas dos PDFs enviados, organizadas por tema para uso em tablet.',
 content:`<div id="atlasAll"></div>`
},
{
 id:'flash',num:'◇',title:'Flashcards',group:'Revisão',subtitle:'Memória ativa',
 hero:'Flashcards de neuroanatomia',desc:'Toque no cartão para virar. As perguntas usam somente o conteúdo dos materiais enviados.',
 content:`<div class="btnRow"><button class="btn secondary" id="shuffleFlash">Embaralhar</button><button class="btn" id="resetFlash">Voltar todas</button></div><div id="flashGrid" class="flashGrid" style="margin-top:16px"></div>`
},
{
 id:'quiz',num:'★',title:'Simulado',group:'Revisão',subtitle:'Questões aleatórias',
 hero:'Simulado final',desc:'Gere 15 questões aleatórias. O feedback aparece após cada resposta e o XP é somado no final.',
 content:`<div class="scoreHero"><div class="scoreStat"><b id="qScore">—</b><span>acertos</span></div><div class="scoreStat"><b id="qDone">0</b><span>respondidas</span></div><div class="scoreStat"><b id="qPct">—</b><span>desempenho</span></div></div><div class="btnRow"><button class="btn coral" id="startQuiz">Gerar 15 questões</button></div><div id="quizHost"></div><div id="quizFinal" class="callout hidden"></div>`
}
];


const chapterTheory={
 c1:`<div class="theoryBody"><p><b>Ideia central.</b> Antes de decorar estruturas isoladas, vale montar um mapa mental do encéfalo. O sistema nervoso central contém medula espinhal e encéfalo; no encéfalo, a revisão que você está usando gira principalmente em torno de telencéfalo, tronco encefálico e cerebelo. O tronco, por sua vez, é organizado em bulbo, ponte e mesencéfalo.</p><p><b>Como estudar este capítulo.</b> Sempre que olhar uma peça ou imagem, pergunte primeiro: estou vendo uma visão superior, lateral, inferior, ventral ou medial? Depois localize a grande região. Só então desça para detalhes menores, como um giro, um sulco, um pedúnculo ou um núcleo.</p><p><b>Associação prática.</b> Em prova prática, uma boa estratégia é identificar primeiro se a imagem pertence ao telencéfalo, ao cerebelo ou ao tronco. Esse reconhecimento inicial diminui muito os erros porque várias estruturas são parecidas quando vistas sem contexto.</p></div>`,
 c2:`<div class="theoryBody"><p><b>Telencéfalo por fora.</b> O telencéfalo compreende os dois hemisférios cerebrais, direito e esquerdo, separados de modo incompleto pela fissura longitudinal do cérebro. No assoalho dessa fissura está o corpo caloso, principal comissura inter-hemisférica, responsável por unir áreas corticais dos dois lados.</p><p><b>Orientação espacial.</b> Cada hemisfério possui três faces — súpero-lateral, medial e inferior — e três polos — frontal, temporal e occipital. Essa organização é extremamente útil para prova porque muitas bancas perguntam uma estrutura junto da sua face ou da sua relação topográfica.</p><p><b>Lobos.</b> Os lobos clássicos são frontal, temporal, parietal e occipital. A ínsula aparece como um quinto lobo, mais profundo, escondido no sulco lateral. Guardar isso evita confundir a ínsula com uma saliência de superfície externa comum.</p></div>`,
 c3:`<div class="theoryBody"><p><b>Sulcos e giros da face súpero-lateral.</b> O raciocínio aqui começa com dois marcos: sulco lateral e sulco central. O sulco lateral ajuda a separar frontal de temporal. O sulco central separa frontal de parietal e serve de referência para os giros pré-central e pós-central.</p><p><b>Lobo frontal.</b> O giro pré-central é a principal referência motora do capítulo. Nos giros frontal superior, médio e inferior, você precisa mais da orientação anatômica do que de decorar todos os detalhes de imediato. A área de Broca costuma aparecer ligada à porção inferior do lobo frontal dominante.</p><p><b>Lobo temporal e parietal.</b> No temporal, os giros superior, médio e inferior seguem a organização dos sulcos temporais. No parietal, o giro pós-central é a referência sensitiva mais importante. A ínsula deve ser lembrada como estrutura profunda, com sulco circular, sulco central da ínsula e giros curtos e longos.</p></div>`,
 c4:`<div class="theoryBody"><p><b>Face medial.</b> A face medial reúne muitos marcos cobrados em revisão: corpo caloso, sulco do cíngulo, lóbulo paracentral, pré-cúneo, sulco parieto-occipital, sulco calcarino e cúneo. Uma forma boa de estudar é percorrer a imagem de anterior para posterior e repetir esse trajeto algumas vezes.</p><p><b>Face inferior.</b> Na base do cérebro aparecem estruturas ligadas à olfação, como bulbo e trato olfatório, estrias olfatórias e substância perfurada anterior. No lobo temporal medial, convém reconhecer hipocampo e giro para-hipocampal como referências anatômicas importantes.</p><p><b>Interior do hemisfério.</b> O cérebro combina córtex de substância cinzenta, centro branco medular e núcleos profundos de substância cinzenta. Os ventrículos laterais entram aqui como cavidades essenciais para orientação anatômica e relação com o núcleo caudado e estruturas vizinhas.</p></div>`,
 c5:`<div class="theoryBody"><p><b>Núcleos da base: ideia geral.</b> São massas profundas de substância cinzenta, fortemente relacionadas ao controle do movimento e também a circuitos emocionais e cognitivos. Para revisão anatômica, vale separar o que é mais clássico: núcleo caudado, putâmen e globo pálido, lembrando que putâmen + globo pálido formam o núcleo lentiforme.</p><p><b>Relações espaciais.</b> O núcleo caudado é alongado e acompanha o ventrículo lateral, sendo dividido em cabeça, corpo e cauda. O putâmen ocupa posição mais lateral, enquanto o globo pálido fica mais medial. O núcleo accumbens aparece na união entre putâmen e cabeça do caudado, compondo o estriado ventral.</p><p><b>Outras estruturas.</b> Claustrum, corpo amigdalóide, núcleo basal de Meynert, substância negra e subtálamo costumam aparecer associados ao tema. Mesmo quando a aula simplifica funções, é importante não perder as relações anatômicas entre essas estruturas e cápsula interna, tálamo e córtex da ínsula.</p></div>`,
 c6:`<div class="theoryBody"><p><b>Circuitos.</b> Quando o estudo sai da pura morfologia, os núcleos da base passam a ser entendidos como circuitos córtico-estriato-pálido-talâmico-corticais. O ponto mais importante para revisão é perceber que eles modulam o movimento, ajudando a selecionar, iniciar e ajustar programas motores.</p><p><b>Substância negra e dopamina.</b> A substância negra tem papel central porque suas projeções dopaminérgicas modulam a atividade do estriado. Isso explica por que a perda dessas fibras está associada à doença de Parkinson, com hipocinesia, rigidez e tremor.</p><p><b>Clínica resumida.</b> Huntington costuma ser lembrada pela degeneração que compromete fortemente o caudado e produz coreia. Lesões do subtálamo são clássicas no hemibalismo. A cápsula interna aparece como grande via de fibras de projeção, muito importante para integrar córtex e estruturas subcorticais.</p></div>`,
 c7:`<div class="theoryBody"><p><b>Bulbo.</b> O bulbo ou medula oblonga é a porção mais caudal do tronco encefálico e faz continuidade com a medula espinhal. Entre seus marcos externos, as pirâmides são essenciais por abrigarem fibras corticoespinhais; na região caudal ocorre a decussação das pirâmides.</p><p><b>Referências de superfície.</b> A oliva bulbar é outra referência clássica, relacionada ao núcleo olivar inferior e a circuitos de aprendizagem motora com o cerebelo. Também é importante reconhecer os sulcos de onde emergem filamentos radiculares de nervos cranianos, especialmente o hipoglosso.</p><p><b>Dica de revisão.</b> Em imagens de tronco, diferenciar primeiro a face ventral e a dorsal ajuda bastante. No bulbo ventral, pirâmide e oliva costumam resolver metade da identificação.</p></div>`,
 c8:`<div class="theoryBody"><p><b>Ponte.</b> A ponte fica entre bulbo e mesencéfalo. Na face ventral, o sulco basilar e a emergência do trigêmeo ajudam muito no reconhecimento. Na junção ponto-bulbar emergem ainda os nervos VI, VII e VIII, tópico que costuma aparecer em questões de identificação.</p><p><b>IV ventrículo.</b> A parte dorsal da ponte, junto com a porção aberta do bulbo, participa do assoalho do IV ventrículo, também chamado fossa romboide. Essa área tem vários marcos anatômicos, como sulco mediano, eminência medial, colículo facial, área vestibular e estrias medulares.</p><p><b>Relação com cerebelo.</b> A ponte é fortemente conectada ao cerebelo, especialmente pelo pedúnculo cerebelar médio. Isso é útil para associar anatomia macroscópica e função.</p></div>`,
 c9:`<div class="theoryBody"><p><b>Mesencéfalo.</b> O mesencéfalo é a parte cranial do tronco, interposta entre ponte e diencéfalo. Sua face ventral exibe os pedúnculos cerebrais e a fossa interpeduncular. Dorsalmente, estão estruturas do tecto mesencefálico.</p><p><b>Nervos cranianos.</b> Dois pares cranianos são especialmente associados ao mesencéfalo: o oculomotor (III), que emerge ventralmente na fossa interpeduncular, e o troclear (IV), o único nervo craniano que emerge dorsalmente e contorna o tronco.</p><p><b>Integração.</b> Em revisão funcional, o mesencéfalo costuma ser ligado também à substância negra e ao aqueduto cerebral. Em prova prática, reconhecer o pedúnculo cerebral geralmente é a melhor porta de entrada para o diagnóstico da peça.</p></div>`,
 c10:`<div class="theoryBody"><p><b>Cerebelo: organização geral.</b> O cerebelo localiza-se na fossa posterior, abaixo do lobo occipital, separado por ele pela tenda do cerebelo. Apresenta uma porção mediana, o vérmis, e duas massas laterais, os hemisférios cerebelares.</p><p><b>Superfície e interior.</b> A superfície cerebelar possui sulcos e fissuras que delimitam folhas e lóbulos. No interior, existe o corpo medular de substância branca, recoberto pelo córtex cerebelar. As camadas do córtex são molecular, células de Purkinje e granular.</p><p><b>Pedúnculos.</b> O cerebelo se conecta ao tronco encefálico pelos pedúnculos cerebelares inferior, médio e superior. Em revisão visual, eles ajudam a orientar de imediato com qual segmento do tronco a peça está relacionada.</p></div>`,
 c11:`<div class="theoryBody"><p><b>Divisão ontogenética.</b> A divisão em lobo anterior, lobo posterior e lobo flóculo-nodular depende principalmente das fissuras póstero-lateral e prima. Esse é um clássico de prova porque cruza morfologia com desenvolvimento.</p><p><b>Divisão filogenética.</b> O arquicerebelo corresponde essencialmente ao lobo flóculo-nodular e liga-se ao equilíbrio. O paleocerebelo relaciona-se a tônus e postura. O neocerebelo, mais desenvolvido nos mamíferos, está fortemente ligado aos movimentos finos e ao córtex cerebral.</p><p><b>Como memorizar.</b> Pense em uma progressão funcional: equilíbrio → postura/tônus → refinamento motor. Isso facilita muito a distinção entre arqui, páleo e neocerebelo.</p></div>`,
 c12:`<div class="theoryBody"><p><b>Síndromes cerebelares.</b> Quando o cerebelo falha, o grande tema é descoordenação. A ataxia aparece como expressão global dessa perda de coordenação. A depender do setor acometido, os sinais podem predominar em equilíbrio, marcha, fala, olhar ou coordenação apendicular.</p><p><b>Sinais clássicos.</b> Disdiadococinesia é a dificuldade de realizar movimentos rápidos e alternados. Dismetria é a dificuldade de atingir corretamente um alvo. Também podem surgir nistagmo, disartria e decomposição do movimento.</p><p><b>Ligação com a divisão funcional.</b> Lesões mais vestibulares tendem a repercutir em equilíbrio; lesões espinhais em tônus e postura; e lesões do neocerebelo em movimentos finos e planejamento motor. Essa associação ajuda a sair da decoreba e entender a lógica do capítulo.</p></div>`
};

const galleries={
 home:[
  ['machado_p52-052.jpg','Tronco encefálico em vista ventral','Machado · p. 44'],
  ['machado_p69-069.jpg','Face súpero-lateral do telencéfalo','Machado · p. 62'],
  ['machado_p247-247.jpg','Núcleos da base e cápsula interna','Machado · p. 250'],
  ['machado_p58-058.jpg','Cerebelo em vista súpero-dorsal','Machado · p. 50'],
  ['machado_p55-055.jpg','Fossa romboide e IV ventrículo','Machado · p. 47'],
  ['machado_p77-077.jpg','Ventrículo lateral e corpo caloso','Machado · p. 70']
 ],
 c1:[['machado_p52-052.jpg','Tronco encefálico em vista ventral','Machado · p. 44'],['machado_p58-058.jpg','Cerebelo em vista súpero-dorsal','Machado · p. 50'],['machado_p69-069.jpg','Telencéfalo em face súpero-lateral','Machado · p. 62']],
 c2:[['machado_p69-069.jpg','Lobo frontal, parietal e temporal','Machado · p. 62'],['machado_p70-070.jpg','Ínsula e regiões vizinhas','Machado · p. 63'],['machado_p72-072.jpg','Face medial — corpo caloso e cíngulo','Machado · p. 65'],['machado_p75-075.jpg','Face inferior e vias olfatórias','Machado · p. 68']],
 c3:[['machado_p69-069.jpg','Sulcos e giros principais','Machado · p. 62'],['machado_p70-070.jpg','Ínsula, sulco central e giro temporal transverso','Machado · p. 63']],
 c4:[['machado_p72-072.jpg','Face medial — cíngulo e lóbulo paracentral','Machado · p. 65'],['machado_p73-073.jpg','Face medial — pré-cúneo e fórnix','Machado · p. 66'],['machado_p75-075.jpg','Face inferior — base do cérebro','Machado · p. 68'],['machado_p77-077.jpg','Ventrículo lateral e estruturas profundas','Machado · p. 70']],
 c5:[['machado_p247-247.jpg','Núcleos da base, tálamo e cápsula interna','Machado · p. 250'],['machado_p248-248.jpg','Cabeça do núcleo caudado e corno anterior','Machado · p. 251'],['machado_p253-253.jpg','Fibras de associação e centro branco medular','Machado · p. 256']],
 c6:[['machado_p247-247.jpg','Vista lateral do circuito anatômico','Machado · p. 250'],['machado_p248-248.jpg','Relação com ventrículos laterais','Machado · p. 251'],['machado_p253-253.jpg','Centro branco medular e conexões','Machado · p. 256']],
 c7:[['machado_p52-052.jpg','Bulbo na vista ventral do tronco','Machado · p. 44'],['machado_p55-055.jpg','Assoalho do IV ventrículo','Machado · p. 47']],
 c8:[['machado_p52-052.jpg','Ponte e emergência de nervos cranianos','Machado · p. 44'],['machado_p55-055.jpg','Fossa romboide e área vestibular','Machado · p. 47']],
 c9:[['machado_p56-056.jpg','Mesencéfalo, pedúnculos e substância negra','Machado · p. 48'],['machado_p52-052.jpg','Vista ventral — fossa interpeduncular','Machado · p. 44']],
 c10:[['machado_p58-058.jpg','Cerebelo em vista súpero-dorsal','Machado · p. 50'],['machado_p59-059.jpg','Secção sagital do cerebelo','Machado · p. 51'],['machado_p60-060.jpg','Divisão em lobos e fissuras','Machado · p. 52']],
 c11:[['machado_p60-060.jpg','Lobos e fissuras do cerebelo','Machado · p. 52'],['machado_p58-058.jpg','Marcos anatômicos externos','Machado · p. 50'],['machado_p59-059.jpg','Relações internas e vermis','Machado · p. 51']],
 c12:[['machado_p58-058.jpg','Referência anatômica do cerebelo','Machado · p. 50'],['machado_p59-059.jpg','Secção sagital mediana','Machado · p. 51'],['machado_p60-060.jpg','Divisão funcional/ontogenética','Machado · p. 52']]
};

const allImages=[
 ['Livro Machado','machado_p52-052.jpg','Tronco encefálico em vista ventral','p. 44'],
 ['Livro Machado','machado_p55-055.jpg','Fossa romboide e IV ventrículo','p. 47'],
 ['Livro Machado','machado_p56-056.jpg','Mesencéfalo e pedúnculos cerebrais','p. 48'],
 ['Livro Machado','machado_p58-058.jpg','Cerebelo em vista súpero-dorsal','p. 50'],
 ['Livro Machado','machado_p59-059.jpg','Secção sagital do cerebelo','p. 51'],
 ['Livro Machado','machado_p60-060.jpg','Divisão do cerebelo em lobos e fissuras','p. 52'],
 ['Livro Machado','machado_p63-063.jpg','Corpo caloso e parte central do ventrículo lateral','p. 56'],
 ['Livro Machado','machado_p69-069.jpg','Sulcos e giros da face súpero-lateral','p. 62'],
 ['Livro Machado','machado_p70-070.jpg','Ínsula, giros curtos e longos','p. 63'],
 ['Livro Machado','machado_p72-072.jpg','Face medial do cérebro','p. 65'],
 ['Livro Machado','machado_p73-073.jpg','Corpo caloso, cíngulo e pré-cúneo','p. 66'],
 ['Livro Machado','machado_p75-075.jpg','Face inferior do cérebro e olfação','p. 68'],
 ['Livro Machado','machado_p77-077.jpg','Ventrículo lateral e núcleo caudado','p. 70'],
 ['Livro Machado','machado_p247-247.jpg','Núcleos da base, tálamo e cápsula interna','p. 250'],
 ['Livro Machado','machado_p248-248.jpg','Cabeça do núcleo caudado e corno anterior','p. 251'],
 ['Livro Machado','machado_p253-253.jpg','Fibras de associação e centro branco medular','p. 256']
];

const flashcards=[
 ['Quais são as três faces de cada hemisfério?','Súpero-lateral, medial e inferior.'],
 ['Quais são os três polos do hemisfério?','Frontal, temporal e occipital.'],
 ['Qual estrutura é apresentada como a maior comissura inter-hemisférica?','Corpo caloso.'],
 ['Quais lobos aparecem no material?','Frontal, temporal, parietal, occipital e ínsula.'],
 ['Qual sulco separa frontal de temporal?','Sulco lateral.'],
 ['Quais ramos do sulco lateral são destacados?','Anterior, ascendente e posterior.'],
 ['Qual sulco separa frontal de parietal?','Sulco central ou de Rolando.'],
 ['Qual giro fica anteriormente ao sulco central?','Giro pré-central.'],
 ['Qual giro fica posteriormente ao sulco central?','Giro pós-central.'],
 ['Que função o material associa ao giro pré-central?','Área motora principal/córtex motor.'],
 ['Que função o material associa ao giro pós-central?','Área sensitiva somestésica.'],
 ['Onde a ínsula está situada?','Profundamente no sulco lateral.'],
 ['Quais estruturas compõem o núcleo lentiforme no material?','Putâmen e globo pálido.'],
 ['Como o núcleo caudado é dividido?','Cabeça, corpo e cauda.'],
 ['Com que cavidade o caudado mantém relação ao longo da sua extensão?','Ventrículos laterais.'],
 ['Onde o núcleo accumbens é mostrado?','Na união entre putâmen e cabeça do núcleo caudado.'],
 ['O que o material associa ao núcleo basal de Meynert?','Produção de acetilcolina, atenção e memória.'],
 ['Qual neurotransmissor é destacado na substância negra?','Dopamina.'],
 ['Qual doença é associada à degeneração nigro-estriatal?','Doença de Parkinson.'],
 ['Qual doença é associada à atrofia do núcleo caudado?','Coreia de Huntington.'],
 ['Quais são as partes da cápsula interna destacadas?','Ramo anterior, joelho e ramo posterior.'],
 ['O sistema piramidal é relacionado a quê nos slides?','Movimentos voluntários.'],
 ['O sistema extrapiramidal é relacionado a quê nos slides?','Movimentos automáticos, tônus e postura.'],
 ['Quais são os três segmentos do tronco encefálico?','Mesencéfalo, ponte e bulbo.'],
 ['Qual estrutura do bulbo é destacada para a via piramidal?','Decussação das pirâmides.'],
 ['A oliva bulbar é ligada a qual aspecto funcional nos slides?','Aprendizagem motora por conexões olivo-cerebelares.'],
 ['Qual nervo craniano é relacionado à motricidade da língua?','Hipoglosso, XII.'],
 ['Qual nervo é descrito como misto e com territórios no pescoço, tórax e abdômen?','Vago, X.'],
 ['Qual nervo da ponte inerva o reto lateral segundo o material?','Abducente, VI.'],
 ['Qual nervo é sensitivo para estímulos sonoros no material?','Vestíbulo-coclear, VIII.'],
 ['O mesencéfalo fica entre quais regiões?','Ponte e diencéfalo.'],
 ['Quais nervos cranianos o material associa diretamente ao mesencéfalo?','III oculomotor e IV troclear.'],
 ['Onde o cerebelo está localizado?','Na fossa posterior, abaixo do lobo occipital e separado dele pela tenda do cerebelo.'],
 ['Quais são as três camadas corticais cerebelares?','Molecular, células de Purkinje e granular.'],
 ['Qual é a porção mediana do cerebelo?','Vérmis.'],
 ['Como o cerebelo se fixa ao tronco?','Pelos pedúnculos cerebelares.'],
 ['Quais lobos aparecem na divisão ontogenética?','Anterior, posterior e flóculo-nodular.'],
 ['Qual divisão filogenética é ligada ao equilíbrio?','Arquicerebelo.'],
 ['Qual divisão filogenética é ligada a tônus e postura?','Paleocerebelo.'],
 ['Qual divisão filogenética é ligada a movimentos finos/complexos?','Neocerebelo.'],
 ['O que é disdiadococinesia nos slides?','Dificuldade de realizar movimentos rápidos e coordenados.'],
 ['O que é dismetria nos slides?','Dificuldade em apontar um alvo.']
];


const chapterQuestions={
 c1:[
  ['Qual opção mostra corretamente as três divisões do tronco encefálico?',['Telencéfalo, diencéfalo e cerebelo','Mesencéfalo, ponte e bulbo','Ponte, tálamo e medula','Bulbo, cerebelo e diencéfalo'],1,'O tronco encefálico é dividido em mesencéfalo, ponte e bulbo.'],
  ['Dentro do sistema nervoso central, o encéfalo inclui:',['Apenas telencéfalo e diencéfalo','Cérebro, cerebelo e tronco encefálico','Somente cérebro e medula','Nervos cranianos e gânglios'],1,'No mapa geral da aula, o encéfalo reúne cérebro, cerebelo e tronco encefálico.']
 ],
 c2:[
  ['Quais são as três faces de cada hemisfério cerebral?',['Frontal, temporal e occipital','Súpero-lateral, medial e inferior','Anterior, posterior e lateral','Superior, inferior e posterior'],1,'O material lista face súpero-lateral, medial e inferior.'],
  ['Qual lobo está situado profundamente no sulco lateral?',['Occipital','Parietal','Ínsula','Frontal'],2,'A ínsula é descrita como profundamente situada no sulco lateral.']
 ],
 c3:[
  ['O sulco central separa quais lobos?',['Frontal e temporal','Frontal e parietal','Parietal e occipital','Temporal e occipital'],1,'O sulco central, ou de Rolando, separa os lobos frontal e parietal.'],
  ['Qual sulco separa principalmente o lobo frontal do temporal?',['Sulco calcarino','Sulco central','Sulco lateral','Sulco do cíngulo'],2,'O sulco lateral separa frontal de temporal.']
 ],
 c4:[
  ['Qual cavidade é encontrada no interior de cada hemisfério cerebral?',['III ventrículo','Aqueduto cerebral','Ventrículo lateral','IV ventrículo'],2,'Cada hemisfério possui um ventrículo lateral.'],
  ['Na face inferior, as áreas 28 e 34 são relacionadas no material a qual função?',['Audição','Visão','Olfato','Motricidade'],2,'As áreas 28 e 34 são apresentadas como córtex olfatório primário.']
 ],
 c5:[
  ['O núcleo lentiforme é formado por:',['Caudado e putâmen','Putâmen e globo pálido','Caudado e globo pálido','Accumbens e caudado'],1,'O núcleo lentiforme é apresentado como putâmen lateral e globo pálido medial.'],
  ['O núcleo caudado é dividido em:',['Cabeça, corpo e cauda','Anterior, médio e posterior','Medial e lateral','Putâmen, pálido e caudado'],0,'O material divide o núcleo caudado em cabeça, corpo e cauda.']
 ],
 c6:[
  ['A degeneração das fibras nigro-estriatais é associada a:',['Coreia de Huntington','Doença de Parkinson','Afasia de Broca','Síndrome cerebelar'],1,'O material relaciona degeneração nigro-estriatal à doença de Parkinson.'],
  ['O sistema extrapiramidal é relacionado principalmente a:',['Movimentos automáticos, tônus e postura','Linguagem e memória','Audição e visão','Movimentos voluntários finos exclusivamente'],0,'Nos slides, o sistema extrapiramidal é associado a movimentos automáticos, tônus e postura.']
 ],
 c7:[
  ['A decussação das pirâmides é destacada em qual parte do tronco encefálico?',['Ponte','Mesencéfalo','Bulbo','Cerebelo'],2,'A decussação das pirâmides é destacada no bulbo.'],
  ['Qual nervo craniano está ligado à motricidade da língua?',['IX — glossofaríngeo','X — vago','XI — acessório','XII — hipoglosso'],3,'O hipoglosso, XII par, é apresentado como motor para a língua.']
 ],
 c8:[
  ['Na ponte, o nervo abducente está relacionado a qual músculo?',['Reto lateral','Reto medial','Oblíquo superior','Elevador da pálpebra'],0,'O VI par é relacionado ao músculo reto lateral.'],
  ['Qual estrutura aparece entre os marcos da fossa romboide?',['Corpo caloso','Área vestibular','Núcleo caudado','Fórnix'],1,'A área vestibular é um dos marcos mostrados no assoalho do IV ventrículo.']
 ],
 c9:[
  ['O mesencéfalo está localizado entre:',['Bulbo e medula','Ponte e diencéfalo','Cerebelo e telencéfalo','Ponte e bulbo'],1,'O material coloca o mesencéfalo entre a ponte e o diencéfalo.'],
  ['Quais pares cranianos são destacados diretamente no mesencéfalo?',['III e IV','V e VI','VII e VIII','IX e X'],0,'Oculomotor (III) e troclear (IV) são os pares destacados nesse nível.']
 ],
 c10:[
  ['Qual é a porção ímpar e mediana do cerebelo?',['Flóculo','Vérmis','Tonsila','Nódulo'],1,'A porção mediana do cerebelo é o vérmis.'],
  ['O cerebelo se fixa ao mesencéfalo, ponte e bulbo por meio de:',['Corpo caloso','Fórnix','Pedúnculos cerebelares','Cápsula interna'],2,'A fixação ao tronco ocorre pelos pedúnculos cerebelares.']
 ],
 c11:[
  ['Na divisão ontogenética, a fissura póstero-lateral individualiza:',['Lobo anterior','Lobo posterior','Lóbulo flóculo-nodular','Vérmis'],2,'A fissura póstero-lateral individualiza o lóbulo flóculo-nodular.'],
  ['Qual divisão filogenética é relacionada principalmente ao equilíbrio?',['Neocerebelo','Paleocerebelo','Arquicerebelo','Cerebrocerebelo'],2,'O arquicerebelo é relacionado ao equilíbrio.']
 ],
 c12:[
  ['Disdiadococinesia é:',['Dificuldade de realizar movimentos rápidos e coordenados','Perda da sensibilidade dolorosa','Paralisia facial periférica','Tremor exclusivamente de repouso'],0,'No material, disdiadococinesia é dificuldade de realizar movimentos rápidos e coordenados.'],
  ['Dismetria é:',['Dificuldade em apontar um alvo','Perda da audição','Incapacidade de formar novas memórias','Rigidez muscular'],0,'No material, dismetria é a dificuldade em apontar um alvo.']
 ]
};

const questions=[
 ['Cada hemisfério cerebral possui quais faces?',['Anterior, posterior e inferior','Súpero-lateral, medial e inferior','Medial, lateral e posterior','Frontal, temporal e occipital'],1,'O material lista face súpero-lateral, medial e inferior.'],
 ['A principal união entre os dois hemisférios, segundo a aula, é feita por qual estrutura?',['Fórnix','Corpo caloso','Tálamo','Cápsula interna'],1,'O corpo caloso é apresentado como a maior comissura inter-hemisférica.'],
 ['O sulco central separa quais lobos?',['Frontal e temporal','Temporal e occipital','Frontal e parietal','Parietal e occipital'],2,'O sulco central/ de Rolando separa frontal e parietal.'],
 ['O giro pré-central está associado a qual função no material?',['Visão','Área motora principal','Audição','Olfato'],1,'O giro pré-central é apresentado como área motora principal.'],
 ['O giro pós-central está ligado a qual função no material?',['Sensitiva somestésica','Olfatória','Visual','Auditiva'],0,'A aula associa o giro pós-central à área sensitiva somestésica.'],
 ['Qual lobo fica profundamente no sulco lateral?',['Occipital','Ínsula','Parietal','Frontal'],1,'A ínsula é visualizada ao afastar os lábios do sulco lateral.'],
 ['Qual giro do hemisfério esquerdo é relacionado ao centro cortical da palavra falada?',['Giro frontal inferior','Giro pós-central','Giro temporal inferior','Cúneo'],0,'O material relaciona o giro frontal inferior esquerdo à palavra falada.'],
 ['As áreas 41 e 42 aparecem associadas a quê?',['Audição','Visão','Motricidade','Olfato'],0,'Os slides colocam 41 e 42 no giro temporal transverso anterior, audição.'],
 ['Qual estrutura aparece na face inferior relacionada às vias olfatórias?',['Bulbo olfatório','Núcleo rubro','Oliva','Locus ceruleus'],0,'A face inferior mostra bulbo e trato olfatório, entre outras estruturas.'],
 ['O núcleo caudado é dividido em:',['Anterior e posterior','Cabeça, corpo e cauda','Putâmen e pálido','Medial e lateral'],1,'O material enfatiza cabeça, corpo e cauda.'],
 ['O núcleo lentiforme é formado por:',['Caudado + putâmen','Putâmen + globo pálido','Caudado + globo pálido','Accumbens + caudado'],1,'Lentiforme = putâmen lateral + globo pálido medial.'],
 ['O núcleo accumbens aparece na união entre:',['Tálamo e caudado','Putâmen e cabeça do caudado','Pálido e subtálamo','Amígdala e hipocampo'],1,'É mostrado como massa na união entre putâmen e cabeça do caudado.'],
 ['Qual estrutura é ligada à produção de acetilcolina no material?',['Substância negra','Núcleo basal de Meynert','Núcleo rubro','Globo pálido'],1,'O núcleo basal de Meynert é relacionado à produção de acetilcolina.'],
 ['Qual neurotransmissor é destacado na substância negra?',['Serotonina','Acetilcolina','Dopamina','GABA'],2,'O slide destaca neurônios dopaminérgicos.'],
 ['A degeneração das fibras nigro-estriatais é relacionada a:',['Huntington','Parkinson','Esclerose múltipla','Afasia'],1,'A sequência clínica do material é Parkinson.'],
 ['A atrofia do núcleo caudado é associada nos slides a:',['Coreia de Huntington','Síndrome de Benedikt','Millard-Gubler','Parkinson'],0,'O material associa Huntington à atrofia do caudado.'],
 ['Quais porções da cápsula interna aparecem na aula?',['Ramo anterior, joelho e ramo posterior','Cabeça, corpo e cauda','Anterior, médio e posterior do pálido','Medial, lateral e extrema'],0,'A aula mostra ramo anterior, joelho e ramo posterior.'],
 ['O sistema piramidal é ligado principalmente a:',['Movimentos voluntários','Equilíbrio','Memória','Audição'],0,'No material, tractos córtico-espinhal e córtico-nuclear estão ligados ao movimento voluntário.'],
 ['O sistema extrapiramidal é ligado no material a:',['Olfato e memória','Movimentos automáticos, tônus e postura','Visão e linguagem','Audição e equilíbrio'],1,'A aula o relaciona a movimentos automáticos, tônus e postura.'],
 ['O tronco encefálico é dividido em:',['Telencéfalo, diencéfalo e cerebelo','Bulbo, ponte e mesencéfalo','Bulbo, cerebelo e tálamo','Ponte, tálamo e córtex'],1,'As três divisões apresentadas são bulbo, ponte e mesencéfalo.'],
 ['A decussação das pirâmides é destacada em qual segmento?',['Ponte','Mesencéfalo','Bulbo','Cerebelo'],2,'O slide do bulbo destaca a decussação das pirâmides.'],
 ['As conexões olivo-cerebelares são relacionadas no material a:',['Aprendizagem motora','Olfato','Linguagem','Memória recente'],0,'A aula liga oliva bulbar e aprendizagem motora.'],
 ['O nervo hipoglosso é qual par craniano?',['IX','X','XI','XII'],3,'Hipoglosso = XII.'],
 ['O nervo vago é apresentado como:',['Sensitivo puro','Motor puro','Misto','Somente autonômico'],2,'O slide o descreve como nervo misto.'],
 ['Na ponte, o nervo abducente é relacionado a qual músculo?',['Reto lateral','Oblíquo superior','Reto medial','Elevador da pálpebra'],0,'O material liga o VI par ao músculo reto lateral.'],
 ['Qual par craniano é apresentado como sensitivo para estímulos sonoros?',['VI','VII','VIII','IX'],2,'Vestíbulo-coclear = VIII.'],
 ['Qual estrutura aparece no assoalho do IV ventrículo?',['Colículo facial','Corpo caloso','Núcleo caudado','Cúneo'],0,'O colículo facial é um dos marcos da fossa romboide mostrados.'],
 ['Qual estrutura também é destacada na fossa romboide?',['Área vestibular','Putâmen','Globo pálido','Fórnix'],0,'A área vestibular aparece junto a outros marcos do IV ventrículo.'],
 ['O mesencéfalo está entre:',['Bulbo e medula','Ponte e diencéfalo','Cerebelo e telencéfalo','Ponte e bulbo'],1,'A aula o coloca entre ponte e diencéfalo.'],
 ['Quais pares cranianos são mostrados diretamente no bloco do mesencéfalo?',['III e IV','V e VI','VII e VIII','IX e X'],0,'Oculomotor III e troclear IV.'],
 ['O cerebelo está localizado em qual fossa craniana?',['Anterior','Média','Posterior','Temporal'],2,'O material situa o cerebelo na fossa posterior.'],
 ['O cerebelo é separado do lobo occipital por:',['Foice do cérebro','Tenda do cerebelo','Corpo caloso','Septo pelúcido'],1,'A tenda do cerebelo é a dobra de dura-máter indicada nos slides.'],
 ['Quais são as três camadas do córtex cerebelar?',['Molecular, Purkinje e granular','Piramidal, granular e fusiforme','Molecular, piramidal e branca','Purkinje, branca e pial'],0,'A aula lista molecular, células de Purkinje e granular.'],
 ['A parte mediana do cerebelo é chamada de:',['Flóculo','Vérmis','Tonsila','Cúlmen'],1,'A porção ímpar e mediana é o vérmis.'],
 ['Os hemisférios cerebelares são:',['Duas massas laterais','Duas cavidades ventriculares','Dois núcleos do tronco','Partes do diencéfalo'],0,'O material descreve duas massas laterais.'],
 ['A fixação do cerebelo ao mesencéfalo, ponte e bulbo ocorre por:',['Pedúnculos cerebelares','Corpo caloso','Fórnix','Cápsula interna'],0,'A fixação é feita pelos pedúnculos cerebelares.'],
 ['Na divisão ontogenética, a fissura póstero-lateral individualiza:',['Lobo anterior','Lobo posterior','Lóbulo flóculo-nodular','Vérmis'],2,'O material relaciona a primeira fissura póstero-lateral ao flóculo-nodular.'],
 ['A fissura prima individualiza:',['Lobos anterior e posterior','Arquicerebelo e neocerebelo','Vérmis e hemisférios','Flóculo e nódulo'],0,'A segunda fissura citada é a prima, separando lobo anterior e posterior.'],
 ['Na divisão filogenética, o arquicerebelo corresponde a:',['Todo o lobo posterior','Flóculo-nodular','Lobo anterior + pirâmide e úvula','Todo restante'],1,'O material resume arquicerebelo como flóculo-nodular.'],
 ['Na divisão filogenética, o paleocerebelo é resumido como:',['Flóculo-nodular','Todo restante','Lobo anterior + pirâmide e úvula','Apenas tonsila'],2,'É a fórmula exibida na aula.'],
 ['Na divisão filogenética, o neocerebelo é resumido como:',['Todo restante','Flóculo-nodular','Somente vérmis','Lobo anterior'],0,'O slide resume neocerebelo como todo restante.'],
 ['Qual função é destacada para o arquicerebelo?',['Equilíbrio','Audição','Memória','Linguagem'],0,'O arquicerebelo é relacionado ao equilíbrio.'],
 ['Qual função é destacada para o paleocerebelo?',['Visão','Tônus e postura','Olfato','Fala'],1,'O paleocerebelo é relacionado a tônus e postura.'],
 ['Qual função é destacada para o neocerebelo?',['Movimentos finos/complexos','Controle visceral','Audição','Memória declarativa'],0,'O material relaciona neocerebelo a movimentos finos/complexos.'],
 ['Disdiadococinesia é definida no material como:',['Dificuldade de realizar movimentos rápidos e coordenados','Perda de sensibilidade','Tremor exclusivo de repouso','Paralisia facial'],0,'Essa é a definição apresentada no slide.'],
 ['Dismetria é definida no material como:',['Dificuldade em apontar um alvo','Dificuldade em ouvir','Perda de memória recente','Rigidez plástica'],0,'O slide define dismetria como dificuldade em apontar um alvo.'],
 ['Entre os sinais citados para neocerebelo estão:',['Nistagmo e disartria','Afasia e hemianopsia','Anosmia e ageusia','Surdez e paralisia facial'],0,'Os slides finais citam nistagmo e disartria.']
];

const state=JSON.parse(localStorage.getItem('neuroatlasP2')||'{}');
state.completed=state.completed||{};state.xp=state.xp||0;state.last=state.last||'home';state.flashSeen=state.flashSeen||{};state.chapterQuiz=state.chapterQuiz||{};state.theme=state.theme||'light';
function save(){localStorage.setItem('neuroatlasP2',JSON.stringify(state));updateStatus();}

function levelFor(xp){if(xp>=1500)return ['Nível 5','Mestre P2'];if(xp>=1000)return ['Nível 4','Neuroanatomista'];if(xp>=600)return ['Nível 3','Neuroanatomista em treino'];if(xp>=250)return ['Nível 2','Exploradora'];return ['Nível 1','Observadora'];}
function updateStatus(){
 const [lv,name]=levelFor(state.xp);document.getElementById('levelPill').textContent=`${lv} · ${name} · ${state.xp} XP`;
 const next=state.xp>=1500?1500:state.xp>=1000?1500:state.xp>=600?1000:state.xp>=250?600:250;
 const base=state.xp>=1500?0:state.xp>=1000?1000:state.xp>=600?600:state.xp>=250?250:0;
 const pct=state.xp>=1500?100:Math.max(0,Math.min(100,(state.xp-base)/(next-base)*100));document.getElementById('xpFill').style.width=pct+'%';
 const core=chapters.filter(c=>/^c\d+$/.test(c.id));const done=core.filter(c=>state.completed[c.id]).length;const p=Math.round(done/core.length*100);document.getElementById('progressText').textContent=p+'%';document.getElementById('progressFill').style.width=p+'%';
 document.querySelectorAll('.navItem').forEach(el=>{const id=el.dataset.id;const ck=el.querySelector('.navCheck');if(ck)ck.textContent=state.completed[id]?'✓':'';});
}

function buildNav(){const nav=document.getElementById('nav');let g='';let html='';chapters.forEach(c=>{if(c.group!==g){g=c.group;html+=`<div class="navLabel">${g}</div>`}html+=`<a class="navItem" data-id="${c.id}"><span class="navNum">${c.num}</span><span class="navText">${c.title}<small style="display:block;color:var(--muted);font-size:10px;margin-top:2px">${c.subtitle}</small></span><span class="navCheck">${state.completed[c.id]?'✓':''}</span></a>`});nav.innerHTML=html;nav.querySelectorAll('.navItem').forEach(a=>a.onclick=()=>show(a.dataset.id));}

function hero(c){return `<div class="hero"><div class="heroEyebrow">${c.group} · ${c.subtitle}</div><h1>${c.hero}</h1><p>${c.desc}</p><div class="heroMeta"><span class="pill">Tablet-first</span><span class="pill">Imagens ampliáveis</span><span class="pill">Progresso salvo</span><span class="pill">Livro Machado</span></div></div>`;}
function theoryToggleHtml(c){
 const body=chapterTheory[c.id];
 if(!body) return '';
 return `<div class="theoryWrap"><button class="theoryBtn" id="theoryToggle" aria-expanded="false">📘 Ver resumo teórico deste tópico</button><div class="theoryPanel hidden" id="theoryPanel"><div class="theoryHeader"><span class="tag">Resumo para estudo</span><b>${c.title}</b></div>${body}</div></div>`;
}
function imgCard(src,title,cap){return `<div class="atlasCard"><button class="zoomBtn" data-src="${IMG+src}" data-caption="${title} · ${cap}"><img src="${IMG+src}" loading="lazy" alt="${title}"></button><div class="atlasCaption"><b>${title}</b><small>${cap} · toque para ampliar</small></div></div>`;}
function renderGallery(key,el){const arr=galleries[key]||[];el.innerHTML=arr.map(x=>imgCard(...x)).join('');bindZoom(el);}
function bindZoom(scope=document){scope.querySelectorAll('.zoomBtn').forEach(b=>b.onclick=()=>openImage(b.dataset.src,b.dataset.caption));}
function openImage(src,caption){document.getElementById('modalImg').src=src;document.getElementById('modalCaption').textContent=caption;document.getElementById('imageModal').classList.remove('hidden');}
function closeImage(){document.getElementById('imageModal').classList.add('hidden');document.getElementById('modalImg').src='';}


function chapterReviewHtml(c){
 if(!/^c\d+$/.test(c.id) || !chapterQuestions[c.id])return '';
 const qs=chapterQuestions[c.id];
 const doneCount=qs.filter((_,i)=>state.chapterQuiz[`${c.id}-${i}`]).length;
 return `<div class="sectionTitle chapterReviewTitle"><span class="dot"></span><h2>Revisão do capítulo</h2><span class="reviewProgress">${doneCount}/${qs.length} · até +${qs.length*10} XP</span></div><div id="chapterReview" class="chapterReview">${qs.map((q,i)=>{
   const key=`${c.id}-${i}`, solved=!!state.chapterQuiz[key];
   return `<div class="quizCard chapterQuizCard" data-cq="${i}" data-solved="${solved?'1':'0'}"><div class="quizTop"><span class="tag">Questão ${i+1}</span><span class="quizXp">${solved?'✓ +10 XP':'+10 XP'}</span></div><div class="qText">${q[0]}</div>${q[1].map((x,j)=>`<button class="option ${solved&&j===q[2]?'correct':''}" data-i="${j}" ${solved?'disabled':''}>${x}</button>`).join('')}<div class="feedback ${solved?'show':''}">${solved?`<b>Correto.</b> ${q[3]} · XP já contabilizado.`:''}</div></div>`;
 }).join('')}</div>`;
}

function bindChapterReview(c){
 if(!/^c\d+$/.test(c.id) || !chapterQuestions[c.id])return;
 const qs=chapterQuestions[c.id];
 document.querySelectorAll('.chapterQuizCard').forEach(box=>{
   const qi=Number(box.dataset.cq), q=qs[qi], key=`${c.id}-${qi}`;
   if(state.chapterQuiz[key])return;
   const opts=[...box.querySelectorAll('.option')], fb=box.querySelector('.feedback');
   opts.forEach((o,i)=>o.onclick=()=>{
     if(state.chapterQuiz[key])return;
     if(i===q[2]){
       state.chapterQuiz[key]=true;
       state.xp+=10;
       opts.forEach(x=>x.disabled=true);
       o.classList.add('correct');
       box.dataset.solved='1';
       box.querySelector('.quizXp').textContent='✓ +10 XP';
       fb.innerHTML=`<b>Correto! +10 XP.</b> ${q[3]}`;
       fb.classList.add('show');
       save();
       const title=document.querySelector('.chapterReviewTitle .reviewProgress');
       if(title){const dc=qs.filter((_,j)=>state.chapterQuiz[`${c.id}-${j}`]).length;title.textContent=`${dc}/${qs.length} · até +${qs.length*10} XP`;}
     }else{
       o.classList.add('wrong');
       fb.innerHTML='<b>Ainda não.</b> Tente outra alternativa.';
       fb.classList.add('show');
       setTimeout(()=>o.classList.remove('wrong'),900);
     }
   });
 });
}

function completeHtml(c){if(!/^c\d+$/.test(c.id))return '';const done=!!state.completed[c.id];return `<div class="completeBox ${done?'done':''}"><div><b>${done?'Capítulo concluído':'Terminou este capítulo?'}</b><div style="color:var(--muted);font-size:12px">${done?'Progresso salvo neste dispositivo.':'Marque como concluído e ganhe 60 XP.'}</div></div><button class="btn ${done?'secondary':''}" id="completeBtn">${done?'Desmarcar':'Concluir +60 XP'}</button></div>`;}

function show(id){const c=chapters.find(x=>x.id===id)||chapters[0];state.last=c.id;save();document.querySelectorAll('.navItem').forEach(a=>a.classList.toggle('active',a.dataset.id===c.id));let extra='';if(c.id==='atlas')extra='atlas';if(c.id==='flash')extra='flash';if(c.id==='quiz')extra='quiz';document.getElementById('content').innerHTML=hero(c)+theoryToggleHtml(c)+c.content+chapterReviewHtml(c)+completeHtml(c);document.querySelectorAll('[data-gallery]').forEach(el=>renderGallery(el.dataset.gallery,el));bindChapterReview(c);const tb=document.getElementById('theoryToggle');if(tb){tb.onclick=()=>{const p=document.getElementById('theoryPanel');const open=!p.classList.contains('hidden');p.classList.toggle('hidden',open);tb.setAttribute('aria-expanded',String(!open));tb.textContent=open?'📘 Ver resumo teórico deste tópico':'📕 Ocultar resumo teórico deste tópico';};}if(extra==='atlas')renderAtlas();if(extra==='flash')renderFlash();if(extra==='quiz')setupQuiz();const btn=document.getElementById('completeBtn');if(btn)btn.onclick=()=>toggleComplete(c.id);closeMenu();window.scrollTo({top:0,behavior:'instant'});}
function toggleComplete(id){const was=!!state.completed[id];state.completed[id]=!was;state.xp=Math.max(0,state.xp+(was?-60:60));save();show(id);}

function renderAtlas(){const host=document.getElementById('atlasAll');const groups=[...new Set(allImages.map(x=>x[0]))];host.innerHTML=groups.map(g=>{const items=allImages.filter(x=>x[0]===g);return `<div class="sectionTitle"><span class="dot"></span><h2>${g}</h2></div><div class="gallery3">${items.map(x=>imgCard(x[1],x[2],`${x[0]} · ${x[3]}`)).join('')}</div>`}).join('');bindZoom(host);}

let flashOrder=[...flashcards.keys()];
function renderFlash(){const host=document.getElementById('flashGrid');host.innerHTML=flashOrder.map((i,idx)=>{const [q,a]=flashcards[i];return `<div class="flash" data-fi="${i}"><div class="flashInner"><div class="flashFace"><span class="tag">Pergunta ${idx+1}</span><h3>${q}</h3><small style="color:var(--muted)">Toque para revelar</small></div><div class="flashFace flashBack"><span class="tag">Resposta</span><p>${a}</p></div></div></div>`}).join('');host.querySelectorAll('.flash').forEach(f=>f.onclick=()=>{f.classList.toggle('flipped');const i=f.dataset.fi;if(!state.flashSeen[i]){state.flashSeen[i]=true;state.xp+=3;save();}});document.getElementById('shuffleFlash').onclick=()=>{flashOrder.sort(()=>Math.random()-.5);renderFlash()};document.getElementById('resetFlash').onclick=()=>{document.querySelectorAll('.flash').forEach(f=>f.classList.remove('flipped'))};}

function setupQuiz(){document.getElementById('startQuiz').onclick=startQuiz;}
function startQuiz(){const host=document.getElementById('quizHost');const final=document.getElementById('quizFinal');final.classList.add('hidden');host.innerHTML='';document.getElementById('qScore').textContent='0/15';document.getElementById('qDone').textContent='0';document.getElementById('qPct').textContent='0%';const qs=[...questions].sort(()=>Math.random()-.5).slice(0,15);let score=0,done=0;qs.forEach((q,idx)=>{const box=document.createElement('div');box.className='quizCard';box.innerHTML=`<div class="quizTop"><span class="tag">Questão ${idx+1}</span><span class="quizXp">+10 XP</span></div><div class="qText">${q[0]}</div>${q[1].map((x,i)=>`<button class="option" data-i="${i}">${x}</button>`).join('')}<div class="feedback">${q[3]}</div>`;const opts=[...box.querySelectorAll('.option')],fb=box.querySelector('.feedback');opts.forEach((o,i)=>o.onclick=()=>{if(box.dataset.locked)return;box.dataset.locked='1';opts[q[2]].classList.add('correct');if(i===q[2])score++;else o.classList.add('wrong');fb.classList.add('show');done++;document.getElementById('qScore').textContent=`${score}/15`;document.getElementById('qDone').textContent=done;document.getElementById('qPct').textContent=Math.round(score/done*100)+'%';if(done===15){state.xp+=score*10;save();final.innerHTML=`<b>Resultado: ${score}/15 (${Math.round(score/15*100)}%).</b> ${score>=12?'Ótimo desempenho nesta rodada.':'Use os capítulos e os flashcards para revisar os erros antes de gerar outra rodada.'}`;final.classList.remove('hidden');}});host.appendChild(box);});}

function searchableText(c){const theory=(chapterTheory[c.id]||'').replace(/<[^>]+>/g,' ');return (c.title+' '+c.subtitle+' '+c.hero+' '+c.desc+' '+theory+' '+c.content.replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ')}
function doSearch(q){const out=document.getElementById('searchResults');q=q.trim().toLowerCase();if(q.length<2){out.innerHTML='<div class="emptyState">Digite pelo menos 2 letras.</div>';return}const hits=chapters.map(c=>({c,text:searchableText(c)})).filter(x=>x.text.toLowerCase().includes(q));const flashHits=flashcards.filter(f=>(f[0]+' '+f[1]).toLowerCase().includes(q)).slice(0,8);let html=hits.map(h=>`<div class="searchHit" data-page="${h.c.id}"><b>${h.c.title}</b><small>${h.c.subtitle}</small></div>`).join('');if(flashHits.length)html+=`<div class="navLabel">Flashcards relacionados</div>`+flashHits.map(f=>`<div class="searchHit" data-page="flash"><b>${f[0]}</b><small>${f[1]}</small></div>`).join('');out.innerHTML=html||'<div class="emptyState">Nenhum resultado encontrado.</div>';out.querySelectorAll('.searchHit').forEach(h=>h.onclick=()=>{show(h.dataset.page);toggleSearch(false)});}
function toggleSearch(force){const panel=document.getElementById('searchPanel');const should=force!==undefined?force:panel.classList.contains('hidden');panel.classList.toggle('hidden',!should);if(should)setTimeout(()=>document.getElementById('searchInput').focus(),50);}

function openMenu(){document.getElementById('sidebar').classList.add('open');document.getElementById('backdrop').classList.remove('hidden');}
function closeMenu(){document.getElementById('sidebar').classList.remove('open');document.getElementById('backdrop').classList.add('hidden');}
function setTheme(t){state.theme=t;document.body.classList.toggle('dark',t==='dark');save();}

buildNav();setTheme(state.theme);show(state.last);
document.getElementById('menuBtn').onclick=openMenu;document.getElementById('backdrop').onclick=closeMenu;document.getElementById('searchBtn').onclick=()=>toggleSearch();document.getElementById('searchClose').onclick=()=>toggleSearch(false);document.getElementById('searchInput').addEventListener('input',e=>doSearch(e.target.value));document.getElementById('themeBtn').onclick=()=>setTheme(state.theme==='dark'?'light':'dark');document.getElementById('modalClose').onclick=closeImage;document.getElementById('imageModal').onclick=e=>{if(e.target.id==='imageModal')closeImage()};document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeImage();toggleSearch(false);closeMenu();}});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
