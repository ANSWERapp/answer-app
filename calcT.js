
// function that calculates the relative yield

function calcT(T,Var) {
	
	try{

	if (Var[14] < T){
		
		res=1.0e04;
		
	}else{

		diff = Var[14]-T; 														// I-T
		thetam = diff/Var[5]; 													// (I-T)/Ks
		ECe=Var[13]*Var[14]*(Var[0]+(Var[1]-Var[0])*Math.pow(thetam,(1/Var[6])));
		denom=diff*Var[1]*Var[8]; 												//(I-T)*Thetas*EC50
		term1=T*(1 + Math.pow((ECe/denom),Var[9])); 							// LHS
		Tw=(Var[11] - Var[4]*Math.pow(thetam,(-1/Var[3])))*diff/Var[10];		// RHS

		if (Tw > Var[7]){
			term2=Var[7];
		}else{
			term2=Tw;
		}
		
		// LHS - RHS
		res = term1 - term2;
	}
	
	return res;
    }catch(e){
		if(e){
			var t=1;
		}
	}          
}