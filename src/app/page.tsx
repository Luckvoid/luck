"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Lock, Mail, Sparkles, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de login
    setTimeout(() => {
      console.log('Login:', { email, password });
      setIsLoading(false);
      // Redireciona para o dashboard
      router.push('/dashboard');
    }, 1500);
  };

  const handleSignup = () => {
    // Simulação de cadastro - redireciona direto para dashboard
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white flex flex-col relative overflow-hidden">
      {/* Padrão de fundo animado - Tatame */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full animate-pulse" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px)`
        }}></div>
      </div>

      {/* Efeito de brilho sutil no fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Símbolo japonês de "道" (Dō - Caminho) - canto superior direito com animação */}
      <div className="absolute top-8 right-8 opacity-[0.08] pointer-events-none z-0 animate-pulse">
        <svg viewBox="0 0 200 200" className="w-56 h-56 sm:w-64 sm:h-64">
          <text x="50%" y="50%" fontSize="140" fill="white" textAnchor="middle" dominantBaseline="middle" fontFamily="serif" fontWeight="bold">
            道
          </text>
        </svg>
      </div>

      {/* Header aprimorado */}
      <div className="h-32 bg-gradient-to-b from-zinc-900/80 via-zinc-900/50 to-transparent backdrop-blur-sm flex items-center justify-center relative overflow-hidden z-10 border-b border-white/5">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-transparent via-white to-transparent"></div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-[0.2em] drop-shadow-2xl">道場</h1>
            <div className="w-1 h-8 bg-gradient-to-b from-transparent via-white to-transparent"></div>
          </div>
          <p className="text-xs text-gray-400 tracking-[0.3em] font-light">DOJÓ DIGITAL</p>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 relative z-10">
        <div className="w-full max-w-md space-y-8">
          {/* Logo/Título aprimorado */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-block p-5 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 mb-4 backdrop-blur-sm shadow-2xl hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 80 80" className="w-20 h-20">
                {/* Kimono aprimorado */}
                <path d="M 20 15 L 20 50 L 25 60 L 25 70 L 30 70 L 30 60 L 40 50 L 50 60 L 50 70 L 55 70 L 55 60 L 60 50 L 60 15 Z" 
                      fill="white" stroke="white" strokeWidth="2" className="drop-shadow-lg"/>
                {/* Faixa preta com brilho */}
                <rect x="18" y="38" width="44" height="8" fill="black" className="drop-shadow-md"/>
                <rect x="18" y="38" width="44" height="2" fill="white" opacity="0.3"/>
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-wide bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              DOJÓ DIGITAL
            </h1>
            <p className="text-gray-400 text-sm sm:text-base font-light">O caminho do guerreiro começa aqui</p>
            
            {/* Badges de features */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Seguro</span>
              </div>
              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Award className="w-4 h-4" />
                <span>Certificado</span>
              </div>
              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Sparkles className="w-4 h-4" />
                <span>Moderno</span>
              </div>
            </div>
          </div>

          {/* Formulário de Login aprimorado */}
          <form onSubmit={handleLogin} className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300 font-medium text-sm">
                Email
              </Label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors duration-300" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 pr-4 py-6 bg-zinc-900/50 backdrop-blur-sm border-2 border-zinc-800 text-white placeholder:text-gray-600 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 rounded-xl hover:border-zinc-700"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300 font-medium text-sm">
                Senha
              </Label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors duration-300" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 pr-4 py-6 bg-zinc-900/50 backdrop-blur-sm border-2 border-zinc-800 text-white placeholder:text-gray-600 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 rounded-xl hover:border-zinc-700"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-white via-gray-100 to-white text-black hover:from-gray-100 hover:via-white hover:to-gray-100 font-bold py-7 text-base tracking-wider transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] rounded-xl shadow-2xl hover:shadow-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                  ENTRANDO...
                </span>
              ) : (
                'ENTRAR NO DOJÓ'
              )}
            </Button>
          </form>

          {/* Divisor aprimorado */}
          <div className="relative animate-in fade-in duration-700 delay-300">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-black text-gray-500 font-medium">OU</span>
            </div>
          </div>

          {/* Botão de Cadastro aprimorado */}
          <Button
            variant="outline"
            className="w-full border-2 border-white/20 text-white hover:bg-white hover:text-black hover:border-white py-7 font-bold tracking-wider transition-all duration-300 transform hover:scale-[1.02] rounded-xl backdrop-blur-sm bg-white/5 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
            onClick={handleSignup}
          >
            <User className="w-5 h-5 mr-2" />
            INICIAR JORNADA
          </Button>

          {/* Link de recuperação aprimorado */}
          <div className="text-center animate-in fade-in duration-700 delay-500">
            <button className="text-sm text-gray-500 hover:text-white transition-colors duration-300 font-medium hover:underline underline-offset-4">
              Esqueceu sua senha?
            </button>
          </div>
        </div>
      </div>

      {/* Footer aprimorado com frase inspiradora */}
      <div className="p-6 text-center relative z-10 border-t border-white/5 bg-gradient-to-t from-zinc-900/50 to-transparent backdrop-blur-sm">
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gray-700"></div>
            <Sparkles className="w-4 h-4 text-gray-600" />
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gray-700"></div>
          </div>
          <p className="text-gray-400 text-sm font-light italic">
            "A vitória sobre si mesmo é a maior das vitórias"
          </p>
          <p className="text-gray-600 text-xs font-light">© 2025 Dojó Digital - Plataforma de Artes Marciais</p>
        </div>
      </div>
    </div>
  );
}
