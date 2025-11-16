"use client";

import { Play, CheckCircle, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function TecnicasPage() {
  // Técnicas mockadas filtradas por rank do usuário
  const techniques = [
    {
      id: '1',
      name: 'Armbar',
      description: 'Finalização de braço a partir da guarda',
      requiredRank: 'Azul',
      mediaUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&h=300&fit=crop',
      status: 'approved', // approved, pending, not_started
      validatedBy: 'Sensei Carlos',
    },
    {
      id: '2',
      name: 'Triangle Choke',
      description: 'Estrangulamento triangular',
      requiredRank: 'Azul',
      mediaUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop',
      status: 'pending',
      validatedBy: null,
    },
    {
      id: '3',
      name: 'Kimura',
      description: 'Chave de ombro',
      requiredRank: 'Azul',
      mediaUrl: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400&h=300&fit=crop',
      status: 'not_started',
      validatedBy: null,
    },
    {
      id: '4',
      name: 'Rear Naked Choke',
      description: 'Estrangulamento pelas costas',
      requiredRank: 'Azul',
      mediaUrl: 'https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?w=400&h=300&fit=crop',
      status: 'not_started',
      validatedBy: null,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return (
          <Badge className="bg-green-600/20 text-green-500 border-green-600/30">
            <CheckCircle className="w-3 h-3 mr-1" />
            Validada
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-yellow-600/20 text-yellow-500 border-yellow-600/30">
            <Clock className="w-3 h-3 mr-1" />
            Pendente
          </Badge>
        );
      default:
        return (
          <Badge variant="outline" className="border-gray-700 text-gray-400">
            Não iniciada
          </Badge>
        );
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Técnicas</h1>
        <p className="text-gray-400">Técnicas disponíveis para sua faixa (Azul)</p>
      </div>

      {/* Filtros */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        <Button
          variant="outline"
          size="sm"
          className="bg-orange-600 text-white border-orange-600 hover:bg-orange-700"
        >
          Todas
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-gray-700 text-gray-300 hover:bg-gray-800"
        >
          Validadas
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-gray-700 text-gray-300 hover:bg-gray-800"
        >
          Pendentes
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-gray-700 text-gray-300 hover:bg-gray-800"
        >
          Não Iniciadas
        </Button>
      </div>

      {/* Lista de Técnicas */}
      <div className="space-y-4">
        {techniques.map((tech) => (
          <div
            key={tech.id}
            className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-colors"
          >
            {/* Imagem/Vídeo */}
            <div className="relative h-48 bg-gray-800">
              <img
                src={tech.mediaUrl}
                alt={tech.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
              <div className="absolute top-4 right-4">
                {getStatusBadge(tech.status)}
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-4 space-y-3">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="text-gray-500">
                  Faixa mínima: <span className="text-orange-500 font-medium">{tech.requiredRank}</span>
                </div>
                {tech.validatedBy && (
                  <div className="text-gray-500">
                    Por: <span className="text-green-500 font-medium">{tech.validatedBy}</span>
                  </div>
                )}
              </div>

              {/* Ações */}
              <div className="flex gap-3">
                {tech.status === 'not_started' && (
                  <Button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                    <Send className="w-4 h-4 mr-2" />
                    Solicitar Validação
                  </Button>
                )}
                {tech.status === 'pending' && (
                  <Button
                    variant="outline"
                    className="flex-1 border-yellow-600 text-yellow-500 hover:bg-yellow-600/10"
                    disabled
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Aguardando Sensei
                  </Button>
                )}
                {tech.status === 'approved' && (
                  <Button
                    variant="outline"
                    className="flex-1 border-green-600 text-green-500 hover:bg-green-600/10"
                    disabled
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Validada
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
