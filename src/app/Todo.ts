export interface Todo {
  id: number;
  categoryId?: number;
  categoryName?: string;
  categoryColor?: string;
  title: string;
  body: string;
  stateCode: number;
  stateName: string;
}
