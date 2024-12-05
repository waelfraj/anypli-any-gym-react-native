import { formatDate } from './../utils/helpers/utils';

export interface Exercise {
  id: string;
  title: string;
  description: string;
  image: string;
  difficulty: string;
  category: string;
  calories: string;
  sets: string;
  createdAt?: string;
}

export interface ExerciseResponse {
  id: string;
  title: string;
  description: string;
  image: string;
  difficulty: string;
  category: string;
  calories: string;
  sets: string;
  created_at?: string;
}

export function decodeExerciseResponse(
  exerciseResponse: ExerciseResponse
): Exercise {
  return {
    id: exerciseResponse.id,
    title: exerciseResponse.title,
    description: exerciseResponse.description,
    image: exerciseResponse.image,
    difficulty: exerciseResponse.difficulty,
    category: exerciseResponse.category,
    calories: exerciseResponse.calories,
    sets: exerciseResponse.sets,
    createdAt: formatDate(exerciseResponse.created_at)
  };
}
