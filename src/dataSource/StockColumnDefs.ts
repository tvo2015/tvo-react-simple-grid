
import { IColumnDefs } from "tvo-react-simple-grid";

export const StockColumnDefs: IColumnDefs = {
    dataSourceName: 'stock',
    columns:[
        {
            headerName: 'Stock Symbol',
            key: 'stock_symbol',
            fieldName: 'stock_symbol',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:false,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:"18%"
        },
        {
            headerName: 'Stock Name',
            key: 'stock_name',
            fieldName: 'stock_name',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:false,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:"18%"
        },
        {
            headerName: 'Stock Industry',
            key: 'stock_industry',
            fieldName: 'stock_industry',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:false,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:"18%"
        },
        {
            headerName: 'Stock Sector',
            key: 'stock_sector',
            fieldName: 'stock_sector',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:false,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:"18%",
            contextMenu:[
                {
                   value:'chart',
                   label:'Chart',
                   enableOnContextMenuRender:true
                },
                {
                    value:'trending',
                    label:'Trending Up',
                    enableOnContextMenuRender:true
                 }
            ]
        },
        {
            headerName: 'Market Cap',
            key: 'market_cap',
            fieldName: 'market_cap',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:false,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:"10%"
        },
        {
            headerName: 'Stock Market',
            key: 'stock_market',
            fieldName: 'stock_market',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:false,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:"18%"
        }

    ]
}