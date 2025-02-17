import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WohnplattformComponent } from './wohnplattform.component';

describe('WohnplattformComponent', () => {
  let component: WohnplattformComponent;
  let fixture: ComponentFixture<WohnplattformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WohnplattformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WohnplattformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
