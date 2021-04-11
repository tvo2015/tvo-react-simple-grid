import * as React from 'react';
import {IColumnDefs,TVoSimpleGrid} from 'tvo-react-simple-grid'
import 'tvo-react-simple-grid/dist/index.css'
import { ColumnDefinition } from '../data/ColumnDefinition';
import { PersonalInfo } from '../data/PersonalInfo';

export interface ITVoGridViewProps {
}

export interface ITVoGridViewState {
  dataSource: any[];
  columns: IColumnDefs;
  startRow: number;
  rowPerPage:number;
  dataSourceName: string;
}

export default class TVoGridView extends React.Component<ITVoGridViewProps, ITVoGridViewState> {
  private _dataSource = PersonalInfo;
  private isLoading: boolean =false;
  constructor(props: ITVoGridViewProps) {
    super(props);

    this.state = {
      dataSource: [],
      columns: ColumnDefinition,
      startRow: 0,
      rowPerPage:25,
      dataSourceName: ColumnDefinition.dataSourceName
    }
  }

  private getData(){
    let personalInfo: any[] = [];
    if(this.state.dataSource.length === this._dataSource.length)
         return;

    var endRow = this.state.startRow + this.state.rowPerPage;
    for(var i=this.state.startRow;i < endRow;i++){
        personalInfo.push(this._dataSource[i]);
    }
    var newStartRow = this.state.startRow + this.state.rowPerPage;
    this.setState({dataSource:[...this.state.dataSource,...personalInfo],startRow: newStartRow});  
}

  public componentDidMount(){
      this.getData();
  }
  
  public componentDidUpdate(prevProps:ITVoGridViewProps,prevState: ITVoGridViewState){
      if(this.state.dataSource.length > prevState.dataSource.length )
      {
          this.isLoading = false; //set loading to false after the component rendered
      }
  }
  
  private _onScroll = (dataSourceName: string) => {
     if(!this.isLoading)
     this.getData();
  };

  private _onRowItemRender = (
    dataSourceName: string,
    columnKey: string,
    fieldName: string,
    item: any
  ) => {
    if (dataSourceName === this.state.dataSourceName)
         return <span>{item[fieldName]}</span>;
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
    if (dataSourceName === this.state.dataSourceName ) {
      return <span>{headerName}</span>;
    }
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
    return <span>{contextLabel}</span>;
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
            disableGridScroll={false}
            headerBackgroundColor={'#EAEDED'}
            headerColor={'#2C3E50'}
          />
        )}
      </div>
    );
  }
}
