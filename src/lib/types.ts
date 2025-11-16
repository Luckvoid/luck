// Types para o app de artes marciais

export type UserRole = 'student' | 'sensei';

export type MartialArt = 
  | 'Jiu-Jitsu'
  | 'Karate'
  | 'Taekwondo'
  | 'Muay Thai'
  | 'Judo'
  | 'Kung Fu'
  | 'Capoeira'
  | 'Krav Maga';

export type Rank = 
  | 'white'
  | 'yellow'
  | 'orange'
  | 'green'
  | 'blue'
  | 'purple'
  | 'brown'
  | 'black';

export const RANK_LEVELS: Record<Rank, number> = {
  white: 1,
  yellow: 2,
  orange: 3,
  green: 4,
  blue: 5,
  purple: 6,
  brown: 7,
  black: 8,
};

export interface User {
  id: string;
  email: string;
  displayName: string;
  role: UserRole;
  userCode: string;
  weight: number;
  height: number;
  age: number;
  activity: string;
  martialArt: MartialArt;
  practiceTimeMonths: number;
  rank: Rank;
  location?: {
    geohash: string;
    lat: number;
    lng: number;
  };
  createdAt: Date;
}

export interface Technique {
  id: string;
  name: string;
  martialArt: MartialArt;
  requiredRank: Rank;
  description: string;
  mediaUrl?: string;
  createdAt: Date;
}

export type PracticeRequestStatus = 'pending' | 'approved' | 'rejected';

export interface PracticeRequest {
  id: string;
  userId: string;
  techId: string;
  status: PracticeRequestStatus;
  requestedAt: Date;
  validatedBy?: string;
  validatedAt?: Date;
  evidenceUrl?: string;
}

export type DuelStatus = 'scheduled' | 'completed' | 'cancelled';

export interface Duel {
  id: string;
  challengerId: string;
  opponentId: string;
  scheduledAt: Date;
  location: {
    lat: number;
    lng: number;
  };
  status: DuelStatus;
  approvedBySensei: boolean;
  result?: {
    winnerId: string;
    finalTechniqueId: string;
  };
}

export interface SenseiApproval {
  id: string;
  duelId: string;
  senseiId: string;
  approved: boolean;
  remarks?: string;
}
