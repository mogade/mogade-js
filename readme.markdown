# About #
The Mogade Javascript API allows anyone to load leaderboards on webpages using JSONP. 

Since mogade.com uses this libraries itself, and to avoid unnecessarily duplicating the code, you should grab these files from the core mogade-server project at: <https://github.com/mogade/mogade-server/tree/master/public/js/v1>

The `jquery.leaderboard.js` file is a jquery plugin aimed at helping developers easily do this.

## Using It ##
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
	   $('#leaderboard').mogade({lids: [['4d58982c1d9517207b000006', 'Top Scores']]})
	});
	</script>


## Options ##

`lids` An array of leaderboard ids + name, [['Id1', 'Name1'], ['Optional Id2', 'Optional Name 2'] ... ]

`scope` is optional. 1 for daily, 2 for weekly and 3 for overall. default to `3`

`records` is optional and is the number of records to show. default to `10`

`data` is optional and is used to manipulate the data field. It has two fields:

`data.name` is the name of the column for the data field

`data.callback` is the callback function used to render the value

### Using data ###
Here's an example of how you might use data:

	$('#leaderboard').mogade({lids: [['4d58982c1d9517207b000006', 'LB1], ['4d58982c1d9517207b000007', 'LB2']], data: {name: 'time', callback: function(data)
	{
		return data + 'ms';
	}}})

