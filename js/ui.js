$(document).ready(function () {
  $('.sidenav').sidenav()
  $('.carousel').carousel()
  $('.scrollspy').scrollSpy()
  $('.carousel').carousel({
    dist: 0,
    padding: 0,
    fullWidth: true,
    indicators: true,
    duration: 100
  })
  autoplay()
  function autoplay () {
    $('.carousel').carousel('next')
    setTimeout(autoplay, 4500)
  }
})
$.ajax({
  url: 'https://api.covid19api.com/summary',
  type: 'GET',
  dataType: 'JSON',
  success: function (data) {
    console.log(data)
    console.log(data.Global)
    $.each(data.Global, function (key, value) {
      console.log(key + ':' + value)
      $('#global-wise').append('<td>' + value + '</td>')
    })
  }
})
function myFunction () {
  var input, filter, table, tr, td, i, txtValue
  input = document.getElementById('myInput')
  filter = input.value.toUpperCase()
  table = document.getElementById('country-wise')
  tr = table.getElementsByTagName('tr')
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[1]
    if (td) {
      txtValue = td.textContent || td.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = ''
      } else {
        tr[i].style.display = 'none'
      }
    }
  }
}
$.ajax({
  url: 'https://api.covid19api.com/summary',
  type: 'GET',
  dataType: 'JSON',
  success: function (data) {
    console.log(data)
    console.log(data.Countries)
    data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
    var sno = 1
    $.each(data.Countries, function (key, value) {
      console.log(key + ':' + value)

      $('#country-wise').append(
        '<tr>' +
          '<td>' +
          sno +
          '</td>' +
          '<td>' +
          value.Country +
          '</td>' +
          '<td>' +
          value.NewConfirmed +
          '</td>' +
          '<td>' +
          value.NewDeaths +
          '</td>' +
          '<td>' +
          value.NewRecovered +
          '</td>' +
          '<td>' +
          value.TotalConfirmed +
          '</td>' +
          '<td>' +
          value.TotalDeaths +
          '</td>' +
          '<td>' +
          value.TotalRecovered +
          '</td>' +
          '</tr>'
      )
      sno++
    })
  }
})
/*
$.ajax({
    url: "https://api.covid19api.com/",
    type: "GET",
    dataType: 'JSON',
    success: function (data) {
        console.log(data);
        console.log(data.allRoute);
        $.each(data.allRoute, function (key, value) {
            console.log(key + ":" + value);
            $("#global-wise").append("<td>" + value + "</td>")
        });
    }
});

$.ajax({
    url: "https://api.covid19api.com/",
    type: "GET",
    dataType: 'JSON',
    success: function (data) {
        console.log(data);
        console.log(data.countriesRoute);
        var sno = 1;
        $.each(data.countriesRoute, function (key, value) {
            console.log(key + ":" + value);
            $("#country-wise").append("<tr>" +
                "<td>" + sno + "</td>" +
                "<td>" + value.Country + "</td>" +
                "<td>" + value.NewConfirmed + "</td>" +
                "<td>" + value.NewDeaths + "</td>" +
                "<td>" + value.NewRecovered + "</td>" +
                "<td>" + value.TotalConfirmed + "</td>" +
                "<td>" + value.TotalDeaths + "</td>" +
                "<td>" + value.TotalRecovered + "</td>" +
                "</tr>");
            sno++;
        });
    }
});
*/
