# About #
The Mogade Javascript API allows anyone to load leaderboards on webpages using JSONP. 

The `jquery.leaderboard.js` shows leaderboard scopes.

The `jquery.topScores.js` shows the top 3 scores for each scope for a given leaderboard.

## Using Leaderboards ##
`sample.html` is a good place to start. `styles.css` is the style used by mogade.com for the facebook leaderboards.

Include `jquery`, then `jquery.leaderboard.js` on your page:
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
  <script type="text/javascript" src="jquery.leaderboard.js"></script>

create some type of container, like a `div`:

	<div id="leaderboard"></div>

On document ready, load the leaderboard:

	<script type="text/javascript">
	$(document).ready(function()
	{
	   $('#leaderboard').leaderboard({lids: [['4d58982c1d9517207b000006', 'Top Scores']]})
	});
	</script>

## Leaderboard Options ##

`lids` An array of leaderboard ids + name, [['Id1', 'Name1'], ['Optional Id2', 'Optional Name 2'] ... ]

`scope` is optional. 1 for daily, 2 for weekly and 3 for overall. default to `3`

`records` is optional and is the number of records to show. default to `10`

`data` is optional and is used to manipulate the data field. It has two fields:

`data.name` is the name of the column for the data field

`data.callback` is the callback function used to render the value

### Using data ###
Here's an example of how you might use data:

	$('#leaderboard').leaderboard({lids: [['4d58982c1d9517207b000006', 'LB1], ['4d58982c1d9517207b000007', 'LB2']], data: {name: 'time', callback: function(data)
	{
		return data + 'ms';
	}}})

## Using Top Scores ##
The top ccores works almost identically to leaderboards. This time though you include the `jquery.topScores.js` file:

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
	  <script type="text/javascript" src="jquery.leaderboard.js"></script>

create some type of container, like a `div`:

	<div id="topscores"></div>

On document ready, load the top scores:

	<script type="text/javascript">
	$(document).ready(function()
	{
	   $('#topscores').topScores({lids: [['4d58982c1d9517207b000006', 'Top Scores']]})
	});
	</script>

## Top Scores Options ##

`lids` An array of leaderboard ids + name, [['Id1', 'Name1'], ['Optional Id2', 'Optional Name 2'] ... ]
