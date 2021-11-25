import React, { useRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import LottieView from 'lottie-react-native'

const App = () => {
    const lottieRef = useRef(null)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <LottieView
                style={{ width: 100, height: 100 }}
                source={require('./assets/icon-check.json')}
                ref={lottieRef}
            />

            <TouchableOpacity
                onPress={() => {
                    lottieRef.current.play()
                    setTimeout(() => {
                        lottieRef.current.reset()
                    }, 3000)
                }}
                style={{ width: '80%', height: 60, backgroundColor: '#0277BD', alignItems: 'center', justifyContent: 'center' }}>
                <Text>Load</Text>
            </TouchableOpacity>
        </View>
    )
}

export default App