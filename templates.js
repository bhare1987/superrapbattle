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
      '</ul>',
    '</div>',
  ].join(""),
  textItem: [
    '<div class="text-item"><i class="fa fa-chevron-right"></i><%=content%></div>',
  ].join('')
}
