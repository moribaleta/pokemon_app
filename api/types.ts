export interface ApiResponseList<T> {
  count: number;
  next: string;
  previous: any;
  results: T[];
}

export interface ApiResponse<T> {
  count: number;
  next: string;
  previous: any;
  results: T;
}
