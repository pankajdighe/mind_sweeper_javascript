var myMap = new Map();

			 $( document ).ready(function() {
       			 console.log( "document loaded" );

       			 var table = document.getElementById("mindsweeper_table");

       			 if (table != null) {
		        for (var i = 0; i < table.rows.length; i++) {
		            for (var j = 0; j < table.rows[i].cells.length; j++)
 					{

 					table.rows[i].cells[j].style.backgroundColor = "green"
		            table.rows[i].cells[j].onclick = function () {
		                tableText(this);
		            };
		        	}
		        }

		        for (var i = 0; i < 10; i++) {

		        	var random=Math.floor((Math.random() * 64) + 1);
		        	console.log("Random numbe is "+random);
		        	myMap.set(random, "true");


		        }


		        				
		    }
    		});

			

		    function tableText(tableCell) {
		    	tableCell.style.backgroundColor = "yellow"

				var colIndex = $("#mindsweeper_table td").index(tableCell);

				if(myMap.get(colIndex)==undefined){
					console.log("");

				}else{

					tableCell.style.backgroundColor = "red"

					console.log("Clicked On Bomb");
				}
		      //	alert(colIndex);
		    }


