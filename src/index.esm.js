import {Interaction} from 'chart.js';
import Interpolate from './interpolate.js';
import CrosshairPlugin from './trace.js';

Interaction.modes.interpolate = Interpolate;

export default CrosshairPlugin
export {CrosshairPlugin, Interpolate}
