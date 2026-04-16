'use client';
import { useState, useEffect } from 'react';

// Dados de Elite: O conteúdo do seu dicionário
const TERMOS_MESTRES = [
  {
    termo: "Semântica Profunda",
    definicao: "O uso de tags HTML de acordo com seu significado real, não apenas aparência.",
    oQueRecrutadorAma: "Uso correto de <main>, <article>, <section> e <nav> para criar uma árvore de acessibilidade perfeita.",
    oQueDesqualifica: "O uso de <div> para tudo (Divitis), o que torna o site invisível para leitores de tela e SEO.",
    explicacaoVoz: "Mestre, entenda: a semântica é a fundação de um código de elite. Se você usa div para um botão, você está dizendo ao navegador que não conhece a base do seu trabalho."
  },
  {
    termo: "SEO (Search Engine Optimization)",
    definicao: "Otimização para que os motores de busca encontrem e indexem seu site.",
    oQueRecrutadorAma: "Arquitetura de informação clara, meta tags bem definidas e performance extrema.",
    oQueDesqualifica: "Site lento, sem tags de cabeçalho (H1, H2) ou com conteúdo escondido.",
    explicacaoVoz: "O SEO não é apenas sobre palavras-chave, é sobre como as máquinas leem seu código. Um mestre domina a estrutura invisível."
  },
  {
    termo: "Acessibilidade (A11y)",
    definicao: "Práticas que garantem que qualquer pessoa possa usar sua aplicação.",
    oQueRecrutadorAma: "Uso de ARIA-labels, contraste de cores correto e navegação total via teclado.",
    oQueDesqualifica: "Botões sem texto, imagens sem 'alt' e focar apenas no visual 'bonitinho' que não funciona para todos.",
    explicacaoVoz: "Acessibilidade não é um bônus, é um requisito obrigatório. Quem ignora isso nunca será nível mestre em front-end."
  }
];

export default function ManualDev() {
  const [busca, setBusca] = useState('');
  const [vozSelecionada, setVozSelecionada] = useState<string>('');
  const [vozes, setVozes] = useState<SpeechSynthesisVoice[]>([]);

  // Carrega as vozes para o Professor Virtual
  useEffect(() => {
    const carregarVozes = () => {
      const disponiveis = window.speechSynthesis.getVoices();
      const vozesPT = disponiveis.filter(v => v.lang.toLowerCase().includes('pt'));
      setVozes(vozesPT);

      if (vozesPT.length > 0 && !vozSelecionada) {
        setVozSelecionada(vozesPT[0].name);
      }
    };

    window.speechSynthesis.onvoiceschanged = carregarVozes;
    carregarVozes();

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const professorExplica = (texto: string) => {
    window.speechSynthesis.cancel();
    const mestre = new SpeechSynthesisUtterance(texto);
    const voz = vozes.find(v => v.name === vozSelecionada);
    if (voz) mestre.voice = voz;
    mestre.rate = 0.95;
    window.speechSynthesis.speak(mestre);
  };

  const termosFiltrados = TERMOS_MESTRES.filter(t => 
    t.termo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white p-10 font-sans">
      <header className="flex flex-col md:flex-row justify-between items-center border-b border-zinc-800 pb-10 mb-12">
        <div>
          <h1 className="text-6xl font-black text-yellow-500 tracking-tighter uppercase italic">Manual <span className="text-white">do Dev</span></h1>
          <p className="text-zinc-500 font-mono text-sm mt-2">Dicionário Semântico v1.0 • O Repositório do Mestre [1]</p>
        </div>

        <div className="mt-6 md:mt-0 flex gap-4 items-center">
          <input 
            type="text" 
            placeholder="Buscar termo..." 
            className="bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-full text-yellow-500 outline-none focus:border-yellow-500 transition-all w-64"
            onChange={(e) => setBusca(e.target.value)}
          />
          <select 
            value={vozSelecionada}
            onChange={(e) => setVozSelecionada(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 text-yellow-500 text-xs p-3 rounded-full outline-none focus:border-yellow-500"
          >
            {vozes.map(v => <option key={v.name} value={v.name}>{v.name}</option>)}
          </select>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
        {termosFiltrados.map((item, index) => (
          <article key={index} className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-[2rem] hover:border-yellow-500/50 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-4xl font-bold text-white group-hover:text-yellow-500 transition-colors italic tracking-tighter underline decoration-zinc-800 underline-offset-8">
                {item.termo}
              </h2>
              <button 
                onClick={() => professorExplica(item.explicacaoVoz)}
                className="bg-yellow-500 text-black p-3 rounded-full hover:scale-110 active:scale-95 transition-all shadow-lg"
              >🔊</button>
            </div>
            
            <p className="text-zinc-400 text-xl mb-8 leading-relaxed italic">"{item.definicao}"</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-500/5 border border-green-500/20 p-6 rounded-2xl">
                <h3 className="text-green-500 font-black text-xs uppercase tracking-widest mb-3">✓ Recrutadores Amam</h3>
                <p className="text-sm text-zinc-300 font-medium leading-snug">{item.oQueRecrutadorAma}</p>
              </div>
              <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl">
                <h3 className="text-red-500 font-black text-xs uppercase tracking-widest mb-3">✗ Desqualifica na Hora</h3>
                <p className="text-sm text-zinc-300 font-medium leading-snug">{item.oQueDesqualifica}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}