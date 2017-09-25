<!-- 
* Author: Bilal El Aly
* Date : 25/09/2017
* Description: Lightning App used to show
			   the roles hierarchy as a TreeTable
-->
<aura:application extends="force:slds" access="global">
    <div class="slds-page-header" role="banner">
        <div class="slds-grid">
            <div class="slds-col slds-has-flexi-truncate">
                <h1 class="slds-page-header__title slds-truncate" title="Roles Hierarchy">Roles Hierarchy</h1>
            </div>
        </div>
    </div>
    <c:NewTreeNodeComponentTest />
</aura:application>
