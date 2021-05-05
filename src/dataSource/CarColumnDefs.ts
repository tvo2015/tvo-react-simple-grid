import { IColumnDefs } from "tvo-react-simple-grid";

export const CarColumnDefs: IColumnDefs = {
    dataSourceName: 'car',
    //groupByColumnFieldName: 'car_color',
    columns:[
        {
            headerName: 'Car Make',
            key: 'car_make',
            fieldName: 'car_make',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:false,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:"20%"
        },
        {
            headerName: 'Car Model',
            key: 'car_model',
            fieldName: 'car_model',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:false,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:"20%"
        },
        {
            headerName: 'Car Color',
            key: 'car_color',
            fieldName: 'car_color',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:false,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:"20%",
            contextMenu:[
                {
                   value:'item1',
                   label:'Item 1',
                   enableOnContextMenuRender:true
                },
                {
                    value:'item2',
                    label:'Item 2',
                    enableOnContextMenuRender:true
                 }
            ]
        },
        {
            headerName: 'Car Model Year',
            key: 'car_model_year',
            fieldName: 'car_model_year',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:false,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            enableSorting:false,
            columnWidth:"20%",
            contextMenu:[{
                value: 'item1',
                label: 'item1'
            }
            ]

        },
        {
            headerName: 'Car Vin',
            key: 'car_vin',
            fieldName: 'car_vin',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:false,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:"20%"
        }
    ]
}