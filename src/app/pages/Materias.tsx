import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RKCCard, RKCCardImage, RKCCardContent } from '@/app/components/RKCCard';
import { RKCTag } from '@/app/components/RKCTag';
import { Calendar, User } from 'lucide-react';

export function Materias() {
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('Todas');

  const materias = [
    {
      id: 1,
      titulo: 'Território Kalunga: 300 anos de resistência e cultura viva',
      resumo: 'História e presente das comunidades quilombolas que preservam tradições ancestrais na Chapada dos Veadeiros, mantendo viva a cultura e os saberes dos antepassados.',
      imagem: 'https://images.unsplash.com/photo-1760638261420-ad9acd4e0c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGtub3dsZWRnZSUyMGluZGlnZW5vdXN8ZW58MXx8fHwxNzcwMDc1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'Maria Santos',
      data: '28 de Janeiro, 2026',
      categoria: 'Cultura',
    },
    {
      id: 2,
      titulo: 'Cerrado: o berço das águas precisa de proteção',
      resumo: 'A importância ecológica do Cerrado brasileiro e os desafios urgentes de preservação deste bioma fundamental para o país.',
      imagem: 'https://images.unsplash.com/photo-1701890013861-a6ec62094c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBsYW5kc2NhcGUlMjBuYXR1cmUlMjBjZXJyYWRvfGVufDF8fHx8MTc3MDA3NTI2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'João Pereira',
      data: '25 de Janeiro, 2026',
      categoria: 'Meio Ambiente',
    },
    {
      id: 3,
      titulo: 'Sementes crioulas: a riqueza da agrobiodiversidade quilombola',
      resumo: 'Como comunidades tradicionais preservam variedades de plantas adaptadas ao Cerrado, garantindo soberania alimentar.',
      imagem: 'https://images.unsplash.com/photo-1763753743884-e6e1482916e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjBzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MDA3NTI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'Ana Costa',
      data: '22 de Janeiro, 2026',
      categoria: 'Agroecologia',
    },
    {
      id: 4,
      titulo: 'Juventude quilombola e comunicação popular',
      resumo: 'Jovens do Território Kalunga contam suas histórias através da mídia comunitária e fortalecem sua identidade.',
      imagem: 'https://images.unsplash.com/photo-1652811716902-8c63a4d3f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBpbmRpZ2Vub3VzJTIwY29tbXVuaWNhdGlvbiUyMGpvdXJuYWxpc218ZW58MXx8fHwxNzcwMDc1MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'Carlos Silva',
      data: '20 de Janeiro, 2026',
      categoria: 'Educação',
    },
    {
      id: 5,
      titulo: 'Música e dança: a força da cultura quilombola',
      resumo: 'Expressões artísticas que conectam passado e presente nas celebrações e rituais das comunidades Kalunga.',
      imagem: 'https://images.unsplash.com/photo-1765850262569-6db347d596f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBtdXNpYyUyMGN1bHR1cmFsJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzcwMDc1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'Beatriz Oliveira',
      data: '18 de Janeiro, 2026',
      categoria: 'Cultura',
    },
    {
      id: 6,
      titulo: 'Jornalismo independente como ferramenta de transformação',
      resumo: 'O papel da comunicação popular na valorização de territórios e fortalecimento das comunidades tradicionais.',
      imagem: 'https://images.unsplash.com/photo-1579308343343-6557a756d515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBqb3VybmFsaXNtJTIwd3JpdGluZ3xlbnwxfHx8fDE3NzAwNzUyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'Ricardo Mendes',
      data: '15 de Janeiro, 2026',
      categoria: 'Comunicação',
    },
    {
      id: 7,
      titulo: 'Plantas medicinais do Cerrado: saberes que curam',
      resumo: 'O conhecimento tradicional sobre plantas medicinais e sua importância para a saúde nas comunidades quilombolas.',
      imagem: 'https://images.unsplash.com/photo-1760638261420-ad9acd4e0c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGtub3dsZWRnZSUyMGluZGlnZW5vdXN8ZW58MXx8fHwxNzcwMDc1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'Teresa Lima',
      data: '12 de Janeiro, 2026',
      categoria: 'Saúde',
    },
    {
      id: 8,
      titulo: 'Festas tradicionais: rituais de pertencimento',
      resumo: 'As celebrações que reforçam laços comunitários e mantêm vivas as tradições do Território Kalunga.',
      imagem: 'https://images.unsplash.com/photo-1623289784234-0670ebb4add4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlsb21ib2xhJTIwY29tbXVuaXR5JTIwYnJhemlsJTIwY3VsdHVyZXxlbnwxfHx8fDE3NzAwNzUyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'Pedro Alves',
      data: '10 de Janeiro, 2026',
      categoria: 'Cultura',
    },
  ];

  const categorias = ['Todas', ...Array.from(new Set(materias.map(m => m.categoria)))];

  const materiasFiltradas = categoriaFiltro === 'Todas' 
    ? materias 
    : materias.filter(m => m.categoria === categoriaFiltro);

  const materiaDestaque = materiasFiltradas[0];
  const materiasSecundarias = materiasFiltradas.slice(1);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#C85A1E] to-[#7A3E1D] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#F2B705] blur-3xl" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Matérias
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Jornalismo independente que nasce do território quilombola
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaFiltro(categoria)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  categoriaFiltro === categoria
                    ? 'bg-[#0F7A3E] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Matérias */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Matéria Destaque */}
          {materiaDestaque && (
            <div className="mb-12">
              <Link to={`/materias/${materiaDestaque.id}`}>
                <RKCCard variant="featured" className="hover:scale-[1.01] transition-transform">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <RKCCardImage 
                      src={materiaDestaque.imagem} 
                      alt={materiaDestaque.titulo}
                      aspectRatio="square"
                    />
                    <RKCCardContent className="flex flex-col justify-between p-8 lg:p-12">
                      <div>
                        <RKCTag variant="orange" className="mb-4">
                          {materiaDestaque.categoria}
                        </RKCTag>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#2E2E2E] mb-4 leading-tight">
                          {materiaDestaque.titulo}
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
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
            </div>
          )}

          {/* Grid de Matérias */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materiasSecundarias.map((materia) => (
              <Link key={materia.id} to={`/materias/${materia.id}`}>
                <RKCCard className="h-full hover:scale-[1.02] transition-transform">
                  <RKCCardImage src={materia.imagem} alt={materia.titulo} />
                  <RKCCardContent>
                    <RKCTag variant="green" className="mb-3">
                      {materia.categoria}
                    </RKCTag>
                    <h3 className="font-bold text-xl mb-3 text-[#2E2E2E] line-clamp-2">
                      {materia.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
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
        </div>
      </section>
    </div>
  );
}
