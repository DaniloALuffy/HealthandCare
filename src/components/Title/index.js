import React from 'react'
import { View, Text, Image} from 'react-native'
import styles from './style';

export default function Title() {
    return (
        <View style={styles.boxTitle}>
            <Image
                style={styles.imageTitle}
                source={require('./bgImgTitle.png')}
            />
        </View>
    )
}