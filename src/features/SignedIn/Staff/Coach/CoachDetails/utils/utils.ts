import { strings } from '../../../../../../locales/i18n';
import { Coach } from '../../../../../../models/Coach';
import { formatDate } from '../../../../../../utils/helpers/utils';

export const formatCoachData = (coach: Coach | undefined) => {
  if (!coach) return [];

  return [
    {
      category: strings('labels.gender'),
      value:
        coach.user?.gender === 'f'
          ? strings('labels.woman')
          : strings('labels.man') ?? 'N/A'
    },
    {
      category: strings('labels.address'),
      value: coach.user?.address ?? 'N/A'
    },
    { category: strings('labels.phone'), value: coach.user?.phone ?? 'N/A' },
    { category: strings('labels.email'), value: coach.user?.email ?? 'N/A' },
    {
      category: strings('labels.createdAt'),
      value: formatDate(coach.createdAt) ?? 'N/A'
    }
  ];
};
