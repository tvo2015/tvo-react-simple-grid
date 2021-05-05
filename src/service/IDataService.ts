import { IDataModel } from "../models/IDataModel";


export default interface IDataService{

   getData(pageNumber:number):Promise<IDataModel[]>;
   getCarInfo(startRow: number,rowPerPage: number):Promise<any[]>;
   getStockInfo(startRow: number,rowPerPage: number):Promise<any[]>;
}