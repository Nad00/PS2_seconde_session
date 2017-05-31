

function addRow(csvdata){
   
    var html = '';
     html += '<tr id="nbzero"> <td>Nombre de zéro par colonne</td>';
        for (var i = 0, len = csvdata.length; i < len; ++i) {
     
             html += '<td>' + csvdata[i] + '</td>';

        }
     html += "</tr>";
     
 return html;
 }
