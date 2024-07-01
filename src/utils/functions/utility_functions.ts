//interfaces
import { IGame, IInput } from "@/utils/interfaces/types";

/**
 * 
 * @param url string
 * @returns Redirects to the given url
 */
export const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
};

/**
 * 
 * @param email string
 * @returns Returns true if the email is valid, false otherwise
 */

export const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
};

/**
 * 
 * @param amount number
 * @returns Returns the amount formatted as a money string (USD) (without decimals)
 */
export const formatMoney = (amount: number) => {
    return amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'}).replace(/\.\d{2}/, '');
}


/**
 * 
 * @returns Returns a string with a random 12-character ID
 */
export const generateRandomId = (): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 12; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};


/**
 * 
 * @param field name of field to which get the value from (e.g. 'email')
 * @param form form object from which to get the value from
 * @returns returns the value of the field from the form object
 */
export const getFormValue = (field: string, form: IInput[]): any => {
    const temp = form.find((input: IInput) => input.name === field);
    if(!temp) return null
    if(temp.type === 'mult' && temp.values) return temp.values;
    else if(temp.type === 'array' && temp.values) return temp.values.map((value : any) => value);
    else if(temp.type === 'switch' && temp.selected) return temp.selected;
    else return temp.value;
};

/**
 * @param form form object to clear
 * @return returns the form object with all fields cleared
 */
export const clearForm = (form: IInput[]) => {
    form.forEach((input: IInput) => {
        if(input.type === 'mult') input.values = [];
        else if(input.type === 'array') input.values = [];
        else if(input.type === 'switch') input.selected = false;
        else input.value = '';
    });
    return form;
}


/**
 * 
 * @param prediction array of games to calculate points for
 * @param result array of games with the actual results
 * @returns Returns an array of games with the points calculated
 */
export const calculatePoints = (prediction: IGame[], result: IGame[]): IGame[] => {
    let tempGames: IGame[] = []
    prediction.forEach((item: IGame, index: number) => {
        let points = 0
        if(item.type === 'round8') {
            if(item.winner === result[index].winner) points += 1
            if(item.country1Goals === result[index].country1Goals && item.country2Goals === result[index].country2Goals) points += 5
            else if (item.country1Goals === result[index].country1Goals || item.country2Goals === result[index].country2Goals) points += 2
        } else {
            if(item.winner === result[index].winner) {
                if(item.winner === 1) {
                    if(item.country1 === result[index].country1) points += 1
                } else if(item.winner === 2) {
                    if(item.country2 === result[index].country2) points += 1
                }
            }
        }

        tempGames.push({ ...item, points })
    })

    return tempGames
}