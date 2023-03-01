import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SmartRoosterApi } from 'smart-rooster';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private sm: SmartRoosterApi,
  ) {
    this.sm = new SmartRoosterApi({
      private_key: '1415af9286c394be746e6ccef0dea1e1',
      public_key: '2b0b96cf06045b24a01390905be7b7d0',
      url: 'https://preback.smartroosterbureau.us',
    });
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/get-access')
  getAccess() {
    return this.sm.getAccess();
  }

  @Get('/get-categories-specimens')
  getCategoriesSpecimens() {
    return this.sm.getCategoriesSpecimens();
  }

  @Get('/get-public')
  getPublic() {
    return this.sm.getPublic({
      category_id: 1,
      page: 1,
      perpage: 10,
    });
  }

  @Get('/get-public-details')
  getPublicDetails() {
    return this.sm.getPublicDetails({
      specimen_id: 'specimen-0001',
    });
  }

  @Get('/get-sale')
  getSale() {
    return this.sm.getSale({
      page: 1,
      perpage: 10,
    });
  }

  @Get('/get-sale-details')
  getSaleDetails() {
    return this.sm.getSaleDetails({
      specimen_id: 'b0783efd-b7b5-11ed-8ba5-166fd1880ae7',
    });
  }

  @Get('/reserved-specimen')
  reservedSpecimen() {
    return this.sm.reservedSpecimen({
      specimen_id: 'b0783efd-b7b5-11ed-8ba5-166fd1880ae7',
      status_id: 3,
    });
  }
}
