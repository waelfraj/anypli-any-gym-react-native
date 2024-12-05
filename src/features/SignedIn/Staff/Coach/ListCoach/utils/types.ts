import { CustomUserListItem } from '../../../../../../components/CustomUsersList/CustomUsersList';

export interface ListCoachProps {
  listItems: CustomUserListItem[];
  isLoading: boolean;
  onSearchChange: React.Dispatch<React.SetStateAction<string>>;
  onRefresh: any;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  currentPage: number;
}
