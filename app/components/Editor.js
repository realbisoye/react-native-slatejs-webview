import React, { Component } from 'react';
import { View, WebView, Text } from 'react-native';

class Editor extends Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', paddingTop: 20 }}>
                <Text style={{ marginBottom: 20, fontSize: 16, textAlign: 'center', paddingVertical: 10, fontWeight: 'bold', color: '#ffffff', backgroundColor: "#23afff"}}>
                    Slate Editor In WebView
                </Text>
                <WebView
                   style={{ padding: 10 }}
                   source={{ uri: 'index.html' }}
                   bounces={false}
                />
            </View>
        );
    }
};

export default Editor;
