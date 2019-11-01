function handleSubmitButton() {
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();
        const addItemInput = $(event.currentTarget).find('#shopping-list-entry');
        console.log(addItemInput.val())
        $('.shopping-list').append(`<li>
            <span class="shopping-item">${addItemInput.val()}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
     

          $('.shopping-item-delete').on('click', function(event) {
            //event.stopPropagation();
           $(this).closest('li').remove();
         });
    
        $('.shopping-item-toggle').on('click', function(event) {
            //event.stopPropagation();
            $(this).closest('li').toggleClass('shopping-item__checked');
            //console.log('checkHere')
          });
        
  });
}


    $('.shopping-item-delete').on('click', function(event) {
        //event.stopPropagation();
       $(this).closest('li').remove();
     });

    $('.shopping-item-toggle').on('click', function(event) {
        //event.stopPropagation();
        $(this).closest('li').toggleClass('shopping-item__checked');
        //console.log('checkHere')
      });
    
      
$(handleSubmitButton)