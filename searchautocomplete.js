$(document).ready(function() {

  var myClients = new Bloodhound({
    name: 'clients',
    local: [{ name: 'Jane Doe' }, { name: 'John Doe' }, { name: 'Allen Murley' }, { name: 'Anton Bohm' }],
    // remote: 'http://example.com/clients?q=%QUERY',
    datumTokenizer: function(d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace
  });

  myClients.initialize();

  $('#searchautocomplete .typeahead')
    .typeahead(null, {
      name: 'my-clients',
      displayKey: 'name',
      source: myClients.ttAdapter(),
      templates: {
        empty: [
          '<div class="empty-message">',
          'no clients found that match your query',
          '</div>'
        ].join('\n'),
        suggestion: Handlebars.compile('<p><strong>{{name}}</strong></p>')
      }
    })
    .on('typeahead:selected', function($e, datum){
          alert("Name selected:"+datum["name"]);
        }
    );

});