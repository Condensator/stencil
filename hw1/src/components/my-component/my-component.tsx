import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Prop() value: string;

  render() {
    return <div>The value is {this.value}</div>;
  }
}
