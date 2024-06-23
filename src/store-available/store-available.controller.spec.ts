import { Test, TestingModule } from '@nestjs/testing';
import { StoreAvailableController } from './store-available.controller';

describe('StoreAvailableController', () => {
  let controller: StoreAvailableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreAvailableController],
    }).compile();

    controller = module.get<StoreAvailableController>(StoreAvailableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
