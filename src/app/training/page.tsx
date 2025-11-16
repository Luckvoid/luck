"use client";

import { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Plus, 
  Trash2, 
  Bell,
  ChevronLeft,
  ChevronRight,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

interface Training {
  id: string;
  day: string;
  time: string;
  description: string;
  martialArt: string;
}

export default function TrainingPage() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [description, setDescription] = useState('');
  const [selectedMartialArt, setSelectedMartialArt] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const martialArts = ['Jiu-Jitsu', 'Judô', 'Karatê', 'Aikidô'];

  // Carregar treinos do localStorage
  useEffect(() => {
    const savedTrainings = localStorage.getItem('trainings');
    if (savedTrainings) {
      setTrainings(JSON.parse(savedTrainings));
    }
  }, []);

  // Salvar treinos no localStorage
  useEffect(() => {
    if (trainings.length > 0) {
      localStorage.setItem('trainings', JSON.stringify(trainings));
    }
  }, [trainings]);

  // Verificar e emitir alertas
  useEffect(() => {
    const checkTrainings = () => {
      const now = new Date();
      const currentDay = daysOfWeek[now.getDay()];
      const currentTime = now.getHours();

      trainings.forEach((training) => {
        const trainingHour = parseInt(training.time.split(':')[0]);
        
        // Alerta 1 hora antes
        if (training.day === currentDay && trainingHour - currentTime === 1) {
          if (Notification.permission === 'granted') {
            new Notification('🥋 Treino em 1 hora!', {
              body: `Temos treino de ${training.martialArt} hoje às ${training.time}. ${training.description}`,
              icon: '/icon.svg'
            });
          }
        }

        // Alerta na hora
        if (training.day === currentDay && trainingHour === currentTime && now.getMinutes() === 0) {
          if (Notification.permission === 'granted') {
            new Notification('🥋 Hora do Treino!', {
              body: `Temos treino de ${training.martialArt} agora às ${training.time}. ${training.description}`,
              icon: '/icon.svg'
            });
          }
        }
      });
    };

    // Solicitar permissão de notificação
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }

    // Verificar a cada minuto
    const interval = setInterval(checkTrainings, 60000);
    checkTrainings(); // Verificar imediatamente

    return () => clearInterval(interval);
  }, [trainings]);

  const handleAddTraining = () => {
    if (selectedDay && selectedTime && selectedMartialArt) {
      const newTraining: Training = {
        id: Date.now().toString(),
        day: selectedDay,
        time: selectedTime,
        description: description || 'Treino regular',
        martialArt: selectedMartialArt
      };
      setTrainings([...trainings, newTraining]);
      setSelectedDay('');
      setSelectedTime('');
      setDescription('');
      setSelectedMartialArt('');
      setShowAddForm(false);
    }
  };

  const handleDeleteTraining = (id: string) => {
    setTrainings(trainings.filter(t => t.id !== id));
    if (trainings.length === 1) {
      localStorage.removeItem('trainings');
    }
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getTrainingsForDay = (dayNumber: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNumber);
    const dayName = daysOfWeek[date.getDay()];
    return trainings.filter(t => t.day === dayName);
  };

  const getMartialArtColor = (art: string) => {
    const colors: Record<string, string> = {
      'Jiu-Jitsu': 'from-blue-500/30 to-blue-600/30',
      'Judô': 'from-green-500/30 to-green-600/30',
      'Karatê': 'from-red-500/30 to-red-600/30',
      'Aikidô': 'from-purple-500/30 to-purple-600/30'
    };
    return colors[art] || 'from-gray-500/30 to-gray-600/30';
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

      {/* Header */}
      <div className="bg-zinc-900/80 backdrop-blur-sm border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="border-white/20">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  <Activity className="w-6 h-6" />
                  Calendário de Treinos
                </h1>
                <p className="text-sm text-gray-400">Organize sua rotina de treinos</p>
              </div>
            </div>
            <Button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Treino
            </Button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Formulário de Adicionar Treino */}
        {showAddForm && (
          <Card className="bg-zinc-900/80 border-white/10 p-6 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <h2 className="text-xl font-bold mb-4">Novo Treino</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Arte Marcial *</label>
                <select
                  value={selectedMartialArt}
                  onChange={(e) => setSelectedMartialArt(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Selecione a arte marcial</option>
                  {martialArts.map((art) => (
                    <option key={art} value={art}>{art}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Dia da Semana *</label>
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Selecione o dia</option>
                  {daysOfWeek.map((day) => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Horário *</label>
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Descrição (opcional)</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ex: Treino avançado"
                  className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleAddTraining}
                disabled={!selectedDay || !selectedTime || !selectedMartialArt}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:opacity-50"
              >
                Salvar Treino
              </Button>
              <Button
                onClick={() => setShowAddForm(false)}
                variant="outline"
                className="border-white/20"
              >
                Cancelar
              </Button>
            </div>
          </Card>
        )}

        {/* Calendário */}
        <Card className="bg-zinc-900/80 border-white/10 p-6 backdrop-blur-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="flex gap-2">
              <Button
                onClick={previousMonth}
                variant="outline"
                size="sm"
                className="border-white/20"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                onClick={nextMonth}
                variant="outline"
                size="sm"
                className="border-white/20"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Grid do Calendário */}
          <div className="grid grid-cols-7 gap-2">
            {/* Cabeçalho dos dias */}
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
              <div key={day} className="text-center text-sm font-bold text-gray-400 py-2">
                {day}
              </div>
            ))}

            {/* Dias vazios antes do início do mês */}
            {Array.from({ length: startingDayOfWeek }).map((_, index) => (
              <div key={`empty-${index}`} className="aspect-square"></div>
            ))}

            {/* Dias do mês */}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const dayNumber = index + 1;
              const dayTrainings = getTrainingsForDay(dayNumber);
              const isToday = 
                dayNumber === new Date().getDate() &&
                currentDate.getMonth() === new Date().getMonth() &&
                currentDate.getFullYear() === new Date().getFullYear();

              return (
                <div
                  key={dayNumber}
                  className={`aspect-square border border-white/10 rounded-lg p-2 hover:bg-white/5 transition-colors ${
                    isToday ? 'bg-blue-500/20 border-blue-500/50' : 'bg-zinc-800/30'
                  }`}
                >
                  <div className="text-sm font-medium mb-1">{dayNumber}</div>
                  {dayTrainings.length > 0 && (
                    <div className="space-y-1">
                      {dayTrainings.map((training) => (
                        <div
                          key={training.id}
                          className={`text-xs bg-gradient-to-r ${getMartialArtColor(training.martialArt)} rounded px-1 py-0.5 truncate`}
                          title={`${training.martialArt} - ${training.time} - ${training.description}`}
                        >
                          <Clock className="w-3 h-3 inline mr-1" />
                          {training.time}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Card>

        {/* Lista de Treinos Agendados */}
        <Card className="bg-zinc-900/80 border-white/10 p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Treinos Agendados ({trainings.length})
          </h2>
          {trainings.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <CalendarIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Nenhum treino agendado ainda.</p>
              <p className="text-sm">Clique em "Adicionar Treino" para começar!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {trainings.sort((a, b) => {
                const dayOrder = daysOfWeek.indexOf(a.day) - daysOfWeek.indexOf(b.day);
                if (dayOrder !== 0) return dayOrder;
                return a.time.localeCompare(b.time);
              }).map((training) => (
                <div
                  key={training.id}
                  className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-xl hover:bg-zinc-800 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gradient-to-br ${getMartialArtColor(training.martialArt)} rounded-xl`}>
                      <CalendarIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">{training.day}</h3>
                      <p className="text-sm text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {training.time} - {training.martialArt}
                      </p>
                      {training.description && (
                        <p className="text-xs text-gray-500 mt-1">{training.description}</p>
                      )}
                    </div>
                  </div>
                  <Button
                    onClick={() => handleDeleteTraining(training.id)}
                    variant="outline"
                    size="sm"
                    className="border-red-500/30 text-red-400 hover:bg-red-500/20"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Informação sobre Notificações */}
        {Notification.permission !== 'granted' && (
          <Card className="bg-yellow-500/10 border-yellow-500/30 p-4 mt-6 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <Bell className="w-5 h-5 text-yellow-400 mt-0.5" />
              <div>
                <h3 className="font-medium text-yellow-400 mb-1">Ative as Notificações</h3>
                <p className="text-sm text-gray-300">
                  Para receber alertas dos seus treinos, permita notificações no seu navegador.
                </p>
              </div>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
}
