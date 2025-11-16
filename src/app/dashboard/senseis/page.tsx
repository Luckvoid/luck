"use client";

import { Shield, CheckCircle, XCircle, Clock, User, Swords } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function SenseisPage() {
  // Solicitações de validação de técnicas
  const practiceRequests = [
    {
      id: '1',
      studentName: 'João Silva',
      studentCode: 'AKD5-J9L2-2025',
      technique: 'Triangle Choke',
      requestedAt: '2h atrás',
      evidenceUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop',
      status: 'pending',
    },
    {
      id: '2',
      studentName: 'Maria Santos',
      studentCode: 'BJJ8-K3M9-2025',
      technique: 'Armbar',
      requestedAt: '5h atrás',
      evidenceUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&h=300&fit=crop',
      status: 'pending',
    },
  ];

  // Solicitações de aprovação de duelos
  const duelApprovals = [
    {
      id: '1',
      challenger: 'João Silva',
      opponent: 'Pedro Santos',
      scheduledAt: 'Amanhã, 18:00',
      location: 'Academia Central',
      status: 'pending',
    },
    {
      id: '2',
      challenger: 'Lucas Oliveira',
      opponent: 'Rafael Costa',
      scheduledAt: 'Sexta, 19:00',
      location: 'Dojo Norte',
      status: 'pending',
    },
  ];

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Shield className="w-8 h-8 text-orange-500" />
          Painel do Sensei
        </h1>
        <p className="text-gray-400">Validações e aprovações pendentes</p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="techniques" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-900 border border-gray-800">
          <TabsTrigger
            value="techniques"
            className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
          >
            Técnicas ({practiceRequests.length})
          </TabsTrigger>
          <TabsTrigger
            value="duels"
            className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
          >
            Duelos ({duelApprovals.length})
          </TabsTrigger>
        </TabsList>

        {/* Tab: Validação de Técnicas */}
        <TabsContent value="techniques" className="space-y-4 mt-6">
          {practiceRequests.map((request) => (
            <div
              key={request.id}
              className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
            >
              {/* Evidência (vídeo/imagem) */}
              <div className="relative h-48 bg-gray-800">
                <img
                  src={request.evidenceUrl}
                  alt={request.technique}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-yellow-600/20 text-yellow-500 border-yellow-600/30">
                  <Clock className="w-3 h-3 mr-1" />
                  Pendente
                </Badge>
              </div>

              {/* Informações */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{request.technique}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{request.studentName}</span>
                    </div>
                    <div className="text-gray-600">•</div>
                    <span className="font-mono text-orange-500">{request.studentCode}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Solicitado {request.requestedAt}</p>
                </div>

                {/* Ações */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Aprovar
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-red-600 text-red-500 hover:bg-red-600/10"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Rejeitar
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {practiceRequests.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Shield className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Nenhuma solicitação de validação pendente</p>
            </div>
          )}
        </TabsContent>

        {/* Tab: Aprovação de Duelos */}
        <TabsContent value="duels" className="space-y-4 mt-6">
          {duelApprovals.map((duel) => (
            <div
              key={duel.id}
              className="bg-gray-900 rounded-xl border border-gray-800 p-5 space-y-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <Swords className="w-5 h-5 text-orange-500" />
                    Solicitação de Duelo
                  </h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-400">
                      <span className="text-white font-semibold">{duel.challenger}</span> vs{' '}
                      <span className="text-white font-semibold">{duel.opponent}</span>
                    </p>
                    <p className="text-gray-500">📅 {duel.scheduledAt}</p>
                    <p className="text-gray-500">📍 {duel.location}</p>
                  </div>
                </div>
                <Badge className="bg-yellow-600/20 text-yellow-500 border-yellow-600/30">
                  <Clock className="w-3 h-3 mr-1" />
                  Pendente
                </Badge>
              </div>

              {/* Informações adicionais */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <p className="text-xs text-gray-400 mb-2">Critérios de Segurança</p>
                <div className="flex items-center gap-4 text-sm">
                  <Badge className="bg-green-600/20 text-green-500 border-green-600/30">
                    ✓ Mesma faixa
                  </Badge>
                  <Badge className="bg-green-600/20 text-green-500 border-green-600/30">
                    ✓ Idade compatível
                  </Badge>
                  <Badge className="bg-green-600/20 text-green-500 border-green-600/30">
                    ✓ Proximidade OK
                  </Badge>
                </div>
              </div>

              {/* Ações */}
              <div className="flex gap-3">
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Aprovar Duelo
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-red-600 text-red-500 hover:bg-red-600/10"
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Negar
                </Button>
              </div>
            </div>
          ))}

          {duelApprovals.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Swords className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Nenhuma solicitação de duelo pendente</p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Estatísticas do Sensei */}
      <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-orange-600/30">
        <h3 className="text-lg font-bold text-white mb-4">Suas Estatísticas</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">24</p>
            <p className="text-sm text-gray-400">Técnicas Validadas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">12</p>
            <p className="text-sm text-gray-400">Duelos Aprovados</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">8</p>
            <p className="text-sm text-gray-400">Alunos Ativos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
