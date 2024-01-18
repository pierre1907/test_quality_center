import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrincipaleComponentComponent } from './page-principale-component.component';

describe('PagePrincipaleComponentComponent', () => {
  let component: PagePrincipaleComponentComponent;
  let fixture: ComponentFixture<PagePrincipaleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePrincipaleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePrincipaleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
