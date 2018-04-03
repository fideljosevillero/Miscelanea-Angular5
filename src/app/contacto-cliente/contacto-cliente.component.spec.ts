import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoClienteComponent } from './contacto-cliente.component';

describe('ContactoClienteComponent', () => {
  let component: ContactoClienteComponent;
  let fixture: ComponentFixture<ContactoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
