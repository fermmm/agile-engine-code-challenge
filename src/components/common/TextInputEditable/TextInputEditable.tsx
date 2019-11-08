import React, { Component, RefObject } from 'react';
import { hot } from 'react-hot-loader';
// @ts-ignore
import styles from './TextInputEditable.scss';

export interface SimpleComponentProps { 
   textReplacement: string;
   onSelectionChange(selectedText: string): void;
}
export interface SimpleComponentState { 
   selectionStartPos: number;
   selectionFinishPos: number;
   selectionString: string;
}

class TextInputEditable extends Component<SimpleComponentProps, SimpleComponentState> {
   state: SimpleComponentState = {
      selectionStartPos: null,
      selectionFinishPos: null,
      selectionString: null,
   };

   componentDidUpdate(prevProps: SimpleComponentProps): void {
      if (prevProps.textReplacement !== this.props.textReplacement) {
         this.replaceTextSelection(this.props.textReplacement);
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

   replaceTextSelection(newText: string): void {
      document.execCommand('insertText', false, newText);
   }
}

export default hot(module)(TextInputEditable);
