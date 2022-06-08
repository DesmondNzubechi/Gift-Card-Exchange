AOS.init();

  var btn = document.getElementById('btn');
   var cancel = document.getElementById('cancel');
    var ul = document.getElementById('ul');
    var t = document.getElementById('t');
   var tt = document.getElementById('tt');
    var dd = document.getElementById('dd');
    var d = document.getElementById('d');
   var s = document.getElementById('s');
    var gg = document.getElementById('gg');
    var bttt = document.getElementById('bttt');
 var email = document.getElementById('emai');
    var name = document.getElementById('namy');

btn.onclick=function function_name(argument) {
  // body...
  if (ul.style.right = '-500px') {
    ul.style.right = '0px';
    btn.style.display = 'none';
     cancel.style.display = 'block';
  }
};
cancel.onclick=function function_name(argument) {
  // body...
  ul.style.right = '-500px';
    btn.style.display = 'block';
     cancel.style.display = 'none';
  };


  gg.onclick=function function_name(argument) {
    // body...
    if (s.style.display == 'none') {
      s.style.display = 'inline-block';
    } else {
      s.style.display = 'none';
    }
  };
  tt.onclick=function function_name(argument) {
    // body...
    if (t.style.display == 'none') {
      t.style.display = 'inline-block';
    } else {
      t.style.display = 'none';
    }
  };
  dd.onclick=function function_name(argument) {
    // body...
    if (d.style.display == 'none') {
      d.style.display = 'inline-block';
    } else {
      d.style.display = 'none';
    }
  };name.value = '';
  bttt.onclick=function() {
    if (name.value == '') {
      window.alert('Please Input Your Username And Gmail')
    } else {
      window.alert('Thank You For Subscribing')
    }
  };