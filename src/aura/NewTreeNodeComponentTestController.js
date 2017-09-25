({
    doInit: function(component, event, helper) {     
        // Fetch the account list from the Apex controller  
        helper.getRoles(component);
    },
    applyCss: function(cmp,event,helper){
        var id_str = event.currentTarget.value;
        var currentElement = document.getElementById(id_str);
        var childs = document.getElementsByClassName('child-of-'+id_str);
        var toIndentElements = document.getElementsByClassName('a-parent-'+id_str);
        var currentHrefElement = document.getElementsByClassName('a-current-'+id_str);
        var expandButton = document.getElementsByClassName('button-right-'+id_str)[0];
        var collapseButton = document.getElementsByClassName('button-down-'+id_str)[0];
        var i, j;
        
        if(currentElement.classList.contains('mainParent')) {
            //It's a main parent
            //If it's collapsed then un-collapse. Else we need to collapse it.
            if(currentElement.classList.contains('collapsed')){
                currentElement.classList.remove('collapsed');
                //Expand all his childs
                for (i = 0; i < childs.length; i++) {
					childs[i].classList.remove('ui-helper-hidden');
                }
            }
            else{
                //un-collapse and hide all childs
                currentElement.classList.add('collapsed');
                var allChildsOfMainParent = document.getElementsByClassName('main-parent-'+id_str);
                for(i = 0; i < allChildsOfMainParent.length; i++){
                    allChildsOfMainParent[i].classList.add('ui-helper-hidden');
                }
            }
        }
        else if(currentElement.classList.contains('parent')){
            //He's a parent but not main parent
            //We have to show/hide all his childs
            for (i = 0; i < childs.length; i++) {
                if(childs[i].classList.contains('ui-helper-hidden')) {
                    childs[i].classList.remove('ui-helper-hidden');
                }
                else {
                    childs[i].classList.add('ui-helper-hidden');
                }
            }
        }
        
        //Add indenting
        //For each clicked element increment the childs' margin left by 20px
        var mainParent, parentMargin;
        if(!currentElement.classList.contains('mainParent') && id_str){
            parentMargin = parseInt(currentHrefElement[0].style.marginLeft, 10);
            for(i = 0; i < toIndentElements.length; i++) {
                toIndentElements[i].style.marginLeft = (parentMargin + 55) + 'px';
            }
        }
        else {
            for(i = 0; i < toIndentElements.length; i++) {
                toIndentElements[i].style.marginLeft += '35px';
            }
        }
        
        //Chevrons right and down-> hide/show
        if(expandButton.classList.contains('hideChevron')){
            expandButton.classList.remove('hideChevron');
            collapseButton.classList.add('hideChevron');
        }
        else {
            expandButton.classList.add('hideChevron');
            collapseButton.classList.remove('hideChevron');
        }
    },
})
