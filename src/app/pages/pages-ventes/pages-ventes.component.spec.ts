import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesVentesComponent } from './pages-ventes.component';

describe('PagesVentesComponent', () => {
  let component: PagesVentesComponent;
  let fixture: ComponentFixture<PagesVentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesVentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
