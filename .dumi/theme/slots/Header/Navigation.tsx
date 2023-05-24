import React from 'react';
import { Menu } from 'antd';
import { Link } from 'dumi';
import { CodeOutlined, DownOutlined, MobileOutlined, SwapOutlined, ToolOutlined } from '@ant-design/icons';

const Navigation: React.FC = () => {
  const items: any = [
    {
      label: <Link to="/guide">指南</Link>,
      key: 'guide',
    },
    {
      label: <Link to="/components/button">组件</Link>,
      key: 'components-button',
    },
    {
      label: (
        <div>
          <span>更多</span>
          <DownOutlined style={{fontSize: 12, color: '#666', marginLeft: 3}} />
        </div>
      ),
      children: [
        {
          label: <a href="https://github.com/eternallycyf" target='_black'>Eternallycyf</a>,
          key: 'Eternallycyf',
          icon: <CodeOutlined />,
        }
      ]
    }
  ];

  return <Menu disabledOverflow items={items} mode="horizontal" />;
};

export default Navigation;
