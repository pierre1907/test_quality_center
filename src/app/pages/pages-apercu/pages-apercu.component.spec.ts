import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesApercuComponent } from './pages-apercu.component';

describe('PagesApercuComponent', () => {
  let component: PagesApercuComponent;
  let fixture: ComponentFixture<PagesApercuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesApercuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesApercuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
