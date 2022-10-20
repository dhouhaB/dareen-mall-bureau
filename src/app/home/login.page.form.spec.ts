import { FormBuilder } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";

describe('LoginPageForm',()=>
{
    it ('should create login form empty',()=>
    {
    const loginPageForm= new LoginPageForm(new FormBuilder());
const form = loginPageForm.createForm();

        expect (form).not.toBeNull();
        expect(form.get('name')).not.toBeNull();
        expect (form.get('name').valid).toBeFalsy();
        expect (form.get('name').value.toEqual(""));
        expect(form.get('age')).not.toBeNull();
        expect (form.get('age').valid).toBeFalsy();
        expect (form.get('age').value.toEqual(""));
        expect(form.get('phone')).not.toBeNull();
        expect (form.get('phone').valid).toBeFalsy();
        expect (form.get('phone').value.toEqual(""));
        expect(form.get('gender')).not.toBeNull();
        expect (form.get('gender').valid).toBeFalsy();
        expect (form.get('gender').value.toEqual(""));
        expect(form.get('name1')).not.toBeNull();
        expect (form.get('name1').valid).toBeFalsy();
        expect (form.get('name1').value.toEqual(""));



    })
})