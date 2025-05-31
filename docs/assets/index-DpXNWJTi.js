(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class bn{constructor(e=!1){this.eventMap={},this.eventsSuspended=e==!0}addListener(e,t,n={}){if(typeof e=="string"&&e.length<1||e instanceof String&&e.length<1||typeof e!="string"&&!(e instanceof String)&&e!==bn.ANY_EVENT)throw new TypeError("The 'event' parameter must be a string or EventEmitter.ANY_EVENT.");if(typeof t!="function")throw new TypeError("The callback must be a function.");const s=new Jl(e,this,t,n);return this.eventMap[e]||(this.eventMap[e]=[]),n.prepend?this.eventMap[e].unshift(s):this.eventMap[e].push(s),s}addOneTimeListener(e,t,n={}){n.remaining=1,this.addListener(e,t,n)}static get ANY_EVENT(){return Symbol.for("Any event")}hasListener(e,t){return e===void 0?this.eventMap[bn.ANY_EVENT]&&this.eventMap[bn.ANY_EVENT].length>0?!0:Object.entries(this.eventMap).some(([,n])=>n.length>0):this.eventMap[e]&&this.eventMap[e].length>0?t instanceof Jl?this.eventMap[e].filter(s=>s===t).length>0:typeof t=="function"?this.eventMap[e].filter(s=>s.callback===t).length>0:t==null:!1}get eventNames(){return Object.keys(this.eventMap)}getListeners(e){return this.eventMap[e]||[]}suspendEvent(e){this.getListeners(e).forEach(t=>{t.suspended=!0})}unsuspendEvent(e){this.getListeners(e).forEach(t=>{t.suspended=!1})}getListenerCount(e){return this.getListeners(e).length}emit(e,...t){if(typeof e!="string"&&!(e instanceof String))throw new TypeError("The 'event' parameter must be a string.");if(this.eventsSuspended)return;let n=[],s=this.eventMap[bn.ANY_EVENT]||[];return this.eventMap[e]&&(s=s.concat(this.eventMap[e])),s.forEach(r=>{if(r.suspended)return;let a=[...t];Array.isArray(r.arguments)&&(a=a.concat(r.arguments)),r.remaining>0&&(n.push(r.callback.apply(r.context,a)),r.count++),--r.remaining<1&&r.remove()}),n}removeListener(e,t,n={}){if(e===void 0){this.eventMap={};return}else if(!this.eventMap[e])return;let s=this.eventMap[e].filter(r=>t&&r.callback!==t||n.remaining&&n.remaining!==r.remaining||n.context&&n.context!==r.context);s.length?this.eventMap[e]=s:delete this.eventMap[e]}async waitFor(e,t={}){return t.duration=parseInt(t.duration),(isNaN(t.duration)||t.duration<=0)&&(t.duration=1/0),new Promise((n,s)=>{let r,a=this.addListener(e,()=>{clearTimeout(r),n()},{remaining:1});t.duration!==1/0&&(r=setTimeout(()=>{a.remove(),s("The duration expired before the event was emitted.")},t.duration))})}get eventCount(){return Object.keys(this.eventMap).length}}class Jl{constructor(e,t,n,s={}){if(typeof e!="string"&&!(e instanceof String)&&e!==bn.ANY_EVENT)throw new TypeError("The 'event' parameter must be a string or EventEmitter.ANY_EVENT.");if(!t)throw new ReferenceError("The 'target' parameter is mandatory.");if(typeof n!="function")throw new TypeError("The 'callback' must be a function.");s.arguments!==void 0&&!Array.isArray(s.arguments)&&(s.arguments=[s.arguments]),s=Object.assign({context:t,remaining:1/0,arguments:void 0,duration:1/0},s),s.duration!==1/0&&setTimeout(()=>this.remove(),s.duration),this.arguments=s.arguments,this.callback=n,this.context=s.context,this.count=0,this.event=e,this.remaining=parseInt(s.remaining)>=1?parseInt(s.remaining):1/0,this.suspended=!1,this.target=t}remove(){this.target.removeListener(this.event,this.callback,{context:this.context,remaining:this.remaining})}}/**
 * The `Enumerations` class contains enumerations and arrays of elements used throughout the
 * library. All its properties are static and should be referenced using the class name. For
 * example: `Enumerations.CHANNEL_MESSAGES`.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */class ${static get MIDI_CHANNEL_MESSAGES(){return this.validation&&console.warn("The MIDI_CHANNEL_MESSAGES enum has been deprecated. Use the Enumerations.CHANNEL_MESSAGES enum instead."),$.CHANNEL_MESSAGES}static get CHANNEL_MESSAGES(){return{noteoff:8,noteon:9,keyaftertouch:10,controlchange:11,programchange:12,channelaftertouch:13,pitchbend:14}}static get CHANNEL_NUMBERS(){return[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}static get MIDI_CHANNEL_NUMBERS(){return this.validation&&console.warn("The MIDI_CHANNEL_NUMBERS array has been deprecated. Use the Enumerations.CHANNEL_NUMBERS array instead."),[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}static get CHANNEL_MODE_MESSAGES(){return{allsoundoff:120,resetallcontrollers:121,localcontrol:122,allnotesoff:123,omnimodeoff:124,omnimodeon:125,monomodeon:126,polymodeon:127}}static get MIDI_CHANNEL_MODE_MESSAGES(){return this.validation&&console.warn("The MIDI_CHANNEL_MODE_MESSAGES enum has been deprecated. Use the Enumerations.CHANNEL_MODE_MESSAGES enum instead."),$.CHANNEL_MODE_MESSAGES}static get MIDI_CONTROL_CHANGE_MESSAGES(){return this.validation&&console.warn("The MIDI_CONTROL_CHANGE_MESSAGES enum has been deprecated. Use the Enumerations.CONTROL_CHANGE_MESSAGES array instead."),{bankselectcoarse:0,modulationwheelcoarse:1,breathcontrollercoarse:2,controller3:3,footcontrollercoarse:4,portamentotimecoarse:5,dataentrycoarse:6,volumecoarse:7,balancecoarse:8,controller9:9,pancoarse:10,expressioncoarse:11,effectcontrol1coarse:12,effectcontrol2coarse:13,controller14:14,controller15:15,generalpurposeslider1:16,generalpurposeslider2:17,generalpurposeslider3:18,generalpurposeslider4:19,controller20:20,controller21:21,controller22:22,controller23:23,controller24:24,controller25:25,controller26:26,controller27:27,controller28:28,controller29:29,controller30:30,controller31:31,bankselectfine:32,modulationwheelfine:33,breathcontrollerfine:34,controller35:35,footcontrollerfine:36,portamentotimefine:37,dataentryfine:38,volumefine:39,balancefine:40,controller41:41,panfine:42,expressionfine:43,effectcontrol1fine:44,effectcontrol2fine:45,controller46:46,controller47:47,controller48:48,controller49:49,controller50:50,controller51:51,controller52:52,controller53:53,controller54:54,controller55:55,controller56:56,controller57:57,controller58:58,controller59:59,controller60:60,controller61:61,controller62:62,controller63:63,holdpedal:64,portamento:65,sustenutopedal:66,softpedal:67,legatopedal:68,hold2pedal:69,soundvariation:70,resonance:71,soundreleasetime:72,soundattacktime:73,brightness:74,soundcontrol6:75,soundcontrol7:76,soundcontrol8:77,soundcontrol9:78,soundcontrol10:79,generalpurposebutton1:80,generalpurposebutton2:81,generalpurposebutton3:82,generalpurposebutton4:83,controller84:84,controller85:85,controller86:86,controller87:87,controller88:88,controller89:89,controller90:90,reverblevel:91,tremololevel:92,choruslevel:93,celestelevel:94,phaserlevel:95,databuttonincrement:96,databuttondecrement:97,nonregisteredparametercoarse:98,nonregisteredparameterfine:99,registeredparametercoarse:100,registeredparameterfine:101,controller102:102,controller103:103,controller104:104,controller105:105,controller106:106,controller107:107,controller108:108,controller109:109,controller110:110,controller111:111,controller112:112,controller113:113,controller114:114,controller115:115,controller116:116,controller117:117,controller118:118,controller119:119,allsoundoff:120,resetallcontrollers:121,localcontrol:122,allnotesoff:123,omnimodeoff:124,omnimodeon:125,monomodeon:126,polymodeon:127}}static get CONTROL_CHANGE_MESSAGES(){return[{number:0,name:"bankselectcoarse",description:"Bank Select (Coarse)",position:"msb"},{number:1,name:"modulationwheelcoarse",description:"Modulation Wheel (Coarse)",position:"msb"},{number:2,name:"breathcontrollercoarse",description:"Breath Controller (Coarse)",position:"msb"},{number:3,name:"controller3",description:"Undefined",position:"msb"},{number:4,name:"footcontrollercoarse",description:"Foot Controller (Coarse)",position:"msb"},{number:5,name:"portamentotimecoarse",description:"Portamento Time (Coarse)",position:"msb"},{number:6,name:"dataentrycoarse",description:"Data Entry (Coarse)",position:"msb"},{number:7,name:"volumecoarse",description:"Channel Volume (Coarse)",position:"msb"},{number:8,name:"balancecoarse",description:"Balance (Coarse)",position:"msb"},{number:9,name:"controller9",description:"Controller 9 (Coarse)",position:"msb"},{number:10,name:"pancoarse",description:"Pan (Coarse)",position:"msb"},{number:11,name:"expressioncoarse",description:"Expression Controller (Coarse)",position:"msb"},{number:12,name:"effectcontrol1coarse",description:"Effect Control 1 (Coarse)",position:"msb"},{number:13,name:"effectcontrol2coarse",description:"Effect Control 2 (Coarse)",position:"msb"},{number:14,name:"controller14",description:"Undefined",position:"msb"},{number:15,name:"controller15",description:"Undefined",position:"msb"},{number:16,name:"generalpurposecontroller1",description:"General Purpose Controller 1 (Coarse)",position:"msb"},{number:17,name:"generalpurposecontroller2",description:"General Purpose Controller 2 (Coarse)",position:"msb"},{number:18,name:"generalpurposecontroller3",description:"General Purpose Controller 3 (Coarse)",position:"msb"},{number:19,name:"generalpurposecontroller4",description:"General Purpose Controller 4 (Coarse)",position:"msb"},{number:20,name:"controller20",description:"Undefined",position:"msb"},{number:21,name:"controller21",description:"Undefined",position:"msb"},{number:22,name:"controller22",description:"Undefined",position:"msb"},{number:23,name:"controller23",description:"Undefined",position:"msb"},{number:24,name:"controller24",description:"Undefined",position:"msb"},{number:25,name:"controller25",description:"Undefined",position:"msb"},{number:26,name:"controller26",description:"Undefined",position:"msb"},{number:27,name:"controller27",description:"Undefined",position:"msb"},{number:28,name:"controller28",description:"Undefined",position:"msb"},{number:29,name:"controller29",description:"Undefined",position:"msb"},{number:30,name:"controller30",description:"Undefined",position:"msb"},{number:31,name:"controller31",description:"Undefined",position:"msb"},{number:32,name:"bankselectfine",description:"Bank Select (Fine)",position:"lsb"},{number:33,name:"modulationwheelfine",description:"Modulation Wheel (Fine)",position:"lsb"},{number:34,name:"breathcontrollerfine",description:"Breath Controller (Fine)",position:"lsb"},{number:35,name:"controller35",description:"Undefined",position:"lsb"},{number:36,name:"footcontrollerfine",description:"Foot Controller (Fine)",position:"lsb"},{number:37,name:"portamentotimefine",description:"Portamento Time (Fine)",position:"lsb"},{number:38,name:"dataentryfine",description:"Data Entry (Fine)",position:"lsb"},{number:39,name:"channelvolumefine",description:"Channel Volume (Fine)",position:"lsb"},{number:40,name:"balancefine",description:"Balance (Fine)",position:"lsb"},{number:41,name:"controller41",description:"Undefined",position:"lsb"},{number:42,name:"panfine",description:"Pan (Fine)",position:"lsb"},{number:43,name:"expressionfine",description:"Expression Controller (Fine)",position:"lsb"},{number:44,name:"effectcontrol1fine",description:"Effect control 1 (Fine)",position:"lsb"},{number:45,name:"effectcontrol2fine",description:"Effect control 2 (Fine)",position:"lsb"},{number:46,name:"controller46",description:"Undefined",position:"lsb"},{number:47,name:"controller47",description:"Undefined",position:"lsb"},{number:48,name:"controller48",description:"General Purpose Controller 1 (Fine)",position:"lsb"},{number:49,name:"controller49",description:"General Purpose Controller 2 (Fine)",position:"lsb"},{number:50,name:"controller50",description:"General Purpose Controller 3 (Fine)",position:"lsb"},{number:51,name:"controller51",description:"General Purpose Controller 4 (Fine)",position:"lsb"},{number:52,name:"controller52",description:"Undefined",position:"lsb"},{number:53,name:"controller53",description:"Undefined",position:"lsb"},{number:54,name:"controller54",description:"Undefined",position:"lsb"},{number:55,name:"controller55",description:"Undefined",position:"lsb"},{number:56,name:"controller56",description:"Undefined",position:"lsb"},{number:57,name:"controller57",description:"Undefined",position:"lsb"},{number:58,name:"controller58",description:"Undefined",position:"lsb"},{number:59,name:"controller59",description:"Undefined",position:"lsb"},{number:60,name:"controller60",description:"Undefined",position:"lsb"},{number:61,name:"controller61",description:"Undefined",position:"lsb"},{number:62,name:"controller62",description:"Undefined",position:"lsb"},{number:63,name:"controller63",description:"Undefined",position:"lsb"},{number:64,name:"damperpedal",description:"Damper Pedal On/Off"},{number:65,name:"portamento",description:"Portamento On/Off"},{number:66,name:"sostenuto",description:"Sostenuto On/Off"},{number:67,name:"softpedal",description:"Soft Pedal On/Off"},{number:68,name:"legatopedal",description:"Legato Pedal On/Off"},{number:69,name:"hold2",description:"Hold 2 On/Off"},{number:70,name:"soundvariation",description:"Sound Variation",position:"lsb"},{number:71,name:"resonance",description:"Resonance",position:"lsb"},{number:72,name:"releasetime",description:"Release Time",position:"lsb"},{number:73,name:"attacktime",description:"Attack Time",position:"lsb"},{number:74,name:"brightness",description:"Brightness",position:"lsb"},{number:75,name:"decaytime",description:"Decay Time",position:"lsb"},{number:76,name:"vibratorate",description:"Vibrato Rate",position:"lsb"},{number:77,name:"vibratodepth",description:"Vibrato Depth",position:"lsb"},{number:78,name:"vibratodelay",description:"Vibrato Delay",position:"lsb"},{number:79,name:"controller79",description:"Undefined",position:"lsb"},{number:80,name:"generalpurposecontroller5",description:"General Purpose Controller 5",position:"lsb"},{number:81,name:"generalpurposecontroller6",description:"General Purpose Controller 6",position:"lsb"},{number:82,name:"generalpurposecontroller7",description:"General Purpose Controller 7",position:"lsb"},{number:83,name:"generalpurposecontroller8",description:"General Purpose Controller 8",position:"lsb"},{number:84,name:"portamentocontrol",description:"Portamento Control",position:"lsb"},{number:85,name:"controller85",description:"Undefined"},{number:86,name:"controller86",description:"Undefined"},{number:87,name:"controller87",description:"Undefined"},{number:88,name:"highresolutionvelocityprefix",description:"High Resolution Velocity Prefix",position:"lsb"},{number:89,name:"controller89",description:"Undefined"},{number:90,name:"controller90",description:"Undefined"},{number:91,name:"effect1depth",description:"Effects 1 Depth (Reverb Send Level)"},{number:92,name:"effect2depth",description:"Effects 2 Depth"},{number:93,name:"effect3depth",description:"Effects 3 Depth (Chorus Send Level)"},{number:94,name:"effect4depth",description:"Effects 4 Depth"},{number:95,name:"effect5depth",description:"Effects 5 Depth"},{number:96,name:"dataincrement",description:"Data Increment"},{number:97,name:"datadecrement",description:"Data Decrement"},{number:98,name:"nonregisteredparameterfine",description:"Non-Registered Parameter Number (Fine)",position:"lsb"},{number:99,name:"nonregisteredparametercoarse",description:"Non-Registered Parameter Number (Coarse)",position:"msb"},{number:100,name:"registeredparameterfine",description:"Registered Parameter Number (Fine)",position:"lsb"},{number:101,name:"registeredparametercoarse",description:"Registered Parameter Number (Coarse)",position:"msb"},{number:102,name:"controller102",description:"Undefined"},{number:103,name:"controller103",description:"Undefined"},{number:104,name:"controller104",description:"Undefined"},{number:105,name:"controller105",description:"Undefined"},{number:106,name:"controller106",description:"Undefined"},{number:107,name:"controller107",description:"Undefined"},{number:108,name:"controller108",description:"Undefined"},{number:109,name:"controller109",description:"Undefined"},{number:110,name:"controller110",description:"Undefined"},{number:111,name:"controller111",description:"Undefined"},{number:112,name:"controller112",description:"Undefined"},{number:113,name:"controller113",description:"Undefined"},{number:114,name:"controller114",description:"Undefined"},{number:115,name:"controller115",description:"Undefined"},{number:116,name:"controller116",description:"Undefined"},{number:117,name:"controller117",description:"Undefined"},{number:118,name:"controller118",description:"Undefined"},{number:119,name:"controller119",description:"Undefined"},{number:120,name:"allsoundoff",description:"All Sound Off"},{number:121,name:"resetallcontrollers",description:"Reset All Controllers"},{number:122,name:"localcontrol",description:"Local Control On/Off"},{number:123,name:"allnotesoff",description:"All Notes Off"},{number:124,name:"omnimodeoff",description:"Omni Mode Off"},{number:125,name:"omnimodeon",description:"Omni Mode On"},{number:126,name:"monomodeon",description:"Mono Mode On"},{number:127,name:"polymodeon",description:"Poly Mode On"}]}static get REGISTERED_PARAMETERS(){return{pitchbendrange:[0,0],channelfinetuning:[0,1],channelcoarsetuning:[0,2],tuningprogram:[0,3],tuningbank:[0,4],modulationrange:[0,5],azimuthangle:[61,0],elevationangle:[61,1],gain:[61,2],distanceratio:[61,3],maximumdistance:[61,4],maximumdistancegain:[61,5],referencedistanceratio:[61,6],panspreadangle:[61,7],rollangle:[61,8]}}static get MIDI_REGISTERED_PARAMETERS(){return this.validation&&console.warn("The MIDI_REGISTERED_PARAMETERS enum has been deprecated. Use the Enumerations.REGISTERED_PARAMETERS enum instead."),$.MIDI_REGISTERED_PARAMETERS}static get SYSTEM_MESSAGES(){return{sysex:240,timecode:241,songposition:242,songselect:243,tunerequest:246,tuningrequest:246,sysexend:247,clock:248,start:250,continue:251,stop:252,activesensing:254,reset:255,midimessage:0,unknownsystemmessage:-1}}static get MIDI_SYSTEM_MESSAGES(){return this.validation&&console.warn("The MIDI_SYSTEM_MESSAGES enum has been deprecated. Use the Enumerations.SYSTEM_MESSAGES enum instead."),$.SYSTEM_MESSAGES}static get CHANNEL_EVENTS(){return["noteoff","controlchange","noteon","keyaftertouch","programchange","channelaftertouch","pitchbend","allnotesoff","allsoundoff","localcontrol","monomode","omnimode","resetallcontrollers","nrpn","nrpn-dataentrycoarse","nrpn-dataentryfine","nrpn-dataincrement","nrpn-datadecrement","rpn","rpn-dataentrycoarse","rpn-dataentryfine","rpn-dataincrement","rpn-datadecrement","nrpn-databuttonincrement","nrpn-databuttondecrement","rpn-databuttonincrement","rpn-databuttondecrement"]}}/**
 * The `Note` class represents a single musical note such as `"D3"`, `"G#4"`, `"F-1"`, `"Gb7"`, etc.
 *
 * `Note` objects can be played back on a single channel by calling
 * [`OutputChannel.playNote()`]{@link OutputChannel#playNote} or, on multiple channels of the same
 * output, by calling [`Output.playNote()`]{@link Output#playNote}.
 *
 * The note has [`attack`](#attack) and [`release`](#release) velocities set at `0.5` by default.
 * These can be changed by passing in the appropriate option. It is also possible to set a
 * system-wide default for attack and release velocities by using the
 * [`WebMidi.defaults`](WebMidi#defaults) property.
 *
 * If you prefer to work with raw MIDI values (`0` to `127`), you can use [`rawAttack`](#rawAttack) and
 * [`rawRelease`](#rawRelease) to both get and set the values.
 *
 * The note may have a [`duration`](#duration). If it does, playback will be automatically stopped
 * when the duration has elapsed by sending a `"noteoff"` event. By default, the duration is set to
 * `Infinity`. In this case, it will never stop playing unless explicitly stopped by calling a
 * method such as [`OutputChannel.stopNote()`]{@link OutputChannel#stopNote},
 * [`Output.stopNote()`]{@link Output#stopNote} or similar.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */class ys{constructor(e,t={}){this.duration=ue.defaults.note.duration,this.attack=ue.defaults.note.attack,this.release=ue.defaults.note.release,t.duration!=null&&(this.duration=t.duration),t.attack!=null&&(this.attack=t.attack),t.rawAttack!=null&&(this.attack=le.from7bitToFloat(t.rawAttack)),t.release!=null&&(this.release=t.release),t.rawRelease!=null&&(this.release=le.from7bitToFloat(t.rawRelease)),Number.isInteger(e)?this.identifier=le.toNoteIdentifier(e):this.identifier=e}get identifier(){return this._name+(this._accidental||"")+this._octave}set identifier(e){const t=le.getNoteDetails(e);if(ue.validation&&!e)throw new Error("Invalid note identifier");this._name=t.name,this._accidental=t.accidental,this._octave=t.octave}get name(){return this._name}set name(e){if(ue.validation&&(e=e.toUpperCase(),!["C","D","E","F","G","A","B"].includes(e)))throw new Error("Invalid name value");this._name=e}get accidental(){return this._accidental}set accidental(e){if(ue.validation&&(e=e.toLowerCase(),!["#","##","b","bb"].includes(e)))throw new Error("Invalid accidental value");this._accidental=e}get octave(){return this._octave}set octave(e){if(ue.validation&&(e=parseInt(e),isNaN(e)))throw new Error("Invalid octave value");this._octave=e}get duration(){return this._duration}set duration(e){if(ue.validation&&(e=parseFloat(e),isNaN(e)||e===null||e<0))throw new RangeError("Invalid duration value.");this._duration=e}get attack(){return this._attack}set attack(e){if(ue.validation&&(e=parseFloat(e),isNaN(e)||!(e>=0&&e<=1)))throw new RangeError("Invalid attack value.");this._attack=e}get release(){return this._release}set release(e){if(ue.validation&&(e=parseFloat(e),isNaN(e)||!(e>=0&&e<=1)))throw new RangeError("Invalid release value.");this._release=e}get rawAttack(){return le.fromFloatTo7Bit(this._attack)}set rawAttack(e){this._attack=le.from7bitToFloat(e)}get rawRelease(){return le.fromFloatTo7Bit(this._release)}set rawRelease(e){this._release=le.from7bitToFloat(e)}get number(){return le.toNoteNumber(this.identifier)}getOffsetNumber(e=0,t=0){return ue.validation&&(e=parseInt(e)||0,t=parseInt(t)||0),Math.min(Math.max(this.number+e*12+t,0),127)}}/**
 * The `Utilities` class contains general-purpose utility methods. All methods are static and
 * should be called using the class name. For example: `Utilities.getNoteDetails("C4")`.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */class le{static toNoteNumber(e,t=0){if(t=t==null?0:parseInt(t),isNaN(t))throw new RangeError("Invalid 'octaveOffset' value");typeof e!="string"&&(e="");const n=this.getNoteDetails(e);if(!n)throw new TypeError("Invalid note identifier");const s={C:0,D:2,E:4,F:5,G:7,A:9,B:11};let r=(n.octave+1+t)*12;if(r+=s[n.name],n.accidental&&(n.accidental.startsWith("b")?r-=n.accidental.length:r+=n.accidental.length),r<0||r>127)throw new RangeError("Invalid octaveOffset value");return r}static getNoteDetails(e){Number.isInteger(e)&&(e=this.toNoteIdentifier(e));const t=e.match(/^([CDEFGAB])(#{0,2}|b{0,2})(-?\d+)$/i);if(!t)throw new TypeError("Invalid note identifier");const n=t[1].toUpperCase(),s=parseInt(t[3]);let r=t[2].toLowerCase();return r=r===""?void 0:r,{accidental:r,identifier:n+(r||"")+s,name:n,octave:s}}static sanitizeChannels(e){let t;if(ue.validation){if(e==="all")t=["all"];else if(e==="none")return[]}return Array.isArray(e)?t=e:t=[e],t.indexOf("all")>-1&&(t=$.MIDI_CHANNEL_NUMBERS),t.map(function(n){return parseInt(n)}).filter(function(n){return n>=1&&n<=16})}static toTimestamp(e){let t=!1;const n=parseFloat(e);return isNaN(n)?!1:(typeof e=="string"&&e.substring(0,1)==="+"?n>=0&&(t=ue.time+n):n>=0&&(t=n),t)}static guessNoteNumber(e,t){t=parseInt(t)||0;let n=!1;if(Number.isInteger(e)&&e>=0&&e<=127)n=parseInt(e);else if(parseInt(e)>=0&&parseInt(e)<=127)n=parseInt(e);else if(typeof e=="string"||e instanceof String)try{n=this.toNoteNumber(e.trim(),t)}catch{return!1}return n}static toNoteIdentifier(e,t){if(e=parseInt(e),isNaN(e)||e<0||e>127)throw new RangeError("Invalid note number");if(t=t==null?0:parseInt(t),isNaN(t))throw new RangeError("Invalid octaveOffset value");const n=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],s=Math.floor(e/12-1)+t;return n[e%12]+s.toString()}static buildNote(e,t={}){if(t.octaveOffset=parseInt(t.octaveOffset)||0,e instanceof ys)return e;let n=this.guessNoteNumber(e,t.octaveOffset);if(n===!1)throw new TypeError(`The input could not be parsed as a note (${e})`);return t.octaveOffset=void 0,new ys(n,t)}static buildNoteArray(e,t={}){let n=[];return Array.isArray(e)||(e=[e]),e.forEach(s=>{n.push(this.buildNote(s,t))}),n}static from7bitToFloat(e){return e===1/0&&(e=127),e=parseInt(e)||0,Math.min(Math.max(e/127,0),1)}static fromFloatTo7Bit(e){return e===1/0&&(e=1),e=parseFloat(e)||0,Math.min(Math.max(Math.round(e*127),0),127)}static fromMsbLsbToFloat(e,t=0){ue.validation&&(e=Math.min(Math.max(parseInt(e)||0,0),127),t=Math.min(Math.max(parseInt(t)||0,0),127));const n=((e<<7)+t)/16383;return Math.min(Math.max(n,0),1)}static fromFloatToMsbLsb(e){ue.validation&&(e=Math.min(Math.max(parseFloat(e)||0,0),1));const t=Math.round(e*16383);return{msb:t>>7,lsb:t&127}}static offsetNumber(e,t=0,n=0){if(ue.validation){if(e=parseInt(e),isNaN(e))throw new Error("Invalid note number");t=parseInt(t)||0,n=parseInt(n)||0}return Math.min(Math.max(e+t*12+n,0),127)}static getPropertyByValue(e,t){return Object.keys(e).find(n=>e[n]===t)}static getCcNameByNumber(e){if(!(ue.validation&&(e=parseInt(e),!(e>=0&&e<=127))))return $.CONTROL_CHANGE_MESSAGES[e].name}static getCcNumberByName(e){let t=$.CONTROL_CHANGE_MESSAGES.find(n=>n.name===e);return t?t.number:$.MIDI_CONTROL_CHANGE_MESSAGES[e]}static getChannelModeByNumber(e){if(!(e>=120&&e<=127))return!1;for(let t in $.CHANNEL_MODE_MESSAGES)if($.CHANNEL_MODE_MESSAGES.hasOwnProperty(t)&&e===$.CHANNEL_MODE_MESSAGES[t])return t;return!1}static get isNode(){return typeof process<"u"&&process.versions!=null&&process.versions.node!=null}static get isBrowser(){return typeof window<"u"&&typeof window.document<"u"}}/**
 * The `OutputChannel` class represents a single output MIDI channel. `OutputChannel` objects are
 * provided by an [`Output`](Output) port which, itself, is made available by a device. The
 * `OutputChannel` object is derived from the host's MIDI subsystem and should not be instantiated
 * directly.
 *
 * All 16 `OutputChannel` objects can be found inside the parent output's
 * [`channels`]{@link Output#channels} property.
 *
 * @param {Output} output The [`Output`](Output) this channel belongs to.
 * @param {number} number The MIDI channel number (`1` - `16`).
 *
 * @extends EventEmitter
 * @license Apache-2.0
 * @since 3.0.0
 */class Ef extends bn{constructor(e,t){super(),this._output=e,this._number=t,this._octaveOffset=0}destroy(){this._output=null,this._number=null,this._octaveOffset=0,this.removeListener()}send(e,t={time:0}){return this.output.send(e,t),this}sendKeyAftertouch(e,t,n={}){if(ue.validation){if(n.useRawValue&&(n.rawValue=n.useRawValue),isNaN(parseFloat(t)))throw new RangeError("Invalid key aftertouch value.");if(n.rawValue){if(!(t>=0&&t<=127&&Number.isInteger(t)))throw new RangeError("Key aftertouch raw value must be an integer between 0 and 127.")}else if(!(t>=0&&t<=1))throw new RangeError("Key aftertouch value must be a float between 0 and 1.")}n.rawValue||(t=le.fromFloatTo7Bit(t));const s=ue.octaveOffset+this.output.octaveOffset+this.octaveOffset;return Array.isArray(e)||(e=[e]),le.buildNoteArray(e).forEach(r=>{this.send([($.CHANNEL_MESSAGES.keyaftertouch<<4)+(this.number-1),r.getOffsetNumber(s),t],{time:le.toTimestamp(n.time)})}),this}sendControlChange(e,t,n={}){if(typeof e=="string"&&(e=le.getCcNumberByName(e)),Array.isArray(t)||(t=[t]),ue.validation){if(e===void 0)throw new TypeError("Control change must be identified with a valid name or an integer between 0 and 127.");if(!Number.isInteger(e)||!(e>=0&&e<=127))throw new TypeError("Control change number must be an integer between 0 and 127.");if(t=t.map(s=>{const r=Math.min(Math.max(parseInt(s),0),127);if(isNaN(r))throw new TypeError("Values must be integers between 0 and 127");return r}),t.length===2&&e>=32)throw new TypeError("To use a value array, the controller must be between 0 and 31")}return t.forEach((s,r)=>{this.send([($.CHANNEL_MESSAGES.controlchange<<4)+(this.number-1),e+r*32,t[r]],{time:le.toTimestamp(n.time)})}),this}_selectNonRegisteredParameter(e,t={}){return this.sendControlChange(99,e[0],t),this.sendControlChange(98,e[1],t),this}_deselectRegisteredParameter(e={}){return this.sendControlChange(101,127,e),this.sendControlChange(100,127,e),this}_deselectNonRegisteredParameter(e={}){return this.sendControlChange(101,127,e),this.sendControlChange(100,127,e),this}_selectRegisteredParameter(e,t={}){return this.sendControlChange(101,e[0],t),this.sendControlChange(100,e[1],t),this}_setCurrentParameter(e,t={}){return e=[].concat(e),this.sendControlChange(6,e[0],t),e.length<2?this:(this.sendControlChange(38,e[1],t),this)}sendRpnDecrement(e,t={}){if(Array.isArray(e)||(e=$.REGISTERED_PARAMETERS[e]),ue.validation){if(e===void 0)throw new TypeError("The specified registered parameter is invalid.");let n=!1;if(Object.getOwnPropertyNames($.REGISTERED_PARAMETERS).forEach(s=>{$.REGISTERED_PARAMETERS[s][0]===e[0]&&$.REGISTERED_PARAMETERS[s][1]===e[1]&&(n=!0)}),!n)throw new TypeError("The specified registered parameter is invalid.")}return this._selectRegisteredParameter(e,t),this.sendControlChange(97,0,t),this._deselectRegisteredParameter(t),this}sendRpnIncrement(e,t={}){if(Array.isArray(e)||(e=$.REGISTERED_PARAMETERS[e]),ue.validation){if(e===void 0)throw new TypeError("The specified registered parameter is invalid.");let n=!1;if(Object.getOwnPropertyNames($.REGISTERED_PARAMETERS).forEach(s=>{$.REGISTERED_PARAMETERS[s][0]===e[0]&&$.REGISTERED_PARAMETERS[s][1]===e[1]&&(n=!0)}),!n)throw new TypeError("The specified registered parameter is invalid.")}return this._selectRegisteredParameter(e,t),this.sendControlChange(96,0,t),this._deselectRegisteredParameter(t),this}playNote(e,t={}){this.sendNoteOn(e,t);const n=Array.isArray(e)?e:[e];for(let s of n)if(parseInt(s.duration)>0){const r={time:(le.toTimestamp(t.time)||ue.time)+parseInt(s.duration),release:s.release,rawRelease:s.rawRelease};this.sendNoteOff(s,r)}else if(parseInt(t.duration)>0){const r={time:(le.toTimestamp(t.time)||ue.time)+parseInt(t.duration),release:t.release,rawRelease:t.rawRelease};this.sendNoteOff(s,r)}return this}sendNoteOff(e,t={}){if(ue.validation){if(t.rawRelease!=null&&!(t.rawRelease>=0&&t.rawRelease<=127))throw new RangeError("The 'rawRelease' option must be an integer between 0 and 127");if(t.release!=null&&!(t.release>=0&&t.release<=1))throw new RangeError("The 'release' option must be an number between 0 and 1");t.rawVelocity&&(t.rawRelease=t.velocity,console.warn("The 'rawVelocity' option is deprecated. Use 'rawRelease' instead.")),t.velocity&&(t.release=t.velocity,console.warn("The 'velocity' option is deprecated. Use 'attack' instead."))}let n=64;t.rawRelease!=null?n=t.rawRelease:isNaN(t.release)||(n=Math.round(t.release*127));const s=ue.octaveOffset+this.output.octaveOffset+this.octaveOffset;return le.buildNoteArray(e,{rawRelease:parseInt(n)}).forEach(r=>{this.send([($.CHANNEL_MESSAGES.noteoff<<4)+(this.number-1),r.getOffsetNumber(s),r.rawRelease],{time:le.toTimestamp(t.time)})}),this}stopNote(e,t={}){return this.sendNoteOff(e,t)}sendNoteOn(e,t={}){if(ue.validation){if(t.rawAttack!=null&&!(t.rawAttack>=0&&t.rawAttack<=127))throw new RangeError("The 'rawAttack' option must be an integer between 0 and 127");if(t.attack!=null&&!(t.attack>=0&&t.attack<=1))throw new RangeError("The 'attack' option must be an number between 0 and 1");t.rawVelocity&&(t.rawAttack=t.velocity,t.rawRelease=t.release,console.warn("The 'rawVelocity' option is deprecated. Use 'rawAttack' or 'rawRelease'.")),t.velocity&&(t.attack=t.velocity,console.warn("The 'velocity' option is deprecated. Use 'attack' instead."))}let n=64;t.rawAttack!=null?n=t.rawAttack:isNaN(t.attack)||(n=Math.round(t.attack*127));const s=ue.octaveOffset+this.output.octaveOffset+this.octaveOffset;return le.buildNoteArray(e,{rawAttack:n}).forEach(r=>{this.send([($.CHANNEL_MESSAGES.noteon<<4)+(this.number-1),r.getOffsetNumber(s),r.rawAttack],{time:le.toTimestamp(t.time)})}),this}sendChannelMode(e,t=0,n={}){if(typeof e=="string"&&(e=$.CHANNEL_MODE_MESSAGES[e]),ue.validation){if(e===void 0)throw new TypeError("Invalid channel mode message name or number.");if(isNaN(e)||!(e>=120&&e<=127))throw new TypeError("Invalid channel mode message number.");if(isNaN(parseInt(t))||t<0||t>127)throw new RangeError("Value must be an integer between 0 and 127.")}return this.send([($.CHANNEL_MESSAGES.controlchange<<4)+(this.number-1),e,t],{time:le.toTimestamp(n.time)}),this}sendOmniMode(e,t={}){return e===void 0||e?this.sendChannelMode("omnimodeon",0,t):this.sendChannelMode("omnimodeoff",0,t),this}sendChannelAftertouch(e,t={}){if(ue.validation){if(isNaN(parseFloat(e)))throw new RangeError("Invalid channel aftertouch value.");if(t.rawValue){if(!(e>=0&&e<=127&&Number.isInteger(e)))throw new RangeError("Channel aftertouch raw value must be an integer between 0 and 127.")}else if(!(e>=0&&e<=1))throw new RangeError("Channel aftertouch value must be a float between 0 and 1.")}return t.rawValue||(e=le.fromFloatTo7Bit(e)),this.send([($.CHANNEL_MESSAGES.channelaftertouch<<4)+(this.number-1),Math.round(e)],{time:le.toTimestamp(t.time)}),this}sendMasterTuning(e,t={}){if(e=parseFloat(e)||0,ue.validation&&!(e>-65&&e<64))throw new RangeError("The value must be a decimal number larger than -65 and smaller than 64.");let n=Math.floor(e)+64,s=e-Math.floor(e);s=Math.round((s+1)/2*16383);let r=s>>7&127,a=s&127;return this.sendRpnValue("channelcoarsetuning",n,t),this.sendRpnValue("channelfinetuning",[r,a],t),this}sendModulationRange(e,t,n={}){if(ue.validation){if(!Number.isInteger(e)||!(e>=0&&e<=127))throw new RangeError("The semitones value must be an integer between 0 and 127.");if(t!=null&&(!Number.isInteger(t)||!(t>=0&&t<=127)))throw new RangeError("If specified, the cents value must be an integer between 0 and 127.")}return t>=0&&t<=127||(t=0),this.sendRpnValue("modulationrange",[e,t],n),this}sendNrpnValue(e,t,n={}){if(t=[].concat(t),ue.validation){if(!Array.isArray(e)||!Number.isInteger(e[0])||!Number.isInteger(e[1]))throw new TypeError("The specified NRPN is invalid.");if(!(e[0]>=0&&e[0]<=127))throw new RangeError("The first byte of the NRPN must be between 0 and 127.");if(!(e[1]>=0&&e[1]<=127))throw new RangeError("The second byte of the NRPN must be between 0 and 127.");t.forEach(s=>{if(!(s>=0&&s<=127))throw new RangeError("The data bytes of the NRPN must be between 0 and 127.")})}return this._selectNonRegisteredParameter(e,n),this._setCurrentParameter(t,n),this._deselectNonRegisteredParameter(n),this}sendPitchBend(e,t={}){if(ue.validation)if(t.rawValue&&Array.isArray(e)){if(!(e[0]>=0&&e[0]<=127))throw new RangeError("The pitch bend MSB must be an integer between 0 and 127.");if(!(e[1]>=0&&e[1]<=127))throw new RangeError("The pitch bend LSB must be an integer between 0 and 127.")}else if(t.rawValue&&!Array.isArray(e)){if(!(e>=0&&e<=127))throw new RangeError("The pitch bend MSB must be an integer between 0 and 127.")}else{if(isNaN(e)||e===null)throw new RangeError("Invalid pitch bend value.");if(!(e>=-1&&e<=1))throw new RangeError("The pitch bend value must be a float between -1 and 1.")}let n=0,s=0;if(t.rawValue&&Array.isArray(e))n=e[0],s=e[1];else if(t.rawValue&&!Array.isArray(e))n=e;else{const r=le.fromFloatToMsbLsb((e+1)/2);n=r.msb,s=r.lsb}return this.send([($.CHANNEL_MESSAGES.pitchbend<<4)+(this.number-1),s,n],{time:le.toTimestamp(t.time)}),this}sendPitchBendRange(e,t,n={}){if(ue.validation){if(!Number.isInteger(e)||!(e>=0&&e<=127))throw new RangeError("The semitones value must be an integer between 0 and 127.");if(!Number.isInteger(t)||!(t>=0&&t<=127))throw new RangeError("The cents value must be an integer between 0 and 127.")}return this.sendRpnValue("pitchbendrange",[e,t],n),this}sendProgramChange(e,t={}){if(e=parseInt(e)||0,ue.validation&&!(e>=0&&e<=127))throw new RangeError("The program number must be between 0 and 127.");return this.send([($.CHANNEL_MESSAGES.programchange<<4)+(this.number-1),e],{time:le.toTimestamp(t.time)}),this}sendRpnValue(e,t,n={}){if(Array.isArray(e)||(e=$.REGISTERED_PARAMETERS[e]),ue.validation){if(!Number.isInteger(e[0])||!Number.isInteger(e[1]))throw new TypeError("The specified NRPN is invalid.");if(!(e[0]>=0&&e[0]<=127))throw new RangeError("The first byte of the RPN must be between 0 and 127.");if(!(e[1]>=0&&e[1]<=127))throw new RangeError("The second byte of the RPN must be between 0 and 127.");[].concat(t).forEach(s=>{if(!(s>=0&&s<=127))throw new RangeError("The data bytes of the RPN must be between 0 and 127.")})}return this._selectRegisteredParameter(e,n),this._setCurrentParameter(t,n),this._deselectRegisteredParameter(n),this}sendTuningBank(e,t={}){if(ue.validation&&(!Number.isInteger(e)||!(e>=0&&e<=127)))throw new RangeError("The tuning bank number must be between 0 and 127.");return this.sendRpnValue("tuningbank",e,t),this}sendTuningProgram(e,t={}){if(ue.validation&&(!Number.isInteger(e)||!(e>=0&&e<=127)))throw new RangeError("The tuning program number must be between 0 and 127.");return this.sendRpnValue("tuningprogram",e,t),this}sendLocalControl(e,t={}){return e?this.sendChannelMode("localcontrol",127,t):this.sendChannelMode("localcontrol",0,t)}sendAllNotesOff(e={}){return this.sendChannelMode("allnotesoff",0,e)}sendAllSoundOff(e={}){return this.sendChannelMode("allsoundoff",0,e)}sendResetAllControllers(e={}){return this.sendChannelMode("resetallcontrollers",0,e)}sendPolyphonicMode(e,t={}){return e==="mono"?this.sendChannelMode("monomodeon",0,t):this.sendChannelMode("polymodeon",0,t)}get octaveOffset(){return this._octaveOffset}set octaveOffset(e){if(this.validation&&(e=parseInt(e),isNaN(e)))throw new TypeError("The 'octaveOffset' property must be an integer.");this._octaveOffset=e}get output(){return this._output}get number(){return this._number}}/**
 * The `Output` class represents a single MIDI output port (not to be confused with a MIDI channel).
 * A port is made available by a MIDI device. A MIDI device can advertise several input and output
 * ports. Each port has 16 MIDI channels which can be accessed via the [`channels`](#channels)
 * property.
 *
 * The `Output` object is automatically instantiated by the library according to the host's MIDI
 * subsystem and should not be directly instantiated.
 *
 * You can access all available `Output` objects by referring to the
 * [`WebMidi.outputs`](WebMidi#outputs) array or by using methods such as
 * [`WebMidi.getOutputByName()`](WebMidi#getOutputByName) or
 * [`WebMidi.getOutputById()`](WebMidi#getOutputById).
 *
 * @fires Output#opened
 * @fires Output#disconnected
 * @fires Output#closed
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */class Go extends bn{constructor(e){super(),this._midiOutput=e,this._octaveOffset=0,this.channels=[];for(let t=1;t<=16;t++)this.channels[t]=new Ef(this,t);this._midiOutput.onstatechange=this._onStateChange.bind(this)}async destroy(){this.removeListener(),this.channels.forEach(e=>e.destroy()),this.channels=[],this._midiOutput&&(this._midiOutput.onstatechange=null),await this.close(),this._midiOutput=null}_onStateChange(e){let t={timestamp:ue.time};e.port.connection==="open"?(t.type="opened",t.target=this,t.port=t.target,this.emit("opened",t)):e.port.connection==="closed"&&e.port.state==="connected"?(t.type="closed",t.target=this,t.port=t.target,this.emit("closed",t)):e.port.connection==="closed"&&e.port.state==="disconnected"?(t.type="disconnected",t.port={connection:e.port.connection,id:e.port.id,manufacturer:e.port.manufacturer,name:e.port.name,state:e.port.state,type:e.port.type},this.emit("disconnected",t)):e.port.connection==="pending"&&e.port.state==="disconnected"||console.warn("This statechange event was not caught:",e.port.connection,e.port.state)}async open(){try{return await this._midiOutput.open(),Promise.resolve(this)}catch(e){return Promise.reject(e)}}async close(){this._midiOutput?await this._midiOutput.close():await Promise.resolve()}send(e,t={time:0},n=0){if(e instanceof xh&&(e=le.isNode?e.data:e.rawData),e instanceof Uint8Array&&le.isNode&&(e=Array.from(e)),ue.validation){if(!Array.isArray(e)&&!(e instanceof Uint8Array)&&(e=[e],Array.isArray(t)&&(e=e.concat(t)),t=isNaN(n)?{time:0}:{time:n}),!(parseInt(e[0])>=128&&parseInt(e[0])<=255))throw new RangeError("The first byte (status) must be an integer between 128 and 255.");e.slice(1).forEach(s=>{if(s=parseInt(s),!(s>=0&&s<=255))throw new RangeError("Data bytes must be integers between 0 and 255.")}),t||(t={time:0})}return this._midiOutput.send(e,le.toTimestamp(t.time)),this}sendSysex(e,t=[],n={}){if(e=[].concat(e),t instanceof Uint8Array){const s=new Uint8Array(1+e.length+t.length+1);s[0]=$.SYSTEM_MESSAGES.sysex,s.set(Uint8Array.from(e),1),s.set(t,1+e.length),s[s.length-1]=$.SYSTEM_MESSAGES.sysexend,this.send(s,{time:n.time})}else{const s=e.concat(t,$.SYSTEM_MESSAGES.sysexend);this.send([$.SYSTEM_MESSAGES.sysex].concat(s),{time:n.time})}return this}clear(){return this._midiOutput.clear?this._midiOutput.clear():ue.validation&&console.warn("The 'clear()' method has not yet been implemented in your environment."),this}sendTimecodeQuarterFrame(e,t={}){if(ue.validation&&(e=parseInt(e),isNaN(e)||!(e>=0&&e<=127)))throw new RangeError("The value must be an integer between 0 and 127.");return this.send([$.SYSTEM_MESSAGES.timecode,e],{time:t.time}),this}sendSongPosition(e=0,t={}){e=Math.floor(e)||0;var n=e>>7&127,s=e&127;return this.send([$.SYSTEM_MESSAGES.songposition,n,s],{time:t.time}),this}sendSongSelect(e=0,t={}){if(ue.validation&&(e=parseInt(e),isNaN(e)||!(e>=0&&e<=127)))throw new RangeError("The program value must be between 0 and 127");return this.send([$.SYSTEM_MESSAGES.songselect,e],{time:t.time}),this}sendTuneRequest(e={}){return this.send([$.SYSTEM_MESSAGES.tunerequest],{time:e.time}),this}sendClock(e={}){return this.send([$.SYSTEM_MESSAGES.clock],{time:e.time}),this}sendStart(e={}){return this.send([$.SYSTEM_MESSAGES.start],{time:e.time}),this}sendContinue(e={}){return this.send([$.SYSTEM_MESSAGES.continue],{time:e.time}),this}sendStop(e={}){return this.send([$.SYSTEM_MESSAGES.stop],{time:e.time}),this}sendActiveSensing(e={}){return this.send([$.SYSTEM_MESSAGES.activesensing],{time:e.time}),this}sendReset(e={}){return this.send([$.SYSTEM_MESSAGES.reset],{time:e.time}),this}sendTuningRequest(e={}){return ue.validation&&console.warn("The sendTuningRequest() method has been deprecated. Use sendTuningRequest() instead."),this.sendTuneRequest(e)}sendKeyAftertouch(e,t,n={}){return n.channels==null&&(n.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(n.channels).forEach(s=>{this.channels[s].sendKeyAftertouch(e,t,n)}),this}sendControlChange(e,t,n={},s={}){if(ue.validation&&(Array.isArray(n)||Number.isInteger(n)||n==="all")){const r=n;n=s,n.channels=r,n.channels==="all"&&(n.channels=$.MIDI_CHANNEL_NUMBERS)}return n.channels==null&&(n.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(n.channels).forEach(r=>{this.channels[r].sendControlChange(e,t,n)}),this}sendPitchBendRange(e=0,t=0,n={}){return n.channels==null&&(n.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(n.channels).forEach(s=>{this.channels[s].sendPitchBendRange(e,t,n)}),this}setPitchBendRange(e=0,t=0,n="all",s={}){return ue.validation&&(console.warn("The setPitchBendRange() method is deprecated. Use sendPitchBendRange() instead."),s.channels=n,s.channels==="all"&&(s.channels=$.MIDI_CHANNEL_NUMBERS)),this.sendPitchBendRange(e,t,s)}sendRpnValue(e,t,n={}){return n.channels==null&&(n.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(n.channels).forEach(s=>{this.channels[s].sendRpnValue(e,t,n)}),this}setRegisteredParameter(e,t=[],n="all",s={}){return ue.validation&&(console.warn("The setRegisteredParameter() method is deprecated. Use sendRpnValue() instead."),s.channels=n,s.channels==="all"&&(s.channels=$.MIDI_CHANNEL_NUMBERS)),this.sendRpnValue(e,t,s)}sendChannelAftertouch(e,t={},n={}){if(ue.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const s=t;t=n,t.channels=s,t.channels==="all"&&(t.channels=$.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(t.channels).forEach(s=>{this.channels[s].sendChannelAftertouch(e,t)}),this}sendPitchBend(e,t={},n={}){if(ue.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const s=t;t=n,t.channels=s,t.channels==="all"&&(t.channels=$.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(t.channels).forEach(s=>{this.channels[s].sendPitchBend(e,t)}),this}sendProgramChange(e=0,t={},n={}){if(ue.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const s=t;t=n,t.channels=s,t.channels==="all"&&(t.channels=$.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(t.channels).forEach(s=>{this.channels[s].sendProgramChange(e,t)}),this}sendModulationRange(e,t,n={}){return n.channels==null&&(n.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(n.channels).forEach(s=>{this.channels[s].sendModulationRange(e,t,n)}),this}setModulationRange(e=0,t=0,n="all",s={}){return ue.validation&&(console.warn("The setModulationRange() method is deprecated. Use sendModulationRange() instead."),s.channels=n,s.channels==="all"&&(s.channels=$.MIDI_CHANNEL_NUMBERS)),this.sendModulationRange(e,t,s)}sendMasterTuning(e,t={}){return t.channels==null&&(t.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(t.channels).forEach(n=>{this.channels[n].sendMasterTuning(e,t)}),this}setMasterTuning(e,t={},n={}){return ue.validation&&(console.warn("The setMasterTuning() method is deprecated. Use sendMasterTuning() instead."),n.channels=t,n.channels==="all"&&(n.channels=$.MIDI_CHANNEL_NUMBERS)),this.sendMasterTuning(e,n)}sendTuningProgram(e,t={}){return t.channels==null&&(t.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(t.channels).forEach(n=>{this.channels[n].sendTuningProgram(e,t)}),this}setTuningProgram(e,t="all",n={}){return ue.validation&&(console.warn("The setTuningProgram() method is deprecated. Use sendTuningProgram() instead."),n.channels=t,n.channels==="all"&&(n.channels=$.MIDI_CHANNEL_NUMBERS)),this.sendTuningProgram(e,n)}sendTuningBank(e=0,t={}){return t.channels==null&&(t.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(t.channels).forEach(n=>{this.channels[n].sendTuningBank(e,t)}),this}setTuningBank(e,t="all",n={}){return ue.validation&&(console.warn("The setTuningBank() method is deprecated. Use sendTuningBank() instead."),n.channels=t,n.channels==="all"&&(n.channels=$.MIDI_CHANNEL_NUMBERS)),this.sendTuningBank(e,n)}sendChannelMode(e,t=0,n={},s={}){if(ue.validation&&(Array.isArray(n)||Number.isInteger(n)||n==="all")){const r=n;n=s,n.channels=r,n.channels==="all"&&(n.channels=$.MIDI_CHANNEL_NUMBERS)}return n.channels==null&&(n.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(n.channels).forEach(r=>{this.channels[r].sendChannelMode(e,t,n)}),this}sendAllSoundOff(e={}){return e.channels==null&&(e.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(e.channels).forEach(t=>{this.channels[t].sendAllSoundOff(e)}),this}sendAllNotesOff(e={}){return e.channels==null&&(e.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(e.channels).forEach(t=>{this.channels[t].sendAllNotesOff(e)}),this}sendResetAllControllers(e={},t={}){if(ue.validation&&(Array.isArray(e)||Number.isInteger(e)||e==="all")){const n=e;e=t,e.channels=n,e.channels==="all"&&(e.channels=$.MIDI_CHANNEL_NUMBERS)}return e.channels==null&&(e.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(e.channels).forEach(n=>{this.channels[n].sendResetAllControllers(e)}),this}sendPolyphonicMode(e,t={},n={}){if(ue.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const s=t;t=n,t.channels=s,t.channels==="all"&&(t.channels=$.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(t.channels).forEach(s=>{this.channels[s].sendPolyphonicMode(e,t)}),this}sendLocalControl(e,t={},n={}){if(ue.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const s=t;t=n,t.channels=s,t.channels==="all"&&(t.channels=$.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(t.channels).forEach(s=>{this.channels[s].sendLocalControl(e,t)}),this}sendOmniMode(e,t={},n={}){if(ue.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const s=t;t=n,t.channels=s,t.channels==="all"&&(t.channels=$.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(t.channels).forEach(s=>{this.channels[s].sendOmniMode(e,t)}),this}sendNrpnValue(e,t,n={}){return n.channels==null&&(n.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(n.channels).forEach(s=>{this.channels[s].sendNrpnValue(e,t,n)}),this}setNonRegisteredParameter(e,t=[],n="all",s={}){return ue.validation&&(console.warn("The setNonRegisteredParameter() method is deprecated. Use sendNrpnValue() instead."),s.channels=n,s.channels==="all"&&(s.channels=$.MIDI_CHANNEL_NUMBERS)),this.sendNrpnValue(e,t,s)}sendRpnIncrement(e,t={}){return t.channels==null&&(t.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(t.channels).forEach(n=>{this.channels[n].sendRpnIncrement(e,t)}),this}incrementRegisteredParameter(e,t="all",n={}){return ue.validation&&(console.warn("The incrementRegisteredParameter() method is deprecated. Use sendRpnIncrement() instead."),n.channels=t,n.channels==="all"&&(n.channels=$.MIDI_CHANNEL_NUMBERS)),this.sendRpnIncrement(e,n)}sendRpnDecrement(e,t={}){return t.channels==null&&(t.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(t.channels).forEach(n=>{this.channels[n].sendRpnDecrement(e,t)}),this}decrementRegisteredParameter(e,t="all",n={}){return ue.validation&&(console.warn("The decrementRegisteredParameter() method is deprecated. Use sendRpnDecrement() instead."),n.channels=t,n.channels==="all"&&(n.channels=$.MIDI_CHANNEL_NUMBERS)),this.sendRpnDecrement(e,n)}sendNoteOff(e,t={},n={}){if(ue.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const s=t;t=n,t.channels=s,t.channels==="all"&&(t.channels=$.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(t.channels).forEach(s=>{this.channels[s].sendNoteOff(e,t)}),this}stopNote(e,t){return this.sendNoteOff(e,t)}playNote(e,t={},n={}){if(ue.validation&&(t.rawVelocity&&console.warn("The 'rawVelocity' option is deprecated. Use 'rawAttack' instead."),t.velocity&&console.warn("The 'velocity' option is deprecated. Use 'velocity' instead."),Array.isArray(t)||Number.isInteger(t)||t==="all")){const s=t;t=n,t.channels=s,t.channels==="all"&&(t.channels=$.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(t.channels).forEach(s=>{this.channels[s].playNote(e,t)}),this}sendNoteOn(e,t={},n={}){if(ue.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const s=t;t=n,t.channels=s,t.channels==="all"&&(t.channels=$.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(t.channels).forEach(s=>{this.channels[s].sendNoteOn(e,t)}),this}get name(){return this._midiOutput.name}get id(){return this._midiOutput.id}get connection(){return this._midiOutput.connection}get manufacturer(){return this._midiOutput.manufacturer}get state(){return this._midiOutput.state}get type(){return this._midiOutput.type}get octaveOffset(){return this._octaveOffset}set octaveOffset(e){if(this.validation&&(e=parseInt(e),isNaN(e)))throw new TypeError("The 'octaveOffset' property must be an integer.");this._octaveOffset=e}}/**
 * The `Forwarder` class allows the forwarding of MIDI messages to predetermined outputs. When you
 * call its [`forward()`](#forward) method, it will send the specified [`Message`](Message) object
 * to all the outputs listed in its [`destinations`](#destinations) property.
 *
 * If specific channels or message types have been defined in the [`channels`](#channels) or
 * [`types`](#types) properties, only messages matching the channels/types will be forwarded.
 *
 * While it can be manually instantiated, you are more likely to come across a `Forwarder` object as
 * the return value of the [`Input.addForwarder()`](Input#addForwarder) method.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */class Ql{constructor(e=[],t={}){this.destinations=[],this.types=[...Object.keys($.SYSTEM_MESSAGES),...Object.keys($.CHANNEL_MESSAGES)],this.channels=$.MIDI_CHANNEL_NUMBERS,this.suspended=!1,Array.isArray(e)||(e=[e]),t.types&&!Array.isArray(t.types)&&(t.types=[t.types]),t.channels&&!Array.isArray(t.channels)&&(t.channels=[t.channels]),ue.validation&&(e.forEach(n=>{if(!(n instanceof Go))throw new TypeError("Destinations must be of type 'Output'.")}),t.types!==void 0&&t.types.forEach(n=>{if(!$.SYSTEM_MESSAGES.hasOwnProperty(n)&&!$.CHANNEL_MESSAGES.hasOwnProperty(n))throw new TypeError("Type must be a valid message type.")}),t.channels!==void 0&&t.channels.forEach(n=>{if(!$.MIDI_CHANNEL_NUMBERS.includes(n))throw new TypeError("MIDI channel must be between 1 and 16.")})),this.destinations=e,t.types&&(this.types=t.types),t.channels&&(this.channels=t.channels)}forward(e){this.suspended||this.types.includes(e.type)&&(e.channel&&!this.channels.includes(e.channel)||this.destinations.forEach(t=>{ue.validation&&!(t instanceof Go)||t.send(e)}))}}/**
 * The `InputChannel` class represents a single MIDI input channel (1-16) from a single input
 * device. This object is derived from the host's MIDI subsystem and should not be instantiated
 * directly.
 *
 * All 16 `InputChannel` objects can be found inside the input's [`channels`](Input#channels)
 * property.
 *
 * @fires InputChannel#midimessage
 * @fires InputChannel#unknownmessage
 *
 * @fires InputChannel#noteoff
 * @fires InputChannel#noteon
 * @fires InputChannel#keyaftertouch
 * @fires InputChannel#programchange
 * @fires InputChannel#channelaftertouch
 * @fires InputChannel#pitchbend
 *
 * @fires InputChannel#allnotesoff
 * @fires InputChannel#allsoundoff
 * @fires InputChannel#localcontrol
 * @fires InputChannel#monomode
 * @fires InputChannel#omnimode
 * @fires InputChannel#resetallcontrollers
 *
 * @fires InputChannel#event:nrpn
 * @fires InputChannel#event:nrpn-dataentrycoarse
 * @fires InputChannel#event:nrpn-dataentryfine
 * @fires InputChannel#event:nrpn-dataincrement
 * @fires InputChannel#event:nrpn-datadecrement
 * @fires InputChannel#event:rpn
 * @fires InputChannel#event:rpn-dataentrycoarse
 * @fires InputChannel#event:rpn-dataentryfine
 * @fires InputChannel#event:rpn-dataincrement
 * @fires InputChannel#event:rpn-datadecrement
 *
 * @fires InputChannel#controlchange
 * @fires InputChannel#event:controlchange-controllerxxx
 * @fires InputChannel#event:controlchange-bankselectcoarse
 * @fires InputChannel#event:controlchange-modulationwheelcoarse
 * @fires InputChannel#event:controlchange-breathcontrollercoarse
 * @fires InputChannel#event:controlchange-footcontrollercoarse
 * @fires InputChannel#event:controlchange-portamentotimecoarse
 * @fires InputChannel#event:controlchange-dataentrycoarse
 * @fires InputChannel#event:controlchange-volumecoarse
 * @fires InputChannel#event:controlchange-balancecoarse
 * @fires InputChannel#event:controlchange-pancoarse
 * @fires InputChannel#event:controlchange-expressioncoarse
 * @fires InputChannel#event:controlchange-effectcontrol1coarse
 * @fires InputChannel#event:controlchange-effectcontrol2coarse
 * @fires InputChannel#event:controlchange-generalpurposecontroller1
 * @fires InputChannel#event:controlchange-generalpurposecontroller2
 * @fires InputChannel#event:controlchange-generalpurposecontroller3
 * @fires InputChannel#event:controlchange-generalpurposecontroller4
 * @fires InputChannel#event:controlchange-bankselectfine
 * @fires InputChannel#event:controlchange-modulationwheelfine
 * @fires InputChannel#event:controlchange-breathcontrollerfine
 * @fires InputChannel#event:controlchange-footcontrollerfine
 * @fires InputChannel#event:controlchange-portamentotimefine
 * @fires InputChannel#event:controlchange-dataentryfine
 * @fires InputChannel#event:controlchange-channelvolumefine
 * @fires InputChannel#event:controlchange-balancefine
 * @fires InputChannel#event:controlchange-panfine
 * @fires InputChannel#event:controlchange-expressionfine
 * @fires InputChannel#event:controlchange-effectcontrol1fine
 * @fires InputChannel#event:controlchange-effectcontrol2fine
 * @fires InputChannel#event:controlchange-damperpedal
 * @fires InputChannel#event:controlchange-portamento
 * @fires InputChannel#event:controlchange-sostenuto
 * @fires InputChannel#event:controlchange-softpedal
 * @fires InputChannel#event:controlchange-legatopedal
 * @fires InputChannel#event:controlchange-hold2
 * @fires InputChannel#event:controlchange-soundvariation
 * @fires InputChannel#event:controlchange-resonance
 * @fires InputChannel#event:controlchange-releasetime
 * @fires InputChannel#event:controlchange-attacktime
 * @fires InputChannel#event:controlchange-brightness
 * @fires InputChannel#event:controlchange-decaytime
 * @fires InputChannel#event:controlchange-vibratorate
 * @fires InputChannel#event:controlchange-vibratodepth
 * @fires InputChannel#event:controlchange-vibratodelay
 * @fires InputChannel#event:controlchange-generalpurposecontroller5
 * @fires InputChannel#event:controlchange-generalpurposecontroller6
 * @fires InputChannel#event:controlchange-generalpurposecontroller7
 * @fires InputChannel#event:controlchange-generalpurposecontroller8
 * @fires InputChannel#event:controlchange-portamentocontrol
 * @fires InputChannel#event:controlchange-highresolutionvelocityprefix
 * @fires InputChannel#event:controlchange-effect1depth
 * @fires InputChannel#event:controlchange-effect2depth
 * @fires InputChannel#event:controlchange-effect3depth
 * @fires InputChannel#event:controlchange-effect4depth
 * @fires InputChannel#event:controlchange-effect5depth
 * @fires InputChannel#event:controlchange-dataincrement
 * @fires InputChannel#event:controlchange-datadecrement
 * @fires InputChannel#event:controlchange-nonregisteredparameterfine
 * @fires InputChannel#event:controlchange-nonregisteredparametercoarse
 * @fires InputChannel#event:controlchange-registeredparameterfine
 * @fires InputChannel#event:controlchange-registeredparametercoarse
 * @fires InputChannel#event:controlchange-allsoundoff
 * @fires InputChannel#event:controlchange-resetallcontrollers
 * @fires InputChannel#event:controlchange-localcontrol
 * @fires InputChannel#event:controlchange-allnotesoff
 * @fires InputChannel#event:controlchange-omnimodeoff
 * @fires InputChannel#event:controlchange-omnimodeon
 * @fires InputChannel#event:controlchange-monomodeon
 * @fires InputChannel#event:controlchange-polymodeon
 * @fires InputChannel#event:
 *
 * @extends EventEmitter
 * @license Apache-2.0
 * @since 3.0.0
 */class Tf extends bn{constructor(e,t){super(),this._input=e,this._number=t,this._octaveOffset=0,this._nrpnBuffer=[],this._rpnBuffer=[],this.parameterNumberEventsEnabled=!0,this.notesState=new Array(128).fill(!1)}destroy(){this._input=null,this._number=null,this._octaveOffset=0,this._nrpnBuffer=[],this.notesState=new Array(128).fill(!1),this.parameterNumberEventsEnabled=!1,this.removeListener()}_processMidiMessageEvent(e){const t=Object.assign({},e);t.port=this.input,t.target=this,t.type="midimessage",this.emit(t.type,t),this._parseEventForStandardMessages(t)}_parseEventForStandardMessages(e){const t=Object.assign({},e);t.type=t.message.type||"unknownmessage";const n=e.message.dataBytes[0],s=e.message.dataBytes[1];if(t.type==="noteoff"||t.type==="noteon"&&s===0)this.notesState[n]=!1,t.type="noteoff",t.note=new ys(le.offsetNumber(n,this.octaveOffset+this.input.octaveOffset+ue.octaveOffset),{rawAttack:0,rawRelease:s}),t.value=le.from7bitToFloat(s),t.rawValue=s,t.velocity=t.note.release,t.rawVelocity=t.note.rawRelease;else if(t.type==="noteon")this.notesState[n]=!0,t.note=new ys(le.offsetNumber(n,this.octaveOffset+this.input.octaveOffset+ue.octaveOffset),{rawAttack:s}),t.value=le.from7bitToFloat(s),t.rawValue=s,t.velocity=t.note.attack,t.rawVelocity=t.note.rawAttack;else if(t.type==="keyaftertouch")t.note=new ys(le.offsetNumber(n,this.octaveOffset+this.input.octaveOffset+ue.octaveOffset)),t.value=le.from7bitToFloat(s),t.rawValue=s,t.identifier=t.note.identifier,t.key=t.note.number,t.rawKey=n;else if(t.type==="controlchange"){t.controller={number:n,name:$.CONTROL_CHANGE_MESSAGES[n].name,description:$.CONTROL_CHANGE_MESSAGES[n].description,position:$.CONTROL_CHANGE_MESSAGES[n].position},t.subtype=t.controller.name||"controller"+n,t.value=le.from7bitToFloat(s),t.rawValue=s;const r=Object.assign({},t);r.type=`${t.type}-controller${n}`,delete r.subtype,this.emit(r.type,r);const a=Object.assign({},t);a.type=`${t.type}-`+$.CONTROL_CHANGE_MESSAGES[n].name,delete a.subtype,a.type.indexOf("controller")!==0&&this.emit(a.type,a),t.message.dataBytes[0]>=120&&this._parseChannelModeMessage(t),this.parameterNumberEventsEnabled&&this._isRpnOrNrpnController(t.message.dataBytes[0])&&this._parseEventForParameterNumber(t)}else t.type==="programchange"?(t.value=n,t.rawValue=t.value):t.type==="channelaftertouch"?(t.value=le.from7bitToFloat(n),t.rawValue=n):t.type==="pitchbend"?(t.value=((s<<7)+n-8192)/8192,t.rawValue=(s<<7)+n):t.type="unknownmessage";this.emit(t.type,t)}_parseChannelModeMessage(e){const t=Object.assign({},e);t.type=t.controller.name,t.type==="localcontrol"&&(t.value=t.message.data[2]===127,t.rawValue=t.message.data[2]),t.type==="omnimodeon"?(t.type="omnimode",t.value=!0,t.rawValue=t.message.data[2]):t.type==="omnimodeoff"&&(t.type="omnimode",t.value=!1,t.rawValue=t.message.data[2]),t.type==="monomodeon"?(t.type="monomode",t.value=!0,t.rawValue=t.message.data[2]):t.type==="polymodeon"&&(t.type="monomode",t.value=!1,t.rawValue=t.message.data[2]),this.emit(t.type,t)}_parseEventForParameterNumber(e){const t=e.message.dataBytes[0],n=e.message.dataBytes[1];t===99||t===101?(this._nrpnBuffer=[],this._rpnBuffer=[],t===99?this._nrpnBuffer=[e.message]:n!==127&&(this._rpnBuffer=[e.message])):t===98||t===100?t===98?(this._rpnBuffer=[],this._nrpnBuffer.length===1?this._nrpnBuffer.push(e.message):this._nrpnBuffer=[]):(this._nrpnBuffer=[],this._rpnBuffer.length===1&&n!==127?this._rpnBuffer.push(e.message):this._rpnBuffer=[]):(t===6||t===38||t===96||t===97)&&(this._rpnBuffer.length===2?this._dispatchParameterNumberEvent("rpn",this._rpnBuffer[0].dataBytes[1],this._rpnBuffer[1].dataBytes[1],e):this._nrpnBuffer.length===2?this._dispatchParameterNumberEvent("nrpn",this._nrpnBuffer[0].dataBytes[1],this._nrpnBuffer[1].dataBytes[1],e):(this._nrpnBuffer=[],this._rpnBuffer=[]))}_isRpnOrNrpnController(e){return e===6||e===38||e===96||e===97||e===98||e===99||e===100||e===101}_dispatchParameterNumberEvent(e,t,n,s){e=e==="nrpn"?"nrpn":"rpn";const r={target:s.target,timestamp:s.timestamp,message:s.message,parameterMsb:t,parameterLsb:n,value:le.from7bitToFloat(s.message.dataBytes[1]),rawValue:s.message.dataBytes[1]};e==="rpn"?r.parameter=Object.keys($.REGISTERED_PARAMETERS).find(c=>$.REGISTERED_PARAMETERS[c][0]===t&&$.REGISTERED_PARAMETERS[c][1]===n):r.parameter=(t<<7)+n;const a=$.CONTROL_CHANGE_MESSAGES[s.message.dataBytes[0]].name;r.type=`${e}-${a}`,this.emit(r.type,r);const o=Object.assign({},r);o.type==="nrpn-dataincrement"?o.type="nrpn-databuttonincrement":o.type==="nrpn-datadecrement"?o.type="nrpn-databuttondecrement":o.type==="rpn-dataincrement"?o.type="rpn-databuttonincrement":o.type==="rpn-datadecrement"&&(o.type="rpn-databuttondecrement"),this.emit(o.type,o),r.type=e,r.subtype=a,this.emit(r.type,r)}getChannelModeByNumber(e){return ue.validation&&(console.warn("The 'getChannelModeByNumber()' method has been moved to the 'Utilities' class."),e=Math.floor(e)),le.getChannelModeByNumber(e)}getCcNameByNumber(e){if(ue.validation&&(console.warn("The 'getCcNameByNumber()' method has been moved to the 'Utilities' class."),e=parseInt(e),!(e>=0&&e<=127)))throw new RangeError("Invalid control change number.");return le.getCcNameByNumber(e)}getNoteState(e){e instanceof ys&&(e=e.identifier);const t=le.guessNoteNumber(e,ue.octaveOffset+this.input.octaveOffset+this.octaveOffset);return this.notesState[t]}get octaveOffset(){return this._octaveOffset}set octaveOffset(e){if(this.validation&&(e=parseInt(e),isNaN(e)))throw new TypeError("The 'octaveOffset' property must be an integer.");this._octaveOffset=e}get input(){return this._input}get number(){return this._number}get nrpnEventsEnabled(){return this.parameterNumberEventsEnabled}set nrpnEventsEnabled(e){this.validation&&(e=!!e),this.parameterNumberEventsEnabled=e}}/**
 * The `Message` class represents a single MIDI message. It has several properties that make it
 * easy to make sense of the binary data it contains.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */class xh{constructor(e){this.rawData=e,this.data=Array.from(this.rawData),this.statusByte=this.rawData[0],this.rawDataBytes=this.rawData.slice(1),this.dataBytes=this.data.slice(1),this.isChannelMessage=!1,this.isSystemMessage=!1,this.command=void 0,this.channel=void 0,this.manufacturerId=void 0,this.type=void 0,this.statusByte<240?(this.isChannelMessage=!0,this.command=this.statusByte>>4,this.channel=(this.statusByte&15)+1):(this.isSystemMessage=!0,this.command=this.statusByte),this.isChannelMessage?this.type=le.getPropertyByValue($.CHANNEL_MESSAGES,this.command):this.isSystemMessage&&(this.type=le.getPropertyByValue($.SYSTEM_MESSAGES,this.command)),this.statusByte===$.SYSTEM_MESSAGES.sysex&&(this.dataBytes[0]===0?(this.manufacturerId=this.dataBytes.slice(0,3),this.dataBytes=this.dataBytes.slice(3,this.rawDataBytes.length-1),this.rawDataBytes=this.rawDataBytes.slice(3,this.rawDataBytes.length-1)):(this.manufacturerId=[this.dataBytes[0]],this.dataBytes=this.dataBytes.slice(1,this.dataBytes.length-1),this.rawDataBytes=this.rawDataBytes.slice(1,this.rawDataBytes.length-1)))}}/**
 * The `Input` class represents a single MIDI input port. This object is automatically instantiated
 * by the library according to the host's MIDI subsystem and does not need to be directly
 * instantiated. Instead, you can access all `Input` objects by referring to the
 * [`WebMidi.inputs`](WebMidi#inputs) array. You can also retrieve inputs by using methods such as
 * [`WebMidi.getInputByName()`](WebMidi#getInputByName) and
 * [`WebMidi.getInputById()`](WebMidi#getInputById).
 *
 * Note that a single MIDI device may expose several inputs and/or outputs.
 *
 * **Important**: the `Input` class does not directly fire channel-specific MIDI messages
 * (such as [`noteon`](InputChannel#event:noteon) or
 * [`controlchange`](InputChannel#event:controlchange), etc.). The [`InputChannel`](InputChannel)
 * object does that. However, you can still use the
 * [`Input.addListener()`](#addListener) method to listen to channel-specific events on multiple
 * [`InputChannel`](InputChannel) objects at once.
 *
 * @fires Input#opened
 * @fires Input#disconnected
 * @fires Input#closed
 * @fires Input#midimessage
 *
 * @fires Input#sysex
 * @fires Input#timecode
 * @fires Input#songposition
 * @fires Input#songselect
 * @fires Input#tunerequest
 * @fires Input#clock
 * @fires Input#start
 * @fires Input#continue
 * @fires Input#stop
 * @fires Input#activesensing
 * @fires Input#reset
 *
 * @fires Input#unknownmidimessage
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */class bf extends bn{constructor(e){super(),this._midiInput=e,this._octaveOffset=0,this.channels=[];for(let t=1;t<=16;t++)this.channels[t]=new Tf(this,t);this._forwarders=[],this._midiInput.onstatechange=this._onStateChange.bind(this),this._midiInput.onmidimessage=this._onMidiMessage.bind(this)}async destroy(){this.removeListener(),this.channels.forEach(e=>e.destroy()),this.channels=[],this._forwarders=[],this._midiInput&&(this._midiInput.onstatechange=null,this._midiInput.onmidimessage=null),await this.close(),this._midiInput=null}_onStateChange(e){let t={timestamp:ue.time,target:this,port:this};e.port.connection==="open"?(t.type="opened",this.emit("opened",t)):e.port.connection==="closed"&&e.port.state==="connected"?(t.type="closed",this.emit("closed",t)):e.port.connection==="closed"&&e.port.state==="disconnected"?(t.type="disconnected",t.port={connection:e.port.connection,id:e.port.id,manufacturer:e.port.manufacturer,name:e.port.name,state:e.port.state,type:e.port.type},this.emit("disconnected",t)):e.port.connection==="pending"&&e.port.state==="disconnected"||console.warn("This statechange event was not caught: ",e.port.connection,e.port.state)}_onMidiMessage(e){const t=new xh(e.data),n={port:this,target:this,message:t,timestamp:e.timeStamp,type:"midimessage",data:t.data,rawData:t.data,statusByte:t.data[0],dataBytes:t.dataBytes};this.emit("midimessage",n),t.isSystemMessage?this._parseEvent(n):t.isChannelMessage&&this.channels[t.channel]._processMidiMessageEvent(n),this._forwarders.forEach(s=>s.forward(t))}_parseEvent(e){const t=Object.assign({},e);t.type=t.message.type||"unknownmidimessage",t.type==="songselect"&&(t.song=e.data[1]+1,t.value=e.data[1],t.rawValue=t.value),this.emit(t.type,t)}async open(){try{await this._midiInput.open()}catch(e){return Promise.reject(e)}return Promise.resolve(this)}async close(){if(!this._midiInput)return Promise.resolve(this);try{await this._midiInput.close()}catch(e){return Promise.reject(e)}return Promise.resolve(this)}getChannelModeByNumber(){ue.validation&&console.warn("The 'getChannelModeByNumber()' method has been moved to the 'Utilities' class.")}addListener(e,t,n={}){if(ue.validation&&typeof n=="function"){let s=t!=null?[].concat(t):void 0;t=n,n={channels:s}}if($.CHANNEL_EVENTS.includes(e)){n.channels===void 0&&(n.channels=$.MIDI_CHANNEL_NUMBERS);let s=[];return le.sanitizeChannels(n.channels).forEach(r=>{s.push(this.channels[r].addListener(e,t,n))}),s}else return super.addListener(e,t,n)}addOneTimeListener(e,t,n={}){return n.remaining=1,this.addListener(e,t,n)}on(e,t,n,s){return this.addListener(e,t,n,s)}hasListener(e,t,n={}){if(ue.validation&&typeof n=="function"){let s=[].concat(t);t=n,n={channels:s}}return $.CHANNEL_EVENTS.includes(e)?(n.channels===void 0&&(n.channels=$.MIDI_CHANNEL_NUMBERS),le.sanitizeChannels(n.channels).every(s=>this.channels[s].hasListener(e,t))):super.hasListener(e,t)}removeListener(e,t,n={}){if(ue.validation&&typeof n=="function"){let s=[].concat(t);t=n,n={channels:s}}if(n.channels===void 0&&(n.channels=$.MIDI_CHANNEL_NUMBERS),e==null)return le.sanitizeChannels(n.channels).forEach(s=>{this.channels[s]&&this.channels[s].removeListener()}),super.removeListener();$.CHANNEL_EVENTS.includes(e)?le.sanitizeChannels(n.channels).forEach(s=>{this.channels[s].removeListener(e,t,n)}):super.removeListener(e,t,n)}addForwarder(e,t={}){let n;return e instanceof Ql?n=e:n=new Ql(e,t),this._forwarders.push(n),n}removeForwarder(e){this._forwarders=this._forwarders.filter(t=>t!==e)}hasForwarder(e){return this._forwarders.includes(e)}get name(){return this._midiInput.name}get id(){return this._midiInput.id}get connection(){return this._midiInput.connection}get manufacturer(){return this._midiInput.manufacturer}get octaveOffset(){return this._octaveOffset}set octaveOffset(e){if(this.validation&&(e=parseInt(e),isNaN(e)))throw new TypeError("The 'octaveOffset' property must be an integer.");this._octaveOffset=e}get state(){return this._midiInput.state}get type(){return this._midiInput.type}get nrpnEventsEnabled(){return ue.validation&&console.warn("The 'nrpnEventsEnabled' property has been moved to the 'InputChannel' class."),!1}}/**
 * The `WebMidi` object makes it easier to work with the low-level Web MIDI API. Basically, it
 * simplifies sending outgoing MIDI messages and reacting to incoming MIDI messages.
 *
 * When using the WebMidi.js library, you should know that the `WebMidi` class has already been
 * instantiated. You cannot instantiate it yourself. If you use the **IIFE** version, you should
 * simply use the global object called `WebMidi`. If you use the **CJS** (CommonJS) or **ESM** (ES6
 * module) version, you get an already-instantiated object when you import the module.
 *
 * @fires WebMidi#connected
 * @fires WebMidi#disabled
 * @fires WebMidi#disconnected
 * @fires WebMidi#enabled
 * @fires WebMidi#error
 * @fires WebMidi#midiaccessgranted
 * @fires WebMidi#portschanged
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */class wf extends bn{constructor(){super(),this.defaults={note:{attack:le.from7bitToFloat(64),release:le.from7bitToFloat(64),duration:1/0}},this.interface=null,this.validation=!0,this._inputs=[],this._disconnectedInputs=[],this._outputs=[],this._disconnectedOutputs=[],this._stateChangeQueue=[],this._octaveOffset=0}async enable(e={},t=!1){if(le.isNode){try{window.navigator}catch{let o=await Object.getPrototypeOf(async function(){}).constructor(`
        let jzz = await import("jzz");
        return jzz.default;
        `)();global.navigator||(global.navigator={}),Object.assign(global.navigator,o)}try{}catch{global.performance=await Object.getPrototypeOf(async function(){}).constructor(`
        let perf_hooks = await import("perf_hooks");
        return perf_hooks.performance;
        `)()}}if(this.validation=e.validation!==!1,this.validation&&(typeof e=="function"&&(e={callback:e,sysex:t}),t&&(e.sysex=!0)),this.enabled)return typeof e.callback=="function"&&e.callback(),Promise.resolve();const n={timestamp:this.time,target:this,type:"error",error:void 0},s={timestamp:this.time,target:this,type:"midiaccessgranted"},r={timestamp:this.time,target:this,type:"enabled"};try{typeof e.requestMIDIAccessFunction=="function"?this.interface=await e.requestMIDIAccessFunction({sysex:e.sysex,software:e.software}):this.interface=await navigator.requestMIDIAccess({sysex:e.sysex,software:e.software})}catch(a){return n.error=a,this.emit("error",n),typeof e.callback=="function"&&e.callback(a),Promise.reject(a)}this.emit("midiaccessgranted",s),this.interface.onstatechange=this._onInterfaceStateChange.bind(this);try{await this._updateInputsAndOutputs()}catch(a){return n.error=a,this.emit("error",n),typeof e.callback=="function"&&e.callback(a),Promise.reject(a)}return this.emit("enabled",r),typeof e.callback=="function"&&e.callback(),Promise.resolve(this)}async disable(){return this.interface&&(this.interface.onstatechange=void 0),this._destroyInputsAndOutputs().then(()=>{navigator&&typeof navigator.close=="function"&&navigator.close(),this.interface=null;let e={timestamp:this.time,target:this,type:"disabled"};this.emit("disabled",e),this.removeListener()})}getInputById(e,t={disconnected:!1}){if(this.validation){if(!this.enabled)throw new Error("WebMidi is not enabled.");if(!e)return}if(t.disconnected){for(let n=0;n<this._disconnectedInputs.length;n++)if(this._disconnectedInputs[n].id===e.toString())return this._disconnectedInputs[n]}else for(let n=0;n<this.inputs.length;n++)if(this.inputs[n].id===e.toString())return this.inputs[n]}getInputByName(e,t={disconnected:!1}){if(this.validation){if(!this.enabled)throw new Error("WebMidi is not enabled.");if(!e)return;e=e.toString()}if(t.disconnected){for(let n=0;n<this._disconnectedInputs.length;n++)if(~this._disconnectedInputs[n].name.indexOf(e))return this._disconnectedInputs[n]}else for(let n=0;n<this.inputs.length;n++)if(~this.inputs[n].name.indexOf(e))return this.inputs[n]}getOutputByName(e,t={disconnected:!1}){if(this.validation){if(!this.enabled)throw new Error("WebMidi is not enabled.");if(!e)return;e=e.toString()}if(t.disconnected){for(let n=0;n<this._disconnectedOutputs.length;n++)if(~this._disconnectedOutputs[n].name.indexOf(e))return this._disconnectedOutputs[n]}else for(let n=0;n<this.outputs.length;n++)if(~this.outputs[n].name.indexOf(e))return this.outputs[n]}getOutputById(e,t={disconnected:!1}){if(this.validation){if(!this.enabled)throw new Error("WebMidi is not enabled.");if(!e)return}if(t.disconnected){for(let n=0;n<this._disconnectedOutputs.length;n++)if(this._disconnectedOutputs[n].id===e.toString())return this._disconnectedOutputs[n]}else for(let n=0;n<this.outputs.length;n++)if(this.outputs[n].id===e.toString())return this.outputs[n]}noteNameToNumber(e){return this.validation&&console.warn("The noteNameToNumber() method is deprecated. Use Utilities.toNoteNumber() instead."),le.toNoteNumber(e,this.octaveOffset)}getOctave(e){return this.validation&&(console.warn("The getOctave()is deprecated. Use Utilities.getNoteDetails() instead"),e=parseInt(e)),!isNaN(e)&&e>=0&&e<=127?le.getNoteDetails(le.offsetNumber(e,this.octaveOffset)).octave:!1}sanitizeChannels(e){return this.validation&&console.warn("The sanitizeChannels() method has been moved to the utilities class."),le.sanitizeChannels(e)}toMIDIChannels(e){return this.validation&&console.warn("The toMIDIChannels() method has been deprecated. Use Utilities.sanitizeChannels() instead."),le.sanitizeChannels(e)}guessNoteNumber(e){return this.validation&&console.warn("The guessNoteNumber() method has been deprecated. Use Utilities.guessNoteNumber() instead."),le.guessNoteNumber(e,this.octaveOffset)}getValidNoteArray(e,t={}){return this.validation&&console.warn("The getValidNoteArray() method has been moved to the Utilities.buildNoteArray()"),le.buildNoteArray(e,t)}convertToTimestamp(e){return this.validation&&console.warn("The convertToTimestamp() method has been moved to Utilities.toTimestamp()."),le.toTimestamp(e)}async _destroyInputsAndOutputs(){let e=[];return this.inputs.forEach(t=>e.push(t.destroy())),this.outputs.forEach(t=>e.push(t.destroy())),Promise.all(e).then(()=>{this._inputs=[],this._outputs=[]})}_onInterfaceStateChange(e){this._updateInputsAndOutputs();let t={timestamp:e.timeStamp,type:e.port.state,target:this};if(e.port.state==="connected"&&e.port.connection==="open"){e.port.type==="output"?t.port=this.getOutputById(e.port.id):e.port.type==="input"&&(t.port=this.getInputById(e.port.id)),this.emit(e.port.state,t);const n=Object.assign({},t);n.type="portschanged",this.emit(n.type,n)}else if(e.port.state==="disconnected"&&e.port.connection==="pending"){e.port.type==="input"?t.port=this.getInputById(e.port.id,{disconnected:!0}):e.port.type==="output"&&(t.port=this.getOutputById(e.port.id,{disconnected:!0})),this.emit(e.port.state,t);const n=Object.assign({},t);n.type="portschanged",this.emit(n.type,n)}}async _updateInputsAndOutputs(){return Promise.all([this._updateInputs(),this._updateOutputs()])}async _updateInputs(){if(!this.interface)return;for(let t=this._inputs.length-1;t>=0;t--){const n=this._inputs[t];Array.from(this.interface.inputs.values()).find(r=>r===n._midiInput)||(this._disconnectedInputs.push(n),this._inputs.splice(t,1))}let e=[];return this.interface.inputs.forEach(t=>{if(!this._inputs.find(n=>n._midiInput===t)){let n=this._disconnectedInputs.find(s=>s._midiInput===t);n||(n=new bf(t)),this._inputs.push(n),e.push(n.open())}}),Promise.all(e)}async _updateOutputs(){if(!this.interface)return;for(let t=this._outputs.length-1;t>=0;t--){const n=this._outputs[t];Array.from(this.interface.outputs.values()).find(r=>r===n._midiOutput)||(this._disconnectedOutputs.push(n),this._outputs.splice(t,1))}let e=[];return this.interface.outputs.forEach(t=>{if(!this._outputs.find(n=>n._midiOutput===t)){let n=this._disconnectedOutputs.find(s=>s._midiOutput===t);n||(n=new Go(t)),this._outputs.push(n),e.push(n.open())}}),Promise.all(e)}get enabled(){return this.interface!==null}get inputs(){return this._inputs}get isNode(){return this.validation&&console.warn("WebMidi.isNode has been deprecated. Use Utilities.isNode instead."),le.isNode}get isBrowser(){return this.validation&&console.warn("WebMidi.isBrowser has been deprecated. Use Utilities.isBrowser instead."),le.isBrowser}get octaveOffset(){return this._octaveOffset}set octaveOffset(e){if(this.validation&&(e=parseInt(e),isNaN(e)))throw new TypeError("The 'octaveOffset' property must be an integer.");this._octaveOffset=e}get outputs(){return this._outputs}get supported(){return typeof navigator<"u"&&!!navigator.requestMIDIAccess}get sysexEnabled(){return!!(this.interface&&this.interface.sysexEnabled)}get time(){return performance.now()}get version(){return"3.1.12"}get flavour(){return"esm"}get CHANNEL_EVENTS(){return this.validation&&console.warn("The CHANNEL_EVENTS enum has been moved to Enumerations.CHANNEL_EVENTS."),$.CHANNEL_EVENTS}get MIDI_SYSTEM_MESSAGES(){return this.validation&&console.warn("The MIDI_SYSTEM_MESSAGES enum has been moved to Enumerations.SYSTEM_MESSAGES."),$.SYSTEM_MESSAGES}get MIDI_CHANNEL_MODE_MESSAGES(){return this.validation&&console.warn("The MIDI_CHANNEL_MODE_MESSAGES enum has been moved to Enumerations.CHANNEL_MODE_MESSAGES."),$.CHANNEL_MODE_MESSAGES}get MIDI_CONTROL_CHANGE_MESSAGES(){return this.validation&&console.warn("The MIDI_CONTROL_CHANGE_MESSAGES enum has been replaced by the Enumerations.CONTROL_CHANGE_MESSAGES array."),$.MIDI_CONTROL_CHANGE_MESSAGES}get MIDI_REGISTERED_PARAMETER(){return this.validation&&console.warn("The MIDI_REGISTERED_PARAMETER enum has been moved to Enumerations.REGISTERED_PARAMETERS."),$.REGISTERED_PARAMETERS}get NOTES(){return this.validation&&console.warn("The NOTES enum has been deprecated."),["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]}}const ue=new wf;ue.constructor=null;const Sh="15.1.22",eu=(i,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:i}),tu=(i,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:i}),Ho=(i,e)=>({startTime:e,type:"setValue",value:i}),yh=(i,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:i}),Mh=(i,e,{startTime:t,target:n,timeConstant:s})=>n+(e-n)*Math.exp((t-i)/s),Ms=i=>i.type==="exponentialRampToValue",ya=i=>i.type==="linearRampToValue",xi=i=>Ms(i)||ya(i),Wc=i=>i.type==="setValue",Kn=i=>i.type==="setValueCurve",Ma=(i,e,t,n)=>{const s=i[e];return s===void 0?n:xi(s)||Wc(s)?s.value:Kn(s)?s.values[s.values.length-1]:Mh(t,Ma(i,e-1,s.startTime,n),s)},nu=(i,e,t,n,s)=>t===void 0?[n.insertTime,s]:xi(t)?[t.endTime,t.value]:Wc(t)?[t.startTime,t.value]:Kn(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,Ma(i,e-1,t.startTime,s)],Wo=i=>i.type==="cancelAndHold",qo=i=>i.type==="cancelScheduledValues",di=i=>Wo(i)||qo(i)?i.cancelTime:Ms(i)||ya(i)?i.endTime:i.startTime,iu=(i,e,t,{endTime:n,value:s})=>t===s?s:0<t&&0<s||t<0&&s<0?t*(s/t)**((i-e)/(n-e)):0,su=(i,e,t,{endTime:n,value:s})=>t+(i-e)/(n-e)*(s-t),Af=(i,e)=>{const t=Math.floor(e),n=Math.ceil(e);return t===n?i[t]:(1-(e-t))*i[t]+(1-(n-e))*i[n]},Cf=(i,{duration:e,startTime:t,values:n})=>{const s=(i-t)/e*(n.length-1);return Af(n,s)},Fr=i=>i.type==="setTarget";class Rf{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=di(e);if(Wo(e)||qo(e)){const n=this._automationEvents.findIndex(r=>qo(e)&&Kn(r)?r.startTime+r.duration>=t:di(r)>=t),s=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),Wo(e)){const r=this._automationEvents[this._automationEvents.length-1];if(s!==void 0&&xi(s)){if(r!==void 0&&Fr(r))throw new Error("The internal list is malformed.");const a=r===void 0?s.insertTime:Kn(r)?r.startTime+r.duration:di(r),o=r===void 0?this._defaultValue:Kn(r)?r.values[r.values.length-1]:r.value,c=Ms(s)?iu(t,a,o,s):su(t,a,o,s),l=Ms(s)?eu(c,t,this._currenTime):tu(c,t,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&Fr(r)&&this._automationEvents.push(Ho(this.getValue(t),t)),r!==void 0&&Kn(r)&&r.startTime+r.duration>t){const a=t-r.startTime,o=(r.values.length-1)/r.duration,c=Math.max(2,1+Math.ceil(a*o)),l=a/(c-1)*o,u=r.values.slice(0,c);if(l<1)for(let h=1;h<c;h+=1){const d=l*h%1;u[h]=r.values[h-1]*(1-d)+r.values[h]*d}this._automationEvents[this._automationEvents.length-1]=yh(u,r.startTime,a)}}}else{const n=this._automationEvents.findIndex(a=>di(a)>t),s=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(s!==void 0&&Kn(s)&&di(s)+s.duration>t)return!1;const r=Ms(e)?eu(e.value,e.endTime,this._currenTime):ya(e)?tu(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(r);else{if(Kn(e)&&t+e.duration>di(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(e){const t=this._automationEvents.findIndex(n=>di(n)>e);if(t>1){const n=this._automationEvents.slice(t-1),s=n[0];Fr(s)&&n.unshift(Ho(Ma(this._automationEvents,t-2,s.startTime,this._defaultValue),s.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(a=>di(a)>e),n=this._automationEvents[t],s=(t===-1?this._automationEvents.length:t)-1,r=this._automationEvents[s];if(r!==void 0&&Fr(r)&&(n===void 0||!xi(n)||n.insertTime>e))return Mh(e,Ma(this._automationEvents,s-1,r.startTime,this._defaultValue),r);if(r!==void 0&&Wc(r)&&(n===void 0||!xi(n)))return r.value;if(r!==void 0&&Kn(r)&&(n===void 0||!xi(n)||r.startTime+r.duration>e))return e<r.startTime+r.duration?Cf(e,r):r.values[r.values.length-1];if(r!==void 0&&xi(r)&&(n===void 0||!xi(n)))return r.value;if(n!==void 0&&Ms(n)){const[a,o]=nu(this._automationEvents,s,r,n,this._defaultValue);return iu(e,a,o,n)}if(n!==void 0&&ya(n)){const[a,o]=nu(this._automationEvents,s,r,n,this._defaultValue);return su(e,a,o,n)}return this._defaultValue}}const Nf=i=>({cancelTime:i,type:"cancelAndHold"}),If=i=>({cancelTime:i,type:"cancelScheduledValues"}),Df=(i,e)=>({endTime:e,type:"exponentialRampToValue",value:i}),Pf=(i,e)=>({endTime:e,type:"linearRampToValue",value:i}),Of=(i,e,t)=>({startTime:e,target:i,timeConstant:t,type:"setTarget"}),Lf=()=>new DOMException("","AbortError"),Uf=i=>(e,t,[n,s,r],a)=>{i(e[s],[t,n,r],o=>o[0]===t&&o[1]===n,a)},Ff=i=>(e,t,n)=>{const s=[];for(let r=0;r<n.numberOfInputs;r+=1)s.push(new Set);i.set(e,{activeInputs:s,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},kf=i=>(e,t)=>{i.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},Is=new WeakSet,Eh=new WeakMap,qc=new WeakMap,Th=new WeakMap,Xc=new WeakMap,Fa=new WeakMap,bh=new WeakMap,Xo=new WeakMap,Yo=new WeakMap,jo=new WeakMap,wh={construct(){return wh}},Bf=i=>{try{const e=new Proxy(i,wh);new e}catch{return!1}return!0},ru=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,au=(i,e)=>{const t=[];let n=i.replace(/^[\s]+/,""),s=n.match(ru);for(;s!==null;){const r=s[1].slice(1,-1),a=s[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,e).toString());t.push(a),n=n.slice(s[0].length).replace(/^[\s]+/,""),s=n.match(ru)}return[t.join(";"),n]},ou=i=>{if(i!==void 0&&!Array.isArray(i))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},cu=i=>{if(!Bf(i))throw new TypeError("The given value for processorCtor should be a constructor.");if(i.prototype===null||typeof i.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},Vf=(i,e,t,n,s,r,a,o,c,l,u,h,d)=>{let p=0;return(_,g,m={credentials:"omit"})=>{const f=u.get(_);if(f!==void 0&&f.has(g))return Promise.resolve();const E=l.get(_);if(E!==void 0){const T=E.get(g);if(T!==void 0)return T}const M=r(_),x=M.audioWorklet===void 0?s(g).then(([T,w])=>{const[b,A]=au(T,w),S=`${b};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${A}
})})(window,'_AWGS')`;return t(S)}).then(()=>{const T=d._AWGS.pop();if(T===void 0)throw new SyntaxError;n(M.currentTime,M.sampleRate,()=>T(class{},void 0,(w,b)=>{if(w.trim()==="")throw e();const A=Yo.get(M);if(A!==void 0){if(A.has(w))throw e();cu(b),ou(b.parameterDescriptors),A.set(w,b)}else cu(b),ou(b.parameterDescriptors),Yo.set(M,new Map([[w,b]]))},M.sampleRate,void 0,void 0))}):Promise.all([s(g),Promise.resolve(i(h,h))]).then(([[T,w],b])=>{const A=p+1;p=A;const[S,v]=au(T,w),F=`${S};((AudioWorkletProcessor,registerProcessor)=>{${v}
})(${b?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${b?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${b?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${A}',class extends AudioWorkletProcessor{process(){return !1}})`,H=new Blob([F],{type:"application/javascript; charset=utf-8"}),k=URL.createObjectURL(H);return M.audioWorklet.addModule(k,m).then(()=>{if(o(M))return M;const V=a(M);return V.audioWorklet.addModule(k,m).then(()=>V)}).then(V=>{if(c===null)throw new SyntaxError;try{new c(V,`__sac${A}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(k))});return E===void 0?l.set(_,new Map([[g,x]])):E.set(g,x),x.then(()=>{const T=u.get(_);T===void 0?u.set(_,new Set([g])):T.add(g)}).finally(()=>{const T=l.get(_);T!==void 0&&T.delete(g)}),x}},Dn=(i,e)=>{const t=i.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},ka=(i,e)=>{const t=Array.from(i).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[n]=t;return i.delete(n),n},Ah=(i,e,t,n)=>{const s=Dn(i,e),r=ka(s,a=>a[0]===t&&a[1]===n);return s.size===0&&i.delete(e),r},_r=i=>Dn(bh,i),Ds=i=>{if(Is.has(i))throw new Error("The AudioNode is already stored.");Is.add(i),_r(i).forEach(e=>e(!0))},Ch=i=>"port"in i,gr=i=>{if(!Is.has(i))throw new Error("The AudioNode is not stored.");Is.delete(i),_r(i).forEach(e=>e(!1))},$o=(i,e)=>{!Ch(i)&&e.every(t=>t.size===0)&&gr(i)},zf=(i,e,t,n,s,r,a,o,c,l,u,h,d)=>{const p=new WeakMap;return(_,g,m,f,E)=>{const{activeInputs:M,passiveInputs:x}=r(g),{outputs:T}=r(_),w=o(_),b=A=>{const S=c(g),v=c(_);if(A){const R=Ah(x,_,m,f);i(M,_,R,!1),!E&&!h(_)&&t(v,S,m,f),d(g)&&Ds(g)}else{const R=n(M,_,m,f);e(x,f,R,!1),!E&&!h(_)&&s(v,S,m,f);const I=a(g);if(I===0)u(g)&&$o(g,M);else{const P=p.get(g);P!==void 0&&clearTimeout(P),p.set(g,setTimeout(()=>{u(g)&&$o(g,M)},I*1e3))}}};return l(T,[g,m,f],A=>A[0]===g&&A[1]===m&&A[2]===f,!0)?(w.add(b),u(_)?i(M,_,[m,f,b],!0):e(x,f,[_,m,b],!0),!0):!1}},Gf=i=>(e,t,[n,s,r],a)=>{const o=e.get(n);o===void 0?e.set(n,new Set([[s,t,r]])):i(o,[s,t,r],c=>c[0]===s&&c[1]===t,a)},Hf=i=>(e,t)=>{const n=i(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);const s=()=>{t.removeEventListener("ended",s),t.disconnect(n),n.disconnect()};t.addEventListener("ended",s)},Wf=i=>(e,t)=>{i(e).add(t)},qf={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},Xf=(i,e,t,n,s,r)=>class extends i{constructor(o,c){const l=s(o),u={...qf,...c},h=n(l,u),d=r(l)?e():null;super(o,!1,h,d),this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(o){this._nativeAnalyserNode.fftSize=o}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(o){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=o,!(o>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(o){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=o,!(this._nativeAnalyserNode.maxDecibels>o))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(o){this._nativeAnalyserNode.smoothingTimeConstant=o}getByteFrequencyData(o){this._nativeAnalyserNode.getByteFrequencyData(o)}getByteTimeDomainData(o){this._nativeAnalyserNode.getByteTimeDomainData(o)}getFloatFrequencyData(o){this._nativeAnalyserNode.getFloatFrequencyData(o)}getFloatTimeDomainData(o){this._nativeAnalyserNode.getFloatTimeDomainData(o)}},zt=(i,e)=>i.context===e,Yf=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=e(r);if(!zt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,fftSize:o.fftSize,maxDecibels:o.maxDecibels,minDecibels:o.minDecibels,smoothingTimeConstant:o.smoothingTimeConstant};o=i(a,l)}return n.set(a,o),await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},Ea=i=>{try{i.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},Vn=()=>new DOMException("","IndexSizeError"),Yc=i=>{i.getChannelData=(e=>t=>{try{return e.call(i,t)}catch(n){throw n.code===12?Vn():n}})(i.getChannelData)},jf={numberOfChannels:1},$f=(i,e,t,n,s,r,a,o)=>{let c=null;return class Rh{constructor(u){if(s===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:h,numberOfChannels:d,sampleRate:p}={...jf,...u};c===null&&(c=new s(1,1,44100));const _=n!==null&&e(r,r)?new n({length:h,numberOfChannels:d,sampleRate:p}):c.createBuffer(d,h,p);if(_.numberOfChannels===0)throw t();return typeof _.copyFromChannel!="function"?(a(_),Yc(_)):e(Ea,()=>Ea(_))||o(_),i.add(_),_}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===Rh.prototype||i.has(u)}}},rn=-34028234663852886e22,Wt=34028234663852886e22,ti=i=>Is.has(i),Zf={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},Kf=(i,e,t,n,s,r,a,o)=>class extends i{constructor(l,u){const h=r(l),d={...Zf,...u},p=s(h,d),_=a(h),g=_?e():null;super(l,!1,p,g),this._audioBufferSourceNodeRenderer=g,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=p,this._onended=null,this._playbackRate=t(this,_,p.playbackRate,Wt,rn)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?o(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){Ds(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),ti(this)&&gr(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},Jf=(i,e,t,n,s)=>()=>{const r=new WeakMap;let a=null,o=null;const c=async(l,u)=>{let h=t(l);const d=zt(h,u);if(!d){const p={buffer:h.buffer,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,loop:h.loop,loopEnd:h.loopEnd,loopStart:h.loopStart,playbackRate:h.playbackRate.value};h=e(u,p),a!==null&&h.start(...a),o!==null&&h.stop(o)}return r.set(u,h),d?await i(u,l.playbackRate,h.playbackRate):await n(u,l.playbackRate,h.playbackRate),await s(l,u,h),h};return{set start(l){a=l},set stop(l){o=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},Qf=i=>"playbackRate"in i,ep=i=>"frequency"in i&&"gain"in i,tp=i=>"offset"in i,np=i=>!("frequency"in i)&&"gain"in i,ip=i=>"detune"in i&&"frequency"in i&&!("gain"in i),sp=i=>"pan"in i,qt=i=>Dn(Eh,i),vr=i=>Dn(Th,i),Zo=(i,e)=>{const{activeInputs:t}=qt(i);t.forEach(s=>s.forEach(([r])=>{e.includes(i)||Zo(r,[...e,i])}));const n=Qf(i)?[i.playbackRate]:Ch(i)?Array.from(i.parameters.values()):ep(i)?[i.Q,i.detune,i.frequency,i.gain]:tp(i)?[i.offset]:np(i)?[i.gain]:ip(i)?[i.detune,i.frequency]:sp(i)?[i.pan]:[];for(const s of n){const r=vr(s);r!==void 0&&r.activeInputs.forEach(([a])=>Zo(a,e))}ti(i)&&gr(i)},Nh=i=>{Zo(i.destination,[])},rp=i=>i===void 0||typeof i=="number"||typeof i=="string"&&(i==="balanced"||i==="interactive"||i==="playback"),ap=(i,e,t,n,s,r,a,o,c)=>class extends i{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h;try{h=new c(u)}catch(_){throw _.code===12&&_.message==="sampleRate is not in range"?t():_}if(h===null)throw n();if(!rp(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw t();super(h,2);const{latencyHint:d}=u,{sampleRate:p}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/p:d==="interactive"||d===void 0?256/p:d==="playback"?1024/p:Math.max(2,Math.min(128,Math.round(d*p/128)))*128/p,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";const _=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",_)};h.addEventListener("statechange",_)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),Nh(this)}))}createMediaElementSource(u){return new s(this,{mediaElement:u})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(u){return new a(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new o(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?e():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?e():u})}},op=(i,e,t,n,s,r,a,o)=>class extends i{constructor(l,u){const h=r(l),d=a(h),p=s(h,u,d),_=d?e(o):null;super(l,!1,p,_),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=p}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},cp=i=>{const e=new WeakMap,t=async(n,s)=>{const r=s.destination;return e.set(s,r),await i(n,s,r),r};return{render(n,s){const r=e.get(s);return r!==void 0?Promise.resolve(r):t(n,s)}}},lp=(i,e,t,n,s,r,a,o)=>(c,l)=>{const u=l.listener,h=()=>{const T=new Float32Array(1),w=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),b=a(l);let A=!1,S=[0,0,-1,0,1,0],v=[0,0,0];const R=()=>{if(A)return;A=!0;const H=n(l,256,9,0);H.onaudioprocess=({inputBuffer:k})=>{const V=[r(k,T,0),r(k,T,1),r(k,T,2),r(k,T,3),r(k,T,4),r(k,T,5)];V.some((Y,J)=>Y!==S[J])&&(u.setOrientation(...V),S=V);const B=[r(k,T,6),r(k,T,7),r(k,T,8)];B.some((Y,J)=>Y!==v[J])&&(u.setPosition(...B),v=B)},w.connect(H)},I=H=>k=>{k!==S[H]&&(S[H]=k,u.setOrientation(...S))},P=H=>k=>{k!==v[H]&&(v[H]=k,u.setPosition(...v))},F=(H,k,V)=>{const B=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:k});B.connect(w,0,H),B.start(),Object.defineProperty(B.offset,"defaultValue",{get(){return k}});const Y=i({context:c},b,B.offset,Wt,rn);return o(Y,"value",J=>()=>J.call(Y),J=>ne=>{try{J.call(Y,ne)}catch(Se){if(Se.code!==9)throw Se}R(),b&&V(ne)}),Y.cancelAndHoldAtTime=(J=>b?()=>{throw s()}:(...ne)=>{const Se=J.apply(Y,ne);return R(),Se})(Y.cancelAndHoldAtTime),Y.cancelScheduledValues=(J=>b?()=>{throw s()}:(...ne)=>{const Se=J.apply(Y,ne);return R(),Se})(Y.cancelScheduledValues),Y.exponentialRampToValueAtTime=(J=>b?()=>{throw s()}:(...ne)=>{const Se=J.apply(Y,ne);return R(),Se})(Y.exponentialRampToValueAtTime),Y.linearRampToValueAtTime=(J=>b?()=>{throw s()}:(...ne)=>{const Se=J.apply(Y,ne);return R(),Se})(Y.linearRampToValueAtTime),Y.setTargetAtTime=(J=>b?()=>{throw s()}:(...ne)=>{const Se=J.apply(Y,ne);return R(),Se})(Y.setTargetAtTime),Y.setValueAtTime=(J=>b?()=>{throw s()}:(...ne)=>{const Se=J.apply(Y,ne);return R(),Se})(Y.setValueAtTime),Y.setValueCurveAtTime=(J=>b?()=>{throw s()}:(...ne)=>{const Se=J.apply(Y,ne);return R(),Se})(Y.setValueCurveAtTime),Y};return{forwardX:F(0,0,I(0)),forwardY:F(1,0,I(1)),forwardZ:F(2,-1,I(2)),positionX:F(6,0,P(0)),positionY:F(7,0,P(1)),positionZ:F(8,0,P(2)),upX:F(3,0,I(3)),upY:F(4,1,I(4)),upZ:F(5,0,I(5))}},{forwardX:d,forwardY:p,forwardZ:_,positionX:g,positionY:m,positionZ:f,upX:E,upY:M,upZ:x}=u.forwardX===void 0?h():u;return{get forwardX(){return d},get forwardY(){return p},get forwardZ(){return _},get positionX(){return g},get positionY(){return m},get positionZ(){return f},get upX(){return E},get upY(){return M},get upZ(){return x}}},Ta=i=>"context"in i,xr=i=>Ta(i[0]),ts=(i,e,t,n)=>{for(const s of i)if(t(s)){if(n)return!1;throw Error("The set contains at least one similar element.")}return i.add(e),!0},lu=(i,e,[t,n],s)=>{ts(i,[e,t,n],r=>r[0]===e&&r[1]===t,s)},uu=(i,[e,t,n],s)=>{const r=i.get(e);r===void 0?i.set(e,new Set([[t,n]])):ts(r,[t,n],a=>a[0]===t,s)},Hs=i=>"inputs"in i,ba=(i,e,t,n)=>{if(Hs(e)){const s=e.inputs[n];return i.connect(s,t,0),[s,t,0]}return i.connect(e,t,n),[e,t,n]},Ih=(i,e,t)=>{for(const n of i)if(n[0]===e&&n[1]===t)return i.delete(n),n;return null},up=(i,e,t)=>ka(i,n=>n[0]===e&&n[1]===t),Dh=(i,e)=>{if(!_r(i).delete(e))throw new Error("Missing the expected event listener.")},Ph=(i,e,t)=>{const n=Dn(i,e),s=ka(n,r=>r[0]===t);return n.size===0&&i.delete(e),s},wa=(i,e,t,n)=>{Hs(e)?i.disconnect(e.inputs[n],t,0):i.disconnect(e,t,n)},pt=i=>Dn(qc,i),or=i=>Dn(Xc,i),Zi=i=>Xo.has(i),ha=i=>!Is.has(i),hu=(i,e)=>new Promise(t=>{if(e!==null)t(!0);else{const n=i.createScriptProcessor(256,1,1),s=i.createGain(),r=i.createBuffer(1,2,44100),a=r.getChannelData(0);a[0]=1,a[1]=1;const o=i.createBufferSource();o.buffer=r,o.loop=!0,o.connect(n).connect(i.destination),o.connect(s),o.disconnect(s),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?t(!0):t(!1),o.stop(),n.onaudioprocess=null,o.disconnect(n),n.disconnect(i.destination)},o.start()}}),oo=(i,e)=>{const t=new Map;for(const n of i)for(const s of n){const r=t.get(s);t.set(s,r===void 0?1:r+1)}t.forEach((n,s)=>e(s,n))},Aa=i=>"context"in i,hp=i=>{const e=new Map;i.connect=(t=>(n,s=0,r=0)=>{const a=Aa(n)?t(n,s,r):t(n,s),o=e.get(n);return o===void 0?e.set(n,[{input:r,output:s}]):o.every(c=>c.input!==r||c.output!==s)&&o.push({input:r,output:s}),a})(i.connect.bind(i)),i.disconnect=(t=>(n,s,r)=>{if(t.apply(i),n===void 0)e.clear();else if(typeof n=="number")for(const[a,o]of e){const c=o.filter(l=>l.output!==n);c.length===0?e.delete(a):e.set(a,c)}else if(e.has(n))if(s===void 0)e.delete(n);else{const a=e.get(n);if(a!==void 0){const o=a.filter(c=>c.output!==s&&(c.input!==r||r===void 0));o.length===0?e.delete(n):e.set(n,o)}}for(const[a,o]of e)o.forEach(c=>{Aa(a)?i.connect(a,c.output,c.input):i.connect(a,c.output)})})(i.disconnect)},dp=(i,e,t,n)=>{const{activeInputs:s,passiveInputs:r}=vr(e),{outputs:a}=qt(i),o=_r(i),c=l=>{const u=pt(i),h=or(e);if(l){const d=Ph(r,i,t);lu(s,i,d,!1),!n&&!Zi(i)&&u.connect(h,t)}else{const d=up(s,i,t);uu(r,d,!1),!n&&!Zi(i)&&u.disconnect(h,t)}};return ts(a,[e,t],l=>l[0]===e&&l[1]===t,!0)?(o.add(c),ti(i)?lu(s,i,[t,c],!0):uu(r,[i,t,c],!0),!0):!1},fp=(i,e,t,n)=>{const{activeInputs:s,passiveInputs:r}=qt(e),a=Ih(s[n],i,t);return a===null?[Ah(r,i,t,n)[2],!1]:[a[2],!0]},pp=(i,e,t)=>{const{activeInputs:n,passiveInputs:s}=vr(e),r=Ih(n,i,t);return r===null?[Ph(s,i,t)[1],!1]:[r[2],!0]},jc=(i,e,t,n,s)=>{const[r,a]=fp(i,t,n,s);if(r!==null&&(Dh(i,r),a&&!e&&!Zi(i)&&wa(pt(i),pt(t),n,s)),ti(t)){const{activeInputs:o}=qt(t);$o(t,o)}},$c=(i,e,t,n)=>{const[s,r]=pp(i,t,n);s!==null&&(Dh(i,s),r&&!e&&!Zi(i)&&pt(i).disconnect(or(t),n))},mp=(i,e)=>{const t=qt(i),n=[];for(const s of t.outputs)xr(s)?jc(i,e,...s):$c(i,e,...s),n.push(s[0]);return t.outputs.clear(),n},_p=(i,e,t)=>{const n=qt(i),s=[];for(const r of n.outputs)r[1]===t&&(xr(r)?jc(i,e,...r):$c(i,e,...r),s.push(r[0]),n.outputs.delete(r));return s},gp=(i,e,t,n,s)=>{const r=qt(i);return Array.from(r.outputs).filter(a=>a[0]===t&&(n===void 0||a[1]===n)&&(s===void 0||a[2]===s)).map(a=>(xr(a)?jc(i,e,...a):$c(i,e,...a),r.outputs.delete(a),a[0]))},vp=(i,e,t,n,s,r,a,o,c,l,u,h,d,p,_,g)=>class extends l{constructor(f,E,M,x){super(M),this._context=f,this._nativeAudioNode=M;const T=u(f);h(T)&&t(hu,()=>hu(T,g))!==!0&&hp(M),qc.set(this,M),bh.set(this,new Set),f.state!=="closed"&&E&&Ds(this),i(this,x,M)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(f){this._nativeAudioNode.channelCount=f}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(f){this._nativeAudioNode.channelCountMode=f}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(f){this._nativeAudioNode.channelInterpretation=f}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(f,E=0,M=0){if(E<0||E>=this._nativeAudioNode.numberOfOutputs)throw s();const x=u(this._context),T=_(x);if(d(f)||p(f))throw r();if(Ta(f)){const A=pt(f);try{const v=ba(this._nativeAudioNode,A,E,M),R=ha(this);(T||R)&&this._nativeAudioNode.disconnect(...v),this.context.state!=="closed"&&!R&&ha(f)&&Ds(f)}catch(v){throw v.code===12?r():v}if(e(this,f,E,M,T)){const v=c([this],f);oo(v,n(T))}return f}const w=or(f);if(w.name==="playbackRate"&&w.maxValue===1024)throw a();try{this._nativeAudioNode.connect(w,E),(T||ha(this))&&this._nativeAudioNode.disconnect(w,E)}catch(A){throw A.code===12?r():A}if(dp(this,f,E,T)){const A=c([this],f);oo(A,n(T))}}disconnect(f,E,M){let x;const T=u(this._context),w=_(T);if(f===void 0)x=mp(this,w);else if(typeof f=="number"){if(f<0||f>=this.numberOfOutputs)throw s();x=_p(this,w,f)}else{if(E!==void 0&&(E<0||E>=this.numberOfOutputs)||Ta(f)&&M!==void 0&&(M<0||M>=f.numberOfInputs))throw s();if(x=gp(this,w,f,E,M),x.length===0)throw r()}for(const b of x){const A=c([this],b);oo(A,o)}}},xp=(i,e,t,n,s,r,a,o,c,l,u,h,d)=>(p,_,g,m=null,f=null)=>{const E=g.value,M=new Rf(E),x=_?n(M):null,T={get defaultValue(){return E},get maxValue(){return m===null?g.maxValue:m},get minValue(){return f===null?g.minValue:f},get value(){return g.value},set value(w){g.value=w,T.setValueAtTime(w,p.context.currentTime)},cancelAndHoldAtTime(w){if(typeof g.cancelAndHoldAtTime=="function")x===null&&M.flush(p.context.currentTime),M.add(s(w)),g.cancelAndHoldAtTime(w);else{const b=Array.from(M).pop();x===null&&M.flush(p.context.currentTime),M.add(s(w));const A=Array.from(M).pop();g.cancelScheduledValues(w),b!==A&&A!==void 0&&(A.type==="exponentialRampToValue"?g.exponentialRampToValueAtTime(A.value,A.endTime):A.type==="linearRampToValue"?g.linearRampToValueAtTime(A.value,A.endTime):A.type==="setValue"?g.setValueAtTime(A.value,A.startTime):A.type==="setValueCurve"&&g.setValueCurveAtTime(A.values,A.startTime,A.duration))}return T},cancelScheduledValues(w){return x===null&&M.flush(p.context.currentTime),M.add(r(w)),g.cancelScheduledValues(w),T},exponentialRampToValueAtTime(w,b){if(w===0)throw new RangeError;if(!Number.isFinite(b)||b<0)throw new RangeError;const A=p.context.currentTime;return x===null&&M.flush(A),Array.from(M).length===0&&(M.add(l(E,A)),g.setValueAtTime(E,A)),M.add(a(w,b)),g.exponentialRampToValueAtTime(w,b),T},linearRampToValueAtTime(w,b){const A=p.context.currentTime;return x===null&&M.flush(A),Array.from(M).length===0&&(M.add(l(E,A)),g.setValueAtTime(E,A)),M.add(o(w,b)),g.linearRampToValueAtTime(w,b),T},setTargetAtTime(w,b,A){return x===null&&M.flush(p.context.currentTime),M.add(c(w,b,A)),g.setTargetAtTime(w,b,A),T},setValueAtTime(w,b){return x===null&&M.flush(p.context.currentTime),M.add(l(w,b)),g.setValueAtTime(w,b),T},setValueCurveAtTime(w,b,A){const S=w instanceof Float32Array?w:new Float32Array(w);if(h!==null&&h.name==="webkitAudioContext"){const v=b+A,R=p.context.sampleRate,I=Math.ceil(b*R),P=Math.floor(v*R),F=P-I,H=new Float32Array(F);for(let V=0;V<F;V+=1){const B=(S.length-1)/A*((I+V)/R-b),Y=Math.floor(B),J=Math.ceil(B);H[V]=Y===J?S[Y]:(1-(B-Y))*S[Y]+(1-(J-B))*S[J]}x===null&&M.flush(p.context.currentTime),M.add(u(H,b,A)),g.setValueCurveAtTime(H,b,A);const k=P/R;k<v&&d(T,H[H.length-1],k),d(T,S[S.length-1],v)}else x===null&&M.flush(p.context.currentTime),M.add(u(S,b,A)),g.setValueCurveAtTime(S,b,A);return T}};return t.set(T,g),e.set(T,p),i(T,x),T},Sp=i=>({replay(e){for(const t of i)if(t.type==="exponentialRampToValue"){const{endTime:n,value:s}=t;e.exponentialRampToValueAtTime(s,n)}else if(t.type==="linearRampToValue"){const{endTime:n,value:s}=t;e.linearRampToValueAtTime(s,n)}else if(t.type==="setTarget"){const{startTime:n,target:s,timeConstant:r}=t;e.setTargetAtTime(s,n,r)}else if(t.type==="setValue"){const{startTime:n,value:s}=t;e.setValueAtTime(s,n)}else if(t.type==="setValueCurve"){const{duration:n,startTime:s,values:r}=t;e.setValueCurveAtTime(r,s,n)}else throw new Error("Can't apply an unknown automation.")}});class Oh{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((n,s)=>e.call(t,n,s,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}}const yp={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},Mp=(i,e,t,n,s,r,a,o,c,l,u,h,d,p)=>class extends e{constructor(g,m,f){var E;const M=o(g),x=c(M),T=u({...yp,...f});d(T);const w=Yo.get(M),b=w==null?void 0:w.get(m),A=x||M.state!=="closed"?M:(E=a(M))!==null&&E!==void 0?E:M,S=s(A,x?null:g.baseLatency,l,m,b,T),v=x?n(m,T,b):null;super(g,!0,S,v);const R=[];S.parameters.forEach((P,F)=>{const H=t(this,x,P);R.push([F,H])}),this._nativeAudioWorkletNode=S,this._onprocessorerror=null,this._parameters=new Oh(R),x&&i(M,this);const{activeInputs:I}=r(this);h(S,I)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(g){const m=typeof g=="function"?p(this,g):null;this._nativeAudioWorkletNode.onprocessorerror=m;const f=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=f!==null&&f===m?g:f}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function Ca(i,e,t,n,s){if(typeof i.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),i.copyFromChannel(e[t],n,s);else{const r=i.getChannelData(n);if(e[t].byteLength===0)e[t]=r.slice(s,s+128);else{const a=new Float32Array(r.buffer,s*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(a)}}}const Lh=(i,e,t,n,s)=>{typeof i.copyToChannel=="function"?e[t].byteLength!==0&&i.copyToChannel(e[t],n,s):e[t].byteLength!==0&&i.getChannelData(n).set(e[t],s)},Ra=(i,e)=>{const t=[];for(let n=0;n<i;n+=1){const s=[],r=typeof e=="number"?e:e[n];for(let a=0;a<r;a+=1)s.push(new Float32Array(128));t.push(s)}return t},Ep=(i,e)=>{const t=Dn(jo,i),n=pt(e);return Dn(t,n)},Tp=async(i,e,t,n,s,r,a)=>{const o=e===null?Math.ceil(i.context.length/128)*128:e.length,c=n.channelCount*n.numberOfInputs,l=s.reduce((m,f)=>m+f,0),u=l===0?null:t.createBuffer(l,o,t.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const h=qt(i),d=await Ep(t,i),p=Ra(n.numberOfInputs,n.channelCount),_=Ra(n.numberOfOutputs,s),g=Array.from(i.parameters.keys()).reduce((m,f)=>({...m,[f]:new Float32Array(128)}),{});for(let m=0;m<o;m+=128){if(n.numberOfInputs>0&&e!==null)for(let f=0;f<n.numberOfInputs;f+=1)for(let E=0;E<n.channelCount;E+=1)Ca(e,p[f],E,E,m);r.parameterDescriptors!==void 0&&e!==null&&r.parameterDescriptors.forEach(({name:f},E)=>{Ca(e,g,f,c+E,m)});for(let f=0;f<n.numberOfInputs;f+=1)for(let E=0;E<s[f];E+=1)_[f][E].byteLength===0&&(_[f][E]=new Float32Array(128));try{const f=p.map((M,x)=>h.activeInputs[x].size===0?[]:M),E=a(m/t.sampleRate,t.sampleRate,()=>d.process(f,_,g));if(u!==null)for(let M=0,x=0;M<n.numberOfOutputs;M+=1){for(let T=0;T<s[M];T+=1)Lh(u,_[M],T,x+T,m);x+=s[M]}if(!E)break}catch(f){i.dispatchEvent(new ErrorEvent("processorerror",{colno:f.colno,filename:f.filename,lineno:f.lineno,message:f.message}));break}}return u},bp=(i,e,t,n,s,r,a,o,c,l,u,h,d,p,_,g)=>(m,f,E)=>{const M=new WeakMap;let x=null;const T=async(w,b)=>{let A=u(w),S=null;const v=zt(A,b),R=Array.isArray(f.outputChannelCount)?f.outputChannelCount:Array.from(f.outputChannelCount);if(h===null){const I=R.reduce((k,V)=>k+V,0),P=s(b,{channelCount:Math.max(1,I),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,I)}),F=[];for(let k=0;k<w.numberOfOutputs;k+=1)F.push(n(b,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:R[k]}));const H=a(b,{channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation,gain:1});H.connect=e.bind(null,F),H.disconnect=c.bind(null,F),S=[P,F,H]}else v||(A=new h(b,m));if(M.set(b,S===null?A:S[2]),S!==null){if(x===null){if(E===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const V=w.channelCount*w.numberOfInputs,B=E.parameterDescriptors===void 0?0:E.parameterDescriptors.length,Y=V+B;x=Tp(w,Y===0?null:await(async()=>{const ne=new d(Y,Math.ceil(w.context.length/128)*128,b.sampleRate),Se=[],We=[];for(let de=0;de<f.numberOfInputs;de+=1)Se.push(a(ne,{channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation,gain:1})),We.push(s(ne,{channelCount:f.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:f.channelCount}));const X=await Promise.all(Array.from(w.parameters.values()).map(async de=>{const oe=r(ne,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:de.value});return await p(ne,de,oe.offset),oe})),Z=n(ne,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,V+B)});for(let de=0;de<f.numberOfInputs;de+=1){Se[de].connect(We[de]);for(let oe=0;oe<f.channelCount;oe+=1)We[de].connect(Z,oe,de*f.channelCount+oe)}for(const[de,oe]of X.entries())oe.connect(Z,0,V+de),oe.start(0);return Z.connect(ne.destination),await Promise.all(Se.map(de=>_(w,ne,de))),g(ne)})(),b,f,R,E,l)}const I=await x,P=t(b,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[F,H,k]=S;I!==null&&(P.buffer=I,P.start(0)),P.connect(F);for(let V=0,B=0;V<w.numberOfOutputs;V+=1){const Y=H[V];for(let J=0;J<R[V];J+=1)F.connect(Y,B+J,J);B+=R[V]}return k}if(v)for(const[I,P]of w.parameters.entries())await i(b,P,A.parameters.get(I));else for(const[I,P]of w.parameters.entries())await p(b,P,A.parameters.get(I));return await _(w,b,A),A};return{render(w,b){o(b,w);const A=M.get(b);return A!==void 0?Promise.resolve(A):T(w,b)}}},wp=(i,e,t,n,s,r,a,o,c,l,u,h,d,p,_,g,m,f,E,M)=>class extends _{constructor(T,w){super(T,w),this._nativeContext=T,this._audioWorklet=i===void 0?void 0:{addModule:(b,A)=>i(this,b,A)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new s(this)}createBuffer(T,w,b){return new t({length:w,numberOfChannels:T,sampleRate:b})}createBufferSource(){return new n(this)}createChannelMerger(T=6){return new r(this,{numberOfInputs:T})}createChannelSplitter(T=6){return new a(this,{numberOfOutputs:T})}createConstantSource(){return new o(this)}createConvolver(){return new c(this)}createDelay(T=1){return new u(this,{maxDelayTime:T})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(T,w){return new p(this,{feedback:w,feedforward:T})}createOscillator(){return new g(this)}createPanner(){return new m(this)}createPeriodicWave(T,w,b={disableNormalization:!1}){return new f(this,{...b,imag:w,real:T})}createStereoPanner(){return new E(this)}createWaveShaper(){return new M(this)}decodeAudioData(T,w,b){return l(this._nativeContext,T).then(A=>(typeof w=="function"&&w(A),A),A=>{throw typeof b=="function"&&b(A),A})}},Ap={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},Cp=(i,e,t,n,s,r,a,o)=>class extends i{constructor(l,u){const h=r(l),d={...Ap,...u},p=s(h,d),_=a(h),g=_?t():null;super(l,!1,p,g),this._Q=e(this,_,p.Q,Wt,rn),this._detune=e(this,_,p.detune,1200*Math.log2(Wt),-1200*Math.log2(Wt)),this._frequency=e(this,_,p.frequency,l.sampleRate/2,0),this._gain=e(this,_,p.gain,40*Math.log10(Wt),rn),this._nativeBiquadFilterNode=p,o(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?n():d}if(l.length!==u.length||u.length!==h.length)throw n()}},Rp=(i,e,t,n,s)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=t(o);const u=zt(l,c);if(!u){const h={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(c,h)}return r.set(c,l),u?(await i(c,o.Q,l.Q),await i(c,o.detune,l.detune),await i(c,o.frequency,l.frequency),await i(c,o.gain,l.gain)):(await n(c,o.Q,l.Q),await n(c,o.detune,l.detune),await n(c,o.frequency,l.frequency),await n(c,o.gain,l.gain)),await s(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},Np=(i,e)=>(t,n)=>{const s=e.get(t);if(s!==void 0)return s;const r=i.get(t);if(r!==void 0)return r;try{const a=n();return a instanceof Promise?(i.set(t,a),a.catch(()=>!1).then(o=>(i.delete(t),e.set(t,o),o))):(e.set(t,a),a)}catch{return e.set(t,!1),!1}},Ip={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},Dp=(i,e,t,n,s)=>class extends i{constructor(a,o){const c=n(a),l={...Ip,...o},u=t(c,l),h=s(c)?e():null;super(a,!1,u,h)}},Pp=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=e(r);if(!zt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfInputs:o.numberOfInputs};o=i(a,l)}return n.set(a,o),await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},Op={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},Lp=(i,e,t,n,s,r)=>class extends i{constructor(o,c){const l=n(o),u=r({...Op,...c}),h=t(l,u),d=s(l)?e():null;super(o,!1,h,d)}},Up=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=e(r);if(!zt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfOutputs:o.numberOfOutputs};o=i(a,l)}return n.set(a,o),await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},Fp=i=>(e,t,n)=>i(t,e,n),kp=i=>(e,t,n=0,s=0)=>{const r=e[n];if(r===void 0)throw i();return Aa(t)?r.connect(t,0,s):r.connect(t,0)},Bp=i=>(e,t)=>{const n=i(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),s=e.createBuffer(1,2,44100);return n.buffer=s,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},Vp={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},zp=(i,e,t,n,s,r,a)=>class extends i{constructor(c,l){const u=s(c),h={...Vp,...l},d=n(u,h),p=r(u),_=p?t():null;super(c,!1,d,_),this._constantSourceNodeRenderer=_,this._nativeConstantSourceNode=d,this._offset=e(this,p,d.offset,Wt,rn),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?a(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){Ds(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),ti(this)&&gr(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},Gp=(i,e,t,n,s)=>()=>{const r=new WeakMap;let a=null,o=null;const c=async(l,u)=>{let h=t(l);const d=zt(h,u);if(!d){const p={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,offset:h.offset.value};h=e(u,p),a!==null&&h.start(a),o!==null&&h.stop(o)}return r.set(u,h),d?await i(u,l.offset,h.offset):await n(u,l.offset,h.offset),await s(l,u,h),h};return{set start(l){a=l},set stop(l){o=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},Hp=i=>e=>(i[0]=e,i[0]),Wp={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},qp=(i,e,t,n,s,r)=>class extends i{constructor(o,c){const l=n(o),u={...Wp,...c},h=t(l,u),p=s(l)?e():null;super(o,!1,h,p),this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&r(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(o){if(this._nativeConvolverNode.buffer=o,o===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(o){this._nativeConvolverNode.normalize=o}},Xp=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=e(r);if(!zt(o,a)){const l={buffer:o.buffer,channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,disableNormalization:!o.normalize};o=i(a,l)}return n.set(a,o),Hs(o)?await t(r,a,o.inputs[0]):await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},Yp=(i,e)=>(t,n,s)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,s)}catch(r){throw r.name==="SyntaxError"?i():r}},jp=()=>new DOMException("","DataCloneError"),du=i=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{const s=()=>{t.onmessage=null,e.close(),t.close(),n()};t.onmessage=()=>s();try{e.postMessage(i,[i])}catch{}finally{s()}})},$p=(i,e,t,n,s,r,a,o,c,l,u)=>(h,d)=>{const p=a(h)?h:r(h);if(s.has(d)){const _=t();return Promise.reject(_)}try{s.add(d)}catch{}return e(c,()=>c(p))?p.decodeAudioData(d).then(_=>(du(d).catch(()=>{}),e(o,()=>o(_))||u(_),i.add(_),_)):new Promise((_,g)=>{const m=async()=>{try{await du(d)}catch{}},f=E=>{g(E),m()};try{p.decodeAudioData(d,E=>{typeof E.copyFromChannel!="function"&&(l(E),Yc(E)),i.add(E),m().then(()=>_(E))},E=>{f(E===null?n():E)})}catch(E){f(E)}})},Zp=(i,e,t,n,s,r,a,o)=>(c,l)=>{const u=e.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const h=r(c.context),d=o(h);if(u===l){if(e.delete(c),!d&&a(c)){const p=n(c),{outputs:_}=t(c);for(const g of _)if(xr(g)){const m=n(g[0]);i(p,m,g[1],g[2])}else{const m=s(g[0]);p.connect(m,g[1])}}}else e.set(c,u-l)},Kp={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},Jp=(i,e,t,n,s,r,a)=>class extends i{constructor(c,l){const u=s(c),h={...Kp,...l},d=n(u,h),p=r(u),_=p?t(h.maxDelayTime):null;super(c,!1,d,_),this._delayTime=e(this,p,d.delayTime),a(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},Qp=(i,e,t,n,s)=>r=>{const a=new WeakMap,o=async(c,l)=>{let u=t(c);const h=zt(u,l);if(!h){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:r};u=e(l,d)}return a.set(l,u),h?await i(l,c.delayTime,u.delayTime):await n(l,c.delayTime,u.delayTime),await s(c,l,u),u};return{render(c,l){const u=a.get(l);return u!==void 0?Promise.resolve(u):o(c,l)}}},em=i=>(e,t,n,s)=>i(e[s],r=>r[0]===t&&r[1]===n),tm=i=>(e,t)=>{i(e).delete(t)},nm=i=>"delayTime"in i,im=(i,e,t)=>function n(s,r){const a=Ta(r)?r:t(i,r);if(nm(a))return[];if(s[0]===a)return[s];if(s.includes(a))return[];const{outputs:o}=e(a);return Array.from(o).map(c=>n([...s,a],c[0])).reduce((c,l)=>c.concat(l),[])},kr=(i,e,t)=>{const n=e[t];if(n===void 0)throw i();return n},sm=i=>(e,t=void 0,n=void 0,s=0)=>t===void 0?e.forEach(r=>r.disconnect()):typeof t=="number"?kr(i,e,t).disconnect():Aa(t)?n===void 0?e.forEach(r=>r.disconnect(t)):s===void 0?kr(i,e,n).disconnect(t,0):kr(i,e,n).disconnect(t,0,s):n===void 0?e.forEach(r=>r.disconnect(t)):kr(i,e,n).disconnect(t,0),rm={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},am=(i,e,t,n,s,r,a,o)=>class extends i{constructor(l,u){const h=r(l),d={...rm,...u},p=n(h,d),_=a(h),g=_?t():null;super(l,!1,p,g),this._attack=e(this,_,p.attack),this._knee=e(this,_,p.knee),this._nativeDynamicsCompressorNode=p,this._ratio=e(this,_,p.ratio),this._release=e(this,_,p.release),this._threshold=e(this,_,p.threshold),o(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,s()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,s()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},om=(i,e,t,n,s)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=t(o);const u=zt(l,c);if(!u){const h={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(c,h)}return r.set(c,l),u?(await i(c,o.attack,l.attack),await i(c,o.knee,l.knee),await i(c,o.ratio,l.ratio),await i(c,o.release,l.release),await i(c,o.threshold,l.threshold)):(await n(c,o.attack,l.attack),await n(c,o.knee,l.knee),await n(c,o.ratio,l.ratio),await n(c,o.release,l.release),await n(c,o.threshold,l.threshold)),await s(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},cm=()=>new DOMException("","EncodingError"),lm=i=>e=>new Promise((t,n)=>{if(i===null){n(new SyntaxError);return}const s=i.document.head;if(s===null)n(new SyntaxError);else{const r=i.document.createElement("script"),a=new Blob([e],{type:"application/javascript"}),o=URL.createObjectURL(a),c=i.onerror,l=()=>{i.onerror=c,URL.revokeObjectURL(o)};i.onerror=(u,h,d,p,_)=>{if(h===o||h===i.location.href&&d===1&&p===1)return l(),n(_),!1;if(c!==null)return c(u,h,d,p,_)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),t()},r.src=o,r.type="module",s.appendChild(r)}}),um=i=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,s){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=i(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(t,r,s)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,s){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,r===void 0?null:r,s)}},hm=i=>(e,t,n)=>{Object.defineProperties(i,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{i!==null&&(delete i.currentFrame,delete i.currentTime)}},dm=i=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw i()},fm={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},pm=(i,e,t,n,s,r)=>class extends i{constructor(o,c){const l=s(o),u={...fm,...c},h=n(l,u),d=r(l),p=d?t():null;super(o,!1,h,p),this._gain=e(this,d,h.gain,Wt,rn)}get gain(){return this._gain}},mm=(i,e,t,n,s)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=t(o);const u=zt(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(c,h)}return r.set(c,l),u?await i(c,o.gain,l.gain):await n(c,o.gain,l.gain),await s(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},_m=(i,e)=>t=>e(i,t),gm=i=>e=>{const t=i(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},vm=i=>e=>{var t;return(t=i.get(e))!==null&&t!==void 0?t:0},xm=i=>e=>{const t=i(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},Sm=i=>e=>i.get(e),Lt=()=>new DOMException("","InvalidStateError"),ym=i=>e=>{const t=i.get(e);if(t===void 0)throw Lt();return t},Mm=(i,e)=>t=>{let n=i.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),i.set(t,n),n},Em=i=>e=>{const t=i.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},Ba=()=>new DOMException("","InvalidAccessError"),Tm=i=>{i.getFrequencyResponse=(e=>(t,n,s)=>{if(t.length!==n.length||n.length!==s.length)throw Ba();return e.call(i,t,n,s)})(i.getFrequencyResponse)},bm={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},wm=(i,e,t,n,s,r)=>class extends i{constructor(o,c){const l=n(o),u=s(l),h={...bm,...c},d=e(l,u?null:o.baseLatency,h),p=u?t(h.feedback,h.feedforward):null;super(o,!1,d,p),Tm(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(o,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(o,c,l)}},Uh=(i,e,t,n,s,r,a,o,c,l,u)=>{const h=l.length;let d=o;for(let p=0;p<h;p+=1){let _=t[0]*l[p];for(let g=1;g<s;g+=1){const m=d-g&c-1;_+=t[g]*r[m],_-=i[g]*a[m]}for(let g=s;g<n;g+=1)_+=t[g]*r[d-g&c-1];for(let g=s;g<e;g+=1)_-=i[g]*a[d-g&c-1];r[d]=l[p],a[d]=_,d=d+1&c-1,u[p]=_}return d},Am=(i,e,t,n)=>{const s=t instanceof Float64Array?t:new Float64Array(t),r=n instanceof Float64Array?n:new Float64Array(n),a=s.length,o=r.length,c=Math.min(a,o);if(s[0]!==1){for(let _=0;_<a;_+=1)r[_]/=s[0];for(let _=1;_<o;_+=1)s[_]/=s[0]}const l=32,u=new Float32Array(l),h=new Float32Array(l),d=e.createBuffer(i.numberOfChannels,i.length,i.sampleRate),p=i.numberOfChannels;for(let _=0;_<p;_+=1){const g=i.getChannelData(_),m=d.getChannelData(_);u.fill(0),h.fill(0),Uh(s,a,r,o,c,u,h,0,l,g,m)}return d},Cm=(i,e,t,n,s)=>(r,a)=>{const o=new WeakMap;let c=null;const l=async(u,h)=>{let d=null,p=e(u);const _=zt(p,h);if(h.createIIRFilter===void 0?d=i(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):_||(p=h.createIIRFilter(a,r)),o.set(h,d===null?p:d),d!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const m=new t(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await n(u,m,m.destination);const f=await s(m);return Am(f,h,r,a)})()}const g=await c;return d.buffer=g,d.start(0),d}return await n(u,h,p),p};return{render(u,h){const d=o.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},Rm=(i,e,t,n,s,r)=>a=>(o,c)=>{const l=i.get(o);if(l===void 0){if(!a&&r(o)){const u=n(o),{outputs:h}=t(o);for(const d of h)if(xr(d)){const p=n(d[0]);e(u,p,d[1],d[2])}else{const p=s(d[0]);u.disconnect(p,d[1])}}i.set(o,c)}else i.set(o,l+c)},Nm=(i,e)=>t=>{const n=i.get(t);return e(n)||e(t)},Im=(i,e)=>t=>i.has(t)||e(t),Dm=(i,e)=>t=>i.has(t)||e(t),Pm=(i,e)=>t=>{const n=i.get(t);return e(n)||e(t)},Om=i=>e=>i!==null&&e instanceof i,Lm=i=>e=>i!==null&&typeof i.AudioNode=="function"&&e instanceof i.AudioNode,Um=i=>e=>i!==null&&typeof i.AudioParam=="function"&&e instanceof i.AudioParam,Fm=(i,e)=>t=>i(t)||e(t),km=i=>e=>i!==null&&e instanceof i,Bm=i=>i!==null&&i.isSecureContext,Vm=(i,e,t,n)=>class extends i{constructor(r,a){const o=t(r),c=e(o,a);if(n(o))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},zm={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},Gm=(i,e,t,n)=>class extends i{constructor(r,a){const o=t(r);if(n(o))throw new TypeError;const c={...zm,...a},l=e(o,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},Hm=(i,e,t,n)=>class extends i{constructor(r,a){const o=t(r),c=e(o,a);if(n(o))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},Wm=(i,e,t)=>class extends i{constructor(s,r){const a=t(s),o=e(a,r);super(s,!0,o,null)}},qm=(i,e,t,n,s,r)=>class extends t{constructor(o,c){super(o),this._nativeContext=o,Fa.set(this,o),n(o)&&s.set(o,new Set),this._destination=new i(this,c),this._listener=e(this,o),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(o){const c=typeof o=="function"?r(this,o):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?o:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},cr=i=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=i.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},Xm=(i,e)=>(t,n,s)=>{const r=new Set;return t.connect=(a=>(o,c=0,l=0)=>{const u=r.size===0;if(e(o))return a.call(t,o,c,l),i(r,[o,c,l],h=>h[0]===o&&h[1]===c&&h[2]===l,!0),u&&n(),o;a.call(t,o,c),i(r,[o,c],h=>h[0]===o&&h[1]===c,!0),u&&n()})(t.connect),t.disconnect=(a=>(o,c,l)=>{const u=r.size>0;if(o===void 0)a.apply(t),r.clear();else if(typeof o=="number"){a.call(t,o);for(const d of r)d[1]===o&&r.delete(d)}else{e(o)?a.call(t,o,c,l):a.call(t,o,c);for(const d of r)d[0]===o&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const h=r.size===0;u&&h&&s()})(t.disconnect),t},_t=(i,e,t)=>{const n=e[t];n!==void 0&&n!==i[t]&&(i[t]=n)},Nt=(i,e)=>{_t(i,e,"channelCount"),_t(i,e,"channelCountMode"),_t(i,e,"channelInterpretation")},fu=i=>typeof i.getFloatTimeDomainData=="function",Ym=i=>{i.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);i.getByteTimeDomainData(t);const n=Math.max(t.length,i.fftSize);for(let s=0;s<n;s+=1)e[s]=(t[s]-128)*.0078125;return e}},jm=(i,e)=>(t,n)=>{const s=t.createAnalyser();if(Nt(s,n),!(n.maxDecibels>n.minDecibels))throw e();return _t(s,n,"fftSize"),_t(s,n,"maxDecibels"),_t(s,n,"minDecibels"),_t(s,n,"smoothingTimeConstant"),i(fu,()=>fu(s))||Ym(s),s},$m=i=>i===null?null:i.hasOwnProperty("AudioBuffer")?i.AudioBuffer:null,Mt=(i,e,t)=>{const n=e[t];n!==void 0&&n!==i[t].value&&(i[t].value=n)},Zm=i=>{i.start=(e=>{let t=!1;return(n=0,s=0,r)=>{if(t)throw Lt();e.call(i,n,s,r),t=!0}})(i.start)},Zc=i=>{i.start=(e=>(t=0,n=0,s)=>{if(typeof s=="number"&&s<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(i,t,n,s)})(i.start)},Kc=i=>{i.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(i,t)})(i.stop)},Km=(i,e,t,n,s,r,a,o,c,l,u)=>(h,d)=>{const p=h.createBufferSource();return Nt(p,d),Mt(p,d,"playbackRate"),_t(p,d,"buffer"),_t(p,d,"loop"),_t(p,d,"loopEnd"),_t(p,d,"loopStart"),e(t,()=>t(h))||Zm(p),e(n,()=>n(h))||c(p),e(s,()=>s(h))||l(p,h),e(r,()=>r(h))||Zc(p),e(a,()=>a(h))||u(p,h),e(o,()=>o(h))||Kc(p),i(h,p),p},Jm=i=>i===null?null:i.hasOwnProperty("AudioContext")?i.AudioContext:i.hasOwnProperty("webkitAudioContext")?i.webkitAudioContext:null,Qm=(i,e)=>(t,n,s)=>{const r=t.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}s&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const a=i(t,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return e(a,"channelCount",o=>()=>o.call(a),o=>c=>{o.call(a,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),e(a,"channelCountMode",o=>()=>o.call(a),o=>c=>{o.call(a,c),r.channelCountMode=c}),e(a,"channelInterpretation",o=>()=>o.call(a),o=>c=>{o.call(a,c),r.channelInterpretation=c}),Object.defineProperty(a,"maxChannelCount",{get:()=>r.maxChannelCount}),a.connect(r),a},e_=i=>i===null?null:i.hasOwnProperty("AudioWorkletNode")?i.AudioWorkletNode:null,t_=i=>{const{port1:e}=new MessageChannel;try{e.postMessage(i)}finally{e.close()}},n_=(i,e,t,n,s)=>(r,a,o,c,l,u)=>{if(o!==null)try{const h=new o(r,c,u),d=new Map;let p=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw i()}},channelCountMode:{get:()=>"explicit",set:()=>{throw i()}},onprocessorerror:{get:()=>p,set:_=>{typeof p=="function"&&h.removeEventListener("processorerror",p),p=typeof _=="function"?_:null,typeof p=="function"&&h.addEventListener("processorerror",p)}}}),h.addEventListener=(_=>(...g)=>{if(g[0]==="processorerror"){const m=typeof g[1]=="function"?g[1]:typeof g[1]=="object"&&g[1]!==null&&typeof g[1].handleEvent=="function"?g[1].handleEvent:null;if(m!==null){const f=d.get(g[1]);f!==void 0?g[1]=f:(g[1]=E=>{E.type==="error"?(Object.defineProperties(E,{type:{value:"processorerror"}}),m(E)):m(new ErrorEvent(g[0],{...E}))},d.set(m,g[1]))}}return _.call(h,"error",g[1],g[2]),_.call(h,...g)})(h.addEventListener),h.removeEventListener=(_=>(...g)=>{if(g[0]==="processorerror"){const m=d.get(g[1]);m!==void 0&&(d.delete(g[1]),g[1]=m)}return _.call(h,"error",g[1],g[2]),_.call(h,g[0],g[1],g[2])})(h.removeEventListener),u.numberOfOutputs!==0){const _=t(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(_).connect(r.destination),s(h,()=>_.disconnect(),()=>_.connect(r.destination))}return h}catch(h){throw h.code===11?n():h}if(l===void 0)throw n();return t_(u),e(r,a,l,u)},Fh=(i,e)=>i===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(i*e))))),i_=i=>new Promise((e,t)=>{const{port1:n,port2:s}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),s.close(),e(r)},n.onmessageerror=({data:r})=>{n.close(),s.close(),t(r)},s.postMessage(i)}),s_=async(i,e)=>{const t=await i_(e);return new i(t)},r_=(i,e,t,n)=>{let s=jo.get(i);s===void 0&&(s=new WeakMap,jo.set(i,s));const r=s_(t,n);return s.set(e,r),r},a_=(i,e,t,n,s,r,a,o,c,l,u,h,d)=>(p,_,g,m)=>{if(m.numberOfInputs===0&&m.numberOfOutputs===0)throw c();const f=Array.isArray(m.outputChannelCount)?m.outputChannelCount:Array.from(m.outputChannelCount);if(f.some(ce=>ce<1))throw c();if(f.length!==m.numberOfOutputs)throw e();if(m.channelCountMode!=="explicit")throw c();const E=m.channelCount*m.numberOfInputs,M=f.reduce((ce,fe)=>ce+fe,0),x=g.parameterDescriptors===void 0?0:g.parameterDescriptors.length;if(E+x>6||M>6)throw c();const T=new MessageChannel,w=[],b=[];for(let ce=0;ce<m.numberOfInputs;ce+=1)w.push(a(p,{channelCount:m.channelCount,channelCountMode:m.channelCountMode,channelInterpretation:m.channelInterpretation,gain:1})),b.push(s(p,{channelCount:m.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:m.channelCount}));const A=[];if(g.parameterDescriptors!==void 0)for(const{defaultValue:ce,maxValue:fe,minValue:Ve,name:he}of g.parameterDescriptors){const Ee=r(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:m.parameterData[he]!==void 0?m.parameterData[he]:ce===void 0?0:ce});Object.defineProperties(Ee.offset,{defaultValue:{get:()=>ce===void 0?0:ce},maxValue:{get:()=>fe===void 0?Wt:fe},minValue:{get:()=>Ve===void 0?rn:Ve}}),A.push(Ee)}const S=n(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,E+x)}),v=Fh(_,p.sampleRate),R=o(p,v,E+x,Math.max(1,M)),I=s(p,{channelCount:Math.max(1,M),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,M)}),P=[];for(let ce=0;ce<m.numberOfOutputs;ce+=1)P.push(n(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:f[ce]}));for(let ce=0;ce<m.numberOfInputs;ce+=1){w[ce].connect(b[ce]);for(let fe=0;fe<m.channelCount;fe+=1)b[ce].connect(S,fe,ce*m.channelCount+fe)}const F=new Oh(g.parameterDescriptors===void 0?[]:g.parameterDescriptors.map(({name:ce},fe)=>{const Ve=A[fe];return Ve.connect(S,0,E+fe),Ve.start(0),[ce,Ve.offset]}));S.connect(R);let H=m.channelInterpretation,k=null;const V=m.numberOfOutputs===0?[R]:P,B={get bufferSize(){return v},get channelCount(){return m.channelCount},set channelCount(ce){throw t()},get channelCountMode(){return m.channelCountMode},set channelCountMode(ce){throw t()},get channelInterpretation(){return H},set channelInterpretation(ce){for(const fe of w)fe.channelInterpretation=ce;H=ce},get context(){return R.context},get inputs(){return w},get numberOfInputs(){return m.numberOfInputs},get numberOfOutputs(){return m.numberOfOutputs},get onprocessorerror(){return k},set onprocessorerror(ce){typeof k=="function"&&B.removeEventListener("processorerror",k),k=typeof ce=="function"?ce:null,typeof k=="function"&&B.addEventListener("processorerror",k)},get parameters(){return F},get port(){return T.port2},addEventListener(...ce){return R.addEventListener(ce[0],ce[1],ce[2])},connect:i.bind(null,V),disconnect:l.bind(null,V),dispatchEvent(...ce){return R.dispatchEvent(ce[0])},removeEventListener(...ce){return R.removeEventListener(ce[0],ce[1],ce[2])}},Y=new Map;T.port1.addEventListener=(ce=>(...fe)=>{if(fe[0]==="message"){const Ve=typeof fe[1]=="function"?fe[1]:typeof fe[1]=="object"&&fe[1]!==null&&typeof fe[1].handleEvent=="function"?fe[1].handleEvent:null;if(Ve!==null){const he=Y.get(fe[1]);he!==void 0?fe[1]=he:(fe[1]=Ee=>{u(p.currentTime,p.sampleRate,()=>Ve(Ee))},Y.set(Ve,fe[1]))}}return ce.call(T.port1,fe[0],fe[1],fe[2])})(T.port1.addEventListener),T.port1.removeEventListener=(ce=>(...fe)=>{if(fe[0]==="message"){const Ve=Y.get(fe[1]);Ve!==void 0&&(Y.delete(fe[1]),fe[1]=Ve)}return ce.call(T.port1,fe[0],fe[1],fe[2])})(T.port1.removeEventListener);let J=null;Object.defineProperty(T.port1,"onmessage",{get:()=>J,set:ce=>{typeof J=="function"&&T.port1.removeEventListener("message",J),J=typeof ce=="function"?ce:null,typeof J=="function"&&(T.port1.addEventListener("message",J),T.port1.start())}}),g.prototype.port=T.port1;let ne=null;r_(p,B,g,m).then(ce=>ne=ce);const We=Ra(m.numberOfInputs,m.channelCount),X=Ra(m.numberOfOutputs,f),Z=g.parameterDescriptors===void 0?[]:g.parameterDescriptors.reduce((ce,{name:fe})=>({...ce,[fe]:new Float32Array(128)}),{});let de=!0;const oe=()=>{m.numberOfOutputs>0&&R.disconnect(I);for(let ce=0,fe=0;ce<m.numberOfOutputs;ce+=1){const Ve=P[ce];for(let he=0;he<f[ce];he+=1)I.disconnect(Ve,fe+he,he);fe+=f[ce]}},Q=new Map;R.onaudioprocess=({inputBuffer:ce,outputBuffer:fe})=>{if(ne!==null){const Ve=h(B);for(let he=0;he<v;he+=128){for(let Ee=0;Ee<m.numberOfInputs;Ee+=1)for(let _e=0;_e<m.channelCount;_e+=1)Ca(ce,We[Ee],_e,_e,he);g.parameterDescriptors!==void 0&&g.parameterDescriptors.forEach(({name:Ee},_e)=>{Ca(ce,Z,Ee,E+_e,he)});for(let Ee=0;Ee<m.numberOfInputs;Ee+=1)for(let _e=0;_e<f[Ee];_e+=1)X[Ee][_e].byteLength===0&&(X[Ee][_e]=new Float32Array(128));try{const Ee=We.map((De,lt)=>{if(Ve[lt].size>0)return Q.set(lt,v/128),De;const y=Q.get(lt);return y===void 0?[]:(De.every(G=>G.every(K=>K===0))&&(y===1?Q.delete(lt):Q.set(lt,y-1)),De)});de=u(p.currentTime+he/p.sampleRate,p.sampleRate,()=>ne.process(Ee,X,Z));for(let De=0,lt=0;De<m.numberOfOutputs;De+=1){for(let N=0;N<f[De];N+=1)Lh(fe,X[De],N,lt+N,he);lt+=f[De]}}catch(Ee){de=!1,B.dispatchEvent(new ErrorEvent("processorerror",{colno:Ee.colno,filename:Ee.filename,lineno:Ee.lineno,message:Ee.message}))}if(!de){for(let Ee=0;Ee<m.numberOfInputs;Ee+=1){w[Ee].disconnect(b[Ee]);for(let _e=0;_e<m.channelCount;_e+=1)b[he].disconnect(S,_e,Ee*m.channelCount+_e)}if(g.parameterDescriptors!==void 0){const Ee=g.parameterDescriptors.length;for(let _e=0;_e<Ee;_e+=1){const De=A[_e];De.disconnect(S,0,E+_e),De.stop()}}S.disconnect(R),R.onaudioprocess=null,je?oe():it();break}}}};let je=!1;const Ne=a(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),nt=()=>R.connect(Ne).connect(p.destination),it=()=>{R.disconnect(Ne),Ne.disconnect()},Je=()=>{if(de){it(),m.numberOfOutputs>0&&R.connect(I);for(let ce=0,fe=0;ce<m.numberOfOutputs;ce+=1){const Ve=P[ce];for(let he=0;he<f[ce];he+=1)I.connect(Ve,fe+he,he);fe+=f[ce]}}je=!0},D=()=>{de&&(nt(),oe()),je=!1};return nt(),d(B,Je,D)},kh=(i,e)=>{const t=i.createBiquadFilter();return Nt(t,e),Mt(t,e,"Q"),Mt(t,e,"detune"),Mt(t,e,"frequency"),Mt(t,e,"gain"),_t(t,e,"type"),t},o_=(i,e)=>(t,n)=>{const s=t.createChannelMerger(n.numberOfInputs);return i!==null&&i.name==="webkitAudioContext"&&e(t,s),Nt(s,n),s},c_=i=>{const e=i.numberOfOutputs;Object.defineProperty(i,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw Lt()}}),Object.defineProperty(i,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw Lt()}}),Object.defineProperty(i,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw Lt()}})},Sr=(i,e)=>{const t=i.createChannelSplitter(e.numberOfOutputs);return Nt(t,e),c_(t),t},l_=(i,e,t,n,s)=>(r,a)=>{if(r.createConstantSource===void 0)return t(r,a);const o=r.createConstantSource();return Nt(o,a),Mt(o,a,"offset"),e(n,()=>n(r))||Zc(o),e(s,()=>s(r))||Kc(o),i(r,o),o},Ws=(i,e)=>(i.connect=e.connect.bind(e),i.disconnect=e.disconnect.bind(e),i),u_=(i,e,t,n)=>(s,{offset:r,...a})=>{const o=s.createBuffer(1,2,44100),c=e(s,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(s,{...a,gain:r}),u=o.getChannelData(0);u[0]=1,u[1]=1,c.buffer=o,c.loop=!0;const h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(_){l.channelCount=_},get channelCountMode(){return l.channelCountMode},set channelCountMode(_){l.channelCountMode=_},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(_){l.channelInterpretation=_},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(_){c.onended=_},addEventListener(..._){return c.addEventListener(_[0],_[1],_[2])},dispatchEvent(..._){return c.dispatchEvent(_[0])},removeEventListener(..._){return c.removeEventListener(_[0],_[1],_[2])},start(_=0){c.start.call(c,_)},stop(_=0){c.stop.call(c,_)}},d=()=>c.connect(l),p=()=>c.disconnect(l);return i(s,c),n(Ws(h,l),d,p)},h_=(i,e)=>(t,n)=>{const s=t.createConvolver();if(Nt(s,n),n.disableNormalization===s.normalize&&(s.normalize=!n.disableNormalization),_t(s,n,"buffer"),n.channelCount>2||(e(s,"channelCount",r=>()=>r.call(s),r=>a=>{if(a>2)throw i();return r.call(s,a)}),n.channelCountMode==="max"))throw i();return e(s,"channelCountMode",r=>()=>r.call(s),r=>a=>{if(a==="max")throw i();return r.call(s,a)}),s},Bh=(i,e)=>{const t=i.createDelay(e.maxDelayTime);return Nt(t,e),Mt(t,e,"delayTime"),t},d_=i=>(e,t)=>{const n=e.createDynamicsCompressor();if(Nt(n,t),t.channelCount>2||t.channelCountMode==="max")throw i();return Mt(n,t,"attack"),Mt(n,t,"knee"),Mt(n,t,"ratio"),Mt(n,t,"release"),Mt(n,t,"threshold"),n},Qt=(i,e)=>{const t=i.createGain();return Nt(t,e),Mt(t,e,"gain"),t},f_=i=>(e,t,n)=>{if(e.createIIRFilter===void 0)return i(e,t,n);const s=e.createIIRFilter(n.feedforward,n.feedback);return Nt(s,n),s};function p_(i,e){const t=e[0]*e[0]+e[1]*e[1];return[(i[0]*e[0]+i[1]*e[1])/t,(i[1]*e[0]-i[0]*e[1])/t]}function m_(i,e){return[i[0]*e[0]-i[1]*e[1],i[0]*e[1]+i[1]*e[0]]}function pu(i,e){let t=[0,0];for(let n=i.length-1;n>=0;n-=1)t=m_(t,e),t[0]+=i[n];return t}const __=(i,e,t,n)=>(s,r,{channelCount:a,channelCountMode:o,channelInterpretation:c,feedback:l,feedforward:u})=>{const h=Fh(r,s.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),p=u instanceof Float64Array?u:new Float64Array(u),_=d.length,g=p.length,m=Math.min(_,g);if(_===0||_>20)throw n();if(d[0]===0)throw e();if(g===0||g>20)throw n();if(p[0]===0)throw e();if(d[0]!==1){for(let A=0;A<g;A+=1)p[A]/=d[0];for(let A=1;A<_;A+=1)d[A]/=d[0]}const f=t(s,h,a,a);f.channelCount=a,f.channelCountMode=o,f.channelInterpretation=c;const E=32,M=[],x=[],T=[];for(let A=0;A<a;A+=1){M.push(0);const S=new Float32Array(E),v=new Float32Array(E);S.fill(0),v.fill(0),x.push(S),T.push(v)}f.onaudioprocess=A=>{const S=A.inputBuffer,v=A.outputBuffer,R=S.numberOfChannels;for(let I=0;I<R;I+=1){const P=S.getChannelData(I),F=v.getChannelData(I);M[I]=Uh(d,_,p,g,m,x[I],T[I],M[I],E,P,F)}};const w=s.sampleRate/2;return Ws({get bufferSize(){return h},get channelCount(){return f.channelCount},set channelCount(A){f.channelCount=A},get channelCountMode(){return f.channelCountMode},set channelCountMode(A){f.channelCountMode=A},get channelInterpretation(){return f.channelInterpretation},set channelInterpretation(A){f.channelInterpretation=A},get context(){return f.context},get inputs(){return[f]},get numberOfInputs(){return f.numberOfInputs},get numberOfOutputs(){return f.numberOfOutputs},addEventListener(...A){return f.addEventListener(A[0],A[1],A[2])},dispatchEvent(...A){return f.dispatchEvent(A[0])},getFrequencyResponse(A,S,v){if(A.length!==S.length||S.length!==v.length)throw i();const R=A.length;for(let I=0;I<R;I+=1){const P=-Math.PI*(A[I]/w),F=[Math.cos(P),Math.sin(P)],H=pu(p,F),k=pu(d,F),V=p_(H,k);S[I]=Math.sqrt(V[0]*V[0]+V[1]*V[1]),v[I]=Math.atan2(V[1],V[0])}},removeEventListener(...A){return f.removeEventListener(A[0],A[1],A[2])}},f)},g_=(i,e)=>i.createMediaElementSource(e.mediaElement),v_=(i,e)=>{const t=i.createMediaStreamDestination();return Nt(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},x_=(i,{mediaStream:e})=>{const t=e.getAudioTracks();t.sort((r,a)=>r.id<a.id?-1:r.id>a.id?1:0);const n=t.slice(0,1),s=i.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(s,"mediaStream",{value:e}),s},S_=(i,e)=>(t,{mediaStreamTrack:n})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(n);const s=new MediaStream([n]),r=t.createMediaStreamSource(s);if(n.kind!=="audio")throw i();if(e(t))throw new TypeError;return r},y_=i=>i===null?null:i.hasOwnProperty("OfflineAudioContext")?i.OfflineAudioContext:i.hasOwnProperty("webkitOfflineAudioContext")?i.webkitOfflineAudioContext:null,M_=(i,e,t,n,s,r)=>(a,o)=>{const c=a.createOscillator();return Nt(c,o),Mt(c,o,"detune"),Mt(c,o,"frequency"),o.periodicWave!==void 0?c.setPeriodicWave(o.periodicWave):_t(c,o,"type"),e(t,()=>t(a))||Zc(c),e(n,()=>n(a))||r(c,a),e(s,()=>s(a))||Kc(c),i(a,c),c},E_=i=>(e,t)=>{const n=e.createPanner();return n.orientationX===void 0?i(e,t):(Nt(n,t),Mt(n,t,"orientationX"),Mt(n,t,"orientationY"),Mt(n,t,"orientationZ"),Mt(n,t,"positionX"),Mt(n,t,"positionY"),Mt(n,t,"positionZ"),_t(n,t,"coneInnerAngle"),_t(n,t,"coneOuterAngle"),_t(n,t,"coneOuterGain"),_t(n,t,"distanceModel"),_t(n,t,"maxDistance"),_t(n,t,"panningModel"),_t(n,t,"refDistance"),_t(n,t,"rolloffFactor"),n)},T_=(i,e,t,n,s,r,a,o,c,l)=>(u,{coneInnerAngle:h,coneOuterAngle:d,coneOuterGain:p,distanceModel:_,maxDistance:g,orientationX:m,orientationY:f,orientationZ:E,panningModel:M,positionX:x,positionY:T,positionZ:w,refDistance:b,rolloffFactor:A,...S})=>{const v=u.createPanner();if(S.channelCount>2||S.channelCountMode==="max")throw a();Nt(v,S);const R={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},I=t(u,{...R,channelInterpretation:"speakers",numberOfInputs:6}),P=n(u,{...S,gain:1}),F=n(u,{...R,gain:1}),H=n(u,{...R,gain:0}),k=n(u,{...R,gain:0}),V=n(u,{...R,gain:0}),B=n(u,{...R,gain:0}),Y=n(u,{...R,gain:0}),J=s(u,256,6,1),ne=r(u,{...R,curve:new Float32Array([1,1]),oversample:"none"});let Se=[m,f,E],We=[x,T,w];const X=new Float32Array(1);J.onaudioprocess=({inputBuffer:Q})=>{const je=[c(Q,X,0),c(Q,X,1),c(Q,X,2)];je.some((nt,it)=>nt!==Se[it])&&(v.setOrientation(...je),Se=je);const Ne=[c(Q,X,3),c(Q,X,4),c(Q,X,5)];Ne.some((nt,it)=>nt!==We[it])&&(v.setPosition(...Ne),We=Ne)},Object.defineProperty(H.gain,"defaultValue",{get:()=>0}),Object.defineProperty(k.gain,"defaultValue",{get:()=>0}),Object.defineProperty(V.gain,"defaultValue",{get:()=>0}),Object.defineProperty(B.gain,"defaultValue",{get:()=>0}),Object.defineProperty(Y.gain,"defaultValue",{get:()=>0});const Z={get bufferSize(){},get channelCount(){return v.channelCount},set channelCount(Q){if(Q>2)throw a();P.channelCount=Q,v.channelCount=Q},get channelCountMode(){return v.channelCountMode},set channelCountMode(Q){if(Q==="max")throw a();P.channelCountMode=Q,v.channelCountMode=Q},get channelInterpretation(){return v.channelInterpretation},set channelInterpretation(Q){P.channelInterpretation=Q,v.channelInterpretation=Q},get coneInnerAngle(){return v.coneInnerAngle},set coneInnerAngle(Q){v.coneInnerAngle=Q},get coneOuterAngle(){return v.coneOuterAngle},set coneOuterAngle(Q){v.coneOuterAngle=Q},get coneOuterGain(){return v.coneOuterGain},set coneOuterGain(Q){if(Q<0||Q>1)throw e();v.coneOuterGain=Q},get context(){return v.context},get distanceModel(){return v.distanceModel},set distanceModel(Q){v.distanceModel=Q},get inputs(){return[P]},get maxDistance(){return v.maxDistance},set maxDistance(Q){if(Q<0)throw new RangeError;v.maxDistance=Q},get numberOfInputs(){return v.numberOfInputs},get numberOfOutputs(){return v.numberOfOutputs},get orientationX(){return F.gain},get orientationY(){return H.gain},get orientationZ(){return k.gain},get panningModel(){return v.panningModel},set panningModel(Q){v.panningModel=Q},get positionX(){return V.gain},get positionY(){return B.gain},get positionZ(){return Y.gain},get refDistance(){return v.refDistance},set refDistance(Q){if(Q<0)throw new RangeError;v.refDistance=Q},get rolloffFactor(){return v.rolloffFactor},set rolloffFactor(Q){if(Q<0)throw new RangeError;v.rolloffFactor=Q},addEventListener(...Q){return P.addEventListener(Q[0],Q[1],Q[2])},dispatchEvent(...Q){return P.dispatchEvent(Q[0])},removeEventListener(...Q){return P.removeEventListener(Q[0],Q[1],Q[2])}};h!==Z.coneInnerAngle&&(Z.coneInnerAngle=h),d!==Z.coneOuterAngle&&(Z.coneOuterAngle=d),p!==Z.coneOuterGain&&(Z.coneOuterGain=p),_!==Z.distanceModel&&(Z.distanceModel=_),g!==Z.maxDistance&&(Z.maxDistance=g),m!==Z.orientationX.value&&(Z.orientationX.value=m),f!==Z.orientationY.value&&(Z.orientationY.value=f),E!==Z.orientationZ.value&&(Z.orientationZ.value=E),M!==Z.panningModel&&(Z.panningModel=M),x!==Z.positionX.value&&(Z.positionX.value=x),T!==Z.positionY.value&&(Z.positionY.value=T),w!==Z.positionZ.value&&(Z.positionZ.value=w),b!==Z.refDistance&&(Z.refDistance=b),A!==Z.rolloffFactor&&(Z.rolloffFactor=A),(Se[0]!==1||Se[1]!==0||Se[2]!==0)&&v.setOrientation(...Se),(We[0]!==0||We[1]!==0||We[2]!==0)&&v.setPosition(...We);const de=()=>{P.connect(v),i(P,ne,0,0),ne.connect(F).connect(I,0,0),ne.connect(H).connect(I,0,1),ne.connect(k).connect(I,0,2),ne.connect(V).connect(I,0,3),ne.connect(B).connect(I,0,4),ne.connect(Y).connect(I,0,5),I.connect(J).connect(u.destination)},oe=()=>{P.disconnect(v),o(P,ne,0,0),ne.disconnect(F),F.disconnect(I),ne.disconnect(H),H.disconnect(I),ne.disconnect(k),k.disconnect(I),ne.disconnect(V),V.disconnect(I),ne.disconnect(B),B.disconnect(I),ne.disconnect(Y),Y.disconnect(I),I.disconnect(J),J.disconnect(u.destination)};return l(Ws(Z,v),de,oe)},b_=i=>(e,{disableNormalization:t,imag:n,real:s})=>{const r=n instanceof Float32Array?n:new Float32Array(n),a=s instanceof Float32Array?s:new Float32Array(s),o=e.createPeriodicWave(a,r,{disableNormalization:t});if(Array.from(n).length<2)throw i();return o},yr=(i,e,t,n)=>i.createScriptProcessor(e,t,n),w_=(i,e)=>(t,n)=>{const s=n.channelCountMode;if(s==="clamped-max")throw e();if(t.createStereoPanner===void 0)return i(t,n);const r=t.createStereoPanner();return Nt(r,n),Mt(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>s,set:a=>{if(a!==s)throw e()}}),r},A_=(i,e,t,n,s,r)=>{const o=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(_,g,m,f)=>{const E=new Float32Array(16385),M=new Float32Array(16385);for(let S=0;S<16385;S+=1){const v=S/16384*c;E[S]=Math.cos(v),M[S]=Math.sin(v)}const x=t(_,{...l,gain:0}),T=n(_,{...u,curve:E}),w=n(_,{...u,curve:o}),b=t(_,{...l,gain:0}),A=n(_,{...u,curve:M});return{connectGraph(){g.connect(x),g.connect(w.inputs===void 0?w:w.inputs[0]),g.connect(b),w.connect(m),m.connect(T.inputs===void 0?T:T.inputs[0]),m.connect(A.inputs===void 0?A:A.inputs[0]),T.connect(x.gain),A.connect(b.gain),x.connect(f,0,0),b.connect(f,0,1)},disconnectGraph(){g.disconnect(x),g.disconnect(w.inputs===void 0?w:w.inputs[0]),g.disconnect(b),w.disconnect(m),m.disconnect(T.inputs===void 0?T:T.inputs[0]),m.disconnect(A.inputs===void 0?A:A.inputs[0]),T.disconnect(x.gain),A.disconnect(b.gain),x.disconnect(f,0,0),b.disconnect(f,0,1)}}},d=(_,g,m,f)=>{const E=new Float32Array(16385),M=new Float32Array(16385),x=new Float32Array(16385),T=new Float32Array(16385),w=Math.floor(16385/2);for(let V=0;V<16385;V+=1)if(V>w){const B=(V-w)/(16384-w)*c;E[V]=Math.cos(B),M[V]=Math.sin(B),x[V]=0,T[V]=1}else{const B=V/(16384-w)*c;E[V]=1,M[V]=0,x[V]=Math.cos(B),T[V]=Math.sin(B)}const b=e(_,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),A=t(_,{...l,gain:0}),S=n(_,{...u,curve:E}),v=t(_,{...l,gain:0}),R=n(_,{...u,curve:M}),I=n(_,{...u,curve:o}),P=t(_,{...l,gain:0}),F=n(_,{...u,curve:x}),H=t(_,{...l,gain:0}),k=n(_,{...u,curve:T});return{connectGraph(){g.connect(b),g.connect(I.inputs===void 0?I:I.inputs[0]),b.connect(A,0),b.connect(v,0),b.connect(P,1),b.connect(H,1),I.connect(m),m.connect(S.inputs===void 0?S:S.inputs[0]),m.connect(R.inputs===void 0?R:R.inputs[0]),m.connect(F.inputs===void 0?F:F.inputs[0]),m.connect(k.inputs===void 0?k:k.inputs[0]),S.connect(A.gain),R.connect(v.gain),F.connect(P.gain),k.connect(H.gain),A.connect(f,0,0),P.connect(f,0,0),v.connect(f,0,1),H.connect(f,0,1)},disconnectGraph(){g.disconnect(b),g.disconnect(I.inputs===void 0?I:I.inputs[0]),b.disconnect(A,0),b.disconnect(v,0),b.disconnect(P,1),b.disconnect(H,1),I.disconnect(m),m.disconnect(S.inputs===void 0?S:S.inputs[0]),m.disconnect(R.inputs===void 0?R:R.inputs[0]),m.disconnect(F.inputs===void 0?F:F.inputs[0]),m.disconnect(k.inputs===void 0?k:k.inputs[0]),S.disconnect(A.gain),R.disconnect(v.gain),F.disconnect(P.gain),k.disconnect(H.gain),A.disconnect(f,0,0),P.disconnect(f,0,0),v.disconnect(f,0,1),H.disconnect(f,0,1)}}},p=(_,g,m,f,E)=>{if(g===1)return h(_,m,f,E);if(g===2)return d(_,m,f,E);throw s()};return(_,{channelCount:g,channelCountMode:m,pan:f,...E})=>{if(m==="max")throw s();const M=i(_,{...E,channelCount:1,channelCountMode:m,numberOfInputs:2}),x=t(_,{...E,channelCount:g,channelCountMode:m,gain:1}),T=t(_,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:f});let{connectGraph:w,disconnectGraph:b}=p(_,g,x,T,M);Object.defineProperty(T.gain,"defaultValue",{get:()=>0}),Object.defineProperty(T.gain,"maxValue",{get:()=>1}),Object.defineProperty(T.gain,"minValue",{get:()=>-1});const A={get bufferSize(){},get channelCount(){return x.channelCount},set channelCount(I){x.channelCount!==I&&(S&&b(),{connectGraph:w,disconnectGraph:b}=p(_,I,x,T,M),S&&w()),x.channelCount=I},get channelCountMode(){return x.channelCountMode},set channelCountMode(I){if(I==="clamped-max"||I==="max")throw s();x.channelCountMode=I},get channelInterpretation(){return x.channelInterpretation},set channelInterpretation(I){x.channelInterpretation=I},get context(){return x.context},get inputs(){return[x]},get numberOfInputs(){return x.numberOfInputs},get numberOfOutputs(){return x.numberOfOutputs},get pan(){return T.gain},addEventListener(...I){return x.addEventListener(I[0],I[1],I[2])},dispatchEvent(...I){return x.dispatchEvent(I[0])},removeEventListener(...I){return x.removeEventListener(I[0],I[1],I[2])}};let S=!1;const v=()=>{w(),S=!0},R=()=>{b(),S=!1};return r(Ws(A,M),v,R)}},C_=(i,e,t,n,s,r,a)=>(o,c)=>{const l=o.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&o.createGain().gain.automationRate===void 0)return t(o,c);Nt(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw e();_t(l,{curve:u},"curve"),_t(l,c,"oversample");let h=null,d=!1;return a(l,"curve",g=>()=>g.call(l),g=>m=>(g.call(l,m),d&&(n(m)&&h===null?h=i(o,l):!n(m)&&h!==null&&(h(),h=null)),m)),s(l,()=>{d=!0,n(l.curve)&&(h=i(o,l))},()=>{d=!1,h!==null&&(h(),h=null)})},R_=(i,e,t,n,s)=>(r,{curve:a,oversample:o,...c})=>{const l=r.createWaveShaper(),u=r.createWaveShaper();Nt(l,c),Nt(u,c);const h=t(r,{...c,gain:1}),d=t(r,{...c,gain:-1}),p=t(r,{...c,gain:1}),_=t(r,{...c,gain:-1});let g=null,m=!1,f=null;const E={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(T){h.channelCount=T,d.channelCount=T,l.channelCount=T,p.channelCount=T,u.channelCount=T,_.channelCount=T},get channelCountMode(){return l.channelCountMode},set channelCountMode(T){h.channelCountMode=T,d.channelCountMode=T,l.channelCountMode=T,p.channelCountMode=T,u.channelCountMode=T,_.channelCountMode=T},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(T){h.channelInterpretation=T,d.channelInterpretation=T,l.channelInterpretation=T,p.channelInterpretation=T,u.channelInterpretation=T,_.channelInterpretation=T},get context(){return l.context},get curve(){return f},set curve(T){if(T!==null&&T.length<2)throw e();if(T===null)l.curve=T,u.curve=T;else{const w=T.length,b=new Float32Array(w+2-w%2),A=new Float32Array(w+2-w%2);b[0]=T[0],A[0]=-T[w-1];const S=Math.ceil((w+1)/2),v=(w+1)/2-1;for(let R=1;R<S;R+=1){const I=R/S*v,P=Math.floor(I),F=Math.ceil(I);b[R]=P===F?T[P]:(1-(I-P))*T[P]+(1-(F-I))*T[F],A[R]=P===F?-T[w-1-P]:-((1-(I-P))*T[w-1-P])-(1-(F-I))*T[w-1-F]}b[S]=w%2===1?T[S-1]:(T[S-2]+T[S-1])/2,l.curve=b,u.curve=A}f=T,m&&(n(f)&&g===null?g=i(r,h):g!==null&&(g(),g=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(T){l.oversample=T,u.oversample=T},addEventListener(...T){return h.addEventListener(T[0],T[1],T[2])},dispatchEvent(...T){return h.dispatchEvent(T[0])},removeEventListener(...T){return h.removeEventListener(T[0],T[1],T[2])}};a!==null&&(E.curve=a instanceof Float32Array?a:new Float32Array(a)),o!==E.oversample&&(E.oversample=o);const M=()=>{h.connect(l).connect(p),h.connect(d).connect(u).connect(_).connect(p),m=!0,n(f)&&(g=i(r,h))},x=()=>{h.disconnect(l),l.disconnect(p),h.disconnect(d),d.disconnect(u),u.disconnect(_),_.disconnect(p),m=!1,g!==null&&(g(),g=null)};return s(Ws(E,p),M,x)},Yt=()=>new DOMException("","NotSupportedError"),N_={numberOfChannels:1},I_=(i,e,t,n,s)=>class extends i{constructor(a,o,c){let l;if(typeof a=="number"&&o!==void 0&&c!==void 0)l={length:o,numberOfChannels:a,sampleRate:c};else if(typeof a=="object")l=a;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:h,sampleRate:d}={...N_,...l},p=n(h,u,d);e(cr,()=>cr(p))||p.addEventListener("statechange",(()=>{let _=0;const g=m=>{this._state==="running"&&(_>0?(p.removeEventListener("statechange",g),m.stopImmediatePropagation(),this._waitForThePromiseToSettle(m)):_+=1)};return g})()),super(p,h),this._length=u,this._nativeOfflineAudioContext=p,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",s(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,Nh(this)}))}_waitForThePromiseToSettle(a){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(a):setTimeout(()=>this._waitForThePromiseToSettle(a))}},D_={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},P_=(i,e,t,n,s,r,a)=>class extends i{constructor(c,l){const u=s(c),h={...D_,...l},d=t(u,h),p=r(u),_=p?n():null,g=c.sampleRate/2;super(c,!1,d,_),this._detune=e(this,p,d.detune,153600,-153600),this._frequency=e(this,p,d.frequency,g,-g),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=_,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?a(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){Ds(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),ti(this)&&gr(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},O_=(i,e,t,n,s)=>()=>{const r=new WeakMap;let a=null,o=null,c=null;const l=async(u,h)=>{let d=t(u);const p=zt(d,h);if(!p){const _={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:a===null?void 0:a,type:d.type};d=e(h,_),o!==null&&d.start(o),c!==null&&d.stop(c)}return r.set(h,d),p?(await i(h,u.detune,d.detune),await i(h,u.frequency,d.frequency)):(await n(h,u.detune,d.detune),await n(h,u.frequency,d.frequency)),await s(u,h,d),d};return{set periodicWave(u){a=u},set start(u){o=u},set stop(u){c=u},render(u,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},L_={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},U_=(i,e,t,n,s,r,a)=>class extends i{constructor(c,l){const u=s(c),h={...L_,...l},d=t(u,h),p=r(u),_=p?n():null;super(c,!1,d,_),this._nativePannerNode=d,this._orientationX=e(this,p,d.orientationX,Wt,rn),this._orientationY=e(this,p,d.orientationY,Wt,rn),this._orientationZ=e(this,p,d.orientationZ,Wt,rn),this._positionX=e(this,p,d.positionX,Wt,rn),this._positionY=e(this,p,d.positionY,Wt,rn),this._positionZ=e(this,p,d.positionZ,Wt,rn),a(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},F_=(i,e,t,n,s,r,a,o,c,l)=>()=>{const u=new WeakMap;let h=null;const d=async(p,_)=>{let g=null,m=r(p);const f={channelCount:m.channelCount,channelCountMode:m.channelCountMode,channelInterpretation:m.channelInterpretation},E={...f,coneInnerAngle:m.coneInnerAngle,coneOuterAngle:m.coneOuterAngle,coneOuterGain:m.coneOuterGain,distanceModel:m.distanceModel,maxDistance:m.maxDistance,panningModel:m.panningModel,refDistance:m.refDistance,rolloffFactor:m.rolloffFactor},M=zt(m,_);if("bufferSize"in m)g=n(_,{...f,gain:1});else if(!M){const x={...E,orientationX:m.orientationX.value,orientationY:m.orientationY.value,orientationZ:m.orientationZ.value,positionX:m.positionX.value,positionY:m.positionY.value,positionZ:m.positionZ.value};m=s(_,x)}if(u.set(_,g===null?m:g),g!==null){if(h===null){if(a===null)throw new Error("Missing the native OfflineAudioContext constructor.");const R=new a(6,p.context.length,_.sampleRate),I=e(R,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});I.connect(R.destination),h=(async()=>{const P=await Promise.all([p.orientationX,p.orientationY,p.orientationZ,p.positionX,p.positionY,p.positionZ].map(async(F,H)=>{const k=t(R,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:H===0?1:0});return await o(R,F,k.offset),k}));for(let F=0;F<6;F+=1)P[F].connect(I,0,F),P[F].start(0);return l(R)})()}const x=await h,T=n(_,{...f,gain:1});await c(p,_,T);const w=[];for(let R=0;R<x.numberOfChannels;R+=1)w.push(x.getChannelData(R));let b=[w[0][0],w[1][0],w[2][0]],A=[w[3][0],w[4][0],w[5][0]],S=n(_,{...f,gain:1}),v=s(_,{...E,orientationX:b[0],orientationY:b[1],orientationZ:b[2],positionX:A[0],positionY:A[1],positionZ:A[2]});T.connect(S).connect(v.inputs[0]),v.connect(g);for(let R=128;R<x.length;R+=128){const I=[w[0][R],w[1][R],w[2][R]],P=[w[3][R],w[4][R],w[5][R]];if(I.some((F,H)=>F!==b[H])||P.some((F,H)=>F!==A[H])){b=I,A=P;const F=R/_.sampleRate;S.gain.setValueAtTime(0,F),S=n(_,{...f,gain:0}),v=s(_,{...E,orientationX:b[0],orientationY:b[1],orientationZ:b[2],positionX:A[0],positionY:A[1],positionZ:A[2]}),S.gain.setValueAtTime(1,F),T.connect(S).connect(v.inputs[0]),v.connect(g)}}return g}return M?(await i(_,p.orientationX,m.orientationX),await i(_,p.orientationY,m.orientationY),await i(_,p.orientationZ,m.orientationZ),await i(_,p.positionX,m.positionX),await i(_,p.positionY,m.positionY),await i(_,p.positionZ,m.positionZ)):(await o(_,p.orientationX,m.orientationX),await o(_,p.orientationY,m.orientationY),await o(_,p.orientationZ,m.orientationZ),await o(_,p.positionX,m.positionX),await o(_,p.positionY,m.positionY),await o(_,p.positionZ,m.positionZ)),Hs(m)?await c(p,_,m.inputs[0]):await c(p,_,m),m};return{render(p,_){const g=u.get(_);return g!==void 0?Promise.resolve(g):d(p,_)}}},k_={disableNormalization:!1},B_=(i,e,t,n)=>class Vh{constructor(r,a){const o=e(r),c=n({...k_,...a}),l=i(o,c);return t.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===Vh.prototype||t.has(r)}},V_=(i,e)=>(t,n,s)=>(i(n).replay(s),e(n,t,s)),z_=(i,e,t)=>async(n,s,r)=>{const a=i(n);await Promise.all(a.activeInputs.map((o,c)=>Array.from(o).map(async([l,u])=>{const d=await e(l).render(l,s),p=n.context.destination;!t(l)&&(n!==p||!t(n))&&d.connect(r,u,c)})).reduce((o,c)=>[...o,...c],[]))},G_=(i,e,t)=>async(n,s,r)=>{const a=e(n);await Promise.all(Array.from(a.activeInputs).map(async([o,c])=>{const u=await i(o).render(o,s);t(o)||u.connect(r,c)}))},H_=(i,e,t,n)=>s=>i(cr,()=>cr(s))?Promise.resolve(i(n,n)).then(r=>{if(!r){const a=t(s,512,0,1);s.oncomplete=()=>{a.onaudioprocess=null,a.disconnect()},a.onaudioprocess=()=>s.currentTime,a.connect(s.destination)}return s.startRendering()}):new Promise(r=>{const a=e(s,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});s.oncomplete=o=>{a.disconnect(),r(o.renderedBuffer)},a.connect(s.destination),s.startRendering()}),W_=i=>(e,t)=>{i.set(e,t)},q_=i=>(e,t)=>i.set(e,t),X_=(i,e,t,n,s,r,a,o)=>(c,l)=>t(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(u=>t(u).render(u,l)))).then(()=>s(l)).then(u=>(typeof u.copyFromChannel!="function"?(a(u),Yc(u)):e(r,()=>r(u))||o(u),i.add(u),u)),Y_={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},j_=(i,e,t,n,s,r)=>class extends i{constructor(o,c){const l=s(o),u={...Y_,...c},h=t(l,u),d=r(l),p=d?n():null;super(o,!1,h,p),this._pan=e(this,d,h.pan)}get pan(){return this._pan}},$_=(i,e,t,n,s)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=t(o);const u=zt(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(c,h)}return r.set(c,l),u?await i(c,o.pan,l.pan):await n(c,o.pan,l.pan),Hs(l)?await s(o,c,l.inputs[0]):await s(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},Z_=i=>()=>{if(i===null)return!1;try{new i({length:1,sampleRate:44100})}catch{return!1}return!0},K_=(i,e)=>async()=>{if(i===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),s=URL.createObjectURL(t);let r=!1,a=!1;try{await n.audioWorklet.addModule(s);const o=new i(n,"a",{numberOfOutputs:0}),c=n.createOscillator();o.port.onmessage=()=>r=!0,o.onprocessorerror=()=>a=!0,c.connect(o),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(s)}return r&&!a},J_=(i,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),n=i(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(s=>{t.oncomplete=()=>{n.disconnect(),s(t.currentTime!==0)},t.startRendering()})},Q_=()=>new DOMException("","UnknownError"),eg={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},tg=(i,e,t,n,s,r,a)=>class extends i{constructor(c,l){const u=s(c),h={...eg,...l},d=t(u,h),_=r(u)?n():null;super(c,!0,d,_),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,a(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},ng=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=e(r);if(!zt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,curve:o.curve,oversample:o.oversample};o=i(a,l)}return n.set(a,o),Hs(o)?await t(r,a,o.inputs[0]):await t(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},ig=()=>typeof window>"u"?null:window,sg=(i,e)=>t=>{t.copyFromChannel=(n,s,r=0)=>{const a=i(r),o=i(s);if(o>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(o),u=n.length;for(let h=a<0?-a:0;h+a<c&&h<u;h+=1)n[h]=l[h+a]},t.copyToChannel=(n,s,r=0)=>{const a=i(r),o=i(s);if(o>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(o),u=n.length;for(let h=a<0?-a:0;h+a<c&&h<u;h+=1)l[h+a]=n[h]}},rg=i=>e=>{e.copyFromChannel=(t=>(n,s,r=0)=>{const a=i(r),o=i(s);if(a<e.length)return t.call(e,n,o,a)})(e.copyFromChannel),e.copyToChannel=(t=>(n,s,r=0)=>{const a=i(r),o=i(s);if(a<e.length)return t.call(e,n,o,a)})(e.copyToChannel)},ag=i=>(e,t)=>{const n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),i(e,"buffer",s=>()=>{const r=s.call(e);return r===n?null:r},s=>r=>s.call(e,r===null?n:r))},og=(i,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw i()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw i()}});const s=t.createBufferSource();e(n,()=>{const o=n.numberOfInputs;for(let c=0;c<o;c+=1)s.connect(n,0,c)},()=>s.disconnect(n))},zh=(i,e,t)=>i.copyFromChannel===void 0?i.getChannelData(t)[0]:(i.copyFromChannel(e,t),e[0]),Gh=i=>{if(i===null)return!1;const e=i.length;return e%2!==0?i[Math.floor(e/2)]!==0:i[e/2-1]+i[e/2]!==0},Mr=(i,e,t,n)=>{let s=i;for(;!s.hasOwnProperty(e);)s=Object.getPrototypeOf(s);const{get:r,set:a}=Object.getOwnPropertyDescriptor(s,e);Object.defineProperty(i,e,{get:t(r),set:n(a)})},cg=i=>({...i,outputChannelCount:i.outputChannelCount!==void 0?i.outputChannelCount:i.numberOfInputs===1&&i.numberOfOutputs===1?[i.channelCount]:Array.from({length:i.numberOfOutputs},()=>1)}),lg=i=>({...i,channelCount:i.numberOfOutputs}),ug=i=>{const{imag:e,real:t}=i;return e===void 0?t===void 0?{...i,imag:[0,0],real:[0,0]}:{...i,imag:Array.from(t,()=>0),real:t}:t===void 0?{...i,imag:e,real:Array.from(e,()=>0)}:{...i,imag:e,real:t}},Hh=(i,e,t)=>{try{i.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;Hh(i,e,t+1e-7)}},hg=i=>{const e=i.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},dg=i=>{const e=i.createBufferSource(),t=i.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},fg=i=>{const e=i.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},Jc=i=>{const e=i.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},Wh=i=>{const e=i.createBuffer(1,1,44100),t=i.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},Qc=i=>{const e=i.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},pg=i=>{const{port1:e,port2:t}=new MessageChannel;try{e.postMessage(i)}finally{e.close(),t.close()}},mg=i=>{i.start=(e=>(t=0,n=0,s)=>{const r=i.buffer,a=r===null?n:Math.min(r.duration,n);r!==null&&a>r.duration-.5/i.context.sampleRate?e.call(i,t,0,0):e.call(i,t,a,s)})(i.start)},qh=(i,e)=>{const t=e.createGain();i.connect(t);const n=(s=>()=>{s.call(i,t),i.removeEventListener("ended",n)})(i.disconnect);i.addEventListener("ended",n),Ws(i,t),i.stop=(s=>{let r=!1;return(a=0)=>{if(r)try{s.call(i,a)}catch{t.gain.setValueAtTime(0,a)}else s.call(i,a),r=!0}})(i.stop)},qs=(i,e)=>t=>{const n={value:i};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(i,t):e.handleEvent.call(i,t)},_g=Uf(ts),gg=Gf(ts),vg=em(ka),Xh=new WeakMap,xg=vm(Xh),Pn=Np(new Map,new WeakMap),Bn=ig(),Yh=jm(Pn,Vn),el=gm(qt),Ft=z_(qt,el,Zi),Sg=Yf(Yh,pt,Ft),dt=ym(Fa),ci=y_(Bn),ut=km(ci),jh=new WeakMap,$h=um(qs),Er=Jm(Bn),tl=Om(Er),nl=Lm(Bn),Zh=Um(Bn),lr=e_(Bn),bt=vp(Ff(Eh),zf(_g,gg,ba,vg,wa,qt,xg,_r,pt,ts,ti,Zi,ha),Pn,Rm(Xo,wa,qt,pt,or,ti),Vn,Ba,Yt,Zp(ba,Xo,qt,pt,or,dt,ti,ut),im(jh,qt,Dn),$h,dt,tl,nl,Zh,ut,lr),yg=Xf(bt,Sg,Vn,Yh,dt,ut),il=new WeakSet,mu=$m(Bn),Kh=Hp(new Uint32Array(1)),sl=sg(Kh,Vn),rl=rg(Kh),Jh=$f(il,Pn,Yt,mu,ci,Z_(mu),sl,rl),Va=Hf(Qt),Qh=G_(el,vr,Zi),zn=Fp(Qh),Xs=Km(Va,Pn,hg,dg,fg,Jc,Wh,Qc,mg,ag(Mr),qh),Gn=V_(xm(vr),Qh),Mg=Jf(zn,Xs,pt,Gn,Ft),On=xp(kf(Th),jh,Xc,Sp,Nf,If,Df,Pf,Of,Ho,yh,Er,Hh),Eg=Kf(bt,Mg,On,Lt,Xs,dt,ut,qs),Tg=op(bt,cp,Vn,Lt,Qm(Qt,Mr),dt,ut,Ft),bg=Rp(zn,kh,pt,Gn,Ft),ns=q_(Xh),wg=Cp(bt,On,bg,Ba,kh,dt,ut,ns),Ri=Xm(ts,nl),Ag=og(Lt,Ri),Ni=o_(Er,Ag),Cg=Pp(Ni,pt,Ft),Rg=Dp(bt,Cg,Ni,dt,ut),Ng=Up(Sr,pt,Ft),Ig=Lp(bt,Ng,Sr,dt,ut,lg),Dg=u_(Va,Xs,Qt,Ri),Ys=l_(Va,Pn,Dg,Jc,Qc),Pg=Gp(zn,Ys,pt,Gn,Ft),Og=zp(bt,On,Pg,Ys,dt,ut,qs),ed=h_(Yt,Mr),Lg=Xp(ed,pt,Ft),Ug=qp(bt,Lg,ed,dt,ut,ns),Fg=Qp(zn,Bh,pt,Gn,Ft),kg=Jp(bt,On,Fg,Bh,dt,ut,ns),td=d_(Yt),Bg=om(zn,td,pt,Gn,Ft),Vg=am(bt,On,Bg,td,Yt,dt,ut,ns),zg=mm(zn,Qt,pt,Gn,Ft),Gg=pm(bt,On,zg,Qt,dt,ut),Hg=__(Ba,Lt,yr,Yt),za=H_(Pn,Qt,yr,J_(Qt,ci)),Wg=Cm(Xs,pt,ci,Ft,za),qg=f_(Hg),Xg=wm(bt,qg,Wg,dt,ut,ns),Yg=lp(On,Ni,Ys,yr,Yt,zh,ut,Mr),nd=new WeakMap,jg=qm(Tg,Yg,$h,ut,nd,qs),id=M_(Va,Pn,Jc,Wh,Qc,qh),$g=O_(zn,id,pt,Gn,Ft),Zg=P_(bt,On,id,$g,dt,ut,qs),sd=Bp(Xs),Kg=R_(sd,Lt,Qt,Gh,Ri),Ga=C_(sd,Lt,Kg,Gh,Ri,Er,Mr),Jg=T_(ba,Lt,Ni,Qt,yr,Ga,Yt,wa,zh,Ri),rd=E_(Jg),Qg=F_(zn,Ni,Ys,Qt,rd,pt,ci,Gn,Ft,za),ev=U_(bt,On,rd,Qg,dt,ut,ns),tv=b_(Vn),nv=B_(tv,dt,new WeakSet,ug),iv=A_(Ni,Sr,Qt,Ga,Yt,Ri),ad=w_(iv,Yt),sv=$_(zn,ad,pt,Gn,Ft),rv=j_(bt,On,ad,sv,dt,ut),av=ng(Ga,pt,Ft),ov=tg(bt,Lt,Ga,av,dt,ut,ns),od=Bm(Bn),al=hm(Bn),cd=new WeakMap,cv=Mm(cd,ci),lv=od?Vf(Pn,Yt,lm(Bn),al,dm(Lf),dt,cv,ut,lr,new WeakMap,new WeakMap,K_(lr,ci),Bn):void 0,uv=Fm(tl,ut),hv=$p(il,Pn,jp,cm,new WeakSet,dt,uv,Ea,cr,sl,rl),ld=wp(lv,yg,Jh,Eg,wg,Rg,Ig,Og,Ug,hv,kg,Vg,Gg,Xg,jg,Zg,ev,nv,rv,ov),dv=Vm(bt,g_,dt,ut),fv=Gm(bt,v_,dt,ut),pv=Hm(bt,x_,dt,ut),mv=S_(Lt,ut),_v=Wm(bt,mv,dt),gv=ap(ld,Lt,Yt,Q_,dv,fv,pv,_v,Er),ol=Em(nd),vv=Wf(ol),ud=kp(Vn),xv=tm(ol),hd=sm(Vn),dd=new WeakMap,Sv=_m(dd,Dn),yv=a_(ud,Vn,Lt,Ni,Sr,Ys,Qt,yr,Yt,hd,al,Sv,Ri),Mv=n_(Lt,yv,Qt,Yt,Ri),Ev=bp(zn,ud,Xs,Ni,Sr,Ys,Qt,xv,hd,al,pt,lr,ci,Gn,Ft,za),Tv=Sm(cd),bv=W_(dd),_u=od?Mp(vv,bt,On,Ev,Mv,qt,Tv,dt,ut,lr,cg,bv,pg,qs):void 0,wv=Yp(Yt,ci),Av=X_(il,Pn,el,ol,za,Ea,sl,rl),Cv=I_(ld,Pn,Lt,wv,Av),Rv=Nm(Fa,tl),Nv=Im(qc,nl),Iv=Dm(Xc,Zh),Dv=Pm(Fa,ut);function mn(i){return i===void 0}function $e(i){return i!==void 0}function Pv(i){return typeof i=="function"}function Ti(i){return typeof i=="number"}function ji(i){return Object.prototype.toString.call(i)==="[object Object]"&&i.constructor===Object}function Ov(i){return typeof i=="boolean"}function ln(i){return Array.isArray(i)}function ri(i){return typeof i=="string"}function Br(i){return ri(i)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(i)}function Ue(i,e){if(!i)throw new Error(e)}function on(i,e,t=1/0){if(!(e<=i&&i<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${i}`)}function fd(i){!i.isOffline&&i.state!=="running"&&Ha('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let pd=!1,gu=!1;function vu(i){pd=i}function Lv(i){mn(i)&&pd&&!gu&&(gu=!0,Ha("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"))}let md=console;function Uv(...i){md.log(...i)}function Ha(...i){md.warn(...i)}function Fv(i){return new gv(i)}function kv(i,e,t){return new Cv(i,e,t)}const an=typeof self=="object"?self:null,Bv=an&&(an.hasOwnProperty("AudioContext")||an.hasOwnProperty("webkitAudioContext"));function Vv(i,e,t){return Ue($e(_u),"AudioWorkletNode only works in a secure context (https or localhost)"),new(i instanceof(an==null?void 0:an.BaseAudioContext)?an==null?void 0:an.AudioWorkletNode:_u)(i,e,t)}function Ln(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(r=(s<3?a(r):s>3?a(e,t,r):a(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}function Tt(i,e,t,n){function s(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(u){try{l(n.next(u))}catch(h){a(h)}}function c(u){try{l(n.throw(u))}catch(h){a(h)}}function l(u){u.done?r(u.value):s(u.value).then(o,c)}l((n=n.apply(i,e||[])).next())})}class zv{constructor(e,t,n,s){this._callback=e,this._type=t,this._minimumUpdateInterval=Math.max(128/(s||44100),.001),this.updateInterval=n,this._createClock()}_createWorker(){const e=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),n=new Worker(t);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){var t;this._updateInterval=Math.max(e,this._minimumUpdateInterval),this._type==="worker"&&((t=this._worker)===null||t===void 0||t.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}}function Ki(i){return Iv(i)}function yi(i){return Nv(i)}function da(i){return Dv(i)}function Ss(i){return Rv(i)}function Gv(i){return i instanceof Jh}function Hv(i,e){return i==="value"||Ki(e)||yi(e)||Gv(e)}function $i(i,...e){if(!e.length)return i;const t=e.shift();if(ji(i)&&ji(t))for(const n in t)Hv(n,t[n])?i[n]=t[n]:ji(t[n])?(i[n]||Object.assign(i,{[n]:{}}),$i(i[n],t[n])):Object.assign(i,{[n]:t[n]});return $i(i,...e)}function Wv(i,e){return i.length===e.length&&i.every((t,n)=>e[n]===t)}function Fe(i,e,t=[],n){const s={},r=Array.from(e);if(ji(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(o=>Reflect.has(i,o))||($i(s,{[n]:r[0]}),t.splice(t.indexOf(n),1),r.shift())),r.length===1&&ji(r[0]))$i(s,r[0]);else for(let a=0;a<t.length;a++)$e(r[a])&&(s[t[a]]=r[a]);return $i(i,s)}function qv(i){return i.constructor.getDefaults()}function ws(i,e){return mn(i)?e:i}function Ko(i,e){return e.forEach(t=>{Reflect.has(i,t)&&delete i[t]}),i}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2024 Yotam Mann
 */class li{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||an&&this.toString()===an.TONE_DEBUG_CLASS)&&Uv(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}li.version=Sh;const cl=1e-6;function Ps(i,e){return i>e+cl}function Jo(i,e){return Ps(i,e)||En(i,e)}function Na(i,e){return i+cl<e}function En(i,e){return Math.abs(i-e)<cl}function Xv(i,e,t){return Math.max(Math.min(i,t),e)}class _n extends li{constructor(){super(),this.name="Timeline",this._timeline=[];const e=Fe(_n.getDefaults(),arguments,["memory"]);this.memory=e.memory,this.increasing=e.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(e){if(Ue(Reflect.has(e,"time"),"Timeline: events must have a time attribute"),e.time=e.time.valueOf(),this.increasing&&this.length){const t=this._timeline[this.length-1];Ue(Jo(e.time,t.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(e)}else{const t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){const t=this.length-this.memory;this._timeline.splice(0,t)}return this}remove(e){const t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t="time"){const n=this._search(e,t);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t="time"){const n=this._search(e,t);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(e){const t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];const n=this._search(e);return n-1>=0?this._timeline[n-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0)if(En(this._timeline[t].time,e)){for(let n=t;n>=0&&En(this._timeline[n].time,e);n--)t=n;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1);else this._timeline=[]}else this._timeline.length===1&&Jo(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){const t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){const t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t="time"){if(this._timeline.length===0)return-1;let n=0;const s=this._timeline.length;let r=s;if(s>0&&this._timeline[s-1][t]<=e)return s-1;for(;n<r;){let a=Math.floor(n+(r-n)/2);const o=this._timeline[a],c=this._timeline[a+1];if(En(o[t],e)){for(let l=a;l<this._timeline.length;l++){const u=this._timeline[l];if(En(u[t],e))a=l;else break}return a}else{if(Na(o[t],e)&&Ps(c[t],e))return a;Ps(o[t],e)?r=a:n=a+1}}return-1}_iterate(e,t=0,n=this._timeline.length-1){this._timeline.slice(t,n+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){const n=this._search(e);return n!==-1&&this._iterate(t,0,n),this}forEachAfter(e,t){const n=this._search(e);return this._iterate(t,n+1),this}forEachBetween(e,t,n){let s=this._search(e),r=this._search(t);return s!==-1&&r!==-1?(this._timeline[s].time!==e&&(s+=1),this._timeline[r].time===t&&(r-=1),this._iterate(n,s,r)):s===-1&&this._iterate(n,0,r),this}forEachFrom(e,t){let n=this._search(e);for(;n>=0&&this._timeline[n].time>=e;)n--;return this._iterate(t,n+1),this}forEachAtTime(e,t){const n=this._search(e);if(n!==-1&&En(this._timeline[n].time,e)){let s=n;for(let r=n;r>=0&&En(this._timeline[r].time,e);r--)s=r;this._iterate(r=>{t(r)},s,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const _d=[];function Wa(i){_d.push(i)}function Yv(i){_d.forEach(e=>e(i))}const gd=[];function qa(i){gd.push(i)}function jv(i){gd.forEach(e=>e(i))}class Tr extends li{constructor(){super(...arguments),this.name="Emitter"}on(e,t){return e.split(/\W+/).forEach(s=>{mn(this._events)&&(this._events={}),this._events.hasOwnProperty(s)||(this._events[s]=[]),this._events[s].push(t)}),this}once(e,t){const n=(...s)=>{t(...s),this.off(e,n)};return this.on(e,n),this}off(e,t){return e.split(/\W+/).forEach(s=>{if(mn(this._events)&&(this._events={}),this._events.hasOwnProperty(s))if(mn(t))this._events[s]=[];else{const r=this._events[s];for(let a=r.length-1;a>=0;a--)r[a]===t&&r.splice(a,1)}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){const n=this._events[e].slice(0);for(let s=0,r=n.length;s<r;s++)n[s].apply(this,t)}return this}static mixin(e){["on","once","off","emit"].forEach(t=>{const n=Object.getOwnPropertyDescriptor(Tr.prototype,t);Object.defineProperty(e.prototype,t,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class vd extends Tr{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class br extends vd{constructor(){var e,t;super(),this.name="Context",this._constants=new Map,this._timeouts=new _n,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;const n=Fe(br.getDefaults(),arguments,["context"]);n.context?(this._context=n.context,this._latencyHint=((e=arguments[0])===null||e===void 0?void 0:e.latencyHint)||""):(this._context=Fv({latencyHint:n.latencyHint}),this._latencyHint=n.latencyHint),this._ticker=new zv(this.emit.bind(this,"tick"),n.clockSource,n.updateInterval,this._context.sampleRate),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this[!((t=arguments[0])===null||t===void 0)&&t.hasOwnProperty("updateInterval")?"_lookAhead":"lookAhead"]=n.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(Yv(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,n){return this._context.createBuffer(e,t,n)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,n){return this._context.createPeriodicWave(e,t,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return Ue(Ss(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return Ue(Ss(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return Ue(Ss(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){Ue(!this._initialized,"The listener cannot be set after initialization."),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){Ue(!this._initialized,"The transport cannot be set after initialization."),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){Ue(!this._initialized,"Draw cannot be set after initialization."),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){Ue(!this._initialized,"The destination cannot be set after initialization."),this._destination=e}createAudioWorkletNode(e,t){return Vv(this.rawContext,e,t)}addAudioWorkletModule(e){return Tt(this,void 0,void 0,function*(){Ue($e(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletPromise||(this._workletPromise=this.rawContext.audioWorklet.addModule(e)),yield this._workletPromise})}workletsAreReady(){return Tt(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get lookAhead(){return this._lookAhead}set lookAhead(e){this._lookAhead=e,this.updateInterval=e?e/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return Ss(this._context)?this._context.resume():Promise.resolve()}close(){return Tt(this,void 0,void 0,function*(){Ss(this._context)&&this.state!=="closed"&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&jv(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{const t=this._context.createBuffer(1,128,this._context.sampleRate),n=t.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=e;const s=this._context.createBufferSource();return s.channelCount=1,s.channelCountMode="explicit",s.buffer=t,s.loop=!0,s.start(0),this._constants.set(e,s),s}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this.close(),this}_timeoutLoop(){const e=this.now();this._timeouts.forEachBefore(e,t=>{t.callback(),this._timeouts.remove(t)})}setTimeout(e,t){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:n+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){const n=++this._timeoutIds,s=()=>{const r=this.now();this._timeouts.add({callback:()=>{e(),s()},id:n,time:r+t})};return s(),n}}class $v extends vd{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,n){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e){return Tt(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}}function vt(i,e){ln(e)?e.forEach(t=>vt(i,t)):Object.defineProperty(i,e,{enumerable:!0,writable:!1})}function xd(i,e){ln(e)?e.forEach(t=>xd(i,t)):Object.defineProperty(i,e,{writable:!0})}const ct=()=>{};class ht extends li{constructor(){super(),this.name="ToneAudioBuffer",this.onload=ct;const e=Fe(ht.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=e.reverse,this.onload=e.onload,ri(e.url)?this.load(e.url).catch(e.onerror):e.url&&this.set(e.url)}static getDefaults(){return{onerror:ct,onload:ct,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:wn().sampleRate}set(e){return e instanceof ht?e.loaded?this._buffer=e.get():e.onload=()=>{this.set(e),this.onload(this)}:this._buffer=e,this._reversed&&this._reverse(),this}get(){return this._buffer}load(e){return Tt(this,void 0,void 0,function*(){const t=ht.load(e).then(n=>{this.set(n),this.onload(this)});ht.downloads.push(t);try{yield t}finally{const n=ht.downloads.indexOf(t);ht.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){const t=ln(e)&&e[0].length>0,n=t?e.length:1,s=t?e[0].length:e.length,r=wn(),a=r.createBuffer(n,s,r.sampleRate),o=!t&&n===1?[e]:e;for(let c=0;c<n;c++)a.copyToChannel(o[c],c);return this._buffer=a,this}toMono(e){if(Ti(e))this.fromArray(this.toArray(e));else{let t=new Float32Array(this.length);const n=this.numberOfChannels;for(let s=0;s<n;s++){const r=this.toArray(s);for(let a=0;a<r.length;a++)t[a]+=r[a]}t=t.map(s=>s/n),this.fromArray(t)}return this}toArray(e){if(Ti(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{const t=[];for(let n=0;n<this.numberOfChannels;n++)t[n]=this.getChannelData(n);return t}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array(0)}slice(e,t=this.duration){Ue(this.loaded,"Buffer is not loaded");const n=Math.floor(e*this.sampleRate),s=Math.floor(t*this.sampleRate);Ue(n<s,"The start time must be less than the end time");const r=s-n,a=wn().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let o=0;o<this.numberOfChannels;o++)a.copyToChannel(this.getChannelData(o).subarray(n,s),o);return new ht(a)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(e){return new ht().fromArray(e)}static fromUrl(e){return Tt(this,void 0,void 0,function*(){return yield new ht().load(e)})}static load(e){return Tt(this,void 0,void 0,function*(){const t=ht.baseUrl===""||ht.baseUrl.endsWith("/")?ht.baseUrl:ht.baseUrl+"/",n=yield fetch(t+e);if(!n.ok)throw new Error(`could not load url: ${e}`);const s=yield n.arrayBuffer();return yield wn().decodeAudioData(s)})}static supportsType(e){const t=e.split("."),n=t[t.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return Tt(this,void 0,void 0,function*(){for(yield Promise.resolve();ht.downloads.length;)yield ht.downloads[0]})}}ht.baseUrl="";ht.downloads=[];class Xa extends br{constructor(){super({clockSource:"offline",context:da(arguments[0])?arguments[0]:kv(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:da(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=da(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return Tt(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,t++;const n=Math.floor(this.sampleRate/128);e&&t%n===0&&(yield new Promise(s=>setTimeout(s,1)))}})}render(){return Tt(this,arguments,void 0,function*(e=!0){yield this.workletsAreReady(),yield this._renderClock(e);const t=yield this._context.startRendering();return new ht(t)})}close(){return Promise.resolve()}}const Sd=new $v;let Wi=Sd;function wn(){return Wi===Sd&&Bv&&Zv(new br),Wi}function Zv(i,e=!1){e&&Wi.dispose(),Ss(i)?Wi=new br(i):da(i)?Wi=new Xa(i):Wi=i}function Kv(){return Wi.resume()}if(an&&!an.TONE_SILENCE_LOGGING){const e=` * Tone.js v${Sh} * `;console.log(`%c${e}`,"background: #000; color: #fff")}function Jv(i){return Math.pow(10,i/20)}function Qv(i){return 20*(Math.log(i)/Math.LN10)}function yd(i){return Math.pow(2,i/12)}let Ya=440;function e0(){return Ya}function t0(i){Ya=i}function qi(i){return Math.round(Md(i))}function Md(i){return 69+12*Math.log2(i/Ya)}function Ed(i){return Ya*Math.pow(2,(i-69)/12)}class ll extends li{constructor(e,t,n){super(),this.defaultUnits="s",this._val=t,this._units=n,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{const n=parseInt(e,10),s=t==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*s:this._beatsToUnits(4/n)*s},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{const t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,n)=>{let s=0;return e&&e!=="0"&&(s+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(s+=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(s+=this._beatsToUnits(parseFloat(n)/4)),s},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof ll&&this.fromType(this._val),mn(this._val))return this._noArg();if(ri(this._val)&&mn(this._units)){for(const e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if(ji(this._val)){let e=0;for(const t in this._val)if($e(this._val[t])){const n=this._val[t],s=new this.constructor(this.context,t).valueOf()*n;e+=s}return e}if($e(this._units)){const e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}else return ri(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case"s":this._val=e.toSeconds();break;case"i":this._val=e.toTicks();break;case"hz":this._val=e.toFrequency();break;case"midi":this._val=e.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class An extends ll{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:e=>{const t=new An(this.context,e).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(t))},regexp:/^@(.+)/}})}quantize(e,t=1){const n=new this.constructor(this.context,e).valueOf(),s=this.valueOf(),o=Math.round(s/n)*n-s;return s+o*t}toNotation(){const e=this.toSeconds(),t=["1m"];for(let r=1;r<9;r++){const a=Math.pow(2,r);t.push(a+"n."),t.push(a+"n"),t.push(a+"t")}t.push("0");let n=t[0],s=new An(this.context,t[0]).toSeconds();return t.forEach(r=>{const a=new An(this.context,r).toSeconds();Math.abs(a-e)<Math.abs(s-e)&&(n=r,s=a)}),n}toBarsBeatsSixteenths(){const e=this._beatsToUnits(1);let t=this.valueOf()/e;t=parseFloat(t.toFixed(4));const n=Math.floor(t/this._getTimeSignature());let s=t%1*4;t=Math.floor(t)%this._getTimeSignature();const r=s.toString();return r.length>3&&(s=parseFloat(parseFloat(r).toFixed(3))),[n,t,s].join(":")}toTicks(){const e=this._beatsToUnits(1);return this.valueOf()/e*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return qi(this.toFrequency())}_now(){return this.context.now()}}class cn extends An{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return e0()}static set A4(e){t0(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(e){return this.defaultUnits==="midi"?e:cn.mtof(e)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(e,t){const s=n0[e.toLowerCase()]+(parseInt(t,10)+1)*12;return this.defaultUnits==="midi"?s:cn.mtof(s)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,n){let s=1;return e&&e!=="0"&&(s*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(s*=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(s*=this._beatsToUnits(parseFloat(n)/4)),s}}})}transpose(e){return new cn(this.context,this.valueOf()*yd(e))}harmonize(e){return e.map(t=>this.transpose(t))}toMidi(){return qi(this.valueOf())}toNote(){const e=this.toFrequency(),t=Math.log2(e/cn.A4);let n=Math.round(12*t)+57;const s=Math.floor(n/12);return s<0&&(n+=-12*s),i0[n%12]+s.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return Ed(e)}static ftom(e){return qi(e)}}const n0={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},i0=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class ar extends An{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class Zt extends li{constructor(){super();const e=Fe(Zt.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=e.context}static getDefaults(){return{context:wn()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return Lv(e),new An(this.context,e).toSeconds()}toFrequency(e){return new cn(this.context,e).toFrequency()}toTicks(e){return new ar(this.context,e).toTicks()}_getPartialProperties(e){const t=this.get();return Object.keys(t).forEach(n=>{mn(e[n])&&delete t[n]}),t}get(){const e=qv(this);return Object.keys(e).forEach(t=>{if(Reflect.has(this,t)){const n=this[t];$e(n)&&$e(n.value)&&$e(n.setValueAtTime)?e[t]=n.value:n instanceof Zt?e[t]=n._getPartialProperties(e[t]):ln(n)||Ti(n)||ri(n)||Ov(n)?e[t]=n:delete e[t]}}),e}set(e){return Object.keys(e).forEach(t=>{Reflect.has(this,t)&&$e(this[t])&&(this[t]&&$e(this[t].value)&&$e(this[t].setValueAtTime)?this[t].value!==e[t]&&(this[t].value=e[t]):this[t]instanceof Zt?this[t].set(e[t]):this[t]=e[t])}),this}}class ul extends _n{constructor(e="stopped"){super(),this.name="StateTimeline",this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){const t=this.get(e);return t!==null?t.state:this._initial}setStateAtTime(e,t,n){return on(t,0),this.add(Object.assign({},n,{state:e,time:t})),this}getLastState(e,t){const n=this._search(t);for(let s=n;s>=0;s--){const r=this._timeline[s];if(r.state===e)return r}}getNextState(e,t){const n=this._search(t);if(n!==-1)for(let s=n;s<this._timeline.length;s++){const r=this._timeline[s];if(r.state===e)return r}}}class St extends Zt{constructor(){const e=Fe(St.getDefaults(),arguments,["param","units","convert"]);for(super(e),this.name="Param",this.overridden=!1,this._minOutput=1e-7,Ue($e(e.param)&&(Ki(e.param)||e.param instanceof St),"param must be an AudioParam");!Ki(e.param);)e.param=e.param._param;this._swappable=$e(e.swappable)?e.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=e.param,this.input.connect(this._param)):this._param=this.input=e.param,this._events=new _n(1e3),this._initialValue=this._param.defaultValue,this.units=e.units,this.convert=e.convert,this._minValue=e.minValue,this._maxValue=e.maxValue,$e(e.value)&&e.value!==this._toType(this._initialValue)&&this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Zt.getDefaults(),{convert:!0,units:"number"})}get value(){const e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return $e(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return $e(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return $e(this.maxValue)&&$e(this.minValue)&&on(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,"time")?this.toSeconds(e):this._is(e,"decibels")?Jv(e):this._is(e,"frequency")?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units==="decibels"?Qv(e):e}setValueAtTime(e,t){const n=this.toSeconds(t),s=this._fromType(e);return Ue(isFinite(s)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(s),this.log(this.units,"setValueAtTime",e,n),this._events.add({time:n,type:"setValueAtTime",value:s}),this._param.setValueAtTime(s,n),this}getValueAtTime(e){const t=Math.max(this.toSeconds(e),0),n=this._events.getAfter(t),s=this._events.get(t);let r=this._initialValue;if(s===null)r=this._initialValue;else if(s.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const a=this._events.getBefore(s.time);let o;a===null?o=this._initialValue:o=a.value,s.type==="setTargetAtTime"&&(r=this._exponentialApproach(s.time,o,s.value,s.constant,t))}else if(n===null)r=s.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let a=s.value;if(s.type==="setTargetAtTime"){const o=this._events.getBefore(s.time);o===null?a=this._initialValue:a=o.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(s.time,a,n.time,n.value,t):r=this._exponentialInterpolate(s.time,a,n.time,n.value,t)}else r=s.value;return this._toType(r)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){const n=this._fromType(e),s=this.toSeconds(t);return Ue(isFinite(n)&&isFinite(s),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(n),this._events.add({time:s,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",e,s),this._param.linearRampToValueAtTime(n,s),this}exponentialRampToValueAtTime(e,t){let n=this._fromType(e);n=En(n,0)?this._minOutput:n,this._assertRange(n);const s=this.toSeconds(t);return Ue(isFinite(n)&&isFinite(s),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:s,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",e,s),this._param.exponentialRampToValueAtTime(n,s),this}exponentialRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(e,n+this.toSeconds(t)),this}linearRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(e,n+this.toSeconds(t)),this}targetRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(e,n,t),this}exponentialApproachValueAtTime(e,t,n){t=this.toSeconds(t),n=this.toSeconds(n);const s=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(e,t,s),this.cancelAndHoldAtTime(t+n*.9),this.linearRampToValueAtTime(e,t+n),this}setTargetAtTime(e,t,n){const s=this._fromType(e);Ue(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(t);return this._assertRange(s),Ue(isFinite(s)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:s}),this.log(this.units,"setTargetAtTime",e,r,n),this._param.setTargetAtTime(s,r,n),this}setValueCurveAtTime(e,t,n,s=1){n=this.toSeconds(n),t=this.toSeconds(t);const r=this._fromType(e[0])*s;this.setValueAtTime(this._toType(r),t);const a=n/(e.length-1);for(let o=1;o<e.length;o++){const c=this._fromType(e[o])*s;this.linearRampToValueAtTime(this._toType(c),t+o*a)}return this}cancelScheduledValues(e){const t=this.toSeconds(e);return Ue(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,"cancelScheduledValues",t),this}cancelAndHoldAtTime(e){const t=this.toSeconds(e),n=this._fromType(this.getValueAtTime(t));Ue(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,"cancelAndHoldAtTime",t,"value="+n);const s=this._events.get(t),r=this._events.getAfter(t);return s&&En(s.time,t)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),t):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),t)),this._events.add({time:t,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,t),this}rampTo(e,t=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(e,t,n):this.linearRampTo(e,t,n),this}apply(e){const t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);const n=this._events.get(t);if(n&&n.type==="setTargetAtTime"){const s=this._events.getAfter(n.time),r=s?s.time:t+2,a=(r-t)/10;for(let o=t;o<r;o+=a)e.linearRampToValueAtTime(this.getValueAtTime(o),o)}return this._events.forEachAfter(this.context.currentTime,s=>{s.type==="cancelScheduledValues"?e.cancelScheduledValues(s.time):s.type==="setTargetAtTime"?e.setTargetAtTime(s.value,s.time,s.constant):e[s.type](s.value,s.time)}),this}setParam(e){Ue(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,n,s,r){return n+(t-n)*Math.exp(-(r-e)/s)}_linearInterpolate(e,t,n,s,r){return t+(s-t)*((r-e)/(n-e))}_exponentialInterpolate(e,t,n,s,r){return t*Math.pow(s/t,(r-e)/(n-e))}}class Be extends Zt{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return $e(this.input)?Ki(this.input)||this.input instanceof St?1:this.input.numberOfInputs:0}get numberOfOutputs(){return $e(this.output)?this.output.numberOfOutputs:0}_isAudioNode(e){return $e(e)&&(e instanceof Be||yi(e))}_getInternalNodes(){const e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(n=>{n.channelCount=e.channelCount,n.channelCountMode=e.channelCountMode,n.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){const e=this._getInternalNodes();Ue(e.length>0,"ToneAudioNode does not have any internal nodes");const t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,n=0){return bi(this,e,t,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Ha("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(e,t=0,n=0){return s0(this,e,t,n),this}chain(...e){return Qo(this,...e),this}fan(...e){return e.forEach(t=>this.connect(t)),this}dispose(){return super.dispose(),$e(this.input)&&(this.input instanceof Be?this.input.dispose():yi(this.input)&&this.input.disconnect()),$e(this.output)&&(this.output instanceof Be?this.output.dispose():yi(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function Qo(...i){const e=i.shift();i.reduce((t,n)=>(t instanceof Be?t.connect(n):yi(t)&&bi(t,n),n),e)}function bi(i,e,t=0,n=0){for(Ue($e(i),"Cannot connect from undefined node"),Ue($e(e),"Cannot connect to undefined node"),(e instanceof Be||yi(e))&&Ue(e.numberOfInputs>0,"Cannot connect to node with no inputs"),Ue(i.numberOfOutputs>0,"Cannot connect from node with no outputs");e instanceof Be||e instanceof St;)$e(e.input)&&(e=e.input);for(;i instanceof Be;)$e(i.output)&&(i=i.output);Ki(e)?i.connect(e,t):i.connect(e,t,n)}function s0(i,e,t=0,n=0){if($e(e))for(;e instanceof Be;)e=e.input;for(;!yi(i);)$e(i.output)&&(i=i.output);Ki(e)?i.disconnect(e,t):yi(e)?i.disconnect(e,t,n):i.disconnect()}class gt extends Be{constructor(){const e=Fe(gt.getDefaults(),arguments,["gain","units"]);super(e),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode,this.gain=new St({context:this.context,convert:e.convert,param:this._gainNode.gain,units:e.units,value:e.gain,minValue:e.minValue,maxValue:e.maxValue}),vt(this,"gain")}static getDefaults(){return Object.assign(Be.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class Os extends Be{constructor(e){super(e),this.onended=ct,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new gt({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(t){const n=this.toSeconds(t);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(Be.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:ct})}_startGain(e,t=1){Ue(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=e+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(t,e+n):this._gainNode.gain.exponentialApproachValueAtTime(t,e,n)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log("stop",e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){Ue(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.now()),t>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?t*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==ct&&(this.onended(this),this.onended=ct,!this.context.isOffline)){const e=()=>this.dispose();typeof requestIdleCallback<"u"?requestIdleCallback(e):setTimeout(e,10)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),Ue(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=ct,this}}class hl extends Os{constructor(){const e=Fe(hl.getDefaults(),arguments,["offset"]);super(e),this.name="ToneConstantSource",this._source=this.context.createConstantSource(),bi(this._source,this._gainNode),this.offset=new St({context:this.context,convert:e.convert,param:this._source.offset,units:e.units,value:e.offset,minValue:e.minValue,maxValue:e.maxValue})}static getDefaults(){return Object.assign(Os.getDefaults(),{convert:!0,offset:1,units:"number"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class It extends Be{constructor(){const e=Fe(It.getDefaults(),arguments,["value","units"]);super(e),this.name="Signal",this.override=!0,this.output=this._constantSource=new hl({context:this.context,convert:e.convert,offset:e.value,units:e.units,minValue:e.minValue,maxValue:e.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(Be.getDefaults(),{convert:!0,units:"number",value:0})}connect(e,t=0,n=0){return dl(this,e,t,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,n){return this._param.exponentialRampTo(e,t,n),this}linearRampTo(e,t,n){return this._param.linearRampTo(e,t,n),this}targetRampTo(e,t,n){return this._param.targetRampTo(e,t,n),this}exponentialApproachValueAtTime(e,t,n){return this._param.exponentialApproachValueAtTime(e,t,n),this}setTargetAtTime(e,t,n){return this._param.setTargetAtTime(e,t,n),this}setValueCurveAtTime(e,t,n,s){return this._param.setValueCurveAtTime(e,t,n,s),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,n){return this._param.rampTo(e,t,n),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}}function dl(i,e,t,n){(e instanceof St||Ki(e)||e instanceof It&&e.override)&&(e.cancelScheduledValues(0),e.setValueAtTime(0,0),e instanceof It&&(e.overridden=!0)),bi(i,e,t,n)}class fl extends St{constructor(){const e=Fe(fl.getDefaults(),arguments,["value"]);super(e),this.name="TickParam",this._events=new _n(1/0),this._multiplier=1,this._multiplier=e.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(e.value)}),this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(St.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(e,t,n){t=this.toSeconds(t),this.setRampPoint(t);const s=this._fromType(e),r=this._events.get(t),a=Math.round(Math.max(1/n,1));for(let o=0;o<=a;o++){const c=n*o+t,l=this._exponentialApproach(r.time,r.value,s,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(e,t){const n=this.toSeconds(t);super.setValueAtTime(e,t);const s=this._events.get(n),r=this._events.previousEvent(s),a=this._getTicksUntilEvent(r,n);return s.ticks=Math.max(a,0),this}linearRampToValueAtTime(e,t){const n=this.toSeconds(t);super.linearRampToValueAtTime(e,t);const s=this._events.get(n),r=this._events.previousEvent(s),a=this._getTicksUntilEvent(r,n);return s.ticks=Math.max(a,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);const n=this._fromType(e),s=this._events.get(t),r=Math.round(Math.max((t-s.time)*10,1)),a=(t-s.time)/r;for(let o=0;o<=r;o++){const c=a*o+s.time,l=this._exponentialInterpolate(s.time,s.value,t,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:"setValueAtTime",value:0};else if(mn(e.ticks)){const a=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(a,e.time)}const n=this._fromType(this.getValueAtTime(e.time));let s=this._fromType(this.getValueAtTime(t));const r=this._events.get(t);return r&&r.time===t&&r.type==="setValueAtTime"&&(s=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(n+s)+e.ticks}getTicksAtTime(e){const t=this.toSeconds(e),n=this._events.get(t);return Math.max(this._getTicksUntilEvent(n,t),0)}getDurationOfTicks(e,t){const n=this.toSeconds(t),s=this.getTicksAtTime(t);return this.getTimeOfTick(s+e)-n}getTimeOfTick(e){const t=this._events.get(e,"ticks"),n=this._events.getAfter(e,"ticks");if(t&&t.ticks===e)return t.time;if(t&&n&&n.type==="linearRampToValueAtTime"&&t.value!==n.value){const s=this._fromType(this.getValueAtTime(t.time)),a=(this._fromType(this.getValueAtTime(n.time))-s)/(n.time-t.time),o=Math.sqrt(Math.pow(s,2)-2*a*(t.ticks-e)),c=(-s+o)/a,l=(-s-o)/a;return(c>0?c:l)+t.time}else return t?t.value===0?1/0:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){const n=this.toSeconds(t),s=this.toSeconds(e),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+s)-r}_fromType(e){return this.units==="bpm"&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units==="bpm"&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){const t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}}class pl extends It{constructor(){const e=Fe(pl.getDefaults(),arguments,["value"]);super(e),this.name="TickSignal",this.input=this._param=new fl({context:this.context,convert:e.convert,multiplier:e.multiplier,param:this._constantSource.offset,units:e.units,value:e.value})}static getDefaults(){return Object.assign(It.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}}class ml extends Zt{constructor(){const e=Fe(ml.getDefaults(),arguments,["frequency"]);super(e),this.name="TickSource",this._state=new ul,this._tickOffset=new _n,this._ticksAtTime=new _n,this._secondsAtTime=new _n,this.frequency=new pl({context:this.context,units:e.units,value:e.frequency}),vt(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},Zt.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){const n=this.toSeconds(e);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),$e(t)&&this.setTicksAtTime(t,n),this._ticksAtTime.cancel(n),this._secondsAtTime.cancel(n)),this}stop(e){const t=this.toSeconds(e);if(this._state.getValueAtTime(t)==="stopped"){const n=this._state.get(t);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(t),this._state.setStateAtTime("stopped",t),this.setTicksAtTime(0,t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t)),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}getTicksAtTime(e){const t=this.toSeconds(e),n=this._state.getLastState("stopped",t),s=this._ticksAtTime.get(t),r={state:"paused",time:t};this._state.add(r);let a=s||n,o=s?s.ticks:0,c=null;return this._state.forEachBetween(a.time,t+this.sampleTime,l=>{let u=a.time;const h=this._tickOffset.get(l.time);h&&h.time>=a.time&&(o=h.ticks,u=h.time),a.state==="started"&&l.state!=="started"&&(o+=this.frequency.getTicksAtTime(l.time)-this.frequency.getTicksAtTime(u),l.time!==r.time&&(c={state:l.state,time:l.time,ticks:o})),a=l}),this._state.remove(r),c&&this._ticksAtTime.add(c),o}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){const t=this.now(),n=this.frequency.timeToTicks(e,t);this.setTicksAtTime(n,t)}getSecondsAtTime(e){e=this.toSeconds(e);const t=this._state.getLastState("stopped",e),n={state:"paused",time:e};this._state.add(n);const s=this._secondsAtTime.get(e);let r=s||t,a=s?s.seconds:0,o=null;return this._state.forEachBetween(r.time,e+this.sampleTime,c=>{let l=r.time;const u=this._tickOffset.get(c.time);u&&u.time>=r.time&&(a=u.seconds,l=u.time),r.state==="started"&&c.state!=="started"&&(a+=c.time-l,c.time!==n.time&&(o={state:c.state,time:c.time,seconds:a})),r=c}),this._state.remove(n),o&&this._secondsAtTime.add(o),a}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){const n=this._tickOffset.get(t),s=this._state.get(t),r=Math.max(n.time,s.time),a=this.frequency.getTicksAtTime(r)+e-n.ticks;return this.frequency.getTimeOfTick(a)}forEachTickBetween(e,t,n){let s=this._state.get(e);this._state.forEachBetween(e,t,a=>{s&&s.state==="started"&&a.state!=="started"&&this.forEachTickBetween(Math.max(s.time,e),a.time-this.sampleTime,n),s=a});let r=null;if(s&&s.state==="started"){const a=Math.max(s.time,e),o=this.frequency.getTicksAtTime(a),c=this.frequency.getTicksAtTime(s.time),l=o-c;let u=Math.ceil(l)-l;u=En(u,1)?0:u;let h=this.frequency.getTimeOfTick(o+u);for(;h<t;){try{n(h,Math.round(this.getTicksAtTime(h)))}catch(d){r=d;break}h+=this.frequency.getDurationOfTicks(1,h)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}}let Td=class bd extends Zt{constructor(){const e=Fe(bd.getDefaults(),arguments,["callback","frequency"]);super(e),this.name="Clock",this.callback=ct,this._lastUpdate=0,this._state=new ul("stopped"),this._boundLoop=this._loop.bind(this),this.callback=e.callback,this._tickSource=new ml({context:this.context,frequency:e.frequency,units:e.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,vt(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(Zt.getDefaults(),{callback:ct,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){fd(this.context);const n=this.toSeconds(e);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,t),n<this._lastUpdate&&this.emit("start",n,t)),this}stop(e){const t=this.toSeconds(e);return this.log("stop",t),this._state.cancel(t),this._state.setStateAtTime("stopped",t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){const n=this.toSeconds(t),s=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(s+e,n)}_loop(){const e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log("loop",e,t),e!==t&&(this._state.forEachBetween(e,t,n=>{switch(n.state){case"started":const s=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,s);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(e,t,(n,s)=>{this.callback(n,s)}))}getStateAtTime(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}};Tr.mixin(Td);class js extends Be{constructor(){const e=Fe(js.getDefaults(),arguments,["volume"]);super(e),this.name="Volume",this.input=this.output=new gt({context:this.context,gain:e.volume,units:"decibels"}),this.volume=this.output.gain,vt(this,"volume"),this._unmutedVolume=e.volume,this.mute=e.mute}static getDefaults(){return Object.assign(Be.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class _l extends Be{constructor(){const e=Fe(_l.getDefaults(),arguments);super(e),this.name="Destination",this.input=new js({context:this.context}),this.output=new gt({context:this.context}),this.volume=this.input.volume,Qo(this.input,this.output,this.context.rawContext.destination),this.mute=e.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(Be.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),Qo(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}Wa(i=>{i.destination=new _l({context:i})});qa(i=>{i.destination.dispose()});class r0 extends Be{constructor(){super(...arguments),this.name="Listener",this.positionX=new St({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new St({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new St({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new St({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new St({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new St({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new St({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new St({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new St({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(Be.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}Wa(i=>{i.listener=new r0({context:i})});qa(i=>{i.listener.dispose()});class gl extends li{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const e=Fe(gl.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=e.baseUrl,Object.keys(e.urls).forEach(t=>{this._loadingCount++;const n=e.urls[t];this.add(t,n,this._bufferLoaded.bind(this,e.onload),e.onerror)})}static getDefaults(){return{baseUrl:"",onerror:ct,onload:ct,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return Ue(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,n=ct,s=ct){return ri(t)?(this.baseUrl&&t.trim().substring(0,11).toLowerCase()==="data:audio/"&&(this.baseUrl=""),this._buffers.set(e.toString(),new ht(this.baseUrl+t,n,s))):this._buffers.set(e.toString(),new ht(t,n,s)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}}class Ia extends cn{constructor(){super(...arguments),this.name="MidiClass",this.defaultUnits="midi"}_frequencyToUnits(e){return qi(super._frequencyToUnits(e))}_ticksToUnits(e){return qi(super._ticksToUnits(e))}_beatsToUnits(e){return qi(super._beatsToUnits(e))}_secondsToUnits(e){return qi(super._secondsToUnits(e))}toMidi(){return this.valueOf()}toFrequency(){return Ed(this.toMidi())}transpose(e){return new Ia(this.context,this.toMidi()+e)}}class Es extends ar{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class a0 extends Zt{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new _n,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){const e=this.context.currentTime;this._events.forEachBefore(e+this.anticipation,t=>{e-t.time<=this.expiration&&t.callback(),this._events.remove(t)}),this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}Wa(i=>{i.draw=new a0({context:i})});qa(i=>{i.draw.dispose()});class o0 extends li{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(e){Ue($e(e.time),"Events must have a time property"),Ue($e(e.duration),"Events must have a duration parameter"),e.time=e.time.valueOf();let t=new c0(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){const t=[];this._root.search(e.time,t);for(const n of t)if(n.event===e){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,t=>this.remove(t)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent!==null?(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent)):this._setRoot(t)}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{const t=e.getBalance();let n,s=null;if(t>0)if(e.left.right===null)n=e.left,n.right=e.right,s=n;else{for(n=e.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,s=n.parent,n.left=e.left,n.right=e.right)}else if(e.right.left===null)n=e.right,n.left=e.left,s=n;else{for(n=e.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,s=n.parent,n.left=e.left,n.right=e.right)}e.parent!==null?e.isLeftChild()?e.parent.left=n:e.parent.right=n:this._setRoot(n),s&&this._rebalance(s)}e.dispose()}_rotateLeft(e){const t=e.parent,n=e.isLeftChild(),s=e.right;s&&(e.right=s.left,s.left=e),t!==null?n?t.left=s:t.right=s:this._setRoot(s)}_rotateRight(e){const t=e.parent,n=e.isLeftChild(),s=e.left;s&&(e.left=s.right,s.right=e),t!==null?n?t.left=s:t.right=s:this._setRoot(s)}_rebalance(e){const t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){const t=[];if(this._root.search(e,t),t.length>0){let n=t[0];for(let s=1;s<t.length;s++)t[s].low>n.low&&(n=t[s]);return n.event}}return null}forEach(e){if(this._root!==null){const t=[];this._root.traverse(n=>t.push(n)),t.forEach(n=>{n.event&&e(n.event)})}return this}forEachAtTime(e,t){if(this._root!==null){const n=[];this._root.search(e,n),n.forEach(s=>{s.event&&t(s.event)})}return this}forEachFrom(e,t){if(this._root!==null){const n=[];this._root.searchAfter(e,n),n.forEach(s=>{s.event&&t(s.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}}class c0{constructor(e,t,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),!(this.low>e)&&this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left!==null?e=this.left.height+1:this.right!==null&&(e=-(this.right.height+1)),e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class l0 extends li{constructor(e){super(),this.name="TimelineValue",this._timeline=new _n({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){const t=this._timeline.get(e);return t?t.value:this._initialValue}}class Ji extends Be{constructor(){super(Fe(Ji.getDefaults(),arguments,["context"]))}connect(e,t=0,n=0){return dl(this,e,t,n),this}}class $s extends Ji{constructor(){const e=Fe($s.getDefaults(),arguments,["mapping","length"]);super(e),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper,ln(e.mapping)||e.mapping instanceof Float32Array?this.curve=Float32Array.from(e.mapping):Pv(e.mapping)&&this.setMap(e.mapping,e.length)}static getDefaults(){return Object.assign(It.getDefaults(),{length:1024})}setMap(e,t=1024){const n=new Float32Array(t);for(let s=0,r=t;s<r;s++){const a=s/(r-1)*2-1;n[s]=e(a,s)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){const t=["none","2x","4x"].some(n=>n.includes(e));Ue(t,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class vl extends Ji{constructor(){const e=Fe(vl.getDefaults(),arguments,["value"]);super(e),this.name="Pow",this._exponentScaler=this.input=this.output=new $s({context:this.context,mapping:this._expFunc(e.value),length:8192}),this._exponent=e.value}static getDefaults(){return Object.assign(Ji.getDefaults(),{value:1})}_expFunc(e){return t=>Math.pow(Math.abs(t),e)}get value(){return this._exponent}set value(e){this._exponent=e,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}}class wi{constructor(e,t){this.id=wi._eventId++,this._remainderTime=0;const n=Object.assign(wi.getDefaults(),t);this.transport=e,this.callback=n.callback,this._once=n.once,this.time=Math.floor(n.time),this._remainderTime=n.time-this.time}static getDefaults(){return{callback:ct,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(e){if(this.callback){const t=this.transport.bpm.getDurationOfTicks(1,e);this.callback(e+this._remainderTime*t),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}}wi._eventId=0;class xl extends wi{constructor(e,t){super(e,t),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(xl.getDefaults(),t);this.duration=n.duration,this._interval=n.interval,this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.transport.on("ticks",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},wi.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvent(){return Na(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new Es(this.context,this._nextTick).toSeconds()):-1}_createEvents(e){Na(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new Es(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;const t=this.transport.getTicksAtTime(e);Ps(t,this.time)&&(this._nextTick=this.floatTime+Math.ceil((t-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this.transport.off("ticks",this._boundRestart),this}}class ja extends Zt{constructor(){const e=Fe(ja.getDefaults(),arguments);super(e),this.name="Transport",this._loop=new l0(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new _n,this._repeatedEvents=new o0,this._syncedSignals=[],this._swingAmount=0,this._ppq=e.ppq,this._clock=new Td({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=e.ppq,this.bpm.setValueAtTime(e.bpm,0),vt(this,"bpm"),this._timeSignature=e.timeSignature,this._swingTicks=e.ppq/2}static getDefaults(){return Object.assign(Zt.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit("loopEnd",e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit("loopStart",e,this._clock.getSecondsAtTime(e)),this.emit("loop",e)),this._swingAmount>0&&t%this._ppq!==0&&t%(this._swingTicks*2)!==0){const n=t%(this._swingTicks*2)/(this._swingTicks*2),s=Math.sin(n*Math.PI)*this._swingAmount;e+=new Es(this.context,this._swingTicks*2/3).toSeconds()*s}vu(!0),this._timeline.forEachAtTime(t,n=>n.invoke(e)),vu(!1)}schedule(e,t){const n=new wi(this,{callback:e,time:new ar(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(e,t,n,s=1/0){const r=new xl(this,{callback:e,duration:new An(this.context,s).toTicks(),interval:new An(this.context,t).toTicks(),time:new ar(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(e,t){const n=new wi(this,{callback:e,once:!0,time:new ar(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){const t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){const t=this.toTicks(e);return this._timeline.forEachFrom(t,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(t,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(e,t)=>{t=new Es(this.context,t).toSeconds(),this.emit("start",e,t)}),this._clock.on("stop",e=>{this.emit("stop",e)}),this._clock.on("pause",e=>{this.emit("pause",e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){this.context.resume();let n;return $e(t)&&(n=this.toTicks(t)),this._clock.start(e,n),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)!=="started"?this.start(e):this.stop(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){ln(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new An(this.context,this._loopStart,"i").toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new An(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new Es(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){const e=this.now(),t=this._clock.getTicksAtTime(e);return new Es(this.context,t).toBarsBeatsSixteenths()}set position(e){const t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){const t=this.now(),n=this._clock.frequency.timeToTicks(e,t);this.ticks=n}get progress(){if(this.loop){const e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){const t=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(t),s=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,t),r=t+s;this.emit("stop",r),this._clock.setTicksAtTime(e,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this.emit("ticks",t),this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return this._clock.getTicksAtTime(e)}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!=="started")return 0;{const t=this.now(),n=this.getTicksAtTime(t),s=e-n%e;return this._clock.nextTickTime(s,t)}}syncSignal(e,t){const n=this.now();let s=this.bpm,r=1/(60/s.getValueAtTime(n)/this.PPQ),a=[];if(e.units==="time"){const c=.015625/r,l=new gt(c),u=new vl(-1),h=new gt(c);s.chain(l,u,h),s=h,r=1/r,a=[l,u,h]}t||(e.getValueAtTime(n)!==0?t=e.getValueAtTime(n)/r:t=0);const o=new gt(t);return s.connect(o),o.connect(e._param),a.push(o),this._syncedSignals.push({initial:e.value,nodes:a,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){const n=this._syncedSignals[t];n.signal===e&&(n.nodes.forEach(s=>s.dispose()),n.signal.value=n.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),xd(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}Tr.mixin(ja);Wa(i=>{i.transport=new ja({context:i})});qa(i=>{i.transport.dispose()});let Xt=class extends Be{constructor(e){super(e),this.input=void 0,this._state=new ul("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=ct,this._syncedStop=ct,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new js({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,vt(this,"volume"),this.onstop=e.onstop}static getDefaults(){return Object.assign(Be.getDefaults(),{mute:!1,onstop:ct,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,n){let s=mn(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(s=this._clampToCurrentTime(s),!this._synced&&this._state.getValueAtTime(s)==="started")Ue(Ps(s,this._state.get(s).time),"Start time must be strictly greater than previous start time"),this._state.cancel(s),this._state.setStateAtTime("started",s),this.log("restart",s),this.restart(s,t,n);else if(this.log("start",s),this._state.setStateAtTime("started",s),this._synced){const r=this._state.get(s);r&&(r.offset=this.toSeconds(ws(t,0)),r.duration=n?this.toSeconds(n):void 0);const a=this.context.transport.schedule(o=>{this._start(o,t,n)},s);this._scheduled.push(a),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>s&&this._syncedStart(this.now(),this.context.transport.seconds)}else fd(this.context),this._start(s,t,n);return this}stop(e){let t=mn(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)==="started"||$e(this._state.getNextState("started",t))){if(this.log("stop",t),!this._synced)this._stop(t);else{const n=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(n)}this._state.cancel(t),this._state.setStateAtTime("stopped",t)}return this}restart(e,t,n){return e=this.toSeconds(e),this._state.getValueAtTime(e)==="started"&&(this._state.cancel(e),this._restart(e,t,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(Ps(t,0)){const n=this._state.get(t);if(n&&n.state==="started"&&n.time!==t){const s=t-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-s),this._start(e,this.toSeconds(n.offset)+s,r)}}},this._syncedStop=e=>{const t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)==="started"&&this._stop(e)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=ct,this.unsync(),this._volume.dispose(),this._state.dispose(),this}};class wr extends Os{constructor(){const e=Fe(wr.getDefaults(),arguments,["url","onload"]);super(e),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1,bi(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new St({context:this.context,param:this._source.playbackRate,units:"positive",value:e.playbackRate}),this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this._buffer=new ht(e.url,e.onload,e.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(Os.getDefaults(),{url:new ht,loop:!1,loopEnd:0,loopStart:0,onload:ct,onerror:ct,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,n,s=1){Ue(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(e);this._startGain(r,s),this.loop?t=ws(t,this.loopStart):t=ws(t,0);let a=Math.max(this.toSeconds(t),0);if(this.loop){const o=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=o-c;Jo(a,o)&&(a=(a-c)%l+c),En(a,this.buffer.duration)&&(a=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,Na(a,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,a)),$e(n)){let o=this.toSeconds(n);o=Math.max(o,0),this.stop(r+o)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}class Da extends Xt{constructor(){const e=Fe(Da.getDefaults(),arguments,["type"]);super(e),this.name="Noise",this._source=null,this._playbackRate=e.playbackRate,this.type=e.type,this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut}static getDefaults(){return Object.assign(Xt.getDefaults(),{fadeIn:0,fadeOut:0,playbackRate:1,type:"white"})}get type(){return this._type}set type(e){if(Ue(e in xu,"Noise: invalid type: "+e),this._type!==e&&(this._type=e,this.state==="started")){const t=this.now();this._stop(t),this._start(t)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this._source&&(this._source.playbackRate.value=e)}_start(e){const t=xu[this._type];this._source=new wr({url:t,context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,loop:!0,onended:()=>this.onstop(this),playbackRate:this._playbackRate}).connect(this.output),this._source.start(this.toSeconds(e),Math.random()*(t.duration-.001))}_stop(e){this._source&&(this._source.stop(this.toSeconds(e)),this._source=null)}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e,this._source&&(this._source.fadeIn=this._fadeIn)}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e,this._source&&(this._source.fadeOut=this._fadeOut)}_restart(e){this._stop(e),this._start(e)}dispose(){return super.dispose(),this._source&&this._source.disconnect(),this}}const rs=44100*5,co=2,Wn={brown:null,pink:null,white:null},xu={get brown(){if(!Wn.brown){const i=[];for(let e=0;e<co;e++){const t=new Float32Array(rs);i[e]=t;let n=0;for(let s=0;s<rs;s++){const r=Math.random()*2-1;t[s]=(n+.02*r)/1.02,n=t[s],t[s]*=3.5}}Wn.brown=new ht().fromArray(i)}return Wn.brown},get pink(){if(!Wn.pink){const i=[];for(let e=0;e<co;e++){const t=new Float32Array(rs);i[e]=t;let n,s,r,a,o,c,l;n=s=r=a=o=c=l=0;for(let u=0;u<rs;u++){const h=Math.random()*2-1;n=.99886*n+h*.0555179,s=.99332*s+h*.0750759,r=.969*r+h*.153852,a=.8665*a+h*.3104856,o=.55*o+h*.5329522,c=-.7616*c-h*.016898,t[u]=n+s+r+a+o+c+l+h*.5362,t[u]*=.11,l=h*.115926}}Wn.pink=new ht().fromArray(i)}return Wn.pink},get white(){if(!Wn.white){const i=[];for(let e=0;e<co;e++){const t=new Float32Array(rs);i[e]=t;for(let n=0;n<rs;n++)t[n]=Math.random()*2-1}Wn.white=new ht().fromArray(i)}return Wn.white}};function is(i,e){return Tt(this,void 0,void 0,function*(){const t=e/i.context.sampleRate,n=new Xa(1,t,i.context.sampleRate);return new i.constructor(Object.assign(i.get(),{frequency:2/t,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class Sl extends Os{constructor(){const e=Fe(Sl.getDefaults(),arguments,["frequency","type"]);super(e),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator],bi(this._oscillator,this._gainNode),this.type=e.type,this.frequency=new St({context:this.context,param:this._oscillator.frequency,units:"frequency",value:e.frequency}),this.detune=new St({context:this.context,param:this._oscillator.detune,units:"cents",value:e.detune}),vt(this,["frequency","detune"])}static getDefaults(){return Object.assign(Os.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class Ct extends Xt{constructor(){const e=Fe(Ct.getDefaults(),arguments,["frequency","type"]);super(e),this.name="Oscillator",this._oscillator=null,this.frequency=new It({context:this.context,units:"frequency",value:e.frequency}),vt(this,"frequency"),this.detune=new It({context:this.context,units:"cents",value:e.detune}),vt(this,"detune"),this._partials=e.partials,this._partialCount=e.partialCount,this._type=e.type,e.partialCount&&e.type!=="custom"&&(this._type=this.baseType+e.partialCount.toString()),this.phase=e.phase}static getDefaults(){return Object.assign(Xt.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(e){const t=this.toSeconds(e),n=new Sl({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){const t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){const t=this.toSeconds(e);return this.log("restart",t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return Ct._periodicWaveCache.find(t=>t.phase===this._phase&&Wv(t.partials,this._partials));{const e=Ct._periodicWaveCache.find(t=>t.type===this._type&&t.phase===this._phase);return this._partialCount=e?e.partialCount:this._partialCount,e}}get type(){return this._type}set type(e){this._type=e;const t=["sine","square","sawtooth","triangle"].indexOf(e)!==-1;if(this._phase===0&&t)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=e);else{const n=this._getCachedPeriodicWave();if($e(n)){const{partials:s,wave:r}=n;this._wave=r,this._partials=s,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[s,r]=this._getRealImaginary(e,this._phase),a=this.context.createPeriodicWave(s,r);this._wave=a,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),Ct._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:s,type:this._type,wave:this._wave}),Ct._periodicWaveCache.length>100&&Ct._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(e){this.partialCount&&this._type!=="custom"&&e!=="custom"?this.type=e+this.partialCount:this.type=e}get partialCount(){return this._partialCount}set partialCount(e){on(e,0);let t=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(t=n[1]),this._type!=="custom")e===0?this.type=t:this.type=t+e.toString();else{const s=new Float32Array(e);this._partials.forEach((r,a)=>s[a]=r),this._partials=Array.from(s),this.type=this._type}}_getRealImaginary(e,t){let s=2048;const r=new Float32Array(s),a=new Float32Array(s);let o=1;if(e==="custom"){if(o=this._partials.length+1,this._partialCount=this._partials.length,s=o,this._partials.length===0)return[r,a]}else{const c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);c?(o=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),e=c[1],o=Math.max(o,2),s=o):this._partialCount=0,this._partials=[]}for(let c=1;c<s;++c){const l=2/(c*Math.PI);let u;switch(e){case"sine":u=c<=o?1:0,this._partials[c-1]=u;break;case"square":u=c&1?2*l:0,this._partials[c-1]=u;break;case"sawtooth":u=l*(c&1?1:-1),this._partials[c-1]=u;break;case"triangle":c&1?u=2*(l*l)*(c-1>>1&1?-1:1):u=0,this._partials[c-1]=u;break;case"custom":u=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+e)}u!==0?(r[c]=-u*Math.sin(t*c),a[c]=u*Math.cos(t*c)):(r[c]=0,a[c]=0)}return[r,a]}_inverseFFT(e,t,n){let s=0;const r=e.length;for(let a=0;a<r;a++)s+=e[a]*Math.cos(a*n)+t[a]*Math.sin(a*n);return s}getInitialValue(){const[e,t]=this._getRealImaginary(this._type,0);let n=0;const s=Math.PI*2,r=32;for(let a=0;a<r;a++)n=Math.max(this._inverseFFT(e,t,a/r*s),n);return Xv(-this._inverseFFT(e,t,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(){return Tt(this,arguments,void 0,function*(e=1024){return is(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}Ct._periodicWaveCache=[];class u0 extends Ji{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new $s({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class Ls extends It{constructor(){const e=Fe(Ls.getDefaults(),arguments,["value"]);super(e),this.name="Multiply",this.override=!1,this._mult=this.input=this.output=new gt({context:this.context,minValue:e.minValue,maxValue:e.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(It.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class $a extends Xt{constructor(){const e=Fe($a.getDefaults(),arguments,["frequency","type","modulationType"]);super(e),this.name="AMOscillator",this._modulationScale=new u0({context:this.context}),this._modulationNode=new gt({context:this.context}),this._carrier=new Ct({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new Ct({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new Ls({context:this.context,units:"positive",value:e.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),vt(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Ct.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return Tt(this,arguments,void 0,function*(e=1024){return is(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class Za extends Xt{constructor(){const e=Fe(Za.getDefaults(),arguments,["frequency","type","modulationType"]);super(e),this.name="FMOscillator",this._modulationNode=new gt({context:this.context,gain:0}),this._carrier=new Ct({context:this.context,detune:e.detune,frequency:0,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.detune=this._carrier.detune,this.frequency=new It({context:this.context,units:"frequency",value:e.frequency}),this._modulator=new Ct({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new Ls({context:this.context,units:"positive",value:e.harmonicity}),this.modulationIndex=new Ls({context:this.context,units:"positive",value:e.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),vt(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Ct.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return Tt(this,arguments,void 0,function*(e=1024){return is(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class Ar extends Xt{constructor(){const e=Fe(Ar.getDefaults(),arguments,["frequency","width"]);super(e),this.name="PulseOscillator",this._widthGate=new gt({context:this.context,gain:0}),this._thresh=new $s({context:this.context,mapping:t=>t<=0?-1:1}),this.width=new It({context:this.context,units:"audioRange",value:e.width}),this._triangle=new Ct({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),vt(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(Xt.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(){return Tt(this,arguments,void 0,function*(e=1024){return is(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class Ka extends Xt{constructor(){const e=Fe(Ka.getDefaults(),arguments,["frequency","type","spread"]);super(e),this.name="FatOscillator",this._oscillators=[],this.frequency=new It({context:this.context,units:"frequency",value:e.frequency}),this.detune=new It({context:this.context,units:"cents",value:e.detune}),this._spread=e.spread,this._type=e.type,this._phase=e.phase,this._partials=e.partials,this._partialCount=e.partialCount,this.count=e.count,vt(this,["frequency","detune"])}static getDefaults(){return Object.assign(Ct.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){const t=-e/2,n=e/(this._oscillators.length-1);this._forEach((s,r)=>s.detune.value=t+n*r)}}get count(){return this._oscillators.length}set count(e){if(on(e,1),this._oscillators.length!==e){this._forEach(t=>t.dispose()),this._oscillators=[];for(let t=0;t<e;t++){const n=new Ct({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):ct});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[t]=n}this.spread=this._spread,this.state==="started"&&this._forEach(t=>t.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((t,n)=>t.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type="custom",this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(){return Tt(this,arguments,void 0,function*(e=1024){return is(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}}class Ja extends Xt{constructor(){const e=Fe(Ja.getDefaults(),arguments,["frequency","modulationFrequency"]);super(e),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new Ls({context:this.context,value:2}),this._pulse=new Ar({context:this.context,frequency:e.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new Ct({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),vt(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(Xt.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(){return Tt(this,arguments,void 0,function*(e=1024){return is(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const Su={am:$a,fat:Ka,fm:Za,oscillator:Ct,pulse:Ar,pwm:Ja};class Pa extends Xt{constructor(){const e=Fe(Pa.getDefaults(),arguments,["frequency","type"]);super(e),this.name="OmniOscillator",this.frequency=new It({context:this.context,units:"frequency",value:e.frequency}),this.detune=new It({context:this.context,units:"cents",value:e.detune}),vt(this,["frequency","detune"]),this.set(e)}static getDefaults(){return Object.assign(Ct.getDefaults(),Za.getDefaults(),$a.getDefaults(),Ka.getDefaults(),Ar.getDefaults(),Ja.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e="";return["am","fm","fat"].some(t=>this._sourceType===t)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):e==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,"type")&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;const t=Su[e],n=this.now();if(this._oscillator){const s=this._oscillator;s.stop(n),this.context.setTimeout(()=>s.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(t=this._oscillator.type),e==="fm"?this.type="fm"+t:e==="am"?this.type="am"+t:e==="fat"?this.type="fat"+t:e==="oscillator"?this.type=t:e==="pulse"?this.type="pulse":e==="pwm"&&(this.type="pwm")}_getOscType(e,t){return e instanceof Su[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&e!=="pulse"&&e!=="pwm"&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,"fat")&&Ti(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,"fat")&&Ti(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&ri(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(){return Tt(this,arguments,void 0,function*(e=1024){return is(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}function wd(i,e=1/0){const t=new WeakMap;return function(n,s){Reflect.defineProperty(n,s,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){on(r,i,e),t.set(this,r)}})}}function ui(i,e=1/0){const t=new WeakMap;return function(n,s){Reflect.defineProperty(n,s,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){on(this.toSeconds(r),i,e),t.set(this,r)}})}}class Qa extends Xt{constructor(){const e=Fe(Qa.getDefaults(),arguments,["url","onload"]);super(e),this.name="Player",this._activeSources=new Set,this._buffer=new ht({onload:this._onload.bind(this,e.onload),onerror:e.onerror,reverse:e.reverse,url:e.url}),this.autostart=e.autostart,this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut}static getDefaults(){return Object.assign(Xt.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:ct,onerror:ct,playbackRate:1,reverse:!1})}load(e){return Tt(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=ct){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(e,t,n){return super.start(e,t,n),this}_start(e,t,n){this._loop?t=ws(t,this._loopStart):t=ws(t,0);const s=this.toSeconds(t),r=n;n=ws(n,Math.max(this._buffer.duration-s,0));let a=this.toSeconds(n);a=a/this._playbackRate,e=this.toSeconds(e);const o=new wr({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+a),this._state.setStateAtTime("stopped",e+a,{implicitEnd:!0})),this._activeSources.add(o),this._loop&&mn(r)?o.start(e,s):o.start(e,s,a-this.toSeconds(this.fadeOut))}_stop(e){const t=this.toSeconds(e);this._activeSources.forEach(n=>n.stop(t))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){var s;(s=[...this._activeSources].pop())===null||s===void 0||s.stop(e),this._start(e,t,n)}seek(e,t){const n=this.toSeconds(t);if(this._state.getValueAtTime(n)==="started"){const s=this.toSeconds(e);this._stop(n),this._start(n,s)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&on(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&on(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){const t=this._state.getNextState("stopped",this.now());t&&this._state.cancel(t.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;const t=this.now(),n=this._state.getNextState("stopped",t);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(s=>s.cancelStop())),this._activeSources.forEach(s=>{s.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}Ln([ui(0)],Qa.prototype,"fadeIn",void 0);Ln([ui(0)],Qa.prototype,"fadeOut",void 0);class h0 extends Ji{constructor(){super(...arguments),this.name="GainToAudio",this._norm=new $s({context:this.context,mapping:e=>Math.abs(e)*2-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class Ii extends Be{constructor(){const e=Fe(Ii.getDefaults(),arguments,["attack","decay","sustain","release"]);super(e),this.name="Envelope",this._sig=new It({context:this.context,value:0}),this.output=this._sig,this.input=void 0,this.attack=e.attack,this.decay=e.decay,this.sustain=e.sustain,this.release=e.release,this.attackCurve=e.attackCurve,this.releaseCurve=e.releaseCurve,this.decayCurve=e.decayCurve}static getDefaults(){return Object.assign(Be.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(ri(e))return e;{let n;for(n in Vr)if(Vr[n][t]===e)return n;return e}}_setCurve(e,t,n){if(ri(n)&&Reflect.has(Vr,n)){const s=Vr[n];ji(s)?e!=="_decayCurve"&&(this[e]=s[t]):this[e]=s}else if(ln(n)&&e!=="_decayCurve")this[e]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(e){this._setCurve("_attackCurve","In",e)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(e){this._setCurve("_releaseCurve","Out",e)}get decayCurve(){return this._getCurve(this._decayCurve,"Out")}set decayCurve(e){this._setCurve("_decayCurve","Out",e)}triggerAttack(e,t=1){this.log("triggerAttack",e,t),e=this.toSeconds(e);let s=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),a=this.getValueAtTime(e);if(a>0){const o=1/s;s=(1-a)/o}if(s<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve==="linear")this._sig.linearRampTo(t,s,e);else if(this._attackCurve==="exponential")this._sig.targetRampTo(t,s,e);else{this._sig.cancelAndHoldAtTime(e);let o=this._attackCurve;for(let c=1;c<o.length;c++)if(o[c-1]<=a&&a<=o[c]){o=this._attackCurve.slice(c),o[0]=a;break}this._sig.setValueCurveAtTime(o,e,s,t)}if(r&&this.sustain<1){const o=t*this.sustain,c=e+s;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(o,r+c):this._sig.exponentialApproachValueAtTime(o,c,r)}return this}triggerRelease(e){this.log("triggerRelease",e),e=this.toSeconds(e);const t=this.getValueAtTime(e);if(t>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,e):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,e):(Ue(ln(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,n,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),this.triggerAttack(t,n),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,n=0){return dl(this,e,t,n),this}asArray(){return Tt(this,arguments,void 0,function*(e=1024){const t=e/this.context.sampleRate,n=new Xa(1,t,this.context.sampleRate),s=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=s+this.toSeconds(this.release),a=r*.1,o=r+a,c=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/o,decay:t*this.toSeconds(this.decay)/o,release:t*this.toSeconds(this.release)/o,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(t*(s+a)/o,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}Ln([ui(0)],Ii.prototype,"attack",void 0);Ln([ui(0)],Ii.prototype,"decay",void 0);Ln([wd(0,1)],Ii.prototype,"sustain",void 0);Ln([ui(0)],Ii.prototype,"release",void 0);const Vr=(()=>{let e,t;const n=[];for(e=0;e<128;e++)n[e]=Math.sin(e/127*(Math.PI/2));const s=[],r=6.4;for(e=0;e<127;e++){t=e/127;const d=Math.sin(t*(Math.PI*2)*r-Math.PI/2)+1;s[e]=d/10+t*.83}s[127]=1;const a=[],o=5;for(e=0;e<128;e++)a[e]=Math.ceil(e/127*o)/o;const c=[];for(e=0;e<128;e++)t=e/127,c[e]=.5*(1-Math.cos(Math.PI*t));const l=[];for(e=0;e<128;e++){t=e/127;const d=Math.pow(t,3)*4+.2,p=Math.cos(d*Math.PI*2*t);l[e]=Math.abs(p*(1-t))}function u(d){const p=new Array(d.length);for(let _=0;_<d.length;_++)p[_]=1-d[_];return p}function h(d){return d.slice(0).reverse()}return{bounce:{In:u(l),Out:l},cosine:{In:n,Out:h(n)},exponential:"exponential",linear:"linear",ripple:{In:s,Out:u(s)},sine:{In:c,Out:u(c)},step:{In:a,Out:u(a)}}})();class Ai extends Be{constructor(){const e=Fe(Ai.getDefaults(),arguments);super(e),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=t=>this._original_triggerRelease(t),this._volume=this.output=new js({context:this.context,volume:e.volume}),this.volume=this._volume.volume,vt(this,"volume")}static getDefaults(){return Object.assign(Be.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){const n=this["_original_"+e]=this[e];this[e]=(...s)=>{const r=s[t],a=this.context.transport.schedule(o=>{s[t]=o,n.apply(this,s)},r);this._scheduledEvents.push(a)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off("stop",this._syncedRelease),this.context.transport.off("pause",this._syncedRelease),this.context.transport.off("loopEnd",this._syncedRelease)),this}triggerAttackRelease(e,t,n,s){const r=this.toSeconds(n),a=this.toSeconds(t);return this.triggerAttack(e,r,s),this.triggerRelease(r+a),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class Qi extends Ai{constructor(){const e=Fe(Qi.getDefaults(),arguments);super(e),this.portamento=e.portamento,this.onsilence=e.onsilence}static getDefaults(){return Object.assign(Ai.getDefaults(),{detune:0,onsilence:ct,portamento:0})}triggerAttack(e,t,n=1){this.log("triggerAttack",e,t,n);const s=this.toSeconds(t);return this._triggerEnvelopeAttack(s,n),this.setNote(e,s),this}triggerRelease(e){this.log("triggerRelease",e);const t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){const n=this.toSeconds(t),s=e instanceof cn?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(s,r,n)}else this.frequency.setValueAtTime(s,n);return this}}Ln([ui(0)],Qi.prototype,"portamento",void 0);class yl extends Ii{constructor(){super(Fe(yl.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new gt({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class Us extends Qi{constructor(){const e=Fe(Us.getDefaults(),arguments);super(e),this.name="Synth",this.oscillator=new Pa(Object.assign({context:this.context,detune:e.detune,onstop:()=>this.onsilence(this)},e.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new yl(Object.assign({context:this.context},e.envelope)),this.oscillator.chain(this.envelope,this.output),vt(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(Qi.getDefaults(),{envelope:Object.assign(Ko(Ii.getDefaults(),Object.keys(Be.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(Ko(Pa.getDefaults(),[...Object.keys(Xt.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),s=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+n+s)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class eo extends Us{constructor(){const e=Fe(eo.getDefaults(),arguments);super(e),this.name="MembraneSynth",this.portamento=0,this.pitchDecay=e.pitchDecay,this.octaves=e.octaves,vt(this,["oscillator","envelope"])}static getDefaults(){return $i(Qi.getDefaults(),Us.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(e,t){const n=this.toSeconds(t),s=this.toFrequency(e instanceof cn?e.toFrequency():e),r=s*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(s,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}Ln([wd(0)],eo.prototype,"octaves",void 0);Ln([ui(0)],eo.prototype,"pitchDecay",void 0);const Ad=new Set;function Ml(i){Ad.add(i)}function Cd(i,e){const t=`registerProcessor("${i}", ${e})`;Ad.add(t)}const d0=`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;Ml(d0);const f0=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;Ml(f0);const p0=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;Ml(p0);const m0="feedback-comb-filter",_0=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;Cd(m0,_0);class El extends Ai{constructor(){const e=Fe(El.getDefaults(),arguments,["voice","options"]);super(e),this.name="PolySynth",this._availableVoices=[],this._activeVoices=[],this._voices=[],this._gcTimeout=-1,this._averageActiveVoices=0,this._syncedRelease=s=>this.releaseAll(s),Ue(!Ti(e.voice),"DEPRECATED: The polyphony count is no longer the first argument.");const t=e.voice.getDefaults();this.options=Object.assign(t,e.options),this.voice=e.voice,this.maxPolyphony=e.maxPolyphony,this._dummyVoice=this._getNextAvailableVoice();const n=this._voices.indexOf(this._dummyVoice);this._voices.splice(n,1),this._gcTimeout=this.context.setInterval(this._collectGarbage.bind(this),1)}static getDefaults(){return Object.assign(Ai.getDefaults(),{maxPolyphony:32,options:{},voice:Us})}get activeVoices(){return this._activeVoices.length}_makeVoiceAvailable(e){this._availableVoices.push(e);const t=this._activeVoices.findIndex(n=>n.voice===e);this._activeVoices.splice(t,1)}_getNextAvailableVoice(){if(this._availableVoices.length)return this._availableVoices.shift();if(this._voices.length<this.maxPolyphony){const e=new this.voice(Object.assign(this.options,{context:this.context,onsilence:this._makeVoiceAvailable.bind(this)}));return Ue(e instanceof Qi,"Voice must extend Monophonic class"),e.connect(this.output),this._voices.push(e),e}else Ha("Max polyphony exceeded. Note dropped.")}_collectGarbage(){if(this._averageActiveVoices=Math.max(this._averageActiveVoices*.95,this.activeVoices),this._availableVoices.length&&this._voices.length>Math.ceil(this._averageActiveVoices+1)){const e=this._availableVoices.shift(),t=this._voices.indexOf(e);this._voices.splice(t,1),this.context.isOffline||e.dispose()}}_triggerAttack(e,t,n){e.forEach(s=>{const r=new Ia(this.context,s).toMidi(),a=this._getNextAvailableVoice();a&&(a.triggerAttack(s,t,n),this._activeVoices.push({midi:r,voice:a,released:!1}),this.log("triggerAttack",s,t))})}_triggerRelease(e,t){e.forEach(n=>{const s=new Ia(this.context,n).toMidi(),r=this._activeVoices.find(({midi:a,released:o})=>a===s&&!o);r&&(r.voice.triggerRelease(t),r.released=!0,this.log("triggerRelease",n,t))})}_scheduleEvent(e,t,n,s){Ue(!this.disposed,"Synth was already disposed"),n<=this.now()?e==="attack"?this._triggerAttack(t,n,s):this._triggerRelease(t,n):this.context.setTimeout(()=>{this.disposed||this._scheduleEvent(e,t,n,s)},n-this.now())}triggerAttack(e,t,n){Array.isArray(e)||(e=[e]);const s=this.toSeconds(t);return this._scheduleEvent("attack",e,s,n),this}triggerRelease(e,t){Array.isArray(e)||(e=[e]);const n=this.toSeconds(t);return this._scheduleEvent("release",e,n),this}triggerAttackRelease(e,t,n,s){const r=this.toSeconds(n);if(this.triggerAttack(e,r,s),ln(t)){Ue(ln(e),"If the duration is an array, the notes must also be an array"),e=e;for(let a=0;a<e.length;a++){const o=t[Math.min(a,t.length-1)],c=this.toSeconds(o);Ue(c>0,"The duration must be greater than 0"),this.triggerRelease(e[a],r+c)}}else{const a=this.toSeconds(t);Ue(a>0,"The duration must be greater than 0"),this.triggerRelease(e,r+a)}return this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}set(e){const t=Ko(e,["onsilence","context"]);return this.options=$i(this.options,t),this._voices.forEach(n=>n.set(t)),this._dummyVoice.set(t),this}get(){return this._dummyVoice.get()}releaseAll(e){const t=this.toSeconds(e);return this._activeVoices.forEach(({voice:n})=>{n.triggerRelease(t)}),this}dispose(){return super.dispose(),this._dummyVoice.dispose(),this._voices.forEach(e=>e.dispose()),this._activeVoices=[],this._availableVoices=[],this.context.clearInterval(this._gcTimeout),this}}class Cr extends Ai{constructor(){const e=Fe(Cr.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");super(e),this.name="Sampler",this._activeSources=new Map;const t={};Object.keys(e.urls).forEach(n=>{const s=parseInt(n,10);if(Ue(Br(n)||Ti(s)&&isFinite(s),`url key is neither a note or midi pitch: ${n}`),Br(n)){const r=new cn(this.context,n).toMidi();t[r]=e.urls[n]}else Ti(s)&&isFinite(s)&&(t[s]=e.urls[s])}),this._buffers=new gl({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(Ai.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:ct,onerror:ct,release:.1,urls:{}})}_findClosest(e){let n=0;for(;n<96;){if(this._buffers.has(e+n))return-n;if(this._buffers.has(e-n))return n;n++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,n=1){return this.log("triggerAttack",e,t,n),Array.isArray(e)||(e=[e]),e.forEach(s=>{const r=Md(new cn(this.context,s).toFrequency()),a=Math.round(r),o=r-a,c=this._findClosest(a),l=a-c,u=this._buffers.get(l),h=yd(c+o),d=new wr({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(t,0,u.duration/h,n),ln(this._activeSources.get(a))||this._activeSources.set(a,[]),this._activeSources.get(a).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(a)){const p=this._activeSources.get(a),_=p.indexOf(d);_!==-1&&p.splice(_,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(n=>{const s=new cn(this.context,n).toMidi();if(this._activeSources.has(s)&&this._activeSources.get(s).length){const r=this._activeSources.get(s);t=this.toSeconds(t),r.forEach(a=>{a.stop(t)}),this._activeSources.set(s,[])}}),this}releaseAll(e){const t=this.toSeconds(e);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,n,s=1){const r=this.toSeconds(n);return this.triggerAttack(e,r,s),ln(t)?(Ue(ln(e),"notes must be an array when duration is array"),e.forEach((a,o)=>{const c=t[Math.min(o,t.length-1)];this.triggerRelease(a,r+this.toSeconds(c))})):this.triggerRelease(e,r+this.toSeconds(t)),this}add(e,t,n){if(Ue(Br(e)||isFinite(e),`note must be a pitch or midi: ${e}`),Br(e)){const s=new cn(this.context,e).toMidi();this._buffers.add(s,t,n)}else this._buffers.add(e,t,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}}Ln([ui(0)],Cr.prototype,"attack",void 0);Ln([ui(0)],Cr.prototype,"release",void 0);class Tl extends Be{constructor(){const e=Fe(Tl.getDefaults(),arguments,["fade"]);super(e),this.name="CrossFade",this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new h0({context:this.context}),this.a=new gt({context:this.context,gain:0}),this.b=new gt({context:this.context,gain:0}),this.output=new gt({context:this.context}),this._internalChannels=[this.a,this.b],this.fade=new It({context:this.context,units:"normalRange",value:e.fade}),vt(this,"fade"),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode="explicit",bi(this._split,this.a.gain,0),bi(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(Be.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}}class yu extends Be{constructor(e){super(e),this.name="Effect",this._dryWet=new Tl({context:this.context}),this.wet=this._dryWet.fade,this.effectSend=new gt({context:this.context}),this.effectReturn=new gt({context:this.context}),this.input=new gt({context:this.context}),this.output=this._dryWet,this.input.fan(this._dryWet.a,this.effectSend),this.effectReturn.connect(this._dryWet.b),this.wet.setValueAtTime(e.wet,0),this._internalChannels=[this.effectReturn,this.effectSend],vt(this,"wet")}static getDefaults(){return Object.assign(Be.getDefaults(),{wet:1})}connectEffect(e){return this._internalChannels.push(e),this.effectSend.chain(e,this.effectReturn),this}dispose(){return super.dispose(),this._dryWet.dispose(),this.effectSend.dispose(),this.effectReturn.dispose(),this.wet.dispose(),this}}class bl extends Be{constructor(){const e=Fe(bl.getDefaults(),arguments,["pan"]);super(e),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner,this.pan=new St({context:this.context,param:this._panner.pan,value:e.pan,minValue:-1,maxValue:1}),this._panner.channelCount=e.channelCount,this._panner.channelCountMode="explicit",vt(this,"pan")}static getDefaults(){return Object.assign(Be.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const g0="bit-crusher",v0=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;Cd(g0,v0);class wl extends Be{constructor(){const e=Fe(wl.getDefaults(),arguments,["channels"]);super(e),this.name="Split",this._splitter=this.input=this.output=this.context.createChannelSplitter(e.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(Be.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}}class Al extends Be{constructor(){const e=Fe(Al.getDefaults(),arguments,["channels"]);super(e),this.name="Merge",this._merger=this.output=this.input=this.context.createChannelMerger(e.channels)}static getDefaults(){return Object.assign(Be.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}}class Cl extends yu{constructor(){const e=Fe(Cl.getDefaults(),arguments,["decay"]);super(e),this.name="Reverb",this._convolver=this.context.createConvolver(),this.ready=Promise.resolve();const t=this.toSeconds(e.decay);on(t,.001),this._decay=t;const n=this.toSeconds(e.preDelay);on(n,0),this._preDelay=n,this.generate(),this.connectEffect(this._convolver)}static getDefaults(){return Object.assign(yu.getDefaults(),{decay:1.5,preDelay:.01})}get decay(){return this._decay}set decay(e){e=this.toSeconds(e),on(e,.001),this._decay=e,this.generate()}get preDelay(){return this._preDelay}set preDelay(e){e=this.toSeconds(e),on(e,0),this._preDelay=e,this.generate()}generate(){return Tt(this,void 0,void 0,function*(){const e=this.ready,t=new Xa(2,this._decay+this._preDelay,this.context.sampleRate),n=new Da({context:t}),s=new Da({context:t}),r=new Al({context:t});n.connect(r,0,0),s.connect(r,0,1);const a=new gt({context:t}).toDestination();r.connect(a),n.start(0),s.start(0),a.gain.setValueAtTime(0,0),a.gain.setValueAtTime(1,this._preDelay),a.gain.exponentialApproachValueAtTime(0,this._preDelay,this.decay);const o=t.render();return this.ready=o.then(ct),yield e,this._convolver.buffer=(yield o).get(),this})}dispose(){return super.dispose(),this._convolver.disconnect(),this}}class Rl extends Be{constructor(){const e=Fe(Rl.getDefaults(),arguments,["type","size"]);super(e),this.name="Analyser",this._analysers=[],this._buffers=[],this.input=this.output=this._gain=new gt({context:this.context}),this._split=new wl({context:this.context,channels:e.channels}),this.input.connect(this._split),on(e.channels,1);for(let t=0;t<e.channels;t++)this._analysers[t]=this.context.createAnalyser(),this._split.connect(this._analysers[t],t,0);this.size=e.size,this.type=e.type,this.smoothing=e.smoothing}static getDefaults(){return Object.assign(Be.getDefaults(),{size:1024,smoothing:.8,type:"fft",channels:1})}getValue(){return this._analysers.forEach((e,t)=>{const n=this._buffers[t];this._type==="fft"?e.getFloatFrequencyData(n):this._type==="waveform"&&e.getFloatTimeDomainData(n)}),this.channels===1?this._buffers[0]:this._buffers}get size(){return this._analysers[0].frequencyBinCount}set size(e){this._analysers.forEach((t,n)=>{t.fftSize=e*2,this._buffers[n]=new Float32Array(e)})}get channels(){return this._analysers.length}get type(){return this._type}set type(e){Ue(e==="waveform"||e==="fft",`Analyser: invalid type: ${e}`),this._type=e}get smoothing(){return this._analysers[0].smoothingTimeConstant}set smoothing(e){this._analysers.forEach(t=>t.smoothingTimeConstant=e)}dispose(){return super.dispose(),this._analysers.forEach(e=>e.disconnect()),this._split.dispose(),this._gain.dispose(),this}}class At extends Be{constructor(){const e=Fe(At.getDefaults(),arguments,["solo"]);super(e),this.name="Solo",this.input=this.output=new gt({context:this.context}),At._allSolos.has(this.context)||At._allSolos.set(this.context,new Set),At._allSolos.get(this.context).add(this),this.solo=e.solo}static getDefaults(){return Object.assign(Be.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(e){e?this._addSolo():this._removeSolo(),At._allSolos.get(this.context).forEach(t=>t._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){At._soloed.has(this.context)||At._soloed.set(this.context,new Set),At._soloed.get(this.context).add(this)}_removeSolo(){At._soloed.has(this.context)&&At._soloed.get(this.context).delete(this)}_isSoloed(){return At._soloed.has(this.context)&&At._soloed.get(this.context).has(this)}_noSolos(){return!At._soloed.has(this.context)||At._soloed.has(this.context)&&At._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),At._allSolos.get(this.context).delete(this),this._removeSolo(),this}}At._allSolos=new Map;At._soloed=new Map;class Nl extends Be{constructor(){const e=Fe(Nl.getDefaults(),arguments,["pan","volume"]);super(e),this.name="PanVol",this._panner=this.input=new bl({context:this.context,pan:e.pan,channelCount:e.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new js({context:this.context,volume:e.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=e.mute,vt(this,["pan","volume"])}static getDefaults(){return Object.assign(Be.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class Ts extends Be{constructor(){const e=Fe(Ts.getDefaults(),arguments,["volume","pan"]);super(e),this.name="Channel",this._solo=this.input=new At({solo:e.solo,context:this.context}),this._panVol=this.output=new Nl({context:this.context,pan:e.pan,volume:e.volume,mute:e.mute,channelCount:e.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),vt(this,["pan","volume"])}static getDefaults(){return Object.assign(Be.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(e){return Ts.buses.has(e)||Ts.buses.set(e,new gt({context:this.context})),Ts.buses.get(e)}send(e,t=0){const n=this._getBus(e),s=new gt({context:this.context,units:"decibels",gain:t});return this.connect(s),s.connect(n),s}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}Ts.buses=new Map;wn().transport;wn().destination;wn().destination;wn().listener;wn().draw;wn();const Mu={"A#":"Bb","C#":"Db","D#":"Eb","F#":"Gb","G#":"Ab"},ec=i=>{if(i.length===2)return i;const e=i[0]+i[1],t=i[i.length-1];console.log(e);for(const n in Mu)if(e===n)return Mu[n]+t;return i},x0=(i=0,e=7,t=".mp3")=>{const n={},s=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];for(let o=0;o<=7;o++)for(const c of s){const l=ec(c+o);n[l]=l+t}return n};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Il="177",S0=0,Eu=1,y0=2,Rd=1,M0=2,Zn=3,Ci=0,Kt=1,Jn=2,ni=0,As=1,tc=2,Tu=3,bu=4,E0=5,Gi=100,T0=101,b0=102,w0=103,A0=104,C0=200,R0=201,N0=202,I0=203,nc=204,ic=205,D0=206,P0=207,O0=208,L0=209,U0=210,F0=211,k0=212,B0=213,V0=214,sc=0,rc=1,ac=2,Fs=3,oc=4,cc=5,lc=6,uc=7,Nd=0,z0=1,G0=2,Mi=0,Id=1,Dd=2,Pd=3,Od=4,Ld=5,Ud=6,Fd=7,kd=300,ks=301,Bs=302,hc=303,dc=304,to=306,fc=1e3,Xi=1001,pc=1002,Nn=1003,H0=1004,zr=1005,Fn=1006,lo=1007,Yi=1008,ai=1009,Bd=1010,Vd=1011,ur=1012,Dl=1013,es=1014,Qn=1015,ii=1016,Pl=1017,Ol=1018,hr=1020,zd=35902,Gd=1021,Hd=1022,Cn=1023,dr=1026,fr=1027,Wd=1028,Ll=1029,qd=1030,Ul=1031,Fl=1033,fa=33776,pa=33777,ma=33778,_a=33779,mc=35840,_c=35841,gc=35842,vc=35843,xc=36196,Sc=37492,yc=37496,Mc=37808,Ec=37809,Tc=37810,bc=37811,wc=37812,Ac=37813,Cc=37814,Rc=37815,Nc=37816,Ic=37817,Dc=37818,Pc=37819,Oc=37820,Lc=37821,ga=36492,Uc=36494,Fc=36495,Xd=36283,kc=36284,Bc=36285,Vc=36286,W0=3200,q0=3201,X0=0,Y0=1,Si="",sn="srgb",Vs="srgb-linear",Oa="linear",ot="srgb",as=7680,wu=519,j0=512,$0=513,Z0=514,Yd=515,K0=516,J0=517,Q0=518,ex=519,Au=35044,Cu="300 es",ei=2e3,La=2001;class Zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uo=Math.PI/180,zc=180/Math.PI;function Rr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function tx(i,e){return(i%e+e)%e}function ho(i,e,t){return(1-t)*i+t*e}function er(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==d||l!==p||u!==_){let m=1-o;const f=c*d+l*p+u*_+h*g,E=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const T=Math.sqrt(M),w=Math.atan2(T,f*E);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}const x=o*E;if(c=c*m+d*x,l=l*m+p*x,u=u*m+_*x,h=h*m+g*x,m===1-o){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*h+c*p-l*d,e[t+1]=c*_+u*d+l*h-o*p,e[t+2]=l*_+u*p+o*d-c*h,e[t+3]=u*_-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"YZX":this._x=d*u*h+l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h-d*p*_;break;case"XZY":this._x=d*u*h-l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fo.copy(this).projectOnVector(e),this.sub(fo)}reflect(e){return this.sub(fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new z,Ru=new Nr;class qe{constructor(e,t,n,s,r,a,o,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],_=n[8],g=s[0],m=s[3],f=s[6],E=s[1],M=s[4],x=s[7],T=s[2],w=s[5],b=s[8];return r[0]=a*g+o*E+c*T,r[3]=a*m+o*M+c*w,r[6]=a*f+o*x+c*b,r[1]=l*g+u*E+h*T,r[4]=l*m+u*M+h*w,r[7]=l*f+u*x+h*b,r[2]=d*g+p*E+_*T,r[5]=d*m+p*M+_*w,r[8]=d*f+p*x+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,p=l*r-a*c,_=t*h+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*l-u*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(u*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(po.makeScale(e,t)),this}rotate(e){return this.premultiply(po.makeRotation(-e)),this}translate(e,t){return this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const po=new qe;function jd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nx(){const i=Ua("canvas");return i.style.display="block",i}const Nu={};function Cs(i){i in Nu||(Nu[i]=!0,console.warn(i))}function ix(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function sx(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rx(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Iu=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Du=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ax(){const i={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Oa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vs]:{primaries:e,whitePoint:n,transfer:Oa,toXYZ:Iu,fromXYZ:Du,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Iu,fromXYZ:Du,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}const Qe=ax();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let os;class ox{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=Ua("canvas")),os.width=e.width,os.height=e.height;const s=os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=os}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ua("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cx=0;class kl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mo(s[a].image)):r.push(mo(s[a]))}else r=mo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ox.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lx=0;const _o=new z;class Jt extends Zs{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=Xi,s=Xi,r=Fn,a=Yi,o=Cn,c=ai,l=Jt.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Rr(),this.name="",this.source=new kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_o).x}get height(){return this.source.getSize(_o).y}get depth(){return this.source.getSize(_o).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fc:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fc:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=kd;Jt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,s=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],_=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,x=(p+1)/2,T=(f+1)/2,w=(u+d)/4,b=(h+g)/4,A=(_+m)/4;return M>x&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=b/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=A/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=b/r,s=A/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(h-g)/E,this.z=(d-u)/E,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ux extends Zs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Jt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new kl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends ux{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $d extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hx extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Hr.subVectors(this.max,tr),cs.subVectors(e.a,tr),ls.subVectors(e.b,tr),us.subVectors(e.c,tr),fi.subVectors(ls,cs),pi.subVectors(us,ls),Oi.subVectors(cs,us);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Oi.z,Oi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Oi.z,0,-Oi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Oi.y,Oi.x,0];return!go(t,cs,ls,us,Hr)||(t=[1,0,0,0,1,0,0,0,1],!go(t,cs,ls,us,Hr))?!1:(Wr.crossVectors(fi,pi),t=[Wr.x,Wr.y,Wr.z],go(t,cs,ls,us,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new z,new z,new z,new z,new z,new z,new z,new z],Sn=new z,Gr=new Ir,cs=new z,ls=new z,us=new z,fi=new z,pi=new z,Oi=new z,tr=new z,Hr=new z,Wr=new z,Li=new z;function go(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Li.fromArray(i,r);const o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=e.dot(Li),l=t.dot(Li),u=n.dot(Li);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const dx=new Ir,nr=new z,vo=new z;class Bl{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(vo)),this.expandByPoint(nr.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xn=new z,xo=new z,qr=new z,mi=new z,So=new z,Xr=new z,yo=new z;class fx{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xo.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(xo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=mi.dot(this.direction),c=-mi.dot(qr),l=mi.lengthSq(),u=Math.abs(1-a*a);let h,d,p,_;if(u>0)if(h=a*c-o,d=a*o-c,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xo).addScaledVector(qr,d),p}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,s,r){So.subVectors(t,e),Xr.subVectors(n,e),yo.crossVectors(So,Xr);let a=this.direction.dot(yo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const c=o*this.direction.dot(Xr.crossVectors(mi,Xr));if(c<0)return null;const l=o*this.direction.dot(So.cross(mi));if(l<0||c+l>a)return null;const u=-o*mi.dot(yo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,n,s,r,a,o,c,l,u,h,d,p,_,g,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,p,_,g,m)}set(e,t,n,s,r,a,o,c,l,u,h,d,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),a=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,_=o*u,g=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=_+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,_=l*u,g=l*h;t[0]=d+g*o,t[4]=_*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,_=l*u,g=l*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*h,_=o*u,g=o*h;t[0]=c*u,t[4]=_*l-p,t[8]=d*l+g,t[1]=c*h,t[5]=g*l+d,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=g-d*h,t[8]=_*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*c,p=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+g,t[5]=a*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,n){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),_i.crossVectors(n,tn),_i.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),_i.crossVectors(n,tn)),_i.normalize(),Yr.crossVectors(tn,_i),s[0]=_i.x,s[4]=Yr.x,s[8]=tn.x,s[1]=_i.y,s[5]=Yr.y,s[9]=tn.y,s[2]=_i.z,s[6]=Yr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],E=n[3],M=n[7],x=n[11],T=n[15],w=s[0],b=s[4],A=s[8],S=s[12],v=s[1],R=s[5],I=s[9],P=s[13],F=s[2],H=s[6],k=s[10],V=s[14],B=s[3],Y=s[7],J=s[11],ne=s[15];return r[0]=a*w+o*v+c*F+l*B,r[4]=a*b+o*R+c*H+l*Y,r[8]=a*A+o*I+c*k+l*J,r[12]=a*S+o*P+c*V+l*ne,r[1]=u*w+h*v+d*F+p*B,r[5]=u*b+h*R+d*H+p*Y,r[9]=u*A+h*I+d*k+p*J,r[13]=u*S+h*P+d*V+p*ne,r[2]=_*w+g*v+m*F+f*B,r[6]=_*b+g*R+m*H+f*Y,r[10]=_*A+g*I+m*k+f*J,r[14]=_*S+g*P+m*V+f*ne,r[3]=E*w+M*v+x*F+T*B,r[7]=E*b+M*R+x*H+T*Y,r[11]=E*A+M*I+x*k+T*J,r[15]=E*S+M*P+x*V+T*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*p-n*c*p)+g*(+t*c*p-t*l*d+r*a*d-s*a*p+s*l*u-r*c*u)+m*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+f*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],E=h*m*l-g*d*l+g*c*p-o*m*p-h*c*f+o*d*f,M=_*d*l-u*m*l-_*c*p+a*m*p+u*c*f-a*d*f,x=u*g*l-_*h*l+_*o*p-a*g*p-u*o*f+a*h*f,T=_*h*c-u*g*c-_*o*d+a*g*d+u*o*m-a*h*m,w=t*E+n*M+s*x+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=E*b,e[1]=(g*d*r-h*m*r-g*s*p+n*m*p+h*s*f-n*d*f)*b,e[2]=(o*m*r-g*c*r+g*s*l-n*m*l-o*s*f+n*c*f)*b,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*p-n*c*p)*b,e[4]=M*b,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*f+t*d*f)*b,e[6]=(_*c*r-a*m*r-_*s*l+t*m*l+a*s*f-t*c*f)*b,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*p+t*c*p)*b,e[8]=x*b,e[9]=(_*h*r-u*g*r-_*n*p+t*g*p+u*n*f-t*h*f)*b,e[10]=(a*g*r-_*o*r+_*n*l-t*g*l-a*n*f+t*o*f)*b,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*p-t*o*p)*b,e[12]=T*b,e[13]=(u*g*s-_*h*s+_*n*d-t*g*d-u*n*m+t*h*m)*b,e[14]=(_*o*s-a*g*s-_*n*c+t*g*c+a*n*m-t*o*m)*b,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*b,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,p=r*u,_=r*h,g=a*u,m=a*h,f=o*h,E=c*l,M=c*u,x=c*h,T=n.x,w=n.y,b=n.z;return s[0]=(1-(g+f))*T,s[1]=(p+x)*T,s[2]=(_-M)*T,s[3]=0,s[4]=(p-x)*w,s[5]=(1-(d+f))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(_+M)*b,s[9]=(m-E)*b,s[10]=(1-(d+g))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=hs.set(s[0],s[1],s[2]).length();const a=hs.set(s[4],s[5],s[6]).length(),o=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);const l=1/r,u=1/a,h=1/o;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ei){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,_;if(o===ei)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===La)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ei){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*l,p=(n+s)*u;let _,g;if(o===ei)_=(a+r)*h,g=-2*h;else if(o===La)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hs=new z,yn=new Rt,px=new z(0,0,0),mx=new z(1,1,1),_i=new z,Yr=new z,tn=new z,Pu=new Rt,Ou=new Nr;class oi{constructor(e=0,t=0,n=0,s=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _x=0;const Lu=new z,ds=new Nr,Yn=new Rt,jr=new z,ir=new z,gx=new z,vx=new Nr,Uu=new z(1,0,0),Fu=new z(0,1,0),ku=new z(0,0,1),Bu={type:"added"},xx={type:"removed"},fs={type:"childadded",child:null},Mo={type:"childremoved",child:null};class un extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new z,t=new oi,n=new Nr,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new qe}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Uu,e)}rotateY(e){return this.rotateOnAxis(Fu,e)}rotateZ(e){return this.rotateOnAxis(ku,e)}translateOnAxis(e,t){return Lu.copy(e).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uu,e)}translateY(e){return this.translateOnAxis(Fu,e)}translateZ(e){return this.translateOnAxis(ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jr.copy(e):jr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(ir,jr,this.up):Yn.lookAt(jr,ir,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(Yn),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bu),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xx),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bu),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,gx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}un.DEFAULT_UP=new z(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new z,jn=new z,Eo=new z,$n=new z,ps=new z,ms=new z,Vu=new z,To=new z,bo=new z,wo=new z,Ao=new Et,Co=new Et,Ro=new Et;class Tn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mn.subVectors(e,t),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mn.subVectors(s,t),jn.subVectors(n,t),Eo.subVectors(e,t);const a=Mn.dot(Mn),o=Mn.dot(jn),c=Mn.dot(Eo),l=jn.dot(jn),u=jn.dot(Eo),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,_=(a*u-o*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(a,$n.y),c.addScaledVector(o,$n.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ao.setScalar(0),Co.setScalar(0),Ro.setScalar(0),Ao.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,n),Ro.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ao,r.x),a.addScaledVector(Co,r.y),a.addScaledVector(Ro,r.z),a}static isFrontFacing(e,t,n,s){return Mn.subVectors(n,t),jn.subVectors(e,t),Mn.cross(jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Mn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ps.subVectors(s,n),ms.subVectors(r,n),To.subVectors(e,n);const c=ps.dot(To),l=ms.dot(To);if(c<=0&&l<=0)return t.copy(n);bo.subVectors(e,s);const u=ps.dot(bo),h=ms.dot(bo);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ps,a);wo.subVectors(e,r);const p=ps.dot(wo),_=ms.dot(wo);if(_>=0&&p<=_)return t.copy(r);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(ms,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Vu.subVectors(r,s),o=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(Vu,o);const f=1/(m+g+d);return a=g*f,o=d*f,t.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},$r={h:0,s:0,l:0};function No(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=tx(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=No(a,r,e+1/3),this.g=No(a,r,e),this.b=No(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const n=Kd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Qe.workingToColorSpace(Bt.copy(this),e),Math.round(Ke(Bt.r*255,0,255))*65536+Math.round(Ke(Bt.g*255,0,255))*256+Math.round(Ke(Bt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Bt.copy(this),t);const n=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=sn){Qe.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,s=Bt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL($r);const n=ho(gi.h,$r.h,t),s=ho(gi.s,$r.s,t),r=ho(gi.l,$r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new tt;tt.NAMES=Kd;let Sx=0;class no extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=As,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nc&&(n.blendSrc=this.blendSrc),this.blendDst!==ic&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vl extends no{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new z,Zr=new Xe;let yx=0;class kn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Au,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=er(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Au&&(e.usage=this.usage),e}}class Jd extends kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qd extends kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gn extends kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mx=0;const fn=new Rt,Io=new un,_s=new z,nn=new Ir,sr=new Ir,Ot=new z;class hi extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jd(e)?Qd:Jd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Io.lookAt(e),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(nn.min,sr.min),nn.expandByPoint(Ot),Ot.addVectors(nn.max,sr.max),nn.expandByPoint(Ot)):(nn.expandByPoint(sr.min),nn.expandByPoint(sr.max))}nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ot.fromBufferAttribute(o,l),c&&(_s.fromBufferAttribute(e,l),Ot.add(_s)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let A=0;A<n.count;A++)o[A]=new z,c[A]=new z;const l=new z,u=new z,h=new z,d=new Xe,p=new Xe,_=new Xe,g=new z,m=new z;function f(A,S,v){l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,v),u.sub(l),h.sub(l),p.sub(d),_.sub(d);const R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(R),o[A].add(g),o[S].add(g),o[v].add(g),c[A].add(m),c[S].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let A=0,S=E.length;A<S;++A){const v=E[A],R=v.start,I=v.count;for(let P=R,F=R+I;P<F;P+=3)f(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const M=new z,x=new z,T=new z,w=new z;function b(A){T.fromBufferAttribute(s,A),w.copy(T);const S=o[A];M.copy(S),M.sub(T.multiplyScalar(T.dot(S))).normalize(),x.crossVectors(w,S);const R=x.dot(c[A])<0?-1:1;a.setXYZW(A,M.x,M.y,M.z,R)}for(let A=0,S=E.length;A<S;++A){const v=E[A],R=v.start,I=v.count;for(let P=R,F=R+I;P<F;P+=3)b(e.getX(P+0)),b(e.getX(P+1)),b(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new z,r=new z,a=new z,o=new z,c=new z,l=new z,u=new z,h=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*u;for(let f=0;f<u;f++)d[_++]=l[p++]}return new kn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zu=new Rt,Ui=new fx,Kr=new Bl,Gu=new z,Jr=new z,Qr=new z,ea=new z,Do=new z,ta=new z,Hu=new z,na=new z;class Rn extends un{constructor(e=new hi,t=new Vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Do.fromBufferAttribute(h,e),a?ta.addScaledVector(Do,u):ta.addScaledVector(Do.sub(t),u))}t.add(ta)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(Kr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Kr,Gu)===null||Ui.origin.distanceToSquared(Gu)>(e.far-e.near)**2))&&(zu.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(zu),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,T=M;x<T;x+=3){const w=o.getX(x),b=o.getX(x+1),A=o.getX(x+2);s=ia(this,f,e,n,l,u,h,w,b,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const E=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);s=ia(this,a,e,n,l,u,h,E,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,T=M;x<T;x+=3){const w=x,b=x+1,A=x+2;s=ia(this,f,e,n,l,u,h,w,b,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const E=m,M=m+1,x=m+2;s=ia(this,a,e,n,l,u,h,E,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ex(i,e,t,n,s,r,a,o){let c;if(e.side===Kt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ci,o),c===null)return null;na.copy(o),na.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(na);return l<t.near||l>t.far?null:{distance:l,point:na.clone(),object:i}}function ia(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Jr),i.getVertexPosition(c,Qr),i.getVertexPosition(l,ea);const u=Ex(i,e,t,n,Jr,Qr,ea,Hu);if(u){const h=new z;Tn.getBarycoord(Hu,Jr,Qr,ea,h),s&&(u.uv=Tn.getInterpolatedAttribute(s,o,c,l,h,new Xe)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,o,c,l,h,new Xe)),a&&(u.normal=Tn.getInterpolatedAttribute(a,o,c,l,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new z,materialIndex:0};Tn.getNormal(Jr,Qr,ea,d.normal),u.face=d,u.barycoord=h}return u}class Dr extends hi{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new gn(l,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(h,2));function _(g,m,f,E,M,x,T,w,b,A,S){const v=x/b,R=T/A,I=x/2,P=T/2,F=w/2,H=b+1,k=A+1;let V=0,B=0;const Y=new z;for(let J=0;J<k;J++){const ne=J*R-P;for(let Se=0;Se<H;Se++){const We=Se*v-I;Y[g]=We*E,Y[m]=ne*M,Y[f]=F,l.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[f]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(Se/b),h.push(1-J/A),V+=1}}for(let J=0;J<A;J++)for(let ne=0;ne<b;ne++){const Se=d+ne+H*J,We=d+ne+H*(J+1),X=d+(ne+1)+H*(J+1),Z=d+(ne+1)+H*J;c.push(Se,We,Z),c.push(We,X,Z),B+=6}o.addGroup(p,B,S),p+=B,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=zs(i[t]);for(const s in n)e[s]=n[s]}return e}function Tx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ef(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const pr={clone:zs,merge:Ht};var bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends no{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bx,this.fragmentShader=wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=Tx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tf extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new z,Wu=new Xe,qu=new Xe;class pn extends tf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zc*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Wu,qu),t.subVectors(qu,Wu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gs=-90,vs=1;class Ax extends un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(gs,vs,e,t);s.layers=this.layers,this.add(s);const r=new pn(gs,vs,e,t);r.layers=this.layers,this.add(r);const a=new pn(gs,vs,e,t);a.layers=this.layers,this.add(a);const o=new pn(gs,vs,e,t);o.layers=this.layers,this.add(o);const c=new pn(gs,vs,e,t);c.layers=this.layers,this.add(c);const l=new pn(gs,vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class nf extends Jt{constructor(e=[],t=ks,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cx extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new nf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Dr(5,5,5),r=new Vt({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:ni});r.uniforms.tEquirect.value=t;const a=new Rn(s,r),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Fn),new Ax(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class sa extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rx={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new sa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Nx extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oo=new z,Ix=new z,Dx=new qe;class Vi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Oo.subVectors(n,t).cross(Ix.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dx.getNormalMatrix(e),s=this.coplanarPoint(Oo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Bl,ra=new z;class sf{constructor(e=new Vi,t=new Vi,n=new Vi,s=new Vi,r=new Vi,a=new Vi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],f=s[12],E=s[13],M=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-p,x-f).normalize(),n[1].setComponents(c+r,d+l,m+p,x+f).normalize(),n[2].setComponents(c+a,d+u,m+_,x+E).normalize(),n[3].setComponents(c-a,d-u,m-_,x-E).normalize(),n[4].setComponents(c-o,d-h,m-g,x-M).normalize(),t===ei)n[5].setComponents(c+o,d+h,m+g,x+M).normalize();else if(t===La)n[5].setComponents(o,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ra.x=s.normal.x>0?e.max.x:e.min.x,ra.y=s.normal.y>0?e.max.y:e.min.y,ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rf extends Jt{constructor(e,t,n=es,s,r,a,o=Nn,c=Nn,l,u=dr,h=1){if(u!==dr&&u!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zl extends hi{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new gn(r,3)),this.setAttribute("normal",new gn(r.slice(),3)),this.setAttribute("uv",new gn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const M=new z,x=new z,T=new z;for(let w=0;w<t.length;w+=3)p(t[w+0],M),p(t[w+1],x),p(t[w+2],T),c(M,x,T,E)}function c(E,M,x,T){const w=T+1,b=[];for(let A=0;A<=w;A++){b[A]=[];const S=E.clone().lerp(x,A/w),v=M.clone().lerp(x,A/w),R=w-A;for(let I=0;I<=R;I++)I===0&&A===w?b[A][I]=S:b[A][I]=S.clone().lerp(v,I/R)}for(let A=0;A<w;A++)for(let S=0;S<2*(w-A)-1;S++){const v=Math.floor(S/2);S%2===0?(d(b[A][v+1]),d(b[A+1][v]),d(b[A][v])):(d(b[A][v+1]),d(b[A+1][v+1]),d(b[A+1][v]))}}function l(E){const M=new z;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(E),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function u(){const E=new z;for(let M=0;M<r.length;M+=3){E.x=r[M+0],E.y=r[M+1],E.z=r[M+2];const x=m(E)/2/Math.PI+.5,T=f(E)/Math.PI+.5;a.push(x,1-T)}_(),h()}function h(){for(let E=0;E<a.length;E+=6){const M=a[E+0],x=a[E+2],T=a[E+4],w=Math.max(M,x,T),b=Math.min(M,x,T);w>.9&&b<.1&&(M<.2&&(a[E+0]+=1),x<.2&&(a[E+2]+=1),T<.2&&(a[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function p(E,M){const x=E*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function _(){const E=new z,M=new z,x=new z,T=new z,w=new Xe,b=new Xe,A=new Xe;for(let S=0,v=0;S<r.length;S+=9,v+=6){E.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),w.set(a[v+0],a[v+1]),b.set(a[v+2],a[v+3]),A.set(a[v+4],a[v+5]),T.copy(E).add(M).add(x).divideScalar(3);const R=m(T);g(w,v+0,E,R),g(b,v+2,M,R),g(A,v+4,x,R)}}function g(E,M,x,T){T<0&&E.x===1&&(a[M]=E.x-1),x.x===0&&x.z===0&&(a[M]=T/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.vertices,e.indices,e.radius,e.details)}}class Gl extends zl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gl(e.radius,e.detail)}}class io extends hi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const E=f*d-a;for(let M=0;M<l;M++){const x=M*h-r;_.push(x,-E,0),g.push(0,0,1),m.push(M/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<o;E++){const M=E+l*f,x=E+l*(f+1),T=E+1+l*(f+1),w=E+1+l*f;p.push(M,x,w),p.push(x,T,w)}this.setIndex(p),this.setAttribute("position",new gn(_,3)),this.setAttribute("normal",new gn(g,3)),this.setAttribute("uv",new gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}class Px extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ox extends no{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lx extends no{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class af extends tf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ux extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class of{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xu(){return performance.now()}function Yu(i,e,t,n){const s=Fx(n);switch(t){case Gd:return i*e;case Wd:return i*e/s.components*s.byteLength;case Ll:return i*e/s.components*s.byteLength;case qd:return i*e*2/s.components*s.byteLength;case Ul:return i*e*2/s.components*s.byteLength;case Hd:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case Fl:return i*e*4/s.components*s.byteLength;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ma:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:case vc:return Math.max(i,16)*Math.max(e,8)/4;case mc:case gc:return Math.max(i,8)*Math.max(e,8)/2;case xc:case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ga:case Uc:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xd:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Bc:case Vc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fx(i){switch(i){case ai:case Bd:return{byteLength:1,components:1};case ur:case Vd:case ii:return{byteLength:2,components:1};case Pl:case Ol:return{byteLength:2,components:4};case es:case Dl:case Qn:return{byteLength:4,components:1};case zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function kx(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],g=h[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const g=h[p];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Bx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mS="gl_FragColor = linearToOutputTexel( gl_FragColor );",_S=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ES=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,US=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$S=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,my=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,My=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ey=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,by=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ay=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Py=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,By=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_M=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Bx,alphahash_pars_fragment:Vx,alphamap_fragment:zx,alphamap_pars_fragment:Gx,alphatest_fragment:Hx,alphatest_pars_fragment:Wx,aomap_fragment:qx,aomap_pars_fragment:Xx,batching_pars_vertex:Yx,batching_vertex:jx,begin_vertex:$x,beginnormal_vertex:Zx,bsdfs:Kx,iridescence_fragment:Jx,bumpmap_pars_fragment:Qx,clipping_planes_fragment:eS,clipping_planes_pars_fragment:tS,clipping_planes_pars_vertex:nS,clipping_planes_vertex:iS,color_fragment:sS,color_pars_fragment:rS,color_pars_vertex:aS,color_vertex:oS,common:cS,cube_uv_reflection_fragment:lS,defaultnormal_vertex:uS,displacementmap_pars_vertex:hS,displacementmap_vertex:dS,emissivemap_fragment:fS,emissivemap_pars_fragment:pS,colorspace_fragment:mS,colorspace_pars_fragment:_S,envmap_fragment:gS,envmap_common_pars_fragment:vS,envmap_pars_fragment:xS,envmap_pars_vertex:SS,envmap_physical_pars_fragment:IS,envmap_vertex:yS,fog_vertex:MS,fog_pars_vertex:ES,fog_fragment:TS,fog_pars_fragment:bS,gradientmap_pars_fragment:wS,lightmap_pars_fragment:AS,lights_lambert_fragment:CS,lights_lambert_pars_fragment:RS,lights_pars_begin:NS,lights_toon_fragment:DS,lights_toon_pars_fragment:PS,lights_phong_fragment:OS,lights_phong_pars_fragment:LS,lights_physical_fragment:US,lights_physical_pars_fragment:FS,lights_fragment_begin:kS,lights_fragment_maps:BS,lights_fragment_end:VS,logdepthbuf_fragment:zS,logdepthbuf_pars_fragment:GS,logdepthbuf_pars_vertex:HS,logdepthbuf_vertex:WS,map_fragment:qS,map_pars_fragment:XS,map_particle_fragment:YS,map_particle_pars_fragment:jS,metalnessmap_fragment:$S,metalnessmap_pars_fragment:ZS,morphinstance_vertex:KS,morphcolor_vertex:JS,morphnormal_vertex:QS,morphtarget_pars_vertex:ey,morphtarget_vertex:ty,normal_fragment_begin:ny,normal_fragment_maps:iy,normal_pars_fragment:sy,normal_pars_vertex:ry,normal_vertex:ay,normalmap_pars_fragment:oy,clearcoat_normal_fragment_begin:cy,clearcoat_normal_fragment_maps:ly,clearcoat_pars_fragment:uy,iridescence_pars_fragment:hy,opaque_fragment:dy,packing:fy,premultiplied_alpha_fragment:py,project_vertex:my,dithering_fragment:_y,dithering_pars_fragment:gy,roughnessmap_fragment:vy,roughnessmap_pars_fragment:xy,shadowmap_pars_fragment:Sy,shadowmap_pars_vertex:yy,shadowmap_vertex:My,shadowmask_pars_fragment:Ey,skinbase_vertex:Ty,skinning_pars_vertex:by,skinning_vertex:wy,skinnormal_vertex:Ay,specularmap_fragment:Cy,specularmap_pars_fragment:Ry,tonemapping_fragment:Ny,tonemapping_pars_fragment:Iy,transmission_fragment:Dy,transmission_pars_fragment:Py,uv_pars_fragment:Oy,uv_pars_vertex:Ly,uv_vertex:Uy,worldpos_vertex:Fy,background_vert:ky,background_frag:By,backgroundCube_vert:Vy,backgroundCube_frag:zy,cube_vert:Gy,cube_frag:Hy,depth_vert:Wy,depth_frag:qy,distanceRGBA_vert:Xy,distanceRGBA_frag:Yy,equirect_vert:jy,equirect_frag:$y,linedashed_vert:Zy,linedashed_frag:Ky,meshbasic_vert:Jy,meshbasic_frag:Qy,meshlambert_vert:eM,meshlambert_frag:tM,meshmatcap_vert:nM,meshmatcap_frag:iM,meshnormal_vert:sM,meshnormal_frag:rM,meshphong_vert:aM,meshphong_frag:oM,meshphysical_vert:cM,meshphysical_frag:lM,meshtoon_vert:uM,meshtoon_frag:hM,points_vert:dM,points_frag:fM,shadow_vert:pM,shadow_frag:mM,sprite_vert:_M,sprite_frag:gM},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Un={basic:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ht([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ht([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ht([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ht([me.points,me.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ht([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ht([me.common,me.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ht([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ht([me.sprite,me.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Ht([me.common,me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Ht([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Un.physical={uniforms:Ht([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const aa={r:0,b:0,g:0},ki=new oi,vM=new Rt;function xM(i,e,t,n,s,r,a){const o=new tt(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function g(M){let x=!1;const T=_(M);T===null?f(o,c):T&&T.isColor&&(f(T,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const T=_(x);T&&(T.isCubeTexture||T.mapping===to)?(u===void 0&&(u=new Rn(new Dr(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:zs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ki.copy(x.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vM.makeRotationFromEuler(ki)),u.material.toneMapped=Qe.getTransfer(T.colorSpace)!==ot,(h!==T||d!==T.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Rn(new io(2,2),new Vt({name:"BackgroundMaterial",uniforms:zs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(T.colorSpace)!==ot,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,d=T.version,p=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,x){M.getRGB(aa,ef(i)),n.buffers.color.setClear(aa.r,aa.g,aa.b,x,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),c=x,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:g,addToRenderList:m,dispose:E}}function SM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(v,R,I,P,F){let H=!1;const k=h(P,I,R);r!==k&&(r=k,l(r.object)),H=p(v,P,I,F),H&&_(v,P,I,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,x(v,R,I,P),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,R,I){const P=I.wireframe===!0;let F=n[v.id];F===void 0&&(F={},n[v.id]=F);let H=F[R.id];H===void 0&&(H={},F[R.id]=H);let k=H[P];return k===void 0&&(k=d(c()),H[P]=k),k}function d(v){const R=[],I=[],P=[];for(let F=0;F<t;F++)R[F]=0,I[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:P,object:v,attributes:{},index:null}}function p(v,R,I,P){const F=r.attributes,H=R.attributes;let k=0;const V=I.getAttributes();for(const B in V)if(V[B].location>=0){const J=F[B];let ne=H[B];if(ne===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor)),J===void 0||J.attribute!==ne||ne&&J.data!==ne.data)return!0;k++}return r.attributesNum!==k||r.index!==P}function _(v,R,I,P){const F={},H=R.attributes;let k=0;const V=I.getAttributes();for(const B in V)if(V[B].location>=0){let J=H[B];J===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(J=v.instanceColor));const ne={};ne.attribute=J,J&&J.data&&(ne.data=J.data),F[B]=ne,k++}r.attributes=F,r.attributesNum=k,r.index=P}function g(){const v=r.newAttributes;for(let R=0,I=v.length;R<I;R++)v[R]=0}function m(v){f(v,0)}function f(v,R){const I=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;I[v]=1,P[v]===0&&(i.enableVertexAttribArray(v),P[v]=1),F[v]!==R&&(i.vertexAttribDivisor(v,R),F[v]=R)}function E(){const v=r.newAttributes,R=r.enabledAttributes;for(let I=0,P=R.length;I<P;I++)R[I]!==v[I]&&(i.disableVertexAttribArray(I),R[I]=0)}function M(v,R,I,P,F,H,k){k===!0?i.vertexAttribIPointer(v,R,I,F,H):i.vertexAttribPointer(v,R,I,P,F,H)}function x(v,R,I,P){g();const F=P.attributes,H=I.getAttributes(),k=R.defaultAttributeValues;for(const V in H){const B=H[V];if(B.location>=0){let Y=F[V];if(Y===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Y=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Y=v.instanceColor)),Y!==void 0){const J=Y.normalized,ne=Y.itemSize,Se=e.get(Y);if(Se===void 0)continue;const We=Se.buffer,X=Se.type,Z=Se.bytesPerElement,de=X===i.INT||X===i.UNSIGNED_INT||Y.gpuType===Dl;if(Y.isInterleavedBufferAttribute){const oe=Y.data,Q=oe.stride,je=Y.offset;if(oe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<B.locationSize;Ne++)f(B.location+Ne,oe.meshPerAttribute);v.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ne=0;Ne<B.locationSize;Ne++)m(B.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,We);for(let Ne=0;Ne<B.locationSize;Ne++)M(B.location+Ne,ne/B.locationSize,X,J,Q*Z,(je+ne/B.locationSize*Ne)*Z,de)}else{if(Y.isInstancedBufferAttribute){for(let oe=0;oe<B.locationSize;oe++)f(B.location+oe,Y.meshPerAttribute);v.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let oe=0;oe<B.locationSize;oe++)m(B.location+oe);i.bindBuffer(i.ARRAY_BUFFER,We);for(let oe=0;oe<B.locationSize;oe++)M(B.location+oe,ne/B.locationSize,X,J,ne*Z,ne/B.locationSize*oe*Z,de)}}else if(k!==void 0){const J=k[V];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(B.location,J);break;case 3:i.vertexAttrib3fv(B.location,J);break;case 4:i.vertexAttrib4fv(B.location,J);break;default:i.vertexAttrib1fv(B.location,J)}}}}E()}function T(){A();for(const v in n){const R=n[v];for(const I in R){const P=R[I];for(const F in P)u(P[F].object),delete P[F];delete R[I]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const I in R){const P=R[I];for(const F in P)u(P[F].object),delete P[F];delete R[I]}delete n[v.id]}function b(v){for(const R in n){const I=n[R];if(I[v.id]===void 0)continue;const P=I[v.id];for(const F in P)u(P[F].object),delete P[F];delete I[v.id]}}function A(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function yM(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)a(l[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function MM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==Cn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const A=b===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ai&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Qn&&!A)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:T,maxSamples:w}}function EM(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Vi,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const E=r?0:n,M=E*4;let x=f.clippingState||null;c.value=x,x=u(_,d,M,p);for(let T=0;T!==M;++T)x[T]=t[T];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const f=p+g*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,x=p;M!==g;++M,x+=4)a.copy(h[M]).applyMatrix4(E,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function TM(i){let e=new WeakMap;function t(a,o){return o===hc?a.mapping=ks:o===dc&&(a.mapping=Bs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===hc||o===dc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Cx(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const bs=4,ju=[.125,.215,.35,.446,.526,.582],Hi=20,Lo=new af,$u=new tt;let Uo=null,Fo=0,ko=0,Bo=!1;const zi=(1+Math.sqrt(5))/2,xs=1/zi,Zu=[new z(-zi,xs,0),new z(zi,xs,0),new z(-xs,0,zi),new z(xs,0,zi),new z(0,zi,-xs),new z(0,zi,xs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],bM=new z;class Ku{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=bM}=r;Uo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uo,Fo,ko),this._renderer.xr.enabled=Bo,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:ii,format:Cn,colorSpace:Vs,depthBuffer:!1},s=Ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wM(r)),this._blurMaterial=AM(r,e,t)}return s}_compileMaterial(e){const t=new Rn(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,n,s,r){const c=new pn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor($u),h.toneMapping=Mi,h.autoClear=!1;const _=new Vl({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new Rn(new Dr,_);let m=!1;const f=e.background;f?f.isColor&&(_.color.copy(f),e.background=null,m=!0):(_.color.copy($u),m=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):M===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));const x=this._cubeSize;oa(s,M*x,E>2?x:0,x,x),h.setRenderTarget(s),m&&h.render(g,c),h.render(e,c)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ks||e.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Rn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;oa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Lo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zu[(s-r-1)%Zu.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Rn(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const f=[];let E=0;for(let b=0;b<Hi;++b){const A=b/g,S=Math.exp(-A*A/2);f.push(S),b===0?E+=S:b<m&&(E+=2*S)}for(let b=0;b<f.length;b++)f[b]=f[b]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const x=this._sizeLods[s],T=3*x*(s>M-bs?s-M+bs:0),w=4*(this._cubeSize-x);oa(t,T,w,3*x,2*x),c.setRenderTarget(t),c.render(h,Lo)}}function wM(i){const e=[],t=[],n=[];let s=i;const r=i-bs+1+ju.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-bs?c=ju[a-i+bs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,f=1,E=new Float32Array(g*_*p),M=new Float32Array(m*_*p),x=new Float32Array(f*_*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,A=w>2?0:-1,S=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];E.set(S,g*_*w),M.set(d,m*_*w);const v=[w,w,w,w,w,w];x.set(v,f*_*w)}const T=new hi;T.setAttribute("position",new kn(E,g)),T.setAttribute("uv",new kn(M,m)),T.setAttribute("faceIndex",new kn(x,f)),e.push(T),s>bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ju(i,e,t){const n=new In(i,e,t);return n.texture.mapping=to,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function AM(i,e,t){const n=new Float32Array(Hi),s=new z(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Qu(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function eh(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CM(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===hc||c===dc,u=c===ks||c===Bs;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ku(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Ku(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function RM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function NM(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const E=p.array;g=p.version;for(let M=0,x=E.length;M<x;M+=3){const T=E[M+0],w=E[M+1],b=E[M+2];d.push(T,w,w,b,b,T)}}else if(_!==void 0){const E=_.array;g=_.version;for(let M=0,x=E.length/3-1;M<x;M+=3){const T=M+0,w=M+1,b=M+2;d.push(T,w,w,b,b,T)}}else return;const m=new(jd(d)?Qd:Jd)(d,1);m.version=g;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function IM(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*a,_),t.update(p,n,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function h(d,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,_);let f=0;for(let E=0;E<_;E++)f+=p[E]*g[E];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function DM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function PM(i,e,t){const n=new WeakMap,s=new Et;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let v=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let T=o.attributes.position.count*x,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const b=new Float32Array(T*w*4*h),A=new $d(b,T,w,h);A.type=Qn,A.needsUpdate=!0;const S=x*4;for(let R=0;R<h;R++){const I=f[R],P=E[R],F=M[R],H=T*w*4*R;for(let k=0;k<I.count;k++){const V=k*S;_===!0&&(s.fromBufferAttribute(I,k),b[H+V+0]=s.x,b[H+V+1]=s.y,b[H+V+2]=s.z,b[H+V+3]=0),g===!0&&(s.fromBufferAttribute(P,k),b[H+V+4]=s.x,b[H+V+5]=s.y,b[H+V+6]=s.z,b[H+V+7]=0),m===!0&&(s.fromBufferAttribute(F,k),b[H+V+8]=s.x,b[H+V+9]=s.y,b[H+V+10]=s.z,b[H+V+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new Xe(T,w)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function OM(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const lf=new Jt,th=new rf(1,1),uf=new $d,hf=new hx,df=new nf,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),ah=new Float32Array(4);function Ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=nh[s];if(r===void 0&&(r=new Float32Array(s),nh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function so(i,e){let t=ih[e];t===void 0&&(t=new Int32Array(e),ih[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function LM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function UM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function FM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function kM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function BM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,n))return;ah.set(n),i.uniformMatrix2fv(this.addr,!1,ah),Pt(t,n)}}function VM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),Pt(t,n)}}function zM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,n))return;sh.set(n),i.uniformMatrix4fv(this.addr,!1,sh),Pt(t,n)}}function GM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function HM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function WM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function qM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function XM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function YM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function jM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function $M(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function ZM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(th.compareFunction=Yd,r=th):r=lf,t.setTexture2D(e||r,s)}function KM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hf,s)}function JM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||df,s)}function QM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||uf,s)}function eE(i){switch(i){case 5126:return LM;case 35664:return UM;case 35665:return FM;case 35666:return kM;case 35674:return BM;case 35675:return VM;case 35676:return zM;case 5124:case 35670:return GM;case 35667:case 35671:return HM;case 35668:case 35672:return WM;case 35669:case 35673:return qM;case 5125:return XM;case 36294:return YM;case 36295:return jM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return ZM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return QM}}function tE(i,e){i.uniform1fv(this.addr,e)}function nE(i,e){const t=Ks(e,this.size,2);i.uniform2fv(this.addr,t)}function iE(i,e){const t=Ks(e,this.size,3);i.uniform3fv(this.addr,t)}function sE(i,e){const t=Ks(e,this.size,4);i.uniform4fv(this.addr,t)}function rE(i,e){const t=Ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function aE(i,e){const t=Ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function oE(i,e){const t=Ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cE(i,e){i.uniform1iv(this.addr,e)}function lE(i,e){i.uniform2iv(this.addr,e)}function uE(i,e){i.uniform3iv(this.addr,e)}function hE(i,e){i.uniform4iv(this.addr,e)}function dE(i,e){i.uniform1uiv(this.addr,e)}function fE(i,e){i.uniform2uiv(this.addr,e)}function pE(i,e){i.uniform3uiv(this.addr,e)}function mE(i,e){i.uniform4uiv(this.addr,e)}function _E(i,e,t){const n=this.cache,s=e.length,r=so(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||lf,r[a])}function gE(i,e,t){const n=this.cache,s=e.length,r=so(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hf,r[a])}function vE(i,e,t){const n=this.cache,s=e.length,r=so(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||df,r[a])}function xE(i,e,t){const n=this.cache,s=e.length,r=so(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||uf,r[a])}function SE(i){switch(i){case 5126:return tE;case 35664:return nE;case 35665:return iE;case 35666:return sE;case 35674:return rE;case 35675:return aE;case 35676:return oE;case 5124:case 35670:return cE;case 35667:case 35671:return lE;case 35668:case 35672:return uE;case 35669:case 35673:return hE;case 5125:return dE;case 36294:return fE;case 36295:return pE;case 36296:return mE;case 35678:case 36198:case 36298:case 36306:case 35682:return _E;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return vE;case 36289:case 36303:case 36311:case 36292:return xE}}class yE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eE(t.type)}}class ME{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SE(t.type)}}class EE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function oh(i,e){i.seq.push(e),i.map[e.id]=e}function TE(i,e,t){const n=i.name,s=n.length;for(Vo.lastIndex=0;;){const r=Vo.exec(n),a=Vo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){oh(t,l===void 0?new yE(o,i,e):new ME(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new EE(o),oh(t,h)),t=h}}}class va{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);TE(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function ch(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bE=37297;let wE=0;function AE(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const lh=new qe;function CE(i){Qe._getMatrix(lh,Qe.workingColorSpace,i);const e=`mat3( ${lh.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Oa:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function uh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+AE(i.getShaderSource(e),a)}else return s}function RE(i,e){const t=CE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function NE(i,e){let t;switch(e){case Id:t="Linear";break;case Dd:t="Reinhard";break;case Pd:t="Cineon";break;case Od:t="ACESFilmic";break;case Ud:t="AgX";break;case Fd:t="Neutral";break;case Ld:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ca=new z;function IE(){Qe.getLuminanceCoefficients(ca);const i=ca.x.toFixed(4),e=ca.y.toFixed(4),t=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function PE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function OE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rr(i){return i!==""}function hh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(i){return i.replace(LE,FE)}const UE=new Map;function FE(i,e){let t=Ye[e];if(t===void 0){const n=UE.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gc(t)}const kE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(kE,BE)}function BE(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ph(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===M0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function zE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ks:case Bs:e="ENVMAP_TYPE_CUBE";break;case to:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function HE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nd:e="ENVMAP_BLENDING_MULTIPLY";break;case z0:e="ENVMAP_BLENDING_MIX";break;case G0:e="ENVMAP_BLENDING_ADD";break}return e}function WE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qE(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=VE(t),l=zE(t),u=GE(t),h=HE(t),d=WE(t),p=DE(t),_=PE(r),g=s.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rr).join(`
`),f.length>0&&(f+=`
`)):(m=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),f=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Mi?NE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,RE("linearToOutputTexel",t.outputColorSpace),IE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=Gc(a),a=hh(a,t),a=dh(a,t),o=Gc(o),o=hh(o,t),o=dh(o,t),a=fh(a),o=fh(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=E+m+a,x=E+f+o,T=ch(s,s.VERTEX_SHADER,M),w=ch(s,s.FRAGMENT_SHADER,x);s.attachShader(g,T),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function b(R){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(g).trim(),P=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(w).trim();let H=!0,k=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,T,w);else{const V=uh(s,T,"vertex"),B=uh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+V+`
`+B)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(P===""||F==="")&&(k=!1);k&&(R.diagnostics={runnable:H,programLog:I,vertexShader:{log:P,prefix:m},fragmentShader:{log:F,prefix:f}})}s.deleteShader(T),s.deleteShader(w),A=new va(s,g),S=OE(s,g)}let A;this.getUniforms=function(){return A===void 0&&b(this),A};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,bE)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=w,this}let XE=0;class YE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jE(e),t.set(e,n)),n}}class jE{constructor(e){this.id=XE++,this.code=e,this.usedTimes=0}}function $E(i,e,t,n,s,r,a){const o=new Zd,c=new YE,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,R,I,P){const F=I.fog,H=P.geometry,k=S.isMeshStandardMaterial?I.environment:null,V=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),B=V&&V.mapping===to?V.image.height:null,Y=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ne=J!==void 0?J.length:0;let Se=0;H.morphAttributes.position!==void 0&&(Se=1),H.morphAttributes.normal!==void 0&&(Se=2),H.morphAttributes.color!==void 0&&(Se=3);let We,X,Z,de;if(Y){const rt=Un[Y];We=rt.vertexShader,X=rt.fragmentShader}else We=S.vertexShader,X=S.fragmentShader,c.update(S),Z=c.getVertexShaderID(S),de=c.getFragmentShaderID(S);const oe=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),je=P.isInstancedMesh===!0,Ne=P.isBatchedMesh===!0,nt=!!S.map,it=!!S.matcap,Je=!!V,D=!!S.aoMap,ce=!!S.lightMap,fe=!!S.bumpMap,Ve=!!S.normalMap,he=!!S.displacementMap,Ee=!!S.emissiveMap,_e=!!S.metalnessMap,De=!!S.roughnessMap,lt=S.anisotropy>0,N=S.clearcoat>0,y=S.dispersion>0,G=S.iridescence>0,K=S.sheen>0,te=S.transmission>0,j=lt&&!!S.anisotropyMap,Ce=N&&!!S.clearcoatMap,ge=N&&!!S.clearcoatNormalMap,Ae=N&&!!S.clearcoatRoughnessMap,Re=G&&!!S.iridescenceMap,ie=G&&!!S.iridescenceThicknessMap,ye=K&&!!S.sheenColorMap,Le=K&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,pe=!!S.specularColorMap,Ge=!!S.specularIntensityMap,O=te&&!!S.transmissionMap,ve=te&&!!S.thicknessMap,se=!!S.gradientMap,Te=!!S.alphaMap,re=S.alphaTest>0,ee=!!S.alphaHash,be=!!S.extensions;let He=Mi;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(He=i.toneMapping);const ft={shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:We,fragmentShader:X,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&P._colorsTexture!==null,instancing:je,instancingColor:je&&P.instanceColor!==null,instancingMorph:je&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Vs,alphaToCoverage:!!S.alphaToCoverage,map:nt,matcap:it,envMap:Je,envMapMode:Je&&V.mapping,envMapCubeUVHeight:B,aoMap:D,lightMap:ce,bumpMap:fe,normalMap:Ve,displacementMap:d&&he,emissiveMap:Ee,normalMapObjectSpace:Ve&&S.normalMapType===Y0,normalMapTangentSpace:Ve&&S.normalMapType===X0,metalnessMap:_e,roughnessMap:De,anisotropy:lt,anisotropyMap:j,clearcoat:N,clearcoatMap:Ce,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ae,dispersion:y,iridescence:G,iridescenceMap:Re,iridescenceThicknessMap:ie,sheen:K,sheenColorMap:ye,sheenRoughnessMap:Le,specularMap:Oe,specularColorMap:pe,specularIntensityMap:Ge,transmission:te,transmissionMap:O,thicknessMap:ve,gradientMap:se,opaque:S.transparent===!1&&S.blending===As&&S.alphaToCoverage===!1,alphaMap:Te,alphaTest:re,alphaHash:ee,combine:S.combine,mapUv:nt&&g(S.map.channel),aoMapUv:D&&g(S.aoMap.channel),lightMapUv:ce&&g(S.lightMap.channel),bumpMapUv:fe&&g(S.bumpMap.channel),normalMapUv:Ve&&g(S.normalMap.channel),displacementMapUv:he&&g(S.displacementMap.channel),emissiveMapUv:Ee&&g(S.emissiveMap.channel),metalnessMapUv:_e&&g(S.metalnessMap.channel),roughnessMapUv:De&&g(S.roughnessMap.channel),anisotropyMapUv:j&&g(S.anisotropyMap.channel),clearcoatMapUv:Ce&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(S.sheenRoughnessMap.channel),specularMapUv:Oe&&g(S.specularMap.channel),specularColorMapUv:pe&&g(S.specularColorMap.channel),specularIntensityMapUv:Ge&&g(S.specularIntensityMap.channel),transmissionMapUv:O&&g(S.transmissionMap.channel),thicknessMapUv:ve&&g(S.thicknessMap.channel),alphaMapUv:Te&&g(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ve||lt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!H.attributes.uv&&(nt||Te),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Q,skinning:P.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Se,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:nt&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===ot,decodeVideoTextureEmissive:Ee&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Jn,flipSided:S.side===Kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:be&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&S.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function f(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)v.push(R),v.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(E(v,S),M(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function E(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function M(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const v=_[S.type];let R;if(v){const I=Un[v];R=pr.clone(I.uniforms)}else R=S.uniforms;return R}function T(S,v){let R;for(let I=0,P=u.length;I<P;I++){const F=u[I];if(F.cacheKey===v){R=F,++R.usedTimes;break}}return R===void 0&&(R=new qE(i,v,S,r),u.push(R)),R}function w(S){if(--S.usedTimes===0){const v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function b(S){c.remove(S)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:T,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:A}}function ZE(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function KE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _h(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,p,_,g,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function o(h,d,p,_,g,m){const f=a(h,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(h,d,p,_,g,m){const f=a(h,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||KE),n.length>1&&n.sort(d||mh),s.length>1&&s.sort(d||mh)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function JE(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new _h,i.set(n,[a])):s>=r.length?(a=new _h,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function QE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new tt};break;case"SpotLight":t={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function eT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tT=0;function nT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iT(i){const e=new QE,t=eT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const s=new z,r=new Rt,a=new Rt;function o(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,E=0,M=0,x=0,T=0,w=0,b=0;l.sort(nT);for(let S=0,v=l.length;S<v;S++){const R=l[S],I=R.color,P=R.intensity,F=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=I.r*P,h+=I.g*P,d+=I.b*P;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],P);b++}else if(R.isDirectionalLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const V=R.shadow,B=t.get(R);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=R.shadow.matrix,E++}n.directional[p]=k,p++}else if(R.isSpotLight){const k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(I).multiplyScalar(P),k.distance=F,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[g]=k;const V=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,V.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[g]=V.matrix,R.castShadow){const B=t.get(R);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=H,x++}g++}else if(R.isRectAreaLight){const k=e.get(R);k.color.copy(I).multiplyScalar(P),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const V=R.shadow,B=t.get(R);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,B.shadowCameraNear=V.camera.near,B.shadowCameraFar=V.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=H,n.pointShadowMatrix[_]=R.shadow.matrix,M++}n.point[_]=k,_++}else if(R.isHemisphereLight){const k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(P),k.groundColor.copy(R.groundColor).multiplyScalar(P),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==p||A.pointLength!==_||A.spotLength!==g||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==E||A.numPointShadows!==M||A.numSpotShadows!==x||A.numSpotMaps!==T||A.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,A.directionalLength=p,A.pointLength=_,A.spotLength=g,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=E,A.numPointShadows=M,A.numSpotShadows=x,A.numSpotMaps=T,A.numLightProbes=b,n.version=tT++)}function c(l,u){let h=0,d=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const M=l[f];if(M.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function gh(i){const e=new iT(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function sT(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new gh(i),e.set(s,[o])):r>=a.length?(o=new gh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const rT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oT(i,e,t){let n=new sf;const s=new Xe,r=new Xe,a=new Et,o=new Ox({depthPacking:q0}),c=new Lx,l={},u=t.maxTextureSize,h={[Ci]:Kt,[Kt]:Ci,[Jn]:Jn},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:rT,fragmentShader:aT}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new hi;_.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Rn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rd;let f=this.type;this.render=function(w,b,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ni),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const P=f!==Zn&&this.type===Zn,F=f===Zn&&this.type!==Zn;for(let H=0,k=w.length;H<k;H++){const V=w[H],B=V.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Y=B.getFrameExtents();if(s.multiply(Y),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,B.mapSize.y=r.y)),B.map===null||P===!0||F===!0){const ne=this.type!==Zn?{minFilter:Nn,magFilter:Nn}:{};B.map!==null&&B.map.dispose(),B.map=new In(s.x,s.y,ne),B.map.texture.name=V.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const J=B.getViewportCount();for(let ne=0;ne<J;ne++){const Se=B.getViewport(ne);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),I.viewport(a),B.updateMatrices(V,ne),n=B.getFrustum(),x(b,A,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===Zn&&E(B,A),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,R)};function E(w,b){const A=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new In(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,A,d,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,A,p,g,null)}function M(w,b,A,S){let v=null;const R=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)v=R;else if(v=A.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const I=v.uuid,P=b.uuid;let F=l[I];F===void 0&&(F={},l[I]=F);let H=F[P];H===void 0&&(H=v.clone(),F[P]=H,b.addEventListener("dispose",T)),v=H}if(v.visible=b.visible,v.wireframe=b.wireframe,S===Zn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=i.properties.get(v);I.light=A}return v}function x(w,b,A,S,v){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const P=e.update(w),F=w.material;if(Array.isArray(F)){const H=P.groups;for(let k=0,V=H.length;k<V;k++){const B=H[k],Y=F[B.materialIndex];if(Y&&Y.visible){const J=M(w,Y,S,v);w.onBeforeShadow(i,w,b,A,P,J,B),i.renderBufferDirect(A,null,P,J,w,B),w.onAfterShadow(i,w,b,A,P,J,B)}}}else if(F.visible){const H=M(w,F,S,v);w.onBeforeShadow(i,w,b,A,P,H,null),i.renderBufferDirect(A,null,P,H,w,null),w.onAfterShadow(i,w,b,A,P,H,null)}}const I=w.children;for(let P=0,F=I.length;P<F;P++)x(I[P],b,A,S,v)}function T(w){w.target.removeEventListener("dispose",T);for(const A in l){const S=l[A],v=w.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const cT={[sc]:rc,[ac]:lc,[oc]:uc,[Fs]:cc,[rc]:sc,[lc]:ac,[uc]:oc,[cc]:Fs};function lT(i,e){function t(){let O=!1;const ve=new Et;let se=null;const Te=new Et(0,0,0,0);return{setMask:function(re){se!==re&&!O&&(i.colorMask(re,re,re,re),se=re)},setLocked:function(re){O=re},setClear:function(re,ee,be,He,ft){ft===!0&&(re*=He,ee*=He,be*=He),ve.set(re,ee,be,He),Te.equals(ve)===!1&&(i.clearColor(re,ee,be,He),Te.copy(ve))},reset:function(){O=!1,se=null,Te.set(-1,0,0,0)}}}function n(){let O=!1,ve=!1,se=null,Te=null,re=null;return{setReversed:function(ee){if(ve!==ee){const be=e.get("EXT_clip_control");ee?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ve=ee;const He=re;re=null,this.setClear(He)}},getReversed:function(){return ve},setTest:function(ee){ee?oe(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(ee){se!==ee&&!O&&(i.depthMask(ee),se=ee)},setFunc:function(ee){if(ve&&(ee=cT[ee]),Te!==ee){switch(ee){case sc:i.depthFunc(i.NEVER);break;case rc:i.depthFunc(i.ALWAYS);break;case ac:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case oc:i.depthFunc(i.EQUAL);break;case cc:i.depthFunc(i.GEQUAL);break;case lc:i.depthFunc(i.GREATER);break;case uc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=ee}},setLocked:function(ee){O=ee},setClear:function(ee){re!==ee&&(ve&&(ee=1-ee),i.clearDepth(ee),re=ee)},reset:function(){O=!1,se=null,Te=null,re=null,ve=!1}}}function s(){let O=!1,ve=null,se=null,Te=null,re=null,ee=null,be=null,He=null,ft=null;return{setTest:function(rt){O||(rt?oe(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(rt){ve!==rt&&!O&&(i.stencilMask(rt),ve=rt)},setFunc:function(rt,vn,Hn){(se!==rt||Te!==vn||re!==Hn)&&(i.stencilFunc(rt,vn,Hn),se=rt,Te=vn,re=Hn)},setOp:function(rt,vn,Hn){(ee!==rt||be!==vn||He!==Hn)&&(i.stencilOp(rt,vn,Hn),ee=rt,be=vn,He=Hn)},setLocked:function(rt){O=rt},setClear:function(rt){ft!==rt&&(i.clearStencil(rt),ft=rt)},reset:function(){O=!1,ve=null,se=null,Te=null,re=null,ee=null,be=null,He=null,ft=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,E=null,M=null,x=null,T=null,w=null,b=new tt(0,0,0),A=0,S=!1,v=null,R=null,I=null,P=null,F=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,V=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=V>=2);let Y=null,J={};const ne=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),We=new Et().fromArray(ne),X=new Et().fromArray(Se);function Z(O,ve,se,Te){const re=new Uint8Array(4),ee=i.createTexture();i.bindTexture(O,ee),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<se;be++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(ve+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return ee}const de={};de[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(Fs),fe(!1),Ve(Eu),oe(i.CULL_FACE),D(ni);function oe(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Q(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function je(O,ve){return h[O]!==ve?(i.bindFramebuffer(O,ve),h[O]=ve,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ne(O,ve){let se=p,Te=!1;if(O){se=d.get(ve),se===void 0&&(se=[],d.set(ve,se));const re=O.textures;if(se.length!==re.length||se[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,be=re.length;ee<be;ee++)se[ee]=i.COLOR_ATTACHMENT0+ee;se.length=re.length,Te=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,Te=!0);Te&&i.drawBuffers(se)}function nt(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const it={[Gi]:i.FUNC_ADD,[T0]:i.FUNC_SUBTRACT,[b0]:i.FUNC_REVERSE_SUBTRACT};it[w0]=i.MIN,it[A0]=i.MAX;const Je={[C0]:i.ZERO,[R0]:i.ONE,[N0]:i.SRC_COLOR,[nc]:i.SRC_ALPHA,[U0]:i.SRC_ALPHA_SATURATE,[O0]:i.DST_COLOR,[D0]:i.DST_ALPHA,[I0]:i.ONE_MINUS_SRC_COLOR,[ic]:i.ONE_MINUS_SRC_ALPHA,[L0]:i.ONE_MINUS_DST_COLOR,[P0]:i.ONE_MINUS_DST_ALPHA,[F0]:i.CONSTANT_COLOR,[k0]:i.ONE_MINUS_CONSTANT_COLOR,[B0]:i.CONSTANT_ALPHA,[V0]:i.ONE_MINUS_CONSTANT_ALPHA};function D(O,ve,se,Te,re,ee,be,He,ft,rt){if(O===ni){g===!0&&(Q(i.BLEND),g=!1);return}if(g===!1&&(oe(i.BLEND),g=!0),O!==E0){if(O!==m||rt!==S){if((f!==Gi||x!==Gi)&&(i.blendEquation(i.FUNC_ADD),f=Gi,x=Gi),rt)switch(O){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tc:i.blendFunc(i.ONE,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,M=null,T=null,w=null,b.set(0,0,0),A=0,m=O,S=rt}return}re=re||ve,ee=ee||se,be=be||Te,(ve!==f||re!==x)&&(i.blendEquationSeparate(it[ve],it[re]),f=ve,x=re),(se!==E||Te!==M||ee!==T||be!==w)&&(i.blendFuncSeparate(Je[se],Je[Te],Je[ee],Je[be]),E=se,M=Te,T=ee,w=be),(He.equals(b)===!1||ft!==A)&&(i.blendColor(He.r,He.g,He.b,ft),b.copy(He),A=ft),m=O,S=!1}function ce(O,ve){O.side===Jn?Q(i.CULL_FACE):oe(i.CULL_FACE);let se=O.side===Kt;ve&&(se=!se),fe(se),O.blending===As&&O.transparent===!1?D(ni):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Te=O.stencilWrite;o.setTest(Te),Te&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ee(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(O){v!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),v=O)}function Ve(O){O!==S0?(oe(i.CULL_FACE),O!==R&&(O===Eu?i.cullFace(i.BACK):O===y0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),R=O}function he(O){O!==I&&(k&&i.lineWidth(O),I=O)}function Ee(O,ve,se){O?(oe(i.POLYGON_OFFSET_FILL),(P!==ve||F!==se)&&(i.polygonOffset(ve,se),P=ve,F=se)):Q(i.POLYGON_OFFSET_FILL)}function _e(O){O?oe(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function De(O){O===void 0&&(O=i.TEXTURE0+H-1),Y!==O&&(i.activeTexture(O),Y=O)}function lt(O,ve,se){se===void 0&&(Y===null?se=i.TEXTURE0+H-1:se=Y);let Te=J[se];Te===void 0&&(Te={type:void 0,texture:void 0},J[se]=Te),(Te.type!==O||Te.texture!==ve)&&(Y!==se&&(i.activeTexture(se),Y=se),i.bindTexture(O,ve||de[O]),Te.type=O,Te.texture=ve)}function N(){const O=J[Y];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(O){We.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),We.copy(O))}function Le(O){X.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),X.copy(O))}function Oe(O,ve){let se=l.get(ve);se===void 0&&(se=new WeakMap,l.set(ve,se));let Te=se.get(O);Te===void 0&&(Te=i.getUniformBlockIndex(ve,O.name),se.set(O,Te))}function pe(O,ve){const Te=l.get(ve).get(O);c.get(ve)!==Te&&(i.uniformBlockBinding(ve,Te,O.__bindingPointIndex),c.set(ve,Te))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,J={},h={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,E=null,M=null,x=null,T=null,w=null,b=new tt(0,0,0),A=0,S=!1,v=null,R=null,I=null,P=null,F=null,We.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:Q,bindFramebuffer:je,drawBuffers:Ne,useProgram:nt,setBlending:D,setMaterial:ce,setFlipSided:fe,setCullFace:Ve,setLineWidth:he,setPolygonOffset:Ee,setScissorTest:_e,activeTexture:De,bindTexture:lt,unbindTexture:N,compressedTexImage2D:y,compressedTexImage3D:G,texImage2D:Re,texImage3D:ie,updateUBOMapping:Oe,uniformBlockBinding:pe,texStorage2D:ge,texStorage3D:Ae,texSubImage2D:K,texSubImage3D:te,compressedTexSubImage2D:j,compressedTexSubImage3D:Ce,scissor:ye,viewport:Le,reset:Ge}}function uT(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,y){return p?new OffscreenCanvas(N,y):Ua("canvas")}function g(N,y,G){let K=1;const te=lt(N);if((te.width>G||te.height>G)&&(K=G/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const j=Math.floor(K*te.width),Ce=Math.floor(K*te.height);h===void 0&&(h=_(j,Ce));const ge=y?_(j,Ce):h;return ge.width=j,ge.height=Ce,ge.getContext("2d").drawImage(N,0,0,j,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+j+"x"+Ce+")."),ge}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),N;return N}function m(N){return N.generateMipmaps}function f(N){i.generateMipmap(N)}function E(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(N,y,G,K,te=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let j=y;if(y===i.RED&&(G===i.FLOAT&&(j=i.R32F),G===i.HALF_FLOAT&&(j=i.R16F),G===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.R8UI),G===i.UNSIGNED_SHORT&&(j=i.R16UI),G===i.UNSIGNED_INT&&(j=i.R32UI),G===i.BYTE&&(j=i.R8I),G===i.SHORT&&(j=i.R16I),G===i.INT&&(j=i.R32I)),y===i.RG&&(G===i.FLOAT&&(j=i.RG32F),G===i.HALF_FLOAT&&(j=i.RG16F),G===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RG8UI),G===i.UNSIGNED_SHORT&&(j=i.RG16UI),G===i.UNSIGNED_INT&&(j=i.RG32UI),G===i.BYTE&&(j=i.RG8I),G===i.SHORT&&(j=i.RG16I),G===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGB8UI),G===i.UNSIGNED_SHORT&&(j=i.RGB16UI),G===i.UNSIGNED_INT&&(j=i.RGB32UI),G===i.BYTE&&(j=i.RGB8I),G===i.SHORT&&(j=i.RGB16I),G===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),G===i.UNSIGNED_INT&&(j=i.RGBA32UI),G===i.BYTE&&(j=i.RGBA8I),G===i.SHORT&&(j=i.RGBA16I),G===i.INT&&(j=i.RGBA32I)),y===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),y===i.RGBA){const Ce=te?Oa:Qe.getTransfer(K);G===i.FLOAT&&(j=i.RGBA32F),G===i.HALF_FLOAT&&(j=i.RGBA16F),G===i.UNSIGNED_BYTE&&(j=Ce===ot?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(N,y){let G;return N?y===null||y===es||y===hr?G=i.DEPTH24_STENCIL8:y===Qn?G=i.DEPTH32F_STENCIL8:y===ur&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===es||y===hr?G=i.DEPTH_COMPONENT24:y===Qn?G=i.DEPTH_COMPONENT32F:y===ur&&(G=i.DEPTH_COMPONENT16),G}function T(N,y){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Nn&&N.minFilter!==Fn?Math.log2(Math.max(y.width,y.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?y.mipmaps.length:1}function w(N){const y=N.target;y.removeEventListener("dispose",w),A(y),y.isVideoTexture&&u.delete(y)}function b(N){const y=N.target;y.removeEventListener("dispose",b),v(y)}function A(N){const y=n.get(N);if(y.__webglInit===void 0)return;const G=N.source,K=d.get(G);if(K){const te=K[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(N),Object.keys(K).length===0&&d.delete(G)}n.remove(N)}function S(N){const y=n.get(N);i.deleteTexture(y.__webglTexture);const G=N.source,K=d.get(G);delete K[y.__cacheKey],a.memory.textures--}function v(N){const y=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let te=0;te<y.__webglFramebuffer[K].length;te++)i.deleteFramebuffer(y.__webglFramebuffer[K][te]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=N.textures;for(let K=0,te=G.length;K<te;K++){const j=n.get(G[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(G[K])}n.remove(N)}let R=0;function I(){R=0}function P(){const N=R;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),R+=1,N}function F(N){const y=[];return y.push(N.wrapS),y.push(N.wrapT),y.push(N.wrapR||0),y.push(N.magFilter),y.push(N.minFilter),y.push(N.anisotropy),y.push(N.internalFormat),y.push(N.format),y.push(N.type),y.push(N.generateMipmaps),y.push(N.premultiplyAlpha),y.push(N.flipY),y.push(N.unpackAlignment),y.push(N.colorSpace),y.join()}function H(N,y){const G=n.get(N);if(N.isVideoTexture&&_e(N),N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){const K=N.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(G,N,y);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function k(N,y){const G=n.get(N);if(N.version>0&&G.__version!==N.version){de(G,N,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function V(N,y){const G=n.get(N);if(N.version>0&&G.__version!==N.version){de(G,N,y);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function B(N,y){const G=n.get(N);if(N.version>0&&G.__version!==N.version){oe(G,N,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}const Y={[fc]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[pc]:i.MIRRORED_REPEAT},J={[Nn]:i.NEAREST,[H0]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[lo]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},ne={[j0]:i.NEVER,[ex]:i.ALWAYS,[$0]:i.LESS,[Yd]:i.LEQUAL,[Z0]:i.EQUAL,[Q0]:i.GEQUAL,[K0]:i.GREATER,[J0]:i.NOTEQUAL};function Se(N,y){if(y.type===Qn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Fn||y.magFilter===lo||y.magFilter===zr||y.magFilter===Yi||y.minFilter===Fn||y.minFilter===lo||y.minFilter===zr||y.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Y[y.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Y[y.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Y[y.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,J[y.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,J[y.minFilter]),y.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ne[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Nn||y.minFilter!==zr&&y.minFilter!==Yi||y.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function We(N,y){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,y.addEventListener("dispose",w));const K=y.source;let te=d.get(K);te===void 0&&(te={},d.set(K,te));const j=F(y);if(j!==N.__cacheKey){te[j]===void 0&&(te[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),te[j].usedTimes++;const Ce=te[N.__cacheKey];Ce!==void 0&&(te[N.__cacheKey].usedTimes--,Ce.usedTimes===0&&S(y)),N.__cacheKey=j,N.__webglTexture=te[j].texture}return G}function X(N,y,G){return Math.floor(Math.floor(N/G)/y)}function Z(N,y,G,K){const j=N.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,G,K,y.data);else{j.sort((ie,ye)=>ie.start-ye.start);let Ce=0;for(let ie=1;ie<j.length;ie++){const ye=j[Ce],Le=j[ie],Oe=ye.start+ye.count,pe=X(Le.start,y.width,4),Ge=X(ye.start,y.width,4);Le.start<=Oe+1&&pe===Ge&&X(Le.start+Le.count-1,y.width,4)===pe?ye.count=Math.max(ye.count,Le.start+Le.count-ye.start):(++Ce,j[Ce]=Le)}j.length=Ce+1;const ge=i.getParameter(i.UNPACK_ROW_LENGTH),Ae=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ie=0,ye=j.length;ie<ye;ie++){const Le=j[ie],Oe=Math.floor(Le.start/4),pe=Math.ceil(Le.count/4),Ge=Oe%y.width,O=Math.floor(Oe/y.width),ve=pe,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,Ge,O,ve,se,G,K,y.data)}N.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ge),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function de(N,y,G){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const te=We(N,y),j=y.source;t.bindTexture(K,N.__webglTexture,i.TEXTURE0+G);const Ce=n.get(j);if(j.version!==Ce.__version||te===!0){t.activeTexture(i.TEXTURE0+G);const ge=Qe.getPrimaries(Qe.workingColorSpace),Ae=y.colorSpace===Si?null:Qe.getPrimaries(y.colorSpace),Re=y.colorSpace===Si||ge===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ie=g(y.image,!1,s.maxTextureSize);ie=De(y,ie);const ye=r.convert(y.format,y.colorSpace),Le=r.convert(y.type);let Oe=M(y.internalFormat,ye,Le,y.colorSpace,y.isVideoTexture);Se(K,y);let pe;const Ge=y.mipmaps,O=y.isVideoTexture!==!0,ve=Ce.__version===void 0||te===!0,se=j.dataReady,Te=T(y,ie);if(y.isDepthTexture)Oe=x(y.format===fr,y.type),ve&&(O?t.texStorage2D(i.TEXTURE_2D,1,Oe,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Oe,ie.width,ie.height,0,ye,Le,null));else if(y.isDataTexture)if(Ge.length>0){O&&ve&&t.texStorage2D(i.TEXTURE_2D,Te,Oe,Ge[0].width,Ge[0].height);for(let re=0,ee=Ge.length;re<ee;re++)pe=Ge[re],O?se&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,pe.width,pe.height,ye,Le,pe.data):t.texImage2D(i.TEXTURE_2D,re,Oe,pe.width,pe.height,0,ye,Le,pe.data);y.generateMipmaps=!1}else O?(ve&&t.texStorage2D(i.TEXTURE_2D,Te,Oe,ie.width,ie.height),se&&Z(y,ie,ye,Le)):t.texImage2D(i.TEXTURE_2D,0,Oe,ie.width,ie.height,0,ye,Le,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){O&&ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Oe,Ge[0].width,Ge[0].height,ie.depth);for(let re=0,ee=Ge.length;re<ee;re++)if(pe=Ge[re],y.format!==Cn)if(ye!==null)if(O){if(se)if(y.layerUpdates.size>0){const be=Yu(pe.width,pe.height,y.format,y.type);for(const He of y.layerUpdates){const ft=pe.data.subarray(He*be/pe.data.BYTES_PER_ELEMENT,(He+1)*be/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,He,pe.width,pe.height,1,ye,ft)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ie.depth,ye,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Oe,pe.width,pe.height,ie.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ie.depth,ye,Le,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Oe,pe.width,pe.height,ie.depth,0,ye,Le,pe.data)}else{O&&ve&&t.texStorage2D(i.TEXTURE_2D,Te,Oe,Ge[0].width,Ge[0].height);for(let re=0,ee=Ge.length;re<ee;re++)pe=Ge[re],y.format!==Cn?ye!==null?O?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,pe.width,pe.height,ye,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Oe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?se&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,pe.width,pe.height,ye,Le,pe.data):t.texImage2D(i.TEXTURE_2D,re,Oe,pe.width,pe.height,0,ye,Le,pe.data)}else if(y.isDataArrayTexture)if(O){if(ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Oe,ie.width,ie.height,ie.depth),se)if(y.layerUpdates.size>0){const re=Yu(ie.width,ie.height,y.format,y.type);for(const ee of y.layerUpdates){const be=ie.data.subarray(ee*re/ie.data.BYTES_PER_ELEMENT,(ee+1)*re/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,ie.width,ie.height,1,ye,Le,be)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,Le,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,ie.width,ie.height,ie.depth,0,ye,Le,ie.data);else if(y.isData3DTexture)O?(ve&&t.texStorage3D(i.TEXTURE_3D,Te,Oe,ie.width,ie.height,ie.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,Le,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,ie.width,ie.height,ie.depth,0,ye,Le,ie.data);else if(y.isFramebufferTexture){if(ve)if(O)t.texStorage2D(i.TEXTURE_2D,Te,Oe,ie.width,ie.height);else{let re=ie.width,ee=ie.height;for(let be=0;be<Te;be++)t.texImage2D(i.TEXTURE_2D,be,Oe,re,ee,0,ye,Le,null),re>>=1,ee>>=1}}else if(Ge.length>0){if(O&&ve){const re=lt(Ge[0]);t.texStorage2D(i.TEXTURE_2D,Te,Oe,re.width,re.height)}for(let re=0,ee=Ge.length;re<ee;re++)pe=Ge[re],O?se&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ye,Le,pe):t.texImage2D(i.TEXTURE_2D,re,Oe,ye,Le,pe);y.generateMipmaps=!1}else if(O){if(ve){const re=lt(ie);t.texStorage2D(i.TEXTURE_2D,Te,Oe,re.width,re.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Le,ie)}else t.texImage2D(i.TEXTURE_2D,0,Oe,ye,Le,ie);m(y)&&f(K),Ce.__version=j.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function oe(N,y,G){if(y.image.length!==6)return;const K=We(N,y),te=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+G);const j=n.get(te);if(te.version!==j.__version||K===!0){t.activeTexture(i.TEXTURE0+G);const Ce=Qe.getPrimaries(Qe.workingColorSpace),ge=y.colorSpace===Si?null:Qe.getPrimaries(y.colorSpace),Ae=y.colorSpace===Si||Ce===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Re=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!Re&&!ie?ye[ee]=g(y.image[ee],!0,s.maxCubemapSize):ye[ee]=ie?y.image[ee].image:y.image[ee],ye[ee]=De(y,ye[ee]);const Le=ye[0],Oe=r.convert(y.format,y.colorSpace),pe=r.convert(y.type),Ge=M(y.internalFormat,Oe,pe,y.colorSpace),O=y.isVideoTexture!==!0,ve=j.__version===void 0||K===!0,se=te.dataReady;let Te=T(y,Le);Se(i.TEXTURE_CUBE_MAP,y);let re;if(Re){O&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Ge,Le.width,Le.height);for(let ee=0;ee<6;ee++){re=ye[ee].mipmaps;for(let be=0;be<re.length;be++){const He=re[be];y.format!==Cn?Oe!==null?O?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,He.width,He.height,Oe,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,Ge,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,He.width,He.height,Oe,pe,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,Ge,He.width,He.height,0,Oe,pe,He.data)}}}else{if(re=y.mipmaps,O&&ve){re.length>0&&Te++;const ee=lt(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Ge,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ie){O?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,Oe,pe,ye[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ge,ye[ee].width,ye[ee].height,0,Oe,pe,ye[ee].data);for(let be=0;be<re.length;be++){const ft=re[be].image[ee].image;O?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,ft.width,ft.height,Oe,pe,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,Ge,ft.width,ft.height,0,Oe,pe,ft.data)}}else{O?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Oe,pe,ye[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ge,Oe,pe,ye[ee]);for(let be=0;be<re.length;be++){const He=re[be];O?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,Oe,pe,He.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,Ge,Oe,pe,He.image[ee])}}}m(y)&&f(i.TEXTURE_CUBE_MAP),j.__version=te.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function Q(N,y,G,K,te,j){const Ce=r.convert(G.format,G.colorSpace),ge=r.convert(G.type),Ae=M(G.internalFormat,Ce,ge,G.colorSpace),Re=n.get(y),ie=n.get(G);if(ie.__renderTarget=y,!Re.__hasExternalTextures){const ye=Math.max(1,y.width>>j),Le=Math.max(1,y.height>>j);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,j,Ae,ye,Le,y.depth,0,Ce,ge,null):t.texImage2D(te,j,Ae,ye,Le,0,Ce,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Ee(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,te,ie.__webglTexture,0,he(y)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,te,ie.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(N,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,N),y.depthBuffer){const K=y.depthTexture,te=K&&K.isDepthTexture?K.type:null,j=x(y.stencilBuffer,te),Ce=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=he(y);Ee(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,j,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,N)}else{const K=y.textures;for(let te=0;te<K.length;te++){const j=K[te],Ce=r.convert(j.format,j.colorSpace),ge=r.convert(j.type),Ae=M(j.internalFormat,Ce,ge,j.colorSpace),Re=he(y);G&&Ee(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Ae,y.width,y.height):Ee(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Ae,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(N,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const te=K.__webglTexture,j=he(y);if(y.depthTexture.format===dr)Ee(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(y.depthTexture.format===fr)Ee(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function nt(N){const y=n.get(N),G=N.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==N.depthTexture){const K=N.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=K}if(N.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const K=N.texture.mipmaps;K&&K.length>0?Ne(y.__webglFramebuffer[0],N):Ne(y.__webglFramebuffer,N)}else if(G){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),je(y.__webglDepthbuffer[K],N,!1);else{const te=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,j)}}else{const K=N.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),je(y.__webglDepthbuffer,N,!1);else{const te=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(N,y,G){const K=n.get(N);y!==void 0&&Q(K.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&nt(N)}function Je(N){const y=N.texture,G=n.get(N),K=n.get(y);N.addEventListener("dispose",b);const te=N.textures,j=N.isWebGLCubeRenderTarget===!0,Ce=te.length>1;if(Ce||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,a.memory.textures++),j){G.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[ge]=[];for(let Ae=0;Ae<y.mipmaps.length;Ae++)G.__webglFramebuffer[ge][Ae]=i.createFramebuffer()}else G.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let ge=0;ge<y.mipmaps.length;ge++)G.__webglFramebuffer[ge]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let ge=0,Ae=te.length;ge<Ae;ge++){const Re=n.get(te[ge]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&Ee(N)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ge=0;ge<te.length;ge++){const Ae=te[ge];G.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ge]);const Re=r.convert(Ae.format,Ae.colorSpace),ie=r.convert(Ae.type),ye=M(Ae.internalFormat,Re,ie,Ae.colorSpace,N.isXRRenderTarget===!0),Le=he(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ye,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,G.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),je(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Se(i.TEXTURE_CUBE_MAP,y);for(let ge=0;ge<6;ge++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ae=0;Ae<y.mipmaps.length;Ae++)Q(G.__webglFramebuffer[ge][Ae],N,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae);else Q(G.__webglFramebuffer[ge],N,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(y)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ge=0,Ae=te.length;ge<Ae;ge++){const Re=te[ge],ie=n.get(Re);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Se(i.TEXTURE_2D,Re),Q(G.__webglFramebuffer,N,Re,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),m(Re)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ge=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,K.__webglTexture),Se(ge,y),y.mipmaps&&y.mipmaps.length>0)for(let Ae=0;Ae<y.mipmaps.length;Ae++)Q(G.__webglFramebuffer[Ae],N,y,i.COLOR_ATTACHMENT0,ge,Ae);else Q(G.__webglFramebuffer,N,y,i.COLOR_ATTACHMENT0,ge,0);m(y)&&f(ge),t.unbindTexture()}N.depthBuffer&&nt(N)}function D(N){const y=N.textures;for(let G=0,K=y.length;G<K;G++){const te=y[G];if(m(te)){const j=E(N),Ce=n.get(te).__webglTexture;t.bindTexture(j,Ce),f(j),t.unbindTexture()}}}const ce=[],fe=[];function Ve(N){if(N.samples>0){if(Ee(N)===!1){const y=N.textures,G=N.width,K=N.height;let te=i.COLOR_BUFFER_BIT;const j=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(N),ge=y.length>1;if(ge)for(let Re=0;Re<y.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Ae=N.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const ie=n.get(y[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,G,K,0,0,G,K,te,i.NEAREST),c===!0&&(ce.length=0,fe.length=0,ce.push(i.COLOR_ATTACHMENT0+Re),N.depthBuffer&&N.resolveDepthBuffer===!1&&(ce.push(j),fe.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Re=0;Re<y.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const ie=n.get(y[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const y=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function he(N){return Math.min(s.maxSamples,N.samples)}function Ee(N){const y=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _e(N){const y=a.render.frame;u.get(N)!==y&&(u.set(N,y),N.update())}function De(N,y){const G=N.colorSpace,K=N.format,te=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==Vs&&G!==Si&&(Qe.getTransfer(G)===ot?(K!==Cn||te!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function lt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=I,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=B,this.rebindTextures=it,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ee}function hT(i,e){function t(n,s=Si){let r;const a=Qe.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===Pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bd)return i.BYTE;if(n===Vd)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===Dl)return i.INT;if(n===es)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===Gd)return i.ALPHA;if(n===Hd)return i.RGB;if(n===Cn)return i.RGBA;if(n===dr)return i.DEPTH_COMPONENT;if(n===fr)return i.DEPTH_STENCIL;if(n===Wd)return i.RED;if(n===Ll)return i.RED_INTEGER;if(n===qd)return i.RG;if(n===Ul)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===fa||n===pa||n===ma||n===_a)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===_c||n===gc||n===vc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xc||n===Sc||n===yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xc||n===Sc)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mc||n===Ec||n===Tc||n===bc||n===wc||n===Ac||n===Cc||n===Rc||n===Nc||n===Ic||n===Dc||n===Pc||n===Oc||n===Lc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ic)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ga||n===Uc||n===Fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ga)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xd||n===kc||n===Bc||n===Vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const dT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Jt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vt({vertexShader:dT,fragmentShader:fT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rn(new io(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mT extends Zs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,_=null;const g=new pT,m=t.getContextAttributes();let f=null,E=null;const M=[],x=[],T=new Xe;let w=null;const b=new pn;b.viewport=new Et;const A=new pn;A.viewport=new Et;const S=[b,A],v=new Ux;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=M[X];return Z===void 0&&(Z=new Po,M[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=M[X];return Z===void 0&&(Z=new Po,M[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=M[X];return Z===void 0&&(Z=new Po,M[X]=Z),Z.getHandSpace()};function P(X){const Z=x.indexOf(X.inputSource);if(Z===-1)return;const de=M[Z];de!==void 0&&(de.update(X.inputSource,X.frame,l||a),de.dispatchEvent({type:X.type,data:X.inputSource}))}function F(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",H);for(let X=0;X<M.length;X++){const Z=x[X];Z!==null&&(x[X]=null,M[X].disconnect(Z))}R=null,I=null,g.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,E=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",F),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,oe=null,Q=null;m.depth&&(Q=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?fr:dr,oe=m.stencil?hr:es);const je={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new In(d.textureWidth,d.textureHeight,{format:Cn,type:ai,depthTexture:new rf(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new In(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(X){for(let Z=0;Z<X.removed.length;Z++){const de=X.removed[Z],oe=x.indexOf(de);oe>=0&&(x[oe]=null,M[oe].disconnect(de))}for(let Z=0;Z<X.added.length;Z++){const de=X.added[Z];let oe=x.indexOf(de);if(oe===-1){for(let je=0;je<M.length;je++)if(je>=x.length){x.push(de),oe=je;break}else if(x[je]===null){x[je]=de,oe=je;break}if(oe===-1)break}const Q=M[oe];Q&&Q.connect(de)}}const k=new z,V=new z;function B(X,Z,de){k.setFromMatrixPosition(Z.matrixWorld),V.setFromMatrixPosition(de.matrixWorld);const oe=k.distanceTo(V),Q=Z.projectionMatrix.elements,je=de.projectionMatrix.elements,Ne=Q[14]/(Q[10]-1),nt=Q[14]/(Q[10]+1),it=(Q[9]+1)/Q[5],Je=(Q[9]-1)/Q[5],D=(Q[8]-1)/Q[0],ce=(je[8]+1)/je[0],fe=Ne*D,Ve=Ne*ce,he=oe/(-D+ce),Ee=he*-D;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ee),X.translateZ(he),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Q[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const _e=Ne+he,De=nt+he,lt=fe-Ee,N=Ve+(oe-Ee),y=it*nt/De*_e,G=Je*nt/De*_e;X.projectionMatrix.makePerspective(lt,N,y,G,_e,De),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Y(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Z=X.near,de=X.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(de=g.depthFar)),v.near=A.near=b.near=Z,v.far=A.far=b.far=de,(R!==v.near||I!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,I=v.far),b.layers.mask=X.layers.mask|2,A.layers.mask=X.layers.mask|4,v.layers.mask=b.layers.mask|A.layers.mask;const oe=X.parent,Q=v.cameras;Y(v,oe);for(let je=0;je<Q.length;je++)Y(Q[je],oe);Q.length===2?B(v,b,A):v.projectionMatrix.copy(b.projectionMatrix),J(X,v,oe)};function J(X,Z,de){de===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=zc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ne=null;function Se(X,Z){if(u=Z.getViewerPose(l||a),_=Z,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let oe=!1;de.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let Ne=0;Ne<de.length;Ne++){const nt=de[Ne];let it=null;if(p!==null)it=p.getViewport(nt);else{const D=h.getViewSubImage(d,nt);it=D.viewport,Ne===0&&(e.setRenderTargetTextures(E,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(E))}let Je=S[Ne];Je===void 0&&(Je=new pn,Je.layers.enable(Ne),Je.viewport=new Et,S[Ne]=Je),Je.matrix.fromArray(nt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(nt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(it.x,it.y,it.width,it.height),Ne===0&&(v.matrix.copy(Je.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(Je)}const Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Ne=h.getDepthInformation(de[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(e,Ne,s.renderState)}}for(let de=0;de<M.length;de++){const oe=x[de],Q=M[de];oe!==null&&Q!==void 0&&Q.update(oe,Z,l||a)}ne&&ne(X,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const We=new cf;We.setAnimationLoop(Se),this.setAnimationLoop=function(X){ne=X},this.dispose=function(){}}}const Bi=new oi,_T=new Rt;function gT(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ef(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,M,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,E,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),M=E.envMap,x=E.envMapRotation;M&&(m.envMap.value=M,Bi.copy(x),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(_T.makeRotationFromEuler(Bi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vT(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,M){const x=M.program;n.uniformBlockBinding(E,x)}function l(E,M){let x=s[E.id];x===void 0&&(_(E),x=u(E),s[E.id]=x,E.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(E,T);const w=e.render.frame;r[E.id]!==w&&(d(E),r[E.id]=w)}function u(E){const M=h();E.__bindingPointIndex=M;const x=i.createBuffer(),T=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=s[E.id],x=E.uniforms,T=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,b=x.length;w<b;w++){const A=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,v=A.length;S<v;S++){const R=A[S];if(p(R,w,S,T)===!0){const I=R.__offset,P=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let H=0;H<P.length;H++){const k=P[H],V=g(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,I+F,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,F),F+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,M,x,T){const w=E.value,b=M+"_"+x;if(T[b]===void 0)return typeof w=="number"||typeof w=="boolean"?T[b]=w:T[b]=w.clone(),!0;{const A=T[b];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return T[b]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function _(E){const M=E.uniforms;let x=0;const T=16;for(let b=0,A=M.length;b<A;b++){const S=Array.isArray(M[b])?M[b]:[M[b]];for(let v=0,R=S.length;v<R;v++){const I=S[v],P=Array.isArray(I.value)?I.value:[I.value];for(let F=0,H=P.length;F<H;F++){const k=P[F],V=g(k),B=x%T,Y=B%V.boundary,J=B+Y;x+=Y,J!==0&&T-J<V.storage&&(x+=T-J),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=V.storage}}}const w=x%T;return w>0&&(x+=T-w),E.__size=x,E.__cache={},this}function g(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class xT{constructor(e={}){const{canvas:t=nx(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const E=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=sn;let w=0,b=0,A=null,S=-1,v=null;const R=new Et,I=new Et;let P=null;const F=new tt(0);let H=0,k=t.width,V=t.height,B=1,Y=null,J=null;const ne=new Et(0,0,k,V),Se=new Et(0,0,k,V);let We=!1;const X=new sf;let Z=!1,de=!1;const oe=new Rt,Q=new Rt,je=new z,Ne=new Et,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Je(){return A===null?B:1}let D=n;function ce(C,L){return t.getContext(C,L)}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Il}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",ee,!1),D===null){const L="webgl2";if(D=ce(L,C),D===null)throw ce(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let fe,Ve,he,Ee,_e,De,lt,N,y,G,K,te,j,Ce,ge,Ae,Re,ie,ye,Le,Oe,pe,Ge,O;function ve(){fe=new RM(D),fe.init(),pe=new hT(D,fe),Ve=new MM(D,fe,e,pe),he=new lT(D,fe),Ve.reverseDepthBuffer&&d&&he.buffers.depth.setReversed(!0),Ee=new DM(D),_e=new ZE,De=new uT(D,fe,he,_e,Ve,pe,Ee),lt=new TM(x),N=new CM(x),y=new kx(D),Ge=new SM(D,y),G=new NM(D,y,Ee,Ge),K=new OM(D,G,y,Ee),ye=new PM(D,Ve,De),Ae=new EM(_e),te=new $E(x,lt,N,fe,Ve,Ge,Ae),j=new gT(x,_e),Ce=new JE,ge=new sT(fe),ie=new xM(x,lt,N,he,K,p,c),Re=new oT(x,K,Ve),O=new vT(D,Ee,Ve,he),Le=new yM(D,fe,Ee),Oe=new IM(D,fe,Ee),Ee.programs=te.programs,x.capabilities=Ve,x.extensions=fe,x.properties=_e,x.renderLists=Ce,x.shadowMap=Re,x.state=he,x.info=Ee}ve();const se=new mT(x,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(k,V,!1))},this.getSize=function(C){return C.set(k,V)},this.setSize=function(C,L,W=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,V=L,t.width=Math.floor(C*B),t.height=Math.floor(L*B),W===!0&&(t.style.width=C+"px",t.style.height=L+"px"),this.setViewport(0,0,C,L)},this.getDrawingBufferSize=function(C){return C.set(k*B,V*B).floor()},this.setDrawingBufferSize=function(C,L,W){k=C,V=L,B=W,t.width=Math.floor(C*W),t.height=Math.floor(L*W),this.setViewport(0,0,C,L)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(ne)},this.setViewport=function(C,L,W,q){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,L,W,q),he.viewport(R.copy(ne).multiplyScalar(B).round())},this.getScissor=function(C){return C.copy(Se)},this.setScissor=function(C,L,W,q){C.isVector4?Se.set(C.x,C.y,C.z,C.w):Se.set(C,L,W,q),he.scissor(I.copy(Se).multiplyScalar(B).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(C){he.setScissorTest(We=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){J=C},this.getClearColor=function(C){return C.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(C=!0,L=!0,W=!0){let q=0;if(C){let U=!1;if(A!==null){const ae=A.texture.format;U=ae===Fl||ae===Ul||ae===Ll}if(U){const ae=A.texture.type,xe=ae===ai||ae===es||ae===ur||ae===hr||ae===Pl||ae===Ol,we=ie.getClearColor(),Me=ie.getClearAlpha(),ke=we.r,ze=we.g,Ie=we.b;xe?(_[0]=ke,_[1]=ze,_[2]=Ie,_[3]=Me,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=ke,g[1]=ze,g[2]=Ie,g[3]=Me,D.clearBufferiv(D.COLOR,0,g))}else q|=D.COLOR_BUFFER_BIT}L&&(q|=D.DEPTH_BUFFER_BIT),W&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),ie.dispose(),Ce.dispose(),ge.dispose(),_e.dispose(),lt.dispose(),N.dispose(),K.dispose(),Ge.dispose(),O.dispose(),te.dispose(),se.dispose(),se.removeEventListener("sessionstart",ql),se.removeEventListener("sessionend",Xl),Di.stop()};function Te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=Ee.autoReset,L=Re.enabled,W=Re.autoUpdate,q=Re.needsUpdate,U=Re.type;ve(),Ee.autoReset=C,Re.enabled=L,Re.autoUpdate=W,Re.needsUpdate=q,Re.type=U}function ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function be(C){const L=C.target;L.removeEventListener("dispose",be),He(L)}function He(C){ft(C),_e.remove(C)}function ft(C){const L=_e.get(C).programs;L!==void 0&&(L.forEach(function(W){te.releaseProgram(W)}),C.isShaderMaterial&&te.releaseShaderCache(C))}this.renderBufferDirect=function(C,L,W,q,U,ae){L===null&&(L=nt);const xe=U.isMesh&&U.matrixWorld.determinant()<0,we=gf(C,L,W,q,U);he.setMaterial(q,xe);let Me=W.index,ke=1;if(q.wireframe===!0){if(Me=G.getWireframeAttribute(W),Me===void 0)return;ke=2}const ze=W.drawRange,Ie=W.attributes.position;let Ze=ze.start*ke,at=(ze.start+ze.count)*ke;ae!==null&&(Ze=Math.max(Ze,ae.start*ke),at=Math.min(at,(ae.start+ae.count)*ke)),Me!==null?(Ze=Math.max(Ze,0),at=Math.min(at,Me.count)):Ie!=null&&(Ze=Math.max(Ze,0),at=Math.min(at,Ie.count));const xt=at-Ze;if(xt<0||xt===1/0)return;Ge.setup(U,q,we,W,Me);let yt,et=Le;if(Me!==null&&(yt=y.get(Me),et=Oe,et.setIndex(yt)),U.isMesh)q.wireframe===!0?(he.setLineWidth(q.wireframeLinewidth*Je()),et.setMode(D.LINES)):et.setMode(D.TRIANGLES);else if(U.isLine){let Pe=q.linewidth;Pe===void 0&&(Pe=1),he.setLineWidth(Pe*Je()),U.isLineSegments?et.setMode(D.LINES):U.isLineLoop?et.setMode(D.LINE_LOOP):et.setMode(D.LINE_STRIP)}else U.isPoints?et.setMode(D.POINTS):U.isSprite&&et.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Pe=U._multiDrawStarts,Ut=U._multiDrawCounts,st=U._multiDrawCount,xn=Me?y.get(Me).bytesPerElement:1,ss=_e.get(q).currentProgram.getUniforms();for(let en=0;en<st;en++)ss.setValue(D,"_gl_DrawID",en),et.render(Pe[en]/xn,Ut[en])}else if(U.isInstancedMesh)et.renderInstances(Ze,xt,U.count);else if(W.isInstancedBufferGeometry){const Pe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ut=Math.min(W.instanceCount,Pe);et.renderInstances(Ze,xt,Ut)}else et.render(Ze,xt)};function rt(C,L,W){C.transparent===!0&&C.side===Jn&&C.forceSinglePass===!1?(C.side=Kt,C.needsUpdate=!0,Ur(C,L,W),C.side=Ci,C.needsUpdate=!0,Ur(C,L,W),C.side=Jn):Ur(C,L,W)}this.compile=function(C,L,W=null){W===null&&(W=C),f=ge.get(W),f.init(L),M.push(f),W.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),C!==W&&C.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const q=new Set;return C.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ae=U.material;if(ae)if(Array.isArray(ae))for(let xe=0;xe<ae.length;xe++){const we=ae[xe];rt(we,W,U),q.add(we)}else rt(ae,W,U),q.add(ae)}),f=M.pop(),q},this.compileAsync=function(C,L,W=null){const q=this.compile(C,L,W);return new Promise(U=>{function ae(){if(q.forEach(function(xe){_e.get(xe).currentProgram.isReady()&&q.delete(xe)}),q.size===0){U(C);return}setTimeout(ae,10)}fe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let vn=null;function Hn(C){vn&&vn(C)}function ql(){Di.stop()}function Xl(){Di.start()}const Di=new cf;Di.setAnimationLoop(Hn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){vn=C,se.setAnimationLoop(C),C===null?Di.stop():Di.start()},se.addEventListener("sessionstart",ql),se.addEventListener("sessionend",Xl),this.render=function(C,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(L),L=se.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,L,A),f=ge.get(C,M.length),f.init(L),M.push(f),Q.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(Q),de=this.localClippingEnabled,Z=Ae.init(this.clippingPlanes,de),m=Ce.get(C,E.length),m.init(),E.push(m),se.enabled===!0&&se.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&ro(ae,L,-1/0,x.sortObjects)}ro(C,L,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Y,J),it=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,it&&ie.addToRenderList(m,C),this.info.render.frame++,Z===!0&&Ae.beginShadows();const W=f.state.shadowsArray;Re.render(W,C,L),Z===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,U=m.transmissive;if(f.setupLights(),L.isArrayCamera){const ae=L.cameras;if(U.length>0)for(let xe=0,we=ae.length;xe<we;xe++){const Me=ae[xe];jl(q,U,C,Me)}it&&ie.render(C);for(let xe=0,we=ae.length;xe<we;xe++){const Me=ae[xe];Yl(m,C,Me,Me.viewport)}}else U.length>0&&jl(q,U,C,L),it&&ie.render(C),Yl(m,C,L);A!==null&&b===0&&(De.updateMultisampleRenderTarget(A),De.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(x,C,L),Ge.resetDefaultState(),S=-1,v=null,M.pop(),M.length>0?(f=M[M.length-1],Z===!0&&Ae.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ro(C,L,W,q){if(C.visible===!1)return;if(C.layers.test(L.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(L);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){q&&Ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Q);const xe=K.update(C),we=C.material;we.visible&&m.push(C,xe,we,W,Ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){const xe=K.update(C),we=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ne.copy(C.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ne.copy(xe.boundingSphere.center)),Ne.applyMatrix4(C.matrixWorld).applyMatrix4(Q)),Array.isArray(we)){const Me=xe.groups;for(let ke=0,ze=Me.length;ke<ze;ke++){const Ie=Me[ke],Ze=we[Ie.materialIndex];Ze&&Ze.visible&&m.push(C,xe,Ze,W,Ne.z,Ie)}}else we.visible&&m.push(C,xe,we,W,Ne.z,null)}}const ae=C.children;for(let xe=0,we=ae.length;xe<we;xe++)ro(ae[xe],L,W,q)}function Yl(C,L,W,q){const U=C.opaque,ae=C.transmissive,xe=C.transparent;f.setupLightsView(W),Z===!0&&Ae.setGlobalState(x.clippingPlanes,W),q&&he.viewport(R.copy(q)),U.length>0&&Lr(U,L,W),ae.length>0&&Lr(ae,L,W),xe.length>0&&Lr(xe,L,W),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function jl(C,L,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new In(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?ii:ai,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ae=f.state.transmissionRenderTarget[q.id],xe=q.viewport||R;ae.setSize(xe.z*x.transmissionResolutionScale,xe.w*x.transmissionResolutionScale);const we=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(F),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),it&&ie.render(W);const Me=x.toneMapping;x.toneMapping=Mi;const ke=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),Z===!0&&Ae.setGlobalState(x.clippingPlanes,q),Lr(C,W,q),De.updateMultisampleRenderTarget(ae),De.updateRenderTargetMipmap(ae),fe.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ie=0,Ze=L.length;Ie<Ze;Ie++){const at=L[Ie],xt=at.object,yt=at.geometry,et=at.material,Pe=at.group;if(et.side===Jn&&xt.layers.test(q.layers)){const Ut=et.side;et.side=Kt,et.needsUpdate=!0,$l(xt,W,q,yt,et,Pe),et.side=Ut,et.needsUpdate=!0,ze=!0}}ze===!0&&(De.updateMultisampleRenderTarget(ae),De.updateRenderTargetMipmap(ae))}x.setRenderTarget(we),x.setClearColor(F,H),ke!==void 0&&(q.viewport=ke),x.toneMapping=Me}function Lr(C,L,W){const q=L.isScene===!0?L.overrideMaterial:null;for(let U=0,ae=C.length;U<ae;U++){const xe=C[U],we=xe.object,Me=xe.geometry,ke=xe.group;let ze=xe.material;ze.allowOverride===!0&&q!==null&&(ze=q),we.layers.test(W.layers)&&$l(we,L,W,Me,ze,ke)}}function $l(C,L,W,q,U,ae){C.onBeforeRender(x,L,W,q,U,ae),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),U.onBeforeRender(x,L,W,q,C,ae),U.transparent===!0&&U.side===Jn&&U.forceSinglePass===!1?(U.side=Kt,U.needsUpdate=!0,x.renderBufferDirect(W,L,q,U,C,ae),U.side=Ci,U.needsUpdate=!0,x.renderBufferDirect(W,L,q,U,C,ae),U.side=Jn):x.renderBufferDirect(W,L,q,U,C,ae),C.onAfterRender(x,L,W,q,U,ae)}function Ur(C,L,W){L.isScene!==!0&&(L=nt);const q=_e.get(C),U=f.state.lights,ae=f.state.shadowsArray,xe=U.state.version,we=te.getParameters(C,U.state,ae,L,W),Me=te.getProgramCacheKey(we);let ke=q.programs;q.environment=C.isMeshStandardMaterial?L.environment:null,q.fog=L.fog,q.envMap=(C.isMeshStandardMaterial?N:lt).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?L.environmentRotation:C.envMapRotation,ke===void 0&&(C.addEventListener("dispose",be),ke=new Map,q.programs=ke);let ze=ke.get(Me);if(ze!==void 0){if(q.currentProgram===ze&&q.lightsStateVersion===xe)return Kl(C,we),ze}else we.uniforms=te.getUniforms(C),C.onBeforeCompile(we,x),ze=te.acquireProgram(we,Me),ke.set(Me,ze),q.uniforms=we.uniforms;const Ie=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ie.clippingPlanes=Ae.uniform),Kl(C,we),q.needsLights=xf(C),q.lightsStateVersion=xe,q.needsLights&&(Ie.ambientLightColor.value=U.state.ambient,Ie.lightProbe.value=U.state.probe,Ie.directionalLights.value=U.state.directional,Ie.directionalLightShadows.value=U.state.directionalShadow,Ie.spotLights.value=U.state.spot,Ie.spotLightShadows.value=U.state.spotShadow,Ie.rectAreaLights.value=U.state.rectArea,Ie.ltc_1.value=U.state.rectAreaLTC1,Ie.ltc_2.value=U.state.rectAreaLTC2,Ie.pointLights.value=U.state.point,Ie.pointLightShadows.value=U.state.pointShadow,Ie.hemisphereLights.value=U.state.hemi,Ie.directionalShadowMap.value=U.state.directionalShadowMap,Ie.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ie.spotShadowMap.value=U.state.spotShadowMap,Ie.spotLightMatrix.value=U.state.spotLightMatrix,Ie.spotLightMap.value=U.state.spotLightMap,Ie.pointShadowMap.value=U.state.pointShadowMap,Ie.pointShadowMatrix.value=U.state.pointShadowMatrix),q.currentProgram=ze,q.uniformsList=null,ze}function Zl(C){if(C.uniformsList===null){const L=C.currentProgram.getUniforms();C.uniformsList=va.seqWithValue(L.seq,C.uniforms)}return C.uniformsList}function Kl(C,L){const W=_e.get(C);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function gf(C,L,W,q,U){L.isScene!==!0&&(L=nt),De.resetTextureUnits();const ae=L.fog,xe=q.isMeshStandardMaterial?L.environment:null,we=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Vs,Me=(q.isMeshStandardMaterial?N:lt).get(q.envMap||xe),ke=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ie=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,at=!!W.morphAttributes.color;let xt=Mi;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xt=x.toneMapping);const yt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,et=yt!==void 0?yt.length:0,Pe=_e.get(q),Ut=f.state.lights;if(Z===!0&&(de===!0||C!==v)){const Gt=C===v&&q.id===S;Ae.setState(q,C,Gt)}let st=!1;q.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ut.state.version||Pe.outputColorSpace!==we||U.isBatchedMesh&&Pe.batching===!1||!U.isBatchedMesh&&Pe.batching===!0||U.isBatchedMesh&&Pe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Pe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Pe.instancing===!1||!U.isInstancedMesh&&Pe.instancing===!0||U.isSkinnedMesh&&Pe.skinning===!1||!U.isSkinnedMesh&&Pe.skinning===!0||U.isInstancedMesh&&Pe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Pe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Pe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Pe.instancingMorph===!1&&U.morphTexture!==null||Pe.envMap!==Me||q.fog===!0&&Pe.fog!==ae||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ae.numPlanes||Pe.numIntersection!==Ae.numIntersection)||Pe.vertexAlphas!==ke||Pe.vertexTangents!==ze||Pe.morphTargets!==Ie||Pe.morphNormals!==Ze||Pe.morphColors!==at||Pe.toneMapping!==xt||Pe.morphTargetsCount!==et)&&(st=!0):(st=!0,Pe.__version=q.version);let xn=Pe.currentProgram;st===!0&&(xn=Ur(q,L,U));let ss=!1,en=!1,Qs=!1;const mt=xn.getUniforms(),hn=Pe.uniforms;if(he.useProgram(xn.program)&&(ss=!0,en=!0,Qs=!0),q.id!==S&&(S=q.id,en=!0),ss||v!==C){he.buffers.depth.getReversed()?(oe.copy(C.projectionMatrix),sx(oe),rx(oe),mt.setValue(D,"projectionMatrix",oe)):mt.setValue(D,"projectionMatrix",C.projectionMatrix),mt.setValue(D,"viewMatrix",C.matrixWorldInverse);const jt=mt.map.cameraPosition;jt!==void 0&&jt.setValue(D,je.setFromMatrixPosition(C.matrixWorld)),Ve.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),v!==C&&(v=C,en=!0,Qs=!0)}if(U.isSkinnedMesh){mt.setOptional(D,U,"bindMatrix"),mt.setOptional(D,U,"bindMatrixInverse");const Gt=U.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),mt.setValue(D,"boneTexture",Gt.boneTexture,De))}U.isBatchedMesh&&(mt.setOptional(D,U,"batchingTexture"),mt.setValue(D,"batchingTexture",U._matricesTexture,De),mt.setOptional(D,U,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",U._indirectTexture,De),mt.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",U._colorsTexture,De));const dn=W.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ye.update(U,W,xn),(en||Pe.receiveShadow!==U.receiveShadow)&&(Pe.receiveShadow=U.receiveShadow,mt.setValue(D,"receiveShadow",U.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(hn.envMap.value=Me,hn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&L.environment!==null&&(hn.envMapIntensity.value=L.environmentIntensity),en&&(mt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&vf(hn,Qs),ae&&q.fog===!0&&j.refreshFogUniforms(hn,ae),j.refreshMaterialUniforms(hn,q,B,V,f.state.transmissionRenderTarget[C.id]),va.upload(D,Zl(Pe),hn,De)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(va.upload(D,Zl(Pe),hn,De),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(D,"center",U.center),mt.setValue(D,"modelViewMatrix",U.modelViewMatrix),mt.setValue(D,"normalMatrix",U.normalMatrix),mt.setValue(D,"modelMatrix",U.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Gt=q.uniformsGroups;for(let jt=0,ao=Gt.length;jt<ao;jt++){const Pi=Gt[jt];O.update(Pi,xn),O.bind(Pi,xn)}}return xn}function vf(C,L){C.ambientLightColor.needsUpdate=L,C.lightProbe.needsUpdate=L,C.directionalLights.needsUpdate=L,C.directionalLightShadows.needsUpdate=L,C.pointLights.needsUpdate=L,C.pointLightShadows.needsUpdate=L,C.spotLights.needsUpdate=L,C.spotLightShadows.needsUpdate=L,C.rectAreaLights.needsUpdate=L,C.hemisphereLights.needsUpdate=L}function xf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,L,W){const q=_e.get(C);q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),_e.get(C.texture).__webglTexture=L,_e.get(C.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,L){const W=_e.get(C);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0};const Sf=D.createFramebuffer();this.setRenderTarget=function(C,L=0,W=0){A=C,w=L,b=W;let q=!0,U=null,ae=!1,xe=!1;if(C){const Me=_e.get(C);if(Me.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Me.__webglFramebuffer===void 0)De.setupRenderTarget(C);else if(Me.__hasExternalTextures)De.rebindTextures(C,_e.get(C.texture).__webglTexture,_e.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ie=C.depthTexture;if(Me.__boundDepthTexture!==Ie){if(Ie!==null&&_e.has(Ie)&&(C.width!==Ie.image.width||C.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(C)}}const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(xe=!0);const ze=_e.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[L])?U=ze[L][W]:U=ze[L],ae=!0):C.samples>0&&De.useMultisampledRTT(C)===!1?U=_e.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?U=ze[W]:U=ze,R.copy(C.viewport),I.copy(C.scissor),P=C.scissorTest}else R.copy(ne).multiplyScalar(B).floor(),I.copy(Se).multiplyScalar(B).floor(),P=We;if(W!==0&&(U=Sf),he.bindFramebuffer(D.FRAMEBUFFER,U)&&q&&he.drawBuffers(C,U),he.viewport(R),he.scissor(I),he.setScissorTest(P),ae){const Me=_e.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,Me.__webglTexture,W)}else if(xe){const Me=_e.get(C.texture),ke=L;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.__webglTexture,W,ke)}else if(C!==null&&W!==0){const Me=_e.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Me.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(C,L,W,q,U,ae,xe,we=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=_e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){he.bindFramebuffer(D.FRAMEBUFFER,Me);try{const ke=C.textures[we],ze=ke.format,Ie=ke.type;if(!Ve.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=C.width-q&&W>=0&&W<=C.height-U&&(C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+we),D.readPixels(L,W,q,U,pe.convert(ze),pe.convert(Ie),ae))}finally{const ke=A!==null?_e.get(A).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(C,L,W,q,U,ae,xe,we=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=_e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me)if(L>=0&&L<=C.width-q&&W>=0&&W<=C.height-U){he.bindFramebuffer(D.FRAMEBUFFER,Me);const ke=C.textures[we],ze=ke.format,Ie=ke.type;if(!Ve.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+we),D.readPixels(L,W,q,U,pe.convert(ze),pe.convert(Ie),0);const at=A!==null?_e.get(A).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,at);const xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ix(D,xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae),D.deleteBuffer(Ze),D.deleteSync(xt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,L=null,W=0){const q=Math.pow(2,-W),U=Math.floor(C.image.width*q),ae=Math.floor(C.image.height*q),xe=L!==null?L.x:0,we=L!==null?L.y:0;De.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,xe,we,U,ae),he.unbindTexture()};const yf=D.createFramebuffer(),Mf=D.createFramebuffer();this.copyTextureToTexture=function(C,L,W=null,q=null,U=0,ae=null){ae===null&&(U!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=U,U=0):ae=0);let xe,we,Me,ke,ze,Ie,Ze,at,xt;const yt=C.isCompressedTexture?C.mipmaps[ae]:C.image;if(W!==null)xe=W.max.x-W.min.x,we=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,ke=W.min.x,ze=W.min.y,Ie=W.isBox3?W.min.z:0;else{const dn=Math.pow(2,-U);xe=Math.floor(yt.width*dn),we=Math.floor(yt.height*dn),C.isDataArrayTexture?Me=yt.depth:C.isData3DTexture?Me=Math.floor(yt.depth*dn):Me=1,ke=0,ze=0,Ie=0}q!==null?(Ze=q.x,at=q.y,xt=q.z):(Ze=0,at=0,xt=0);const et=pe.convert(L.format),Pe=pe.convert(L.type);let Ut;L.isData3DTexture?(De.setTexture3D(L,0),Ut=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(De.setTexture2DArray(L,0),Ut=D.TEXTURE_2D_ARRAY):(De.setTexture2D(L,0),Ut=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const st=D.getParameter(D.UNPACK_ROW_LENGTH),xn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ss=D.getParameter(D.UNPACK_SKIP_PIXELS),en=D.getParameter(D.UNPACK_SKIP_ROWS),Qs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,yt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie);const mt=C.isDataArrayTexture||C.isData3DTexture,hn=L.isDataArrayTexture||L.isData3DTexture;if(C.isDepthTexture){const dn=_e.get(C),Gt=_e.get(L),jt=_e.get(dn.__renderTarget),ao=_e.get(Gt.__renderTarget);he.bindFramebuffer(D.READ_FRAMEBUFFER,jt.__webglFramebuffer),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,ao.__webglFramebuffer);for(let Pi=0;Pi<Me;Pi++)mt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.get(C).__webglTexture,U,Ie+Pi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.get(L).__webglTexture,ae,xt+Pi)),D.blitFramebuffer(ke,ze,xe,we,Ze,at,xe,we,D.DEPTH_BUFFER_BIT,D.NEAREST);he.bindFramebuffer(D.READ_FRAMEBUFFER,null),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(U!==0||C.isRenderTargetTexture||_e.has(C)){const dn=_e.get(C),Gt=_e.get(L);he.bindFramebuffer(D.READ_FRAMEBUFFER,yf),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mf);for(let jt=0;jt<Me;jt++)mt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dn.__webglTexture,U,Ie+jt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dn.__webglTexture,U),hn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Gt.__webglTexture,ae,xt+jt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Gt.__webglTexture,ae),U!==0?D.blitFramebuffer(ke,ze,xe,we,Ze,at,xe,we,D.COLOR_BUFFER_BIT,D.NEAREST):hn?D.copyTexSubImage3D(Ut,ae,Ze,at,xt+jt,ke,ze,xe,we):D.copyTexSubImage2D(Ut,ae,Ze,at,ke,ze,xe,we);he.bindFramebuffer(D.READ_FRAMEBUFFER,null),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else hn?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Ut,ae,Ze,at,xt,xe,we,Me,et,Pe,yt.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(Ut,ae,Ze,at,xt,xe,we,Me,et,yt.data):D.texSubImage3D(Ut,ae,Ze,at,xt,xe,we,Me,et,Pe,yt):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ae,Ze,at,xe,we,et,Pe,yt.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ae,Ze,at,yt.width,yt.height,et,yt.data):D.texSubImage2D(D.TEXTURE_2D,ae,Ze,at,xe,we,et,Pe,yt);D.pixelStorei(D.UNPACK_ROW_LENGTH,st),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ss),D.pixelStorei(D.UNPACK_SKIP_ROWS,en),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qs),ae===0&&L.generateMipmaps&&D.generateMipmap(Ut),he.unbindTexture()},this.copyTextureToTexture3D=function(C,L,W=null,q=null,U=0){return Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,L,W,q,U)},this.initRenderTarget=function(C){_e.get(C).__webglFramebuffer===void 0&&De.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?De.setTextureCube(C,0):C.isData3DTexture?De.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?De.setTexture2DArray(C,0):De.setTexture2D(C,0),he.unbindTexture()},this.resetState=function(){w=0,b=0,A=null,he.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ST=new af(-1,1,1,-1,0,1);class yT extends hi{constructor(){super(),this.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gn([0,2,0,0,2,0],2))}}const MT=new yT;class Wl{constructor(e){this._mesh=new Rn(MT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ST)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ET extends Js{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pr.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Wl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class vh extends Js{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class TT extends Js{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class bT{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Xe);this._width=n.width,this._height=n.height,t=new In(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ii}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ET(xa),this.copyPass.material.blending=ni,this.clock=new of}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vh!==void 0&&(a instanceof vh?n=!0:a instanceof TT&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class wT extends Js{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new tt}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const AT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Gs extends Js{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Xe(e.x,e.y):new Xe(256,256),this.clearColor=new tt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new In(r,a,{type:ii}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new In(r,a,{type:ii});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new In(r,a,{type:ii});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=AT;this.highPassUniforms=pr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Xe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=pr.clone(xa.uniforms),this.blendMaterial=new Vt({uniforms:this.copyUniforms,vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader,blending:tc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new tt,this._oldClearAlpha=1,this._basic=new Vl,this._fsQuad=new Wl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Xe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Gs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Gs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Xe(.5,.5)},direction:{value:new Xe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Gs.BlurDirectionX=new Xe(1,0);Gs.BlurDirectionY=new Xe(0,1);const la={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class CT extends Js{constructor(){super(),this.uniforms=pr.clone(la.uniforms),this.material=new Px({name:la.name,uniforms:this.uniforms,vertexShader:la.vertexShader,fragmentShader:la.fragmentShader}),this._fsQuad=new Wl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Id?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Dd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Od?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ud?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fd?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ld&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const RT=(i=1,e=.1)=>{let t=i;return n=>(t+=(n-t)*e,t)},Pr=new xT({antialias:!0});Pr.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Pr.domElement);const ff=new Nx,mr=new pn(45,window.innerWidth/window.innerHeight,.1,1e3),Ns={red:.5,green:.7,blue:1,threshold:.5,strength:.5,radius:.8};Pr.outputColorSpace=sn;const NT=new Gs(new Xe(window.innerWidth,window.innerHeight),Ns.strength,Ns.radius,Ns.threshold),Or=new bT(Pr);Or.addPass(new wT(ff,mr));Or.addPass(NT);Or.addPass(new CT);mr.position.set(0,-2,14);mr.lookAt(0,0,0);const Sa={u_time:{type:"f",value:0},u_frequency:{type:"f",value:0},u_red:{type:"f",value:Ns.red},u_green:{type:"f",value:Ns.green},u_blue:{type:"f",value:Ns.blue},u_midiNote:{type:"f",value:0},u_velocity:{type:"f",value:0}},IT=new Vt({uniforms:Sa,vertexShader:document.getElementById("vertexshader").textContent,fragmentShader:document.getElementById("fragmentshader").textContent,wireframe:!0}),Hc=new Rn(new Gl(4,30),IT);ff.add(Hc);let pf={getFrequency:()=>1};const DT=RT(1,.2),zo=new of;function mf(){const i=zo.getDelta();Hc.rotation.x+=.1*i,Hc.rotation.y+=.2*i,Sa.u_time.value=zo.getElapsedTime(),Sa.u_time.value=zo.getElapsedTime(),Sa.u_frequency.value=DT(pf.getFrequency()),Or.render(),requestAnimationFrame(mf)}mf();window.addEventListener("resize",()=>{mr.aspect=window.innerWidth/window.innerHeight,mr.updateProjectionMatrix(),Pr.setSize(window.innerWidth,window.innerHeight),Or.setSize(window.innerWidth,window.innerHeight)});function PT(i,e=-100){let t=0,n=0;for(let s=0;s<i.length;s++)i[s]>e&&(t+=i[s],n++);return n>0?t/n:0}const OT=i=>{pf.getFrequency=()=>PT(i.getValue())/3},LT=new El(Us).toDestination(),UT="bright_acoustic_piano-mp3",_f=new Cl(2.5).toDestination(),Ei=new Cr({urls:x0(1,7,".mp3"),release:1,baseUrl:`https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/${UT}/`,onload:()=>{console.log("Sampler ready!",Ei)}}).toDestination();Ei.envelope={attack:.01,decay:.1,sustain:.7,release:.5};Ei.connect(_f);window.addEventListener("click",async()=>{var e;await Kv();const i=new Rl("fft",32);Ei.connect(i),OT(i),(e=document.getElementById("press"))==null||e.remove()});window.midiano={synth:LT,piano:Ei};const ua={};ue.enable(i=>{if(i){console.log("WebMidi не доступен:",i);return}const e=ue.inputs[0];e==null||e.addListener("noteon",async t=>{const n=t.note.name+(t.note.accidental||"")+t.note.octave,s=ec(n);ua[s]=Date.now(),Ei.triggerAttack(s,void 0,t.velocity),console.log(`Нота: ${s}, velocity: ${t.velocity}`)}),e==null||e.addListener("noteoff",t=>{const n=t.note.name+(t.note.accidental||"")+t.note.octave,s=ec(n);if(!ua[s])return;const r=Date.now()-ua[s];_f.decay=Math.min(r*.3,4),Ei.release=Math.min(r*.7,3),Ei.triggerRelease(s),delete ua[s]})});
