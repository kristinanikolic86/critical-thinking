import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpublishedArticlesComponent } from './unpublished-articles.component';

describe('UnpublishedArticlesComponent', () => {
  let component: UnpublishedArticlesComponent;
  let fixture: ComponentFixture<UnpublishedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpublishedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpublishedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
