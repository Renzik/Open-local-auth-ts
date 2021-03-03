import React from 'react';
import classNames from 'classnames';

import styles from './CustomButton.module.css';

const CustomButton = (props: any) => {
  const containerClasses = classNames(
    styles.container,
    props.name === 'Google'
      ? styles.googleContainer
      : props.name === 'Github'
      ? styles.githubContainer
      : styles.twitterContainer
  );

  return (
    <div
      className={containerClasses}
      onClick={props.onClick}
      onMouseEnter={() => (props.toggleLogo ? props.toggleLogo(true) : null)}
      onMouseLeave={() => (props.toggleLogo ? props.toggleLogo(false) : null)}>
      <img src={props.imageUrl} alt={`${props.name} Logo`} />
      <p>Sign up with {props.children}</p>
    </div>
  );
};

export default CustomButton;
