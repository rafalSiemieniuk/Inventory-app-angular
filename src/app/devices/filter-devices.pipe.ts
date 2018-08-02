import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDevices'
})
export class FilterDevicesPipe implements PipeTransform {

  transform(devices: any, search: any): any {
    if (search === undefined || search === '') return devices;

    return devices.filter((device) => {
      return device.name.toLowerCase().includes(search.toLowerCase());
    });
  }

}
