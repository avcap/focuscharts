import React, { useEffect, useRef } from 'react';

const TradingViewChart = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!window.TradingView) {
      console.error('TradingView script not loaded');
      return;
    }

    const widget = new window.TradingView.widget({
      container_id: containerRef.current?.id,
      width: containerRef.current?.clientWidth || 800,
      height: 500,
      symbol: 'NASDAQ:NVDA',
      interval: '60',
      timezone: 'Etc/UTC',
      theme: 'dark',
      style: '1',
      locale: 'en',
      toolbar_bg: '#181a20',
      allow_symbol_change: true,
      details: true,
      hotlist: true,
      calendar: true,
      studies: [
        'MASimple@tv-basicstudies',
        'EMAExp@tv-basicstudies',
        'VWAP@tv-basicstudies',
        'RSI@tv-basicstudies',
      ],
    });

    return () => {
      // Safely clear the container on unmount
      try {
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
        }
      } catch (cleanupError) {
        console.warn('Error cleaning up TradingView widget:', cleanupError);
      }
    };
  }, []);

  return (
    <div
      id="tv_chart_container"
      ref={containerRef}
      style={{
        width: '100%',
        maxWidth: '900px',
        height: '500px',
        margin: '40px auto',
      }}
    />
  );
};

export default TradingViewChart;
