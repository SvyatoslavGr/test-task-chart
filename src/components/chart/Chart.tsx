import Bar from '../Bar/Bar';
import './Chart.css';

interface IChartProps {
  array: number[];
}

function Chart({ array }: IChartProps) {
  const max = Math.max(...array);

  return (
    <div className='chart-wrapper'>
      {array.map((value, index) => (
        <Bar
          key={index}
          barCount={array.length}
          barValue={value/max}
        />
      ))}
    </div>
  )
}

export default Chart;