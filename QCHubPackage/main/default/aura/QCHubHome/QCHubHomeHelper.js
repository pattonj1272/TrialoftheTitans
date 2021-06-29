({
    LoadCohorts : function(component) {

        let CohortListInit = component.get("c.RetrieveCohorts");

        CohortListInit.setCallback(this, function(response){

            let state = response.getState();

            if (state == "SUCCESS"){
                console.log(state);
                var cohorts = response.getReturnValue();
                component.set("v.CohortList", cohorts);

            }
            
            else if (state == "INCOMPLETE"){
                console.log(state);

            }

            else if (state == "ERROR"){
                console.log(state);
                var errors = response.getError();

                if (errors) {
                    if (errors[0] && errors[0].message){
                        console.log("Error message: " + errors[0].message);

                    }

                }
                else {
                    console.log("Unknown error");

                }

            }

        });

        $A.enqueueAction(CohortListInit);

    },

    LoadCohortData : function(component, selectedCohort){
        let CohortInit = component.get("c.RetrieveCohortData");
        CohortInit.setParam({cohort : selectedCohort});

        CohortInit.setCallback(this, function(response){

            let state = response.getState();

            if (state == "SUCCESS"){
                console.log(state);
                var cohortData = response.getReturnValue();
                component.set("v.SelectedCohort", cohortData);

            }
            
            else if (state == "INCOMPLETE"){
                console.log(state);

            }

            else if (state == "ERROR"){
                console.log(state);
                var errors = response.getError();

                if (errors) {
                    if (errors[0] && errors[0].message){
                        console.log("Error message: " + errors[0].message);

                    }

                }
                else {
                    console.log("Unknown error");

                }

            }

        });

        $A.enqueueAction(CohortInit);

    }
})