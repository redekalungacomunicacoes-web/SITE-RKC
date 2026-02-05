import { Link } from 'react-router-dom';
import { RKCButton } from '@/app/components/RKCButton';
import { RKCCard, RKCCardImage, RKCCardContent } from '@/app/components/RKCCard';
import { RKCTag } from '@/app/components/RKCTag';
import { ArrowRight, Calendar, User } from 'lucide-react';

export function Home() {
  const projetos = [
    {
      id: 1,
      titulo: 'Vozes do Cerrado',
      descricao: 'Documentação e valorização das práticas culturais e conhecimentos tradicionais das comunidades quilombolas.',
      imagem: 'https://images.unsplash.com/photo-1623289784234-0670ebb4add4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlsb21ib2xhJTIwY29tbXVuaXR5JTIwYnJhemlsJTIwY3VsdHVyZXxlbnwxfHx8fDE3NzAwNzUyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Cultura',
    },
    {
      id: 2,
      titulo: 'Sementes do Território',
      descricao: 'Projeto de agricultura sustentável e preservação de sementes crioulas no Território Kalunga.',
      imagem: 'https://images.unsplash.com/photo-1763753743884-e6e1482916e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjBzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MDA3NTI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Agroecologia',
    },
    {
      id: 3,
      titulo: 'Comunicação Popular',
      descricao: 'Formação em comunicação comunitária e jornalismo independente para jovens do território.',
      imagem: 'https://images.unsplash.com/photo-1652811716902-8c63a4d3f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBpbmRpZ2Vub3VzJTIwY29tbXVuaWNhdGlvbiUyMGpvdXJuYWxpc218ZW58MXx8fHwxNzcwMDc1MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Educação',
    },
    {
      id: 4,
      titulo: 'Festival das Águas',
      descricao: 'Celebração anual que reúne cultura, música e saberes ancestrais das comunidades da Chapada.',
      imagem: 'https://images.unsplash.com/photo-1765850262569-6db347d596f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBtdXNpYyUyMGN1bHR1cmFsJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzcwMDc1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Cultura',
    },
  ];

  const materias = [
    {
      id: 1,
      titulo: 'Território Kalunga: 300 anos de resistência e cultura viva',
      resumo: 'História e presente das comunidades quilombolas que preservam tradições ancestrais na Chapada dos Veadeiros.',
      imagem: 'https://images.unsplash.com/photo-1760638261420-ad9acd4e0c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGtub3dsZWRnZSUyMGluZGlnZW5vdXN8ZW58MXx8fHwxNzcwMDc1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'Maria Santos',
      data: '28 de Janeiro, 2026',
      categoria: 'Cultura',
      destaque: true,
    },
    {
      id: 2,
      titulo: 'Cerrado: o berço das águas precisa de proteção',
      resumo: 'A importância ecológica do Cerrado e os desafios de preservação.',
      imagem: 'https://images.unsplash.com/photo-1701890013861-a6ec62094c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBsYW5kc2NhcGUlMjBuYXR1cmUlMjBjZXJyYWRvfGVufDF8fHx8MTc3MDA3NTI2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'João Pereira',
      data: '25 de Janeiro, 2026',
      categoria: 'Meio Ambiente',
    },
    {
      id: 3,
      titulo: 'Sementes crioulas: a riqueza da agrobiodiversidade',
      resumo: 'Como comunidades tradicionais preservam variedades de plantas.',
      imagem: 'https://images.unsplash.com/photo-1763753743884-e6e1482916e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjBzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MDA3NTI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'Ana Costa',
      data: '22 de Janeiro, 2026',
      categoria: 'Agroecologia',
    },
    {
      id: 4,
      titulo: 'Juventude quilombola e comunicação popular',
      resumo: 'Jovens contam suas histórias através da mídia comunitária.',
      imagem: 'https://images.unsplash.com/photo-1652811716902-8c63a4d3f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBpbmRpZ2Vub3VzJTIwY29tbXVuaWNhdGlvbiUyMGpvdXJuYWxpc218ZW58MXx8fHwxNzcwMDc1MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'Carlos Silva',
      data: '20 de Janeiro, 2026',
      categoria: 'Educação',
    },
    {
      id: 5,
      titulo: 'Música e dança: a força da cultura quilombola',
      resumo: 'Expressões artísticas que conectam passado e presente.',
      imagem: 'https://images.unsplash.com/photo-1765850262569-6db347d596f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBtdXNpYyUyMGN1bHR1cmFsJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzcwMDc1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'Beatriz Oliveira',
      data: '18 de Janeiro, 2026',
      categoria: 'Cultura',
    },
    {
      id: 6,
      titulo: 'Jornalismo independente como ferramenta de transformação',
      resumo: 'O papel da comunicação na valorização de territórios.',
      imagem: 'https://images.unsplash.com/photo-1579308343343-6557a756d515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBqb3VybmFsaXNtJTIwd3JpdGluZ3xlbnwxfHx8fDE3NzAwNzUyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'Ricardo Mendes',
      data: '15 de Janeiro, 2026',
      categoria: 'Comunicação',
    },
  ];

  const materiaDestaque = materias.find(m => m.destaque);
  const materiasSecundarias = materias.filter(m => !m.destaque);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Imagem de fundo */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1623289784234-0670ebb4add4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlsb21ib2xhJTIwY29tbXVuaXR5JTIwYnJhemlsJTIwY3VsdHVyZXxlbnwxfHx8fDE3NzAwNzUyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Comunidade Kalunga"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Conteúdo do Hero */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <RKCTag variant="yellow" className="mb-6">
              Comunicação Popular
            </RKCTag>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Amplificando as vozes do Território Kalunga
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Mídia independente quilombola na Chapada dos Veadeiros, 
              promovendo jornalismo comunitário, cultura e pertencimento territorial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quem-somos">
                <RKCButton size="lg">
                  Conheça nossa história
                  <ArrowRight className="w-5 h-5" />
                </RKCButton>
              </Link>
              <Link to="/materias">
                <RKCButton variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0F7A3E]">
                  Ler matérias
                </RKCButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Faixa orgânica inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />
      </section>

      {/* Projetos Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">
              Nossos Projetos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Iniciativas que fortalecem cultura, comunicação e sustentabilidade no território quilombola
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {projetos.map((projeto) => (
              <Link key={projeto.id} to={`/projetos/${projeto.id}`}>
                <RKCCard className="h-full hover:scale-[1.02] transition-transform">
                  <RKCCardImage src={projeto.imagem} alt={projeto.titulo} />
                  <RKCCardContent>
                    <RKCTag variant="green" className="mb-3">{projeto.tag}</RKCTag>
                    <h3 className="font-bold text-lg mb-2 text-[#2E2E2E]">{projeto.titulo}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{projeto.descricao}</p>
                  </RKCCardContent>
                </RKCCard>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projetos">
              <RKCButton variant="secondary">
                Ver todos os projetos
                <ArrowRight className="w-4 h-4" />
              </RKCButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Matérias Section com Grid Editorial */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-2">
                Últimas Matérias
              </h2>
              <p className="text-gray-600">Jornalismo independente e territorial</p>
            </div>
            <Link to="/materias" className="hidden sm:block">
              <RKCButton variant="outline">
                Ver todas
              </RKCButton>
            </Link>
          </div>

          {/* Grid Editorial: 1 destaque + 5 menores */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Matéria Destaque */}
            {materiaDestaque && (
              <Link to={`/materias/${materiaDestaque.id}`} className="lg:col-span-2">
                <RKCCard variant="featured" className="h-full hover:scale-[1.01] transition-transform">
                  <div className="grid md:grid-cols-2 gap-0">
                    <RKCCardImage 
                      src={materiaDestaque.imagem} 
                      alt={materiaDestaque.titulo}
                      aspectRatio="square"
                    />
                    <RKCCardContent className="flex flex-col justify-between p-8">
                      <div>
                        <RKCTag variant="orange" className="mb-4">{materiaDestaque.categoria}</RKCTag>
                        <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3 leading-tight">
                          {materiaDestaque.titulo}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {materiaDestaque.resumo}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {materiaDestaque.autor}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {materiaDestaque.data}
                        </div>
                      </div>
                    </RKCCardContent>
                  </div>
                </RKCCard>
              </Link>
            )}

            {/* Grid de 5 matérias menores */}
            <div className="space-y-6">
              {materiasSecundarias.slice(0, 2).map((materia) => (
                <Link key={materia.id} to={`/materias/${materia.id}`}>
                  <RKCCard className="hover:scale-[1.02] transition-transform">
                    <div className="flex gap-4 p-4">
                      <img 
                        src={materia.imagem} 
                        alt={materia.titulo}
                        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <RKCTag variant="green" className="mb-2 text-xs">{materia.categoria}</RKCTag>
                        <h4 className="font-bold text-sm mb-2 line-clamp-2 text-[#2E2E2E]">
                          {materia.titulo}
                        </h4>
                        <p className="text-xs text-gray-500">{materia.data}</p>
                      </div>
                    </div>
                  </RKCCard>
                </Link>
              ))}
            </div>
          </div>

          {/* 3 cards em linha */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {materiasSecundarias.slice(2, 5).map((materia) => (
              <Link key={materia.id} to={`/materias/${materia.id}`}>
                <RKCCard className="h-full hover:scale-[1.02] transition-transform">
                  <RKCCardImage src={materia.imagem} alt={materia.titulo} aspectRatio="video" />
                  <RKCCardContent>
                    <RKCTag variant="green" className="mb-3">{materia.categoria}</RKCTag>
                    <h4 className="font-bold mb-2 line-clamp-2 text-[#2E2E2E]">
                      {materia.titulo}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {materia.resumo}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{materia.autor}</span>
                      <span>•</span>
                      <span>{materia.data}</span>
                    </div>
                  </RKCCardContent>
                </RKCCard>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link to="/materias">
              <RKCButton variant="outline">Ver todas as matérias</RKCButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0F7A3E] to-[#2FA866] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#F2B705] blur-3xl" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Receba nossas histórias
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Assine nossa newsletter e acompanhe as histórias, projetos e transformações do Território Kalunga
          </p>
          <Link to="/newsletter">
            <RKCButton variant="accent" size="lg">
              Assinar Newsletter
              <ArrowRight className="w-5 h-5" />
            </RKCButton>
          </Link>
        </div>
      </section>

      {/* Chamada Institucional Final */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-6">
                Comunicação que nasce do território
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Rede Kalunga Comunicações (RKC) é uma iniciativa de mídia independente 
                que surge das comunidades quilombolas da Chapada dos Veadeiros. 
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nossa missão é amplificar as vozes do território, promover o jornalismo 
                comunitário e fortalecer a cultura e identidade quilombola através da comunicação popular.
              </p>
              <Link to="/quem-somos">
                <RKCButton>
                  Conheça a RKC
                  <ArrowRight className="w-4 h-4" />
                </RKCButton>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1701890013861-a6ec62094c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBsYW5kc2NhcGUlMjBuYXR1cmUlMjBjZXJyYWRvfGVufDF8fHx8MTc3MDA3NTI2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Território Kalunga"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F2B705] rounded-full opacity-80 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#0F7A3E] rounded-full opacity-60 blur-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
