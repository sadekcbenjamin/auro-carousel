<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-carousel

The auro-carousel component displays a group of elements in a scrollable container.

## Properties

| Property         | Attribute        | Type      | Default | Description                                      |
|------------------|------------------|-----------|---------|--------------------------------------------------|
| [centerSelected](#centerSelected) | `centerSelected` | `String`  |         | Apply to outer auro-carousel element to automatically center the selected node on UI render. |
| [displayArrows](#displayArrows)  | `displayArrows`  | `Boolean` |         | Forces left and right navigation to stick in DOM regardless of content width |
| [label](#label)          | `label`          | `String`  |         | The accessible name for the carousel. Logs a console warning if not set. |
| [scrollDistance](#scrollDistance) | `scrollDistance` | `Number`  | 300     | How many pixels to scroll the carousel when the shoulder buttons are triggered. |

## Methods

| Method                  | Type                  | Description                                      |
|-------------------------|-----------------------|--------------------------------------------------|
| [actionOnChildrenReady](#actionOnChildrenReady) | `(): void`            | Function handler for anything that happens when all its children is ready. |
| [centerElement](#centerElement)         | `(el: Element): void` | Centers the given element inside the carousel.<br /><br />**el**: The element to center inside the carousel. Must be a descendant of the carousel. |
| [scrollCarousel](#scrollCarousel)        | `(num: number): void` | Scrolls the carousel by the given amount.<br /><br />**num**: The number of pixels to scroll the carousel by. Positive scrolls to the<br />right, negative scrolls to the left. |
| [scrollToSelected](#scrollToSelected)      | `(): void`            | Scroll to the first child component that have 'selected' attribute. |

## Events

| Event         | Type               | Description                                      |
|---------------|--------------------|--------------------------------------------------|
| [scrollLeft](#scrollLeft)  | `CustomEvent<any>` | when the guest clicks the 'left' carousel button |
| [scrollRight](#scrollRight) | `CustomEvent<any>` | when the guest clicks the 'right' carousel button |

## Slots

| Name | Description                  |
|------|------------------------------|
|      | the elements in the carousel |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Default

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/default.html) -->
      <!-- The below content is automatically added from ./../../apiExamples/default.html -->
      <auro-carousel>
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
      </auro-carousel>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/default.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/default.html -->

```html
<auro-carousel>
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
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Property Examples

#### centerSelected

Apply to the `auro-carousel` element to automatically center the selected node on UI render.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/centerSelected.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/centerSelected.html -->
  <auro-carousel centerSelected>
    <auro-pane date="2020-10-10" price="$435"></auro-pane>
    <auro-pane date="2020-10-11" price="$435"></auro-pane>
    <auro-pane date="2020-10-12" price="$435"></auro-pane>
    <auro-pane date="2020-10-13" price="$435"></auro-pane>
    <auro-pane date="2020-10-14" price="$435"></auro-pane>
    <auro-pane date="2020-10-15" price="$435"></auro-pane>
    <auro-pane date="2020-10-16" price="$435"></auro-pane>
    <auro-pane date="2020-10-17" price="$435"></auro-pane>
    <auro-pane date="2020-10-18" selected price="$435"></auro-pane>
    <auro-pane date="2020-10-19" price="$435"></auro-pane>
    <auro-pane date="2020-10-16" price="$435"></auro-pane>
    <auro-pane date="2020-10-17" price="$435"></auro-pane>
    <auro-pane date="2020-10-18" price="$435"></auro-pane>
    <auro-pane date="2020-10-19" price="$435"></auro-pane>
  </auro-carousel>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/centerSelected.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/centerSelected.html -->

```html
<auro-carousel centerSelected>
  <auro-pane date="2020-10-10" price="$435"></auro-pane>
  <auro-pane date="2020-10-11" price="$435"></auro-pane>
  <auro-pane date="2020-10-12" price="$435"></auro-pane>
  <auro-pane date="2020-10-13" price="$435"></auro-pane>
  <auro-pane date="2020-10-14" price="$435"></auro-pane>
  <auro-pane date="2020-10-15" price="$435"></auro-pane>
  <auro-pane date="2020-10-16" price="$435"></auro-pane>
  <auro-pane date="2020-10-17" price="$435"></auro-pane>
  <auro-pane date="2020-10-18" selected price="$435"></auro-pane>
  <auro-pane date="2020-10-19" price="$435"></auro-pane>
  <auro-pane date="2020-10-16" price="$435"></auro-pane>
  <auro-pane date="2020-10-17" price="$435"></auro-pane>
  <auro-pane date="2020-10-18" price="$435"></auro-pane>
  <auro-pane date="2020-10-19" price="$435"></auro-pane>
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### displayArrows

Using the `displayArrows` attribute will persistently show the left and right arrow buttons without consideration of scroll position.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/displayArrows.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/displayArrows.html -->
  <auro-carousel displayarrows>
    <auro-pane date="2021-10-01"></auro-pane>
    <auro-pane date="2021-10-02"></auro-pane>
    <auro-pane date="2021-10-03"></auro-pane>
    <auro-pane date="2021-10-04"></auro-pane>
    <auro-pane date="2021-10-05"></auro-pane>
    <auro-pane date="2021-10-06"></auro-pane>
    <auro-pane date="2021-10-07"></auro-pane>
    <auro-pane date="2021-10-08"></auro-pane>
    <auro-pane date="2021-10-09"></auro-pane>
    <auro-pane date="2021-10-10"></auro-pane>
    <auro-pane date="2021-10-11"></auro-pane>
    <auro-pane date="2021-10-12" selected></auro-pane>
    <auro-pane date="2021-10-13"></auro-pane>
    <auro-pane date="2021-10-14"></auro-pane>
    <auro-pane date="2021-10-15"></auro-pane>
    <auro-pane date="2021-10-16"></auro-pane>
    <auro-pane date="2021-10-17"></auro-pane>
    <auro-pane date="2021-10-18"></auro-pane>
    <auro-pane date="2021-10-19"></auro-pane>
    <auro-pane date="2021-10-20"></auro-pane>
    <auro-pane date="2021-10-21"></auro-pane>
    <auro-pane date="2021-10-22"></auro-pane>
    <auro-pane date="2021-10-23"></auro-pane>
    <auro-pane date="2021-10-24"></auro-pane>
    <auro-pane date="2021-10-25"></auro-pane>
    <auro-pane date="2021-10-26"></auro-pane>
    <auro-pane date="2021-10-27"></auro-pane>
    <auro-pane date="2021-10-28"></auro-pane>
  </auro-carousel>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/displayArrows.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/displayArrows.html -->

```html
<auro-carousel displayarrows>
  <auro-pane date="2021-10-01"></auro-pane>
  <auro-pane date="2021-10-02"></auro-pane>
  <auro-pane date="2021-10-03"></auro-pane>
  <auro-pane date="2021-10-04"></auro-pane>
  <auro-pane date="2021-10-05"></auro-pane>
  <auro-pane date="2021-10-06"></auro-pane>
  <auro-pane date="2021-10-07"></auro-pane>
  <auro-pane date="2021-10-08"></auro-pane>
  <auro-pane date="2021-10-09"></auro-pane>
  <auro-pane date="2021-10-10"></auro-pane>
  <auro-pane date="2021-10-11"></auro-pane>
  <auro-pane date="2021-10-12" selected></auro-pane>
  <auro-pane date="2021-10-13"></auro-pane>
  <auro-pane date="2021-10-14"></auro-pane>
  <auro-pane date="2021-10-15"></auro-pane>
  <auro-pane date="2021-10-16"></auro-pane>
  <auro-pane date="2021-10-17"></auro-pane>
  <auro-pane date="2021-10-18"></auro-pane>
  <auro-pane date="2021-10-19"></auro-pane>
  <auro-pane date="2021-10-20"></auro-pane>
  <auro-pane date="2021-10-21"></auro-pane>
  <auro-pane date="2021-10-22"></auro-pane>
  <auro-pane date="2021-10-23"></auro-pane>
  <auro-pane date="2021-10-24"></auro-pane>
  <auro-pane date="2021-10-25"></auro-pane>
  <auro-pane date="2021-10-26"></auro-pane>
  <auro-pane date="2021-10-27"></auro-pane>
  <auro-pane date="2021-10-28"></auro-pane>
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### label

The accessible name for the carousel. Logs a console warning if not set.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/label.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/label.html -->
  <auro-carousel label="Flight options">
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
  </auro-carousel>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/label.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/label.html -->

```html
<auro-carousel label="Flight options">
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
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### scrollDistance

How many pixels to scroll the carousel when the shoulder buttons are triggered.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/scrollDistance.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/scrollDistance.html -->
  <auro-carousel scrollDistance="200">
    <auro-pane date="2020-10-10" price="$435"></auro-pane>
    <auro-pane date="2020-10-11" price="$435"></auro-pane>
    <auro-pane date="2020-10-12" price="$435"></auro-pane>
    <auro-pane date="2020-10-13" selected price="$435"></auro-pane>
    <auro-pane date="2020-10-14" price="$435"></auro-pane>
    <auro-pane date="2020-10-15" price="$435"></auro-pane>
    <auro-pane date="2020-10-16" price="$435"></auro-pane>
    <auro-pane date="2020-10-17" price="$435"></auro-pane>
    <auro-pane date="2020-10-18" price="$435"></auro-pane>
    <auro-pane date="2020-10-19" price="$435"></auro-pane>
    <auro-pane date="2020-10-16" price="$435"></auro-pane>
    <auro-pane date="2020-10-17" price="$435"></auro-pane>
    <auro-pane date="2020-10-18" price="$435"></auro-pane>
    <auro-pane date="2020-10-19" price="$435"></auro-pane>
  </auro-carousel>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/scrollDistance.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/scrollDistance.html -->

```html
<auro-carousel scrollDistance="200">
  <auro-pane date="2020-10-10" price="$435"></auro-pane>
  <auro-pane date="2020-10-11" price="$435"></auro-pane>
  <auro-pane date="2020-10-12" price="$435"></auro-pane>
  <auro-pane date="2020-10-13" selected price="$435"></auro-pane>
  <auro-pane date="2020-10-14" price="$435"></auro-pane>
  <auro-pane date="2020-10-15" price="$435"></auro-pane>
  <auro-pane date="2020-10-16" price="$435"></auro-pane>
  <auro-pane date="2020-10-17" price="$435"></auro-pane>
  <auro-pane date="2020-10-18" price="$435"></auro-pane>
  <auro-pane date="2020-10-19" price="$435"></auro-pane>
  <auro-pane date="2020-10-16" price="$435"></auro-pane>
  <auro-pane date="2020-10-17" price="$435"></auro-pane>
  <auro-pane date="2020-10-18" price="$435"></auro-pane>
  <auro-pane date="2020-10-19" price="$435"></auro-pane>
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Method Examples

#### centerElement

The following example illustrates the use of the `centerElement` method. This feature will attempt top center the selected pane element when clicked if there are enough surrounding nodes. This example DOES NOT center on load.

This method requires the user to invoke this feature based on a click event. See both a vanilla JS and React example below.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/centerElement.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/centerElement.html -->
  <auro-carousel label="Flight options" id="centerElement">
    <auro-pane date="2021-10-01"></auro-pane>
    <auro-pane date="2021-10-02"></auro-pane>
    <auro-pane date="2021-10-03"></auro-pane>
    <auro-pane date="2021-10-04"></auro-pane>
    <auro-pane date="2021-10-05"></auro-pane>
    <auro-pane date="2021-10-06"></auro-pane>
    <auro-pane date="2021-10-07"></auro-pane>
    <auro-pane date="2021-10-08"></auro-pane>
    <auro-pane date="2021-10-09"></auro-pane>
    <auro-pane date="2021-10-10"></auro-pane>
    <auro-pane date="2021-10-11"></auro-pane>
    <auro-pane date="2021-10-12" selected></auro-pane>
    <auro-pane date="2021-10-13"></auro-pane>
    <auro-pane date="2021-10-14"></auro-pane>
    <auro-pane date="2021-10-15"></auro-pane>
    <auro-pane date="2021-10-16"></auro-pane>
    <auro-pane date="2021-10-17"></auro-pane>
    <auro-pane date="2021-10-18"></auro-pane>
    <auro-pane date="2021-10-19"></auro-pane>
    <auro-pane date="2021-10-20"></auro-pane>
    <auro-pane date="2021-10-21"></auro-pane>
    <auro-pane date="2021-10-22"></auro-pane>
    <auro-pane date="2021-10-23"></auro-pane>
    <auro-pane date="2021-10-24"></auro-pane>
    <auro-pane date="2021-10-25"></auro-pane>
    <auro-pane date="2021-10-26"></auro-pane>
    <auro-pane date="2021-10-27"></auro-pane>
    <auro-pane date="2021-10-28"></auro-pane>
  </auro-carousel>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/centerElement.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/centerElement.html -->

```html
<auro-carousel label="Flight options" id="centerElement">
  <auro-pane date="2021-10-01"></auro-pane>
  <auro-pane date="2021-10-02"></auro-pane>
  <auro-pane date="2021-10-03"></auro-pane>
  <auro-pane date="2021-10-04"></auro-pane>
  <auro-pane date="2021-10-05"></auro-pane>
  <auro-pane date="2021-10-06"></auro-pane>
  <auro-pane date="2021-10-07"></auro-pane>
  <auro-pane date="2021-10-08"></auro-pane>
  <auro-pane date="2021-10-09"></auro-pane>
  <auro-pane date="2021-10-10"></auro-pane>
  <auro-pane date="2021-10-11"></auro-pane>
  <auro-pane date="2021-10-12" selected></auro-pane>
  <auro-pane date="2021-10-13"></auro-pane>
  <auro-pane date="2021-10-14"></auro-pane>
  <auro-pane date="2021-10-15"></auro-pane>
  <auro-pane date="2021-10-16"></auro-pane>
  <auro-pane date="2021-10-17"></auro-pane>
  <auro-pane date="2021-10-18"></auro-pane>
  <auro-pane date="2021-10-19"></auro-pane>
  <auro-pane date="2021-10-20"></auro-pane>
  <auro-pane date="2021-10-21"></auro-pane>
  <auro-pane date="2021-10-22"></auro-pane>
  <auro-pane date="2021-10-23"></auro-pane>
  <auro-pane date="2021-10-24"></auro-pane>
  <auro-pane date="2021-10-25"></auro-pane>
  <auro-pane date="2021-10-26"></auro-pane>
  <auro-pane date="2021-10-27"></auro-pane>
  <auro-pane date="2021-10-28"></auro-pane>
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/centerElement.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/centerElement.js -->

```js
// Vanilla JS example
// -------------------------

export function centerElementExample() {
  const carousel = document.querySelector('auro-carousel#centerElement');
  const panes = carousel.querySelectorAll('auro-pane');
  let selectedPane = carousel.querySelector('auro-pane[selected]');

  panes.forEach(pane => pane.addEventListener('click', () => {
    selectedPane.selected = false;
    pane.selected = true;
    selectedPane = pane;
    carousel.centerElement(selectedPane);
  }));
}
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/centerElementReact.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/centerElementReact.js -->

```js
// React example
// -------------------------

const days = [...Array(28).keys()];

<auro-carousel label="Flight options" ref={this.centerCarouselRef}>
  {days.map((day, idx) => (
    <auro-pane
      key={day}
      date={`2021-10-${(day + 1).toString().padStart(2, 0)}`}
      selected={this.state.centerSelectedDay === idx ? true : undefined}
      onClick={({ target }) => {
        this.setState({centerSelectedDay: idx});
        this.centerCarouselRef.current.centerElement(target);
      }}>
    </auro-pane>
  ))}
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Events

#### scrollLeft

When the guest clicks the 'left' carousel button.

#### scrollRight

When the guest clicks the 'right' carousel button.

</auro-accordion>

### Slot Example

#### default

Used for all elements inside the scrolling carousel.

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
