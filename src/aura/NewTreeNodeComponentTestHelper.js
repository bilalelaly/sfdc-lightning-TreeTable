({
    // Fetch the accounts from the Apex controller
    getRoles: function(component) {
        var action = component.get('c.getAllRoles');
        // Set up the callback
        var self = this;
        action.setCallback(this, function(actionResult) {
            component.set('v.rolesWrappers', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    },
})
