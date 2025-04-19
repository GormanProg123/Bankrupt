export type Transaction = {
    date: string;
    description: string;
    category: string;
    amount: string;
  };
  
  export type FilterType = 'all' | 'income' | 'expense';