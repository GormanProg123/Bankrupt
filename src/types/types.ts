export interface Transaction {
    direction: string;
    from_card_number: string;
    to: string;
    to_card_number: string | null;
    transfer_type: string;
    amount: number;
    time: Date;
  };


export interface TransferData {
  from_card_number: string,
  to_card_number:string,
  amount:number ,
}
  
export type FilterType = 'all' | 'in' | 'out';
export type FilterTypeProfile = 'Security' | 'Notifications' | 'Preferences';

export interface CardData {
  card_id:number,
  balance:number,
  number:string,
  cardholder_name:string,
  cardholder_surname:string,
  expiration_data:string
  cvv:string
}

export interface CurrentCard {
    currentCardId:number,
    currentCardNumber:string,
    currentCardHistory:CardHistory;
}

export interface CardHistory {
  history: Transaction[];
  
}

export interface ITriggerUpdate {
    cardsUpdate:boolean,
    savingsUpdate:boolean,
}