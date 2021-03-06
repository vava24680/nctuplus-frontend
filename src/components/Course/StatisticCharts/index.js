
import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Label
} from 'recharts'
import randomColor from 'randomcolor'
import styles from './style.scss'

const StatisticBlock = ({ value, children }) => (
  <div className='text-center bg-white p-3'>
    <h1><strong>{ value }</strong></h1>
    <span>{ children }</span>
  </div>
)

// @todo: connect API
const StatisticCharts = (props) => {
  const color = randomColor({
    count: Object.keys(props.chart_people[0]).length,
    seed: 'NCTU+ is Gooood',
    luminosity: 'bright'
  })
  return (
    <div>
      <div className={`chart-wrapper ${styles.chartWrapper}`}>
        <h5>歷年選課人數統計</h5>
        <ResponsiveContainer width='100%' height={350}>
          <BarChart data={props.chart_people}>
            <XAxis dataKey='semester' />
            <YAxis domain={[0, 'dataMax + 5']}>
              <Label value='人數' position='insideLeft' angle={-90} />
            </YAxis>
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Legend />
            {Object.keys(props.chart_people[0]).map((item, index) => {
              if (item !== 'semester') { return <Bar key={index} dataKey={item} fill={color[index]} /> } else return null
            })}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className={`chart-wrapper ${styles.chartWrapper}`}>
        <h5>歷年修課平均分數</h5>
        <ResponsiveContainer width='100%' height={350}>
          <BarChart data={props.chart_avg}>
            <XAxis dataKey='semester' />
            <YAxis domain={[0, 100]}>
              <Label value='分' position='insideLeft' angle={-90} />
            </YAxis>
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Legend />
            {Object.keys(props.chart_avg[0]).map((item, index) => {
              if (item !== 'semester') { return <Bar key={index} dataKey={item} fill={color[index]} /> } else return null
            })}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.staticBlockWrapper}>
        <StatisticBlock value={props.avg_score}>本課程平均成績</StatisticBlock>
        <StatisticBlock value={props.highest_avg_score}>同類課程最高成績</StatisticBlock>
        <StatisticBlock value={props.highest_avg_teacher}>同類課程最高分老師</StatisticBlock>
      </div>
    </div>
  )
}

export default StatisticCharts
