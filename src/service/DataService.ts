import { CarDataSource } from "../dataSource/CarDataSource";
import { StockDataSource } from "../dataSource/StockDataSource";
import { IDataModel } from "../models/IDataModel";
import IDataService from "./IDataService";


export default class DataService implements IDataService{
    private _carDataSource = CarDataSource;
    private _stockDataSource = StockDataSource;
    public async getData(pageNumber:number):Promise<IDataModel[]>{
        const row = 25;
        const items: IDataModel[] = [];
        for (let i = 0; i < row; i++) {
          const randomDate = _randomDate(new Date(2012, 0, 1), new Date());
          const randomFileSize = _randomFileSize();
          const randomFileType = _randomFileIcon();
          let fileName = _lorem(2);
          fileName = fileName.charAt(0).toUpperCase() + fileName.slice(1).concat(`.${randomFileType.docType}`);
          let userName = _lorem(2);
          userName = userName
            .split(' ')
            .map((name: string) => name.charAt(0).toUpperCase() + name.slice(1))
            .join(' ');
          items.push({
            key: i.toString(),
            name: fileName,
            value: fileName,
            iconName: randomFileType.url,
            fileType: randomFileType.docType,
            modifiedBy: userName,
            dateModified: randomDate.dateFormatted,
            dateModifiedValue: randomDate.value,
            fileSize: randomFileSize.value,
            fileSizeRaw: randomFileSize.rawSize,
          });
        }
        return await items;
    }

   public async getCarInfo(startRow: number,rowPerPage: number):Promise<any[]>{
      let cars: any[] = [];    
      var endRow = startRow + rowPerPage;
      //check to make sure the ended row is less than data source length
      if(endRow > this._carDataSource.length)
          endRow = this._carDataSource.length;

      for (var i = startRow; i < endRow; i++) {
        cars.push(this._carDataSource[i]);
      }

      return cars;
   }

   public async getStockInfo(startRow: number,rowPerPage: number):Promise<any[]>{
      let stocks: any[] = [];    
      var endRow = startRow + rowPerPage;
      //check to make sure the ended row is less than data source length
      if(endRow > this._stockDataSource.length)
          endRow = this._stockDataSource.length;

      for (var i = startRow; i < endRow; i++) {
        stocks.push(this._stockDataSource[i]);
      }      
      return stocks;
   }
}

function _randomDate(start: Date, end: Date): { value: number; dateFormatted: string } {
    const date: Date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return {
      value: date.valueOf(),
      dateFormatted: date.toLocaleDateString(),
    };
  }
  
  const FILE_ICONS: { name: string }[] = [
    { name: 'accdb' },
    { name: 'audio' },
    { name: 'code' },
    { name: 'csv' },
    { name: 'docx' },
    { name: 'dotx' },
    { name: 'mpp' },
    { name: 'mpt' },
    { name: 'model' },
    { name: 'one' },
    { name: 'onetoc' },
    { name: 'potx' },
    { name: 'ppsx' },
    { name: 'pdf' },
    { name: 'photo' },
    { name: 'pptx' },
    { name: 'presentation' },
    { name: 'potx' },
    { name: 'pub' },
    { name: 'rtf' },
    { name: 'spreadsheet' },
    { name: 'txt' },
    { name: 'vector' },
    { name: 'vsdx' },
    { name: 'vssx' },
    { name: 'vstx' },
    { name: 'xlsx' },
    { name: 'xltx' },
    { name: 'xsn' },
  ];
  
  function _randomFileIcon(): { docType: string; url: string } {
    const docType: string = FILE_ICONS[Math.floor(Math.random() * FILE_ICONS.length)].name;
    return {
      docType,
      url: `https://static2.sharepointonline.com/files/fabric/assets/item-types/16/${docType}.svg`,
    };
  }
  
  function _randomFileSize(): { value: string; rawSize: number } {
    const fileSize: number = Math.floor(Math.random() * 100) + 30;
    return {
      value: `${fileSize} KB`,
      rawSize: fileSize,
    };
  }
  
  const LOREM_IPSUM = (
    'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut ' +
    'labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
    'eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt '
  ).split(' ');
  let loremIndex = 0;
  function _lorem(wordCount: number): string {
    const startIndex = loremIndex + wordCount > LOREM_IPSUM.length ? 0 : loremIndex;
    loremIndex = startIndex + wordCount;
    return LOREM_IPSUM.slice(startIndex, loremIndex).join(' ');
  }