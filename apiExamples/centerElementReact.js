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
