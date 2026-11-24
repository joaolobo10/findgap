# findgap

<p align="center">
  <img src="docs/images/findgap-banner.jpg" alt="findgap" width="720">
</p>

> **Descubra o que você só acha que sabe.**
>
> 🇺🇸 [Read in English](README.md)

A findgap é uma [Agent Skill](https://agentskills.io) open source que transforma o Claude num parceiro de estudo que encontra os seus gaps de conhecimento reais, inclusive os que você nem sabe que tem. Funciona em qualquer área: farmacologia, React, engenharia estrutural, direito constitucional, história do Brasil, teoria musical.

Ela também ajuda com uma preocupação mais nova: **você está deixando a IA pensar por você?** O *Thinking check* compara o que você acha que ainda consegue fazer sozinho com o que você realmente faz sem IA, tarefa por tarefa, e ajuda você a manter as habilidades que precisa dominar.

Ela não pergunta só "o que você quer revisar?". Ela faz uma entrevista curta, mapeia o que *estar pronto* significa para o seu objetivo, testa o seu entendimento desde lembrar até transferir para casos novos, pergunta o quanto você tem certeza antes de cada resposta e entrega um relatório honesto e gentil, com um plano. Tudo baseado em [pesquisa de ciência da aprendizagem](skills/findgap/references/evidence-base.md).

## Como funciona

```
Entrevista → Mapa de conhecimento → Quiz (amplitude) → Escada de compreensão (profundidade) → Relatório → Roadmap → Retestes espaçados
```

1. **Entrevista.** Começa com uma pergunta aberta: o que te trouxe aqui hoje? Um assunto para dominar, a sensação de não estar pensando com clareza, dificuldade em tarefas, depender demais da IA: tudo vale, e você pode trazer mais de uma coisa. Depois, poucas perguntas, bem direcionadas: para que você está se preparando, até quando, o que define "pronto" (um edital, o conteúdo de uma prova, a descrição de uma vaga) e por onde você estudou. Se você compartilhar o seu material, ela compara com o que é exigido.
2. **Mapa de conhecimento.** Uma árvore curta de tópicos, cada um com peso e profundidade exigida. Você confirma antes de qualquer teste.
3. **Quiz.** Um quiz com nota de confiança cobrindo o mapa todo, entregue como artefato interativo. Cada alternativa errada corresponde a um erro conceitual específico ou a um engano plausível, então o seu erro mostra *por que* você errou.
4. **A Escada de Compreensão.** Nos tópicos prioritários, a findgap sobe degrau por degrau. O degrau onde você trava diz que tipo de gap é:

| # | Degrau | Você precisa… | Travar aqui significa… |
|---|---|---|---|
| 0 | Afirmar | Dar uma nota para o quanto sabe | — (ponto de partida) |
| 1 | Explicar | Explicar de memória, ou de forma simples para alguém que não sabe nada (se você não consegue simplificar sem errar, ainda não conhece a fundo) | Você reconhece, mas não consegue lembrar |
| 2 | Investigar | Responder perguntas de por quê e como | Palavras sem entender o mecanismo |
| 3 | Analogia | Ligar a algo do dia a dia e dizer onde a analogia falha | Entendimento preso a um único formato |
| 4 | Aplicar | Resolver um problema conhecido | Você sabe *sobre*, mas não sabe *fazer* |
| 5 | Discriminar | Escolher qual conceito se aplica, ou achar o erro numa solução | Você não sabe *quando* usar |
| 6 | Transferir | Resolver um caso diferente de tudo que estudou | Conhecimento que só funciona do jeito que foi estudado |
| 7 | Reter | Passar de novo dias depois, sem revisar | Sabia hoje, esqueceu depois |

5. **Confiança × acerto.** Uma resposta errada da qual você tinha *certeza* é o gap mais perigoso de todos. Por isso a findgap marca esse erro, corrige na hora e sempre testa de novo depois.
6. **Relatório e veredito.** Primeiro os gaps perigosos, depois a situação de cada tópico em linguagem simples e o quanto você se avaliou bem. "Estou pronto?" recebe um veredito calculado a partir do critério (*Ainda não / Perto / Pronto (provisório) / Pronto (confirmado)*), nunca uma impressão.
7. **Roadmap.** Uma atividade concreta para cada gap, escolhida para aquele tipo de gap, e um calendário de retestes ajustado ao seu prazo.

### Thinking check: estou terceirizando o meu pensamento?

Para quem sente que a IA está pensando demais no seu lugar:

1. **Mapa de uso.** O que você entrega para a IA e, em cada tarefa: você precisa dominar isso? O quanto conseguiria fazer sozinho hoje?
2. **Teste desplugado.** Uma ou duas tarefas que você precisa dominar, feitas (ou explicadas) sem IA.
3. **Teste de julgamento.** Uma resposta no estilo de IA com um erro plantado: você teria usado?
4. **Mapa de dependência.** Por tarefa: *domina*, *frágil*, *muleta*, *ilusão* (achava que conseguia, mas não conseguiu), *confiança cega* ou *delegação saudável*.
5. **Plano.** Tentar antes, pedir dicas em vez de respostas para a IA, explicar com as suas palavras o que ela gerou e testar de novo sem IA em outros dias.

Não é um diagnóstico e nunca diz que a IA está "apodrecendo o seu cérebro". Mostra evidências, tarefa por tarefa, e você decide.

**O tom:** um professor de reforço gentil, que nunca deixa um erro passar. Todo erro é apontado, com clareza, sem fazer você se sentir burro. Quer mais duro? Peça o *modo banca*.

## Instalação

A findgap recebe atualizações com frequência. Escolha uma forma de instalação que acompanhe essas mudanças: cada opção abaixo explica como receber as versões novas.

### Claude Code e outros agentes (Cursor, Codex, OpenCode…)

```bash
npx skills add joaolobo10/findgap
```

Para receber atualizações depois, rode `npx skills update`.

#### Sempre a versão mais recente: clonar e linkar

Clone o repositório uma vez e crie um link da pasta da skill no diretório de skills do seu agente. A partir daí, um `git pull` traz todas as mudanças:

```bash
git clone https://github.com/joaolobo10/findgap.git ~/findgap
ln -s ~/findgap/skills/findgap ~/.claude/skills/findgap
```

No Windows (PowerShell):

```powershell
git clone https://github.com/joaolobo10/findgap.git "$HOME\findgap"
New-Item -ItemType Junction -Path "$HOME\.claude\skills\findgap" -Target "$HOME\findgap\skills\findgap"
```

Para atualizar, rode `git pull` dentro de `~/findgap` e abra uma nova sessão (as skills são carregadas quando a sessão começa). Esse método acompanha a branch `main`, então você recebe as mudanças assim que entram, antes mesmo de virarem uma versão oficial.

Você também pode simplesmente copiar `skills/findgap/` para `~/.claude/skills/findgap/` (para você) ou `.claude/skills/findgap/` (só para um projeto). Uma cópia nunca se atualiza sozinha: para ter uma versão nova, copie a pasta de novo.

### Marketplace de plugins do Claude Code

Dentro do Claude Code:

```
/plugin marketplace add joaolobo10/findgap
/plugin install findgap@findgap
```

No Claude Code 2.1.275 ou mais recente, basta um passo: `/plugin install findgap --marketplace joaolobo10/findgap`.

Pelo terminal:

```bash
claude plugin marketplace add joaolobo10/findgap
claude plugin install findgap@findgap
```

Instalada como plugin, a skill recebe o nome `findgap:findgap`. Você não precisa chamá-la pelo nome: é só pedir, como nos exemplos abaixo.

Para receber atualizações, rode `claude plugin marketplace update findgap` ou ative a atualização automática deste marketplace em `/plugin` → **Marketplaces** (marketplaces de terceiros não se atualizam sozinhos por padrão).

### Claude desktop e claude.ai

1. Baixe o `findgap.zip` da [versão mais recente](https://github.com/joaolobo10/findgap/releases/latest).
2. No Claude, vá em **Customize → Skills**, clique em **+**, depois **Create skill → Upload a skill**, e escolha o ZIP.
3. Confira se a skill está ativada.

**O ZIP não se atualiza sozinho.** Uma skill enviada fica na versão que você enviou. Para ter as versões novas, acompanhe este repositório: no GitHub, clique em **Watch → Custom → Releases** para ser avisado quando sair uma versão nova. Depois baixe o novo `findgap.zip`, remova a skill findgap antiga em **Customize → Skills** e envie a nova.

Skills dependem de um plano e de configurações compatíveis. Veja [Using Skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude).

## Como usar

É só conversar com o Claude, em qualquer idioma:

- *"Acho que sei farmacologia para a prova daqui a três semanas. Sei mesmo?"*
- *"Me testa agora em hooks do React."*
- *"Explícame la carga de viento como si tuviera cinco años, y dime si de verdad lo entiendo."*
- *"Estou pronto para uma entrevista de backend júnior? Aqui está a vaga."*
- *"Me sabatina em direito constitucional, modo banca."*
- *"Sinto que não consigo fazer mais nada sem o ChatGPT. Dá para checar?"*

| Modo | Quando |
|---|---|
| **Diagnóstico completo** | Padrão: entrevista, mapa, quiz, escada, relatório, roadmap |
| **Teste rápido** | "Me testa agora em X": no máximo duas perguntas, e começa o teste |
| **Explicar** | Um conceito só, degraus 0 a 3 |
| **Thinking check** | Você se preocupa em depender da IA: mapa de uso, testes sem IA, mapa de dependência, plano |
| **Sessão de revisão** | Você volta: primeiro os retestes do dia, sem revisar antes |
| **Modo banca** | Mesmo diagnóstico, com tom de banca examinadora |

### Guardando o seu progresso (opcional, recomendado)

A findgap pode lembrar dos seus gaps e saber o que testar de novo na próxima vez:

- **App do Claude:** crie um Projeto para o seu objetivo. No fim de cada sessão, a findgap entrega o `gap-log.md` atualizado; salve no Projeto.
- **Claude Code:** a findgap pode manter uma pasta `.findgap/` na pasta em que você está trabalhando (ela pergunta antes).

## Base científica

Toda técnica que a findgap usa tem pesquisa por trás e está documentada, com tamanhos de efeito, limitações e DOIs, em [`evidence-base.md`](skills/findgap/references/evidence-base.md). Os destaques:

- **Prática de recuperação:** responder de memória funciona melhor que reler (Roediger & Karpicke, 2006; Adesope et al., 2017).
- **Espaçamento:** retestes espalhados em dias diferentes funcionam melhor que estudar tudo de uma vez (Cepeda et al., 2006; Latimier et al., 2021).
- **Autoexplicação e perguntas de por quê** (Bisra et al., 2018; Dunlosky et al., 2013).
- **A ilusão de profundidade explicativa:** a gente acha que entende até tentar explicar (Rozenblit & Keil, 2002).
- **Hipercorreção:** erros confiantes são os mais fáceis de corrigir, e também os que mais voltam (Butterfield & Metcalfe, 2001; Butler et al., 2011).
- **Mastery learning:** estar pronto é um critério, não uma sensação (Bloom, 1984; Kulik et al., 1990).
- **IA como muleta:** alunos com acesso livre à IA foram melhor durante a prática, mas pior quando ela foi retirada (Bastani et al., 2025); delegar ajuda na hora, mas pode custar memória (Grinschgl et al., 2021).

O que a findgap **não** faz, de propósito: adaptar o ensino a "estilos de aprendizagem" (Pashler et al., 2008), mandar reler ou grifar, ou usar "você se sente pronto?" como medida.

## Limites

- A findgap **diagnostica, não certifica.** O veredito dela não é resultado de prova, oferta de emprego nem registro profissional.
- As perguntas são escritas por uma IA e podem conter erros. Em saúde, farmácia, direito e outras áreas de alto risco, confira os fatos importantes no seu critério ou fonte oficial. A findgap avisa sempre que não tem certeza.
- É uma ferramenta de estudo, não aconselhamento médico, jurídico ou profissional.

## Estrutura do repositório

```
skills/findgap/
├── SKILL.md                  # fluxo, escada, tom: o núcleo
├── references/               # carregados só quando necessário
│   ├── evidence-base.md      # a pesquisa, com DOIs
│   ├── intake.md · knowledge-map.md · understanding-ladder.md
│   ├── question-design.md · calibration.md
│   ├── gap-report.md · readiness-rubric.md · roadmap.md
│   └── thinking-check.md     # o check de dependência de IA
└── assets/
    ├── quiz-template.html    # quiz em artefato, num único arquivo
    └── learner-profile.md · gap-log.md
```

Os arquivos da skill são escritos em inglês, mas o Claude sempre responde no seu idioma.

## Como contribuir

Issues e pull requests são bem-vindos. Algumas regras mantêm a findgap honesta (veja o [`CLAUDE.md`](CLAUDE.md)):

- **Evidência primeiro.** Uma técnica nova precisa de uma entrada no `evidence-base.md`, com uma fonte que realmente a sustente, antes de ser usada em qualquer lugar.
- **Nada da lista "Do not use".**
- **Independente de área.** Nenhum conteúdo fixo para uma área só; os exemplos cobrem várias áreas.
- **Linguagem simples para quem estuda.** Nada de jargão pedagógico no que a pessoa vê.

## Licença

[MIT](LICENSE) © 2026 João Carlos Lobo S. Monteiro
