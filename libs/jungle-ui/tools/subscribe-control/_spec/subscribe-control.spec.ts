import { JuiSubscribeControl } from '../subscribe-conrol.service';
import SpyInstance = jest.SpyInstance;

describe('[Service: JuiSubscribeControl]', () => {
  it('Should call next() and complete() methods then service is destroying', () => {
    const service: JuiSubscribeControl = new JuiSubscribeControl();
    const spyComplete: SpyInstance = jest.spyOn(service, 'complete');
    const spyNext: SpyInstance = jest.spyOn(service, 'next');

    service.ngOnDestroy();

    expect(spyComplete).toHaveBeenCalled();
    expect(spyNext).toHaveBeenCalled();
  });
});
