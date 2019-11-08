import React, { Component, RefObject } from 'react';
import { hot } from 'react-hot-loader';
// @ts-ignore
import styles from './RichTextInput.scss';

export interface PropsRichTextInput { 
   textReplacement: string;
   onSelectionChange(selectedText: string): void;
}
export interface StateRichTextInput { 
   selectionStartPos: number;
   selectionFinishPos: number;
   selectionString: string;
}

class RichTextInput extends Component<PropsRichTextInput, StateRichTextInput> {
   state: StateRichTextInput = {
      selectionStartPos: null,
      selectionFinishPos: null,
      selectionString: null,
   };

   componentDidUpdate(prevProps: PropsRichTextInput): void {
      if (prevProps.textReplacement !== this.props.textReplacement) {
         this.replaceSelectedText(this.props.textReplacement);
      }
   }

   render(): JSX.Element {
      return (
         <div
            contentEditable
            suppressContentEditableWarning
            onSelect={() => this.saveTextSelection()}
            className={styles.textInput}
         />
      );
   }

   saveTextSelection(): void {
      const selection: Selection = window.getSelection();
      const selectionString: string = selection.toString();
      const selectionStartPos: number = Math.min(selection.anchorOffset, selection.focusOffset);
      const selectionFinishPos: number = Math.max(selection.anchorOffset, selection.focusOffset);

      if (
         selectionStartPos !== this.state.selectionStartPos || 
         selectionFinishPos !== this.state.selectionFinishPos
      ) {
         this.setState({selectionStartPos, selectionFinishPos, selectionString});
         this.props.onSelectionChange(selectionString);
      }
   }

   replaceSelectedText(newText: string): void {
      document.execCommand('insertText', false, newText);
   }
}

export default hot(module)(RichTextInput);
