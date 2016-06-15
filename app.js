var _  = require('underscore')._;

var compiled = _.template('hello: <%=name %>');
console.log(compiled({name: 'moe'}));

var template = _.template('<b><%- value %></b>');
console.log(template({value: '<script>'}));

complied = _.template("<% print('Hello ' + eptithet); %>");
console.log(complied({eptithet: 'stooge'}));
