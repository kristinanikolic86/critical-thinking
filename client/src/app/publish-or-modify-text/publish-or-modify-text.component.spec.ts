import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishOrModifyTextComponent } from './publish-or-modify-text.component';

describe('PublishOrModifyTextComponent', () => {
  let component: PublishOrModifyTextComponent;
  let fixture: ComponentFixture<PublishOrModifyTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishOrModifyTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishOrModifyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
