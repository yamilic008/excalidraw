import { Excalidraw, MainMenu } from '@excalidraw/excalidraw';
import React from 'react';
import './App.css';

const App: React.FC = () => {
  
  
  return (
    <>
      <div className="Excalisdraw">
        <Excalidraw langCode='es-ES'>
          <MainMenu>
            <MainMenu.DefaultItems.LoadScene/>
            <MainMenu.DefaultItems.Export/>
            <MainMenu.DefaultItems.SaveToActiveFile/>
            <MainMenu.DefaultItems.SaveAsImage/>
            <MainMenu.DefaultItems.ClearCanvas/>
            <MainMenu.DefaultItems.Help/>
            <MainMenu.DefaultItems.ToggleTheme/>
            <MainMenu.DefaultItems.ChangeCanvasBackground/>
            YIC
          </MainMenu>
        </Excalidraw>
      </div>
    </>
  );
};

export default App;
