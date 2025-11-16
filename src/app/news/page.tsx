"use client";

import { useState } from 'react';
import { ArrowLeft, Newspaper, Filter, MapPin, Award, Calendar, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

type MartialArt = 'jiu-jitsu' | 'judo' | 'karate' | 'aikido' | 'all';
type Category = 'all' | 'faixa-branca' | 'faixa-azul' | 'faixa-roxa' | 'faixa-marrom' | 'faixa-preta';

interface NewsItem {
  id: number;
  title: string;
  imageUrl: string;
  art: MartialArt;
  category: Category;
  region: string;
  timestamp: Date;
  type: 'news' | 'highlight' | 'event' | 'prodigy';
  description: string;
}

const mockNews: NewsItem[] = [
  {
    id: 1,
    title: 'Campeonato Mundial de Jiu-Jitsu 2024 - Resultados',
    imageUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop',
    art: 'jiu-jitsu',
    category: 'faixa-preta',
    region: 'São Paulo, Brasil',
    timestamp: new Date('2024-01-15'),
    type: 'news',
    description: 'Confira os principais destaques e resultados do maior campeonato de Jiu-Jitsu do ano.'
  },
  {
    id: 2,
    title: 'Jovem Prodígio: Maria Silva conquista ouro aos 16 anos',
    imageUrl: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&h=600&fit=crop',
    art: 'judo',
    category: 'faixa-azul',
    region: 'Rio de Janeiro, Brasil',
    timestamp: new Date('2024-01-14'),
    type: 'prodigy',
    description: 'Atleta de 16 anos surpreende e conquista medalha de ouro em campeonato nacional.'
  },
  {
    id: 3,
    title: 'Seminário Internacional de Karatê - Inscrições Abertas',
    imageUrl: 'https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=800&h=600&fit=crop',
    art: 'karate',
    category: 'all',
    region: 'Curitiba, Brasil',
    timestamp: new Date('2024-02-01'),
    type: 'event',
    description: 'Mestres internacionais reunidos para compartilhar conhecimento. Vagas limitadas!'
  },
  {
    id: 4,
    title: 'Aikidô: A Arte da Paz em tempos modernos',
    imageUrl: 'https://images.unsplash.com/photo-1540315264884-11c3f0e8b6c0?w=800&h=600&fit=crop',
    art: 'aikido',
    category: 'all',
    region: 'Nacional',
    timestamp: new Date('2024-01-13'),
    type: 'highlight',
    description: 'Como o Aikidô tem ajudado praticantes a encontrar equilíbrio e harmonia.'
  },
  {
    id: 5,
    title: 'Faixa Branca se destaca em torneio regional',
    imageUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop',
    art: 'jiu-jitsu',
    category: 'faixa-branca',
    region: 'Belo Horizonte, Brasil',
    timestamp: new Date('2024-01-12'),
    type: 'highlight',
    description: 'Iniciante surpreende veteranos com técnica apurada e determinação.'
  },
  {
    id: 6,
    title: 'Copa Pan-Americana de Judô 2024 - Calendário',
    imageUrl: 'https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=800&h=600&fit=crop',
    art: 'judo',
    category: 'faixa-preta',
    region: 'Buenos Aires, Argentina',
    timestamp: new Date('2024-03-15'),
    type: 'event',
    description: 'Confira as datas e locais dos principais eventos da temporada 2024.'
  }
];

export default function NewsPage() {
  const [selectedArt, setSelectedArt] = useState<MartialArt>('all');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredNews = mockNews.filter(news => {
    const artMatch = selectedArt === 'all' || news.art === selectedArt;
    const categoryMatch = selectedCategory === 'all' || news.category === selectedCategory;
    return artMatch && categoryMatch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'news': return 'blue';
      case 'highlight': return 'yellow';
      case 'event': return 'green';
      case 'prodigy': return 'purple';
      default: return 'gray';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'news': return 'Notícia';
      case 'highlight': return 'Destaque';
      case 'event': return 'Evento';
      case 'prodigy': return 'Prodígio';
      default: return 'Geral';
    }
  };

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
                <Newspaper className="w-8 h-8" />
                <h1 className="text-2xl font-bold">Notícias e Destaques</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="hover:bg-white/10"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm" className="hover:bg-white/10">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </div>
            </div>

            {/* Filtros */}
            {showFilters && (
              <div className="mt-4 p-4 bg-zinc-800/50 rounded-xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                {/* Filtro de Arte Marcial */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Arte Marcial</label>
                  <div className="flex flex-wrap gap-2">
                    {['all', 'jiu-jitsu', 'judo', 'karate', 'aikido'].map((art) => (
                      <Button
                        key={art}
                        size="sm"
                        variant={selectedArt === art ? 'default' : 'outline'}
                        onClick={() => setSelectedArt(art as MartialArt)}
                        className={selectedArt === art ? 'bg-white text-black' : 'border-white/20 hover:bg-white/10'}
                      >
                        {art === 'all' ? 'Todas' : art.charAt(0).toUpperCase() + art.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Filtro de Categoria */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Categoria</label>
                  <div className="flex flex-wrap gap-2">
                    {['all', 'faixa-branca', 'faixa-azul', 'faixa-roxa', 'faixa-marrom', 'faixa-preta'].map((cat) => (
                      <Button
                        key={cat}
                        size="sm"
                        variant={selectedCategory === cat ? 'default' : 'outline'}
                        onClick={() => setSelectedCategory(cat as Category)}
                        className={selectedCategory === cat ? 'bg-white text-black' : 'border-white/20 hover:bg-white/10'}
                      >
                        {cat === 'all' ? 'Todas' : cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Card className="bg-zinc-900/80 border-white/10 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-2xl font-bold">{filteredNews.length}</p>
                  <p className="text-xs text-gray-400">Notícias</p>
                </div>
              </div>
            </Card>
            <Card className="bg-zinc-900/80 border-white/10 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-2xl font-bold">{filteredNews.filter(n => n.type === 'highlight').length}</p>
                  <p className="text-xs text-gray-400">Destaques</p>
                </div>
              </div>
            </Card>
            <Card className="bg-zinc-900/80 border-white/10 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-2xl font-bold">{filteredNews.filter(n => n.type === 'event').length}</p>
                  <p className="text-xs text-gray-400">Eventos</p>
                </div>
              </div>
            </Card>
            <Card className="bg-zinc-900/80 border-white/10 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-2xl font-bold">{filteredNews.filter(n => n.type === 'prodigy').length}</p>
                  <p className="text-xs text-gray-400">Prodígios</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* News Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news, index) => (
              <Card
                key={news.id}
                className="bg-zinc-900/80 border-white/10 backdrop-blur-sm overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-bottom-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Imagem */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${getTypeColor(news.type)}-500/90 text-white`}>
                      {getTypeLabel(news.type)}
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-lg line-clamp-2">{news.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{news.description}</p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{news.region}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{news.timestamp.toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-zinc-800 rounded text-xs">
                      {news.art.charAt(0).toUpperCase() + news.art.slice(1)}
                    </span>
                    {news.category !== 'all' && (
                      <span className="px-2 py-1 bg-zinc-800 rounded text-xs">
                        {news.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                      </span>
                    )}
                  </div>

                  <Button className="w-full bg-white/10 hover:bg-white hover:text-black transition-all">
                    Ler mais
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">Nenhuma notícia encontrada com os filtros selecionados.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
