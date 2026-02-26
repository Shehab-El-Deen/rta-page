import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDetails, VehicleDetails, DriverDetails, ImageDetails } from '../alert.model';
import { PageModel } from '@sassoftware/vi-api/page-model';

@Component({
  selector: 'app-alert-left-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-left-panel.component.html',
  styleUrls: ['./alert-left-panel.component.css']
})
export class AlertLeftPanelComponent implements OnInit, OnChanges {
  @Input() alertDetails!: AlertDetails;
  @Input() vehicleDetails!: VehicleDetails;
  @Input() driverDetails!: DriverDetails;
  @Input() imageDetails!: ImageDetails;
  @Input() pageModel?: PageModel;

  
  company = '';
  sideNumber = '';
  plateNumber = '';
  staffId = '';
  permitId = '';
  driverName = '';
  alertTitle = 'PTSM - Driver Phoning Detected';
  timestamp = new Date().toISOString();
  driverImage = '';
  cabinImage = '';
  frontImage = '';
  backImage = '';

  ngOnInit(): void {
    this.resolveValues();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.resolveValues();
  }

  private resolveValues(): void {
    const d = (this.pageModel?.data as Record<string, any>) ?? {};

    // For each field: use pageModel value if it exists, else fall back to @Input model
    this.company     = d['company']        || this.vehicleDetails?.company   || '';
    this.sideNumber  = d['side_number']    || this.vehicleDetails?.sideNumber || '';
    this.plateNumber = d['plate_number']   || this.vehicleDetails?.plateNumber || '';
    this.staffId     = d['driver_staff_id']|| this.driverDetails?.staffId    || '';
    this.permitId    = d['driver_permit_iD']|| this.driverDetails?.permitId  || '';
    this.driverName  = d['driver_name']    || this.driverDetails?.name       || '';
    this.alertTitle  = d['alert_title']    || this.alertDetails?.title       || '';
    this.timestamp   = d['timestamp']      || this.alertDetails?.timestamp   || '';
    this.driverImage = d['driver_image']   || this.imageDetails?.driver      || '';
    this.cabinImage  = d['cabin_image']    || this.imageDetails?.cabin       || '';
    this.frontImage  = d['front_image']    || this.imageDetails?.front       || '';
    this.backImage   = d['back_image']     || this.imageDetails?.back        || '';
  }
}