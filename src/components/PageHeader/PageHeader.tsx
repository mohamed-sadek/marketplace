import './PageHeader.scss';
import React from 'react';

interface Props {
  userCredit: number,
}

export default function PageHeader({ userCredit }: Props) {
  return (
    <header className="page-header">
      <p className="page-header__credits-status">
        Credits:
        <span className="page-header__credits-value">{userCredit}</span>
      </p>
    </header>
  );
}
