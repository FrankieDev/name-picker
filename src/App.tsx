import './App.css'
import sunburst from './assets/images/sunburst.svg'
import Header from './components/header'
;(async () => {
  await import('./lib/app')
})()

function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <canvas
          className='confetti'
          id='confetti-canvas'
          width='1920'
          height='945'
        ></canvas>
        <div id='lucky-draw'>
          <div className='title'>Name Picker</div>
          <div className='slot'>
            <div className='slot__outer'>
              <div className='slot__inner'>
                <div className='slot__shadow'></div>
                <div className='reel' id='reel'></div>
              </div>
            </div>
            <div className='sunburst' id='sunburst'>
              <img src={sunburst} alt='sunburst' />
            </div>
          </div>
          <button className='solid-button' id='draw-button'>
            Draw
          </button>
        </div>
        <div className='settings' id='settings' style={{ display: 'none' }}>
          <div className='settings__panel' id='settings-panel'>
            <div className='settings__panel__group'>
              <h1 className='settings__title'>Settings</h1>
              <div className='input-group'>
                <label className='input-label' htmlFor='name-list'>
                  Name List
                </label>
                <textarea
                  className='input-field input-field--textarea'
                  rows={8}
                  placeholder='Separate each name by line break'
                  id='name-list'
                ></textarea>
              </div>
              <div className='input-group input-group--2-column'>
                <label className='input-label' htmlFor='remove-from-list'>
                  Remove winner from list
                </label>
                <label className='input--switch'>
                  <input
                    type='checkbox'
                    defaultChecked={true}
                    id='remove-from-list'
                  />
                  <span className='slider'></span>
                </label>
              </div>
              <div className='input-group input-group--2-column'>
                <label className='input-label' htmlFor='enable-sound'>
                  Enable sound effect
                </label>
                <label className='input--switch'>
                  <input
                    type='checkbox'
                    defaultChecked={true}
                    id='enable-sound'
                  />
                  <span className='slider'></span>
                </label>
              </div>
            </div>
            <div className='settings__panel__group'>
              <button className='solid-button solid-button' id='settings-save'>
                Save
              </button>
              <button
                className='solid-button solid-button--danger'
                id='settings-close'
              >
                Discard and close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
