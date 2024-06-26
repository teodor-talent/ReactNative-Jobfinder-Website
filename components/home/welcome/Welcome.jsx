import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Image, FlatList,
} from 'react-native';
import { icons, SIZES } from '../../../constants';

import styles from './welcome.style';

const jobType = ['Full-Time', 'Part-Time', 'Contractor'];

function Welcome() {
  const [activeJobType, setActiveJobType] = useState('Full-Time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Daniel Park</Text>
        <Text style={styles.welcomeMessage}>Find Your Dream Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => { }}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => { }}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobType}
          horizontal
          ListHeaderComponent={() => null}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                // router.push(`/search/\${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  );
}

export default Welcome;
