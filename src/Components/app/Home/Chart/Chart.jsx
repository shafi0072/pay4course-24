import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function Chart() {
    const data = [
        { date: new Date('2023-01-01'), close: 100 },
        { date: new Date('2023-01-02'), close: 110 },
        { date: new Date('2023-01-03'), close: 120 },
        // Add more data points as needed
      ];
  const chartContainer = useRef();

  useEffect(() => {
    const width = 928;
    const height = 500;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 30;
    const marginLeft = 40;

    const x = d3.scaleUtc()
      .domain(d3.extent(data, d => d.date))
      .range([marginLeft, width - marginRight]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.close)])
      .range([height - marginBottom, marginTop]);

    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.close));

    const svg = d3.select(chartContainer.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

    svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

    svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(height / 40))
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").clone()
        .attr("x2", width - marginLeft - marginRight)
        .attr("stroke-opacity", 0.1))
      .call(g => g.append("text")
        .attr("x", -marginLeft)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("↑ Daily close ($)"));

    svg.append("path")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line(data));
  }, [data]);

  return <div ref={chartContainer}></div>;
}

export default Chart;
