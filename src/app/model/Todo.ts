export interface Todo {
  id: number;
  category?: {
    id: number; name: string; slug: string; colorCode: number; colorName: string;
  }
  title: string;
  body: string;
  stateCode: number;
  stateName: string;
}
