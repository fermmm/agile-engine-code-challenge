import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Api from '../../../api/tools/request';
import { Word } from '../../../api/types/types';

// @ts-ignore
import styles from './PanelSynonyms.scss';

export interface PropsPanelSynonyms {
   textToSearch: string;
   onSynonymClick(synonym: string): void;
}

export interface StatePanelSynonyms {
   synonymsFound: string[];
}

class PanelSynonyms extends Component<PropsPanelSynonyms, StatePanelSynonyms> {
   state: StatePanelSynonyms = {
      synonymsFound: null
   };

   componentDidUpdate(prevProps: PropsPanelSynonyms): void {
      if (prevProps.textToSearch !== this.props.textToSearch) {
         this.searchForSynoyms();
      }
   }

   render(): JSX.Element {
      const { synonymsFound }: StatePanelSynonyms = this.state;
      const { onSynonymClick }: PropsPanelSynonyms = this.props;

      return (
         <>
            <h2>Selected text synonyms:</h2>
            <div className={styles.resultsContainer}>
               {
                  (synonymsFound && synonymsFound.length > 0) ?
                     synonymsFound.map((word, i) =>
                        <button
                           onClick={() => onSynonymClick(word)}
                           key={i}
                        >
                           {word}
                        </button>
                     )
                  :
                     <div>
                        No synonyms found.
                     </div>
               }
            </div>
         </>
      );
   }

   async searchForSynoyms(): Promise<void> {
      const requestResult: Word[] = await Api.request({ url: `words?ml=${this.props.textToSearch}` }) as Word[];
      if (typeof requestResult === 'string') {
         alert('Error: ' + requestResult);
      }

      this.setState({
         synonymsFound: requestResult.map((x: Word) => x.word)
      });
   }
}

export default hot(module)(PanelSynonyms);