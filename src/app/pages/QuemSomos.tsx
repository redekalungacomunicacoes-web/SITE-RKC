import { Link } from 'react-router-dom';
import { RKCButton } from '@/app/components/RKCButton';
import { RKCCard, RKCCardContent } from '@/app/components/RKCCard';
import { Heart, Users, Target, Megaphone, ArrowRight } from 'lucide-react';

export function QuemSomos() {
  const valores = [
    {
      icon: Heart,
      titulo: 'Pertencimento',
      descricao: 'Enraizamento territorial e valorização da identidade quilombola',
    },
    {
      icon: Users,
      titulo: 'Comunidade',
      descricao: 'Comunicação feita pela e para as comunidades do território',
    },
    {
      icon: Target,
      titulo: 'Autonomia',
      descricao: 'Jornalismo independente e livre de interesses comerciais',
    },
    {
      icon: Megaphone,
      titulo: 'Amplificação',
      descricao: 'Dar voz e visibilidade às narrativas do território quilombola',
    },
  ];

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
            Quem Somos
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Comunicação popular que nasce do coração do Território Kalunga
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />
      </section>

      {/* Nossa História */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-8 text-center">
            Nossa História
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A Rede Kalunga Comunicações (RKC) nasceu em 2020 como uma resposta à necessidade 
              de dar voz e visibilidade às histórias, saberes e lutas das comunidades quilombolas 
              da Chapada dos Veadeiros e do Território Kalunga.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Somos uma mídia independente, criada e gerida por comunicadores populares, 
              jornalistas comunitários e lideranças territoriais comprometidas com a valorização 
              da cultura quilombola, a defesa dos direitos das comunidades tradicionais e a 
              promoção do jornalismo ético e independente.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nosso trabalho se fundamenta na comunicação popular, entendendo que as próprias 
              comunidades devem ser protagonistas de suas narrativas. Através de matérias, 
              reportagens, projetos culturais e formativos, buscamos amplificar as vozes que 
              historicamente foram silenciadas ou distorcidas pela mídia tradicional.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-12 text-center">
            Nossos Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <RKCCard key={index} className="text-center">
                  <RKCCardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0F7A3E] to-[#2FA866] flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2E2E2E] mb-3">
                      {valor.titulo}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {valor.descricao}
                    </p>
                  </RKCCardContent>
                </RKCCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1623289784234-0670ebb4add4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlsb21ib2xhJTIwY29tbXVuaXR5JTIwYnJhemlsJTIwY3VsdHVyZXxlbnwxfHx8fDE3NzAwNzUyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Comunidade Kalunga"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Promover a comunicação popular e o jornalismo independente como ferramentas 
                de fortalecimento cultural, territorial e político das comunidades quilombolas 
                da Chapada dos Veadeiros e do Território Kalunga.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Buscamos valorizar os saberes tradicionais, a cultura e a identidade quilombola, 
                além de contribuir para a formação de comunicadores comunitários e a construção 
                de narrativas autônomas e contra-hegemônicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Território Kalunga */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#7A3E1D]/5 to-[#F2B705]/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-8 text-center">
            O Território Kalunga
          </h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              O Território Kalunga é o maior sítio quilombola do Brasil, reconhecido como 
              Patrimônio Cultural Brasileiro. Localizado na Chapada dos Veadeiros, em Goiás, 
              abrange os municípios de Cavalcante, Teresina de Goiás e Monte Alegre de Goiás.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Com mais de 300 anos de história, as comunidades Kalunga preservam tradições 
              ancestrais, práticas culturais, saberes tradicionais e uma relação profunda 
              com o território e o Cerrado. São cerca de 8 mil pessoas distribuídas em 
              dezenas de comunidades.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              A RKC atua neste território promovendo a comunicação que respeita, valoriza 
              e amplifica as vozes dessas comunidades, contribuindo para a preservação 
              cultural e o fortalecimento da identidade quilombola.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-6">
            Faça parte dessa história
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Conheça nossos projetos, leia nossas matérias e entre em contato para colaborar 
            com a comunicação popular quilombola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projetos">
              <RKCButton size="lg">
                Ver Projetos
                <ArrowRight className="w-5 h-5" />
              </RKCButton>
            </Link>
            <Link to="/contato">
              <RKCButton variant="outline" size="lg">
                Entre em Contato
              </RKCButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
