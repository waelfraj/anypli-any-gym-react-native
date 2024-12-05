import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import CustomUsersList from '../../../../../../components/CustomUsersList/CustomUsersList';
import Pagination from '../../../../../../components/Pagination/Pagination';
import CustomTextInput from '../../../../../../components/TextInput/CustomTextInput';
import { strings } from '../../../../../../locales/i18n';
import ListEmpty from '../../../../Coach/Training/components/ListEmpty/ListEmpty';
import { ListCoachProps } from '../utils/types';
import styles from './listCoachStyles';

const ListCoach: React.FC<ListCoachProps> = ({
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
      ListHeaderComponent={
        <CustomTextInput
          style={styles.textInput}
          placeholder={strings('actions.search')}
          onChangeText={onSearchChange}
        />
      }
      ListEmptyComponent={<ListEmpty />}
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

export default ListCoach;
