import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageForm1
{
private formBuilder1:FormBuilder;

    constructor(formBuilder1:FormBuilder)
    {
this.formBuilder1 =formBuilder1;
    }

createForm1():FormGroup
{
    return this.formBuilder1.group
    ({
        name1:['',[Validators.required]],
        age1:['',[Validators.required]],
        phone1:['',[Validators.required]],
        gender1:['',[Validators.required]],




    })
}

}