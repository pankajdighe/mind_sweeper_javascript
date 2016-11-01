var myMap = new Map();

			 $( document ).ready(function() {

			 	console.log( "document loaded" );
       			
       			setGame();
    		});

			


		    function tableText(tableCell) {
		    	tableCell.style.backgroundColor = "yellow"

				var colIndex = $("#mindsweeper_table td").index(tableCell);

				if(myMap.get(colIndex)==undefined){
					console.log("");

					findNeighbours(tableCell,colIndex);

				}else{

					tableCell.style.backgroundColor = "red"

					console.log("Clicked On Bomb");
					resetGame();
				}
		      //	alert(colIndex);
		    }


		    function setGame(){


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



		    }


		    function resetGame(){

		    	window.location.reload();
		    }

		    function findNeighbours(tableCell,cell){

		    	var row_v=[-1,1,-1,-1,0,1,1,0];
		    	var col_v=[-1,1,0,1,1,0,-1,-1];

		    	console.log("row is "+parseInt(cell/8));
		    	console.log("col is "+parseInt(cell%8));

		    	var row=parseInt(cell/8);
		    	var col=parseInt(cell%8);

		    	var max_row=7;
		    	var max_col=7;
		    	var count=0;

		    	for(var i=0;i<8;i++){

		    		var temp_row=row+row_v[i];
		    		var temp_col=col+col_v[i];
		    		var elementNo=temp_row*8+temp_col;

		    		if(temp_row>=0 && temp_col>=0 && temp_row<=max_row && temp_col<=max_col){
		    		console.log("Pair ("+(row+row_v[i])+","+(col+col_v[i])+")");
		    		console.log("Reverting "+(temp_row*8+temp_col));

		    		if(myMap.get(elementNo)!=undefined){

		    			count++;
		    		}



		    	}

		    	}

		    	tableCell.innerHTML = count;



		    }


