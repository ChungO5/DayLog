import React, {useRef} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const WriteEditor = ({title, body, onChangeTitle, onChangeBody}) => {
    const bodyRef = useRef();

    return (
        <View style={styles.block}>
            <TextInput
                placeholder="제목을 입력학세요"
                style={styles.titleInput}
                returnKeyType="next"
                onChangeText={onChangeTitle}
                value={title}
                onSubmitEditing={() => {
                    bodyRef.current.focus();
                }}
            />
            <TextInput
                placeholder="당신의 오늘을 기록해보세요"
                style={styles.bodyInput}
                returnKeyType="next"
                onChangeText={onChangeBody}
                value={body}
                multiline
                ref={bodyRef}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flex: 1,
        padding: 16,
    },
    titleInput: {
        paddingVertical: 0,
        fontSize: 18,
        marginBottom: 16,
        color: '#263238',
        fontWeight: 'bold',
    },
    bodyInput: {
        // flex: 1,
        fontSize: 16,
        paddingVertical: 0,
        color: '#263238',
    },
});

export default WriteEditor;
