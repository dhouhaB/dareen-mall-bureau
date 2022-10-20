import { FormBuilder, FormGroup, Validators } from "@angular/forms";





export class LoginPageForm{

private formBuilder:FormBuilder;


constructor(formBuilder:FormBuilder)
{
this.formBuilder = formBuilder;
}






    createForm () :FormGroup
    {
        return  this.formBuilder.group
        ({
            name:['',[Validators.required]],
            age:['',[Validators.required]],
            phone:['',[Validators.required]],
            gender:['',[Validators.required]],
            name1:['',[Validators.required]],




        })
    }
}