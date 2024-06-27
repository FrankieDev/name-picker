import FullscreenIcon from '../icons/fullscreen-icon'
import SettingIcon from '../icons/settings-icon'
import GithubIcon from '../icons/github-icon'

function Header() {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '1rem'
    },
    github: {
      marginRight: 'auto'
    },
    controlGroup: {
      display: 'flex',
      gap: '1.5rem',
      padding: '5px 15px',
      borderRadius: '1rem',
      border: 'solid 1px #ffffff'
    },
    iconButton: {
      padding: '5px 15px',
      borderRadius: '1rem',
      border: 'solid 1px #ffffff',
      background: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center'
    }
  }

  console.log(styles.header)

  return (
    <div style={styles.header}>
      <div style={styles.github}>
        <a
          href='https://github.com/FrankieDev/name-picker'
          target='_blank'
          className='icon-button icon-button--small'
          style={styles.iconButton}
          id='github-button'
        >
          <GithubIcon style={{ fontSize: '1.4rem', display: 'inline' }} />{' '}
          <span>Revisa el codigo en GitHub</span>
        </a>
      </div>
      <div style={styles.controlGroup}>
        <button
          className='icon-button icon-button--small'
          id='fullscreen-button'
        >
          <FullscreenIcon />
        </button>
        <button className='icon-button icon-button--small' id='settings-button'>
          <SettingIcon />
        </button>
      </div>
    </div>
  )
}

export default Header
