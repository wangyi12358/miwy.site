import React from 'react';
import cls from 'classnames'

export interface ImageProps {
  className?: string;
  src?: string;
}

/**
 * @Author: wangyi
 * @Date: 2023-07-13
 */
const Image: React.FC<ImageProps> = ({ className, src }) => {
  return (
    <div className={cls('rounded-2xl overflow-hidden', className)}>
      <img className="max-w-full max-h-full" src={src} />
    </div>
  );
}

export default Image;
