"use client";

import { useState } from 'react';
import { ArrowLeft, BookOpen, Users, Calendar, Lightbulb, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

type MartialArt = 'jiu-jitsu' | 'judo' | 'karate' | 'aikido';

interface ArtData {
  name: string;
  color: string;
  gradient: string;
  icon: string;
  foundation: string;
  founders: string[];
  timeline: { year: string; event: string }[];
  principles: string[];
  philosophy: string;
  funFacts: string[];
}

const artsData: Record<MartialArt, ArtData> = {
  'jiu-jitsu': {
    name: 'Jiu-Jitsu',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-600',
    icon: '🥋',
    foundation: 'O Jiu-Jitsu brasileiro foi desenvolvido no início do século XX pela família Gracie, adaptando técnicas do Judô japonês para criar uma arte marcial focada em combate no solo.',
    founders: ['Mitsuyo Maeda', 'Carlos Gracie', 'Hélio Gracie'],
    timeline: [
      { year: '1914', event: 'Mitsuyo Maeda chega ao Brasil' },
      { year: '1925', event: 'Carlos Gracie abre primeira academia' },
      { year: '1950', event: 'Hélio Gracie desenvolve técnicas adaptadas' },
      { year: '1993', event: 'Royce Gracie vence o UFC 1' },
      { year: '2000s', event: 'Expansão global do Jiu-Jitsu brasileiro' }
    ],
    principles: [
      'Técnica supera força bruta',
      'Controle de posição antes de submissão',
      'Eficiência de movimento',
      'Adaptação constante'
    ],
    philosophy: 'O Jiu-Jitsu ensina que um oponente menor e mais fraco pode se defender com sucesso contra um adversário maior e mais forte usando técnica, alavancagem e timing adequados.',
    funFacts: [
      'O cinturão vermelho é o mais alto grau, concedido apenas após 48 anos de prática',
      'Hélio Gracie lutou até os 43 anos de idade',
      'O Jiu-Jitsu brasileiro é considerado o esporte de crescimento mais rápido do mundo'
    ]
  },
  'judo': {
    name: 'Judô',
    color: 'red',
    gradient: 'from-red-500 to-orange-600',
    icon: '🥋',
    foundation: 'Fundado por Jigoro Kano em 1882 no Japão, o Judô foi criado como uma evolução do Jiu-Jitsu tradicional, enfatizando princípios educacionais e desenvolvimento pessoal.',
    founders: ['Jigoro Kano'],
    timeline: [
      { year: '1882', event: 'Jigoro Kano funda o Kodokan' },
      { year: '1964', event: 'Judô se torna esporte olímpico' },
      { year: '1992', event: 'Judô feminino entra nas Olimpíadas' },
      { year: '2000s', event: 'Mais de 20 milhões de praticantes no mundo' }
    ],
    principles: [
      'Máxima eficiência com mínimo esforço',
      'Benefício e prosperidade mútuos',
      'Cedendo para vencer',
      'Respeito e disciplina'
    ],
    philosophy: 'O Judô não é apenas uma arte marcial, mas um caminho para o desenvolvimento físico, mental e moral. "Jita Kyoei" (benefício mútuo) e "Seiryoku Zenyo" (máxima eficiência) são seus pilares.',
    funFacts: [
      'Judô significa "caminho suave" em japonês',
      'É praticado em mais de 200 países',
      'Jigoro Kano foi o primeiro asiático membro do Comitê Olímpico Internacional'
    ]
  },
  'karate': {
    name: 'Karatê',
    color: 'orange',
    gradient: 'from-orange-500 to-yellow-600',
    icon: '🥋',
    foundation: 'Originário de Okinawa, Japão, o Karatê combina técnicas de luta chinesas com tradições marciais locais, desenvolvendo-se como uma arte de autodefesa sem armas.',
    founders: ['Gichin Funakoshi', 'Chojun Miyagi', 'Kenwa Mabuni'],
    timeline: [
      { year: '1600s', event: 'Desenvolvimento em Okinawa' },
      { year: '1922', event: 'Gichin Funakoshi introduz Karatê no Japão' },
      { year: '1950s', event: 'Expansão internacional' },
      { year: '2020', event: 'Estreia olímpica em Tóquio' }
    ],
    principles: [
      'Kime (foco e determinação)',
      'Zanshin (estado de alerta)',
      'Kiai (grito de espírito)',
      'Dojo kun (código moral)'
    ],
    philosophy: 'O Karatê-Do é o caminho da mão vazia, buscando o aperfeiçoamento do caráter através do treinamento físico e mental. "Karate ni sente nashi" - no Karatê não existe primeiro ataque.',
    funFacts: [
      'Existem mais de 70 estilos diferentes de Karatê',
      'O kata mais antigo tem mais de 400 anos',
      'Karatê significa "mão vazia" em japonês'
    ]
  },
  'aikido': {
    name: 'Aikidô',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-600',
    icon: '🥋',
    foundation: 'Criado por Morihei Ueshiba no início do século XX, o Aikidô é uma arte marcial defensiva que busca harmonizar-se com o ataque do oponente, redirecionando sua energia.',
    founders: ['Morihei Ueshiba (O-Sensei)'],
    timeline: [
      { year: '1920s', event: 'Morihei Ueshiba desenvolve o Aikidô' },
      { year: '1942', event: 'Fundação oficial do Aikikai' },
      { year: '1960s', event: 'Expansão para o Ocidente' },
      { year: '1970s', event: 'Estabelecimento de federações internacionais' }
    ],
    principles: [
      'Ai (harmonia)',
      'Ki (energia vital)',
      'Do (caminho)',
      'Não-resistência'
    ],
    philosophy: 'O Aikidô busca a paz e harmonia, não através da vitória sobre o oponente, mas através da resolução do conflito. "Masakatsu Agatsu" - verdadeira vitória é a vitória sobre si mesmo.',
    funFacts: [
      'Não há competições no Aikidô tradicional',
      'Morihei Ueshiba praticou até os 86 anos',
      'Steven Seagal é um dos praticantes mais famosos'
    ]
  }
};

export default function EncyclopediaPage() {
  const [selectedArt, setSelectedArt] = useState<MartialArt | null>(null);

  if (selectedArt) {
    const art = artsData[selectedArt];
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white">
        {/* Padrão de fundo */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="w-full h-full animate-pulse" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px),
                             repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px)`
          }}></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="bg-zinc-900/80 backdrop-blur-sm border-b border-white/5 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedArt(null)}
                  className="hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{art.icon}</span>
                  <h1 className="text-2xl font-bold">{art.name}</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            {/* Fundação */}
            <Card className="bg-zinc-900/80 border-white/10 p-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-br from-${art.color}-500/20 to-${art.color}-600/20 rounded-xl`}>
                  <BookOpen className={`w-6 h-6 text-${art.color}-400`} />
                </div>
                <h2 className="text-2xl font-bold">Fundação</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">{art.foundation}</p>
            </Card>

            {/* Fundadores */}
            <Card className="bg-zinc-900/80 border-white/10 p-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-6 duration-700">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-br from-${art.color}-500/20 to-${art.color}-600/20 rounded-xl`}>
                  <Users className={`w-6 h-6 text-${art.color}-400`} />
                </div>
                <h2 className="text-2xl font-bold">Principais Pioneiros</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {art.founders.map((founder, index) => (
                  <div key={index} className="p-4 bg-zinc-800/50 rounded-xl">
                    <p className="font-medium">{founder}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Timeline */}
            <Card className="bg-zinc-900/80 border-white/10 p-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br from-${art.color}-500/20 to-${art.color}-600/20 rounded-xl`}>
                  <Calendar className={`w-6 h-6 text-${art.color}-400`} />
                </div>
                <h2 className="text-2xl font-bold">Linha do Tempo</h2>
              </div>
              <div className="space-y-4">
                {art.timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className={`flex-shrink-0 w-20 text-${art.color}-400 font-bold`}>
                      {item.year}
                    </div>
                    <div className="flex-1 p-4 bg-zinc-800/50 rounded-xl">
                      <p className="text-gray-300">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Princípios */}
            <Card className="bg-zinc-900/80 border-white/10 p-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-10 duration-700">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-br from-${art.color}-500/20 to-${art.color}-600/20 rounded-xl`}>
                  <Lightbulb className={`w-6 h-6 text-${art.color}-400`} />
                </div>
                <h2 className="text-2xl font-bold">Princípios Técnicos</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {art.principles.map((principle, index) => (
                  <div key={index} className="p-4 bg-zinc-800/50 rounded-xl flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-${art.color}-400`}></div>
                    <p className="text-gray-300">{principle}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Filosofia */}
            <Card className="bg-zinc-900/80 border-white/10 p-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-12 duration-700">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-br from-${art.color}-500/20 to-${art.color}-600/20 rounded-xl`}>
                  <Sparkles className={`w-6 h-6 text-${art.color}-400`} />
                </div>
                <h2 className="text-2xl font-bold">Filosofia</h2>
              </div>
              <p className="text-gray-300 leading-relaxed italic">{art.philosophy}</p>
            </Card>

            {/* Curiosidades */}
            <Card className="bg-zinc-900/80 border-white/10 p-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-14 duration-700">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-br from-${art.color}-500/20 to-${art.color}-600/20 rounded-xl`}>
                  <Sparkles className={`w-6 h-6 text-${art.color}-400`} />
                </div>
                <h2 className="text-2xl font-bold">Curiosidades</h2>
              </div>
              <div className="space-y-3">
                {art.funFacts.map((fact, index) => (
                  <div key={index} className="p-4 bg-zinc-800/50 rounded-xl flex items-start gap-3">
                    <span className={`text-${art.color}-400 font-bold`}>•</span>
                    <p className="text-gray-300">{fact}</p>
                  </div>
                ))}
              </div>
            </Card>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white">
      {/* Padrão de fundo */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full animate-pulse" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px)`
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-zinc-900/80 backdrop-blur-sm border-b border-white/5 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8" />
                <h1 className="text-2xl font-bold">Enciclopédia Marcial</h1>
              </div>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="hover:bg-white/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Explore a História das Artes Marciais
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Descubra a origem, filosofia e evolução das principais artes marciais do mundo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(Object.keys(artsData) as MartialArt[]).map((artKey, index) => {
              const art = artsData[artKey];
              return (
                <Card
                  key={artKey}
                  onClick={() => setSelectedArt(artKey)}
                  className="bg-zinc-900/80 border-white/10 p-6 backdrop-blur-sm cursor-pointer hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom-6"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`w-full aspect-square bg-gradient-to-br ${art.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                    <span className="text-6xl">{art.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{art.name}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{art.foundation}</p>
                  <Button className="w-full mt-4 bg-white/10 hover:bg-white hover:text-black transition-all">
                    Explorar
                  </Button>
                </Card>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
