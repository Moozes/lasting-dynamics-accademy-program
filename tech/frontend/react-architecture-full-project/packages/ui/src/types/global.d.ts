/* eslint-disable no-unused-vars */
// Global types

import { HTMLProps, SVGProps } from "react";
import { TOptionsBase } from "i18next";

type AnyObject<T = any> = Record<string, T>;
type AnyObjectWithId<T = any> = Record<string, T> & { id: string };
type AnyFunction = (...args: any[]) => any;

interface Window {
    console: AnyObject;
}

type TCommonGenericKeysObject<KeyType, ValueType> = { [Property in keyof KeyType]: ValueType };

export type HTMLDivProps = HTMLProps<HTMLDivElement>;
export type HTMLSVGProps = SVGProps<SVGSVGElement>;
export type TranslationFunction = (
    key: string | string[],
    options?: (TOptionsBase & object & { defaultValue: string }) | undefined
) => string;
