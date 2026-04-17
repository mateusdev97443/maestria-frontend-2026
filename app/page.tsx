'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function DashboardMaestria() {
  const [progressoGlobal] = useState(0);

  const trilhas = [
    { id: 'aula', titulo: 'Módulo 1: Semântica de Elite', desc: 'Teoria interativa profunda.', rota: '/aula/fundamentos-de-elite', status: 'Iniciado' },
    { id: 'pratica', titulo: 'Campo de Batalha', desc: 'Sandbox com o Avaliador Mestre.', rota: '/pratica', status: 'Disponível' },
    { id: 'manual', titulo: 'Manual do Dev', desc: 'Repositório de termos técnicos.', rota: '/manual-dev', status: 'Pronto' },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8 font-sans selection:bg-yellow-500">
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-12 mb-16 gap-8">
        <div>
          <h1 className="text-7xl font-black text-yellow-500 tracking-tighter uppercase italic leading-none">MAESTRIA <br/> <span className="text-white">FRONT-END</span></h1>
          <p className="text-zinc-500 mt-4 font-mono text-sm tracking-[0.3em] uppercase italic">Ambiente de Elite • Nível: Iniciante Dominador [4]</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 w-full md:w-80">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest text-white">Progresso Global</span>
            <span className="text-yellow-500 font-mono font-bold">{progressoGlobal}%</span>
          </div>
          <div className="w-full h-3 bg-black rounded-full overflow-hidden border border-zinc-800">
            <div className="h-full bg-yellow-500 transition-all duration-1000" style={{ width: `${progressoGlobal}%` }}></div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {trilhas.map((trilha) => (
          <Link href={trilha.rota} key={trilha.id} className="group">
            <article className="h-full bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2.5rem] hover:border-yellow-500 transition-all duration-500 group-hover:-translate-y-2">
              <span className="text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">{trilha.status}</span>
              <h2 className="text-2xl font-bold my-4 italic group-hover:text-yellow-500 transition-colors">{trilha.titulo}</h2>
              <p className="text-zinc-500 text-sm mb-8">{trilha.desc}</p>
              <div className="flex items-center gap-2 text-xs font-black uppercase text-white group-hover:gap-4 transition-all"><span>Acessar Módulo</span><span className="text-yellow-500">→</span></div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}