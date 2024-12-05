import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import CustomSearch from '../../../../../../components/CustomSearch/CustomSearch';
import CustomUsersList from '../../../../../../components/CustomUsersList/CustomUsersList';
import Loading from '../../../../../../components/Loading/Loading';
import { ListStaffProps } from '../utils/types';
import styles from './listStaffStyles';

const ListStaff: React.FC<ListStaffProps> = ({
  listItems,
  isLoading,
  onSearchChange,
  onRefresh
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
    />
  );
};

export default ListStaff;
