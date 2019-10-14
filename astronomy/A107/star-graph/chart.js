//got some help from this example: http://bl.ocks.org/weiglemc/6185069
function Chart() {

	this.margin = {top: 20, right: 20, bottom: 60, left: 60};
	this.width = 500 - this.margin.left - this.margin.right,
    this.height = 400 - this.margin.top - this.margin.bottom;
    this.selectedClass = 'dot-selected';
    this.staticClass = 'dot-static';
    this.selectedStars = [];
    this.staticData = null;
    this.pageNum = 1;
    this.axesDrawn = false;
    this.chartName = '';
    this.tooltip = null;

	this.init = function(params) {
		var that = this;
		d3.csv("fiducial.csv", function(data, index) {
			//parse CSV, convert strings to numbers
			return {
				'id': 'static-' + index,
				'static': true,
				'magnitude': +(data['M_V=m_v-5logd+5-A_V']),
				'(U-B)_0': +(data['(U-B)_0']),
				'(B-V)_0': +(data['(B-V)_0']),
				'B-V': +(data['B-V']),
				'U-B': +(data['U-B']),
				'm_V': +(data['m_V'])
			}
		}, function(error, rows) {
			if (!error) {
				that.staticData = rows;
				that.construct(params);
			}
		});
	};

	this.construct = function(params) {
		//add params as member variables
		this.chartName = params.chartName;
		this.pageOne = params.pageOne;
		this.pageTwo = params.pageTwo;
		this.xAxisTitle = params.pageOne.xAxisTitle;
		this.yAxisTitle = params.pageOne.yAxisTitle;
		this.xData = params.pageOne.xData;
		this.yData = params.pageOne.yData;
		this.container = params.container;
		this.polynomialFactor = params.polynomialFactor;
		this.build(params.data);
	}

	this.build = function(data) {
		this.data = data.concat(this.staticData);
		this.initAxes();
		this.initChart();
		this.initTooltips();
		this.drawAxes();
		this.drawPoints();
		this.drawRegression();
	}

	this.destroy = function() {
		$(this.container).html('');
	}

	this.changePage = function(pageNum) {
		this.pageNum = pageNum;
		//if the chart is already drawn and we're switching between pages, we
		//need to destroy and rebuild so axis titles and data can be swapped
		if (this.axesDrawn) {
			this.setPageData(pageNum);
			this.destroy();
			this.build(this.data);
		}

		if (pageNum === 1) {
			//show all data points, but no fiducial
			$('.regression').hide();
			$('.dot').not('.dot-static').show();
		}
		else {
			//show only student-selected points and fiducial
			$('.regression').show();
			$('.dot').not('.' + this.selectedClass).hide();
		}
	}

	this.setPageData = function(pageNum) {
		var pageName;
		if (pageNum === 1) {
			pageName = 'pageOne';
		}
		else {
			pageName = 'pageTwo';
		}
		this.xAxisTitle = this[pageName].xAxisTitle;
		this.yAxisTitle = this[pageName].yAxisTitle;
		this.xData = this[pageName].xData;
		this.yData = this[pageName].yData;
	}

	this.initAxes = function() {
		this.xScale = d3.scale.linear().range([0, this.width]);
		this.yScale = d3.scale.linear().range([this.height, 0]);
		this.xAxis = d3.svg.axis().scale(this.xScale).orient("bottom");
		this.yAxis = d3.svg.axis().scale(this.yScale).orient("left");		
	};

	this.initChart = function() {
		this.svg = d3.select(this.container).append("svg")
    		.attr("width", this.width + this.margin.left + this.margin.right)
    		.attr("height", this.height + this.margin.top + this.margin.bottom)
  			.append("g")
    		.attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
	};

	this.initTooltips = function() {
    	if (this.chartName === 'color-color') {
    		this.tooltip = d3.select('.astro-tooltip-1');
    	}
    	else {
    		this.tooltip = d3.select('.astro-tooltip-2');
    	}
	};

	this.drawAxes = function() {
  		var that = this,
  			distanceFromAxis = 0.3;

  		//for dynamic axes: we decided against this, but just in case...
  		//this.minX = d3.min(this.data, function(d) { return d[that.xData]; });
		//this.maxX = d3.max(this.data, function(d) { return d[that.xData]; });
		//this.minY = d3.min(this.data, function(d) { return d[that.yData]; });
		//this.maxY = d3.max(this.data, function(d) { return d[that.yData]; });

  		//make axes static based on initial data	
  		if (this.chartName === 'color-color') {
			this.xScale.domain(
	  			[-0.5 - distanceFromAxis,
	  		     2 + distanceFromAxis]);
	  		this.yScale.domain(
	  			[2 + distanceFromAxis,
	  			-1 - distanceFromAxis]);
		}
		else if (this.chartName === 'color-magnitude') {
			this.xScale.domain(
  				[-0.5 - distanceFromAxis,
	  		     2 + distanceFromAxis]);
			if (this.pageNum === 1) {
				this.yScale.domain(
		  			[16 + distanceFromAxis,
		  			6 - distanceFromAxis]);
			}
			else {
				this.yScale.domain(
		  			[12 + distanceFromAxis,
		  			-6 - distanceFromAxis]);
			}
		}
  		this.drawXAxis();
  		this.drawYAxis();
  		this.axesDrawn = true;
	};

	this.drawXAxis = function() {
		this.svg.append("g")
	      .attr("class", "x axis")
	      .attr("transform", "translate(0," + this.height + ")")
	      .call(this.xAxis)
	      .append("text")
	      .attr("class", "axis-label")
	      .attr("x", this.width / 2 + (this.margin.left + this.margin.right) / 2)
	      .attr("y", 56)
	      .style("text-anchor", "end")
	      //.html(this.xAxisTitle);
	      .text(this.xAxisTitle);
	};

	this.drawYAxis = function() {
		 this.svg.append("g")
	      .attr("class", "y axis")
	      .call(this.yAxis)
	      .append("text")
	      .attr("class", "axis-label")
	      .attr("transform", "rotate(-90)")
	      .attr("y", -56)
	      .attr("x", -1 * (this.height / 2 - (this.margin.top + this.margin.bottom) / 2))
	      .attr("dy", ".71em")
	      .style("text-anchor", "end")
	      //.html(this.yAxisTitle);
	      .text(this.yAxisTitle);
	};

	this.drawPoints = function() {
		var that = this;
		this.listWithData = this.svg.selectAll(".dot")
	      .data(that.data)
	    .enter().append("circle")
	      .attr("class", "dot")
	      .classed(that.staticClass, function(d) {
	      	return d.static;
	      })
	      .attr("r", 3.5)
	      .attr("cx", function(d) {
	      	//fiduciary does not have data required in 1st chart, avoid undefined error
	      	if (!isNaN(d[that.xData])) {
	      		return that.xMap(d);
	      	}
	      })
	      .attr("cy", function(d) {
	      	//fiduciary does not have data required in 1st chart, avoid undefined error
	      	if (!isNaN(d[that.yData])) {
	      		return that.yMap(d);
	      	}
	      })
	      .attr("id", function(d) {
	      	return 'id-' + d.id;
	      })
	      .on("mouseover", function(d) {
	          var html = '<p>X: ' + that.xValue(d).toFixed(2) + ', Y: ' + 
	          	that.yValue(d).toFixed(2) + ', RA: ?, Dec: ?, m_V: ' + d['m_V'] + '</p>';
	          that.tooltip.html(html);
	          that.tooltip.classed('invisible', false);
	          that.tooltip.transition().duration(500).style("opacity", 1);
	      })
	      .on("mouseout", function(d) {
	         that.tooltip.style("opacity", 0).classed('invisible', true);
	      });

	      //if stars have been selected, we need to remove and re-draw them so that
	      //they continue to appear first in the z-index in the chart
	      if (this.selectedStars.length) {
	      	this.selectedStars.forEach(function(star) {
	      		that.markStarSelected(star);
	      	});
	      }
	};

	this.drawRegression = function() {
		//referenced this: http://bl.ocks.org/akbstone/af99d56af1d0c433cc31
		if (this.pageNum !== 2) {
			return;
		}

		var that = this,
			minX = this.xScale(this.xAxis.scale().domain()[0]),
			maxX = this.xScale(this.xAxis.scale().domain()[1]),
			minY = this.yScale(this.yAxis.scale().domain()[1]),
			maxY = this.yScale(this.yAxis.scale().domain()[0]);
		var yLimits = this.yAxis.scale().domain(),
			xLimits = this.xAxis.scale().domain();
		var regLine = d3.svg.line()
			.interpolate("basis")
			.x(function(d){return d[0]; }) 
			.y(function(d){return d[1]; });
		//sort the points first into the correct order, otherwise madness occurrs with the regression line
		var points = this.staticData.sort(function(a, b) {
            return parseFloat(a[that.xData]) - parseFloat(b[that.xData]);
        });
		var polyRegression = regression('polynomial', points.map(function(_d) {
			return [that.xScale(_d[that.xData]), that.yScale(_d[that.yData])];
		}), this.polynomialFactor);
		this.svg.append('path')
			.datum(polyRegression.points)
			.attr('class', 'regression')
			.attr('d', regLine);
		//hide it initially on page 1
		$('.regression').hide();
	};

	this.xValue = function(d) {
		return d[this.xData];
	};

	this.yValue = function(d) {
		return d[this.yData];
	};

	this.xMap = function(d) {
		return this.xScale(this.xValue(d));
	};

	this.yMap = function(d) {
		return this.yScale(this.yValue(d));
	};

	this.selectStar = function(star) {
		this.markStarSelected(star);
		this.selectedStars.push(star);
	};

	this.markStarSelected = function(star) {
		//a little bit of magic here...
		//so if the student selects a star that is clustered with a bunch of others and
		//drawn behind them, then even if it's highlighted in red, it can be difficult or
		//impossible to see. SVG does not have z-index, unfortunately, so it requires
		//removing the dot and redrawing it for it to appear above the others.

		var id = '#id-' + star.id.toString();
		var dot = this.svg.select(id);
		dot.remove();
		this.svg.node().appendChild(dot.node());
		dot.classed(this.selectedClass, true);
	};

	this.removeSelections = function() {
		this.svg.selectAll('.' + this.selectedClass).classed(this.selectedClass, false);
		this.selectedStars = [];
	}
}