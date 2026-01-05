 import "server-only"
 const dictonaries = {
    en: () => import("./dictonaris/en.json").then((module) => module.default),
    bn: () => import("./dictonaris/bn.json").then((module) => module.default),

 }

 export const getDectonaries = async (local) => dictonaries[local]();