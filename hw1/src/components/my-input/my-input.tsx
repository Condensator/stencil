import { Component, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: true,
})
export class MyInput {
@Event() valueChanged: EventEmitter<string>;
@State() value: string;

handleChange(event) {
  this.value = event.target.value;
  this.valueChanged.emit(event.target.value);
}

  render() {
    return (
        <label>
          Value:
          <input type="text" value={this.value} onInput={(event) => this.handleChange(event)} />
        </label>
    );
  }
}
