import { atom } from "nanostores";

export const $isEnglish = atom(false)

export function changeLanguage() {
    $isEnglish.set(!$isEnglish)
}