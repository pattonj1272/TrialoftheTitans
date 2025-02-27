/*
    Author: Tyler Curry-Wong
    Description: Apex Controller for MultiMultipleChoicesQuestion component
*/
public with sharing class MultMultipleChoicesQController {
    @AuraEnabled
    public static Exam_Question__c fetchMultiMultiple(){
        return [SELECT Question_Text__c, Options__c, Correct_Answer_s__c 
                FROM Exam_Question__c WHERE Question_Type__c = 'Multiple Choice - multiple answers' LIMIT 1];
    }
}
