import { IColumnDefs } from "tvo-react-simple-grid";

export const ColumnDefinition: IColumnDefs = {
    dataSourceName:'PersonalInfo',
    columns:[
        {
            headerName: 'ID',
            key: 'ID',
            fieldName: 'ID',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:false,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:'8%'
        },
        {
            headerName: 'First Name',
            key: 'FirstName',
            fieldName: 'FirstName',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:false,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:'20%',
            contextMenu:[
                {
                    value:'Item1',
                    label:'Item 1',
                    enableOnContextMenuRender:true
                },
                {
                    value:'Item2',
                    label:'Item 2',
                    enableOnContextMenuRender:true,
                    enableBottomDivider:true
                },
                {
                    value:'Item3',
                    label:'Item 3',
                    enableOnContextMenuRender:true
                },
                {
                    value:'Item4',
                    label:'Item 4',
                    enableOnContextMenuRender:true
                }
            ]
        },
        {
            headerName: 'Last Name',
            key: 'LastName',
            fieldName: 'LastName',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:true,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:'20%',
            contextMenu:[
                {
                    value:'Item5',
                    label:'Item 5',
                    enableOnContextMenuRender:true
                },
                {
                    value:'Item6',
                    label:'Item 6',
                    enableOnContextMenuRender:true,
                    enableBottomDivider:true
                }
            ]
        },
        
        {
            headerName: 'Job Title',
            key: 'JobTitle',
            fieldName: 'JobTitle',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:true,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:'20%',
            contextMenu:[
                {
                    value:'Item8',
                    label:'Item 8',
                    enableOnContextMenuRender:true
                }
            ]
        },
        {
            headerName: 'Email ',
            key: 'Email',
            fieldName: 'EmailAddress',
            enableOnHeaderItemRender:true,  
            enableOnRowItemClick:true,
            enableOnRowItemRender:true,
            enableContextMenu:true,
            columnWidth:'30%',
            contextMenu:[
                {
                    value:'Item9',
                    label:'Item 9',
                    enableOnContextMenuRender:true
                },
                {
                    value:'Item10',
                    label:'Item 10',
                    enableOnContextMenuRender:true
                },
                {
                    value:'Item11',
                    label:'Item 11',
                    enableOnContextMenuRender:true,
                    enableBottomDivider:true
                },
                {
                    value:'Item12',
                    label:'Item 12',
                    enableOnContextMenuRender:true
                }
            ]
        }
    ]
}