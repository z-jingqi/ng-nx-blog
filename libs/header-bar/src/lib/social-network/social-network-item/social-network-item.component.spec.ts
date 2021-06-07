import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkItemComponent } from './social-network-item.component';

describe('SocialNetworkItemComponent', () => {
  let component: SocialNetworkItemComponent;
  let fixture: ComponentFixture<SocialNetworkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialNetworkItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
