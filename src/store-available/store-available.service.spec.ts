import { Test, TestingModule } from '@nestjs/testing';
import { StoreAvailableService } from './store-available.service';

describe('StoreAvailableService', () => {
  let service: StoreAvailableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreAvailableService],
    }).compile();

    service = module.get<StoreAvailableService>(StoreAvailableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
