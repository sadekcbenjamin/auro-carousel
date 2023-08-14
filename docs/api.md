# auro-carousel

The auro-carousel component displays a group of elements in a scrollable container.

## Properties

| Property         | Attribute        | Type      | Default | Description                                      |
|------------------|------------------|-----------|---------|--------------------------------------------------|
| `centerSelected` | `centerSelected` | `String`  |         | Apply to outer auro-carousel element to automatically center the selected node on UI render. |
| `displayArrows`  | `displayArrows`  | `Boolean` |         | Forces left and right navigation to stick in DOM regardless of content width |
| `label`          | `label`          | `String`  |         | The accessible name for the carousel. Logs a console warning if not set. |
| `scrollDistance` | `scrollDistance` | `Number`  | 300     | How many pixels to scroll the carousel when the shoulder buttons are triggered. |

## Methods

| Method                  | Type                  | Description                                      |
|-------------------------|-----------------------|--------------------------------------------------|
| `actionOnChildrenReady` | `(): void`            | Function handler for anything that happens when all its children is ready. |
| `centerElement`         | `(el: Element): void` | Centers the given element inside the carousel.<br /><br />**el**: The element to center inside the carousel. Must be a descendant of the carousel. |
| `scrollCarousel`        | `(num: number): void` | Scrolls the carousel by the given amount.<br /><br />**num**: The number of pixels to scroll the carousel by. Positive scrolls to the<br />right, negative scrolls to the left. |
| `scrollToSelected`      | `(): void`            | Scroll to the first child component that have 'selected' attribute. |

## Events

| Event         | Type               | Description                                      |
|---------------|--------------------|--------------------------------------------------|
| `scrollLeft`  | `CustomEvent<any>` | when the guest clicks the 'left' carousel button |
| `scrollRight` | `CustomEvent<any>` | when the guest clicks the 'right' carousel button |

## Slots

| Name | Description                  |
|------|------------------------------|
|      | the elements in the carousel |
