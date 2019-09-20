({
	packItem : function(component, event, helper) {
		const item = component.get(v.item)
        item.Packed__c = true
        component.set(v.item, item)
        event.getSource().set('v.disabled', true);
        
	}
})