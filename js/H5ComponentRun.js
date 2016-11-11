/*running man*/

var H5ComponentRun =function ( name,cfg) {
  var component =  new H5ComponentBase( name ,cfg);

  var person = $('<div class="person">');
  var head = $('<div class="head">');
  var armone = $('<div class="part arm one">');
  var armtwo = $('<div class="part arm two">');
  var torso = $('<div class="torso">');
  var legone = $('<div class="part leg one">');
  var footone = $('<div class="part foot one">');
  var legtwo = $('<div class="part leg two">');
  var foottwo = $('<div class="part foot two">');

  person.append(head).append(armone).append(armtwo).append(torso).append(legone).append(footone)
        .append(legtwo).append(foottwo) ;
  component.append(person) ;       

  return component;
}