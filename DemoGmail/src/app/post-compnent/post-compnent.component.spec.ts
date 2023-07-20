import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCompnentComponent } from './post-compnent.component';

describe('PostCompnentComponent', () => {
  let component: PostCompnentComponent;
  let fixture: ComponentFixture<PostCompnentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCompnentComponent]
    });
    fixture = TestBed.createComponent(PostCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
