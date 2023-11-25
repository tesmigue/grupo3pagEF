/* eslint-disable react/jsx-props-no-spreading */
// LineChart.jsx
import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contextAPI/ContextProvider';

const LineChart = ({ chartId, title }) => {
  const { currentMode } = useStateContext();

  return (
    <div className="chart-box">
      <div>{title}</div>
      <ChartComponent
        id={`line-chart-${chartId}`}
        height="500px"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default LineChart;
