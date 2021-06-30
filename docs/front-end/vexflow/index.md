# vexflow
> VexFlow 是一个开源的在线乐谱渲染 API。它完全用 JavaScript 编写，并在浏览器中运行。VexFlow 支持 HTML5 Canvas 和 SVG。

## 怎样使用

```sh
$ npm install vexflow
```

#### 使用EasyScore
``` js
const VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
var vf = new VF.Factory({renderer: {elementId: 'boo', height: 700}});
var score = vf.EasyScore();
var system = vf.System();

system.addStave({
  voices: [
    score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up'})),
    score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
  ]
}).addClef('treble').addTimeSignature('4/4');

system.addStave({
  voices: [
    score.voice(score.notes('C#3/q, B2, A2/8, B2, C#3, D3', {clef: 'bass', stem: 'up'})),
    score.voice(score.notes('C#2/h, C#2', {clef: 'bass', stem: 'down'}))
  ]
}).addClef('bass').addTimeSignature('4/4');

system.addConnector()

vf.draw();
```

#### 使用原生api
声明一个容器
```html
<div id="boo"></div>
```

创建五线谱
``` js
import Vex from 'vexflow';
 
const VF = Vex.Flow;
 
// Create an SVG renderer and attach it to the DIV element named "vf".
const div = document.getElementById("vf")
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
 
// Configure the rendering context.
renderer.resize(500, 500);
const context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
 
// Create a stave of width 400 at position 10, 40 on the canvas.
const stave = new VF.Stave(10, 40, 400);
 
// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");
 
// Connect it to the rendering context and draw!
stave.setContext(context).draw();
```

添加音符
``` js
var notes = [
  // A quarter-note C.
  new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),

  // A quarter-note D.
  new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),

  // A quarter-note rest. Note that the key (b/4) specifies the vertical
  // position of the rest.
  new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "qr" }),

  // A C-Major chord.
  new VF.StaveNote({clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q" })
];

// Create a voice in 4/4 and add the notes from above
var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
voice.addTickables(notes);

// Format and justify the notes to 400 pixels.
var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

// Render voice
voice.draw(context, stave);
```