import React , { useState }from "react";
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import './tableModal.less';

//表格数据
const originData = [];
for (let i = 0; i < 100; i++) {
    originData.push({
      key: i.toString(),
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode =  <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };
 
  const EditableTable = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
  
    const isEditing = record => record.key === editingKey;
  
    const edit = record => {
      console.log(record)
      form.setFieldsValue({
        name: '',
        age: '',
        address: '',
        ...record,
      });
      setEditingKey(record.key);
    };
  
    const cancel = () => {
      setEditingKey('');
    };
  
    const save = async key => {
      try {
        const row = await form.validateFields();
        const newData = [...data];
        const index = newData.findIndex(item => key === item.key);
  
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, { ...item, ...row });
          setData(newData);
          setEditingKey('');
        } else {
          newData.push(row);
          setData(newData);
          setEditingKey('');
        }
      } catch (errInfo) {
        console.log('Validate Failed:', errInfo);
      }
    };
  
    const columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '25%',
        editable: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
        width: '15%',
        editable: true,
      },
      {
        title: 'address',
        dataIndex: 'address',
        width: '40%',
        editable: true,
      },
      // {
      //   title: '操作',
      //   dataIndex: 'operation',
      //   render: (_, record) => {
      //     const editable = isEditing(record);
      //     return editable ? (
      //       <span>
      //         <a
      //           href="javascript:;"
      //           onClick={() => save(record.key)}
      //           style={{
      //             marginRight: 8,
      //           }}
      //         >
      //           Save
      //         </a>
      //         <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
      //           <a>Cancel</a>
      //         </Popconfirm>
      //       </span>
      //     ) : (
      //       <a disabled={editingKey !== ''} onClick={()=>edit(record)}>
      //         Edit
      //       </a>
      //     );
      //   },
      // },
    ];
    const mergedColumns = columns.map(col => {
      if (!col.editable) {
        return col;
      }
      
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });
    const selectedRowKeys = [];
    const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        selectedRowKeys.push(selectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    return (
      <Form form={form} component={false}>
        <Button type="primary" onClick={(record)=>edit(record)}>编辑</Button> 
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          rowSelection={rowSelection}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    );
  };  
class TableModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            playArr:[
                {id:1,title:'看一小时的react教程',show:false},
                {id:2,title:'打一小时DOTA',show:false},
                {id:3,title:'看一小时的JS教程',show:false},
                {id:4,title:'看一小时的隐秘的角落',show:false},
            ],
            
        }
      
    }
   

    render(){
        return (
            <div>
           <EditableTable />
            </div>
            )
    }
}

export default TableModal;