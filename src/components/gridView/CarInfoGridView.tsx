import * as React from 'react';
import { TVoSimpleGrid } from 'tvo-react-simple-grid';
import { CarColumnDefs } from '../../dataSource/CarColumnDefs';
import 'tvo-react-simple-grid/dist/index.css';
import IDataService from '../../service/IDataService';
import DataService from '../../service/DataService';
import AttachmentIcon from '@material-ui/icons/Attachment';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { IGridViewState } from './IGridViewState';

export interface ICarInfoGridViewProps {}

export default class CarInfoGridView extends React.Component<
  ICarInfoGridViewProps,
  IGridViewState
> {
  private isLoading: boolean = false;
  private dataService: IDataService;
  constructor(props: ICarInfoGridViewProps) {
    super(props);
    this.dataService = new DataService();
    this.state = {
      dataSource: [],
      columns: CarColumnDefs,
      startRow: 0,
      rowPerPage: 30,
      dataSourceName: CarColumnDefs.dataSourceName,
      scrollElement: null
    };
  }
  private async getCarData() {
    let cars: any[] = [];
    cars = await this.dataService.getCarInfo(
      this.state.startRow,
      this.state.rowPerPage
    );
    var newStartRow = this.state.startRow + this.state.rowPerPage;
    this.setState({
      dataSource: [...this.state.dataSource, ...cars],
      startRow: newStartRow
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  public componentDidMount() {
    this.getCarData();
  }

  public componentDidUpdate(
    prevProps: ICarInfoGridViewProps,
    prevState: IGridViewState
  ) {
    if (prevState.dataSourceName !== this.state.dataSourceName) {
      if (this.state.dataSourceName === 'car') {
        this.getCarData();
      }
    }
  }

  private _onScroll = (dataSourceName: string) => {
    if (!this.isLoading && dataSourceName === 'car') {
      this.isLoading = true;
      this.getCarData();
    }
  };

  private _onRowItemRender = (
    dataSourceName: string,
    columnKey: string,
    fieldName: string,
    item: any
  ) => {
    return item[fieldName];
  };

  private _onRowItemClick = (
    dataSourceName: string,
    columnKey: string,
    fieldName: string,
    value: string,
    item: any
  ) => {
    console.log(value);
  };

  private _onHeaderItemRender = (
    dataSourceName: string,
    columnKey: string,
    fieldName: string,
    headerName: string
  ) => {
    return <span>{headerName}</span>;
  };

  private _onContextMenuClick = (
    dataSourceName: string,
    columnKey: string,
    fieldName: string,
    contextValue: string,
    contextLabel: string
  ) => {
    console.log(contextValue);
  };

  private _onContextMenuRender = (
    dataSourceName: string,
    columnKey: string,
    fieldName: string,
    contextValue: string,
    contextLabel: string
  ) => {
    const labelStyle = {
      marginLeft: 22 //give space for icon
    };
    const iconStyle = {
      marginTop: 6,
      fill: '#E67E22'
    };
    if (contextValue === 'item1')
      return (
        <div>
          <AttachmentIcon style={iconStyle} />
          <span style={labelStyle}>{contextLabel + ' custom'}</span>
        </div>
      );
    else if (contextValue === 'item2') {
      return (
        <div>
          <AddCircleOutlineIcon style={iconStyle} />
          <span style={labelStyle}>{contextLabel + ' custom'}</span>
        </div>
      );
    } else
      return <span style={{ marginLeft: 22 }}>{contextLabel + ' custom'}</span>;
  };

  public render() {
    return (
      <div>
        {this.state.dataSource.length > 0 && (
          <TVoSimpleGrid
            dataSource={this.state.dataSource}
            columnDefs={this.state.columns}
            onScrollToBottom={this._onScroll}
            onRowItemRender={this._onRowItemRender}
            onHeaderItemRender={this._onHeaderItemRender}
            onContextMenuClick={this._onContextMenuClick}
            onContextMenuRender={this._onContextMenuRender}
            onRowItemClick={this._onRowItemClick}
            gridHeight={'600px'}
          />
        )}
      </div>
    );
  }
}
