import React from 'react';

interface DomainCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const FiturCard: React.FC<DomainCardProps> = ({ icon, title, description }) => {
  return (
    <div
      data-aos='fade-up'
      className='group space-y-1 rounded-lg bg-red-100 p-3 hover:bg-gradient-to-tr hover:from-red-50 hover:to-red-200 hover:shadow-lg lg:p-4'
    >
      <div className='w-fit rounded-full bg-red-200 p-2 text-sm text-red-700 group-hover:bg-red-300 group-hover:text-red-800'>
        {icon}
      </div>
      <div className='text-sm font-medium group-hover:text-red-950 lg:text-base'>
        {title}
      </div>
      <div className='text-[10px] group-hover:text-red-950 lg:text-sm'>
        {description}
      </div>
    </div>
  );
};

export default FiturCard;
