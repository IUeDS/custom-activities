import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService {

  constructor() { }

  private a111RootUrl = 'https://indiana.edu/~jsomelec';

  getPageQuestions(labNum, pageNum) {
		let labString = 'lab' + labNum.toString();
		let	pageString = 'page' + pageNum.toString();
		return this.questions[labString][pageString];
	}

  /* TEMPLATES FOR COPYING TO CREATE NEW QUESTIONS:
   * A111 root url: ${this.a111RootUrl}
   * Base:
   'question1': {
		'htmlBeforeQuestion': ``,
		'questionText': ``,
		'questionType': null,
		'options': [],
		'htmlAfterQuestion': ``
	}
   * Multiple choice option:
	{
		'text': ``,
		'correct': false,
		'feedback': ``
	}
	* Numerical range option:
	{
		'low': 1,
		'high': 2,
		'correct': false,
		'feedback': ``
	}
	* Single dropdown option:
	{
		'text': ``,
		'correct': ,
		'feedback': ``
	}
  */
  questions = {
  	'lab1': {
  		'page1': [
  			{
  				'htmlBeforeQuestion': `
			        <div class="image_left">
						<a href="${this.a111RootUrl}/A111/img/unit01/labs/labkit.png" target="new">
							<img src="${this.a111RootUrl}/A111/img/unit01/labs/labkit.png" alt="" width="400" height="416" class="image_border"/>
						</a>
					</div>
					<p align="center">Required materials (<em>as shown in figure 1-1</em>): Your Lab Kit
      					<br>
      					<em>Click on image for larger image.</em>
	              		<div class="image_center">
	                		<iframe src="https://cdnapisec.kaltura.com/p/1751071/sp/175107100/embedIframeJs/uiconf_id/26683571/partner_id/1751071?iframeembed=true&playerId=kaltura_player_1466447024&entry_id=1_3m024sqj&flashvars[streamerType]=auto" width="400" height="333" allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder="0"></iframe>
	                  		<br>
	                  		<a href="http://www.kaltura.com/tiny/q31ze" target="_blank">View video in a new tab (option for full screen)</a>
	               		</div>
					</p>
        			<div class="line_break"></div>
        			<h1>Let's Get Started</h1>
        			<p>We will start exploring your lab kit by gaining an understanding of the breadboard. The breadboard is the white, hole covered  rectangle near the front of your lab kit. Breadboards are used as a way to connect electronic  components quickly for testing or prototyping circuits. You will use it to  build all of your &ldquo;real world&rdquo; circuits this semester.</p>
       				<p>When building a circuit from a schematic (the drawing of  components showing how they are connected) the main point to focus on is what  things (battery, light bulb, etc) are connected. These breadboards provide a number of different junction points where multiple things  can be connected. The layout is logical and should not take you too long to  define. That will be your first lab exercise. In order to decide what is connected we need a tool for  telling us that. We will use a Digital Multimeter. </p>
        			<div class="image_right">
        				<a href="${this.a111RootUrl}/A111/img/unit01/labs/continuity.png" target="new">
        					<img src="${this.a111RootUrl}/A111/img/unit01/labs/continuity.png" alt="" width="200" height="307" class="image_border"/>
        				</a>
        			</div>
        			<p>Figure 1-2 shows a picture  of the multimeter included with your lab kit.</p>
          			<p><strong>1-1.</strong> Set the  meter to continuity test, as it is in figure 1-2 (<em>click on image for larger version</em>). Then  touch the leads from the meter to each other. You will hear a &ldquo;beep&rdquo; and the  screen should show a reading close to &ldquo;0&rdquo;. If there is not a connection between the two leads, you  will not hear the &ldquo;beep&rdquo; and the screen will show &ldquo;1&nbsp;&nbsp;&nbsp;&nbsp;&rdquo; (<em>as it shows in figure 1-2</em> ). This is demonstrated in the following video. Test this to make sure you understand how the continuity test works on your multimeter.</p>
        			<iframe src="https://cdnapisec.kaltura.com/p/1751071/sp/175107100/embedIframeJs/uiconf_id/26683571/partner_id/1751071?iframeembed=true&playerId=kaltura_player_1466446728&entry_id=1_o6skwyru&flashvars[streamerType]=auto" width="400" height="333" allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder="0"></iframe>
      				<br>
      				<a href="http://www.kaltura.com/tiny/n33sj" target="_blank">View video in a new tab (option for full screen)</a>
        			<p>&nbsp;</p>
          			<div class="image_right">
          				<a href="${this.a111RootUrl}/A111/img/unit01/labs/continuity.png" target="new">
          					<img src="${this.a111RootUrl}/A111/img/unit01/labs/jumperwires.png" alt="" width="200" height="126" class="image_border"/>
          				</a>
          			</div>
          			<p><strong>1-2.</strong> In order to connect to the  breadboard we will use jumper wires,  these are in a bag in the compartment next to your breadboard and are shown in figure 1-3. These wires plug into the holes on your  breadboard. Connect the other end to the Multimeter using the alligator clips  attached to the leads as demonstrated in the following video.</p>
          			<iframe src="https://cdnapisec.kaltura.com/p/1751071/sp/175107100/embedIframeJs/uiconf_id/26683571/partner_id/1751071?iframeembed=true&playerId=kaltura_player_1466446780&entry_id=1_12jb8y87&flashvars[streamerType]=auto" width="400" height="333" allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder="0"></iframe>
        			<br>
        			<a href="http://www.kaltura.com/tiny/wd1x9" target="_blank">View video in a new tab (option for full screen)</a>
        			<h1>Figure Stuff Out</h1>
        			<div class="image_right">
        				<img src="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-2/Breadboard.jpg"  alt="Schematic" width="259" height="200" class="image_border"/>
        			</div>
        			<p><strong>1-3.</strong> Using the method shown in the video, test your breadboard (shown in figure 1-4) and create a map showing what holes are connected. There is a logical grouping to the holes that are connected (rows  or columns) but you need to determine how many holes are connected together. Create this map on a piece of paper and have it ready for the rest of the lab. You are creting a reference for yourself that tells you how the holes on the breadboard are connected.        </p>
        			<h2>Move on to page 2</h2>
  				`
  			}
  		],
  		'page2': [
  			{
				'htmlBeforeQuestion': `
					<div class="image_right">
			        	<img src="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-2/Breadboard.jpg"  alt="Schematic" width="259" height="200" class="image_border"/>
			        	<div class="image_center">
			        		<img src="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-2/BreadboardCloseup1.png"  alt="Schematic" width="152" height="200" class="image_border"/>
			        	</div>
			        </div>
			        <h1>Breadboard Results</h1>
			        <p>Here is what you should have found when you tested your breadboard. Make certain that you understand what holes are connected on the breadboard, or the rest of your labs will not go so well... :-(</p>
					<ol type="a">
			       		<li>This close-up image (figure 2-2) color codes the holes to indicate how they are connected. The holes with the same color are connected to each other. Any component leads placed in those holes will connect to each other. We will use these as the junction points as we build our circuits. More on junction points later on this page.</li>
						<li>The numbered vertical columns are connected in groups of 5 (a-e and, separately, f-j).</li>
			       		<li>In addition there are long horizontal rows of 50 holes that are connected. These have red or blue lines running along them, as shown in figure 2-3.</li>
					</ol>
			        <div class="image_center">
			       		<img src="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-2/BreadboardCloseup2.jpg" alt="Schematic" width="1000" height="72" class="image_border"/>
			        </div>
			        <div class="line_break"></div>
			        <h1>Figure out the Switches</h1>
			        <div class="image_right">
			       		<img src="${this.a111RootUrl}/A111/img/unit01/labs/switch_schematic.png" alt="Switch Schematic Symbol" width="300" height="90" class="image_border"/><br>
			       		<div class="image_center">
			       			<a href="${this.a111RootUrl}/A111/img/unit01/labs/switches.png" target="new">
			       				<img src="${this.a111RootUrl}/A111/img/unit01/labs/switches.png" alt="Switch picture" width="200" height="281" class="image_border"/>
			       			</a>
			       		</div>
			        </div>
			       <p><strong>1-4. </strong>You have two  SPDT switches on your breadboard. They are to the right side of your breadboard. Beside them are three holes (per switch) similar to the ones on your breadboard. These holes connect to the three connections of the switch.
			       <ul>
			         <li>Test the switch connections and identify  how they relate to the connections on the schematic symbol of the switch that is shown in figure 2-4.
			         </li>
			         <li>Use the continuity test on your multimeter as you did with the breadboard. </li>
			         <li>This time check connections with the switch in both positions (up and down). </li>
			         <li>In the up switch posistion you will find that two of the connections are connected (your meter will beep).
			           <ul>
			             <li>One of these connections will be &quot;A&quot; in figure 2-4.</li>
			             <li>The other will be &quot;B&quot;</li>
			             <li>You won't be able to tell which is &quot;A&quot; and which is &quot;B&quot; until the next step.</li>
			           </ul>
			         </li>
			         <li> In the down switch position connection &quot;B&quot; will connect to the third connection, which we will call &quot;C&quot; and NOT to &quot;A&quot;.</li>
			         <li> Test until you can identify which of the three holes beside the switch is A, B, and C. </li>
			         <li>Keep a record of this to use for future labs.</li>
			       </ul>
				`,
				'questionText': `<p><strong>Question #1: The top connection beside the switch is connected to:</strong></p> `,
				'questionType': 'multiple-choice',
				'options': [
					{
						'text': `A`,
						'correct': false,
						'feedback': `Nope, test again!`
					},
					{
						'text': `B`,
						'correct': false,
						'feedback': `Nope, test again!`
					},
					{
						'text': `C`,
						'correct': true,
						'feedback': `CORRECT!`
					}
				],
  			},
  			{
				'htmlBeforeQuestion': ``,
				'questionText': `<p><strong>Question #2: The middle connection beside the switch is connected to:</strong> </p>`,
				'questionType': 'multiple-choice',
				'options': [
					{
						'text': `A`,
						'correct': false,
						'feedback': `Nope, test again!`
					},
					{
						'text': `B`,
						'correct': true,
						'feedback': `CORRECT!`
					},
					{
						'text': `C`,
						'correct': false,
						'feedback': `Nope, test again!`
					}
				],
  			},
  			{
				'htmlBeforeQuestion': ``,
				'questionText': `<p><strong>Question #3: The bottom connection beside the switch is connected to:</strong></p>`,
				'questionType': 'multiple-choice',
				'options': [
					{
						'text': `A`,
						'correct': true,
						'feedback': `CORRECT!`
					},
					{
						'text': `B`,
						'correct': false,
						'feedback': `Nope, test again!`
					},
					{
						'text': `C`,
						'correct': false,
						'feedback': `Nope, test again!`
					}
				],
				'htmlAfterQuestion': `
					<div class="line_break"></div>
			       <h1>A Method for Building Your Circuit</h1>
			        <div class="image_right">
			        	<a href="${this.a111RootUrl}/A111/img/unit01/labs/voltagemeasureschem.png" target="new">
			        		<img src="${this.a111RootUrl}/A111/img/unit01/labs/voltagemeasureschem.png"  alt="Schematic" width="559" height="300" class="image_border"/>
			        	</a>
			        </div>
			       <p>In figure 2-5 you see a very simple circuit with a voltage source, a light bulb, and a voltmeter. In order to build the circuit on the breadboard we need to identify the junction points in the circuit. These are the places where components, sources, multimeters, and oscilloscopes connect together.</p>
			       <p>This circuit is not too difficult, but practicing with these simple circuits will make it easier when we get the the complex circuits later in the course.</p>
			       <ol>
			         <li>You must pick a single point in the circuit from which to begin. I think that the positive connection of the voltage source is always a good place to start.
			           <ul>
			             <li>We will call that junction point &quot;A&quot;</li>
			           </ul>
			         </li>
			         <li>Define what is connected to the positive of the voltage source.
			           <ul>
			             <li>One side of the light bulb.</li>
			             <li>The positive (red) lead from the multimeter.</li>
			           </ul>
			         </li>
			         <li>Note how many components (or meter connections) connect to that junction point.
			           <ul>
			             <li>For junction point &quot;A&quot; in this circuit we have 3 things connected:
			               <ul>
			                 <li>Positive connection of the voltage source</li>
			                 <li>One side of the light bulb</li>
			                 <li>The positive (red) lead from the multimeter.</li>
			               </ul>
			             </li>
			           </ul>
			         </li>
			         <li>When building the circuit on the breadboard, those three things should be connected to holes in the breadboard that are connected.
			           <ul>
			             <li>ONLY those three things should be connected to the junction point on the breadboard.</li>
			             <li>If you are using one of the &quot;columns&quot; with 5 connected holes, there should be two empty holes.</li>
			           </ul>
			         </li>
			         <li>In this circuit we only have one other junction point, we'll call that &quot;B&quot;</li>
			         <li>There are once again three things connection to junction point &quot;B&quot;.
			           <ul>
			             <li>The other side of the light bulb.</li>
			             <li>The negative (black) lead from the multimeter</li>
			             <li>The negative connection to the voltage source.</li>
			           </ul>
			         </li>
			         <li>When building the circuit on the breadboard, those three things should be connected to holes in the breadboard that are connected.
			           <ul>
			             <ul>
			               <li>ONLY those three things should be connected to the junction point on the breadboard.</li>
			               <li>If you are using one of the &quot;columns&quot; with 5 connected holes, there should be two empty holes.</li>
			             </ul>
			       </ol>
			       <h1>Now you are ready to BUILD!</h1>
			       <h2>Move on to page 3</h2>
				`,
  			}
  		],
  		'page3': [
  			{
			    'htmlBeforeQuestion': `
					<h1>Voltage Measurement</h1>
			       <p>&nbsp;</p>
			       <div class="video_left">
			            <iframe src="https://cdnapisec.kaltura.com/p/1751071/sp/175107100/embedIframeJs/uiconf_id/26683571/partner_id/1751071?iframeembed=true&playerId=kaltura_player_1466447356&entry_id=1_2453eb30&flashvars[streamerType]=auto" width="400" height="333" allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder="0"></iframe>
			            <br>
			            <a href="http://www.kaltura.com/tiny/o9koa" target="_blank">View video in a new tab (option for full screen)</a>
			       </div>
			       <div class="image_right">
			       		<a href="${this.a111RootUrl}/A111/img/unit01/labs/voltagemeasureschem.png" target="new">
			       			<img src="${this.a111RootUrl}/A111/img/unit01/labs/voltagemeasureschem.png"  alt="Schematic" width="469" height="250" class="image_border"/>
			       		</a>
			       	</div>
			       <p style='clear: both;'><strong>1-4. </strong>Watch the video and then build the circuit shown in figure 3-2 on your breadboard according to the directions that follow.</p>
			       <ul>
			         <li>Set the meter switch on your lab kit to the left to show the voltage of the &quot;+Var&quot; supply.</li>
			         <li>Turn the knob above &quot;+Var&quot; fully counterclockwise, this will set the &quot;+Var&quot; supply to 0 volts.</li>
			         <li>Connect the light bulb to the breadboard. (<em>choose any two holes that are not connected</em>)</li>
			         <li>Connect all junction point &quot;A&quot; items.
			           <ol>
			             <li>light bulb (<em>already in the breadboard</em>)</li>
			             <li>Positive from the voltage source, +Var</li>
			             <li>Positive (red) lead from the multimeter</li>
			           </ol>
			         </li>
			         <li>Connect all junction point &quot;B&quot; items.
			           <ol>
			             <li>light bulb (<em>already in the breadboard</em>)</li>
			             <li>Negative from the voltage source, GND</li>
			             <li>Negative (black) lead from the multimeter</li>
			           </ol>
			         </li>
			       </ul>
					<br>
			        <div class="image_right">
			        	<a href="${this.a111RootUrl}/A111/img/unit01/labs/voltmeter.png" target="new">
			        		<img src="${this.a111RootUrl}/A111/img/unit01/labs/voltmeter.png"  alt="Schematic" width="128" height="200" class="image_border"/>
			        	</a>
			        </div>
			        <p><strong>1-5.</strong> Set your digital multimeter to read DC voltage; set the  range  to 20 volts. (<em>as shown in figure 3-3, click on image for a larger view.</em> ) </p>
			       <p><strong>1-6.</strong> Make certain to start by turning the &quot;+Var&quot; control all the way down. This will set the output to 0 volts.</p>
			       <ul>
			         <li>Now, double check that your circuit is built  as shown in the schematic. </li>
			         <li>Check that the meter switch on your lab kit is to the left so that the meter shows the voltage of &quot;+Var.&quot; </li>
			         <li>Slowly adjust the voltage up until  the readout on the meter (<em>in the lab kit</em> ) reads 10V. </li>
			         <li>The meter in the lab kit and  the digital multimeter should read the same value. (<em>within +/-10% </em>).</li>
			       </ul>
			    `,
			    'questionText': `<p><strong>Question #1: What happened to the light bulb as voltage was made more positive?</strong></p>`,
			    'questionType': 'multiple-choice',
			    'options': [
			        {
			            'text': `It got brighter`,
			            'correct': true,
			            'feedback': `Great! That is what you should see, move on.`
			        },
			        {
			            'text': `It did not light up`,
			            'correct': false,
			            'feedback': `Check that your circuit matches the schematic. If you still get this result, contact your instructor.`
			        },
			        {
			            'text': `It stayed lit the entire time.`,
			            'correct': false,
			            'feedback': `Make sure you are connected to the "+Var" power supply and that you are adjusting the "+Var" power supply. if you continue to get this result, contact your instructor.`
			        }
			    ],
			    'htmlAfterQuestion': ``
			},
			{
			    'htmlBeforeQuestion': `
					<div class="line_break"></div>
			       <h1>Current Measurement</h1>
			       <p>&nbsp;</p>
			       <div class="video_left">
			            <iframe src="https://cdnapisec.kaltura.com/p/1751071/sp/175107100/embedIframeJs/uiconf_id/26683571/partner_id/1751071?iframeembed=true&playerId=kaltura_player_1466447524&entry_id=1_4bkwkjr6&flashvars[streamerType]=auto" width="400" height="333" allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder="0"></iframe>
			            <br>
			            <a href="http://www.kaltura.com/tiny/s2czk" target="_blank">View video in a new tab (option for full screen)</a>
			       </div>
			       <div class="image_right">
			       		<img src="${this.a111RootUrl}/A111/img/unit01/labs/currentmeasureschem.png"  alt="Schematic" width="318" height="250" class="image_border"/>
			            <div class="image_center">
			            	<a href="${this.a111RootUrl}/A111/img/unit01/labs/currentmeter.png" target="new">
			            		<img src="${this.a111RootUrl}/A111/img/unit01/labs/currentmeter.png"  alt="Schematic" width="133" height="200" class="image_border"/>
			            	</a>
			            </div>
			       </div>
			       <p style='clear: both;'><strong>1-7.</strong> Watch the video and then change the circuit you built into what is shown in figure 3-4 according to the directions below.  Note that the digital multimeter is connected in series with the light bulb to correctly measure current. </p>
			       <ol>
			         <li>Disconnect both meter leads from the circuit.</li>
			         <li>Move the positive from the voltage source from where it is and connect it to a new junction point. We will call this junction point &quot;C&quot;.</li>
			         <li>Move the red lead on the multimeter to the mA jack and set it to measure DC current with the range set to 200mA. (<em>see figure 3-4, click on image for larger version </em>)</li>
			       </ol>
			       <p><strong>1-7.</strong> Make  certain to start with the &quot;+Var&quot; set all the way down.</p>
			       <p><strong>1-8.</strong> Set your digital multimeter to read DC current  and set the range to the lowest setting that is above your answer above.</br>
			        You are about to watch the current meter as voltage is started at 0V and moved up to 10V. </p>
			    `,
			    'questionText': `<p><strong>Question #2: How do you expect current to change as voltage is made more positive? </strong>(from 0V to 10V)</p>`,
			    'questionType': 'multiple-choice',
			    'options': [
			        {
			            'text': `I expect it to increase`,
			            'correct': true,
			            'feedback': `Yes, that is correct.`
			        },
			        {
			            'text': `I expect it to decrease`,
			            'correct': false,
			            'feedback': `Voltage is the force that moves electrons, so more voltage will mean more current.`
			        }
			    ],
			    'htmlAfterQuestion': ``
			},
			{
			    'htmlBeforeQuestion': `<p><strong>1-9.</strong> Check that your breadboard circuit is exactly the  same as the schematic in figure 3-4. Make sure to start with the &quot;+Var&quot; all the way down. Slowly turn up the voltage control to 10 volts. </p>`,
			    'questionText': `<p><strong>Question #3: How does the current change as the voltage increases?</strong></p>`,
			    'questionType': 'multiple-choice',
			    'options': [
			        {
			            'text': `It increases`,
			            'correct': true,
			            'feedback': `Yes, that is what is should be doing. Move on!`
			        },
			        {
			            'text': `It decreases`,
			            'correct': false,
			            'feedback': `That is not what you should be seeing. Are you seeing a negative current reading by any chance? Even if you are, the number should be getting more negative. If that is not the case, contact your instructor.`
			        }
			    ],
			    'htmlAfterQuestion': ``
			},
			{
			    'htmlBeforeQuestion': ``,
			    'questionText': `<p><strong>Question #4: How much current is flowing with the source voltage at 10V?</strong></p>`,
			    'questionType': 'numerical',
			    'textAfterInput': 'mA',
			    'options': [
			        {
						'low': 24,
						'high': 30,
						'correct': true,
						'feedback': `That is the value you should be seeing. Move ahead!`
					},
					{
						'low': 20,
						'high': 23.9,
						'correct': false,
						'feedback': `Your value seems a bit low but it may be OK. Check that your circuit is built correctly and that you are sending 10V to the circuit.`
					},
					{
						'low': 0,
						'high': 19.9,
						'correct': false,
						'feedback': `That value is way too low. Check that your circuit is built correctly and that you are sending 10V from the power source.`
					},
					{
						'low': 30.1,
						'high': 34,
						'correct': false,
						'feedback': `Your value seems a bit high but it may be OK. Check that your circuit is built correctly and that you are sending 10V to the circuit.`
					},
					{
						'low': 34.1,
						'high': 99,
						'correct': false,
						'feedback': `That value is way too high. Check that your circuit is built correctly and that you are sending 10V from the power source.`
					}
			    ],
			    'htmlAfterQuestion': `
					<div class="line_break"></div>
       				<h2><em>Again I highly recommend PLAYING with this! Try things, figure out how it works. The more you work with it beyond the specific lab directions, the more you will get out of the course!</em></h2>
       				<div class="image_left no_caption">
       					<img src="${this.a111RootUrl}/A112/img/unit07/labs/Camera-icon.png" width="100" height="100"/>
       				</div>
       				<h2><em><strong>Remember to take a photo of your lab in progress to upload to Canvas if you are in the online section or did not finish during lab time.</strong></em></h2>
			    `
			}
  		],
  		'page4': [
  			{
			    'htmlBeforeQuestion': `
				    <h1>Oscilloscope: See the Voltage!</h1>
			       <p><em><strong>A note about the oscilloscope:</strong> In order to fit so much into such a small space, the menus may seem difficult to find. It would be worth some time now just pressing the buttons and seeing what menus show up across the bottom of the screen. Taking some time now to get comfortable moving around through the menus will definitely benefit you. <br>
			         If you are someone who finds manuals useful, <a href="${this.a111RootUrl}/A111/media/Unit 1/xscopes-manual.pdf" target="new">here is the manual </a>for the oscilloscope in your lab kit.
			        .</em></p>
			       <p><em>Also note that the menus will reset back to the default (nothing shown) after some time with no buttons pressed.</em></p>
			       <div class="image_right">
			       		<a href="${this.a111RootUrl}/A111/img/unit01/labs/scopeschematic1.png" target="new">
			       			<img src="${this.a111RootUrl}/A111/img/unit01/labs/scopeschematic1.png" alt="schematic" width="454" height="250" class="image_border"/>
			       		</a>
			       </div>
			       <p><strong>1-10.</strong> Build the circuit shown in figure 4-1. Note that this is very similar to the circuit you built in Lab #1-1.</p>
			       <ol>
			         <li>You are using &quot;Var+/-&quot; instead of &quot;+Var&quot; at junction point &quot;A&quot;.</li>
			         <li> The meter switch needs to be flipped to the right to see the voltage of the &quot;Var+/-&quot; source.</li>
			         <li>Set the multimeter  to measure AC Voltage (<a href="${this.a111RootUrl}/A111/img/unit01/labs/ACVmeter.jpg" target="new">use the 20V~ setting</a>)</li>
			         <li>The oscilloscope will be connected later in the page so wait on that for now.</li>
			       </ol>
			       <p><strong>1-11.</strong> We are going to use the oscilloscope to see what happens to the voltage over time.</p>
			    `,
			    'questionText': `<p><strong>Oscilloscopes are voltmeters, so how should the oscilloscope be connected to measure the voltage across the light bulb?</strong></p>`,
			    'questionType': 'multiple-choice',
			    'options': [
			        {
			            'text': `In parallel`,
			            'correct': true,
			            'feedback': `Yes, that is correct.`
			        },
			        {
			            'text': `In series`,
			            'correct': false,
			            'feedback': `No, to measure voltage you must connect in parallel.`
			        }
			    ],
			    'htmlAfterQuestion': `
					<p>An Oscilloscope is a voltmeter, so it needs two connections in order to measure. <br>
			        This oscilloscope, like many, has two channels so you can measure two things at once.  <br>
			        Each of those channels has two connections:</p>
			       <ul>
			         <li>Positive connection: Each channel has two possible positive connections. They are &quot;AC&quot; and &quot;DC&quot;.
			           <ul>
			             <li>When connected to &quot;AC&quot; you only see AC, and DC is removed.</li>
			             <li>When connected to &quot;DC&quot; you see AC+DC.</li>
			           </ul>
			         </li>
			         <li>The negative connection is ground for the lab kit, so just make sure ground on your circuit is connected to one of the lab kit &quot;GND&quot; connections.</li>
			        </ul>
			       <p><strong>1-12. </strong>Connect the oscilloscope CH1 in parallel with the light bulb. Ground is already connected to the oscilloscope so you only need to connect the + connection, this should connect to junction point &quot;A&quot;. Use the "DC" connection to the oscilloscope so you can see both AC and DC.</p>
			       <p><strong>1-13.</strong> Make sure that the meter switch is to the right and &quot;Var+/-&quot; is set to 0V.</p>
			       <p><strong>1-14.</strong> The display on an oscilloscope can be set to show any voltage at the top or bottom so first you need to set your oscilloscope so that 0V is in the middle of the screen (from top to bottom).</p>
			       <h3>CONTROLLING WHAT YOU SEE</h3>
			       <ul>
			         <li>To make sure you are starting fresh, reset the oscilloscope (in case the last user left odd settings).
			           <ul>
			             <li>With the lab kit not plugged in, Hold down &quot;MENU&quot;, and plug in while still holding down &quot;MENU&quot;.</li>
			             <li>Press &quot;<span class="scopefont">RESTORE</span>&quot; (<em>There will be a small flash behind the screen but nothing else will change</em>)</li>
			             <li>Press &quot;MENU&quot; to start the oscilloscope.</li>
			           </ul>
			         </li>
			         <li>Press the &quot;MENU&quot; again button until you see no text displayed at the bottom of the screen.
			           <div class="image_right">
			           		<a href="${this.a111RootUrl}/A111/img/unit01/labs/scope1.png">
			           			<img src="${this.a111RootUrl}/A111/img/unit01/labs/scope1.png" width="250" height="136" class="image_border"/>
			           		</a>
			           </div>
			         </li>
			         <li>Press either the far right (decrease value) or middle (increase value) buttons until the top of the display shows the time division you want.
			           <ul>
			             <li>This determines how much time is represented by each horizontal division (the small dots).</li>
			             <li>For this lab it should be &quot;<span class="scopefont">0.1S/div</span>&quot;</li>
			             <li>This sets the horizontal divisions on the screen (little dots) to 0.1S.
			             </li>
			           </ul>
			         </li>
			         <li>Press the &quot;MENU&quot; button until you see &quot;<span class="scopefont">CH1&nbsp;&nbsp;&nbsp;&nbsp;CH2&nbsp;&nbsp;&nbsp;&nbsp;LOGIC</span>&quot; displayed at the bottom of the screen.</li>
			         <li>Press the button below &quot;CH1&quot;  and you will see &quot;<span class=scopefont>CH ON&nbsp;&nbsp;&nbsp;&nbsp;GAIN-&nbsp;&nbsp;&nbsp;&nbsp;GAIN+</span>&quot; displayed at the bottom of the screen. Make sure that &quot;<span class="scopefont_highlight">CH ON</span>&quot; is highlighted, if it is not, press the button below it.</li>
			         <li>Press either the button under &quot;<span class="scopefont">GAIN-</span>&quot; or &quot;<span class="scopefont">GAIN+</span>&quot; to change the voltage division (top to bottom).
			           <ul>
			             <li>This determines how much voltage is represented by each vertical division (the small dots).</li>
			             <li>For this lab you want the largest setting (lowest gain) &quot;<span class="scopefont">CH1 5.12V/div</span>&quot;</li>
			             <li>This sets the vertical divisions on the screen (the small dots in the middle) equal to 5.12V.
			             </li>
			           </ul>
			         </li>
			         <li>Press the menu button and you will see &quot;<span class="scopefont">POSITION&nbsp;&nbsp;&nbsp;&nbsp;INVERT&nbsp;&nbsp;&nbsp;&nbsp;MATH</span>&quot; displayed at the bottom of the screen. </li>
			         <li>Press the button under &quot;
			           <spcan class="scopefont">POSITION</spcan>
			         &quot; and you will see &quot;<span class="scopefont">POSITION&nbsp;&nbsp;&nbsp;&nbsp;MOVE-&nbsp;&nbsp;&nbsp;&nbsp;MOVE+</span>&quot; displayed at the bottom of the screen.</li>
			         <li>Press the button under either &quot;<span class ="scopefont">MOVE-</span>&quot; or &quot;<span class="scopefont">MOVE+</span>&quot; as needed to move the line in across the screen so that it is on top of the dot in the middle of the screen. You can also press the button under &quot;
			           <spcan class="scopefont">POSITION</spcan>
			&quot; to cycle through the channel aligning to the top dot, middle dot, or bottom dot. <br>
			<em>The top and bottom positions are useful when you are displaying two channels and want to see both easily.</em>
			         </li>
			         <li>You have now set 0V for channel 1 so that it is in the middle of the screen.</li>
			         <li>Press the &quot;MENU&quot; button until you see &quot;<span class="scopefont">CH1&nbsp;&nbsp;&nbsp;&nbsp;CH2&nbsp;&nbsp;&nbsp;&nbsp;LOGIC</span>&quot; displayed at the bottom of the screen.</li>
			         <li>Press the button below &quot;CH2&quot;  and you will see &quot;<span class=scopefont>CH ON&nbsp;&nbsp;&nbsp;&nbsp;GAIN-&nbsp;&nbsp;&nbsp;&nbsp;GAIN+</span>&quot; displayed at the bottom of the screen. Press the button below &quot;<span class=scopefont>CH ON&nbsp;</span>&quot; to turn off Channel 2, since we won't use it for this lab. Make sure that &quot;<span class=scopefont>CH ON&nbsp;</span>&quot; is not highlighted.<br>
			         </li>
			       </ul>
			       <p><strong>1-15.</strong> Adjust the &quot;Var+/-&quot; control. You should see voltage change on the oscilloscope. Adjust it so that it is both positive and negative and see how the oscilloscope reacts. <em>If you move the control fast enough you can make a low frequency waveform.</em> Try this.</p>
			       <div class="line_break"></div>
			       <h1>Audio Anyone?</h1>
			       <p>The ocilloscope in your lab kit also includes a generator that gives you a source of AC waveforms. That generator, which you will use as a voltage source now, is called &quot;AWG&quot; which stands for &quot;Arbitrary Waveform Generator&quot;. </p>
			       <div class="image_right">
			       		<a href="${this.a111RootUrl}/A111/img/unit01/labs/scopeschematic2.png" target="new">
			       			<img src="${this.a111RootUrl}/A111/img/unit01/labs/scopeschematic2.png" alt="schematic" width="400" height="230" class="image_border"/>
			       		</a>
			       	</div>
			       <p><strong>1-16.</strong> Change the your circuit to match the one shown in figure 4-3. </p>
			       <ul>
			         <li>We have removed the light bulb as the AWG is not powerful enough to light the bulb.</li>
			         <li>&quot;AWG&quot; is now connected to junction point &quot;A&quot;, in place of &quot;Var +/-&quot;.
			           <ul>
			             <li>&quot;AWG&quot; is a connection under the oscilloscope.</li>
			           </ul>
			         </li>
			         <li>The GND connection for the AWG and Oscilloscope are both GND of the lab kit so they are already connected.</li>
			       </ul>
			        <p>&nbsp;</p>
			        <h2>YOUR OWN AUDIO SOURCE</h2>
			        <ul>
			         <li>Press the &quot;MENU&quot; button until you see &quot;<span class="scopefont">CURSORS&nbsp;&nbsp;&nbsp;&nbsp;DISPLAY&nbsp;&nbsp;&nbsp;&nbsp;AWG</span>&quot; at the bottom of the display. (4 times from the default, &quot;nothing shown&quot;)</li>
			         <li>
			           <div class="image_right">
			           		<a href="${this.a111RootUrl}/A111/img/unit01/labs/scope1.png">
			           			<img src="${this.a111RootUrl}/A111/img/unit01/labs/scope1.png" width="250" height="136" class="image_border"/>
			           		</a>
			           	</div>
			         Press the button under &quot;<span class="scopefont">&nbsp;AWG</span>&quot; and you will get the menu choices &quot;<span class="scopefont">WAVE TYPE&nbsp;&nbsp;&nbsp;&nbsp;SWEEP&nbsp;&nbsp;&nbsp;&nbsp;FREQUENCY</span>&quot;</li>
			         <li>Press the button under &quot;<span class="scopefont">WAVE TYPE</span>&quot; and you can choose sine, square, or triangle waveforms. Try these out, you should see them on the oscilloscope display. Then set it to a sine wave.<br>
			         <em>Pressing the menu button again gets you a few more options we will use in later courses.</em></li>
			         <li>Press the Menu button twice to move back to the last menu &quot;<span class="scopefont">WAVE TYPE&nbsp;&nbsp;&nbsp;&nbsp;SWEEP&nbsp;&nbsp;&nbsp;&nbsp;FREQUENCY</span>&quot;.</li>
			         <li>Press the button under &quot;<span class="scopefont">&nbsp;FREQUENCY</span>&quot; to see a display of the current frequency and the controls to change the frequency. Try changing this and seeing how it changes on the screen. If you press the far left button the value will cycle through the values:1Hz, 10Hz, 100Hz, 1kHz, and 10kHz each time you press the button. For now set this to 10Hz..</li>
			         <li>Press the &quot;MENU&quot; button once to move back to  &quot;<span class="scopefont">WAVE TYPE&nbsp;&nbsp;&nbsp;&nbsp;SWEEP&nbsp;&nbsp;&nbsp;&nbsp;FREQUENCY</span>&quot; and a second time to move to  &quot;<span class="scopefont">AMPLITUDE&nbsp;&nbsp;&nbsp;&nbsp;DUTY CYCLE&nbsp;&nbsp;&nbsp;&nbsp;OFFSET</span>&quot;.</li>
			         <li>Press the button under &quot;<span class="scopefont">AMPLITUDE</span>&quot; to cycle through values of 0V, 1V, 2V, 3V, and 4V. These values are given in V<sub>PK-PK</sub>. <br>
			         Set this to 4V<sub>PK-PK</sub> for now. </li>
			         <li>The &quot;<span class="scopefont">&nbsp;OFFSET</span>&quot; settings will be useful for us as well as it adds DC to the AC waveform. <br>
			          Set the offset to 0V for now.</li>
			        </ul>
			        <p><strong>1-17.</strong> Make sure you have the oscilloscope Ch1 (DC) connected to junction point &quot;A&quot;.</p>
			        <div class="question_and_answer_full">
			          <div class="question_button">
			            <div class="question_button_header">You should see a sine wave on your oscilloscope.<br>
			            Click here for an image of what you should see.</div>
			          </div>
			          <!-- end of question_button div -->
			          <div class="revealed_answer">
			            <div class="revealed_answer_header">Answer: </div>
			            <div class="image_holder no_caption">
			            	<img src="${this.a111RootUrl}/A111/img/unit01/labs/scopeimagelab1.png" alt="" width="500" class="image_center">
			            </div>
			            <!-- end of revealed_answer div -->
			          </div>
			        </div>
			        <p>&nbsp;</p>
			       <h3>GETTING DETAILED READINGS</h3>
			       <p>With larger oscilloscopes you can get precise readings from the screen. Ours is too small for that, however it has a meter included so that you can see some numbers.</p>
			       <ul>
			         <li>Press the &quot;MENU&quot; button until you see &quot;<span class="scopefont">SCOPE&nbsp;&nbsp;&nbsp;&nbsp;METER&nbsp;&nbsp;&nbsp;&nbsp;FFT</span>&quot; displayed at the bottom of the screen.</li>
			         <li>Press the button below &quot;<span class="scopefont">METER</span>&quot; to see a meter for both channels. You will also still see the waveform displayed. Set the meter to show V<sub>PK-PK</sub> by pressing the button under &quot;<span class="scopefont">V P-P</span>&quot;. This should agree (at least pretty close) with the 4V<sub>PK-PK</sub> you set the AWG to. With my kit it was within 0.1V.</li>
			         <li>You can also press the button under &quot;<span class="scopefont">FREQUENCY</span>&quot; to see a numeric display of the frequency. Unfortunately at the low frequency of 1Hz it does not read correctly. It does work well for higher frequencies, however.<br>
			         <em>One of the drawbacks of an inexpensive oscilloscope and generator like this is that their accuracy is not great. They will work fine for what we need though and you will understand how to read a better oscilloscope when you get to use one.</em></li>
			        </ul>
			       <div class="question_and_answer_full">
			         <div class="question_button">
			           <div class="question_button_header">
			             Click here for an image of what you should see. <br>
			             <em>Your value may be slightly different.</em></div>
			         </div>
			         <!-- end of question_button div -->
			         <div class="revealed_answer">
			           <div class="revealed_answer_header">Answer: </div>
			           <div class="image_holder no_caption">
			           		<img src="${this.a111RootUrl}/A111/img/unit01/labs/scopemeterlab1.png" alt="" width="500" class="image_center">
			           	</div>
			           <!-- end of revealed_answer div -->
			         </div>
			       </div>
			       <p>&nbsp;</p>
			       <h2><em>Again I highly recommend PLAYING with this! Try things, figure out how it works. The more you work with it beyond the specific lab directions, the more you will get out of the course!<strong><br>
			     </strong></em></h2>
			       <div class="image_left no_caption">
			       		<img src="${this.a111RootUrl}/A112/img/unit07/labs/Camera-icon.png" width="100" height="100"/>
			       </div>
			       <h2><em><strong>Remember to take a photo of your lab in progress to upload to Canvas if you are in the online section or did not finish during lab time.</strong></em></h2>
			    `
			}
  		]
  	},
  	'lab2': {
  		'page1': [
  			{
			    'htmlBeforeQuestion': `
			    	  <p>Required materials (<em>as shown in figure 1-1</em>):  4-1KΩ resistors<br>
				        <em>click on the image for a larger version</em> </p>
					  <div class="image_left">
					  	<a href="${this.a111RootUrl}/A111/img/unit02/labs/parts_lab2.png" target="new">
					  		<img src="${this.a111RootUrl}/A111/img/unit02/labs/parts_lab2.png" alt="" width="200" height="237" class="image_border"/>
					  	</a>
					  </div>
				      <h2 style="clear:both;">Measuring Resistance</h2>
				    	<iframe src="https://cdnapisec.kaltura.com/p/1751071/sp/175107100/embedIframeJs/uiconf_id/26683571/partner_id/1751071?iframeembed=true&playerId=kaltura_player_1466451322&entry_id=1_h0amip34&flashvars[streamerType]=auto" width="400" height="333" allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder="0"></iframe>
				        <br>
				        <a href="http://www.kaltura.com/tiny/kfemh" target="_blank">View video in a new tab (option for full screen)</a>
				      <p> To start, let's measure the resistance of your resistors. This will both ensure that you have the correct resistors and give you practice measuring resistance.</p>
				      <div class="image_right">
				      	<a href="${this.a111RootUrl}/A111/img/unit02/labs/meter_lab2.png" target="new">
				      		<img src="${this.a111RootUrl}/A111/img/unit02/labs/meter_lab2.png" alt="" width="197" height="300" class="image_border"/>
				      	</a>
				      </div>
				      <p><strong>2-1.</strong> Set your multimeter to measure resistance and on the 2KΩ setting. <br>
				        (<em>The 2KΩ setting means that the highest the largest value the meter can read is 2KΩ. You want to set your meter to the lowest setting that is above what you need to measure. Setting it too high will give you less resolution and setting it too low will not give you any reading</em>.)<br>
				        Make sure that the meter leads are connected as described below and shown in figure 1-2.</p>
				      <ul>
				        <li>Red Meter Lead to &quot;V Ω &quot; connection on the meter</li>
				        <li>Black meter lead to &quot;COM&quot; connection on the meter </li>
				      </ul>
				      <p><strong>2-2.</strong>Take one of your 1KΩ
						  resistors and connect it to the meter leads as shown in figure 1-2, one lead from the resistor connected to each lead of the meter.</p>
					  <p>Your resistors are 1KΩ with a 1% tolerance. That means that they can be 10Ω less than 1KΩ or 10Ω more than 1KΩ.</p>
			    `,
			    'questionText': `<p><strong>Question #1: What did your meter show?</strong></p>`,
			    'questionType': 'numerical',
			    'textAfterInput': 'KΩ',
			    'options': [
			    	{
						'low': 0.9,
						'high': 1.1,
						'correct': true,
						'feedback': `CORRECT! Move On`
					},
					{
						'low': 0,
						'high': .89,
						'correct': false,
						'feedback': `That is not the correct answer (it is low), you should have a value between 0.9KΩ and 1.1KΩ.`
					},
					{
						'low': 1.11,
						'high': 10000,
						'correct': false,
						'feedback': `That is not the correct answer (it is high), you should have a value between 0.9KΩ and 1.1KΩ.`
					}
			    ],
			    'htmlAfterQuestion': ``
			},
			{
				'htmlBeforeQuestion': `
					<div class="line_break"></div>
				      <h1>Measure Measure Voltage Voltage<br>
				<em>(2 different ways</em>)</h1>
				      <p><strong><br>
				      Voltage across a resistor</strong> (a.k.a. <strong>Voltage Drop of the Resistor</strong>) or <strong>V<sub>R?</sub></strong>: This is the difference in voltage between the two ends of the resistor. The Voltmeter leads (Red and Black) must be placed one on either side of the resistor. The Red lead should be on the more positive side and the Black lead on the more negative side. You are measuring the amount of Voltage that is being used up by that resistor.</p>
				      <p><strong>Voltage at a point</strong> (a.k.a. <strong>“the voltage here is____”</strong>): In this case (whether you say it out loud or not) you are identifying the voltage difference between this point and Ground. In our labs the Green wire from the power supply will represent Ground.</p>
				      <p>For each of the following circuits, create the circuit  on the breadboard. You will be asked what you think will happen in a question and then asked to do the experiment and record your results. </p>
				      <h1>Circuit #1: Voltage Divider</h1>
				      <h2>Use your noggin!</h2>
				      <p>Materials: 4-1KΩ 1/2watt resistors, 5-volt DC supply </p>
				`,
				'questionText': `
					<p><strong>2-1.</strong> Start by analyzing the circuit to the right and determining the values for the table. TP1-4 represent “test points” in the circuit where you will measure voltages: </p>
        			<p>(Just use your BRAIN for this, <strong>DO NOT build the circuit</strong> yet!!!!!!!!!) </p>
				`,
				'questionType': 'table',
				'tableClass': 'two_tone_table multiple_question_table',
				'questions': [
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>R4</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>R4</sub></strong>`,
							'hasImageColumn': true,
							'imageColumnRowspan': 7,
							'imageColumnStyles': `
								min-width: 200px;
							`,
							'imageColumnHtml': `
								<div class='no_caption'>
									<img src='${this.a111RootUrl}/A111/img/unit02/labs/vdiv.png' alt="Lab 2 schematic" width="150" height="437">
								</div>
							`,
						},
						'options': [
							{
								'low': 1.25,
								'high': 1.25,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0,
								'high': 1.24,
								'correct': false,
								'feedback': `That is not correct. Since there are 4 resistors of the same value, they will each drop 1/4 of the total 5V.`
							},
							{
								'low': 1.26,
								'high': 1000,
								'correct': false,
								'feedback': `That is not correct. Since there are 4 resistors of the same value, they will each drop 1/4 of the total 5V.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>R3</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>R3</sub></strong>`,
						},
						'options': [
							{
								'low': 1.25,
								'high': 1.25,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0,
								'high': 1.24,
								'correct': false,
								'feedback': `That is not correct. Since there are 4 resistors of the same value, they will each drop 1/4 of the total 5V.`
							},
							{
								'low': 1.26,
								'high': 1000,
								'correct': false,
								'feedback': `That is not correct. Since there are 4 resistors of the same value, they will each drop 1/4 of the total 5V.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>R2</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>R2</sub></strong>`,
						},
						'options': [
							{
								'low': 1.25,
								'high': 1.25,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0,
								'high': 1.24,
								'correct': false,
								'feedback': `That is not correct. Since there are 4 resistors of the same value, they will each drop 1/4 of the total 5V.`
							},
							{
								'low': 1.26,
								'high': 1000,
								'correct': false,
								'feedback': `That is not correct. Since there are 4 resistors of the same value, they will each drop 1/4 of the total 5V.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>R1</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>R1</sub></strong>`,
						},
						'options': [
							{
								'low': 1.25,
								'high': 1.25,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0,
								'high': 1.24,
								'correct': false,
								'feedback': `That is not correct. Since there are 4 resistors of the same value, they will each drop 1/4 of the total 5V.`
							},
							{
								'low': 1.26,
								'high': 1000,
								'correct': false,
								'feedback': `That is not correct. Since there are 4 resistors of the same value, they will each drop 1/4 of the total 5V.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>TP3</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>TP3</sub></strong>`,
						},
						'options': [
							{
								'low': 3.75,
								'high': 3.75,
								'correct': true,
								'feedback': `Good, that is correct!`
							},
							{
								'low': 0,
								'high': 3.74,
								'correct': false,
								'feedback': `That is not correct. Since there are 4 resistors of the same value, they will each drop 1/4 of the total 5V. Then you need to add up the voltage drops of R1, R2 and R3 for the voltage at TP3.`
							},
							{
								'low': 3.76,
								'high': 1000,
								'correct': false,
								'feedback': `That is not correct. Since there are 4 resistors of the same value, they will each drop 1/4 of the total 5V. Then you need to add up the voltage drops of R1, R2 and R3 for the voltage at TP3.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>TP2</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>TP2</sub></strong>`,
						},
						'options': [
							{
								'low': 2.5,
								'high': 2.5,
								'correct': true,
								'feedback': `Good, that is correct!`
							},
							{
								'low': 0,
								'high': 2.49,
								'correct': false,
								'feedback': `That is not correct. Since there are 4 resistors of the same value, they will each drop 1/4 of the total 5V. Then you need to add up the voltage drops of R1 and R2 for the voltage at TP2.`
							},
							{
								'low': 2.51,
								'high': 1000,
								'correct': false,
								'feedback': `That is not correct. Since there are 4 resistors of the same value, they will each drop 1/4 of the total 5V. Then you need to add up the voltage drops of R1 and R2 for the voltage at TP2.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>TP1</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>TP1</sub></strong>`,
						},
						'options': [
							{
								'low': 1.25,
								'high': 1.25,
								'correct': true,
								'feedback': `Good, that is correct!`
							},
							{
								'low': 0,
								'high': 1.24,
								'correct': false,
								'feedback': `That is not correct. Since there are 4 resistors of the same value, they will each drop 1/4 of the total 5V. Then TP1 is just the voltage drop of R1.`
							},
							{
								'low': 1.26,
								'high': 1000,
								'correct': false,
								'feedback': `That is not correct. Since there are 4 resistors of the same value, they will each drop 1/4 of the total 5V. Then TP1 is just the voltage drop of R1.`
							}
						]
					}
				]
			},
			{
				'htmlBeforeQuestion': `
					<h2>Measuring Voltages!</h2>
			    	<iframe src="https://cdnapisec.kaltura.com/p/1751071/sp/175107100/embedIframeJs/uiconf_id/26683571/partner_id/1751071?iframeembed=true&playerId=kaltura_player_1466451415&entry_id=1_gp4ajqgf&flashvars[streamerType]=auto" width="400" height="333" allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder="0"></iframe>
			        <br>
			        <a href="http://www.kaltura.com/tiny/rmmls" target="_blank">View video in a new tab (option for full screen)</a>
			      <p><strong>2-2.</strong> Construct the circuit to the right on a breadboard. TP1-4 represent “test points” in the circuit where you will measure voltages. </p>
			      <ul>
			        <li>This circuit has 5 junction points and there are only 2 things connected to each junction point.
			          <ul>
			            <li>For this circuit we are not counting the multimeter as being connected since you will move it around for the tests. </li>
			          </ul>
			        </li>
			        <li>Make sure the &quot;+Var&quot; variable voltage supply is attached to the circuit, but  with the voltage control turned all the way down until you have checked the circuit. </li>
			        <li>Once you are sure the circuit is ready move on to question 2-3. </li>
			      </ul>
				`,
				'questionText': `<p><strong>2-3.</strong> turn the voltage for &quot;+Var&quot; up to  5V<sub>DC</sub> and measure the voltages using a Digital Multimeter.</p>`,
				'questionType': 'table',
				'tableClass': 'two_tone_table multiple_question_table',
				'htmlAfterQuestion': `
					<p><strong>2-4.</strong> If any of your answers for #2-1 were different from #2-3 describe which were wrong and why.  Store this in some way that you can reference later (paper, word doc, etc). It is incredibly important both that you understand where your original thought process was wrong and that you have a record of that. That way, if you have the same wrong thinking again, you have easy access to the correct answer.</p>
      				<h2>Move on to page 2.</h2>
				`,
				'questions': [
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>R4</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>R4</sub></strong>`,
							'hasImageColumn': true,
							'imageColumnRowspan': 7,
							'imageColumnStyles': `
								min-width: 200px;
							`,
							'imageColumnHtml': `
								<div class='no_caption'>
									<img src='${this.a111RootUrl}/A111/img/unit02/labs/vdiv.png' alt="Lab 2 schematic" width="150" height="437">
								</div>
							`,
						},
						'options': [
							{
								'low': 1.125,
								'high': 1.375,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 1,
								'high': 1.124,
								'correct': true,
								'feedback': `That is a little low but still within the range of the differences between the meters. Good Job!`
							},
							{
								'low': 1.376,
								'high': 1.5,
								'correct': true,
								'feedback': `That is a little high but still within the range of the differences between the meters. Good Job!`
							},
							{
								'low': 0,
								'high': 0.99,
								'correct': false,
								'feedback': `That is too low, make sure that all of your resistors are 1kΩ and that the source voltage is set to 5V. If you are still having trouble contact your instructor.`
							},
							{
								'low': 1.51,
								'high': 1000,
								'correct': false,
								'feedback': `That is too high, make sure that all of your resistors are 1kΩ and that the source voltage is set to 5V. If you are still having trouble contact your instructor.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>R3</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>R3</sub></strong>`,
						},
						'options': [
							{
								'low': 1.125,
								'high': 1.375,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 1,
								'high': 1.124,
								'correct': true,
								'feedback': `That is a little low but still within the range of the differences between the meters. Good Job!`
							},
							{
								'low': 1.376,
								'high': 1.5,
								'correct': true,
								'feedback': `That is a little high but still within the range of the differences between the meters. Good Job!`
							},
							{
								'low': 0,
								'high': 0.99,
								'correct': false,
								'feedback': `That is too low, make sure that all of your resistors are 1kΩ and that the source voltage is set to 5V. If you are still having trouble contact your instructor.`
							},
							{
								'low': 1.51,
								'high': 1000,
								'correct': false,
								'feedback': `That is too high, make sure that all of your resistors are 1kΩ and that the source voltage is set to 5V. If you are still having trouble contact your instructor.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>R2</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>R2</sub></strong>`,
						},
						'options': [
							{
								'low': 1.125,
								'high': 1.375,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 1,
								'high': 1.124,
								'correct': true,
								'feedback': `That is a little low but still within the range of the differences between the meters. Good Job!`
							},
							{
								'low': 1.376,
								'high': 1.5,
								'correct': true,
								'feedback': `That is a little high but still within the range of the differences between the meters. Good Job!`
							},
							{
								'low': 0,
								'high': 0.99,
								'correct': false,
								'feedback': `That is too low, make sure that all of your resistors are 1kΩ and that the source voltage is set to 5V. If you are still having trouble contact your instructor.`
							},
							{
								'low': 1.51,
								'high': 1000,
								'correct': false,
								'feedback': `That is too high, make sure that all of your resistors are 1kΩ and that the source voltage is set to 5V. If you are still having trouble contact your instructor.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>R1</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>R1</sub></strong>`,
						},
						'options': [
							{
								'low': 1.125,
								'high': 1.375,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 1,
								'high': 1.124,
								'correct': true,
								'feedback': `That is a little low but still within the range of the differences between the meters. Good Job!`
							},
							{
								'low': 1.376,
								'high': 1.5,
								'correct': true,
								'feedback': `That is a little high but still within the range of the differences between the meters. Good Job!`
							},
							{
								'low': 0,
								'high': 0.99,
								'correct': false,
								'feedback': `That is too low, make sure that all of your resistors are 1kΩ and that the source voltage is set to 5V. If you are still having trouble contact your instructor.`
							},
							{
								'low': 1.51,
								'high': 1000,
								'correct': false,
								'feedback': `That is too high, make sure that all of your resistors are 1kΩ and that the source voltage is set to 5V. If you are still having trouble contact your instructor.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>TP3</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>TP3</sub></strong>`,
						},
						'options': [
							{
								'low': 3.357,
								'high': 3.916,
								'correct': true,
								'feedback': `Good, that is correct within the tolerances of the resistors.`
							},
							{
								'low': 3,
								'high': 3.356,
								'correct': true,
								'feedback': `That is a little low but still within the range of the differences between the meters. Good Job!`
							},
							{
								'low': 3.917,
								'high': 4.512,
								'correct': true,
								'feedback': `That is a little high but still within the range of the differences between the meters. Good Job!`
							},
							{
								'low': 0,
								'high': 2.99,
								'correct': false,
								'feedback': `That is too low, make sure that all of your resistors are 1kΩ and that the source voltage is set to 5V. If you are still having trouble contact your instructor.`
							},
							{
								'low': 4.512,
								'high': 1000,
								'correct': false,
								'feedback': `That is too high, make sure that all of your resistors are 1kΩ and that the source voltage is set to 5V. If you are still having trouble contact your instructor`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>TP2</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>TP2</sub></strong>`,
						},
						'options': [
							{
								'low': 2.25,
								'high': 2.75,
								'correct': true,
								'feedback': `Good, that is correct within the tolerances of the resistors.`
							},
							{
								'low': 2,
								'high': 2.249,
								'correct': true,
								'feedback': `That is a little low but still within the range of the differences between the meters. Good Job!`
							},
							{
								'low': 2.759,
								'high': 3,
								'correct': true,
								'feedback': `That is a little high but still within the range of the differences between the meters. Good Job!`
							},
							{
								'low': 0,
								'high': 1.99,
								'correct': false,
								'feedback': `That is too low, make sure that all of your resistors are 1kΩ and that the source voltage is set to 5V. If you are still having trouble contact your instructor.`
							},
							{
								'low': 3.001,
								'high': 1000,
								'correct': false,
								'feedback': `That is too high, make sure that all of your resistors are 1kΩ and that the source voltage is set to 5V. If you are still having trouble contact your instructor`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>TP1</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>TP1</sub></strong>`,
						},
						'options': [
							{
								'low': 1.125,
								'high': 1.375,
								'correct': true,
								'feedback': `Good, that is correct within the tolerances of the resistors.`
							},
							{
								'low': 1,
								'high': 1.124,
								'correct': true,
								'feedback': `That is a little low but still within the range of the differences between the meters. Good Job!`
							},
							{
								'low': 1.376,
								'high': 1.5,
								'correct': true,
								'feedback': `That is a little high but still within the range of the differences between the meters. Good Job!`
							},
							{
								'low': 0,
								'high': 1.123,
								'correct': false,
								'feedback': `That is too low, make sure that all of your resistors are 1kΩ and that the source voltage is set to 5V. If you are still having trouble contact your instructor.`
							},
							{
								'low': 1.501,
								'high': 1000,
								'correct': false,
								'feedback': `That is too high, make sure that all of your resistors are 1kΩ and that the source voltage is set to 5V. If you are still having trouble contact your instructor`
							}
						]
					}
				]
			}
  		],
  		'page2': [
  			{
				'htmlBeforeQuestion': `
					<div class="image_right">
						<img src="${this.a111RootUrl}/A111/img/unit02/labs/idiv.png" alt="Current Divider" width="280" height="200" class="image_border"/>
					</div>
					<h1>Circuit #2: Current Divider</h1>
            		<h2>Use your noggin?</h2>
				`,
				'questionText': `
					<p><strong>2-5.</strong> Start by analyzing the circuit in figure 2-1 and determining the values for the table: (just use your BRAIN for this, <strong>DO NOT build the circuit</strong> yet!!!!!!!!!) </p>
				`,
				'questionType': 'table',
				'tableClass': 'two_tone_table multiple_question_table',
				'questions': [
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">I<sub>R1</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'mA',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>I<sub>R1</sub></strong>`,
						},
						'options': [
							{
								'low': 0.5,
								'high': 0.5,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0,
								'high': 0.499,
								'correct': false,
								'feedback': `That is not correct. 5V divided by 10k ohms wil give you the correct answer in mA.`
							},
							{
								'low': .501,
								'high': 1000,
								'correct': false,
								'feedback': `That is not correct. 5V divided by 10k ohms wil give you the correct answer in mA.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">I<sub>R2</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'mA',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>I<sub>R2</sub></strong>`,
						},
						'options': [
							{
								'low': 0.5,
								'high': 0.5,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0,
								'high': 0.499,
								'correct': false,
								'feedback': `That is not correct. 5V divided by 10k ohms wil give you the correct answer in mA.`
							},
							{
								'low': .501,
								'high': 1000,
								'correct': false,
								'feedback': `That is not correct. 5V divided by 10k ohms wil give you the correct answer in mA.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">I<sub>R3</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'mA',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>I<sub>R3</sub></strong>`,
						},
						'options': [
							{
								'low': 0.25,
								'high': 0.25,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0,
								'high': 0.249,
								'correct': false,
								'feedback': `That is not correct. 5V divided by 20k ohms wil give you the correct answer in mA.`
							},
							{
								'low': .251,
								'high': 1000,
								'correct': false,
								'feedback': `That is not correct. 5V divided by 20k ohms wil give you the correct answer in mA.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">I<sub>T</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'mA',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>I<sub>T</sub></strong>`,
						},
						'options': [
							{
								'low': 1.25,
								'high': 1.25,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0,
								'high': 1.249,
								'correct': false,
								'feedback': `That is not correct. (5V divided by 10Kohms) plus (5V divided by 10Kohms) plus (5V divided by 20kohms) will give you the correct answer in mA.`
							},
							{
								'low': 1.251,
								'high': 1000,
								'correct': false,
								'feedback': `That is not correct. (5V divided by 10Kohms) plus (5V divided by 10Kohms) plus (5V divided by 20kohms) will give you the correct answer in mA.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>R1</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>R1</sub></strong>`,
						},
						'options': [
							{
								'low': 5,
								'high': 5,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0,
								'high': 4.99,
								'correct': false,
								'feedback': `Each branch of a parallel circuit gets the entire source voltage.`
							},
							{
								'low': 5.01,
								'high': 1000,
								'correct': false,
								'feedback': `Each branch of a parallel circuit gets the entire source voltage.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>R2</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>R2</sub></strong>`,
						},
						'options': [
							{
								'low': 5,
								'high': 5,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0,
								'high': 4.99,
								'correct': false,
								'feedback': `Each branch of a parallel circuit gets the entire source voltage.`
							},
							{
								'low': 5.01,
								'high': 1000,
								'correct': false,
								'feedback': `Each branch of a parallel circuit gets the entire source voltage.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>R3</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>R3</sub></strong>`,
						},
						'options': [
							{
								'low': 5,
								'high': 5,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0,
								'high': 4.99,
								'correct': false,
								'feedback': `Each branch of a parallel circuit gets the entire source voltage.`
							},
							{
								'low': 5.01,
								'high': 1000,
								'correct': false,
								'feedback': `Each branch of a parallel circuit gets the entire source voltage.`
							}
						]
					}
				]
			},
			{
				'htmlBeforeQuestion': `
					<h2>Build it, test it, blow it up?</h2>
					<p>Materials: 2-10KΩ 1/2watt resistors, 1-20KΩ 1/2watt resistor,  5-volt DC supply </p>
			        <div class="image_center">
			        	<a href="${this.a111RootUrl}/A111/img/unit02/labs/parts_lab2-1.png" target="new">
			        		<img src="${this.a111RootUrl}/A111/img/unit02/labs/parts_lab2-1.png" alt="" width="400" height="232" class="image_border"/>
			        	</a>
			        </div>
			        <iframe src="https://cdnapisec.kaltura.com/p/1751071/sp/175107100/embedIframeJs/uiconf_id/26683571/partner_id/1751071?iframeembed=true&playerId=kaltura_player_1466451415&entry_id=1_x0f42q3q&flashvars[streamerType]=auto" width="400" height="333" allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder="0"></iframe>
			        <p><strong>2-6.</strong> Construct the circuit from figure 2-3 on your breadboard. </p>
			        <div class="image_right">
			        	<img src="${this.a111RootUrl}/A111/img/unit02/labs/idiv.png"  alt="Current Divider" width="280" height="200" class="image_border"/>
			        </div>
			        <ul>
			          <li>This circuit has only two junction points as shown (<em>without the current meter</em>).
			            <ul>
			              <li>When you add the current meter you will be adding a third junction point.</li>
			            </ul>
			          </li>
			          <li>Make sure the &quot;+Var&quot; voltage supply is attached to the circuit, but with the voltage control turned all the way down. Do not turn the voltage up until you have checked the circuit. </li>
			          <li>Once you are sure the circuit is ready move on to question 2-7.</li>
			        </ul>
			       <p><strong>2-7.</strong> Print out (or draw) a copy of <a href="${this.a111RootUrl}/A111/img/unit02/labs/idiv.png" target="new">the schematic in figure 2-2</a> and draw current meters in their correct posistions to measure the values shown in the table. Label each meter with what it will read (for example “I<sub>R1</sub>”).</p>
				`,
				'questionText': `
					<p><strong>2-8. </strong>Now, connect the multimeter for your fist reading and turn on the power supply, set the voltage to 5VDC and measure current. Repeat this for each current reading and then for the voltage readings. Remember to set the multimeter correctly for current and voltage measurements.</p>
				`,
				'questionType': 'table',
				'tableClass': 'two_tone_table multiple_question_table',
				'htmlAfterQuestion': `
					<p><strong>2-9.</strong> If any of your answers for #2-5 were different from #2-9 describe which were wrong and why.  Store this in some way that you can reference later (paper, word doc, etc). It is incredibly important both that you understand where your original thought process was wrong and that you have a record of that. That way, if you have the same wrong thinking again, you have easy access to the correct answer.</p>
       				<h2> Move on to page 3.</h2>
				`,
				'questions': [
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">I<sub>R1</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'mA',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>I<sub>R1</sub></strong>`,
						},
						'options': [
							{
								'low': 0.45,
								'high': 0.54,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0.4,
								'high': 0.44,
								'correct': true,
								'feedback': `That seems close enough given some differences in the two meters.`
							},
							{
								'low': 0,
								'high': 0.399,
								'correct': false,
								'feedback': `That is too low. Check your circuit and make sure all of you resistor values are correct. If you are still not getting a correct value please contact your instructor.`
							},
							{
								'low': 0.55,
								'high': 0.6,
								'correct': false,
								'feedback': `That seems close enough given some differences in the two meters.`
							},
							{
								'low': 0.601,
								'high': 1000,
								'correct': false,
								'feedback': `That is too high. Check your circuit and make sure all of you resistor values are correct. If you are still not getting a correct value please contact your instructor.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">I<sub>R2</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'mA',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>I<sub>R2</sub></strong>`,
						},
						'options': [
							{
								'low': 0.45,
								'high': 0.54,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0.4,
								'high': 0.44,
								'correct': true,
								'feedback': `That seems close enough given some differences in the two meters.`
							},
							{
								'low': 0,
								'high': 0.399,
								'correct': false,
								'feedback': `That is too low. Check your circuit and make sure all of you resistor values are correct. If you are still not getting a correct value please contact your instructor.`
							},
							{
								'low': 0.55,
								'high': 0.6,
								'correct': false,
								'feedback': `That seems close enough given some differences in the two meters.`
							},
							{
								'low': 0.601,
								'high': 1000,
								'correct': false,
								'feedback': `That is too high. Check your circuit and make sure all of you resistor values are correct. If you are still not getting a correct value please contact your instructor.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">I<sub>R3</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'mA',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>I<sub>R3</sub></strong>`,
						},
						'options': [
							{
								'low': 0.225,
								'high': 0.275,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0.2,
								'high': 0.224,
								'correct': true,
								'feedback': `That seems close enough given some differences in the two meters.`
							},
							{
								'low': 0,
								'high': 0.199,
								'correct': false,
								'feedback': `That is too low. Check your circuit and make sure all of you resistor values are correct. If you are still not getting a correct value please contact your instructor.`
							},
							{
								'low': 0.276,
								'high': 0.3,
								'correct': false,
								'feedback': `That seems close enough given some differences in the two meters.`
							},
							{
								'low': 0.301,
								'high': 1000,
								'correct': false,
								'feedback': `That is too high. Check your circuit and make sure all of you resistor values are correct. If you are still not getting a correct value please contact your instructor.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">I<sub>T</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'mA',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>I<sub>T</sub></strong>`,
						},
						'options': [
							{
								'low': 1.125,
								'high': 1.375,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 1,
								'high': 1.124,
								'correct': true,
								'feedback': `That seems close enough given some differences in the two meters.`
							},
							{
								'low': 0,
								'high': 0.999,
								'correct': false,
								'feedback': `That is too low. Check your circuit and make sure all of you resistor values are correct. If you are still not getting a correct value please contact your instructor.`
							},
							{
								'low': 1.376,
								'high': 1.5,
								'correct': false,
								'feedback': `That seems close enough given some differences in the two meters.`
							},
							{
								'low': 1.5,
								'high': 1000,
								'correct': false,
								'feedback': `That is too high. Check your circuit and make sure all of you resistor values are correct. If you are still not getting a correct value please contact your instructor.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>R1</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>R1</sub></strong>`,
						},
						'options': [
							{
								'low': 4.5,
								'high': 5.5,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0,
								'high': 4.49,
								'correct': false,
								'feedback': `That is low, each branch of the circuit should be getting 5V.`
							},
							{
								'low': 5.51,
								'high': 1000,
								'correct': false,
								'feedback': `That is high, each branch of the circuit should be getting 5V.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>R2</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>R2</sub></strong>`,
						},
						'options': [
							{
								'low': 4.5,
								'high': 5.5,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0,
								'high': 4.49,
								'correct': false,
								'feedback': `That is low, each branch of the circuit should be getting 5V.`
							},
							{
								'low': 5.51,
								'high': 1000,
								'correct': false,
								'feedback': `That is high, each branch of the circuit should be getting 5V.`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
						'questionText': `<span class="table-hidden-question">V<sub>R3</sub></span>`,
						'questionType': 'numerical',
						'textBeforeInput': '',
						'textAfterInput': 'V',
						'tableProps': {
							'hasLeftColumn': true,
							'leftColumnHtml': `<strong>V<sub>R3</sub></strong>`,
						},
						'options': [
							{
								'low': 4.5,
								'high': 5.5,
								'correct': true,
								'feedback': `CORRECT!`
							},
							{
								'low': 0,
								'high': 4.49,
								'correct': false,
								'feedback': `That is low, each branch of the circuit should be getting 5V.`
							},
							{
								'low': 5.51,
								'high': 1000,
								'correct': false,
								'feedback': `That is high, each branch of the circuit should be getting 5V.`
							}
						]
					}
				]
			}
  		],
  		'page3': [
  			{
			    'htmlBeforeQuestion': `
					<h2>Circuit #3: Measuring Series/Parallel Resistance</h2>
			        <div class="image_left">
			        	<a href="${this.a111RootUrl}/A111/img/unit02/labs/parts_lab2-1.png" target="new">
			        		<img src="${this.a111RootUrl}/A111/img/unit02/labs/parts_lab2-1.png" alt="" width="400" height="232" class="image_border"/>
			        	</a>
			        </div>
			        <p>Materials: 4-10KΩ resistors, 3-20KΩ resistors</p>
			        <p>You will be creating the circuit shown in figure 3-1 and measuring the total resistance.</p>
			        <div class="image_center">
			        	<img src="${this.a111RootUrl}/A111/img/unit02/labs/complexresistors.png" alt="Current Divider" width="600" height="195" class="image_border"/>
			        </div>
			        <p><strong>2-10.</strong> To start, re-draw the circuit (<em>on paper</em>) as it was done in the <a href="${this.a111RootUrl}/A111/unit2/u02p10.html" target="new">video on page 10</a> of the reading so that it more clearly shows what is in parallel and what is in series <em>(hint, start with R7 and draw it at the far right bottom corner of the page)</em>. When done, compare your answer to the one below.</p>
			        <div class="question_and_answer_full">
			            <div class="question_button">
			              <div class="question_button_header">Click here<br>
			                to see what the circuit should look like.</div>
			          	</div> <!-- end of question_button div -->
			            <div class="revealed_answer">
			              <div class="revealed_answer_header">Answer: </div>
			              <div class="image_holder no_caption">
			              	<img src="${this.a111RootUrl}/A111/img/unit02/labs/complexresistors_redraw.png" alt="" width="376" height="500" class="image_center">
			              </div>
			              <!-- end of revealed_answer div -->
			            </div>
			        </div>
			    `,
			    'questionText': `<p><strong>2-11.</strong> What should be the total resistance of the circuit?</p>`,
			    'questionType': 'numerical',
			    'options': [
			        {
			            'low': 9.5,
			            'high': 10.5,
			            'correct': true,
			            'feedback': `CORRECT! Move On`
			        },
			        {
			            'low': 0,
			            'high': 9.49,
			            'correct': false,
			            'feedback': `That is not the correct answer (it is low), work through the circuit as demonstrated on page 10 of the reading to find the total resistance.`
			        },
			        {
			            'low': 10.51,
			            'high': 9999,
			            'correct': false,
			            'feedback': `That is not the correct answer (it is high), work through the circuit as demonstrated on page 10 of the reading to find the total resistance.`
			        },
			        {
			            'low': 10000,
			            'high': 10000,
			            'correct': false,
			            'feedback': `Make sure you are giving your answer in KΩ`
			        }
			    ],
			    'htmlAfterQuestion': ``
			},
			{
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
        			<h2> Show this complex circuit who's boss!</h2>
        			<p>You will now be creating the circuit by adding a component at a time and measuring the total resistance. When I look at a circuit like this, I go through this process in my head to find the total resistance, finding a total resistance at each step and then adding the next resistor to that total.</p>
                `,
                'questionText': `<p><strong>2-12.</strong> Start creating the circuit  on the breadboard by connecting R6 and R7. Measure their total value with the Multi-meter  and record it here.</p>`,
                'questionType': 'numerical',
                'options': [
                    {
                        'low': 19,
                        'high': 21,
                        'correct': true,
                        'feedback': `CORRECT! Move On`
                    },
                    {
                        'low': 0,
                        'high': 18.99,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is low), work through the circuit as demonstrated on page 10 of the reading to find the total resistance.`
                    },
                    {
                        'low': 21.01,
                        'high': 10000,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is high), work through the circuit as demonstrated on page 10 of the reading to find the total resistance.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>2-13.</strong> Next add R5, measure the total resistance and record it here. </p>`,
                'questionType': 'numerical',
                'options': [
                    {
                        'low': 9.5,
                        'high': 10.5,
                        'correct': true,
                        'feedback': `CORRECT! Move on`
                    },
                    {
                        'low': 0,
                        'high': 9.49,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is low), work through the circuit as demonstrated on page 10 of the reading to find the total resistance.`
                    },
                    {
                        'low': 10.51,
                        'high': 10000,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is high), work through the circuit as demonstrated on page 10 of the reading to find the total resistance.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>2-14.</strong> Next add R4, measure the total resistance and record it here. </p>`,
                'questionType': 'numerical',
                'options': [
                    {
                        'low': 19,
                        'high': 21,
                        'correct': true,
                        'feedback': `CORRECT! Move on`
                    },
                    {
                        'low': 0,
                        'high': 18.99,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is low), work through the circuit as demonstrated on page 10 of the reading to find the total resistance.`
                    },
                    {
                        'low': 21.01,
                        'high': 10000,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is high), work through the circuit as demonstrated on page 10 of the reading to find the total resistance.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>2-15.</strong> Next add R3, measure the total resistance and record it here. </p>`,
                'questionType': 'numerical',
                'options': [
                    {
                        'low': 9.5,
                        'high': 10.5,
                        'correct': true,
                        'feedback': `CORRECT! Move on`
                    },
                    {
                        'low': 0,
                        'high': 9.49,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is low), work through the circuit as demonstrated on page 10 of the reading to find the total resistance.`
                    },
                    {
                        'low': 10.51,
                        'high': 10000,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is high), work through the circuit as demonstrated on page 10 of the reading to find the total resistance.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>2-16.</strong> Next add R2, measure the total resistance and record it here. </p>`,
                'questionType': 'numerical',
                'options': [
                    {
                        'low': 19,
                        'high': 21,
                        'correct': true,
                        'feedback': `CORRECT! Move on`
                    },
                    {
                        'low': 0,
                        'high': 18.99,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is low), work through the circuit as demonstrated on page 10 of the reading to find the total resistance.`
                    },
                    {
                        'low': 21.01,
                        'high': 10000,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is high), work through the circuit as demonstrated on page 10 of the reading to find the total resistance.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>2-17.</strong> Next add R1, measure the total resistance and record it here. </p>`,
                'questionType': 'numerical',
                'options': [
                    {
                        'low': 9.5,
                        'high': 10.5,
                        'correct': true,
                        'feedback': `CORRECT! Move on`
                    },
                    {
                        'low': 0,
                        'high': 9.49,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is low), work through the circuit as demonstrated on page 10 of the reading to find the total resistance.`
                    },
                    {
                        'low': 10.51,
                        'high': 10000,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is high), work through the circuit as demonstrated on page 10 of the reading to find the total resistance.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>2-18.</strong> That is your total resistance, does it match your answer for #2-11? </p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Yes`,
                        'correct': true,
                        'feedback': `GREAT! You are done with the lab!`
                    },
                    {
                        'text': `No`,
                        'correct': false,
                        'feedback': `Go back and figure out where your answers were wrong, check that your circuit is built properly.`
                    }
                ],
                'htmlAfterQuestion': `
					<h2><em>Again I highly recommend PLAYING with this! Try things, figure out how it works. The more you work with it beyond the specific lab directions, the more you will get out of the course!</em></h2>
        			<div class="image_left no_caption">
        				<img src="${this.a111RootUrl}/A112/img/unit07/labs/Camera-icon.png" width="100" height="100"/>
        			</div>
        			<h2><em><strong>Remember to take a photo of your lab in progress to upload to Canvas if you are in the online section or did not finish during lab time.</strong></em></h2>
                `
            }
  		]
  	},
  	'lab3': {
  		'page1': [
  			{
  				'htmlBeforeQuestion': `
				   <p>This lab will have you experimenting with  inductor filters and hearing the results. In addition to your lab kit you will need something to play some music, a phone or mp3 player would be best. There is a short cable to connect this included with your kit. Using a computer to play back the audio is possible but may require a longer cable. These are available at most electronics stores, contact your instructor if you have questions.</p>
				   <p>Note that the wire colors indicated in the lab instructions are a suggestion. If you have the correct length in those colors it will be helpful to use them. If you do not, just substitute other colors.</p>
				   <h1>Making Noise</h1>
			       <p><strong>3-1.</strong> Let’s start by just getting audio through the speaker in your lab kit.</p>
		            <ol type='a'>
		            	<li>Plug in the power cable for your lab kit and into a working outlet. Your lab kit should light up.</li>
		                <li>Make sure that the “Amp Level” control is turned down all the way (fully counter-clockwise)</li>
		                <li>Find the 1/8” to 1/8” cable included with your lab kit (<em>shown in figure 1-1</em>).
		                	<ul>
		                    	<li>Connect one end of the 1/8” to 1/8” cable to your audio player headphone output.</li>
		                        <li>Connect the other end to the “External Audio  Input” of the lab kit.</li>
		                        <div class='image_left'>
		                        	<img src='${this.a111RootUrl}/A111/img/unit04/labs/eighthcable.jpg' width='200' height='150'>
		                        </div>
		                    </ul>
		                </li>
		                <li> Now get a Green jumper wire from the bag of jumper wires that came with your kit (the shortest you can find would be best).
		                	<ul>
		                    	<li>Connect one end to the “Aux Audio Out G” connection on your lab kit.</li>
		                        <li>Connect the other end to the “Amp In G” connection on your lab kit.</li>
		                        <div class='image_left'>
		                        	<img src='${this.a111RootUrl}/A111/img/unit04/labs/AmpIngnd.jpg' width='300' height='225'>
		                        </div>
		                    </ul>
		                </li>
		                <li>Next get a White jumper wire from the bag of jumper wires that came with your kit (the shortest you can find would be best).
		                	<ul>
		                    	<li>Connect one end to the “Aux Audio Out +” connection on your lab kit.</li>
		                        <li>Connect the other end to the “Amp In +” connection on your lab kit.</li>
		                        <div class='image_left'>
		                        	<img src='${this.a111RootUrl}/A111/img/unit04/labs/AudioPlusconnected.jpg' width='300' height='225'>
		                        </div>
		                    </ul>
		                </li>
		                <li>Next get an Orange jumper wire from the bag of jumper wires that came with your kit (the longest you can find would be best).
		                    <ul>
		                        <li>Connect one end to the “Amp Spk Out”  top connection on your lab kit.</li>
		                        <li>Connect the other end to the “Spk In” top connection on your lab kit.</li>
		                        <div class='image_left'>
		                            <img src='${this.a111RootUrl}/A111/img/unit04/labs/SPKPlusConnected.jpg' width='300' height='274'>
		                        </div>
		                    </ul>
		                </li>
		                <li>Now get a Blue jumper wire from the bag of jumper wires that came with your kit (the longest you can find would be best).
		                	<ul>
		                    	<li>Connect one end to the “Amp Spk Out” bottom connection on your lab kit.</li>
		                        <li>Connect the other end to the “Spk In” bottom connection on your lab kit.</li>
		                        <div class='image_left'>
		                            <img src='${this.a111RootUrl}/A111/img/unit04/labs/SPKNegConnected.jpg' width='300' height='225'>
		                        </div>
		                    </ul>
		                </li>
		                <li>Play some music on your player and turn up the “Amp Level” control. You should hear music!
		                	<ul>
		                    	<li>Note that this is not a great sounding speaker, it is intended to be just good enough to allow you to hear what you need to for the labs.</li>
		                        <li>In order to do what is needed in all version of the labs, this amplifier has a lot of “gain”. This means that it may sound distorted. If it does, try turning down the volume on your MP3 player/phone.</li>
		                        <li>Now you know this is working without any filter, always a good start.</li>
		                    </ul>
		                </li>
		            </ol>
			        <p><strong>3-2.</strong> Now we will build our first filter circuit. To do that we need to connect to our Breadboard. If you have questions about using the breadboard, refer to Lab #1.</p>
					<p><strong>3-3.</strong> The Orange and blue wires that we used to connect “Amp Spk Out” to “Spk In” need to connect to our breadboard.</p>
			        <ol type='a'>
		            	<li>Turn down the “Amp Level” control.</li>
		                <li>Remove the Orange wire connection from the “Spk In” (top) connection and place it on the breadboard in connection point “f-25” (row f, column 25). (<em>as shown in figure 1-6 </em>)<br>
		                  This will become &quot;<em>junction point A</em>&quot; in our first circuit.
		                </li>
		                <li>Remove the Blue wire connection from the “Spk In” (bottom) connection and place it on the breadboard in the connection point below column 25 in the horizontal row with the red line running along it. (<em>as shown in figure 1-7 </em>)<br>
		                  This will become &quot;<em>junction point D</em>&quot; in our circuit.
		                </li>
		                <div class='image_right'>
		                	<img src='${this.a111RootUrl}/A111/img/unit03/labs/FlatCircuit.png' alt="schematic" width='300' height='144' class="image_border"><br>
		                    <a href="${this.a111RootUrl}/A111/img/unit04/labs/Breadboardconnection1.jpg" target="new">
		                    	<img src='${this.a111RootUrl}/A111/img/unit04/labs/Breadboardconnection1.jpg' width='108' height='238' class="image_border">
		                    </a>
		            	</div>
		                <li>Now we have to re-connect to the “Spk In” connections. Get a Yellow jumper wire and:
		                	<ul>
		                    	<li>Connect one end to the breadboard in connection point “g-25” (row g, column 25). <br>
		                   	    (This will connect it to the Orange wire and is shown in figure 1-8. )</li>
		                    	<li>On the next page this wire will connect to &quot;<em>junction point C</em>&quot; when we add the inductor and resistor to our circuit.</li>
		                        <li>Connect the other end to the “Spk In” top connection.</li>
		                    </ul>
		                </li>
		                <li>Get a Black jumper wire and:
		                	<ul>
		                    	<li>Connect one end to the breadboard  in the horizontal row with the red line running along it (this will connect it to the Blue wire).</li>
		                        <li>Connect the other end to the “Spk In” bottom connection.</li>
		                        <li>This wire, and the blue one you already connected, will connect to &quot;<em>junction point D</em>&quot; when we add the inductor and resistor to our circuit.</li>
		                    </ul>
		                </li>
			          <li>Test that you are still hearing sound from your speaker. If not, check that you did everything in #3-3 correctly.</li>
			        </ol>
			        <div class='image_center'>
			           <a href="${this.a111RootUrl}/A111/img/unit03/labs/lab3_start.png" target="new">
			               <img src='${this.a111RootUrl}/A111/img/unit03/labs/lab3_start.png' alt="" width='600' height='462' class="image_border">
			           </a>
			        </div>
			        <h2>Move on to page 2</h2>
  				`
  			}
  		],
  		'page2': [
  			{
                'htmlBeforeQuestion': `
					<div class="image_left">
						<a href="${this.a111RootUrl}/A111/img/unit03/labs/lab3_parts.png" target="new">
							<img src="${this.a111RootUrl}/A111/img/unit03/labs/lab3_parts.png" alt="" width="200" height="292" class="image_border"/>
						</a>
				     </div>
				     <p>Required materials (<em>as shown in figure 2-1</em>):</p>
				      <ul>
				        <li>sound source (phone or other MP3 player)</li>
				        <li>22Ω resistor</li>
				        <li>0.047mH inductor (473C)</li>
				        <li>0.1mH inductor (104C)</li>
				        <li>1mH inductor (105C)</li>
				        <li>4.7mH inductor (475C)</li>
				        <li>10mH inductor (106C)</li>
				        <li>33mH inductor (336C)<br>
				          <em>click on the image for a larger version</em> </li>
				      </ul>
				      <div class="line_break"></div>
				      <h1>Series Inductance</h1>
				      <h2>What will happen?</h2>
                `,
                'questionText': `<p><strong>Question #1: You are about to add an inductor in series with the speaker. What frequency response will this circuit create?</strong></p>  `,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/bc_curve.png' width='200' height='76'></div>`,
                        'altText': 'BC curve',
                        'correct': false,
                        'feedback': `Nope, maybe you should go back over the reading before trying this lab.`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/bp_curve.png' width='200' height='76'></div>`,
                        'altText': 'BP curve',
                        'correct': false,
                        'feedback': `Nope, that would require the combination of two filters...`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/hp_curve.png' width='200' height='76'></div>`,
                        'altText': 'HP curve',
                        'correct': false,
                        'feedback': `Nope, unless you were looking at the answer in a mirror...`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/lp_curve.png' width='200' height='76'></div>`,
                        'altText': 'LP curve',
                        'correct': true,
                        'feedback': `CORRECT! Now build it.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
			        <div class='image_right'>
			        	<img src='${this.a111RootUrl}/A111/img/unit03/labs/IndSer.png' alt="" width='400' height='198'>
			        </div>
			        <h2>Build It, Hear it, <strike>Blow it up</strike>?</h2>
			        <p><strong>3-4.</strong> For the first filter we are going to insert a 10mH inductor in series with our speaker as shown in figure 2-2. In order to make it work with this “real world” example we need to add a resistor (22Ω) in series with the inductor and speaker. The schematic shows a Voltage source (V1). This is actually: your music player + the audio amplifier in your lab kit.</p>
			        <ol type='a'>
			        	<li>You should always start by identifying the junction points in the circuit. I have done that for you in this schematic. There are 4 junction points and each has only two things connected to it.</li>
			        	<li>Build the circuit one juction point at a time. Focus on what is connected to each junction point and make sure there are only, in this case, 2 things connected to each junction point.</li>
			        	<li>Open the parts kit that came with your lab kit and find the 22Ω resistor (color code Red/Red/Black/Gold) and the 10mH inductor (it says &quot;106C&quot;)</li>
			        	<li>Build the circuit as shown in figure 2-2. </li>
			        	<li>Play some audio and listen to both “filter” and the “flat” and compare.
			        	  <ul>
			        	    <li><em>To listen to the &quot;flat&quot; audio, use a jumper wire to short the two sides of the inductor (connect junction points B and C).</em></li>
			      	      </ul>
			        	</li>
			       	</ol>
                `,
                'questionText': `<p><strong>Question #2: What do you hear? How is the audio different with the inductor in series (compared to the "flat" audio)?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `The low frequencies were softer in volume.`,
                        'correct': false,
                        'feedback': `Incorrect, make sure you are identifying the "flat" and "filter" audio correctly.`
                    },
                    {
                        'text': `The high frequencies were softer in volume.`,
                        'correct': true,
                        'feedback': `Correct`
                    },
                    {
                        'text': `The low frequencies were louder in volume.`,
                        'correct': false,
                        'feedback': `Incorrect. Your brain may decide to interpret the change as the low frequencies getting louder but in reality the high frequencies are getting softer.`
                    },
                    {
                        'text': `The high frequencies were louder in volume.`,
                        'correct': false,
                        'feedback': `Incorrect, make sure you are identifying the "flat" and "filter" audio correctly. The high frequencies are louder when it is "flat" (the inductor shorted with the jumper wire), but softer when the filter is being heard.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>Question #3: Did it match what you expected for the circuit?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Yes`,
                        'correct': true,
                        'feedback': `Good, move ahead.`
                    },
                    {
                        'text': `No`,
                        'correct': false,
                        'feedback': `Go back and figure out where your thinking was flawed. This is a really important part of the learning process so take the time to do it.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
        			<h2>Inductor too small?</h2>
        			<p>You are about to change the 10mH inductor for a 33mH inductor.</p>
                `,
                'questionText': `<p><strong>Question #4: How will the curve change?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `It will move to the left`,
                        'correct': true,
                        'feedback': `Correct! :-) You will be making the value of the inductor LARGER, so the curve moves to the LEFT. <strong>LARGER=LEFT</strong>`
                    },
                    {
                        'text': `It will move to the right`,
                        'correct': false,
                        'feedback': `No, it will not. You will be making the value of the inductor LARGER, so the curve moves to the LEFT. <strong>LARGER=LEFT</strong>`
                    },
                    {
                        'text': `It will become steeper`,
                        'correct': false,
                        'feedback': `No, nothing we can do to the value of the inductor will change how steep the filter is. We need to add a second filter for that. You will be making the value of the inductor LARGER, so the curve moves to the LEFT. <strong>LARGER=LEFT</strong>`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>Question #5: How will it sound different?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Low frequencies will not be as loud`,
                        'correct': false,
                        'feedback': `That may be correct, at least theoretically, but the main change should be occurring in the high frequencies.`
                    },
                    {
                        'text': `Low frequencies will be louder`,
                        'correct': false,
                        'feedback': `No, that is not what you should hear.`
                    },
                    {
                        'text': `High frequencies will not be as loud`,
                        'correct': true,
                        'feedback': `CORRECT! Move on.`
                    },
                    {
                        'text': `High frequencies will be louder`,
                        'correct': false,
                        'feedback': `This is the opposite of what will happen.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
			        <h2>Biggin that inductor</h2>
			        <p><strong>3-5.</strong> You will now add the 33mH inductor into the circuit so that you can compare the 10mH to the 33mH inductor in series.</p>
			        <p>!!Don’t worry, there is nothing in this circuit that can injure you, feel free to connect and disconnect while it is playing!!</p>
			        <div class='image_center'>
			        	<a href="${this.a111RootUrl}/A111/img/unit03/labs/10mHor33mH.png" target="new">
			        		<img src='${this.a111RootUrl}/A111/img/unit03/labs/10mHor33mH.png' alt="photo of lab" width='648' height='200'>
			        	</a>
			        </div>
                `,
                'questionText': `<p><strong> Question #6: What do you hear? How is the audio different with the larger inductor in series (</strong><em>compared to the smaller inductor</em><strong>)?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `High frequencies are less audible`,
                        'correct': true,
                        'feedback': `Correct`
                    },
                    {
                        'text': `High frequencies are more audible`,
                        'correct': false,
                        'feedback': `That is not what you should have heard, make sure you are correctly identifying when you are hearing the 10mH inductor and when you are hearing the 33mH inductor. If you still have trouble, please contact your instructor.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>Question #7: Did it match what you expected for the circuit?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Yes`,
                        'correct': true,
                        'feedback': `Great! Move ahead.`
                    },
                    {
                        'text': `No`,
                        'correct': false,
                        'feedback': `Go back and figure out where your thinking was flawed. This is a really important part of the learning process so take the time to do it.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
        			<h1>Parallinductogram?</h1>
        			<h2>What's gonna happen?</h2>
                `,
                'questionText': `<p><strong>Question #8: You are about to connect an inductor in parallel with the speaker, what frequency response will this create?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/bc_curve.png' width='200' height='76'></div>`,
                        'altText': 'BC curve',
                        'correct': false,
                        'feedback': `Nope, maybe you should go back over the reading before trying this lab.`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/bp_curve.png' width='200' height='76'></div>`,
                        'altText': 'BP curve',
                        'correct': false,
                        'feedback': `Nope, that would require the combination of two filters...`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/hp_curve.png' width='200' height='76'></div>`,
                        'altText': 'HP curve',
                        'correct': true,
                        'feedback': `CORRECT! Now build it.`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/lp_curve.png' width='200' height='76'></div>`,
                        'altText': 'LP curve',
                        'correct': false,
                        'feedback': `Nope, unless you were looking at the answer in a mirror...`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
			        <h2>Build it and make some noise.</h2>
			        <div class='image_right'>
			        	<img src='${this.a111RootUrl}/A111/img/unit03/labs/IndPar.png' alt="" width='400' height="192">
			        </div>
			        <p><strong>3-6.</strong> Remove the inductors from your breadboard and connect junction points B and C so you can hear audio again. Next you will be connecting an inductor in parallel with the speaker. Figure 2-4 shows the schematic for the inductor in parallel with the speaker.</p>
			        <ul>
			          <li>First identify the circuit junction points. In this circuit there are now three junction points. Once you have identified them, confirm below.
			          	<div class="question_and_answer_full">
			          		<div class="question_button">
			            		<div class="question_button_header">Click below to confirm the junction points.</div>
			          		</div>
			          		<!-- end of question_button div -->
			          		<div class="revealed_answer">
			            		<div class="revealed_answer_header">Answer: </div>
		            			<div class="image_holder no_caption">
					            	<img src="${this.a111RootUrl}/A111/img/unit03/labs/IndPar_junction.png" alt="" width="500" height="240" class="image_center">
					            	<p><strong>Junction Point A:</strong> two things connected (V source +, one side of R1)</p>
					                <p><strong>Junction Point B:</strong> three things connected (one side of R1, one side of L1, one side of speaker)</p>
									<p><strong>Junction Point C: </strong>three things connected (one side of speaker, one side of L1, V source -)</p>
								</div>
		            			<!-- end of revealed_answer div -->
		          			</div>
		        		</div>
			        </li>
			        <li>Find the 0.1mH inductor (104C) and connect it in parallel with the speaker using the schematic and your identification of the junction points.</li>
			            <li>To hear the “flat” audio, simply dis-connect one end of the inductor, do NOT short across it!  <strong><span style="font-weight: 800">&#128163;</span></strong></li>
			        </ul>
			        <div class='image_center'>
			        	<a href="${this.a111RootUrl}/A111/img/unit03/labs/IndPar_photo.png" target="new">
			        		<img src='${this.a111RootUrl}/A111/img/unit03/labs/IndPar_photo.png' alt="" width='400' height="192">
			        	</a>
			        </div>
                `,
                'questionText': `<p><strong>Question #9: What do you hear? How is the audio different with the inductor in parallel (</strong><em>compared to the "flat" audio</em><strong>)?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `The low frequencies were softer in volume.`,
                        'correct': true,
                        'feedback': `Correct`
                    },
                    {
                        'text': `The high frequencies were softer in volume.`,
                        'correct': false,
                        'feedback': `That is not correct.`
                    },
                    {
                        'text': `The low frequencies were louder in volume.`,
                        'correct': false,
                        'feedback': `Incorrect, make sure you are identifying the "flat" and "filter" audio correctly.`
                    },
                    {
                        'text': `The high frequencies were louder in volume.`,
                        'correct': false,
                        'feedback': `Incorrect. Your brain may decide to interpret the change as the high frequencies getting louder but in reality the low frequencies are getting softer. Make sure you are correcctly comparing "flat" (when one side of the indcutor is disconnected) and "filter" (when both sides of the inductor are conected).`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>Question #10: Did it match what you expected for the circuit?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Yes`,
                        'correct': true,
                        'feedback': `Great, move ahead!`
                    },
                    {
                        'text': `No`,
                        'correct': false,
                        'feedback': `Go back and figure out where your thinking was flawed. This is a really important part of the learning process so take the time to do it.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
                	<div class="line_break"></div>
        			<h2>Shrinking inductors</h2>
        		`,
                'questionText': `<p><strong>Question #11: You are about to decrease the inductance, how will the curve change?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `It will move to the left`,
                        'correct': false,
                        'feedback': `No it won't. You are REDUCING the value of the inductor, so the curve will move to the RIGHT. <strong>REDUCE = RIGHT</strong>`
                    },
                    {
                        'text': `It will move to the right`,
                        'correct': true,
                        'feedback': `CORRECT, now try it!`
                    },
                    {
                        'text': `It will become steeper`,
                        'correct': false,
                        'feedback': `No, nothing we can do to the value of the capacitor will change how steep the filter is. We need to add a second filter for that.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>Question #12: How will it sound different?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `High frequencies will not be as loud`,
                        'correct': false,
                        'feedback': `This may be true, at least in some theoretical sense, but you will mostly hear a change in the low frequencies. They were what was cut originally, with the 0.047mH inductor the low frequencies will be changed more than they were with the 1mH inductor.`
                    },
                    {
                        'text': `High frequencies will be louder`,
                        'correct': false,
                        'feedback': `That is not correct.`
                    },
                    {
                        'text': `Low frequencies will not be as loud`,
                        'correct': true,
                        'feedback': `Correct, now try it.`
                    },
                    {
                        'text': `Low frequencies will be louder`,
                        'correct': false,
                        'feedback': `That is not correct, in fact it is the opposite of what will happen.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
        			<h2>Build it SMALLER.</h2>
        			<p><strong>3-7.</strong> Now try the 0.047mH inductor in place of the 0.1mH.</p>
                `,
                'questionText': `<p><strong>Question #13: Did the sound change as you expected?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Yes`,
                        'correct': true,
                        'feedback': `Fine work, move on to page 3.`
                    },
                    {
                        'text': `No`,
                        'correct': false,
                        'feedback': `Go back and figure out where your thinking was flawed. This is a really important part of the learning process so take the time to do it.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
                	<div class="line_break"></div>
        			<h1>Double the Filters = Double the Fun</h1>
        			<h2>What are you gonna hear?</h2>
        		`,
                'questionText': `<p><strong>Question #13: You are now going to connect an inductor in series AND and inductor in parallel. What frequency response will this create?</strong>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/bc_curve.png' width='200' height='76'></div>`,
                        'altText': 'BC curve',
                        'correct': false,
                        'feedback': `Nope, maybe you should go back over the reading before trying this lab.`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/bp_curve.png' width='200' height='76'></div>`,
                        'altText': 'BP curve',
                        'correct': true,
                        'feedback': `You are correct and may now proceed to the building of the circuit.`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/hp_curve.png' width='200' height='76'></div>`,
                        'altText': 'HP curve',
                        'correct': false,
                        'feedback': `Nope, you are adding together a low pass (inductor in series) and a high pass (inductor in parallel). That means they will work together.`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/lp_curve.png' width='200' height='76'></div>`,
                        'altText': 'LP curve',
                        'correct': false,
                        'feedback': `Nope, you are adding together a low pass (inductor in series) and a high pass (inductor in parallel). That means they will work together.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class='image_center'>
						<div class='image_left'>
							<a href="${this.a111RootUrl}/A111/img/unit03/labs/IndParSer.png" target="new">
								<img src='${this.a111RootUrl}/A111/img/unit03/labs/IndParSer.png' alt="" width='400' height='192'>
							</a>
						</div>
        				<div class='image_right'>
        					<a href="${this.a111RootUrl}/A111/img/unit03/labs/IndParSer_photo.png" target="new">
        						<img src='${this.a111RootUrl}/A111/img/unit03/labs/IndParSer_photo.png' alt="" width='400' height='208'>
        					</a>
        				</div>
        			</div>
        			<p><strong>3-8.</strong> Remove the inductors used in the last circuit and build the circuit shown in figure 2-6. You will be using the 4.7mH (475C) and 1mH (105C) inductors.</p>
                `,
                'questionText': `<p><strong>Question #14: What do you hear? How is the audio different with the two inductors in the circuit?</strong><br><em>NOTE: to hear the "flat" signal, you will:<ol><li>short across L2</li><li>disconnect one end of L1</li></ol></em>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Midrange frequencies will not be as loud`,
                        'correct': false,
                        'feedback': `<p>That is not correct:</p>
            				<ul>
            					<li>The inductor in series will reduce the volume of the high frequencies.</li>
            					<li>the inductor in parallel will reduce the volume of the low frequencies.</li>
            				</ul>
            				<p>What will be left (though still cut some) will be the midrange.</p>
            			`
                    },
                    {
                        'text': `High frequencies and low frequencies will not be as loud`,
                        'correct': true,
                        'feedback': `Correct! You are done with Lab #3.`
                    }
                ],
                'htmlAfterQuestion': `
					<div class="line_break"></div>
        			<h2><em>Again I highly recommend PLAYING with this! Try things, figure out how it works. The more you work with it beyond the specific lab directions, the more you will get out of the course!</em></h2>
        			<div class="image_left no_caption">
        				<img src="${this.a111RootUrl}/A112/img/unit07/labs/Camera-icon.png" width="100" height="100"/>
        			</div>
        			<h2><em><strong>Remember to take a photo of your lab in progress to upload to Canvas if you are in the online section or did not finish during lab time.</strong></em></h2>
                `
            }
  		]
  	},
  	'lab4': {
  		'page1': [
  			{
  				'htmlBeforeQuestion': `
					<p>This lab will have you experimenting with capacitor and inductor filters and hearing the results.
In addition to your lab kit you will need something to play some music, a phone or mp3 player would be best. There is a short cable to connect this included with your kit. Using a computer to play back the audio is possible but will require a longer cable. These are available at most electronics stores, contact your instructor if you have questions.</p>
		           <p><em>The jumper wire colors indicated in the instructions are suggestions only, you may not have the lengths needed in the colors suggested. Use whatever colors you have. Using the colors indicated in the directions will make the lab images and instructions more useful but will not always be possible.</em></p>
					<h1>The Setup</h1><br>
		        <p><strong>4-1.</strong> Let’s start by just getting audio through the speaker in your lab kit.</p>
		            <ol type='a'>
		            	<li>Plug in the power cable for your lab kit and into a working outlet. Your lab kit should light up.</li>
		                <li>Make sure that the “Amp Level” control is turned down all the way (fully counter-clockwise)</li>
		                <li>Find the 1/8” to 1/8” cable included with your lab kit.
		                	<ul>
		                    	<li>Connect one end of the 1/8” to 1/8” cable to your audio player headphone output.</li>
		                        <li>Connect the other end to the “External Audio  Input” of the lab kit.</li>
		                        <div class='image_left'>
		                        	<img src='${this.a111RootUrl}/A111/img/unit04/labs/eighthcable.jpg' width='200' height='150'>
		                        </div>
		                    </ul>
		                </li>
		                <li> Now get a Green jumper wire from the bag of jumper wires that came with your kit (the shortest you can find would be best).
		                	<ul>
		                    	<li>Connect one end to the “Aux Audio Out G” connection on your lab kit.</li>
		                        <li>Connect the other end to the “Amp In G” connection on your lab kit.</li>
		                        <div class='image_left'>
		                        	<img src='${this.a111RootUrl}/A111/img/unit04/labs/AmpIngnd.jpg' width='300' height='225'>
		                        </div>
		                    </ul>
		                </li>
		                <li>Next get a White jumper wire from the bag of jumper wires that came with your kit (the shortest you can find would be best).
		                	<ul>
		                    	<li>Connect one end to the “Aux Audio Out +” connection on your lab kit.</li>
		                        <li>Connect the other end to the “Amp In +” connection on your lab kit.</li>
		                        <div class='image_left'>
		                        	<img src='${this.a111RootUrl}/A111/img/unit04/labs/AudioPlusconnected.jpg' width='300' height='225'>
		                        </div>
		                    </ul>
		                </li>
		                <li>Next get an Orange jumper wire from the bag of jumper wires that came with your kit (the longest you can find would be best).
		                    <ul>
		                        <li>Connect one end to the “Amp Spk Out”  top connection on your lab kit.</li>
		                        <li>Connect the other end to the “Spk In” top connection on your lab kit.</li>
		                        <div class='image_left'>
		                            <img src='${this.a111RootUrl}/A111/img/unit04/labs/SPKPlusConnected.jpg' width='300' height='274'>
		                        </div>
		                    </ul>
		                </li>
		                <li>Now get a Blue jumper wire from the bag of jumper wires that came with your kit (the longest you can find would be best).
		                	<ul>
		                    	<li>Connect one end to the “Amp Spk Out” bottom connection on your lab kit.</li>
		                        <li>Connect the other end to the “Spk In” bottom connection on your lab kit.</li>
		                        <div class='image_left'>
		                            <img src='${this.a111RootUrl}/A111/img/unit04/labs/SPKNegConnected.jpg' width='300' height='225'>
		                        </div>
		                    </ul>
		                </li>
		                <li>Play some music on your player and turn up the “Amp Level” control. You should hear music!
		                	<ul>
		                    	<li>Note that this is not a great sounding speaker, it is intended to be just good enough to allow you to hear what you need to for the labs.</li>
		                        <li>In order to do what is needed in all version of the labs, this amplifier has a lot of “gain”. This means that it may sound distorted. If it does, try turning down the volume on your MP3 player/phone.</li>
		                        <li>Now you know this is working without any filter, always a good start.</li>
		                    </ul>
		                </li>
		            </ol>
		            <div class='image_right'>
		                <img src='${this.a111RootUrl}/A111/img/unit04/labs/Breadboard.jpg' width='253' height='191'>
		            </div>
		            <h2>Check yourself and set yourself.</h2>
		        <p><strong>4-2.</strong> Now we will build our first filter circuit. To do that we need to connect to our Breadboard, the breadboard is a convenient way to connect components in a circuit. It is simply a number of holes that accept leads from components and make an electrical connection between them.</p>
		            <ol type='a'>
		            	<li>This close-up image color codes the holes to indicate how they are connected. The holes with the same color are connected to each other. Any component leads placed in those holes will connect to each other.</li>
		                <div class='image_center'>
		                    <img src='${this.a111RootUrl}/A111/img/unit04/labs/BreadboardCloseup1.jpg' width='166' height='214'>
		                </div>
		                <li>The numbered vertical columns are connected in groups of 5 (a-e and, separately, f-j).</li>
		                <li>In addition there are long horizontal rows of 50 holes that are connected. These have red or blue lines running along them.</li>
		                <div class='image_center'>
		                    <img src='${this.a111RootUrl}/A111/img/unit04/labs/BreadboardCloseup2.jpg' width='775' height='76'>
		                </div>
		            </ol>
		            <p><strong>4-3.</strong> The Orange and blue wires that we used to connect “Amp Spk Out” to “Spk In” need to connect to our breadboard.</p>
		            <ol type='a'>
		            	<li>Turn down the “Amp Level” control.</li>
		                <li>Remove the Orange wire connection from the “Spk In” connection and place it on the breadboard in connection point “f-25” (row f, column 25).</li>
		                <li>Remove the Blue wire connection from the “Spk In” connection and place it on the breadboard in the connection point below column 25 in the horizontal row with the red line running along it.</li>
		                <div class='image_right'>
		                	<img src='${this.a111RootUrl}/A111/img/unit04/labs/Breadboardconnection1.jpg' width='108' height='238'>
		            	</div>
		                <li>Now we have to re-connect to the “Spk In” connections. Get a Yellow jumper wire and:
		                	<ul>
		                    	<li>Connect one end to the breadboard in connection point “g-25” (row g, column 25). (This will connect it to the Orange wire.)</li>
		                        <li>Connect the other end to the “Spk In” top connection.</li>
		                    </ul>
		                </li>
		                <li>Get a Black jumper wire and:
		                	<ul>
		                    	<li>Connect one end to it on the breadboard in the connection point below column 3 in the horizontal row with the red line running along it (this will connect it to the Blue wire).</li>
		                        <li>Connect the other end to the “Spk In” bottom connection.</li>
		                        <li>Test that you are still hearing sound from your speaker. If not, check that you did everything in #6-3 correctly.</li>
		                    </ul>
		                </li>
		            </ol>
		            <div class='image_left'>
		                <img src='${this.a111RootUrl}/A111/img/unit04/labs/BredboardConnection2.jpg' width='693' height='523'>
		            </div>
  				`,
  			}
  		],
  		'page2': [
  			{
                'htmlBeforeQuestion': `
                	<h1>Captain Series</h1>
           			<h2>What will happen?</h2>
        		`,
                'questionText': `<p><strong>Question #1: You are about to add a capacitor in series with the speaker. What frequency response will this circuit create?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/bc_curve.png' width='200' height='76'></div>`,
                        'altText': 'BC curve',
                        'correct': false,
                        'feedback': `Nope, maybe you should go back over the reading before trying this lab.`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/bp_curve.png' width='200' height='76'></div>`,
                        'altText': 'BP curve',
                        'correct': false,
                        'feedback': `Nope, that would require the combination of two filters...`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/hp_curve.png' width='200' height='76'></div>`,
                        'altText': 'HP curve',
                        'correct': true,
                        'feedback': `CORRECT! Now build it.`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/lp_curve.png' width='200' height='76'></div>`,
                        'altText': 'LP curve',
                        'correct': false,
                        'feedback': `Nope, unless you were looking at the answer in a mirror...`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
			        <div class='image_right'>
			        	<img src='${this.a111RootUrl}/A111/img/unit04/labs/Lab6_schematic22uF.png' width='300' height='137'>
			        </div>
			        <h2>Build It, Hear it, <strike>Blow it up</strike>?</h2>
			        <p><strong>4-4.</strong> For the first filter we are going to insert a 2.2µF capacitor in series with our speaker. In order to make it work with this “real world” example we need to add a resistor (22Ω) in series with the capacitor and speaker. The schematic is shown below. The schematic shows a Voltage source (V1). This is actually: your music player + the audio amplifier in your lab kit.</p>
			        <ol type='a'>
			        	<li>Open the parts kit that came with your lab kit and find the 22Ω resistor (color code Red/Red/Black/Gold) and the 2.2µF NP (non-polar) capacitor.</li>
			            <div class='image_center'>
			        		<img src='${this.a111RootUrl}/A111/img/unit04/labs/22uF22ohm.jpg' width='200' height='176'>
			        	</div>
			            <li>Move the Yellow wire from “g-25” to “f-3”.</li>
			            <li>Connect one end of the resistor (it doesn’t matter which one) to “g-25”.</li>
			            <li>Connect the other end of the resistor to “g-15”.</li>
			            <li>Connect one end of the 2.2µF capacitor (again it doesn’t matter which end) to “h-15”.</li>
			            <li>Connect the other end of the 2.2µf capacitor to “h-3”</li>
			            <div class='image_center'>
			        		<img src='${this.a111RootUrl}/A111/img/unit04/labs/BreadboardConnection3.jpg' width='300' height='223'>
			        	</div>
			            <li>Next add another yellow wire that can (when you want to hear the “flat” audio) connect from “i-15” to “i-3”. <br> <em>(you can leave one end of this connected at all times and only connect the other side to hear “flat” audio)</em></li>
			            <div class='image_center'>
			        		<img src='${this.a111RootUrl}/A111/img/unit04/labs/FlatSeries.jpg' width='300' height='223'>
			        	</div>
			            <li>Play some audio and listen to both “filter” and the “flat” and compare.</li>
			        </ol>
                `,
                'questionText': `<p><strong>Question #2: What do you hear? How is the audio different with the capacitor in series (compared to the "flat" audio)?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `The high frequencies were softer in volume.`,
                        'correct': false,
                        'feedback': `Incorrect, make sure you are identifying the "flat" and "filter" audio correctly.`
                    },
                    {
                        'text': `The low frequencies were softer in volume.`,
                        'correct': true,
                        'feedback': `Correct`
                    },
                    {
                        'text': `The high frequencies were louder in volume.`,
                        'correct': false,
                        'feedback': `Incorrect. Your brain may decide to interpret the change as the high frequencies getting louder but in reality the low frequencies are getting softer.`
                    },
                    {
                        'text': `The low frequencies were louder in volume.`,
                        'correct': false,
                        'feedback': `Incorrect, make sure you are identifying the "flat" and "filter" audio correctly. The low frequencies are louder when it is "flat" (the capacitor shorted with the jumper wire), but softer when the filter is being heard.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>Question #3: Did it match what you expected for the circuit?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Yes`,
                        'correct': true,
                        'feedback': `Good, move ahead.`
                    },
                    {
                        'text': `No`,
                        'correct': false,
                        'feedback': `Go back and figure out where your thinking was flawed. This is a really important part of the learning process so take the time to do it.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
        			<h2>Bigger Capacitor = Bigger Bang?</h2>
        			<p>You are about to change the 2.2µF capacitor for a 4.7µF capacitor.</p>
                `,
                'questionText': `<p><strong>Question #4: How will the curve change?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `It will move to the left`,
                        'correct': true,
                        'feedback': `Correct! :-)`
                    },
                    {
                        'text': `It will move to the right`,
                        'correct': false,
                        'feedback': `No, it will not. You will be making the value of the capacitor LARGER, so the curve moves to the LEFT`
                    },
                    {
                        'text': `It will become steeper`,
                        'correct': false,
                        'feedback': `No, nothing we can do to the value of the capacitor will change how steep the filter is. We need to add a second filter for that.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>Question #5: How will it sound different?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Low frequencies will not be as loud`,
                        'correct': false,
                        'feedback': `Incorrect, you will actually hear the low frequencies louder with the 4.7µF capacitor.`
                    },
                    {
                        'text': `Low frequencies will be louder`,
                        'correct': true,
                        'feedback': `CORRECT!`
                    },
                    {
                        'text': `High frequencies will not be as loud`,
                        'correct': false,
                        'feedback': `That is not correct.`
                    },
                    {
                        'text': `High frequencies will be louder`,
                        'correct': false,
                        'feedback': `This may be true, at least in some theoretical sense, but you will mostly hear a change in the low frequencies. They were what was cut originally. With the 4.7µF capacitor the low frequencies will not be changed as much as they were with the 2.2µF capacitor.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
			        <h2>Bigger Capacitor = Bigger <strike>Bang?</strike> Bottom!</h2>
			        <p><strong>4-5.</strong> You will now add the 4.7µF capacitor into the circuit so that you can compare the 2.2µF to the 4.7µF capacitors in series.</p>
			        <ol type='a'>
			        	<li>Take the 2.2µF capacitor and move the lead that is connected to “h-15” and move it to “h-11”</li>
			            <li>Remove the extra yellow wire</li>
			            <li>Find the 4.7µF (yellow) capacitor in your parts kit and connect it to the breadboard
			            	<ul>
			                	<li>Connect one end to “i-13”</li>
			                    <li>Connect the other end to “i-3”</li>
			                </ul>
			            </li>
			            <li>Use the extra yellow wire you were using to create a “flat” circuit and connect one end to “h-15”
			            	<ul>
			                	<li>To hear the 2.2µF capacitor, connect the other end to “j-11”</li>
			                    <li>To hear the 4.7µF capacitor, connect the other end to “j-13”</li>
			                    <li>!!don’t worry there is nothing in this circuit that can injure you, feel free to connect and disconnect while it is playing!!</li>
			                </ul>
			            </li>
			        </ol>
			        <div class='image_center'>
			        	<img src='${this.a111RootUrl}/A111/img/unit04/labs/47to22.jpg' width='500' height='375'>
			        </div>
                `,
                'questionText': `<p><strong> Question #6: What do you hear? How is the audio different with the larger capacitor in series (</strong><em>compared to the smaller capacitor</em><strong>)?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Lower frequencies are more audible`,
                        'correct': true,
                        'feedback': `Correct`
                    },
                    {
                        'text': `Lower frequencies are less audible`,
                        'correct': false,
                        'feedback': `That is not what you should have heard, make sure you are correctly identifying when you are hearing the 4.7µF capacitor and when you are hearing the 2.2µF capacitor. If you still have trouble, please contact your instructor.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>Question #7: Did it match what you expected for the circuit?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Yes`,
                        'correct': true,
                        'feedback': `Great! Move ahead.`
                    },
                    {
                        'text': `No`,
                        'correct': false,
                        'feedback': `Go back and figure out where your thinking was flawed. This is a really important part of the learning process so take the time to do it.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
                	<div class="line_break"></div>
        			<h1>Pair of Lil Capacitors?</h1>
        			<h2>What's gonna happen?</h2>
        		`,
                'questionText': `<p><strong>Question #8: You are about to connect a capacitor in parallel with the speaker, what frequency response will this create?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/bc_curve.png' width='200' height='76'></div>`,
                        'altText': 'BC curve',
                        'correct': false,
                        'feedback': `Nope, maybe you should go back over the reading before trying this lab.`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/bp_curve.png' width='200' height='76'></div>`,
                        'altText': 'BP curve',
                        'correct': false,
                        'feedback': `Nope, that would require the combination of two filters...`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/hp_curve.png' width='200' height='76'></div>`,
                        'altText': 'HP curve',
                        'correct': false,
                        'feedback': `Nope, unless you were looking at the answer in a mirror...`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/lp_curve.png' width='200' height='76'></div>`,
                        'altText': 'LP curve',
                        'correct': true,
                        'feedback': `CORRECT! Now build it.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
			        <h2>Build it and make some noise.</h2>
			        <p>Remove the 4.7µF and 2.2µF capacitors from your breadboard and connect the extra yellow wire from “h-15” to “h-3” so you can hear audio again. Next you will be connecting a capacitor in parallel with the speaker. Figure 2-6 shows the schematic for the capacitor in parallel with the speaker.</p>
			        <div class='image_right'>
			        	<img src='${this.a111RootUrl}/A111/img/unit04/labs/Lab6_schematicParallel.png' width='300'>
			        </div>
					<p><strong>4-6.</strong> Find the 47µF and 22µF capacitors in your parts kit (the 47µF is the large black one).</p>
			        <div class='image_center'>
			        	<img src='${this.a111RootUrl}/A111/img/unit04/labs/4722caps.jpg' width='200'>
			        </div>
			        <ul>
			        	<li>Connect one end of the 47µF capacitor to”i-15”</li>
			            <li>Connect the other end of the 47µF capacitor to the horizontal row below column 2.</li>
			            <li>To hear the “flat” audio, simply dis-connect one end of the capacitor, do NOT short across it!  <strong><span style="font-weight: 800">&#128163;</span></strong></li>
			        </ul>
			        <div class='image_center'>
			        	<img src='${this.a111RootUrl}/A111/img/unit04/labs/Parallel47.jpg' width='300'>
			        </div>
                `,
                'questionText': `<p><strong>Question #9: What do you hear? How is the audio different with the capacitor in parallel (</strong><em>compared to the "flat" audio</em><strong>)?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `The high frequencies were softer in volume.`,
                        'correct': true,
                        'feedback': `Correct, move ahead.`
                    },
                    {
                        'text': `The low frequencies were softer in volume.`,
                        'correct': false,
                        'feedback': `That is not correct.`
                    },
                    {
                        'text': `The high frequencies were louder in volume.`,
                        'correct': false,
                        'feedback': `Incorrect, make sure you are correctly identifying what is the "flat" audio, and what is the "filter".`
                    },
                    {
                        'text': `The low frequencies were louder in volume.`,
                        'correct': false,
                        'feedback': `Incorrect. Your brain may decide to interpret the change as the low frequencies getting louder but in reality the high frequencies are getting softer.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>Question #10: Did it match what you expected for the circuit?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Yes`,
                        'correct': true,
                        'feedback': `Great! Move ahead.`
                    },
                    {
                        'text': `No`,
                        'correct': false,
                        'feedback': `Go back and figure out where your thinking was flawed. This is a really important part of the learning process so take the time to do it.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
        			<h2>Tiny capacitors....... make me..... happy?</h2>
                `,
                'questionText': `<p><strong>Question #11: You are about to decrease the capacitance, how will the curve change?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `It will move to the left`,
                        'correct': false,
                        'feedback': `No it won't. You are REDUCING the value of the capacitor, so the curve will move to the RIGHT.`
                    },
                    {
                        'text': `It will move to the right`,
                        'correct': true,
                        'feedback': `CORRECT, now try it!`
                    },
                    {
                        'text': `It will become steeper`,
                        'correct': false,
                        'feedback': `No, nothing we can do to the value of the capacitor will change how steep the filter is. We need to add a second filter for that.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>Question #12: How will it sound different?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Low frequencies will not be as loud`,
                        'correct': false,
                        'feedback': `This may be true, at least in some theoretical sense, but you will mostly hear a change in the high frequencies. They were what was cut originally, with the 22µF capacitor the high frequencies will not be changed as much as they were with the 47µF capacitor.`
                    },
                    {
                        'text': `Low frequencies will be louder`,
                        'correct': false,
                        'feedback': `That is not correct.`
                    },
                    {
                        'text': `High frequencies will not be as loud`,
                        'correct': false,
                        'feedback': `That is not correct, in fact it is the opposite of what will happen.`
                    },
                    {
                        'text': `High frequencies will be louder`,
                        'correct': true,
                        'feedback': `Correct, now try it.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
			        <h2>Build it SMALLER.</h2>
			        <p><strong>4-7.</strong> Now try the 22µF capacitor in place of the 47uF.</p>
			        <ol type='a'>
			        	<li>Connect one end of the capacitor to “j-15”</li>
			            <li>Connect the other end to any hole in the horizontal row with the red line running next to it.</li>
			            <div class='image_center'>
			        		<img src='${this.a111RootUrl}/A111/img/unit04/labs/22parallel.jpg' width='300' height='221'>
			        	</div>
			            <li>Connect either the 47µF (<em>figure 2-10</em>) or the 22µF (<em>figure 2-11</em>) capacitor to the horizontal row to hear how they sound different.</li>
			        </ol>
			        <div class="image_center">
			        	<div class='image_left'>
			        		<img src='${this.a111RootUrl}/A111/img/unit04/labs/47or22parallel.jpg' width='300' height='225'>
			        	</div>
			        	<div class='image_right'>
			        		<img src='${this.a111RootUrl}/A111/img/unit04/labs/47or22parallel2.jpg' width='300' height='225'>
			        	</div></div>
                `,
                'questionText': `<p><strong>Question #13: Did the sound change as you expected?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Yes`,
                        'correct': true,
                        'feedback': `Fine work, move on to page 3.`
                    },
                    {
                        'text': `No`,
                        'correct': false,
                        'feedback': `Go back and figure out where your thinking was flawed. This is a really important part of the learning process so take the time to do it.`
                    }
                ],
                'htmlAfterQuestion': ``
            }
  		],
  		'page3': [
  			{
                'htmlBeforeQuestion': `
                	<h1>The talented Dr. Inductor enters the scene.</h1>
           			<h2>What does the Doctor bring to the party?</h2>
        		`,
                'questionText': `<p><strong>Question #14: If we swap out the capacitor in parallel, replacing it with an inductor, what kind of filter will we have?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/bc_curve.png' width='200' height='76'></div>`,
                        'altText': 'BC curve',
                        'correct': false,
                        'feedback': `Nope`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/bp_curve.png' width='200' height='76'></div>`,
                        'altText': 'BP curve',
                        'correct': false,
                        'feedback': `Not this one`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/hp_curve.png' width='200' height='76'></div>`,
                        'altText': 'HP curve',
                        'correct': true,
                        'feedback': `CORRECT! When we swap a capacitor for an inductor we get the opposite frequency response.`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/lp_curve.png' width='200' height='76'></div>`,
                        'altText': 'LP curve',
                        'correct': false,
                        'feedback': `Not even close, <em>well the opposite actually</em>. When we swap a capacitor for an inductor we get the opposite frequency response. With the capacitor in parallel we had a low pass filter, so an inductor in parallel will give us a high pass filter.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					  <div class="line_break"></div>
			          <h2>Bye-bye cap, hello inductor.</h2>
			          <div class='image_right'> <img src='${this.a111RootUrl}/A111/img/unit04/labs/IndPar.png' alt="schematic" width='400' height='189'> </div>
			          <p><strong>4-8.</strong> Now let’s swap the capacitor in parallel with an inductor in parallel.</p>
			          <ol type='a'>
			          	<li>Remove the capacitors from the breadboard.</li>
			            <li>Find the 1mH inductor in your parts kit (it is labeled 105C)
			            	<ul>
			                	<li>Connect one end (it doesn’t matter which one) to “j-15”</li>
			                    <li>Connect the other end to any hole in the horizontal row with the red line running next to it.</li>
			                    <li>As with the capacitors, you can simply disconnect one end to hear the "flat" audio.</li>
			                </ul>
			            </li>
			          </ol>
			          <div class='image_center'>
			          	<img src='${this.a111RootUrl}/A111/img/unit04/labs/1mHparallel.jpg' width='300' height='225'>
          			  </div>
                `,
                'questionText': `<p><strong>Question #15: Did the sound change as you expected?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Yes`,
                        'correct': true,
                        'feedback': `Fine work, move ahead.`
                    },
                    {
                        'text': `No`,
                        'correct': false,
                        'feedback': `Go back and figure out where your thinking was flawed. This is a really important part of the learning process so take the time to do it.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
          			<h2>Same filters, different components.</h2>
                `,
                'questionText': `<p><strong>Question #16: What will happen if we add a capacitor in series with the speaker while keeping the inductor in parallel with the speaker?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Low frequencies will not be as loud`,
                        'correct': true,
                        'feedback': `Correct! In this case we are adding two different High Pass filters together. Each on its own has a 6dB per octave slope. when we add them together we get a 12dB per octave slope. The lows are cut more drastically with the high frequencies affected less.`
                    },
                    {
                        'text': `Low frequencies will be louder`,
                        'correct': false,
                        'feedback': `That is not correct. In this case we are adding two different High Pass filters together. Each on its own has a 6dB per octave slope. when we add them together we get a 12dB per octave slope. The lows are cut more drastically with the high frequencies affected less.`
                    },
                    {
                        'text': `High frequencies will not be as loud`,
                        'correct': false,
                        'feedback': `That is not correct. In this case we are adding two different High Pass filters together. Each on its own has a 6dB per octave slope. when we add them together we get a 12dB per octave slope. The lows are cut more drastically with the high frequencies affected less.`
                    },
                    {
                        'text': `High frequencies will be louder`,
                        'correct': false,
                        'feedback': `There may indeed be some increase in the lower high frequencies, but what will really change is that the lows will be cut more, while the highs will be affected less (even though they were already only affected a tiny amount).`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					 <div class="line_break"></div>
			          <div class='image_right'><img src='${this.a111RootUrl}/A111/img/unit04/labs/IndPar_CapSer.png' alt="schematic" width='400' height='201'><div class="image_center"><img src='${this.a111RootUrl}/A111/img/unit04/labs/IndparCapser.jpg' width='300' height='197'></div></div>
			          <h2>Listening</h2>
			          <p><strong>4-9.</strong> Connect the 22µF capacitor in series with the speaker as shown in the schematic in figure #3-3..</p>
			          <ol type='a'>
			          	<li>Remove the wire that connects “h-15” to “h-3”</li>
			            <li>Connect the 22µF capacitor
			            	<ul>
			                	<li>One end to “h-15”.</li>
			                    <li>The other end to “h-3”.</li>
			                    <li>To listen without the capacitor, connect the extra wire from “i-15” to “i-3”.</li>
			                    <li>This example can be hard to hear.
			                    	<ul>
			                        	<li>Note that low frequencies are reduced more.</li>
			                            <li>If we had simply reduced the inductance and moved the curve to the right we would have heard higher and higher frequencies being but.</li>
			                            <li>In this case we hear the low frequencies cut more while the higher frequencies do not change.</li>
			                        </ul>
			                    </li>
			                </ul>
			            </li>
          			</ol>
                `,
                'questionText': `<p><strong>Question #17: Did the sound change as you expected?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Yes`,
                        'correct': true,
                        'feedback': `Great, move ahead.`
                    },
                    {
                        'text': `No`,
                        'correct': false,
                        'feedback': `Go back and figure out where your thinking was flawed. This is a really important part of the learning process so take the time to do it.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
                	<div class="line_break"></div>
          			<h1>Caps and Inductors together at last!</h1>
          			<h2>What's gonna happen.........<strike>anarchy</strike>?</h2>
        		`,
                'questionText': `<p><strong>Question #18: For our next experiment we will connect a capacitor and an inductor both in series with the speaker and in series with each other. What kind of filter will this create?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/bc_curve.png' width='200' height='76'></div>`,
                        'altText': 'BC curve',
                        'correct': false,
                        'feedback': `
                          Nope. All audio has to pass through both the capacitor and the inductor.
			              <br>That means that <strong>ALL</strong> audio will be cut some.
			              <ul><li>Low frequencies will be cut a lot by the capacitor</li>
			              <li>High frequencies will be cut a lot by the inductor</li>
			              <li>Midrange frequencies will be cut a little by both filters, but less overall than either high or low frequencies.</li></ul>
			              This leaves us with a <strong>Band Pass Filter</strong>
              			`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/bp_curve.png' width='200' height='76'></div>`,
                        'altText': 'BP curve',
                        'correct': true,
                        'feedback': `
                          CORRECT! All audio has to pass through both the capacitor and the inductor.
			              <br>That means that <strong>ALL</strong> audio will be cut some.
			              <ul><li>Low frequencies will be cut a lot by the capacitor</li>
			              <li>High frequencies will be cut a lot by the inductor</li>
			              <li>Midrange frequencies will be cut a little by both filters, but less overall than either high or low frequencies.</li></ul>
			              This leaves us with a <strong>Band Pass Filter</strong>
              			`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/hp_curve.png' width='200' height='76'></div>`,
                        'altText': 'HP curve',
                        'correct': false,
                        'feedback': `
                          Nope. All audio has to pass through both the capacitor and the inductor.
			              <br>That means that <strong>ALL</strong> audio will be cut some.
			              <ul><li>Low frequencies will be cut a lot by the capacitor</li>
			              <li>High frequencies will be cut a lot by the inductor</li>
			              <li>Midrange frequencies will be cut a little by both filters, but less overall than either high or low frequencies.</li></ul>
			              This leaves us with a <strong>Band Pass Filter</strong>
              			`
                    },
                    {
                        'text': `<div class="no_caption"><img src='${this.a111RootUrl}/A111/img/unit04/labs/lp_curve.png' width='200' height='76'></div>`,
                        'altText': 'LP curve',
                        'correct': false,
                        'feedback': `
                          Nope. All audio has to pass through both the capacitor and the inductor.
			              <br>That means that <strong>ALL</strong> audio will be cut some.
			              <ul><li>Low frequencies will be cut a lot by the capacitor</li>
			              <li>High frequencies will be cut a lot by the inductor</li>
			              <li>Midrange frequencies will be cut a little by both filters, but less overall than either high or low frequencies.</li></ul>
			              This leaves us with a <strong>Band Pass Filter</strong>
              			`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					  <div class="line_break"></div>
			          <h2>Time to listen.</h2>
			          <div class='image_right'>
			          	<img src='${this.a111RootUrl}/A111/img/unit04/labs/Lab6_schematicBP.png' width='400' height='195'>
			          </div>
			          <p><strong>4-10.</strong> Time to build the circuit shown in figure #3-3.. <br>
			          Remove the capacitor and inductor from the circuit.</p>
			          <ol type='a'>
			          	<li>Find the 4.7µF capacitor.
			            	<ul>
			                	<li>Connect one end to “h-10”.</li>
			                    <li>Connect the other end to “h-15”</li>
			                </ul>
			            </li>
			            <li>Find the 10mH inductor (it says “106C” on top).
			            	<ul>
			                	<li>Connect one end to “i-10”</li>
			                    <li>Connect the other end to “i-3”</li>
			                </ul>
			            </li>
			            <li>Use the extra wire to connect “j-15” to “j-3” to hear “flat” audio.</li>
			          </ol>
			          <div class='image_center'>
			          	<img src='${this.a111RootUrl}/A111/img/unit04/labs/BandPassfilt.jpg' width='300' height='222'>
			          </div>
                `,
                'questionText': `<p><strong>Question #19: You should hear both the high and low frequencies cut with this circuit, did you?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Yes`,
                        'correct': true,
                        'feedback': `Great, move on.`
                    },
                    {
                        'text': `No`,
                        'correct': false,
                        'feedback': `Make sure that your circuit is built as shown and that you are correctly identifying "flat" and "fliter" audio. If you are still not hearing both high and low frequencies cut, try some different music. If still no luck, contact your instructor.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					  <div class="line_break"></div>
			          <h2>Same components, different arrangement.</h2>
			          <div class='image_right'>
			          	<img src='${this.a111RootUrl}/A111/img/unit04/labs/Lab6_schematicBC.png' width='400'>
			          </div>
			          <p><strong>4-11.</strong> For our last circuit we will build a Band Cut Filter, as shown in figure #3-5..</p>
			          <ol type='a'>
			          	<li>Move the end of the 4.7µF capacitor that is connected to “h-10” to “h-3”.</li>
			            <li>Move the end of the inductor that is connected to “i-10” to “i-15”.</li>
			            <li>Use the extra wire to connect “h-15” to “h-3” to hear “flat” audio.</li>
			          </ol>
			          <div class='image_center'>
			          	<img src='${this.a111RootUrl}/A111/img/unit04/labs/BandCutFilt.jpg' width='300' height='186'>
			          </div>
                `,
                'questionText': `<p><strong>Question #20: You should hear the midrange being cut, did you?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Yes`,
                        'correct': true,
                        'feedback': `Good job. You are done with lab #4.`
                    },
                    {
                        'text': `No`,
                        'correct': false,
                        'feedback': `Make sure that your circuit is built as shown and that you are correctly identifying "flat" and "fliter" audio. If you are still not hearing the midrange cut, try some different music. If still no luck, contact your instructor.`
                    }
                ],
                'htmlAfterQuestion': `
					  <div class="line_break"></div>
			          <h2><em>I highly recommend PLAYING with this! Try things, figure out how it works. The more you work with it beyond the specific lab directions, the more you will get out of the course!<strong><br>
			        </strong></em></h2>
			          <div class="image_left no_caption"> <img src="${this.a111RootUrl}/A112/img/unit07/labs/Camera-icon.png" width="100" height="100"/></div>
			          <h2><em><strong>Remember to take a photo of your lab in progress to upload to Canvas if you are in the online section or did not finish during lab time.</strong></em></h2>
                `
            }
  		]
  	},
  	'lab5-1': {
  		'page1': [
  			{
                'htmlBeforeQuestion': `
				  <h1>Tubes!</h1>
		          <p><strong>You can start by plugging your lab kit into the wall for power (it will turn on) or wait until the lab instructions tell you to. It will not affect your results or safety.</strong></p>
		          <div class='image_right'>
		          	<a href="${this.a111RootUrl}/A111/img/unit05/labs/lab7-10.jpg" target="new">
		          		<img src='${this.a111RootUrl}/A111/img/unit05/labs/lab7-10.jpg' width='228' height='300' class="image_border">
		          	</a>
		          </div>
		          <p><strong>7-1.</strong> Start by finding the 12AX7 twin triode vacuum tube in your parts kit. It is in a brown box inside the parts kit.</p>
		          <p><strong>7-2.</strong> Plug this into the socket in your lab kit. The pins do not make a complete circle, so make sure to line the pins on the tube up with the holes in the socket. If it is hard to get in, check that all of the pins line up with the holes, some may need to be bent a bit.</p>
		          <p><strong>7-3.</strong> Below the tube socket are connections for the 9 pins on the tube. We will only be using the first five for this lab.</p>
		          <p><strong>7-4.</strong> Figure 1-2 shows a schematic for the circuit we will be building. We will be adjusting the "Var +/-" voltage connected to the tube.</p>
		          <div class='image_center'>
		          	<a href="${this.a111RootUrl}/A111/img/unit05/labs/Lab7_schem1.png" target="new">
		          		<img src='${this.a111RootUrl}/A111/img/unit05/labs/Lab7_schem1.png' width='300' height='375'
		          	</a>
		          </div>
                `,
                'questionText': `<p><strong>Question #1: What element of the tube is the &quot;Var +/-&quot; connected to?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Anode`,
                        'correct': false,
                        'feedback': `Incorrect`
                    },
                    {
                        'text': `Control grid`,
                        'correct': true,
                        'feedback': `Correct`
                    },
                    {
                        'text': `Cathode`,
                        'correct': false,
                        'feedback': `Incorrect`
                    },
                    {
                        'text': `Plate`,
                        'correct': false,
                        'feedback': `Incorrect`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<p>It is important when building a circuit on the breadboard to pick a point to start at and then move around the circuit in a logical manner. In this case we will start at the top and move down.</p>
			        <div class='image_right'>
			        	<a href="${this.a111RootUrl}/A111/img/unit05/labs/lab7-8.jpg" target="new">
			        		<img src='${this.a111RootUrl}/A111/img/unit05/labs/lab7-8.jpg' width='200' height='150' class="image_border">
			        	</a>
			        </div>
			        <p><strong>7-5.</strong> The first connection is from "+15V" to the red lead of your digital multi-meter. Use a red jumper wire for this.</p>
			        <ul>
			            <li>connect one end to "+15V" (any of the three holes)</li>
			            <li>connect the other end to the red lead of your multimeter <em>(pinch near the end and the "alligator clip" will open, you can then clamp it on the end of the jumper wire).</em>
			            <br>
			            </li>
			        </ul>
			        <p><strong>7-6.</strong> You will be using your digital multi-meter to measure current in this lab. You should remember from the game in Unit 1 that we have to set the meter to measure DC current and move the red lead to the current connector. You will also need to turn on your digital multimeter <em>(after a time your meter may power down to save batteries, simply turn it off and back on if this happens)</em>.</p>
			          <ul>
			            <li>set the meter to the 20m (20mA) setting for DC current <em>(this means that the maximum current that the meter can read in this setting is 20mA)</em></li>
			            <li>make sure the red lead is connected to the "A" jack on the meter            </li>
			          </ul>
			          <div class='image_right'>
			          	<a href="${this.a111RootUrl}/A111/img/unit05/labs/lab7-7.jpg" target="new">
			          		<img src='${this.a111RootUrl}/A111/img/unit05/labs/lab7-7.jpg' alt="" width='200' height='406' class="image_border">
			          	</a>
			          </div>
			          <p><strong>7-7.</strong> The black lead from your meter needs to connect to the Anode of the vacuum tube.
			This is on pin #1 of the tube. We will use a black jumper wire for this.</p>
			          <ul>
			            <li>connect one end of the black jumper wire to the black lead on your digital multi-meter</li>
			            <li>connect the other end of the black jumper to the pin #1 connection of the tube <em>(the numbered holes below the tube socket</em>).</li>
			          </ul>
			          <div class='image_center'>
			          	<a href="${this.a111RootUrl}/A111/img/unit05/labs/lab7-2.jpg" target="new">
			          		<img src='${this.a111RootUrl}/A111/img/unit05/labs/lab7-2.jpg' width='480' height='360' class="image_border">
			          	</a>
			          </div>
                `,
                'questionText': `
                	<p><strong>Question #2: Based on the schematic above (figure 1-2), what is the voltage on the Anode?</strong> <br>
         			<em>(you are not measuring to answer this question, you are just looking at the schematic and thinking:-P )</em></p>
         		`,
                'questionType': 'numerical',
                'textAfterInput': 'V',
                'options': [
                    {
                        'low': 15,
                        'high': 15,
                        'correct': true,
                        'feedback': `CORRECT! Move on`
                    },
                    {
                        'low': 0,
                        'high': 14.99,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is low)`
                    },
                    {
                        'low': 15.01,
                        'high': 10000,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is high)`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					  <div class="line_break"></div>
			          <h1>Light er Up!</h1>
			          <div class='image_right'>
			          	<a href="${this.a111RootUrl}/A111/img/unit05/labs/lab7-3.jpg" target="new">
			          		<img src='${this.a111RootUrl}/A111/img/unit05/labs/lab7-3.jpg' alt="" width='300' height='201' class="image_border"></a>
			            <br>
			            <a href="${this.a111RootUrl}/A111/img/unit05/labs/lab7-4.jpg" target="new">
			            	<img src='${this.a111RootUrl}/A111/img/unit05/labs/lab7-4.jpg' alt="" width='300' height='223' class="image_border">
			            </a>
			          </div>
			          <p><strong>7-8.</strong> We will now connect a variable voltage to the control grid of the tube. This will allow us to change the voltage on the control grid. You will use (if possible) a yellow jumper wire for this.</p>
			          <ul>
			            <li>move the switch below the meter built into your kit to the right so that is displays the voltage of the "Var +/-" output</li>
			            <li>set the control above the "Var +/-" connections so that the meter (set above) reads 0V.</li>
			            <li>connect one end of the yellow jumper wire to the "Var +/-" connection.</li>
			            <li>connect the other end  of the yellow jumper to pin #2 of the tube.</li>
			          </ul>
			          <p><strong>7-9.</strong> Now we need to connect the cathode to ground. We will use a green jumper wire for this <em>(again if you don't have a green wire long enough, another color is fine)</em>.</p>
			          <ul>
			            <li>connect one end of the green jumper wire to "GND"</li>
			            <li>connect the other end of the green jumper wire to pin #3 (the cathode) of the tube</li>
			          </ul>
			          <div class='image_center'>
			          	<a href="${this.a111RootUrl}/A111/img/unit05/labs/Lab7_schem1.png" target="new">
			          		<img src='${this.a111RootUrl}/A111/img/unit05/labs/Lab7_schem1.png' width='300' height='375'>
			          	</a>
			          </div>
                `,
                'questionText': `<p><strong>Question #3: What is the voltage at the cathode now?</strong></p>`,
                'questionType': 'numerical',
                'textAfterInput': 'V',
                'options': [
                    {
                        'low': 0,
                        'high': 0,
                        'correct': true,
                        'feedback': `CORRECT! Move on.`
                    },
                    {
                        'low': -1000,
                        'high': -0.01,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is low).`
                    },
                    {
                        'low': 0.01,
                        'high': 10000,
                        'correct': false,
                        'feedback': `That is not the correct answer (it is high).`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>Question #4: You now have an anode that is more positive than the cathode, what else is required to have current flow in a tube?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `A pony`,
                        'correct': false,
                        'feedback': `I'd like a pony too, but it won't help current flow.`
                    },
                    {
                        'text': `A heated cathode`,
                        'correct': true,
                        'feedback': `Correct`
                    },
                    {
                        'text': `A chocolate bar`,
                        'correct': false,
                        'feedback': `Great, now I'm hungry.`
                    },
                    {
                        'text': `A heated control grid`,
                        'correct': false,
                        'feedback': `Incorrect`
                    },
                    {
                        'text': `A heated anode`,
                        'correct': false,
                        'feedback': `Incorrect`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<div class="line_break"></div>
			          <h1>Your tube is cold</h1>
			            <div class='image_right'>
			            	<a href="${this.a111RootUrl}/A111/img/unit05/labs/lab7-5.jpg" target="new">
			            		<img src='${this.a111RootUrl}/A111/img/unit05/labs/lab7-5.jpg' width='300' height='223' class="image_border">
			            	</a>
			            	<br>
			                <a href="${this.a111RootUrl}/A111/img/unit05/labs/lab7-6.jpg" target="new">
			                	<img src='${this.a111RootUrl}/A111/img/unit05/labs/lab7-6.jpg' width='300' height='223' class="image_border">
			                </a>
			             </div>
			          <p><strong>7-10.</strong> Now you need to connect a voltage source to the heater so that the cathode can be heated. We will use the "+Var" for this.</p>
			          <ol>
			            <li>move the switch below the meter built into your kit to the left so that is displays the voltage of the "+Var" output</li>
			            <li>adjust the knob above the "+Var" until the meter above it shows "12.00" (or within +/-0.25V of 12V)</li>
			            <li>connect one end of an orange jumper wire to "+Var"</li>
			            <li>connect the other end of the orange jumper wire to pin#4 <em>(this is the first connection to the heater)</em><br>
			            <em>See figure 1-9 </em></li>
			            <li>connect one end of a new green jumper wire to "GND"<br>
			              <em>See figure 1-10</em>
			            </li>
			            <li>connect the other end of the green jumper wire to pin#5 <em>(this is the other connection to the heater)</em></li>
			          </ol>
			          <div class='image_center'>
			          	<img src='${this.a111RootUrl}/A111/img/unit05/labs/Lab7_schem1.png' width='300' height='375'>
			          </div>
			          <p><strong>7-11.</strong> If you did not do so earlier, plug your lab kit into the wall for power. You should see the meter and voltage indicator lights turn on. Also turn on your digital multimeter if it is not already on.</p>
			          <p><strong>7-12.</strong> You should now have some current flowing. </p>
                `,
                'questionText': `<p><strong>Question #5: How much current (in mA) does the meter indicate is flowing?</strong></p>`,
                'questionType': 'numerical',
                'textAfterInput': 'mA',
                'options': [
                    {
                        'low': 0.1,
                        'high': 0.8,
                        'correct': true,
                        'feedback': `CORRECT! Move on`
                    },
                    {
                        'low': 0,
                        'high': 0.099,
                        'correct': false,
                        'feedback': `You should have more current than that. Check yoru circuit and voltages. If you are still not getting more current please check with your instructor.`
                    },
                    {
                        'low': 0.8,
                        'high': 10000,
                        'correct': false,
                        'feedback': `You should have less current than that. Check your circuit and voltages. If you are still not getting less current please check with your instructor.`
                    },
                    {
                        'low': -1000,
                        'high': 0,
                        'correct': false,
                        'feedback': `If you are seeing a negative number then you have the current meter connected backwards. Check your meter connections and measure again.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					  <p><strong>7-13.</strong> <strong>Do NOT proceed</strong> until you are getting current  (with 0V at the control grid) that gives you the feedback that you are correct. <em>Try wiggling all of the wires, sometimes a simple bad connection can cause all sorts of problems.</em></p>
			          <p>Contact your instructor if you can't find the problem after going back through the steps of the lab.</p>
			          <div class="line_break"></div>
			          <h1>Tell those electrons what to do!</h1>
			          <h2>What will happen?</h2>
                `,
                'questionText': `<p><strong>Question #6: You are about to adjust the voltage on the control grid so that it is more positive. How will that affect current through the tube?</strong> <br> <em>(if you did not yet plug your kit in to power, assume that you did before answering.....I'm not trying to trick you)</em></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Current will increase`,
                        'correct': true,
                        'feedback': `Correct`
                    },
                    {
                        'text': `Current will decrease`,
                        'correct': false,
                        'feedback': `Incorrect`
                    },
                    {
                        'text': `Current will stay the same`,
                        'correct': false,
                        'feedback': `Incorrect`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<h2>Experiment time, be <span class="red">positive</span>.</h2>
        			<p><strong>7-14.</strong> Slowly adjust the "Var +/-" control right. This will make the current flow increase. Stop when  you get to 3.00V.</p>
          		    <p><strong>Before finishing, you need to take a photo to upload as proof that you did the lab. This photo should be taken with +3.00V on the control grid and current flowing through the tube so do it now!</strong></p>
                `,
                'questionText': `<p><strong>Question #7: How much current is flowing in your circuit with +3.00V on the control grid?</strong></p>`,
                'questionType': 'numerical',
                'textAfterInput': 'mA',
                'options': [
                    {
                        'low': 3,
                        'high': 7,
                        'correct': true,
                        'feedback': `Good job, move on to the next step.`
                    },
                    {
                        'low': -1000,
                        'high': 2.99,
                        'correct': false,
                        'feedback': `If you are not between 3mA and 7mA you may have an issue with your circuit. As long as you saw the current increase as you made the control grid voltage more positive you are probably OK. You may have a bad tube though so please check with the instructor as your next lab may not work correctly.`
                    },
                    {
                        'low': 7.01,
                        'high': 10000,
                        'correct': false,
                        'feedback': `If you are not between 3mA and 7mA you may have an issue with your circuit. As long as you saw the current increase as you made the control grid voltage more positive you are probably OK. You may have a bad tube though so please check with the instructor as your next lab may not work correctly.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					  <h2>OK, be <span class="blue">negative</span> &#9785;</h2>
                `,
                'questionText': `<p><strong>Question #8: You are about to change the control grid voltage back to 0 and then move it negative. What will happen to current as the control grid is moved from 0V to a negative voltage?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Current will increase`,
                        'correct': false,
                        'feedback': `Incorrect`
                    },
                    {
                        'text': `Current will decrease`,
                        'correct': true,
                        'feedback': `Correct`
                    },
                    {
                        'text': `Current will stay the same`,
                        'correct': false,
                        'feedback': `Incorrect`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<h2>Time to try it, frowny face</h2>
        			<p><strong>7-15.</strong> Slowly adjust the "Var +/-" control left until it is back at 0V. Current flow should decrease back to what it was for question #5.</p>
        			<p><strong>7-16.</strong> Now slowly adjust the control farther left until it is at -0.5V, stop there. You should have approximately 0mA of current flowing. You have now reached cutoff for the tube.</p>
                `,
                'questionText': `<p><strong>Question #9: How much current is flowing in your circuit with -0.5V on the control grid?</strong></p>`,
                'questionType': 'numerical',
                'textAfterInput': 'mA',
                'options': [
                    {
                        'low': 0,
                        'high': .05,
                        'correct': true,
                        'feedback': `Good job.`
                    },
                    {
                        'low': -1000,
                        'high': 0,
                        'correct': false,
                        'feedback': `Your meter is backwards if you are getting a negative number. You should have fixed it earlier in the lab.`
                    },
                    {
                        'low': .06,
                        'high': 10000,
                        'correct': false,
                        'feedback': `That current reading is too high, check your circuit and voltages. You should have a current flow around 0mA. If you still don't get a reading that gives a correct answer then contact your instructor.`
                    }
                ],
                'htmlAfterQuestion': `
					<div class="line_break"></div>
			        <h1>Finishing Up</h1>
			        <p><strong>???? HEY <em>(you may ask)!</em>, why isn't there as much room to reduce the current when going negative as there is to increase it by going positive with the grid voltage???????</strong></p>
			        <p>Most tube circuits run with anode voltages of at least 150V, the tube you are using typically has over 200V on the anode. I didn't feel like I should provide you with dangerous voltages in your lab kit.</p>
			        <p>We can make a tube work at these voltages, but not exactly as it does normally. In most situations (<em>when tubes are used at more normal voltages</em>) it is actually the opposite, there is more room to reduce current by making the grid more negative than there is to increase it by making the grid more positive.</p>
			        <p><strong>7-17.</strong> Now if you adjust the "Var +/-" control up and down so that it moves from a positive voltage to a negative voltage (as if you were AC) you should see the current meter changing along with the control grid voltage from "Var +/-" <em>(don't change too fast as the current meter won't show quick changes)</em>. </p>
			        <p><strong>If you are in an online lab or finishing outside of scheduled lab time, you need to take a photo to upload as proof that you did the lab. This photo should be taken with +3.00V on the control grid and current flowing through the tube. Make sure you have done this before putting everything away.</strong></p>
			        <p>For the next lab you will build an amplifier circuit and listen to audio going through it!</p>
			        <p><em>Figure 1-12 is not a photo of your next lab, but of UNIVAC I (actually its memory circuits), one of the very first computers.</em></p>
			        <div class='image_center'>
			        	<img src='${this.a111RootUrl}/A111/img/unit05/labs/11-Univac-delay-line.gif' width='500' height='338' class="image_border">
			        </div>
                `
            }
  		]
  	},
  	'lab5-2': {
  		'page1': [
  			{
                'htmlBeforeQuestion': `
					  <p>For this lab you will be building a common cathode amplifier using a triode. You will need to have an audio source (phone or MP3 player) available.Once you are finished you will need to take a photo of your working circuit and upload it to the Lab#5-2 photo upload assignment.</p>
			          <p>Here are the components you will need (besides your tube).</p>
			          <p>The gray band on the 1.8k resistor is very difficult to see. If you are unsure you can use your multimeter to measure the resistors.</p>
			          <div class='image_center'>
			          	<img src='${this.a111RootUrl}/A111/img/unit05/labs/lab8components.png' alt="" width='800' height='155' class="image_border">
			          </div>
			          <div class="line_break"></div>
			          <h1>Set up your circuit</h1>
			          <div class='image_right'>
			          	<a href="${this.a111RootUrl}/A111/img/unit05/labs/Lab8Schematic.png" target="new">
			          		<img src='${this.a111RootUrl}/A111/img/unit05/labs/Lab8Schematic.png' width='500' height='345'>
			          	</a>
			          </div>
			          <p>First, plug in your lab kit and set the "+Var" to 12V (within 0.1V)</p>
			          <p>Now build the circuit shown here. </p>
			          <ul>
			              <li>I have indicated on the schematic what "connections" on the breadboard I have used to build the circuit. You do not have to use the same ones but it will be easier if you do.</li>
			              <li>I have indicated what color jumper wires I have used, again you do not have to use the same colors.</li>
			              <li>A photo is included as well.</li>
			              <li>Not shown in photo or schematic is the connection from the amp in your lab kit to the speaker in your lab kit. Connect both the top connection of the "Amp Spk Out" to the top connection of "Spk In". then do the same for the bottom connections.</li>
			              <li>The order you connect the components is not important.</li>
			          </ul>
			          <div class='image_center'>
			          	<a href="${this.a111RootUrl}/A111/img/unit05/labs/Lab8_pic.png" target="new">
			          		<img src='${this.a111RootUrl}/A111/img/unit05/labs/Lab8_pic.png' alt="" width='500' height='317'>
			          	</a>
			          </div>
			          <h2>Hey! What's with R3?</h2>
			        <p>R3 is not something that we have seen before. It is here to create an appropriate "load" for the "Aux Audio Out" of your lab kit.</p>
			          <p>The other components should be familiar. You should be able to describe the function of each component. If not, go back and review Unit 5.</p>
			          <div class='image_center'>
			          	<a href="${this.a111RootUrl}/A111/img/unit05/labs/Lab8Schematic_bare.png" target="new">
			          		<img src='${this.a111RootUrl}/A111/img/unit05/labs/Lab8Schematic_bare.png' width='500' height='391'>
			          	</a>
			          </div>
			          <div class="line_break"></div>
			          <h1>Crank it UP!</h1>
			        <p>You should now be able to:</p>
			          <ol>
			              <li>connect an audio player to the "External Audio Input"</li>
			              <li>turn up, just a little bit, the "Amp Level"</li>
			              <li>hear audio through the speaker, going through your tube amplifier</li>
			          </ol>
			          <p>** note that you will likely have to turn your audio player volume down, about halfway on an iPhone works well.**</p>
                `,
                'questionText': `<p><strong>Question #1: Are you hearing audio?</strong></p><p><em>You should be.</em></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Yes, and it sounds fine`,
                        'correct': true,
                        'feedback': `Great! Move on...`
                    },
                    {
                        'text': `Yes, but it is distorted`,
                        'correct': false,
                        'feedback': `Try turning down the output of your audio source (phone or MP3 player)`
                    },
                    {
                        'text': `Yes, but it has a lot of noise`,
                        'correct': false,
                        'feedback': `This is likely a bad connection on the breadboard. Try twisting the connections a little. If you hear the noise change when you twist a connection, then try unplugging and re-plugging that connection a few times.`
                    },
                    {
                        'text': `No, I don't hear anything`,
                        'correct': false,
                        'feedback': `First, check that all connections match the schematic. Second, check that the tube is warm to the touch. If neither of those work, try connection the "Aux Audio Out +" directly to the "Amp In +" to see if you get sound that way. If you do then then problem is with your circuit, if you do not then the problem is either your audio player, cable, or the lab kit. If none of these options help you please contact the instructor.`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>Question #2: There is a component missing from the schematic, compared to what was discussed in the reading, what is it?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `Capacitor`,
                        'correct': true,
                        'feedback': `Correct, move on`
                    },
                    {
                        'text': `Resistor`,
                        'correct': false,
                        'feedback': `Nope, check through the reading`
                    },
                    {
                        'text': `Inductor`,
                        'correct': false,
                        'feedback': `Nope, check through the reading`
                    },
                    {
                        'text': `Transformer`,
                        'correct': false,
                        'feedback': `Nope, check through the reading`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': ``,
                'questionText': `<p><strong>Question #3: Where should the missing component be connected?</strong></p>`,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `In parallel with R1`,
                        'correct': false,
                        'feedback': `Nope, check through the reading`
                    },
                    {
                        'text': `In series with R1`,
                        'correct': false,
                        'feedback': `Nope, check through the reading`
                    },
                    {
                        'text': `In parallel with R2`,
                        'correct': true,
                        'feedback': `Correct, move ahead...`
                    },
                    {
                        'text': `In series with R2`,
                        'correct': false,
                        'feedback': `Nope, check through the reading`
                    }
                ],
                'htmlAfterQuestion': ``
            },
            {
                'htmlBeforeQuestion': `
					<p>Go ahead and add the 22uF capacitor into the circuit in parallel with R2.</p>
			        <p>Make sure that the negative side of the capacitor is connected toward ground and the positive side is connected toward the cathode.</p>
			        <ul>
			            <li>the positive side had an indentation near it and a black end</li>
			            <li>the negative side has silver end</li>
			            <li>there is an arrow with a "-" printed on the capacitor, the arrow points toward the negative side.</li>
			        </ul>
			        <div class='image_center'>
			        	<a href="${this.a111RootUrl}/A111/img/unit05/labs/cap.png" target="new">
			        		<img src='${this.a111RootUrl}/A111/img/unit05/labs/cap.png' alt="" width='300' height='131'>
			        	</a>
			        </div>
                `,
                'questionText': `
					<p><strong>Question #4: What happened when you connected the capacitor?</strong></p>
       			    <p>**you can dis-connect and re-connect one end of the capacitor to hear with and without it in the circuit**</p>
                `,
                'questionType': 'multiple-choice',
                'options': [
                    {
                        'text': `The volume increased`,
                        'correct': true,
                        'feedback': `Good job`
                    },
                    {
                        'text': `The volume decreased`,
                        'correct': false,
                        'feedback': `I'm not sure how you made that happen, are you sure you aren't reversing your answers? If not, then contact your instructor.`
                    },
                    {
                        'text': `Nothing changed`,
                        'correct': false,
                        'feedback': `Make sure you are connecting the capacitor to the correct places on the breadboard. If you set it up to match mine the + end of the capacitor should be in "Row 35, a-e" and the negative side should be in "row 25, a-e". If those are correct, make sure you are using the black 22uF capacitor. If neither of those things help, contact your instructor.`
                    },
                    {
                        'text': `The earth imploded`,
                        'correct': false,
                        'feedback': `hmmmmmm, I didn't think I gave out that lab kit...`
                    }
                ],
                'htmlAfterQuestion': `
					<div class="line_break"></div>
			        <h2><em><strong>Feel free to experiment with your circuit. Make changes and see what happens.</strong></em></h2>
			        <p>There is nothing that I can think of (<em>though please don't consider this a challenge</em>) that will hurt your lab kit or you. The more you work with it beyond the specific lab directions, the more you will get out of the course!</p>
			        <div class="image_left no_caption"> <img src="${this.a111RootUrl}/A112/img/unit07/labs/Camera-icon.png" width="100" height="100"/> </div>
			        <h2><em><strong>Remember to take a photo of your lab in progress to upload to Canvas if you are in the online section or did not finish during lab time.</strong></em></h2>
                `
            }
  		]
  	},
  	'lab7': {
  		'page1': [
  			{
  				'htmlBeforeQuestion': `
					<div class="image_right">
			        	<img src="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-2/Breadboard.jpg"  alt="Schematic" width="259" height="200" class="image_border"/>
			        </div>
			        <h2>Breadboard Review</h2>
			        <p>Your lab kit contains a breadboard. The breadboard is a convenient way to connect components in a circuit. It is simply a number of holes that accept leads from components and make an electrical connection between them.</p>

					<ol type="a">
			       		<li>This close-up image (figure 1-2) color codes the holes to indicate how they are connected. The holes with the same color are connected to each other. Any component leads placed in those holes will connect to each other.</li>
			            <div class="image_center">
			             	<img src="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-2/BreadboardCloseup1.png"  alt="Schematic" width="152" height="200" class="image_border"/>
			        	</div>
						<li>The numbered vertical columns are connected in groups of 5 (a-e and, separately, f-j).</li>
			       		<li>In addition there are long horizontal rows of 50 holes that are connected. These have red or blue lines running along them, as shown in figure 1-3.</li>
					</ol>
			        <div class="image_center">
			       		<img src="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-2/BreadboardCloseup2.jpg"  alt="Schematic" width="1000" height="72" class="image_border"/>
			        </div>
			        <div class="line_break"></div>
			        <h2>Voltage Measurement</h2>
			        <div class="image_right">
			       		<img src="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-1/7_voltage.png"  alt="Schematic" width="349" height="200" class="image_border"/><br>
			       		<img src="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-1/photo_lab7.png"  alt="Schematic" width="350" height="263" class="image_border"/>
			       </div>
			       <p><strong>1.</strong> Build the circuit shown in figure 1-4 on your breadboard. A photo of the circuit built is shown in figure 1-5.<br>
			         Adjust the &quot;+Var&quot; control all the  way down (counterclockwise). Note that the digital multimeter is connected in parallel with R1 so that it can measure voltage.<br>
			         <em>The voltage source shown in the schematic will be provided by the &quot;+Var&quot; in your lab kit. The &quot;+Var&quot; connection is the + side of the voltage source and the GND connection is the negative side.</em></p>
			       <p><strong>2.</strong> Set your digital multimeter to read DC voltage; set the  range  to the  lowest setting that is above 10 volts. {<a href="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-1/meter_voltage.png" target="new"><em>click here for photo of meter</em></a><em></em>}</p>
			       <p><strong>3.</strong> Make certain to start by turning the &quot;+Var&quot; control all the way down. This will set the output to 0 volts.</p>
			       <ul>
			         <li>Now, double check that your circuit is built  as shown in the schematic. </li>
			         <li>Set the meter switch on your lab kit to the left so that the meter shows the voltage of &quot;+Var.&quot; </li>
			         <li>Slowly adjust the voltage up until  the readout on the power source reads 10V. </li>
			         <li>The meter in the lab kit and  the digital multimeter should read the same value.</li>
			       </ul>
			       <div class="line_break"></div>
			       <h2>Current Measurement</h2>
			       <div class="image_right">
			       		<img src="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-1/7_current.png"  alt="Schematic" width="284" height="200" class="image_border"/>
			       </div>
  				`,
  				'questionText': `<p><strong>Question #1: If the circuit shown in figure 1-6 had a voltage source of 10V, what would the current meter show? </strong></p>`,
  				'questionType': 'multiple-choice',
  				'options': [
  					{
  						'text': `1mA`,
  						'correct': true,
  						'feedback': `Correct, move on`
  					},
  					{
  						'text': `10mA`,
  						'correct': false,
  						'feedback': `Check your math, your decimal point is being silly.`
  					},
  					{
  						'text': `0.001A`,
  						'correct': true,
  						'feedback': `Correct, move on`
  					},
  					{
  						'text': `0.01A`,
  						'correct': false,
  						'feedback': `Check your math, your decimal point is being silly.`
  					},
  					{
  						'text': `0.1A`,
  						'correct': false,
  						'feedback': `Check your math, your decimal point is being silly.`
  					},
  					{
  						'text': `1A`,
  						'correct': false,
  						'feedback': `Check your math, you may be confusing mA and A.`
  					},
  					{
  						'text': `10A`,
  						'correct': false,
  						'feedback': `Check your math, your decimal point is being silly.`
  					},
  				]
  			},
  			{
  				'htmlBeforeQuestion': `
					<p><strong>4.</strong> Change the circuit you built into what is shown in figure 1-6.  Note that the digital multimeter
						is connected in series with R1 to correctly measure current. Make certain to start with the &quot;+Var&quot; set all the way down.</p>
					<p><strong>5.</strong> Set your digital multimeter to read DC current  and set the range to the lowest setting that is above your answer above.</br>
        				You are about to watch the current meter as voltage is started at 0V and moved up to 10V. </p>
  				`,
  				'questionText': `
       				<p><strong>Question #2: What do you expect the current to do? </strong></p>
  				`,
  				'questionType': 'multiple-choice',
  				'options': [
  					{
						'text': `Increase as voltage increases`,
						'correct': true,
						'feedback': `Correct, move on`
					},
					{
						'text': `Decrease as voltage decreases`,
						'correct': false,
						'feedback': `Nope!, think about it and try again.`
					},
					{
						'text': `Not be affected by voltage`,
						'correct': false,
						'feedback': `Really? What causes electrons to move?`
					},
  				]
  			},
  			{
  				'htmlBeforeQuestion': `
					<p><strong>6.</strong> Check that your breadboard circuit is exactly the  same as the schematic in figure 1-6. Make sure to start with
						the &quot;+Var&quot; all the way down. Slowly turn up the voltage control to 10 volts. </p>
  				`,
  				'questionText': `
					<p><strong>Question #3: How does the current change as the voltage increases?</strong></p>
  				`,
  				'questionType': 'multiple-choice',
  				'options': [
  					{
						'text': `Increased as voltage increased`,
						'correct': true,
						'feedback': `Correct, move on`
					},
					{
						'text': `Decreased as voltage decreased`,
						'correct': false,
						'feedback': `Nope!, think about it and try again.`
					},
					{
						'text': `It did not change`,
						'correct': false,
						'feedback': `Check the circuit, this is not what should happen.`
					},
  				]
  			},
  			{
  				'htmlBeforeQuestion': `
					<div class="line_break"></div>
			       <h1>Oscilloscope: See the Voltage!</h1>
			       <p><em><strong>A note about the oscilloscope:</strong> In order to fit so much into such a small space, the menus may seem
			       	 difficult to find. It would be worth some time now just pressing the buttons and seeing what menus show up across the bottom
			       	 of the screen. Taking some time now to get comfortable moving around through the menus will definitely benefit you. <br>
			         If you are someone who finds manuals useful, <a href="${this.a111RootUrl}/A111/media/Unit 1/xscopes-manual.pdf" target="new">here is the manual </a>for the oscilloscope in your lab kit.
			         .</em></p>
			       <p><em>Also note that the menus will reset back to the default (nothing shown) after some time with no buttons pressed.</em></p>
			       <div class="image_right">
			       		<a href="${this.a111RootUrl}/A111/img/unit01/labs/scopeschematic1.png" target="_blank">
			       			<img src="${this.a111RootUrl}/A111/img/unit01/labs/scopeschematic1.png" alt="schematic" width="350" height="189" class="image_border"/>
			       		</a>
			       	</div>
			       <p><strong>1-10.</strong> Build the circuit shown in figure 1-7.</p>
			       <ol>
			         <li>You are using &quot;Var+/-&quot; instead of &quot;+Var&quot; at junction point &quot;A&quot;.</li>
			         <li> The meter switch needs to be flipped to the right to see the voltage of the &quot;Var+/-&quot; source.</li>
			         <li>Set the multimeter  to measure Voltage</li>
			         <li>The oscilloscope will be connected later in the page so wait on that for now.</li>
			       </ol>
			       <p><strong>1-11.</strong> We are going to use the oscilloscope to see what happens to the voltage over time.</p>
  				`,
  				'questionText': `
					<p><strong>Question #4: Oscilloscopes are voltmeters, so how should the oscilloscope be connected to measure the voltage across the light bulb?</strong></p>
  				`,
  				'questionType': 'multiple-choice',
  				'options': [
  					{
						'text': `In parallel`,
						'correct': true,
						'feedback': `Yes, that is correct.`
					},
					{
						'text': `In series`,
						'correct': false,
						'feedback': `No, to measure voltage you must connect in parallel.`
					}
  				],
  				'htmlAfterQuestion': `
					<p>An Oscilloscope is a voltmeter, so it needs two connections in order to measure. <br>
			         	This oscilloscope, like many, has two channels so you can measure two things at once. <br>
			         	Each of those channels has two connections:</p>
			       <ul>
			         <li>Positive connection: Each channel has two possible positive connections. They are &quot;AC&quot; and &quot;DC&quot;.
			           <ul>
			             <li>When connected to &quot;AC&quot; you only see AC, and DC is removed.</li>
			             <li>When connected to &quot;DC&quot; you see AC+DC.</li>
			           </ul>
			         </li>
			         <li>The negative connection is ground for the lab kit, so just make sure ground on your circuit is connected to one of the lab kit &quot;GND&quot; connections.</li>
			       </ul>
			       <p><strong>1-12. </strong>Connect the oscilloscope CH1 in parallel with the light bulb. Ground is already connected to the oscilloscope so you only need to connect the +
			       	connection, this should connect to junction point &quot;A&quot;. Use the "DC" connection to the oscilloscope so you can see both AC and DC.</p>
			       <p><strong>1-13.</strong> Make sure that the meter switch is to the right and &quot;Var+/-&quot; is set to 0V.</p>
			       <p><strong>1-14.</strong> The display on an oscilloscope can be set to show any voltage at the top or bottom so first you need to set your oscilloscope so that 0V is in the middle of the screen (from top to bottom).</p>
			       <h3>CONTROLLING WHAT YOU SEE</h3>
			       <ul>
			         <li>To make sure you are starting fresh, reset the oscilloscope (in case the last user left odd settings).
			           <ul>
			             <li>With the lab kit not plugged in, Hold down &quot;MENU&quot;, and plug in while still holding down &quot;MENU&quot;.</li>
			             <li>Press &quot;<span class="scopefont">RESTORE</span>&quot; (<em>There will be a small flash behind the screen but nothing else will change</em>)</li>
			             <li>Press &quot;MENU&quot; to start the oscilloscope.</li>
			           </ul>
			         </li>
			         <li>Press the &quot;MENU&quot; again button until you see no text displayed at the bottom of the screen.
			           <div class="image_right">
			           		<a href="${this.a111RootUrl}/A111/img/unit01/labs/scope1.png" target="_blank">
			           			<img src="${this.a111RootUrl}/A111/img/unit01/labs/scope1.png" width="250" height="136" class="image_border"/>
			           		</a>
			           	</div>
			         </li>
			         <li>Press either the far right (decrease value) or middle (increase value) buttons until the top of the display shows the time division you want.
			           <ul>
			             <li>This determines how much time is represented by each horizontal division (the small dots).</li>
			             <li>For this lab it should be &quot;<span class="scopefont">0.1S/div</span>&quot;</li>
			             <li>This sets the horizontal divisions on the screen (little dots) to 0.1S. </li>
			           </ul>
			         </li>
			         <li>Press the &quot;MENU&quot; button until you see &quot;<span class="scopefont">CH1&nbsp;&nbsp;&nbsp;&nbsp;CH2&nbsp;&nbsp;&nbsp;&nbsp;LOGIC</span>&quot; displayed at the bottom of the screen.</li>
			         <li>Press the button below &quot;CH1&quot;  and you will see &quot;<span class=scopefont>CH ON&nbsp;&nbsp;&nbsp;&nbsp;GAIN-&nbsp;&nbsp;&nbsp;&nbsp;GAIN+</span>&quot; displayed at the bottom of
			          the screen. Make sure that &quot;<span class="scopefont_highlight">CH ON</span>&quot; is highlighted, if it is not, press the button below it.</li>
			         <li>Press either the button under &quot;<span class="scopefont">GAIN-</span>&quot; or &quot;<span class="scopefont">GAIN+</span>&quot; to change the voltage division (top to bottom).
			           <ul>
			             <li>This determines how much voltage is represented by each vertical division (the small dots).</li>
			             <li>For this lab you want the largest setting (lowest gain) &quot;<span class="scopefont">CH1 5.12V/div</span>&quot;</li>
			             <li>This sets the vertical divisions on the screen (the small dots in the middle) equal to 5.12V. </li>
			           </ul>
			         </li>
			         <li>Press the menu button and you will see &quot;<span class="scopefont">POSITION&nbsp;&nbsp;&nbsp;&nbsp;INVERT&nbsp;&nbsp;&nbsp;&nbsp;MATH</span>&quot; displayed at the bottom of the screen. </li>
			         <li>Press the button under &quot;
			           <span class="scopefont">POSITION</span>
			           &quot; and you will see &quot;<span class="scopefont">POSITION&nbsp;&nbsp;&nbsp;&nbsp;MOVE-&nbsp;&nbsp;&nbsp;&nbsp;MOVE+</span>&quot; displayed at the bottom of the screen.</li>
			         <li>Press the button under either &quot;<span class ="scopefont">MOVE-</span>&quot; or &quot;<span class="scopefont">MOVE+</span>&quot; as needed to move the line in across the screen so that it is
			         	on top of the dot in the middle of the screen. You can also press the button under &quot;
			           <span class="scopefont">POSITION</span>
			           &quot; to cycle through the channel aligning to the top dot, middle dot, or bottom dot. <br>
			           <em>The top and bottom positions are useful when you are displaying two channels and want to see both easily.</em> </li>
			         <li>You have now set 0V for channel 1 so that it is in the middle of the screen.</li>
			         <li>Press the &quot;MENU&quot; button until you see &quot;<span class="scopefont">CH1&nbsp;&nbsp;&nbsp;&nbsp;CH2&nbsp;&nbsp;&nbsp;&nbsp;LOGIC</span>&quot; displayed at the bottom of the screen.</li>
			         <li>Press the button below &quot;CH2&quot;  and you will see &quot;<span class=scopefont>CH ON&nbsp;&nbsp;&nbsp;&nbsp;GAIN-&nbsp;&nbsp;&nbsp;&nbsp;GAIN+</span>&quot; displayed at the bottom of
			         	the screen. Press the button below &quot;<span class=scopefont>CH ON&nbsp;</span>&quot; to turn off Channel 2, since we won't use it for this lab. Make sure that &quot;<span class=scopefont>CH ON&nbsp;</span>&quot; is not highlighted.<br>
			         </li>
			       </ul>
			       <p><strong>1-15.</strong> Adjust the &quot;Var+/-&quot; control. You should see voltage change on the oscilloscope. Adjust it so that it is both positive and negative and see how the oscilloscope reacts.
			       		<em>If you move the control fast enough you can make a low frequency waveform.</em> Try this.</p>
			       <div class="line_break"></div>
			       <h1>Audio Anyone?</h1>
			       <div class="image_right">
			       		<a href="${this.a111RootUrl}/A111/img/unit01/labs/scopeschematic2.png" target="_blank">
			       			<img src="${this.a111RootUrl}/A111/img/unit01/labs/scopeschematic2.png" alt="schematic" width="300" height="174" class="image_border"/>
			       		</a>
			       	</div>
			       <p><strong>1-16.</strong> Change the your circuit to match the one shown in figure 1-9. </p>
			       <ul>
			         <li>We have removed the light bulb as the AWG is not powerful enough to light the bulb.</li>
			         <li>&quot;AWG&quot; is now connected to junction point &quot;A&quot;, in place of &quot;Var +/-&quot;.
			           <ul>
			             <li>&quot;AWG&quot; is a connection under the oscilloscope.</li>
			             <li>&quot;AWG&quot; stands for Arbitrary Waveform Generator and it generates AC waveforms.</li>
			           </ul>
			         </li>
			         <li>The GND connection for the AWG and Oscilloscope are both GND of the lab kit so they are already connected.</li>
			       </ul>
			       <p>&nbsp;</p>
			       <h2>YOUR OWN AUDIO SOURCE</h2>
			       <ul>
			         <li>Press the &quot;MENU&quot; button until you see &quot;<span class="scopefont">CURSORS&nbsp;&nbsp;&nbsp;&nbsp;DISPLAY&nbsp;&nbsp;&nbsp;&nbsp;AWG</span>&quot; at the bottom of the display. (4 times from the default, &quot;nothing shown&quot;)</li>
			         <li>
			           <div class="image_right"> <a href="${this.a111RootUrl}/A111/img/unit01/labs/scope1.png"><img src="${this.a111RootUrl}/A111/img/unit01/labs/scope1.png" width="250" height="136" class="image_border"/></a></div>
			           Press the button under &quot;<span class="scopefont">&nbsp;AWG</span>&quot; and you will get the menu choices &quot;<span class="scopefont">WAVE TYPE&nbsp;&nbsp;&nbsp;&nbsp;SWEEP&nbsp;&nbsp;&nbsp;&nbsp;FREQUENCY</span>&quot;</li>
			         <li>Press the button under &quot;<span class="scopefont">WAVE TYPE</span>&quot; and you can choose sine, square, or triangle waveforms. Try these out, you should see them on the oscilloscope display. Then set it to a sine wave.<br>
			           <em>Pressing the menu button again gets you a few more options we will use in later courses.</em></li>
			         <li>Press the Menu button twice to move back to the last menu &quot;<span class="scopefont">WAVE TYPE&nbsp;&nbsp;&nbsp;&nbsp;SWEEP&nbsp;&nbsp;&nbsp;&nbsp;FREQUENCY</span>&quot;.</li>
			         <li>Press the button under &quot;<span class="scopefont">&nbsp;FREQUENCY</span>&quot; to see a display of the current frequency and the controls to change the frequency. Try changing this and seeing
			         	how it changes on the screen. If you press the far left button the value will cycle through the values:1Hz, 10Hz, 100Hz, 1kHz, and 10kHz each time you press the button. For now set this to 10Hz..</li>
			         <li>Press the &quot;MENU&quot; button once to move back to  &quot;<span class="scopefont">WAVE TYPE&nbsp;&nbsp;&nbsp;&nbsp;SWEEP&nbsp;&nbsp;&nbsp;&nbsp;FREQUENCY</span>&quot; and a second time to move to
			         	&quot;<span class="scopefont">AMPLITUDE&nbsp;&nbsp;&nbsp;&nbsp;DUTY CYCLE&nbsp;&nbsp;&nbsp;&nbsp;OFFSET</span>&quot;.</li>
			         <li>Press the button under &quot;<span class="scopefont">AMPLITUDE</span>&quot; to cycle through values of 0V, 1V, 2V, 3V, and 4V. These values are given in V<sub>PK-PK</sub>. <br>
			           Set this to 4V<sub>PK-PK</sub> for now. </li>
			         <li>The &quot;<span class="scopefont">&nbsp;OFFSET</span>&quot; settings will be useful for us as well as it adds DC to the AC waveform. <br>
			           Set the offset to 0V for now.</li>
			       </ul>
			       <p><strong>1-17.</strong> Make sure you have the oscilloscope Ch1 (DC) connected to junction point &quot;A&quot;. </p>
			       <div class="question_and_answer_full">
			         <div class="question_button">
			           <div class="question_button_header">You should see a sine wave on your oscilloscope.<br>
			             Click here for an image of what you should see.</div>
			         </div>
			         <!-- end of question_button div -->
			         <div class="revealed_answer">
			           <div class="revealed_answer_header">Answer: </div>
			           <div class="image_holder no_caption">
			           		<img src="${this.a111RootUrl}/A111/img/unit01/labs/scopeimagelab1.png" alt="" width="500" class="image_center">
			           	</div>
			           <!-- end of revealed_answer div -->
			         </div>
			       </div>
			       <p>&nbsp;</p>
			       <h2>GETTING DETAILED READINGS</h2>
			       <p>With larger oscilloscopes you can get precise readings from the screen. Ours is too small for that, however it has a meter included so that you can see some numbers.</p>
			       <ul>
			         <li>Press the &quot;MENU&quot; button until you see &quot;<span class="scopefont">SCOPE&nbsp;&nbsp;&nbsp;&nbsp;METER&nbsp;&nbsp;&nbsp;&nbsp;FFT</span>&quot; displayed at the bottom of the screen.</li>
			         <li>Press the button below &quot;<span class="scopefont">METER</span>&quot; to see a meter for both channels. You will also still see the waveform displayed. Set the meter to show V<sub>PK-PK</sub> by pressing the button under
			         	&quot;<span class="scopefont">V P-P</span>&quot;. This should agree (at least pretty close) with the 4V<sub>PK-PK</sub> you set the AWG to. With my kit it was within 0.1V.</li>
			         <li>You can also press the button under &quot;<span class="scopefont">FREQUENCY</span>&quot; to see a numeric display of the frequency. Unfortunately at the low frequency of 1Hz it does not read correctly. It does work well for higher frequencies, however.<br>
			           <em>One of the drawbacks of an inexpensive oscilloscope and generator like this is that their accuracy is not great. They will work fine for what we need though and you will understand how to read a better oscilloscope when you get to use one.</em></li>
			       </ul>
			       <div class="question_and_answer_full">
			         <div class="question_button">
			           <div class="question_button_header"> Click here for an image of what you should see. <br>
			             <em>Your value may be slightly different.</em></div>
			         </div>
			         <!-- end of question_button div -->
			         <div class="revealed_answer">
			           <div class="revealed_answer_header">Answer: </div>
			           <div class="image_holder no_caption">
			           		<img src="${this.a111RootUrl}/A111/img/unit01/labs/scopemeterlab1.png" alt="" width="500" class="image_center">
			           	</div>
			           <!-- end of revealed_answer div -->
			         </div>
			       </div>
			       <p>&nbsp;</p>
			       <h2><em>Again I highly recommend PLAYING with this! Try things, figure out how it works. The more you work with it beyond the specific lab directions, the more you will get out of the course!<strong><br>
			       </strong></em></h2>
			       <div class="image_left no_caption"> <img src="${this.a111RootUrl}/A112/img/unit07/labs/Camera-icon.png" width="100" height="100"/> </div>
			       <h2><em><strong>Remember to take a photo of your lab in progress to upload to Canvas if you are in the online section or did not finish during lab time.</strong></em></h2>
  				`
  			}
  		],
  		'page2': [
  			{
  				'htmlBeforeQuestion': `
					<div class="image_right">
			        	<a href="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-2/7-2_components.png" target="new">
			            	<img src="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-2/7-2_components.png" width="200" height="90" class="image_border"/>
			            </a>
			        </div>
			        <p><em>For this lab you will need one 1N4007 diode and four 10kΩ resistors.</em><br>
			          Click on the image of the components shown in figure 2-1 to see a larger version of the photo.<br>
			          The diode has the part number (1N4007) written on it.
			        </p>
			        <div class="line_break"></div>
			        <h2>JUNCTION TESTING</h2>
			        <div class="image_right">
			        	<a href="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-2/junctiontest.png" target="new">
			            	<img src="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-2/junctiontest.png"  alt="photo" width="300" height="370" class="image_border"/>
			            </a>
			        </div>
			        <p><strong>1. </strong>Set your multimeter to junction test (the diode picture) as shown in figure 2-2. This will allow you to test a PN junction (like the one in a diode).
			        	The meter will make the red lead more positive and the black lead more negative. The meter will show you the break over voltage of the diode (voltage needed to create
			        	current flow) if the red lead is connected to the anode and black to the cathode. Try this with the 1N4007 diode (black with silver stripe, pictured above)..<br>
			        	<em>Click on the photo to see a large image if desired.</em></p>
  				`,
	  			'questionText': `
	  				<p><strong>Question #1: Did your meter reading match  the one in the photo?</strong><br>
	        		(<em>anywhere between 500 and 700 is fine)</em></p>`,
	        	'questionType': 'multiple-choice',
	        	'options': [
	        		{
						'text': `Yes`,
						'correct': true,
						'feedback': `Correct, move on`
					},
					{
						'text': `No, it was lower`,
						'correct': false,
						'feedback': `Check that both of the meter leads are plugged fully into the meter. If you still get a reading lower than 600, try a different diode. If you still have the problem, contact your instructor.`
					},
					{
						'text': `No, I am getting a &quot;1&quot; on the far left side of the screen.`,
						'correct': false,
						'feedback': `
							Make sure that the red lead is connected to the anode end of the diode (the one without the silver stripe) and that the black lead is on the cathode end (with the stripe). Also check that both
							leads are plugged firmly into the meter and that they are making good contact with the metal wires of the diode.  If you still have the problem, contact your instructor.
						`
					},
					{
						'text': `No, I am getting &quot;0&quot;`,
						'correct': false,
						'feedback': `
							Check that both of the meter leads are plugged fully into the meter and that the red lead is connected to the &quot;VΩ&quot; connection and the black lead is connected to the &quot;COM&quot; connection.
							If you still have the problem, contact your instructor.
						`
					},
				]
			},
			{
				'htmlBeforeQuestion': `
					<strong>2.</strong> Now reverse the leads, you should see an indication of an open circuit. An open circuit is indicated by a "1" on the far left of the screen.
			       <div class="aside_wide">
			         <p>If you were to test a diode with a problem, you may see:</p>
			         <ol>
			           <li>a completely open circuit in both directions</li>
			           <li>a short circuit in both directions</li>
			           <li>a much higher (>700) or lower (< 500) reading than expected (this is referred to as “leaky”)</li>
			         </ol>
			       </div>
			       <div class="line_break"></div>
			       <h2>VOLTAGE DIVIDER revisited</h2>
			       <div class="image_right">
			       		<img src="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-2/Vdiv-1.png" width="150" height="364" class="image_border"/>
			       </div>
			       <p>You are about to build the circuit shown in the figure 2-3 schematic.</p>
				`,
				'questionText': `
					<p><strong>Question #2: What should the voltage drop be for the resistors?</strong> <br>
					(<em>choose the closest answer and assume a 0.7V forward breakover voltage)</em></p>
				`,
				'questionType': 'multiple-choice',
				'options': [
					{
						'text': `Each resistor should drop 3.75V`,
						'correct': false,
						'feedback': `Nope...nope....nope`
					},
					{
						'text': `Each resistor should drop 3.575V`,
						'correct': true,
						'feedback': `Correct! <em>Assuming a 0.7V forward break over voltage for the diode, that leaves 14.3V to be shared equally amongst the four resistors (since they all have equal resistance).</em>`
					},
					{
						'text': `I have no idea. :-(`,
						'correct': false,
						'feedback': `
							OK, let's take this step by step:
				             <ol>
				               <li>Is the diode forward or reverse biased?<br>
				               (+ on the anode, - on the cathode, and at least 0.7V difference between them, so it is forward biased)</li>
				               <li>How much voltage does a forward biased diode drop?<br>
				               (A forward biased diode will drop its forward break over voltage, which is typically 0.7V)</li>
				               <li>How much voltage does that leave for the resistors?<br>
				               (15 - 0.7 = 14.3V)</li>
				               <li>How will the resistors divide up the voltage?<br>
				                 (Since they are all the same resistance and are in series they will split the voltage equally, so 14.3 &divide; 4
				               = 3.575V)<br></li>
				             </ol>
						`
					}
				]
			},
			{
				'htmlBeforeQuestion': `
					<p><strong>3.</strong> Build the voltage divider circuit shown in figure 2-3. Use the &quot;+Var&quot; as your positive voltage supply and set it to +15V.
					Place the diode so that the Anode is connected toward the +15V supply and the cathode is facing ground. Use your multimeter to measure the voltage drop of all the resistors.</p>
				`,
				'questionText': `
					<p><strong>Question #3: What is the voltage drop of each resistor?</strong></p>
				`,
				'questionType': 'multiple-choice',
				'options': [
					{
						'text': `All four resistors are dropping 3.5V (or within 0.1V of that)`,
						'correct': true,
						'feedback': `Correct, move on`
					},
					{
						'text': `The resistors are not all dropping the same voltage.`,
						'correct': false,
						'feedback': `Either not all of your resistors are 10k<em>Ω</em> or you are measuring incorrectly. Double check both of those things and measure again. If you still have the problem, contact your instructor.`
					},
					{
						'text': `All four resistors are dropping the same voltage but it is not near 3.5V`,
						'correct': false,
						'feedback': `Something is wrong, perhaps you are not using the &quot;+Var&quot; set to 15V? Check that and if you still have the problem, contact your instructor.`
					}
				]
			},
			{
				'htmlBeforeQuestion': `<p>You are about to reverse the direction of the diode.</p>`,
				'questionText': `
						<p><strong>Question #4: What should be the voltage drop of each resistor?</strong></p>
				`,
				'questionType': 'multiple-choice',
				'options': [
					{
						'text': `Each resistor should drop 3.75V`,
						'correct': false,
						'feedback': `Nope...nope...nope.... How much current is flowing? Is the diode forward or reverse biased?`
					},
					{
						'text': `Each resistor should drop 3.575V`,
						'correct': false,
						'feedback': `Nope...nope....nope.... How much current is flowing? Is the diode forward or reverse biased?`
					},
					{
						'text': `Each resistor is dropping 0V`,
						'correct': true,
						'feedback': `Correct! You have a reverse biased diode, so no current is flowing. No current flowing means that there is no voltage drop for the resistors.`
					},
				]
			},
			{
				'htmlBeforeQuestion': `
					<div class="line_break"></div>
				    <h2>BREAKOVER VOLTAGE AND CURRENT</h2>
				    <div class="image_right">
				    	<img src="${this.a111RootUrl}/A112/img/unit07/labs/Lab7-2/diode-1.png" width="150" height="260" class="image_border"/>
				    </div>
				    <p><strong>4.</strong> Set the meter switch to the right so that is shows the &quot;Var +/-&quot; voltage. Set the control for a 0V output from &quot;VAR +/-&quot;.</p>
				    <p><strong>5.</strong> Build the circuit shown in figure 2-4 using your breadboard. Use the "Var +/-" for the voltage source.<br>
				    <em>If you have questions about measuring current, review Lab #7-1 before continuing.</em></p>
				    <p><strong>6.</strong> Slowly adjust the voltage from 0V up to 1V and watch what happens to current on the multimeter.<br>
				    <em>If you go past 1V it won't hurt anything but your lab kit will start to protect itself by limiting current.</em></p>
				`,
				'questionText': `
					<p><strong>Question #5: What happened as you increased voltage?</strong></p>
				`,
				'questionType': 'multiple-choice',
				'options': [
					{
						'text': `Current slowly increased with voltage.`,
						'correct': false,
						'feedback': `That is not what should happen, check the circuit and try again.`
					},
					{
						'text': `Current slowly increased with voltage once voltage was above around 0.5V. `,
						'correct': true,
						'feedback': `Good job! That is what you should see!`
					},
					{
						'text': `Current stayed at &quot;0&quot; the entire time.`,
						'correct': false,
						'feedback': `That is not what should happen. Check that all connections are good and that the meter is set properly to measure current.`
					},
					{
						'text': `My lab kit imploded, there is now a small pile of dust where it once was.`,
						'correct': false,
						'feedback': `Wow, um........not sure what to say.....`
					},
				]
			},
			{
				'htmlBeforeQuestion': `<strong>7.</strong> Slowly adjust the voltage from 0V  to -1V and watch what happens to current on the multimeter. `,
				'questionText': `<p><strong>Question #6: What happened as you made the voltage more negative?</strong></p>`,
				'questionType': 'multiple-choice',
				'options': [
					{
						'text': `Current slowly increased with voltage.`,
						'correct': false,
						'feedback': `That is not what should happen, check the circuit and try again.`
					},
					{
						'text': `Current slowly increased with voltage once voltage was above around 0.5V-0.7V`,
						'correct': false,
						'feedback': `That is not what should happen, check the circuit and try again.`
					},
					{
						'text': `Current stayed at &quot;0&quot; the entire time`,
						'correct': true,
						'feedback': `Good job, that is what should happen. The diode is reverse biased so there should not be any current flow.`
					},
					{
						'text': `My lab kit is now a small pony with wings and a horn....`,
						'correct': false,
						'feedback': `I didn't think I gave out the My Little Pony lab kit, consider yourself lucky.`
					},
				]
			},
			{
				'htmlBeforeQuestion': `
					<div class="line_break"></div>
					<h2>TWO, TWO, TWO DIODES</h2>
					<p><strong>8.</strong> Now add a second 1N4007 diode in series with the first. Connect them both facing in the same direction so that anode from one connects to cathode of the other.</p>
					<p><strong>9.</strong>Slowly adjust the voltage from 0V up to 1.5V and watch what happens to current on the multimeter. <br>
				      <em>If you go past 1.5V it won't hurt anything but your lab kit will start to protect itself by limiting current.</em></p>
				`,
				'questionText': `
				    <p><strong>Question #7: What happened as you increased voltage?</strong></p>
				`,
				'questionType': 'multiple-choice',
				'options': [
					{
						'text': `Current slowly increased with voltage.`,
						'correct': false,
						'feedback': `That is not what should happen, check the circuit and try again.`
					},
					{
						'text': `Current slowly increased with voltage once voltage was above around 0.5V-0.7V`,
						'correct': false,
						'feedback': `That is not what should happen, check the circuit and try again`
					},
					{
						'text': `Current slowly increased with voltage once voltage was above around 1V-1.4V.`,
						'correct': true,
						'feedback': `Good job! That is what you should see! The two diodes in series now require 1V (0.5V each) for their forward break over voltage.`
					},
					{
						'text': `Current stayed at &quot;0&quot; the entire time`,
						'correct': false,
						'feedback': `That is not what should happen. Check that all connections are good and that the meter is set properly to measure current.`
					},
				]
			},
			{
				'htmlBeforeQuestion': `
					<p><strong>10. </strong>Now try moving the second diode in parallel with the first and repeat the experiment.<br>
				    <em>You didn't expect to repeat the negative voltage experiment did you? You are certainly welcome to if you'd like....</em></p>`,
				'questionText': `
				    <p><strong>Question #8: What happened as you increased voltage?</strong></p>
				`,
				'questionType': 'multiple-choice',
				'options': [
					{
						'text': `Current slowly increased with voltage.`,
						'correct': false,
						'feedback': `That is not what should happen, check the circuit and try again.`
					},
					{
						'text': `Current slowly increased with voltage once voltage was above around 0.5V-0.7V.`,
						'correct': true,
						'feedback': `Good job! That is what you should see!`
					},
					{
						'text': `Current slowly increased with voltage once voltage was above around 1V-1.4V.`,
						'correct': false,
						'feedback': `That is not what should happen, check the circuit and try again. Make sure that your diodes are in parallel with each other and both facing the same direction.`
					},
					{
						'text': `Current stayed at &quot;0&quot; the entire time.`,
						'correct': false,
						'feedback': `That is not what should happen. Check that all connections are good and that the meter is set properly to measure current.`
					},
				],
				'htmlAfterQuestion': `
					<p>Wondering what the point of two diodes in parallel would be? The forward breakover voltage remains the same as a single diode, so where is the benefit? Sounds like a good exam question. </p>
                    <div class="image_right">
                        <img src="${this.a111RootUrl}/A112/img/unit07/figure6-2.png" width="200" height="164" class="image_border" />
                    </div>
                    <p>11. You also have LEDs in your lab kit. Try experimenting with these to find their forward breakover voltage and how they light up.</p>
			        <h2><em><strong>Again I highly recommend PLAYING with this! Try things, figure out how it works. The more you work with it beyond the specific lab directions, the more you will get out of the course!</strong></em></h2>
			       <div class="image_left no_caption">
			       		<img src="${this.a111RootUrl}/A112/img/unit07/labs/Camera-icon.png" alt="" width="100" height="100"/>
			       </div>
			       <h2>Remember to take a photo of your lab in progress to upload to Canvas.</h2>
				`,
			}
    	]
 	},
 	'lab8': {
 		'page1': [
 			{
 				'htmlBeforeQuestion': `
					<div class="image_right">
			        	<a href="${this.a111RootUrl}/A112/img/unit08/labs/figure1.png" target="new">
			            	<img src="${this.a111RootUrl}/A112/img/unit08/labs/figure1.png" alt="photo of components" width="500" height="193" class="image_border"/>
			            </a>
			        </div>
			        <p><em>For this lab you will need: a 1:1 transformer, 1n4007 diode, 1000µF/25V capacitor, 100kΩ resistor, and LF074C (or RB151) bridge rectifier.</em><br>
			          Click on the image of the components shown in figure 1-1 to see a larger version of the photo. <br>
			          <em>(you can do that to any of the photos in the lab)</em><br>
			        </p>
			        <div class="line_break"></div>

			        <h2>SETTING UP</h2>
			        <p>To make things extra safe and add some flexibility, we will be using the AWG (Arbitrary Waveform Generator) on the Oscilloscope as the AC source for this lab. We will use the audio amplifier to make it a little larger and then send it through our little transformer.<em></em></p>
			        <p><strong>1</strong>. Start by connecting  &quot;AWG&quot; to  &quot;Amp In +&quot; with a jumper wire, I used yellow. (figure 1-2)</p>
			<p><strong>2</strong>. Next place the transformer on the breadboard. This is a 1:1 transformer so either side can be the primary or secondary. (figure 1-3) </p>
			        <p><strong>3</strong>. Connect the output of the amplifier &quot;Amp Spk Out&quot; to one side of the transformer. In figure 1-4 this is done with the white jumper wires.</p>
			        <div class="image_left image_row">
			        	<a href="${this.a111RootUrl}/A112/img/unit08/labs/figure2.png">
			            	<img src="${this.a111RootUrl}/A112/img/unit08/labs/figure2.png"  alt="photo" width="250" height="215" class="image_border"  style=" display:inline-block"/>
			            </a>
			        </div>
			        <div class="image_left image_row">
			            <a href="${this.a111RootUrl}/A112/img/unit08/labs/figure3.png" target="new">
			            	<img src="${this.a111RootUrl}/A112/img/unit08/labs/figure3.png"  alt="photo" width="350" height="215" class="image_border"  style=" display:inline-block"/>
			            </a>
			        </div>
			        <div class="image_left image_row">
			            <a href="${this.a111RootUrl}/A112/img/unit08/labs/figure4.png" target="new">
			            	<img src="${this.a111RootUrl}/A112/img/unit08/labs/figure4.png"  alt="photo" width="250" height="215" class="image_border"  style=" display:inline-block"/>
			            </a>
			        </div>
			        <div class="line_break"></div>
			        <h2>FAKING THE POWER LINE</h2>
			         <p>Remember that an oscilloscope is a voltmeter, so it needs two connections in order to measure. <br>
			         This oscilloscope, like many, has two channels so you can measure two things at once. </p>
			         <p>Each of those channels has two connections: </p>
			         <ul>
			           <li>Positive connection: Each channel has two possible positive connections. They are &quot;AC&quot; and &quot;DC&quot;.
			             <ul>
			               <li>When connected to &quot;AC&quot; you only see AC, and DC is removed.</li>
			               <li>When connected to &quot;DC&quot; you see AC+DC.</li>
			             </ul>
			           </li>
			           <li>The negative connection is ground for the lab kit, so just make sure ground on your circuit is connected to one of the lab kit &quot;GND&quot; connections.</li>
			         </ul>
			         <p><strong>4</strong>. Setting the source (from the oscilloscope).</p>
			        <ul>
			        	<li>Set the time division and trigger:
			          		<ol type="a">
			            		<li>Press the &quot;MENU&quot; button on the oscilloscope until you see no text displayed at the bottom of the screen.</li>
			            		<li>Press either the far right (decrease value) or middle (increase value) buttons until the top of the display says &quot;<span class="scopefont">5 mS/div</span>&quot;</li>
			            		<li>Press the &quot;MENU&quot; button until you see &quot;<span class="scopefont">TRIGTYPE&nbsp;&nbsp;&nbsp;&nbsp;TRIGSRC&nbsp;&nbsp;&nbsp;&nbsp;MORETRIG</span>&quot;</li>
			            		<li>Press the button under &quot;<span class="scopefont">TRIGTYPE</span>&quot; and the press the button under  &quot;<span class="scopefont">AUTO</span>&quot;</li>
			          		</ol>
			        	</li>
			        	<li>Set the channel settings:
			          		<ol type="a">
			            		<li>Press the &quot;MENU&quot; button until you see &quot;<span class="scopefont">Ch1&nbsp;&nbsp;&nbsp;Ch2&nbsp;&nbsp;&nbsp;&nbsp;LOGIC</span>&quot; at the bottom of the display. </li>
			            		<li>Press the button under &quot;<span class="scopefont">Ch1</span>&quot; and you will get the menu choices &quot;<span class="scopefont">CH ON&nbsp;&nbsp;&nbsp;&nbsp;GAIN-&nbsp;&nbsp;&nbsp;&nbsp;GAIN+</span>&quot;</li>
			            		<li>Press the button under <span class="scopefont">GAIN-&nbsp;</span> or&nbsp;<span class="scopefont">&nbsp;GAIN+</span> until the screen shows &quot;5.12V.div&quot; at the top right.</li>
			            		<li>Press the &quot;MENU&quot; button again to see &quot;<span class="scopefont">POSITION&nbsp;&nbsp;&nbsp;&nbsp;INVERT&nbsp;&nbsp;&nbsp;&nbsp;MATH</span>&quot; (<em>you may have to go back through the choices&quot;</em></li>
			            		<li>Press the button under &quot;<span class="scopefont">POSITION</span>&quot; and use  <span class="scopefont">MOVE-&nbsp;</span> or&nbsp;<span class="scopefont">&nbsp;MOVE+</span> until the line across the screen
			              is in the middle (there is a &quot;+&quot; in he center of the screen).</li>
			          		</ol>
			        	</li>
			        	<li>Set the output:
			         		<ol type="a">
			            		<li>Press the &quot;MENU&quot; button until you see &quot;<span class="scopefont">CURSORS&nbsp;&nbsp;&nbsp;&nbsp;DISPLAY&nbsp;&nbsp;&nbsp;&nbsp;AWG</span>&quot; at the bottom of the display. </li>
			        			<li>
			         				<div class="image_right">
			         					<img src="${this.a111RootUrl}/A112/img/unit08/labs/scope1.png" width="250" height="136" class="image_border"/>
			         				</div>
			         				Press the button under &quot;<span class="scopefont">&nbsp;AWG</span>&quot; and you will get the menu choices &quot;<span class="scopefont">WAVE TYPE&nbsp;&nbsp;&nbsp;&nbsp;SWEEP&nbsp;&nbsp;&nbsp;&nbsp;FREQUENCY</span>&quot;
			         			</li>
			         			<li>Press the button under &quot;<span class="scopefont">WAVE TYPE</span>&quot; and  set it to a sine wave.</li>
			         			<li>Press the Menu button twice to move back to the last menu &quot;<span class="scopefont">WAVE TYPE&nbsp;&nbsp;&nbsp;&nbsp;SWEEP&nbsp;&nbsp;&nbsp;&nbsp;FREQUENCY</span>&quot;.</li>
			         			<li>Press the button under &quot;<span class="scopefont">&nbsp;FREQUENCY</span>&quot; and set the frequency to 100Hz</li>
			         			<li>Press the &quot;MENU&quot; button once to move back to  &quot;<span class="scopefont">WAVE TYPE&nbsp;&nbsp;&nbsp;&nbsp;SWEEP&nbsp;&nbsp;&nbsp;&nbsp;FREQUENCY</span>&quot; and a second time to move to
			           				&quot;<span class="scopefont">AMPLITUDE&nbsp;&nbsp;&nbsp;&nbsp;DUTY CYCLE&nbsp;&nbsp;&nbsp;&nbsp;OFFSET</span>&quot;.</li>
			         			<li>Press the button under &quot;<span class="scopefont">AMPLITUDE</span>&quot; and set this to 4V<sub>PK-PK</sub>. </li>
			         			<li>Check that &quot;<span class="scopefont">&nbsp;OFFSET</span>&quot; is set to 0V.</li>
			        		</ol>
			        	</li>
			        </ul>
			       <p><strong>5a</strong>. Connect the secondary of the transformer to the oscilloscope (and GND) so you can measure the voltage out. Draw the Schematic symbol for a transformer and think about how it should be connected.</p>
			       <p><em>Remember that there are two connections needed for the Oscilloscope, one is GND and the other is either the &quot;AC&quot; or &quot;DC&quot; connection. &quot;AC&quot; allows you to only see AC, while &quot;DC&quot; allows you to see AC+DC.</em></p>
			       <p><strong>5b</strong>. Adjust the &quot;Amplifier Level&quot; control until so that it is as large as possible without any clipping. </p>
			       <p><em>Clipping is when the top (or bottom) of the sine wave is flattened off.</em></p>
             <p><strong>Once you have a &quot;not-clipping&quot; waveform, <em>dis-connect the oscillscope from the transformer</em>.</strong></p>
			       <div class="line_break"></div>
					<h2>BUILD IT</h2>
					<div class="image_right">
						<img src="${this.a111RootUrl}/A112/img/unit08/labs/schem1.png" alt="" width="500" height="200" class="image_border"/>
					</div>
					<p>You are about to build the circuit shown in the figure 1-6 schematic. <strong><em>Note that the connection from the transformer to the oscilloscope you added in step 5b is no longer connected!</em></strong></p>
 				`,
 				'questionText': `
  						<p><strong>Question #1: What do you expect to see on the oscilloscope across R1?</strong></p>
						<div class="image_left no_caption">
							<img src="${this.a111RootUrl}/A112/img/unit08/labs/scopeans.png" alt="" width="94" height="240" class="image_border"/>
						</div>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `A`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `B`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `C`,
						'correct': true,
						'feedback': `Yahoo! You got it!`
					},
					{
						'text': `D`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `E`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `F`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					<p><strong>6</strong>. Now go ahead and build the circuit shown in figure 1-7 on your breadboard. <strong>Connect the oscilloscope channel 1 (DC) so that it measures the voltage across R1.</p>
					<div class="image_right">
			        	<img src="${this.a111RootUrl}/A112/img/unit08/labs/schem1.png" alt="" width="500" height="200" class="image_border"/>
			        </div>
 				`,
 				'questionText': `
			        <p><strong>Question #2: What did the oscilloscope show across R1?</strong></p>
					<div class="image_left no_caption">
						<img src="${this.a111RootUrl}/A112/img/unit08/labs/scopeans.png" alt="" width="94" height="240" class="image_border"/>
					</div>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `A`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `B`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `C`,
						'correct': true,
						'feedback': `Great! Move ahead, mortal.`
					},
					{
						'text': `D`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `E`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `F`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
 					<div class="line_break"></div>
 					<h2>CAP IT</h2>
 					<div class="image_right">
 						<img src="${this.a111RootUrl}/A112/img/unit08/labs/schem2.png" alt="" width="500" height="200" class="image_border"/>
 					</div>
					<p>You are about to add a capacitor as shown in figure 1-8. </p>
 				`,
 				'questionText': `
					<p><strong>Question #3: What do you expect to see on the oscilloscope across R1?</strong></p>
					<div class="image_left no_caption">
						<img src="${this.a111RootUrl}/A112/img/unit08/labs/scopeans.png" alt="" width="94" height="240" class="image_border"/>
					</div>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `A`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `B`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `C`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `D`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `E`,
						'correct': true,
						'feedback': `You got it, now try it!`
					},
					{
						'text': `F`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					<p><strong>7</strong>. Now add the 1000uF capacitor to the circuit as shown in figure 1-9.  Make sure to check the polarity of the capacitor. <br>
		              <em>The white stripe (with the &quot;-&quot; symbol on it) on the capacitor indicates the negative lead.</em>
		          	<div class="image_right">
		            	<img src="${this.a111RootUrl}/A112/img/unit08/labs/schem2.png" alt="" width="500" height="200" class="image_border"/>
		          	</div>
 				`,
 				'questionText': `
		          	<p><strong>Question #4: What did you see on the oscilloscope across R1? </strong></p>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `A`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `B`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `C`,
						'correct': false,
						'feedback': `:-(`
					},
					{
						'text': `D`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `E`,
						'correct': true,
						'feedback': `Great! Dance on down the line.`
					},
					{
						'text': `F`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
 					<h2>REVERSE IT</h2>
 					<p>You are now going to reverse the direction of the diode.. </p>
 				`,
 				'questionText': `
        			  <p><strong>Question #5: What do you expect to see on the oscilloscope across R1?</strong></p>
        			  <div class="image_left no_caption">
        			  	<img src="${this.a111RootUrl}/A112/img/unit08/labs/scopeans.png" alt="" width="94" height="240" class="image_border"/>
        			  </div>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `A`,
						'correct': false,
						'feedback': `:-(`
					},
					{
						'text': `B`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `C`,
						'correct': false,
						'feedback': `:-(`
					},
					{
						'text': `D`,
						'correct': false,
						'feedback': `:-(`
					},
					{
						'text': `E`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `F`,
						'correct': true,
						'feedback': `Great! Now try it.`
					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': `<p><strong>8</strong>. Reverse the direction of the diode. Make sure to check the polarity of the capacitor. </p>`,
 				'questionText': `
             		<p><strong>Question #6: What did you see on the oscilloscope across R1? </strong></p>
             		<div class="image_left no_caption">
             			<img src="${this.a111RootUrl}/A112/img/unit08/labs/scopeans.png" alt="" width="94" height="240" class="image_border"/>
             		</div>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `A`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `B`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `C`,
						'correct': false,
						'feedback': `:-(`
					},
					{
						'text': `D`,
						'correct': false,
						'feedback': `Check to see if your capacitor is lonely.`
					},
					{
						'text': `E`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `F`,
						'correct': true,
						'feedback': `Great, move to page 2!`
					}
 				],
 				'htmlAfterQuestion': `<h2>Move on to page 2....</h2>`
 			}
 		],
 		'page2': [
 			{
 				'htmlBeforeQuestion': `
 					<h2>FULLIFY IT</h2>
 					<div class="image_right">
						<a href="${this.a111RootUrl}/A112/img/unit08/labs/schem3.png" target="new">
							<img src="${this.a111RootUrl}/A112/img/unit08/labs/schem3.png" alt="" width="500" height="236" class="image_border"/>
						</a>
					</div>
					<p>You are about to build the circuit shown in the figure 2-1 schematic.</p>
 				`,
 				'questionText': `
					<p><strong>Question #7: What do you expect to see on the oscilloscope across R1?</strong></p>
					<div class="image_left no_caption">
						<img src="${this.a111RootUrl}/A112/img/unit08/labs/scopeans.png" alt="" width="94" height="240" class="image_border"/>
					</div>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `A`,
						'correct': true,
						'feedback': `Fine work, reading the material and all that.`
					},
					{
						'text': `B`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `C`,
						'correct': false,
						'feedback': `:-P`
					},
					{
						'text': `D`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `E`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `F`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					<p><strong>9</strong>. Now go ahead and build the circuit shown in figure 2-2 on your breadboard.</p>
					<p><em>Use whichever of the bridge rectifiers you have that are shown in figure 2-3.</em></p>
					<p><em>Note that there are 4 connections to the bridge rectifier. If you have the small round bridge, only the &quot;+&quot; connection is labeled, the rest follow from that.</em></p>
					<div class="image_right">
						<a href="${this.a111RootUrl}/A112/img/unit08/labs/schem3.png" target="_blank">
							<img src="${this.a111RootUrl}/A112/img/unit08/labs/schem3.png" alt="figure 2-2: bridge rectifier schematic" width="400" height="200" class="image_border"/>
						</a>
					</div>
					<div class="image_right">
						<a href="${this.a111RootUrl}/A112/img/unit08/labs/bridge.png" target="new">
							<img src="${this.a111RootUrl}/A112/img/unit08/labs/bridge.png" alt="figure 2-3: Bridge Rectifiers" width="200" height="129" class="image_border"/>
						</a>
					</div>
 				`,
 				'questionText': `
					<p><strong>Question #8: What did the oscilloscope show across R1?</strong></p>
					<div class="image_left no_caption">
						<img src="${this.a111RootUrl}/A112/img/unit08/labs/scopeans.png" alt="" width="94" height="240" class="image_border"/>
					</div>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `A`,
						'correct': true,
						'feedback': `Fine work, scream "YIPEE"`
					},
					{
						'text': `B`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `C`,
						'correct': false,
						'feedback': `:-(`
					},
					{
						'text': `D`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `E`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `F`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
 					<div class="line_break"></div>
 					<h2>FLATTEN IT</h2>
 					<div class="image_right">
						<img src="${this.a111RootUrl}/A112/img/unit08/labs/schem4.png" alt="" width="500" height="200" class="image_border"/>
					</div>
					<p>You are about to add a capacitor as shown in figure 2-3.</p>
 				`,
 				'questionText': `
           			<p><strong>Question #9: What do you expect to see on the oscilloscope across R1?</strong></p>
        			<div class="image_left no_caption">
        				<img src="${this.a111RootUrl}/A112/img/unit08/labs/scopeans.png" alt="" width="94" height="240" class="image_border"/>
        			</div>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `A`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `B`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `C`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `D`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `E`,
						'correct': true,
						'feedback': `You got it, now try it!`
					},
					{
						'text': `F`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					<p><strong>10</strong>. Now add the 1000uF capacitor to the circuit as shown in figure 2-4.  Make sure to check the polarity of the capacitor.</p>
					<p><em>The white stripe (with the &quot;-&quot; symbol on it) on the capacitor indicates the negative lead.</em></p>
		          	<div class="image_right">
		            	<img src="${this.a111RootUrl}/A112/img/unit08/labs/schem4.png" alt="" width="500" height="200" class="image_border"/>
		          	</div>
 				`,
 				'questionText': `
					<p><strong>Question #10: What did you see on the oscilloscope across R1? </strong></p>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `A`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `B`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `C`,
						'correct': false,
						'feedback': `:-(`
					},
					{
						'text': `D`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					},
					{
						'text': `E`,
						'correct': true,
						'feedback': `Wondrous things are happening and your quest is almost complete! Move ahead with a jolly "HI-HO!"`
					},
					{
						'text': `F`,
						'correct': false,
						'feedback': `Nope, that's not it!`
					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					<p><strong>11</strong>. Do the math and figure out what the output voltage should be. Go ahead and use 0.5V as the forward break over
					  voltage of the diodes in the bridge rectifier. Now measure the output of your circuit, either with your oscilloscope in &quot;meter&quot;
					  mode or with your digital multimeter. Make sure to use the correct voltage going to the transformer, remember that you set it with the
					  &quot;Amp Level&quot; control earlier.</p>
 				`,
 				'questionText': `
					<p><strong>Question #11: Does your reading agree with the math?</strong><br>
             		 <em>You should be within 0.5V for this circuit.</em></p>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': 'YES',
 						'correct': true,
 						'feedback': `Wonderful work, you have now completed this lab. Feel free to build other things. It is very difficult to ruin anything........so have at it!`
 					},
 					{
 						'text': 'NO',
 						'correct': false,
 						'feedback': `Hmmm, you should be getting around 3V. If you are, then check your math. If not, then check with your instructor.`
 					}
 				]
 			}
 		]
 	},
 	'lab9-1': {
 		'page1': [
 			{
 				'htmlBeforeQuestion': `
					<div class="image_left">
					        <a href="${this.a111RootUrl}/A112/img/unit09/labs/9_components.png" target="_blank">
					        	<img src="${this.a111RootUrl}/A112/img/unit09/labs/9_components.png" alt="" width="200" height="160" class="image_border"/>
					        </a>
					 </div>
					 <p>Parts  needed (<em>shown in figure 1-1</em>): 2n3904 NPN transistor, 2n3906 PNP transistor, 7370 18V lamp, brain.</p>
					 <div class="image_right">
					    <a href="${this.a111RootUrl}/A112/img/unit09/labs/transtest.png" target="_blank">
					    	<img src="${this.a111RootUrl}/A112/img/unit09/labs/transtest.png" alt="" width="400" height="200" class="image_border"/>
					    </a>
					 </div>
					 <p>Sometimes it can be hard to read the part numbers on transistors. You have both NPN and PNP transistors in your kit and the part numbers have only one digit different.
					   Here is a way to test to ensure that you have correctly identified the transistors as NPN or PNP. It is also the method you would use to test a transistor if you were troubleshooting it in a circuit.</p>
					 <p>As you will certainly remember from the reading, we can think of bipolar transistors as two diodes that are connected at the base. Using this concept we can measure each
					   of those &ldquo;diodes&rdquo; separately and determine their direction and which connection is the base.</p>
					<ul>
					  <li>This can tell you if the transistor is an NPN or PNP and which connection is the base.</li>
					  <li>It cannot tell you which is the emitter or collector.</li>
					  </ul>
					<p><strong>9-0.</strong> With your meter set to &ldquo;junction test&rdquo;, test each of your transistors so  that you know if they are NPN or PNP and which connection is the base.<br>
					  (<em>Do these tests even if you can tell the NPN from the PNP, it is a very important skill to have.</em>)
					</p>
					<div class="line_break"></div>
					<div class="image_right">
					  <a href="${this.a111RootUrl}/A112/img/unit09/labs/9-0.png" target="_blank">
					  	<img src="${this.a111RootUrl}/A112/img/unit09/labs/9-0.png" alt="" width="175" height="388" class="image_border"/>
					  </a>
					</div>
					<p><strong>Circuit #1: </strong>Build the circuit in figure 1-3 using the lamp and your digital multimeter.</p>
					<ul>
					  <li>You will be using the &ldquo;Var +/-&ldquo; power supply so  set the meter switch in your lab kit to the right so that the lab kit voltmeter shows the &ldquo;Var +/-&ldquo; voltage.</li>
					  <li>Set the &ldquo;Var +/-&ldquo; control to the middle so that  0V is at the &ldquo;Var +/-&ldquo; output.</li>
					  <li>Set the meter to the 200mA setting.</li>
					</ul>
					<p><strong>9-1. </strong>Slowly adjust the &ldquo;Var +/-&ldquo; control to the right so that the voltage becomes positive.</p>
 				`,
 				'questionText': `
  						<p><strong>Question #1: What happens to current flow as you make the voltage more positive?</strong></p>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `It increased`,
						'correct': true,
						'feedback': `Great, move on!`
					},
					{
						'text': `It decreased`,
						'correct': false,
						'feedback': `That is not what it should do, please check your circuit.`
					},
					{
						'text': `It did not change`,
						'correct': false,
						'feedback': `That is not what it should do, please check your circuit.`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `<p><strong>Question #2: Does the lamp light up?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
					{
						'text': `Yes`,
						'correct': true,
						'feedback': `Great, move on!`
					},
					{
						'text': `No`,
						'correct': false,
						'feedback': `Then something is wrong with your circuit. Check that it is built like the schematic. Check with your instructor if you can't find the problem.`
					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					<p><strong>9-2. </strong>Return the &ldquo;Var +/-&ldquo; control to 0V, then slowly turn to the left so that  the voltage becomes negative.</p>
 				`,
 				'questionText': `
        			<p><strong>Question #3: What happens to current flow as you make the voltage more negative?</strong></p>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `It increased`,
						'correct': true,
						'feedback': `Great, move on!`
					},
					{
						'text': `It decreased`,
						'correct': false,
						'feedback': `That is not what it should do, please check your circuit.`
					},
					{
						'text': `It did not change`,
						'correct': false,
						'feedback': `That is not what it should do, please check your circuit.`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `<p><strong>Question #4: Does the  lamp light up?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `Yes`,
						'correct': true,
						'feedback': `Great, move on!`
					},
					{
						'text': `No`,
						'correct': false,
						'feedback': `Then something is wrong with your circuit. Check that it is built like the schematic. Check with your instructor if you can't find the problem.`
					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					<div class="line_break"></div>
					<h1>NPN</h1>
		            <div class="image_right">
		              <a href="${this.a111RootUrl}/A112/img/unit09/labs/9-1.png" target="_blank">
		              	<img src="${this.a111RootUrl}/A112/img/unit09/labs/9-1.png" alt="" width="164" height="350" class="image_border"/>
		              </a>
		            </div>
		            <p>Change the circuit on your breadboard to what is shown in figure 1-4.</p>
		            <ul>
		              <li>The transistor part number is written on the front of the transistor, <em>very small</em> !</li>
		              <li>
		               <div class="image_right">
		                   <a href="${this.a111RootUrl}/A112/img/unit09/labs/transpins.png" target="new"><img src="${this.a111RootUrl}/A112/img/unit09/labs/transpins.png" alt="" width="61" height="120" class="image_border"/></a>
		                 </div>
		               Note figure 1-5, it names the pins of the  transistor. These will not always be in the same order for every transistor.  Both of the transistors used in this lab have this order though. </li>
		               <li>Make CERTAIN that you match the pins on the transistor (as shown in figure 1-5) with the schematic as you build the circuit. Connecting them incorrectly can destroy the transistor.</li>
		               <li>Set the &ldquo;Var +/-&ldquo; control to the middle so that  0V is at the &ldquo;Var +/-&ldquo; output.</li>
            		</ul>
 				`,
 				'questionText': `
 					<p><strong>Question #5: How much current is flowing now?</strong> <br>
        			(<em>with 0V at base</em>)</p>
        		`,
        		'questionType': 'multiple-choice',
        		'options': [
        			{
						'text': `No current is flowing`,
						'correct': true,
						'feedback': `Great, move on!`
					},
					{
						'text': `Current is flowing but it is less than 30mA`,
						'correct': false,
						'feedback': `That is not correct, please check your circuit.`
					},
					{
						'text': `30mA or more current is flowing`,
						'correct': false,
						'feedback': `That is not correct, please check your circuit.`
					},
        		]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `
 					<p><strong>Question #6: What should happen to current flow through the lamp (and meter) as you make the  voltage at the base of Q1 more positive?</strong></p>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `Current should increase`,
						'correct': true,
						'feedback': `Great, move on!`
					},
					{
						'text': `Current should decrease`,
						'correct': false,
						'feedback': `:-(`
					},
					{
						'text': `Base voltage has no effect on current`,
						'correct': false,
						'feedback': `It most certainly does!`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `<p><strong>9-3. </strong>Slowly adjust the &ldquo;Var +/-&ldquo; so that the voltage becomes more positive.</p>`,
 				'questionText': `<p><strong>Question #7: What happened to current flow through the lamp as you made the voltage more positive?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `Current increased`,
						'correct': true,
						'feedback': `Great, move on!`
					},
					{
						'text': `Current decreased`,
						'correct': false,
						'feedback': `That is not correct, please check your circuit.`
					},
					{
						'text': `It did not change`,
						'correct': false,
						'feedback': `That is not correct, please check your circuit.`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `
					<p><strong>Question #8: Did what actually happened </strong>(question #7) <strong>agree with what you thought would happen </strong>(question #6)<strong>?<br>
                   If not, describe where your thought process was wrong for #6.</strong></p>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `Yes`,
						'correct': true,
						'feedback': `Great, move on!`
					},
					{
						'text': `No`,
						'correct': false,
						'feedback': `Go back and figure out where your thinking was wrong for question #7. This is a really important step to building understanding.`
					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `<p><strong>Question #9: Did the lamp light when you made the base voltage more positive?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `Yes`,
						'correct': true,
						'feedback': `Great, move on!`
					},
					{
						'text': `No`,
						'correct': false,
						'feedback': `It should have lit, please check your circuit.`
					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': `<p><strong>9-4. </strong>Once again slowly adjust the &ldquo;Var +/-&ldquo; so that the voltage  becomes more positive. This time, stop when current starts to flow (<em>let&rsquo;s say at least 1mA</em>).</p>`,
 				'questionText': `<p><strong>Question #10: What  was the difference between VB (base voltage) and VE (emitter voltage) when current started to flow?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `Less than 0.5V`,
						'correct': false,
						'feedback': `:-( Check your circuit and measurement, that is not correct.`
					},
					{
						'text': `Between 0.5 and 0.75V`,
						'correct': true,
						'feedback': `YAHOO!!!!!!! move on`
					},
					{
						'text': `Between 0.75V and 1V`,
						'correct': false,
						'feedback': `:-( Check your circuit and measurement, that is not correct.`
					},
					{
						'text': `Greater than 1V`,
						'correct': false,
						'feedback': `:-( Check your circuit and measurement, that is not correct.`
					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `<p><strong>Question #11: What name would you give to this? </strong>(<em>We used the  same name with tubes.</em>)</p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `Saturation`,
						'correct': false,
						'feedback': `nope nope nope`
					},
					{
						'text': `Cutoff`,
						'correct': true,
						'feedback': `That is correct!`
					},
					{
						'text': `Transconductance`,
						'correct': false,
						'feedback': `Great word, but NO!`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `<p><strong>9-5. </strong>Adjust &ldquo;Var +/-&ldquo; to continue making the voltage more positive. Find the  point when current stops increasing.</p>`,
 				'questionText': `<p><strong>Question #12: What was the difference between VB (base voltage) and VE  (emitter voltage) when current stopped increasing?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `Less than 0.5V`,
						'correct': false,
						'feedback': `:-( Check your circuit and measurement, that is not correct.`
					},
					{
						'text': `Between 0.5 and 0.75V`,
						'correct': false,
						'feedback': `:-( Check your circuit and measurement, that is not correct.`
					},
					{
						'text': `Between 0.75V and 1V`,
						'correct': true,
						'feedback': `YAHOO!!!!!!! move on`
					},
					{
						'text': `Greater than 1V`,
						'correct': false,
						'feedback': `:-( Check your circuit and measurement, that is not correct.`
					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `<p><strong>Question #13: What name would you give to this? </strong>(<em>We used the same name with tubes.</em>)</p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `Saturation`,
						'correct': true,
						'feedback': `That is correct!`
					},
					{
						'text': `Cutoff`,
						'correct': false,
						'feedback': `NO!`
					},
					{
						'text': `Transconductance`,
						'correct': false,
						'feedback': `Great word, but NO!`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `<p><strong>Question #14: If you started with the base voltage at 0V. What  should happen to current flow through the lamp (and meter) as you make the  voltage at the base of Q1 negative in voltage?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `Current should increase`,
						'correct': false,
						'feedback': `:-( nope`
					},
					{
						'text': `Current should decrease`,
						'correct': false,
						'feedback': `nope`
					},
					{
						'text': `Current should not change`,
						'correct': true,
						'feedback': `Great, move on!`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					<p><strong>9-6. </strong>Reset &ldquo;Var +/-&ldquo; to 0V and then slowly adjust it to a –V.<strong></strong></p>
 				`,
 				'questionText': `
             		<p><strong>Question #15: What happened to current flow through the lamp as you made the voltage negative?</strong></p>
 				`,
 				'questionType': 'multiple-choice',
 				'options': [
					{
						'text': `Current increased`,
						'correct': false,
						'feedback': `That is not correct, please check your circuit.`
					},
					{
						'text': `Current decreased`,
						'correct': false,
						'feedback': `That is not correct, please check your circuit.`
					},
					{
						'text': `Current did not change`,
						'correct': true,
						'feedback': `
							That is exactly what should happen. The base is now more negative than the emitter. In an NPN transistor this means that
							is is no longer correctly biased so not current will flow, just as no current was flowing when the base was the same voltage as the emitter.
						`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `<p><strong>Question #16: Did the lamp light with the –V on the base?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `Yes`,
						'correct': false,
						'feedback': `Well it should not have!`
					},
					{
						'text': `No`,
						'correct': true,
						'feedback': `This is as it should be`
					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `<p><strong>Question #17: Did  what actually happened </strong>(question #15) <strong>agree with what you thought would happen </strong>(question #14)<strong>?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `Yes`,
						'correct': true,
						'feedback': `Great, move on!`
					},
					{
						'text': `No`,
						'correct': false,
						'feedback': `Go back and figure out where your thinking was wrong for question #7. This is a really important step to building understanding.`
					}
 				],
 				'htmlAfterQuestion': `
					<h2><em>Again I highly recommend PLAYING with this! Try things, figure out how it works. The more you work with it beyond the specific lab directions, the more you will get out of the course!</em></h2>
           			<h1>Now, move on to page 2!</h1>
 				`
 			}
 		],
 		'page2': [
 			{
	 			'htmlBeforeQuestion': `
					<h1>PNP</h1>
	             	<div class="image_right">
	               		<a href="${this.a111RootUrl}/A112/img/unit09/labs/9-2.png" target="new">
	               			<img src="${this.a111RootUrl}/A112/img/unit09/labs/9-2.png" alt="" width="164" height="350" class="image_border" style="margin: 0 auto;"/>
	               		</a>
	             	</div>
	             	<p>Change the circuit on your breadboard to what is shown in figure 2-1. You are now using the 2N3906, PNP transistor.</p>
		        	<ul>
		               <li>The transistor part number is written on the  front of the transistor, <em>very small</em>!</li>
		               <li>
		                 <div class="image_right">
		                   <a href="${this.a111RootUrl}/A112/img/unit09/labs/transpins2.png" target="_blank">
		                   		<img src="${this.a111RootUrl}/A112/img/unit09/labs/transpins2.png" alt="" width="61" height="120" class="image_border" style="margin: 0 auto;"/>
		                   	</a>
		                 </div>
		                 Note that you are now using &ldquo;-15V&rdquo; instead of  &ldquo;+15V&rdquo;.
		               </li>
		               	<li>Note figure 1-5, it names the pins of the  transistor. These will not always be in the same order for every transistor. Both of the transistors used in this lab have this order though.</li>
						<li>Set the &ldquo;Var +/-&ldquo; control to the middle so that  0V is at the &ldquo;Var +/-&ldquo; output.</li>
					</ul>
	 			`,
	 			'questionText': `<p><strong>Question #18: What should happen to  current flow through the lamp </strong>(and meter)<strong> if you started at 0V and made the voltage at the base of Q1 more positive?</strong></p>`,
	 			'questionType': 'multiple-choice',
	 			'options': [
						{
						'text': `Current should increase`,
						'correct': false,
						'feedback': `No, that is not what should happen. Take a closer look at the circuit.`
					},
					{
						'text': `Current should decrease`,
						'correct': false,
						'feedback': `:-(`
					},
					{
						'text': `Current should not change`,
						'correct': true,
						'feedback': `That is exactly what should happen. The base is now more positive than the emitter. In a PNP transistor this means that is no longer correctly biased so not current will flow, just as no current was flowing when the base was the same voltage as the emitter.`
					},
				]
	 		},
	 		{
	 			'htmlBeforeQuestion': '',
	 			'questionText': `<p><strong>Question #19: What about if you started at a base voltage of 0V and then made it more negative than 0V?</strong></p>`,
	 			'questionType': 'multiple-choice',
	 			'options': [
						{
						'text': `Current should increase`,
						'correct': true,
						'feedback': `That is correct!`
					},
					{
						'text': `Current should decrease`,
						'correct': false,
						'feedback': `:-(`
					},
					{
						'text': `Current should not change`,
						'correct': false,
						'feedback': `No, it should actually change.`
					},
				]
	 		},
	 		{
	 			'htmlBeforeQuestion': `
					<p><strong>9-7. </strong>Reset the &ldquo;Var +/-&ldquo; to 0V and slowly adjust the &ldquo;Var +/-&ldquo; so that the  voltage becomes more positive and then more negative.<strong></strong></p>
	 			`,
	 			'questionText': `<p><strong>Question #20: What happened to current flow through the lamp as you made the voltage more positive?</strong></p>`,
	 			'questionType': 'multiple-choice',
	 			'options': [
						{
						'text': `Current increased`,
						'correct': false,
						'feedback': `That is not correct, please check your circuit.`
					},
					{
						'text': `Current decreased`,
						'correct': false,
						'feedback': `That is not correct, please check your circuit.`
					},
					{
						'text': `It did not change`,
						'correct': true,
						'feedback': `That is what should happen!`
					},
				]
	 		},
	 		{
	 			'htmlBeforeQuestion': '',
	 			'questionText': `<p><strong>Question #21: What  happened to current flow through the lamp as you made the voltage more  negative?</strong></p>`,
	 			'questionType': 'multiple-choice',
	 			'options': [
						{
						'text': `Current increased`,
						'correct': true,
						'feedback': `Great, move on!`
					},
					{
						'text': `Current decreased`,
						'correct': false,
						'feedback': `That is not correct, please check your circuit.`
					},
					{
						'text': `It did not change`,
						'correct': false,
						'feedback': `That is not correct, please check your circuit.`
					},
				]
	 		},
	 		{
	 			'htmlBeforeQuestion': '',
	 			'questionText': `<p><strong>Question #22: Did what actually happened agree with what you thought would happen?</strong></p>`,
	 			'questionType': 'multiple-choice',
	 			'options': [
					{
						'text': `Yes`,
						'correct': true,
						'feedback': `Great, move on!`
					},
					{
						'text': `No`,
						'correct': false,
						'feedback': `Go back and figure out where your thinking was wrong for questions #18 and 19. This is a really important step to building understanding.`
					},
				]
	 		},
	 		{
	 			'htmlBeforeQuestion': '',
	 			'questionText': `<p><strong>Question #23: Did the lamp light when you made the V<sub>B</sub> positive?</strong></p>`,
	 			'questionType': 'multiple-choice',
	 			'options': [
	 				{
						'text': `Yes`,
						'correct': false,
						'feedback': `Oops, it should not have`
					},
					{
						'text': `No`,
						'correct': true,
						'feedback': `Good!`
					},
	 			]
	 		},
	 		{
	 			'htmlBeforeQuestion': '',
	 			'questionText': `<p><strong>Question #24: Did the lamp light when you  made the V<sub>B</sub> negative?</strong></p>`,
	 			'questionType': 'multiple-choice',
	 			'options': [
	 				{
						'text': `Yes`,
						'correct': true,
						'feedback': `Great, move on!`
					},
					{
						'text': `No`,
						'correct': false,
						'feedback': `Oops, it should have lit, please check your circuit.`
					},
	 			]
	 		},
	 		{
	 			'htmlBeforeQuestion': `<p><strong>9-4. </strong>Once again slowly adjust the &ldquo;Var +/-&ldquo; to find saturation and cutoff.</p>`,
	 			'questionText': `<p><strong>Question #25: What was the voltage difference between V<sub>B</sub> and V<sub>E</sub> when cutoff occurred?</strong></p>`,
	 			'questionType': 'multiple-choice',
	 			'options': [
	 				{
						'text': `Less negative than -0.5V`,
						'correct': false,
						'feedback': `:-( Check your circuit and measurement, that is not correct.`
					},
					{
						'text': `Between -0.5 and -0.75V`,
						'correct': true,
						'feedback': `YAHOO!!!!!!! move on`
					},
					{
						'text': `Between -0.75V and -1V`,
						'correct': false,
						'feedback': `:-( Check your circuit and measurement, that is not correct.`
					},
					{
						'text': `More negative than -1V`,
						'correct': false,
						'feedback': `:-( Check your circuit and measurement, that is not correct.`
					}
	 			]
	 		},
	 		{
	 			'htmlBeforeQuestion': '',
	 			'questionText': `<p><strong>Question #26: What was the voltage difference between VB and VE when saturation occurred?</strong></p>`,
	 			'questionType': 'multiple-choice',
	 			'options': [
	 				{
						'text': `Less than -0.5V`,
						'correct': false,
						'feedback': `:-( Check your circuit and measurement, that is not correct.`
					},
					{
						'text': `Between 0.5 and 0.75V`,
						'correct': false,
						'feedback': `YAHOO!!!!!!! move on`
					},
					{
						'text': `Between 0.75V and 1V`,
						'correct': true,
						'feedback': `YAHOO!!!!!!! move on`
					},
					{
						'text': `Greater than 1V`,
						'correct': false,
						'feedback': `:-( Check your circuit and measurement, that is not correct.`
					}
	 			],
	 			'htmlAfterQuestion': `
					<h2><em>Again I highly recommend PLAYING with this! Try things, figure out how it works. The more you work with it beyond the specific lab directions, the more you will get out of the course!</em></h2>
           			<div class="image_left no_caption">
             			<img src="${this.a111RootUrl}/A112/img/unit07/labs/Camera-icon.png" alt="" width="100" height="100"/>
           			</div>
           			<h2>Remember to take a photo of your lab in progress to upload to Canvas if you are in the online section or did not finish during lab time.</h2>
	 			`,
	 		},
	 	]
 	},
 	'lab9-2': {
 		'page1': [
 			{
 				'htmlBeforeQuestion': `
					<style>
						/* for styling the table in part 9-6 */
						.content_table input[type="text"] {
							width: 100%;
						}
					</style>
					<div class="image_left">
			          <a href="${this.a111RootUrl}/A112/img/unit09/labs/9-2parts.png" target="new">
			          		<img src="${this.a111RootUrl}/A112/img/unit09/labs/9-2parts.png" alt="" width="313" height="200" class="image_border"/>
			          </a>
			        </div>
			        <p>Parts needed (shown in figure 1-1): 2n3904 NPN transistor,4.7uF non-polarized capacitor, 2-10kΩ resistors, 1.2kΩ  resistor.(<em>Click on the image for a larger view.</em>)</p>
			        <p>In the last lab you experimented with current flow through transistors. In most cases other circuits we would connect to a transistor would require a change in voltage, not
			          just a change in current. If we change the voltage at the base we get a varying current through the collector/emitter. If we have a varying current and want a varying voltage what component would we add?</p>
					<p>Yes, a resistor! (<em>I&rsquo;m going to pretend that you gave the correct answer.</em>)</p>
			        <div class="line_break"></div>
			          <div class="image_right">
			          	<a href="${this.a111RootUrl}/A112/img/unit09/labs/9_1-1.png" target="new"><img src="${this.a111RootUrl}/A112/img/unit09/labs/9_1-1.png" alt="" width="226" height="300" class="image_border"/></a>
			          </div>
			          <p><strong>9-5.</strong> Build the circuit shown in figure 1-2. (<em>Click on the image for a larger view</em>.)<br>
			            A resistor has been added between the collector  and +5V to creating a changing voltage at the &ldquo;output&rdquo;. <br>
			            In the next unit we will discuss this in more detail, as well as some other options.</p>
			        <ol type="a">
			          <li>Set the &ldquo;+Var&rdquo; to 5V and use as the 5V source.</li>
			          <li>Connect the output to the oscilloscope &ldquo;DC&rdquo; in for Ch1.</li>
			          <li>Set the &ldquo;Var +/-&ldquo; to 0V to start.</li>
			          <li>Check that the &ldquo;Position&rdquo; for Ch1 of the oscilloscope is set to the middle of the screen.</li>
			          <li>Set Oscilloscope V/div to 2.56V and time/div to 500µS<br>
			            <em>Review lab #7-1 if you are uncertain how to do that.</em></li>
			          <li>Set the current meter to the 20mA range</li>
			          <li>Switch the oscilloscope to &ldquo;Meter&rdquo; mode and select &ldquo;V DC&rdquo;<br>
			            (<em>This will  give you a numeric display  of collector voltage.</em>)</li>
			        </ol>

 				`,
 				'questionText': `<p><strong> Question #27: What will happen  to V<sub>C</sub> (output voltage) when V<sub>B</sub> is made more positive than 0V?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': `It will become more positive`,
 						'correct': false,
 						'feedback': `Nope`
 					},
 					{
 						'text': `It will become more negative`,
 						'correct': true,
 						'feedback': `That is correct!`
 					},
 					{
 						'text': `It will not change`,
 						'correct': false,
 						'feedback': `Nope :-(`
 					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `<p><strong>Question #28: What will happen to V<sub>C</sub> (output voltage) when V<sub>B</sub> is made more negative than 0V?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': `It will become more positive`,
 						'correct': false,
 						'feedback': `Nope`
 					},
 					{
 						'text': `It will become more negative`,
 						'correct': false,
 						'feedback': `Oops, that's not right`
 					},
 					{
 						'text': `It will not change`,
 						'correct': true,
 						'feedback': `Correct, the transistor would no longer be correctly biased.`
 					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					<p> <strong>9-6.</strong> Adjust the “Var +/-“ going to the base for the values shown and record your V<sub>C</sub> and I<sub>C</sub> results for the V<sub>B</sub> values listed below.<br>
				      Measure with V<sub>B</sub> = 0V, 0.5V, 0.6V, 0.65V, 0.7V, 0.75V, 0.8V, 0.85V, 0.9V.</p>
	                <table class="content_table">
	                	<thead>
	                    	<tr>
	                    		<th></th>
	                        	<th>V<sub>C</sub></th>
	                        	<th>I<sub>C</sub></th>
	                        </tr>
	                    </thead>
	                    <tbody>
	                    	<tr>
	                        	<th>0V</th>
	                            <td><input type="text"></td>
	                            <td><input type="text"></td>
	                        </tr>
	                        <tr>
	                        	<th>0.5V</th>
	                            <td><input type="text"></td>
	                            <td><input type="text"></td>
	                        </tr>
	                        <tr>
	                        	<th>0.6V</th>
	                            <td><input type="text"></td>
	                            <td><input type="text"></td>
	                        </tr>
	                        <tr>
	                        	<th>0.65V</th>
	                            <td><input type="text"></td>
	                            <td><input type="text"></td>
	                        </tr>
	                        <tr>
	                        	<th>0.7V</th>
	                            <td><input type="text"></td>
	                            <td><input type="text"></td>
	                        </tr>
	                        <tr>
	                        	<th>0.75V</th>
	                            <td><input type="text"></td>
	                            <td><input type="text"></td>
	                        </tr>
	                        <tr>
	                        	<th>0.8V</th>
	                            <td><input type="text"></td>
	                            <td><input type="text"></td>
	                        </tr>
	                        <tr>
	                        	<th>0.85V</th>
	                            <td><input type="text"></td>
	                            <td><input type="text"></td>
	                        </tr>
	                        <tr>
	                        	<th>0.9V</th>
	                            <td><input type="text"></td>
	                            <td><input type="text"></td>
	                        </tr>
	                    </tbody>
	                </table>
 				`,
 				'questionText': `
					<p><strong>Question #29:  Enter the value of  V<sub>B</sub>for cutoff (<em>rounded to two decimals</em>) based on your  chart.</strong><br>
			    	(<em>Consider cutoff to be when you see more than 0.01mA of  current.</em>) </p>
 				`,
 				'questionType': 'numerical',
 				'textBeforeInput': `V<sub>B</sub>=`,
 				'textAfterInput': `V`,
 				'options': [
 					{
						'low': 0,
						'high': 0.44,
						'correct': false,
						'feedback': `Nope`
					},
					{
						'low': 0.45,
						'high': 0.5599,
						'correct': false,
						'feedback': `You should still not be seeing current flow at this low of a base voltage. Check your measurements and circuit.`
					},
					{
						'low': 0.56,
						'high': 0.6,
						'correct': true,
						'feedback': `Correct!`
					},
					{
						'low': 0.61,
						'high': 0.65,
						'correct': false,
						'feedback': `This may be correct for your specific transistor but it is common to see roughly 0.03mA of current at 0.6V<sub>B</sub>. Check 0.6V again just to be sure.`
					},
					{
						'low': 0.66,
						'high': 3.5,
						'correct': false,
						'feedback': `You should have seen current start to flow at 0.6V<sub>B</sub>.Check 0.6V again just to be sure.`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `
					<p><strong>Question #30: Enter the value of  V<sub>B</sub>for saturation (<em>rounded to two decimals</em>) based on your  chart.</strong><br>
          				(<em>Consider saturation to be when current stops increasing as  much as it had been. There should be a notable point when the increase  slows down a lot.</em>)
					</p>
 				`,
 				'questionType': 'numerical',
 				'textBeforeInput': `V<sub>B</sub>=`,
 				'textAfterInput': `V`,
 				'options': [
 					{
						'low': 0,
						'high': 0,
						'correct': false,
						'feedback': `SERIOUSLY?`
					},
					{
						'low': 0.01,
						'high': 0.59,
						'correct': false,
						'feedback': `This should be cutoff, check your circuit and measurements.`
					},
					{
						'low': 0.6,
						'high': 0.66,
						'correct': false,
						'feedback': `This is a bit lower than is normally seen but it may be fine for your specific transistor. Check for sure and then move ahead.`
					},
					{
						'low': 0.67,
						'high': 0.75,
						'correct': true,
						'feedback': `GREAT!, this is where we normally see saturation, move ahead!`
					},
					{
						'low': 0.76,
						'high': 0.85,
						'correct': false,
						'feedback': `Normally we see saturation around 0.7-0.75V<sub>B</sub>.This may be the correct value for your transistor, however. Check for sure and then move ahead.`
					},
					{
						'low': 0.86,
						'high': 3.5,
						'correct': false,
						'feedback': `This is really high, are you sure your transistor is not on fire? check your circuit and measurements and try again.`
					},
					{
						'low': 3.6,
						'high': 100,
						'correct': false,
						'feedback': `How did you even get this much voltage? The "Var +/-" source only goes up to +3.5V!`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					<div class="line_break"></div>
					<p>You are about to add a sine wave to the base of your  transistor. </p>
 				`,
 				'questionText': `
					<p><strong>Question #31: Given  the values you found for cutoff and saturation, what is the maximum sine wave  you could input into the transistor while staying within the
					  active region?</strong> <em>Please round your answer to two decimal places</em>.</p>
 				`,
 				'questionType': 'numerical',
 				'textBeforeInput': '',
 				'textAfterInput': `V<sub>PK-PK</sub>`,
 				'options': [
					{
						'low': 0,
						'high': 0.0999,
						'correct': false,
						'feedback': `The number should be higher here. Subtract cutoff from saturation to find this value.`
					},
					{
						'low': 0.09,
						'high': 0.1599,
						'correct': true,
						'feedback': `CORRECT!!!! You certainly subtracted cutoff from saturation to find this value.`
					},
					{
						'low': 0.16,
						'high': 0.2599,
						'correct': false,
						'feedback': `This is a bit higher than is normally seen but it may be fine for your specific transistor. Check for sure and then move ahead.`
					},
					{
						'low': 0.26,
						'high': 90.9999,
						'correct': false,
						'feedback': `This is much too large. Subtract cutoff from saturation to find this value.`
					},
					{
						'low': 91,
						'high': 159.999,
						'correct': false,
						'feedback': `This is much too large. The question is asking for a value in V, it seems like you may have given it in mV.`
					},
					{
						'low': 160,
						'high': 100000,
						'correct': false,
						'feedback': `This is much too large. Subtract cutoff from saturation to find this value.`
					},
 				],
 				'htmlAfterQuestion': `
					  <strong>Question #32: On a scrap of paper, draw what you would expect to see at the output of the circuit if you disconnected the  &ldquo;Var +/-&ldquo; and instead sent a sine wave of the voltage you defined in question  #31 to the base.</strong></p>
					  <div class="line_break"></div>
					  <p><strong>Potentiometer Exploration:</strong><br>
					    To allow easy adjustment of the audio level going to the base we are going to use a &ldquo;volume control&rdquo; built from a potentiometer.<br>
					    There are two potentiometers to the right of your breadboard. They are both 10kΩ. The top one is linear and the bottom is logarithmic. Logarithmic emulates the way we hear so use that one. There are  three connections next to the potentiometer and they connect to the three  points on the potentiometer. <br>
					    <strong>Potentiometer connections on Lab Kit</strong></p>
					<ul>
					  <li>Top = CCW: When the potentiometer is turned counter-clockwise the resistance between this connection and the wiper is made smaller (<em>at the same time it is made larger  between wiper and CW</em>).</li>
					  <li>Middle = WIPER: This connection changes resistance to the other two connections when the potentiometer is moved.</li>
					  <li>Bottom = CW: When the potentiometer is turned clockwise the resistance between this connection and the wiper is made smaller (<em>at the same time it is made larger  between wiper and CCW</em>).</li>
					</ul>
					<p>Using a potentiometer as a volume control means creating a voltage divider with it. There is a resistor from CCW to wiper and another from wiper to CW. Those two resistors always add up to the value of the  potentiometer, in this case 10kΩ. <br>
					  When you turn the potentiometer to the left we expect the &ldquo;volume&rdquo;, or voltage, to be decreased. To do this we want the bottom resistor in the voltage divider to get smaller and the top resistor to get larger. That  means that:</p>
					<ul>
					  <li>&ldquo;AWG&rdquo; connects to CW, which is the bottom connection beside the potentiometer.</li>
					  <li>Base connects to wiper, which is the middle connection beside the potentiometer.</li>
					  <li>GND connects to CCW, which is the top connection beside the potentiometer.</li>
					</ul>
					<h2>Move on to page 2!</h2>
 				`,
 			}
 		],
 		'page2': [
 			{
 				'htmlBeforeQuestion': `
					<div class="image_left">
			          <a href="${this.a111RootUrl}/A112/img/unit09/labs/9-2parts.png" target="_blank"></a>
			        </div>
			        <div class="image_right">
			        	<a href="${this.a111RootUrl}/A112/img/unit09/labs/9_1-2.png" target="_blank">
			        		<img src="${this.a111RootUrl}/A112/img/unit09/labs/9_1-2.png" alt="" width="273" height="300" class="image_border"/>
			        	</a>
			        </div>
			          <p><strong>9-7. </strong>Build the circuit shown in figure 2-1 on your breadboard. <br>
			            (<em>Click the image for a larger version.</em>)</p>
			        <ol type="a">
			            <li>Check that &ldquo;+Var&rdquo; is set to 5V and use as the 5V source</li>
			            <li>Connect the output to the oscilloscope &ldquo;DC&rdquo; in for Ch1.</li>
			            <li>Connect the base to the oscilloscope &ldquo;DC&rdquo; in for Ch2. <br>
			              (<em>this will allow you to measure exactly what voltage you are sending to the base</em>)</li>
			            <li>Set the AWG in your oscilloscope</li>
			            <ul>
			              <li>To 2Vpk-pk amplitude</li>
			              <li>To 1kHz frequency</li>
			            </ul>
			            <li>Check that the &ldquo;Position&rdquo; for Ch1 of the  oscilloscope is set to the middle of the screen.</li>
			            <li>Check  that the Oscilloscope is set to V/div to 2.56V and time/div to 500µS.</li>
			            <li>Set the current meter to the 20mA range</li>
			          </ol>
			        <p><strong>9-8.</strong> Switch the oscilloscope to &ldquo;Meter&rdquo;, select &ldquo;V P-P&rdquo;, and adjust the potentiometer until you are sending the voltage from question #31 (<em>as close as you can get</em>). Then Switch back to &ldquo;Scope&rdquo; mode.<br>
			          <em>If you are having trouble remembering how to navigate the oscilloscope, here is a <a href="${this.a111RootUrl}/A111/unit1/labs/lab_u01p04.html" target="new">lab to review</a>.</em>
			        </p>
			        <p><strong>Question #33: Draw what you see on the  oscilloscope for the output (Ch1) on a scrap paper.</strong></p>
 				`,
 				'questionText': `<p><strong>Question #34: Does your experiment agree with what you thought would happen?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
						'text': `Yes`,
						'correct': true,
						'feedback': `Great, move on!`
					},
					{
						'text': `No`,
						'correct': false,
						'feedback': `Go back and figure out where your thinking was wrong for question #7. This is a really important step to building understanding.`
					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
 					<div class="question_and_answer_full">
			            <div class="question_button">
			              <div class="question_button_header">Click here <br> to see what the scope should show.</div>
			        	</div>
			            <!-- end of question_button div -->
			            <div class="revealed_answer">
			              	<div class="revealed_answer_header">Answer: </div>
			            	<div class="image_holder no_caption">
			            		<img class="image_center" src="${this.a111RootUrl}/A112/img/unit09/labs/scopeplus5.jpg">
			            	</div>
			            <!-- end of revealed_answer div -->
			            </div>
			        </div>
 					<p><strong>9-9. </strong>Adjust the  potentiometer to send more voltage to the base until you see something change  on the oscilloscope channel 1.</p>
 				`,
 				'questionText': `
 					<p><strong>Question #35: What voltage at the base (in V<sub>PK-PK</sub>) caused  the oscilloscope image change?</strong>
          			<br>
          			<em>Please round your answer to two decimal places.</em></p>
          		`,
          		'questionType': 'numerical',
          		'textBeforeInput': '',
          		'textAfterInput': 'V<sub>PK-PK</sub>',
          		'options': [
          			{
						'low': 0,
						'high': 0.59,
						'correct': false,
						'feedback': `That is not what you should have seen, check your measurements and circuit.`
					},
					{
						'low': 0.6,
						'high': 0.99,
						'correct': false,
						'feedback': `Normally you would see it at a bit higher voltage but this should be fine, move ahead.`
					},
					{
						'low': 1,
						'high': 1.5,
						'correct': true,
						'feedback': `CORRECT!!!! Click below to reveal what the oscilloscope should show.`
					},
					{
						'low': 1.51,
						'high': 2,
						'correct': false,
						'feedback': `This seems too high. Check your measurements and circuit.`
					},
					{
						'low': 2.01,
						'high': 100,
						'correct': false,
						'feedback': `This is WAY too high. Check your measurements and circuit.`,
					}
          		]
 			},
 			{
 				'htmlBeforeQuestion': `
					<div class="question_and_answer_full">
			            <div class="question_button">
			                <div class="question_button_header">Click here<br> to see what the scope should show<br>and why.</div>
			            </div>
			            <!-- end of question_button div -->
			            <div class="revealed_answer">
			                <div class="revealed_answer_header">Answer: </div>
			                <div class="image_holder no_caption">
			                	<img class="image_center" src="${this.a111RootUrl}/A112/img/unit09/labs/scopehitcutoff.jpg">
			                </div>
			                <h2>WHY?</h2>
			                <p><strong>Remember that cutoff is somewhere around +600mV. Any voltage more negative than that results in no current flow. </strong></p>
			                <p><strong>When you turn the base voltage up you get a portion of the positive half of the wave going above that +600mV point and causing
			                   a change in current through the transistor that is seen as a change in voltage at the collector. To get a positive voltage of at least 600mV from a sine wave, the sine wave needs to have a V<sub>PK</sub> of at least 600mV which means a V<sub>PK-PK</sub> of at least 1.2V.</strong></p>
			                <p><strong>The negative half of the waveform causes no change in current and neither does the portion of the positive half that is less than the cutoff voltage.</strong></p>
			               <!-- end of revealed_answer div -->
			            </div>
			        </div>
			        <div class="line_break"></div>
			        <div class="image_right">
			        	<a href="${this.a111RootUrl}/A112/img/unit09/labs/9_1-3.png" target="_blank">
			        		<img src="${this.a111RootUrl}/A112/img/unit09/labs/9_1-3.png" alt="" width="319" height="300" class="image_border"/>
			        	</a>
			        </div>
			        <p><strong>9-10. </strong>Build the  circuit shown in figure 2-2. (<em>Click the image for a larger version.</em>) This circuit allows both the AC sine wave and a DC  &ldquo;bias&rdquo; voltage to be added to the base.</p>
			          <ol type="a">
			            <li>AC will be provided by the AWG and set by the  potentiometer </li>
			            <li>DC (+ or -) will be provided by  &ldquo;Var +/-&ldquo; </li>
			            <ul>
			              <li>The voltage divider created by the 2 10kΩ  resistors is there to reduce the voltage from &ldquo;Var +/-&ldquo; to allow a more  accurate setting. </li>
			              <li>Note that the voltage to the base will be half of what the  &ldquo;Var +/-&ldquo; meter shows.</li>
			            </ul>
			        </ol>
 				`,
 				'questionText': `
					<p><strong>Question #38: What DC  bias voltage should be added to the base in order for the entire AC waveform to  be amplified?</strong><br>
          			<em>Please round your answer to two decimal places.</em></p>
 				`,
 				'questionType': 'numerical',
 				'textBeforeInput': `V<sub>B</sub>=`,
 				'textAfterInput': `V`,
 				'options': [
 					{
						'low': 0,
						'high': 0.62499,
						'correct': false,
						'feedback': `This is too low, check your circuit and measurements.`
					},
					{
						'low': 0.625,
						'high': 0.775,
						'correct': true,
						'feedback': `This is correct, move ahead!`
					},
					{
						'low': 0.776,
						'high': 1.5,
						'correct': false,
						'feedback': `This is too high, check your circuit and measurements.`
					},
					{
						'low': 1.51,
						'high': 2,
						'correct': false,
						'feedback': `This is WAY too high. Check your measurements and circuit.`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					  <p><strong>9-11. </strong>Set the  &ldquo;source&rdquo; for your circuit based on your answers to questions #31 and #38.</p>
			          <ol type="a">
			            <li>Set the AC voltage to your answer for question #31 by adjusting the potentiometer.</li>
			            <li>Set the DC bias by adjusting the &ldquo;Var +/-&ldquo;  control.</li>
			          </ol>
			          <p><strong>Question #39: Draw  what you see on the oscilloscope on a scrap of paper.</strong></p>
			          <div class="question_and_answer_full">
			            <div class="question_button">
			              <div class="question_button_header">Click here<br>
			                to see what the scope should show.</div>
			            </div>
			            <!-- end of question_button div -->
			            <div class="revealed_answer">
			              <div class="revealed_answer_header">Answer: </div>
			              <div class="image_holder no_caption">
			              	<img class="image_center" src="${this.a111RootUrl}/A112/img/unit09/labs/scopebalclip.jpg">
			              </div>
			              <!-- end of revealed_answer div -->
			            </div>
			          </div>

			          <p><strong>9-12. </strong>Getting the settings right for DC bias is tricky. We are looking for a top and bottom to the waveform that start &ldquo;distorting&rdquo;
			            at the same peak voltage (+ and -). <em>Note that this part can be tricky...the adjustments are sensitive. Try to get this &quot;balanced clipping&quot; but do not
			            spend a great deal of time on it, just make sure you understand how to change the DC bias to move away from saturation or cutoff clipping.</em></p>
			          <ol type="a">
			            <li>Adjust the AC level (potentiometer) until you he waveform is clipping a bit on both the top and bottom.</li>
			            <li>Adjust &ldquo;Var +/-&ldquo; until you see a waveform where the top and bottom look similar.</li>
			            <ul>
			              <li>Figure 2-2 shows a waveform with both the top and bottom with similar amount of clipping.</li>
			              <li>The look different because saturation and cutoff react a bit differently.</li>
			            </ul>
			            <li>Now reduce the AC level until the sine wave is not clipping.</li>
			          </ol>
 				`,
 				'questionText': `
					<p><strong>Question #40: What is  the DC bias voltage required to get this &lsquo;balanced&rdquo; clipping?</strong><br>
            		  <em>Please round your answer to two decimal places.</em></p>
 				`,
 				'questionType': 'numerical',
 				'textBeforeInput': 'V<sub>B</sub>=',
 				'textAfterInput': '',
 				'options': [
 					{
						'low': 0,
						'high': 0.59,
						'correct': false,
						'feedback': `This is too low, check your circuit and measurements.`
					},
					{
						'low': 0.6,
						'high': 0.7,
						'correct': true,
						'feedback': `This is correct, move ahead!`
					},
					{
						'low': 0.71,
						'high': 0.75,
						'correct': false,
						'feedback': `This seems high but may be a good answer, as there may be some variation. Check the circuit and measurements one more time (to be sure) then move ahead!`
					},
					{
						'low': 0.76,
						'high': 10,
						'correct': false,
						'feedback': `OUCH!, something might be on fire. Seriously, this is way too high. Check the circuit and your measurements.`
					}
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `<p><strong>Question #41: What is the maximum AC level you can have before clipping?</strong></p>`,
 				'questionType': 'numerical',
 				'textBeforeInput': ``,
 				'textAfterInput': `V<sub>PK-PK</sub>`,
 				'options': [
 					{
						'low': 0,
						'high': 0.074,
						'correct': false,
						'feedback': `You should be able to get more voltage than that before clipping. Try adjusting both the AC and DC levels to see if you can get more voltage.`
					},
					{
						'low': 0.075,
						'high': 0.15,
						'correct': true,
						'feedback': `That is what you should see.`
					},
					{
						'low': 0.151,
						'high': 10,
						'correct': false,
						'feedback': `
							This seems way too high. Check your measurements and circuit.<br>
            				Subtracting the cutoff voltage from the saturation voltage will give you the rough maximum peak to peak.
						`
					}
 				],
 				'htmlAfterQuestion': `
					<p><strong>9-13. </strong>Adjust the DC bias on the base  and note how it affects the output. Make sure you can identify when it is  hitting saturation and cutoff as well as what kind of change in V<sub>B</sub> causes that.</p>
			        <h2><em>Again I highly recommend PLAYING with this! </em></h2>
			        <h2><em>Adjust both the DC bias and the AC level to see how they interact. You can also take some time to see how cutoff and saturation look different when they are &quot;hit&quot;.</em></h2>
			        <h2><em>We'll be doing more with this in Unit 10.</em></h2>
			        <h2><em>Try things, figure out how it works. The more you work with it beyond the specific lab directions, the more you will get out of the course!</em></h2>
			        <div class="image_left no_caption">
			           <img src="${this.a111RootUrl}/A112/img/unit07/labs/Camera-icon.png" alt="" width="100" height="100"/>
			        </div>
			        <h2>Remember to take a photo of your lab in progress to upload to Canvas if you are in the online section or did not finish during lab time.</h2>
 				`
 			}
 		]
 	},
 	'lab10-1': {
 		'page1': [
 			{
 				'htmlBeforeQuestion': `
					<div class="image_left">
			        	<a href="${this.a111RootUrl}/A112/img/unit10/labs/Lab10-1_parts.png" target="_blank">
			        		<img src="${this.a111RootUrl}/A112/img/unit10/labs/Lab10-1_parts.png" alt="" width="400" height="237" class="image_border"/>
			        	</a>
			        </div>
			        <p align="center">Required materials (<em>as shown in figure 1-1</em>): 2N3904  NPN transistor, resistors: 2-10KΩ, 1-1.8KΩ, 1-1.2kΩ, 1-180Ω, <br>
			            capacitors: 1-4.7µF N.P., 1-22µF N.P., and 1-1000µF
			              <br>
			              <em>Click on image for larger image.</em></p>
			        <div class="image_center">
			          <div class="image_left">
			          	<a href="${this.a111RootUrl}/A112/img/unit10/labs/transpins.png" target="_blank">
			          		<img src="${this.a111RootUrl}/A112/img/unit10/labs/transpins.png" alt="Common Emitter Schematic" width="77" height="150" class="image_border" style="margin: 0 auto;"/>
			          	</a>
			          </div>
			          <div class="image_right">
			          	<a href="${this.a111RootUrl}/A112/img/unit10/labs/potentiomters.png" target="_blank">
			          		<img src="${this.a111RootUrl}/A112/img/unit10/labs/potentiomters.png" alt="Common Emitter Schematic" width="172" height="150" class="image_border" style="margin: 0 auto;"/>
			          	</a>
			          </div>
			        </div>
			        <div class="line_break"></div>
			        <div class="image_right">
			        	<a href="${this.a111RootUrl}/A112/img/unit10/labs/Lab10-1_schem.png" target="_blank">
			        		<img src="${this.a111RootUrl}/A112/img/unit10/labs/Lab10-1_schem.png" alt="Common Emitter Schematic" width="500" height="337" class="image_border"/>
			        	</a>
			          </div>
			          <p><strong>10-1. </strong>Build the circuit shown in figure 1-4 on your breadboard. <br>
			            (<em>Click the image for a larger version.</em>)</p>
			          <ol type="a">
			            <li>Use the &ldquo;+Var&rdquo; supply set to 10V for the +10V source.</li>
			            <li>Try to layout the components on the breadboard as close to their layout on the  schematic as possible.</li>
			            <li>Transistor pin connections are shown in figure 1-2.</li>
			            <li>Connect the &quot;AWG&quot; to the CW connection of the poteniometer, connections are shown in figure 1-3.</li>
			            <li>Review <a href="${this.a111RootUrl}/A112/unit9/labs/lab_u09-2p01.html" target="new">Lab 9-2</a>, page 1 for potentiometer details. </li>
			            <li>Connect the Oscilloscope Ch1 (AC) to the output.</li>
			            <li>Connect the Oscilloscope Ch2 (AC) to the intput</li>
			            <li>Set the oscilloscope:
			                <ul>
			                  <li>Set up the AWG for:
			                    <ul>
			                      <li>1kHz</li>
			                      <li>a Sine Wave</li>
			                      <li>1V<sub>PK-PK</sub></li>
			                    </ul>
			                  </li>
			                  <li>Adjust the Oscilloscope so  that:
			                    <ul>
			                      <li>There are two full cycles of the waveform on your screen   </li>
			                      <li>Both channels' volts/div set so that the waveforms are as large as possible without  going off the screen. (<em>This will mean  that they are set differently, keep this in mind.</em>)</li>
			                      <li>Both channels are centered on the screen</li>
			                    </ul>
			                  </li>
			                </ul>
			              </li>
			              <li>Connect your digital  multimeter to measure voltage at the input.<br>
			              (<em>the input voltage needs to be too small  for an accurate reading on the oscilloscope meter</em>)</li>
			            <li>Set the potentiometer so  that you are sending 14mV<sub>RMS</sub> to the input. That should be about  right for this circuit.We  are using the potentiometer in this circuit as an easy way to adjust the level  to the input of the circuit.<br>
			            (<em>remember that the digital multimeter  gives AC voltage in VRMS</em>)</li>
			          </ol>
			        <div class="question_and_answer_full">
			            <div class="question_button">
			              <div class="question_button_header">Click here<br>
			                to see what the scope should show <br>if you have built the circuit correctly.
			              </div>
			            </div>
			            <!-- end of question_button div -->
			            <div class="revealed_answer">
			              <div class="revealed_answer_header">Answer: </div>
			              <div class="image_holder no_caption">
			              	<a href="${this.a111RootUrl}/A112/img/unit10/labs/Lab10-1_scope.png" target="_blank">
			              		<img src="${this.a111RootUrl}/A112/img/unit10/labs/Lab10-1_scope.png" alt="" width="500" class="image_center">
			              	</a>
			              </div>
			              <!-- end of revealed_answer div -->
			            </div>
			        </div>
			        <h2>You have built an amplifier!</h2>
			        <div class="line_break"></div>
			        <h1>Now test it!</h1>
			         <p><strong>Question #1: Describe the  amplifier you built with the terms from class. </strong><br>
			          (<em>hint there are at least 2 ways to  describe this amplifier</em>)</p>
			          <div class="question_and_answer_full">
			            <div class="question_button">
			              <div class="question_button_header">Click here<br>to see the correct answer.</div>
			       		</div>
			            <!-- end of question_button div -->
			          	<div class="revealed_answer">
			              <div class="revealed_answer_header">Answer: </div>
			              This circuit can be described as both a common emitter amplifier and a class A amplifier.
			            <!-- end of revealed_answer div -->
			          </div>
			        </div>
			        <p><strong>10-2. </strong>Use the &ldquo;METER&rdquo; function of your oscilloscope to measure input
			          and output voltage to find voltage gain. (V<em>gain is simply VOUT/VIN</em>)  You can either use the measurement from the oscilloscope meter for input or do  the math to convert V<sub>RMS</sub> from your digital multimeter to V<sub>PK-PK</sub>.</p>
 				`,
 				'questionText': `
					<p><strong>Question #2: What is the voltage  gain of this amplifier?</strong><br>
          			<em>Please round to a whole number, no decimal places.</em></p>
 				`,
 				'questionType': 'numerical',
 				'options': [
 					{
						'low': 0,
						'high': 109.9,
						'correct': false,
						'feedback': `
							This is too low. You should have had an output of around 4.6V<sub>PK-PK</sub>. Divide that by the 39.6mV<sub>PK-PK</sub> input and you
							should get a voltage gain of around 116. <em> Remember that you measured the input voltage with a digital multimeter that gave you
							14mV<sub>RMS</sub>, which needs converted to 39.6mV<sub>PK-PK</sub> or 0.0396V<sub>PK-PK</sub></em>.
						`
					},
					{
						'low': 110,
						'high': 114.9,
						'correct': false,
						'feedback': `
							This seems low, but may be a good answer. You should have had an output of around 4.6V<sub>PK-PK</sub>. Divide that by the 39.6mV<sub>PK-PK</sub>
							input and you should get a voltage gain of around 116. <em> Remember that you measured the input voltage with a digital multimeter that gave you
							14mV<sub>RMS</sub>, which needs converted to 39.6mV<sub>PK-PK</sub> or 0.0396V<sub>PK-PK</sub></em>.
						`
					},
					{
						'low': 115,
						'high': 119,
						'correct': true,
						'feedback': `
							This is exactly what you should see. Move ahead!
						`
					},
					{
						'low': 119.1,
						'high': 130,
						'correct': false,
						'feedback': `
							This seems high, but may be a good answer. You should have had an output of around 4.6V<sub>PK-PK</sub>. Divide that by the 39.6mV<sub>PK-PK</sub>
							input and you should get a voltage gain of around 116. <em> Remember that you measured the input voltage with a digital multimeter that gave you
							14mV<sub>RMS</sub>, which needs converted to 39.6mV<sub>PK-PK</sub> or 0.0396V<sub>PK-PK</sub></em>.
						`
					},
					{
						'low': 130.1,
						'high': 10000,
						'correct': false,
						'feedback': `
							This it too high. You should have had an output of around 4.6V<sub>PK-PK</sub>. Divide that by the 39.6mV<sub>PK-PK</sub> and you should get a
							voltage gain of around 116. <em> Remember that you measured the input voltage with a digital multimeter that gave you 14mV<sub>RMS</sub>, which
							needs converted to 39.6mV<sub>PK-PK</sub> or 0.0396V<sub>PK-PK</sub></em>.
						`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `<p><strong>Question #3: Should there  be any difference in polarity between the input and output with this amplifier?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': 'Yes',
 						'correct': true,
 						'feedback': `Yes, there should indeed be a difference.`,
 					},
 					{
 						'text': 'No',
 						'correct': false,
 						'feedback': `Hmmm, me thinks you should give the reading another go.`,
 					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
						<p><strong>10-3.</strong> Adjust the frequency of the AWG to make sure that the input matches the output. <br>
            			 (<em>This step  is simply to make certain that you are actually seeing an amplified version of the input at the output.</em>)<strong></strong><br></p>
 				`,
 				'questionText': `<p><strong>Question #4: Is there any difference in polarity between the input and output?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': 'Yes',
 						'correct': true,
 						'feedback': `Yes, there should indeed be a difference. Dance on down the line!`,
 					},
 					{
 						'text': 'No',
 						'correct': false,
 						'feedback': `You should be seeing an opposite polarity output compared to the input. Check that you have built the circuit correctly and connected the oscilloscope correctly.`,
 					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					<p><strong>10-4.</strong> Let&rsquo;s see how &ldquo;flat&rdquo; the frequency response is of your amplifier.  </p>
          			<p>(<em>&ldquo;Flat&rdquo; means that all frequencies in the  audio range have the same voltage gain.</em>)</p>
          			<p>Measure the output at the following frequencies and note the voltage for each on scrap paper:<br>
          				100Hz, 1kHz, and 10kHz </p>
 				`,
 				'questionText': `<p><strong>Question #5: Is your amplifier flat? </strong>(<em>Consider it flat, for now, if the values are  within +/-10%.</em>)</p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': 'Yes',
 						'correct': true,
 						'feedback': `Good! Scream "electronics is FUN!" as loud as you can and then move on.`,
 					},
 					{
 						'text': 'No',
 						'correct': false,
 						'feedback': `You should be seeing a relatively flat output. Make sure you are testing at the frequencies shown and that the capacitors are the correct value.`,
 					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `<p><strong>Question #6: What will  happen to the output if you remove C3?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': 'Output voltage (V<sub>PK-PK</sub>) will decrease.',
 						'correct': true,
 						'feedback': `Good! Move on.`,
 					},
 					{
 						'text': 'Output voltage (V<sub>PK-PK</sub>) will increase.',
 						'correct': false,
 						'feedback': `
 						 	No, the removal of C3 will reduce the output voltage. Without C3 creating a low reactance path for the varying current, that varying current
 						 	will flow through R4. when it flows through R4 it moves the emitter voltage in the same direct as the base. This prevents the change in base
 						 	voltage (our input) from affecting current through the transistor because the emitter is also changing.
 						 `,
 					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `<p><strong>10-4. </strong>Disconnect the C3 capacitor.</p>`,
 				'questionText': `<p><strong>Question #7: What happened when you disconnected C3?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': 'Output voltage (V<sub>PK-PK</sub>) decreased.',
 						'correct': true,
 						'feedback': `Good! Move on.`,
 					},
 					{
 						'text': 'Output voltage (V<sub>PK-PK</sub>) increased.',
 						'correct': false,
 						'feedback': `That is not what should have happened. Check your circuit and measurements.`,
 					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
				  <p><strong>10-5. </strong>Re-connect C3 and make sure  the circuit is once again working as it did.</p>
		          <div class="line_break"></div>
		          <h1>Make Music</h1>
		          <p><strong>10-6. </strong>Set up the circuit so you  can listen to music through it.</p>
		          <ol>
		            <li>Disconnect the &ldquo;AWG&rdquo; from  the circuit input and instead connect &ldquo;Aux Audio Out +&rdquo; to the input.</li>
		            <li>Connect an audio source to  the &ldquo;External Audio Input&rdquo; and play the most annoying song you can find.</li>
		            <li>Connect the output of the  circuit to &ldquo;Amp In +&rdquo;</li>
		            <li>Connect the &ldquo;Amp Spk Out&rdquo; to  &ldquo;Spk In&rdquo; (<em>both connections</em>).</li>
		            <li>Turn up the &ldquo;Amp Level&rdquo; and  listen to your creation.</li>
		          </ol>
		          <p><strong>10-7.</strong> Listen to your amplifier. Make  sure it is amplifying the signal. How does it sound?</p>
 				`,
 				'questionText': `<p><strong>Question #9: Remove C3 again, what happens?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': 'The music got softer. In fact, now I can barely hear it!',
 						'correct': true,
 						'feedback': `Great!`,
 					},
 					{
 						'text': 'The music got louder.',
 						'correct': false,
 						'feedback': `That is not what should have happened. Check your circuit.`,
 					},
 				],
 				'htmlAfterQuestion': `
					<h2><em>Try things, figure out how it works. The more you work with it beyond the specific lab directions, the more you will get out of the course!</em></h2>
           			<div class="image_left no_caption">
             			<img src="${this.a111RootUrl}/A112/img/unit07/labs/Camera-icon.png" alt="" width="100" height="100"/>
           			</div>
           			<h2>Remember to take a photo of your lab in progress to upload to Canvas if you are in the online section or did not finish during lab time.</h2>
 				`,
 			}
 		]
 	},
 	'lab10-2': {
 		'page1': [
 			{
 				'htmlBeforeQuestion': `
					<div class="image_center">
			        	<a href="${this.a111RootUrl}/A112/img/unit10/labs/Lab10-2_parts.png" target="_blank">
			        		<img src="${this.a111RootUrl}/A112/img/unit10/labs/Lab10-2_parts.png" alt="" width="570" height="200" class="image_border" style="margin: 0 auto;"/>
			        	</a>
			        </div>
			        <p>Required  materials: Required  materials: transistor: BD139 NPN, resistors: 1-22Ω, 3-1KΩ, 1-1.8KΩ, capacitors: 1-22µF  N.P. 1-47µF N.P. <em>Click on image for larger image.</em><br>
			        <h2><span class="red">!!!!!WARNING!!!!! </span><br>
			          Q1 and R3  will get HOT so you may want to unplug the power to your lab kit and let it  cool before touching.</h2>

					<div class="line_break"></div>
			        <div class="image_right">
			        	<a href="${this.a111RootUrl}/A112/img/unit10/labs/Lab10-2_schem1.png" target="_blank">
			        		<img src="${this.a111RootUrl}/A112/img/unit10/labs/Lab10-2_schem1.png" alt="Common Collector Schematic" width="500" height="359" class="image_border" style="margin: 0 auto;"/>
			        	</a>
			        </div>
			        <p><strong>10-8.</strong> Build the circuit in figure 1-2 on a breadboard. To achieve the correct value  for R1 we are using two 1kΩ resistors in parallel.</p>
			        <ol type="a">
			          <li> Use the &ldquo;Var+&rdquo; set to 5V for the +5V source.</li>
			          <li>Connect the &ldquo;AWG&rdquo; to the CW connection of the potentiometer.</li>
			          <li>Connect the circuit Output to Ch1 (AC) of the oscilloscope andCh2 to the circuit Input.</li>
			          <li>
			            <div class="image_right">
			            	<a href="${this.a111RootUrl}/A112/img/unit10/labs/potentiomters.png" target="_blank">
			            		<img src="${this.a111RootUrl}/A112/img/unit10/labs/potentiomters.png" alt="Potentiometer connections" width="150" height="129" class="image_border" style="margin: 0 auto;"/>
			            	</a>
			            </div>
			            VR1 is a simple level control to allow you to adjust the AC level from the AWG more easily than going to the menus on the  oscilloscope. Use the 10k log potentiometer (the bottom one). Connections are  shown in figure 1-3.<br>
			            You will adjust it as needed during this lab.</li>
			        </ol>
 				`,
 				'questionText': `<p><strong>Question #10: What is the value, in ohms, for R1 in the circuit?</strong>  (round to nearest whole number)</p>`,
 				'questionType': 'numerical',
 				'textBeforeInput': '',
 				'textAfterInput': 'Ω',
 				'options': [
 					{
						'low': 0,
						'high': 332,
						'correct': false,
						'feedback': `That is not correct. R1 is made of three 1kΩ resistors in parallel.`
					},
					{
						'low': 333,
						'high': 333,
						'correct': true,
						'feedback': `YES!! Three 1kΩ resistors in parallel total roughly 333Ω.`
					},
					{
						'low': 334,
						'high': 100000,
						'correct': false,
						'feedback': `That is not correct. R1 is made of three 1kΩ resistors in parallel.`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					<strong>10-9. </strong>Set the oscilloscope and  input:<strong></strong>
			        <ol type="a">
			          <li>Set up the AWG for:</li>
			          <ul type="circle">
			            <li>1.000kHz</li>
			            <li>a Sine Wave</li>
			            <li>4VPK-PK</li>
			          </ul>
			          <li>Adjust the Oscilloscope so that:</li>
			          <ul type="circle">
			            <li>There are two full cycles of the waveform on your screen</li>
			            <li>Both channels&rsquo; volts/div set so that the waveforms are as large as possible without going off the screen. (<em>This will mean that they are set differently, keep this in mind.</em>)</li>
			            <li>Both channels are centered on the screen</li>
			          </ul>
			          <li>Adjust VR1for the largest voltage possible voltage without clipping at the output.</li>
			        </ol>
			        <p><strong>NOTE! If you notice the voltage of +Var changing, that is OK. It is your lab kit protecting itself from too much current draw.</strong></p>
 				`,
 				'questionText': `<p><strong>Question #11: Do you see a  sine wave at the output of the circuit?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': 'Yes',
 						'correct': true,
 						'feedback': `Good! Your circuit seems to be working.`,
 					},
 					{
 						'text': 'No',
 						'correct': false,
 						'feedback': `Check your circuit, connections, and oscilloscope/AWG settings.`,
 					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': ``,
 				'questionText': `<p><strong>Question #12: How does the  polarity of the output relate to the input? </strong>(<em>same or opposite</em>)<strong>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': 'Same',
 						'correct': true,
 						'feedback': `Good! That is what you should see. With a common Collector circuit the output has the same polarity as the input.`,
 					},
 					{
 						'text': 'Opposite',
 						'correct': false,
 						'feedback': `That is not as it should be. With a common Collector circuit the output has the same polarity as the input. Check your circuuit and connections.`,
 					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': ``,
 				'questionText': `<strong>Question #13: What is the voltage gain of your amplifier?</strong>`,
 				'questionType': 'numerical',
 				'options': [
 					{
						'low': 0,
						'high': 0.49,
						'correct': false,
						'feedback': `
							You should be seeing more gain than this, check your measurements and calculations again. The formula for voltage gain is Vout/Vin. Make sure your input
							and output voltage measurements are being measured in the same way (V<sub>PK</sub>, V<sub>PK-PK</sub>, V<sub>RMS</sub>). Although there is some variation
							between specific transistors, one important point here is that the gain of a common collector amplifier is always less than 1. That means you do not get more voltage out than you put in!
						`
					},
					{
						'low': 0.5,
						'high': 1,
						'correct': true,
						'feedback': `
							Good, this is the value you should be seeing. Although there is some variation between specific transistors, one important point here is that the gain of a common collector
							amplifier is always less than 1. That means you do not get more voltage out than you put in!
						`
					},
					{
						'low': 1.01,
						'high': 200,
						'correct': false,
						'feedback':
							`You should not be seeing this much gain, check your measurements and calculations again. The formula for voltage gain is Vout/Vin. Make sure your input
							and output voltage measurements are being measured in the same way (V<sub>PK</sub>, V<sub>PK-PK</sub>, V<sub>RMS</sub>). Although there is some variation between
							specific transistors, one important point here is that the gain of a common collector amplifier is always less than 1. That means you do not get more voltage out than you put in!
						`
					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					<div class="question_and_answer_full">
					    <div class="question_button">
					       <div class="question_button_header">
					       		This “amplifier” has a gain of less than 1, which means it doesn’t amplify. <br>
					            So how is it of any use? (CLICK for answer)
						  </div>
		            </div>
			          <!-- end of question_button div -->
			          <div class="revealed_answer">
			            <div class="revealed_answer_header">Answer: </div>
			            Remember that, although the voltage gain of a common collector is less than 1, there is current gain. <br>We simply need a way to “measure” current gain.
			            <br>We will use a Speaker and your ears.
			            <!-- end of revealed_answer div -->
			          </div>
			        </div>
			        <div class="image_right">
			        	<a href="${this.a111RootUrl}/A112/img/unit10/labs/Lab10-2_schem2.png" target="_blank">
			        		<img src="${this.a111RootUrl}/A112/img/unit10/labs/Lab10-2_schem2.png" alt="Common Collector Schematic" width="500" height="590" class="image_border"/>
			        	</a>
			        </div>
			        <p><strong>10-10. </strong>Change the circuit you built  in to the one shown in figure 1-3. This is a very simple power amplifier  that will drive the speaker in your lab kit.
			          It is not incredibly loud but  doesn&rsquo;t sound completely dreadful. :-)</p>
			        <ul>
			          <li>The  22Ω resistor is replaced with the speaker in your lab kit.</li>
			          <li>Connect an audio player to the lab kit &ldquo;External Audio Input&rdquo;</li>
			          <li>Connect &ldquo;Aux audio Out +&rdquo; to the Input of circuit.</li>
			          <li>Adjust VR1 as needed to set your desired volume. <br>
			            (<em>it will likely need to be CRANKED UP!</em>)</li>
			          <li>A switch is added to select whether the original source is sent to the speaker or the output of your  circuit. This lets you hear any difference in volume,
			            which tells you if the circuit is amplifying. <em>Your kit has two switches;  they are the same so you can use either one.</em></li>
			          <li>The Switch: There are three connections for this SPDT switch. </li>
			          <ul>
			            <li>With switch lever up: the middle and bottom connections are shorted.</li>
			            <li>With switch lever down: the middle and top connections are shorted.</li>
			          </ul>
			        </ul>
			        <p><strong>10-11. </strong>Choose a song on your music device that will most likely annoy the majority of other people in the room and turn in on.</p>
			        <ul>
			          <li>To double check the switch positions, disconnect the wire from &ldquo;Var+&rdquo; to the  collector.</li>
			          <li>This will &ldquo;turn off&rdquo; your circuit so you can identify the switch position that is  the output.</li>
			          <li>Compare the Input and Output.</li>
			        </ul>
 				`,
 				'questionText': `<p><strong>Question #14: Does your amplifier amplify? </strong>(<em>Is the output louder than the input?</em>)</p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': 'Yes',
 						'correct': true,
 						'feedback': `
							Good! It should be louder.<br>This shows that, even though there is less voltage at the output than at the input there is more current.
							Common collector amplfiers produce current gain but not voltage gain.
 						`,
 					},
 					{
 						'text': 'No',
 						'correct': false,
 						'feedback': `
							Well...... check your circuit, and make sure you know which switch position is the output of the amplfier and which is the output of your
							music player. You can check this by disconnecting "+Var" from the collector, this will turn off audio at the output of the amplifier. <br>
							The output should be louder.<br>This shows that, even though there is less voltage at the output than at the input there is more current.
							Common collector amplfiers produce current gain but not voltage gain.
 						`,
 					},
 				],
 				'htmlAfterQuestion': `
 					<h2><span class="red">!!!!!WARNING!!!!! </span><br>
						Q1 and R3  will get HOT so you may want to unplug the power to your lab kit and let it cool before touching.</h2>
					<h2><em>Try things, figure out how it works. The more you work with it beyond the specific lab directions, the more you will get out of the course!</em></h2>
		           <div class="image_left no_caption">
		             <img src="${this.a111RootUrl}/A112/img/unit07/labs/Camera-icon.png" alt="" width="100" height="100"/>
		           </div>
		           <h2>Remember to take a photo of your lab in progress to upload to Canvas if you are in the online section or did not finish during lab time.</h2>
 				`,
 			}
 		]
 	},
 	'lab12': {
 		'page1': [
 			{
 				'htmlBeforeQuestion': `
					<div class="image_left">
			        	<a href="${this.a111RootUrl}/A112/img/unit12/labs/u12parts.png" target="new">
			        		<img src="${this.a111RootUrl}/A112/img/unit12/labs/u12parts.png" alt="" width="400" height="295" class="image_border"/>
			        	</a>
			        </div>
			        <p align="center">Required materials (<em>as shown in figure 1-1</em>): <br>
			          2-2N3904  NPN transistor, 2-2N3906 PNP transistors, <br>
			          Red LED, and Green LED<br>
			resistors: 2-1KΩ, 2-10KΩ<br>
			          capacitors: 1-47µF N.P.<br>
			          <em>Click on image for larger image.</em>
			        </p>
			        <div class="image_center">
			        	<div class='no_caption'>
			        		<a href="${this.a111RootUrl}/A112/img/unit10/labs/potentiomters.png" target="_blank">
			        			<img src="${this.a111RootUrl}/A112/img/unit10/labs/potentiomters.png" alt="" width="200" height="171" class="image_border"/>
			        		</a>
			        	</div>
			        </div>
			        <div class="line_break"></div>
			        <div class="image_right">
			       		<a href="${this.a111RootUrl}/A112/img/unit12/labs/potcircuit.png" target="_blank">
			       			<img src="${this.a111RootUrl}/A112/img/unit12/labs/potcircuit.png" alt="Common Emitter Schematic" width="195" height="400" class="image_border"/>
			       		</a>
			       	</div>
			        <p><strong>12-1.</strong> You will be using the linear potentiometer for this, it is the top potentiometer and says &quot;10k lin&quot;. <br>
			          To start you need to set your potentiometer so that it is in the exact middle of its range. </p>
			          <ul>
			            <li>Measure  between one of the ends and the &ldquo;wiper&rdquo; and adjust the potentiometer until it  is 5KΩ. </li>
			            <li>Then double check that the other end matches. </li>
			            <li>This ensures that there is  5KΩ between the wiper and each end to start. </li>
			          </ul>
			          <p><strong>12-2. </strong>Build the  circuit shown in figure 1-2 on your breadboard. <br>
			            <em><strong>The GND connection to the AWG is made within y our lab kit, you do not need to connect it!</strong></em>
			            <br>
			            (<em>Click the image for a larger version.</em>)
			          </p>
			          <ol type="a">
			            <li>Use the +15V and -15V for the voltage sources.</li>
			            <li>Try to layout the components on the breadboard as close to their layout on the  schematic as possible.</li>
			            <li>Use the 10k lin potentiometer for VR1.</li>
			            <li>Set the oscilloscope:
			              <ol>
			                <li>Set up the AWG for:
			                  <ul>
			                    <li>1Hz</li>
			                    <li>a Sine Wave</li>
			                    <li>4V<sub>PK-PK</sub></li>
			                  </ul>
			                </li>
			              <li>Adjust the Oscilloscope to:
			                <ul>
			                  <li>5.12V/div</li>
			                  <li>1S/div</li>
			                </ul>
			              </li>
			              <li>Connect Ch1 (DC) to the wiper of VR1</li>
			          	  </ol>
			          	</li>
			          </ol>
			          <p><strong>12-3.</strong> You should see a sine wave that sits on 0VDC.</p>
			        <div class="question_and_answer_full">
			            <div class="question_button">
			              <div class="question_button_header">Click here<br>
			                to see what the scope should show.</div>
			          	</div> <!-- end of question_button div -->
			            <div class="revealed_answer">
			              <div class="revealed_answer_header">Answer: </div>
			              <div class="image_holder no_caption">
			              	<a href="${this.a111RootUrl}/A112/img/unit12/labs/scopescreen.jpg" target="_blank">
			              		<img src="${this.a111RootUrl}/A112/img/unit12/labs/scopescreen.jpg" alt="" width="500" height="376" class="image_center">
			              	</a>
			              </div>
			              <!-- end of revealed_answer div -->
			            </div>
			        </div>
 				`,
 				'questionText': `<p><strong>Question #1a:</strong> What will happen when you turn the potentiometer to the right?</p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': 'The waveform will move up on the oscilloscope screen.',
 						'correct': true,
 						'feedback': `Yes, that is what should happen.`,
 					},
 					{
 						'text': 'The waveform will move down on the oscilloscope screen.',
 						'correct': false,
 						'feedback': `Hmmm, look at the circuit a bit closer.`,
 					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': '',
 				'questionText': `<p><strong>Question #1b:</strong> What will happen when you turn the potentiometer to the left?</p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': 'The waveform will move up on the oscilloscope screen.',
 						'correct': false,
 						'feedback': `Hmmm, look at the circuit a bit closer.`,
 					},
 					{
 						'text': 'The waveform will move down on the oscilloscope screen.',
 						'correct': true,
 						'feedback': `Yes, that is what should happen.`,
 					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `<p><strong>12-4. </strong>Test your answers above by adjusting the potentiometer and watching the results on the oscilloscope.</p>`,
 				'questionText': `<p><strong>Question #2: Did your results agree with your answer to question #1?</strong></p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': 'Yes',
 						'correct': true,
 						'feedback': `Great, you are doing well. Yell out "WAHOO!" and move on.`,
 					},
 					{
 						'text': 'No',
 						'correct': false,
 						'feedback': `Go back and identify where your thought process was wrong for Question #1. This is a really important step in the process so please take time for it.`,
 					},
 				]
 			},
 			{
 				'htmlBeforeQuestion': `
					<div class="line_break"></div>
			        <div class="image_right">
			        	<a href="${this.a111RootUrl}/A112/img/unit12/labs/fullcircuit.png" target="_blank">
			        		<img src="${this.a111RootUrl}/A112/img/unit12/labs/fullcircuit.png" alt="" width="378" height="500" class="image_border"/>
			        	</a>
			        </div>
			        <p><strong>ATTENTION! This circuit is complex to build! </strong></p>
			        <ul>
			          <li><strong>Build slowly</strong></li>
			          <li>Make sure the transistors are connected properly<br>
			          (<em>use photo below, both Q1-A3 and Q2-Q4 will connect to the breadboard as shown</em>)</li>
			          <li>Make sure the LEDs are connected properly<br>
			            (<em>anode and cathode connecting to correct components</em>)
			          </li>
			        </ul>
			        <p><strong>12-5. </strong>Reset the  potentiometer to the center. Use the oscilloscope to make sure it is set  properly.</p>
			        <p><strong>12-6. </strong>Study the schematic in  figure 1-3 and describe what will happen when the circuit is built and powered  up. You will start with the potentiometer centered (5KΩ from the wipe to each  side). Analyze the circuit under these conditions as well as when the potentiometer  is moved closer to each side. <br>
			          (<em>click on the schematic for a larger version</em>) <br></p>
			        <p><strong>Question #3: On some scrap paper describe how you  expect the circuit to behave: </strong></p>
			        <ol>
			          <li><strong>with the potentiometer in the middle</strong></li>
			          <li><strong>as it is  turned to the right</strong> (<em>from middle</em>)</li>
			          <li><strong>as it is  turned to the left</strong> (<em>from middle</em>)</li>
			        </ol>
			        <p><strong>12-7.</strong> Leaving what you  already built on the breadboard, add the rest of the circuit shown in figure  1-3. <br>
			        Both the 2N3904 (NPN) and 2N3906 (PNP) transistors have the same pin-outs. They  are shown on the drawing with the schematic.   An image of the LEDs is also shown. The longer lead is the anode.</p>
			        <div class="image_left">
			        	<a href="${this.a111RootUrl}/A112/img/unit12/labs/darlingtonpairbreadboard.png" target="new">
			        		<img src="${this.a111RootUrl}/A112/img/unit12/labs/darlingtonpairbreadboard.png" alt="" width="200" height="94" class="image_border"/>
			        	</a>
			        </div>
			       <p>Figure 1-4 shows a hint on how to layout the darlington pairs on the breadboard, click on it for a larger version.</p>
			       <div class='line_break'></div>
			        <p><strong>12-8.</strong> Your circuit should now be functioning.</p>
 				`,
 				'questionText': `<p><strong>Question #4:</strong> Is it doing what you described in question #3 with the  potentiometer at its center position?</p>`,
 				'questionType': 'multiple-choice',
 				'options': [
 					{
 						'text': 'Yes',
 						'correct': true,
 						'feedback': `Great, fine work on this lab!`,
 					},
 					{
 						'text': 'No',
 						'correct': false,
 						'feedback': `Go back and identify where your thought process was wrong for Question #1. This is a really important step in the process so please take time for it.`,
 					},
 				],
 				'htmlAfterQuestion': `
					<div class='video_left'>
			            <iframe src="https://cdnapisec.kaltura.com/p/1751071/sp/175107100/embedIframeJs/uiconf_id/26683571/partner_id/1751071?iframeembed=true&playerId=kaltura_player_1466453773&entry_id=1_z6kgttz1&flashvars[streamerType]=auto" width="400" height="333" allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder="0"></iframe>
			            <br>
			            <a href="http://www.kaltura.com/tiny/njn7m" target="_blank">View video in a new tab (option for full screen)</a>
			        </div> <!-- end of video_left div -->
			        <h2><em>Try things, figure out how it works. The more you work with it beyond the specific lab directions, the more you will get out of the course!</em></h2>
			        <div class="image_left no_caption">
			           <img src="${this.a111RootUrl}/A112/img/unit07/labs/Camera-icon.png" alt="" width="100" height="100"/>
			        </div>
			        <h2>Remember to take a photo of your lab in progress to upload to Canvas if you are in the online section or did not finish during lab time.</h2>
 				`
 			}
 		]
 	},
	'lab15': {
		'page1': [{
				'htmlBeforeQuestion': `
					<p>Required Materials:</p>
					<ul>
					  <li>THAT1512 Microphone Preamplifier IC</li>
					  <li>You determine what else you will need</li>
					</ul>
					<div class="line_break"></div>
					<h1>Prepare to Explore!</h1>
					<p><strong>15-1.</strong> So that you don't blow up your IC preamplifier you will need to find some information on the chip. First, choose how you should place the IC on the breadboard.</p>
				`,
				'questionText': `
					<p><strong>Question #1: Choose the image that correctly shows how to do that.</strong></p>
				`,
				'questionType': 'multiple-choice',
				'options': [
			    	{
			    		'text': `<div class="image_left no_caption"><img src="${this.a111RootUrl}/A211/img/unit15/labs/IC-1.png" width="150" height="81"></div>`,
			    		'correct': true,
			    		'feedback': `<div class="image_left no_caption"><img src="${this.a111RootUrl}/A211/img/unit14/labs/gold-star.png"></div>`,
			    		'altText': 'IC-1'
			    	},
			    	{
			    		'text': `<div class="image_left no_caption"><img src="${this.a111RootUrl}/A211/img/unit15/labs/IC-2.png" width="150" height="89"></div>`,
			    		'correct': false,
			    		'feedback': `<div class="image_left no_caption"><img src="${this.a111RootUrl}/A211/img/unit15/labs/explosion.jpg"></div>`,
			    		'altText': 'IC-2'
			    	},
			    	{
			    		'text': `<div class="image_left no_caption"><img src="${this.a111RootUrl}/A211/img/unit15/labs/IC-3.png" width="150" height="97"></div>`,
			    		'correct': false,
			    		'feedback': `<div class="image_left no_caption"><img src="${this.a111RootUrl}/A211/img/unit15/labs/explosion.jpg"></div>`,
			    		'altText': 'IC-3'
			    	},
			    ]
			},
			{
				'htmlBeforeQuestion': `
					<!--<p>TESTING</p>
					<iframe src="https://cdnapisec.kaltura.com/p/1751071/sp/175107100/embedIframeJs/uiconf_id/26683571/partner_id/1751071?iframeembed=true&playerId=kaltura_player_1466451322&entry_id=1_h0amip34&flashvars[streamerType]=auto" width="400" height="333" allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder="0"></iframe>
        			<br>
        			<a href="http://www.kaltura.com/tiny/kfemh" target="_blank">View video in a new tab (option for full screen)</a>
					<div class='image_center'>
						<img src='${this.a111RootUrl}/A111/img/unit03/labs/IndPar.png' alt="" width='400' height="192">
					</div>
					<div class='image_center'>
						<img src='${this.a111RootUrl}/A111/img/unit03/labs/IndPar.png' alt="" width='400' height="192">
					</div>
					<div class="question_and_answer_full">
			          <div class="question_button">
			            <div class="question_button_header">Click below to confirm the junction points.</div>
			          </div>
			          <div class="revealed_answer">
			            <div class="revealed_answer_header">Answer: </div>
			            <div class="image_holder no_caption">
			            	<img src="${this.a111RootUrl}/A111/img/unit03/labs/IndPar_junction.png" alt="" width="500" height="240" class="image_center">
			            	<p><strong>Junction Point A:</strong> two things connected (V source +, one side of R1)<br>
			                   <strong>Junction Point B:</strong> three things connected (one side of R1, one side of L1, one side of speaker)<br>
			 				  <strong>Junction Point C: </strong>three things connected (one side of speaker, one side of L1, V source -)
			 				</p>
			 			</div>
			          </div>
			        </div>-->
				`,
				'questionText': `
					<p><strong>Question #2: Match the pins of the IC with their function for the THAT1512.</strong></p>
			     `,
				'questionType': 'table',
				'tableClass': 'content_table',
				'questions': [
					{
						'htmlBeforeQuestion': ``,
						'questionText': `
							The Pin labeled &quot;A&quot; in figure 1-1.
						`,
						'questionType': 'single-dropdown',
						'tableProps': {
							'hasImageColumn': true,
							'imageColumnRowspan': 4,
							'imageColumnStyles': `
								width: 24%;
							`,
							'imageColumnHtml': `
								<div class="image_center">
			          				<a href="${this.a111RootUrl}/A211/img/unit15/labs/DIP8.png" target="_blank">
			          					<img src="${this.a111RootUrl}/A211/img/unit15/labs/DIP8.png" alt="DIP-8" width="180" height="180" class="image_border"/>
			          				</a>
			          			</div>
							`,
							'questionColumnStyles': `width:76%;`
						},
						'options': [
							{
								'text': `Select your answer!`,
								'correct': false,
								'feedback': `You have to select an answer.`
							},
							{
								'text': `In +`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `In -`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `+V`,
								'correct': false,
								'feedback': `Watch out for flames!`
							},
							{
								'text': `-V`,
								'correct': false,
								'feedback': `Things are gonna blow`
							},
							{
								'text': `Rg1`,
								'correct': true,
								'feedback': `Yes, you got it!`
							},
							{
								'text': `Rg2`,
								'correct': false,
								'feedback': `Really close but, no`
							},
							{
								'text': `Ref`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Output`,
								'correct': false,
								'feedback': `Way off`
							}
						]
					},
					{
						'htmlBeforeQuestion': ``,
		            	'questionText': `
							The Pin labeled &quot;B&quot; in figure 1-1..
		            	`,
		            	'questionType': 'single-dropdown',
		            	'options': [
		            		{
								'text': `Select your answer!`,
								'correct': false,
								'feedback': `You have to select an answer.`
							},
							{
								'text': `In +`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `In -`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `+V`,
								'correct': false,
								'feedback': `Watch out for flames!`
							},
							{
								'text': `-V`,
								'correct': false,
								'feedback': `Things are gonna blow`
							},
							{
								'text': `Rg1`,
								'correct': false,
								'feedback': `Really close but, no.`
							},
							{
								'text': `Rg2`,
								'correct': true,
								'feedback': `Good!`
							},
							{
								'text': `Ref`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Output`,
								'correct': false,
								'feedback': `Way off`
							}
		            	]
					},
					{
						'htmlBeforeQuestion': ``,
		            	'questionText': `
							The Pin labeled &quot;C&quot; in figure 1-1.
		            	`,
		            	'questionType': 'single-dropdown',
		            	'options': [
		            		{
								'text': `Select your answer!`,
								'correct': false,
								'feedback': `You have to select an answer.`
							},
							{
								'text': `In +`,
								'correct': false,
								'feedback': `So close, but upside down, if ya know what I mean.`
							},
							{
								'text': `In -`,
								'correct': true,
								'feedback': `Wonderful work`
							},
							{
								'text': `+V`,
								'correct': false,
								'feedback': `Watch out for flames!`
							},
							{
								'text': `-V`,
								'correct': false,
								'feedback': `Things are gonna blow`
							},
							{
								'text': `Rg1`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Rg2`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Ref`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Output`,
								'correct': false,
								'feedback': `Way off`
							}
		            	]
					},
					{
						'htmlBeforeQuestion': ``,
		            	'questionText': `
							The Pin labeled &quot;D&quot; in figure 1-1.
		            	`,
		            	'questionType': 'single-dropdown',
		            	'options': [
		            		{
								'text': `Select your answer!`,
								'correct': false,
								'feedback': `You have to select an answer.`
							},
							{
								'text': `In +`,
								'correct': false,
								'feedback': `Not even close`
							},
							{
								'text': `In -`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `+V`,
								'correct': true,
								'feedback': `Worthwhile research you did.`
							},
							{
								'text': `-V`,
								'correct': false,
								'feedback': `close but still likely to cause destruction`
							},
							{
								'text': `Rg1`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Rg2`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Ref`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Output`,
								'correct': false,
								'feedback': `Way off`
							}
		            	]
					},
					{
						'htmlBeforeQuestion': ``,
		            	'questionText': `
							The Pin labeled &quot;E&quot; in figure 1-1.
		            	`,
		            	'questionType': 'single-dropdown',
		            	'tableProps': {
							'hasImageColumn': true,
							'imageColumnRowspan': 4,
							'imageColumnStyles': `
								width: 24%;
							`,
							'imageColumnHtml': `
								<div class="image_center no_caption">
			          				<a href="${this.a111RootUrl}/A211/img/unit15/labs/DIP8.png" target="_blank">
			          					<img src="${this.a111RootUrl}/A211/img/unit15/labs/DIP8.png" alt="DIP-8" width="180" height="180" class="image_border"/>
			          				</a>
			          			</div>
							`,
						},
		            	'options': [
		            		{
								'text': `Select your answer!`,
								'correct': false,
								'feedback': `You have to select an answer.`
							},
							{
								'text': `In +`,
								'correct': true,
								'feedback': `Good!`
							},
							{
								'text': `In -`,
								'correct': false,
								'feedback': `So very close but then again not esolc.`
							},
							{
								'text': `+V`,
								'correct': false,
								'feedback': `Watch out for flames!`
							},
							{
								'text': `-V`,
								'correct': false,
								'feedback': `Things are gonna blow`
							},
							{
								'text': `Rg1`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Rg2`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Ref`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Output`,
								'correct': false,
								'feedback': `Way off`
							}
		            	]
					},
					{
						'htmlBeforeQuestion': ``,
		            	'questionText': `
							The Pin labeled &quot;F&quot; in figure 1-1.
		            	`,
		            	'questionType': 'single-dropdown',
		            	'options': [
		            		{
								'text': `Select your answer!`,
								'correct': false,
								'feedback': `You have to select an answer.`
							},
							{
								'text': `In +`,
								'correct': false,
								'feedback': `Wrong direction`
							},
							{
								'text': `In -`,
								'correct': false,
								'feedback': `Wrong direction`
							},
							{
								'text': `+V`,
								'correct': false,
								'feedback': `Watch out for flames!`
							},
							{
								'text': `-V`,
								'correct': false,
								'feedback': `Things are gonna blow`
							},
							{
								'text': `Rg1`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Rg2`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Ref`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Output`,
								'correct': true,
								'feedback': `Very nicely done.`
							}
		            	]
					},
					{
						'htmlBeforeQuestion': ``,
		            	'questionText': `
							The Pin labeled &quot;G&quot; in figure 1-1.
		            	`,
		            	'questionType': 'single-dropdown',
		            	'options': [
		            		{
								'text': `Select your answer!`,
								'correct': false,
								'feedback': `You have to select an answer.`
							},
							{
								'text': `In +`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `In -`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `+V`,
								'correct': false,
								'feedback': `It is actually the opposite of that.`
							},
							{
								'text': `-V`,
								'correct': true,
								'feedback': `Well done!`
							},
							{
								'text': `Rg1`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Rg2`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Ref`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Output`,
								'correct': false,
								'feedback': `Way off`
							}
		            	]
					},
					{
						'htmlBeforeQuestion': ``,
		            	'questionText': `
							The Pin labeled &quot;H&quot; in figure 1-1.
		            	`,
		            	'questionType': 'single-dropdown',
		            	'options': [
		            		{
								'text': `Select your answer!`,
								'correct': false,
								'feedback': `You have to select an answer.`
							},
							{
								'text': `In +`,
								'correct': false,
								'feedback': `Good!, except that it is entirely, completely, utterly WRONG!`
							},
							{
								'text': `In -`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `+V`,
								'correct': false,
								'feedback': `Watch out for flames!`
							},
							{
								'text': `-V`,
								'correct': false,
								'feedback': `Things are gonna blow`
							},
							{
								'text': `Rg1`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Rg2`,
								'correct': false,
								'feedback': `Not quite`
							},
							{
								'text': `Ref`,
								'correct': true,
								'feedback': `Right on Dude!`
							},
							{
								'text': `Output`,
								'correct': false,
								'feedback': `Your poor performance reflects on your instructor and makes him very unhappy!`
							}
		            	]
					}
				]
			},

			{
				'htmlBeforeQuestion': `
					<div class="line_break"></div>
			       <h1>You are now prepared to not explode your IC.</h1>
			       <h3><em>( I Hope )</em></h3>
			       <p>15-2. Since this is a microphone preamplifier, you need to supply microphone level signal to the input. <br>
					The AWG built into your lab kit oscilloscope gives you output voltages in VPK-PK.</p>
				`,
				'questionText': `
					<p><strong>Question #3: First, what is microphone level in dBu?<br>
						<em>Since Microphone level is a range, just choose a value that is within the range.</em></strong></p>
				`,
				'questionType': 'numerical',
				'textBeforeInput': '',
				'textAfterInput': 'dBu',
				'options': [
					{
						'low': -60,
						'high': -20,
						'correct': true,
						'feedback': `That is correct. For this experiment you will want to be in the -20dBu to -40dBu range for your testing.`
					},
					{
						'low': -120,
						'high': -60.01,
						'correct': false,
						'feedback': `That is really low`
					},
					{
						'low': -19.99,
						'high': -0.01,
						'correct': false,
						'feedback': `That is high for Mic level.`
					},
					{
						'low': 0,
						'high': 3.99,
						'correct': false,
						'feedback': `That is way too high.......are you hanging with Willie Nelson?`
					},
					{
						'low': 4,
						'high': 4,
						'correct': false,
						'feedback': `+4dBu is line level, I asked about Mic level...`
					},
					{
						'low': 4.001,
						'high': 10000,
						'correct': false,
						'feedback': `WOW, that is a mic with a VERY HOT output! In other words, NO! YOU ARE WRONG!`
					}
				]
			},
			{
				'htmlBeforeQuestion': ``,
				'questionText': `
					<p><strong>Question #4: Now, what is that in V<sub>PK-PK</sub>?<br>
					<em>Since Microphone level is a range, just choose a value that is within the range.</em></strong></p>
				`,
				'questionType': 'numerical',
				'textBeforeInput': '',
				'textAfterInput': 'V<sub>PK-PK</sub>',
				'options': [
					{
						'low': 0.0021,
						'high': 0.22,
						'correct': true,
						'feedback': `That is correct. For this experiment you will want to go closer to -0.2Vpk-pk for your testing.`
					},
					{
						'low': 0.0001,
						'high': 0.0021999,
						'correct': false,
						'feedback': `That is too low`
					},
					{
						'low': 0,
						'high': 0,
						'correct': false,
						'feedback': `ZERO! Really, ZERO?`
					},
					{
						'low': -100,
						'high': -0.001,
						'correct': false,
						'feedback': `So tell me, what is a negative Vpk-pk, exactly?`
					},
					{
						'low': 0.22001,
						'high': 1,
						'correct': false,
						'feedback': `Too big, too big`
					},
					{
						'low': 1,
						'high': 10000,
						'correct': false,
						'feedback': `That is line level or larger...check your mathematics...`
					}
				],
				'htmlAfterQuestion': `
					<div class="line_break"></div>
			        <h1>Now Build It!</h1>
			        <p><strong>15-3.</strong> On a sheet of paper draw a schematic of the circuit you will build.
						RG is a resistance that determines the gain of the preamplifier, making RG easily adjustable would be useful.</p>
			        <p><strong>15-4.</strong>Once your circuit is built and tested you will need to define a set of experiments to prove
			        	that it is working properly. You will list these tests and the results in the quiz that follows this lab page. I
			        	recommend writing them down as you go and then entering them in the quiz after you are finished.</p>
			        <p>Some of the things I recommend testing for:</p>
			        <ul>
			          <li>Gain and how the resistance between RG1 and RG2 affects the gain</li>
			          <li>Frequency response, is it flat? (<em> I wonder if there is a way to test it that we may have discussed </em>)</li>
			          <li>Does it sound OK? </li>
			        </ul>
				`
			}
		],
		'page2':
			[{
				'htmlBeforeQuestion': '',
				'questionText': `<p><strong>Question #1: What sort of filter did you just create?</strong></p>`,
				'questionType': 'dropdown',
				'options': [
					{
						'text': 'High pass',
						'correct': false,
						'feedback': `hmmm.....check again? Perhaps stand on your head?`
					},
					{
						'text': 'Low pass',
						'correct': true,
						'feedback': `Correct!, now move on.`
					},
					{
						'text': 'I hope I pass?',
						'correct': false,
						'feedback': `As do I, but answering the question correctly might be a good start to acheiving that end.`
					}
				]
			}]
	}
	};
}
