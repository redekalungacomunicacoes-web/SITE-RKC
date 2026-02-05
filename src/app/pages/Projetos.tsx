import { Link } from 'react-router-dom';
import { RKCCard, RKCCardImage, RKCCardContent } from '@/app/components/RKCCard';
import { RKCTag } from '@/app/components/RKCTag';
import { ArrowRight } from 'lucide-react';

export function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: 'Vozes do Cerrado',
      descricao: 'Documentação e valorização das práticas culturais e conhecimentos tradicionais das comunidades quilombolas através de entrevistas, registros audiovisuais e publicações.',
      imagem: 'https://images.unsplash.com/photo-1623289784234-0670ebb4add4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlsb21ib2xhJTIwY29tbXVuaXR5JTIwYnJhemlsJTIwY3VsdHVyZXxlbnwxfHx8fDE3NzAwNzUyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Cultura',
      status: 'Ativo',
      ano: '2023-2026',
    },
    {
      id: 2,
      titulo: 'Sementes do Território',
      descricao: 'Projeto de agricultura sustentável e preservação de sementes crioulas no Território Kalunga, fortalecendo a soberania alimentar e a agrobiodiversidade.',
      imagem: 'https://images.unsplash.com/photo-1763753743884-e6e1482916e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjBzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MDA3NTI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Agroecologia',
      status: 'Ativo',
      ano: '2024-2026',
    },
    {
      id: 3,
      titulo: 'Comunicação Popular',
      descricao: 'Formação em comunicação comunitária e jornalismo independente para jovens do território, desenvolvendo habilidades em produção de conteúdo, fotografia e audiovisual.',
      imagem: 'https://images.unsplash.com/photo-1652811716902-8c63a4d3f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBpbmRpZ2Vub3VzJTIwY29tbXVuaWNhdGlvbiUyMGpvdXJuYWxpc218ZW58MXx8fHwxNzcwMDc1MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Educação',
      status: 'Ativo',
      ano: '2022-2026',
    },
    {
      id: 4,
      titulo: 'Festival das Águas',
      descricao: 'Celebração anual que reúne cultura, música e saberes ancestrais das comunidades da Chapada dos Veadeiros, promovendo intercâmbio cultural e fortalecimento identitário.',
      imagem: 'https://images.unsplash.com/photo-1765850262569-6db347d596f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBtdXNpYyUyMGN1bHR1cmFsJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzcwMDc1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Cultura',
      status: 'Ativo',
      ano: '2021-2026',
    },
    {
      id: 5,
      titulo: 'Guardiões do Cerrado',
      descricao: 'Projeto de educação ambiental e conservação do Cerrado, envolvendo as comunidades na proteção dos recursos naturais e na valorização dos saberes ecológicos tradicionais.',
      imagem: 'https://images.unsplash.com/photo-1701890013861-a6ec62094c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBsYW5kc2NhcGUlMjBuYXR1cmUlMjBjZXJyYWRvfGVufDF8fHx8MTc3MDA3NTI2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Meio Ambiente',
      status: 'Ativo',
      ano: '2023-2025',
    },
    {
      id: 6,
      titulo: 'Memórias Quilombolas',
      descricao: 'Resgate e preservação da memória oral das comunidades Kalunga através de entrevistas com anciãos e lideranças, criando um acervo histórico audiovisual.',
      imagem: 'https://images.unsplash.com/photo-1760638261420-ad9acd4e0c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGtub3dsZWRnZSUyMGluZGlnZW5vdXN8ZW58MXx8fHwxNzcwMDc1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Cultura',
      status: 'Concluído',
      ano: '2020-2023',
    },
  ];

  const projetosAtivos = projetos.filter(p => p.status === 'Ativo');
  const projetosConcluidos = projetos.filter(p => p.status === 'Concluído');

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F7A3E] to-[#2FA866] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#F2B705] blur-3xl" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Nossos Projetos
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Iniciativas que fortalecem cultura, comunicação e sustentabilidade 
            no Território Kalunga
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />
      </section>

      {/* Projetos Ativos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-2">
              Projetos em Andamento
            </h2>
            <p className="text-gray-600">
              Conheça as iniciativas que estamos desenvolvendo atualmente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetosAtivos.map((projeto) => (
              <Link key={projeto.id} to={`/projetos/${projeto.id}`}>
                <RKCCard className="h-full hover:scale-[1.02] transition-transform">
                  <RKCCardImage src={projeto.imagem} alt={projeto.titulo} />
                  <RKCCardContent>
                    <div className="flex items-center justify-between mb-3">
                      <RKCTag variant="green">{projeto.tag}</RKCTag>
                      <span className="text-xs text-gray-500">{projeto.ano}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-[#2E2E2E]">
                      {projeto.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {projeto.descricao}
                    </p>
                    <div className="flex items-center text-[#0F7A3E] font-medium text-sm">
                      Saiba mais
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </RKCCardContent>
                </RKCCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos Concluídos */}
      {projetosConcluidos.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-2">
                Projetos Concluídos
              </h2>
              <p className="text-gray-600">
                Trabalhos finalizados que deixaram legados importantes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projetosConcluidos.map((projeto) => (
                <Link key={projeto.id} to={`/projetos/${projeto.id}`}>
                  <RKCCard className="h-full hover:scale-[1.02] transition-transform opacity-90">
                    <RKCCardImage src={projeto.imagem} alt={projeto.titulo} />
                    <RKCCardContent>
                      <div className="flex items-center justify-between mb-3">
                        <RKCTag variant="brown">{projeto.tag}</RKCTag>
                        <span className="text-xs text-gray-500">{projeto.ano}</span>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-[#2E2E2E]">
                        {projeto.titulo}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {projeto.descricao}
                      </p>
                      <div className="flex items-center text-[#7A3E1D] font-medium text-sm">
                        Ver projeto
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </RKCCardContent>
                  </RKCCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
