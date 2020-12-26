import React from 'react';
import './Navigation.scss';

//Icons import
import groovioLogo from '../../content/groovio-logo.svg';

const Navigation = () => {
  return (
    <div className='Navigation'>
      <div className='Navigation__logo-box'>
        <img src={groovioLogo} alt='Logo' className='Navigation__logo' />
        <h2 className='Navigation__heading'>Groovio</h2>
      </div>

      <div className='Navigation__menu'>
        <nav className='Navigation__list-box Navigation__menu-list-box'>
          <h5 className='Navigation__list-heading'>
            <span className='Navigation__list-heading-text'>MENU</span>
          </h5>
          <ul className='Navigation__item-list Navigation__menu-item-list'>
            <li className='Navigation__item'>
              <i className="fas fa-bolt Navigation__item-logo"></i>
              <span className='Navigation__item-name'>Explore</span>
            </li>
            <li className='Navigation__item'>
              <i className="fas fa-volume-down Navigation__item-logo"></i>
              <span className='Navigation__item-name'>Genres</span>
            </li>
            <li className='Navigation__item'>
              <i className="fas fa-compact-disc Navigation__item-logo"></i>
              <span className='Navigation__item-name'>Albums</span>
            </li>
            <li className='Navigation__item'>
              <i className="fas fa-microphone Navigation__item-logo"></i>
              <span className='Navigation__item-name'>Artists</span>
            </li>
            <li className='Navigation__item'>
              <i className="fas fa-radio Navigation__item-logo"></i>
              <span className='Navigation__item-name'>Radio</span>
            </li>
          </ul>
        </nav>
      </div>

      <div className='Navigation__library'>
        <nav className='Navigation__list-box Navigation__library-list-box'>
          <h5 className='Navigation__list-heading'>
            <span className='Navigation__list-heading-text'>LIBRARY</span>
          </h5>
          <ul className='Navigation__item-list Navigation__library-item-list'>
            <li className='Navigation__item'>
              <i className="fas fa-undo-alt Navigation__item-logo"></i>
              <span className='Navigation__item-name'>Recent</span>
            </li>
            <li className='Navigation__item'>
              <i className="fas fa-album-collection Navigation__item-logo"></i>
              <span className='Navigation__item-name'>Albums</span>
            </li>
            <li className='Navigation__item'>
              <i className="fas fa-heart Navigation__item-logo"></i>
              <span className='Navigation__item-name'>Favourites</span>
            </li>
            <li className='Navigation__item'>
              <i className="fas fa-folders Navigation__item-logo"></i>
              <span className='Navigation__item-name'>Local</span>
            </li>
          </ul>
        </nav>
      </div>

      <div className='Navigation__playlist'>
        <nav className='Navigation__list-box Navigation__playlist-list-box'>
          <h5 className='Navigation__list-heading'>
            <span className='Navigation__list-heading-text'>PLAYLIST</span>
          </h5>
          <ul className='Navigation__item-list Navigation__playlist-item-list'>
            <li className='Navigation__item'>
              <i className="far fa-plus-circle Navigation__item-logo"></i>
              <span className='Navigation__item-name'>Create New</span>
            </li>
            <li className='Navigation__item'>
              <i className="fas fa-play-circle Navigation__item-logo"></i>
              <span className='Navigation__item-name'>Design Flow</span>
            </li>
            <li className='Navigation__item'>
              <i className="fas fa-play-circle Navigation__item-logo"></i>
              <span className='Navigation__item-name'>Best of 2020</span>
            </li>
            <li className='Navigation__item'>
              <i className="fas fa-play-circle Navigation__item-logo"></i>
              <span className='Navigation__item-name'>Poland 2020</span>
            </li>
          </ul>
        </nav>
      </div>

      <div className='Navigation__devices'></div>
    </div>
  );
};

export default Navigation;
