import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import RichTextInput from '../../common/RichTextInput/RichTextInput';
import PanelRichTextFormat from '../../common/PanelRichTextFormat/PanelRichTextFormat';
import PanelSynonyms from '../../common/PanelSynonyms/PanelSynonyms';
import Api from '../../../api/tools/request';

// @ts-ignore
import styles from './MainPage.scss';

export interface PropsMainPage { }
export interface StateMainPage { 
   textSelected: string;
   synonyms: string[];
   textReplacement: string;
}

class MainPage extends Component<PropsMainPage, StateMainPage> {
   state: StateMainPage = {
      textSelected: null,
      textReplacement: null,
      synonyms: null
   };

   public render(): JSX.Element {
      const { textSelected, textReplacement, synonyms }: StateMainPage  = this.state;

      return (
         <div className={styles.mainPageContainer}>
            <div className={styles.textEditorContainer}>
               <PanelRichTextFormat 
                  textSelected={textSelected}
               />
               <RichTextInput 
                  textReplacement={textReplacement}
                  onSelectionChange={async t => {
                     this.setState({textSelected: t, synonyms: null});
                     t && this.setState({synonyms: await Api.requestSynonyms(t)});
                  }}
               />
            </div>
            <div className={styles.panelSynonymsContainer}>
               <PanelSynonyms
                  originalText={textSelected}
                  synonyms={synonyms} 
                  onSynonymClick={s => this.setState({textReplacement: s})}
               />
            </div>
         </div>
      );
   }
}

export default hot(module)(MainPage);