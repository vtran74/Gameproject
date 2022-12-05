[
	{
		"title": "Start",
		"tags": "",
		"body":"<<place island>>\n{{narrator}}Cray Island is a small oceanside town off the coast of New York. You, Jennifer, have come to this town to visit your brother, Jay, who moved here 5 years ago.\nGeez! That ferry ride made my stomach churn inside.\nI never understood why Jay moved here, but this place is still as stunning as last time!\n<i>Jay and I were pretty different...</i>\n<i>I preferred the city while he wanted to settle down somewhere and build his own beach house.</i>\n<i>A week ago, Jay called and invited me to visit him here in Cray Island, saying he had something to show me.</i>\nNow, let's see. Where is he...we were supposed to meet here. Maybe he's at the center?\n[[Call Jay|dial_Jay]]\n[[Look for Jay at the Town Center|center_jay]]",

		"position": {
			"x": 615,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "center_jay",
		"tags": "",
		"body":"<<place town>>\n<i>I looked for Jay at his favorite cafe in town, but couldn't find him.</i>\nHmmm...Maybe I should call him?\n[[<i>Call Jay</i>|dial_Jay]]",
		"position": {
			"x": 615,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "dial_Jay",
		"tags": "",
		"body":"<<place dialjay>>\n...\nHmm...He's not picking up...let me try again\n[[Call again|call_Jay]]",
		"position": {
			"x": 615,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "call_Jay",
		"tags": "",
		"body":"<<place calljay>>\n{{narrator}}<i>Phone picks up </i>\nJay? Are you still meeting me at the beach?\n{{narrator}}--No answer--\nHello??\n{{narrator}}You hear something crash and the call ends.\nThat's strange...I guess I'll have to meet him at his place\n[[Go to Jay's house|arrive_at_house]]",
		"position": {
			"x": 615,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "arrive_at_house",
		"tags": "",
		"body": "<<place house>>\n{{narrator}}<i>You ring the door, but no one answers.</i>\nHmm...No one is answering.\n{{narrator}}<i>You take a look at the door and notice that it is slightly opened.</i>\n{{jennifer}}<i>This is weird.</i>\n{{narrator}}<i>You open the door and slowly make your way inside hesitantly. </i>\n<<place kitchen>>\nJay?? Are you home?\n{{narrator}}<i>You stop in your tracks and look at the floor in front of you.</i>\n{{narrator}}<i>There are papers spread out everywhere.</i>\n<i>Slowly, I looked at the sight in front of me...and there in the kitchen...</i>\n<i> Jay laid lifeless on the ground with a paper in his hand...</i>\nJay? Jay?? No, this can't be!\n[[<i>Call the cops.</i>|cops_come]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},
	{
		"title": "cops_come",
		"tags": "",
		"body": "<<place house>>\n{{narrator}}~Few hours later~\n{{cop}}Miss, we finished searching the house. There doesn't seem to be anything strange lying around.\nAre you sure? There must be something!\n{{cop}}Sorry, miss. All that was left was this note inside his pocket.\n{{narrator}}The cop hands you the note.\n[[Read the note|read_note]]",
		"position": {
			"x": 615,
			"y": 540
		},
		"colorID": 0
	},
	{
		"title": "read_note",
		"tags": "",
		"body": "<<place note>>\nNo. This can't be. Jay wouldn't leave like this. He wouldn't kill himself.\n<<place House>>\n{{cop}}I'm sorry miss, but it looks like he strangled himself and there is not much showing that he was murdered. Good day.\n{{narrator}}The cop leaves while you stay still outside the house.\n{{narrator}}You look at the packet the cop has left in your hands. Inside was the piece of paper Jay was holding when you found him.\n[[Check the paper that was in his hand.|check_paper]]\n[[Walk around inside for clues|look_clues]]",
		"position": {
			"x": 856,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "check_paper",
		"tags": "",
		"body": "<<place blueprint>>\n{{narrator}}You look at the paper and see that it's a blueprint of the beach house Jay wanted to build.\n<<place flashback>>\n{{narrator}}<i>~Flashback to a younger Jay's conversation~</i>\n{{jay}}When I grow older, I want to build my own beach house! Jen, we can play in it together!\n<i>Tears ran down my face as I recalled this memory.</i>\n<<place house>>\n[[<i>Walk around the house for clues</i>|look_clues]]",
		"position": {
			"x": 374,
			"y": 890
		},
		"colorID": 0
	},
	{
		"title": "look_clues",
		"tags": "",
		"body": "<<place kitchen>>\nWho did this to you?\n{{narrator}}You look around the house, searching for clues when suddenly you hear a sound coming from the backyard.\n<<place yard>>\n<i>I took a look outside and found a ripped, yellow scarf. The same one I got for Jay's girlfriend, Sarah.</i>\nNo way...[[Call Sarah|call_sarah]]",
		"position": {
			"x": 611,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "call_sarah",
		"tags": "",
		"body": "<<place callsarah>>\n{{sarah, happy}}Hi, what's up! Did you get to the island safely? I heard from Jay that you were coming.\nSarah...Why?\n{{sarah}}Huh? Are you crying? Is something wrong?\n[[Did you do it? Did you kill him?|ask_sarah]]",
		"position": {
			"x": 606,
			"y": 1272
		},
		"colorID": 0
	},
	{
		"title": "examine_house",
		"tags": "",
		"body": "<<place kitchen>>\n{{narrator}}<i>You walk around the kitchen and notice something under the counter.</i>\nWhy would his keys be here?\n[[Examine the keys|examine_key]]",
		"position": {
			"x": 1210,
			"y": 1279
		},
		"colorID": 0
	},
	{
		"title": "examine_key",
		"tags": "",
		"body": "<<place key>>\n{{narrator}}<i>The key has an engraving that says WILSONS</i>\n{{narrator}}<i>They key also has a handwritten engraving that says:<b>Luke's</b></i>\nIsn't this Luke's grocery store? Strange....\n[[Go to Wilson's|go_wilson]]",
		"position": {
			"x": 611,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "ask_sarah",
		"tags": "",
		"body": "{{sarah, confused}} I really don't understand. Are you okay? Where are you?\nJAY! Jay is dead, Sarah. And I found the scarf I bought you here.\n{{narrator}}<i>-silence-</i>\n{{sarah, upset}} Stop playing around..April Fools was two months ago.\nI'm not joking. I found him dead today. Apparently strangled.\n{{sarah,shocked}}Jay's dead? That can't be. He called me yesterday, how can he be dead!\nStop putting on an act! I know you did it. There's marks all over the scarf.\n{{sarah, mad}}I would never! You know how much I love him!\n{{sarah, upset}}We were even planning on building his beach house together!\nYou're lying! He left a note saying that you guys broke up.\nJust leave him alone if you guys broke up! Why would you kill him!\n{{sarah, mad}} What are you saying...We never broke up.\nWhat? His note says that you left him because he was broke.\n{{sarah, upset}}I don't know what note you are talking about, but I would never leave him for such a shitty reason.\nThen, why did I find your scarf laying around? It seems ripped as well.\n{{sarah, confused}} What? If you're talking about my yellow scarf, I gave that to Luke last week.\n{{sarah}} He wanted to borrow more money to gamble.\n{{sarah}} I had to give it to him because he wouldn't stop pressuring Jay to give him money.\n{{jenn}} Luke gambles?\n{{sarah}}Yeah...It's hard for Jay to say no.\n{{sarah}}For the past couple of years, Jay's been lending him money.\n{{sarah}} Although, Jay told me yesterday that he firmly told Luke he won't give him any more money.\n{{jenn}} <i> This is strange. I need to call Luke.</i>\n[[{{jenn}}Call Luke|call_luke]]",
		"position": {
			"x": 611,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "call_luke",
		"tags": "",
		"body": "<<place callluke>>\n{{Luke, happy}}Hello? Jen?\nHey Luke! How are you?\n{{Luke}} The usual - just watching over the store.\nOh...Is it busy?\n{{luke}}Yeah, pretty busy! I'll have to call you back later.\nI see...\n{{narrator}}<i>Call ends</i>\n[[Look around the house for clues.|examine_house]]",
		"position": {
			"x": 611,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "go_wilson",
		"tags": "",
		"body": "<<place town>>\nThe store's closed...with no annoucement on the door either.\n[[Go back to Jay's house|back_house]]",
		"position": {
			"x": 611,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "back_house",
		"tags": "",
		"body": "<<place House>>\n{{narrator}}<i>You take a look again at Jay's suicide note.</i>\n<<place note>>\nNow that I look at it again...This isn't Jay's handwriting.\nThis handwriting looks familiar though...\n<i>I looked at the handwriting on the tag from Luke's keys and place it next to the note.<i>\n<<place noteKey>>\nThe handwriting is the same! Interesting...\n<<place House>>\nDecide your final choice.\n[[{{jennifer}}Choose Luke as the suspect and call police.|inform_police]]\n[[{{jennifer}}Consider it a suicide|dead_end]]",
		"position": {
			"x": 611,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "dead_end",
		"tags": "",
		"body": "<<place screen>>\nYou lost! The one who killed Jay was Luke!!\n[[End game|end]]",
		"position": {
			"x": 611,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "inform_police",
		"tags": "",
		"body": "<<place police>>\nHello? I'd like to submit evidence for a suspected murder and suspect..\n[[Give the police the evidence|end]]\n[[Change mind...It's a suicide|dead_end]]",
		"position": {
			"x": 611,
			"y": 887
		},
		"colorID": 0
	}
]
