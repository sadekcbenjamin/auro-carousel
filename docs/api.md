# auro-carousel

auro-carousel displays a group of elements in a scrollable container.

## Properties

| Property         | Attribute        | Type      | Default | Description                                      |
|------------------|------------------|-----------|---------|--------------------------------------------------|
| `displayArrows`  | `displayArrows`  | `Boolean` |         | Forces left and right navigation to stick in DOM regardless of content width |
| `label`          | `label`          | `String`  |         | The accessible name for the carousel. Logs a console warning if not set. |
| `scrollDistance` | `scrollDistance` | `Number`  | 300     | How many pixels to scroll the carousel when the shoulder buttons are triggered. |

## Methods

| Method           | Type                  | Description                                      |
|------------------|-----------------------|--------------------------------------------------|
| `scrollCarousel` | `(num: number): void` | Scrolls the carousel by the given amount.<br /><br />**num**: the number of pixels to scroll the carousel by. Positive scrolls to the<br />right, negative scrolls to the left. |

## Slots

| Name | Description                  |
|------|------------------------------|
|      | the elements in the carousel |
