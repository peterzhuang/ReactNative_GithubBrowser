'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} = React;

var Login = React.createClass({
         render: function(){
         	return (

              <View style={styles.container}>
                  <Image style={styles.logo}
                    source= {require('image!hellokitty')} />
                  <Text style={styles.heading}>
                    Yuchuan Github Browser
                  </Text>
                  <TextInput style={styles.loginInput} 
                    placeholder="Enter Github username" />
                  <TextInput style={styles.loginInput} 
                    placeholder="Enter Github password" secureTextEntry="true" />
                  <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableHighlight>
              </View>
         		);
         }

	});

var styles =  StyleSheet.create({
	container: {
		backgroundColor: '#F5FCFF',
		flex: 1,
		paddingTop: 100,
		alignItems: 'center'
	},
  logo: {
      width: 70,
      height: 100
  },
  heading: {
      fontSize: 20,
      marginTop: 10
  },
  loginInput: {
        height: 50,
        marginTop: 10,
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 0,
        color: '#48BBEC'
  },
  button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
  buttonText: {
        color: '#fff',
        fontSize: 24
    }

});

module.exports = Login;