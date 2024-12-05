import { CustomUserListItem } from '../../../../../../components/CustomUsersList/CustomUsersList';

export interface ListStaffProps {
  listItems: CustomUserListItem[];
  isLoading: boolean;
  onSearchChange: any;
  onRefresh: any;
}
