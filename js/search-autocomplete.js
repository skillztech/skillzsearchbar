$(function () {
  var search = [
    { value: 'www.Nwafada.com ,iphone accessories, andriod accessories, gadgets, device, bluetooth', data: 'IPA' },
    { value: 'www.amplecomputer.com, apple, macbook, Iphone', data: 'ALL' },
    { value: 'www.samanjasyndicate.com, samsung, phone, Andriod, galaxy', data: 'DZD' },
    { value: 'www.olaflexycomputer.com, apple Phone, Iphone, apple repair, installation, macbook, apple laptop', data: 'EUR' },


  ];

  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: search,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });


});