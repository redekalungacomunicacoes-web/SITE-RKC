import { Link, useParams } from 'react-router-dom';
import { RKCButton } from '@/app/components/RKCButton';
import { RKCTag } from '@/app/components/RKCTag';
import { RKCCard, RKCCardImage, RKCCardContent } from '@/app/components/RKCCard';
import { ArrowLeft, Calendar, Users, Target, CheckCircle2 } from 'lucide-react';

export function ProjetoDetalhes() {
  const { id } = useParams();

  // Mock de dados - em produção viria de uma API
  const projetos = {
    '1': {
      titulo: 'Vozes do Cerrado',
      descricao: 'Documentação e valorização das práticas culturais e conhecimentos tradicionais das comunidades quilombolas.',
      descricaoCompleta: 'O projeto Vozes do Cerrado é uma iniciativa de documentação e valorização das práticas culturais, saberes tradicionais e histórias de vida das comunidades quilombolas do Território Kalunga. Através de entrevistas, registros audiovisuais e publicações, buscamos preservar e difundir o rico patrimônio cultural dessas comunidades.',
      imagem: 'https://images.unsplash.com/photo-1623289784234-0670ebb4add4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlsb21ib2xhJTIwY29tbXVuaXR5JTIwYnJhemlsJTIwY3VsdHVyZXxlbnwxfHx8fDE3NzAwNzUyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Cultura',
      ano: '2023-2026',
      status: 'Ativo',
      objetivos: [
        'Registrar histórias orais e memórias dos anciãos',
        'Documentar práticas culturais tradicionais',
        'Produzir material audiovisual e publicações',
        'Fortalecer a identidade cultural quilombola',
      ],
      resultados: [
        '50+ entrevistas realizadas com anciãos e lideranças',
        '100 horas de material audiovisual produzido',
        '2 documentários lançados',
        '3 exposições fotográficas realizadas',
      ],
    },
    '2': {
      titulo: 'Sementes do Território',
      descricao: 'Projeto de agricultura sustentável e preservação de sementes crioulas no Território Kalunga.',
      descricaoCompleta: 'Sementes do Território é um projeto de agricultura sustentável que trabalha com a preservação de sementes crioulas, fortalecimento da soberania alimentar e valorização dos conhecimentos tradicionais agrícolas das comunidades quilombolas.',
      imagem: 'https://images.unsplash.com/photo-1763753743884-e6e1482916e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjBzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MDA3NTI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Agroecologia',
      ano: '2024-2026',
      status: 'Ativo',
      objetivos: [
        'Preservar variedades tradicionais de sementes',
        'Fortalecer a agroecologia no território',
        'Promover a soberania alimentar',
        'Valorizar conhecimentos agrícolas tradicionais',
      ],
      resultados: [
        '12 bancos de sementes comunitários criados',
        '80+ variedades de sementes crioulas catalogadas',
        '150 famílias envolvidas no projeto',
        '5 oficinas de agroecologia realizadas',
      ],
    },
    '3': {
      titulo: 'Comunicação Popular',
      descricao: 'Formação em comunicação comunitária e jornalismo independente para jovens do território.',
      descricaoCompleta: 'O projeto Comunicação Popular oferece formação em jornalismo comunitário, produção audiovisual, fotografia e gestão de mídias sociais para jovens do Território Kalunga, fortalecendo a autonomia comunicacional das comunidades.',
      imagem: 'https://images.unsplash.com/photo-1652811716902-8c63a4d3f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBpbmRpZ2Vub3VzJTIwY29tbXVuaWNhdGlvbiUyMGpvdXJuYWxpc218ZW58MXx8fHwxNzcwMDc1MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Educação',
      ano: '2022-2026',
      status: 'Ativo',
      objetivos: [
        'Formar jovens comunicadores comunitários',
        'Desenvolver habilidades em produção de conteúdo',
        'Fortalecer a comunicação autônoma das comunidades',
        'Criar rede de jornalistas populares',
      ],
      resultados: [
        '60 jovens formados em comunicação comunitária',
        '200+ matérias produzidas pelos participantes',
        '4 cursos de formação realizados',
        '1 rádio comunitária fortalecida',
      ],
    },
    '4': {
      titulo: 'Festival das Águas',
      descricao: 'Celebração anual que reúne cultura, música e saberes ancestrais das comunidades da Chapada.',
      descricaoCompleta: 'O Festival das Águas é uma celebração anual que reúne comunidades quilombolas, indígenas e tradicionais da Chapada dos Veadeiros para compartilhar cultura, música, saberes ancestrais e fortalecer laços territoriais.',
      imagem: 'https://images.unsplash.com/photo-1765850262569-6db347d596f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBtdXNpYyUyMGN1bHR1cmFsJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzcwMDc1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Cultura',
      ano: '2021-2026',
      status: 'Ativo',
      objetivos: [
        'Promover intercâmbio cultural entre comunidades',
        'Valorizar expressões artísticas tradicionais',
        'Fortalecer identidade territorial',
        'Celebrar a cultura quilombola e do Cerrado',
      ],
      resultados: [
        '5 edições realizadas com sucesso',
        '2000+ participantes em cada edição',
        '30+ apresentações culturais por festival',
        '15 comunidades envolvidas',
      ],
    },
    '5': {
      titulo: 'Guardiões do Cerrado',
      descricao: 'Projeto de educação ambiental e conservação do Cerrado.',
      descricaoCompleta: 'Guardiões do Cerrado é um projeto de educação ambiental que envolve as comunidades quilombolas na proteção e conservação do Cerrado, valorizando os saberes ecológicos tradicionais e promovendo práticas sustentáveis.',
      imagem: 'https://images.unsplash.com/photo-1701890013861-a6ec62094c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBsYW5kc2NhcGUlMjBuYXR1cmUlMjBjZXJyYWRvfGVufDF8fHx8MTc3MDA3NTI2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Meio Ambiente',
      ano: '2023-2025',
      status: 'Ativo',
      objetivos: [
        'Promover educação ambiental nas comunidades',
        'Conservar áreas de Cerrado nativo',
        'Valorizar saberes ecológicos tradicionais',
        'Monitorar biodiversidade local',
      ],
      resultados: [
        '500 hectares de Cerrado protegidos',
        '40 jovens guardiões formados',
        '8 trilhas ecológicas mapeadas',
        '3 guias de biodiversidade publicados',
      ],
    },
    '6': {
      titulo: 'Memórias Quilombolas',
      descricao: 'Resgate e preservação da memória oral das comunidades Kalunga.',
      descricaoCompleta: 'Memórias Quilombolas foi um projeto de resgate e preservação da memória oral através de entrevistas com anciãos e lideranças, criando um acervo histórico audiovisual das comunidades Kalunga.',
      imagem: 'https://images.unsplash.com/photo-1760638261420-ad9acd4e0c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGtub3dsZWRnZSUyMGluZGlnZW5vdXN8ZW58MXx8fHwxNzcwMDc1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Cultura',
      ano: '2020-2023',
      status: 'Concluído',
      objetivos: [
        'Registrar memórias dos anciãos quilombolas',
        'Criar acervo histórico audiovisual',
        'Preservar histórias orais tradicionais',
        'Produzir material educativo',
      ],
      resultados: [
        'Acervo com 80 entrevistas catalogadas',
        'Livro "Memórias Kalunga" publicado',
        '1 documentário premiado produzido',
        'Exposição itinerante realizada em 10 cidades',
      ],
    },
  };

  const projeto = projetos[id as keyof typeof projetos];

  if (!projeto) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#2E2E2E] mb-4">Projeto não encontrado</h2>
          <Link to="/projetos">
            <RKCButton>Voltar para Projetos</RKCButton>
          </Link>
        </div>
      </div>
    );
  }

  const outrosProjetos = Object.entries(projetos)
    .filter(([key]) => key !== id)
    .slice(0, 3)
    .map(([key, value]) => ({ id: key, ...value }));

  return (
    <div>
      {/* Hero com imagem */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={projeto.imagem}
            alt={projeto.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link to="/projetos" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Projetos
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <RKCTag variant="yellow">{projeto.tag}</RKCTag>
                <span className="text-white/80 text-sm">{projeto.ano}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  projeto.status === 'Ativo' 
                    ? 'bg-green-500/20 text-green-300' 
                    : 'bg-gray-500/20 text-gray-300'
                }`}>
                  {projeto.status}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                {projeto.titulo}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {projeto.descricao}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Conteúdo principal */}
            <div className="lg:col-span-2 space-y-12">
              {/* Sobre o projeto */}
              <div>
                <h2 className="text-3xl font-bold text-[#2E2E2E] mb-6">
                  Sobre o Projeto
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projeto.descricaoCompleta}
                </p>
              </div>

              {/* Objetivos */}
              <div>
                <h2 className="text-3xl font-bold text-[#2E2E2E] mb-6">
                  Objetivos
                </h2>
                <div className="space-y-3">
                  {projeto.objetivos.map((objetivo, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Target className="w-6 h-6 text-[#0F7A3E] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 leading-relaxed">{objetivo}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resultados */}
              <div>
                <h2 className="text-3xl font-bold text-[#2E2E2E] mb-6">
                  Resultados Alcançados
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {projeto.resultados.map((resultado, index) => (
                    <RKCCard key={index} variant="minimal" className="bg-gradient-to-br from-[#0F7A3E]/5 to-[#2FA866]/5">
                      <RKCCardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-[#0F7A3E] flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700 leading-relaxed">{resultado}</p>
                        </div>
                      </RKCCardContent>
                    </RKCCard>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Informações */}
              <RKCCard>
                <RKCCardContent className="p-6">
                  <h3 className="font-bold text-xl text-[#2E2E2E] mb-6">
                    Informações
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">Período</span>
                      </div>
                      <p className="text-[#2E2E2E] ml-6">{projeto.ano}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-medium">Status</span>
                      </div>
                      <p className="text-[#2E2E2E] ml-6">{projeto.status}</p>
                    </div>
                  </div>
                </RKCCardContent>
              </RKCCard>

              {/* CTA */}
              <RKCCard className="bg-gradient-to-br from-[#0F7A3E] to-[#2FA866]">
                <RKCCardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl text-white mb-3">
                    Quer saber mais?
                  </h3>
                  <p className="text-white/90 mb-4 text-sm">
                    Entre em contato para conhecer melhor este projeto
                  </p>
                  <Link to="/contato">
                    <RKCButton variant="accent" className="w-full">
                      Entrar em Contato
                    </RKCButton>
                  </Link>
                </RKCCardContent>
              </RKCCard>
            </div>
          </div>
        </div>
      </section>

      {/* Outros Projetos */}
      {outrosProjetos.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#2E2E2E] mb-8">
              Outros Projetos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outrosProjetos.map((outroProjeto) => (
                <Link key={outroProjeto.id} to={`/projetos/${outroProjeto.id}`}>
                  <RKCCard className="h-full hover:scale-[1.02] transition-transform">
                    <RKCCardImage src={outroProjeto.imagem} alt={outroProjeto.titulo} />
                    <RKCCardContent>
                      <RKCTag variant="green" className="mb-3">{outroProjeto.tag}</RKCTag>
                      <h3 className="font-bold text-lg mb-2 text-[#2E2E2E]">
                        {outroProjeto.titulo}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {outroProjeto.descricao}
                      </p>
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
