(function($) 
{
   var defaults = {lid: null, scope: 3, records: 10, baseUrl: 'http://mogade.com/js/scores/', headers: ['#', 'name', 'score'], data: {callback: null, name: null}}
   $.fn.mogade = function(opts) 
   {
      var options = $.extend({}, defaults, opts); 
      return this.each(function() 
      {
         if (this.mogade) { return false; }
         var $container = $(this);
         var $table, $tbody, $error = null;
         
         var page = 1;
         var self =
         {
            initialize: function() 
            {
               $table = self.buildTable().appendTo($container).hide();
               $error = $('<div>').appendTo($container);
               $tbody = $table.find('tbody');
               self.getLeaderboard();
            },
            buildTable: function()
            {
               var $head = $('<thead>');
               for(var i = 0; i < options.headers.length; ++i)
               {
                  $head.append('<th>' + options.headers[i] + '</th>');
               }
               if (options.data && options.data.name)
               {
                  $head.append('<th>' + options.data.name + '</th>');
               }
               return $('<table class="leaderboard">').append($head).append('<tbody>');
            },
            getLeaderboard: function()
            {
               $.ajax({
                  url: self.buildUrl(),
                  type: 'GET',
                  dataType: 'jsonp',
                  success: self.gotLeaderboard,
               });
            },
            gotLeaderboard: function(data)
            {  
               if (data.scores.length == 0) { return self.noData(); }
               
               $table.show();
               $error.hide();
               $tbody.empty();
               for(var i = 0; i < data.scores.length; ++i)
               {
                  var score = data.scores[i];
                  var $row = $('<tr>').appendTo($tbody);
                  if (i % 2 == 1) { $row.addClass('odd'); }
                  $row.append(self.createCell((page - 1) * options.records + i + 1));
                  $row.append(self.createCell(score.username));
                  $row.append(self.createCell(score.points));
                  if (options.data.callback)
                  {
                     $row.append(self.createCell(options.data.callback(score.data)));
                  }
               }
            },
            createCell: function(text)
            {
               return '<td>' + text + '</td>';
            },
            buildUrl: function()
            {
               return options.baseUrl + options.lid + '/' + page + '/' + options.scope + '/' + options.records + '/';
            },
            noData: function()
            {
               $table.hide();
               $error.text('no scores are available right now').show();
            }
         };
         this.mogade = self;
         self.initialize();
      });
   };
})(jQuery);