import { formatDate } from '../utils/helpers/utils';
import { Exercise, ExerciseResponse, decodeExerciseResponse } from './Exercise';

export interface TrainingList {
  id: string;
  title: string;
  description: string;
  image: any;
  exercises: Exercise[];
  createdAt?: string;
  isReserved: boolean;
  total_calories: number;
  difficulty: string;
}

export interface TrainingListResponse {
  id: string;
  title: string;
  description: string;
  image: string;
  exercises: ExerciseResponse[];
  created_at?: string;
  is_reserved: boolean;
  total_calories: number;
  difficulty: string;
}

export function decodeTrainingListsResponse(
  TrainingListResponse: TrainingListResponse
): TrainingList {
  return {
    id: TrainingListResponse.id,
    title: TrainingListResponse.title,
    description: TrainingListResponse.description,
    image: TrainingListResponse.image,
    exercises: TrainingListResponse.exercises.map((data: ExerciseResponse) =>
      decodeExerciseResponse(data)
    ),
    isReserved: TrainingListResponse.is_reserved,
    total_calories: TrainingListResponse.total_calories,
    difficulty: TrainingListResponse.difficulty,
    createdAt: formatDate(TrainingListResponse.created_at)
  };
}
