import { Link, useParams } from 'react-router-dom';
import { RKCButton } from '@/app/components/RKCButton';
import { RKCTag } from '@/app/components/RKCTag';
import { RKCCard, RKCCardImage, RKCCardContent } from '@/app/components/RKCCard';
import { ArrowLeft, Calendar, User, Share2, Facebook, Instagram, Mail } from 'lucide-react';

export function MateriaDetalhes() {
  const { id } = useParams();

  // Mock de dados
  const materias = {
    '1': {
      titulo: 'Território Kalunga: 300 anos de resistência e cultura viva',
      resumo: 'História e presente das comunidades quilombolas que preservam tradições ancestrais na Chapada dos Veadeiros.',
      imagem: 'https://images.unsplash.com/photo-1760638261420-ad9acd4e0c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGtub3dsZWRnZSUyMGluZGlnZW5vdXN8ZW58MXx8fHwxNzcwMDc1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'Maria Santos',
      data: '28 de Janeiro, 2026',
      categoria: 'Cultura',
      conteudo: `
        <p>O Território Kalunga, maior sítio quilombola do Brasil, carrega em suas terras e em seu povo mais de 300 anos de história, resistência e cultura viva. Localizado na Chapada dos Veadeiros, em Goiás, este território é um exemplo vibrante de como comunidades tradicionais preservam suas raízes enquanto se adaptam aos desafios contemporâneos.</p>

        <p>Reconhecido como Patrimônio Cultural Brasileiro, o Território Kalunga abrange os municípios de Cavalcante, Teresina de Goiás e Monte Alegre de Goiás. São cerca de 8 mil pessoas distribuídas em dezenas de comunidades, mantendo vivas tradições que remontam ao período colonial, quando seus ancestrais buscaram liberdade nas serras e vales do Cerrado.</p>

        <h3>Raízes profundas no Cerrado</h3>

        <p>A história do povo Kalunga começa no século XVIII, quando escravizados fugidos encontraram refúgio nas terras altas da Chapada dos Veadeiros. Longe dos centros urbanos e das fazendas, essas comunidades desenvolveram uma relação única com o Cerrado, aprendendo a viver em harmonia com o bioma e construindo uma cultura própria que mescla tradições africanas, indígenas e caboclas.</p>

        <p>"Nossos avós nos ensinaram que a terra não é nossa, nós é que somos da terra", conta dona Tereza, de 78 anos, moradora da comunidade Engenho II. "Tudo que precisamos, o Cerrado dá. Mas tem que saber pedir e saber agradecer."</p>

        <h3>Cultura viva e dinâmica</h3>

        <p>A cultura Kalunga se manifesta de diversas formas: nas festas tradicionais como a Folia de Reis e a Festa do Divino, nas danças como a sussa, nos cantos de trabalho, na culinária baseada em produtos do Cerrado, e nos saberes sobre plantas medicinais transmitidos de geração em geração.</p>

        <p>Mas longe de ser uma cultura estática, presa ao passado, a cultura Kalunga é dinâmica e se renova constantemente. Os jovens do território têm se apropriado de novas tecnologias e linguagens para contar suas histórias, como a comunicação popular, a fotografia e o audiovisual.</p>

        <h3>Desafios e resistência</h3>

        <p>Apesar do reconhecimento oficial, o Território Kalunga enfrenta diversos desafios. A regularização fundiária ainda é uma luta constante, com conflitos territoriais e pressões de fazendeiros e grileiros. O acesso a serviços básicos como saúde, educação e infraestrutura também é limitado em muitas comunidades.</p>

        <p>No entanto, a resistência é uma marca do povo Kalunga. Organizados em associações comunitárias e movimentos sociais, eles lutam por seus direitos, pela preservação de seu território e de sua cultura. "Resistir é existir", afirma João, liderança comunitária. "Cada dia que acordamos nessa terra, honrando nossos antepassados e cuidando do Cerrado, é um ato de resistência."</p>

        <h3>Futuro com raízes</h3>

        <p>O futuro do Território Kalunga está sendo construído com base em suas raízes culturais. Projetos de turismo comunitário, agricultura sustentável, preservação ambiental e comunicação popular têm fortalecido a autonomia das comunidades e gerado renda sem comprometer a identidade cultural e a relação com o território.</p>

        <p>A Rede Kalunga Comunicações é parte dessa estratégia de fortalecimento, atuando para que as vozes do território sejam ouvidas e suas histórias sejam contadas a partir de suas próprias perspectivas. Afinal, como diz o provérbio africano que ecoa no Território Kalunga: "Enquanto os leões não tiverem seus próprios historiadores, as histórias de caça continuarão glorificando o caçador."</p>
      `,
    },
    '2': {
      titulo: 'Cerrado: o berço das águas precisa de proteção',
      resumo: 'A importância ecológica do Cerrado brasileiro e os desafios urgentes de preservação.',
      imagem: 'https://images.unsplash.com/photo-1701890013861-a6ec62094c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBsYW5kc2NhcGUlMjBuYXR1cmUlMjBjZXJyYWRvfGVufDF8fHx8MTc3MDA3NTI2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      autor: 'João Pereira',
      data: '25 de Janeiro, 2026',
      categoria: 'Meio Ambiente',
      conteudo: `
        <p>O Cerrado brasileiro, segunda maior formação vegetal do país, é muito mais do que savana tropical. Conhecido como "berço das águas", este bioma alimenta as principais bacias hidrográficas do Brasil e da América do Sul, sendo fundamental para a segurança hídrica de todo o continente.</p>

        <p>Com uma área original de aproximadamente 2 milhões de km², o Cerrado já perdeu mais de 50% de sua cobertura vegetal nativa. Na Chapada dos Veadeiros, região de nascentes e recarga de aquíferos, a pressão sobre o bioma tem se intensificado, tornando urgente a necessidade de ações de conservação.</p>

        <h3>Biodiversidade única</h3>

        <p>O Cerrado abriga cerca de 5% de toda a biodiversidade mundial, com mais de 12 mil espécies de plantas, sendo 4.400 endêmicas. A fauna inclui mamíferos ameaçados como o lobo-guará, a onça-pintada e o tamanduá-bandeira, além de centenas de espécies de aves e répteis.</p>

        <p>"Cada planta do Cerrado tem sua função", explica dona Ana, conhecedora de plantas medicinais da comunidade Kalunga. "O que parece seco e torto por fora, tem raízes profundas que buscam água e mantêm tudo vivo, mesmo na seca."</p>

        <h3>O papel das comunidades tradicionais</h3>

        <p>As comunidades quilombolas, indígenas e tradicionais do Cerrado são guardiãs fundamentais deste bioma. Seus saberes ecológicos tradicionais sobre manejo do fogo, uso sustentável de recursos naturais e conservação da agrobiodiversidade são essenciais para a preservação.</p>

        <p>Estudos científicos têm comprovado que territórios tradicionais conservam mais vegetação nativa do que áreas não protegidas, demonstrando a eficácia das práticas de manejo comunitário.</p>
      `,
    },
  };

  const materia = materias[id as keyof typeof materias] || materias['1'];

  const outrasMateria = [
    {
      id: 3,
      titulo: 'Sementes crioulas: a riqueza da agrobiodiversidade',
      imagem: 'https://images.unsplash.com/photo-1763753743884-e6e1482916e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjBzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MDA3NTI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      categoria: 'Agroecologia',
    },
    {
      id: 4,
      titulo: 'Juventude quilombola e comunicação popular',
      imagem: 'https://images.unsplash.com/photo-1652811716902-8c63a4d3f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBpbmRpZ2Vub3VzJTIwY29tbXVuaWNhdGlvbiUyMGpvdXJuYWxpc218ZW58MXx8fHwxNzcwMDc1MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      categoria: 'Educação',
    },
    {
      id: 5,
      titulo: 'Música e dança: a força da cultura quilombola',
      imagem: 'https://images.unsplash.com/photo-1765850262569-6db347d596f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBtdXNpYyUyMGN1bHR1cmFsJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzcwMDc1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      categoria: 'Cultura',
    },
  ];

  return (
    <div>
      {/* Hero com imagem */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={materia.imagem}
            alt={materia.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full pb-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link to="/materias" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Matérias
            </Link>
            
            <RKCTag variant="yellow" className="mb-4">{materia.categoria}</RKCTag>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
              {materia.titulo}
            </h1>
            <p className="text-xl text-white/90 mb-6 leading-relaxed max-w-2xl">
              {materia.resumo}
            </p>
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{materia.autor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{materia.data}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <article className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div 
              className="article-content text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: materia.conteudo }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
              }}
            />
          </div>

          {/* Compartilhar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h3 className="font-bold text-lg text-[#2E2E2E]">Compartilhe esta matéria</h3>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-[#0F7A3E] hover:bg-[#0d6633] transition-colors flex items-center justify-center">
                  <Facebook className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#0F7A3E] hover:bg-[#0d6633] transition-colors flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#0F7A3E] hover:bg-[#0d6633] transition-colors flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#0F7A3E] hover:bg-[#0d6633] transition-colors flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Sobre o autor */}
          <div className="mt-12">
            <RKCCard className="bg-gradient-to-br from-[#0F7A3E]/5 to-[#2FA866]/5">
              <RKCCardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0F7A3E] to-[#2FA866] flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#2E2E2E] mb-2">
                      {materia.autor}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Jornalista comunitária da Rede Kalunga Comunicações, 
                      dedicada a contar as histórias do território quilombola 
                      e fortalecer a comunicação popular.
                    </p>
                  </div>
                </div>
              </RKCCardContent>
            </RKCCard>
          </div>
        </div>
      </article>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0F7A3E] to-[#2FA866]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Gostou desta matéria?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Assine nossa newsletter e receba mais histórias do Território Kalunga
          </p>
          <Link to="/newsletter">
            <RKCButton variant="accent" size="lg">
              Assinar Newsletter
            </RKCButton>
          </Link>
        </div>
      </section>

      {/* Outras Matérias */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2E2E2E] mb-8">
            Leia também
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outrasMateria.map((outra) => (
              <Link key={outra.id} to={`/materias/${outra.id}`}>
                <RKCCard className="h-full hover:scale-[1.02] transition-transform">
                  <RKCCardImage src={outra.imagem} alt={outra.titulo} />
                  <RKCCardContent>
                    <RKCTag variant="green" className="mb-3">{outra.categoria}</RKCTag>
                    <h3 className="font-bold text-lg text-[#2E2E2E]">
                      {outra.titulo}
                    </h3>
                  </RKCCardContent>
                </RKCCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Estilos inline para o conteúdo da matéria */}
      <style>{`
        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0F7A3E;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .article-content p {
          margin-bottom: 1.5rem;
        }
        
        .article-content p:first-child::first-letter {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1;
          float: left;
          margin-right: 0.5rem;
          margin-top: 0.1rem;
          color: #0F7A3E;
        }
      `}</style>
    </div>
  );
}
