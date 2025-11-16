"use client";

import { useState } from 'react';
import { Shield, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { generateUserCode } from '@/lib/utils/martial-arts';
import type { MartialArt, Rank } from '@/lib/types';

const MARTIAL_ARTS: MartialArt[] = [
  'Jiu-Jitsu',
  'Karate',
  'Taekwondo',
  'Muay Thai',
  'Judo',
  'Kung Fu',
  'Capoeira',
  'Krav Maga',
];

const RANKS: Rank[] = [
  'white',
  'yellow',
  'orange',
  'green',
  'blue',
  'purple',
  'brown',
  'black',
];

const RANK_LABELS: Record<Rank, string> = {
  white: 'Branca',
  yellow: 'Amarela',
  orange: 'Laranja',
  green: 'Verde',
  blue: 'Azul',
  purple: 'Roxa',
  brown: 'Marrom',
  black: 'Preta',
};

export default function CadastroPage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [userCode, setUserCode] = useState('');

  // Step 1: Credenciais
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isAcademyOwner, setIsAcademyOwner] = useState(false);

  // Step 2: Perfil
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activity, setActivity] = useState('');
  const [martialArt, setMartialArt] = useState<MartialArt | ''>('');
  const [rank, setRank] = useState<Rank | ''>('');
  const [practiceYears, setPracticeYears] = useState('');
  const [practiceMonths, setPracticeMonths] = useState('');

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    setStep(2);
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Gerar código único
    const code = generateUserCode();
    setUserCode(code);

    // Simular cadastro
    setTimeout(() => {
      console.log('Cadastro completo:', {
        email,
        displayName,
        isAcademyOwner,
        weight: parseFloat(weight),
        height: parseFloat(height),
        age: parseInt(age),
        activity,
        martialArt,
        rank,
        practiceTimeMonths: parseInt(practiceYears) * 12 + parseInt(practiceMonths),
        userCode: code,
      });
      setIsLoading(false);
      setStep(3);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Imagem de fundo - Pessoa com kimono no lado direito */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/0d314115-3392-46e3-93a3-037ffd63533c.jpg)',
          backgroundPosition: 'center right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Faixa horizontal laranja */}
      <div className="h-24 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 flex items-center justify-center relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-black/20"></div>
        <Shield className="w-12 h-12 text-white relative z-10" />
      </div>

      {/* Conteúdo */}
      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-md space-y-8">
          {/* Título */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Criar Conta
            </h1>
            <p className="text-gray-400">
              {step === 1 && 'Passo 1 de 2: Credenciais'}
              {step === 2 && 'Passo 2 de 2: Perfil'}
              {step === 3 && 'Cadastro Concluído!'}
            </p>
          </div>

          {/* Step 1: Credenciais */}
          {step === 1 && (
            <form onSubmit={handleStep1Submit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="displayName" className="text-gray-300">Nome Completo</Label>
                <Input
                  id="displayName"
                  type="text"
                  placeholder="João Silva"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="bg-gray-900 border-gray-800 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-900 border-gray-800 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-900 border-gray-800 text-white"
                  required
                  minLength={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-300">Confirmar Senha</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-gray-900 border-gray-800 text-white"
                  required
                  minLength={6}
                />
              </div>

              {/* Checkbox Dono de Academia */}
              <div className="flex items-center space-x-3 bg-gray-900 border border-gray-800 rounded-lg p-4">
                <Checkbox 
                  id="academyOwner" 
                  checked={isAcademyOwner}
                  onCheckedChange={(checked) => setIsAcademyOwner(checked as boolean)}
                  className="border-gray-700 data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600"
                />
                <Label 
                  htmlFor="academyOwner" 
                  className="text-gray-300 cursor-pointer flex-1"
                >
                  Sou dono de academia
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-6"
              >
                Próximo <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="w-full text-gray-400 hover:text-white"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2" /> Voltar ao Login
              </Button>
            </form>
          )}

          {/* Step 2: Perfil */}
          {step === 2 && (
            <form onSubmit={handleStep2Submit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-gray-300">Peso (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    placeholder="75"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="bg-gray-900 border-gray-800 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="height" className="text-gray-300">Altura (m)</Label>
                  <Input
                    id="height"
                    type="number"
                    step="0.01"
                    placeholder="1.75"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="bg-gray-900 border-gray-800 text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="text-gray-300">Idade</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="25"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="bg-gray-900 border-gray-800 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="activity" className="text-gray-300">Atividade Física</Label>
                <Input
                  id="activity"
                  type="text"
                  placeholder="Treino 3x/semana"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="bg-gray-900 border-gray-800 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="martialArt" className="text-gray-300">Arte Marcial</Label>
                <Select value={martialArt} onValueChange={(value) => setMartialArt(value as MartialArt)}>
                  <SelectTrigger className="bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-800">
                    {MARTIAL_ARTS.map((art) => (
                      <SelectItem key={art} value={art} className="text-white">
                        {art}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rank" className="text-gray-300">Faixa Atual</Label>
                <Select value={rank} onValueChange={(value) => setRank(value as Rank)}>
                  <SelectTrigger className="bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-800">
                    {RANKS.map((r) => (
                      <SelectItem key={r} value={r} className="text-white">
                        {RANK_LABELS[r]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="practiceYears" className="text-gray-300">Anos de Prática</Label>
                  <Input
                    id="practiceYears"
                    type="number"
                    placeholder="2"
                    value={practiceYears}
                    onChange={(e) => setPracticeYears(e.target.value)}
                    className="bg-gray-900 border-gray-800 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="practiceMonths" className="text-gray-300">Meses</Label>
                  <Input
                    id="practiceMonths"
                    type="number"
                    placeholder="6"
                    value={practiceMonths}
                    onChange={(e) => setPracticeMonths(e.target.value)}
                    className="bg-gray-900 border-gray-800 text-white"
                    required
                    max={11}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-gray-800 text-gray-300 hover:bg-gray-900"
                  onClick={() => setStep(1)}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" /> Voltar
                </Button>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold"
                >
                  {isLoading ? 'Criando...' : 'Finalizar'}
                </Button>
              </div>
            </form>
          )}

          {/* Step 3: Sucesso */}
          {step === 3 && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-10 h-10 text-white" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Cadastro Concluído!</h2>
                <p className="text-gray-400">Seu código único foi gerado:</p>
              </div>

              <div className="bg-gray-900 border border-orange-600 rounded-lg p-6">
                <p className="text-sm text-gray-400 mb-2">Seu Código de Usuário</p>
                <p className="text-3xl font-mono font-bold text-orange-500">{userCode}</p>
                <p className="text-xs text-gray-500 mt-2">Guarde este código para referência</p>
              </div>

              {isAcademyOwner && (
                <div className="bg-orange-900/20 border border-orange-600/50 rounded-lg p-4">
                  <p className="text-sm text-orange-400">
                    ✓ Cadastrado como dono de academia
                  </p>
                </div>
              )}

              <Button
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-6"
                onClick={() => {
                  // Redirecionar para dashboard
                  console.log('Ir para dashboard');
                }}
              >
                Começar Jornada
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
