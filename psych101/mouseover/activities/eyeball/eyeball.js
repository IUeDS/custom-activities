var cornea = new MouseoverPair({'title': 'Cornea', 
                                'text': '1. Goes through the <em>cornea</em>, which is a thick protective layer covering the outside of your eye.', 
                                'imageFile': 'cornea.png' 
                               });

var pupil = new MouseoverPair({'title': 'Pupil',
                              'text': '2. Passes through the <em>pupil</em>, which is a hole in the <em>iris</em>. The <em>pupil</em> constricts (becomes smaller) in bright light, and dilates (becomes larger) in dim light.',
                              'imageFile': 'pupil.png'
                              });

var iris = new MouseoverPair({'title': 'Iris',
                              'text': '3. The <em>iris</em> is the part of the eye that determines your eye\'s color (e.g., if you have brown eyes, it\'s becuase your <em>iris</em> is brown). The <em>iris</em> is a circular muscle, and when this muscle contracts, it makes the <em>pupil</em> (the hole in the middle of the <em>iris</em>) smaller.',
                              'imageFile': 'iris.png'});

var lens = new MouseoverPair({'title': 'Lens',
                              'text': '4. More muscles in the eye physically disort the shape of the <em>lens</em> through a process called accommodation, focusing the light at the back of the eye. If you\'re looking at something far away, the <em>lens</em> is thin (doesn\'t need to focus much). If you\'re looking at something nearby, the <em>lens</em> is fat (focuses strongly).',
                              'imageFile': 'lens.png'
                             });

var retina = new MouseoverPair({'title': 'Retina',
                                'text': '5. The light arrives at the back of the eye, the <em>retina</em>.',
                                'imageFile': 'retina.png'
                               });

var mouseoverPairs = [cornea, pupil, iris, lens, retina];
var text = 'text.html';

var activity = new Mouseover({'imageFile': 'eye.svg',
                              'imageWidth': '400',
                              'imageHeight': '335',
                              'instructions': 'Light energy follows a path as it is transduced into visual information: ',
                              'text': text,
                              'mouseoverPairs': mouseoverPairs});

activity.init(activity);