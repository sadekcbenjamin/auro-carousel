<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Carousel

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
`<auro-carousel>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of displaying a group of elements in a scrollable container.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-carousel use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-carousel>` element should be used in situations where users may:

* Scroll through multiple flight date options or shoulder dates
* Scroll through multiple images
<!-- AURO-GENERATED-CONTENT:END -->

## Examples

### Basic

The following example illustrates a the default behavior of the carousel element. Notice how the toggle buttons on the left and the right only appear when there are enough nodes in that direction. This element is fully responsive whereas the l/r toggles will not appear on a mobile device and finger-swipe will operate as expected.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-carousel centerSelected>
    <auro-pane date="2020-10-10" price="$435"></auro-pane>
    <auro-pane date="2020-10-11" price="$435"></auro-pane>
    <auro-pane date="2020-10-12" price="$435"></auro-pane>
    <auro-pane date="2020-10-13" selected price="$666"></auro-pane>
    <auro-pane date="2020-10-14" price="$435" disabled></auro-pane>
    <auro-pane date="2020-10-15" price="$435"></auro-pane>
    <auro-pane date="2020-10-16" price="$435"></auro-pane>
    <auro-pane date="2020-10-17" price="$435"></auro-pane>
    <auro-pane date="2020-10-18" price="$435"></auro-pane>
    <auro-pane date="2020-10-19" price="$435"></auro-pane>
  </auro-carousel>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-carousel centerSelected>
  <auro-pane date="2020-10-10" price="$435"></auro-pane>
  <auro-pane date="2020-10-11" price="$435"></auro-pane>
  <auro-pane date="2020-10-12" price="$435"></auro-pane>
  <auro-pane date="2020-10-13" selected price="$666"></auro-pane>
  <auro-pane date="2020-10-14" price="$435" disabled></auro-pane>
  <auro-pane date="2020-10-15" price="$435"></auro-pane>
  <auro-pane date="2020-10-16" price="$435"></auro-pane>
  <auro-pane date="2020-10-17" price="$435"></auro-pane>
  <auro-pane date="2020-10-18" price="$435"></auro-pane>
  <auro-pane date="2020-10-19" price="$435"></auro-pane>
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Carousel of images w/custom scroll distance

The following example illustrates a the default behavior of the carousel element. Notice how the toggle buttons on the left and the right only appear when there are enough nodes in that direction. This element is fully responsive whereas the l/r toggles will not appear on a mobile device and finger-swipe will operate as expected.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/images.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/images.html -->
  <auro-carousel label="Images" scrolldistance="600">
    <img src="https://picsum.photos/200?random=0" alt="Random insert 0">
    <img src="https://picsum.photos/200?random=1" alt="Random insert 1">
    <img src="https://picsum.photos/200?random=2" alt="Random insert 2">
    <img src="https://picsum.photos/200?random=3" alt="Random insert 3">
    <img src="https://picsum.photos/200?random=4" alt="Random insert 4">
    <img src="https://picsum.photos/200?random=5" alt="Random insert 5">
    <img src="https://picsum.photos/200?random=6" alt="Random insert 6">
    <img src="https://picsum.photos/200?random=7" alt="Random insert 7">
    <img src="https://picsum.photos/200?random=8" alt="Random insert 8">
    <img src="https://picsum.photos/200?random=9" alt="Random insert 9">
    <img src="https://picsum.photos/200?random=10" alt="Random insert 10">
    <img src="https://picsum.photos/200?random=11" alt="Random insert 11">
    <img src="https://picsum.photos/200?random=12" alt="Random insert 12">
    <img src="https://picsum.photos/200?random=13" alt="Random insert 13">
    <img src="https://picsum.photos/200?random=14" alt="Random insert 14">
    <img src="https://picsum.photos/200?random=15" alt="Random insert 15">
    <img src="https://picsum.photos/200?random=16" alt="Random insert 16">
    <img src="https://picsum.photos/200?random=17" alt="Random insert 17">
    <img src="https://picsum.photos/200?random=18" alt="Random insert 18">
    <img src="https://picsum.photos/200?random=19" alt="Random insert 19">
    <img src="https://picsum.photos/200?random=20" alt="Random insert 20">
    <img src="https://picsum.photos/200?random=21" alt="Random insert 21">
    <img src="https://picsum.photos/200?random=22" alt="Random insert 22">
    <img src="https://picsum.photos/200?random=23" alt="Random insert 23">
    <img src="https://picsum.photos/200?random=24" alt="Random insert 24">
    <img src="https://picsum.photos/200?random=25" alt="Random insert 25">
    <img src="https://picsum.photos/200?random=26" alt="Random insert 26">
    <img src="https://picsum.photos/200?random=27" alt="Random insert 27">
    <img src="https://picsum.photos/200?random=28" alt="Random insert 28">
    <img src="https://picsum.photos/200?random=29" alt="Random insert 29">
    <img src="https://picsum.photos/200?random=30" alt="Random insert 30">
    <img src="https://picsum.photos/200?random=31" alt="Random insert 31">
    <img src="https://picsum.photos/200?random=32" alt="Random insert 32">
    <img src="https://picsum.photos/200?random=33" alt="Random insert 33">
    <img src="https://picsum.photos/200?random=34" alt="Random insert 34">
    <img src="https://picsum.photos/200?random=35" alt="Random insert 35">
    <img src="https://picsum.photos/200?random=36" alt="Random insert 36">
    <img src="https://picsum.photos/200?random=37" alt="Random insert 37">
    <img src="https://picsum.photos/200?random=38" alt="Random insert 38">
    <img src="https://picsum.photos/200?random=39" alt="Random insert 39">
    <img src="https://picsum.photos/200?random=40" alt="Random insert 40">
    <img src="https://picsum.photos/200?random=41" alt="Random insert 41">
    <img src="https://picsum.photos/200?random=42" alt="Random insert 42">
    <img src="https://picsum.photos/200?random=43" alt="Random insert 43">
    <img src="https://picsum.photos/200?random=44" alt="Random insert 44">
    <img src="https://picsum.photos/200?random=45" alt="Random insert 45">
    <img src="https://picsum.photos/200?random=46" alt="Random insert 46">
    <img src="https://picsum.photos/200?random=47" alt="Random insert 47">
    <img src="https://picsum.photos/200?random=48" alt="Random insert 48">
    <img src="https://picsum.photos/200?random=49" alt="Random insert 49">
    <img src="https://picsum.photos/200?random=50" alt="Random insert 50">
    <img src="https://picsum.photos/200?random=51" alt="Random insert 51">
    <img src="https://picsum.photos/200?random=52" alt="Random insert 52">
    <img src="https://picsum.photos/200?random=53" alt="Random insert 53">
    <img src="https://picsum.photos/200?random=54" alt="Random insert 54">
    <img src="https://picsum.photos/200?random=55" alt="Random insert 55">
    <img src="https://picsum.photos/200?random=56" alt="Random insert 56">
    <img src="https://picsum.photos/200?random=57" alt="Random insert 57">
    <img src="https://picsum.photos/200?random=58" alt="Random insert 58">
    <img src="https://picsum.photos/200?random=59" alt="Random insert 59">
    <img src="https://picsum.photos/200?random=60" alt="Random insert 60">
    <img src="https://picsum.photos/200?random=61" alt="Random insert 61">
    <img src="https://picsum.photos/200?random=62" alt="Random insert 62">
    <img src="https://picsum.photos/200?random=63" alt="Random insert 63">
    <img src="https://picsum.photos/200?random=64" alt="Random insert 64">
    <img src="https://picsum.photos/200?random=65" alt="Random insert 65">
    <img src="https://picsum.photos/200?random=66" alt="Random insert 66">
    <img src="https://picsum.photos/200?random=67" alt="Random insert 67">
    <img src="https://picsum.photos/200?random=68" alt="Random insert 68">
    <img src="https://picsum.photos/200?random=69" alt="Random insert 69">
    <img src="https://picsum.photos/200?random=70" alt="Random insert 70">
    <img src="https://picsum.photos/200?random=71" alt="Random insert 71">
    <img src="https://picsum.photos/200?random=72" alt="Random insert 72">
    <img src="https://picsum.photos/200?random=73" alt="Random insert 73">
    <img src="https://picsum.photos/200?random=74" alt="Random insert 74">
    <img src="https://picsum.photos/200?random=75" alt="Random insert 75">
    <img src="https://picsum.photos/200?random=76" alt="Random insert 76">
    <img src="https://picsum.photos/200?random=77" alt="Random insert 77">
    <img src="https://picsum.photos/200?random=78" alt="Random insert 78">
    <img src="https://picsum.photos/200?random=79" alt="Random insert 79">
    <img src="https://picsum.photos/200?random=80" alt="Random insert 80">
    <img src="https://picsum.photos/200?random=81" alt="Random insert 81">
    <img src="https://picsum.photos/200?random=82" alt="Random insert 82">
    <img src="https://picsum.photos/200?random=83" alt="Random insert 83">
    <img src="https://picsum.photos/200?random=84" alt="Random insert 84">
    <img src="https://picsum.photos/200?random=85" alt="Random insert 85">
    <img src="https://picsum.photos/200?random=86" alt="Random insert 86">
    <img src="https://picsum.photos/200?random=87" alt="Random insert 87">
    <img src="https://picsum.photos/200?random=88" alt="Random insert 88">
    <img src="https://picsum.photos/200?random=89" alt="Random insert 89">
    <img src="https://picsum.photos/200?random=90" alt="Random insert 90">
    <img src="https://picsum.photos/200?random=91" alt="Random insert 91">
    <img src="https://picsum.photos/200?random=92" alt="Random insert 92">
    <img src="https://picsum.photos/200?random=93" alt="Random insert 93">
    <img src="https://picsum.photos/200?random=94" alt="Random insert 94">
    <img src="https://picsum.photos/200?random=95" alt="Random insert 95">
    <img src="https://picsum.photos/200?random=96" alt="Random insert 96">
    <img src="https://picsum.photos/200?random=97" alt="Random insert 97">
    <img src="https://picsum.photos/200?random=98" alt="Random insert 98">
    <img src="https://picsum.photos/200?random=99" alt="Random insert 99">
  </auro-carousel>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/images.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/images.html -->

```html
<auro-carousel label="Images" scrolldistance="600">
  <img src="https://picsum.photos/200?random=0" alt="Random insert 0">
  <img src="https://picsum.photos/200?random=1" alt="Random insert 1">
  <img src="https://picsum.photos/200?random=2" alt="Random insert 2">
  <img src="https://picsum.photos/200?random=3" alt="Random insert 3">
  <img src="https://picsum.photos/200?random=4" alt="Random insert 4">
  <img src="https://picsum.photos/200?random=5" alt="Random insert 5">
  <img src="https://picsum.photos/200?random=6" alt="Random insert 6">
  <img src="https://picsum.photos/200?random=7" alt="Random insert 7">
  <img src="https://picsum.photos/200?random=8" alt="Random insert 8">
  <img src="https://picsum.photos/200?random=9" alt="Random insert 9">
  <img src="https://picsum.photos/200?random=10" alt="Random insert 10">
  <img src="https://picsum.photos/200?random=11" alt="Random insert 11">
  <img src="https://picsum.photos/200?random=12" alt="Random insert 12">
  <img src="https://picsum.photos/200?random=13" alt="Random insert 13">
  <img src="https://picsum.photos/200?random=14" alt="Random insert 14">
  <img src="https://picsum.photos/200?random=15" alt="Random insert 15">
  <img src="https://picsum.photos/200?random=16" alt="Random insert 16">
  <img src="https://picsum.photos/200?random=17" alt="Random insert 17">
  <img src="https://picsum.photos/200?random=18" alt="Random insert 18">
  <img src="https://picsum.photos/200?random=19" alt="Random insert 19">
  <img src="https://picsum.photos/200?random=20" alt="Random insert 20">
  <img src="https://picsum.photos/200?random=21" alt="Random insert 21">
  <img src="https://picsum.photos/200?random=22" alt="Random insert 22">
  <img src="https://picsum.photos/200?random=23" alt="Random insert 23">
  <img src="https://picsum.photos/200?random=24" alt="Random insert 24">
  <img src="https://picsum.photos/200?random=25" alt="Random insert 25">
  <img src="https://picsum.photos/200?random=26" alt="Random insert 26">
  <img src="https://picsum.photos/200?random=27" alt="Random insert 27">
  <img src="https://picsum.photos/200?random=28" alt="Random insert 28">
  <img src="https://picsum.photos/200?random=29" alt="Random insert 29">
  <img src="https://picsum.photos/200?random=30" alt="Random insert 30">
  <img src="https://picsum.photos/200?random=31" alt="Random insert 31">
  <img src="https://picsum.photos/200?random=32" alt="Random insert 32">
  <img src="https://picsum.photos/200?random=33" alt="Random insert 33">
  <img src="https://picsum.photos/200?random=34" alt="Random insert 34">
  <img src="https://picsum.photos/200?random=35" alt="Random insert 35">
  <img src="https://picsum.photos/200?random=36" alt="Random insert 36">
  <img src="https://picsum.photos/200?random=37" alt="Random insert 37">
  <img src="https://picsum.photos/200?random=38" alt="Random insert 38">
  <img src="https://picsum.photos/200?random=39" alt="Random insert 39">
  <img src="https://picsum.photos/200?random=40" alt="Random insert 40">
  <img src="https://picsum.photos/200?random=41" alt="Random insert 41">
  <img src="https://picsum.photos/200?random=42" alt="Random insert 42">
  <img src="https://picsum.photos/200?random=43" alt="Random insert 43">
  <img src="https://picsum.photos/200?random=44" alt="Random insert 44">
  <img src="https://picsum.photos/200?random=45" alt="Random insert 45">
  <img src="https://picsum.photos/200?random=46" alt="Random insert 46">
  <img src="https://picsum.photos/200?random=47" alt="Random insert 47">
  <img src="https://picsum.photos/200?random=48" alt="Random insert 48">
  <img src="https://picsum.photos/200?random=49" alt="Random insert 49">
  <img src="https://picsum.photos/200?random=50" alt="Random insert 50">
  <img src="https://picsum.photos/200?random=51" alt="Random insert 51">
  <img src="https://picsum.photos/200?random=52" alt="Random insert 52">
  <img src="https://picsum.photos/200?random=53" alt="Random insert 53">
  <img src="https://picsum.photos/200?random=54" alt="Random insert 54">
  <img src="https://picsum.photos/200?random=55" alt="Random insert 55">
  <img src="https://picsum.photos/200?random=56" alt="Random insert 56">
  <img src="https://picsum.photos/200?random=57" alt="Random insert 57">
  <img src="https://picsum.photos/200?random=58" alt="Random insert 58">
  <img src="https://picsum.photos/200?random=59" alt="Random insert 59">
  <img src="https://picsum.photos/200?random=60" alt="Random insert 60">
  <img src="https://picsum.photos/200?random=61" alt="Random insert 61">
  <img src="https://picsum.photos/200?random=62" alt="Random insert 62">
  <img src="https://picsum.photos/200?random=63" alt="Random insert 63">
  <img src="https://picsum.photos/200?random=64" alt="Random insert 64">
  <img src="https://picsum.photos/200?random=65" alt="Random insert 65">
  <img src="https://picsum.photos/200?random=66" alt="Random insert 66">
  <img src="https://picsum.photos/200?random=67" alt="Random insert 67">
  <img src="https://picsum.photos/200?random=68" alt="Random insert 68">
  <img src="https://picsum.photos/200?random=69" alt="Random insert 69">
  <img src="https://picsum.photos/200?random=70" alt="Random insert 70">
  <img src="https://picsum.photos/200?random=71" alt="Random insert 71">
  <img src="https://picsum.photos/200?random=72" alt="Random insert 72">
  <img src="https://picsum.photos/200?random=73" alt="Random insert 73">
  <img src="https://picsum.photos/200?random=74" alt="Random insert 74">
  <img src="https://picsum.photos/200?random=75" alt="Random insert 75">
  <img src="https://picsum.photos/200?random=76" alt="Random insert 76">
  <img src="https://picsum.photos/200?random=77" alt="Random insert 77">
  <img src="https://picsum.photos/200?random=78" alt="Random insert 78">
  <img src="https://picsum.photos/200?random=79" alt="Random insert 79">
  <img src="https://picsum.photos/200?random=80" alt="Random insert 80">
  <img src="https://picsum.photos/200?random=81" alt="Random insert 81">
  <img src="https://picsum.photos/200?random=82" alt="Random insert 82">
  <img src="https://picsum.photos/200?random=83" alt="Random insert 83">
  <img src="https://picsum.photos/200?random=84" alt="Random insert 84">
  <img src="https://picsum.photos/200?random=85" alt="Random insert 85">
  <img src="https://picsum.photos/200?random=86" alt="Random insert 86">
  <img src="https://picsum.photos/200?random=87" alt="Random insert 87">
  <img src="https://picsum.photos/200?random=88" alt="Random insert 88">
  <img src="https://picsum.photos/200?random=89" alt="Random insert 89">
  <img src="https://picsum.photos/200?random=90" alt="Random insert 90">
  <img src="https://picsum.photos/200?random=91" alt="Random insert 91">
  <img src="https://picsum.photos/200?random=92" alt="Random insert 92">
  <img src="https://picsum.photos/200?random=93" alt="Random insert 93">
  <img src="https://picsum.photos/200?random=94" alt="Random insert 94">
  <img src="https://picsum.photos/200?random=95" alt="Random insert 95">
  <img src="https://picsum.photos/200?random=96" alt="Random insert 96">
  <img src="https://picsum.photos/200?random=97" alt="Random insert 97">
  <img src="https://picsum.photos/200?random=98" alt="Random insert 98">
  <img src="https://picsum.photos/200?random=99" alt="Random insert 99">
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-carousel` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@aurodesignsystem/auro-carousel';
registerComponent('custom-carousel');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-carousel` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom.html -->
  <custom-carousel label="Flight options" scrollDistance="420" id="demo1">
    <auro-pane date="2020-10-10" price="$435"></auro-pane>
    <auro-pane date="2020-10-11" price="$435"></auro-pane>
    <auro-pane date="2020-10-12" price="$435"></auro-pane>
    <auro-pane date="2020-10-13" selected price="$435"></auro-pane>
    <auro-pane date="2020-10-14" price="$435" disabled></auro-pane>
    <auro-pane date="2020-10-15" price="$435"></auro-pane>
    <auro-pane date="2020-10-16" price="$435"></auro-pane>
    <auro-pane date="2020-10-17" price="$435"></auro-pane>
    <auro-pane date="2020-10-18" price="$435"></auro-pane>
    <auro-pane date="2020-10-19" price="$435"></auro-pane>
    <auro-pane date="2020-10-16" price="$435"></auro-pane>
    <auro-pane date="2020-10-17" price="$435"></auro-pane>
    <auro-pane date="2020-10-18" price="$435"></auro-pane>
    <auro-pane date="2020-10-19" price="$435"></auro-pane>
  </custom-carousel>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom.html -->

```html
<custom-carousel label="Flight options" scrollDistance="420" id="demo1">
  <auro-pane date="2020-10-10" price="$435"></auro-pane>
  <auro-pane date="2020-10-11" price="$435"></auro-pane>
  <auro-pane date="2020-10-12" price="$435"></auro-pane>
  <auro-pane date="2020-10-13" selected price="$435"></auro-pane>
  <auro-pane date="2020-10-14" price="$435" disabled></auro-pane>
  <auro-pane date="2020-10-15" price="$435"></auro-pane>
  <auro-pane date="2020-10-16" price="$435"></auro-pane>
  <auro-pane date="2020-10-17" price="$435"></auro-pane>
  <auro-pane date="2020-10-18" price="$435"></auro-pane>
  <auro-pane date="2020-10-19" price="$435"></auro-pane>
  <auro-pane date="2020-10-16" price="$435"></auro-pane>
  <auro-pane date="2020-10-17" price="$435"></auro-pane>
  <auro-pane date="2020-10-18" price="$435"></auro-pane>
  <auro-pane date="2020-10-19" price="$435"></auro-pane>
</custom-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
