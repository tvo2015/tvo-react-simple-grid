import * as React from 'react';
import { TVoSimpleGrid } from 'tvo-react-simple-grid';
import 'tvo-react-simple-grid/dist/index.css';
import IDataService from '../../service/IDataService';
import DataService from '../../service/DataService';
import { StockColumnDefs } from '../../dataSource/StockColumnDefs';
import { IGridViewState } from './IGridViewState';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

export interface IStockInfoGridViewProps {}

export default class StockInfoGridView extends React.Component<
  IStockInfoGridViewProps,
  IGridViewState
> {
  private isLoading: boolean = false;
  private dataService: IDataService;
  constructor(props: IStockInfoGridViewProps) {
    super(props);
    this.dataService = new DataService();
    this.state = {
      dataSource: [],
      columns: StockColumnDefs,
      startRow: 0,
      rowPerPage: 30,
      dataSourceName: StockColumnDefs.dataSourceName,
      scrollElement: null
    };
  }

  private async getStockInfo() {
    let stocks: any[] = [];
    stocks = await this.dataService.getStockInfo(
      this.state.startRow,
      this.state.rowPerPage
    );
    var newStartRow = this.state.startRow + this.state.rowPerPage;
    this.setState({
      dataSource: [...this.state.dataSource, ...stocks],
      startRow: newStartRow
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  public componentDidMount() {
    this.getStockInfo();
  }

  public componentDidUpdate(
    prevProps: IStockInfoGridViewProps,
    prevState: IGridViewState
  ) {
    if (prevState.dataSourceName !== this.state.dataSourceName) {
      if (this.state.dataSourceName === 'stock') {
        this.getStockInfo();
      }
    }
  }

  private _onScroll = (dataSourceName: string) => {
    if (!this.isLoading && dataSourceName === 'stock') {
      this.isLoading = true;
      this.getStockInfo();
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
    if (contextValue === 'chart')
      return (
        <div>
          <InsertChartIcon style={iconStyle} />
          <span style={labelStyle}>{contextLabel}</span>
        </div>
      );
    else if (contextValue === 'trending') {
      return (
        <div>
          <TrendingUpIcon style={iconStyle} />
          <span style={labelStyle}>{contextLabel}</span>
        </div>
      );
    } else return <span style={{ marginLeft: 22 }}>{contextLabel}</span>;
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
