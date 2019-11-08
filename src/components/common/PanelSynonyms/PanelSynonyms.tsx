import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// @ts-ignore
import styles from './PanelSynonyms.scss';

export interface PropsPanelSynonyms {
   originalText: string;
   synonyms: string[];
   onSynonymClick(synonym: string): void;
}

class PanelSynonyms extends Component<PropsPanelSynonyms> {
   render(): JSX.Element {
      const { onSynonymClick, synonyms, originalText }: PropsPanelSynonyms = this.props;

      return (
         <>
            <h2>Selected text synonyms:</h2>
            <div className={styles.resultsContainer}>
               {
                  (originalText && synonyms && synonyms.length > 0) ?
                     synonyms.map((word, i) =>
                        <button
                           onClick={() => onSynonymClick(word)}
                           key={i}
                        >
                           {word}
                        </button>
                     )
                  :
                     <div>
                        {originalText ? 'No synonyms found' : 'No text selected'}
                     </div>
               }
            </div>
         </>
      );
   }
}

export default hot(module)(PanelSynonyms);