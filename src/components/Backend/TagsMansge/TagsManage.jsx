import React from 'react';
import PropType from 'prop-types';
import { Input, Button, message } from 'antd';
import style from './TagsManage.less';
import {Table} from 'antd';

class TagsManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: '',
        };
    }

    componentDidMount(){
        const { handleGetTags } = this.props;
        handleGetTags();
    }

    DeleteTag = (e) => {
        const { handleDeleteTags } = this.props;
        const auth = JSON.parse(localStorage.getItem('auth'));
        if(auth){
            handleDeleteTags({ id:e.id })
        } else {
            this.error()
        }
    };

    Tags = (e) =>{
        this.setState({
            tag: e.target.value
        })
    };

    createTag = () => {
        const { tag } = this.state;
        const auth = JSON.parse(localStorage.getItem('auth'));
        const { handleCreateTag } = this.props;
        if(tag!== ''){
            if(auth){
                handleCreateTag({content: tag})
            } else {
                this.error()
            }
        }else{
            message.warning('内容不能为空！');
        }

    };

    error = () => {
        message.warning('抱歉，您没有权限！');
    };

    render() {
        const { loading, tags } = this.props;
        const columns = [{
            title: '编号',
            width: '20%',
            dataIndex: 'index',
            className: 'columns',
            key: 'index',
        }, {
            title: '标签',
            dataIndex: 'tag',
            key: 'tag',
        }, {
            title: '操作',
            render: (record) => (
                <Button size='small' type="primary" onClick={()=>this.DeleteTag(record)}>删除</Button>
            ),
        }];

        const data = tags.map((item, index)=>{
            return {
                key: index,
                index: index+1,
                id: item._id,
                tag: item.content
            }
        })

        return (
            <div>
                <div className={style.newTag}>
                    <span>新建标签：</span>
                    <Input placeholder="请输入新标签" style={{ width: '40%' }} onChange={this.Tags}/>
                    <Button type="primary" style={{ marginLeft: 20 }} onClick={this.createTag}>确定</Button>
                </div>
                <Table
                    pagination
                    bordered
                    loading={loading}
                    columns={columns}
                    dataSource={data}
                />
            </div>
        )
    }
}

export default TagsManage;