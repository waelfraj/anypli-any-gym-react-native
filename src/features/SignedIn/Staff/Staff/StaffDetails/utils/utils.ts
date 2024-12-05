import { strings } from '../../../../../../locales/i18n';
import { Staff } from '../../../../../../models/Staff';
import { formatDate } from '../../../../../../utils/helpers/utils';

export const formatStaffData = (staff: Staff | undefined) => {
  if (!staff) return [];

  return [
    {
      category: strings('labels.gender'),
      value:
        staff.user?.gender === 'f'
          ? strings('labels.woman')
          : strings('labels.man') ?? 'N/A'
    },
    {
      category: strings('labels.address'),
      value: staff.user?.address ?? 'N/A'
    },
    { category: strings('labels.phone'), value: staff.user?.phone ?? 'N/A' },
    { category: strings('labels.email'), value: staff.user?.email ?? 'N/A' },
    {
      category: strings('labels.createdAt'),
      value: formatDate(staff.createdAt) ?? 'N/A'
    }
  ];
};
