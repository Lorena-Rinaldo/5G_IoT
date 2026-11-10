# 5G e IoT: A Revolução da Conectividade Inteligente

## Curso Técnico de Desenvolvimento de Sistemas - Senai Itapeva

Este projeto é um infográfico vertical interativo no formato de pôster digital, desenvolvido para apresentar de forma dinâmica e aprofundada o funcionamento da tecnologia de redes móveis de quinta geração (**5G**) e sua integração direta com o ecossistema da **Internet das Coisas (IoT)**, **Inteligência Artificial (IA)** e **Automação Industrial**.

O projeto foi construído a partir de pesquisa teórica e técnica fundamentada em publicações oficiais da **IBM** e **Amazon Web Services (AWS)**.

---

## Demonstração

O pôster digital apresenta uma interface vertical imersiva no estilo *Dark Cyber Glassmorphism*, com paleta de cores baseada em 5 tons de ciano/turquesa de alta tecnologia. O infográfico conta com:

- **Smartphone 5G Holográfico com Efeito 3D:** com giroscópio virtual que reage ao movimento do mouse (*Mouse Tilt Parallax*), emissão cíclica de ondas de rádio concêntricas e radar ativo de varredura de dispositivos IoT.
- **Speedtest 4G vs 5G Interativo:** medidor duplo de velocímetro com ponteiros animados que demonstram as diferenças reais de velocidade (até 450 Mbps vs 10 Gbps+) e latência (50 ms vs 1 ms).
- **Gêmeo Digital Industrial (Manutenção Preditiva 5G + IA):** simulação com maquinário industrial CNC onde o usuário pode disparar uma anomalia física de vibração e acompanhar em tempo real o envio de telemetria a 0.85 ms, o diagnóstico do modelo de Machine Learning e a notificação de alerta preditivo no smartphone.
- **Comunicação Orbital Satélite ⇄ Terra (5G NTN):** simulação espacial interativa de enlace bidirecional entre satélite de órbita baixa (LEO) e estações terrenas com sensores IoT agrícolas e marítimos.
- **Barra de Scroll com Efeito de Onda de Rádio:** barra de rolagem estilizada com ondas senoidais e HUD lateral flutuante com oscilação contínua e marcação das faixas de espectro 5G (700 MHz até 26 GHz mmWave).

---

## Funcionalidade Principal: Simuladores de Aplicação Real em IoT

### Descrição

A aplicação combina rigor teórico com interatividade visual prática:

1. **Simulador de Banda Larga 4G vs 5G no Smartphone:**
   - O usuário toca no botão de teste dentro do celular para disparar pacotes de teste simultâneos.
   - O velocímetro do 4G atinge até 450 Mbps com latência de 50 ms.
   - O velocímetro do 5G avança em alta rotação até 10 Gbps+ com latência de apenas 1 ms, comprovando o salto geracional para aplicações de tempo real crítico.

2. **Gêmeo Digital de Manutenção Preditiva Industrial (Indústria 4.0):**
   - Baseado diretamente no estudo de caso da pesquisa:
     > *"Em uma indústria, sensores conectados pelo 5G podem identificar alterações no funcionamento de uma máquina. A Inteligência Artificial analisa os dados e prevê possíveis falhas, permitindo que a manutenção seja realizada antes que o equipamento pare de funcionar."*
   - Ao clicar em **"Simular Anomalia"**, a turbina entra em vibração mecânica excessiva, os gráficos de amplitude e temperatura saltam para níveis críticos, pacotes 5G de rajada são emitidos instantaneamente e o smartphone do engenheiro recebe uma notificação com o diagnóstico gerado pela IA.
   - O botão **"Normalizar"** restabelece a operação estável dos sensores.

3. **Enlace de Satélite 5G NTN (Satélite ⇄ Terra):**
   - Substitui o rodapé comum por uma demonstração de Redes Não-Terrestres (NTN).
   - Demonstra como satélites LEO (550 km) superam o desafio de cobertura geográfica, transmitindo pacotes de *Downlink* (1.2 Gbps) e recebendo dados de *Uplink* de sensores IoT remotos (380 Mbps).

### Desafios e Aprendizados

- **Animações Fluidas com GSAP:** implementação de efeitos de rotação 3D, emissão de ondas de rádio por CSS e sincronização de eventos de interação.
- **Efeitos de Ondas Senoidais em SVG Dinâmico:** desenvolvimento matemático de ondas senoidais em tempo real que variam de frequência de acordo com a velocidade de rolagem da página.
- **Sintetizador de Áudio Nativo com Web Audio API:** geração de bipes e efeitos sonoros tecnológicos diretamente no navegador sem necessidade de carregar arquivos externos de áudio.
- **Design de Alta Densidade de Informação:** organização de gráficos, tabelas e cards técnicos garantindo contraste visual e legibilidade perfeita.

---

## Visão Geral

O infográfico foi construído com uma arquitetura web leve e sem dependências pesadas, utilizando **HTML5**, **Tailwind CSS** e **JavaScript** moderno com a biblioteca **GSAP (GreenSock Animation Platform)**.

### Identidade Visual e Paleta Oficial de Cores

A identidade visual segue estritamente a paleta de 5 tons de ciano/turquesa:
- `#B2FFFF` — Ciano Neon Ultrabrilhante (Destaques, ondas de pulso e leituras ativas)
- `#98EDED` — Ciano Menta Suave (Textos explicativos e badges)
- `#7AE4E4` — Ciano Aquamarino (Ícones, bordas e arcos medidores)
- `#59DDDD` — Turquesa Vibrante (Botões principais, feixes de dados e enlaces)
- `#36C6C6` — Teal Profundo (Bordas de contraste, painéis solares e sombras)

---

## Funcionalidades

1. **O que é 5G e as 5 Características Essenciais**
   - Definição completa da quinta geração de redes móveis.
   - Cards detalhados com ícones modernos: Alta velocidade, Baixa latência, Maior capacidade, Maior confiabilidade e Maior largura de banda.

2. **Matriz Comparativa 4G vs 5G**
   - Tabela comparando Velocidade, Latência, Capacidade, Cobertura e Infraestrutura.
   - Conclusão da pesquisa destacando a viabilidade de aplicações em tempo real.

3. **Pilares da Convergência entre 5G e IoT**
   - 5 pilares práticos: conexão massiva de sensores, monitoramento em tempo real, comunicação M2M eficiente, automação avançada e redução crítica de atrasos.

4. **Aplicações nos 6 Setores Estratégicos**
   - **Saúde:** telemedicina, cirurgias robóticas e monitoramento de pacientes em tempo real.
   - **Indústria:** máquinas conectadas, automação inteligente e manutenção preditiva.
   - **Agricultura:** monitoramento da umidade do solo, irrigação inteligente e drones autônomos.
   - **Cidades Inteligentes:** semáforos inteligentes, gestão de tráfego e iluminação pública conectada.
   - **Transportes:** conectividade veículo-infraestrutura (V2X) e suporte a frotas autônomas.
   - **Residências:** automação predial, iluminação, câmeras e eletrodomésticos inteligentes.

5. **Análise dos Desafios da Tecnologia**
   - Cards explicativos sobre Alto Custo, Limitações de Cobertura, Riscos de Segurança Cibernética, Compatibilidade de Aparelhos, Consumo de Energia e Desigualdade de Acesso.

6. **Gêmeo Digital Industrial (5G + IoT + IA)**
   - Painel interativo com turbina industrial, gráfico de vibração e temperatura, latência de 0.85 ms, diagnóstico automático da IA e alerta imediato no smartphone.

7. **Transmissão Orbital Satélite ⇄ Terra (5G NTN)**
   - Enlace espacial com satélite em órbita baixa, feixes bidirecionais animados de dados (Downlink e Uplink) e conexão com estações terrenas e sensores isolados.

8. **Navegador e Barra de Scroll com Ondas de Rádio**
   - Scrollbar nativa estilizada com padrão vetorial de ondas senoidais de rádio 5G.
   - HUD flutuante lateral com onda senoidal animada em tempo real, contador de porcentagem e seletor das faixas de espectro 5G.

9. **Modos de Apresentação e Impressão**
   - Botão para alternar para modo Apresentação em Tela Cheia (*Fullscreen*).
   - Botão de Impressão otimizado com folha de estilo específica para salvar em PDF de alta qualidade.
   - Controle de áudio (*Mute / Unmute*) dos sintetizadores sonoros.

---

## Tecnologias Utilizadas

- **HTML5** (Estrutura semântica de alta acessibilidade)
- **Tailwind CSS** (Configuração customizada da paleta de cianos)
- **JavaScript ES6+** (Lógica de simulações, eventos e telemetria)
- **GSAP 3 (GreenSock Animation Platform)** (Animações de entrada, giroscópio 3D e pulsos)
- **Lucide Icons** (Ícones vetoriais modernos de tecnologia e IoT)
- **Web Audio API** (Sintetizador nativo para efeitos sonoros)
- **SVG & Canvas API** (Malha de partículas espaciais e ondas senoidais contínuas)

---

## Estrutura de Arquivos

```text
5G_IoT/
|-- index.html       # Estrutura completa do pôster digital vertical e simuladores
|-- style.css        # Estilos, paleta oficial de cianos, efeitos de onda e 3D do celular
|-- script.js        # Lógica interativa, simulação da IA, speedtest, satélite e GSAP
|-- README.md        # Documentação completa do projeto
|-- assets/          # Recursos e mídias do infográfico
```

---

## Como Executar

### Pré-requisitos

- Um navegador web moderno instalado (Google Chrome, Microsoft Edge, Mozilla Firefox, Brave ou Opera).
- Nenhuma instalação de servidor backend ou dependência local é necessária (todas as bibliotecas são carregadas via CDNs de alta velocidade).

### Execução

1. Navegue até a pasta do projeto:
```bash
cd "c:\Users\SENAI DS 2025\OneDrive - SESISENAISP - Escolas\Área de Trabalho\5G\5G_IoT"
```

2. Dê um duplo clique no arquivo:
```text
index.html
```
Ou abra o arquivo diretamente em seu navegador preferido.

---

## Competências Desenvolvidas

- Criação e diagramação de infográficos verticais e pôsteres digitais de alto impacto visual.
- Aplicação rigorosa de identidade visual com paleta de cores corporativa/técnica.
- Desenvolvimento de simulações interativas e gêmeos digitais para educação tecnológica.
- Programação de efeitos visuais tridimensionais (Parallax 3D com GSAP).
- Manipulação avançada do DOM e modelagem matemática de ondas senoidais em SVG.
- Utilização da Web Audio API para feedback sonoro imersivo sem arquivos de áudio externos.
- Compreensão técnica de protocolos de telecomunicações (5G Standalone, baixa latência de 1 ms, densidade de nós IoT e redes 5G NTN por satélite).

---

## Autores

Projeto desenvolvido por:
- **Lorena Rinaldo Moreira** — [LinkedIn](https://www.linkedin.com/in/lorena-rinaldo01/)

- **Isabelly Ferreira de Lima** — [LinkedIn](https://www.linkedin.com/in/isabelly-ferreira-42a54837b/)

**Instituição:** Curso Técnico de Desenvolvimento de Sistemas — **Senai Itapeva**  
**Fontes da Pesquisa:** **IBM** e **Amazon Web Services (AWS)**
