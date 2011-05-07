# About #
The Mogade Javascript API allows anyone to load leaderboards on webpages using JSONP. The `jquery.mogade.js` file is a jquery plugin aimed at helping developers easily do this.

## Using It ##
`sample.html` is a good place to start, but...

Include `jquery`, then `jquery.markdown.js` on your page:
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js"></script>
  <script type="text/javascript" src="jquery.mogade.js"></script>

create some type of container, like a `div`:

	<div id="leaderboard"></div>

On document ready, load the leaderboard:

	<script type="text/javascript">
	$(document).ready(function()
	{
	   $('#leaderboard').mogade({lid: '4d58982c1d9517207b000006'})
	});
	</script>


## Options ##

`lid` is required and is the leaderboard id

`scope` is optional. 1 for daily, 2 for weekly and 3 for overall. default to `3`

`records` is optional and is the number of records to show. default to `10`

`headers` is optional and is the text for the header columns. default `['#', 'name', 'score']`

`data` is optional and is used to manipulate the data field. It has two fields:

`data.name` is the name of the column for the data field

`data.callback` is the callback function used to render the value

### Using data ###
Here's an example of how you might use data:

	$('#leaderboard').mogade({lid: '4d58982c1d9517207b000006', data: {name: 'time', callback: function(data)
	{
		return data + 'ms';
	}}})

## Todo ##
There currently isn't any paging.
