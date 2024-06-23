import { Test, TestingModule } from '@nestjs/testing';
import { ShipmentDetailController } from './shipment-detail.controller';

describe('ShipmentDetailController', () => {
  let controller: ShipmentDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShipmentDetailController],
    }).compile();

    controller = module.get<ShipmentDetailController>(ShipmentDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
