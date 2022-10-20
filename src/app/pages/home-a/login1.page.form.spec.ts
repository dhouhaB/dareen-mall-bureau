import { FormBuilder } from "@angular/forms";
import { LoginPageForm1 } from "./login1.page.form"

describe ('LoginPageForm',() =>
{


it('should create login form empty',()=>
{


const loginPageForm1 = new LoginPageForm1(new FormBuilder());
const form1 =loginPageForm1.createForm1();

    expect(form1).not.toBeNull();
    expect (form1.get("name1")).not.toBeNull();
    expect (form1.get('name1').value).toEqual('');
    expect (form1.get('name1').valid).toBeFalsy();
    expect (form1.get("age1")).not.toBeNull();
    expect (form1.get('age1').value).toEqual('');
    expect (form1.get('age1').valid).toBeFalsy();
    expect (form1.get("phone1")).not.toBeNull();
    expect (form1.get('phone1').value).toEqual('');
    expect (form1.get('phone1').valid).toBeFalsy();
    expect (form1.get('gender1')).not.toBeNull();
    expect (form1.get('gender1').value).toEqual('');
    expect (form1.get('gender1').valid).toBeFalsy();
})


      
   


})