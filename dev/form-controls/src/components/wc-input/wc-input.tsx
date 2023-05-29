import { Component, Host, Prop, h } from '@stencil/core';
import { inputType } from '../types/import.types';

@Component({
  tag: 'wc-input',
  styleUrl: 'wc-input.css',
  shadow: true,
})
export class WcInput {
@Prop() type: inputType = "text";
@Prop() disabled: boolean = false;
@Prop() label: string = "My Label";

  render() { 
    return (
      <Host>
        <div class = "input">
          <label>{this.label}</label>
          <input name = {this.label} type = {this.type} disabled = {this.disabled}/>
        </div>
      </Host>
    );
  }

}
