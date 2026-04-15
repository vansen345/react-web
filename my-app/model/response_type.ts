export interface BaseResponse<T> {
  status: string;
  timesv: string;
  total: number;
  limit: number;
  offset: number;
  elements: T[];
}

export interface BaseResponseObject<T> {
  status: string;
  timesv: string;
  total: number;
  limit: number;
  offset: number;
  elements: T;
}