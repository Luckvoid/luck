"use client";

import { useState } from 'react';
import { 
  User, 
  Award, 
  Calendar, 
  TrendingUp, 
  Target, 
  Clock, 
  LogOut,
  Menu,
  X,
  Flame,
  Trophy,
  Activity,
  BookOpen,
  Users,
  Settings,
  Newspaper,
  Swords,
  GraduationCap,
  MessageSquare,
  Building2,
  UserCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function DashboardPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Dados simulados do usuário
  const userData = {
    name: "João Silva",
    studentCode: "ALU-2024-001",
    academyCode: "ACD-SP-042",
    academyName: "Academia Bushido São Paulo",
    sensei: "Sensei Takeshi Yamamoto",
    belt: "Faixa Roxa",
    level: 12,
    xp: 2450,
    nextLevelXp: 3000,
    streak: 7,
    totalTrainings: 48,
    totalHours: 96
  };

  const recentActivities = [
    { id: 1, type: "Treino", name: "Kata Básico", date: "Hoje", xp: 50 },
    { id: 2, type: "Treino", name: "Kumite Avançado", date: "Ontem", xp: 75 },
    { id: 3, type: "Conquista", name: "7 dias seguidos", date: "Hoje", xp: 100 },
  ];

  const upcomingClasses = [
    { id: 1, name: "Karate Avançado", time: "18:00", instructor: "Sensei Tanaka" },
    { id: 2, name: "Defesa Pessoal", time: "19:30", instructor: "Sensei Yamamoto" },
  ];

  // Ícones principais do dashboard com paleta harmônica
  const mainFeatures = [
    {
      id: 1,
      title: "Treinos",
      description: "Acesse seus treinos e exercícios",
      icon: Activity,
      color: "from-emerald-500 to-teal-600",
      shadowColor: "shadow-emerald-500/20",
      href: "/training"
    },
    {
      id: 2,
      title: "Duelos",
      description: "Desafie outros atletas",
      icon: Swords,
      color: "from-purple-500 to-violet-600",
      shadowColor: "shadow-purple-500/20",
      href: "/duels"
    },
    {
      id: 3,
      title: "Promoções",
      description: "Acompanhe seu progresso de faixa",
      icon: GraduationCap,
      color: "from-amber-500 to-orange-600",
      shadowColor: "shadow-amber-500/20",
      href: "/promotions"
    },
    {
      id: 4,
      title: "Comunidade",
      description: "Conecte-se com outros praticantes",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      shadowColor: "shadow-blue-500/20",
      href: "/community"
    },
    {
      id: 5,
      title: "Enciclopédia",
      description: "História das artes marciais",
      icon: BookOpen,
      color: "from-sky-500 to-cyan-600",
      shadowColor: "shadow-sky-500/20",
      href: "/encyclopedia"
    },
    {
      id: 6,
      title: "Notícias",
      description: "Destaques do mundo marcial",
      icon: Newspaper,
      color: "from-teal-500 to-emerald-600",
      shadowColor: "shadow-teal-500/20",
      href: "/news"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Padrão de fundo animado - Tatame */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full animate-pulse" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px)`
        }}></div>
      </div>

      {/* Navbar */}
      <nav className="bg-slate-900/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold tracking-wider bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">道場</div>
              <span className="text-sm font-bold tracking-[0.3em] text-emerald-400 hidden sm:block">DOJÓ DIGITAL</span>
            </div>

            {/* User Info - Desktop */}
            <div className="hidden lg:flex items-center gap-4 mr-6">
              <div className="text-right">
                <div className="flex items-center gap-2 justify-end">
                  <span className="text-lg font-bold text-white">{userData.name}</span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/30">
                    {userData.studentCode}
                  </span>
                </div>
                {userData.academyName && (
                  <div className="flex items-center gap-2 justify-end mt-1">
                    <Building2 className="w-3 h-3 text-purple-400" />
                    <span className="text-xs text-purple-400 font-semibold">{userData.academyName}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <UserCircle className="w-3 h-3 text-blue-400" />
                    <span className="text-xs text-blue-400 font-medium">{userData.sensei}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/dashboard" className="text-white font-semibold flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Activity className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
              <Link href="/encyclopedia" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 font-medium">
                <BookOpen className="w-4 h-4" />
                <span>Enciclopédia</span>
              </Link>
              <Link href="/news" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 font-medium">
                <Newspaper className="w-4 h-4" />
                <span>Notícias</span>
              </Link>
              <button className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 font-medium">
                <Settings className="w-4 h-4" />
                <span>Configurações</span>
              </button>
              <Button
                variant="outline"
                size="sm"
                className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all font-semibold"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              {/* User Info Mobile */}
              <div className="mb-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-white">{userData.name}</span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/30">
                    {userData.studentCode}
                  </span>
                </div>
                {userData.academyName && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3 h-3 text-purple-400" />
                      <span className="text-xs text-purple-400 font-semibold">{userData.academyName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCircle className="w-3 h-3 text-blue-400" />
                      <span className="text-xs text-blue-400 font-medium">{userData.sensei}</span>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/dashboard" className="w-full text-left px-4 py-2 rounded-lg bg-emerald-500/20 transition-colors flex items-center gap-2 font-semibold">
                <Activity className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
              <Link href="/encyclopedia" className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 font-medium">
                <BookOpen className="w-4 h-4" />
                <span>Enciclopédia</span>
              </Link>
              <Link href="/news" className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 font-medium">
                <Newspaper className="w-4 h-4" />
                <span>Notícias</span>
              </Link>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 font-medium">
                <Settings className="w-4 h-4" />
                <span>Configurações</span>
              </button>
              <Button
                variant="outline"
                className="w-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header do Dashboard */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
            Bem-vindo de volta, {userData.name}!
          </h1>
          <p className="text-gray-400 text-lg">Continue sua jornada no caminho do guerreiro</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          {/* Card 1 - Nível */}
          <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-emerald-500/20 p-6 backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-xl shadow-lg shadow-emerald-500/20">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-3xl font-bold text-emerald-400">{userData.level}</span>
            </div>
            <h3 className="text-gray-300 text-sm font-semibold mb-1">NÍVEL ATUAL</h3>
            <p className="text-xs text-emerald-400 font-medium">{userData.belt}</p>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-400 mb-1 font-medium">
                <span>XP</span>
                <span className="text-emerald-400">{userData.xp}/{userData.nextLevelXp}</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2.5 rounded-full transition-all duration-500 shadow-lg shadow-emerald-500/50"
                  style={{ width: `${(userData.xp / userData.nextLevelXp) * 100}%` }}
                ></div>
              </div>
            </div>
          </Card>

          {/* Card 2 - Sequência */}
          <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-purple-500/20 p-6 backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-xl shadow-lg shadow-purple-500/20">
                <Flame className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-3xl font-bold text-purple-400">{userData.streak}</span>
            </div>
            <h3 className="text-gray-300 text-sm font-semibold mb-1">DIAS SEGUIDOS</h3>
            <p className="text-xs text-purple-400 font-medium">Continue assim!</p>
          </Card>

          {/* Card 3 - Treinos */}
          <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-amber-500/20 p-6 backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-xl shadow-lg shadow-amber-500/20">
                <Target className="w-6 h-6 text-amber-400" />
              </div>
              <span className="text-3xl font-bold text-amber-400">{userData.totalTrainings}</span>
            </div>
            <h3 className="text-gray-300 text-sm font-semibold mb-1">TREINOS COMPLETOS</h3>
            <p className="text-xs text-amber-400 font-medium">Total acumulado</p>
          </Card>

          {/* Card 4 - Horas */}
          <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-blue-500/20 p-6 backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-xl shadow-lg shadow-blue-500/20">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-3xl font-bold text-blue-400">{userData.totalHours}h</span>
            </div>
            <h3 className="text-gray-300 text-sm font-semibold mb-1">HORAS DE TREINO</h3>
            <p className="text-xs text-blue-400 font-medium">Tempo investido</p>
          </Card>
        </div>

        {/* Ícones Principais - Grid de 6 */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Acesso Rápido</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.id} href={feature.href}>
                  <Card 
                    className={`bg-slate-900/90 border-white/10 p-6 backdrop-blur-sm hover:scale-105 hover:border-white/30 transition-all duration-300 cursor-pointer h-full animate-in fade-in slide-in-from-bottom-10 hover:shadow-2xl ${feature.shadowColor}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-full aspect-square bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-3 shadow-xl ${feature.shadowColor}`}>
                      <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                    <h3 className="font-bold text-base mb-1 text-white">{feature.title}</h3>
                    <p className="text-xs text-gray-400 line-clamp-2">{feature.description}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Grid de Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
          {/* Atividades Recentes */}
          <Card className="lg:col-span-2 bg-slate-900/90 border-white/10 p-6 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
                Atividades Recentes
              </h2>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div 
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-all hover:shadow-lg border border-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg shadow-lg ${
                      activity.type === 'Treino' 
                        ? 'bg-emerald-500/20 shadow-emerald-500/20' 
                        : 'bg-amber-500/20 shadow-amber-500/20'
                    }`}>
                      {activity.type === 'Treino' ? (
                        <Activity className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Trophy className="w-5 h-5 text-amber-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{activity.name}</h3>
                      <p className="text-sm text-gray-400">{activity.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-bold text-lg">+{activity.xp} XP</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Próximas Aulas */}
          <Card className="bg-slate-900/90 border-white/10 p-6 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                <Calendar className="w-6 h-6 text-sky-400" />
                Próximas Aulas
              </h2>
            </div>
            <div className="space-y-4">
              {upcomingClasses.map((classItem) => (
                <div 
                  key={classItem.id}
                  className="p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-all border border-white/5 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-white">{classItem.name}</h3>
                    <span className="text-sm text-sky-400 font-bold">{classItem.time}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{classItem.instructor}</p>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold shadow-lg shadow-sky-500/20 transition-all"
                  >
                    Participar
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
