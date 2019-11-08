import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import RichTextInput from '../../common/RichTextInput/RichTextInput';
import PanelTextFormatting from '../../common/PanelTextFormatting/PanelTextFormatting';
import PanelSynonyms from '../../common/PanelSynonyms/PanelSynonyms';

// @ts-ignore
import styles from './MainPage.scss';

export interface PropsMainPage { }
export interface StateMainPage { 
   textSelected: string;
   textReplacement: string;
}

class MainPage extends Component<PropsMainPage, StateMainPage> {
   state: StateMainPage = {
      textSelected: null,
      textReplacement: null,
   };

   public render(): JSX.Element {
      const { textSelected, textReplacement }: StateMainPage  = this.state;

      return (
         <div className={styles.mainPageContainer}>
            <div className={styles.textEditorContainer}>
               <PanelTextFormatting 
                  textSelected={textSelected}
               />
               <RichTextInput 
                  textReplacement={textReplacement}
                  onSelectionChange={(t) => this.setState({textSelected: t})}
               />
            </div>
            <div className={styles.panelSynonymsContainer}>
               <PanelSynonyms 
                  textToSearch={textSelected} 
                  onSynonymClick={s => this.setState({textReplacement: s})}
               />
            </div>
         </div>
      );
   }
}

export default hot(module)(MainPage);