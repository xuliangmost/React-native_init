/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StackNavigator,

} from 'react-navigation';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  ListView,
  AppRegistry,
  Button,
} from 'react-native';
import {styles} from './CommonCss/index'
export default class AwesomeProject extends Component {
  static navigationOptions={
    title:'详情',
    header:null,//这个导航很坑 页面1跳到页面2 如果页面1没有header，页面2有header 点击的一瞬间 ， 页面1会多出一个header 所以， 觉得还是自己写header比较好
  };

  constructor (props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ]),
    };
  }

  render () {
    const {navigate} = this.props.navigation;
    return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerLeft}>
          首页
        </Text>
        <TextInput
        style={styles.headerCenter}
        placeholder='Type'
        />
        <Text style={styles.headerLeft}>
          更多
        </Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={{height: 100}}>a</Text>
        <View style={{flex: 1, paddingTop: 22}}>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}//此处可以定义自己的组进行渲染
          />
        </View>
        <Button title="Go To The Page Most" onPress={() =>
        navigate('most', {name: 'Jane'})
        }/>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerItem}>首页</Text>
        <Text style={styles.footerItem}>目录</Text>
        <Text style={styles.footerItem}>发现</Text>
        <Text style={styles.footerItem}>我的</Text>
      </View>
    </View>
    );
  }
}
class most extends Component {
  render () {
    return (
    <View>
      <Text>
        11
      </Text>
    </View>
    )
  }
}


const App = StackNavigator({
  AwesomeProject: {
    screen: AwesomeProject,
  },
  most: {
    screen: most,
    navigationOptions: {
      title: '首页',
    }
  },
});
AppRegistry.registerComponent('AwesomeProject', () => App);


