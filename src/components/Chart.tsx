'use client'

import React, { useRef, useEffect } from 'react';
import { init, getInstanceByDom } from 'echarts';
import type { ECharts } from "echarts";
import { Stack } from '@mantine/core';
import { colorPalette } from '@ui/colors';

const Chart = ({categories}: any) => {
   
    const chartRef = useRef(null);

    const options = {
        legend: {},
        tooltip: {},
        xAxis: {
          type: 'category'
        },
        dataset: {
            dimensions: ['category', 'price'],
            source: categories
        },
        yAxis: {},
        series: [{ type: 'bar', 
            itemStyle: {
                barBorderRadius: 5,
                borderWidth: 1,
                borderType: 'solid',
                borderColor: colorPalette.purple,
                shadowColor: colorPalette.purple100,
                shadowBlur: 3,
                color: colorPalette.purple
            }} 
        ]
    }
    
    useEffect(() => {
        // Initialize chart
        let chart: ECharts | undefined;
        if (chartRef.current !== null) {
          chart = init(chartRef.current);
        }
    
        // Return cleanup function
        return () => {
          chart?.dispose();
        };
      }, []);

    useEffect(() => {
        if (chartRef.current !== null) {
            const myChart = getInstanceByDom(chartRef.current);
            myChart?.setOption(options)
        }
    },[options])

    return (<Stack id='myChart' ref={chartRef} h={300} w={'auto'} />)
}

export default Chart;