import { LightningElement, api, wire } from 'lwc';

import fetchAccounts from '@salesforce/apex/testApexController.getAccounts';

export default class TestC360Comp extends LightningElement {

    @wire(fetchAccounts) accountsList;


    @api recordId;
    @api enteredValue;

    connectedCallback(){ 
        // Logic on Load of the Component
        console.log('Connected Call Back is Loaded');
    }

    renderedCallback(){
        // Logic when something changes on the componet
        console.log('Rendered Call Back is Loaded');
    }

    searchEntered(event){
        console.log('Search Entered');
        console.log('Entered Value : '+this.enteredValue);
        this.enteredValue = event.target.value;
        console.log(event.target.value);
        console.log(event.target.label);
        console.log(event.target.type);
    }

    buttonClicked(){
        console.log('Button Clicked');
        console.log('Current Value : '+this.enteredValue);
        console.log('Fecthed Accounts'+JSON.stringify(this.accountsList));

        // Imperatively
        fetchAccounts().then(
            result => {
                
                console.log(result);
            }

        ).catch(
            error => {
                console.log(error);
            }
        );
    }


}