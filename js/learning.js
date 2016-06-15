var compiled = _.template('hello: <%=name %>');
console.log(compiled({name: 'moe'}));

var template = _.template('<b><%- value %></b>');
console.log(template({value: '<script>'}));

complied = _.template("<% print('Hello ' + eptithet); %>");
console.log(complied({eptithet: 'stooge'}));

console.log(_.template("Using 'with':<%= data.answer %>", {variable: 'data'})({answer: 'no'}));

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

template = _.template("Hello {{ name }}!");
console.log(template({name: "Mustache"}));
