'use client';
import { useState, useEffect } from 'react';

export default function AulaFundamentos() {
  const [progresso, setProgresso] = useState(0);
  const [codigoHTML, setCodigoHTML] = useState('<!-- Digite seu código de mestre aqui -->\n<button>Enviar</button>');
  const [feedback, setFeedback] = useState('');

  // Professor Virtual (Refinado)
  const professorExplica = (texto: string) => {
    window.speechSynthesis.cancel();
    const mestre = new SpeechSynthesisUtterance(texto);
    const vozes = window.speechSynthesis.getVoices();
    const vozDeElite = vozes.find(voz => voz.lang === 'pt-BR' && (voz.name.includes('Google') || voz.name.includes('Natural'))) || vozes.find(voz => voz.lang === 'pt-BR');
    if (vozDeElite) mestre.voice = vozDeElite;
    mestre.rate = 0.95;
    window.speechSynthesis.speak(mestre);
    setFeedback(texto);
  };

  // Motor de Validação: O Avaliador Mestre [2]
  const avaliarPratica = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(codigoHTML, 'text/html');
    
    // Teste 1: Divitis Aguda (Uso de div para botões)
    const divsComClick = codigoHTML.toLowerCase().includes('onclick') && codigoHTML.toLowerCase().includes('<div');
    
    if (divsComClick) {
      professorExplica("Sua solução funciona visualmente, mas quebra a semântica ao usar uma DIV para algo que deveria ser um BUTTON. Isso desqualifica você na hora em uma entrevista de elite! [2]");
    } else if (codigoHTML.includes('<button') || codigoHTML.includes('<main')) {
      professorExplica("Excelente, Mestre! Você utilizou a semântica correta. O navegador e os recrutadores agora conseguem entender a planta do seu projeto.");
      if (progresso < 100) setProgresso(prev => prev + 25);
    } else {
      professorExplica("Tente estruturar seu código usando tags semânticas como main, section ou button.");
    }
  };

  return (
    <main className="flex min-h-screen bg-black text-white font-sans">
      {/* LADO ESQUERDO: TEORIA E CONTEÚDO */}
      <section className="w-1/2 p-12 overflow-y-auto border-r border-zinc-800">
        <header className="mb-10">
          <span className="text-yellow-500 font-mono text-xs uppercase tracking-[0.3em]">Módulo 01</span>
          <h1 className="text-5xl font-black mt-2 tracking-tighter">O CAMPO DE <span className="text-yellow-500 italic">BATALHA</span></h1>
        </header>

        <article className="space-y-8 text-zinc-400 text-lg leading-relaxed">
          <p>Chegou a hora de provar que você não é um "Dev Ralé". No editor ao lado, você deve criar a estrutura base de um componente de botão.</p>
          <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-white font-bold mb-2">Desafio de Maestria:</h3>
            <p className="text-sm italic">"Construa um elemento de ação. Lembre-se: acessibilidade não é opcional, é obrigação de um Mestre." [1]</p>
          </div>
        </article>
      </section>

      {/* LADO DIREITO: SANDBOX (EDITOR E PREVIEW) [2] */}
      <section className="w-1/2 flex flex-col bg-zinc-950">
        {/* Editor */}
        <div className="h-1/2 border-b border-zinc-800 p-4 flex flex-col">
          <label className="text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">Editor de Código de Elite</label>
          <textarea 
            value={codigoHTML}
            onChange={(e) => setCodigoHTML(e.target.value)}
            className="flex-1 bg-zinc-900 p-6 rounded-xl font-mono text-yellow-500 outline-none border border-zinc-800 focus:border-yellow-500/50 transition-colors resize-none"
            spellCheck="false"
          />
        </div>

        {/* Live Preview e Avaliador */}
        <div className="h-1/2 p-8 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Resultado em Tempo Real</label>
            <button 
              onClick={avaliarPratica}
              className="bg-yellow-500 text-black px-6 py-2 rounded-full font-black text-xs uppercase hover:scale-105 active:scale-95 transition-all shadow-lg shadow-yellow-500/20"
            >
              Chamar Avaliador Mestre ⚔️
            </button>
          </div>
          
          <div className="flex-1 bg-white rounded-xl p-6 text-black" dangerouslySetInnerHTML={{ __html: codigoHTML }} />
          
          {/* Feedback do Tutor Onipresente [2] */}
          {feedback && (
            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
              <p className="text-yellow-500 text-sm font-medium italic">" {feedback} "</p>
            </div>
          )}
        </div>
      </section>

      {/* Barra de Progresso Lateral */}
      <div className="fixed bottom-8 left-8 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full flex items-center gap-4">
        <div className="w-32 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-yellow-500 transition-all duration-500" style={{ width: `${progresso}%` }}></div>
        </div>
        <span className="text-[10px] font-mono text-yellow-500">{progresso}% MAESTRIA</span>
      </div>
    </main>
  );
}