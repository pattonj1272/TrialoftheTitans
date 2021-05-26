({   
    hSetTitans : function(component, event, helper) {
        let titanList = component.get("c.getTitans");
        titanList.setCallback(this, function(response){
            if(response.getState() == "SUCCESS"){
                component.set("v.TitanList", response.getReturnValue());
                console.log("Returned Titans: ")
                console.log(response.getReturnValue())
            }
        })
        $A.enqueueAction(titanList);
    },

//	hShowTitan# : button method that fires event, chooses which Titan to display info for

    hShowTitan1 : function(component, event, helper) {
        var TitanPageLandingEvent = component.getEvent("TitanPageLandingEvent");
        TitanPageLandingEvent.setParams({
            "activeTitan" : "titanDiv1",
        });
        TitanPageLandingEvent.fire();
        console.log("TitanPageLandingEvent fired: titanDiv1")
    },
    
    hShowTitan2 : function(component, event, helper) {
        var TitanPageLandingEvent = component.getEvent("TitanPageLandingEvent");
        TitanPageLandingEvent.setParams({
            "activeTitan" : "titanDiv2",
        });
        TitanPageLandingEvent.fire();
        console.log("TitanPageLandingEvent fired: titanDiv2")
    },
    
    hShowTitan3 : function(component, event, helper) {
        var TitanPageLandingEvent = component.getEvent("TitanPageLandingEvent");
        TitanPageLandingEvent.setParams({
            "activeTitan" : "titanDiv3",
        });
        TitanPageLandingEvent.fire();
        console.log("TitanPageLandingEvent fired: titanDiv3")
    },
    
    hShowTitan4 : function(component, event, helper) {
        var TitanPageLandingEvent = component.getEvent("TitanPageLandingEvent");
        TitanPageLandingEvent.setParams({
            "activeTitan" : "titanDiv4",
        });
        TitanPageLandingEvent.fire();
        console.log("TitanPageLandingEvent fired: titanDiv4")
    },
    
//	hNavigate : uses switch statement to show the Titan according to hShowTitan# method
    
    hNavigate : function(component, event, helper) {
        console.log("hNavigate function");
        var divList = component.find("detailsDiv"), index = event.target.closest("[data-index]").dataset.index;    
        divList = divList.length? divList: [divList];
        $A.util.removeClass(infos[index], 'toggle-hide');
        console.log(divList);
        
//          [ component.find("titanDiv1"),
//            component.find("titanDiv2"),
//            component.find("titanDiv3"),
//            component.find("titanDiv4") ];

/*        
        for(let i=0; i<divList.length; i++){
            let displayDiv = divList[i];
            $A.util.addClass(displayDiv,"toggle-hide");
        };
        
        var navTo = event.getParam("activeTitan");
        console.log("Event Received");
        
        switch (navTo){
            case "titanDiv1":
                var displayDiv = component.find("titanDiv1");
                $A.util.removeClass(displayDiv,"toggle-hide");
                break;
            case "titanDiv2":
                var displayDiv = component.find("titanDiv2");
                $A.util.removeClass(displayDiv,"toggle-hide");
                break;
            case "titanDiv3":
                var displayDiv = component.find("titanDiv3");
                $A.util.removeClass(displayDiv,"toggle-hide");
                break;
            case "titanDiv4":
                var displayDiv = component.find("titanDiv4");
                $A.util.removeClass(displayDiv,"toggle-hide");
                break;
        } */
    }
    
})