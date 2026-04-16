'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DashboardMaestria() {
  const [progressoGlobal, setProgressoGlobal] = useState(0);

  // Módulos definidos na Planta Técnica: Do Início ao Mestre Dominador [1]
  const trilhas = [
    {
      id: 'fundamentos',
      titulo: 'Módulo 1: Semântica de Elite',
      desc: 'Domine a arquitetura de informação que os recrutadores buscam.',
      rota: '/aula/fundamentos-de-elite',
      status: 'Iniciado'
    },
    {
      id: 'pratica',
      titulo: 'Campo de Batalha',
      desc: 'Sandbox interativo com o Avaliador Mestre em tempo real.',
      rota: '/pratica',
      status: 'Disponível'
    },
    {
      id: 'manual',
      titulo: 'Manual do Dev',
      desc: 'Seu repositório semântico e dicionário tecnológico v1.0.',
      rota: '/manual-dev',
      status: 'Pronto'
    },
    {
      id: 'simulador',
      titulo: 'Simulador de Trabalho',
      desc: 'Projetos reais que as empresas contratam em 2026.',
      rota: '#',
      status: 'Bloqueado'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8 font-sans selection:bg-yellow-500">
      {/* Header com Status de Maestria [1] */}
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-12 mb-16 gap-8">
        <div>
          <h1 className="text-7xl font-black text-yellow-500 tracking-tighter uppercase italic leading-none">
            Maestria <br /> <span className="text-white">Front-End</span>
          </h1>
          <p className="text-zinc-500 mt-4 font-mono text-sm tracking-[0.3em] uppercase">
            Ambiente de Elite • Nível: Iniciante Dominador
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 w-full md:w-80 shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Progresso Global</span>
            <span className="text-yellow-500 font-mono font-bold">{progressoGlobal}%</span>
          </div>
          <div className="w-full h-3 bg-black rounded-full overflow-hidden border border-zinc-800">
            <div 
              className="h-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all duration-1000" 
              style={{ width: `${progressoGlobal}%` }}
            ></div>
          </div>
        </div>
      </header>

      {/* Grid de Trilhas de Conhecimento [1] */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trilhas.map((trilha) => (
          <Link href={trilha.rota} key={trilha.id} className="group">
            <article className="h-full bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2.5rem] hover:border-yellow-500 transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-zinc-900 shadow-xl">
              <div className="flex justify-between items-start mb-8">
                <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                  trilha.status === 'Bloqueado' ? 'bg-zinc-800 text-zinc-600' : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                }`}>
                  {trilha.status}
                </span>
                <span className="text-zinc-700 font-mono text-4xl group-hover:text-yellow-500/20 transition-colors">0{trilhas.indexOf(trilha) + 1}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 italic group-hover:text-yellow-500 transition-colors tracking-tight">
                {trilha.titulo}
              </h2>
              <p className="text-zinc-500 leading-relaxed text-sm font-medium mb-8">
                {trilha.desc}
              </p>

              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-tighter group-hover:gap-4 transition-all">
                <span>Acessar Módulo</span>
                <span className="text-yellow-500">→</span>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Footer Tecnológico */}
      <footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-900 flex justify-between items-center opacity-30">
        <span className="text-[10px] font-mono tracking-widest uppercase">Repositório: maestria-frontend-2026</span>
        <span className="text-[10px] font-mono tracking-widest uppercase">Status: Online</span>
      </footer>
    </main>
  );
}