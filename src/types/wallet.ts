export type Transaction = {
    date: string;
    description: string;
    category: string;
    amount: string;
  };

export interface TransferData {
  from_card_number: string,
  to_card_number:string,
  amount:number ,
}
  
  export type FilterType = 'all' | 'income' | 'expense';
  export type FilterTypeProfile = 'Security' | 'Notifications' | 'Preferences';