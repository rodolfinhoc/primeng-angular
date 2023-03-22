import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalSkinsComponent } from './modalskins.component';


describe('ModalSkinsComponent', () => {
  let component: ModalSkinsComponent;
  let fixture: ComponentFixture<ModalSkinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSkinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
