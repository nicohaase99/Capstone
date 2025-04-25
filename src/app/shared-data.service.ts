import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private clientData: any = null;
  private schedulingData: any = null;
  private data: any;

  // Methods to set and get client data
  setClientData(data: any): void {
    this.clientData = data;
  }

  getClientData(): any {
    return this.clientData;
  }

  // Methods to set and get scheduling data
  setSchedulingData(data: any): void {
    this.schedulingData = data;
  }

  getSchedulingData(): any {
    return this.schedulingData;
  }

  setData(data: any): void {
    this.data = data;
  }
  
  getData(): any {
    return this.data;
  }
}
