//use this service 
// import {ResService} from '../response.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ResService {

	constructor(){}

	submitForm(response){
  		let resObj:any = JSON.parse(response["_body"]);
  		let statusCode:number = resObj.ResponseStatus.StatusCode;
      let statusMsg:any = JSON.stringify(resObj.ResponseStatus.StatusMessage).split(" ");
      let reqHeader1: string = statusMsg["6"];
      let reqHeader:string = reqHeader1.substring(0, reqHeader1.length-1);

			if (statusCode != null && reqHeader != null){
  				if (
			  			(reqHeader == "CS Admin/1.0" && 
			  			(statusCode == 27504 || statusCode == 37011 || statusCode == 27505)
			  			) || 
			  			(reqHeader == "BaaG/1.0" && 
			  			(statusCode == 20100 || statusCode == 20101 || statusCode == 20102 || statusCode == 20300)
			  			)
			  		) 
  				{
  					// Create a form to post the data to the IdP
  					var form = document.createElement("form");
  					form.setAttribute('method', "post");
  					form.setAttribute('action', resObj.Results.RequestUrl);
  					form.setAttribute('style', "display: none");

  					// Create SAMLRequest input element
  					var samlRequestInput   = document.createElement("input");
  					samlRequestInput.type  = "text";
  					samlRequestInput.name  = "SAMLRequest";
  					samlRequestInput.value = resObj.Results.SAMLRequest;

  					// Create RelayState input element
  					var relayStateInput   = document.createElement("input");
  					relayStateInput.type  = "text";
  					relayStateInput.name  = "RelayState";
  					relayStateInput.value = resObj.Results.RelayState

  					// Add elements to the form
  					form.appendChild(samlRequestInput);
  					form.appendChild(relayStateInput);

  					// Add the form to the body
  					document.getElementsByTagName('body')[0].appendChild(form);
  					form.submit();
  					return response;
    			}
  				else if ((reqHeader == "CS Admin/1.0" && statusCode == 27506) || (reqHeader == "BaaG/1.0" && statusCode == 20103)) // Session has timed out
				  {
					  window.location.href = resObj.Results.RequestUrl;
            return response;
				  } 
				return response;
  			}
	}
}