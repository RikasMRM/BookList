import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'


class WelcomeScreen extends Component {
    constructor() {
        super()
        this.state = {

        }

    };
    render() {
        return (
            <ImageBackground style={{
                flex: 1, justifyContent: "flex-end",
                alignItems: "center",
            }}
                source={require("./assets/back.jpg")}
            >

                <View style={{ position: 'absolute', top: 70, alignItems: "center", }}>
                    <Image style={{ width: 400, height: 200, }} source={require("./assets/logo.png")} />
                    <Text style={{ fontSize: 40, color: 'black', fontWeight: 'bold', }} >New York Times </Text>
                    <Text style={{ fontSize: 30, color: 'black', }} >Best Selling Books </Text>
                </View>

                <View style={{ padding: 20, height: "10%", width: "100%", justifyContent: "center", }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("BookList")}>
                        <Text style={{ color: 'white', fontSize: 25, backgroundColor: "#e94c3d", }}>      Press for the Book List      </Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        )
    }
}
export default WelcomeScreen;