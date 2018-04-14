import React, { Component } from "react"
import { View, Text, Picker, StyleSheet, TextInput,Button } from "react-native"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: "usd-vnd",
      valueInput:0,
      valueOutput:0
    };
  }

  render() {
    return (
      <View>
        <View style={sty.select_view}>
          <View style={{ flex: 1 }}>
            <Text style={sty.type_input}>Select type</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Picker
              style={sty.select}
              selectedValue={this.state.type}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({
                  type: itemValue
                });
              }}
            >
              <Picker.Item label="USD-VND" value="usd-vnd" />
              <Picker.Item label="VND-USD" value="vnd-usd" />
              <Picker.Item label="USD-EUR" value="usd-eur" />
              <Picker.Item label="EUR-USD" value="eur-usd" />
              <Picker.Item label="VND-EUR" value="vnd-eur" />
              <Picker.Item label="EUR-VND" value="eur-vnd" />
            </Picker>
          </View>
        </View>
        <View style={{marginTop: 30, flexDirection:'row'}} >
          <View style={{flex:1}} >
            <Text style={sty.type_input} > Input value </Text>
          </View>
          <View style={{flex:1}} >
            <TextInput
              style={sty.select}
              placeholder='input value'
              onChangeText ={(valueInput)=>{this.setState({valueInput})}}
            />
          </View>
        </View>
        <View style={{marginTop:30}} >
          <Button
            onPress={()=>this.clickFunction()}
            title='convert'
          />
        </View>
      </View>
    );
  }

  async clickFunction(){
    //alert('hello')
    switch(this.state.type){
      case 'usd-vnd':
        await this.setState({
          valueOutput: this.state.valueInput * 22727
        })
        break
      case 'vnd-usd':
        await this.setState({
          valueOutput: this.state.valueInput / 22727
        })
        break
      case 'usd-eur':
        await this.setState({
          valueOutput: this.state.valueInput * 0.809879887
        })
        break
      case 'eur-usd':
        await this.setState({
          valueOutput: this.state.valueInput / 0.809879887
        })
        break
      case 'vnd-eur':
        await this.setState({
          valueOutput: this.state.valueInput / 28062
        })
        break
      case 'eur-vnd':
        await this.setState({
          valueOutput: this.state.valueInput * 28062
        })
        break
    }

    alert('sol : ' + this.state.valueOutput)
  }



}



const sty = StyleSheet.create({
  type_input: {
    color: "red",
    fontSize: 20,
    marginTop: 10
  },
  select: {
    width: 150,
  },
  select_view: {
    flexDirection: "row",
    height: 50
  }
});
