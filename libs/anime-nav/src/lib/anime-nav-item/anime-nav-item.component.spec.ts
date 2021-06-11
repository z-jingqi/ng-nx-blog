import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeNavItemComponent } from './anime-nav-item.component';

describe('AnimeNavItemComponent', () => {
  let component: AnimeNavItemComponent;
  let fixture: ComponentFixture<AnimeNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeNavItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
