import { List, Card } from 'antd';

function ListItem({data}) {
  return (
    <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.phuong}>{item.quan}</Card>
      </List.Item>
    )}
  />
  )
}

export default ListItem;
