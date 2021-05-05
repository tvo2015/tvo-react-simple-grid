import { IColumnDefs} from 'tvo-react-simple-grid';

export interface IGridViewState {
    dataSource: any[];
    columns: IColumnDefs;
    startRow: number;
    rowPerPage: number;
    dataSourceName: string;
    scrollElement: any;
  }