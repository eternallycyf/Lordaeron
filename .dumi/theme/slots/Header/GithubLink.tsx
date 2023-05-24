import React from 'react';
import { Button, Tooltip } from 'antd';
import { usePrefersColor } from 'dumi';
import { GithubFilled } from '@ant-design/icons';

const GithubLink: React.FC = () => {
    const [theme, preferTheme, changeTheme] = usePrefersColor();
  return (
    <Tooltip title="Github" placement="bottom">
      <Button
        href="https://github.com/eternallycyf/lordaeron"
        target="_blank"
        rel="noreferrer"
        icon={<GithubFilled style={{ fontSize: 16,color: theme == 'dark' ? '#fff':'' }} />}
        type="text"
      />
    </Tooltip>
  );
};

export default GithubLink;
