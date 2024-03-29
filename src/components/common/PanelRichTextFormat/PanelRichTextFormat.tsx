import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// @ts-ignore
import styles from './PanelRichTextFormat.scss';

export interface PropsPanelRichTextFormat {
   textSelected: string;
}

class PanelRichTextFormat extends Component<PropsPanelRichTextFormat> {
   commandsButtons: FormatCommand[] = [
      {
         command: 'bold',
         buttonContent: <b>B</b>
      },
      {
         command: 'italic',
         buttonContent: <i>I</i>
      },
      {
         command: 'underline',
         buttonContent: <u>U</u>
      },
   ];

   render(): JSX.Element {
      return (
         <div className={styles.controlPanel}>
            <div className={styles.formatActions}>
               {
                  this.commandsButtons.map((button, i) =>
                     <button
                        onClick={() => {
                           document.execCommand(button.command);
                           this.forceUpdate();
                        }}
                        className={`
                           ${styles.formatActionButton} 
                           ${
                              document.queryCommandState(button.command) &&
                                 styles.formatActionButtonActivated
                           }
                        `}
                        key={i}
                     >
                        {button.buttonContent}
                     </button>
                  )
               }
            </div>
         </div>
      );
   }
}

interface FormatCommand {
   command: string;
   buttonContent: JSX.Element | string;
}

export default hot(module)(PanelRichTextFormat);