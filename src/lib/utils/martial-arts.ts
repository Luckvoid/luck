// Utility functions para o app

/**
 * Gera código único de usuário
 * Formato: XXXX-YYYY-2025
 */
export function generateUserCode(): string {
  const rand = () => Math.random().toString(36).substring(2, 6).toUpperCase();
  const year = new Date().getFullYear();
  return `${rand()}-${rand()}-${year}`;
}

/**
 * Calcula distância entre dois pontos (Haversine)
 */
export function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371; // Raio da Terra em km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Formata tempo de prática em texto legível
 */
export function formatPracticeTime(months: number): string {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${months} ${months === 1 ? 'mês' : 'meses'}`;
  }
  
  if (remainingMonths === 0) {
    return `${years} ${years === 1 ? 'ano' : 'anos'}`;
  }
  
  return `${years} ${years === 1 ? 'ano' : 'anos'} e ${remainingMonths} ${remainingMonths === 1 ? 'mês' : 'meses'}`;
}

/**
 * Traduz rank para português
 */
export function translateRank(rank: string): string {
  const translations: Record<string, string> = {
    white: 'Branca',
    yellow: 'Amarela',
    orange: 'Laranja',
    green: 'Verde',
    blue: 'Azul',
    purple: 'Roxa',
    brown: 'Marrom',
    black: 'Preta',
  };
  return translations[rank] || rank;
}

/**
 * Valida se idade está dentro do intervalo permitido para duelo
 */
export function isAgeCompatible(age1: number, age2: number, tolerance: number = 3): boolean {
  return Math.abs(age1 - age2) <= tolerance;
}
