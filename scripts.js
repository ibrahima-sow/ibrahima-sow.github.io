
const menus =
"-------MENU SENMONEY-------- \n 1:Solde de mon compte \n 2:Transfert d'argent \n 3:Paiement de facture \n 4:Options";
var soldeCompte = 10000;
var currentPhone = 0;
var tabNumeros=[772440010,772440011,772440012,772440013,772440014];
var tabComptes=[1000,2000,3000,4000,5000];
var tabCodes=[10,11,12,13,14];

function menu(cphone) {
let option;
option = parseInt(prompt(menus, "1"));
let msg = `Le solde de votre compte est ${soldeCompte} \n Voulez-vous retourner au menu ?`;
      
afficherSolde(msg);
 /*
if(valeur==1){
    return afficherSolde();
}
*/
}
function afficherSolde(message) {
    if (confirm(message)) {
      menu(currentPhone);
    }
  }



 function saisinumber() {
	var numero=prompt("entrer votre numero s'il vous plait");
	for(i=0;i<tabNumeros.length;i++){
		if(numero==tabNumeros[i]){
			let option;
			option = parseInt(prompt(menus,""));
			if(option==1){
				var codeSecret=prompt("Entrez votre code secret :");
				if(codeSecret==tabCodes[i]){
					var valide=prompt("voici le solde de compte:"+tabComptes[i]);
						}
			}
			if(option==2){
				function menu1(){
					transfertArgent();
				}
				menu1();
		
				}
			if(option==4){
				var menu2=prompt("-------Veullez choisir:-------- \n 1:Solde de mes comptes \n 2:Cinq dernieres transactions \n 3:Modification du code secret\n 4:Consultation Status \n --- \n 9:Acceuil \n 0:préc.");
			}
								
			
		}
		
	}
}

function transfertArgent(){
	var NbTransfert=prompt("Entrer le numero du Bénéficiare ");
	for(i=0;i<tabNumeros.length;i++){
	if(NbTransfert==tabNumeros[i]){
		var montant=prompt("veuillez entrer le montant de tranfert plus 200f de frais");
		if(montant<=tabComptes[i]){
			var validation=prompt(" Entrer votre code secret pour valider le transfert");
			if(validation!=tabCodes[i]){
				let option;
				option = parseInt(prompt(menus,""));
	
			
			}
		}
	}
	}
}
		





 