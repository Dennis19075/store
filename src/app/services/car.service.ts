import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CarModel } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private HttpClient: HttpClient) { }

  getCars(){
    return this.HttpClient.get<CarModel[]>(environment.baseUrl);
  }

  addCar(payload: any){
    return this.HttpClient.post<CarModel>(environment.baseUrl, payload);
  }

  updateCar(payload: any){
    return this.HttpClient.put<CarModel>(environment.baseUrl+payload.id, payload);
  }

  deleteCar(carId: number){
    return this.HttpClient.delete(environment.baseUrl+carId);
  }
}
