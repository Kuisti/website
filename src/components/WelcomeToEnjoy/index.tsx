import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

const WelcomeToEnjoy: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="tervetuloa-nauttimaan-container">
      {t('welcome_text')}
    </div>
  );
};

export default WelcomeToEnjoy;
