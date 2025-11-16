// Firebase/Supabase configuration
// Este arquivo será configurado com suas credenciais

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Mock de funções Firebase para desenvolvimento
// Substitua por implementação real quando conectar Firebase

export const auth = {
  signInWithEmailAndPassword: async (email: string, password: string) => {
    console.log('Login:', email);
    return { user: { uid: 'mock-user-id', email } };
  },
  createUserWithEmailAndPassword: async (email: string, password: string) => {
    console.log('Cadastro:', email);
    return { user: { uid: 'mock-user-id', email } };
  },
  signOut: async () => {
    console.log('Logout');
  },
  currentUser: null,
};

export const db = {
  collection: (name: string) => ({
    doc: (id: string) => ({
      set: async (data: any) => console.log('Set:', name, id, data),
      get: async () => ({ exists: true, data: () => ({}) }),
    }),
    where: (field: string, op: string, value: any) => ({
      get: async () => ({ docs: [] }),
    }),
  }),
};

export const storage = {
  ref: (path: string) => ({
    put: async (file: File) => console.log('Upload:', path),
    getDownloadURL: async () => 'https://example.com/file.jpg',
  }),
};
