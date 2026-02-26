import { Injectable } from '@angular/core';
import { PageModel } from '@sassoftware/vi-api/page-model';
import { AlertData } from '../alert.model';

@Injectable({
  providedIn: 'root'
})
export class RtaApiService {

  constructor() {}

  /**
   * Extracts alert data directly from pageModel.data 
   */
  getRTADataFromPageModel(pageModel: PageModel): AlertData {
    const data = pageModel.data as Record<string, any>;

    return {
      alertDetails: {
        title: data['alert_title'] || '',
        timestamp: data['timestamp'] || ''
      },
      vehicleDetails: {
        company: data['company'] || '',
        sideNumber: data['side_number'] || '',
        plateNumber: data['plate_number'] || ''
      },
      driverDetails: {
        staffId: data['driver_staff_id'] || '',
        permitId: data['driver_permit_iD'] || '',
        name: data['driver_name'] || '',
        photoUrl: data['photo_url'] || ''
      },
      imageDetails: {
        driver: data['driver_image'] || '',
        cabin: data['cabin_image'] || '',
        front: data['front_image'] || '',
        back: data['back_image'] || ''
      },
      location: {
        areaName: data['area_name'] || '',
        lat: data['latitude'] || 0,
        lng: data['longitude'] || 0
      },
      videoDetails: {
        videoUrl: data['video_url'] || '',
        activeView: 'driver'
      }
    };
  }
}