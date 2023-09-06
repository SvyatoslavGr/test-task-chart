import './Bar.css';

interface IBarProps {
  barCount: number;
  barValue: number;
}

function Bar({ barCount, barValue }: IBarProps) {
  return (
    <div
      className='chart-bar'
      style={{
        width: `calc(80% / ${barCount})`,
        height: `calc(${barValue} * 100%)`,
      }}
    >
    </div>
  )
}

export default Bar;