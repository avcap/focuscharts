import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const chartData = [
  { time: '2024-06-10', open: 100, high: 110, low: 95, close: 105 },
  { time: '2024-06-11', open: 105, high: 115, low: 102, close: 112 },
  { time: '2024-06-12', open: 112, high: 117, low: 108, close: 114 },
  { time: '2024-06-13', open: 114, high: 120, low: 110, close: 118 },
  { time: '2024-06-14', open: 118, high: 125, low: 116, close: 123 },
];

const TradingViewChart = () => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const container = chartContainerRef.current;
    if (!container) return;

    const chart = createChart(container, {
      width: container.clientWidth,
      height: 400,
      layout: { background: { color: '#181a20' }, textColor: '#d1d4dc' },
      grid: { vertLines: { color: '#363c4e' }, horzLines: { color: '#363c4e' } },
      priceScale: { borderColor: '#485c7b' },
      timeScale: { borderColor: '#485c7b' },
    });

    // Use addSeries API for candlesticks
    const candleSeries = chart.addSeries('Candlestick', {
      upColor: '#4caf50',
      downColor: '#f44336',
      borderVisible: false,
      wickUpColor: '#4caf50',
      wickDownColor: '#f44336',
    });
    candleSeries.setData(chartData);

    // Responsive
    const handleResize = () => chart.applyOptions({ width: container.clientWidth });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div
      ref={chartContainerRef}
      style={{ width: '100%', maxWidth: '800px', height: '400px', margin: '40px auto', borderRadius: 8, background: '#181a20' }}
    />
  );
};

export default TradingViewChart;
