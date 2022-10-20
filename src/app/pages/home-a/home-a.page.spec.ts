import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeAPage } from './home-a.page';
import { ReactiveFormsModule } from '@angular/forms';


describe('HomeAPage', () => {
  let component: HomeAPage;
  let fixture: ComponentFixture<HomeAPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAPage ],
      imports: [IonicModule.forRoot(),
        ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));



  it('should create form on init',()=>
  {
    component.ngOnInit();
    expect (component.form1).not.toBeUndefined();
  })
  
  









  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
