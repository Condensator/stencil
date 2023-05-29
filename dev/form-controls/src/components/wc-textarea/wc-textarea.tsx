import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'wc-textarea',
  styleUrl: 'wc-textarea.css',
  shadow: true,
})
export class WcTextarea {
@Prop() rows: number = 25;
@Prop() cols: number = 80;
@Prop() value: string = "String?";

  render() {
    return (
      <Host>
        <textarea rows={this.rows} cols={this.cols}>{this.value}</textarea>
      </Host>
    );
  }

}
