
/**
 * 
 * @param {type} taille1
 * @param {type} taille2
 * @param {type} tablecsv
 * @returns {Array|numberOfone.tabofnbZero}
 */
function numberOfone(taille1, taille2,tablecsv) {
        var position = [];
        var  tabofnbZero =[];           
        for(var i=1 ; i<taille1 ;i++){
                position =[]               
                for(var j=1 ;j<taille2 ;j++){
                
                        position.push(tablecsv[j][i]); 
                       
                }
                /**
                 * appel de la fonction calc etremplissage d'un nouveau tableau 
                 * contenant le nombre de zero trouve dans chaque colonne
                 */
                 tabofnbZero.push(calc(position))
  
     }   
    
     return tabofnbZero;
}

/*
 * fonction pour deterniner le nombre de zero entre le premier et dernier 1
 * 
 */
function calc(tab){
        
       var newtab=[]
       var cpt=0
       /**
        * 
        * @type Number
        * parcours du tableau tab pour generere un nouveau tableau newtab 
        * contenant la position des 1 trouves dans tab
        */
       
       for(var i=0 ; i<tab.length ;i++){
			
            if(tab[i]==1){
                newtab.push(i);

            }
			
        }
 
 
	/*
         * 
         * on compte le nombre de zero compris entre le 1er 1 et le dernier
         */		
      for(var j=newtab[0] ; j<=newtab[newtab.length-1] ; j++){
          
            if(tab[j]==0)
                    cpt++;

       }
                
       return cpt;
 }





  