"use client";

import { User, Mail, Weight, Ruler, Calendar, Activity, Award, Clock, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function PerfilPage() {
  const [copied, setCopied] = useState(false);

  // Dados mockados do usuário
  const user = {
    displayName: 'João Silva',
    email: 'joao@email.com',
    userCode: 'AKD5-J9L2-2025',
    weight: 78,
    height: 1.78,
    age: 25,
    activity: 'Treino 3x/semana',
    martialArt: 'Jiu-Jitsu',
    rank: 'Azul',
    practiceTimeMonths: 36,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(user.userCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatPracticeTime = (months: number) => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (years === 0) return `${months} meses`;
    if (remainingMonths === 0) return `${years} ${years === 1 ? 'ano' : 'anos'}`;
    return `${years} ${years === 1 ? 'ano' : 'anos'} e ${remainingMonths} ${remainingMonths === 1 ? 'mês' : 'meses'}`;
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header do Perfil */}
      <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-orange-600/30">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{user.displayName}</h1>
            <p className="text-gray-300">{user.martialArt} • Faixa {user.rank}</p>
          </div>
        </div>

        {/* Código Único */}
        <div className="bg-black/30 rounded-lg p-4 border border-orange-600/50">
          <p className="text-xs text-gray-400 mb-2">Seu Código Único</p>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-mono font-bold text-orange-500">{user.userCode}</p>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCopyCode}
              className="text-orange-500 hover:text-orange-400 hover:bg-orange-600/20"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Informações Pessoais */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Informações Pessoais</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5 text-orange-500" />
              <p className="text-sm text-gray-400">Email</p>
            </div>
            <p className="text-white font-medium">{user.email}</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-orange-500" />
              <p className="text-sm text-gray-400">Idade</p>
            </div>
            <p className="text-white font-medium">{user.age} anos</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <Weight className="w-5 h-5 text-orange-500" />
              <p className="text-sm text-gray-400">Peso</p>
            </div>
            <p className="text-white font-medium">{user.weight} kg</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <Ruler className="w-5 h-5 text-orange-500" />
              <p className="text-sm text-gray-400">Altura</p>
            </div>
            <p className="text-white font-medium">{user.height} m</p>
          </div>
        </div>
      </div>

      {/* Informações de Treino */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Treino e Prática</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-5 h-5 text-orange-500" />
              <p className="text-sm text-gray-400">Atividade</p>
            </div>
            <p className="text-white font-medium">{user.activity}</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-5 h-5 text-orange-500" />
              <p className="text-sm text-gray-400">Arte Marcial</p>
            </div>
            <p className="text-white font-medium">{user.martialArt}</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-5 h-5 text-orange-500" />
              <p className="text-sm text-gray-400">Faixa Atual</p>
            </div>
            <p className="text-white font-medium">Faixa {user.rank}</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <p className="text-sm text-gray-400">Tempo de Prática</p>
            </div>
            <p className="text-white font-medium">{formatPracticeTime(user.practiceTimeMonths)}</p>
          </div>
        </div>
      </div>

      {/* Botão de Editar */}
      <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-6">
        Editar Perfil
      </Button>
    </div>
  );
}
