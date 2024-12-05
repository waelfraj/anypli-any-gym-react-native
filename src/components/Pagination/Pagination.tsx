import React, { useEffect, useState } from 'react';
import CustomButton from '../Button/CustomButton';
import { strings } from '../../locales/i18n';
import styles from './paginationStyles';

interface PaginationProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  setCurrentPage,
  totalPages,
  currentPage
}) => {
  const [isLoadMore, setIsLoadMore] = useState(true);

  useEffect(() => {
    setIsLoadMore(currentPage < totalPages);
  }, [currentPage, totalPages]);

  const handlePagination = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (isLoadMore) {
    return (
      <CustomButton
        title={strings('actions.loadMore')}
        textStyle={styles.loadMore}
        handlePress={handlePagination}
      />
    );
  } else {
    return null;
  }
};

export default Pagination;
