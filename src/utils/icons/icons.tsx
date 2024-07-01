export function PersonIcon({color}: {color: string}) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="duoicon duoicon-user" 
            style={{color: color}}>
                <path 
                    fill="currentColor" 
                    d="M12 13c2.396 0 4.575.694 6.178 1.671.8.49 1.484 1.065 1.978 1.69.486.616.844 1.352.844 2.139 0 .845-.411 1.511-1.003 1.986-.56.45-1.299.748-2.084.956-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C3.41 20.01 3 19.345 3 18.5c0-.787.358-1.523.844-2.139.494-.625 1.177-1.2 1.978-1.69C7.425 13.694 9.605 13 12 13Z" 
                    className="duoicon-primary-layer">
                </path>
                <path 
                    fill="currentColor" 
                    d="M12 2c3.849 0 6.255 4.167 4.33 7.5A5 5 0 0 1 12 12c-3.849 0-6.255-4.167-4.33-7.5A5 5 0 0 1 12 2Z" 
                    className="duoicon-secondary-layer" opacity=".3">
                </path>
            </svg>
    )
}

export function NoteIcon({color}: {color: string}) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="duoicon duoicon-clipboard" 
            style={{color: color}}>
                <path 
                    fill="currentColor" d="M7 3v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3h1a2 2 0 0 1 2 2v11a6 6 0 0 1-6 6H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1Z" 
                    className="duoicon-secondary-layer" opacity=".3">
                </path>
                <path 
                    fill="currentColor" 
                    d="M14 2a1 1 0 0 1 .117 1.993L14 4h-4a1 1 0 0 1-.117-1.993L10 2h4Zm1 8H9a1 1 0 0 0-.117 1.993L9 12h6a1 1 0 1 0 0-2Zm-3 4H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Z" 
                    className="duoicon-primary-layer">
                </path>
            </svg>
    )
}

export function DashboardIcon({color}: {color: string}) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" height="30" 
            viewBox="0 0 24 24" 
            className="duoicon duoicon-dashboard" 
            style={{color: color}}
        >
            <path 
                fill="currentColor" fillRule="evenodd" 
                d="M19 11a2 2 0 0 1 1.995 1.85L21 13v6a2 2 0 0 1-1.85 1.995L19 21h-4a2 2 0 0 1-1.995-1.85L13 19v-6a2 2 0 0 1 1.85-1.995L15 11h4Zm0-8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4Z" 
                className="duoicon-secondary-layer" opacity=".3">
            </path>
            <path 
                fill="currentColor" fillRule="evenodd" 
                d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4Z" className="duoicon-primary-layer"></path><path fill="currentColor" fillRule="evenodd" d="M9 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4Z" 
                className="duoicon-secondary-layer" opacity=".3">
            </path>
        </svg>
    )
}

export function MoonIcon({color}: {color: string}) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" height="30" 
            viewBox="0 0 24 24" 
            className="duoicon duoicon-moon-stars" 
            style={{color: color}}
        >
            <path 
                fill="currentColor" 
                d="M12.477 4.546A1.01 1.01 0 0 1 13.5 3.127c.025.002.049.006.074.01 6.821 1.213 9.771 9.356 5.31 14.656-4.462 5.301-12.988 3.784-15.348-2.73a9.012 9.012 0 0 1-.399-1.489 1.01 1.01 0 0 1 1.339-1.125c.024.008.047.018.07.028 4.214 1.892 8.895-1.488 8.426-6.083a5.998 5.998 0 0 0-.495-1.848Z" className="duoicon-secondary-layer" opacity=".3">
            </path>
            <path fill="currentColor" d="M8.397 2.857c.04-.09.166-.09.206 0l.102.222a5.191 5.191 0 0 0 1.97 2.172l.157.092c.073.04.075.144.003.187l-.003.002-.158.092a5.193 5.193 0 0 0-2.07 2.394.113.113 0 0 1-.195.022c-.004-.007-.009-.014-.012-.022l-.102-.222a5.191 5.191 0 0 0-1.97-2.172l-.158-.092a.108.108 0 0 1-.003-.187l.003-.002.158-.092a5.191 5.191 0 0 0 1.97-2.172l.102-.222ZM5.565 7.716l.064.14a3.257 3.257 0 0 0 1.237 1.363l.1.059a.068.068 0 0 1 0 .118l-.1.058a3.26 3.26 0 0 0-1.237 1.364l-.064.14a.07.07 0 0 1-.122.013.057.057 0 0 1-.008-.013l-.064-.14a3.26 3.26 0 0 0-1.237-1.364l-.1-.058a.068.068 0 0 1 0-.118l.1-.059c.534-.326.964-.8 1.236-1.364l.064-.14a.07.07 0 0 1 .122-.013.057.057 0 0 1 .008.013l.001.001Z" 
                className="duoicon-primary-layer">
            </path>
        </svg>
    )
}

export function SunIcon({color}: {color: string}) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" height="30" viewBox="0 0 24 24" 
            className="duoicon duoicon-sun" 
            style={{color: color}}
        >
            <path 
                fill="currentColor" 
                d="M12 18.5a1.5 1.5 0 0 1 1.493 1.356L13.5 20v1a1.5 1.5 0 0 1-2.993.144L10.5 21v-1a1.5 1.5 0 0 1 1.5-1.5Zm0-17a1.5 1.5 0 0 1 1.493 1.356L13.5 3v1a1.5 1.5 0 0 1-2.993.144L10.5 4V3A1.5 1.5 0 0 1 12 1.5Zm5.303 3.075a1.5 1.5 0 0 1 2.225 2.008l-.103.114-.707.707a1.5 1.5 0 0 1-2.225-2.008l.103-.114.707-.707Zm-12.728 0a1.5 1.5 0 0 1 2.008-.103l.114.103.707.707a1.5 1.5 0 0 1-2.008 2.225l-.114-.103-.707-.707a1.5 1.5 0 0 1 0-2.122ZM21 10.5a1.5 1.5 0 0 1 .144 2.993L21 13.5h-1a1.5 1.5 0 0 1-.144-2.993L20 10.5h1Zm-17 0a1.5 1.5 0 0 1 .144 2.993L4 13.5H3a1.5 1.5 0 0 1-.144-2.993L3 10.5h1Z" 
                className="duoicon-primary-layer">
            </path>
            <path 
                fill="currentColor" 
                d="M12 6c4.619 0 7.506 5 5.196 9A6 6 0 0 1 12 18c-4.619 0-7.506-5-5.196-9A6 6 0 0 1 12 6Z" className="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M5.282 16.596a1.5 1.5 0 0 1 2.225 2.008l-.103.114-.707.707a1.5 1.5 0 0 1-2.225-2.008l.103-.114.707-.707Zm11.314 0a1.5 1.5 0 0 1 2.008-.103l.114.103.707.707a1.5 1.5 0 0 1-2.008 2.225l-.114-.103-.707-.707a1.5 1.5 0 0 1 0-2.122Z" 
                className="duoicon-primary-layer">
            </path>
        </svg>
    )
}

export function ParticipantIcon({color}: {color: string}) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" height="30" viewBox="0 0 24 24"
            className="duoicon duoicon-user-card" 
            style={{color: color}}
        >
            <path 
                fill="currentColor" 
                fillRule="evenodd" 
                d="M14.447 1.106a1 1 0 0 1 .447 1.341L14.118 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3.882l-.776-1.553a1 1 0 0 1 1.788-.894L12 3.763l1.106-2.21a1 1 0 0 1 1.341-.447Z" 
                className="duoicon-secondary-layer" 
                opacity=".3">
            </path>
            <path 
                fill="currentColor" 
                fillRule="evenodd" 
                d="M12 9c-1.54 0-2.502 1.667-1.732 3 .357.619 1.017 1 1.732 1 1.54 0 2.502-1.667 1.732-3A1.999 1.999 0 0 0 12 9Zm1.5 5h-3a2.5 2.5 0 0 0-2.495 2.336L8 16.5v.5a1 1 0 0 0 1.993.117L10 17v-.5a.5.5 0 0 1 .41-.492L10.5 16h3a.5.5 0 0 1 .492.41l.008.09v.5a1 1 0 0 0 1.993.117L16 17v-.5a2.5 2.5 0 0 0-2.336-2.495L13.5 14Z" 
                className="duoicon-primary-layer">
            </path>
        </svg>
    )
}

export function IdCardIcon({color}: {color: string}) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" height="30" 
            viewBox="0 0 24 24" 
            className="duoicon duoicon-id-card" 
            style={{color: color}}
        >
            <path 
                fill="currentColor" 
                d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16Z" 
                className="duoicon-secondary-layer" 
                opacity=".3">
            </path>
            <path 
                fill="currentColor" 
                d="M10 9v2H8V9h2Zm7 2h-3a1 1 0 0 0-.117 1.993L14 13h3a1 1 0 0 0 .117-1.993L17 11Z" 
                className="duoicon-primary-layer">
            </path>
            <path 
                fill="currentColor" 
                d="M10 7H8a2 2 0 0 0-1.995 1.85L6 9v2a2 2 0 0 0 1.85 1.995L8 13h2a2 2 0 0 0 1.995-1.85L12 11V9a2 2 0 0 0-1.85-1.995L10 7Zm7 8H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2Z" 
                className="duoicon-primary-layer">
            </path>
        </svg>
    )
}

export function CalendarIcon({color}: {color: string}) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" height="30" 
            viewBox="0 0 24 24" 
            className="duoicon duoicon-calendar" 
            style={{color: color}}
        >
            <path 
                fill="currentColor" 
                d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7h18Z" 
                className="duoicon-secondary-layer" 
                opacity=".3">
            </path>
            <path 
                fill="currentColor" 
                d="M16 3a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v3H3V7a2 2 0 0 1 2-2h2V4a1 1 0 1 1 2 0v1h6V4a1 1 0 0 1 1-1Z" 
                className="duoicon-primary-layer">
            </path>
        </svg>
    )
}

export const EditDocumentIcon = (props: any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1.4em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1.4em"
    {...props}
  >
    <path
      d="M15.48 3H7.52C4.07 3 2 5.06 2 8.52v7.95C2 19.94 4.07 22 7.52 22h7.95c3.46 0 5.52-2.06 5.52-5.52V8.52C21 5.06 18.93 3 15.48 3Z"
      fill="currentColor"
      opacity={0.4}
    />
    <path
      d="M21.02 2.98c-1.79-1.8-3.54-1.84-5.38 0L14.51 4.1c-.1.1-.13.24-.09.37.7 2.45 2.66 4.41 5.11 5.11.03.01.08.01.11.01.1 0 .2-.04.27-.11l1.11-1.12c.91-.91 1.36-1.78 1.36-2.67 0-.9-.45-1.79-1.36-2.71ZM17.86 10.42c-.27-.13-.53-.26-.77-.41-.2-.12-.4-.25-.59-.39-.16-.1-.34-.25-.52-.4-.02-.01-.08-.06-.16-.14-.31-.25-.64-.59-.95-.96-.02-.02-.08-.08-.13-.17-.1-.11-.25-.3-.38-.51-.11-.14-.24-.34-.36-.55-.15-.25-.28-.5-.4-.76-.13-.28-.23-.54-.32-.79L7.9 10.72c-.35.35-.69 1.01-.76 1.5l-.43 2.98c-.09.63.08 1.22.47 1.61.33.33.78.5 1.28.5.11 0 .22-.01.33-.02l2.97-.42c.49-.07 1.15-.4 1.5-.76l5.38-5.38c-.25-.08-.5-.19-.78-.31Z"
      fill="currentColor"
    />
  </svg>
);

export const DeleteDocumentIcon = (props: any )=> (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1.4em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1.4em"
    {...props}
  >
    <path
      d="M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82Z"
      fill="currentColor"
    />
    <path
      d="M19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95Z"
      fill="currentColor"
      opacity={0.399}
    />
    <path
      clipRule="evenodd"
      d="M9.58 17a.75.75 0 0 1 .75-.75h3.33a.75.75 0 0 1 0 1.5h-3.33a.75.75 0 0 1-.75-.75ZM8.75 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
