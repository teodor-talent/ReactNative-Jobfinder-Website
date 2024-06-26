import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { checkImageURL } from '../../../../utils';

import styles from './nearbyjobcard.style';

function NearbyJobCard({ job, handleNavigate }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo) ? job.employer_logo : 'https://dummyimage.com/600x400/000/fff',
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text
          style={styles.jobName}
          numberOfLines={1}
        >
          {job?.job_title}
        </Text>
        <Text style={styles.jobType}>{job?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default NearbyJobCard;
