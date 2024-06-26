import React, { useState } from 'react';
import {
  View, Text, ActivityIndicator, FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

import styles from './popularjobs.style';
import useFetch from '../../../hook/useFetch';

function Popularjobs() {
  const router = useRouter();
  const {
    data, isLoading, error, refetch,
  } = useFetch('search', {
    query: 'Python developer in Texas, USA',
    page: '1',
    num_pages: '1',
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity><Text style={styles.headerBtn}>Show all</Text></TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went worng</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard item={item} />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
}

export default Popularjobs;
