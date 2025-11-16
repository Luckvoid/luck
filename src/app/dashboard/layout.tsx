"use client";

import { Home, User, Scroll, Swords, Shield } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/dashboard', icon: Home },
  { name: 'Perfil', href: '/dashboard/perfil', icon: User },
  { name: 'Técnicas', href: '/dashboard/tecnicas', icon: Scroll },
  { name: 'Duelo', href: '/dashboard/duelo', icon: Swords },
  { name: 'Senseis', href: '/dashboard/senseis', icon: Shield },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Faixa horizontal laranja */}
      <div className="h-20 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 flex items-center justify-between px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="flex items-center gap-3 relative z-10">
          <Shield className="w-8 h-8 text-white" />
          <span className="text-xl font-bold">Martial Arts</span>
        </div>
        <button className="text-white/80 hover:text-white text-sm relative z-10">
          Sair
        </button>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 overflow-auto pb-20">
        {children}
      </div>

      {/* Bottom Navigation (Tab Bar) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 z-50">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive
                    ? 'text-orange-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
