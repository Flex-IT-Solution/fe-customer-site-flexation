import React from 'react';

interface DomainCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const FiturCard: React.FC<DomainCardProps> = ({ icon, title, description }) => {
  return (
    <div className='space-y-1 rounded-lg bg-red-100 p-3 lg:p-4'>
      <div className='w-fit rounded-full bg-red-300 p-2 text-sm text-red-700'>
        {icon}
      </div>
      <div className='text-sm font-medium lg:text-base'>{title}</div>
      <div className='text-[10px] lg:text-sm'>{description}</div>
    </div>
  );
};

export default FiturCard;
