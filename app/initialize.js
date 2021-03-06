/**
 * @fileoverview
 * This file imports all our required packages.
 * It also includes 3rd party A-Frame components.
 * Finally, it mounts the app to the root node.
 */

import 'aframe'
import 'aframe-event-set-component'
import 'aframe-text-geometry-component'
import 'aframe-gif-shader'
import 'aframe-gif-component'
import 'aframe-video-shader'
import './components/aframe-nav-click'
import './components/aframe-environment'
import './components/aframe-effects'

import { h, render } from 'preact'
import Main from './main'

document.addEventListener('DOMContentLoaded', () => {
  render(<Main />, document.querySelector('#app'))
})
