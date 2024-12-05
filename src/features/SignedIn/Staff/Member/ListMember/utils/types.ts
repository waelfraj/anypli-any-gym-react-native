import { CustomUserListItem } from '../../../../../../components/CustomUsersList/CustomUsersList';

export interface ListMemberProps {
  listItems: CustomUserListItem[];
  isLoading: boolean;
  onSearchChange: React.Dispatch<React.SetStateAction<string>>;
  onRefresh: any;
  setCurrentPage: any;
  totalPages: any;
  currentPage: any;
}
