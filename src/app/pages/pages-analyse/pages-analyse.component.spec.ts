import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesAnalyseComponent } from './pages-analyse.component';

describe('PagesAnalyseComponent', () => {
  let component: PagesAnalyseComponent;
  let fixture: ComponentFixture<PagesAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesAnalyseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
