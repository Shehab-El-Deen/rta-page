import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDetails, VehicleDetails, DriverDetails, ImageDetails } from '../alert.model';
import { PageModel } from '@sassoftware/vi-api/page-model';
import { Control, ControlMemberApi } from "@sassoftware/vi-api/control";
import { RtaApiService } from '../../public-api';

@Component({
  selector: 'app-alert-left-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-left-panel.component.html',
  styleUrls: ['./alert-left-panel.component.css']
})
export class AlertLeftPanelComponent implements OnInit, OnChanges {
    // get readOnly(): boolean {
    //   const isReadOnly = this.pageModel?.mode === 'view';
    //   console.log('pageModel.mode:', this.pageModel?.mode, 'readOnly:', isReadOnly);
    //   return isReadOnly;
    // }
  @Input() alertDetails!: AlertDetails;
  @Input() vehicleDetails!: VehicleDetails;
  @Input() driverDetails!: DriverDetails;
  @Input() imageDetails!: ImageDetails;
  @Input() pageModel?: PageModel;
  @Input() childNode!: Control;
  @Input() controlApi?: ControlMemberApi<any, any>;


  constructor(private rtaApiService: RtaApiService)  {}
  
  company = '';
  sideNumber = '';
  plateNumber = '';
  staffId = '';
  permitId = '';
  driverName = '';
  alertTitle = '';
  timestamp = '';
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

  onCompanyChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.company = input.value;
    this.rtaApiService.company.next(this.company);
  }

  onSideNumberChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.sideNumber = input.value;
    this.rtaApiService.sideNumber.next(this.sideNumber);

  }

  onPlateNumberChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.plateNumber = input.value;
    this.rtaApiService.plateNumber.next(this.plateNumber);
  }

  onStaffIdChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.staffId = input.value;
        this.rtaApiService.staffId.next(this.staffId);
  }

  onPermitIdChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.permitId = input.value;
        this.rtaApiService.permitId.next(this.permitId);
  }

  onDriverNameChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.driverName = input.value;
        this.rtaApiService.driverName.next(this.driverName);
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
    this.alertTitle  = d['alert_details']    || this.alertDetails?.title       || '';
    this.timestamp   = d['alert_timestamp']      || this.alertDetails?.timestamp   || '';
    this.driverImage = d['driver_image']   || this.imageDetails?.driver      || '';
    this.cabinImage  = d['cabin_image']    || this.imageDetails?.cabin       || '';
    this.frontImage  = d['front_image']    || this.imageDetails?.front       || '';
    this.backImage   = d['back_image']     || this.imageDetails?.back        || '';
  }
}