"use client";

import { useState } from 'react';
import { MapPin, Filter, Swords, User, Award, Calendar, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';

export default function DueloPage() {
  const [radius, setRadius] = useState([10]);

  // Oponentes mockados (filtrados por raio, faixa, idade)
  const opponents = [
    {
      id: '1',
      name: 'Pedro Santos',
      age: 26,
      rank: 'Azul',
      martialArt: 'Jiu-Jitsu',
      distance: 3.2,
      wins: 8,
      losses: 2,
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop',
    },
    {
      id: '2',
      name: 'Lucas Oliveira',
      age: 24,
      rank: 'Azul',
      martialArt: 'Jiu-Jitsu',
      distance: 5.8,
      wins: 5,
      losses: 3,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    {
      id: '3',
      name: 'Rafael Costa',
      age: 27,
      rank: 'Azul',
      martialArt: 'Jiu-Jitsu',
      distance: 7.5,
      wins: 12,
      losses: 1,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
  ];

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Swords className="w-8 h-8 text-orange-500" />
          Encontrar Duelo
        </h1>
        <p className="text-gray-400">Encontre oponentes compatíveis para treinar</p>
      </div>

      {/* Filtros */}
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 space-y-6">
        <div className="flex items-center gap-2 text-white font-semibold">
          <Filter className="w-5 h-5 text-orange-500" />
          Filtros de Busca
        </div>

        {/* Raio de busca */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-400">Raio de busca</label>
            <span className="text-white font-semibold">{radius[0]} km</span>
          </div>
          <Slider
            value={radius}
            onValueChange={setRadius}
            max={50}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        {/* Critérios automáticos */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
            <p className="text-xs text-gray-400 mb-1">Faixa</p>
            <p className="text-white font-semibold">Azul</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
            <p className="text-xs text-gray-400 mb-1">Idade</p>
            <p className="text-white font-semibold">22-28 anos</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
            <p className="text-xs text-gray-400 mb-1">Arte Marcial</p>
            <p className="text-white font-semibold">Jiu-Jitsu</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
            <p className="text-xs text-gray-400 mb-1">Disponíveis</p>
            <p className="text-white font-semibold">{opponents.length}</p>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
          <MapPin className="w-4 h-4 mr-2" />
          Atualizar Localização
        </Button>
      </div>

      {/* Lista de Oponentes */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Oponentes Disponíveis ({opponents.length})</h2>

        {opponents.map((opponent) => (
          <div
            key={opponent.id}
            className="bg-gray-900 rounded-xl border border-gray-800 p-5 hover:border-gray-700 transition-colors"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <img
                src={opponent.avatar}
                alt={opponent.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-orange-600"
              />

              {/* Informações */}
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{opponent.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Award className="w-4 h-4" />
                    <span>Faixa {opponent.rank} • {opponent.martialArt}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400">{opponent.age} anos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400">{opponent.distance} km</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 font-semibold">{opponent.wins}V</span>
                    <span className="text-gray-600">-</span>
                    <span className="text-red-500 font-semibold">{opponent.losses}D</span>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-600/20 text-green-500 border-green-600/30">
                    Disponível
                  </Badge>
                  <Badge variant="outline" className="border-gray-700 text-gray-400">
                    Mesmo nível
                  </Badge>
                </div>

                {/* Ações */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                    <Send className="w-4 h-4 mr-2" />
                    Solicitar Duelo
                  </Button>
                  <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    <User className="w-4 h-4 mr-2" />
                    Ver Perfil
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Aviso importante */}
      <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-4">
        <p className="text-sm text-yellow-500">
          <strong>Importante:</strong> Todos os duelos precisam de autorização do seu sensei antes de serem confirmados.
        </p>
      </div>
    </div>
  );
}
