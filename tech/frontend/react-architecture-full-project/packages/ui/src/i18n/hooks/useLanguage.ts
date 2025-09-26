import i18nInstance from "../instance";

const useLanguage = () => {
    return (
        i18nInstance.language.split("-")[0] || (typeof window !== "undefined" && window.localStorage.i18nextLng) || "en"
    );
};

export default useLanguage;
