import { ValidateNumericIdPipe } from './validate-id.interceptor';

describe('ValidateIdInterceptor', () => {
  it('should be defined', () => {
    expect(new ValidateNumericIdPipe()).toBeDefined();
  });
});
