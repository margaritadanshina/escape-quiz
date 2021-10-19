import React from 'react';
import { Button } from '../styled-components'


export default function Start ({startQuiz}) {
    return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p>
            Did You Escape from NY or LA?
          </p>
          <Button onClick={startQuiz}>
            Start Quiz
          </Button>  
        </div>
      </div>
    </div>
    )
}

