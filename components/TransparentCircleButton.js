import React from 'react';
import {BackHandler, Platform, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TransparentCircleButton = ({name, color, hasMarginRigth, onPress}) => {
    return (
        <View style={[styles.iconButton, hasMarginRigth && styles.marginRight]}>
            <Pressable
                sytle={({pressed}) => [
                    sytles.iconButton,
                    Platform.OS === 'ios' &&
                        pressed && {backgroundColor: '#efefef'},
                ]}
                onPress={onPress}
                android_ripple={{color: '#ededed'}}>
                <Icon name={name} size={24} color={color} />
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    iconButtonWrapper: {
        width: 32,
        height: 32,
        borderRadius: 16,
        overflow: 'hidden',
    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    marginRight: {
        marginRight: 8,
    },
});

export default TransparentCircleButton;
