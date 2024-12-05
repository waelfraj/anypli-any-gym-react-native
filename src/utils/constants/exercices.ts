import images from '../../config/images';
import { strings } from '../../locales/i18n';

export const EXERCISE_DIFFICULTY = [
  {
    name: strings('level.easy'),
    value: 'easy'
  },
  {
    name: strings('level.medium'),
    value: 'medium'
  },
  {
    name: strings('level.hard'),
    value: 'hard'
  }
];

export const EXERCISE_CATEGORY_ITEM = [
  {
    name: strings('exercise.cardio'),
    value: 'cardio'
  },
  {
    name: strings('exercise.legs'),
    value: 'legs'
  },
  {
    name: strings('exercise.absObliques'),
    value: 'abs-obliques'
  },
  {
    name: strings('exercise.biceps'),
    value: 'biceps'
  },
  {
    name: strings('exercise.triceps'),
    value: 'triceps'
  },

  {
    name: strings('exercise.shoulders'),
    value: 'shoulders'
  },
  {
    name: strings('exercise.chest'),
    value: 'chest'
  },
  {
    name: strings('exercise.back'),
    value: 'back'
  }
];

export const EXERCISE_CATEGORY = [
  {
    key: 'cardio',
    name: strings('exercise.cardio'),
    image: images.cardio
  },
  {
    key: 'legs',
    name: strings('exercise.legs'),
    image: images.legs
  },
  {
    key: 'abs-obliques',
    name: strings('exercise.absObliques'),
    image: images.abs
  },
  {
    key: 'biceps',
    name: strings('exercise.biceps'),
    image: images.biceps
  },
  {
    key: 'triceps',
    name: strings('exercise.triceps'),
    image: images.triceps
  },
  {
    key: 'shoulders',
    name: strings('exercise.shoulders'),
    image: images.epaule
  },

  {
    key: 'chest',
    name: strings('exercise.chest'),
    image: images.poitrine
  },
  {
    key: 'back',
    name: strings('exercise.back'),
    image: images.dos
  }
];
