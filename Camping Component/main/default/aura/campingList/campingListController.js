({
	clickCreateItem : function(component, event, helper) {
		let validCampingItem = true
        component.find('campingform').forEach((inputCmp) => {
            inputCmp.showHelpMessageIfInvalid()
            //if (!inputCmp.checkValidity())
            if (!inputCmp.get('v.validity').valid)
            	validCampingItem = false
        })
        if(validCampingItem) {
			const newCampingItem = component.get('v.newItem');
            const campingItems = component.get('v.items')
            campingItems.push(newCampingItem)
            component.set('v.items', campingItems)
            const resetItem = {
            	'sObjectType' : 'Camping_Item__c',
            	'Name': '',
            	'Quantity__c' : 0,
            	'Price__c' : 0,
            	'Packed__c' : false
        	}
            component.set('v.newItem', resetItem)
        }
	}
})