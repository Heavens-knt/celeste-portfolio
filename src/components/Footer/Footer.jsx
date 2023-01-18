import {useState} from 'react'
import styles from './Footer.module.css';
import { socials } from '../../utils/constants';
import ListItem from '../ListItem/ListItem';

function Footer() {
  //get the date dinamicaly
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className = {styles.footer}>
      <div className = {styles.socials}>
        {socials.map(social => <ListItem icon={social.icon} href={social.link} alt={social.name} />)}
      </div>
    	<div className = {styles.copyright}>
        <p>Created by <span>Heavens - Knt</span>  &copy; {year} All rights reserved!</p>
      </div>
  	</footer>
  )
}

export default Footer
