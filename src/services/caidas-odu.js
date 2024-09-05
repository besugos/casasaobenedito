const caidas = {

    getResult: function (qtd) {
        const buzios = [
            {
                odu: "16 BÚZIOS FECHADOS",
                caida: "16 búzios fechados",
                orixas: "IFÁ",
                resposta_curta: "SEM RESPOSTAS",
                resposta_longa: "Solicita-se a IFÁ uma nova jogada a fim de que se comprove o intento."
            },
            {
                odu: "OKANRAN",
                caida: "1 búzio aberto e 15 fechados",
                orixas: "EXU",
                resposta_curta: "NÃO e SIM!",
                resposta_longa: "EXU está dificultando a realização dos negócios, propiciando discussões, inimizades, provocando inveja e perturbações pessoais e emocionais de toda ordem, que, no momento, confundem o consulente, fazendo-o abalar o meio em que vive. Problemas espirituais acentuados, sustos, perdas, trabalhos feitos contra o consulente, aprisionamento, perigos. Porém, EXU pode responder positivamente em questões com perguntas mais precisas, pois simboliza que o orixá está presente e 'de pé' (OTUBI)."
            },
            {
                odu: "EJIOKÔ",
                caida: "2 búzios abertos e 14 fechados",
                orixas: "OGUM",
                resposta_curta: "SIM!",
                resposta_longa: "OGUM sempre favorece as situações do cotidiano, contudo, com problemas iniciais. OGUM estabelece demandas, guerras, triunfos, porém, com inimigos ocultos. Este resultado indica também a necessidade de perseverança, para que o consulente sobreponha-se às provas, aos empecilhos iminentes para só depois obter os resultados concretos e esperados. Odu da cautela."
            },
            {
                odu: "ETAOGUNDÁ",
                caida: "3 búzios abertos e 13 fechados",
                orixas: "OBALUAIÊ",
                resposta_curta: "NÃO!",
                resposta_longa: "OBALUAIÊ é forte e sempre responde com força e decisão para suplantar os empecilhos do dia-a-dia. Esta caída denota doenças, golpes, paixões impossíveis, dinheiro ganho através de herança, possibilidades de suicídio de alguém próximo ao consulente, tendências para obstáculos e inimigos contínuos, sugerindo então mais cautela neste momento e uma atenção rigorosa à saúde. Odu da saúde."
            },
            {
                odu: "YROSUN",
                caida: "4 búzios abertos e 12 fechados",
                orixas: "YEMANJÁ",
                resposta_curta: "TALVEZ!",
                resposta_longa: "YEMANJÁ, aqui, denota calúnia, falsidade e indecisão. Um indivíduo desconfiado e falso próximo ao consulente provoca surpresas desfavoráveis. Indecisão e intrigas estão rodando-o, fazendo com que perca oportunidades pessoais quase concretizadas. Contudo, a força positiva de YEMANJÁ equilibra o lado profissional. Odu da indecisão, da família."
            },
            {
                odu: "OXÉ",
                caida: "5 búzios abertos e 11 fechados",
                orixas: "OXUM",
                resposta_curta: "SIM!",
                resposta_longa: "OXUM sempre favorece as relações, mas somente depois de algum sofrimento, lágrimas e angústia. A abundância estará em tudo o que o consulente procurar realizar, propiciando momentos bons para novos negócios, desde que corretos e justos. As ilusões podem ser constantes. Saúde instável e notícias inesperadas. Odu da felicidade, da bênção e da fama."
            },
            {
                odu: "OBARÁ",
                caida: "6 búzios abertos e 10 fechados",
                orixas: "OXOSSI, XANGO e LOGUNEDÉ",
                resposta_curta: "SIM!",
                resposta_longa: "OXOSSI e LOGUNEDÉ unidos sempre indicam o caminho mais exato, o mais direto, sem indecisões, indo em busca daquilo que deseja. Expressa o apoio de sua força, colocando ao lado do consulente amigos ou parentes que possam auxiliá-lo neste momento. Odu da sorte e da riqueza."
            },
            {
                odu: "ODI",
                caida: "7 búzios abertos e 9 fechados",
                orixas: "OMULU, OGUM ou OXALÁ",
                resposta_curta: "NÃO!",
                resposta_longa: "Representa os prazeres, as possibilidades de viagens, a ambição que desenvolve a vida profissional, levando-a a desfechos que elevarão a situação atual do consulente. Deve controlar a ansiedade e ater-se a problemas de saúde que, aparentemente, pareçam banais. Odu de maior força negativa, acarreta misérias e infortúnios graves."
            },
            {
                odu: "EJIONILÉ",
                caida: "8 búzios abertos e 8 fechados",
                orixas: "OXAGUIÃ",
                resposta_curta: "NÃO e SIM!",
                resposta_longa: "Proteção espiritual, força e honestidade são aspectos positivos desta caída, que promove a construção e a elevação pessoal e profissional, harmonizando e tranquilizando. No sentido negativo, sugere ao consulente que refreie as suas paixões, a voluptuosidade, o ciúmes e o desejo de vingança. Odu do engano, da traição e da mentira."
            },
            {
                odu: "OSSÁ",
                caida: "9 búzios abertos e 7 fechados",
                orixas: "YEMANJÁ",
                resposta_curta: "TALVEZ!",
                resposta_longa: "Esta caída denota força de vontade para o consulente conseguir o que procura, pois, tem poder de ação pouco desenvolvido para continuar na estrada. É preciso controlar o autoritarismo para não sofrer privações e desgostos por consequências de seus atos. Relacionamentos frágeis, baseados na profissão em breve. Odu do início e das viagens que propiciam as mudanças."
            },
            {
                odu: "OFUN",
                caida: "10 búzios abertos e 6 fechados",
                orixas: "OXALUFÃ",
                resposta_curta: "SIM!",
                resposta_longa: "OXALUFÃ sempre permite a entrada da luz, da resolução dos problemas, da bondade e de toda a realização que esteja em comum acordo com estes propósitos. Não adianta querer enganar ou 'montar' um outro caminho. Sugere ao consulente permanecer onde está. Sensibilidade na região do rosto, garganta, nariz e olhos. Relacionamentos pessoais e profissionais tranquilos e sem interferências. Odu da teimosia, porém, munida de sorte."
            },
            {
                odu: "OWORIN",
                caida: "11 búzios abertos e 5 fechados",
                orixas: "IANSÃ",
                resposta_curta: "TALVEZ!",
                resposta_longa: "IANSÃ sempre responde positivamente, dando, neste caso, dubiedade às questões. Para confundir o consulente, insinua desuniões, conflitos e inimigos gerados, muitas vezes, por forças ocultas. Sensibilidade na saúde. A força de IANSÃ interfere espiritualmente, protegendo o dia-a-dia do consulente e sugerindo perspectivas de resultados favoráveis. Odu do progresso, porém, com grandes problemas iniciais."
            },
            {
                odu: "EJILAXEBORÁ",
                caida: "12 búzios abertos e 4 fechados",
                orixas: "XANGÔ",
                resposta_curta: "SIM!",
                resposta_longa: "A força da justiça de XANGÔ favorece o consulente dando-lhe esclarecimentos sobre negócios pendentes, facilitando os negócios ou as transações, desde que estejam de acordo com a verdade e todos tirem proveito dos resultados. Emocionalmente, não admite e nem favorece nenhum tipo de traição. Odu dos problemas e discórdias que geram os atrasos pessoais e profissionais."
            },
            {
                odu: "EJIOLOGBON",
                caida: "13 búzios abertos e 3 fechados",
                orixas: "NANÃ e OBALUAIÊ",
                resposta_curta: "SIM e NÃO!",
                resposta_longa: "Superação de todas as dificuldades apresentadas. Sorte nas relações emocionais e profissionais. Porém, esta caída significa transformação com o poder de renovação, com mudanças radicais na vida do consulente. A saúde precisa ser melhor administrada, principalmente os cuidados diários que parecem insignificantes, dando atenção especial ao desgaste desnecessário de energias vitais. Odu das dificuldades, da presença da morte e das paixões obsessivas."
            },
            {
                odu: "IKÁ",
                caida: "14 búzios abertos e 2 fechados",
                orixas: "OXUMARÊ e OSSAIM",
                resposta_curta: "TALVEZ!",
                resposta_longa: "OXUMARÊ sempre responde com fertilidade e dubiamente: em negócios estará favorecendo o consulente com a riqueza e a sorte; emocionalmente, representa uma forte instabilidade nas relações, não conseguindo unificar a sua predisposição para dois amores e duas situações simultâneas. Indica também traição emocional, devendo evitar, neste momento, qualquer tipo de união ou sociedade. Odu das vitórias sobre as demandas alheias."
            },
            {
                odu: "OGBEOGUNDÁ",
                caida: "15 búzios abertos e 1 fechado",
                orixas: "OBÁ e EWÁ",
                resposta_curta: "TALVEZ!",
                resposta_longa: "Existe uma grande probabilidade de conseguir o empreendido, pois EWÁ representa a força, a determinação, a iniciativa e a coragem real, que detém todo o poder para alcançar os objetivos. Tudo o que estiver no início terá perspectivas de grande sucesso. Contudo, a presença de OBÁ pode propiciar disputas e imprevistos com poucas chances de êxito, caso o negócio em questão já esteja em andamento. Aqui, simbolicamente, o orixá EXU aparece solicitando oferendas (OBUKÓ). Odu dos empecilhos confusos e das dificuldades de conclusão."
            },
            {
                odu: "ALAFIA",
                caida: "16 búzios abertos",
                orixas: "ORUNMILÁ",
                resposta_curta: "SIM, COM CERTEZA!",
                resposta_longa: "Significa a luz, a força e a verdade ao lado do consulente para todo e qualquer tipo de resolução e decisão que precisa tomar. O cuidado, aqui, está apenas na orientação e apoio daqueles que estão ao seu redor saiba avaliar bem as intenções. Odu da felicidade e da sorte pura, que gera somente triunfos."
            }
        ];

        return buzios[qtd];

    }
}

export default caidas;
