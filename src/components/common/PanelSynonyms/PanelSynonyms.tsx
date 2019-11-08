import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Api from '../../../api/tools/request';

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

   async componentDidUpdate(prevProps: PropsPanelSynonyms): Promise<void> {
      if (prevProps.textToSearch !== this.props.textToSearch) {
         this.setState({synonymsFound: await Api.requestSynonyms(this.props.textToSearch)});
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
}

export default hot(module)(PanelSynonyms);