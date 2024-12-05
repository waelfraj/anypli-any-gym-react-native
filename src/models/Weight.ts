import { formatDate } from '../utils/helpers/utils';

export interface Weight {
  id: string;
  weight: string;
  createdAt: string;
}

export interface WeightResponse {
  id: string;
  weight: string;
  created_at: string;
}

export function decodeWeightResponse(WeightResponse: WeightResponse): Weight {
  return {
    id: WeightResponse.id,
    weight: WeightResponse.weight,
    createdAt: formatDate(WeightResponse.created_at) ?? '01-01-2024'
  };
}
