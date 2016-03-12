var templates = {
  character: [
    '<div class="character" data-character="<%=name%>">',
      '<h2><%=name%></h2>',
      '<div>',
        '<img src="img/<%=img%>">',
      '</div>',
      '<ul>',
        '<li><strong>Hometown:</strong> <%=hometown%></li>',
        '<li><strong>Fire:</strong> <%=fire%></li>',
        '<li><strong>Flow:</strong> <%=flow%></li>',
        '<li><strong>Fortitude:</strong> <%=fortitude%></li>',
        '<li><strong>Rally:</strong> <%=rally%></li>',
      '</ul>',
    '</div>',
  ].join(""),
  textItem: [
    '<div class="text-item"><i class="fa fa-chevron-right"></i><%=content%></div>',
  ].join(''),
  gameButtons: [
    '<div class="gameButtons">',
      '<button name="spit" data-player="<%=player%>">Spit that Fire</button>',
      '<button name="rally" data-player="<%=player%>">Rally!</button>',
    '</div>'
  ].join("")
}
