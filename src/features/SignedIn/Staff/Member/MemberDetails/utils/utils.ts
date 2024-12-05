import { strings } from '../../../../../../locales/i18n';
import { Member } from '../../../../../../models/Member';
import { objectifData } from '../../../../../../utils/constants/objectifs';
import { PhysicalActivityLevelData } from '../../../../../../utils/constants/physicalActivityLevel';
import { formatDate } from '../../../../../../utils/helpers/utils';

export const formatMemberData = (member: Member | undefined) => {
  if (!member) return [];

  return [
    {
      category: strings('labels.age'),
      value: member.age ?? 'N/A'
    },
    { category: strings('labels.height'), value: member.height ?? 'N/A' },
    {
      category: strings('labels.targetWeight'),
      value: member.target_weight + ' Kg' ?? 'N/A'
    },
    {
      category: strings('labels.gender'),
      value:
        member.user?.gender === 'f'
          ? strings('labels.woman')
          : strings('labels.man') ?? 'N/A'
    },
    {
      category: strings('labels.objective'),
      value:
        (member.objective &&
          objectifData.find((item) => item.key == member.objective)?.name) ||
        'N/A'
    },
    {
      category: strings('labels.physicalActivity'),
      value:
        (member.physical_activity &&
          PhysicalActivityLevelData.find(
            (item) => item.key === member.physical_activity
          )?.name) ||
        'N/A'
    },
    {
      category: strings('labels.address'),
      value: member.user?.address ?? 'N/A'
    },
    { category: strings('labels.phone'), value: member.user?.phone ?? 'N/A' },
    { category: strings('labels.email'), value: member.user?.email ?? 'N/A' },
    {
      category: strings('labels.createdAt'),
      value: formatDate(member.createdAt) ?? 'N/A'
    }
  ];
};
