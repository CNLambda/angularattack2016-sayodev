import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angularattack2016SayodevAppComponent } from '../app/angularattack2016-sayodev.component';

beforeEachProviders(() => [Angularattack2016SayodevAppComponent]);

describe('App: Angularattack2016Sayodev', () => {
  it('should create the app',
      inject([Angularattack2016SayodevAppComponent], (app: Angularattack2016SayodevAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angularattack2016-sayodev works!\'',
      inject([Angularattack2016SayodevAppComponent], (app: Angularattack2016SayodevAppComponent) => {
    expect(app.title).toEqual('angularattack2016-sayodev works!');
  }));
});
