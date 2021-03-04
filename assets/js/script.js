let fagValidator = {
    handleSubmit: (event)=>{
        event.preventDefault();
        
        let send = true;

        let inputs = form.querySelectorAll('input');

        for( let i=0; i<inputs.length; i++ ) {
            let input = inputs[i];
            let check = fagValidator.checkInput(input);
            if( check != true ){
                send = false;
                console.log(check);
            }
        }

        if( send ) {
            form.submit();
        }
    },
    checkInput: (input) =>{
        let rules = input.getAttribute('data-rules');

        if( rules != null ) {
            rules = rules.split('|');

            for( let i in rules) {
                let rDetails = rules[i].split('=');

                switch( rDetails[0] ) {
                    case 'required':
                        if( input.value == '' ) {
                            return 'Este campo não pode ser vazio!';
                        }
                    break;

                    case 'min':

                    break;
                }
            } 
        }

        return true;
    },
};

let form = document.querySelector('.fagvalidator');

form.addEventListener('submit', fagValidator.handleSubmit);