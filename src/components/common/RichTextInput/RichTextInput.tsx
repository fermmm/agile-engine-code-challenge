import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// @ts-ignore
import styles from './RichTextInput.scss';

export interface PropsRichTextInput { 
   textReplacement: string;
   onSelectionChange(selectedText: string): void;
}

class RichTextInput extends Component<PropsRichTextInput> {
   componentDidUpdate(prevProps: PropsRichTextInput): void {
      if (prevProps.textReplacement !== this.props.textReplacement) {
         document.execCommand('insertText', false, this.props.textReplacement);
      }
   }

   render(): JSX.Element {
      const { onSelectionChange }: PropsRichTextInput = this.props;

      return (
         <div
            contentEditable
            suppressContentEditableWarning
            onSelect={() => onSelectionChange(window.getSelection().toString())}
            className={styles.textInput}
         />
      );
   }
}

export default hot(module)(RichTextInput);
