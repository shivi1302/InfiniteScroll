import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {
  BarChart,
  Grid,
  AreaChart,
  LineChart,
  PieChart,
} from 'react-native-svg-charts';
import WrapperContainer from '../../Components/WrapperContainer';
import * as shape from 'd3-shape';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import commonStyles from '../../styles/commonStyles';
export default class Charts extends Component {
  render() {
    const fill = 'rgb(134, 65, 244)';
    const data = [
      50,
      10,
      40,
      95,
      -54,
      -24,
      null,
      85,
      150,
      0,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
    ];
    const randomColor = () =>
      ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
        0,
        7,
      );

    const pieData = data
      .filter(value => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: randomColor(),
        },
        key: `pie-${index}`,
      }));

    return (
      <WrapperContainer>
        <ScrollView>
          <Animatable.Text
            animation="zoomInUp"
            style={commonStyles.heading}
            iterationCount={5}
            direction="alternate">
            BAR GRAPH
          </Animatable.Text>
          <BarChart
            style={styles.bargraph}
            data={data}
            svg={{fill}}
            contentInset={{top: 30, bottom: 30}}>
            <Grid />
          </BarChart>
          <Animatable.Text
            animation="fadeIn"
            style={commonStyles.heading}
            iterationCount={5}
            direction="alternate">
            AREA CHART
          </Animatable.Text>
          <AreaChart
            style={styles.bargraph}
            data={data}
            contentInset={{top: 30, bottom: 30}}
            curve={shape.curveNatural}
            svg={{fill}}>
            <Grid />
          </AreaChart>
          <Animatable.Text
            animation="lightSpeedIn"
            style={commonStyles.heading}
            iterationCount={5}
            direction="alternate">
            LINE CHART
          </Animatable.Text>
          <LineChart
            style={styles.bargraph}
            data={data}
            svg={{stroke: 'rgb(134, 65, 244)'}}
            contentInset={{top: 20, bottom: 20}}>
            <Grid />
          </LineChart>
          <Animatable.Text
            animation="flipInY"
            style={commonStyles.heading}
            iterationCount={5}
            direction="alternate">
            PIE CHART
          </Animatable.Text>
          <PieChart style={styles.bargraph} data={pieData} />
        </ScrollView>
      </WrapperContainer>
    );
  }
}
