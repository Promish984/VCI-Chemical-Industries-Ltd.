export interface Product {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  imageUrl?: string;
  createdAt: number;
  updatedAt: number;
}

export interface Category {
  id: string;
  name: string;
  createdAt: number;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: number;
  status: 'new' | 'read' | 'replied';
}

export interface Career {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'closed';
  createdAt: number;
  updatedAt: number;
}
