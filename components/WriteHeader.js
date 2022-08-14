import React, {useReducer} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TransparentCircleButton from './TransparentCircleButton';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';

const initialSate = {mode: 'date', visible: false};
const reducer = (state, action) => {
    switch (action.type) {
        case 'open':
            return {
                mode: action.mode,
                visible: true,
            };
        case 'close':
            return {
                ...state,
                visible: false,
            };
        default:
            throw new Error('Unhandled action type');
    }
};

const WriteHeader = ({onSave, onAskRemove, isEditing, date, onChangeDate}) => {
    const navigation = useNavigation();
    const onGoBack = () => {
        navigation.pop();
    };

    const [state, dispatch] = useReducer(reducer, initialSate);
    const open = mode => dispatch({type: 'open', mode});
    const close = () => dispatch({type: 'close'});

    const onConfirm = selectedDate => {
        close();
        onChangeDate(selectedDate);
    };

    return (
        <View style={styles.block}>
            <View style={styles.iconButtonWrapper}>
                <TransparentCircleButton
                    onPress={onGoBack}
                    name="arrow-back"
                    color="#424242"
                />
            </View>
            <View style={styles.buttons}>
                {isEditing && (
                    <TransparentCircleButton
                        name="delete-forever"
                        color="#ef5350"
                        hasMarginRigth
                        onPress={onAskRemove}
                    />
                )}
                <TransparentCircleButton
                    name="check"
                    color="#009688"
                    onPress={onSave}
                />
            </View>
            <View style={styles.center}>
                <Pressable>
                    <Text>{format(new Date(date), 'PPP', {locale: ko})}</Text>
                </Pressable>
                <View style={styles.separator} />
                <Pressable>
                    <Text>{format(new Date(date), 'p', {locale: ko})}</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        height: 48,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
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
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    marginRight: {
        marginRight: 8,
    },
    center: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -1,
        flexDirection: 'row',
    },
    separator: {
        width: 8,
    },
});

export default WriteHeader;