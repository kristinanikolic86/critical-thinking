import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneCategoryComponent } from './page-one-category.component';

describe('PageOneCategoryComponent', () => {
  let component: PageOneCategoryComponent;
  let fixture: ComponentFixture<PageOneCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOneCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
