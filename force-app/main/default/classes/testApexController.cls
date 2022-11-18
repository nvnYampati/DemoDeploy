public with sharing class testApexController {

    
    @AuraEnabled(cacheable=true) // Cachebale is required if we are wiring, for imperative calls we don't need it
    public static List<Account> getAccounts(){
        return [Select Id,Name,AnnualRevenue from Account];
    }
}