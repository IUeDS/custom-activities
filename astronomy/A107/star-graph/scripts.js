function StarGraphActivity () {
	this.$starImage = $('.astro-star-image');
	this.$starRowContainer = $('.astro-star-row-container');
	this.$randomizeBtn = $('.astro-btn-randomize');
	this.$clickAlert = $('.astro-click-alert');
	this.selectedStarClass = 'astro-star-selection';
	this.chartOneClass = 'astro-chart-one';
	this.chartTwoClass = 'astro-chart-two';
	this.starImageMaxX = 500;
	this.starImageMaxY = 500;
	this.maxX = 4000;
	this.maxY = 4000;
	this.searchRadius = 40;
	this.selectionHeight = 10;
	this.selectionWidth = 10;
	this.numToRandomize = 24;
	this.avValue = 0;
	this.dmValue = 8;
	this.ebvValue = 0;
	this.eubValue = 0;
	this.evrValue = 0;
	this.distance = 398;
	this.$distance = $('.astro-distance-value');
	this.stars = null;
	this.adjustedStars = null; //adjusted as user adjusts cluster parameters
	this.selectedStars = [];
	this.pageNum = 1;
	this.$pageOneContent = $('.astro-page-1');
	this.$pageTwoContent = $('.astro-page-2');
	this.$pageThreeContent = $('.astro-page-3');
	this.$nextBtn = $('.astro-btn-next');
	this.$prevBtn = $('.astro-btn-prev');
	this.$to3rdPageBtn = $('.astro-btn-to-3rd');
	this.$from3rdPageBtn = $('.astro-btn-from-3rd');
	this.$paramsAlert = $('.astro-params-alert');
	this.$brightCount = $('.astro-bright-count');
	this.numBrightStars = 0;
	this.$intermCount = $('.astro-interm-count');
	this.numIntermStars = 0;
	this.$faintCount = $('.astro-faint-count');
	this.numFaintStars = 0;
	this.$downloadBtn = $('.astro-download-btn');


	this.init = function() {
		var that = this;
		d3.csv("data.csv", function(data, index) {
			//parse CSV, convert strings to numbers
			return {
				'id': index,
				'x': +(data.X),
				'y': +(data.Y),
				'magnitude': +(data['M_V=m_v-5logd+5-A_V']),
				'(U-B)_0': +(data['(U-B)_0']),
				'(B-V)_0': +(data['(B-V)_0']),
				'm_V': +(data['m_V']),
				'B-V': +(data['B-V']),
				'U-B': +(data['U-B']),
				'm_U': +(data['m_U']),
				'm_B': +(data['m_B']),
				'm_R': +(data['m_R']),
				'radius': +(data['Radius']),
				'V-R': +(data['V-R']) 
			}
		}, function(error, rows) {
			if (!error) {
				that.stars = rows;
				that.initHandlers();
				that.initCharts();
				that.initPage(that.pageNum);
			}
		});
	}

	this.initPage = function(pageNum) {
		if (pageNum === 1) {
			this.$pageTwoContent.hide();
			this.$pageThreeContent.hide();
			this.$pageOneContent.show();
			this.chartOne.changePage(1);
			this.chartTwo.changePage(1);
			this.$starImage.removeClass('disabled');
		}
		else if (pageNum === 2) {
			this.$pageOneContent.hide();
			this.$pageThreeContent.hide();
			this.$pageTwoContent.show();
			this.chartOne.changePage(2);
			this.chartTwo.changePage(2);
			this.$starImage.addClass('disabled');
		}
		else {
			this.$pageOneContent.hide();
			this.$pageTwoContent.hide();
			this.$pageThreeContent.show();
		}
		this.setLtiHeight();
	};

	this.setLtiHeight = function() {
	   var height = $('html').height() + 60; 
	   window.parent.postMessage(JSON.stringify({subject: 'lti.frameResize', height: height +"px"}), '*');
	}

	this.nextPage = function() {
		if (this.pageNum < 2) {
			this.pageNum++;
			this.initPage(this.pageNum);
		}
	};

	this.prevPage = function() {
		if (this.pageNum > 1) {
			this.pageNum--;
			this.initPage(this.pageNum);
		}
	};

	this.initHandlers = function() {
		this.initImageHandler();
		this.initRandomizeHandler();
		this.initClusterParameters();
		this.initPageButtonHandlers();
	};

	this.initImageHandler = function() {
		var that = this;
		this.$starImage.click(function(e) {
			if ($(this).hasClass('disabled')) {
				return;
			}
			var offset = $(this).offset(),
			    xValue = e.pageX - offset.left,
			    yTempValue = e.pageY - offset.top, //Y is flipped in jQuery, flip it back
				yValue = Math.abs(yTempValue - that.starImageMaxY),
				coords = that.mapImageToCoordinates(xValue, yValue),
				star = that.getStarFromCoordinates(coords);
			//console.log('x: ' + xValue + ', y: ' + yValue);	
			//console.log('coords x: ' + coords.x + ', coords y: ' + coords.y);

			if (star) {
				that.hideClickError(); //if it was shown previously...
				that.addStarTableRow(star);
				//unflip the Y-value (before it had 0 closer to top, when we wanted 0 closer to bottom);
				//has to be consistent between student-drawn and random computer-drawn circles
				yValue = yValue * -1 + that.starImageMaxY;
				that.drawStarSelection(xValue, yValue, star);
				that.updateStarCount(star);
			}
			else {
				that.showClickError();
			}

			//if we so choose to disable the next button until 24 stars are selected,
			//un-comment and add disabled="true" to the next button in html
			//if (that.chartOne.selectedStars.length >= 24) {
			//	that.$nextBtn.prop('disabled', false);
			//}
		});
	};

	this.updateStarCount = function(star) {
		this.selectedStars.push(star);
		if (star.m_V < 11) {
			this.numBrightStars++;
		}
		else if (star.m_V >= 11 & star.m_V < 13.5) {
			this.numIntermStars++;
		}
		else {
			this.numFaintStars++;
		}
		this.$brightCount.text(this.numBrightStars);
		this.$intermCount.text(this.numIntermStars);
		this.$faintCount.text(this.numFaintStars);
	};

	this.initRandomizeHandler = function() {
		var that = this;
		this.$randomizeBtn.click(function() {
			that.removeAllSelections();
			var stars = that.getRandomStars();
			stars.map(function(star) {
				that.addStarTableRow(star);
				var coords = that.mapCoordinatesToImage(star.x, star.y);
				that.drawStarSelection(coords.x, coords.y, star);
			});
		});
	};

	this.initPageButtonHandlers = function() {
		var that = this;

		this.$nextBtn.click(function() {
			that.nextPage();
		});

		this.$prevBtn.click(function() {
			that.prevPage();
		});

		this.$to3rdPageBtn.click(function() {
			that.initPage(3);
		});

		this.$from3rdPageBtn.click(function() {
			that.initPage(that.pageNum);
		});
	};

	//NOTE: decided not to use this code since it would not play nice with IE. For the axis labels,
	//using .html() works with FF/Chrome and allows downloading images. But IE does not accept the
	//.html() call and no axis labels show up, so I had to use .text() instead. But when I used
	//.text(), then the bootstrap/font awesome styles had to be applied, and the external cross-domain
	//CSS then raises a security error! Ugh! Not to mention, in Safari, downloading just opens up the
	//SVG in a new tab, and since we need to download two charts instead of 1, that would mean Safari
	//users would not be able to download both graphs. This is a huge browser compatibility mess. 
	//It would be better just to have students take screen shots. 
	this.initDownloadButton = function() {
		var that = this;

		this.$downloadBtn.click(function() {
			var chart1 = document.querySelector('.' + that.chartOneClass + ' svg'),
				chart2 = document.querySelector('.' + that.chartTwoClass + ' svg'),
				chart1axis = $('.' + that.chartOneClass + ' .axis-label'),
				chart2axis = $('.' + that.chartTwoClass + ' .axis-label');

			//UGH! so the unicode for subscript that I had to sneak in to get past the limitations
			//on svg <text> elementson the axis labels, is considered an invalid string when the
			//library parses the svg to turn it into a png! so remove it, download img, then put back!
			chart1axis.text(function(index, text) {
				return text.replace('\u2080', '_0');
			});
			saveSvgAsPng(chart1, "color-color-plot.png", { backgroundColor: '#FFFFFF'});
			chart1axis.text(function(index, text) {
				return text.replace('_0', '\u2080');
			});

			chart2axis.text(function(index, text) {
				return text.replace('\u2080', '_0');
			});
			saveSvgAsPng(chart2, "color-magnitude-diagram.png", { backgroundColor: '#FFFFFF'});
			chart2axis.text(function(index, text) {
				return text.replace('_0', '\u2080');
			});
		});
	};

	this.removeAllSelections = function() {
		$('.' + this.selectedStarClass).remove();
		this.$starRowContainer.empty();
		this.chartOne.removeSelections();
		this.chartTwo.removeSelections();
	};

	this.getRandomStars = function() {
		var min = 0,
			max = this.stars.length - 1,
			//deep copy the stars array, so when we splice out items, they remain in original
			availableStars = JSON.parse(JSON.stringify(this.stars)),
			chosenStars = [],
			i = 0;

		for (i = 0; i < this.numToRandomize; i++) {
			var randomIndex = this.getRandomNumber(min, max),
				randomStar = availableStars[randomIndex];
			chosenStars.push(randomStar);
			availableStars.splice(randomIndex, 1);
			max = max - 1; //so the randomized max is still in range
		}

		return chosenStars;
	};

	this.getRandomNumber = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	this.mapImageToCoordinates = function(xValue, yValue) {
		//map and round the numbers to 2 places
		var mappedX = Math.round(xValue / this.starImageMaxX * this.maxX * 100) / 100,
			mappedY = Math.round(yValue / this.starImageMaxY * this.maxY * 100) / 100;

		return { 'x' : mappedX, 'y' : mappedY };
	};

	this.mapCoordinatesToImage = function(xValue, yValue) {
		//map and round the numbers to 2 places
		var mappedX = Math.round(xValue / this.maxX * this.starImageMaxX * 100) / 100,
			mappedY = Math.round(yValue / this.maxY * this.starImageMaxY * 100) / 100;

		mappedY = this.starImageMaxY - mappedY; //flip Y value

		return { 'x' : mappedX, 'y' : mappedY };
	}

	this.getStarFromCoordinates = function(coords) {
		var that = this,
			nearbyStars = [],
			foundStar = null,
			maxMagnitude = 100; //confusingly, the lower the number, the brighter the star, so reverse
		this.stars.forEach(function(star) {
			var starMinX = star.x - that.searchRadius,
				starMaxX = star.x + that.searchRadius,
				xWithinRange = coords.x > starMinX && coords.x < starMaxX ? true : false,
				starMinY = star.y - that.searchRadius,
				starMaxY = star.y + that.searchRadius,
				yWithinRange = coords.y > starMinY && coords.y < starMaxY ? true : false;
			if (xWithinRange && yWithinRange) {
				nearbyStars.push(star);
			}
		});

		nearbyStars.map(function(nearbyStar) {
			//if multiple stars have been found, pick the brightest one, which, paradoxically,
			//has the LOWEST magnitude, not the highest
			if (nearbyStar.magnitude < maxMagnitude) {
				maxMagnitude = nearbyStar.magnitude;
				foundStar = nearbyStar;
			}
		});

		return foundStar;
	}

	this.addStarTableRow = function(star) {
		var row = "<tr><td>" + star.x + "</td><td>" + star.y + "</td><td>" + star['(B-V)_0'] + "</td><td>"
		+ star['(U-B)_0'] + "</td><td>" + star.magnitude + "</td><td>" + star['m_U'] + "</td><td>" 
		+ star['m_B'] + "</td><td>" + star['m_V'] + "</td><td>" + star['m_R'] + "</td><td>" + star['radius']
		+ "</td><td>" + star['U-B'] + "</td><td>" + star['B-V'] + "</td><td>" + star['V-R'] + "</td></tr>";
		this.$starRowContainer.append(row);
	};

	this.drawStarSelection = function(xValue, yValue, star) {
		var position = this.mapSelectionPosition(xValue, yValue); 
		$("<div class='" + this.selectedStarClass + "'></div>")
			.css({
				'left' : position.x + "px",
				'top': position.y + "px"
			})
			.appendTo($('main'));

		this.selectStarInChart(star);
	}

	this.selectStarInChart = function(star) {
		this.chartOne.selectStar(star);
		this.chartTwo.selectStar(star);
	}

	//since appending to the image DOM element directly makes the selection invisible,
	//since images do not contain DOM elements internally, instead we have to append
	//the selection to a position absolute to the page as a whole
	//TODO: what happens when someone resizes the window? maybe prevent default and an alert?
	this.mapSelectionPosition = function(xValue, yValue) {
		//re-adjust to absolute, and also adjust for the radius of the circle so it is centered to click
		var x = xValue + this.$starImage.offset().left - (this.selectionWidth / 2),
			y = yValue + this.$starImage.offset().top - (this.selectionHeight / 2);

		return { 'x' : x, 'y' : y };
	}

	this.showClickError = function() {
		this.$clickAlert.removeClass('hidden');
	};

	this.hideClickError = function() {
		this.$clickAlert.addClass('hidden');
	}

	this.initCharts = function(data) {
		this.chartOne = new Chart();
		this.chartTwo = new Chart();

		if (!data) {
			data = this.stars;
		}

		var chartOneParams = {
			'container': '.' + this.chartOneClass,
			'data': data,
			'polynomialFactor': 6,
			'chartName': 'color-color',
			'pageOne': {
				'xAxisTitle': 'B-V',
				'yAxisTitle': 'U-B',
				'xData': 'B-V',
				'yData': 'U-B'
			},
			'pageTwo': {
				'xAxisTitle': '(B-V)\u2080', //\u2080 use unicode to sneak in subscript
				'yAxisTitle': '(U-B)\u2080', //\u2080 use unicode to sneak in subscript
				'xData': '(B-V)_0',
				'yData': '(U-B)_0'
			}
		};
		this.chartOne.init(chartOneParams);

		var chartTwoParams = {
			'container': '.' + this.chartTwoClass,
			'data': data,
			'polynomialFactor': 5,
			'chartName': 'color-magnitude',
			'pageOne': {
				'xAxisTitle': 'B-V',
				'yAxisTitle': 'm_V',
				'xData': 'B-V',
				'yData': 'm_V'
			},
			'pageTwo': {
				'xAxisTitle': '(B-V)\u2080', //\u2080 use unicode to sneak in subscript
				'yAxisTitle': 'M_V',
				'xData': '(B-V)_0',
				'yData': 'magnitude',
			}
		};
		this.chartTwo.init(chartTwoParams);
	}

	this.initClusterParameters = function() {
		var that = this;
		$('#A_V').keyup(function() {
			that.onAvChange($(this).val());
		});

		$('#DM').keyup(function() {
			that.onDmChange($(this).val());
		});
	};

	this.showClusterParametersError = function() {
		this.$paramsAlert.removeClass('hidden');
	};

	this.hideClusterParametersError = function() {
		this.$paramsAlert.addClass('hidden');
	};

	this.onAvChange = function(value) {
		this.avValue = +(value);
		if (isNaN(value)) {
			this.showClusterParametersError();
			return;
		}
		else {
			this.hideClusterParametersError();
		}
		this.ebvValue = this.avValue / 3.1;
		this.eubValue = this.avValue / 3.9;
		this.evrValue = this.avValue / 5.4;
		this.updateValues();
	};

	this.onDmChange = function(value) {
		this.dmValue = +(value);
		if (isNaN(value)) {
			this.showClusterParametersError();
			return;
		}
		else {
			this.hideClusterParametersError();
		}
		var base = 10,
			power = (this.dmValue + 5) / 5;
		this.distance = Math.pow(base, power);
		this.updateValues();
	};

	this.updateValues = function() {
		this.$distance.html(Math.round(this.distance));
		this.updateChartFromValues();
	};

	this.updateChartFromValues = function() {
		var updatedValues = [],
			that = this;
		this.stars.forEach(function(star) {
			var updatedValue = star;
			updatedValue['(B-V)_0'] = star['B-V'] - that.ebvValue;
			updatedValue['(U-B)_0'] = star['U-B'] - that.eubValue;
			updatedValue['magnitude'] = star['m_V'] - that.dmValue - that.avValue;
			updatedValues.push(updatedValue);
		});
		this.adjustedStars = updatedValues;
		this.chartOne.destroy();
		this.chartTwo.destroy();
		this.chartOne.build(this.adjustedStars);
		this.chartTwo.build(this.adjustedStars);
		this.chartOne.changePage(this.pageNum);
		this.chartTwo.changePage(this.pageNum);
	};
}

var starGraphActivity = new StarGraphActivity();
starGraphActivity.init();