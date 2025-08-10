import {View, Text, TextInput} from 'react-native'
import React from 'react'
import {CustomInputProps} from "@/type";
import cn from "clsx";


const CustomInput = ({
    placeholder = 'Enter Text',
    value,
    onChangeText,
    label,
    secureTextEntry = false,
    keyboardType = 'default',}: CustomInputProps) => {

    const [isFocused, setFocused] = React.useState(false);
    return (
        <View className='w-full'>
            <Text className='label'>{label}</Text>

            <TextInput
                autoCapitalize='none'
                value={value}
                onChangeText={onChangeText}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                placeholder={placeholder}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholderTextColor='#888'
                className={cn('input', isFocused ? 'border-primary' : 'border-gray-300')}
            />
        </View>
    )
}
export default CustomInput
