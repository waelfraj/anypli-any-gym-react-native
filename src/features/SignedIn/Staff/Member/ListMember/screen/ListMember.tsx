import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import CustomSearch from '../../../../../../components/CustomSearch/CustomSearch';
import CustomUsersList from '../../../../../../components/CustomUsersList/CustomUsersList';
import Loading from '../../../../../../components/Loading/Loading';
import Pagination from '../../../../../../components/Pagination/Pagination';
import { ListMemberProps } from '../utils/types';
import styles from './listMemberStyles';

const ListMember: React.FC<ListMemberProps> = ({
  listItems,
  isLoading,
  onSearchChange,
  onRefresh,
  setCurrentPage,
  totalPages,
  currentPage
}): JSX.Element => {
  return (
    <FlatList
      style={styles.container}
      data={listItems}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }
      ListHeaderComponent={<CustomSearch setValue={onSearchChange} />}
      ListEmptyComponent={<Loading isLoading={isLoading} />}
      renderItem={({ item }) => <CustomUsersList item={item} />}
      keyExtractor={(item) => (item.id ? item.id.toString() : '')}
      ListFooterComponent={
        <Pagination
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      }
    />
  );
};

export default ListMember;
