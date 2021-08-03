import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { PlaceAddressComponent } from './place-address.component';

describe('PlaceAddressComponent', () => {
  let component: PlaceAddressComponent;
  let fixture: ComponentFixture<PlaceAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceAddressComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAddressComponent);
    component = fixture.componentInstance;
    component.place = { id: '123', placeId: '', company: 'COYO', address: 'Gasstrasse 6A', zip: '22761',
      city: 'Hamburg', country: 'DE', created: '1', status: 'NEW' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
