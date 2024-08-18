export interface IProduce {
  _id: string;
  title: string;
  latinTitle: string;
  description: string;
  startAt: number;
  endAt: number;
  image: string;
  produceType: string;
  isExotic: boolean;
  totalDays: number;
  remainingDays: number;
  spendingDays: number;
}