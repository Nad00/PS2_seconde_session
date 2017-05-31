/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



jQuery.fn.table_tocsv = function() {
    
    var clean_text = function(text){
        text = text.replace(/"/g, '""');
        return '"'+text+'"';
    };
    var rows = [];
	$(this).each(function(){
			var table = $(this);
			var caption = $(this).find('caption').text();
			var title = [];
			/*var rows = [];*/

			$(this).find('tr').each(function(){
				var data = [];
				$(this).find('th').each(function(){
                    var text = clean_text($(this).text());
					title.push(text);
					});
				$(this).find('td').each(function(){
                    var text = clean_text($(this).text());
					data.push(text);
					});
				data = data.join(",");
				rows.push(data);
				});
			title = title.join(",");
			rows = rows.join("\n");

			
	});
    return rows;
};
