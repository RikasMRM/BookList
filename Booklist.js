import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking, Modal, ImageBackground } from 'react-native';



export default class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booklist: [],
            showmoreinfo: false

        };


    }
    componentDidMount() {
        const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ITGyKnVA7r1RUmMEXox6FjTiXxNPfYSf'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    booklist: responseJson.results.books
                })
                console.log(this.state.booklist)

            })

    }




    list = () => {

        return this.state.booklist.map((element) => {

            return (
                <ImageBackground style={{
                    flex: 1, justifyContent: "flex-end",
                    alignItems: "center",
                }}

                    source={require("./assets/background.jpg")}
                >
                    <View key={element.primary_isbn10} style={{ margin: 15 }}>
                        <TouchableOpacity onPress={() => { this.setState({ showmoreinfo: true }) }}>
                            <Image
                                style={{ width: element.book_image_width, height: element.book_image_height }}
                                source={{ uri: element.book_image }}

                            />

                        </TouchableOpacity>




                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Text style={{ fontWeight: "bold" }}>Title</Text>
                                <Text>{element.title}</Text>
                            </View>
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ fontWeight: "bold" }}>Publisher</Text>
                                <Text>{element.publisher}</Text>
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#e94c3d", marginRight: 5 }}>
                                <Modal style={{ flex: 1 }}
                                    transparent={true}
                                    visible={this.state.showmoreinfo}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                                        <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340, }}>

                                            <View style={{ flexDirection: 'row', }}>
                                                <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center', }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: "black" }}>More Info</Text>
                                                </View>
                                            </View>

                                            <View
                                                style={{
                                                    borderBottomColor: "black",
                                                    borderBottomWidth: 1,
                                                    padding: 10
                                                }}
                                            ></View>
                                            <View>
                                                <Text> publisher : {element.publisher}</Text>
                                                <Text> author : {element.author}</Text>
                                                <Text> title : {element.title}</Text>
                                                <Text> contributor :{element.contributor}</Text>
                                                <Text> description : {element.description}</Text>

                                            </View>


                                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>

                                                <TouchableOpacity style={{ height: 45, width: 100, backgroundColor: '#ffffff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', borderColor: 'silver', borderWidth: 1 }}
                                                    onPress={() => { this.setState({ showmoreinfo: false }) }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <Text style={{ fontWeight: 'bold', color: "#e94c3d" }}>Cancel</Text>
                                                    </View>
                                                </TouchableOpacity>



                                            </View>


                                        </View>

                                    </View>
                                </Modal>
                                <TouchableOpacity onPress={() => this.setState({ showmoreinfo: true })}>
                                    <Text style={{ fontWeight: "bold", fontSize: 20, color: 'white' }}>View</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#e94c3d" }}>
                                <TouchableOpacity onPress={() => Linking.openURL(element.amazon_product_url)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 20, color: 'white' }}>Buy</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View
                            style={{
                                borderBottomColor: "black",
                                borderBottomWidth: 1,
                                padding: 10
                            }}
                        ></View>



                    </View>
                </ImageBackground>
            );
        });
    };


    render() {


        return (
            <ScrollView >


                <View>{this.list()}</View>





            </ScrollView>
        );
    }
}
