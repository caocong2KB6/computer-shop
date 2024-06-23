import { Test, TestingModule } from '@nestjs/testing';
import { ShipmentDetailService } from './shipment-detail.service'; 

describe('ShipmentDetailService', () => {
  let service: ShipmentDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShipmentDetailService],
    }).compile();

    service = module.get<ShipmentDetailService>(ShipmentDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
