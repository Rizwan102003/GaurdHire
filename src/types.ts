export interface Guard {
  id: string;
  name: string;
  age: number;
  experience: number;
  aadharNumber: string;
  panNumber: string;
  voterIdNumber: string;
  address: string;
  phone: string;
  photo: string;
  rating: number;
  reviews: Review[];
  verified: boolean;
}

export interface Review {
  id: string;
  guardId: string;
  residentId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Message {
  id: string;
  guardId: string;
  residentId: string;
  content: string;
  createdAt: string;
  read: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  type: 'guard' | 'resident';
}