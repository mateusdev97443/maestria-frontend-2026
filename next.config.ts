/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Comando de mestre para gerar o site estático [1]
  images: { unoptimized: true }, // Necessário para imagens funcionarem sem custo
  // Se o nome do seu repositório no GitHub não for o seu domínio principal, 
  // adicione a linha abaixo trocando 'nome-do-repo' pelo nome real:
  // basePath: '/maestria-frontend-2026', 
};

export default nextConfig;