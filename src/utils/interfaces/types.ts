
/* <-------inputs-------> */
export interface IInput {
    name: string,
    label?: string,
    placeholder?: string,
    required?: boolean,
    variant: 'auth' | 'outlined' | 'filled' | 'transparent',
    colSpan?: string,
    type: string,
    file?: IFIle | null,
    files?: File[],
    value?: string | File,
    selected?: boolean,
    values?: string[],
    checkValue?: IChecklistItem,
    startIcon?: JSX.Element,
    icon?: JSX.Element,
    options?: IOption[]
    checkOptions?: IChecklistItem[],
    hidden?: boolean,
    contained?: boolean,
    fileTypes?: 'img' | 'pdf',
    isContract?: boolean,
    hasTitle?: boolean,
    hasDate?: boolean,
    readOnly?: boolean,
    hasStatusOptions?: boolean,
    description?: string,
    validateImg?: boolean,
    validatePdf?: boolean,
}

export interface IOption {
    value: string,
    label: string,
}

export interface IFilterOpt {
    label: string,
    id: 'remove' | 'person' | 'company' | 'title' | 'product' | 'payment' | 'question' | 'date' | 'password' | 'logout' | 'email' | 'role' | 'status' | 'phone'
}

export interface IChecklistItem {
    id: string;
    title: string;
}

/* <-------utils-------> */
export interface IUrl {
    url: string,
    title: string,
    icon?: JSX.Element,
    iconSelected?: JSX.Element,
    allowed: string[],
    items?: IUrl[]
}

export interface IBanner {
    path: string,
    title: string,
    //icon: JSX.Element,
    button?: string,
    buttonUrl?: string,
    goBack?: boolean,
    beadCrumbs?: IBeadCrumb[],
}

export interface IBeadCrumb {
    title: string,
    url: string,
}

export interface ITableItem {
    id: 'image' | 'text' | 'description' | 'status' | 'actions' | 'text_label' | 'select' | 'file_input',
}

/* <-------dashboard-------> */
export interface IFact {
    value: number,
    title: string,
    icon: JSX.Element,
    back: string
}

/* <-------tabs-------> */
export interface ITab {
  key: string,
  title: string,
  content?: JSX.Element,
  icon?: JSX.Element,
  status?: string,
  number?: string,
}

/* <-------files-------> */
export interface IFIle {
    file?: File | string,
    file_name?: string,
    file_url?: string,
    file_ref?: string,
    file_type?: string,
    file_title?: string,
    file_date?: string,
    is_active?: boolean,
    file_id?: string,
}

export interface IFileUpload {
    fileUrl: string;
    fileRef: string;
}

/* <-------users-------> */
export interface IUser {
    uid: string,
    mail: string,
    phone: string,
    name: string,
    nickname: string,
    hasPaid?: boolean,
    hasSelected?: boolean,
    data?: {
      round8Games: IGame[],
      round4Games: IGame[],
      round2Games: IGame[],
      finalGames: IGame[],
      responses: {
        more_goals: string,
        final_score: string,
        regular_time: string,
        extra_time: string,
        penalties: string,
      }
    },
    copamerica?: {
        hasPaid: boolean,
        hasSelected: boolean,
        data?: {
            round4Games: IGame[],
            round2Games: IGame[],
            thirdGames: IGame[],
            finalGames: IGame[],
            responses: {
                more_goals: string,
                final_score: string,
                regular_time: string,
                extra_time: string,
                penalties: string,
            }
        }
    }
}


// Interface for a game within a tournament
export interface IGame {
  num: number;
  date: string;
  time: string; // Could be a string formatted as 'HH:mm'
  country1: string;
  country1Goals?: number;
  country2: string;
  country2Goals?: number;
  played?: boolean;
  stadium: string;
  winner?: number; // 0 = tie, 1 = country1, 2 = country2
  winner1?: string;
  winner2?: string;
  type:  'round8' | 'round4' | 'round2' | 'third' | 'final',
  points?: number;
}

export interface IGameResults {
    round4Games: IGame[],
    round2Games: IGame[],
    thirdGames: IGame[],
    finalGames: IGame[],
}


// Interface for leaderboard positions
export interface ILeaderboardPos {
    uid: string,
    nickname: string,
    points: number,
    position: string,
    money: number,
}

export interface ILeaderboard {
    positions: ILeaderboardPos[],
    bolsa: number,
    lastUpdated: string,
}

// Interface for users (for Firebase Authentication)
export interface User {
  id: string;
  email: string;
  role: 'admin' | 'editor' | 'participant';
}

// Interface for teams
export interface ICountry {
    name: string;
    img: string;
}