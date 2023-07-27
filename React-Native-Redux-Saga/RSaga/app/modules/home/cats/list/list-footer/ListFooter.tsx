import { memo } from 'react';
import { Text } from 'react-native';
import styles from './ListFooterStyles';
import { LoadingIndicator } from '../../../../../components';

/*
 * List footer component which will be shown on pagination loading.
 *
 * @param {loading} - whether the state is loading or not.
 * @param {endReached} - boolean to denote the pagination is completed or not.
 * @return - footer component consisting of loader and text.
 */

const ListFooter = ({ loading, endReached }) => {
  return (
    <>
      {loading ? <LoadingIndicator textInfo={'Loading...'} /> : null}
      {endReached ? (
        <Text style={styles.endOfListText}>No more cats at the moment</Text>
      ) : null}
    </>
  );
};

export default memo(ListFooter);
