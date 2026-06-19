export interface Category {
  categoryId: string;
  name: string;
  description: string;
}

export interface PaginationResponse<T> {
  data: T[];
  hasNextPage: boolean;
  next: string | null;
}